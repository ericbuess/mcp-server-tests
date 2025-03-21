/**
 * MCP Super Server - Minimal Implementation
 * 
 * This implements a Model Context Protocol server using built-in Node.js
 * modules for stdio transport, without relying on the SDK.
 */

import * as readline from 'readline';
import { randomUUID } from 'crypto';

// Create a mock WebSocket feed
import { startMockWsFeed } from './mockWs.js';

// ==================== SERVER IMPLEMENTATION ====================

class MCPServer {
  private messageHandlers: Map<string, (params: any) => Promise<any>> = new Map();
  private nextRequestId = 1;
  private stdinReader: readline.Interface;

  constructor(
    private serverInfo = {
      name: "mcp-super-server",
      version: "1.0.0"
    }
  ) {
    // Set up stdio handling
    this.stdinReader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    // Handle incoming messages
    this.stdinReader.on('line', (line) => {
      try {
        const message = JSON.parse(line);
        this.handleIncomingMessage(message);
      } catch (error) {
        console.error('[MCP SERVER] Error parsing message:', error);
      }
    });

    // Initialize default request handlers
    this.initializeHandlers();
  }

  private async handleIncomingMessage(message: any) {
    if (message.id && message.method) {
      // This is a request
      const handler = this.messageHandlers.get(message.method);
      if (handler) {
        try {
          const result = await handler(message.params || {});
          this.sendResponse(message.id, result);
        } catch (error: any) {
          this.sendErrorResponse(message.id, error.message || 'Unknown error');
        }
      } else {
        this.sendErrorResponse(message.id, `Method not implemented: ${message.method}`);
      }
    }
  }

  // Register a message handler
  public setRequestHandler(method: string, handler: (params: any) => Promise<any>) {
    this.messageHandlers.set(method, handler);
  }

  // Send a response
  private sendResponse(id: string | number, result: any) {
    const response = { id, result };
    process.stdout.write(JSON.stringify(response) + '\n');
  }

  // Send an error response
  private sendErrorResponse(id: string | number, message: string) {
    const response = {
      id,
      error: {
        message
      }
    };
    process.stdout.write(JSON.stringify(response) + '\n');
  }

  // Send a notification (no response expected)
  public sendNotification(method: string, params: any) {
    const notification = { jsonrpc: '2.0', method, params };
    process.stdout.write(JSON.stringify(notification) + '\n');
  }

  // Send a logging message
  public sendLoggingMessage(level: 'info' | 'warning' | 'error', data: any) {
    this.sendNotification('notifications/logging', {
      level,
      data
    });
  }

  // Initialize all the MCP request handlers
  private initializeHandlers() {
    // ==================== INITIALIZE ====================
    this.setRequestHandler('initialize', async (params) => {
      console.log('[MCP SERVER] Initialize called with params:', params);
      return {
        serverInfo: this.serverInfo,
        capabilities: {
          tools: {},
          resources: {},
          prompts: {},
          roots: {},
          logging: {},
          sampling: {}
        }
      };
    });

    // ==================== TOOLS ====================
    this.setRequestHandler('tools/list', async () => {
      return {
        tools: [
          {
            name: "quickEcho",
            description: "Echoes a text back to you",
            inputSchema: {
              type: "object",
              properties: { text: { type: "string" } },
              required: ["text"]
            }
          },
          {
            name: "longRunningTool",
            description: "Simulates a multi-step process, sending partial updates",
            inputSchema: {
              type: "object",
              properties: {
                steps: { type: "number" }
              },
              required: []
            }
          }
        ]
      };
    });

    this.setRequestHandler('tools/call', async (params) => {
      const { name, arguments: args } = params;
      
      if (name === "quickEcho") {
        const txt = args.text ?? "";
        return {
          isError: false,
          content: [{ type: "text", text: `Echo: ${txt}` }]
        };
      }
      
      if (name === "longRunningTool") {
        // We'll run a simulated multi-step process with partial updates
        const steps = args.steps || 5;
        const progressToken = randomUUID();
        
        for (let i = 1; i <= steps; i++) {
          // Send a progress notification
          this.sendNotification('notifications/tools/progress', {
            toolName: "longRunningTool",
            token: progressToken,
            message: `Step ${i} of ${steps}...`,
            progress: i / steps,
            currentStep: i,
            totalSteps: steps
          });
          
          // Send a logging message for each step
          this.sendLoggingMessage('info', `longRunningTool: completed step ${i} of ${steps}`);
          
          // Simulate some processing time
          await new Promise(r => setTimeout(r, 1000));
        }
        
        // Return final result
        return {
          isError: false,
          content: [{ type: "text", text: `Done after ${steps} steps.` }]
        };
      }
      
      // Default if not recognized:
      return {
        isError: true,
        content: [{ type: "text", text: `Unrecognized tool: ${name}` }]
      };
    });

    // ==================== RESOURCES ====================
    this.setRequestHandler('resources/list', async () => {
      return {
        resources: [
          {
            uri: "mock://static_resource",
            name: "Static Resource",
            mimeType: "text/plain"
          },
          {
            uri: "mock://live_data",
            name: "Live Data Resource",
            mimeType: "text/plain"
          }
        ]
      };
    });

    this.setRequestHandler('resources/read', async (params) => {
      const { uri } = params;
      if (uri === "mock://static_resource") {
        return {
          contents: [
            { uri, mimeType: "text/plain", text: "Hello from a static resource!" }
          ]
        };
      } else if (uri === "mock://live_data") {
        return {
          contents: [
            { uri, mimeType: "text/plain", text: "Live data resource, subscribe for updates." }
          ]
        };
      } else {
        throw new Error(`Resource not found: ${uri}`);
      }
    });

    this.setRequestHandler('resources/subscribe', async (params) => {
      const { uri } = params;
      console.log(`[MCP SERVER] Subscribed to resource: ${uri}`);
      this.sendLoggingMessage('info', `Client subscribed to resource: ${uri}`);
      return {};
    });

    this.setRequestHandler('resources/unsubscribe', async (params) => {
      const { uri } = params;
      console.log(`[MCP SERVER] Unsubscribed from resource: ${uri}`);
      this.sendLoggingMessage('info', `Client unsubscribed from resource: ${uri}`);
      return {};
    });

    // ==================== PROMPTS ====================
    this.setRequestHandler('prompts/list', async () => {
      return {
        prompts: [
          {
            name: "promptHello",
            description: "Returns a simple greeting prompt",
            arguments: []
          },
          {
            name: "promptQuestion",
            description: "Returns a question-based prompt",
            arguments: []
          }
        ]
      };
    });

    this.setRequestHandler('prompts/get', async (params) => {
      const { name } = params;
      if (name === "promptHello") {
        return {
          messages: [
            { role: "assistant", content: { type: "text", text: "Hello from promptHello!" } }
          ]
        };
      } else if (name === "promptQuestion") {
        return {
          messages: [
            { role: "assistant", content: { type: "text", text: "What's on your mind?" } }
          ]
        };
      }
      throw new Error(`Prompt not found: ${name}`);
    });

    // ==================== ROOTS ====================
    this.setRequestHandler('roots/add', async (params) => {
      console.log("[MCP SERVER] Root add =>", params);
      this.sendLoggingMessage('info', `Root added: ${JSON.stringify(params)}`);
      return {};
    });
    
    this.setRequestHandler('roots/remove', async (params) => {
      console.log("[MCP SERVER] Root remove =>", params);
      this.sendLoggingMessage('info', `Root removed: ${JSON.stringify(params)}`);
      return {};
    });

    // ==================== SAMPLING ====================
    this.setRequestHandler('sampling/createMessage', async (params) => {
      console.log("[MCP SERVER] sampling/createMessage =>", params);
      this.sendLoggingMessage('info', `Sampling request received: ${JSON.stringify(params)}`);
      
      // Return a mock completion
      return {
        model: "mock-model",
        role: "assistant",
        stopReason: "endTurn",
        content: {
          type: "text",
          text: "This is a mock sampling completion!"
        }
      };
    });
  }

  // Start the server and set up the mock WebSocket feed for live data
  public start() {
    // Initial logging message
    this.sendLoggingMessage('info', "Server has started successfully.");
    console.log("[MCP SERVER] Up & running on stdio!");
    
    // Start the mock WebSocket feed for streaming resources
    startMockWsFeed((channel, data) => {
      // Send resource update notifications
      this.sendNotification('notifications/resources/updated', {
        uri: "mock://live_data",
        contents: [
          {
            uri: "mock://live_data",
            mimeType: "text/plain",
            text: `[${channel}] => ${data}`
          }
        ]
      });
      
      // Also send logging messages
      this.sendLoggingMessage('info', `Received feed from ${channel}: ${data}`);
    });
  }
}

// ==================== MAIN ====================

// Start the server
const server = new MCPServer();
server.start();

process.on('uncaughtException', (err) => {
  console.error('[MCP SERVER] Uncaught exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('[MCP SERVER] Unhandled rejection:', reason);
});