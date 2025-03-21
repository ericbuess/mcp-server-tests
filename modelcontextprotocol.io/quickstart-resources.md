├── .gitignore
├── LICENSE
├── README.md
├── mcp-client-python
    ├── .python-version
    ├── README.md
    ├── client.py
    ├── pyproject.toml
    └── uv.lock
├── mcp-client-typescript
    ├── .env.example
    ├── .gitignore
    ├── README.md
    ├── index.ts
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json
├── weather-server-python
    ├── .python-version
    ├── README.md
    ├── pyproject.toml
    ├── uv.lock
    └── weather.py
└── weather-server-typescript
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── src
        └── index.ts
    └── tsconfig.json


/.gitignore:
--------------------------------------------------------------------------------
 1 | build/
 2 | 
 3 | # Node-generated files
 4 | node_modules/
 5 | 
 6 | # Python-generated files
 7 | __pycache__/
 8 | *.py[oc]
 9 | dist/
10 | wheels/
11 | *.egg-info
12 | 
13 | # Virtual environments
14 | .venv
15 | 


--------------------------------------------------------------------------------
/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2025 Model Context Protocol
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
1 | # Quickstart Resources
2 | 
3 | A repository of servers and clients from the following Model Context Protocol tutorials:
4 | - [Quickstart](https://modelcontextprotocol.io/quickstart) – a simple MCP weather server
5 | - [Building MCP clients](https://modelcontextprotocol.io/tutorials/building-a-client) – an LLM-powered chatbot MCP client
6 | 


--------------------------------------------------------------------------------
/mcp-client-python/.python-version:
--------------------------------------------------------------------------------
1 | 3.10
2 | 


--------------------------------------------------------------------------------
/mcp-client-python/README.md:
--------------------------------------------------------------------------------
1 | # An LLM-Powered Chatbot MCP Client written in Python
2 | 
3 | See the [Building MCP clients](https://modelcontextprotocol.io/tutorials/building-a-client) tutorial for more information.
4 | 


--------------------------------------------------------------------------------
/mcp-client-python/client.py:
--------------------------------------------------------------------------------
  1 | import asyncio
  2 | from typing import Optional
  3 | from contextlib import AsyncExitStack
  4 | 
  5 | from mcp import ClientSession, StdioServerParameters
  6 | from mcp.client.stdio import stdio_client
  7 | 
  8 | from anthropic import Anthropic
  9 | from dotenv import load_dotenv
 10 | 
 11 | load_dotenv()  # load environment variables from .env
 12 | 
 13 | class MCPClient:
 14 |     def __init__(self):
 15 |         # Initialize session and client objects
 16 |         self.session: Optional[ClientSession] = None
 17 |         self.exit_stack = AsyncExitStack()
 18 |         self.anthropic = Anthropic()
 19 | 
 20 |     async def connect_to_server(self, server_script_path: str):
 21 |         """Connect to an MCP server
 22 |         
 23 |         Args:
 24 |             server_script_path: Path to the server script (.py or .js)
 25 |         """
 26 |         is_python = server_script_path.endswith('.py')
 27 |         is_js = server_script_path.endswith('.js')
 28 |         if not (is_python or is_js):
 29 |             raise ValueError("Server script must be a .py or .js file")
 30 |             
 31 |         command = "python" if is_python else "node"
 32 |         server_params = StdioServerParameters(
 33 |             command=command,
 34 |             args=[server_script_path],
 35 |             env=None
 36 |         )
 37 |         
 38 |         stdio_transport = await self.exit_stack.enter_async_context(stdio_client(server_params))
 39 |         self.stdio, self.write = stdio_transport
 40 |         self.session = await self.exit_stack.enter_async_context(ClientSession(self.stdio, self.write))
 41 |         
 42 |         await self.session.initialize()
 43 |         
 44 |         # List available tools
 45 |         response = await self.session.list_tools()
 46 |         tools = response.tools
 47 |         print("\nConnected to server with tools:", [tool.name for tool in tools])
 48 | 
 49 |     async def process_query(self, query: str) -> str:
 50 |         """Process a query using Claude and available tools"""
 51 |         messages = [
 52 |             {
 53 |                 "role": "user",
 54 |                 "content": query
 55 |             }
 56 |         ]
 57 | 
 58 |         response = await self.session.list_tools()
 59 |         available_tools = [{ 
 60 |             "name": tool.name,
 61 |             "description": tool.description,
 62 |             "input_schema": tool.inputSchema
 63 |         } for tool in response.tools]
 64 | 
 65 |         # Initial Claude API call
 66 |         response = self.anthropic.messages.create(
 67 |             model="claude-3-5-sonnet-20241022",
 68 |             max_tokens=1000,
 69 |             messages=messages,
 70 |             tools=available_tools
 71 |         )
 72 | 
 73 |         # Process response and handle tool calls
 74 |         final_text = []
 75 | 
 76 |         for content in response.content:
 77 |             if content.type == 'text':
 78 |                 final_text.append(content.text)
 79 |             elif content.type == 'tool_use':
 80 |                 tool_name = content.name
 81 |                 tool_args = content.input
 82 |                 
 83 |                 # Execute tool call
 84 |                 result = await self.session.call_tool(tool_name, tool_args)
 85 |                 final_text.append(f"[Calling tool {tool_name} with args {tool_args}]")
 86 | 
 87 |                 # Continue conversation with tool results
 88 |                 if hasattr(content, 'text') and content.text:
 89 |                     messages.append({
 90 |                       "role": "assistant",
 91 |                       "content": content.text
 92 |                     })
 93 |                 messages.append({
 94 |                     "role": "user", 
 95 |                     "content": result.content
 96 |                 })
 97 | 
 98 |                 # Get next response from Claude
 99 |                 response = self.anthropic.messages.create(
100 |                     model="claude-3-5-sonnet-20241022",
101 |                     max_tokens=1000,
102 |                     messages=messages,
103 |                 )
104 | 
105 |                 final_text.append(response.content[0].text)
106 | 
107 |         return "\n".join(final_text)
108 | 
109 |     async def chat_loop(self):
110 |         """Run an interactive chat loop"""
111 |         print("\nMCP Client Started!")
112 |         print("Type your queries or 'quit' to exit.")
113 |         
114 |         while True:
115 |             try:
116 |                 query = input("\nQuery: ").strip()
117 |                 
118 |                 if query.lower() == 'quit':
119 |                     break
120 |                     
121 |                 response = await self.process_query(query)
122 |                 print("\n" + response)
123 |                     
124 |             except Exception as e:
125 |                 print(f"\nError: {str(e)}")
126 |     
127 |     async def cleanup(self):
128 |         """Clean up resources"""
129 |         await self.exit_stack.aclose()
130 | 
131 | async def main():
132 |     if len(sys.argv) < 2:
133 |         print("Usage: python client.py <path_to_server_script>")
134 |         sys.exit(1)
135 |         
136 |     client = MCPClient()
137 |     try:
138 |         await client.connect_to_server(sys.argv[1])
139 |         await client.chat_loop()
140 |     finally:
141 |         await client.cleanup()
142 | 
143 | if __name__ == "__main__":
144 |     import sys
145 |     asyncio.run(main())
146 | 


--------------------------------------------------------------------------------
/mcp-client-python/pyproject.toml:
--------------------------------------------------------------------------------
 1 | [project]
 2 | name = "mcp-client"
 3 | version = "0.1.0"
 4 | description = "Add your description here"
 5 | readme = "README.md"
 6 | requires-python = ">=3.10"
 7 | dependencies = [
 8 |     "anthropic>=0.40.0",
 9 |     "mcp>=1.1.1",
10 |     "python-dotenv>=1.0.1",
11 | ]
12 | 


--------------------------------------------------------------------------------
/mcp-client-python/uv.lock:
--------------------------------------------------------------------------------
  1 | version = 1
  2 | requires-python = ">=3.10"
  3 | 
  4 | [[package]]
  5 | name = "annotated-types"
  6 | version = "0.7.0"
  7 | source = { registry = "https://pypi.org/simple" }
  8 | sdist = { url = "https://files.pythonhosted.org/packages/ee/67/531ea369ba64dcff5ec9c3402f9f51bf748cec26dde048a2f973a4eea7f5/annotated_types-0.7.0.tar.gz", hash = "sha256:aff07c09a53a08bc8cfccb9c85b05f1aa9a2a6f23728d790723543408344ce89", size = 16081 }
  9 | wheels = [
 10 |     { url = "https://files.pythonhosted.org/packages/78/b6/6307fbef88d9b5ee7421e68d78a9f162e0da4900bc5f5793f6d3d0e34fb8/annotated_types-0.7.0-py3-none-any.whl", hash = "sha256:1f02e8b43a8fbbc3f3e0d4f0f4bfc8131bcb4eebe8849b8e5c773f3a1c582a53", size = 13643 },
 11 | ]
 12 | 
 13 | [[package]]
 14 | name = "anthropic"
 15 | version = "0.40.0"
 16 | source = { registry = "https://pypi.org/simple" }
 17 | dependencies = [
 18 |     { name = "anyio" },
 19 |     { name = "distro" },
 20 |     { name = "httpx" },
 21 |     { name = "jiter" },
 22 |     { name = "pydantic" },
 23 |     { name = "sniffio" },
 24 |     { name = "typing-extensions" },
 25 | ]
 26 | sdist = { url = "https://files.pythonhosted.org/packages/4d/d9/c39005f04c602607d68d48d1c917b35af8d16b687b7ca427ca787c39d8b9/anthropic-0.40.0.tar.gz", hash = "sha256:3efeca6d9e97813f93ed34322c6c7ea2279bf0824cd0aa71b59ce222665e2b87", size = 190939 }
 27 | wheels = [
 28 |     { url = "https://files.pythonhosted.org/packages/cb/18/a68cfb9a11990377650c36c25b5dfb0baece900e9e505b68e1aa06ad0227/anthropic-0.40.0-py3-none-any.whl", hash = "sha256:442028ae8790ff9e3b6f8912043918755af1230d193904ae2ef78cc22995280c", size = 199484 },
 29 | ]
 30 | 
 31 | [[package]]
 32 | name = "anyio"
 33 | version = "4.7.0"
 34 | source = { registry = "https://pypi.org/simple" }
 35 | dependencies = [
 36 |     { name = "exceptiongroup", marker = "python_full_version < '3.11'" },
 37 |     { name = "idna" },
 38 |     { name = "sniffio" },
 39 |     { name = "typing-extensions", marker = "python_full_version < '3.13'" },
 40 | ]
 41 | sdist = { url = "https://files.pythonhosted.org/packages/f6/40/318e58f669b1a9e00f5c4453910682e2d9dd594334539c7b7817dabb765f/anyio-4.7.0.tar.gz", hash = "sha256:2f834749c602966b7d456a7567cafcb309f96482b5081d14ac93ccd457f9dd48", size = 177076 }
 42 | wheels = [
 43 |     { url = "https://files.pythonhosted.org/packages/a0/7a/4daaf3b6c08ad7ceffea4634ec206faeff697526421c20f07628c7372156/anyio-4.7.0-py3-none-any.whl", hash = "sha256:ea60c3723ab42ba6fff7e8ccb0488c898ec538ff4df1f1d5e642c3601d07e352", size = 93052 },
 44 | ]
 45 | 
 46 | [[package]]
 47 | name = "certifi"
 48 | version = "2024.8.30"
 49 | source = { registry = "https://pypi.org/simple" }
 50 | sdist = { url = "https://files.pythonhosted.org/packages/b0/ee/9b19140fe824b367c04c5e1b369942dd754c4c5462d5674002f75c4dedc1/certifi-2024.8.30.tar.gz", hash = "sha256:bec941d2aa8195e248a60b31ff9f0558284cf01a52591ceda73ea9afffd69fd9", size = 168507 }
 51 | wheels = [
 52 |     { url = "https://files.pythonhosted.org/packages/12/90/3c9ff0512038035f59d279fddeb79f5f1eccd8859f06d6163c58798b9487/certifi-2024.8.30-py3-none-any.whl", hash = "sha256:922820b53db7a7257ffbda3f597266d435245903d80737e34f8a45ff3e3230d8", size = 167321 },
 53 | ]
 54 | 
 55 | [[package]]
 56 | name = "click"
 57 | version = "8.1.7"
 58 | source = { registry = "https://pypi.org/simple" }
 59 | dependencies = [
 60 |     { name = "colorama", marker = "platform_system == 'Windows'" },
 61 | ]
 62 | sdist = { url = "https://files.pythonhosted.org/packages/96/d3/f04c7bfcf5c1862a2a5b845c6b2b360488cf47af55dfa79c98f6a6bf98b5/click-8.1.7.tar.gz", hash = "sha256:ca9853ad459e787e2192211578cc907e7594e294c7ccc834310722b41b9ca6de", size = 336121 }
 63 | wheels = [
 64 |     { url = "https://files.pythonhosted.org/packages/00/2e/d53fa4befbf2cfa713304affc7ca780ce4fc1fd8710527771b58311a3229/click-8.1.7-py3-none-any.whl", hash = "sha256:ae74fb96c20a0277a1d615f1e4d73c8414f5a98db8b799a7931d1582f3390c28", size = 97941 },
 65 | ]
 66 | 
 67 | [[package]]
 68 | name = "colorama"
 69 | version = "0.4.6"
 70 | source = { registry = "https://pypi.org/simple" }
 71 | sdist = { url = "https://files.pythonhosted.org/packages/d8/53/6f443c9a4a8358a93a6792e2acffb9d9d5cb0a5cfd8802644b7b1c9a02e4/colorama-0.4.6.tar.gz", hash = "sha256:08695f5cb7ed6e0531a20572697297273c47b8cae5a63ffc6d6ed5c201be6e44", size = 27697 }
 72 | wheels = [
 73 |     { url = "https://files.pythonhosted.org/packages/d1/d6/3965ed04c63042e047cb6a3e6ed1a63a35087b6a609aa3a15ed8ac56c221/colorama-0.4.6-py2.py3-none-any.whl", hash = "sha256:4f1d9991f5acc0ca119f9d443620b77f9d6b33703e51011c16baf57afb285fc6", size = 25335 },
 74 | ]
 75 | 
 76 | [[package]]
 77 | name = "distro"
 78 | version = "1.9.0"
 79 | source = { registry = "https://pypi.org/simple" }
 80 | sdist = { url = "https://files.pythonhosted.org/packages/fc/f8/98eea607f65de6527f8a2e8885fc8015d3e6f5775df186e443e0964a11c3/distro-1.9.0.tar.gz", hash = "sha256:2fa77c6fd8940f116ee1d6b94a2f90b13b5ea8d019b98bc8bafdcabcdd9bdbed", size = 60722 }
 81 | wheels = [
 82 |     { url = "https://files.pythonhosted.org/packages/12/b3/231ffd4ab1fc9d679809f356cebee130ac7daa00d6d6f3206dd4fd137e9e/distro-1.9.0-py3-none-any.whl", hash = "sha256:7bffd925d65168f85027d8da9af6bddab658135b840670a223589bc0c8ef02b2", size = 20277 },
 83 | ]
 84 | 
 85 | [[package]]
 86 | name = "exceptiongroup"
 87 | version = "1.2.2"
 88 | source = { registry = "https://pypi.org/simple" }
 89 | sdist = { url = "https://files.pythonhosted.org/packages/09/35/2495c4ac46b980e4ca1f6ad6db102322ef3ad2410b79fdde159a4b0f3b92/exceptiongroup-1.2.2.tar.gz", hash = "sha256:47c2edf7c6738fafb49fd34290706d1a1a2f4d1c6df275526b62cbb4aa5393cc", size = 28883 }
 90 | wheels = [
 91 |     { url = "https://files.pythonhosted.org/packages/02/cc/b7e31358aac6ed1ef2bb790a9746ac2c69bcb3c8588b41616914eb106eaf/exceptiongroup-1.2.2-py3-none-any.whl", hash = "sha256:3111b9d131c238bec2f8f516e123e14ba243563fb135d3fe885990585aa7795b", size = 16453 },
 92 | ]
 93 | 
 94 | [[package]]
 95 | name = "h11"
 96 | version = "0.14.0"
 97 | source = { registry = "https://pypi.org/simple" }
 98 | sdist = { url = "https://files.pythonhosted.org/packages/f5/38/3af3d3633a34a3316095b39c8e8fb4853a28a536e55d347bd8d8e9a14b03/h11-0.14.0.tar.gz", hash = "sha256:8f19fbbe99e72420ff35c00b27a34cb9937e902a8b810e2c88300c6f0a3b699d", size = 100418 }
 99 | wheels = [
100 |     { url = "https://files.pythonhosted.org/packages/95/04/ff642e65ad6b90db43e668d70ffb6736436c7ce41fcc549f4e9472234127/h11-0.14.0-py3-none-any.whl", hash = "sha256:e3fe4ac4b851c468cc8363d500db52c2ead036020723024a109d37346efaa761", size = 58259 },
101 | ]
102 | 
103 | [[package]]
104 | name = "httpcore"
105 | version = "1.0.7"
106 | source = { registry = "https://pypi.org/simple" }
107 | dependencies = [
108 |     { name = "certifi" },
109 |     { name = "h11" },
110 | ]
111 | sdist = { url = "https://files.pythonhosted.org/packages/6a/41/d7d0a89eb493922c37d343b607bc1b5da7f5be7e383740b4753ad8943e90/httpcore-1.0.7.tar.gz", hash = "sha256:8551cb62a169ec7162ac7be8d4817d561f60e08eaa485234898414bb5a8a0b4c", size = 85196 }
112 | wheels = [
113 |     { url = "https://files.pythonhosted.org/packages/87/f5/72347bc88306acb359581ac4d52f23c0ef445b57157adedb9aee0cd689d2/httpcore-1.0.7-py3-none-any.whl", hash = "sha256:a3fff8f43dc260d5bd363d9f9cf1830fa3a458b332856f34282de498ed420edd", size = 78551 },
114 | ]
115 | 
116 | [[package]]
117 | name = "httpx"
118 | version = "0.28.1"
119 | source = { registry = "https://pypi.org/simple" }
120 | dependencies = [
121 |     { name = "anyio" },
122 |     { name = "certifi" },
123 |     { name = "httpcore" },
124 |     { name = "idna" },
125 | ]
126 | sdist = { url = "https://files.pythonhosted.org/packages/b1/df/48c586a5fe32a0f01324ee087459e112ebb7224f646c0b5023f5e79e9956/httpx-0.28.1.tar.gz", hash = "sha256:75e98c5f16b0f35b567856f597f06ff2270a374470a5c2392242528e3e3e42fc", size = 141406 }
127 | wheels = [
128 |     { url = "https://files.pythonhosted.org/packages/2a/39/e50c7c3a983047577ee07d2a9e53faf5a69493943ec3f6a384bdc792deb2/httpx-0.28.1-py3-none-any.whl", hash = "sha256:d909fcccc110f8c7faf814ca82a9a4d816bc5a6dbfea25d6591d6985b8ba59ad", size = 73517 },
129 | ]
130 | 
131 | [[package]]
132 | name = "httpx-sse"
133 | version = "0.4.0"
134 | source = { registry = "https://pypi.org/simple" }
135 | sdist = { url = "https://files.pythonhosted.org/packages/4c/60/8f4281fa9bbf3c8034fd54c0e7412e66edbab6bc74c4996bd616f8d0406e/httpx-sse-0.4.0.tar.gz", hash = "sha256:1e81a3a3070ce322add1d3529ed42eb5f70817f45ed6ec915ab753f961139721", size = 12624 }
136 | wheels = [
137 |     { url = "https://files.pythonhosted.org/packages/e1/9b/a181f281f65d776426002f330c31849b86b31fc9d848db62e16f03ff739f/httpx_sse-0.4.0-py3-none-any.whl", hash = "sha256:f329af6eae57eaa2bdfd962b42524764af68075ea87370a2de920af5341e318f", size = 7819 },
138 | ]
139 | 
140 | [[package]]
141 | name = "idna"
142 | version = "3.10"
143 | source = { registry = "https://pypi.org/simple" }
144 | sdist = { url = "https://files.pythonhosted.org/packages/f1/70/7703c29685631f5a7590aa73f1f1d3fa9a380e654b86af429e0934a32f7d/idna-3.10.tar.gz", hash = "sha256:12f65c9b470abda6dc35cf8e63cc574b1c52b11df2c86030af0ac09b01b13ea9", size = 190490 }
145 | wheels = [
146 |     { url = "https://files.pythonhosted.org/packages/76/c6/c88e154df9c4e1a2a66ccf0005a88dfb2650c1dffb6f5ce603dfbd452ce3/idna-3.10-py3-none-any.whl", hash = "sha256:946d195a0d259cbba61165e88e65941f16e9b36ea6ddb97f00452bae8b1287d3", size = 70442 },
147 | ]
148 | 
149 | [[package]]
150 | name = "jiter"
151 | version = "0.8.2"
152 | source = { registry = "https://pypi.org/simple" }
153 | sdist = { url = "https://files.pythonhosted.org/packages/f8/70/90bc7bd3932e651486861df5c8ffea4ca7c77d28e8532ddefe2abc561a53/jiter-0.8.2.tar.gz", hash = "sha256:cd73d3e740666d0e639f678adb176fad25c1bcbdae88d8d7b857e1783bb4212d", size = 163007 }
154 | wheels = [
155 |     { url = "https://files.pythonhosted.org/packages/f2/f3/8c11e0e87bd5934c414f9b1cfae3cbfd4a938d4669d57cb427e1c4d11a7f/jiter-0.8.2-cp310-cp310-macosx_10_12_x86_64.whl", hash = "sha256:ca8577f6a413abe29b079bc30f907894d7eb07a865c4df69475e868d73e71c7b", size = 303381 },
156 |     { url = "https://files.pythonhosted.org/packages/ea/28/4cd3f0bcbf40e946bc6a62a82c951afc386a25673d3d8d5ee461f1559bbe/jiter-0.8.2-cp310-cp310-macosx_11_0_arm64.whl", hash = "sha256:b25bd626bde7fb51534190c7e3cb97cee89ee76b76d7585580e22f34f5e3f393", size = 311718 },
157 |     { url = "https://files.pythonhosted.org/packages/0d/17/57acab00507e60bd954eaec0837d9d7b119b4117ff49b8a62f2b646f32ed/jiter-0.8.2-cp310-cp310-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:d5c826a221851a8dc028eb6d7d6429ba03184fa3c7e83ae01cd6d3bd1d4bd17d", size = 335465 },
158 |     { url = "https://files.pythonhosted.org/packages/74/b9/1a3ddd2bc95ae17c815b021521020f40c60b32137730126bada962ef32b4/jiter-0.8.2-cp310-cp310-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:d35c864c2dff13dfd79fb070fc4fc6235d7b9b359efe340e1261deb21b9fcb66", size = 355570 },
159 |     { url = "https://files.pythonhosted.org/packages/78/69/6d29e2296a934199a7d0dde673ecccf98c9c8db44caf0248b3f2b65483cb/jiter-0.8.2-cp310-cp310-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:f557c55bc2b7676e74d39d19bcb8775ca295c7a028246175d6a8b431e70835e5", size = 381383 },
160 |     { url = "https://files.pythonhosted.org/packages/22/d7/fbc4c3fb1bf65f9be22a32759b539f88e897aeb13fe84ab0266e4423487a/jiter-0.8.2-cp310-cp310-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:580ccf358539153db147e40751a0b41688a5ceb275e6f3e93d91c9467f42b2e3", size = 390454 },
161 |     { url = "https://files.pythonhosted.org/packages/4d/a0/3993cda2e267fe679b45d0bcc2cef0b4504b0aa810659cdae9737d6bace9/jiter-0.8.2-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:af102d3372e917cffce49b521e4c32c497515119dc7bd8a75665e90a718bbf08", size = 345039 },
162 |     { url = "https://files.pythonhosted.org/packages/b9/ef/69c18562b4c09ce88fab5df1dcaf643f6b1a8b970b65216e7221169b81c4/jiter-0.8.2-cp310-cp310-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:cadcc978f82397d515bb2683fc0d50103acff2a180552654bb92d6045dec2c49", size = 376200 },
163 |     { url = "https://files.pythonhosted.org/packages/4d/17/0b5a8de46a6ab4d836f70934036278b49b8530c292b29dde3483326d4555/jiter-0.8.2-cp310-cp310-musllinux_1_1_aarch64.whl", hash = "sha256:ba5bdf56969cad2019d4e8ffd3f879b5fdc792624129741d3d83fc832fef8c7d", size = 511158 },
164 |     { url = "https://files.pythonhosted.org/packages/6c/b2/c401a0a2554b36c9e6d6e4876b43790d75139cf3936f0222e675cbc23451/jiter-0.8.2-cp310-cp310-musllinux_1_1_x86_64.whl", hash = "sha256:3b94a33a241bee9e34b8481cdcaa3d5c2116f575e0226e421bed3f7a6ea71cff", size = 503956 },
165 |     { url = "https://files.pythonhosted.org/packages/d4/02/a0291ed7d72c0ac130f172354ee3cf0b2556b69584de391463a8ee534f40/jiter-0.8.2-cp310-cp310-win32.whl", hash = "sha256:6e5337bf454abddd91bd048ce0dca5134056fc99ca0205258766db35d0a2ea43", size = 202846 },
166 |     { url = "https://files.pythonhosted.org/packages/ad/20/8c988831ae4bf437e29f1671e198fc99ba8fe49f2895f23789acad1d1811/jiter-0.8.2-cp310-cp310-win_amd64.whl", hash = "sha256:4a9220497ca0cb1fe94e3f334f65b9b5102a0b8147646118f020d8ce1de70105", size = 204414 },
167 |     { url = "https://files.pythonhosted.org/packages/cb/b0/c1a7caa7f9dc5f1f6cfa08722867790fe2d3645d6e7170ca280e6e52d163/jiter-0.8.2-cp311-cp311-macosx_10_12_x86_64.whl", hash = "sha256:2dd61c5afc88a4fda7d8b2cf03ae5947c6ac7516d32b7a15bf4b49569a5c076b", size = 303666 },
168 |     { url = "https://files.pythonhosted.org/packages/f5/97/0468bc9eeae43079aaa5feb9267964e496bf13133d469cfdc135498f8dd0/jiter-0.8.2-cp311-cp311-macosx_11_0_arm64.whl", hash = "sha256:a6c710d657c8d1d2adbbb5c0b0c6bfcec28fd35bd6b5f016395f9ac43e878a15", size = 311934 },
169 |     { url = "https://files.pythonhosted.org/packages/e5/69/64058e18263d9a5f1e10f90c436853616d5f047d997c37c7b2df11b085ec/jiter-0.8.2-cp311-cp311-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:a9584de0cd306072635fe4b89742bf26feae858a0683b399ad0c2509011b9dc0", size = 335506 },
170 |     { url = "https://files.pythonhosted.org/packages/9d/14/b747f9a77b8c0542141d77ca1e2a7523e854754af2c339ac89a8b66527d6/jiter-0.8.2-cp311-cp311-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:5a90a923338531b7970abb063cfc087eebae6ef8ec8139762007188f6bc69a9f", size = 355849 },
171 |     { url = "https://files.pythonhosted.org/packages/53/e2/98a08161db7cc9d0e39bc385415890928ff09709034982f48eccfca40733/jiter-0.8.2-cp311-cp311-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:d21974d246ed0181558087cd9f76e84e8321091ebfb3a93d4c341479a736f099", size = 381700 },
172 |     { url = "https://files.pythonhosted.org/packages/7a/38/1674672954d35bce3b1c9af99d5849f9256ac8f5b672e020ac7821581206/jiter-0.8.2-cp311-cp311-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:32475a42b2ea7b344069dc1e81445cfc00b9d0e3ca837f0523072432332e9f74", size = 389710 },
173 |     { url = "https://files.pythonhosted.org/packages/f8/9b/92f9da9a9e107d019bcf883cd9125fa1690079f323f5a9d5c6986eeec3c0/jiter-0.8.2-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:8b9931fd36ee513c26b5bf08c940b0ac875de175341cbdd4fa3be109f0492586", size = 345553 },
174 |     { url = "https://files.pythonhosted.org/packages/44/a6/6d030003394e9659cd0d7136bbeabd82e869849ceccddc34d40abbbbb269/jiter-0.8.2-cp311-cp311-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:ce0820f4a3a59ddced7fce696d86a096d5cc48d32a4183483a17671a61edfddc", size = 376388 },
175 |     { url = "https://files.pythonhosted.org/packages/ad/8d/87b09e648e4aca5f9af89e3ab3cfb93db2d1e633b2f2931ede8dabd9b19a/jiter-0.8.2-cp311-cp311-musllinux_1_1_aarch64.whl", hash = "sha256:8ffc86ae5e3e6a93765d49d1ab47b6075a9c978a2b3b80f0f32628f39caa0c88", size = 511226 },
176 |     { url = "https://files.pythonhosted.org/packages/77/95/8008ebe4cdc82eac1c97864a8042ca7e383ed67e0ec17bfd03797045c727/jiter-0.8.2-cp311-cp311-musllinux_1_1_x86_64.whl", hash = "sha256:5127dc1abd809431172bc3fbe8168d6b90556a30bb10acd5ded41c3cfd6f43b6", size = 504134 },
177 |     { url = "https://files.pythonhosted.org/packages/26/0d/3056a74de13e8b2562e4d526de6dac2f65d91ace63a8234deb9284a1d24d/jiter-0.8.2-cp311-cp311-win32.whl", hash = "sha256:66227a2c7b575720c1871c8800d3a0122bb8ee94edb43a5685aa9aceb2782d44", size = 203103 },
178 |     { url = "https://files.pythonhosted.org/packages/4e/1e/7f96b798f356e531ffc0f53dd2f37185fac60fae4d6c612bbbd4639b90aa/jiter-0.8.2-cp311-cp311-win_amd64.whl", hash = "sha256:cde031d8413842a1e7501e9129b8e676e62a657f8ec8166e18a70d94d4682855", size = 206717 },
179 |     { url = "https://files.pythonhosted.org/packages/a1/17/c8747af8ea4e045f57d6cfd6fc180752cab9bc3de0e8a0c9ca4e8af333b1/jiter-0.8.2-cp312-cp312-macosx_10_12_x86_64.whl", hash = "sha256:e6ec2be506e7d6f9527dae9ff4b7f54e68ea44a0ef6b098256ddf895218a2f8f", size = 302027 },
180 |     { url = "https://files.pythonhosted.org/packages/3c/c1/6da849640cd35a41e91085723b76acc818d4b7d92b0b6e5111736ce1dd10/jiter-0.8.2-cp312-cp312-macosx_11_0_arm64.whl", hash = "sha256:76e324da7b5da060287c54f2fabd3db5f76468006c811831f051942bf68c9d44", size = 310326 },
181 |     { url = "https://files.pythonhosted.org/packages/06/99/a2bf660d8ccffee9ad7ed46b4f860d2108a148d0ea36043fd16f4dc37e94/jiter-0.8.2-cp312-cp312-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:180a8aea058f7535d1c84183c0362c710f4750bef66630c05f40c93c2b152a0f", size = 334242 },
182 |     { url = "https://files.pythonhosted.org/packages/a7/5f/cea1c17864828731f11427b9d1ab7f24764dbd9aaf4648a7f851164d2718/jiter-0.8.2-cp312-cp312-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:025337859077b41548bdcbabe38698bcd93cfe10b06ff66617a48ff92c9aec60", size = 356654 },
183 |     { url = "https://files.pythonhosted.org/packages/e9/13/62774b7e5e7f5d5043efe1d0f94ead66e6d0f894ae010adb56b3f788de71/jiter-0.8.2-cp312-cp312-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:ecff0dc14f409599bbcafa7e470c00b80f17abc14d1405d38ab02e4b42e55b57", size = 379967 },
184 |     { url = "https://files.pythonhosted.org/packages/ec/fb/096b34c553bb0bd3f2289d5013dcad6074948b8d55212aa13a10d44c5326/jiter-0.8.2-cp312-cp312-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:ffd9fee7d0775ebaba131f7ca2e2d83839a62ad65e8e02fe2bd8fc975cedeb9e", size = 389252 },
185 |     { url = "https://files.pythonhosted.org/packages/17/61/beea645c0bf398ced8b199e377b61eb999d8e46e053bb285c91c3d3eaab0/jiter-0.8.2-cp312-cp312-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:14601dcac4889e0a1c75ccf6a0e4baf70dbc75041e51bcf8d0e9274519df6887", size = 345490 },
186 |     { url = "https://files.pythonhosted.org/packages/d5/df/834aa17ad5dcc3cf0118821da0a0cf1589ea7db9832589278553640366bc/jiter-0.8.2-cp312-cp312-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:92249669925bc1c54fcd2ec73f70f2c1d6a817928480ee1c65af5f6b81cdf12d", size = 376991 },
187 |     { url = "https://files.pythonhosted.org/packages/67/80/87d140399d382fb4ea5b3d56e7ecaa4efdca17cd7411ff904c1517855314/jiter-0.8.2-cp312-cp312-musllinux_1_1_aarch64.whl", hash = "sha256:e725edd0929fa79f8349ab4ec7f81c714df51dc4e991539a578e5018fa4a7152", size = 510822 },
188 |     { url = "https://files.pythonhosted.org/packages/5c/37/3394bb47bac1ad2cb0465601f86828a0518d07828a650722e55268cdb7e6/jiter-0.8.2-cp312-cp312-musllinux_1_1_x86_64.whl", hash = "sha256:bf55846c7b7a680eebaf9c3c48d630e1bf51bdf76c68a5f654b8524335b0ad29", size = 503730 },
189 |     { url = "https://files.pythonhosted.org/packages/f9/e2/253fc1fa59103bb4e3aa0665d6ceb1818df1cd7bf3eb492c4dad229b1cd4/jiter-0.8.2-cp312-cp312-win32.whl", hash = "sha256:7efe4853ecd3d6110301665a5178b9856be7e2a9485f49d91aa4d737ad2ae49e", size = 203375 },
190 |     { url = "https://files.pythonhosted.org/packages/41/69/6d4bbe66b3b3b4507e47aa1dd5d075919ad242b4b1115b3f80eecd443687/jiter-0.8.2-cp312-cp312-win_amd64.whl", hash = "sha256:83c0efd80b29695058d0fd2fa8a556490dbce9804eac3e281f373bbc99045f6c", size = 204740 },
191 |     { url = "https://files.pythonhosted.org/packages/6c/b0/bfa1f6f2c956b948802ef5a021281978bf53b7a6ca54bb126fd88a5d014e/jiter-0.8.2-cp313-cp313-macosx_10_12_x86_64.whl", hash = "sha256:ca1f08b8e43dc3bd0594c992fb1fd2f7ce87f7bf0d44358198d6da8034afdf84", size = 301190 },
192 |     { url = "https://files.pythonhosted.org/packages/a4/8f/396ddb4e292b5ea57e45ade5dc48229556b9044bad29a3b4b2dddeaedd52/jiter-0.8.2-cp313-cp313-macosx_11_0_arm64.whl", hash = "sha256:5672a86d55416ccd214c778efccf3266b84f87b89063b582167d803246354be4", size = 309334 },
193 |     { url = "https://files.pythonhosted.org/packages/7f/68/805978f2f446fa6362ba0cc2e4489b945695940656edd844e110a61c98f8/jiter-0.8.2-cp313-cp313-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:58dc9bc9767a1101f4e5e22db1b652161a225874d66f0e5cb8e2c7d1c438b587", size = 333918 },
194 |     { url = "https://files.pythonhosted.org/packages/b3/99/0f71f7be667c33403fa9706e5b50583ae5106d96fab997fa7e2f38ee8347/jiter-0.8.2-cp313-cp313-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:37b2998606d6dadbb5ccda959a33d6a5e853252d921fec1792fc902351bb4e2c", size = 356057 },
195 |     { url = "https://files.pythonhosted.org/packages/8d/50/a82796e421a22b699ee4d2ce527e5bcb29471a2351cbdc931819d941a167/jiter-0.8.2-cp313-cp313-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:4ab9a87f3784eb0e098f84a32670cfe4a79cb6512fd8f42ae3d0709f06405d18", size = 379790 },
196 |     { url = "https://files.pythonhosted.org/packages/3c/31/10fb012b00f6d83342ca9e2c9618869ab449f1aa78c8f1b2193a6b49647c/jiter-0.8.2-cp313-cp313-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:79aec8172b9e3c6d05fd4b219d5de1ac616bd8da934107325a6c0d0e866a21b6", size = 388285 },
197 |     { url = "https://files.pythonhosted.org/packages/c8/81/f15ebf7de57be488aa22944bf4274962aca8092e4f7817f92ffa50d3ee46/jiter-0.8.2-cp313-cp313-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:711e408732d4e9a0208008e5892c2966b485c783cd2d9a681f3eb147cf36c7ef", size = 344764 },
198 |     { url = "https://files.pythonhosted.org/packages/b3/e8/0cae550d72b48829ba653eb348cdc25f3f06f8a62363723702ec18e7be9c/jiter-0.8.2-cp313-cp313-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:653cf462db4e8c41995e33d865965e79641ef45369d8a11f54cd30888b7e6ff1", size = 376620 },
199 |     { url = "https://files.pythonhosted.org/packages/b8/50/e5478ff9d82534a944c03b63bc217c5f37019d4a34d288db0f079b13c10b/jiter-0.8.2-cp313-cp313-musllinux_1_1_aarch64.whl", hash = "sha256:9c63eaef32b7bebac8ebebf4dabebdbc6769a09c127294db6babee38e9f405b9", size = 510402 },
200 |     { url = "https://files.pythonhosted.org/packages/8e/1e/3de48bbebbc8f7025bd454cedc8c62378c0e32dd483dece5f4a814a5cb55/jiter-0.8.2-cp313-cp313-musllinux_1_1_x86_64.whl", hash = "sha256:eb21aaa9a200d0a80dacc7a81038d2e476ffe473ffdd9c91eb745d623561de05", size = 503018 },
201 |     { url = "https://files.pythonhosted.org/packages/d5/cd/d5a5501d72a11fe3e5fd65c78c884e5164eefe80077680533919be22d3a3/jiter-0.8.2-cp313-cp313-win32.whl", hash = "sha256:789361ed945d8d42850f919342a8665d2dc79e7e44ca1c97cc786966a21f627a", size = 203190 },
202 |     { url = "https://files.pythonhosted.org/packages/51/bf/e5ca301245ba951447e3ad677a02a64a8845b185de2603dabd83e1e4b9c6/jiter-0.8.2-cp313-cp313-win_amd64.whl", hash = "sha256:ab7f43235d71e03b941c1630f4b6e3055d46b6cb8728a17663eaac9d8e83a865", size = 203551 },
203 |     { url = "https://files.pythonhosted.org/packages/2f/3c/71a491952c37b87d127790dd7a0b1ebea0514c6b6ad30085b16bbe00aee6/jiter-0.8.2-cp313-cp313t-macosx_11_0_arm64.whl", hash = "sha256:b426f72cd77da3fec300ed3bc990895e2dd6b49e3bfe6c438592a3ba660e41ca", size = 308347 },
204 |     { url = "https://files.pythonhosted.org/packages/a0/4c/c02408042e6a7605ec063daed138e07b982fdb98467deaaf1c90950cf2c6/jiter-0.8.2-cp313-cp313t-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:b2dd880785088ff2ad21ffee205e58a8c1ddabc63612444ae41e5e4b321b39c0", size = 342875 },
205 |     { url = "https://files.pythonhosted.org/packages/91/61/c80ef80ed8a0a21158e289ef70dac01e351d929a1c30cb0f49be60772547/jiter-0.8.2-cp313-cp313t-win_amd64.whl", hash = "sha256:3ac9f578c46f22405ff7f8b1f5848fb753cc4b8377fbec8470a7dc3997ca7566", size = 202374 },
206 | ]
207 | 
208 | [[package]]
209 | name = "mcp"
210 | version = "1.1.1"
211 | source = { registry = "https://pypi.org/simple" }
212 | dependencies = [
213 |     { name = "anyio" },
214 |     { name = "httpx" },
215 |     { name = "httpx-sse" },
216 |     { name = "pydantic" },
217 |     { name = "sse-starlette" },
218 |     { name = "starlette" },
219 | ]
220 | sdist = { url = "https://files.pythonhosted.org/packages/be/d5/15b9ff17c9e03bb6d936a0e1202aca69e3fa93508e749e620ae4f4fbd884/mcp-1.1.1.tar.gz", hash = "sha256:44d9c12461b640c4431618a3ebf1be4178d35511e9169e25c9b1afeb59313b99", size = 57790 }
221 | wheels = [
222 |     { url = "https://files.pythonhosted.org/packages/8c/30/dcffd09aa623b5a40e8ccb4227e935e4636cc4bec8d54ef9609768c24a53/mcp-1.1.1-py3-none-any.whl", hash = "sha256:29f693a54ca1d3730e625dcc06732bc83b52d64b993d253881de576a1d66feed", size = 36574 },
223 | ]
224 | 
225 | [[package]]
226 | name = "mcp-client"
227 | version = "0.1.0"
228 | source = { virtual = "." }
229 | dependencies = [
230 |     { name = "anthropic" },
231 |     { name = "mcp" },
232 |     { name = "python-dotenv" },
233 | ]
234 | 
235 | [package.metadata]
236 | requires-dist = [
237 |     { name = "anthropic", specifier = ">=0.40.0" },
238 |     { name = "mcp", specifier = ">=1.1.1" },
239 |     { name = "python-dotenv", specifier = ">=1.0.1" },
240 | ]
241 | 
242 | [[package]]
243 | name = "pydantic"
244 | version = "2.10.3"
245 | source = { registry = "https://pypi.org/simple" }
246 | dependencies = [
247 |     { name = "annotated-types" },
248 |     { name = "pydantic-core" },
249 |     { name = "typing-extensions" },
250 | ]
251 | sdist = { url = "https://files.pythonhosted.org/packages/45/0f/27908242621b14e649a84e62b133de45f84c255eecb350ab02979844a788/pydantic-2.10.3.tar.gz", hash = "sha256:cb5ac360ce894ceacd69c403187900a02c4b20b693a9dd1d643e1effab9eadf9", size = 786486 }
252 | wheels = [
253 |     { url = "https://files.pythonhosted.org/packages/62/51/72c18c55cf2f46ff4f91ebcc8f75aa30f7305f3d726be3f4ebffb4ae972b/pydantic-2.10.3-py3-none-any.whl", hash = "sha256:be04d85bbc7b65651c5f8e6b9976ed9c6f41782a55524cef079a34a0bb82144d", size = 456997 },
254 | ]
255 | 
256 | [[package]]
257 | name = "pydantic-core"
258 | version = "2.27.1"
259 | source = { registry = "https://pypi.org/simple" }
260 | dependencies = [
261 |     { name = "typing-extensions" },
262 | ]
263 | sdist = { url = "https://files.pythonhosted.org/packages/a6/9f/7de1f19b6aea45aeb441838782d68352e71bfa98ee6fa048d5041991b33e/pydantic_core-2.27.1.tar.gz", hash = "sha256:62a763352879b84aa31058fc931884055fd75089cccbd9d58bb6afd01141b235", size = 412785 }
264 | wheels = [
265 |     { url = "https://files.pythonhosted.org/packages/6e/ce/60fd96895c09738648c83f3f00f595c807cb6735c70d3306b548cc96dd49/pydantic_core-2.27.1-cp310-cp310-macosx_10_12_x86_64.whl", hash = "sha256:71a5e35c75c021aaf400ac048dacc855f000bdfed91614b4a726f7432f1f3d6a", size = 1897984 },
266 |     { url = "https://files.pythonhosted.org/packages/fd/b9/84623d6b6be98cc209b06687d9bca5a7b966ffed008d15225dd0d20cce2e/pydantic_core-2.27.1-cp310-cp310-macosx_11_0_arm64.whl", hash = "sha256:f82d068a2d6ecfc6e054726080af69a6764a10015467d7d7b9f66d6ed5afa23b", size = 1807491 },
267 |     { url = "https://files.pythonhosted.org/packages/01/72/59a70165eabbc93b1111d42df9ca016a4aa109409db04304829377947028/pydantic_core-2.27.1-cp310-cp310-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:121ceb0e822f79163dd4699e4c54f5ad38b157084d97b34de8b232bcaad70278", size = 1831953 },
268 |     { url = "https://files.pythonhosted.org/packages/7c/0c/24841136476adafd26f94b45bb718a78cb0500bd7b4f8d667b67c29d7b0d/pydantic_core-2.27.1-cp310-cp310-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:4603137322c18eaf2e06a4495f426aa8d8388940f3c457e7548145011bb68e05", size = 1856071 },
269 |     { url = "https://files.pythonhosted.org/packages/53/5e/c32957a09cceb2af10d7642df45d1e3dbd8596061f700eac93b801de53c0/pydantic_core-2.27.1-cp310-cp310-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:a33cd6ad9017bbeaa9ed78a2e0752c5e250eafb9534f308e7a5f7849b0b1bfb4", size = 2038439 },
270 |     { url = "https://files.pythonhosted.org/packages/e4/8f/979ab3eccd118b638cd6d8f980fea8794f45018255a36044dea40fe579d4/pydantic_core-2.27.1-cp310-cp310-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:15cc53a3179ba0fcefe1e3ae50beb2784dede4003ad2dfd24f81bba4b23a454f", size = 2787416 },
271 |     { url = "https://files.pythonhosted.org/packages/02/1d/00f2e4626565b3b6d3690dab4d4fe1a26edd6a20e53749eb21ca892ef2df/pydantic_core-2.27.1-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:45d9c5eb9273aa50999ad6adc6be5e0ecea7e09dbd0d31bd0c65a55a2592ca08", size = 2134548 },
272 |     { url = "https://files.pythonhosted.org/packages/9d/46/3112621204128b90898adc2e721a3cd6cf5626504178d6f32c33b5a43b79/pydantic_core-2.27.1-cp310-cp310-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:8bf7b66ce12a2ac52d16f776b31d16d91033150266eb796967a7e4621707e4f6", size = 1989882 },
273 |     { url = "https://files.pythonhosted.org/packages/49/ec/557dd4ff5287ffffdf16a31d08d723de6762bb1b691879dc4423392309bc/pydantic_core-2.27.1-cp310-cp310-musllinux_1_1_aarch64.whl", hash = "sha256:655d7dd86f26cb15ce8a431036f66ce0318648f8853d709b4167786ec2fa4807", size = 1995829 },
274 |     { url = "https://files.pythonhosted.org/packages/6e/b2/610dbeb74d8d43921a7234555e4c091cb050a2bdb8cfea86d07791ce01c5/pydantic_core-2.27.1-cp310-cp310-musllinux_1_1_armv7l.whl", hash = "sha256:5556470f1a2157031e676f776c2bc20acd34c1990ca5f7e56f1ebf938b9ab57c", size = 2091257 },
275 |     { url = "https://files.pythonhosted.org/packages/8c/7f/4bf8e9d26a9118521c80b229291fa9558a07cdd9a968ec2d5c1026f14fbc/pydantic_core-2.27.1-cp310-cp310-musllinux_1_1_x86_64.whl", hash = "sha256:f69ed81ab24d5a3bd93861c8c4436f54afdf8e8cc421562b0c7504cf3be58206", size = 2143894 },
276 |     { url = "https://files.pythonhosted.org/packages/1f/1c/875ac7139c958f4390f23656fe696d1acc8edf45fb81e4831960f12cd6e4/pydantic_core-2.27.1-cp310-none-win32.whl", hash = "sha256:f5a823165e6d04ccea61a9f0576f345f8ce40ed533013580e087bd4d7442b52c", size = 1816081 },
277 |     { url = "https://files.pythonhosted.org/packages/d7/41/55a117acaeda25ceae51030b518032934f251b1dac3704a53781383e3491/pydantic_core-2.27.1-cp310-none-win_amd64.whl", hash = "sha256:57866a76e0b3823e0b56692d1a0bf722bffb324839bb5b7226a7dbd6c9a40b17", size = 1981109 },
278 |     { url = "https://files.pythonhosted.org/packages/27/39/46fe47f2ad4746b478ba89c561cafe4428e02b3573df882334bd2964f9cb/pydantic_core-2.27.1-cp311-cp311-macosx_10_12_x86_64.whl", hash = "sha256:ac3b20653bdbe160febbea8aa6c079d3df19310d50ac314911ed8cc4eb7f8cb8", size = 1895553 },
279 |     { url = "https://files.pythonhosted.org/packages/1c/00/0804e84a78b7fdb394fff4c4f429815a10e5e0993e6ae0e0b27dd20379ee/pydantic_core-2.27.1-cp311-cp311-macosx_11_0_arm64.whl", hash = "sha256:a5a8e19d7c707c4cadb8c18f5f60c843052ae83c20fa7d44f41594c644a1d330", size = 1807220 },
280 |     { url = "https://files.pythonhosted.org/packages/01/de/df51b3bac9820d38371f5a261020f505025df732ce566c2a2e7970b84c8c/pydantic_core-2.27.1-cp311-cp311-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:7f7059ca8d64fea7f238994c97d91f75965216bcbe5f695bb44f354893f11d52", size = 1829727 },
281 |     { url = "https://files.pythonhosted.org/packages/5f/d9/c01d19da8f9e9fbdb2bf99f8358d145a312590374d0dc9dd8dbe484a9cde/pydantic_core-2.27.1-cp311-cp311-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:bed0f8a0eeea9fb72937ba118f9db0cb7e90773462af7962d382445f3005e5a4", size = 1854282 },
282 |     { url = "https://files.pythonhosted.org/packages/5f/84/7db66eb12a0dc88c006abd6f3cbbf4232d26adfd827a28638c540d8f871d/pydantic_core-2.27.1-cp311-cp311-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:a3cb37038123447cf0f3ea4c74751f6a9d7afef0eb71aa07bf5f652b5e6a132c", size = 2037437 },
283 |     { url = "https://files.pythonhosted.org/packages/34/ac/a2537958db8299fbabed81167d58cc1506049dba4163433524e06a7d9f4c/pydantic_core-2.27.1-cp311-cp311-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:84286494f6c5d05243456e04223d5a9417d7f443c3b76065e75001beb26f88de", size = 2780899 },
284 |     { url = "https://files.pythonhosted.org/packages/4a/c1/3e38cd777ef832c4fdce11d204592e135ddeedb6c6f525478a53d1c7d3e5/pydantic_core-2.27.1-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:acc07b2cfc5b835444b44a9956846b578d27beeacd4b52e45489e93276241025", size = 2135022 },
285 |     { url = "https://files.pythonhosted.org/packages/7a/69/b9952829f80fd555fe04340539d90e000a146f2a003d3fcd1e7077c06c71/pydantic_core-2.27.1-cp311-cp311-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:4fefee876e07a6e9aad7a8c8c9f85b0cdbe7df52b8a9552307b09050f7512c7e", size = 1987969 },
286 |     { url = "https://files.pythonhosted.org/packages/05/72/257b5824d7988af43460c4e22b63932ed651fe98804cc2793068de7ec554/pydantic_core-2.27.1-cp311-cp311-musllinux_1_1_aarch64.whl", hash = "sha256:258c57abf1188926c774a4c94dd29237e77eda19462e5bb901d88adcab6af919", size = 1994625 },
287 |     { url = "https://files.pythonhosted.org/packages/73/c3/78ed6b7f3278a36589bcdd01243189ade7fc9b26852844938b4d7693895b/pydantic_core-2.27.1-cp311-cp311-musllinux_1_1_armv7l.whl", hash = "sha256:35c14ac45fcfdf7167ca76cc80b2001205a8d5d16d80524e13508371fb8cdd9c", size = 2090089 },
288 |     { url = "https://files.pythonhosted.org/packages/8d/c8/b4139b2f78579960353c4cd987e035108c93a78371bb19ba0dc1ac3b3220/pydantic_core-2.27.1-cp311-cp311-musllinux_1_1_x86_64.whl", hash = "sha256:d1b26e1dff225c31897696cab7d4f0a315d4c0d9e8666dbffdb28216f3b17fdc", size = 2142496 },
289 |     { url = "https://files.pythonhosted.org/packages/3e/f8/171a03e97eb36c0b51981efe0f78460554a1d8311773d3d30e20c005164e/pydantic_core-2.27.1-cp311-none-win32.whl", hash = "sha256:2cdf7d86886bc6982354862204ae3b2f7f96f21a3eb0ba5ca0ac42c7b38598b9", size = 1811758 },
290 |     { url = "https://files.pythonhosted.org/packages/6a/fe/4e0e63c418c1c76e33974a05266e5633e879d4061f9533b1706a86f77d5b/pydantic_core-2.27.1-cp311-none-win_amd64.whl", hash = "sha256:3af385b0cee8df3746c3f406f38bcbfdc9041b5c2d5ce3e5fc6637256e60bbc5", size = 1980864 },
291 |     { url = "https://files.pythonhosted.org/packages/50/fc/93f7238a514c155a8ec02fc7ac6376177d449848115e4519b853820436c5/pydantic_core-2.27.1-cp311-none-win_arm64.whl", hash = "sha256:81f2ec23ddc1b476ff96563f2e8d723830b06dceae348ce02914a37cb4e74b89", size = 1864327 },
292 |     { url = "https://files.pythonhosted.org/packages/be/51/2e9b3788feb2aebff2aa9dfbf060ec739b38c05c46847601134cc1fed2ea/pydantic_core-2.27.1-cp312-cp312-macosx_10_12_x86_64.whl", hash = "sha256:9cbd94fc661d2bab2bc702cddd2d3370bbdcc4cd0f8f57488a81bcce90c7a54f", size = 1895239 },
293 |     { url = "https://files.pythonhosted.org/packages/7b/9e/f8063952e4a7d0127f5d1181addef9377505dcce3be224263b25c4f0bfd9/pydantic_core-2.27.1-cp312-cp312-macosx_11_0_arm64.whl", hash = "sha256:5f8c4718cd44ec1580e180cb739713ecda2bdee1341084c1467802a417fe0f02", size = 1805070 },
294 |     { url = "https://files.pythonhosted.org/packages/2c/9d/e1d6c4561d262b52e41b17a7ef8301e2ba80b61e32e94520271029feb5d8/pydantic_core-2.27.1-cp312-cp312-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:15aae984e46de8d376df515f00450d1522077254ef6b7ce189b38ecee7c9677c", size = 1828096 },
295 |     { url = "https://files.pythonhosted.org/packages/be/65/80ff46de4266560baa4332ae3181fffc4488ea7d37282da1a62d10ab89a4/pydantic_core-2.27.1-cp312-cp312-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:1ba5e3963344ff25fc8c40da90f44b0afca8cfd89d12964feb79ac1411a260ac", size = 1857708 },
296 |     { url = "https://files.pythonhosted.org/packages/d5/ca/3370074ad758b04d9562b12ecdb088597f4d9d13893a48a583fb47682cdf/pydantic_core-2.27.1-cp312-cp312-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:992cea5f4f3b29d6b4f7f1726ed8ee46c8331c6b4eed6db5b40134c6fe1768bb", size = 2037751 },
297 |     { url = "https://files.pythonhosted.org/packages/b1/e2/4ab72d93367194317b99d051947c071aef6e3eb95f7553eaa4208ecf9ba4/pydantic_core-2.27.1-cp312-cp312-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:0325336f348dbee6550d129b1627cb8f5351a9dc91aad141ffb96d4937bd9529", size = 2733863 },
298 |     { url = "https://files.pythonhosted.org/packages/8a/c6/8ae0831bf77f356bb73127ce5a95fe115b10f820ea480abbd72d3cc7ccf3/pydantic_core-2.27.1-cp312-cp312-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:7597c07fbd11515f654d6ece3d0e4e5093edc30a436c63142d9a4b8e22f19c35", size = 2161161 },
299 |     { url = "https://files.pythonhosted.org/packages/f1/f4/b2fe73241da2429400fc27ddeaa43e35562f96cf5b67499b2de52b528cad/pydantic_core-2.27.1-cp312-cp312-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:3bbd5d8cc692616d5ef6fbbbd50dbec142c7e6ad9beb66b78a96e9c16729b089", size = 1993294 },
300 |     { url = "https://files.pythonhosted.org/packages/77/29/4bb008823a7f4cc05828198153f9753b3bd4c104d93b8e0b1bfe4e187540/pydantic_core-2.27.1-cp312-cp312-musllinux_1_1_aarch64.whl", hash = "sha256:dc61505e73298a84a2f317255fcc72b710b72980f3a1f670447a21efc88f8381", size = 2001468 },
301 |     { url = "https://files.pythonhosted.org/packages/f2/a9/0eaceeba41b9fad851a4107e0cf999a34ae8f0d0d1f829e2574f3d8897b0/pydantic_core-2.27.1-cp312-cp312-musllinux_1_1_armv7l.whl", hash = "sha256:e1f735dc43da318cad19b4173dd1ffce1d84aafd6c9b782b3abc04a0d5a6f5bb", size = 2091413 },
302 |     { url = "https://files.pythonhosted.org/packages/d8/36/eb8697729725bc610fd73940f0d860d791dc2ad557faaefcbb3edbd2b349/pydantic_core-2.27.1-cp312-cp312-musllinux_1_1_x86_64.whl", hash = "sha256:f4e5658dbffe8843a0f12366a4c2d1c316dbe09bb4dfbdc9d2d9cd6031de8aae", size = 2154735 },
303 |     { url = "https://files.pythonhosted.org/packages/52/e5/4f0fbd5c5995cc70d3afed1b5c754055bb67908f55b5cb8000f7112749bf/pydantic_core-2.27.1-cp312-none-win32.whl", hash = "sha256:672ebbe820bb37988c4d136eca2652ee114992d5d41c7e4858cdd90ea94ffe5c", size = 1833633 },
304 |     { url = "https://files.pythonhosted.org/packages/ee/f2/c61486eee27cae5ac781305658779b4a6b45f9cc9d02c90cb21b940e82cc/pydantic_core-2.27.1-cp312-none-win_amd64.whl", hash = "sha256:66ff044fd0bb1768688aecbe28b6190f6e799349221fb0de0e6f4048eca14c16", size = 1986973 },
305 |     { url = "https://files.pythonhosted.org/packages/df/a6/e3f12ff25f250b02f7c51be89a294689d175ac76e1096c32bf278f29ca1e/pydantic_core-2.27.1-cp312-none-win_arm64.whl", hash = "sha256:9a3b0793b1bbfd4146304e23d90045f2a9b5fd5823aa682665fbdaf2a6c28f3e", size = 1883215 },
306 |     { url = "https://files.pythonhosted.org/packages/0f/d6/91cb99a3c59d7b072bded9959fbeab0a9613d5a4935773c0801f1764c156/pydantic_core-2.27.1-cp313-cp313-macosx_10_12_x86_64.whl", hash = "sha256:f216dbce0e60e4d03e0c4353c7023b202d95cbaeff12e5fd2e82ea0a66905073", size = 1895033 },
307 |     { url = "https://files.pythonhosted.org/packages/07/42/d35033f81a28b27dedcade9e967e8a40981a765795c9ebae2045bcef05d3/pydantic_core-2.27.1-cp313-cp313-macosx_11_0_arm64.whl", hash = "sha256:a2e02889071850bbfd36b56fd6bc98945e23670773bc7a76657e90e6b6603c08", size = 1807542 },
308 |     { url = "https://files.pythonhosted.org/packages/41/c2/491b59e222ec7e72236e512108ecad532c7f4391a14e971c963f624f7569/pydantic_core-2.27.1-cp313-cp313-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:42b0e23f119b2b456d07ca91b307ae167cc3f6c846a7b169fca5326e32fdc6cf", size = 1827854 },
309 |     { url = "https://files.pythonhosted.org/packages/e3/f3/363652651779113189cefdbbb619b7b07b7a67ebb6840325117cc8cc3460/pydantic_core-2.27.1-cp313-cp313-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:764be71193f87d460a03f1f7385a82e226639732214b402f9aa61f0d025f0737", size = 1857389 },
310 |     { url = "https://files.pythonhosted.org/packages/5f/97/be804aed6b479af5a945daec7538d8bf358d668bdadde4c7888a2506bdfb/pydantic_core-2.27.1-cp313-cp313-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:1c00666a3bd2f84920a4e94434f5974d7bbc57e461318d6bb34ce9cdbbc1f6b2", size = 2037934 },
311 |     { url = "https://files.pythonhosted.org/packages/42/01/295f0bd4abf58902917e342ddfe5f76cf66ffabfc57c2e23c7681a1a1197/pydantic_core-2.27.1-cp313-cp313-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:3ccaa88b24eebc0f849ce0a4d09e8a408ec5a94afff395eb69baf868f5183107", size = 2735176 },
312 |     { url = "https://files.pythonhosted.org/packages/9d/a0/cd8e9c940ead89cc37812a1a9f310fef59ba2f0b22b4e417d84ab09fa970/pydantic_core-2.27.1-cp313-cp313-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:c65af9088ac534313e1963443d0ec360bb2b9cba6c2909478d22c2e363d98a51", size = 2160720 },
313 |     { url = "https://files.pythonhosted.org/packages/73/ae/9d0980e286627e0aeca4c352a60bd760331622c12d576e5ea4441ac7e15e/pydantic_core-2.27.1-cp313-cp313-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:206b5cf6f0c513baffaeae7bd817717140770c74528f3e4c3e1cec7871ddd61a", size = 1992972 },
314 |     { url = "https://files.pythonhosted.org/packages/bf/ba/ae4480bc0292d54b85cfb954e9d6bd226982949f8316338677d56541b85f/pydantic_core-2.27.1-cp313-cp313-musllinux_1_1_aarch64.whl", hash = "sha256:062f60e512fc7fff8b8a9d680ff0ddaaef0193dba9fa83e679c0c5f5fbd018bc", size = 2001477 },
315 |     { url = "https://files.pythonhosted.org/packages/55/b7/e26adf48c2f943092ce54ae14c3c08d0d221ad34ce80b18a50de8ed2cba8/pydantic_core-2.27.1-cp313-cp313-musllinux_1_1_armv7l.whl", hash = "sha256:a0697803ed7d4af5e4c1adf1670af078f8fcab7a86350e969f454daf598c4960", size = 2091186 },
316 |     { url = "https://files.pythonhosted.org/packages/ba/cc/8491fff5b608b3862eb36e7d29d36a1af1c945463ca4c5040bf46cc73f40/pydantic_core-2.27.1-cp313-cp313-musllinux_1_1_x86_64.whl", hash = "sha256:58ca98a950171f3151c603aeea9303ef6c235f692fe555e883591103da709b23", size = 2154429 },
317 |     { url = "https://files.pythonhosted.org/packages/78/d8/c080592d80edd3441ab7f88f865f51dae94a157fc64283c680e9f32cf6da/pydantic_core-2.27.1-cp313-none-win32.whl", hash = "sha256:8065914ff79f7eab1599bd80406681f0ad08f8e47c880f17b416c9f8f7a26d05", size = 1833713 },
318 |     { url = "https://files.pythonhosted.org/packages/83/84/5ab82a9ee2538ac95a66e51f6838d6aba6e0a03a42aa185ad2fe404a4e8f/pydantic_core-2.27.1-cp313-none-win_amd64.whl", hash = "sha256:ba630d5e3db74c79300d9a5bdaaf6200172b107f263c98a0539eeecb857b2337", size = 1987897 },
319 |     { url = "https://files.pythonhosted.org/packages/df/c3/b15fb833926d91d982fde29c0624c9f225da743c7af801dace0d4e187e71/pydantic_core-2.27.1-cp313-none-win_arm64.whl", hash = "sha256:45cf8588c066860b623cd11c4ba687f8d7175d5f7ef65f7129df8a394c502de5", size = 1882983 },
320 |     { url = "https://files.pythonhosted.org/packages/7c/60/e5eb2d462595ba1f622edbe7b1d19531e510c05c405f0b87c80c1e89d5b1/pydantic_core-2.27.1-pp310-pypy310_pp73-macosx_10_12_x86_64.whl", hash = "sha256:3fa80ac2bd5856580e242dbc202db873c60a01b20309c8319b5c5986fbe53ce6", size = 1894016 },
321 |     { url = "https://files.pythonhosted.org/packages/61/20/da7059855225038c1c4326a840908cc7ca72c7198cb6addb8b92ec81c1d6/pydantic_core-2.27.1-pp310-pypy310_pp73-macosx_11_0_arm64.whl", hash = "sha256:d950caa237bb1954f1b8c9227b5065ba6875ac9771bb8ec790d956a699b78676", size = 1771648 },
322 |     { url = "https://files.pythonhosted.org/packages/8f/fc/5485cf0b0bb38da31d1d292160a4d123b5977841ddc1122c671a30b76cfd/pydantic_core-2.27.1-pp310-pypy310_pp73-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:0e4216e64d203e39c62df627aa882f02a2438d18a5f21d7f721621f7a5d3611d", size = 1826929 },
323 |     { url = "https://files.pythonhosted.org/packages/a1/ff/fb1284a210e13a5f34c639efc54d51da136074ffbe25ec0c279cf9fbb1c4/pydantic_core-2.27.1-pp310-pypy310_pp73-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:02a3d637bd387c41d46b002f0e49c52642281edacd2740e5a42f7017feea3f2c", size = 1980591 },
324 |     { url = "https://files.pythonhosted.org/packages/f1/14/77c1887a182d05af74f6aeac7b740da3a74155d3093ccc7ee10b900cc6b5/pydantic_core-2.27.1-pp310-pypy310_pp73-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:161c27ccce13b6b0c8689418da3885d3220ed2eae2ea5e9b2f7f3d48f1d52c27", size = 1981326 },
325 |     { url = "https://files.pythonhosted.org/packages/06/aa/6f1b2747f811a9c66b5ef39d7f02fbb200479784c75e98290d70004b1253/pydantic_core-2.27.1-pp310-pypy310_pp73-musllinux_1_1_aarch64.whl", hash = "sha256:19910754e4cc9c63bc1c7f6d73aa1cfee82f42007e407c0f413695c2f7ed777f", size = 1989205 },
326 |     { url = "https://files.pythonhosted.org/packages/7a/d2/8ce2b074d6835f3c88d85f6d8a399790043e9fdb3d0e43455e72d19df8cc/pydantic_core-2.27.1-pp310-pypy310_pp73-musllinux_1_1_armv7l.whl", hash = "sha256:e173486019cc283dc9778315fa29a363579372fe67045e971e89b6365cc035ed", size = 2079616 },
327 |     { url = "https://files.pythonhosted.org/packages/65/71/af01033d4e58484c3db1e5d13e751ba5e3d6b87cc3368533df4c50932c8b/pydantic_core-2.27.1-pp310-pypy310_pp73-musllinux_1_1_x86_64.whl", hash = "sha256:af52d26579b308921b73b956153066481f064875140ccd1dfd4e77db89dbb12f", size = 2133265 },
328 |     { url = "https://files.pythonhosted.org/packages/33/72/f881b5e18fbb67cf2fb4ab253660de3c6899dbb2dba409d0b757e3559e3d/pydantic_core-2.27.1-pp310-pypy310_pp73-win_amd64.whl", hash = "sha256:981fb88516bd1ae8b0cbbd2034678a39dedc98752f264ac9bc5839d3923fa04c", size = 2001864 },
329 | ]
330 | 
331 | [[package]]
332 | name = "python-dotenv"
333 | version = "1.0.1"
334 | source = { registry = "https://pypi.org/simple" }
335 | sdist = { url = "https://files.pythonhosted.org/packages/bc/57/e84d88dfe0aec03b7a2d4327012c1627ab5f03652216c63d49846d7a6c58/python-dotenv-1.0.1.tar.gz", hash = "sha256:e324ee90a023d808f1959c46bcbc04446a10ced277783dc6ee09987c37ec10ca", size = 39115 }
336 | wheels = [
337 |     { url = "https://files.pythonhosted.org/packages/6a/3e/b68c118422ec867fa7ab88444e1274aa40681c606d59ac27de5a5588f082/python_dotenv-1.0.1-py3-none-any.whl", hash = "sha256:f7b63ef50f1b690dddf550d03497b66d609393b40b564ed0d674909a68ebf16a", size = 19863 },
338 | ]
339 | 
340 | [[package]]
341 | name = "sniffio"
342 | version = "1.3.1"
343 | source = { registry = "https://pypi.org/simple" }
344 | sdist = { url = "https://files.pythonhosted.org/packages/a2/87/a6771e1546d97e7e041b6ae58d80074f81b7d5121207425c964ddf5cfdbd/sniffio-1.3.1.tar.gz", hash = "sha256:f4324edc670a0f49750a81b895f35c3adb843cca46f0530f79fc1babb23789dc", size = 20372 }
345 | wheels = [
346 |     { url = "https://files.pythonhosted.org/packages/e9/44/75a9c9421471a6c4805dbf2356f7c181a29c1879239abab1ea2cc8f38b40/sniffio-1.3.1-py3-none-any.whl", hash = "sha256:2f6da418d1f1e0fddd844478f41680e794e6051915791a034ff65e5f100525a2", size = 10235 },
347 | ]
348 | 
349 | [[package]]
350 | name = "sse-starlette"
351 | version = "2.1.3"
352 | source = { registry = "https://pypi.org/simple" }
353 | dependencies = [
354 |     { name = "anyio" },
355 |     { name = "starlette" },
356 |     { name = "uvicorn" },
357 | ]
358 | sdist = { url = "https://files.pythonhosted.org/packages/72/fc/56ab9f116b2133521f532fce8d03194cf04dcac25f583cf3d839be4c0496/sse_starlette-2.1.3.tar.gz", hash = "sha256:9cd27eb35319e1414e3d2558ee7414487f9529ce3b3cf9b21434fd110e017169", size = 19678 }
359 | wheels = [
360 |     { url = "https://files.pythonhosted.org/packages/52/aa/36b271bc4fa1d2796311ee7c7283a3a1c348bad426d37293609ca4300eef/sse_starlette-2.1.3-py3-none-any.whl", hash = "sha256:8ec846438b4665b9e8c560fcdea6bc8081a3abf7942faa95e5a744999d219772", size = 9383 },
361 | ]
362 | 
363 | [[package]]
364 | name = "starlette"
365 | version = "0.41.3"
366 | source = { registry = "https://pypi.org/simple" }
367 | dependencies = [
368 |     { name = "anyio" },
369 | ]
370 | sdist = { url = "https://files.pythonhosted.org/packages/1a/4c/9b5764bd22eec91c4039ef4c55334e9187085da2d8a2df7bd570869aae18/starlette-0.41.3.tar.gz", hash = "sha256:0e4ab3d16522a255be6b28260b938eae2482f98ce5cc934cb08dce8dc3ba5835", size = 2574159 }
371 | wheels = [
372 |     { url = "https://files.pythonhosted.org/packages/96/00/2b325970b3060c7cecebab6d295afe763365822b1306a12eeab198f74323/starlette-0.41.3-py3-none-any.whl", hash = "sha256:44cedb2b7c77a9de33a8b74b2b90e9f50d11fcf25d8270ea525ad71a25374ff7", size = 73225 },
373 | ]
374 | 
375 | [[package]]
376 | name = "typing-extensions"
377 | version = "4.12.2"
378 | source = { registry = "https://pypi.org/simple" }
379 | sdist = { url = "https://files.pythonhosted.org/packages/df/db/f35a00659bc03fec321ba8bce9420de607a1d37f8342eee1863174c69557/typing_extensions-4.12.2.tar.gz", hash = "sha256:1a7ead55c7e559dd4dee8856e3a88b41225abfe1ce8df57b7c13915fe121ffb8", size = 85321 }
380 | wheels = [
381 |     { url = "https://files.pythonhosted.org/packages/26/9f/ad63fc0248c5379346306f8668cda6e2e2e9c95e01216d2b8ffd9ff037d0/typing_extensions-4.12.2-py3-none-any.whl", hash = "sha256:04e5ca0351e0f3f85c6853954072df659d0d13fac324d0072316b67d7794700d", size = 37438 },
382 | ]
383 | 
384 | [[package]]
385 | name = "uvicorn"
386 | version = "0.32.1"
387 | source = { registry = "https://pypi.org/simple" }
388 | dependencies = [
389 |     { name = "click" },
390 |     { name = "h11" },
391 |     { name = "typing-extensions", marker = "python_full_version < '3.11'" },
392 | ]
393 | sdist = { url = "https://files.pythonhosted.org/packages/6a/3c/21dba3e7d76138725ef307e3d7ddd29b763119b3aa459d02cc05fefcff75/uvicorn-0.32.1.tar.gz", hash = "sha256:ee9519c246a72b1c084cea8d3b44ed6026e78a4a309cbedae9c37e4cb9fbb175", size = 77630 }
394 | wheels = [
395 |     { url = "https://files.pythonhosted.org/packages/50/c1/2d27b0a15826c2b71dcf6e2f5402181ef85acf439617bb2f1453125ce1f3/uvicorn-0.32.1-py3-none-any.whl", hash = "sha256:82ad92fd58da0d12af7482ecdb5f2470a04c9c9a53ced65b9bbb4a205377602e", size = 63828 },
396 | ]
397 | 


--------------------------------------------------------------------------------
/mcp-client-typescript/.env.example:
--------------------------------------------------------------------------------
1 | ANTHROPIC_API_KEY=


--------------------------------------------------------------------------------
/mcp-client-typescript/.gitignore:
--------------------------------------------------------------------------------
1 | /build
2 | /node_modules
3 | .env
4 | 


--------------------------------------------------------------------------------
/mcp-client-typescript/README.md:
--------------------------------------------------------------------------------
1 | # An LLM-Powered Chatbot MCP Client written in TypeScript
2 | 
3 | See the [Building MCP clients](https://modelcontextprotocol.io/tutorials/building-a-client) tutorial for more information.
4 | 


--------------------------------------------------------------------------------
/mcp-client-typescript/index.ts:
--------------------------------------------------------------------------------
  1 | import { Anthropic } from "@anthropic-ai/sdk";
  2 | import {
  3 |   MessageParam,
  4 |   Tool,
  5 | } from "@anthropic-ai/sdk/resources/messages/messages.mjs";
  6 | 
  7 | import { Client } from "@modelcontextprotocol/sdk/client/index.js";
  8 | import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
  9 | import readline from "readline/promises";
 10 | 
 11 | import dotenv from "dotenv";
 12 | 
 13 | dotenv.config(); // load environment variables from .env
 14 | 
 15 | const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
 16 | if (!ANTHROPIC_API_KEY) {
 17 |   throw new Error("ANTHROPIC_API_KEY is not set");
 18 | }
 19 | 
 20 | class MCPClient {
 21 |   private mcp: Client;
 22 |   private anthropic: Anthropic;
 23 |   private transport: StdioClientTransport | null = null;
 24 |   private tools: Tool[] = [];
 25 | 
 26 |   constructor() {
 27 |     // Initialize Anthropic client and MCP client
 28 |     this.anthropic = new Anthropic({
 29 |       apiKey: ANTHROPIC_API_KEY,
 30 |     });
 31 |     this.mcp = new Client({ name: "mcp-client-cli", version: "1.0.0" });
 32 |   }
 33 | 
 34 |   async connectToServer(serverScriptPath: string) {
 35 |     /**
 36 |      * Connect to an MCP server
 37 |      *
 38 |      * @param serverScriptPath - Path to the server script (.py or .js)
 39 |      */
 40 |     try {
 41 |       // Determine script type and appropriate command
 42 |       const isJs = serverScriptPath.endsWith(".js");
 43 |       const isPy = serverScriptPath.endsWith(".py");
 44 |       if (!isJs && !isPy) {
 45 |         throw new Error("Server script must be a .js or .py file");
 46 |       }
 47 |       const command = isPy
 48 |         ? process.platform === "win32"
 49 |           ? "python"
 50 |           : "python3"
 51 |         : process.execPath;
 52 | 
 53 |       // Initialize transport and connect to server
 54 |       this.transport = new StdioClientTransport({
 55 |         command,
 56 |         args: [serverScriptPath],
 57 |       });
 58 |       this.mcp.connect(this.transport);
 59 | 
 60 |       // List available tools
 61 |       const toolsResult = await this.mcp.listTools();
 62 |       this.tools = toolsResult.tools.map((tool) => {
 63 |         return {
 64 |           name: tool.name,
 65 |           description: tool.description,
 66 |           input_schema: tool.inputSchema,
 67 |         };
 68 |       });
 69 |       console.log(
 70 |         "Connected to server with tools:",
 71 |         this.tools.map(({ name }) => name),
 72 |       );
 73 |     } catch (e) {
 74 |       console.log("Failed to connect to MCP server: ", e);
 75 |       throw e;
 76 |     }
 77 |   }
 78 | 
 79 |   async processQuery(query: string) {
 80 |     /**
 81 |      * Process a query using Claude and available tools
 82 |      *
 83 |      * @param query - The user's input query
 84 |      * @returns Processed response as a string
 85 |      */
 86 |     const messages: MessageParam[] = [
 87 |       {
 88 |         role: "user",
 89 |         content: query,
 90 |       },
 91 |     ];
 92 | 
 93 |     // Initial Claude API call
 94 |     const response = await this.anthropic.messages.create({
 95 |       model: "claude-3-5-sonnet-20241022",
 96 |       max_tokens: 1000,
 97 |       messages,
 98 |       tools: this.tools,
 99 |     });
100 | 
101 |     // Process response and handle tool calls
102 |     const finalText = [];
103 |     const toolResults = [];
104 | 
105 |     for (const content of response.content) {
106 |       if (content.type === "text") {
107 |         finalText.push(content.text);
108 |       } else if (content.type === "tool_use") {
109 |         // Execute tool call
110 |         const toolName = content.name;
111 |         const toolArgs = content.input as { [x: string]: unknown } | undefined;
112 | 
113 |         const result = await this.mcp.callTool({
114 |           name: toolName,
115 |           arguments: toolArgs,
116 |         });
117 |         toolResults.push(result);
118 |         finalText.push(
119 |           `[Calling tool ${toolName} with args ${JSON.stringify(toolArgs)}]`,
120 |         );
121 | 
122 |         // Continue conversation with tool results
123 |         messages.push({
124 |           role: "user",
125 |           content: result.content as string,
126 |         });
127 | 
128 |         // Get next response from Claude
129 |         const response = await this.anthropic.messages.create({
130 |           model: "claude-3-5-sonnet-20241022",
131 |           max_tokens: 1000,
132 |           messages,
133 |         });
134 | 
135 |         finalText.push(
136 |           response.content[0].type === "text" ? response.content[0].text : "",
137 |         );
138 |       }
139 |     }
140 | 
141 |     return finalText.join("\n");
142 |   }
143 | 
144 |   async chatLoop() {
145 |     /**
146 |      * Run an interactive chat loop
147 |      */
148 |     const rl = readline.createInterface({
149 |       input: process.stdin,
150 |       output: process.stdout,
151 |     });
152 | 
153 |     try {
154 |       console.log("\nMCP Client Started!");
155 |       console.log("Type your queries or 'quit' to exit.");
156 | 
157 |       while (true) {
158 |         const message = await rl.question("\nQuery: ");
159 |         if (message.toLowerCase() === "quit") {
160 |           break;
161 |         }
162 |         const response = await this.processQuery(message);
163 |         console.log("\n" + response);
164 |       }
165 |     } finally {
166 |       rl.close();
167 |     }
168 |   }
169 | 
170 |   async cleanup() {
171 |     /**
172 |      * Clean up resources
173 |      */
174 |     await this.mcp.close();
175 |   }
176 | }
177 | 
178 | async function main() {
179 |   if (process.argv.length < 3) {
180 |     console.log("Usage: node build/index.js <path_to_server_script>");
181 |     return;
182 |   }
183 |   const mcpClient = new MCPClient();
184 |   try {
185 |     await mcpClient.connectToServer(process.argv[2]);
186 |     await mcpClient.chatLoop();
187 |   } finally {
188 |     await mcpClient.cleanup();
189 |     process.exit(0);
190 |   }
191 | }
192 | 
193 | main();
194 | 


--------------------------------------------------------------------------------
/mcp-client-typescript/package-lock.json:
--------------------------------------------------------------------------------
  1 | {
  2 |   "name": "mcp-client-typescript",
  3 |   "version": "1.0.0",
  4 |   "lockfileVersion": 3,
  5 |   "requires": true,
  6 |   "packages": {
  7 |     "": {
  8 |       "name": "mcp-client-typescript",
  9 |       "version": "1.0.0",
 10 |       "license": "ISC",
 11 |       "dependencies": {
 12 |         "@anthropic-ai/sdk": "^0.36.3",
 13 |         "@modelcontextprotocol/sdk": "^1.5.0",
 14 |         "dotenv": "^16.4.7"
 15 |       },
 16 |       "devDependencies": {
 17 |         "@types/node": "^22.13.4",
 18 |         "typescript": "^5.7.3"
 19 |       },
 20 |       "engines": {
 21 |         "node": ">=16.0.0"
 22 |       }
 23 |     },
 24 |     "node_modules/@anthropic-ai/sdk": {
 25 |       "version": "0.36.3",
 26 |       "resolved": "https://registry.npmjs.org/@anthropic-ai/sdk/-/sdk-0.36.3.tgz",
 27 |       "integrity": "sha512-+c0mMLxL/17yFZ4P5+U6bTWiCSFZUKJddrv01ud2aFBWnTPLdRncYV76D3q1tqfnL7aCnhRtykFnoCFzvr4U3Q==",
 28 |       "license": "MIT",
 29 |       "dependencies": {
 30 |         "@types/node": "^18.11.18",
 31 |         "@types/node-fetch": "^2.6.4",
 32 |         "abort-controller": "^3.0.0",
 33 |         "agentkeepalive": "^4.2.1",
 34 |         "form-data-encoder": "1.7.2",
 35 |         "formdata-node": "^4.3.2",
 36 |         "node-fetch": "^2.6.7"
 37 |       }
 38 |     },
 39 |     "node_modules/@anthropic-ai/sdk/node_modules/@types/node": {
 40 |       "version": "18.19.76",
 41 |       "resolved": "https://registry.npmjs.org/@types/node/-/node-18.19.76.tgz",
 42 |       "integrity": "sha512-yvR7Q9LdPz2vGpmpJX5LolrgRdWvB67MJKDPSgIIzpFbaf9a1j/f5DnLp5VDyHGMR0QZHlTr1afsD87QCXFHKw==",
 43 |       "license": "MIT",
 44 |       "dependencies": {
 45 |         "undici-types": "~5.26.4"
 46 |       }
 47 |     },
 48 |     "node_modules/@anthropic-ai/sdk/node_modules/undici-types": {
 49 |       "version": "5.26.5",
 50 |       "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
 51 |       "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
 52 |       "license": "MIT"
 53 |     },
 54 |     "node_modules/@modelcontextprotocol/sdk": {
 55 |       "version": "1.5.0",
 56 |       "resolved": "https://registry.npmjs.org/@modelcontextprotocol/sdk/-/sdk-1.5.0.tgz",
 57 |       "integrity": "sha512-IJ+5iVVs8FCumIHxWqpwgkwOzyhtHVKy45s6Ug7Dv0MfRpaYisH8QQ87rIWeWdOzlk8sfhitZ7HCyQZk7d6b8w==",
 58 |       "license": "MIT",
 59 |       "dependencies": {
 60 |         "content-type": "^1.0.5",
 61 |         "eventsource": "^3.0.2",
 62 |         "raw-body": "^3.0.0",
 63 |         "zod": "^3.23.8",
 64 |         "zod-to-json-schema": "^3.24.1"
 65 |       },
 66 |       "engines": {
 67 |         "node": ">=18"
 68 |       }
 69 |     },
 70 |     "node_modules/@types/node": {
 71 |       "version": "22.13.4",
 72 |       "resolved": "https://registry.npmjs.org/@types/node/-/node-22.13.4.tgz",
 73 |       "integrity": "sha512-ywP2X0DYtX3y08eFVx5fNIw7/uIv8hYUKgXoK8oayJlLnKcRfEYCxWMVE1XagUdVtCJlZT1AU4LXEABW+L1Peg==",
 74 |       "license": "MIT",
 75 |       "dependencies": {
 76 |         "undici-types": "~6.20.0"
 77 |       }
 78 |     },
 79 |     "node_modules/@types/node-fetch": {
 80 |       "version": "2.6.12",
 81 |       "resolved": "https://registry.npmjs.org/@types/node-fetch/-/node-fetch-2.6.12.tgz",
 82 |       "integrity": "sha512-8nneRWKCg3rMtF69nLQJnOYUcbafYeFSjqkw3jCRLsqkWFlHaoQrr5mXmofFGOx3DKn7UfmBMyov8ySvLRVldA==",
 83 |       "license": "MIT",
 84 |       "dependencies": {
 85 |         "@types/node": "*",
 86 |         "form-data": "^4.0.0"
 87 |       }
 88 |     },
 89 |     "node_modules/abort-controller": {
 90 |       "version": "3.0.0",
 91 |       "resolved": "https://registry.npmjs.org/abort-controller/-/abort-controller-3.0.0.tgz",
 92 |       "integrity": "sha512-h8lQ8tacZYnR3vNQTgibj+tODHI5/+l06Au2Pcriv/Gmet0eaj4TwWH41sO9wnHDiQsEj19q0drzdWdeAHtweg==",
 93 |       "license": "MIT",
 94 |       "dependencies": {
 95 |         "event-target-shim": "^5.0.0"
 96 |       },
 97 |       "engines": {
 98 |         "node": ">=6.5"
 99 |       }
100 |     },
101 |     "node_modules/agentkeepalive": {
102 |       "version": "4.6.0",
103 |       "resolved": "https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.6.0.tgz",
104 |       "integrity": "sha512-kja8j7PjmncONqaTsB8fQ+wE2mSU2DJ9D4XKoJ5PFWIdRMa6SLSN1ff4mOr4jCbfRSsxR4keIiySJU0N9T5hIQ==",
105 |       "license": "MIT",
106 |       "dependencies": {
107 |         "humanize-ms": "^1.2.1"
108 |       },
109 |       "engines": {
110 |         "node": ">= 8.0.0"
111 |       }
112 |     },
113 |     "node_modules/asynckit": {
114 |       "version": "0.4.0",
115 |       "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
116 |       "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
117 |       "license": "MIT"
118 |     },
119 |     "node_modules/bytes": {
120 |       "version": "3.1.2",
121 |       "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
122 |       "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
123 |       "license": "MIT",
124 |       "engines": {
125 |         "node": ">= 0.8"
126 |       }
127 |     },
128 |     "node_modules/call-bind-apply-helpers": {
129 |       "version": "1.0.2",
130 |       "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
131 |       "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
132 |       "license": "MIT",
133 |       "dependencies": {
134 |         "es-errors": "^1.3.0",
135 |         "function-bind": "^1.1.2"
136 |       },
137 |       "engines": {
138 |         "node": ">= 0.4"
139 |       }
140 |     },
141 |     "node_modules/combined-stream": {
142 |       "version": "1.0.8",
143 |       "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
144 |       "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
145 |       "license": "MIT",
146 |       "dependencies": {
147 |         "delayed-stream": "~1.0.0"
148 |       },
149 |       "engines": {
150 |         "node": ">= 0.8"
151 |       }
152 |     },
153 |     "node_modules/content-type": {
154 |       "version": "1.0.5",
155 |       "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
156 |       "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
157 |       "license": "MIT",
158 |       "engines": {
159 |         "node": ">= 0.6"
160 |       }
161 |     },
162 |     "node_modules/delayed-stream": {
163 |       "version": "1.0.0",
164 |       "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
165 |       "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
166 |       "license": "MIT",
167 |       "engines": {
168 |         "node": ">=0.4.0"
169 |       }
170 |     },
171 |     "node_modules/depd": {
172 |       "version": "2.0.0",
173 |       "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
174 |       "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
175 |       "license": "MIT",
176 |       "engines": {
177 |         "node": ">= 0.8"
178 |       }
179 |     },
180 |     "node_modules/dotenv": {
181 |       "version": "16.4.7",
182 |       "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.4.7.tgz",
183 |       "integrity": "sha512-47qPchRCykZC03FhkYAhrvwU4xDBFIj1QPqaarj6mdM/hgUzfPHcpkHJOn3mJAufFeeAxAzeGsr5X0M4k6fLZQ==",
184 |       "license": "BSD-2-Clause",
185 |       "engines": {
186 |         "node": ">=12"
187 |       },
188 |       "funding": {
189 |         "url": "https://dotenvx.com"
190 |       }
191 |     },
192 |     "node_modules/dunder-proto": {
193 |       "version": "1.0.1",
194 |       "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
195 |       "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
196 |       "license": "MIT",
197 |       "dependencies": {
198 |         "call-bind-apply-helpers": "^1.0.1",
199 |         "es-errors": "^1.3.0",
200 |         "gopd": "^1.2.0"
201 |       },
202 |       "engines": {
203 |         "node": ">= 0.4"
204 |       }
205 |     },
206 |     "node_modules/es-define-property": {
207 |       "version": "1.0.1",
208 |       "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
209 |       "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
210 |       "license": "MIT",
211 |       "engines": {
212 |         "node": ">= 0.4"
213 |       }
214 |     },
215 |     "node_modules/es-errors": {
216 |       "version": "1.3.0",
217 |       "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
218 |       "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
219 |       "license": "MIT",
220 |       "engines": {
221 |         "node": ">= 0.4"
222 |       }
223 |     },
224 |     "node_modules/es-object-atoms": {
225 |       "version": "1.1.1",
226 |       "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
227 |       "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
228 |       "license": "MIT",
229 |       "dependencies": {
230 |         "es-errors": "^1.3.0"
231 |       },
232 |       "engines": {
233 |         "node": ">= 0.4"
234 |       }
235 |     },
236 |     "node_modules/es-set-tostringtag": {
237 |       "version": "2.1.0",
238 |       "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
239 |       "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
240 |       "license": "MIT",
241 |       "dependencies": {
242 |         "es-errors": "^1.3.0",
243 |         "get-intrinsic": "^1.2.6",
244 |         "has-tostringtag": "^1.0.2",
245 |         "hasown": "^2.0.2"
246 |       },
247 |       "engines": {
248 |         "node": ">= 0.4"
249 |       }
250 |     },
251 |     "node_modules/event-target-shim": {
252 |       "version": "5.0.1",
253 |       "resolved": "https://registry.npmjs.org/event-target-shim/-/event-target-shim-5.0.1.tgz",
254 |       "integrity": "sha512-i/2XbnSz/uxRCU6+NdVJgKWDTM427+MqYbkQzD321DuCQJUqOuJKIA0IM2+W2xtYHdKOmZ4dR6fExsd4SXL+WQ==",
255 |       "license": "MIT",
256 |       "engines": {
257 |         "node": ">=6"
258 |       }
259 |     },
260 |     "node_modules/eventsource": {
261 |       "version": "3.0.5",
262 |       "resolved": "https://registry.npmjs.org/eventsource/-/eventsource-3.0.5.tgz",
263 |       "integrity": "sha512-LT/5J605bx5SNyE+ITBDiM3FxffBiq9un7Vx0EwMDM3vg8sWKx/tO2zC+LMqZ+smAM0F2hblaDZUVZF0te2pSw==",
264 |       "license": "MIT",
265 |       "dependencies": {
266 |         "eventsource-parser": "^3.0.0"
267 |       },
268 |       "engines": {
269 |         "node": ">=18.0.0"
270 |       }
271 |     },
272 |     "node_modules/eventsource-parser": {
273 |       "version": "3.0.0",
274 |       "resolved": "https://registry.npmjs.org/eventsource-parser/-/eventsource-parser-3.0.0.tgz",
275 |       "integrity": "sha512-T1C0XCUimhxVQzW4zFipdx0SficT651NnkR0ZSH3yQwh+mFMdLfgjABVi4YtMTtaL4s168593DaoaRLMqryavA==",
276 |       "license": "MIT",
277 |       "engines": {
278 |         "node": ">=18.0.0"
279 |       }
280 |     },
281 |     "node_modules/form-data": {
282 |       "version": "4.0.2",
283 |       "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.2.tgz",
284 |       "integrity": "sha512-hGfm/slu0ZabnNt4oaRZ6uREyfCj6P4fT/n6A1rGV+Z0VdGXjfOhVUpkn6qVQONHGIFwmveGXyDs75+nr6FM8w==",
285 |       "license": "MIT",
286 |       "dependencies": {
287 |         "asynckit": "^0.4.0",
288 |         "combined-stream": "^1.0.8",
289 |         "es-set-tostringtag": "^2.1.0",
290 |         "mime-types": "^2.1.12"
291 |       },
292 |       "engines": {
293 |         "node": ">= 6"
294 |       }
295 |     },
296 |     "node_modules/form-data-encoder": {
297 |       "version": "1.7.2",
298 |       "resolved": "https://registry.npmjs.org/form-data-encoder/-/form-data-encoder-1.7.2.tgz",
299 |       "integrity": "sha512-qfqtYan3rxrnCk1VYaA4H+Ms9xdpPqvLZa6xmMgFvhO32x7/3J/ExcTd6qpxM0vH2GdMI+poehyBZvqfMTto8A==",
300 |       "license": "MIT"
301 |     },
302 |     "node_modules/formdata-node": {
303 |       "version": "4.4.1",
304 |       "resolved": "https://registry.npmjs.org/formdata-node/-/formdata-node-4.4.1.tgz",
305 |       "integrity": "sha512-0iirZp3uVDjVGt9p49aTaqjk84TrglENEDuqfdlZQ1roC9CWlPk6Avf8EEnZNcAqPonwkG35x4n3ww/1THYAeQ==",
306 |       "license": "MIT",
307 |       "dependencies": {
308 |         "node-domexception": "1.0.0",
309 |         "web-streams-polyfill": "4.0.0-beta.3"
310 |       },
311 |       "engines": {
312 |         "node": ">= 12.20"
313 |       }
314 |     },
315 |     "node_modules/function-bind": {
316 |       "version": "1.1.2",
317 |       "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
318 |       "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
319 |       "license": "MIT",
320 |       "funding": {
321 |         "url": "https://github.com/sponsors/ljharb"
322 |       }
323 |     },
324 |     "node_modules/get-intrinsic": {
325 |       "version": "1.2.7",
326 |       "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.7.tgz",
327 |       "integrity": "sha512-VW6Pxhsrk0KAOqs3WEd0klDiF/+V7gQOpAvY1jVU/LHmaD/kQO4523aiJuikX/QAKYiW6x8Jh+RJej1almdtCA==",
328 |       "license": "MIT",
329 |       "dependencies": {
330 |         "call-bind-apply-helpers": "^1.0.1",
331 |         "es-define-property": "^1.0.1",
332 |         "es-errors": "^1.3.0",
333 |         "es-object-atoms": "^1.0.0",
334 |         "function-bind": "^1.1.2",
335 |         "get-proto": "^1.0.0",
336 |         "gopd": "^1.2.0",
337 |         "has-symbols": "^1.1.0",
338 |         "hasown": "^2.0.2",
339 |         "math-intrinsics": "^1.1.0"
340 |       },
341 |       "engines": {
342 |         "node": ">= 0.4"
343 |       },
344 |       "funding": {
345 |         "url": "https://github.com/sponsors/ljharb"
346 |       }
347 |     },
348 |     "node_modules/get-proto": {
349 |       "version": "1.0.1",
350 |       "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
351 |       "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
352 |       "license": "MIT",
353 |       "dependencies": {
354 |         "dunder-proto": "^1.0.1",
355 |         "es-object-atoms": "^1.0.0"
356 |       },
357 |       "engines": {
358 |         "node": ">= 0.4"
359 |       }
360 |     },
361 |     "node_modules/gopd": {
362 |       "version": "1.2.0",
363 |       "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
364 |       "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
365 |       "license": "MIT",
366 |       "engines": {
367 |         "node": ">= 0.4"
368 |       },
369 |       "funding": {
370 |         "url": "https://github.com/sponsors/ljharb"
371 |       }
372 |     },
373 |     "node_modules/has-symbols": {
374 |       "version": "1.1.0",
375 |       "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
376 |       "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
377 |       "license": "MIT",
378 |       "engines": {
379 |         "node": ">= 0.4"
380 |       },
381 |       "funding": {
382 |         "url": "https://github.com/sponsors/ljharb"
383 |       }
384 |     },
385 |     "node_modules/has-tostringtag": {
386 |       "version": "1.0.2",
387 |       "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
388 |       "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
389 |       "license": "MIT",
390 |       "dependencies": {
391 |         "has-symbols": "^1.0.3"
392 |       },
393 |       "engines": {
394 |         "node": ">= 0.4"
395 |       },
396 |       "funding": {
397 |         "url": "https://github.com/sponsors/ljharb"
398 |       }
399 |     },
400 |     "node_modules/hasown": {
401 |       "version": "2.0.2",
402 |       "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
403 |       "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
404 |       "license": "MIT",
405 |       "dependencies": {
406 |         "function-bind": "^1.1.2"
407 |       },
408 |       "engines": {
409 |         "node": ">= 0.4"
410 |       }
411 |     },
412 |     "node_modules/http-errors": {
413 |       "version": "2.0.0",
414 |       "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
415 |       "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
416 |       "license": "MIT",
417 |       "dependencies": {
418 |         "depd": "2.0.0",
419 |         "inherits": "2.0.4",
420 |         "setprototypeof": "1.2.0",
421 |         "statuses": "2.0.1",
422 |         "toidentifier": "1.0.1"
423 |       },
424 |       "engines": {
425 |         "node": ">= 0.8"
426 |       }
427 |     },
428 |     "node_modules/humanize-ms": {
429 |       "version": "1.2.1",
430 |       "resolved": "https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz",
431 |       "integrity": "sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==",
432 |       "license": "MIT",
433 |       "dependencies": {
434 |         "ms": "^2.0.0"
435 |       }
436 |     },
437 |     "node_modules/iconv-lite": {
438 |       "version": "0.6.3",
439 |       "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
440 |       "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
441 |       "license": "MIT",
442 |       "dependencies": {
443 |         "safer-buffer": ">= 2.1.2 < 3.0.0"
444 |       },
445 |       "engines": {
446 |         "node": ">=0.10.0"
447 |       }
448 |     },
449 |     "node_modules/inherits": {
450 |       "version": "2.0.4",
451 |       "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
452 |       "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
453 |       "license": "ISC"
454 |     },
455 |     "node_modules/math-intrinsics": {
456 |       "version": "1.1.0",
457 |       "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
458 |       "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
459 |       "license": "MIT",
460 |       "engines": {
461 |         "node": ">= 0.4"
462 |       }
463 |     },
464 |     "node_modules/mime-db": {
465 |       "version": "1.52.0",
466 |       "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
467 |       "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
468 |       "license": "MIT",
469 |       "engines": {
470 |         "node": ">= 0.6"
471 |       }
472 |     },
473 |     "node_modules/mime-types": {
474 |       "version": "2.1.35",
475 |       "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
476 |       "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
477 |       "license": "MIT",
478 |       "dependencies": {
479 |         "mime-db": "1.52.0"
480 |       },
481 |       "engines": {
482 |         "node": ">= 0.6"
483 |       }
484 |     },
485 |     "node_modules/ms": {
486 |       "version": "2.1.3",
487 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
488 |       "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
489 |       "license": "MIT"
490 |     },
491 |     "node_modules/node-domexception": {
492 |       "version": "1.0.0",
493 |       "resolved": "https://registry.npmjs.org/node-domexception/-/node-domexception-1.0.0.tgz",
494 |       "integrity": "sha512-/jKZoMpw0F8GRwl4/eLROPA3cfcXtLApP0QzLmUT/HuPCZWyB7IY9ZrMeKw2O/nFIqPQB3PVM9aYm0F312AXDQ==",
495 |       "funding": [
496 |         {
497 |           "type": "github",
498 |           "url": "https://github.com/sponsors/jimmywarting"
499 |         },
500 |         {
501 |           "type": "github",
502 |           "url": "https://paypal.me/jimmywarting"
503 |         }
504 |       ],
505 |       "license": "MIT",
506 |       "engines": {
507 |         "node": ">=10.5.0"
508 |       }
509 |     },
510 |     "node_modules/node-fetch": {
511 |       "version": "2.7.0",
512 |       "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
513 |       "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
514 |       "license": "MIT",
515 |       "dependencies": {
516 |         "whatwg-url": "^5.0.0"
517 |       },
518 |       "engines": {
519 |         "node": "4.x || >=6.0.0"
520 |       },
521 |       "peerDependencies": {
522 |         "encoding": "^0.1.0"
523 |       },
524 |       "peerDependenciesMeta": {
525 |         "encoding": {
526 |           "optional": true
527 |         }
528 |       }
529 |     },
530 |     "node_modules/raw-body": {
531 |       "version": "3.0.0",
532 |       "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.0.tgz",
533 |       "integrity": "sha512-RmkhL8CAyCRPXCE28MMH0z2PNWQBNk2Q09ZdxM9IOOXwxwZbN+qbWaatPkdkWIKL2ZVDImrN/pK5HTRz2PcS4g==",
534 |       "license": "MIT",
535 |       "dependencies": {
536 |         "bytes": "3.1.2",
537 |         "http-errors": "2.0.0",
538 |         "iconv-lite": "0.6.3",
539 |         "unpipe": "1.0.0"
540 |       },
541 |       "engines": {
542 |         "node": ">= 0.8"
543 |       }
544 |     },
545 |     "node_modules/safer-buffer": {
546 |       "version": "2.1.2",
547 |       "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
548 |       "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
549 |       "license": "MIT"
550 |     },
551 |     "node_modules/setprototypeof": {
552 |       "version": "1.2.0",
553 |       "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
554 |       "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
555 |       "license": "ISC"
556 |     },
557 |     "node_modules/statuses": {
558 |       "version": "2.0.1",
559 |       "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
560 |       "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
561 |       "license": "MIT",
562 |       "engines": {
563 |         "node": ">= 0.8"
564 |       }
565 |     },
566 |     "node_modules/toidentifier": {
567 |       "version": "1.0.1",
568 |       "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
569 |       "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
570 |       "license": "MIT",
571 |       "engines": {
572 |         "node": ">=0.6"
573 |       }
574 |     },
575 |     "node_modules/tr46": {
576 |       "version": "0.0.3",
577 |       "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
578 |       "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
579 |       "license": "MIT"
580 |     },
581 |     "node_modules/typescript": {
582 |       "version": "5.7.3",
583 |       "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.7.3.tgz",
584 |       "integrity": "sha512-84MVSjMEHP+FQRPy3pX9sTVV/INIex71s9TL2Gm5FG/WG1SqXeKyZ0k7/blY/4FdOzI12CBy1vGc4og/eus0fw==",
585 |       "dev": true,
586 |       "license": "Apache-2.0",
587 |       "bin": {
588 |         "tsc": "bin/tsc",
589 |         "tsserver": "bin/tsserver"
590 |       },
591 |       "engines": {
592 |         "node": ">=14.17"
593 |       }
594 |     },
595 |     "node_modules/undici-types": {
596 |       "version": "6.20.0",
597 |       "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.20.0.tgz",
598 |       "integrity": "sha512-Ny6QZ2Nju20vw1SRHe3d9jVu6gJ+4e3+MMpqu7pqE5HT6WsTSlce++GQmK5UXS8mzV8DSYHrQH+Xrf2jVcuKNg==",
599 |       "license": "MIT"
600 |     },
601 |     "node_modules/unpipe": {
602 |       "version": "1.0.0",
603 |       "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
604 |       "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
605 |       "license": "MIT",
606 |       "engines": {
607 |         "node": ">= 0.8"
608 |       }
609 |     },
610 |     "node_modules/web-streams-polyfill": {
611 |       "version": "4.0.0-beta.3",
612 |       "resolved": "https://registry.npmjs.org/web-streams-polyfill/-/web-streams-polyfill-4.0.0-beta.3.tgz",
613 |       "integrity": "sha512-QW95TCTaHmsYfHDybGMwO5IJIM93I/6vTRk+daHTWFPhwh+C8Cg7j7XyKrwrj8Ib6vYXe0ocYNrmzY4xAAN6ug==",
614 |       "license": "MIT",
615 |       "engines": {
616 |         "node": ">= 14"
617 |       }
618 |     },
619 |     "node_modules/webidl-conversions": {
620 |       "version": "3.0.1",
621 |       "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
622 |       "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
623 |       "license": "BSD-2-Clause"
624 |     },
625 |     "node_modules/whatwg-url": {
626 |       "version": "5.0.0",
627 |       "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
628 |       "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
629 |       "license": "MIT",
630 |       "dependencies": {
631 |         "tr46": "~0.0.3",
632 |         "webidl-conversions": "^3.0.0"
633 |       }
634 |     },
635 |     "node_modules/zod": {
636 |       "version": "3.24.2",
637 |       "resolved": "https://registry.npmjs.org/zod/-/zod-3.24.2.tgz",
638 |       "integrity": "sha512-lY7CDW43ECgW9u1TcT3IoXHflywfVqDYze4waEz812jR/bZ8FHDsl7pFQoSZTz5N+2NqRXs8GBwnAwo3ZNxqhQ==",
639 |       "license": "MIT",
640 |       "funding": {
641 |         "url": "https://github.com/sponsors/colinhacks"
642 |       }
643 |     },
644 |     "node_modules/zod-to-json-schema": {
645 |       "version": "3.24.1",
646 |       "resolved": "https://registry.npmjs.org/zod-to-json-schema/-/zod-to-json-schema-3.24.1.tgz",
647 |       "integrity": "sha512-3h08nf3Vw3Wl3PK+q3ow/lIil81IT2Oa7YpQyUUDsEWbXveMesdfK1xBd2RhCkynwZndAxixji/7SYJJowr62w==",
648 |       "license": "ISC",
649 |       "peerDependencies": {
650 |         "zod": "^3.24.1"
651 |       }
652 |     }
653 |   }
654 | }
655 | 


--------------------------------------------------------------------------------
/mcp-client-typescript/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "mcp-client-typescript",
 3 |   "version": "1.0.0",
 4 |   "main": "index.js",
 5 |   "scripts": {
 6 |     "test": "echo \"Error: no test specified\" && exit 1",
 7 |     "build": "tsc && node -e \"require('fs').chmodSync('build/index.js', '755')\""
 8 |   },
 9 |   "keywords": [],
10 |   "author": "",
11 |   "license": "ISC",
12 |   "type": "module",
13 |   "dependencies": {
14 |     "@anthropic-ai/sdk": "^0.36.3",
15 |     "@modelcontextprotocol/sdk": "^1.5.0",
16 |     "dotenv": "^16.4.7"
17 |   },
18 |   "devDependencies": {
19 |     "@types/node": "^22.13.4",
20 |     "typescript": "^5.7.3"
21 |   },
22 |   "engines": {
23 |     "node": ">=16.0.0"
24 |   }
25 | }
26 | 


--------------------------------------------------------------------------------
/mcp-client-typescript/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2022",
 4 |     "module": "Node16",
 5 |     "moduleResolution": "Node16",
 6 |     "outDir": "./build",
 7 |     "rootDir": "./",
 8 |     "strict": true,
 9 |     "esModuleInterop": true,
10 |     "skipLibCheck": true,
11 |     "forceConsistentCasingInFileNames": true
12 |   },
13 |   "include": ["index.ts"],
14 |   "exclude": ["node_modules"]
15 | }
16 | 


--------------------------------------------------------------------------------
/weather-server-python/.python-version:
--------------------------------------------------------------------------------
1 | 3.10
2 | 


--------------------------------------------------------------------------------
/weather-server-python/README.md:
--------------------------------------------------------------------------------
1 | # A Simple MCP Weather Server written in Python
2 | 
3 | See the [Quickstart](https://modelcontextprotocol.io/quickstart) tutorial for more information.
4 | 


--------------------------------------------------------------------------------
/weather-server-python/pyproject.toml:
--------------------------------------------------------------------------------
 1 | [project]
 2 | name = "weather"
 3 | version = "0.1.0"
 4 | description = "A simple MCP weather server"
 5 | readme = "README.md"
 6 | requires-python = ">=3.10"
 7 | dependencies = [
 8 |     "httpx>=0.28.1",
 9 |     "mcp[cli]>=1.2.0",
10 | ]
11 | 
12 | [build-system]
13 | requires = [ "hatchling",]
14 | build-backend = "hatchling.build"
15 | 
16 | [project.scripts]
17 | weather = "weather:main"
18 | 
19 | 


--------------------------------------------------------------------------------
/weather-server-python/uv.lock:
--------------------------------------------------------------------------------
  1 | version = 1
  2 | requires-python = ">=3.10"
  3 | 
  4 | [[package]]
  5 | name = "annotated-types"
  6 | version = "0.7.0"
  7 | source = { registry = "https://pypi.org/simple" }
  8 | sdist = { url = "https://files.pythonhosted.org/packages/ee/67/531ea369ba64dcff5ec9c3402f9f51bf748cec26dde048a2f973a4eea7f5/annotated_types-0.7.0.tar.gz", hash = "sha256:aff07c09a53a08bc8cfccb9c85b05f1aa9a2a6f23728d790723543408344ce89", size = 16081 }
  9 | wheels = [
 10 |     { url = "https://files.pythonhosted.org/packages/78/b6/6307fbef88d9b5ee7421e68d78a9f162e0da4900bc5f5793f6d3d0e34fb8/annotated_types-0.7.0-py3-none-any.whl", hash = "sha256:1f02e8b43a8fbbc3f3e0d4f0f4bfc8131bcb4eebe8849b8e5c773f3a1c582a53", size = 13643 },
 11 | ]
 12 | 
 13 | [[package]]
 14 | name = "anyio"
 15 | version = "4.7.0"
 16 | source = { registry = "https://pypi.org/simple" }
 17 | dependencies = [
 18 |     { name = "exceptiongroup", marker = "python_full_version < '3.11'" },
 19 |     { name = "idna" },
 20 |     { name = "sniffio" },
 21 |     { name = "typing-extensions", marker = "python_full_version < '3.13'" },
 22 | ]
 23 | sdist = { url = "https://files.pythonhosted.org/packages/f6/40/318e58f669b1a9e00f5c4453910682e2d9dd594334539c7b7817dabb765f/anyio-4.7.0.tar.gz", hash = "sha256:2f834749c602966b7d456a7567cafcb309f96482b5081d14ac93ccd457f9dd48", size = 177076 }
 24 | wheels = [
 25 |     { url = "https://files.pythonhosted.org/packages/a0/7a/4daaf3b6c08ad7ceffea4634ec206faeff697526421c20f07628c7372156/anyio-4.7.0-py3-none-any.whl", hash = "sha256:ea60c3723ab42ba6fff7e8ccb0488c898ec538ff4df1f1d5e642c3601d07e352", size = 93052 },
 26 | ]
 27 | 
 28 | [[package]]
 29 | name = "certifi"
 30 | version = "2024.8.30"
 31 | source = { registry = "https://pypi.org/simple" }
 32 | sdist = { url = "https://files.pythonhosted.org/packages/b0/ee/9b19140fe824b367c04c5e1b369942dd754c4c5462d5674002f75c4dedc1/certifi-2024.8.30.tar.gz", hash = "sha256:bec941d2aa8195e248a60b31ff9f0558284cf01a52591ceda73ea9afffd69fd9", size = 168507 }
 33 | wheels = [
 34 |     { url = "https://files.pythonhosted.org/packages/12/90/3c9ff0512038035f59d279fddeb79f5f1eccd8859f06d6163c58798b9487/certifi-2024.8.30-py3-none-any.whl", hash = "sha256:922820b53db7a7257ffbda3f597266d435245903d80737e34f8a45ff3e3230d8", size = 167321 },
 35 | ]
 36 | 
 37 | [[package]]
 38 | name = "click"
 39 | version = "8.1.7"
 40 | source = { registry = "https://pypi.org/simple" }
 41 | dependencies = [
 42 |     { name = "colorama", marker = "sys_platform == 'win32'" },
 43 | ]
 44 | sdist = { url = "https://files.pythonhosted.org/packages/96/d3/f04c7bfcf5c1862a2a5b845c6b2b360488cf47af55dfa79c98f6a6bf98b5/click-8.1.7.tar.gz", hash = "sha256:ca9853ad459e787e2192211578cc907e7594e294c7ccc834310722b41b9ca6de", size = 336121 }
 45 | wheels = [
 46 |     { url = "https://files.pythonhosted.org/packages/00/2e/d53fa4befbf2cfa713304affc7ca780ce4fc1fd8710527771b58311a3229/click-8.1.7-py3-none-any.whl", hash = "sha256:ae74fb96c20a0277a1d615f1e4d73c8414f5a98db8b799a7931d1582f3390c28", size = 97941 },
 47 | ]
 48 | 
 49 | [[package]]
 50 | name = "colorama"
 51 | version = "0.4.6"
 52 | source = { registry = "https://pypi.org/simple" }
 53 | sdist = { url = "https://files.pythonhosted.org/packages/d8/53/6f443c9a4a8358a93a6792e2acffb9d9d5cb0a5cfd8802644b7b1c9a02e4/colorama-0.4.6.tar.gz", hash = "sha256:08695f5cb7ed6e0531a20572697297273c47b8cae5a63ffc6d6ed5c201be6e44", size = 27697 }
 54 | wheels = [
 55 |     { url = "https://files.pythonhosted.org/packages/d1/d6/3965ed04c63042e047cb6a3e6ed1a63a35087b6a609aa3a15ed8ac56c221/colorama-0.4.6-py2.py3-none-any.whl", hash = "sha256:4f1d9991f5acc0ca119f9d443620b77f9d6b33703e51011c16baf57afb285fc6", size = 25335 },
 56 | ]
 57 | 
 58 | [[package]]
 59 | name = "exceptiongroup"
 60 | version = "1.2.2"
 61 | source = { registry = "https://pypi.org/simple" }
 62 | sdist = { url = "https://files.pythonhosted.org/packages/09/35/2495c4ac46b980e4ca1f6ad6db102322ef3ad2410b79fdde159a4b0f3b92/exceptiongroup-1.2.2.tar.gz", hash = "sha256:47c2edf7c6738fafb49fd34290706d1a1a2f4d1c6df275526b62cbb4aa5393cc", size = 28883 }
 63 | wheels = [
 64 |     { url = "https://files.pythonhosted.org/packages/02/cc/b7e31358aac6ed1ef2bb790a9746ac2c69bcb3c8588b41616914eb106eaf/exceptiongroup-1.2.2-py3-none-any.whl", hash = "sha256:3111b9d131c238bec2f8f516e123e14ba243563fb135d3fe885990585aa7795b", size = 16453 },
 65 | ]
 66 | 
 67 | [[package]]
 68 | name = "h11"
 69 | version = "0.14.0"
 70 | source = { registry = "https://pypi.org/simple" }
 71 | sdist = { url = "https://files.pythonhosted.org/packages/f5/38/3af3d3633a34a3316095b39c8e8fb4853a28a536e55d347bd8d8e9a14b03/h11-0.14.0.tar.gz", hash = "sha256:8f19fbbe99e72420ff35c00b27a34cb9937e902a8b810e2c88300c6f0a3b699d", size = 100418 }
 72 | wheels = [
 73 |     { url = "https://files.pythonhosted.org/packages/95/04/ff642e65ad6b90db43e668d70ffb6736436c7ce41fcc549f4e9472234127/h11-0.14.0-py3-none-any.whl", hash = "sha256:e3fe4ac4b851c468cc8363d500db52c2ead036020723024a109d37346efaa761", size = 58259 },
 74 | ]
 75 | 
 76 | [[package]]
 77 | name = "httpcore"
 78 | version = "1.0.7"
 79 | source = { registry = "https://pypi.org/simple" }
 80 | dependencies = [
 81 |     { name = "certifi" },
 82 |     { name = "h11" },
 83 | ]
 84 | sdist = { url = "https://files.pythonhosted.org/packages/6a/41/d7d0a89eb493922c37d343b607bc1b5da7f5be7e383740b4753ad8943e90/httpcore-1.0.7.tar.gz", hash = "sha256:8551cb62a169ec7162ac7be8d4817d561f60e08eaa485234898414bb5a8a0b4c", size = 85196 }
 85 | wheels = [
 86 |     { url = "https://files.pythonhosted.org/packages/87/f5/72347bc88306acb359581ac4d52f23c0ef445b57157adedb9aee0cd689d2/httpcore-1.0.7-py3-none-any.whl", hash = "sha256:a3fff8f43dc260d5bd363d9f9cf1830fa3a458b332856f34282de498ed420edd", size = 78551 },
 87 | ]
 88 | 
 89 | [[package]]
 90 | name = "httpx"
 91 | version = "0.28.1"
 92 | source = { registry = "https://pypi.org/simple" }
 93 | dependencies = [
 94 |     { name = "anyio" },
 95 |     { name = "certifi" },
 96 |     { name = "httpcore" },
 97 |     { name = "idna" },
 98 | ]
 99 | sdist = { url = "https://files.pythonhosted.org/packages/b1/df/48c586a5fe32a0f01324ee087459e112ebb7224f646c0b5023f5e79e9956/httpx-0.28.1.tar.gz", hash = "sha256:75e98c5f16b0f35b567856f597f06ff2270a374470a5c2392242528e3e3e42fc", size = 141406 }
100 | wheels = [
101 |     { url = "https://files.pythonhosted.org/packages/2a/39/e50c7c3a983047577ee07d2a9e53faf5a69493943ec3f6a384bdc792deb2/httpx-0.28.1-py3-none-any.whl", hash = "sha256:d909fcccc110f8c7faf814ca82a9a4d816bc5a6dbfea25d6591d6985b8ba59ad", size = 73517 },
102 | ]
103 | 
104 | [[package]]
105 | name = "httpx-sse"
106 | version = "0.4.0"
107 | source = { registry = "https://pypi.org/simple" }
108 | sdist = { url = "https://files.pythonhosted.org/packages/4c/60/8f4281fa9bbf3c8034fd54c0e7412e66edbab6bc74c4996bd616f8d0406e/httpx-sse-0.4.0.tar.gz", hash = "sha256:1e81a3a3070ce322add1d3529ed42eb5f70817f45ed6ec915ab753f961139721", size = 12624 }
109 | wheels = [
110 |     { url = "https://files.pythonhosted.org/packages/e1/9b/a181f281f65d776426002f330c31849b86b31fc9d848db62e16f03ff739f/httpx_sse-0.4.0-py3-none-any.whl", hash = "sha256:f329af6eae57eaa2bdfd962b42524764af68075ea87370a2de920af5341e318f", size = 7819 },
111 | ]
112 | 
113 | [[package]]
114 | name = "idna"
115 | version = "3.10"
116 | source = { registry = "https://pypi.org/simple" }
117 | sdist = { url = "https://files.pythonhosted.org/packages/f1/70/7703c29685631f5a7590aa73f1f1d3fa9a380e654b86af429e0934a32f7d/idna-3.10.tar.gz", hash = "sha256:12f65c9b470abda6dc35cf8e63cc574b1c52b11df2c86030af0ac09b01b13ea9", size = 190490 }
118 | wheels = [
119 |     { url = "https://files.pythonhosted.org/packages/76/c6/c88e154df9c4e1a2a66ccf0005a88dfb2650c1dffb6f5ce603dfbd452ce3/idna-3.10-py3-none-any.whl", hash = "sha256:946d195a0d259cbba61165e88e65941f16e9b36ea6ddb97f00452bae8b1287d3", size = 70442 },
120 | ]
121 | 
122 | [[package]]
123 | name = "markdown-it-py"
124 | version = "3.0.0"
125 | source = { registry = "https://pypi.org/simple" }
126 | dependencies = [
127 |     { name = "mdurl" },
128 | ]
129 | sdist = { url = "https://files.pythonhosted.org/packages/38/71/3b932df36c1a044d397a1f92d1cf91ee0a503d91e470cbd670aa66b07ed0/markdown-it-py-3.0.0.tar.gz", hash = "sha256:e3f60a94fa066dc52ec76661e37c851cb232d92f9886b15cb560aaada2df8feb", size = 74596 }
130 | wheels = [
131 |     { url = "https://files.pythonhosted.org/packages/42/d7/1ec15b46af6af88f19b8e5ffea08fa375d433c998b8a7639e76935c14f1f/markdown_it_py-3.0.0-py3-none-any.whl", hash = "sha256:355216845c60bd96232cd8d8c40e8f9765cc86f46880e43a8fd22dc1a1a8cab1", size = 87528 },
132 | ]
133 | 
134 | [[package]]
135 | name = "mcp"
136 | version = "1.2.0"
137 | source = { registry = "https://pypi.org/simple" }
138 | dependencies = [
139 |     { name = "anyio" },
140 |     { name = "httpx" },
141 |     { name = "httpx-sse" },
142 |     { name = "pydantic" },
143 |     { name = "pydantic-settings" },
144 |     { name = "sse-starlette" },
145 |     { name = "starlette" },
146 |     { name = "uvicorn" },
147 | ]
148 | sdist = { url = "https://files.pythonhosted.org/packages/ab/a5/b08dc846ebedae9f17ced878e6975826e90e448cd4592f532f6a88a925a7/mcp-1.2.0.tar.gz", hash = "sha256:2b06c7ece98d6ea9e6379caa38d74b432385c338fb530cb82e2c70ea7add94f5", size = 102973 }
149 | wheels = [
150 |     { url = "https://files.pythonhosted.org/packages/af/84/fca78f19ac8ce6c53ba416247c71baa53a9e791e98d3c81edbc20a77d6d1/mcp-1.2.0-py3-none-any.whl", hash = "sha256:1d0e77d8c14955a5aea1f5aa1f444c8e531c09355c829b20e42f7a142bc0755f", size = 66468 },
151 | ]
152 | 
153 | [package.optional-dependencies]
154 | cli = [
155 |     { name = "python-dotenv" },
156 |     { name = "typer" },
157 | ]
158 | 
159 | [[package]]
160 | name = "mdurl"
161 | version = "0.1.2"
162 | source = { registry = "https://pypi.org/simple" }
163 | sdist = { url = "https://files.pythonhosted.org/packages/d6/54/cfe61301667036ec958cb99bd3efefba235e65cdeb9c84d24a8293ba1d90/mdurl-0.1.2.tar.gz", hash = "sha256:bb413d29f5eea38f31dd4754dd7377d4465116fb207585f97bf925588687c1ba", size = 8729 }
164 | wheels = [
165 |     { url = "https://files.pythonhosted.org/packages/b3/38/89ba8ad64ae25be8de66a6d463314cf1eb366222074cfda9ee839c56a4b4/mdurl-0.1.2-py3-none-any.whl", hash = "sha256:84008a41e51615a49fc9966191ff91509e3c40b939176e643fd50a5c2196b8f8", size = 9979 },
166 | ]
167 | 
168 | [[package]]
169 | name = "pydantic"
170 | version = "2.10.3"
171 | source = { registry = "https://pypi.org/simple" }
172 | dependencies = [
173 |     { name = "annotated-types" },
174 |     { name = "pydantic-core" },
175 |     { name = "typing-extensions" },
176 | ]
177 | sdist = { url = "https://files.pythonhosted.org/packages/45/0f/27908242621b14e649a84e62b133de45f84c255eecb350ab02979844a788/pydantic-2.10.3.tar.gz", hash = "sha256:cb5ac360ce894ceacd69c403187900a02c4b20b693a9dd1d643e1effab9eadf9", size = 786486 }
178 | wheels = [
179 |     { url = "https://files.pythonhosted.org/packages/62/51/72c18c55cf2f46ff4f91ebcc8f75aa30f7305f3d726be3f4ebffb4ae972b/pydantic-2.10.3-py3-none-any.whl", hash = "sha256:be04d85bbc7b65651c5f8e6b9976ed9c6f41782a55524cef079a34a0bb82144d", size = 456997 },
180 | ]
181 | 
182 | [[package]]
183 | name = "pydantic-core"
184 | version = "2.27.1"
185 | source = { registry = "https://pypi.org/simple" }
186 | dependencies = [
187 |     { name = "typing-extensions" },
188 | ]
189 | sdist = { url = "https://files.pythonhosted.org/packages/a6/9f/7de1f19b6aea45aeb441838782d68352e71bfa98ee6fa048d5041991b33e/pydantic_core-2.27.1.tar.gz", hash = "sha256:62a763352879b84aa31058fc931884055fd75089cccbd9d58bb6afd01141b235", size = 412785 }
190 | wheels = [
191 |     { url = "https://files.pythonhosted.org/packages/6e/ce/60fd96895c09738648c83f3f00f595c807cb6735c70d3306b548cc96dd49/pydantic_core-2.27.1-cp310-cp310-macosx_10_12_x86_64.whl", hash = "sha256:71a5e35c75c021aaf400ac048dacc855f000bdfed91614b4a726f7432f1f3d6a", size = 1897984 },
192 |     { url = "https://files.pythonhosted.org/packages/fd/b9/84623d6b6be98cc209b06687d9bca5a7b966ffed008d15225dd0d20cce2e/pydantic_core-2.27.1-cp310-cp310-macosx_11_0_arm64.whl", hash = "sha256:f82d068a2d6ecfc6e054726080af69a6764a10015467d7d7b9f66d6ed5afa23b", size = 1807491 },
193 |     { url = "https://files.pythonhosted.org/packages/01/72/59a70165eabbc93b1111d42df9ca016a4aa109409db04304829377947028/pydantic_core-2.27.1-cp310-cp310-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:121ceb0e822f79163dd4699e4c54f5ad38b157084d97b34de8b232bcaad70278", size = 1831953 },
194 |     { url = "https://files.pythonhosted.org/packages/7c/0c/24841136476adafd26f94b45bb718a78cb0500bd7b4f8d667b67c29d7b0d/pydantic_core-2.27.1-cp310-cp310-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:4603137322c18eaf2e06a4495f426aa8d8388940f3c457e7548145011bb68e05", size = 1856071 },
195 |     { url = "https://files.pythonhosted.org/packages/53/5e/c32957a09cceb2af10d7642df45d1e3dbd8596061f700eac93b801de53c0/pydantic_core-2.27.1-cp310-cp310-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:a33cd6ad9017bbeaa9ed78a2e0752c5e250eafb9534f308e7a5f7849b0b1bfb4", size = 2038439 },
196 |     { url = "https://files.pythonhosted.org/packages/e4/8f/979ab3eccd118b638cd6d8f980fea8794f45018255a36044dea40fe579d4/pydantic_core-2.27.1-cp310-cp310-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:15cc53a3179ba0fcefe1e3ae50beb2784dede4003ad2dfd24f81bba4b23a454f", size = 2787416 },
197 |     { url = "https://files.pythonhosted.org/packages/02/1d/00f2e4626565b3b6d3690dab4d4fe1a26edd6a20e53749eb21ca892ef2df/pydantic_core-2.27.1-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:45d9c5eb9273aa50999ad6adc6be5e0ecea7e09dbd0d31bd0c65a55a2592ca08", size = 2134548 },
198 |     { url = "https://files.pythonhosted.org/packages/9d/46/3112621204128b90898adc2e721a3cd6cf5626504178d6f32c33b5a43b79/pydantic_core-2.27.1-cp310-cp310-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:8bf7b66ce12a2ac52d16f776b31d16d91033150266eb796967a7e4621707e4f6", size = 1989882 },
199 |     { url = "https://files.pythonhosted.org/packages/49/ec/557dd4ff5287ffffdf16a31d08d723de6762bb1b691879dc4423392309bc/pydantic_core-2.27.1-cp310-cp310-musllinux_1_1_aarch64.whl", hash = "sha256:655d7dd86f26cb15ce8a431036f66ce0318648f8853d709b4167786ec2fa4807", size = 1995829 },
200 |     { url = "https://files.pythonhosted.org/packages/6e/b2/610dbeb74d8d43921a7234555e4c091cb050a2bdb8cfea86d07791ce01c5/pydantic_core-2.27.1-cp310-cp310-musllinux_1_1_armv7l.whl", hash = "sha256:5556470f1a2157031e676f776c2bc20acd34c1990ca5f7e56f1ebf938b9ab57c", size = 2091257 },
201 |     { url = "https://files.pythonhosted.org/packages/8c/7f/4bf8e9d26a9118521c80b229291fa9558a07cdd9a968ec2d5c1026f14fbc/pydantic_core-2.27.1-cp310-cp310-musllinux_1_1_x86_64.whl", hash = "sha256:f69ed81ab24d5a3bd93861c8c4436f54afdf8e8cc421562b0c7504cf3be58206", size = 2143894 },
202 |     { url = "https://files.pythonhosted.org/packages/1f/1c/875ac7139c958f4390f23656fe696d1acc8edf45fb81e4831960f12cd6e4/pydantic_core-2.27.1-cp310-none-win32.whl", hash = "sha256:f5a823165e6d04ccea61a9f0576f345f8ce40ed533013580e087bd4d7442b52c", size = 1816081 },
203 |     { url = "https://files.pythonhosted.org/packages/d7/41/55a117acaeda25ceae51030b518032934f251b1dac3704a53781383e3491/pydantic_core-2.27.1-cp310-none-win_amd64.whl", hash = "sha256:57866a76e0b3823e0b56692d1a0bf722bffb324839bb5b7226a7dbd6c9a40b17", size = 1981109 },
204 |     { url = "https://files.pythonhosted.org/packages/27/39/46fe47f2ad4746b478ba89c561cafe4428e02b3573df882334bd2964f9cb/pydantic_core-2.27.1-cp311-cp311-macosx_10_12_x86_64.whl", hash = "sha256:ac3b20653bdbe160febbea8aa6c079d3df19310d50ac314911ed8cc4eb7f8cb8", size = 1895553 },
205 |     { url = "https://files.pythonhosted.org/packages/1c/00/0804e84a78b7fdb394fff4c4f429815a10e5e0993e6ae0e0b27dd20379ee/pydantic_core-2.27.1-cp311-cp311-macosx_11_0_arm64.whl", hash = "sha256:a5a8e19d7c707c4cadb8c18f5f60c843052ae83c20fa7d44f41594c644a1d330", size = 1807220 },
206 |     { url = "https://files.pythonhosted.org/packages/01/de/df51b3bac9820d38371f5a261020f505025df732ce566c2a2e7970b84c8c/pydantic_core-2.27.1-cp311-cp311-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:7f7059ca8d64fea7f238994c97d91f75965216bcbe5f695bb44f354893f11d52", size = 1829727 },
207 |     { url = "https://files.pythonhosted.org/packages/5f/d9/c01d19da8f9e9fbdb2bf99f8358d145a312590374d0dc9dd8dbe484a9cde/pydantic_core-2.27.1-cp311-cp311-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:bed0f8a0eeea9fb72937ba118f9db0cb7e90773462af7962d382445f3005e5a4", size = 1854282 },
208 |     { url = "https://files.pythonhosted.org/packages/5f/84/7db66eb12a0dc88c006abd6f3cbbf4232d26adfd827a28638c540d8f871d/pydantic_core-2.27.1-cp311-cp311-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:a3cb37038123447cf0f3ea4c74751f6a9d7afef0eb71aa07bf5f652b5e6a132c", size = 2037437 },
209 |     { url = "https://files.pythonhosted.org/packages/34/ac/a2537958db8299fbabed81167d58cc1506049dba4163433524e06a7d9f4c/pydantic_core-2.27.1-cp311-cp311-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:84286494f6c5d05243456e04223d5a9417d7f443c3b76065e75001beb26f88de", size = 2780899 },
210 |     { url = "https://files.pythonhosted.org/packages/4a/c1/3e38cd777ef832c4fdce11d204592e135ddeedb6c6f525478a53d1c7d3e5/pydantic_core-2.27.1-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:acc07b2cfc5b835444b44a9956846b578d27beeacd4b52e45489e93276241025", size = 2135022 },
211 |     { url = "https://files.pythonhosted.org/packages/7a/69/b9952829f80fd555fe04340539d90e000a146f2a003d3fcd1e7077c06c71/pydantic_core-2.27.1-cp311-cp311-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:4fefee876e07a6e9aad7a8c8c9f85b0cdbe7df52b8a9552307b09050f7512c7e", size = 1987969 },
212 |     { url = "https://files.pythonhosted.org/packages/05/72/257b5824d7988af43460c4e22b63932ed651fe98804cc2793068de7ec554/pydantic_core-2.27.1-cp311-cp311-musllinux_1_1_aarch64.whl", hash = "sha256:258c57abf1188926c774a4c94dd29237e77eda19462e5bb901d88adcab6af919", size = 1994625 },
213 |     { url = "https://files.pythonhosted.org/packages/73/c3/78ed6b7f3278a36589bcdd01243189ade7fc9b26852844938b4d7693895b/pydantic_core-2.27.1-cp311-cp311-musllinux_1_1_armv7l.whl", hash = "sha256:35c14ac45fcfdf7167ca76cc80b2001205a8d5d16d80524e13508371fb8cdd9c", size = 2090089 },
214 |     { url = "https://files.pythonhosted.org/packages/8d/c8/b4139b2f78579960353c4cd987e035108c93a78371bb19ba0dc1ac3b3220/pydantic_core-2.27.1-cp311-cp311-musllinux_1_1_x86_64.whl", hash = "sha256:d1b26e1dff225c31897696cab7d4f0a315d4c0d9e8666dbffdb28216f3b17fdc", size = 2142496 },
215 |     { url = "https://files.pythonhosted.org/packages/3e/f8/171a03e97eb36c0b51981efe0f78460554a1d8311773d3d30e20c005164e/pydantic_core-2.27.1-cp311-none-win32.whl", hash = "sha256:2cdf7d86886bc6982354862204ae3b2f7f96f21a3eb0ba5ca0ac42c7b38598b9", size = 1811758 },
216 |     { url = "https://files.pythonhosted.org/packages/6a/fe/4e0e63c418c1c76e33974a05266e5633e879d4061f9533b1706a86f77d5b/pydantic_core-2.27.1-cp311-none-win_amd64.whl", hash = "sha256:3af385b0cee8df3746c3f406f38bcbfdc9041b5c2d5ce3e5fc6637256e60bbc5", size = 1980864 },
217 |     { url = "https://files.pythonhosted.org/packages/50/fc/93f7238a514c155a8ec02fc7ac6376177d449848115e4519b853820436c5/pydantic_core-2.27.1-cp311-none-win_arm64.whl", hash = "sha256:81f2ec23ddc1b476ff96563f2e8d723830b06dceae348ce02914a37cb4e74b89", size = 1864327 },
218 |     { url = "https://files.pythonhosted.org/packages/be/51/2e9b3788feb2aebff2aa9dfbf060ec739b38c05c46847601134cc1fed2ea/pydantic_core-2.27.1-cp312-cp312-macosx_10_12_x86_64.whl", hash = "sha256:9cbd94fc661d2bab2bc702cddd2d3370bbdcc4cd0f8f57488a81bcce90c7a54f", size = 1895239 },
219 |     { url = "https://files.pythonhosted.org/packages/7b/9e/f8063952e4a7d0127f5d1181addef9377505dcce3be224263b25c4f0bfd9/pydantic_core-2.27.1-cp312-cp312-macosx_11_0_arm64.whl", hash = "sha256:5f8c4718cd44ec1580e180cb739713ecda2bdee1341084c1467802a417fe0f02", size = 1805070 },
220 |     { url = "https://files.pythonhosted.org/packages/2c/9d/e1d6c4561d262b52e41b17a7ef8301e2ba80b61e32e94520271029feb5d8/pydantic_core-2.27.1-cp312-cp312-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:15aae984e46de8d376df515f00450d1522077254ef6b7ce189b38ecee7c9677c", size = 1828096 },
221 |     { url = "https://files.pythonhosted.org/packages/be/65/80ff46de4266560baa4332ae3181fffc4488ea7d37282da1a62d10ab89a4/pydantic_core-2.27.1-cp312-cp312-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:1ba5e3963344ff25fc8c40da90f44b0afca8cfd89d12964feb79ac1411a260ac", size = 1857708 },
222 |     { url = "https://files.pythonhosted.org/packages/d5/ca/3370074ad758b04d9562b12ecdb088597f4d9d13893a48a583fb47682cdf/pydantic_core-2.27.1-cp312-cp312-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:992cea5f4f3b29d6b4f7f1726ed8ee46c8331c6b4eed6db5b40134c6fe1768bb", size = 2037751 },
223 |     { url = "https://files.pythonhosted.org/packages/b1/e2/4ab72d93367194317b99d051947c071aef6e3eb95f7553eaa4208ecf9ba4/pydantic_core-2.27.1-cp312-cp312-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:0325336f348dbee6550d129b1627cb8f5351a9dc91aad141ffb96d4937bd9529", size = 2733863 },
224 |     { url = "https://files.pythonhosted.org/packages/8a/c6/8ae0831bf77f356bb73127ce5a95fe115b10f820ea480abbd72d3cc7ccf3/pydantic_core-2.27.1-cp312-cp312-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:7597c07fbd11515f654d6ece3d0e4e5093edc30a436c63142d9a4b8e22f19c35", size = 2161161 },
225 |     { url = "https://files.pythonhosted.org/packages/f1/f4/b2fe73241da2429400fc27ddeaa43e35562f96cf5b67499b2de52b528cad/pydantic_core-2.27.1-cp312-cp312-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:3bbd5d8cc692616d5ef6fbbbd50dbec142c7e6ad9beb66b78a96e9c16729b089", size = 1993294 },
226 |     { url = "https://files.pythonhosted.org/packages/77/29/4bb008823a7f4cc05828198153f9753b3bd4c104d93b8e0b1bfe4e187540/pydantic_core-2.27.1-cp312-cp312-musllinux_1_1_aarch64.whl", hash = "sha256:dc61505e73298a84a2f317255fcc72b710b72980f3a1f670447a21efc88f8381", size = 2001468 },
227 |     { url = "https://files.pythonhosted.org/packages/f2/a9/0eaceeba41b9fad851a4107e0cf999a34ae8f0d0d1f829e2574f3d8897b0/pydantic_core-2.27.1-cp312-cp312-musllinux_1_1_armv7l.whl", hash = "sha256:e1f735dc43da318cad19b4173dd1ffce1d84aafd6c9b782b3abc04a0d5a6f5bb", size = 2091413 },
228 |     { url = "https://files.pythonhosted.org/packages/d8/36/eb8697729725bc610fd73940f0d860d791dc2ad557faaefcbb3edbd2b349/pydantic_core-2.27.1-cp312-cp312-musllinux_1_1_x86_64.whl", hash = "sha256:f4e5658dbffe8843a0f12366a4c2d1c316dbe09bb4dfbdc9d2d9cd6031de8aae", size = 2154735 },
229 |     { url = "https://files.pythonhosted.org/packages/52/e5/4f0fbd5c5995cc70d3afed1b5c754055bb67908f55b5cb8000f7112749bf/pydantic_core-2.27.1-cp312-none-win32.whl", hash = "sha256:672ebbe820bb37988c4d136eca2652ee114992d5d41c7e4858cdd90ea94ffe5c", size = 1833633 },
230 |     { url = "https://files.pythonhosted.org/packages/ee/f2/c61486eee27cae5ac781305658779b4a6b45f9cc9d02c90cb21b940e82cc/pydantic_core-2.27.1-cp312-none-win_amd64.whl", hash = "sha256:66ff044fd0bb1768688aecbe28b6190f6e799349221fb0de0e6f4048eca14c16", size = 1986973 },
231 |     { url = "https://files.pythonhosted.org/packages/df/a6/e3f12ff25f250b02f7c51be89a294689d175ac76e1096c32bf278f29ca1e/pydantic_core-2.27.1-cp312-none-win_arm64.whl", hash = "sha256:9a3b0793b1bbfd4146304e23d90045f2a9b5fd5823aa682665fbdaf2a6c28f3e", size = 1883215 },
232 |     { url = "https://files.pythonhosted.org/packages/0f/d6/91cb99a3c59d7b072bded9959fbeab0a9613d5a4935773c0801f1764c156/pydantic_core-2.27.1-cp313-cp313-macosx_10_12_x86_64.whl", hash = "sha256:f216dbce0e60e4d03e0c4353c7023b202d95cbaeff12e5fd2e82ea0a66905073", size = 1895033 },
233 |     { url = "https://files.pythonhosted.org/packages/07/42/d35033f81a28b27dedcade9e967e8a40981a765795c9ebae2045bcef05d3/pydantic_core-2.27.1-cp313-cp313-macosx_11_0_arm64.whl", hash = "sha256:a2e02889071850bbfd36b56fd6bc98945e23670773bc7a76657e90e6b6603c08", size = 1807542 },
234 |     { url = "https://files.pythonhosted.org/packages/41/c2/491b59e222ec7e72236e512108ecad532c7f4391a14e971c963f624f7569/pydantic_core-2.27.1-cp313-cp313-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:42b0e23f119b2b456d07ca91b307ae167cc3f6c846a7b169fca5326e32fdc6cf", size = 1827854 },
235 |     { url = "https://files.pythonhosted.org/packages/e3/f3/363652651779113189cefdbbb619b7b07b7a67ebb6840325117cc8cc3460/pydantic_core-2.27.1-cp313-cp313-manylinux_2_17_armv7l.manylinux2014_armv7l.whl", hash = "sha256:764be71193f87d460a03f1f7385a82e226639732214b402f9aa61f0d025f0737", size = 1857389 },
236 |     { url = "https://files.pythonhosted.org/packages/5f/97/be804aed6b479af5a945daec7538d8bf358d668bdadde4c7888a2506bdfb/pydantic_core-2.27.1-cp313-cp313-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:1c00666a3bd2f84920a4e94434f5974d7bbc57e461318d6bb34ce9cdbbc1f6b2", size = 2037934 },
237 |     { url = "https://files.pythonhosted.org/packages/42/01/295f0bd4abf58902917e342ddfe5f76cf66ffabfc57c2e23c7681a1a1197/pydantic_core-2.27.1-cp313-cp313-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:3ccaa88b24eebc0f849ce0a4d09e8a408ec5a94afff395eb69baf868f5183107", size = 2735176 },
238 |     { url = "https://files.pythonhosted.org/packages/9d/a0/cd8e9c940ead89cc37812a1a9f310fef59ba2f0b22b4e417d84ab09fa970/pydantic_core-2.27.1-cp313-cp313-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:c65af9088ac534313e1963443d0ec360bb2b9cba6c2909478d22c2e363d98a51", size = 2160720 },
239 |     { url = "https://files.pythonhosted.org/packages/73/ae/9d0980e286627e0aeca4c352a60bd760331622c12d576e5ea4441ac7e15e/pydantic_core-2.27.1-cp313-cp313-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:206b5cf6f0c513baffaeae7bd817717140770c74528f3e4c3e1cec7871ddd61a", size = 1992972 },
240 |     { url = "https://files.pythonhosted.org/packages/bf/ba/ae4480bc0292d54b85cfb954e9d6bd226982949f8316338677d56541b85f/pydantic_core-2.27.1-cp313-cp313-musllinux_1_1_aarch64.whl", hash = "sha256:062f60e512fc7fff8b8a9d680ff0ddaaef0193dba9fa83e679c0c5f5fbd018bc", size = 2001477 },
241 |     { url = "https://files.pythonhosted.org/packages/55/b7/e26adf48c2f943092ce54ae14c3c08d0d221ad34ce80b18a50de8ed2cba8/pydantic_core-2.27.1-cp313-cp313-musllinux_1_1_armv7l.whl", hash = "sha256:a0697803ed7d4af5e4c1adf1670af078f8fcab7a86350e969f454daf598c4960", size = 2091186 },
242 |     { url = "https://files.pythonhosted.org/packages/ba/cc/8491fff5b608b3862eb36e7d29d36a1af1c945463ca4c5040bf46cc73f40/pydantic_core-2.27.1-cp313-cp313-musllinux_1_1_x86_64.whl", hash = "sha256:58ca98a950171f3151c603aeea9303ef6c235f692fe555e883591103da709b23", size = 2154429 },
243 |     { url = "https://files.pythonhosted.org/packages/78/d8/c080592d80edd3441ab7f88f865f51dae94a157fc64283c680e9f32cf6da/pydantic_core-2.27.1-cp313-none-win32.whl", hash = "sha256:8065914ff79f7eab1599bd80406681f0ad08f8e47c880f17b416c9f8f7a26d05", size = 1833713 },
244 |     { url = "https://files.pythonhosted.org/packages/83/84/5ab82a9ee2538ac95a66e51f6838d6aba6e0a03a42aa185ad2fe404a4e8f/pydantic_core-2.27.1-cp313-none-win_amd64.whl", hash = "sha256:ba630d5e3db74c79300d9a5bdaaf6200172b107f263c98a0539eeecb857b2337", size = 1987897 },
245 |     { url = "https://files.pythonhosted.org/packages/df/c3/b15fb833926d91d982fde29c0624c9f225da743c7af801dace0d4e187e71/pydantic_core-2.27.1-cp313-none-win_arm64.whl", hash = "sha256:45cf8588c066860b623cd11c4ba687f8d7175d5f7ef65f7129df8a394c502de5", size = 1882983 },
246 |     { url = "https://files.pythonhosted.org/packages/7c/60/e5eb2d462595ba1f622edbe7b1d19531e510c05c405f0b87c80c1e89d5b1/pydantic_core-2.27.1-pp310-pypy310_pp73-macosx_10_12_x86_64.whl", hash = "sha256:3fa80ac2bd5856580e242dbc202db873c60a01b20309c8319b5c5986fbe53ce6", size = 1894016 },
247 |     { url = "https://files.pythonhosted.org/packages/61/20/da7059855225038c1c4326a840908cc7ca72c7198cb6addb8b92ec81c1d6/pydantic_core-2.27.1-pp310-pypy310_pp73-macosx_11_0_arm64.whl", hash = "sha256:d950caa237bb1954f1b8c9227b5065ba6875ac9771bb8ec790d956a699b78676", size = 1771648 },
248 |     { url = "https://files.pythonhosted.org/packages/8f/fc/5485cf0b0bb38da31d1d292160a4d123b5977841ddc1122c671a30b76cfd/pydantic_core-2.27.1-pp310-pypy310_pp73-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:0e4216e64d203e39c62df627aa882f02a2438d18a5f21d7f721621f7a5d3611d", size = 1826929 },
249 |     { url = "https://files.pythonhosted.org/packages/a1/ff/fb1284a210e13a5f34c639efc54d51da136074ffbe25ec0c279cf9fbb1c4/pydantic_core-2.27.1-pp310-pypy310_pp73-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:02a3d637bd387c41d46b002f0e49c52642281edacd2740e5a42f7017feea3f2c", size = 1980591 },
250 |     { url = "https://files.pythonhosted.org/packages/f1/14/77c1887a182d05af74f6aeac7b740da3a74155d3093ccc7ee10b900cc6b5/pydantic_core-2.27.1-pp310-pypy310_pp73-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:161c27ccce13b6b0c8689418da3885d3220ed2eae2ea5e9b2f7f3d48f1d52c27", size = 1981326 },
251 |     { url = "https://files.pythonhosted.org/packages/06/aa/6f1b2747f811a9c66b5ef39d7f02fbb200479784c75e98290d70004b1253/pydantic_core-2.27.1-pp310-pypy310_pp73-musllinux_1_1_aarch64.whl", hash = "sha256:19910754e4cc9c63bc1c7f6d73aa1cfee82f42007e407c0f413695c2f7ed777f", size = 1989205 },
252 |     { url = "https://files.pythonhosted.org/packages/7a/d2/8ce2b074d6835f3c88d85f6d8a399790043e9fdb3d0e43455e72d19df8cc/pydantic_core-2.27.1-pp310-pypy310_pp73-musllinux_1_1_armv7l.whl", hash = "sha256:e173486019cc283dc9778315fa29a363579372fe67045e971e89b6365cc035ed", size = 2079616 },
253 |     { url = "https://files.pythonhosted.org/packages/65/71/af01033d4e58484c3db1e5d13e751ba5e3d6b87cc3368533df4c50932c8b/pydantic_core-2.27.1-pp310-pypy310_pp73-musllinux_1_1_x86_64.whl", hash = "sha256:af52d26579b308921b73b956153066481f064875140ccd1dfd4e77db89dbb12f", size = 2133265 },
254 |     { url = "https://files.pythonhosted.org/packages/33/72/f881b5e18fbb67cf2fb4ab253660de3c6899dbb2dba409d0b757e3559e3d/pydantic_core-2.27.1-pp310-pypy310_pp73-win_amd64.whl", hash = "sha256:981fb88516bd1ae8b0cbbd2034678a39dedc98752f264ac9bc5839d3923fa04c", size = 2001864 },
255 | ]
256 | 
257 | [[package]]
258 | name = "pydantic-settings"
259 | version = "2.7.1"
260 | source = { registry = "https://pypi.org/simple" }
261 | dependencies = [
262 |     { name = "pydantic" },
263 |     { name = "python-dotenv" },
264 | ]
265 | sdist = { url = "https://files.pythonhosted.org/packages/73/7b/c58a586cd7d9ac66d2ee4ba60ca2d241fa837c02bca9bea80a9a8c3d22a9/pydantic_settings-2.7.1.tar.gz", hash = "sha256:10c9caad35e64bfb3c2fbf70a078c0e25cc92499782e5200747f942a065dec93", size = 79920 }
266 | wheels = [
267 |     { url = "https://files.pythonhosted.org/packages/b4/46/93416fdae86d40879714f72956ac14df9c7b76f7d41a4d68aa9f71a0028b/pydantic_settings-2.7.1-py3-none-any.whl", hash = "sha256:590be9e6e24d06db33a4262829edef682500ef008565a969c73d39d5f8bfb3fd", size = 29718 },
268 | ]
269 | 
270 | [[package]]
271 | name = "pygments"
272 | version = "2.19.1"
273 | source = { registry = "https://pypi.org/simple" }
274 | sdist = { url = "https://files.pythonhosted.org/packages/7c/2d/c3338d48ea6cc0feb8446d8e6937e1408088a72a39937982cc6111d17f84/pygments-2.19.1.tar.gz", hash = "sha256:61c16d2a8576dc0649d9f39e089b5f02bcd27fba10d8fb4dcc28173f7a45151f", size = 4968581 }
275 | wheels = [
276 |     { url = "https://files.pythonhosted.org/packages/8a/0b/9fcc47d19c48b59121088dd6da2488a49d5f72dacf8262e2790a1d2c7d15/pygments-2.19.1-py3-none-any.whl", hash = "sha256:9ea1544ad55cecf4b8242fab6dd35a93bbce657034b0611ee383099054ab6d8c", size = 1225293 },
277 | ]
278 | 
279 | [[package]]
280 | name = "python-dotenv"
281 | version = "1.0.1"
282 | source = { registry = "https://pypi.org/simple" }
283 | sdist = { url = "https://files.pythonhosted.org/packages/bc/57/e84d88dfe0aec03b7a2d4327012c1627ab5f03652216c63d49846d7a6c58/python-dotenv-1.0.1.tar.gz", hash = "sha256:e324ee90a023d808f1959c46bcbc04446a10ced277783dc6ee09987c37ec10ca", size = 39115 }
284 | wheels = [
285 |     { url = "https://files.pythonhosted.org/packages/6a/3e/b68c118422ec867fa7ab88444e1274aa40681c606d59ac27de5a5588f082/python_dotenv-1.0.1-py3-none-any.whl", hash = "sha256:f7b63ef50f1b690dddf550d03497b66d609393b40b564ed0d674909a68ebf16a", size = 19863 },
286 | ]
287 | 
288 | [[package]]
289 | name = "rich"
290 | version = "13.9.4"
291 | source = { registry = "https://pypi.org/simple" }
292 | dependencies = [
293 |     { name = "markdown-it-py" },
294 |     { name = "pygments" },
295 |     { name = "typing-extensions", marker = "python_full_version < '3.11'" },
296 | ]
297 | sdist = { url = "https://files.pythonhosted.org/packages/ab/3a/0316b28d0761c6734d6bc14e770d85506c986c85ffb239e688eeaab2c2bc/rich-13.9.4.tar.gz", hash = "sha256:439594978a49a09530cff7ebc4b5c7103ef57baf48d5ea3184f21d9a2befa098", size = 223149 }
298 | wheels = [
299 |     { url = "https://files.pythonhosted.org/packages/19/71/39c7c0d87f8d4e6c020a393182060eaefeeae6c01dab6a84ec346f2567df/rich-13.9.4-py3-none-any.whl", hash = "sha256:6049d5e6ec054bf2779ab3358186963bac2ea89175919d699e378b99738c2a90", size = 242424 },
300 | ]
301 | 
302 | [[package]]
303 | name = "shellingham"
304 | version = "1.5.4"
305 | source = { registry = "https://pypi.org/simple" }
306 | sdist = { url = "https://files.pythonhosted.org/packages/58/15/8b3609fd3830ef7b27b655beb4b4e9c62313a4e8da8c676e142cc210d58e/shellingham-1.5.4.tar.gz", hash = "sha256:8dbca0739d487e5bd35ab3ca4b36e11c4078f3a234bfce294b0a0291363404de", size = 10310 }
307 | wheels = [
308 |     { url = "https://files.pythonhosted.org/packages/e0/f9/0595336914c5619e5f28a1fb793285925a8cd4b432c9da0a987836c7f822/shellingham-1.5.4-py2.py3-none-any.whl", hash = "sha256:7ecfff8f2fd72616f7481040475a65b2bf8af90a56c89140852d1120324e8686", size = 9755 },
309 | ]
310 | 
311 | [[package]]
312 | name = "sniffio"
313 | version = "1.3.1"
314 | source = { registry = "https://pypi.org/simple" }
315 | sdist = { url = "https://files.pythonhosted.org/packages/a2/87/a6771e1546d97e7e041b6ae58d80074f81b7d5121207425c964ddf5cfdbd/sniffio-1.3.1.tar.gz", hash = "sha256:f4324edc670a0f49750a81b895f35c3adb843cca46f0530f79fc1babb23789dc", size = 20372 }
316 | wheels = [
317 |     { url = "https://files.pythonhosted.org/packages/e9/44/75a9c9421471a6c4805dbf2356f7c181a29c1879239abab1ea2cc8f38b40/sniffio-1.3.1-py3-none-any.whl", hash = "sha256:2f6da418d1f1e0fddd844478f41680e794e6051915791a034ff65e5f100525a2", size = 10235 },
318 | ]
319 | 
320 | [[package]]
321 | name = "sse-starlette"
322 | version = "2.1.3"
323 | source = { registry = "https://pypi.org/simple" }
324 | dependencies = [
325 |     { name = "anyio" },
326 |     { name = "starlette" },
327 |     { name = "uvicorn" },
328 | ]
329 | sdist = { url = "https://files.pythonhosted.org/packages/72/fc/56ab9f116b2133521f532fce8d03194cf04dcac25f583cf3d839be4c0496/sse_starlette-2.1.3.tar.gz", hash = "sha256:9cd27eb35319e1414e3d2558ee7414487f9529ce3b3cf9b21434fd110e017169", size = 19678 }
330 | wheels = [
331 |     { url = "https://files.pythonhosted.org/packages/52/aa/36b271bc4fa1d2796311ee7c7283a3a1c348bad426d37293609ca4300eef/sse_starlette-2.1.3-py3-none-any.whl", hash = "sha256:8ec846438b4665b9e8c560fcdea6bc8081a3abf7942faa95e5a744999d219772", size = 9383 },
332 | ]
333 | 
334 | [[package]]
335 | name = "starlette"
336 | version = "0.41.3"
337 | source = { registry = "https://pypi.org/simple" }
338 | dependencies = [
339 |     { name = "anyio" },
340 | ]
341 | sdist = { url = "https://files.pythonhosted.org/packages/1a/4c/9b5764bd22eec91c4039ef4c55334e9187085da2d8a2df7bd570869aae18/starlette-0.41.3.tar.gz", hash = "sha256:0e4ab3d16522a255be6b28260b938eae2482f98ce5cc934cb08dce8dc3ba5835", size = 2574159 }
342 | wheels = [
343 |     { url = "https://files.pythonhosted.org/packages/96/00/2b325970b3060c7cecebab6d295afe763365822b1306a12eeab198f74323/starlette-0.41.3-py3-none-any.whl", hash = "sha256:44cedb2b7c77a9de33a8b74b2b90e9f50d11fcf25d8270ea525ad71a25374ff7", size = 73225 },
344 | ]
345 | 
346 | [[package]]
347 | name = "typer"
348 | version = "0.15.1"
349 | source = { registry = "https://pypi.org/simple" }
350 | dependencies = [
351 |     { name = "click" },
352 |     { name = "rich" },
353 |     { name = "shellingham" },
354 |     { name = "typing-extensions" },
355 | ]
356 | sdist = { url = "https://files.pythonhosted.org/packages/cb/ce/dca7b219718afd37a0068f4f2530a727c2b74a8b6e8e0c0080a4c0de4fcd/typer-0.15.1.tar.gz", hash = "sha256:a0588c0a7fa68a1978a069818657778f86abe6ff5ea6abf472f940a08bfe4f0a", size = 99789 }
357 | wheels = [
358 |     { url = "https://files.pythonhosted.org/packages/d0/cc/0a838ba5ca64dc832aa43f727bd586309846b0ffb2ce52422543e6075e8a/typer-0.15.1-py3-none-any.whl", hash = "sha256:7994fb7b8155b64d3402518560648446072864beefd44aa2dc36972a5972e847", size = 44908 },
359 | ]
360 | 
361 | [[package]]
362 | name = "typing-extensions"
363 | version = "4.12.2"
364 | source = { registry = "https://pypi.org/simple" }
365 | sdist = { url = "https://files.pythonhosted.org/packages/df/db/f35a00659bc03fec321ba8bce9420de607a1d37f8342eee1863174c69557/typing_extensions-4.12.2.tar.gz", hash = "sha256:1a7ead55c7e559dd4dee8856e3a88b41225abfe1ce8df57b7c13915fe121ffb8", size = 85321 }
366 | wheels = [
367 |     { url = "https://files.pythonhosted.org/packages/26/9f/ad63fc0248c5379346306f8668cda6e2e2e9c95e01216d2b8ffd9ff037d0/typing_extensions-4.12.2-py3-none-any.whl", hash = "sha256:04e5ca0351e0f3f85c6853954072df659d0d13fac324d0072316b67d7794700d", size = 37438 },
368 | ]
369 | 
370 | [[package]]
371 | name = "uvicorn"
372 | version = "0.32.1"
373 | source = { registry = "https://pypi.org/simple" }
374 | dependencies = [
375 |     { name = "click" },
376 |     { name = "h11" },
377 |     { name = "typing-extensions", marker = "python_full_version < '3.11'" },
378 | ]
379 | sdist = { url = "https://files.pythonhosted.org/packages/6a/3c/21dba3e7d76138725ef307e3d7ddd29b763119b3aa459d02cc05fefcff75/uvicorn-0.32.1.tar.gz", hash = "sha256:ee9519c246a72b1c084cea8d3b44ed6026e78a4a309cbedae9c37e4cb9fbb175", size = 77630 }
380 | wheels = [
381 |     { url = "https://files.pythonhosted.org/packages/50/c1/2d27b0a15826c2b71dcf6e2f5402181ef85acf439617bb2f1453125ce1f3/uvicorn-0.32.1-py3-none-any.whl", hash = "sha256:82ad92fd58da0d12af7482ecdb5f2470a04c9c9a53ced65b9bbb4a205377602e", size = 63828 },
382 | ]
383 | 
384 | [[package]]
385 | name = "weather"
386 | version = "0.1.0"
387 | source = { editable = "." }
388 | dependencies = [
389 |     { name = "httpx" },
390 |     { name = "mcp", extra = ["cli"] },
391 | ]
392 | 
393 | [package.metadata]
394 | requires-dist = [
395 |     { name = "httpx", specifier = ">=0.28.1" },
396 |     { name = "mcp", extras = ["cli"], specifier = ">=1.2.0" },
397 | ]
398 | 


--------------------------------------------------------------------------------
/weather-server-python/weather.py:
--------------------------------------------------------------------------------
 1 | from typing import Any
 2 | import httpx
 3 | from mcp.server.fastmcp import FastMCP
 4 | 
 5 | # Initialize FastMCP server
 6 | mcp = FastMCP("weather")
 7 | 
 8 | # Constants
 9 | NWS_API_BASE = "https://api.weather.gov"
10 | USER_AGENT = "weather-app/1.0"
11 | 
12 | async def make_nws_request(url: str) -> dict[str, Any] | None:
13 |     """Make a request to the NWS API with proper error handling."""
14 |     headers = {
15 |         "User-Agent": USER_AGENT,
16 |         "Accept": "application/geo+json"
17 |     }
18 |     async with httpx.AsyncClient() as client:
19 |         try:
20 |             response = await client.get(url, headers=headers, timeout=30.0)
21 |             response.raise_for_status()
22 |             return response.json()
23 |         except Exception:
24 |             return None
25 | 
26 | def format_alert(feature: dict) -> str:
27 |     """Format an alert feature into a readable string."""
28 |     props = feature["properties"]
29 |     return f"""
30 | Event: {props.get('event', 'Unknown')}
31 | Area: {props.get('areaDesc', 'Unknown')}
32 | Severity: {props.get('severity', 'Unknown')}
33 | Description: {props.get('description', 'No description available')}
34 | Instructions: {props.get('instruction', 'No specific instructions provided')}
35 | """
36 | 
37 | @mcp.tool()
38 | async def get_alerts(state: str) -> str:
39 |     """Get weather alerts for a US state.
40 | 
41 |     Args:
42 |         state: Two-letter US state code (e.g. CA, NY)
43 |     """
44 |     url = f"{NWS_API_BASE}/alerts/active/area/{state}"
45 |     data = await make_nws_request(url)
46 | 
47 |     if not data or "features" not in data:
48 |         return "Unable to fetch alerts or no alerts found."
49 | 
50 |     if not data["features"]:
51 |         return "No active alerts for this state."
52 | 
53 |     alerts = [format_alert(feature) for feature in data["features"]]
54 |     return "\n---\n".join(alerts)
55 | 
56 | @mcp.tool()
57 | async def get_forecast(latitude: float, longitude: float) -> str:
58 |     """Get weather forecast for a location.
59 | 
60 |     Args:
61 |         latitude: Latitude of the location
62 |         longitude: Longitude of the location
63 |     """
64 |     # First get the forecast grid endpoint
65 |     points_url = f"{NWS_API_BASE}/points/{latitude},{longitude}"
66 |     points_data = await make_nws_request(points_url)
67 | 
68 |     if not points_data:
69 |         return "Unable to fetch forecast data for this location."
70 | 
71 |     # Get the forecast URL from the points response
72 |     forecast_url = points_data["properties"]["forecast"]
73 |     forecast_data = await make_nws_request(forecast_url)
74 | 
75 |     if not forecast_data:
76 |         return "Unable to fetch detailed forecast."
77 | 
78 |     # Format the periods into a readable forecast
79 |     periods = forecast_data["properties"]["periods"]
80 |     forecasts = []
81 |     for period in periods[:5]:  # Only show next 5 periods
82 |         forecast = f"""
83 | {period['name']}:
84 | Temperature: {period['temperature']}°{period['temperatureUnit']}
85 | Wind: {period['windSpeed']} {period['windDirection']}
86 | Forecast: {period['detailedForecast']}
87 | """
88 |         forecasts.append(forecast)
89 | 
90 |     return "\n---\n".join(forecasts)
91 | 
92 | if __name__ == "__main__":
93 |     # Initialize and run the server
94 |     mcp.run(transport='stdio')
95 | 


--------------------------------------------------------------------------------
/weather-server-typescript/README.md:
--------------------------------------------------------------------------------
1 | # A Simple MCP weather Server written in TypeScript
2 | 
3 | See the [Quickstart](https://modelcontextprotocol.io/quickstart) tutorial for more information.
4 | 


--------------------------------------------------------------------------------
/weather-server-typescript/package-lock.json:
--------------------------------------------------------------------------------
  1 | {
  2 |   "name": "mcp-quickstart-ts",
  3 |   "version": "1.0.0",
  4 |   "lockfileVersion": 3,
  5 |   "requires": true,
  6 |   "packages": {
  7 |     "": {
  8 |       "name": "mcp-quickstart-ts",
  9 |       "version": "1.0.0",
 10 |       "license": "ISC",
 11 |       "dependencies": {
 12 |         "@modelcontextprotocol/sdk": "^1.4.0"
 13 |       },
 14 |       "bin": {
 15 |         "weather": "build/index.js"
 16 |       },
 17 |       "devDependencies": {
 18 |         "@types/node": "^22.10.0",
 19 |         "typescript": "^5.7.2"
 20 |       }
 21 |     },
 22 |     "node_modules/@modelcontextprotocol/sdk": {
 23 |       "version": "1.5.0",
 24 |       "resolved": "https://registry.npmjs.org/@modelcontextprotocol/sdk/-/sdk-1.5.0.tgz",
 25 |       "integrity": "sha512-IJ+5iVVs8FCumIHxWqpwgkwOzyhtHVKy45s6Ug7Dv0MfRpaYisH8QQ87rIWeWdOzlk8sfhitZ7HCyQZk7d6b8w==",
 26 |       "license": "MIT",
 27 |       "dependencies": {
 28 |         "content-type": "^1.0.5",
 29 |         "eventsource": "^3.0.2",
 30 |         "raw-body": "^3.0.0",
 31 |         "zod": "^3.23.8",
 32 |         "zod-to-json-schema": "^3.24.1"
 33 |       },
 34 |       "engines": {
 35 |         "node": ">=18"
 36 |       }
 37 |     },
 38 |     "node_modules/@types/node": {
 39 |       "version": "22.13.4",
 40 |       "resolved": "https://registry.npmjs.org/@types/node/-/node-22.13.4.tgz",
 41 |       "integrity": "sha512-ywP2X0DYtX3y08eFVx5fNIw7/uIv8hYUKgXoK8oayJlLnKcRfEYCxWMVE1XagUdVtCJlZT1AU4LXEABW+L1Peg==",
 42 |       "dev": true,
 43 |       "license": "MIT",
 44 |       "dependencies": {
 45 |         "undici-types": "~6.20.0"
 46 |       }
 47 |     },
 48 |     "node_modules/bytes": {
 49 |       "version": "3.1.2",
 50 |       "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
 51 |       "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
 52 |       "license": "MIT",
 53 |       "engines": {
 54 |         "node": ">= 0.8"
 55 |       }
 56 |     },
 57 |     "node_modules/content-type": {
 58 |       "version": "1.0.5",
 59 |       "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
 60 |       "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
 61 |       "license": "MIT",
 62 |       "engines": {
 63 |         "node": ">= 0.6"
 64 |       }
 65 |     },
 66 |     "node_modules/depd": {
 67 |       "version": "2.0.0",
 68 |       "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
 69 |       "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
 70 |       "license": "MIT",
 71 |       "engines": {
 72 |         "node": ">= 0.8"
 73 |       }
 74 |     },
 75 |     "node_modules/eventsource": {
 76 |       "version": "3.0.5",
 77 |       "resolved": "https://registry.npmjs.org/eventsource/-/eventsource-3.0.5.tgz",
 78 |       "integrity": "sha512-LT/5J605bx5SNyE+ITBDiM3FxffBiq9un7Vx0EwMDM3vg8sWKx/tO2zC+LMqZ+smAM0F2hblaDZUVZF0te2pSw==",
 79 |       "license": "MIT",
 80 |       "dependencies": {
 81 |         "eventsource-parser": "^3.0.0"
 82 |       },
 83 |       "engines": {
 84 |         "node": ">=18.0.0"
 85 |       }
 86 |     },
 87 |     "node_modules/eventsource-parser": {
 88 |       "version": "3.0.0",
 89 |       "resolved": "https://registry.npmjs.org/eventsource-parser/-/eventsource-parser-3.0.0.tgz",
 90 |       "integrity": "sha512-T1C0XCUimhxVQzW4zFipdx0SficT651NnkR0ZSH3yQwh+mFMdLfgjABVi4YtMTtaL4s168593DaoaRLMqryavA==",
 91 |       "license": "MIT",
 92 |       "engines": {
 93 |         "node": ">=18.0.0"
 94 |       }
 95 |     },
 96 |     "node_modules/http-errors": {
 97 |       "version": "2.0.0",
 98 |       "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
 99 |       "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
100 |       "license": "MIT",
101 |       "dependencies": {
102 |         "depd": "2.0.0",
103 |         "inherits": "2.0.4",
104 |         "setprototypeof": "1.2.0",
105 |         "statuses": "2.0.1",
106 |         "toidentifier": "1.0.1"
107 |       },
108 |       "engines": {
109 |         "node": ">= 0.8"
110 |       }
111 |     },
112 |     "node_modules/iconv-lite": {
113 |       "version": "0.6.3",
114 |       "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
115 |       "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
116 |       "license": "MIT",
117 |       "dependencies": {
118 |         "safer-buffer": ">= 2.1.2 < 3.0.0"
119 |       },
120 |       "engines": {
121 |         "node": ">=0.10.0"
122 |       }
123 |     },
124 |     "node_modules/inherits": {
125 |       "version": "2.0.4",
126 |       "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
127 |       "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
128 |       "license": "ISC"
129 |     },
130 |     "node_modules/raw-body": {
131 |       "version": "3.0.0",
132 |       "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.0.tgz",
133 |       "integrity": "sha512-RmkhL8CAyCRPXCE28MMH0z2PNWQBNk2Q09ZdxM9IOOXwxwZbN+qbWaatPkdkWIKL2ZVDImrN/pK5HTRz2PcS4g==",
134 |       "license": "MIT",
135 |       "dependencies": {
136 |         "bytes": "3.1.2",
137 |         "http-errors": "2.0.0",
138 |         "iconv-lite": "0.6.3",
139 |         "unpipe": "1.0.0"
140 |       },
141 |       "engines": {
142 |         "node": ">= 0.8"
143 |       }
144 |     },
145 |     "node_modules/safer-buffer": {
146 |       "version": "2.1.2",
147 |       "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
148 |       "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
149 |       "license": "MIT"
150 |     },
151 |     "node_modules/setprototypeof": {
152 |       "version": "1.2.0",
153 |       "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
154 |       "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
155 |       "license": "ISC"
156 |     },
157 |     "node_modules/statuses": {
158 |       "version": "2.0.1",
159 |       "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
160 |       "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
161 |       "license": "MIT",
162 |       "engines": {
163 |         "node": ">= 0.8"
164 |       }
165 |     },
166 |     "node_modules/toidentifier": {
167 |       "version": "1.0.1",
168 |       "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
169 |       "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
170 |       "license": "MIT",
171 |       "engines": {
172 |         "node": ">=0.6"
173 |       }
174 |     },
175 |     "node_modules/typescript": {
176 |       "version": "5.7.3",
177 |       "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.7.3.tgz",
178 |       "integrity": "sha512-84MVSjMEHP+FQRPy3pX9sTVV/INIex71s9TL2Gm5FG/WG1SqXeKyZ0k7/blY/4FdOzI12CBy1vGc4og/eus0fw==",
179 |       "dev": true,
180 |       "license": "Apache-2.0",
181 |       "bin": {
182 |         "tsc": "bin/tsc",
183 |         "tsserver": "bin/tsserver"
184 |       },
185 |       "engines": {
186 |         "node": ">=14.17"
187 |       }
188 |     },
189 |     "node_modules/undici-types": {
190 |       "version": "6.20.0",
191 |       "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.20.0.tgz",
192 |       "integrity": "sha512-Ny6QZ2Nju20vw1SRHe3d9jVu6gJ+4e3+MMpqu7pqE5HT6WsTSlce++GQmK5UXS8mzV8DSYHrQH+Xrf2jVcuKNg==",
193 |       "dev": true,
194 |       "license": "MIT"
195 |     },
196 |     "node_modules/unpipe": {
197 |       "version": "1.0.0",
198 |       "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
199 |       "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
200 |       "license": "MIT",
201 |       "engines": {
202 |         "node": ">= 0.8"
203 |       }
204 |     },
205 |     "node_modules/zod": {
206 |       "version": "3.24.2",
207 |       "resolved": "https://registry.npmjs.org/zod/-/zod-3.24.2.tgz",
208 |       "integrity": "sha512-lY7CDW43ECgW9u1TcT3IoXHflywfVqDYze4waEz812jR/bZ8FHDsl7pFQoSZTz5N+2NqRXs8GBwnAwo3ZNxqhQ==",
209 |       "license": "MIT",
210 |       "funding": {
211 |         "url": "https://github.com/sponsors/colinhacks"
212 |       }
213 |     },
214 |     "node_modules/zod-to-json-schema": {
215 |       "version": "3.24.1",
216 |       "resolved": "https://registry.npmjs.org/zod-to-json-schema/-/zod-to-json-schema-3.24.1.tgz",
217 |       "integrity": "sha512-3h08nf3Vw3Wl3PK+q3ow/lIil81IT2Oa7YpQyUUDsEWbXveMesdfK1xBd2RhCkynwZndAxixji/7SYJJowr62w==",
218 |       "license": "ISC",
219 |       "peerDependencies": {
220 |         "zod": "^3.24.1"
221 |       }
222 |     }
223 |   }
224 | }
225 | 


--------------------------------------------------------------------------------
/weather-server-typescript/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "mcp-quickstart-ts",
 3 |   "version": "1.0.0",
 4 |   "main": "index.js",
 5 |   "type": "module",
 6 |   "bin": {
 7 |     "weather": "./build/index.js"
 8 |   },
 9 |   "scripts": {
10 |     "build": "tsc && node -e \"require('fs').chmodSync('build/index.js', '755')\""
11 |   },
12 |   "files": [
13 |     "build"
14 |   ],
15 |   "keywords": [],
16 |   "author": "",
17 |   "license": "ISC",
18 |   "description": "",
19 |   "devDependencies": {
20 |     "@types/node": "^22.10.0",
21 |     "typescript": "^5.7.2"
22 |   },
23 |   "dependencies": {
24 |     "@modelcontextprotocol/sdk": "^1.4.0"
25 |   }
26 | }
27 | 


--------------------------------------------------------------------------------
/weather-server-typescript/src/index.ts:
--------------------------------------------------------------------------------
  1 | import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
  2 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
  3 | import { z } from "zod";
  4 | 
  5 | const NWS_API_BASE = "https://api.weather.gov";
  6 | const USER_AGENT = "weather-app/1.0";
  7 | 
  8 | // Helper function for making NWS API requests
  9 | async function makeNWSRequest<T>(url: string): Promise<T | null> {
 10 |   const headers = {
 11 |     "User-Agent": USER_AGENT,
 12 |     Accept: "application/geo+json",
 13 |   };
 14 | 
 15 |   try {
 16 |     const response = await fetch(url, { headers });
 17 |     if (!response.ok) {
 18 |       throw new Error(`HTTP error! status: ${response.status}`);
 19 |     }
 20 |     return (await response.json()) as T;
 21 |   } catch (error) {
 22 |     console.error("Error making NWS request:", error);
 23 |     return null;
 24 |   }
 25 | }
 26 | 
 27 | interface AlertFeature {
 28 |   properties: {
 29 |     event?: string;
 30 |     areaDesc?: string;
 31 |     severity?: string;
 32 |     status?: string;
 33 |     headline?: string;
 34 |   };
 35 | }
 36 | 
 37 | // Format alert data
 38 | function formatAlert(feature: AlertFeature): string {
 39 |   const props = feature.properties;
 40 |   return [
 41 |     `Event: ${props.event || "Unknown"}`,
 42 |     `Area: ${props.areaDesc || "Unknown"}`,
 43 |     `Severity: ${props.severity || "Unknown"}`,
 44 |     `Status: ${props.status || "Unknown"}`,
 45 |     `Headline: ${props.headline || "No headline"}`,
 46 |     "---",
 47 |   ].join("\n");
 48 | }
 49 | 
 50 | interface ForecastPeriod {
 51 |   name?: string;
 52 |   temperature?: number;
 53 |   temperatureUnit?: string;
 54 |   windSpeed?: string;
 55 |   windDirection?: string;
 56 |   shortForecast?: string;
 57 | }
 58 | 
 59 | interface AlertsResponse {
 60 |   features: AlertFeature[];
 61 | }
 62 | 
 63 | interface PointsResponse {
 64 |   properties: {
 65 |     forecast?: string;
 66 |   };
 67 | }
 68 | 
 69 | interface ForecastResponse {
 70 |   properties: {
 71 |     periods: ForecastPeriod[];
 72 |   };
 73 | }
 74 | 
 75 | // Create server instance
 76 | const server = new McpServer({
 77 |   name: "weather",
 78 |   version: "1.0.0",
 79 | });
 80 | 
 81 | // Register weather tools
 82 | server.tool(
 83 |   "get-alerts",
 84 |   "Get weather alerts for a state",
 85 |   {
 86 |     state: z.string().length(2).describe("Two-letter state code (e.g. CA, NY)"),
 87 |   },
 88 |   async ({ state }) => {
 89 |     const stateCode = state.toUpperCase();
 90 |     const alertsUrl = `${NWS_API_BASE}/alerts?area=${stateCode}`;
 91 |     const alertsData = await makeNWSRequest<AlertsResponse>(alertsUrl);
 92 | 
 93 |     if (!alertsData) {
 94 |       return {
 95 |         content: [
 96 |           {
 97 |             type: "text",
 98 |             text: "Failed to retrieve alerts data",
 99 |           },
100 |         ],
101 |       };
102 |     }
103 | 
104 |     const features = alertsData.features || [];
105 |     if (features.length === 0) {
106 |       return {
107 |         content: [
108 |           {
109 |             type: "text",
110 |             text: `No active alerts for ${stateCode}`,
111 |           },
112 |         ],
113 |       };
114 |     }
115 | 
116 |     const formattedAlerts = features.map(formatAlert);
117 |     const alertsText = `Active alerts for ${stateCode}:\n\n${formattedAlerts.join("\n")}`;
118 | 
119 |     return {
120 |       content: [
121 |         {
122 |           type: "text",
123 |           text: alertsText,
124 |         },
125 |       ],
126 |     };
127 |   },
128 | );
129 | 
130 | server.tool(
131 |   "get-forecast",
132 |   "Get weather forecast for a location",
133 |   {
134 |     latitude: z.number().min(-90).max(90).describe("Latitude of the location"),
135 |     longitude: z
136 |       .number()
137 |       .min(-180)
138 |       .max(180)
139 |       .describe("Longitude of the location"),
140 |   },
141 |   async ({ latitude, longitude }) => {
142 |     // Get grid point data
143 |     const pointsUrl = `${NWS_API_BASE}/points/${latitude.toFixed(4)},${longitude.toFixed(4)}`;
144 |     const pointsData = await makeNWSRequest<PointsResponse>(pointsUrl);
145 | 
146 |     if (!pointsData) {
147 |       return {
148 |         content: [
149 |           {
150 |             type: "text",
151 |             text: `Failed to retrieve grid point data for coordinates: ${latitude}, ${longitude}. This location may not be supported by the NWS API (only US locations are supported).`,
152 |           },
153 |         ],
154 |       };
155 |     }
156 | 
157 |     const forecastUrl = pointsData.properties?.forecast;
158 |     if (!forecastUrl) {
159 |       return {
160 |         content: [
161 |           {
162 |             type: "text",
163 |             text: "Failed to get forecast URL from grid point data",
164 |           },
165 |         ],
166 |       };
167 |     }
168 | 
169 |     // Get forecast data
170 |     const forecastData = await makeNWSRequest<ForecastResponse>(forecastUrl);
171 |     if (!forecastData) {
172 |       return {
173 |         content: [
174 |           {
175 |             type: "text",
176 |             text: "Failed to retrieve forecast data",
177 |           },
178 |         ],
179 |       };
180 |     }
181 | 
182 |     const periods = forecastData.properties?.periods || [];
183 |     if (periods.length === 0) {
184 |       return {
185 |         content: [
186 |           {
187 |             type: "text",
188 |             text: "No forecast periods available",
189 |           },
190 |         ],
191 |       };
192 |     }
193 | 
194 |     // Format forecast periods
195 |     const formattedForecast = periods.map((period: ForecastPeriod) =>
196 |       [
197 |         `${period.name || "Unknown"}:`,
198 |         `Temperature: ${period.temperature || "Unknown"}°${period.temperatureUnit || "F"}`,
199 |         `Wind: ${period.windSpeed || "Unknown"} ${period.windDirection || ""}`,
200 |         `${period.shortForecast || "No forecast available"}`,
201 |         "---",
202 |       ].join("\n"),
203 |     );
204 | 
205 |     const forecastText = `Forecast for ${latitude}, ${longitude}:\n\n${formattedForecast.join("\n")}`;
206 | 
207 |     return {
208 |       content: [
209 |         {
210 |           type: "text",
211 |           text: forecastText,
212 |         },
213 |       ],
214 |     };
215 |   },
216 | );
217 | 
218 | // Start the server
219 | async function main() {
220 |   const transport = new StdioServerTransport();
221 |   await server.connect(transport);
222 |   console.error("Weather MCP Server running on stdio");
223 | }
224 | 
225 | main().catch((error) => {
226 |   console.error("Fatal error in main():", error);
227 |   process.exit(1);
228 | });
229 | 


--------------------------------------------------------------------------------
/weather-server-typescript/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2022",
 4 |     "module": "Node16",
 5 |     "moduleResolution": "Node16",
 6 |     "outDir": "./build",
 7 |     "rootDir": "./src",
 8 |     "strict": true,
 9 |     "esModuleInterop": true,
10 |     "skipLibCheck": true,
11 |     "forceConsistentCasingInFileNames": true
12 |   },
13 |   "include": ["src/**/*"],
14 |   "exclude": ["node_modules"]
15 | }
16 | 


--------------------------------------------------------------------------------