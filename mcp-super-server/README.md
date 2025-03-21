# MCP Super Server

A comprehensive Model Context Protocol (MCP) server implementation that demonstrates all MCP features for integration with Claude Desktop.

## Features

- **Full MCP Feature Set**:
  - Tools (including quick tools and long-running tools with progress updates)
  - Resources (static and live with subscription support)
  - Prompts
  - Roots
  - Logging
  - Sampling

- **Stdio Transport** for local integration with Claude Desktop.

- **Live Updates** via a mock WebSocket feed to demonstrate resource subscriptions.

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/mcp-super-server.git
cd mcp-super-server

# Install dependencies
npm install

# Build the project
npm run build
```

### Running the Server

This server is designed to be run by Claude Desktop. It uses the Stdio transport for communication.

## Connecting to Claude Desktop

Add the following in your `claude_desktop_config.json` (usually at `~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "mcp-super-server": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/mcp-super-server/dist/server.js"]
    }
  }
}
```

Replace `/ABSOLUTE/PATH/TO` with the actual path to your project directory.

Then restart Claude Desktop.

## Implementation Notes

This server is built without using the MCP SDK, instead implementing the protocol directly over stdio. This approach:

1. Demonstrates the core MCP protocol concepts
2. Shows how to build an MCP server from scratch
3. Provides a simpler dependency structure

## Testing Features

### Tools

- Try the `quickEcho` tool to echo a message.
- Use the `longRunningTool` tool to see progress updates as it executes a multi-step process.

### Resources

- View the static resource at `mock://static_resource`.
- Subscribe to the live resource at `mock://live_data` to see real-time updates.

### Prompts

- Try the `promptHello` and `promptQuestion` prompts.

### Logging

Check the Claude logs at `~/Library/Logs/Claude/` to see server logs and notifications.

## License

ISC