├── .gitattributes
├── .github
    └── workflows
    │   └── main.yml
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc
├── CLAUDE.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
├── bin
    └── cli.js
├── client
    ├── .gitignore
    ├── README.md
    ├── bin
    │   └── cli.js
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── mcp.svg
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── components
    │   │   ├── ConsoleTab.tsx
    │   │   ├── DynamicJsonForm.tsx
    │   │   ├── History.tsx
    │   │   ├── JsonEditor.tsx
    │   │   ├── ListPane.tsx
    │   │   ├── OAuthCallback.tsx
    │   │   ├── PingTab.tsx
    │   │   ├── PromptsTab.tsx
    │   │   ├── ResourcesTab.tsx
    │   │   ├── RootsTab.tsx
    │   │   ├── SamplingTab.tsx
    │   │   ├── Sidebar.tsx
    │   │   ├── ToolsTab.tsx
    │   │   └── ui
    │   │   │   ├── alert.tsx
    │   │   │   ├── button.tsx
    │   │   │   ├── checkbox.tsx
    │   │   │   ├── combobox.tsx
    │   │   │   ├── command.tsx
    │   │   │   ├── dialog.tsx
    │   │   │   ├── input.tsx
    │   │   │   ├── label.tsx
    │   │   │   ├── popover.tsx
    │   │   │   ├── select.tsx
    │   │   │   ├── tabs.tsx
    │   │   │   └── textarea.tsx
    │   ├── index.css
    │   ├── lib
    │   │   ├── auth.ts
    │   │   ├── constants.ts
    │   │   ├── hooks
    │   │   │   ├── useCompletionState.ts
    │   │   │   ├── useConnection.ts
    │   │   │   └── useDraggablePane.ts
    │   │   ├── notificationTypes.ts
    │   │   ├── useTheme.ts
    │   │   └── utils.ts
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
├── mcp-inspector.png
├── package-lock.json
├── package.json
└── server
    ├── package.json
    ├── src
        ├── index.ts
        └── mcpProxy.ts
    └── tsconfig.json


/.gitattributes:
--------------------------------------------------------------------------------
1 | package-lock.json linguist-generated=true
2 | 


--------------------------------------------------------------------------------
/.github/workflows/main.yml:
--------------------------------------------------------------------------------
 1 | on:
 2 |   push:
 3 |     branches:
 4 |       - main
 5 | 
 6 |   pull_request:
 7 |   release:
 8 |     types: [published]
 9 | 
10 | jobs:
11 |   build:
12 |     runs-on: ubuntu-latest
13 | 
14 |     steps:
15 |       - uses: actions/checkout@v4
16 | 
17 |       - name: Check formatting
18 |         run: npx prettier --check .
19 | 
20 |       - uses: actions/setup-node@v4
21 |         with:
22 |           node-version: 18
23 |           cache: npm
24 | 
25 |       # Working around https://github.com/npm/cli/issues/4828
26 |       # - run: npm ci
27 |       - run: npm install --no-package-lock
28 |       - run: npm run build
29 | 
30 |   publish:
31 |     runs-on: ubuntu-latest
32 |     if: github.event_name == 'release'
33 |     environment: release
34 |     needs: build
35 | 
36 |     permissions:
37 |       contents: read
38 |       id-token: write
39 | 
40 |     steps:
41 |       - uses: actions/checkout@v4
42 |       - uses: actions/setup-node@v4
43 |         with:
44 |           node-version: 18
45 |           cache: npm
46 |           registry-url: "https://registry.npmjs.org"
47 | 
48 |       # Working around https://github.com/npm/cli/issues/4828
49 |       # - run: npm ci
50 |       - run: npm install --no-package-lock
51 | 
52 |       # TODO: Add --provenance once the repo is public
53 |       - run: npm run publish-all
54 |         env:
55 |           NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
56 | 


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
1 | .DS_Store
2 | node_modules
3 | server/build
4 | client/dist
5 | client/tsconfig.app.tsbuildinfo
6 | client/tsconfig.node.tsbuildinfo
7 | 


--------------------------------------------------------------------------------
/.npmrc:
--------------------------------------------------------------------------------
1 | registry="https://registry.npmjs.org/"
2 | @modelcontextprotocol:registry="https://registry.npmjs.org/"
3 | 


--------------------------------------------------------------------------------
/.prettierignore:
--------------------------------------------------------------------------------
1 | packages
2 | server/build
3 | CODE_OF_CONDUCT.md
4 | SECURITY.md
5 | 


--------------------------------------------------------------------------------
/.prettierrc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/inspector/main/.prettierrc


--------------------------------------------------------------------------------
/CLAUDE.md:
--------------------------------------------------------------------------------
 1 | # MCP Inspector Development Guide
 2 | 
 3 | ## Build Commands
 4 | 
 5 | - Build all: `npm run build`
 6 | - Build client: `npm run build-client`
 7 | - Build server: `npm run build-server`
 8 | - Development mode: `npm run dev` (use `npm run dev:windows` on Windows)
 9 | - Format code: `npm run prettier-fix`
10 | - Client lint: `cd client && npm run lint`
11 | 
12 | ## Code Style Guidelines
13 | 
14 | - Use TypeScript with proper type annotations
15 | - Follow React functional component patterns with hooks
16 | - Use ES modules (import/export) not CommonJS
17 | - Use Prettier for formatting (auto-formatted on commit)
18 | - Follow existing naming conventions:
19 |   - camelCase for variables and functions
20 |   - PascalCase for component names and types
21 |   - kebab-case for file names
22 | - Use async/await for asynchronous operations
23 | - Implement proper error handling with try/catch blocks
24 | - Use Tailwind CSS for styling in the client
25 | - Keep components small and focused on a single responsibility
26 | 
27 | ## Project Organization
28 | 
29 | The project is organized as a monorepo with workspaces:
30 | 
31 | - `client/`: React frontend with Vite, TypeScript and Tailwind
32 | - `server/`: Express backend with TypeScript
33 | - `bin/`: CLI scripts
34 | 


--------------------------------------------------------------------------------
/CODE_OF_CONDUCT.md:
--------------------------------------------------------------------------------
  1 | # Contributor Covenant Code of Conduct
  2 | 
  3 | ## Our Pledge
  4 | 
  5 | We as members, contributors, and leaders pledge to make participation in our
  6 | community a harassment-free experience for everyone, regardless of age, body
  7 | size, visible or invisible disability, ethnicity, sex characteristics, gender
  8 | identity and expression, level of experience, education, socio-economic status,
  9 | nationality, personal appearance, race, religion, or sexual identity
 10 | and orientation.
 11 | 
 12 | We pledge to act and interact in ways that contribute to an open, welcoming,
 13 | diverse, inclusive, and healthy community.
 14 | 
 15 | ## Our Standards
 16 | 
 17 | Examples of behavior that contributes to a positive environment for our
 18 | community include:
 19 | 
 20 | * Demonstrating empathy and kindness toward other people
 21 | * Being respectful of differing opinions, viewpoints, and experiences
 22 | * Giving and gracefully accepting constructive feedback
 23 | * Accepting responsibility and apologizing to those affected by our mistakes,
 24 |   and learning from the experience
 25 | * Focusing on what is best not just for us as individuals, but for the
 26 |   overall community
 27 | 
 28 | Examples of unacceptable behavior include:
 29 | 
 30 | * The use of sexualized language or imagery, and sexual attention or
 31 |   advances of any kind
 32 | * Trolling, insulting or derogatory comments, and personal or political attacks
 33 | * Public or private harassment
 34 | * Publishing others' private information, such as a physical or email
 35 |   address, without their explicit permission
 36 | * Other conduct which could reasonably be considered inappropriate in a
 37 |   professional setting
 38 | 
 39 | ## Enforcement Responsibilities
 40 | 
 41 | Community leaders are responsible for clarifying and enforcing our standards of
 42 | acceptable behavior and will take appropriate and fair corrective action in
 43 | response to any behavior that they deem inappropriate, threatening, offensive,
 44 | or harmful.
 45 | 
 46 | Community leaders have the right and responsibility to remove, edit, or reject
 47 | comments, commits, code, wiki edits, issues, and other contributions that are
 48 | not aligned to this Code of Conduct, and will communicate reasons for moderation
 49 | decisions when appropriate.
 50 | 
 51 | ## Scope
 52 | 
 53 | This Code of Conduct applies within all community spaces, and also applies when
 54 | an individual is officially representing the community in public spaces.
 55 | Examples of representing our community include using an official e-mail address,
 56 | posting via an official social media account, or acting as an appointed
 57 | representative at an online or offline event.
 58 | 
 59 | ## Enforcement
 60 | 
 61 | Instances of abusive, harassing, or otherwise unacceptable behavior may be
 62 | reported to the community leaders responsible for enforcement at
 63 | mcp-coc@anthropic.com.
 64 | All complaints will be reviewed and investigated promptly and fairly.
 65 | 
 66 | All community leaders are obligated to respect the privacy and security of the
 67 | reporter of any incident.
 68 | 
 69 | ## Enforcement Guidelines
 70 | 
 71 | Community leaders will follow these Community Impact Guidelines in determining
 72 | the consequences for any action they deem in violation of this Code of Conduct:
 73 | 
 74 | ### 1. Correction
 75 | 
 76 | **Community Impact**: Use of inappropriate language or other behavior deemed
 77 | unprofessional or unwelcome in the community.
 78 | 
 79 | **Consequence**: A private, written warning from community leaders, providing
 80 | clarity around the nature of the violation and an explanation of why the
 81 | behavior was inappropriate. A public apology may be requested.
 82 | 
 83 | ### 2. Warning
 84 | 
 85 | **Community Impact**: A violation through a single incident or series
 86 | of actions.
 87 | 
 88 | **Consequence**: A warning with consequences for continued behavior. No
 89 | interaction with the people involved, including unsolicited interaction with
 90 | those enforcing the Code of Conduct, for a specified period of time. This
 91 | includes avoiding interactions in community spaces as well as external channels
 92 | like social media. Violating these terms may lead to a temporary or
 93 | permanent ban.
 94 | 
 95 | ### 3. Temporary Ban
 96 | 
 97 | **Community Impact**: A serious violation of community standards, including
 98 | sustained inappropriate behavior.
 99 | 
100 | **Consequence**: A temporary ban from any sort of interaction or public
101 | communication with the community for a specified period of time. No public or
102 | private interaction with the people involved, including unsolicited interaction
103 | with those enforcing the Code of Conduct, is allowed during this period.
104 | Violating these terms may lead to a permanent ban.
105 | 
106 | ### 4. Permanent Ban
107 | 
108 | **Community Impact**: Demonstrating a pattern of violation of community
109 | standards, including sustained inappropriate behavior,  harassment of an
110 | individual, or aggression toward or disparagement of classes of individuals.
111 | 
112 | **Consequence**: A permanent ban from any sort of public interaction within
113 | the community.
114 | 
115 | ## Attribution
116 | 
117 | This Code of Conduct is adapted from the [Contributor Covenant][homepage],
118 | version 2.0, available at
119 | https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.
120 | 
121 | Community Impact Guidelines were inspired by [Mozilla's code of conduct
122 | enforcement ladder](https://github.com/mozilla/diversity).
123 | 
124 | [homepage]: https://www.contributor-covenant.org
125 | 
126 | For answers to common questions about this code of conduct, see the FAQ at
127 | https://www.contributor-covenant.org/faq. Translations are available at
128 | https://www.contributor-covenant.org/translations.
129 | 


--------------------------------------------------------------------------------
/CONTRIBUTING.md:
--------------------------------------------------------------------------------
 1 | # Contributing to Model Context Protocol Inspector
 2 | 
 3 | Thanks for your interest in contributing! This guide explains how to get involved.
 4 | 
 5 | ## Getting Started
 6 | 
 7 | 1. Fork the repository and clone it locally
 8 | 2. Install dependencies with `npm install`
 9 | 3. Run `npm run dev` to start both client and server in development mode
10 | 4. Use the web UI at http://localhost:5173 to interact with the inspector
11 | 
12 | ## Development Process & Pull Requests
13 | 
14 | 1. Create a new branch for your changes
15 | 2. Make your changes following existing code style and conventions
16 | 3. Test changes locally
17 | 4. Update documentation as needed
18 | 5. Use clear commit messages explaining your changes
19 | 6. Verify all changes work as expected
20 | 7. Submit a pull request
21 | 8. PRs will be reviewed by maintainers
22 | 
23 | ## Code of Conduct
24 | 
25 | This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.
26 | 
27 | ## Security
28 | 
29 | If you find a security vulnerability, please refer to our [Security Policy](SECURITY.md) for reporting instructions.
30 | 
31 | ## Questions?
32 | 
33 | Feel free to [open an issue](https://github.com/modelcontextprotocol/mcp-inspector/issues) for questions or create a discussion for general topics.
34 | 
35 | ## License
36 | 
37 | By contributing, you agree that your contributions will be licensed under the MIT license.
38 | 


--------------------------------------------------------------------------------
/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 Anthropic, PBC
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
 1 | # MCP Inspector
 2 | 
 3 | The MCP inspector is a developer tool for testing and debugging MCP servers.
 4 | 
 5 | ![MCP Inspector Screenshot](mcp-inspector.png)
 6 | 
 7 | ## Running the Inspector
 8 | 
 9 | ### From an MCP server repository
10 | 
11 | To inspect an MCP server implementation, there's no need to clone this repo. Instead, use `npx`. For example, if your server is built at `build/index.js`:
12 | 
13 | ```bash
14 | npx @modelcontextprotocol/inspector node build/index.js
15 | ```
16 | 
17 | You can pass both arguments and environment variables to your MCP server. Arguments are passed directly to your server, while environment variables can be set using the `-e` flag:
18 | 
19 | ```bash
20 | # Pass arguments only
21 | npx @modelcontextprotocol/inspector build/index.js arg1 arg2
22 | 
23 | # Pass environment variables only
24 | npx @modelcontextprotocol/inspector -e KEY=value -e KEY2=$VALUE2 node build/index.js
25 | 
26 | # Pass both environment variables and arguments
27 | npx @modelcontextprotocol/inspector -e KEY=value -e KEY2=$VALUE2 node build/index.js arg1 arg2
28 | 
29 | # Use -- to separate inspector flags from server arguments
30 | npx @modelcontextprotocol/inspector -e KEY=$VALUE -- node build/index.js -e server-flag
31 | ```
32 | 
33 | The inspector runs both a client UI (default port 5173) and an MCP proxy server (default port 3000). Open the client UI in your browser to use the inspector. You can customize the ports if needed:
34 | 
35 | ```bash
36 | CLIENT_PORT=8080 SERVER_PORT=9000 npx @modelcontextprotocol/inspector node build/index.js
37 | ```
38 | 
39 | For more details on ways to use the inspector, see the [Inspector section of the MCP docs site](https://modelcontextprotocol.io/docs/tools/inspector). For help with debugging, see the [Debugging guide](https://modelcontextprotocol.io/docs/tools/debugging).
40 | 
41 | ### Authentication
42 | 
43 | The inspector supports bearer token authentication for SSE connections. Enter your token in the UI when connecting to an MCP server, and it will be sent in the Authorization header.
44 | 
45 | ### From this repository
46 | 
47 | If you're working on the inspector itself:
48 | 
49 | Development mode:
50 | 
51 | ```bash
52 | npm run dev
53 | ```
54 | 
55 | > **Note for Windows users:**  
56 | > On Windows, use the following command instead:
57 | >
58 | > ```bash
59 | > npm run dev:windows
60 | > ```
61 | 
62 | Production mode:
63 | 
64 | ```bash
65 | npm run build
66 | npm start
67 | ```
68 | 
69 | ## License
70 | 
71 | This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.
72 | 


--------------------------------------------------------------------------------
/SECURITY.md:
--------------------------------------------------------------------------------
 1 | # Security Policy
 2 | Thank you for helping us keep the inspector secure.
 3 | 
 4 | ## Reporting Security Issues
 5 | 
 6 | This project is maintained by [Anthropic](https://www.anthropic.com/) as part of the Model Context Protocol project.
 7 | 
 8 | The security of our systems and user data is Anthropic’s top priority. We appreciate the work of security researchers acting in good faith in identifying and reporting potential vulnerabilities.
 9 | 
10 | Our security program is managed on HackerOne and we ask that any validated vulnerability in this functionality be reported through their [submission form](https://hackerone.com/anthropic-vdp/reports/new?type=team&report_type=vulnerability).
11 | 
12 | ## Vulnerability Disclosure Program
13 | 
14 | Our Vulnerability Program Guidelines are defined on our [HackerOne program page](https://hackerone.com/anthropic-vdp).
15 | 


--------------------------------------------------------------------------------
/bin/cli.js:
--------------------------------------------------------------------------------
  1 | #!/usr/bin/env node
  2 | 
  3 | import { resolve, dirname } from "path";
  4 | import { spawnPromise } from "spawn-rx";
  5 | import { fileURLToPath } from "url";
  6 | 
  7 | const __dirname = dirname(fileURLToPath(import.meta.url));
  8 | 
  9 | function delay(ms) {
 10 |   return new Promise((resolve) => setTimeout(resolve, ms));
 11 | }
 12 | 
 13 | async function main() {
 14 |   // Parse command line arguments
 15 |   const args = process.argv.slice(2);
 16 |   const envVars = {};
 17 |   const mcpServerArgs = [];
 18 |   let command = null;
 19 |   let parsingFlags = true;
 20 | 
 21 |   for (let i = 0; i < args.length; i++) {
 22 |     const arg = args[i];
 23 | 
 24 |     if (parsingFlags && arg === "--") {
 25 |       parsingFlags = false;
 26 |       continue;
 27 |     }
 28 | 
 29 |     if (parsingFlags && arg === "-e" && i + 1 < args.length) {
 30 |       const [key, value] = args[++i].split("=");
 31 |       if (key && value) {
 32 |         envVars[key] = value;
 33 |       }
 34 |     } else if (!command) {
 35 |       command = arg;
 36 |     } else {
 37 |       mcpServerArgs.push(arg);
 38 |     }
 39 |   }
 40 | 
 41 |   const inspectorServerPath = resolve(
 42 |     __dirname,
 43 |     "..",
 44 |     "server",
 45 |     "build",
 46 |     "index.js",
 47 |   );
 48 | 
 49 |   // Path to the client entry point
 50 |   const inspectorClientPath = resolve(
 51 |     __dirname,
 52 |     "..",
 53 |     "client",
 54 |     "bin",
 55 |     "cli.js",
 56 |   );
 57 | 
 58 |   const CLIENT_PORT = process.env.CLIENT_PORT ?? "5173";
 59 |   const SERVER_PORT = process.env.SERVER_PORT ?? "3000";
 60 | 
 61 |   console.log("Starting MCP inspector...");
 62 | 
 63 |   const abort = new AbortController();
 64 | 
 65 |   let cancelled = false;
 66 |   process.on("SIGINT", () => {
 67 |     cancelled = true;
 68 |     abort.abort();
 69 |   });
 70 | 
 71 |   const server = spawnPromise(
 72 |     "node",
 73 |     [
 74 |       inspectorServerPath,
 75 |       ...(command ? [`--env`, command] : []),
 76 |       ...(mcpServerArgs ? [`--args=${mcpServerArgs.join(" ")}`] : []),
 77 |     ],
 78 |     {
 79 |       env: {
 80 |         ...process.env,
 81 |         PORT: SERVER_PORT,
 82 |         MCP_ENV_VARS: JSON.stringify(envVars),
 83 |       },
 84 |       signal: abort.signal,
 85 |       echoOutput: true,
 86 |     },
 87 |   );
 88 | 
 89 |   const client = spawnPromise("node", [inspectorClientPath], {
 90 |     env: { ...process.env, PORT: CLIENT_PORT },
 91 |     signal: abort.signal,
 92 |     echoOutput: true,
 93 |   });
 94 | 
 95 |   // Make sure our server/client didn't immediately fail
 96 |   await Promise.any([server, client, delay(2 * 1000)]);
 97 |   const portParam = SERVER_PORT === "3000" ? "" : `?proxyPort=${SERVER_PORT}`;
 98 |   console.log(
 99 |     `\n🔍 MCP Inspector is up and running at http://localhost:${CLIENT_PORT}${portParam} 🚀`,
100 |   );
101 | 
102 |   try {
103 |     await Promise.any([server, client]);
104 |   } catch (e) {
105 |     if (!cancelled || process.env.DEBUG) throw e;
106 |   }
107 | 
108 |   return 0;
109 | }
110 | 
111 | main()
112 |   .then((_) => process.exit(0))
113 |   .catch((e) => {
114 |     console.error(e);
115 |     process.exit(1);
116 |   });
117 | 


--------------------------------------------------------------------------------
/client/.gitignore:
--------------------------------------------------------------------------------
 1 | # Logs
 2 | logs
 3 | *.log
 4 | npm-debug.log*
 5 | yarn-debug.log*
 6 | yarn-error.log*
 7 | pnpm-debug.log*
 8 | lerna-debug.log*
 9 | 
10 | node_modules
11 | dist
12 | dist-ssr
13 | *.local
14 | 
15 | # Editor directories and files
16 | .vscode/*
17 | !.vscode/extensions.json
18 | .idea
19 | .DS_Store
20 | *.suo
21 | *.ntvs*
22 | *.njsproj
23 | *.sln
24 | *.sw?
25 | 


--------------------------------------------------------------------------------
/client/README.md:
--------------------------------------------------------------------------------
 1 | # React + TypeScript + Vite
 2 | 
 3 | This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
 4 | 
 5 | Currently, two official plugins are available:
 6 | 
 7 | - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
 8 | - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 9 | 
10 | ## Expanding the ESLint configuration
11 | 
12 | If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:
13 | 
14 | - Configure the top-level `parserOptions` property like this:
15 | 
16 | ```js
17 | export default tseslint.config({
18 |   languageOptions: {
19 |     // other options...
20 |     parserOptions: {
21 |       project: ["./tsconfig.node.json", "./tsconfig.app.json"],
22 |       tsconfigRootDir: import.meta.dirname,
23 |     },
24 |   },
25 | });
26 | ```
27 | 
28 | - Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
29 | - Optionally add `...tseslint.configs.stylisticTypeChecked`
30 | - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:
31 | 
32 | ```js
33 | // eslint.config.js
34 | import react from "eslint-plugin-react";
35 | 
36 | export default tseslint.config({
37 |   // Set the react version
38 |   settings: { react: { version: "18.3" } },
39 |   plugins: {
40 |     // Add the react plugin
41 |     react,
42 |   },
43 |   rules: {
44 |     // other rules...
45 |     // Enable its recommended rules
46 |     ...react.configs.recommended.rules,
47 |     ...react.configs["jsx-runtime"].rules,
48 |   },
49 | });
50 | ```
51 | 


--------------------------------------------------------------------------------
/client/bin/cli.js:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env node
 2 | 
 3 | import { join, dirname } from "path";
 4 | import { fileURLToPath } from "url";
 5 | import handler from "serve-handler";
 6 | import http from "http";
 7 | 
 8 | const __dirname = dirname(fileURLToPath(import.meta.url));
 9 | const distPath = join(__dirname, "../dist");
10 | 
11 | const server = http.createServer((request, response) => {
12 |   return handler(request, response, {
13 |     public: distPath,
14 |     rewrites: [{ source: "/**", destination: "/index.html" }],
15 |   });
16 | });
17 | 
18 | const port = process.env.PORT || 5173;
19 | server.listen(port, () => {});
20 | 


--------------------------------------------------------------------------------
/client/components.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema.json",
 3 |   "style": "new-york",
 4 |   "rsc": false,
 5 |   "tsx": true,
 6 |   "tailwind": {
 7 |     "config": "tailwind.config.js",
 8 |     "css": "src/index.css",
 9 |     "baseColor": "slate",
10 |     "cssVariables": true,
11 |     "prefix": ""
12 |   },
13 |   "aliases": {
14 |     "components": "@/components",
15 |     "utils": "@/lib/utils",
16 |     "ui": "@/components/ui",
17 |     "lib": "@/lib",
18 |     "hooks": "@/hooks"
19 |   }
20 | }
21 | 


--------------------------------------------------------------------------------
/client/eslint.config.js:
--------------------------------------------------------------------------------
 1 | import js from "@eslint/js";
 2 | import globals from "globals";
 3 | import reactHooks from "eslint-plugin-react-hooks";
 4 | import reactRefresh from "eslint-plugin-react-refresh";
 5 | import tseslint from "typescript-eslint";
 6 | 
 7 | export default tseslint.config(
 8 |   { ignores: ["dist"] },
 9 |   {
10 |     extends: [js.configs.recommended, ...tseslint.configs.recommended],
11 |     files: ["**/*.{ts,tsx}"],
12 |     languageOptions: {
13 |       ecmaVersion: 2020,
14 |       globals: globals.browser,
15 |     },
16 |     plugins: {
17 |       "react-hooks": reactHooks,
18 |       "react-refresh": reactRefresh,
19 |     },
20 |     rules: {
21 |       ...reactHooks.configs.recommended.rules,
22 |       "react-refresh/only-export-components": [
23 |         "warn",
24 |         { allowConstantExport: true },
25 |       ],
26 |     },
27 |   },
28 | );
29 | 


--------------------------------------------------------------------------------
/client/index.html:
--------------------------------------------------------------------------------
 1 | <!doctype html>
 2 | <html lang="en">
 3 |   <head>
 4 |     <meta charset="UTF-8" />
 5 |     <link rel="icon" type="image/svg+xml" href="/mcp.svg" />
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 7 |     <title>MCP Inspector</title>
 8 |   </head>
 9 |   <body>
10 |     <div id="root"></div>
11 |     <script type="module" src="/src/main.tsx"></script>
12 |   </body>
13 | </html>
14 | 


--------------------------------------------------------------------------------
/client/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/inspector-client",
 3 |   "version": "0.6.0",
 4 |   "description": "Client-side application for the Model Context Protocol inspector",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/inspector/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-inspector-client": "./bin/cli.js"
12 |   },
13 |   "files": [
14 |     "bin",
15 |     "dist"
16 |   ],
17 |   "scripts": {
18 |     "dev": "vite",
19 |     "build": "tsc -b && vite build",
20 |     "lint": "eslint .",
21 |     "preview": "vite preview"
22 |   },
23 |   "dependencies": {
24 |     "@modelcontextprotocol/sdk": "^1.6.1",
25 |     "@radix-ui/react-dialog": "^1.1.3",
26 |     "@radix-ui/react-checkbox": "^1.1.4",
27 |     "@radix-ui/react-icons": "^1.3.0",
28 |     "@radix-ui/react-label": "^2.1.0",
29 |     "@radix-ui/react-popover": "^1.1.3",
30 |     "@radix-ui/react-select": "^2.1.2",
31 |     "@radix-ui/react-slot": "^1.1.0",
32 |     "@radix-ui/react-tabs": "^1.1.1",
33 |     "@types/prismjs": "^1.26.5",
34 |     "class-variance-authority": "^0.7.0",
35 |     "clsx": "^2.1.1",
36 |     "cmdk": "^1.0.4",
37 |     "lucide-react": "^0.447.0",
38 |     "prismjs": "^1.29.0",
39 |     "pkce-challenge": "^4.1.0",
40 |     "react": "^18.3.1",
41 |     "react-dom": "^18.3.1",
42 |     "react-simple-code-editor": "^0.14.1",
43 |     "react-toastify": "^10.0.6",
44 |     "serve-handler": "^6.1.6",
45 |     "tailwind-merge": "^2.5.3",
46 |     "tailwindcss-animate": "^1.0.7",
47 |     "zod": "^3.23.8"
48 |   },
49 |   "devDependencies": {
50 |     "@eslint/js": "^9.11.1",
51 |     "@types/node": "^22.7.5",
52 |     "@types/react": "^18.3.10",
53 |     "@types/react-dom": "^18.3.0",
54 |     "@types/serve-handler": "^6.1.4",
55 |     "@vitejs/plugin-react": "^4.3.2",
56 |     "autoprefixer": "^10.4.20",
57 |     "eslint": "^9.11.1",
58 |     "eslint-plugin-react-hooks": "^5.1.0-rc.0",
59 |     "eslint-plugin-react-refresh": "^0.4.12",
60 |     "globals": "^15.9.0",
61 |     "postcss": "^8.4.47",
62 |     "tailwindcss": "^3.4.13",
63 |     "typescript": "^5.5.3",
64 |     "typescript-eslint": "^8.7.0",
65 |     "vite": "^5.4.8"
66 |   }
67 | }
68 | 


--------------------------------------------------------------------------------
/client/postcss.config.js:
--------------------------------------------------------------------------------
1 | export default {
2 |   plugins: {
3 |     tailwindcss: {},
4 |     autoprefixer: {},
5 |   },
6 | };
7 | 


--------------------------------------------------------------------------------
/client/public/mcp.svg:
--------------------------------------------------------------------------------
 1 | <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
 2 | <g clip-path="url(#clip0_19_13)">
 3 | <path d="M18 84.8528L85.8822 16.9706C95.2548 7.59798 110.451 7.59798 119.823 16.9706V16.9706C129.196 26.3431 129.196 41.5391 119.823 50.9117L68.5581 102.177" stroke="black" stroke-width="12" stroke-linecap="round"/>
 4 | <path d="M69.2652 101.47L119.823 50.9117C129.196 41.5391 144.392 41.5391 153.765 50.9117L154.118 51.2652C163.491 60.6378 163.491 75.8338 154.118 85.2063L92.7248 146.6C89.6006 149.724 89.6006 154.789 92.7248 157.913L105.331 170.52" stroke="black" stroke-width="12" stroke-linecap="round"/>
 5 | <path d="M102.853 33.9411L52.6482 84.1457C43.2756 93.5183 43.2756 108.714 52.6482 118.087V118.087C62.0208 127.459 77.2167 127.459 86.5893 118.087L136.794 67.8822" stroke="black" stroke-width="12" stroke-linecap="round"/>
 6 | </g>
 7 | <defs>
 8 | <clipPath id="clip0_19_13">
 9 | <rect width="180" height="180" fill="white"/>
10 | </clipPath>
11 | </defs>
12 | </svg>
13 | 


--------------------------------------------------------------------------------
/client/src/App.css:
--------------------------------------------------------------------------------
 1 | #root {
 2 |   margin: 0 auto;
 3 | }
 4 | 
 5 | .logo {
 6 |   height: 6em;
 7 |   padding: 1.5em;
 8 |   will-change: filter;
 9 |   transition: filter 300ms;
10 | }
11 | .logo:hover {
12 |   filter: drop-shadow(0 0 2em #646cffaa);
13 | }
14 | .logo.react:hover {
15 |   filter: drop-shadow(0 0 2em #61dafbaa);
16 | }
17 | 
18 | @keyframes logo-spin {
19 |   from {
20 |     transform: rotate(0deg);
21 |   }
22 |   to {
23 |     transform: rotate(360deg);
24 |   }
25 | }
26 | 
27 | @media (prefers-reduced-motion: no-preference) {
28 |   a:nth-of-type(2) .logo {
29 |     animation: logo-spin infinite 20s linear;
30 |   }
31 | }
32 | 
33 | .card {
34 |   padding: 2em;
35 | }
36 | 
37 | .read-the-docs {
38 |   color: #888;
39 | }
40 | 


--------------------------------------------------------------------------------
/client/src/App.tsx:
--------------------------------------------------------------------------------
  1 | import {
  2 |   ClientRequest,
  3 |   CompatibilityCallToolResult,
  4 |   CompatibilityCallToolResultSchema,
  5 |   CreateMessageResult,
  6 |   EmptyResultSchema,
  7 |   GetPromptResultSchema,
  8 |   ListPromptsResultSchema,
  9 |   ListResourcesResultSchema,
 10 |   ListResourceTemplatesResultSchema,
 11 |   ListToolsResultSchema,
 12 |   ReadResourceResultSchema,
 13 |   Resource,
 14 |   ResourceTemplate,
 15 |   Root,
 16 |   ServerNotification,
 17 |   Tool,
 18 | } from "@modelcontextprotocol/sdk/types.js";
 19 | import React, { Suspense, useEffect, useRef, useState } from "react";
 20 | import { useConnection } from "./lib/hooks/useConnection";
 21 | import { useDraggablePane } from "./lib/hooks/useDraggablePane";
 22 | 
 23 | import { StdErrNotification } from "./lib/notificationTypes";
 24 | 
 25 | import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
 26 | import {
 27 |   Bell,
 28 |   Files,
 29 |   FolderTree,
 30 |   Hammer,
 31 |   Hash,
 32 |   MessageSquare,
 33 | } from "lucide-react";
 34 | 
 35 | import { toast } from "react-toastify";
 36 | import { z } from "zod";
 37 | import "./App.css";
 38 | import ConsoleTab from "./components/ConsoleTab";
 39 | import HistoryAndNotifications from "./components/History";
 40 | import PingTab from "./components/PingTab";
 41 | import PromptsTab, { Prompt } from "./components/PromptsTab";
 42 | import ResourcesTab from "./components/ResourcesTab";
 43 | import RootsTab from "./components/RootsTab";
 44 | import SamplingTab, { PendingRequest } from "./components/SamplingTab";
 45 | import Sidebar from "./components/Sidebar";
 46 | import ToolsTab from "./components/ToolsTab";
 47 | 
 48 | const params = new URLSearchParams(window.location.search);
 49 | const PROXY_PORT = params.get("proxyPort") ?? "3000";
 50 | const PROXY_SERVER_URL = `http://localhost:${PROXY_PORT}`;
 51 | 
 52 | const App = () => {
 53 |   // Handle OAuth callback route
 54 |   if (window.location.pathname === "/oauth/callback") {
 55 |     const OAuthCallback = React.lazy(
 56 |       () => import("./components/OAuthCallback"),
 57 |     );
 58 |     return (
 59 |       <Suspense fallback={<div>Loading...</div>}>
 60 |         <OAuthCallback />
 61 |       </Suspense>
 62 |     );
 63 |   }
 64 |   const [resources, setResources] = useState<Resource[]>([]);
 65 |   const [resourceTemplates, setResourceTemplates] = useState<
 66 |     ResourceTemplate[]
 67 |   >([]);
 68 |   const [resourceContent, setResourceContent] = useState<string>("");
 69 |   const [prompts, setPrompts] = useState<Prompt[]>([]);
 70 |   const [promptContent, setPromptContent] = useState<string>("");
 71 |   const [tools, setTools] = useState<Tool[]>([]);
 72 |   const [toolResult, setToolResult] =
 73 |     useState<CompatibilityCallToolResult | null>(null);
 74 |   const [errors, setErrors] = useState<Record<string, string | null>>({
 75 |     resources: null,
 76 |     prompts: null,
 77 |     tools: null,
 78 |   });
 79 |   const [command, setCommand] = useState<string>(() => {
 80 |     return localStorage.getItem("lastCommand") || "mcp-server-everything";
 81 |   });
 82 |   const [args, setArgs] = useState<string>(() => {
 83 |     return localStorage.getItem("lastArgs") || "";
 84 |   });
 85 | 
 86 |   const [sseUrl, setSseUrl] = useState<string>(() => {
 87 |     return localStorage.getItem("lastSseUrl") || "http://localhost:3001/sse";
 88 |   });
 89 |   const [transportType, setTransportType] = useState<"stdio" | "sse">(() => {
 90 |     return (
 91 |       (localStorage.getItem("lastTransportType") as "stdio" | "sse") || "stdio"
 92 |     );
 93 |   });
 94 |   const [notifications, setNotifications] = useState<ServerNotification[]>([]);
 95 |   const [stdErrNotifications, setStdErrNotifications] = useState<
 96 |     StdErrNotification[]
 97 |   >([]);
 98 |   const [roots, setRoots] = useState<Root[]>([]);
 99 |   const [env, setEnv] = useState<Record<string, string>>({});
100 |   const [bearerToken, setBearerToken] = useState<string>(() => {
101 |     return localStorage.getItem("lastBearerToken") || "";
102 |   });
103 | 
104 |   const [pendingSampleRequests, setPendingSampleRequests] = useState<
105 |     Array<
106 |       PendingRequest & {
107 |         resolve: (result: CreateMessageResult) => void;
108 |         reject: (error: Error) => void;
109 |       }
110 |     >
111 |   >([]);
112 |   const nextRequestId = useRef(0);
113 |   const rootsRef = useRef<Root[]>([]);
114 | 
115 |   const handleApproveSampling = (id: number, result: CreateMessageResult) => {
116 |     setPendingSampleRequests((prev) => {
117 |       const request = prev.find((r) => r.id === id);
118 |       request?.resolve(result);
119 |       return prev.filter((r) => r.id !== id);
120 |     });
121 |   };
122 | 
123 |   const handleRejectSampling = (id: number) => {
124 |     setPendingSampleRequests((prev) => {
125 |       const request = prev.find((r) => r.id === id);
126 |       request?.reject(new Error("Sampling request rejected"));
127 |       return prev.filter((r) => r.id !== id);
128 |     });
129 |   };
130 | 
131 |   const [selectedResource, setSelectedResource] = useState<Resource | null>(
132 |     null,
133 |   );
134 |   const [resourceSubscriptions, setResourceSubscriptions] = useState<
135 |     Set<string>
136 |   >(new Set<string>());
137 | 
138 |   const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
139 |   const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
140 |   const [nextResourceCursor, setNextResourceCursor] = useState<
141 |     string | undefined
142 |   >();
143 |   const [nextResourceTemplateCursor, setNextResourceTemplateCursor] = useState<
144 |     string | undefined
145 |   >();
146 |   const [nextPromptCursor, setNextPromptCursor] = useState<
147 |     string | undefined
148 |   >();
149 |   const [nextToolCursor, setNextToolCursor] = useState<string | undefined>();
150 |   const progressTokenRef = useRef(0);
151 | 
152 |   const { height: historyPaneHeight, handleDragStart } = useDraggablePane(300);
153 | 
154 |   const {
155 |     connectionStatus,
156 |     serverCapabilities,
157 |     mcpClient,
158 |     requestHistory,
159 |     makeRequest: makeConnectionRequest,
160 |     sendNotification,
161 |     handleCompletion,
162 |     completionsSupported,
163 |     connect: connectMcpServer,
164 |   } = useConnection({
165 |     transportType,
166 |     command,
167 |     args,
168 |     sseUrl,
169 |     env,
170 |     bearerToken,
171 |     proxyServerUrl: PROXY_SERVER_URL,
172 |     onNotification: (notification) => {
173 |       setNotifications((prev) => [...prev, notification as ServerNotification]);
174 |     },
175 |     onStdErrNotification: (notification) => {
176 |       setStdErrNotifications((prev) => [
177 |         ...prev,
178 |         notification as StdErrNotification,
179 |       ]);
180 |     },
181 |     onPendingRequest: (request, resolve, reject) => {
182 |       setPendingSampleRequests((prev) => [
183 |         ...prev,
184 |         { id: nextRequestId.current++, request, resolve, reject },
185 |       ]);
186 |     },
187 |     getRoots: () => rootsRef.current,
188 |   });
189 | 
190 |   useEffect(() => {
191 |     localStorage.setItem("lastCommand", command);
192 |   }, [command]);
193 | 
194 |   useEffect(() => {
195 |     localStorage.setItem("lastArgs", args);
196 |   }, [args]);
197 | 
198 |   useEffect(() => {
199 |     localStorage.setItem("lastSseUrl", sseUrl);
200 |   }, [sseUrl]);
201 | 
202 |   useEffect(() => {
203 |     localStorage.setItem("lastTransportType", transportType);
204 |   }, [transportType]);
205 | 
206 |   useEffect(() => {
207 |     localStorage.setItem("lastBearerToken", bearerToken);
208 |   }, [bearerToken]);
209 | 
210 |   // Auto-connect if serverUrl is provided in URL params (e.g. after OAuth callback)
211 |   useEffect(() => {
212 |     const serverUrl = params.get("serverUrl");
213 |     if (serverUrl) {
214 |       setSseUrl(serverUrl);
215 |       setTransportType("sse");
216 |       // Remove serverUrl from URL without reloading the page
217 |       const newUrl = new URL(window.location.href);
218 |       newUrl.searchParams.delete("serverUrl");
219 |       window.history.replaceState({}, "", newUrl.toString());
220 |       // Show success toast for OAuth
221 |       toast.success("Successfully authenticated with OAuth");
222 |       // Connect to the server
223 |       connectMcpServer();
224 |     }
225 |   }, []);
226 | 
227 |   useEffect(() => {
228 |     fetch(`${PROXY_SERVER_URL}/config`)
229 |       .then((response) => response.json())
230 |       .then((data) => {
231 |         setEnv(data.defaultEnvironment);
232 |         if (data.defaultCommand) {
233 |           setCommand(data.defaultCommand);
234 |         }
235 |         if (data.defaultArgs) {
236 |           setArgs(data.defaultArgs);
237 |         }
238 |       })
239 |       .catch((error) =>
240 |         console.error("Error fetching default environment:", error),
241 |       );
242 |   }, []);
243 | 
244 |   useEffect(() => {
245 |     rootsRef.current = roots;
246 |   }, [roots]);
247 | 
248 |   useEffect(() => {
249 |     if (!window.location.hash) {
250 |       window.location.hash = "resources";
251 |     }
252 |   }, []);
253 | 
254 |   const clearError = (tabKey: keyof typeof errors) => {
255 |     setErrors((prev) => ({ ...prev, [tabKey]: null }));
256 |   };
257 | 
258 |   const makeRequest = async <T extends z.ZodType>(
259 |     request: ClientRequest,
260 |     schema: T,
261 |     tabKey?: keyof typeof errors,
262 |   ) => {
263 |     try {
264 |       const response = await makeConnectionRequest(request, schema);
265 |       if (tabKey !== undefined) {
266 |         clearError(tabKey);
267 |       }
268 |       return response;
269 |     } catch (e) {
270 |       const errorString = (e as Error).message ?? String(e);
271 |       if (tabKey !== undefined) {
272 |         setErrors((prev) => ({
273 |           ...prev,
274 |           [tabKey]: errorString,
275 |         }));
276 |       }
277 |       throw e;
278 |     }
279 |   };
280 | 
281 |   const listResources = async () => {
282 |     const response = await makeRequest(
283 |       {
284 |         method: "resources/list" as const,
285 |         params: nextResourceCursor ? { cursor: nextResourceCursor } : {},
286 |       },
287 |       ListResourcesResultSchema,
288 |       "resources",
289 |     );
290 |     setResources(resources.concat(response.resources ?? []));
291 |     setNextResourceCursor(response.nextCursor);
292 |   };
293 | 
294 |   const listResourceTemplates = async () => {
295 |     const response = await makeRequest(
296 |       {
297 |         method: "resources/templates/list" as const,
298 |         params: nextResourceTemplateCursor
299 |           ? { cursor: nextResourceTemplateCursor }
300 |           : {},
301 |       },
302 |       ListResourceTemplatesResultSchema,
303 |       "resources",
304 |     );
305 |     setResourceTemplates(
306 |       resourceTemplates.concat(response.resourceTemplates ?? []),
307 |     );
308 |     setNextResourceTemplateCursor(response.nextCursor);
309 |   };
310 | 
311 |   const readResource = async (uri: string) => {
312 |     const response = await makeRequest(
313 |       {
314 |         method: "resources/read" as const,
315 |         params: { uri },
316 |       },
317 |       ReadResourceResultSchema,
318 |       "resources",
319 |     );
320 |     setResourceContent(JSON.stringify(response, null, 2));
321 |   };
322 | 
323 |   const subscribeToResource = async (uri: string) => {
324 |     if (!resourceSubscriptions.has(uri)) {
325 |       await makeRequest(
326 |         {
327 |           method: "resources/subscribe" as const,
328 |           params: { uri },
329 |         },
330 |         z.object({}),
331 |         "resources",
332 |       );
333 |       const clone = new Set(resourceSubscriptions);
334 |       clone.add(uri);
335 |       setResourceSubscriptions(clone);
336 |     }
337 |   };
338 | 
339 |   const unsubscribeFromResource = async (uri: string) => {
340 |     if (resourceSubscriptions.has(uri)) {
341 |       await makeRequest(
342 |         {
343 |           method: "resources/unsubscribe" as const,
344 |           params: { uri },
345 |         },
346 |         z.object({}),
347 |         "resources",
348 |       );
349 |       const clone = new Set(resourceSubscriptions);
350 |       clone.delete(uri);
351 |       setResourceSubscriptions(clone);
352 |     }
353 |   };
354 | 
355 |   const listPrompts = async () => {
356 |     const response = await makeRequest(
357 |       {
358 |         method: "prompts/list" as const,
359 |         params: nextPromptCursor ? { cursor: nextPromptCursor } : {},
360 |       },
361 |       ListPromptsResultSchema,
362 |       "prompts",
363 |     );
364 |     setPrompts(response.prompts);
365 |     setNextPromptCursor(response.nextCursor);
366 |   };
367 | 
368 |   const getPrompt = async (name: string, args: Record<string, string> = {}) => {
369 |     const response = await makeRequest(
370 |       {
371 |         method: "prompts/get" as const,
372 |         params: { name, arguments: args },
373 |       },
374 |       GetPromptResultSchema,
375 |       "prompts",
376 |     );
377 |     setPromptContent(JSON.stringify(response, null, 2));
378 |   };
379 | 
380 |   const listTools = async () => {
381 |     const response = await makeRequest(
382 |       {
383 |         method: "tools/list" as const,
384 |         params: nextToolCursor ? { cursor: nextToolCursor } : {},
385 |       },
386 |       ListToolsResultSchema,
387 |       "tools",
388 |     );
389 |     setTools(response.tools);
390 |     setNextToolCursor(response.nextCursor);
391 |   };
392 | 
393 |   const callTool = async (name: string, params: Record<string, unknown>) => {
394 |     const response = await makeRequest(
395 |       {
396 |         method: "tools/call" as const,
397 |         params: {
398 |           name,
399 |           arguments: params,
400 |           _meta: {
401 |             progressToken: progressTokenRef.current++,
402 |           },
403 |         },
404 |       },
405 |       CompatibilityCallToolResultSchema,
406 |       "tools",
407 |     );
408 |     setToolResult(response);
409 |   };
410 | 
411 |   const handleRootsChange = async () => {
412 |     await sendNotification({ method: "notifications/roots/list_changed" });
413 |   };
414 | 
415 |   return (
416 |     <div className="flex h-screen bg-background">
417 |       <Sidebar
418 |         connectionStatus={connectionStatus}
419 |         transportType={transportType}
420 |         setTransportType={setTransportType}
421 |         command={command}
422 |         setCommand={setCommand}
423 |         args={args}
424 |         setArgs={setArgs}
425 |         sseUrl={sseUrl}
426 |         setSseUrl={setSseUrl}
427 |         env={env}
428 |         setEnv={setEnv}
429 |         bearerToken={bearerToken}
430 |         setBearerToken={setBearerToken}
431 |         onConnect={connectMcpServer}
432 |         stdErrNotifications={stdErrNotifications}
433 |       />
434 |       <div className="flex-1 flex flex-col overflow-hidden">
435 |         <div className="flex-1 overflow-auto">
436 |           {mcpClient ? (
437 |             <Tabs
438 |               defaultValue={
439 |                 Object.keys(serverCapabilities ?? {}).includes(
440 |                   window.location.hash.slice(1),
441 |                 )
442 |                   ? window.location.hash.slice(1)
443 |                   : serverCapabilities?.resources
444 |                     ? "resources"
445 |                     : serverCapabilities?.prompts
446 |                       ? "prompts"
447 |                       : serverCapabilities?.tools
448 |                         ? "tools"
449 |                         : "ping"
450 |               }
451 |               className="w-full p-4"
452 |               onValueChange={(value) => (window.location.hash = value)}
453 |             >
454 |               <TabsList className="mb-4 p-0">
455 |                 <TabsTrigger
456 |                   value="resources"
457 |                   disabled={!serverCapabilities?.resources}
458 |                 >
459 |                   <Files className="w-4 h-4 mr-2" />
460 |                   Resources
461 |                 </TabsTrigger>
462 |                 <TabsTrigger
463 |                   value="prompts"
464 |                   disabled={!serverCapabilities?.prompts}
465 |                 >
466 |                   <MessageSquare className="w-4 h-4 mr-2" />
467 |                   Prompts
468 |                 </TabsTrigger>
469 |                 <TabsTrigger
470 |                   value="tools"
471 |                   disabled={!serverCapabilities?.tools}
472 |                 >
473 |                   <Hammer className="w-4 h-4 mr-2" />
474 |                   Tools
475 |                 </TabsTrigger>
476 |                 <TabsTrigger value="ping">
477 |                   <Bell className="w-4 h-4 mr-2" />
478 |                   Ping
479 |                 </TabsTrigger>
480 |                 <TabsTrigger value="sampling" className="relative">
481 |                   <Hash className="w-4 h-4 mr-2" />
482 |                   Sampling
483 |                   {pendingSampleRequests.length > 0 && (
484 |                     <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
485 |                       {pendingSampleRequests.length}
486 |                     </span>
487 |                   )}
488 |                 </TabsTrigger>
489 |                 <TabsTrigger value="roots">
490 |                   <FolderTree className="w-4 h-4 mr-2" />
491 |                   Roots
492 |                 </TabsTrigger>
493 |               </TabsList>
494 | 
495 |               <div className="w-full">
496 |                 {!serverCapabilities?.resources &&
497 |                 !serverCapabilities?.prompts &&
498 |                 !serverCapabilities?.tools ? (
499 |                   <div className="flex items-center justify-center p-4">
500 |                     <p className="text-lg text-gray-500">
501 |                       The connected server does not support any MCP capabilities
502 |                     </p>
503 |                   </div>
504 |                 ) : (
505 |                   <>
506 |                     <ResourcesTab
507 |                       resources={resources}
508 |                       resourceTemplates={resourceTemplates}
509 |                       listResources={() => {
510 |                         clearError("resources");
511 |                         listResources();
512 |                       }}
513 |                       clearResources={() => {
514 |                         setResources([]);
515 |                         setNextResourceCursor(undefined);
516 |                       }}
517 |                       listResourceTemplates={() => {
518 |                         clearError("resources");
519 |                         listResourceTemplates();
520 |                       }}
521 |                       clearResourceTemplates={() => {
522 |                         setResourceTemplates([]);
523 |                         setNextResourceTemplateCursor(undefined);
524 |                       }}
525 |                       readResource={(uri) => {
526 |                         clearError("resources");
527 |                         readResource(uri);
528 |                       }}
529 |                       selectedResource={selectedResource}
530 |                       setSelectedResource={(resource) => {
531 |                         clearError("resources");
532 |                         setSelectedResource(resource);
533 |                       }}
534 |                       resourceSubscriptionsSupported={
535 |                         serverCapabilities?.resources?.subscribe || false
536 |                       }
537 |                       resourceSubscriptions={resourceSubscriptions}
538 |                       subscribeToResource={(uri) => {
539 |                         clearError("resources");
540 |                         subscribeToResource(uri);
541 |                       }}
542 |                       unsubscribeFromResource={(uri) => {
543 |                         clearError("resources");
544 |                         unsubscribeFromResource(uri);
545 |                       }}
546 |                       handleCompletion={handleCompletion}
547 |                       completionsSupported={completionsSupported}
548 |                       resourceContent={resourceContent}
549 |                       nextCursor={nextResourceCursor}
550 |                       nextTemplateCursor={nextResourceTemplateCursor}
551 |                       error={errors.resources}
552 |                     />
553 |                     <PromptsTab
554 |                       prompts={prompts}
555 |                       listPrompts={() => {
556 |                         clearError("prompts");
557 |                         listPrompts();
558 |                       }}
559 |                       clearPrompts={() => {
560 |                         setPrompts([]);
561 |                         setNextPromptCursor(undefined);
562 |                       }}
563 |                       getPrompt={(name, args) => {
564 |                         clearError("prompts");
565 |                         getPrompt(name, args);
566 |                       }}
567 |                       selectedPrompt={selectedPrompt}
568 |                       setSelectedPrompt={(prompt) => {
569 |                         clearError("prompts");
570 |                         setSelectedPrompt(prompt);
571 |                       }}
572 |                       handleCompletion={handleCompletion}
573 |                       completionsSupported={completionsSupported}
574 |                       promptContent={promptContent}
575 |                       nextCursor={nextPromptCursor}
576 |                       error={errors.prompts}
577 |                     />
578 |                     <ToolsTab
579 |                       tools={tools}
580 |                       listTools={() => {
581 |                         clearError("tools");
582 |                         listTools();
583 |                       }}
584 |                       clearTools={() => {
585 |                         setTools([]);
586 |                         setNextToolCursor(undefined);
587 |                       }}
588 |                       callTool={(name, params) => {
589 |                         clearError("tools");
590 |                         callTool(name, params);
591 |                       }}
592 |                       selectedTool={selectedTool}
593 |                       setSelectedTool={(tool) => {
594 |                         clearError("tools");
595 |                         setSelectedTool(tool);
596 |                         setToolResult(null);
597 |                       }}
598 |                       toolResult={toolResult}
599 |                       nextCursor={nextToolCursor}
600 |                       error={errors.tools}
601 |                     />
602 |                     <ConsoleTab />
603 |                     <PingTab
604 |                       onPingClick={() => {
605 |                         void makeRequest(
606 |                           {
607 |                             method: "ping" as const,
608 |                           },
609 |                           EmptyResultSchema,
610 |                         );
611 |                       }}
612 |                     />
613 |                     <SamplingTab
614 |                       pendingRequests={pendingSampleRequests}
615 |                       onApprove={handleApproveSampling}
616 |                       onReject={handleRejectSampling}
617 |                     />
618 |                     <RootsTab
619 |                       roots={roots}
620 |                       setRoots={setRoots}
621 |                       onRootsChange={handleRootsChange}
622 |                     />
623 |                   </>
624 |                 )}
625 |               </div>
626 |             </Tabs>
627 |           ) : (
628 |             <div className="flex items-center justify-center h-full">
629 |               <p className="text-lg text-gray-500">
630 |                 Connect to an MCP server to start inspecting
631 |               </p>
632 |             </div>
633 |           )}
634 |         </div>
635 |         <div
636 |           className="relative border-t border-border"
637 |           style={{
638 |             height: `${historyPaneHeight}px`,
639 |           }}
640 |         >
641 |           <div
642 |             className="absolute w-full h-4 -top-2 cursor-row-resize flex items-center justify-center hover:bg-accent/50"
643 |             onMouseDown={handleDragStart}
644 |           >
645 |             <div className="w-8 h-1 rounded-full bg-border" />
646 |           </div>
647 |           <div className="h-full overflow-auto">
648 |             <HistoryAndNotifications
649 |               requestHistory={requestHistory}
650 |               serverNotifications={notifications}
651 |             />
652 |           </div>
653 |         </div>
654 |       </div>
655 |     </div>
656 |   );
657 | };
658 | 
659 | export default App;
660 | 


--------------------------------------------------------------------------------
/client/src/components/ConsoleTab.tsx:
--------------------------------------------------------------------------------
 1 | import { TabsContent } from "@/components/ui/tabs";
 2 | 
 3 | const ConsoleTab = () => (
 4 |   <TabsContent value="console" className="h-96">
 5 |     <div className="bg-gray-900 text-gray-100 p-4 rounded-lg h-full font-mono text-sm overflow-auto">
 6 |       <div className="opacity-50">Welcome to MCP Client Console</div>
 7 |       {/* Console output would go here */}
 8 |     </div>
 9 |   </TabsContent>
10 | );
11 | 
12 | export default ConsoleTab;
13 | 


--------------------------------------------------------------------------------
/client/src/components/DynamicJsonForm.tsx:
--------------------------------------------------------------------------------
  1 | import { useState } from "react";
  2 | import { Button } from "@/components/ui/button";
  3 | import { Input } from "@/components/ui/input";
  4 | import { Label } from "@/components/ui/label";
  5 | import JsonEditor from "./JsonEditor";
  6 | 
  7 | export type JsonValue =
  8 |   | string
  9 |   | number
 10 |   | boolean
 11 |   | null
 12 |   | JsonValue[]
 13 |   | { [key: string]: JsonValue };
 14 | 
 15 | export type JsonSchemaType = {
 16 |   type: "string" | "number" | "integer" | "boolean" | "array" | "object";
 17 |   description?: string;
 18 |   properties?: Record<string, JsonSchemaType>;
 19 |   items?: JsonSchemaType;
 20 | };
 21 | 
 22 | type JsonObject = { [key: string]: JsonValue };
 23 | 
 24 | interface DynamicJsonFormProps {
 25 |   schema: JsonSchemaType;
 26 |   value: JsonValue;
 27 |   onChange: (value: JsonValue) => void;
 28 |   maxDepth?: number;
 29 | }
 30 | 
 31 | const formatFieldLabel = (key: string): string => {
 32 |   return key
 33 |     .replace(/([A-Z])/g, " $1") // Insert space before capital letters
 34 |     .replace(/_/g, " ") // Replace underscores with spaces
 35 |     .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize first letter
 36 | };
 37 | 
 38 | const DynamicJsonForm = ({
 39 |   schema,
 40 |   value,
 41 |   onChange,
 42 |   maxDepth = 3,
 43 | }: DynamicJsonFormProps) => {
 44 |   const [isJsonMode, setIsJsonMode] = useState(false);
 45 |   const [jsonError, setJsonError] = useState<string>();
 46 | 
 47 |   const generateDefaultValue = (propSchema: JsonSchemaType): JsonValue => {
 48 |     switch (propSchema.type) {
 49 |       case "string":
 50 |         return "";
 51 |       case "number":
 52 |       case "integer":
 53 |         return 0;
 54 |       case "boolean":
 55 |         return false;
 56 |       case "array":
 57 |         return [];
 58 |       case "object": {
 59 |         const obj: JsonObject = {};
 60 |         if (propSchema.properties) {
 61 |           Object.entries(propSchema.properties).forEach(([key, prop]) => {
 62 |             obj[key] = generateDefaultValue(prop);
 63 |           });
 64 |         }
 65 |         return obj;
 66 |       }
 67 |       default:
 68 |         return null;
 69 |     }
 70 |   };
 71 | 
 72 |   const renderFormFields = (
 73 |     propSchema: JsonSchemaType,
 74 |     currentValue: JsonValue,
 75 |     path: string[] = [],
 76 |     depth: number = 0,
 77 |   ) => {
 78 |     if (
 79 |       depth >= maxDepth &&
 80 |       (propSchema.type === "object" || propSchema.type === "array")
 81 |     ) {
 82 |       // Render as JSON editor when max depth is reached
 83 |       return (
 84 |         <JsonEditor
 85 |           value={JSON.stringify(
 86 |             currentValue ?? generateDefaultValue(propSchema),
 87 |             null,
 88 |             2,
 89 |           )}
 90 |           onChange={(newValue) => {
 91 |             try {
 92 |               const parsed = JSON.parse(newValue);
 93 |               handleFieldChange(path, parsed);
 94 |               setJsonError(undefined);
 95 |             } catch (err) {
 96 |               setJsonError(err instanceof Error ? err.message : "Invalid JSON");
 97 |             }
 98 |           }}
 99 |           error={jsonError}
100 |         />
101 |       );
102 |     }
103 | 
104 |     switch (propSchema.type) {
105 |       case "string":
106 |       case "number":
107 |       case "integer":
108 |         return (
109 |           <Input
110 |             type={propSchema.type === "string" ? "text" : "number"}
111 |             value={(currentValue as string | number) ?? ""}
112 |             onChange={(e) =>
113 |               handleFieldChange(
114 |                 path,
115 |                 propSchema.type === "string"
116 |                   ? e.target.value
117 |                   : Number(e.target.value),
118 |               )
119 |             }
120 |             placeholder={propSchema.description}
121 |           />
122 |         );
123 |       case "boolean":
124 |         return (
125 |           <Input
126 |             type="checkbox"
127 |             checked={(currentValue as boolean) ?? false}
128 |             onChange={(e) => handleFieldChange(path, e.target.checked)}
129 |             className="w-4 h-4"
130 |           />
131 |         );
132 |       case "object":
133 |         if (!propSchema.properties) return null;
134 |         return (
135 |           <div className="space-y-4 border rounded-md p-4">
136 |             {Object.entries(propSchema.properties).map(([key, prop]) => (
137 |               <div key={key} className="space-y-2">
138 |                 <Label>{formatFieldLabel(key)}</Label>
139 |                 {renderFormFields(
140 |                   prop,
141 |                   (currentValue as JsonObject)?.[key],
142 |                   [...path, key],
143 |                   depth + 1,
144 |                 )}
145 |               </div>
146 |             ))}
147 |           </div>
148 |         );
149 |       case "array": {
150 |         const arrayValue = Array.isArray(currentValue) ? currentValue : [];
151 |         if (!propSchema.items) return null;
152 |         return (
153 |           <div className="space-y-4">
154 |             {propSchema.description && (
155 |               <p className="text-sm text-gray-600">{propSchema.description}</p>
156 |             )}
157 | 
158 |             {propSchema.items?.description && (
159 |               <p className="text-sm text-gray-500">
160 |                 Items: {propSchema.items.description}
161 |               </p>
162 |             )}
163 | 
164 |             <div className="space-y-2">
165 |               {arrayValue.map((item, index) => (
166 |                 <div key={index} className="flex items-center gap-2">
167 |                   {renderFormFields(
168 |                     propSchema.items as JsonSchemaType,
169 |                     item,
170 |                     [...path, index.toString()],
171 |                     depth + 1,
172 |                   )}
173 |                   <Button
174 |                     variant="outline"
175 |                     size="sm"
176 |                     onClick={() => {
177 |                       const newArray = [...arrayValue];
178 |                       newArray.splice(index, 1);
179 |                       handleFieldChange(path, newArray);
180 |                     }}
181 |                   >
182 |                     Remove
183 |                   </Button>
184 |                 </div>
185 |               ))}
186 |               <Button
187 |                 variant="outline"
188 |                 size="sm"
189 |                 onClick={() => {
190 |                   handleFieldChange(path, [
191 |                     ...arrayValue,
192 |                     generateDefaultValue(propSchema.items as JsonSchemaType),
193 |                   ]);
194 |                 }}
195 |                 title={
196 |                   propSchema.items?.description
197 |                     ? `Add new ${propSchema.items.description}`
198 |                     : "Add new item"
199 |                 }
200 |               >
201 |                 Add Item
202 |               </Button>
203 |             </div>
204 |           </div>
205 |         );
206 |       }
207 |       default:
208 |         return null;
209 |     }
210 |   };
211 | 
212 |   const handleFieldChange = (path: string[], fieldValue: JsonValue) => {
213 |     if (path.length === 0) {
214 |       onChange(fieldValue);
215 |       return;
216 |     }
217 | 
218 |     const updateArray = (
219 |       array: JsonValue[],
220 |       path: string[],
221 |       value: JsonValue,
222 |     ): JsonValue[] => {
223 |       const [index, ...restPath] = path;
224 |       const arrayIndex = Number(index);
225 | 
226 |       // Validate array index
227 |       if (isNaN(arrayIndex)) {
228 |         console.error(`Invalid array index: ${index}`);
229 |         return array;
230 |       }
231 | 
232 |       // Check array bounds
233 |       if (arrayIndex < 0) {
234 |         console.error(`Array index out of bounds: ${arrayIndex} < 0`);
235 |         return array;
236 |       }
237 | 
238 |       const newArray = [...array];
239 | 
240 |       if (restPath.length === 0) {
241 |         newArray[arrayIndex] = value;
242 |       } else {
243 |         // Ensure index position exists
244 |         if (arrayIndex >= array.length) {
245 |           console.warn(`Extending array to index ${arrayIndex}`);
246 |           newArray.length = arrayIndex + 1;
247 |           newArray.fill(null, array.length, arrayIndex);
248 |         }
249 |         newArray[arrayIndex] = updateValue(
250 |           newArray[arrayIndex],
251 |           restPath,
252 |           value,
253 |         );
254 |       }
255 |       return newArray;
256 |     };
257 | 
258 |     const updateObject = (
259 |       obj: JsonObject,
260 |       path: string[],
261 |       value: JsonValue,
262 |     ): JsonObject => {
263 |       const [key, ...restPath] = path;
264 | 
265 |       // Validate object key
266 |       if (typeof key !== "string") {
267 |         console.error(`Invalid object key: ${key}`);
268 |         return obj;
269 |       }
270 | 
271 |       const newObj = { ...obj };
272 | 
273 |       if (restPath.length === 0) {
274 |         newObj[key] = value;
275 |       } else {
276 |         // Ensure key exists
277 |         if (!(key in newObj)) {
278 |           console.warn(`Creating new key in object: ${key}`);
279 |           newObj[key] = {};
280 |         }
281 |         newObj[key] = updateValue(newObj[key], restPath, value);
282 |       }
283 |       return newObj;
284 |     };
285 | 
286 |     const updateValue = (
287 |       current: JsonValue,
288 |       path: string[],
289 |       value: JsonValue,
290 |     ): JsonValue => {
291 |       if (path.length === 0) return value;
292 | 
293 |       try {
294 |         if (!current) {
295 |           current = !isNaN(Number(path[0])) ? [] : {};
296 |         }
297 | 
298 |         // Type checking
299 |         if (Array.isArray(current)) {
300 |           return updateArray(current, path, value);
301 |         } else if (typeof current === "object" && current !== null) {
302 |           return updateObject(current, path, value);
303 |         } else {
304 |           console.error(
305 |             `Cannot update path ${path.join(".")} in non-object/array value:`,
306 |             current,
307 |           );
308 |           return current;
309 |         }
310 |       } catch (error) {
311 |         console.error(`Error updating value at path ${path.join(".")}:`, error);
312 |         return current;
313 |       }
314 |     };
315 | 
316 |     try {
317 |       const newValue = updateValue(value, path, fieldValue);
318 |       onChange(newValue);
319 |     } catch (error) {
320 |       console.error("Failed to update form value:", error);
321 |       // Keep the original value unchanged
322 |       onChange(value);
323 |     }
324 |   };
325 | 
326 |   return (
327 |     <div className="space-y-4">
328 |       <div className="flex justify-end">
329 |         <Button
330 |           variant="outline"
331 |           size="sm"
332 |           onClick={() => setIsJsonMode(!isJsonMode)}
333 |         >
334 |           {isJsonMode ? "Switch to Form" : "Switch to JSON"}
335 |         </Button>
336 |       </div>
337 | 
338 |       {isJsonMode ? (
339 |         <JsonEditor
340 |           value={JSON.stringify(value ?? generateDefaultValue(schema), null, 2)}
341 |           onChange={(newValue) => {
342 |             try {
343 |               onChange(JSON.parse(newValue));
344 |               setJsonError(undefined);
345 |             } catch (err) {
346 |               setJsonError(err instanceof Error ? err.message : "Invalid JSON");
347 |             }
348 |           }}
349 |           error={jsonError}
350 |         />
351 |       ) : (
352 |         renderFormFields(schema, value)
353 |       )}
354 |     </div>
355 |   );
356 | };
357 | 
358 | export default DynamicJsonForm;
359 | 


--------------------------------------------------------------------------------
/client/src/components/History.tsx:
--------------------------------------------------------------------------------
  1 | import { ServerNotification } from "@modelcontextprotocol/sdk/types.js";
  2 | import { Copy } from "lucide-react";
  3 | import { useState } from "react";
  4 | 
  5 | const HistoryAndNotifications = ({
  6 |   requestHistory,
  7 |   serverNotifications,
  8 | }: {
  9 |   requestHistory: Array<{ request: string; response?: string }>;
 10 |   serverNotifications: ServerNotification[];
 11 | }) => {
 12 |   const [expandedRequests, setExpandedRequests] = useState<{
 13 |     [key: number]: boolean;
 14 |   }>({});
 15 |   const [expandedNotifications, setExpandedNotifications] = useState<{
 16 |     [key: number]: boolean;
 17 |   }>({});
 18 | 
 19 |   const toggleRequestExpansion = (index: number) => {
 20 |     setExpandedRequests((prev) => ({ ...prev, [index]: !prev[index] }));
 21 |   };
 22 | 
 23 |   const toggleNotificationExpansion = (index: number) => {
 24 |     setExpandedNotifications((prev) => ({ ...prev, [index]: !prev[index] }));
 25 |   };
 26 | 
 27 |   const copyToClipboard = (text: string) => {
 28 |     navigator.clipboard.writeText(text);
 29 |   };
 30 | 
 31 |   return (
 32 |     <div className="bg-card overflow-hidden flex h-full">
 33 |       <div className="flex-1 overflow-y-auto p-4 border-r">
 34 |         <h2 className="text-lg font-semibold mb-4">History</h2>
 35 |         {requestHistory.length === 0 ? (
 36 |           <p className="text-sm text-gray-500 italic">No history yet</p>
 37 |         ) : (
 38 |           <ul className="space-y-3">
 39 |             {requestHistory
 40 |               .slice()
 41 |               .reverse()
 42 |               .map((request, index) => (
 43 |                 <li
 44 |                   key={index}
 45 |                   className="text-sm text-foreground bg-secondary p-2 rounded"
 46 |                 >
 47 |                   <div
 48 |                     className="flex justify-between items-center cursor-pointer"
 49 |                     onClick={() =>
 50 |                       toggleRequestExpansion(requestHistory.length - 1 - index)
 51 |                     }
 52 |                   >
 53 |                     <span className="font-mono">
 54 |                       {requestHistory.length - index}.{" "}
 55 |                       {JSON.parse(request.request).method}
 56 |                     </span>
 57 |                     <span>
 58 |                       {expandedRequests[requestHistory.length - 1 - index]
 59 |                         ? "▼"
 60 |                         : "▶"}
 61 |                     </span>
 62 |                   </div>
 63 |                   {expandedRequests[requestHistory.length - 1 - index] && (
 64 |                     <>
 65 |                       <div className="mt-2">
 66 |                         <div className="flex justify-between items-center mb-1">
 67 |                           <span className="font-semibold text-blue-600">
 68 |                             Request:
 69 |                           </span>
 70 |                           <button
 71 |                             onClick={() => copyToClipboard(request.request)}
 72 |                             className="text-blue-500 hover:text-blue-700"
 73 |                           >
 74 |                             <Copy size={16} />
 75 |                           </button>
 76 |                         </div>
 77 |                         <pre className="whitespace-pre-wrap break-words bg-background p-2 rounded">
 78 |                           {JSON.stringify(JSON.parse(request.request), null, 2)}
 79 |                         </pre>
 80 |                       </div>
 81 |                       {request.response && (
 82 |                         <div className="mt-2">
 83 |                           <div className="flex justify-between items-center mb-1">
 84 |                             <span className="font-semibold text-green-600">
 85 |                               Response:
 86 |                             </span>
 87 |                             <button
 88 |                               onClick={() => copyToClipboard(request.response!)}
 89 |                               className="text-blue-500 hover:text-blue-700"
 90 |                             >
 91 |                               <Copy size={16} />
 92 |                             </button>
 93 |                           </div>
 94 |                           <pre className="whitespace-pre-wrap break-words bg-background p-2 rounded">
 95 |                             {JSON.stringify(
 96 |                               JSON.parse(request.response),
 97 |                               null,
 98 |                               2,
 99 |                             )}
100 |                           </pre>
101 |                         </div>
102 |                       )}
103 |                     </>
104 |                   )}
105 |                 </li>
106 |               ))}
107 |           </ul>
108 |         )}
109 |       </div>
110 |       <div className="flex-1 overflow-y-auto p-4">
111 |         <h2 className="text-lg font-semibold mb-4">Server Notifications</h2>
112 |         {serverNotifications.length === 0 ? (
113 |           <p className="text-sm text-gray-500 italic">No notifications yet</p>
114 |         ) : (
115 |           <ul className="space-y-3">
116 |             {serverNotifications
117 |               .slice()
118 |               .reverse()
119 |               .map((notification, index) => (
120 |                 <li
121 |                   key={index}
122 |                   className="text-sm text-foreground bg-secondary p-2 rounded"
123 |                 >
124 |                   <div
125 |                     className="flex justify-between items-center cursor-pointer"
126 |                     onClick={() => toggleNotificationExpansion(index)}
127 |                   >
128 |                     <span className="font-mono">
129 |                       {serverNotifications.length - index}.{" "}
130 |                       {notification.method}
131 |                     </span>
132 |                     <span>{expandedNotifications[index] ? "▼" : "▶"}</span>
133 |                   </div>
134 |                   {expandedNotifications[index] && (
135 |                     <div className="mt-2">
136 |                       <div className="flex justify-between items-center mb-1">
137 |                         <span className="font-semibold text-purple-600">
138 |                           Details:
139 |                         </span>
140 |                         <button
141 |                           onClick={() =>
142 |                             copyToClipboard(JSON.stringify(notification))
143 |                           }
144 |                           className="text-blue-500 hover:text-blue-700"
145 |                         >
146 |                           <Copy size={16} />
147 |                         </button>
148 |                       </div>
149 |                       <pre className="whitespace-pre-wrap break-words bg-background p-2 rounded">
150 |                         {JSON.stringify(notification, null, 2)}
151 |                       </pre>
152 |                     </div>
153 |                   )}
154 |                 </li>
155 |               ))}
156 |           </ul>
157 |         )}
158 |       </div>
159 |     </div>
160 |   );
161 | };
162 | 
163 | export default HistoryAndNotifications;
164 | 


--------------------------------------------------------------------------------
/client/src/components/JsonEditor.tsx:
--------------------------------------------------------------------------------
 1 | import Editor from "react-simple-code-editor";
 2 | import Prism from "prismjs";
 3 | import "prismjs/components/prism-json";
 4 | import "prismjs/themes/prism.css";
 5 | import { Button } from "@/components/ui/button";
 6 | 
 7 | interface JsonEditorProps {
 8 |   value: string;
 9 |   onChange: (value: string) => void;
10 |   error?: string;
11 | }
12 | 
13 | const JsonEditor = ({ value, onChange, error }: JsonEditorProps) => {
14 |   const formatJson = (json: string): string => {
15 |     try {
16 |       return JSON.stringify(JSON.parse(json), null, 2);
17 |     } catch {
18 |       return json;
19 |     }
20 |   };
21 | 
22 |   return (
23 |     <div className="relative space-y-2">
24 |       <div className="flex justify-end">
25 |         <Button
26 |           variant="outline"
27 |           size="sm"
28 |           onClick={() => onChange(formatJson(value))}
29 |         >
30 |           Format JSON
31 |         </Button>
32 |       </div>
33 |       <div
34 |         className={`border rounded-md ${
35 |           error ? "border-red-500" : "border-gray-200 dark:border-gray-800"
36 |         }`}
37 |       >
38 |         <Editor
39 |           value={value}
40 |           onValueChange={onChange}
41 |           highlight={(code) =>
42 |             Prism.highlight(code, Prism.languages.json, "json")
43 |           }
44 |           padding={10}
45 |           style={{
46 |             fontFamily: '"Fira code", "Fira Mono", monospace',
47 |             fontSize: 14,
48 |             backgroundColor: "transparent",
49 |             minHeight: "100px",
50 |           }}
51 |           className="w-full"
52 |         />
53 |       </div>
54 |       {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
55 |     </div>
56 |   );
57 | };
58 | 
59 | export default JsonEditor;
60 | 


--------------------------------------------------------------------------------
/client/src/components/ListPane.tsx:
--------------------------------------------------------------------------------
 1 | import { Button } from "./ui/button";
 2 | 
 3 | type ListPaneProps<T> = {
 4 |   items: T[];
 5 |   listItems: () => void;
 6 |   clearItems: () => void;
 7 |   setSelectedItem: (item: T) => void;
 8 |   renderItem: (item: T) => React.ReactNode;
 9 |   title: string;
10 |   buttonText: string;
11 |   isButtonDisabled?: boolean;
12 | };
13 | 
14 | const ListPane = <T extends object>({
15 |   items,
16 |   listItems,
17 |   clearItems,
18 |   setSelectedItem,
19 |   renderItem,
20 |   title,
21 |   buttonText,
22 |   isButtonDisabled,
23 | }: ListPaneProps<T>) => (
24 |   <div className="bg-card rounded-lg shadow">
25 |     <div className="p-4 border-b border-gray-200 dark:border-gray-700">
26 |       <h3 className="font-semibold dark:text-white">{title}</h3>
27 |     </div>
28 |     <div className="p-4">
29 |       <Button
30 |         variant="outline"
31 |         className="w-full mb-4"
32 |         onClick={listItems}
33 |         disabled={isButtonDisabled}
34 |       >
35 |         {buttonText}
36 |       </Button>
37 |       <Button
38 |         variant="outline"
39 |         className="w-full mb-4"
40 |         onClick={clearItems}
41 |         disabled={items.length === 0}
42 |       >
43 |         Clear
44 |       </Button>
45 |       <div className="space-y-2 overflow-y-auto max-h-96">
46 |         {items.map((item, index) => (
47 |           <div
48 |             key={index}
49 |             className="flex items-center p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
50 |             onClick={() => setSelectedItem(item)}
51 |           >
52 |             {renderItem(item)}
53 |           </div>
54 |         ))}
55 |       </div>
56 |     </div>
57 |   </div>
58 | );
59 | 
60 | export default ListPane;
61 | 


--------------------------------------------------------------------------------
/client/src/components/OAuthCallback.tsx:
--------------------------------------------------------------------------------
 1 | import { useEffect, useRef } from "react";
 2 | import { authProvider } from "../lib/auth";
 3 | import { SESSION_KEYS } from "../lib/constants";
 4 | import { auth } from "@modelcontextprotocol/sdk/client/auth.js";
 5 | 
 6 | const OAuthCallback = () => {
 7 |   const hasProcessedRef = useRef(false);
 8 | 
 9 |   useEffect(() => {
10 |     const handleCallback = async () => {
11 |       // Skip if we've already processed this callback
12 |       if (hasProcessedRef.current) {
13 |         return;
14 |       }
15 |       hasProcessedRef.current = true;
16 | 
17 |       const params = new URLSearchParams(window.location.search);
18 |       const code = params.get("code");
19 |       const serverUrl = sessionStorage.getItem(SESSION_KEYS.SERVER_URL);
20 | 
21 |       if (!code || !serverUrl) {
22 |         console.error("Missing code or server URL");
23 |         window.location.href = "/";
24 |         return;
25 |       }
26 | 
27 |       try {
28 |         const result = await auth(authProvider, {
29 |           serverUrl,
30 |           authorizationCode: code,
31 |         });
32 |         if (result !== "AUTHORIZED") {
33 |           throw new Error(
34 |             `Expected to be authorized after providing auth code, got: ${result}`,
35 |           );
36 |         }
37 | 
38 |         // Redirect back to the main app with server URL to trigger auto-connect
39 |         window.location.href = `/?serverUrl=${encodeURIComponent(serverUrl)}`;
40 |       } catch (error) {
41 |         console.error("OAuth callback error:", error);
42 |         window.location.href = "/";
43 |       }
44 |     };
45 | 
46 |     void handleCallback();
47 |   }, []);
48 | 
49 |   return (
50 |     <div className="flex items-center justify-center h-screen">
51 |       <p className="text-lg text-gray-500">Processing OAuth callback...</p>
52 |     </div>
53 |   );
54 | };
55 | 
56 | export default OAuthCallback;
57 | 


--------------------------------------------------------------------------------
/client/src/components/PingTab.tsx:
--------------------------------------------------------------------------------
 1 | import { TabsContent } from "@/components/ui/tabs";
 2 | import { Button } from "@/components/ui/button";
 3 | 
 4 | const PingTab = ({ onPingClick }: { onPingClick: () => void }) => {
 5 |   return (
 6 |     <TabsContent value="ping" className="grid grid-cols-2 gap-4">
 7 |       <div className="col-span-2 flex justify-center items-center">
 8 |         <Button
 9 |           onClick={onPingClick}
10 |           className="font-bold py-6 px-12 rounded-full"
11 |         >
12 |           Ping Server
13 |         </Button>
14 |       </div>
15 |     </TabsContent>
16 |   );
17 | };
18 | 
19 | export default PingTab;
20 | 


--------------------------------------------------------------------------------
/client/src/components/PromptsTab.tsx:
--------------------------------------------------------------------------------
  1 | import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
  2 | import { Button } from "@/components/ui/button";
  3 | import { Combobox } from "@/components/ui/combobox";
  4 | import { Label } from "@/components/ui/label";
  5 | import { TabsContent } from "@/components/ui/tabs";
  6 | import { Textarea } from "@/components/ui/textarea";
  7 | import {
  8 |   ListPromptsResult,
  9 |   PromptReference,
 10 |   ResourceReference,
 11 | } from "@modelcontextprotocol/sdk/types.js";
 12 | import { AlertCircle } from "lucide-react";
 13 | import { useEffect, useState } from "react";
 14 | import ListPane from "./ListPane";
 15 | import { useCompletionState } from "@/lib/hooks/useCompletionState";
 16 | 
 17 | export type Prompt = {
 18 |   name: string;
 19 |   description?: string;
 20 |   arguments?: {
 21 |     name: string;
 22 |     description?: string;
 23 |     required?: boolean;
 24 |   }[];
 25 | };
 26 | 
 27 | const PromptsTab = ({
 28 |   prompts,
 29 |   listPrompts,
 30 |   clearPrompts,
 31 |   getPrompt,
 32 |   selectedPrompt,
 33 |   setSelectedPrompt,
 34 |   handleCompletion,
 35 |   completionsSupported,
 36 |   promptContent,
 37 |   nextCursor,
 38 |   error,
 39 | }: {
 40 |   prompts: Prompt[];
 41 |   listPrompts: () => void;
 42 |   clearPrompts: () => void;
 43 |   getPrompt: (name: string, args: Record<string, string>) => void;
 44 |   selectedPrompt: Prompt | null;
 45 |   setSelectedPrompt: (prompt: Prompt) => void;
 46 |   handleCompletion: (
 47 |     ref: PromptReference | ResourceReference,
 48 |     argName: string,
 49 |     value: string,
 50 |   ) => Promise<string[]>;
 51 |   completionsSupported: boolean;
 52 |   promptContent: string;
 53 |   nextCursor: ListPromptsResult["nextCursor"];
 54 |   error: string | null;
 55 | }) => {
 56 |   const [promptArgs, setPromptArgs] = useState<Record<string, string>>({});
 57 |   const { completions, clearCompletions, requestCompletions } =
 58 |     useCompletionState(handleCompletion, completionsSupported);
 59 | 
 60 |   useEffect(() => {
 61 |     clearCompletions();
 62 |   }, [clearCompletions, selectedPrompt]);
 63 | 
 64 |   const handleInputChange = async (argName: string, value: string) => {
 65 |     setPromptArgs((prev) => ({ ...prev, [argName]: value }));
 66 | 
 67 |     if (selectedPrompt) {
 68 |       requestCompletions(
 69 |         {
 70 |           type: "ref/prompt",
 71 |           name: selectedPrompt.name,
 72 |         },
 73 |         argName,
 74 |         value,
 75 |       );
 76 |     }
 77 |   };
 78 | 
 79 |   const handleGetPrompt = () => {
 80 |     if (selectedPrompt) {
 81 |       getPrompt(selectedPrompt.name, promptArgs);
 82 |     }
 83 |   };
 84 | 
 85 |   return (
 86 |     <TabsContent value="prompts" className="grid grid-cols-2 gap-4">
 87 |       <ListPane
 88 |         items={prompts}
 89 |         listItems={listPrompts}
 90 |         clearItems={clearPrompts}
 91 |         setSelectedItem={(prompt) => {
 92 |           setSelectedPrompt(prompt);
 93 |           setPromptArgs({});
 94 |         }}
 95 |         renderItem={(prompt) => (
 96 |           <>
 97 |             <span className="flex-1">{prompt.name}</span>
 98 |             <span className="text-sm text-gray-500">{prompt.description}</span>
 99 |           </>
100 |         )}
101 |         title="Prompts"
102 |         buttonText={nextCursor ? "List More Prompts" : "List Prompts"}
103 |         isButtonDisabled={!nextCursor && prompts.length > 0}
104 |       />
105 | 
106 |       <div className="bg-card rounded-lg shadow">
107 |         <div className="p-4 border-b border-gray-200">
108 |           <h3 className="font-semibold">
109 |             {selectedPrompt ? selectedPrompt.name : "Select a prompt"}
110 |           </h3>
111 |         </div>
112 |         <div className="p-4">
113 |           {error ? (
114 |             <Alert variant="destructive">
115 |               <AlertCircle className="h-4 w-4" />
116 |               <AlertTitle>Error</AlertTitle>
117 |               <AlertDescription>{error}</AlertDescription>
118 |             </Alert>
119 |           ) : selectedPrompt ? (
120 |             <div className="space-y-4">
121 |               {selectedPrompt.description && (
122 |                 <p className="text-sm text-gray-600">
123 |                   {selectedPrompt.description}
124 |                 </p>
125 |               )}
126 |               {selectedPrompt.arguments?.map((arg) => (
127 |                 <div key={arg.name}>
128 |                   <Label htmlFor={arg.name}>{arg.name}</Label>
129 |                   <Combobox
130 |                     id={arg.name}
131 |                     placeholder={`Enter ${arg.name}`}
132 |                     value={promptArgs[arg.name] || ""}
133 |                     onChange={(value) => handleInputChange(arg.name, value)}
134 |                     onInputChange={(value) =>
135 |                       handleInputChange(arg.name, value)
136 |                     }
137 |                     options={completions[arg.name] || []}
138 |                   />
139 | 
140 |                   {arg.description && (
141 |                     <p className="text-xs text-gray-500 mt-1">
142 |                       {arg.description}
143 |                       {arg.required && (
144 |                         <span className="text-xs mt-1 ml-1">(Required)</span>
145 |                       )}
146 |                     </p>
147 |                   )}
148 |                 </div>
149 |               ))}
150 |               <Button onClick={handleGetPrompt} className="w-full">
151 |                 Get Prompt
152 |               </Button>
153 |               {promptContent && (
154 |                 <Textarea
155 |                   value={promptContent}
156 |                   readOnly
157 |                   className="h-64 font-mono"
158 |                 />
159 |               )}
160 |             </div>
161 |           ) : (
162 |             <Alert>
163 |               <AlertDescription>
164 |                 Select a prompt from the list to view and use it
165 |               </AlertDescription>
166 |             </Alert>
167 |           )}
168 |         </div>
169 |       </div>
170 |     </TabsContent>
171 |   );
172 | };
173 | 
174 | export default PromptsTab;
175 | 


--------------------------------------------------------------------------------
/client/src/components/ResourcesTab.tsx:
--------------------------------------------------------------------------------
  1 | import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
  2 | import { Button } from "@/components/ui/button";
  3 | import { Label } from "@/components/ui/label";
  4 | import { Combobox } from "@/components/ui/combobox";
  5 | import { TabsContent } from "@/components/ui/tabs";
  6 | import {
  7 |   ListResourcesResult,
  8 |   Resource,
  9 |   ResourceTemplate,
 10 |   ListResourceTemplatesResult,
 11 |   ResourceReference,
 12 |   PromptReference,
 13 | } from "@modelcontextprotocol/sdk/types.js";
 14 | import { AlertCircle, ChevronRight, FileText, RefreshCw } from "lucide-react";
 15 | import ListPane from "./ListPane";
 16 | import { useEffect, useState } from "react";
 17 | import { useCompletionState } from "@/lib/hooks/useCompletionState";
 18 | 
 19 | const ResourcesTab = ({
 20 |   resources,
 21 |   resourceTemplates,
 22 |   listResources,
 23 |   clearResources,
 24 |   listResourceTemplates,
 25 |   clearResourceTemplates,
 26 |   readResource,
 27 |   selectedResource,
 28 |   setSelectedResource,
 29 |   resourceSubscriptionsSupported,
 30 |   resourceSubscriptions,
 31 |   subscribeToResource,
 32 |   unsubscribeFromResource,
 33 |   handleCompletion,
 34 |   completionsSupported,
 35 |   resourceContent,
 36 |   nextCursor,
 37 |   nextTemplateCursor,
 38 |   error,
 39 | }: {
 40 |   resources: Resource[];
 41 |   resourceTemplates: ResourceTemplate[];
 42 |   listResources: () => void;
 43 |   clearResources: () => void;
 44 |   listResourceTemplates: () => void;
 45 |   clearResourceTemplates: () => void;
 46 |   readResource: (uri: string) => void;
 47 |   selectedResource: Resource | null;
 48 |   setSelectedResource: (resource: Resource | null) => void;
 49 |   handleCompletion: (
 50 |     ref: ResourceReference | PromptReference,
 51 |     argName: string,
 52 |     value: string,
 53 |   ) => Promise<string[]>;
 54 |   completionsSupported: boolean;
 55 |   resourceContent: string;
 56 |   nextCursor: ListResourcesResult["nextCursor"];
 57 |   nextTemplateCursor: ListResourceTemplatesResult["nextCursor"];
 58 |   error: string | null;
 59 |   resourceSubscriptionsSupported: boolean;
 60 |   resourceSubscriptions: Set<string>;
 61 |   subscribeToResource: (uri: string) => void;
 62 |   unsubscribeFromResource: (uri: string) => void;
 63 | }) => {
 64 |   const [selectedTemplate, setSelectedTemplate] =
 65 |     useState<ResourceTemplate | null>(null);
 66 |   const [templateValues, setTemplateValues] = useState<Record<string, string>>(
 67 |     {},
 68 |   );
 69 | 
 70 |   const { completions, clearCompletions, requestCompletions } =
 71 |     useCompletionState(handleCompletion, completionsSupported);
 72 | 
 73 |   useEffect(() => {
 74 |     clearCompletions();
 75 |   }, [clearCompletions]);
 76 | 
 77 |   const fillTemplate = (
 78 |     template: string,
 79 |     values: Record<string, string>,
 80 |   ): string => {
 81 |     return template.replace(
 82 |       /{([^}]+)}/g,
 83 |       (_, key) => values[key] || `{${key}}`,
 84 |     );
 85 |   };
 86 | 
 87 |   const handleTemplateValueChange = async (key: string, value: string) => {
 88 |     setTemplateValues((prev) => ({ ...prev, [key]: value }));
 89 | 
 90 |     if (selectedTemplate?.uriTemplate) {
 91 |       requestCompletions(
 92 |         {
 93 |           type: "ref/resource",
 94 |           uri: selectedTemplate.uriTemplate,
 95 |         },
 96 |         key,
 97 |         value,
 98 |       );
 99 |     }
100 |   };
101 | 
102 |   const handleReadTemplateResource = () => {
103 |     if (selectedTemplate) {
104 |       const uri = fillTemplate(selectedTemplate.uriTemplate, templateValues);
105 |       readResource(uri);
106 |       setSelectedTemplate(null);
107 |       // We don't have the full Resource object here, so we create a partial one
108 |       setSelectedResource({ uri, name: uri } as Resource);
109 |     }
110 |   };
111 | 
112 |   return (
113 |     <TabsContent value="resources" className="grid grid-cols-3 gap-4">
114 |       <ListPane
115 |         items={resources}
116 |         listItems={listResources}
117 |         clearItems={clearResources}
118 |         setSelectedItem={(resource) => {
119 |           setSelectedResource(resource);
120 |           readResource(resource.uri);
121 |           setSelectedTemplate(null);
122 |         }}
123 |         renderItem={(resource) => (
124 |           <div className="flex items-center w-full">
125 |             <FileText className="w-4 h-4 mr-2 flex-shrink-0 text-gray-500" />
126 |             <span className="flex-1 truncate" title={resource.uri.toString()}>
127 |               {resource.name}
128 |             </span>
129 |             <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-400" />
130 |           </div>
131 |         )}
132 |         title="Resources"
133 |         buttonText={nextCursor ? "List More Resources" : "List Resources"}
134 |         isButtonDisabled={!nextCursor && resources.length > 0}
135 |       />
136 | 
137 |       <ListPane
138 |         items={resourceTemplates}
139 |         listItems={listResourceTemplates}
140 |         clearItems={clearResourceTemplates}
141 |         setSelectedItem={(template) => {
142 |           setSelectedTemplate(template);
143 |           setSelectedResource(null);
144 |           setTemplateValues({});
145 |         }}
146 |         renderItem={(template) => (
147 |           <div className="flex items-center w-full">
148 |             <FileText className="w-4 h-4 mr-2 flex-shrink-0 text-gray-500" />
149 |             <span className="flex-1 truncate" title={template.uriTemplate}>
150 |               {template.name}
151 |             </span>
152 |             <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-400" />
153 |           </div>
154 |         )}
155 |         title="Resource Templates"
156 |         buttonText={
157 |           nextTemplateCursor ? "List More Templates" : "List Templates"
158 |         }
159 |         isButtonDisabled={!nextTemplateCursor && resourceTemplates.length > 0}
160 |       />
161 | 
162 |       <div className="bg-card rounded-lg shadow">
163 |         <div className="p-4 border-b border-gray-200 flex justify-between items-center">
164 |           <h3
165 |             className="font-semibold truncate"
166 |             title={selectedResource?.name || selectedTemplate?.name}
167 |           >
168 |             {selectedResource
169 |               ? selectedResource.name
170 |               : selectedTemplate
171 |                 ? selectedTemplate.name
172 |                 : "Select a resource or template"}
173 |           </h3>
174 |           {selectedResource && (
175 |             <div className="flex row-auto gap-1 justify-end w-2/5">
176 |               {resourceSubscriptionsSupported &&
177 |                 !resourceSubscriptions.has(selectedResource.uri) && (
178 |                   <Button
179 |                     variant="outline"
180 |                     size="sm"
181 |                     onClick={() => subscribeToResource(selectedResource.uri)}
182 |                   >
183 |                     Subscribe
184 |                   </Button>
185 |                 )}
186 |               {resourceSubscriptionsSupported &&
187 |                 resourceSubscriptions.has(selectedResource.uri) && (
188 |                   <Button
189 |                     variant="outline"
190 |                     size="sm"
191 |                     onClick={() =>
192 |                       unsubscribeFromResource(selectedResource.uri)
193 |                     }
194 |                   >
195 |                     Unsubscribe
196 |                   </Button>
197 |                 )}
198 |               <Button
199 |                 variant="outline"
200 |                 size="sm"
201 |                 onClick={() => readResource(selectedResource.uri)}
202 |               >
203 |                 <RefreshCw className="w-4 h-4 mr-2" />
204 |                 Refresh
205 |               </Button>
206 |             </div>
207 |           )}
208 |         </div>
209 |         <div className="p-4">
210 |           {error ? (
211 |             <Alert variant="destructive">
212 |               <AlertCircle className="h-4 w-4" />
213 |               <AlertTitle>Error</AlertTitle>
214 |               <AlertDescription>{error}</AlertDescription>
215 |             </Alert>
216 |           ) : selectedResource ? (
217 |             <pre className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm overflow-auto max-h-96 whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100">
218 |               {resourceContent}
219 |             </pre>
220 |           ) : selectedTemplate ? (
221 |             <div className="space-y-4">
222 |               <p className="text-sm text-gray-600">
223 |                 {selectedTemplate.description}
224 |               </p>
225 |               {selectedTemplate.uriTemplate
226 |                 .match(/{([^}]+)}/g)
227 |                 ?.map((param) => {
228 |                   const key = param.slice(1, -1);
229 |                   return (
230 |                     <div key={key}>
231 |                       <Label htmlFor={key}>{key}</Label>
232 |                       <Combobox
233 |                         id={key}
234 |                         placeholder={`Enter ${key}`}
235 |                         value={templateValues[key] || ""}
236 |                         onChange={(value) =>
237 |                           handleTemplateValueChange(key, value)
238 |                         }
239 |                         onInputChange={(value) =>
240 |                           handleTemplateValueChange(key, value)
241 |                         }
242 |                         options={completions[key] || []}
243 |                       />
244 |                     </div>
245 |                   );
246 |                 })}
247 |               <Button
248 |                 onClick={handleReadTemplateResource}
249 |                 disabled={Object.keys(templateValues).length === 0}
250 |               >
251 |                 Read Resource
252 |               </Button>
253 |             </div>
254 |           ) : (
255 |             <Alert>
256 |               <AlertDescription>
257 |                 Select a resource or template from the list to view its contents
258 |               </AlertDescription>
259 |             </Alert>
260 |           )}
261 |         </div>
262 |       </div>
263 |     </TabsContent>
264 |   );
265 | };
266 | 
267 | export default ResourcesTab;
268 | 


--------------------------------------------------------------------------------
/client/src/components/RootsTab.tsx:
--------------------------------------------------------------------------------
 1 | import { Alert, AlertDescription } from "@/components/ui/alert";
 2 | import { Button } from "@/components/ui/button";
 3 | import { Input } from "@/components/ui/input";
 4 | import { TabsContent } from "@/components/ui/tabs";
 5 | import { Root } from "@modelcontextprotocol/sdk/types.js";
 6 | import { Plus, Minus, Save } from "lucide-react";
 7 | 
 8 | const RootsTab = ({
 9 |   roots,
10 |   setRoots,
11 |   onRootsChange,
12 | }: {
13 |   roots: Root[];
14 |   setRoots: React.Dispatch<React.SetStateAction<Root[]>>;
15 |   onRootsChange: () => void;
16 | }) => {
17 |   const addRoot = () => {
18 |     setRoots((currentRoots) => [...currentRoots, { uri: "file://", name: "" }]);
19 |   };
20 | 
21 |   const removeRoot = (index: number) => {
22 |     setRoots((currentRoots) => currentRoots.filter((_, i) => i !== index));
23 |   };
24 | 
25 |   const updateRoot = (index: number, field: keyof Root, value: string) => {
26 |     setRoots((currentRoots) =>
27 |       currentRoots.map((root, i) =>
28 |         i === index ? { ...root, [field]: value } : root,
29 |       ),
30 |     );
31 |   };
32 | 
33 |   const handleSave = () => {
34 |     onRootsChange();
35 |   };
36 | 
37 |   return (
38 |     <TabsContent value="roots" className="space-y-4">
39 |       <Alert>
40 |         <AlertDescription>
41 |           Configure the root directories that the server can access
42 |         </AlertDescription>
43 |       </Alert>
44 | 
45 |       {roots.map((root, index) => (
46 |         <div key={index} className="flex gap-2 items-center">
47 |           <Input
48 |             placeholder="file:// URI"
49 |             value={root.uri}
50 |             onChange={(e) => updateRoot(index, "uri", e.target.value)}
51 |             className="flex-1"
52 |           />
53 |           <Button
54 |             variant="destructive"
55 |             size="sm"
56 |             onClick={() => removeRoot(index)}
57 |           >
58 |             <Minus className="h-4 w-4" />
59 |           </Button>
60 |         </div>
61 |       ))}
62 | 
63 |       <div className="flex gap-2">
64 |         <Button variant="outline" onClick={addRoot}>
65 |           <Plus className="h-4 w-4 mr-2" />
66 |           Add Root
67 |         </Button>
68 |         <Button onClick={handleSave}>
69 |           <Save className="h-4 w-4 mr-2" />
70 |           Save Changes
71 |         </Button>
72 |       </div>
73 |     </TabsContent>
74 |   );
75 | };
76 | 
77 | export default RootsTab;
78 | 


--------------------------------------------------------------------------------
/client/src/components/SamplingTab.tsx:
--------------------------------------------------------------------------------
 1 | import { Alert, AlertDescription } from "@/components/ui/alert";
 2 | import { Button } from "@/components/ui/button";
 3 | import { TabsContent } from "@/components/ui/tabs";
 4 | import {
 5 |   CreateMessageRequest,
 6 |   CreateMessageResult,
 7 | } from "@modelcontextprotocol/sdk/types.js";
 8 | 
 9 | export type PendingRequest = {
10 |   id: number;
11 |   request: CreateMessageRequest;
12 | };
13 | 
14 | export type Props = {
15 |   pendingRequests: PendingRequest[];
16 |   onApprove: (id: number, result: CreateMessageResult) => void;
17 |   onReject: (id: number) => void;
18 | };
19 | 
20 | const SamplingTab = ({ pendingRequests, onApprove, onReject }: Props) => {
21 |   const handleApprove = (id: number) => {
22 |     // For now, just return a stub response
23 |     onApprove(id, {
24 |       model: "stub-model",
25 |       stopReason: "endTurn",
26 |       role: "assistant",
27 |       content: {
28 |         type: "text",
29 |         text: "This is a stub response.",
30 |       },
31 |     });
32 |   };
33 | 
34 |   return (
35 |     <TabsContent value="sampling" className="h-96">
36 |       <Alert>
37 |         <AlertDescription>
38 |           When the server requests LLM sampling, requests will appear here for
39 |           approval.
40 |         </AlertDescription>
41 |       </Alert>
42 |       <div className="mt-4 space-y-4">
43 |         <h3 className="text-lg font-semibold">Recent Requests</h3>
44 |         {pendingRequests.map((request) => (
45 |           <div key={request.id} className="p-4 border rounded-lg space-y-4">
46 |             <pre className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100 p-2 rounded">
47 |               {JSON.stringify(request.request, null, 2)}
48 |             </pre>
49 |             <div className="flex space-x-2">
50 |               <Button onClick={() => handleApprove(request.id)}>Approve</Button>
51 |               <Button variant="outline" onClick={() => onReject(request.id)}>
52 |                 Reject
53 |               </Button>
54 |             </div>
55 |           </div>
56 |         ))}
57 |         {pendingRequests.length === 0 && (
58 |           <p className="text-gray-500">No pending requests</p>
59 |         )}
60 |       </div>
61 |     </TabsContent>
62 |   );
63 | };
64 | 
65 | export default SamplingTab;
66 | 


--------------------------------------------------------------------------------
/client/src/components/Sidebar.tsx:
--------------------------------------------------------------------------------
  1 | import { useState } from "react";
  2 | import {
  3 |   Play,
  4 |   ChevronDown,
  5 |   ChevronRight,
  6 |   CircleHelp,
  7 |   Bug,
  8 |   Github,
  9 |   Eye,
 10 |   EyeOff,
 11 | } from "lucide-react";
 12 | import { Button } from "@/components/ui/button";
 13 | import { Input } from "@/components/ui/input";
 14 | import {
 15 |   Select,
 16 |   SelectContent,
 17 |   SelectItem,
 18 |   SelectTrigger,
 19 |   SelectValue,
 20 | } from "@/components/ui/select";
 21 | import { StdErrNotification } from "@/lib/notificationTypes";
 22 | 
 23 | import useTheme from "../lib/useTheme";
 24 | import { version } from "../../../package.json";
 25 | 
 26 | interface SidebarProps {
 27 |   connectionStatus: "disconnected" | "connected" | "error";
 28 |   transportType: "stdio" | "sse";
 29 |   setTransportType: (type: "stdio" | "sse") => void;
 30 |   command: string;
 31 |   setCommand: (command: string) => void;
 32 |   args: string;
 33 |   setArgs: (args: string) => void;
 34 |   sseUrl: string;
 35 |   setSseUrl: (url: string) => void;
 36 |   env: Record<string, string>;
 37 |   setEnv: (env: Record<string, string>) => void;
 38 |   bearerToken: string;
 39 |   setBearerToken: (token: string) => void;
 40 |   onConnect: () => void;
 41 |   stdErrNotifications: StdErrNotification[];
 42 | }
 43 | 
 44 | const Sidebar = ({
 45 |   connectionStatus,
 46 |   transportType,
 47 |   setTransportType,
 48 |   command,
 49 |   setCommand,
 50 |   args,
 51 |   setArgs,
 52 |   sseUrl,
 53 |   setSseUrl,
 54 |   env,
 55 |   setEnv,
 56 |   bearerToken,
 57 |   setBearerToken,
 58 |   onConnect,
 59 |   stdErrNotifications,
 60 | }: SidebarProps) => {
 61 |   const [theme, setTheme] = useTheme();
 62 |   const [showEnvVars, setShowEnvVars] = useState(false);
 63 |   const [showBearerToken, setShowBearerToken] = useState(false);
 64 |   const [shownEnvVars, setShownEnvVars] = useState<Set<string>>(new Set());
 65 | 
 66 |   return (
 67 |     <div className="w-80 bg-card border-r border-border flex flex-col h-full">
 68 |       <div className="flex items-center justify-between p-4 border-b border-gray-200">
 69 |         <div className="flex items-center">
 70 |           <h1 className="ml-2 text-lg font-semibold">
 71 |             MCP Inspector v{version}
 72 |           </h1>
 73 |         </div>
 74 |       </div>
 75 | 
 76 |       <div className="p-4 flex-1 overflow-auto">
 77 |         <div className="space-y-4">
 78 |           <div className="space-y-2">
 79 |             <label className="text-sm font-medium">Transport Type</label>
 80 |             <Select
 81 |               value={transportType}
 82 |               onValueChange={(value: "stdio" | "sse") =>
 83 |                 setTransportType(value)
 84 |               }
 85 |             >
 86 |               <SelectTrigger>
 87 |                 <SelectValue placeholder="Select transport type" />
 88 |               </SelectTrigger>
 89 |               <SelectContent>
 90 |                 <SelectItem value="stdio">STDIO</SelectItem>
 91 |                 <SelectItem value="sse">SSE</SelectItem>
 92 |               </SelectContent>
 93 |             </Select>
 94 |           </div>
 95 | 
 96 |           {transportType === "stdio" ? (
 97 |             <>
 98 |               <div className="space-y-2">
 99 |                 <label className="text-sm font-medium">Command</label>
100 |                 <Input
101 |                   placeholder="Command"
102 |                   value={command}
103 |                   onChange={(e) => setCommand(e.target.value)}
104 |                   className="font-mono"
105 |                 />
106 |               </div>
107 |               <div className="space-y-2">
108 |                 <label className="text-sm font-medium">Arguments</label>
109 |                 <Input
110 |                   placeholder="Arguments (space-separated)"
111 |                   value={args}
112 |                   onChange={(e) => setArgs(e.target.value)}
113 |                   className="font-mono"
114 |                 />
115 |               </div>
116 |             </>
117 |           ) : (
118 |             <>
119 |               <div className="space-y-2">
120 |                 <label className="text-sm font-medium">URL</label>
121 |                 <Input
122 |                   placeholder="URL"
123 |                   value={sseUrl}
124 |                   onChange={(e) => setSseUrl(e.target.value)}
125 |                   className="font-mono"
126 |                 />
127 |               </div>
128 |               <div className="space-y-2">
129 |                 <Button
130 |                   variant="outline"
131 |                   onClick={() => setShowBearerToken(!showBearerToken)}
132 |                   className="flex items-center w-full"
133 |                 >
134 |                   {showBearerToken ? (
135 |                     <ChevronDown className="w-4 h-4 mr-2" />
136 |                   ) : (
137 |                     <ChevronRight className="w-4 h-4 mr-2" />
138 |                   )}
139 |                   Authentication
140 |                 </Button>
141 |                 {showBearerToken && (
142 |                   <div className="space-y-2">
143 |                     <label className="text-sm font-medium">Bearer Token</label>
144 |                     <Input
145 |                       placeholder="Bearer Token"
146 |                       value={bearerToken}
147 |                       onChange={(e) => setBearerToken(e.target.value)}
148 |                       className="font-mono"
149 |                       type="password"
150 |                     />
151 |                   </div>
152 |                 )}
153 |               </div>
154 |             </>
155 |           )}
156 |           {transportType === "stdio" && (
157 |             <div className="space-y-2">
158 |               <Button
159 |                 variant="outline"
160 |                 onClick={() => setShowEnvVars(!showEnvVars)}
161 |                 className="flex items-center w-full"
162 |               >
163 |                 {showEnvVars ? (
164 |                   <ChevronDown className="w-4 h-4 mr-2" />
165 |                 ) : (
166 |                   <ChevronRight className="w-4 h-4 mr-2" />
167 |                 )}
168 |                 Environment Variables
169 |               </Button>
170 |               {showEnvVars && (
171 |                 <div className="space-y-2">
172 |                   {Object.entries(env).map(([key, value], idx) => (
173 |                     <div key={idx} className="space-y-2 pb-4">
174 |                       <div className="flex gap-2">
175 |                         <Input
176 |                           placeholder="Key"
177 |                           value={key}
178 |                           onChange={(e) => {
179 |                             const newKey = e.target.value;
180 |                             const newEnv = { ...env };
181 |                             delete newEnv[key];
182 |                             newEnv[newKey] = value;
183 |                             setEnv(newEnv);
184 |                             setShownEnvVars((prev) => {
185 |                               const next = new Set(prev);
186 |                               if (next.has(key)) {
187 |                                 next.delete(key);
188 |                                 next.add(newKey);
189 |                               }
190 |                               return next;
191 |                             });
192 |                           }}
193 |                           className="font-mono"
194 |                         />
195 |                         <Button
196 |                           variant="destructive"
197 |                           size="icon"
198 |                           className="h-9 w-9 p-0 shrink-0"
199 |                           onClick={() => {
200 |                             // eslint-disable-next-line @typescript-eslint/no-unused-vars
201 |                             const { [key]: _removed, ...rest } = env;
202 |                             setEnv(rest);
203 |                           }}
204 |                         >
205 |                           ×
206 |                         </Button>
207 |                       </div>
208 |                       <div className="flex gap-2">
209 |                         <Input
210 |                           type={shownEnvVars.has(key) ? "text" : "password"}
211 |                           placeholder="Value"
212 |                           value={value}
213 |                           onChange={(e) => {
214 |                             const newEnv = { ...env };
215 |                             newEnv[key] = e.target.value;
216 |                             setEnv(newEnv);
217 |                           }}
218 |                           className="font-mono"
219 |                         />
220 |                         <Button
221 |                           variant="outline"
222 |                           size="icon"
223 |                           className="h-9 w-9 p-0 shrink-0"
224 |                           onClick={() => {
225 |                             setShownEnvVars((prev) => {
226 |                               const next = new Set(prev);
227 |                               if (next.has(key)) {
228 |                                 next.delete(key);
229 |                               } else {
230 |                                 next.add(key);
231 |                               }
232 |                               return next;
233 |                             });
234 |                           }}
235 |                           aria-label={
236 |                             shownEnvVars.has(key) ? "Hide value" : "Show value"
237 |                           }
238 |                           aria-pressed={shownEnvVars.has(key)}
239 |                           title={
240 |                             shownEnvVars.has(key) ? "Hide value" : "Show value"
241 |                           }
242 |                         >
243 |                           {shownEnvVars.has(key) ? (
244 |                             <Eye className="h-4 w-4" aria-hidden="true" />
245 |                           ) : (
246 |                             <EyeOff className="h-4 w-4" aria-hidden="true" />
247 |                           )}
248 |                         </Button>
249 |                       </div>
250 |                     </div>
251 |                   ))}
252 |                   <Button
253 |                     variant="outline"
254 |                     className="w-full mt-2"
255 |                     onClick={() => {
256 |                       const key = "";
257 |                       const newEnv = { ...env };
258 |                       newEnv[key] = "";
259 |                       setEnv(newEnv);
260 |                     }}
261 |                   >
262 |                     Add Environment Variable
263 |                   </Button>
264 |                 </div>
265 |               )}
266 |             </div>
267 |           )}
268 | 
269 |           <div className="space-y-2">
270 |             <Button className="w-full" onClick={onConnect}>
271 |               <Play className="w-4 h-4 mr-2" />
272 |               Connect
273 |             </Button>
274 | 
275 |             <div className="flex items-center justify-center space-x-2 mb-4">
276 |               <div
277 |                 className={`w-2 h-2 rounded-full ${
278 |                   connectionStatus === "connected"
279 |                     ? "bg-green-500"
280 |                     : connectionStatus === "error"
281 |                       ? "bg-red-500"
282 |                       : "bg-gray-500"
283 |                 }`}
284 |               />
285 |               <span className="text-sm text-gray-600">
286 |                 {connectionStatus === "connected"
287 |                   ? "Connected"
288 |                   : connectionStatus === "error"
289 |                     ? "Connection Error"
290 |                     : "Disconnected"}
291 |               </span>
292 |             </div>
293 |             {stdErrNotifications.length > 0 && (
294 |               <>
295 |                 <div className="mt-4 border-t border-gray-200 pt-4">
296 |                   <h3 className="text-sm font-medium">
297 |                     Error output from MCP server
298 |                   </h3>
299 |                   <div className="mt-2 max-h-80 overflow-y-auto">
300 |                     {stdErrNotifications.map((notification, index) => (
301 |                       <div
302 |                         key={index}
303 |                         className="text-sm text-red-500 font-mono py-2 border-b border-gray-200 last:border-b-0"
304 |                       >
305 |                         {notification.params.content}
306 |                       </div>
307 |                     ))}
308 |                   </div>
309 |                 </div>
310 |               </>
311 |             )}
312 |           </div>
313 |         </div>
314 |       </div>
315 |       <div className="p-4 border-t">
316 |         <div className="flex items-center justify-between">
317 |           <Select
318 |             value={theme}
319 |             onValueChange={(value: string) =>
320 |               setTheme(value as "system" | "light" | "dark")
321 |             }
322 |           >
323 |             <SelectTrigger className="w-[100px]" id="theme-select">
324 |               <SelectValue />
325 |             </SelectTrigger>
326 |             <SelectContent>
327 |               <SelectItem value="system">System</SelectItem>
328 |               <SelectItem value="light">Light</SelectItem>
329 |               <SelectItem value="dark">Dark</SelectItem>
330 |             </SelectContent>
331 |           </Select>
332 | 
333 |           <div className="flex items-center space-x-2">
334 |             <a
335 |               href="https://modelcontextprotocol.io/docs/tools/inspector"
336 |               target="_blank"
337 |               rel="noopener noreferrer"
338 |             >
339 |               <Button variant="ghost" title="Inspector Documentation">
340 |                 <CircleHelp className="w-4 h-4 text-gray-800" />
341 |               </Button>
342 |             </a>
343 |             <a
344 |               href="https://modelcontextprotocol.io/docs/tools/debugging"
345 |               target="_blank"
346 |               rel="noopener noreferrer"
347 |             >
348 |               <Button variant="ghost" title="Debugging Guide">
349 |                 <Bug className="w-4 h-4 text-gray-800" />
350 |               </Button>
351 |             </a>
352 |             <a
353 |               href="https://github.com/modelcontextprotocol/inspector"
354 |               target="_blank"
355 |               rel="noopener noreferrer"
356 |             >
357 |               <Button
358 |                 variant="ghost"
359 |                 title="Report bugs or contribute on GitHub"
360 |               >
361 |                 <Github className="w-4 h-4 text-gray-800" />
362 |               </Button>
363 |             </a>
364 |           </div>
365 |         </div>
366 |       </div>
367 |     </div>
368 |   );
369 | };
370 | 
371 | export default Sidebar;
372 | 


--------------------------------------------------------------------------------
/client/src/components/ToolsTab.tsx:
--------------------------------------------------------------------------------
  1 | import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
  2 | import { Button } from "@/components/ui/button";
  3 | import { Checkbox } from "@/components/ui/checkbox";
  4 | import { Input } from "@/components/ui/input";
  5 | import { Label } from "@/components/ui/label";
  6 | import { TabsContent } from "@/components/ui/tabs";
  7 | import { Textarea } from "@/components/ui/textarea";
  8 | import DynamicJsonForm, { JsonSchemaType, JsonValue } from "./DynamicJsonForm";
  9 | import {
 10 |   ListToolsResult,
 11 |   Tool,
 12 |   CallToolResultSchema,
 13 | } from "@modelcontextprotocol/sdk/types.js";
 14 | import { AlertCircle, Send } from "lucide-react";
 15 | import { useEffect, useState } from "react";
 16 | import ListPane from "./ListPane";
 17 | 
 18 | import { CompatibilityCallToolResult } from "@modelcontextprotocol/sdk/types.js";
 19 | 
 20 | const ToolsTab = ({
 21 |   tools,
 22 |   listTools,
 23 |   clearTools,
 24 |   callTool,
 25 |   selectedTool,
 26 |   setSelectedTool,
 27 |   toolResult,
 28 |   nextCursor,
 29 |   error,
 30 | }: {
 31 |   tools: Tool[];
 32 |   listTools: () => void;
 33 |   clearTools: () => void;
 34 |   callTool: (name: string, params: Record<string, unknown>) => void;
 35 |   selectedTool: Tool | null;
 36 |   setSelectedTool: (tool: Tool | null) => void;
 37 |   toolResult: CompatibilityCallToolResult | null;
 38 |   nextCursor: ListToolsResult["nextCursor"];
 39 |   error: string | null;
 40 | }) => {
 41 |   const [params, setParams] = useState<Record<string, unknown>>({});
 42 |   useEffect(() => {
 43 |     setParams({});
 44 |   }, [selectedTool]);
 45 | 
 46 |   const renderToolResult = () => {
 47 |     if (!toolResult) return null;
 48 | 
 49 |     if ("content" in toolResult) {
 50 |       const parsedResult = CallToolResultSchema.safeParse(toolResult);
 51 |       if (!parsedResult.success) {
 52 |         return (
 53 |           <>
 54 |             <h4 className="font-semibold mb-2">Invalid Tool Result:</h4>
 55 |             <pre className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100 p-4 rounded text-sm overflow-auto max-h-64">
 56 |               {JSON.stringify(toolResult, null, 2)}
 57 |             </pre>
 58 |             <h4 className="font-semibold mb-2">Errors:</h4>
 59 |             {parsedResult.error.errors.map((error, idx) => (
 60 |               <pre
 61 |                 key={idx}
 62 |                 className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100 p-4 rounded text-sm overflow-auto max-h-64"
 63 |               >
 64 |                 {JSON.stringify(error, null, 2)}
 65 |               </pre>
 66 |             ))}
 67 |           </>
 68 |         );
 69 |       }
 70 |       const structuredResult = parsedResult.data;
 71 |       const isError = structuredResult.isError ?? false;
 72 | 
 73 |       return (
 74 |         <>
 75 |           <h4 className="font-semibold mb-2">
 76 |             Tool Result: {isError ? "Error" : "Success"}
 77 |           </h4>
 78 |           {structuredResult.content.map((item, index) => (
 79 |             <div key={index} className="mb-2">
 80 |               {item.type === "text" && (
 81 |                 <pre className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100 p-4 rounded text-sm overflow-auto max-h-64">
 82 |                   {item.text}
 83 |                 </pre>
 84 |               )}
 85 |               {item.type === "image" && (
 86 |                 <img
 87 |                   src={`data:${item.mimeType};base64,${item.data}`}
 88 |                   alt="Tool result image"
 89 |                   className="max-w-full h-auto"
 90 |                 />
 91 |               )}
 92 |               {item.type === "resource" &&
 93 |                 (item.resource?.mimeType?.startsWith("audio/") ? (
 94 |                   <audio
 95 |                     controls
 96 |                     src={`data:${item.resource.mimeType};base64,${item.resource.blob}`}
 97 |                     className="w-full"
 98 |                   >
 99 |                     <p>Your browser does not support audio playback</p>
100 |                   </audio>
101 |                 ) : (
102 |                   <pre className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words p-4 rounded text-sm overflow-auto max-h-64">
103 |                     {JSON.stringify(item.resource, null, 2)}
104 |                   </pre>
105 |                 ))}
106 |             </div>
107 |           ))}
108 |         </>
109 |       );
110 |     } else if ("toolResult" in toolResult) {
111 |       return (
112 |         <>
113 |           <h4 className="font-semibold mb-2">Tool Result (Legacy):</h4>
114 |           <pre className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100 p-4 rounded text-sm overflow-auto max-h-64">
115 |             {JSON.stringify(toolResult.toolResult, null, 2)}
116 |           </pre>
117 |         </>
118 |       );
119 |     }
120 |   };
121 | 
122 |   return (
123 |     <TabsContent value="tools" className="grid grid-cols-2 gap-4">
124 |       <ListPane
125 |         items={tools}
126 |         listItems={listTools}
127 |         clearItems={() => {
128 |           clearTools();
129 |           setSelectedTool(null);
130 |         }}
131 |         setSelectedItem={setSelectedTool}
132 |         renderItem={(tool) => (
133 |           <>
134 |             <span className="flex-1">{tool.name}</span>
135 |             <span className="text-sm text-gray-500 text-right">
136 |               {tool.description}
137 |             </span>
138 |           </>
139 |         )}
140 |         title="Tools"
141 |         buttonText={nextCursor ? "List More Tools" : "List Tools"}
142 |         isButtonDisabled={!nextCursor && tools.length > 0}
143 |       />
144 | 
145 |       <div className="bg-card rounded-lg shadow">
146 |         <div className="p-4 border-b border-gray-200">
147 |           <h3 className="font-semibold">
148 |             {selectedTool ? selectedTool.name : "Select a tool"}
149 |           </h3>
150 |         </div>
151 |         <div className="p-4">
152 |           {error ? (
153 |             <Alert variant="destructive">
154 |               <AlertCircle className="h-4 w-4" />
155 |               <AlertTitle>Error</AlertTitle>
156 |               <AlertDescription>{error}</AlertDescription>
157 |             </Alert>
158 |           ) : selectedTool ? (
159 |             <div className="space-y-4">
160 |               <p className="text-sm text-gray-600">
161 |                 {selectedTool.description}
162 |               </p>
163 |               {Object.entries(selectedTool.inputSchema.properties ?? []).map(
164 |                 ([key, value]) => {
165 |                   const prop = value as JsonSchemaType;
166 |                   return (
167 |                     <div key={key}>
168 |                       <Label
169 |                         htmlFor={key}
170 |                         className="block text-sm font-medium text-gray-700"
171 |                       >
172 |                         {key}
173 |                       </Label>
174 |                       {prop.type === "boolean" ? (
175 |                         <div className="flex items-center space-x-2 mt-2">
176 |                           <Checkbox
177 |                             id={key}
178 |                             name={key}
179 |                             checked={!!params[key]}
180 |                             onCheckedChange={(checked: boolean) =>
181 |                               setParams({
182 |                                 ...params,
183 |                                 [key]: checked,
184 |                               })
185 |                             }
186 |                           />
187 |                           <label
188 |                             htmlFor={key}
189 |                             className="text-sm font-medium text-gray-700 dark:text-gray-300"
190 |                           >
191 |                             {prop.description || "Toggle this option"}
192 |                           </label>
193 |                         </div>
194 |                       ) : prop.type === "string" ? (
195 |                         <Textarea
196 |                           id={key}
197 |                           name={key}
198 |                           placeholder={prop.description}
199 |                           value={(params[key] as string) ?? ""}
200 |                           onChange={(e) =>
201 |                             setParams({
202 |                               ...params,
203 |                               [key]: e.target.value,
204 |                             })
205 |                           }
206 |                           className="mt-1"
207 |                         />
208 |                       ) : prop.type === "object" || prop.type === "array" ? (
209 |                         <div className="mt-1">
210 |                           <DynamicJsonForm
211 |                             schema={{
212 |                               type: prop.type,
213 |                               properties: prop.properties,
214 |                               description: prop.description,
215 |                               items: prop.items,
216 |                             }}
217 |                             value={(params[key] as JsonValue) ?? {}}
218 |                             onChange={(newValue: JsonValue) => {
219 |                               setParams({
220 |                                 ...params,
221 |                                 [key]: newValue,
222 |                               });
223 |                             }}
224 |                           />
225 |                         </div>
226 |                       ) : (
227 |                         <Input
228 |                           type={prop.type === "number" ? "number" : "text"}
229 |                           id={key}
230 |                           name={key}
231 |                           placeholder={prop.description}
232 |                           onChange={(e) =>
233 |                             setParams({
234 |                               ...params,
235 |                               [key]:
236 |                                 prop.type === "number"
237 |                                   ? Number(e.target.value)
238 |                                   : e.target.value,
239 |                             })
240 |                           }
241 |                           className="mt-1"
242 |                         />
243 |                       )}
244 |                     </div>
245 |                   );
246 |                 },
247 |               )}
248 |               <Button onClick={() => callTool(selectedTool.name, params)}>
249 |                 <Send className="w-4 h-4 mr-2" />
250 |                 Run Tool
251 |               </Button>
252 |               {toolResult && renderToolResult()}
253 |             </div>
254 |           ) : (
255 |             <Alert>
256 |               <AlertDescription>
257 |                 Select a tool from the list to view its details and run it
258 |               </AlertDescription>
259 |             </Alert>
260 |           )}
261 |         </div>
262 |       </div>
263 |     </TabsContent>
264 |   );
265 | };
266 | 
267 | export default ToolsTab;
268 | 


--------------------------------------------------------------------------------
/client/src/components/ui/alert.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import { cva, type VariantProps } from "class-variance-authority";
 3 | 
 4 | import { cn } from "@/lib/utils";
 5 | 
 6 | const alertVariants = cva(
 7 |   "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
 8 |   {
 9 |     variants: {
10 |       variant: {
11 |         default: "bg-background text-foreground",
12 |         destructive:
13 |           "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
14 |       },
15 |     },
16 |     defaultVariants: {
17 |       variant: "default",
18 |     },
19 |   },
20 | );
21 | 
22 | const Alert = React.forwardRef<
23 |   HTMLDivElement,
24 |   React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
25 | >(({ className, variant, ...props }, ref) => (
26 |   <div
27 |     ref={ref}
28 |     role="alert"
29 |     className={cn(alertVariants({ variant }), className)}
30 |     {...props}
31 |   />
32 | ));
33 | Alert.displayName = "Alert";
34 | 
35 | const AlertTitle = React.forwardRef<
36 |   HTMLParagraphElement,
37 |   React.HTMLAttributes<HTMLHeadingElement>
38 | >(({ className, ...props }, ref) => (
39 |   <h5
40 |     ref={ref}
41 |     className={cn("mb-1 font-medium leading-none tracking-tight", className)}
42 |     {...props}
43 |   />
44 | ));
45 | AlertTitle.displayName = "AlertTitle";
46 | 
47 | const AlertDescription = React.forwardRef<
48 |   HTMLParagraphElement,
49 |   React.HTMLAttributes<HTMLParagraphElement>
50 | >(({ className, ...props }, ref) => (
51 |   <div
52 |     ref={ref}
53 |     className={cn("text-sm [&_p]:leading-relaxed", className)}
54 |     {...props}
55 |   />
56 | ));
57 | AlertDescription.displayName = "AlertDescription";
58 | 
59 | export { Alert, AlertTitle, AlertDescription };
60 | 


--------------------------------------------------------------------------------
/client/src/components/ui/button.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import { Slot } from "@radix-ui/react-slot";
 3 | import { cva, type VariantProps } from "class-variance-authority";
 4 | 
 5 | import { cn } from "@/lib/utils";
 6 | 
 7 | const buttonVariants = cva(
 8 |   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
 9 |   {
10 |     variants: {
11 |       variant: {
12 |         default:
13 |           "bg-primary text-primary-foreground shadow hover:bg-primary/90 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
14 |         destructive:
15 |           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
16 |         outline:
17 |           "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
18 |         secondary:
19 |           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
20 |         ghost: "hover:bg-accent hover:text-accent-foreground",
21 |         link: "text-primary underline-offset-4 hover:underline",
22 |       },
23 |       size: {
24 |         default: "h-9 px-4 py-2",
25 |         sm: "h-8 rounded-md px-3 text-xs",
26 |         lg: "h-10 rounded-md px-8",
27 |         icon: "h-9 w-9",
28 |       },
29 |     },
30 |     defaultVariants: {
31 |       variant: "default",
32 |       size: "default",
33 |     },
34 |   },
35 | );
36 | 
37 | export interface ButtonProps
38 |   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
39 |     VariantProps<typeof buttonVariants> {
40 |   asChild?: boolean;
41 | }
42 | 
43 | const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
44 |   ({ className, variant, size, asChild = false, ...props }, ref) => {
45 |     const Comp = asChild ? Slot : "button";
46 |     return (
47 |       <Comp
48 |         className={cn(buttonVariants({ variant, size, className }))}
49 |         ref={ref}
50 |         {...props}
51 |       />
52 |     );
53 |   },
54 | );
55 | Button.displayName = "Button";
56 | 
57 | export { Button, buttonVariants };
58 | 


--------------------------------------------------------------------------------
/client/src/components/ui/checkbox.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import * as React from "react";
 4 | import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
 5 | import { Check } from "lucide-react";
 6 | 
 7 | import { cn } from "@/lib/utils";
 8 | 
 9 | const Checkbox = React.forwardRef<
10 |   React.ElementRef<typeof CheckboxPrimitive.Root>,
11 |   React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
12 | >(({ className, ...props }, ref) => (
13 |   <CheckboxPrimitive.Root
14 |     ref={ref}
15 |     className={cn(
16 |       "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
17 |       className,
18 |     )}
19 |     {...props}
20 |   >
21 |     <CheckboxPrimitive.Indicator
22 |       className={cn("flex items-center justify-center text-current")}
23 |     >
24 |       <Check className="h-4 w-4" />
25 |     </CheckboxPrimitive.Indicator>
26 |   </CheckboxPrimitive.Root>
27 | ));
28 | Checkbox.displayName = CheckboxPrimitive.Root.displayName;
29 | 
30 | export { Checkbox };
31 | 


--------------------------------------------------------------------------------
/client/src/components/ui/combobox.tsx:
--------------------------------------------------------------------------------
 1 | import React from "react";
 2 | import { Check, ChevronsUpDown } from "lucide-react";
 3 | import { cn } from "@/lib/utils";
 4 | import { Button } from "@/components/ui/button";
 5 | import {
 6 |   Command,
 7 |   CommandEmpty,
 8 |   CommandGroup,
 9 |   CommandInput,
10 |   CommandItem,
11 | } from "@/components/ui/command";
12 | import {
13 |   Popover,
14 |   PopoverContent,
15 |   PopoverTrigger,
16 | } from "@/components/ui/popover";
17 | 
18 | interface ComboboxProps {
19 |   value: string;
20 |   onChange: (value: string) => void;
21 |   onInputChange: (value: string) => void;
22 |   options: string[];
23 |   placeholder?: string;
24 |   emptyMessage?: string;
25 |   id?: string;
26 | }
27 | 
28 | export function Combobox({
29 |   value,
30 |   onChange,
31 |   onInputChange,
32 |   options = [],
33 |   placeholder = "Select...",
34 |   emptyMessage = "No results found.",
35 |   id,
36 | }: ComboboxProps) {
37 |   const [open, setOpen] = React.useState(false);
38 | 
39 |   const handleSelect = React.useCallback(
40 |     (option: string) => {
41 |       onChange(option);
42 |       setOpen(false);
43 |     },
44 |     [onChange],
45 |   );
46 | 
47 |   const handleInputChange = React.useCallback(
48 |     (value: string) => {
49 |       onInputChange(value);
50 |     },
51 |     [onInputChange],
52 |   );
53 | 
54 |   return (
55 |     <Popover open={open} onOpenChange={setOpen}>
56 |       <PopoverTrigger asChild>
57 |         <Button
58 |           variant="outline"
59 |           role="combobox"
60 |           aria-expanded={open}
61 |           aria-controls={id}
62 |           className="w-full justify-between"
63 |         >
64 |           {value || placeholder}
65 |           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
66 |         </Button>
67 |       </PopoverTrigger>
68 |       <PopoverContent className="w-full p-0" align="start">
69 |         <Command shouldFilter={false} id={id}>
70 |           <CommandInput
71 |             placeholder={placeholder}
72 |             value={value}
73 |             onValueChange={handleInputChange}
74 |           />
75 |           <CommandEmpty>{emptyMessage}</CommandEmpty>
76 |           <CommandGroup>
77 |             {options.map((option) => (
78 |               <CommandItem
79 |                 key={option}
80 |                 value={option}
81 |                 onSelect={() => handleSelect(option)}
82 |               >
83 |                 <Check
84 |                   className={cn(
85 |                     "mr-2 h-4 w-4",
86 |                     value === option ? "opacity-100" : "opacity-0",
87 |                   )}
88 |                 />
89 |                 {option}
90 |               </CommandItem>
91 |             ))}
92 |           </CommandGroup>
93 |         </Command>
94 |       </PopoverContent>
95 |     </Popover>
96 |   );
97 | }
98 | 


--------------------------------------------------------------------------------
/client/src/components/ui/command.tsx:
--------------------------------------------------------------------------------
  1 | import * as React from "react";
  2 | import { type DialogProps } from "@radix-ui/react-dialog";
  3 | import { Command as CommandPrimitive } from "cmdk";
  4 | import { cn } from "@/lib/utils";
  5 | import { Dialog, DialogContent } from "@/components/ui/dialog";
  6 | import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
  7 | 
  8 | const Command = React.forwardRef<
  9 |   React.ElementRef<typeof CommandPrimitive>,
 10 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive>
 11 | >(({ className, ...props }, ref) => (
 12 |   <CommandPrimitive
 13 |     ref={ref}
 14 |     className={cn(
 15 |       "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
 16 |       className,
 17 |     )}
 18 |     {...props}
 19 |   />
 20 | ));
 21 | Command.displayName = CommandPrimitive.displayName;
 22 | 
 23 | const CommandDialog = ({ children, ...props }: DialogProps) => {
 24 |   return (
 25 |     <Dialog {...props}>
 26 |       <DialogContent className="overflow-hidden p-0">
 27 |         <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
 28 |           {children}
 29 |         </Command>
 30 |       </DialogContent>
 31 |     </Dialog>
 32 |   );
 33 | };
 34 | 
 35 | const CommandInput = React.forwardRef<
 36 |   React.ElementRef<typeof CommandPrimitive.Input>,
 37 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
 38 | >(({ className, ...props }, ref) => (
 39 |   <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
 40 |     <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
 41 |     <CommandPrimitive.Input
 42 |       ref={ref}
 43 |       className={cn(
 44 |         "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
 45 |         className,
 46 |       )}
 47 |       {...props}
 48 |     />
 49 |   </div>
 50 | ));
 51 | 
 52 | CommandInput.displayName = CommandPrimitive.Input.displayName;
 53 | 
 54 | const CommandList = React.forwardRef<
 55 |   React.ElementRef<typeof CommandPrimitive.List>,
 56 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
 57 | >(({ className, ...props }, ref) => (
 58 |   <CommandPrimitive.List
 59 |     ref={ref}
 60 |     className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
 61 |     {...props}
 62 |   />
 63 | ));
 64 | 
 65 | CommandList.displayName = CommandPrimitive.List.displayName;
 66 | 
 67 | const CommandEmpty = React.forwardRef<
 68 |   React.ElementRef<typeof CommandPrimitive.Empty>,
 69 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
 70 | >((props, ref) => (
 71 |   <CommandPrimitive.Empty
 72 |     ref={ref}
 73 |     className="py-6 text-center text-sm"
 74 |     {...props}
 75 |   />
 76 | ));
 77 | 
 78 | CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
 79 | 
 80 | const CommandGroup = React.forwardRef<
 81 |   React.ElementRef<typeof CommandPrimitive.Group>,
 82 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
 83 | >(({ className, ...props }, ref) => (
 84 |   <CommandPrimitive.Group
 85 |     ref={ref}
 86 |     className={cn(
 87 |       "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
 88 |       className,
 89 |     )}
 90 |     {...props}
 91 |   />
 92 | ));
 93 | 
 94 | CommandGroup.displayName = CommandPrimitive.Group.displayName;
 95 | 
 96 | const CommandSeparator = React.forwardRef<
 97 |   React.ElementRef<typeof CommandPrimitive.Separator>,
 98 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
 99 | >(({ className, ...props }, ref) => (
100 |   <CommandPrimitive.Separator
101 |     ref={ref}
102 |     className={cn("-mx-1 h-px bg-border", className)}
103 |     {...props}
104 |   />
105 | ));
106 | CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
107 | 
108 | const CommandItem = React.forwardRef<
109 |   React.ElementRef<typeof CommandPrimitive.Item>,
110 |   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
111 | >(({ className, ...props }, ref) => (
112 |   <CommandPrimitive.Item
113 |     ref={ref}
114 |     className={cn(
115 |       "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
116 |       className,
117 |     )}
118 |     {...props}
119 |   />
120 | ));
121 | 
122 | CommandItem.displayName = CommandPrimitive.Item.displayName;
123 | 
124 | const CommandShortcut = ({
125 |   className,
126 |   ...props
127 | }: React.HTMLAttributes<HTMLSpanElement>) => {
128 |   return (
129 |     <span
130 |       className={cn(
131 |         "ml-auto text-xs tracking-widest text-muted-foreground",
132 |         className,
133 |       )}
134 |       {...props}
135 |     />
136 |   );
137 | };
138 | CommandShortcut.displayName = "CommandShortcut";
139 | 
140 | export {
141 |   Command,
142 |   CommandDialog,
143 |   CommandInput,
144 |   CommandList,
145 |   CommandEmpty,
146 |   CommandGroup,
147 |   CommandItem,
148 |   CommandShortcut,
149 |   CommandSeparator,
150 | };
151 | 


--------------------------------------------------------------------------------
/client/src/components/ui/dialog.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import * as React from "react";
  4 | import * as DialogPrimitive from "@radix-ui/react-dialog";
  5 | import { cn } from "@/lib/utils";
  6 | import { Cross2Icon } from "@radix-ui/react-icons";
  7 | 
  8 | const Dialog = DialogPrimitive.Root;
  9 | 
 10 | const DialogTrigger = DialogPrimitive.Trigger;
 11 | 
 12 | const DialogPortal = DialogPrimitive.Portal;
 13 | 
 14 | const DialogClose = DialogPrimitive.Close;
 15 | 
 16 | const DialogOverlay = React.forwardRef<
 17 |   React.ElementRef<typeof DialogPrimitive.Overlay>,
 18 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
 19 | >(({ className, ...props }, ref) => (
 20 |   <DialogPrimitive.Overlay
 21 |     ref={ref}
 22 |     className={cn(
 23 |       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
 24 |       className,
 25 |     )}
 26 |     {...props}
 27 |   />
 28 | ));
 29 | DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
 30 | 
 31 | const DialogContent = React.forwardRef<
 32 |   React.ElementRef<typeof DialogPrimitive.Content>,
 33 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
 34 | >(({ className, children, ...props }, ref) => (
 35 |   <DialogPortal>
 36 |     <DialogOverlay />
 37 |     <DialogPrimitive.Content
 38 |       ref={ref}
 39 |       className={cn(
 40 |         "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
 41 |         className,
 42 |       )}
 43 |       {...props}
 44 |     >
 45 |       {children}
 46 |       <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
 47 |         <Cross2Icon className="h-4 w-4" />
 48 |         <span className="sr-only">Close</span>
 49 |       </DialogPrimitive.Close>
 50 |     </DialogPrimitive.Content>
 51 |   </DialogPortal>
 52 | ));
 53 | DialogContent.displayName = DialogPrimitive.Content.displayName;
 54 | 
 55 | const DialogHeader = ({
 56 |   className,
 57 |   ...props
 58 | }: React.HTMLAttributes<HTMLDivElement>) => (
 59 |   <div
 60 |     className={cn(
 61 |       "flex flex-col space-y-1.5 text-center sm:text-left",
 62 |       className,
 63 |     )}
 64 |     {...props}
 65 |   />
 66 | );
 67 | DialogHeader.displayName = "DialogHeader";
 68 | 
 69 | const DialogFooter = ({
 70 |   className,
 71 |   ...props
 72 | }: React.HTMLAttributes<HTMLDivElement>) => (
 73 |   <div
 74 |     className={cn(
 75 |       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
 76 |       className,
 77 |     )}
 78 |     {...props}
 79 |   />
 80 | );
 81 | DialogFooter.displayName = "DialogFooter";
 82 | 
 83 | const DialogTitle = React.forwardRef<
 84 |   React.ElementRef<typeof DialogPrimitive.Title>,
 85 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
 86 | >(({ className, ...props }, ref) => (
 87 |   <DialogPrimitive.Title
 88 |     ref={ref}
 89 |     className={cn(
 90 |       "text-lg font-semibold leading-none tracking-tight",
 91 |       className,
 92 |     )}
 93 |     {...props}
 94 |   />
 95 | ));
 96 | DialogTitle.displayName = DialogPrimitive.Title.displayName;
 97 | 
 98 | const DialogDescription = React.forwardRef<
 99 |   React.ElementRef<typeof DialogPrimitive.Description>,
100 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
101 | >(({ className, ...props }, ref) => (
102 |   <DialogPrimitive.Description
103 |     ref={ref}
104 |     className={cn("text-sm text-muted-foreground", className)}
105 |     {...props}
106 |   />
107 | ));
108 | DialogDescription.displayName = DialogPrimitive.Description.displayName;
109 | 
110 | export {
111 |   Dialog,
112 |   DialogPortal,
113 |   DialogOverlay,
114 |   DialogTrigger,
115 |   DialogClose,
116 |   DialogContent,
117 |   DialogHeader,
118 |   DialogFooter,
119 |   DialogTitle,
120 |   DialogDescription,
121 | };
122 | 


--------------------------------------------------------------------------------
/client/src/components/ui/input.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | 
 3 | import { cn } from "@/lib/utils";
 4 | 
 5 | export interface InputProps
 6 |   extends React.InputHTMLAttributes<HTMLInputElement> {}
 7 | 
 8 | const Input = React.forwardRef<HTMLInputElement, InputProps>(
 9 |   ({ className, type, ...props }, ref) => {
10 |     return (
11 |       <input
12 |         type={type}
13 |         className={cn(
14 |           "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
15 |           className,
16 |         )}
17 |         ref={ref}
18 |         {...props}
19 |       />
20 |     );
21 |   },
22 | );
23 | Input.displayName = "Input";
24 | 
25 | export { Input };
26 | 


--------------------------------------------------------------------------------
/client/src/components/ui/label.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import * as LabelPrimitive from "@radix-ui/react-label";
 3 | import { cva, type VariantProps } from "class-variance-authority";
 4 | 
 5 | import { cn } from "@/lib/utils";
 6 | 
 7 | const labelVariants = cva(
 8 |   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
 9 | );
10 | 
11 | const Label = React.forwardRef<
12 |   React.ElementRef<typeof LabelPrimitive.Root>,
13 |   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
14 |     VariantProps<typeof labelVariants>
15 | >(({ className, ...props }, ref) => (
16 |   <LabelPrimitive.Root
17 |     ref={ref}
18 |     className={cn(labelVariants(), className)}
19 |     {...props}
20 |   />
21 | ));
22 | Label.displayName = LabelPrimitive.Root.displayName;
23 | 
24 | export { Label };
25 | 


--------------------------------------------------------------------------------
/client/src/components/ui/popover.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import * as PopoverPrimitive from "@radix-ui/react-popover";
 3 | 
 4 | import { cn } from "@/lib/utils";
 5 | 
 6 | const Popover = PopoverPrimitive.Root;
 7 | 
 8 | const PopoverTrigger = PopoverPrimitive.Trigger;
 9 | 
10 | const PopoverAnchor = PopoverPrimitive.Anchor;
11 | 
12 | const PopoverContent = React.forwardRef<
13 |   React.ElementRef<typeof PopoverPrimitive.Content>,
14 |   React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
15 | >(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
16 |   <PopoverPrimitive.Portal>
17 |     <PopoverPrimitive.Content
18 |       ref={ref}
19 |       align={align}
20 |       sideOffset={sideOffset}
21 |       className={cn(
22 |         "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
23 |         className,
24 |       )}
25 |       {...props}
26 |     />
27 |   </PopoverPrimitive.Portal>
28 | ));
29 | PopoverContent.displayName = PopoverPrimitive.Content.displayName;
30 | 
31 | export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
32 | 


--------------------------------------------------------------------------------
/client/src/components/ui/select.tsx:
--------------------------------------------------------------------------------
  1 | import * as React from "react";
  2 | import {
  3 |   CaretSortIcon,
  4 |   CheckIcon,
  5 |   ChevronDownIcon,
  6 |   ChevronUpIcon,
  7 | } from "@radix-ui/react-icons";
  8 | import * as SelectPrimitive from "@radix-ui/react-select";
  9 | 
 10 | import { cn } from "@/lib/utils";
 11 | 
 12 | const Select = SelectPrimitive.Root;
 13 | 
 14 | const SelectGroup = SelectPrimitive.Group;
 15 | 
 16 | const SelectValue = SelectPrimitive.Value;
 17 | 
 18 | const SelectTrigger = React.forwardRef<
 19 |   React.ElementRef<typeof SelectPrimitive.Trigger>,
 20 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
 21 | >(({ className, children, ...props }, ref) => (
 22 |   <SelectPrimitive.Trigger
 23 |     ref={ref}
 24 |     className={cn(
 25 |       "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
 26 |       className,
 27 |     )}
 28 |     {...props}
 29 |   >
 30 |     {children}
 31 |     <SelectPrimitive.Icon asChild>
 32 |       <CaretSortIcon className="h-4 w-4 opacity-50" />
 33 |     </SelectPrimitive.Icon>
 34 |   </SelectPrimitive.Trigger>
 35 | ));
 36 | SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
 37 | 
 38 | const SelectScrollUpButton = React.forwardRef<
 39 |   React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
 40 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
 41 | >(({ className, ...props }, ref) => (
 42 |   <SelectPrimitive.ScrollUpButton
 43 |     ref={ref}
 44 |     className={cn(
 45 |       "flex cursor-default items-center justify-center py-1",
 46 |       className,
 47 |     )}
 48 |     {...props}
 49 |   >
 50 |     <ChevronUpIcon />
 51 |   </SelectPrimitive.ScrollUpButton>
 52 | ));
 53 | SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
 54 | 
 55 | const SelectScrollDownButton = React.forwardRef<
 56 |   React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
 57 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
 58 | >(({ className, ...props }, ref) => (
 59 |   <SelectPrimitive.ScrollDownButton
 60 |     ref={ref}
 61 |     className={cn(
 62 |       "flex cursor-default items-center justify-center py-1",
 63 |       className,
 64 |     )}
 65 |     {...props}
 66 |   >
 67 |     <ChevronDownIcon />
 68 |   </SelectPrimitive.ScrollDownButton>
 69 | ));
 70 | SelectScrollDownButton.displayName =
 71 |   SelectPrimitive.ScrollDownButton.displayName;
 72 | 
 73 | const SelectContent = React.forwardRef<
 74 |   React.ElementRef<typeof SelectPrimitive.Content>,
 75 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
 76 | >(({ className, children, position = "popper", ...props }, ref) => (
 77 |   <SelectPrimitive.Portal>
 78 |     <SelectPrimitive.Content
 79 |       ref={ref}
 80 |       className={cn(
 81 |         "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
 82 |         position === "popper" &&
 83 |           "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
 84 |         className,
 85 |       )}
 86 |       position={position}
 87 |       {...props}
 88 |     >
 89 |       <SelectScrollUpButton />
 90 |       <SelectPrimitive.Viewport
 91 |         className={cn(
 92 |           "p-1",
 93 |           position === "popper" &&
 94 |             "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
 95 |         )}
 96 |       >
 97 |         {children}
 98 |       </SelectPrimitive.Viewport>
 99 |       <SelectScrollDownButton />
100 |     </SelectPrimitive.Content>
101 |   </SelectPrimitive.Portal>
102 | ));
103 | SelectContent.displayName = SelectPrimitive.Content.displayName;
104 | 
105 | const SelectLabel = React.forwardRef<
106 |   React.ElementRef<typeof SelectPrimitive.Label>,
107 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
108 | >(({ className, ...props }, ref) => (
109 |   <SelectPrimitive.Label
110 |     ref={ref}
111 |     className={cn("px-2 py-1.5 text-sm font-semibold", className)}
112 |     {...props}
113 |   />
114 | ));
115 | SelectLabel.displayName = SelectPrimitive.Label.displayName;
116 | 
117 | const SelectItem = React.forwardRef<
118 |   React.ElementRef<typeof SelectPrimitive.Item>,
119 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
120 | >(({ className, children, ...props }, ref) => (
121 |   <SelectPrimitive.Item
122 |     ref={ref}
123 |     className={cn(
124 |       "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
125 |       className,
126 |     )}
127 |     {...props}
128 |   >
129 |     <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
130 |       <SelectPrimitive.ItemIndicator>
131 |         <CheckIcon className="h-4 w-4" />
132 |       </SelectPrimitive.ItemIndicator>
133 |     </span>
134 |     <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
135 |   </SelectPrimitive.Item>
136 | ));
137 | SelectItem.displayName = SelectPrimitive.Item.displayName;
138 | 
139 | const SelectSeparator = React.forwardRef<
140 |   React.ElementRef<typeof SelectPrimitive.Separator>,
141 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
142 | >(({ className, ...props }, ref) => (
143 |   <SelectPrimitive.Separator
144 |     ref={ref}
145 |     className={cn("-mx-1 my-1 h-px bg-muted", className)}
146 |     {...props}
147 |   />
148 | ));
149 | SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
150 | 
151 | export {
152 |   Select,
153 |   SelectGroup,
154 |   SelectValue,
155 |   SelectTrigger,
156 |   SelectContent,
157 |   SelectLabel,
158 |   SelectItem,
159 |   SelectSeparator,
160 |   SelectScrollUpButton,
161 |   SelectScrollDownButton,
162 | };
163 | 


--------------------------------------------------------------------------------
/client/src/components/ui/tabs.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import * as TabsPrimitive from "@radix-ui/react-tabs";
 3 | 
 4 | import { cn } from "@/lib/utils";
 5 | 
 6 | const Tabs = TabsPrimitive.Root;
 7 | 
 8 | const TabsList = React.forwardRef<
 9 |   React.ElementRef<typeof TabsPrimitive.List>,
10 |   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
11 | >(({ className, ...props }, ref) => (
12 |   <TabsPrimitive.List
13 |     ref={ref}
14 |     className={cn(
15 |       "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
16 |       className,
17 |     )}
18 |     {...props}
19 |   />
20 | ));
21 | TabsList.displayName = TabsPrimitive.List.displayName;
22 | 
23 | const TabsTrigger = React.forwardRef<
24 |   React.ElementRef<typeof TabsPrimitive.Trigger>,
25 |   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
26 | >(({ className, ...props }, ref) => (
27 |   <TabsPrimitive.Trigger
28 |     ref={ref}
29 |     className={cn(
30 |       "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-muted data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
31 |       className,
32 |     )}
33 |     {...props}
34 |   />
35 | ));
36 | TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
37 | 
38 | const TabsContent = React.forwardRef<
39 |   React.ElementRef<typeof TabsPrimitive.Content>,
40 |   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
41 | >(({ className, ...props }, ref) => (
42 |   <TabsPrimitive.Content
43 |     ref={ref}
44 |     className={cn(
45 |       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
46 |       className,
47 |     )}
48 |     {...props}
49 |   />
50 | ));
51 | TabsContent.displayName = TabsPrimitive.Content.displayName;
52 | 
53 | export { Tabs, TabsList, TabsTrigger, TabsContent };
54 | 


--------------------------------------------------------------------------------
/client/src/components/ui/textarea.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | 
 3 | import { cn } from "@/lib/utils";
 4 | 
 5 | export interface TextareaProps
 6 |   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
 7 | 
 8 | const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
 9 |   ({ className, ...props }, ref) => {
10 |     return (
11 |       <textarea
12 |         className={cn(
13 |           "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
14 |           className,
15 |         )}
16 |         ref={ref}
17 |         {...props}
18 |       />
19 |     );
20 |   },
21 | );
22 | Textarea.displayName = "Textarea";
23 | 
24 | export { Textarea };
25 | 


--------------------------------------------------------------------------------
/client/src/index.css:
--------------------------------------------------------------------------------
  1 | @tailwind base;
  2 | @tailwind components;
  3 | @tailwind utilities;
  4 | 
  5 | :root {
  6 |   font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  7 |   line-height: 1.5;
  8 |   font-weight: 400;
  9 | 
 10 |   color-scheme: light dark;
 11 |   color: rgba(255, 255, 255, 0.87);
 12 |   background-color: #242424;
 13 | 
 14 |   font-synthesis: none;
 15 |   text-rendering: optimizeLegibility;
 16 |   -webkit-font-smoothing: antialiased;
 17 |   -moz-osx-font-smoothing: grayscale;
 18 | }
 19 | 
 20 | a {
 21 |   font-weight: 500;
 22 |   color: #646cff;
 23 |   text-decoration: inherit;
 24 | }
 25 | a:hover {
 26 |   color: #535bf2;
 27 | }
 28 | 
 29 | body {
 30 |   margin: 0;
 31 |   place-items: center;
 32 |   min-width: 320px;
 33 |   min-height: 100vh;
 34 | }
 35 | 
 36 | h1 {
 37 |   font-size: 3.2em;
 38 |   line-height: 1.1;
 39 | }
 40 | 
 41 | button {
 42 |   border-radius: 8px;
 43 |   border: 1px solid transparent;
 44 |   padding: 0.6em 1.2em;
 45 |   font-size: 1em;
 46 |   font-weight: 500;
 47 |   font-family: inherit;
 48 |   background-color: #1a1a1a;
 49 |   cursor: pointer;
 50 |   transition: border-color 0.25s;
 51 | }
 52 | button:hover {
 53 |   border-color: #646cff;
 54 | }
 55 | button:focus,
 56 | button:focus-visible {
 57 |   outline: 4px auto -webkit-focus-ring-color;
 58 | }
 59 | 
 60 | button[role="checkbox"] {
 61 |   padding: 0;
 62 | }
 63 | 
 64 | @media (prefers-color-scheme: light) {
 65 |   :root {
 66 |     color: #213547;
 67 |     background-color: #ffffff;
 68 |   }
 69 |   a:hover {
 70 |     color: #747bff;
 71 |   }
 72 |   button {
 73 |     background-color: #f9f9f9;
 74 |   }
 75 | }
 76 | 
 77 | @layer base {
 78 |   :root {
 79 |     --background: 0 0% 100%;
 80 |     --foreground: 222.2 84% 4.9%;
 81 |     --card: 0 0% 100%;
 82 |     --card-foreground: 222.2 84% 4.9%;
 83 |     --popover: 0 0% 100%;
 84 |     --popover-foreground: 222.2 84% 4.9%;
 85 |     --primary: 222.2 47.4% 11.2%;
 86 |     --primary-foreground: 210 40% 98%;
 87 |     --secondary: 210 40% 96.1%;
 88 |     --secondary-foreground: 222.2 47.4% 11.2%;
 89 |     --muted: 210 40% 96.1%;
 90 |     --muted-foreground: 215.4 16.3% 46.9%;
 91 |     --accent: 210 40% 96.1%;
 92 |     --accent-foreground: 222.2 47.4% 11.2%;
 93 |     --destructive: 0 84.2% 60.2%;
 94 |     --destructive-foreground: 210 40% 98%;
 95 |     --border: 214.3 31.8% 91.4%;
 96 |     --input: 214.3 31.8% 91.4%;
 97 |     --ring: 222.2 84% 4.9%;
 98 |     --chart-1: 12 76% 61%;
 99 |     --chart-2: 173 58% 39%;
100 |     --chart-3: 197 37% 24%;
101 |     --chart-4: 43 74% 66%;
102 |     --chart-5: 27 87% 67%;
103 |     --radius: 0.5rem;
104 |   }
105 |   .dark {
106 |     --background: 222.2 84% 4.9%;
107 |     --foreground: 210 40% 98%;
108 |     --card: 222.2 84% 4.9%;
109 |     --card-foreground: 210 40% 98%;
110 |     --popover: 222.2 84% 4.9%;
111 |     --popover-foreground: 210 40% 98%;
112 |     --primary: 210 40% 98%;
113 |     --primary-foreground: 222.2 47.4% 11.2%;
114 |     --secondary: 217.2 32.6% 17.5%;
115 |     --secondary-foreground: 210 40% 98%;
116 |     --muted: 217.2 32.6% 17.5%;
117 |     --muted-foreground: 215 20.2% 65.1%;
118 |     --accent: 217.2 32.6% 17.5%;
119 |     --accent-foreground: 210 40% 98%;
120 |     --destructive: 0 62.8% 30.6%;
121 |     --destructive-foreground: 210 40% 98%;
122 |     --border: 217.2 32.6% 17.5%;
123 |     --input: 217.2 32.6% 17.5%;
124 |     --ring: 212.7 26.8% 83.9%;
125 |     --chart-1: 220 70% 50%;
126 |     --chart-2: 160 60% 45%;
127 |     --chart-3: 30 80% 55%;
128 |     --chart-4: 280 65% 60%;
129 |     --chart-5: 340 75% 55%;
130 |   }
131 | }
132 | 
133 | @layer base {
134 |   * {
135 |     @apply border-border;
136 |   }
137 |   body {
138 |     @apply bg-background text-foreground;
139 |   }
140 | }
141 | 


--------------------------------------------------------------------------------
/client/src/lib/auth.ts:
--------------------------------------------------------------------------------
 1 | import { OAuthClientProvider } from "@modelcontextprotocol/sdk/client/auth.js";
 2 | import {
 3 |   OAuthClientInformationSchema,
 4 |   OAuthClientInformation,
 5 |   OAuthTokens,
 6 |   OAuthTokensSchema,
 7 | } from "@modelcontextprotocol/sdk/shared/auth.js";
 8 | import { SESSION_KEYS } from "./constants";
 9 | 
10 | class InspectorOAuthClientProvider implements OAuthClientProvider {
11 |   get redirectUrl() {
12 |     return window.location.origin + "/oauth/callback";
13 |   }
14 | 
15 |   get clientMetadata() {
16 |     return {
17 |       redirect_uris: [this.redirectUrl],
18 |       token_endpoint_auth_method: "none",
19 |       grant_types: ["authorization_code", "refresh_token"],
20 |       response_types: ["code"],
21 |       client_name: "MCP Inspector",
22 |       client_uri: "https://github.com/modelcontextprotocol/inspector",
23 |     };
24 |   }
25 | 
26 |   async clientInformation() {
27 |     const value = sessionStorage.getItem(SESSION_KEYS.CLIENT_INFORMATION);
28 |     if (!value) {
29 |       return undefined;
30 |     }
31 | 
32 |     return await OAuthClientInformationSchema.parseAsync(JSON.parse(value));
33 |   }
34 | 
35 |   saveClientInformation(clientInformation: OAuthClientInformation) {
36 |     sessionStorage.setItem(
37 |       SESSION_KEYS.CLIENT_INFORMATION,
38 |       JSON.stringify(clientInformation),
39 |     );
40 |   }
41 | 
42 |   async tokens() {
43 |     const tokens = sessionStorage.getItem(SESSION_KEYS.TOKENS);
44 |     if (!tokens) {
45 |       return undefined;
46 |     }
47 | 
48 |     return await OAuthTokensSchema.parseAsync(JSON.parse(tokens));
49 |   }
50 | 
51 |   saveTokens(tokens: OAuthTokens) {
52 |     sessionStorage.setItem(SESSION_KEYS.TOKENS, JSON.stringify(tokens));
53 |   }
54 | 
55 |   redirectToAuthorization(authorizationUrl: URL) {
56 |     window.location.href = authorizationUrl.href;
57 |   }
58 | 
59 |   saveCodeVerifier(codeVerifier: string) {
60 |     sessionStorage.setItem(SESSION_KEYS.CODE_VERIFIER, codeVerifier);
61 |   }
62 | 
63 |   codeVerifier() {
64 |     const verifier = sessionStorage.getItem(SESSION_KEYS.CODE_VERIFIER);
65 |     if (!verifier) {
66 |       throw new Error("No code verifier saved for session");
67 |     }
68 | 
69 |     return verifier;
70 |   }
71 | }
72 | 
73 | export const authProvider = new InspectorOAuthClientProvider();
74 | 


--------------------------------------------------------------------------------
/client/src/lib/constants.ts:
--------------------------------------------------------------------------------
1 | // OAuth-related session storage keys
2 | export const SESSION_KEYS = {
3 |   CODE_VERIFIER: "mcp_code_verifier",
4 |   SERVER_URL: "mcp_server_url",
5 |   TOKENS: "mcp_tokens",
6 |   CLIENT_INFORMATION: "mcp_client_information",
7 | } as const;
8 | 


--------------------------------------------------------------------------------
/client/src/lib/hooks/useCompletionState.ts:
--------------------------------------------------------------------------------
  1 | import { useState, useCallback, useEffect, useRef } from "react";
  2 | import {
  3 |   ResourceReference,
  4 |   PromptReference,
  5 | } from "@modelcontextprotocol/sdk/types.js";
  6 | 
  7 | interface CompletionState {
  8 |   completions: Record<string, string[]>;
  9 |   loading: Record<string, boolean>;
 10 | }
 11 | 
 12 | // eslint-disable-next-line @typescript-eslint/no-explicit-any
 13 | function debounce<T extends (...args: any[]) => PromiseLike<void>>(
 14 |   func: T,
 15 |   wait: number,
 16 | ): (...args: Parameters<T>) => void {
 17 |   let timeout: ReturnType<typeof setTimeout>;
 18 |   return function (...args: Parameters<T>) {
 19 |     clearTimeout(timeout);
 20 |     timeout = setTimeout(() => func(...args), wait);
 21 |   };
 22 | }
 23 | 
 24 | export function useCompletionState(
 25 |   handleCompletion: (
 26 |     ref: ResourceReference | PromptReference,
 27 |     argName: string,
 28 |     value: string,
 29 |     signal?: AbortSignal,
 30 |   ) => Promise<string[]>,
 31 |   completionsSupported: boolean = true,
 32 |   debounceMs: number = 300,
 33 | ) {
 34 |   const [state, setState] = useState<CompletionState>({
 35 |     completions: {},
 36 |     loading: {},
 37 |   });
 38 | 
 39 |   const abortControllerRef = useRef<AbortController | null>(null);
 40 | 
 41 |   const cleanup = useCallback(() => {
 42 |     if (abortControllerRef.current) {
 43 |       abortControllerRef.current.abort();
 44 |       abortControllerRef.current = null;
 45 |     }
 46 |   }, []);
 47 | 
 48 |   // Cleanup on unmount
 49 |   useEffect(() => {
 50 |     return cleanup;
 51 |   }, [cleanup]);
 52 | 
 53 |   const clearCompletions = useCallback(() => {
 54 |     cleanup();
 55 |     setState({
 56 |       completions: {},
 57 |       loading: {},
 58 |     });
 59 |   }, [cleanup]);
 60 | 
 61 |   const requestCompletions = useCallback(
 62 |     debounce(
 63 |       async (
 64 |         ref: ResourceReference | PromptReference,
 65 |         argName: string,
 66 |         value: string,
 67 |       ) => {
 68 |         if (!completionsSupported) {
 69 |           return;
 70 |         }
 71 | 
 72 |         cleanup();
 73 | 
 74 |         const abortController = new AbortController();
 75 |         abortControllerRef.current = abortController;
 76 | 
 77 |         setState((prev) => ({
 78 |           ...prev,
 79 |           loading: { ...prev.loading, [argName]: true },
 80 |         }));
 81 | 
 82 |         try {
 83 |           const values = await handleCompletion(
 84 |             ref,
 85 |             argName,
 86 |             value,
 87 |             abortController.signal,
 88 |           );
 89 | 
 90 |           if (!abortController.signal.aborted) {
 91 |             setState((prev) => ({
 92 |               ...prev,
 93 |               completions: { ...prev.completions, [argName]: values },
 94 |               loading: { ...prev.loading, [argName]: false },
 95 |             }));
 96 |           }
 97 |         } catch (err) {
 98 |           if (!abortController.signal.aborted) {
 99 |             setState((prev) => ({
100 |               ...prev,
101 |               loading: { ...prev.loading, [argName]: false },
102 |             }));
103 |           }
104 |         } finally {
105 |           if (abortControllerRef.current === abortController) {
106 |             abortControllerRef.current = null;
107 |           }
108 |         }
109 |       },
110 |       debounceMs,
111 |     ),
112 |     [handleCompletion, completionsSupported, cleanup, debounceMs],
113 |   );
114 | 
115 |   // Clear completions when support status changes
116 |   useEffect(() => {
117 |     if (!completionsSupported) {
118 |       clearCompletions();
119 |     }
120 |   }, [completionsSupported, clearCompletions]);
121 | 
122 |   return {
123 |     ...state,
124 |     clearCompletions,
125 |     requestCompletions,
126 |     completionsSupported,
127 |   };
128 | }
129 | 


--------------------------------------------------------------------------------
/client/src/lib/hooks/useConnection.ts:
--------------------------------------------------------------------------------
  1 | import { Client } from "@modelcontextprotocol/sdk/client/index.js";
  2 | import {
  3 |   SSEClientTransport,
  4 |   SseError,
  5 | } from "@modelcontextprotocol/sdk/client/sse.js";
  6 | import {
  7 |   ClientNotification,
  8 |   ClientRequest,
  9 |   CreateMessageRequestSchema,
 10 |   ListRootsRequestSchema,
 11 |   ProgressNotificationSchema,
 12 |   ResourceUpdatedNotificationSchema,
 13 |   LoggingMessageNotificationSchema,
 14 |   Request,
 15 |   Result,
 16 |   ServerCapabilities,
 17 |   PromptReference,
 18 |   ResourceReference,
 19 |   McpError,
 20 |   CompleteResultSchema,
 21 |   ErrorCode,
 22 | } from "@modelcontextprotocol/sdk/types.js";
 23 | import { useState } from "react";
 24 | import { toast } from "react-toastify";
 25 | import { z } from "zod";
 26 | import { SESSION_KEYS } from "../constants";
 27 | import { Notification, StdErrNotificationSchema } from "../notificationTypes";
 28 | import { auth } from "@modelcontextprotocol/sdk/client/auth.js";
 29 | import { authProvider } from "../auth";
 30 | import packageJson from "../../../package.json";
 31 | 
 32 | const params = new URLSearchParams(window.location.search);
 33 | const DEFAULT_REQUEST_TIMEOUT_MSEC =
 34 |   parseInt(params.get("timeout") ?? "") || 10000;
 35 | 
 36 | interface UseConnectionOptions {
 37 |   transportType: "stdio" | "sse";
 38 |   command: string;
 39 |   args: string;
 40 |   sseUrl: string;
 41 |   env: Record<string, string>;
 42 |   proxyServerUrl: string;
 43 |   bearerToken?: string;
 44 |   requestTimeout?: number;
 45 |   onNotification?: (notification: Notification) => void;
 46 |   onStdErrNotification?: (notification: Notification) => void;
 47 |   onPendingRequest?: (request: any, resolve: any, reject: any) => void;
 48 |   getRoots?: () => any[];
 49 | }
 50 | 
 51 | interface RequestOptions {
 52 |   signal?: AbortSignal;
 53 |   timeout?: number;
 54 |   suppressToast?: boolean;
 55 | }
 56 | 
 57 | export function useConnection({
 58 |   transportType,
 59 |   command,
 60 |   args,
 61 |   sseUrl,
 62 |   env,
 63 |   proxyServerUrl,
 64 |   bearerToken,
 65 |   requestTimeout = DEFAULT_REQUEST_TIMEOUT_MSEC,
 66 |   onNotification,
 67 |   onStdErrNotification,
 68 |   onPendingRequest,
 69 |   getRoots,
 70 | }: UseConnectionOptions) {
 71 |   const [connectionStatus, setConnectionStatus] = useState<
 72 |     "disconnected" | "connected" | "error"
 73 |   >("disconnected");
 74 |   const [serverCapabilities, setServerCapabilities] =
 75 |     useState<ServerCapabilities | null>(null);
 76 |   const [mcpClient, setMcpClient] = useState<Client | null>(null);
 77 |   const [requestHistory, setRequestHistory] = useState<
 78 |     { request: string; response?: string }[]
 79 |   >([]);
 80 |   const [completionsSupported, setCompletionsSupported] = useState(true);
 81 | 
 82 |   const pushHistory = (request: object, response?: object) => {
 83 |     setRequestHistory((prev) => [
 84 |       ...prev,
 85 |       {
 86 |         request: JSON.stringify(request),
 87 |         response: response !== undefined ? JSON.stringify(response) : undefined,
 88 |       },
 89 |     ]);
 90 |   };
 91 | 
 92 |   const makeRequest = async <T extends z.ZodType>(
 93 |     request: ClientRequest,
 94 |     schema: T,
 95 |     options?: RequestOptions,
 96 |   ): Promise<z.output<T>> => {
 97 |     if (!mcpClient) {
 98 |       throw new Error("MCP client not connected");
 99 |     }
100 | 
101 |     try {
102 |       const abortController = new AbortController();
103 |       const timeoutId = setTimeout(() => {
104 |         abortController.abort("Request timed out");
105 |       }, options?.timeout ?? requestTimeout);
106 | 
107 |       let response;
108 |       try {
109 |         response = await mcpClient.request(request, schema, {
110 |           signal: options?.signal ?? abortController.signal,
111 |         });
112 |         pushHistory(request, response);
113 |       } catch (error) {
114 |         const errorMessage =
115 |           error instanceof Error ? error.message : String(error);
116 |         pushHistory(request, { error: errorMessage });
117 |         throw error;
118 |       } finally {
119 |         clearTimeout(timeoutId);
120 |       }
121 | 
122 |       return response;
123 |     } catch (e: unknown) {
124 |       if (!options?.suppressToast) {
125 |         const errorString = (e as Error).message ?? String(e);
126 |         toast.error(errorString);
127 |       }
128 |       throw e;
129 |     }
130 |   };
131 | 
132 |   const handleCompletion = async (
133 |     ref: ResourceReference | PromptReference,
134 |     argName: string,
135 |     value: string,
136 |     signal?: AbortSignal,
137 |   ): Promise<string[]> => {
138 |     if (!mcpClient || !completionsSupported) {
139 |       return [];
140 |     }
141 | 
142 |     const request: ClientRequest = {
143 |       method: "completion/complete",
144 |       params: {
145 |         argument: {
146 |           name: argName,
147 |           value,
148 |         },
149 |         ref,
150 |       },
151 |     };
152 | 
153 |     try {
154 |       const response = await makeRequest(request, CompleteResultSchema, {
155 |         signal,
156 |         suppressToast: true,
157 |       });
158 |       return response?.completion.values || [];
159 |     } catch (e: unknown) {
160 |       // Disable completions silently if the server doesn't support them.
161 |       // See https://github.com/modelcontextprotocol/specification/discussions/122
162 |       if (e instanceof McpError && e.code === ErrorCode.MethodNotFound) {
163 |         setCompletionsSupported(false);
164 |         return [];
165 |       }
166 | 
167 |       // Unexpected errors - show toast and rethrow
168 |       toast.error(e instanceof Error ? e.message : String(e));
169 |       throw e;
170 |     }
171 |   };
172 | 
173 |   const sendNotification = async (notification: ClientNotification) => {
174 |     if (!mcpClient) {
175 |       const error = new Error("MCP client not connected");
176 |       toast.error(error.message);
177 |       throw error;
178 |     }
179 | 
180 |     try {
181 |       await mcpClient.notification(notification);
182 |       // Log successful notifications
183 |       pushHistory(notification);
184 |     } catch (e: unknown) {
185 |       if (e instanceof McpError) {
186 |         // Log MCP protocol errors
187 |         pushHistory(notification, { error: e.message });
188 |       }
189 |       toast.error(e instanceof Error ? e.message : String(e));
190 |       throw e;
191 |     }
192 |   };
193 | 
194 |   const handleAuthError = async (error: unknown) => {
195 |     if (error instanceof SseError && error.code === 401) {
196 |       sessionStorage.setItem(SESSION_KEYS.SERVER_URL, sseUrl);
197 | 
198 |       const result = await auth(authProvider, { serverUrl: sseUrl });
199 |       return result === "AUTHORIZED";
200 |     }
201 | 
202 |     return false;
203 |   };
204 | 
205 |   const connect = async (_e?: unknown, retryCount: number = 0) => {
206 |     try {
207 |       const client = new Client<Request, Notification, Result>(
208 |         {
209 |           name: "mcp-inspector",
210 |           version: packageJson.version,
211 |         },
212 |         {
213 |           capabilities: {
214 |             sampling: {},
215 |             roots: {
216 |               listChanged: true,
217 |             },
218 |           },
219 |         },
220 |       );
221 | 
222 |       const backendUrl = new URL(`${proxyServerUrl}/sse`);
223 | 
224 |       backendUrl.searchParams.append("transportType", transportType);
225 |       if (transportType === "stdio") {
226 |         backendUrl.searchParams.append("command", command);
227 |         backendUrl.searchParams.append("args", args);
228 |         backendUrl.searchParams.append("env", JSON.stringify(env));
229 |       } else {
230 |         backendUrl.searchParams.append("url", sseUrl);
231 |       }
232 | 
233 |       // Inject auth manually instead of using SSEClientTransport, because we're
234 |       // proxying through the inspector server first.
235 |       const headers: HeadersInit = {};
236 | 
237 |       // Use manually provided bearer token if available, otherwise use OAuth tokens
238 |       const token = bearerToken || (await authProvider.tokens())?.access_token;
239 |       if (token) {
240 |         headers["Authorization"] = `Bearer ${token}`;
241 |       }
242 | 
243 |       const clientTransport = new SSEClientTransport(backendUrl, {
244 |         eventSourceInit: {
245 |           fetch: (url, init) => fetch(url, { ...init, headers }),
246 |         },
247 |         requestInit: {
248 |           headers,
249 |         },
250 |       });
251 | 
252 |       if (onNotification) {
253 |         client.setNotificationHandler(
254 |           ProgressNotificationSchema,
255 |           onNotification,
256 |         );
257 | 
258 |         client.setNotificationHandler(
259 |           ResourceUpdatedNotificationSchema,
260 |           onNotification,
261 |         );
262 | 
263 |         client.setNotificationHandler(
264 |           LoggingMessageNotificationSchema,
265 |           onNotification,
266 |         );
267 |       }
268 | 
269 |       if (onStdErrNotification) {
270 |         client.setNotificationHandler(
271 |           StdErrNotificationSchema,
272 |           onStdErrNotification,
273 |         );
274 |       }
275 | 
276 |       try {
277 |         await client.connect(clientTransport);
278 |       } catch (error) {
279 |         console.error("Failed to connect to MCP server:", error);
280 |         const shouldRetry = await handleAuthError(error);
281 |         if (shouldRetry) {
282 |           return connect(undefined, retryCount + 1);
283 |         }
284 | 
285 |         if (error instanceof SseError && error.code === 401) {
286 |           // Don't set error state if we're about to redirect for auth
287 |           return;
288 |         }
289 |         throw error;
290 |       }
291 | 
292 |       const capabilities = client.getServerCapabilities();
293 |       setServerCapabilities(capabilities ?? null);
294 |       setCompletionsSupported(true); // Reset completions support on new connection
295 | 
296 |       if (onPendingRequest) {
297 |         client.setRequestHandler(CreateMessageRequestSchema, (request) => {
298 |           return new Promise((resolve, reject) => {
299 |             onPendingRequest(request, resolve, reject);
300 |           });
301 |         });
302 |       }
303 | 
304 |       if (getRoots) {
305 |         client.setRequestHandler(ListRootsRequestSchema, async () => {
306 |           return { roots: getRoots() };
307 |         });
308 |       }
309 | 
310 |       setMcpClient(client);
311 |       setConnectionStatus("connected");
312 |     } catch (e) {
313 |       console.error(e);
314 |       setConnectionStatus("error");
315 |     }
316 |   };
317 | 
318 |   return {
319 |     connectionStatus,
320 |     serverCapabilities,
321 |     mcpClient,
322 |     requestHistory,
323 |     makeRequest,
324 |     sendNotification,
325 |     handleCompletion,
326 |     completionsSupported,
327 |     connect,
328 |   };
329 | }
330 | 


--------------------------------------------------------------------------------
/client/src/lib/hooks/useDraggablePane.ts:
--------------------------------------------------------------------------------
 1 | import { useCallback, useEffect, useRef, useState } from "react";
 2 | 
 3 | export function useDraggablePane(initialHeight: number) {
 4 |   const [height, setHeight] = useState(initialHeight);
 5 |   const [isDragging, setIsDragging] = useState(false);
 6 |   const dragStartY = useRef<number>(0);
 7 |   const dragStartHeight = useRef<number>(0);
 8 | 
 9 |   const handleDragStart = useCallback(
10 |     (e: React.MouseEvent) => {
11 |       setIsDragging(true);
12 |       dragStartY.current = e.clientY;
13 |       dragStartHeight.current = height;
14 |       document.body.style.userSelect = "none";
15 |     },
16 |     [height],
17 |   );
18 | 
19 |   const handleDragMove = useCallback(
20 |     (e: MouseEvent) => {
21 |       if (!isDragging) return;
22 |       const deltaY = dragStartY.current - e.clientY;
23 |       const newHeight = Math.max(
24 |         100,
25 |         Math.min(800, dragStartHeight.current + deltaY),
26 |       );
27 |       setHeight(newHeight);
28 |     },
29 |     [isDragging],
30 |   );
31 | 
32 |   const handleDragEnd = useCallback(() => {
33 |     setIsDragging(false);
34 |     document.body.style.userSelect = "";
35 |   }, []);
36 | 
37 |   useEffect(() => {
38 |     if (isDragging) {
39 |       window.addEventListener("mousemove", handleDragMove);
40 |       window.addEventListener("mouseup", handleDragEnd);
41 |       return () => {
42 |         window.removeEventListener("mousemove", handleDragMove);
43 |         window.removeEventListener("mouseup", handleDragEnd);
44 |       };
45 |     }
46 |   }, [isDragging, handleDragMove, handleDragEnd]);
47 | 
48 |   return {
49 |     height,
50 |     isDragging,
51 |     handleDragStart,
52 |   };
53 | }
54 | 


--------------------------------------------------------------------------------
/client/src/lib/notificationTypes.ts:
--------------------------------------------------------------------------------
 1 | import {
 2 |   NotificationSchema as BaseNotificationSchema,
 3 |   ClientNotificationSchema,
 4 |   ServerNotificationSchema,
 5 | } from "@modelcontextprotocol/sdk/types.js";
 6 | import { z } from "zod";
 7 | 
 8 | export const StdErrNotificationSchema = BaseNotificationSchema.extend({
 9 |   method: z.literal("notifications/stderr"),
10 |   params: z.object({
11 |     content: z.string(),
12 |   }),
13 | });
14 | 
15 | export const NotificationSchema = ClientNotificationSchema.or(
16 |   StdErrNotificationSchema,
17 | ).or(ServerNotificationSchema);
18 | 
19 | export type StdErrNotification = z.infer<typeof StdErrNotificationSchema>;
20 | export type Notification = z.infer<typeof NotificationSchema>;
21 | 


--------------------------------------------------------------------------------
/client/src/lib/useTheme.ts:
--------------------------------------------------------------------------------
 1 | import { useCallback, useEffect, useState } from "react";
 2 | 
 3 | type Theme = "light" | "dark" | "system";
 4 | 
 5 | const useTheme = (): [Theme, (mode: Theme) => void] => {
 6 |   const [theme, setTheme] = useState<Theme>(() => {
 7 |     const savedTheme = localStorage.getItem("theme") as Theme;
 8 |     return savedTheme || "system";
 9 |   });
10 | 
11 |   useEffect(() => {
12 |     const darkModeMediaQuery = window.matchMedia(
13 |       "(prefers-color-scheme: dark)",
14 |     );
15 |     const handleDarkModeChange = (e: MediaQueryListEvent) => {
16 |       if (theme === "system") {
17 |         updateDocumentTheme(e.matches ? "dark" : "light");
18 |       }
19 |     };
20 | 
21 |     const updateDocumentTheme = (newTheme: "light" | "dark") => {
22 |       document.documentElement.classList.toggle("dark", newTheme === "dark");
23 |     };
24 | 
25 |     // Set initial theme based on current mode
26 |     if (theme === "system") {
27 |       updateDocumentTheme(darkModeMediaQuery.matches ? "dark" : "light");
28 |     } else {
29 |       updateDocumentTheme(theme);
30 |     }
31 | 
32 |     darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
33 | 
34 |     return () => {
35 |       darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
36 |     };
37 |   }, [theme]);
38 | 
39 |   return [
40 |     theme,
41 |     useCallback((newTheme: Theme) => {
42 |       setTheme(newTheme);
43 |       localStorage.setItem("theme", newTheme);
44 |       if (newTheme !== "system") {
45 |         document.documentElement.classList.toggle("dark", newTheme === "dark");
46 |       }
47 |     }, []),
48 |   ];
49 | };
50 | 
51 | export default useTheme;
52 | 


--------------------------------------------------------------------------------
/client/src/lib/utils.ts:
--------------------------------------------------------------------------------
1 | import { clsx, type ClassValue } from "clsx";
2 | import { twMerge } from "tailwind-merge";
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs));
6 | }
7 | 


--------------------------------------------------------------------------------
/client/src/main.tsx:
--------------------------------------------------------------------------------
 1 | import { StrictMode } from "react";
 2 | import { createRoot } from "react-dom/client";
 3 | import { ToastContainer } from "react-toastify";
 4 | import "react-toastify/dist/ReactToastify.css";
 5 | import App from "./App.tsx";
 6 | import "./index.css";
 7 | 
 8 | createRoot(document.getElementById("root")!).render(
 9 |   <StrictMode>
10 |     <App />
11 |     <ToastContainer />
12 |   </StrictMode>,
13 | );
14 | 


--------------------------------------------------------------------------------
/client/src/vite-env.d.ts:
--------------------------------------------------------------------------------
1 | /// <reference types="vite/client" />
2 | 


--------------------------------------------------------------------------------
/client/tailwind.config.js:
--------------------------------------------------------------------------------
 1 | /** @type {import('tailwindcss').Config} */
 2 | import animate from "tailwindcss-animate";
 3 | export default {
 4 |   darkMode: ["class"],
 5 |   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 6 |   theme: {
 7 |     extend: {
 8 |       borderRadius: {
 9 |         lg: "var(--radius)",
10 |         md: "calc(var(--radius) - 2px)",
11 |         sm: "calc(var(--radius) - 4px)",
12 |       },
13 |       colors: {
14 |         background: "hsl(var(--background))",
15 |         foreground: "hsl(var(--foreground))",
16 |         card: {
17 |           DEFAULT: "hsl(var(--card))",
18 |           foreground: "hsl(var(--card-foreground))",
19 |         },
20 |         popover: {
21 |           DEFAULT: "hsl(var(--popover))",
22 |           foreground: "hsl(var(--popover-foreground))",
23 |         },
24 |         primary: {
25 |           DEFAULT: "hsl(var(--primary))",
26 |           foreground: "hsl(var(--primary-foreground))",
27 |         },
28 |         secondary: {
29 |           DEFAULT: "hsl(var(--secondary))",
30 |           foreground: "hsl(var(--secondary-foreground))",
31 |         },
32 |         muted: {
33 |           DEFAULT: "hsl(var(--muted))",
34 |           foreground: "hsl(var(--muted-foreground))",
35 |         },
36 |         accent: {
37 |           DEFAULT: "hsl(var(--accent))",
38 |           foreground: "hsl(var(--accent-foreground))",
39 |         },
40 |         destructive: {
41 |           DEFAULT: "hsl(var(--destructive))",
42 |           foreground: "hsl(var(--destructive-foreground))",
43 |         },
44 |         border: "hsl(var(--border))",
45 |         input: "hsl(var(--input))",
46 |         ring: "hsl(var(--ring))",
47 |         chart: {
48 |           1: "hsl(var(--chart-1))",
49 |           2: "hsl(var(--chart-2))",
50 |           3: "hsl(var(--chart-3))",
51 |           4: "hsl(var(--chart-4))",
52 |           5: "hsl(var(--chart-5))",
53 |         },
54 |       },
55 |     },
56 |   },
57 |   plugins: [animate],
58 | };
59 | 


--------------------------------------------------------------------------------
/client/tsconfig.app.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "baseUrl": ".",
 4 |     "paths": {
 5 |       "@/*": ["./src/*"]
 6 |     },
 7 | 
 8 |     "target": "ES2020",
 9 |     "useDefineForClassFields": true,
10 |     "lib": ["ES2020", "DOM", "DOM.Iterable"],
11 |     "module": "ESNext",
12 |     "skipLibCheck": true,
13 | 
14 |     /* Bundler mode */
15 |     "moduleResolution": "bundler",
16 |     "allowImportingTsExtensions": true,
17 |     "isolatedModules": true,
18 |     "moduleDetection": "force",
19 |     "noEmit": true,
20 |     "jsx": "react-jsx",
21 | 
22 |     /* Linting */
23 |     "strict": true,
24 |     "noUnusedLocals": true,
25 |     "noUnusedParameters": true,
26 |     "noFallthroughCasesInSwitch": true,
27 |     "resolveJsonModule": true
28 |   },
29 |   "include": ["src"]
30 | }
31 | 


--------------------------------------------------------------------------------
/client/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "files": [],
 3 |   "references": [
 4 |     { "path": "./tsconfig.app.json" },
 5 |     { "path": "./tsconfig.node.json" }
 6 |   ],
 7 |   "compilerOptions": {
 8 |     "baseUrl": ".",
 9 |     "paths": {
10 |       "@/*": ["./src/*"]
11 |     }
12 |   }
13 | }
14 | 


--------------------------------------------------------------------------------
/client/tsconfig.node.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2022",
 4 |     "lib": ["ES2023"],
 5 |     "module": "ESNext",
 6 |     "skipLibCheck": true,
 7 | 
 8 |     /* Bundler mode */
 9 |     "moduleResolution": "bundler",
10 |     "allowImportingTsExtensions": true,
11 |     "isolatedModules": true,
12 |     "moduleDetection": "force",
13 |     "noEmit": true,
14 | 
15 |     /* Linting */
16 |     "strict": true,
17 |     "noUnusedLocals": true,
18 |     "noUnusedParameters": true,
19 |     "noFallthroughCasesInSwitch": true
20 |   },
21 |   "include": ["vite.config.ts"]
22 | }
23 | 


--------------------------------------------------------------------------------
/client/vite.config.ts:
--------------------------------------------------------------------------------
 1 | import react from "@vitejs/plugin-react";
 2 | import path from "path";
 3 | import { defineConfig } from "vite";
 4 | 
 5 | // https://vitejs.dev/config/
 6 | export default defineConfig({
 7 |   plugins: [react()],
 8 |   server: {},
 9 |   resolve: {
10 |     alias: {
11 |       "@": path.resolve(__dirname, "./src"),
12 |     },
13 |   },
14 |   build: {
15 |     minify: false,
16 |     rollupOptions: {
17 |       output: {
18 |         manualChunks: undefined,
19 |       },
20 |     },
21 |   },
22 | });
23 | 


--------------------------------------------------------------------------------
/mcp-inspector.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/inspector/main/mcp-inspector.png


--------------------------------------------------------------------------------
/package-lock.json:
--------------------------------------------------------------------------------
   1 | {
   2 |   "name": "@modelcontextprotocol/inspector",
   3 |   "version": "0.5.1",
   4 |   "lockfileVersion": 3,
   5 |   "requires": true,
   6 |   "packages": {
   7 |     "": {
   8 |       "name": "@modelcontextprotocol/inspector",
   9 |       "version": "0.5.1",
  10 |       "license": "MIT",
  11 |       "workspaces": [
  12 |         "client",
  13 |         "server"
  14 |       ],
  15 |       "dependencies": {
  16 |         "@modelcontextprotocol/inspector-client": "^0.5.1",
  17 |         "@modelcontextprotocol/inspector-server": "^0.5.1",
  18 |         "concurrently": "^9.0.1",
  19 |         "shell-quote": "^1.8.2",
  20 |         "spawn-rx": "^5.1.2",
  21 |         "ts-node": "^10.9.2"
  22 |       },
  23 |       "bin": {
  24 |         "mcp-inspector": "bin/cli.js"
  25 |       },
  26 |       "devDependencies": {
  27 |         "@types/node": "^22.7.5",
  28 |         "@types/shell-quote": "^1.7.5",
  29 |         "prettier": "3.3.3"
  30 |       }
  31 |     },
  32 |     "client": {
  33 |       "name": "@modelcontextprotocol/inspector-client",
  34 |       "version": "0.5.1",
  35 |       "license": "MIT",
  36 |       "dependencies": {
  37 |         "@modelcontextprotocol/sdk": "^1.6.1",
  38 |         "@radix-ui/react-checkbox": "^1.1.4",
  39 |         "@radix-ui/react-dialog": "^1.1.3",
  40 |         "@radix-ui/react-icons": "^1.3.0",
  41 |         "@radix-ui/react-label": "^2.1.0",
  42 |         "@radix-ui/react-popover": "^1.1.3",
  43 |         "@radix-ui/react-select": "^2.1.2",
  44 |         "@radix-ui/react-slot": "^1.1.0",
  45 |         "@radix-ui/react-tabs": "^1.1.1",
  46 |         "@types/prismjs": "^1.26.5",
  47 |         "class-variance-authority": "^0.7.0",
  48 |         "clsx": "^2.1.1",
  49 |         "cmdk": "^1.0.4",
  50 |         "lucide-react": "^0.447.0",
  51 |         "pkce-challenge": "^4.1.0",
  52 |         "prismjs": "^1.29.0",
  53 |         "react": "^18.3.1",
  54 |         "react-dom": "^18.3.1",
  55 |         "react-simple-code-editor": "^0.14.1",
  56 |         "react-toastify": "^10.0.6",
  57 |         "serve-handler": "^6.1.6",
  58 |         "tailwind-merge": "^2.5.3",
  59 |         "tailwindcss-animate": "^1.0.7",
  60 |         "zod": "^3.23.8"
  61 |       },
  62 |       "bin": {
  63 |         "mcp-inspector-client": "bin/cli.js"
  64 |       },
  65 |       "devDependencies": {
  66 |         "@eslint/js": "^9.11.1",
  67 |         "@types/node": "^22.7.5",
  68 |         "@types/react": "^18.3.10",
  69 |         "@types/react-dom": "^18.3.0",
  70 |         "@types/serve-handler": "^6.1.4",
  71 |         "@vitejs/plugin-react": "^4.3.2",
  72 |         "autoprefixer": "^10.4.20",
  73 |         "eslint": "^9.11.1",
  74 |         "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  75 |         "eslint-plugin-react-refresh": "^0.4.12",
  76 |         "globals": "^15.9.0",
  77 |         "postcss": "^8.4.47",
  78 |         "tailwindcss": "^3.4.13",
  79 |         "typescript": "^5.5.3",
  80 |         "typescript-eslint": "^8.7.0",
  81 |         "vite": "^5.4.8"
  82 |       }
  83 |     },
  84 |     "node_modules/@alloc/quick-lru": {
  85 |       "version": "5.2.0",
  86 |       "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
  87 |       "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
  88 |       "license": "MIT",
  89 |       "engines": {
  90 |         "node": ">=10"
  91 |       },
  92 |       "funding": {
  93 |         "url": "https://github.com/sponsors/sindresorhus"
  94 |       }
  95 |     },
  96 |     "node_modules/@ampproject/remapping": {
  97 |       "version": "2.3.0",
  98 |       "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
  99 |       "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
 100 |       "dev": true,
 101 |       "license": "Apache-2.0",
 102 |       "dependencies": {
 103 |         "@jridgewell/gen-mapping": "^0.3.5",
 104 |         "@jridgewell/trace-mapping": "^0.3.24"
 105 |       },
 106 |       "engines": {
 107 |         "node": ">=6.0.0"
 108 |       }
 109 |     },
 110 |     "node_modules/@babel/code-frame": {
 111 |       "version": "7.26.2",
 112 |       "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",
 113 |       "integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",
 114 |       "dev": true,
 115 |       "license": "MIT",
 116 |       "dependencies": {
 117 |         "@babel/helper-validator-identifier": "^7.25.9",
 118 |         "js-tokens": "^4.0.0",
 119 |         "picocolors": "^1.0.0"
 120 |       },
 121 |       "engines": {
 122 |         "node": ">=6.9.0"
 123 |       }
 124 |     },
 125 |     "node_modules/@babel/compat-data": {
 126 |       "version": "7.26.2",
 127 |       "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.2.tgz",
 128 |       "integrity": "sha512-Z0WgzSEa+aUcdiJuCIqgujCshpMWgUpgOxXotrYPSA53hA3qopNaqcJpyr0hVb1FeWdnqFA35/fUtXgBK8srQg==",
 129 |       "dev": true,
 130 |       "license": "MIT",
 131 |       "engines": {
 132 |         "node": ">=6.9.0"
 133 |       }
 134 |     },
 135 |     "node_modules/@babel/core": {
 136 |       "version": "7.26.0",
 137 |       "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.0.tgz",
 138 |       "integrity": "sha512-i1SLeK+DzNnQ3LL/CswPCa/E5u4lh1k6IAEphON8F+cXt0t9euTshDru0q7/IqMa1PMPz5RnHuHscF8/ZJsStg==",
 139 |       "dev": true,
 140 |       "license": "MIT",
 141 |       "dependencies": {
 142 |         "@ampproject/remapping": "^2.2.0",
 143 |         "@babel/code-frame": "^7.26.0",
 144 |         "@babel/generator": "^7.26.0",
 145 |         "@babel/helper-compilation-targets": "^7.25.9",
 146 |         "@babel/helper-module-transforms": "^7.26.0",
 147 |         "@babel/helpers": "^7.26.0",
 148 |         "@babel/parser": "^7.26.0",
 149 |         "@babel/template": "^7.25.9",
 150 |         "@babel/traverse": "^7.25.9",
 151 |         "@babel/types": "^7.26.0",
 152 |         "convert-source-map": "^2.0.0",
 153 |         "debug": "^4.1.0",
 154 |         "gensync": "^1.0.0-beta.2",
 155 |         "json5": "^2.2.3",
 156 |         "semver": "^6.3.1"
 157 |       },
 158 |       "engines": {
 159 |         "node": ">=6.9.0"
 160 |       },
 161 |       "funding": {
 162 |         "type": "opencollective",
 163 |         "url": "https://opencollective.com/babel"
 164 |       }
 165 |     },
 166 |     "node_modules/@babel/generator": {
 167 |       "version": "7.26.2",
 168 |       "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.2.tgz",
 169 |       "integrity": "sha512-zevQbhbau95nkoxSq3f/DC/SC+EEOUZd3DYqfSkMhY2/wfSeaHV1Ew4vk8e+x8lja31IbyuUa2uQ3JONqKbysw==",
 170 |       "dev": true,
 171 |       "license": "MIT",
 172 |       "dependencies": {
 173 |         "@babel/parser": "^7.26.2",
 174 |         "@babel/types": "^7.26.0",
 175 |         "@jridgewell/gen-mapping": "^0.3.5",
 176 |         "@jridgewell/trace-mapping": "^0.3.25",
 177 |         "jsesc": "^3.0.2"
 178 |       },
 179 |       "engines": {
 180 |         "node": ">=6.9.0"
 181 |       }
 182 |     },
 183 |     "node_modules/@babel/helper-compilation-targets": {
 184 |       "version": "7.25.9",
 185 |       "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.25.9.tgz",
 186 |       "integrity": "sha512-j9Db8Suy6yV/VHa4qzrj9yZfZxhLWQdVnRlXxmKLYlhWUVB1sB2G5sxuWYXk/whHD9iW76PmNzxZ4UCnTQTVEQ==",
 187 |       "dev": true,
 188 |       "license": "MIT",
 189 |       "dependencies": {
 190 |         "@babel/compat-data": "^7.25.9",
 191 |         "@babel/helper-validator-option": "^7.25.9",
 192 |         "browserslist": "^4.24.0",
 193 |         "lru-cache": "^5.1.1",
 194 |         "semver": "^6.3.1"
 195 |       },
 196 |       "engines": {
 197 |         "node": ">=6.9.0"
 198 |       }
 199 |     },
 200 |     "node_modules/@babel/helper-module-imports": {
 201 |       "version": "7.25.9",
 202 |       "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz",
 203 |       "integrity": "sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==",
 204 |       "dev": true,
 205 |       "license": "MIT",
 206 |       "dependencies": {
 207 |         "@babel/traverse": "^7.25.9",
 208 |         "@babel/types": "^7.25.9"
 209 |       },
 210 |       "engines": {
 211 |         "node": ">=6.9.0"
 212 |       }
 213 |     },
 214 |     "node_modules/@babel/helper-module-transforms": {
 215 |       "version": "7.26.0",
 216 |       "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz",
 217 |       "integrity": "sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==",
 218 |       "dev": true,
 219 |       "license": "MIT",
 220 |       "dependencies": {
 221 |         "@babel/helper-module-imports": "^7.25.9",
 222 |         "@babel/helper-validator-identifier": "^7.25.9",
 223 |         "@babel/traverse": "^7.25.9"
 224 |       },
 225 |       "engines": {
 226 |         "node": ">=6.9.0"
 227 |       },
 228 |       "peerDependencies": {
 229 |         "@babel/core": "^7.0.0"
 230 |       }
 231 |     },
 232 |     "node_modules/@babel/helper-plugin-utils": {
 233 |       "version": "7.25.9",
 234 |       "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.25.9.tgz",
 235 |       "integrity": "sha512-kSMlyUVdWe25rEsRGviIgOWnoT/nfABVWlqt9N19/dIPWViAOW2s9wznP5tURbs/IDuNk4gPy3YdYRgH3uxhBw==",
 236 |       "dev": true,
 237 |       "license": "MIT",
 238 |       "engines": {
 239 |         "node": ">=6.9.0"
 240 |       }
 241 |     },
 242 |     "node_modules/@babel/helper-string-parser": {
 243 |       "version": "7.25.9",
 244 |       "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",
 245 |       "integrity": "sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==",
 246 |       "dev": true,
 247 |       "license": "MIT",
 248 |       "engines": {
 249 |         "node": ">=6.9.0"
 250 |       }
 251 |     },
 252 |     "node_modules/@babel/helper-validator-identifier": {
 253 |       "version": "7.25.9",
 254 |       "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz",
 255 |       "integrity": "sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==",
 256 |       "dev": true,
 257 |       "license": "MIT",
 258 |       "engines": {
 259 |         "node": ">=6.9.0"
 260 |       }
 261 |     },
 262 |     "node_modules/@babel/helper-validator-option": {
 263 |       "version": "7.25.9",
 264 |       "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz",
 265 |       "integrity": "sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==",
 266 |       "dev": true,
 267 |       "license": "MIT",
 268 |       "engines": {
 269 |         "node": ">=6.9.0"
 270 |       }
 271 |     },
 272 |     "node_modules/@babel/helpers": {
 273 |       "version": "7.26.0",
 274 |       "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.0.tgz",
 275 |       "integrity": "sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==",
 276 |       "dev": true,
 277 |       "license": "MIT",
 278 |       "dependencies": {
 279 |         "@babel/template": "^7.25.9",
 280 |         "@babel/types": "^7.26.0"
 281 |       },
 282 |       "engines": {
 283 |         "node": ">=6.9.0"
 284 |       }
 285 |     },
 286 |     "node_modules/@babel/parser": {
 287 |       "version": "7.26.2",
 288 |       "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.2.tgz",
 289 |       "integrity": "sha512-DWMCZH9WA4Maitz2q21SRKHo9QXZxkDsbNZoVD62gusNtNBBqDg9i7uOhASfTfIGNzW+O+r7+jAlM8dwphcJKQ==",
 290 |       "dev": true,
 291 |       "license": "MIT",
 292 |       "dependencies": {
 293 |         "@babel/types": "^7.26.0"
 294 |       },
 295 |       "bin": {
 296 |         "parser": "bin/babel-parser.js"
 297 |       },
 298 |       "engines": {
 299 |         "node": ">=6.0.0"
 300 |       }
 301 |     },
 302 |     "node_modules/@babel/plugin-transform-react-jsx-self": {
 303 |       "version": "7.25.9",
 304 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.25.9.tgz",
 305 |       "integrity": "sha512-y8quW6p0WHkEhmErnfe58r7x0A70uKphQm8Sp8cV7tjNQwK56sNVK0M73LK3WuYmsuyrftut4xAkjjgU0twaMg==",
 306 |       "dev": true,
 307 |       "license": "MIT",
 308 |       "dependencies": {
 309 |         "@babel/helper-plugin-utils": "^7.25.9"
 310 |       },
 311 |       "engines": {
 312 |         "node": ">=6.9.0"
 313 |       },
 314 |       "peerDependencies": {
 315 |         "@babel/core": "^7.0.0-0"
 316 |       }
 317 |     },
 318 |     "node_modules/@babel/plugin-transform-react-jsx-source": {
 319 |       "version": "7.25.9",
 320 |       "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.25.9.tgz",
 321 |       "integrity": "sha512-+iqjT8xmXhhYv4/uiYd8FNQsraMFZIfxVSqxxVSZP0WbbSAWvBXAul0m/zu+7Vv4O/3WtApy9pmaTMiumEZgfg==",
 322 |       "dev": true,
 323 |       "license": "MIT",
 324 |       "dependencies": {
 325 |         "@babel/helper-plugin-utils": "^7.25.9"
 326 |       },
 327 |       "engines": {
 328 |         "node": ">=6.9.0"
 329 |       },
 330 |       "peerDependencies": {
 331 |         "@babel/core": "^7.0.0-0"
 332 |       }
 333 |     },
 334 |     "node_modules/@babel/template": {
 335 |       "version": "7.25.9",
 336 |       "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.9.tgz",
 337 |       "integrity": "sha512-9DGttpmPvIxBb/2uwpVo3dqJ+O6RooAFOS+lB+xDqoE2PVCE8nfoHMdZLpfCQRLwvohzXISPZcgxt80xLfsuwg==",
 338 |       "dev": true,
 339 |       "license": "MIT",
 340 |       "dependencies": {
 341 |         "@babel/code-frame": "^7.25.9",
 342 |         "@babel/parser": "^7.25.9",
 343 |         "@babel/types": "^7.25.9"
 344 |       },
 345 |       "engines": {
 346 |         "node": ">=6.9.0"
 347 |       }
 348 |     },
 349 |     "node_modules/@babel/traverse": {
 350 |       "version": "7.25.9",
 351 |       "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.25.9.tgz",
 352 |       "integrity": "sha512-ZCuvfwOwlz/bawvAuvcj8rrithP2/N55Tzz342AkTvq4qaWbGfmCk/tKhNaV2cthijKrPAA8SRJV5WWe7IBMJw==",
 353 |       "dev": true,
 354 |       "license": "MIT",
 355 |       "dependencies": {
 356 |         "@babel/code-frame": "^7.25.9",
 357 |         "@babel/generator": "^7.25.9",
 358 |         "@babel/parser": "^7.25.9",
 359 |         "@babel/template": "^7.25.9",
 360 |         "@babel/types": "^7.25.9",
 361 |         "debug": "^4.3.1",
 362 |         "globals": "^11.1.0"
 363 |       },
 364 |       "engines": {
 365 |         "node": ">=6.9.0"
 366 |       }
 367 |     },
 368 |     "node_modules/@babel/traverse/node_modules/globals": {
 369 |       "version": "11.12.0",
 370 |       "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
 371 |       "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
 372 |       "dev": true,
 373 |       "license": "MIT",
 374 |       "engines": {
 375 |         "node": ">=4"
 376 |       }
 377 |     },
 378 |     "node_modules/@babel/types": {
 379 |       "version": "7.26.0",
 380 |       "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.0.tgz",
 381 |       "integrity": "sha512-Z/yiTPj+lDVnF7lWeKCIJzaIkI0vYO87dMpZ4bg4TDrFe4XXLFWL1TbXU27gBP3QccxV9mZICCrnjnYlJjXHOA==",
 382 |       "dev": true,
 383 |       "license": "MIT",
 384 |       "dependencies": {
 385 |         "@babel/helper-string-parser": "^7.25.9",
 386 |         "@babel/helper-validator-identifier": "^7.25.9"
 387 |       },
 388 |       "engines": {
 389 |         "node": ">=6.9.0"
 390 |       }
 391 |     },
 392 |     "node_modules/@cspotcode/source-map-support": {
 393 |       "version": "0.8.1",
 394 |       "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
 395 |       "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
 396 |       "license": "MIT",
 397 |       "dependencies": {
 398 |         "@jridgewell/trace-mapping": "0.3.9"
 399 |       },
 400 |       "engines": {
 401 |         "node": ">=12"
 402 |       }
 403 |     },
 404 |     "node_modules/@cspotcode/source-map-support/node_modules/@jridgewell/trace-mapping": {
 405 |       "version": "0.3.9",
 406 |       "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
 407 |       "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
 408 |       "license": "MIT",
 409 |       "dependencies": {
 410 |         "@jridgewell/resolve-uri": "^3.0.3",
 411 |         "@jridgewell/sourcemap-codec": "^1.4.10"
 412 |       }
 413 |     },
 414 |     "node_modules/@esbuild/aix-ppc64": {
 415 |       "version": "0.23.1",
 416 |       "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.23.1.tgz",
 417 |       "integrity": "sha512-6VhYk1diRqrhBAqpJEdjASR/+WVRtfjpqKuNw11cLiaWpAT/Uu+nokB+UJnevzy/P9C/ty6AOe0dwueMrGh/iQ==",
 418 |       "cpu": [
 419 |         "ppc64"
 420 |       ],
 421 |       "dev": true,
 422 |       "license": "MIT",
 423 |       "optional": true,
 424 |       "os": [
 425 |         "aix"
 426 |       ],
 427 |       "engines": {
 428 |         "node": ">=18"
 429 |       }
 430 |     },
 431 |     "node_modules/@esbuild/android-arm": {
 432 |       "version": "0.23.1",
 433 |       "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.23.1.tgz",
 434 |       "integrity": "sha512-uz6/tEy2IFm9RYOyvKl88zdzZfwEfKZmnX9Cj1BHjeSGNuGLuMD1kR8y5bteYmwqKm1tj8m4cb/aKEorr6fHWQ==",
 435 |       "cpu": [
 436 |         "arm"
 437 |       ],
 438 |       "dev": true,
 439 |       "license": "MIT",
 440 |       "optional": true,
 441 |       "os": [
 442 |         "android"
 443 |       ],
 444 |       "engines": {
 445 |         "node": ">=18"
 446 |       }
 447 |     },
 448 |     "node_modules/@esbuild/android-arm64": {
 449 |       "version": "0.23.1",
 450 |       "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.23.1.tgz",
 451 |       "integrity": "sha512-xw50ipykXcLstLeWH7WRdQuysJqejuAGPd30vd1i5zSyKK3WE+ijzHmLKxdiCMtH1pHz78rOg0BKSYOSB/2Khw==",
 452 |       "cpu": [
 453 |         "arm64"
 454 |       ],
 455 |       "dev": true,
 456 |       "license": "MIT",
 457 |       "optional": true,
 458 |       "os": [
 459 |         "android"
 460 |       ],
 461 |       "engines": {
 462 |         "node": ">=18"
 463 |       }
 464 |     },
 465 |     "node_modules/@esbuild/android-x64": {
 466 |       "version": "0.23.1",
 467 |       "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.23.1.tgz",
 468 |       "integrity": "sha512-nlN9B69St9BwUoB+jkyU090bru8L0NA3yFvAd7k8dNsVH8bi9a8cUAUSEcEEgTp2z3dbEDGJGfP6VUnkQnlReg==",
 469 |       "cpu": [
 470 |         "x64"
 471 |       ],
 472 |       "dev": true,
 473 |       "license": "MIT",
 474 |       "optional": true,
 475 |       "os": [
 476 |         "android"
 477 |       ],
 478 |       "engines": {
 479 |         "node": ">=18"
 480 |       }
 481 |     },
 482 |     "node_modules/@esbuild/darwin-arm64": {
 483 |       "version": "0.23.1",
 484 |       "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.23.1.tgz",
 485 |       "integrity": "sha512-YsS2e3Wtgnw7Wq53XXBLcV6JhRsEq8hkfg91ESVadIrzr9wO6jJDMZnCQbHm1Guc5t/CdDiFSSfWP58FNuvT3Q==",
 486 |       "cpu": [
 487 |         "arm64"
 488 |       ],
 489 |       "dev": true,
 490 |       "license": "MIT",
 491 |       "optional": true,
 492 |       "os": [
 493 |         "darwin"
 494 |       ],
 495 |       "engines": {
 496 |         "node": ">=18"
 497 |       }
 498 |     },
 499 |     "node_modules/@esbuild/darwin-x64": {
 500 |       "version": "0.23.1",
 501 |       "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.23.1.tgz",
 502 |       "integrity": "sha512-aClqdgTDVPSEGgoCS8QDG37Gu8yc9lTHNAQlsztQ6ENetKEO//b8y31MMu2ZaPbn4kVsIABzVLXYLhCGekGDqw==",
 503 |       "cpu": [
 504 |         "x64"
 505 |       ],
 506 |       "dev": true,
 507 |       "license": "MIT",
 508 |       "optional": true,
 509 |       "os": [
 510 |         "darwin"
 511 |       ],
 512 |       "engines": {
 513 |         "node": ">=18"
 514 |       }
 515 |     },
 516 |     "node_modules/@esbuild/freebsd-arm64": {
 517 |       "version": "0.23.1",
 518 |       "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.23.1.tgz",
 519 |       "integrity": "sha512-h1k6yS8/pN/NHlMl5+v4XPfikhJulk4G+tKGFIOwURBSFzE8bixw1ebjluLOjfwtLqY0kewfjLSrO6tN2MgIhA==",
 520 |       "cpu": [
 521 |         "arm64"
 522 |       ],
 523 |       "dev": true,
 524 |       "license": "MIT",
 525 |       "optional": true,
 526 |       "os": [
 527 |         "freebsd"
 528 |       ],
 529 |       "engines": {
 530 |         "node": ">=18"
 531 |       }
 532 |     },
 533 |     "node_modules/@esbuild/freebsd-x64": {
 534 |       "version": "0.23.1",
 535 |       "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.23.1.tgz",
 536 |       "integrity": "sha512-lK1eJeyk1ZX8UklqFd/3A60UuZ/6UVfGT2LuGo3Wp4/z7eRTRYY+0xOu2kpClP+vMTi9wKOfXi2vjUpO1Ro76g==",
 537 |       "cpu": [
 538 |         "x64"
 539 |       ],
 540 |       "dev": true,
 541 |       "license": "MIT",
 542 |       "optional": true,
 543 |       "os": [
 544 |         "freebsd"
 545 |       ],
 546 |       "engines": {
 547 |         "node": ">=18"
 548 |       }
 549 |     },
 550 |     "node_modules/@esbuild/linux-arm": {
 551 |       "version": "0.23.1",
 552 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.23.1.tgz",
 553 |       "integrity": "sha512-CXXkzgn+dXAPs3WBwE+Kvnrf4WECwBdfjfeYHpMeVxWE0EceB6vhWGShs6wi0IYEqMSIzdOF1XjQ/Mkm5d7ZdQ==",
 554 |       "cpu": [
 555 |         "arm"
 556 |       ],
 557 |       "dev": true,
 558 |       "license": "MIT",
 559 |       "optional": true,
 560 |       "os": [
 561 |         "linux"
 562 |       ],
 563 |       "engines": {
 564 |         "node": ">=18"
 565 |       }
 566 |     },
 567 |     "node_modules/@esbuild/linux-arm64": {
 568 |       "version": "0.23.1",
 569 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.23.1.tgz",
 570 |       "integrity": "sha512-/93bf2yxencYDnItMYV/v116zff6UyTjo4EtEQjUBeGiVpMmffDNUyD9UN2zV+V3LRV3/on4xdZ26NKzn6754g==",
 571 |       "cpu": [
 572 |         "arm64"
 573 |       ],
 574 |       "dev": true,
 575 |       "license": "MIT",
 576 |       "optional": true,
 577 |       "os": [
 578 |         "linux"
 579 |       ],
 580 |       "engines": {
 581 |         "node": ">=18"
 582 |       }
 583 |     },
 584 |     "node_modules/@esbuild/linux-ia32": {
 585 |       "version": "0.23.1",
 586 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.23.1.tgz",
 587 |       "integrity": "sha512-VTN4EuOHwXEkXzX5nTvVY4s7E/Krz7COC8xkftbbKRYAl96vPiUssGkeMELQMOnLOJ8k3BY1+ZY52tttZnHcXQ==",
 588 |       "cpu": [
 589 |         "ia32"
 590 |       ],
 591 |       "dev": true,
 592 |       "license": "MIT",
 593 |       "optional": true,
 594 |       "os": [
 595 |         "linux"
 596 |       ],
 597 |       "engines": {
 598 |         "node": ">=18"
 599 |       }
 600 |     },
 601 |     "node_modules/@esbuild/linux-loong64": {
 602 |       "version": "0.23.1",
 603 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.23.1.tgz",
 604 |       "integrity": "sha512-Vx09LzEoBa5zDnieH8LSMRToj7ir/Jeq0Gu6qJ/1GcBq9GkfoEAoXvLiW1U9J1qE/Y/Oyaq33w5p2ZWrNNHNEw==",
 605 |       "cpu": [
 606 |         "loong64"
 607 |       ],
 608 |       "dev": true,
 609 |       "license": "MIT",
 610 |       "optional": true,
 611 |       "os": [
 612 |         "linux"
 613 |       ],
 614 |       "engines": {
 615 |         "node": ">=18"
 616 |       }
 617 |     },
 618 |     "node_modules/@esbuild/linux-mips64el": {
 619 |       "version": "0.23.1",
 620 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.23.1.tgz",
 621 |       "integrity": "sha512-nrFzzMQ7W4WRLNUOU5dlWAqa6yVeI0P78WKGUo7lg2HShq/yx+UYkeNSE0SSfSure0SqgnsxPvmAUu/vu0E+3Q==",
 622 |       "cpu": [
 623 |         "mips64el"
 624 |       ],
 625 |       "dev": true,
 626 |       "license": "MIT",
 627 |       "optional": true,
 628 |       "os": [
 629 |         "linux"
 630 |       ],
 631 |       "engines": {
 632 |         "node": ">=18"
 633 |       }
 634 |     },
 635 |     "node_modules/@esbuild/linux-ppc64": {
 636 |       "version": "0.23.1",
 637 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.23.1.tgz",
 638 |       "integrity": "sha512-dKN8fgVqd0vUIjxuJI6P/9SSSe/mB9rvA98CSH2sJnlZ/OCZWO1DJvxj8jvKTfYUdGfcq2dDxoKaC6bHuTlgcw==",
 639 |       "cpu": [
 640 |         "ppc64"
 641 |       ],
 642 |       "dev": true,
 643 |       "license": "MIT",
 644 |       "optional": true,
 645 |       "os": [
 646 |         "linux"
 647 |       ],
 648 |       "engines": {
 649 |         "node": ">=18"
 650 |       }
 651 |     },
 652 |     "node_modules/@esbuild/linux-riscv64": {
 653 |       "version": "0.23.1",
 654 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.23.1.tgz",
 655 |       "integrity": "sha512-5AV4Pzp80fhHL83JM6LoA6pTQVWgB1HovMBsLQ9OZWLDqVY8MVobBXNSmAJi//Csh6tcY7e7Lny2Hg1tElMjIA==",
 656 |       "cpu": [
 657 |         "riscv64"
 658 |       ],
 659 |       "dev": true,
 660 |       "license": "MIT",
 661 |       "optional": true,
 662 |       "os": [
 663 |         "linux"
 664 |       ],
 665 |       "engines": {
 666 |         "node": ">=18"
 667 |       }
 668 |     },
 669 |     "node_modules/@esbuild/linux-s390x": {
 670 |       "version": "0.23.1",
 671 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.23.1.tgz",
 672 |       "integrity": "sha512-9ygs73tuFCe6f6m/Tb+9LtYxWR4c9yg7zjt2cYkjDbDpV/xVn+68cQxMXCjUpYwEkze2RcU/rMnfIXNRFmSoDw==",
 673 |       "cpu": [
 674 |         "s390x"
 675 |       ],
 676 |       "dev": true,
 677 |       "license": "MIT",
 678 |       "optional": true,
 679 |       "os": [
 680 |         "linux"
 681 |       ],
 682 |       "engines": {
 683 |         "node": ">=18"
 684 |       }
 685 |     },
 686 |     "node_modules/@esbuild/linux-x64": {
 687 |       "version": "0.23.1",
 688 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.23.1.tgz",
 689 |       "integrity": "sha512-EV6+ovTsEXCPAp58g2dD68LxoP/wK5pRvgy0J/HxPGB009omFPv3Yet0HiaqvrIrgPTBuC6wCH1LTOY91EO5hQ==",
 690 |       "cpu": [
 691 |         "x64"
 692 |       ],
 693 |       "dev": true,
 694 |       "license": "MIT",
 695 |       "optional": true,
 696 |       "os": [
 697 |         "linux"
 698 |       ],
 699 |       "engines": {
 700 |         "node": ">=18"
 701 |       }
 702 |     },
 703 |     "node_modules/@esbuild/netbsd-x64": {
 704 |       "version": "0.23.1",
 705 |       "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.23.1.tgz",
 706 |       "integrity": "sha512-aevEkCNu7KlPRpYLjwmdcuNz6bDFiE7Z8XC4CPqExjTvrHugh28QzUXVOZtiYghciKUacNktqxdpymplil1beA==",
 707 |       "cpu": [
 708 |         "x64"
 709 |       ],
 710 |       "dev": true,
 711 |       "license": "MIT",
 712 |       "optional": true,
 713 |       "os": [
 714 |         "netbsd"
 715 |       ],
 716 |       "engines": {
 717 |         "node": ">=18"
 718 |       }
 719 |     },
 720 |     "node_modules/@esbuild/openbsd-arm64": {
 721 |       "version": "0.23.1",
 722 |       "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.23.1.tgz",
 723 |       "integrity": "sha512-3x37szhLexNA4bXhLrCC/LImN/YtWis6WXr1VESlfVtVeoFJBRINPJ3f0a/6LV8zpikqoUg4hyXw0sFBt5Cr+Q==",
 724 |       "cpu": [
 725 |         "arm64"
 726 |       ],
 727 |       "dev": true,
 728 |       "license": "MIT",
 729 |       "optional": true,
 730 |       "os": [
 731 |         "openbsd"
 732 |       ],
 733 |       "engines": {
 734 |         "node": ">=18"
 735 |       }
 736 |     },
 737 |     "node_modules/@esbuild/openbsd-x64": {
 738 |       "version": "0.23.1",
 739 |       "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.23.1.tgz",
 740 |       "integrity": "sha512-aY2gMmKmPhxfU+0EdnN+XNtGbjfQgwZj43k8G3fyrDM/UdZww6xrWxmDkuz2eCZchqVeABjV5BpildOrUbBTqA==",
 741 |       "cpu": [
 742 |         "x64"
 743 |       ],
 744 |       "dev": true,
 745 |       "license": "MIT",
 746 |       "optional": true,
 747 |       "os": [
 748 |         "openbsd"
 749 |       ],
 750 |       "engines": {
 751 |         "node": ">=18"
 752 |       }
 753 |     },
 754 |     "node_modules/@esbuild/sunos-x64": {
 755 |       "version": "0.23.1",
 756 |       "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.23.1.tgz",
 757 |       "integrity": "sha512-RBRT2gqEl0IKQABT4XTj78tpk9v7ehp+mazn2HbUeZl1YMdaGAQqhapjGTCe7uw7y0frDi4gS0uHzhvpFuI1sA==",
 758 |       "cpu": [
 759 |         "x64"
 760 |       ],
 761 |       "dev": true,
 762 |       "license": "MIT",
 763 |       "optional": true,
 764 |       "os": [
 765 |         "sunos"
 766 |       ],
 767 |       "engines": {
 768 |         "node": ">=18"
 769 |       }
 770 |     },
 771 |     "node_modules/@esbuild/win32-arm64": {
 772 |       "version": "0.23.1",
 773 |       "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.23.1.tgz",
 774 |       "integrity": "sha512-4O+gPR5rEBe2FpKOVyiJ7wNDPA8nGzDuJ6gN4okSA1gEOYZ67N8JPk58tkWtdtPeLz7lBnY6I5L3jdsr3S+A6A==",
 775 |       "cpu": [
 776 |         "arm64"
 777 |       ],
 778 |       "dev": true,
 779 |       "license": "MIT",
 780 |       "optional": true,
 781 |       "os": [
 782 |         "win32"
 783 |       ],
 784 |       "engines": {
 785 |         "node": ">=18"
 786 |       }
 787 |     },
 788 |     "node_modules/@esbuild/win32-ia32": {
 789 |       "version": "0.23.1",
 790 |       "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.23.1.tgz",
 791 |       "integrity": "sha512-BcaL0Vn6QwCwre3Y717nVHZbAa4UBEigzFm6VdsVdT/MbZ38xoj1X9HPkZhbmaBGUD1W8vxAfffbDe8bA6AKnQ==",
 792 |       "cpu": [
 793 |         "ia32"
 794 |       ],
 795 |       "dev": true,
 796 |       "license": "MIT",
 797 |       "optional": true,
 798 |       "os": [
 799 |         "win32"
 800 |       ],
 801 |       "engines": {
 802 |         "node": ">=18"
 803 |       }
 804 |     },
 805 |     "node_modules/@esbuild/win32-x64": {
 806 |       "version": "0.23.1",
 807 |       "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.23.1.tgz",
 808 |       "integrity": "sha512-BHpFFeslkWrXWyUPnbKm+xYYVYruCinGcftSBaa8zoF9hZO4BcSCFUvHVTtzpIY6YzUnYtuEhZ+C9iEXjxnasg==",
 809 |       "cpu": [
 810 |         "x64"
 811 |       ],
 812 |       "dev": true,
 813 |       "license": "MIT",
 814 |       "optional": true,
 815 |       "os": [
 816 |         "win32"
 817 |       ],
 818 |       "engines": {
 819 |         "node": ">=18"
 820 |       }
 821 |     },
 822 |     "node_modules/@eslint-community/eslint-utils": {
 823 |       "version": "4.4.1",
 824 |       "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.1.tgz",
 825 |       "integrity": "sha512-s3O3waFUrMV8P/XaF/+ZTp1X9XBZW1a4B97ZnjQF2KYWaFD2A8KyFBsrsfSjEmjn3RGWAIuvlneuZm3CUK3jbA==",
 826 |       "dev": true,
 827 |       "license": "MIT",
 828 |       "dependencies": {
 829 |         "eslint-visitor-keys": "^3.4.3"
 830 |       },
 831 |       "engines": {
 832 |         "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
 833 |       },
 834 |       "funding": {
 835 |         "url": "https://opencollective.com/eslint"
 836 |       },
 837 |       "peerDependencies": {
 838 |         "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
 839 |       }
 840 |     },
 841 |     "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
 842 |       "version": "3.4.3",
 843 |       "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
 844 |       "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
 845 |       "dev": true,
 846 |       "license": "Apache-2.0",
 847 |       "engines": {
 848 |         "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
 849 |       },
 850 |       "funding": {
 851 |         "url": "https://opencollective.com/eslint"
 852 |       }
 853 |     },
 854 |     "node_modules/@eslint-community/regexpp": {
 855 |       "version": "4.12.1",
 856 |       "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",
 857 |       "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",
 858 |       "dev": true,
 859 |       "license": "MIT",
 860 |       "engines": {
 861 |         "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
 862 |       }
 863 |     },
 864 |     "node_modules/@eslint/config-array": {
 865 |       "version": "0.19.0",
 866 |       "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.19.0.tgz",
 867 |       "integrity": "sha512-zdHg2FPIFNKPdcHWtiNT+jEFCHYVplAXRDlQDyqy0zGx/q2parwh7brGJSiTxRk/TSMkbM//zt/f5CHgyTyaSQ==",
 868 |       "dev": true,
 869 |       "license": "Apache-2.0",
 870 |       "dependencies": {
 871 |         "@eslint/object-schema": "^2.1.4",
 872 |         "debug": "^4.3.1",
 873 |         "minimatch": "^3.1.2"
 874 |       },
 875 |       "engines": {
 876 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
 877 |       }
 878 |     },
 879 |     "node_modules/@eslint/core": {
 880 |       "version": "0.9.0",
 881 |       "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.9.0.tgz",
 882 |       "integrity": "sha512-7ATR9F0e4W85D/0w7cU0SNj7qkAexMG+bAHEZOjo9akvGuhHE2m7umzWzfnpa0XAg5Kxc1BWmtPMV67jJ+9VUg==",
 883 |       "dev": true,
 884 |       "license": "Apache-2.0",
 885 |       "engines": {
 886 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
 887 |       }
 888 |     },
 889 |     "node_modules/@eslint/eslintrc": {
 890 |       "version": "3.2.0",
 891 |       "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.2.0.tgz",
 892 |       "integrity": "sha512-grOjVNN8P3hjJn/eIETF1wwd12DdnwFDoyceUJLYYdkpbwq3nLi+4fqrTAONx7XDALqlL220wC/RHSC/QTI/0w==",
 893 |       "dev": true,
 894 |       "license": "MIT",
 895 |       "dependencies": {
 896 |         "ajv": "^6.12.4",
 897 |         "debug": "^4.3.2",
 898 |         "espree": "^10.0.1",
 899 |         "globals": "^14.0.0",
 900 |         "ignore": "^5.2.0",
 901 |         "import-fresh": "^3.2.1",
 902 |         "js-yaml": "^4.1.0",
 903 |         "minimatch": "^3.1.2",
 904 |         "strip-json-comments": "^3.1.1"
 905 |       },
 906 |       "engines": {
 907 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
 908 |       },
 909 |       "funding": {
 910 |         "url": "https://opencollective.com/eslint"
 911 |       }
 912 |     },
 913 |     "node_modules/@eslint/eslintrc/node_modules/globals": {
 914 |       "version": "14.0.0",
 915 |       "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
 916 |       "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
 917 |       "dev": true,
 918 |       "license": "MIT",
 919 |       "engines": {
 920 |         "node": ">=18"
 921 |       },
 922 |       "funding": {
 923 |         "url": "https://github.com/sponsors/sindresorhus"
 924 |       }
 925 |     },
 926 |     "node_modules/@eslint/js": {
 927 |       "version": "9.15.0",
 928 |       "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.15.0.tgz",
 929 |       "integrity": "sha512-tMTqrY+EzbXmKJR5ToI8lxu7jaN5EdmrBFJpQk5JmSlyLsx6o4t27r883K5xsLuCYCpfKBCGswMSWXsM+jB7lg==",
 930 |       "dev": true,
 931 |       "license": "MIT",
 932 |       "engines": {
 933 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
 934 |       }
 935 |     },
 936 |     "node_modules/@eslint/object-schema": {
 937 |       "version": "2.1.4",
 938 |       "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.4.tgz",
 939 |       "integrity": "sha512-BsWiH1yFGjXXS2yvrf5LyuoSIIbPrGUWob917o+BTKuZ7qJdxX8aJLRxs1fS9n6r7vESrq1OUqb68dANcFXuQQ==",
 940 |       "dev": true,
 941 |       "license": "Apache-2.0",
 942 |       "engines": {
 943 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
 944 |       }
 945 |     },
 946 |     "node_modules/@eslint/plugin-kit": {
 947 |       "version": "0.2.3",
 948 |       "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.2.3.tgz",
 949 |       "integrity": "sha512-2b/g5hRmpbb1o4GnTZax9N9m0FXzz9OV42ZzI4rDDMDuHUqigAiQCEWChBWCY4ztAGVRjoWT19v0yMmc5/L5kA==",
 950 |       "dev": true,
 951 |       "license": "Apache-2.0",
 952 |       "dependencies": {
 953 |         "levn": "^0.4.1"
 954 |       },
 955 |       "engines": {
 956 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
 957 |       }
 958 |     },
 959 |     "node_modules/@floating-ui/core": {
 960 |       "version": "1.6.8",
 961 |       "resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.8.tgz",
 962 |       "integrity": "sha512-7XJ9cPU+yI2QeLS+FCSlqNFZJq8arvswefkZrYI1yQBbftw6FyrZOxYSh+9S7z7TpeWlRt9zJ5IhM1WIL334jA==",
 963 |       "license": "MIT",
 964 |       "dependencies": {
 965 |         "@floating-ui/utils": "^0.2.8"
 966 |       }
 967 |     },
 968 |     "node_modules/@floating-ui/dom": {
 969 |       "version": "1.6.12",
 970 |       "resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.12.tgz",
 971 |       "integrity": "sha512-NP83c0HjokcGVEMeoStg317VD9W7eDlGK7457dMBANbKA6GJZdc7rjujdgqzTaz93jkGgc5P/jeWbaCHnMNc+w==",
 972 |       "license": "MIT",
 973 |       "dependencies": {
 974 |         "@floating-ui/core": "^1.6.0",
 975 |         "@floating-ui/utils": "^0.2.8"
 976 |       }
 977 |     },
 978 |     "node_modules/@floating-ui/react-dom": {
 979 |       "version": "2.1.2",
 980 |       "resolved": "https://registry.npmjs.org/@floating-ui/react-dom/-/react-dom-2.1.2.tgz",
 981 |       "integrity": "sha512-06okr5cgPzMNBy+Ycse2A6udMi4bqwW/zgBF/rwjcNqWkyr82Mcg8b0vjX8OJpZFy/FKjJmw6wV7t44kK6kW7A==",
 982 |       "license": "MIT",
 983 |       "dependencies": {
 984 |         "@floating-ui/dom": "^1.0.0"
 985 |       },
 986 |       "peerDependencies": {
 987 |         "react": ">=16.8.0",
 988 |         "react-dom": ">=16.8.0"
 989 |       }
 990 |     },
 991 |     "node_modules/@floating-ui/utils": {
 992 |       "version": "0.2.8",
 993 |       "resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.8.tgz",
 994 |       "integrity": "sha512-kym7SodPp8/wloecOpcmSnWJsK7M0E5Wg8UcFA+uO4B9s5d0ywXOEro/8HM9x0rW+TljRzul/14UYz3TleT3ig==",
 995 |       "license": "MIT"
 996 |     },
 997 |     "node_modules/@humanfs/core": {
 998 |       "version": "0.19.1",
 999 |       "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
1000 |       "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
1001 |       "dev": true,
1002 |       "license": "Apache-2.0",
1003 |       "engines": {
1004 |         "node": ">=18.18.0"
1005 |       }
1006 |     },
1007 |     "node_modules/@humanfs/node": {
1008 |       "version": "0.16.6",
1009 |       "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.6.tgz",
1010 |       "integrity": "sha512-YuI2ZHQL78Q5HbhDiBA1X4LmYdXCKCMQIfw0pw7piHJwyREFebJUvrQN4cMssyES6x+vfUbx1CIpaQUKYdQZOw==",
1011 |       "dev": true,
1012 |       "license": "Apache-2.0",
1013 |       "dependencies": {
1014 |         "@humanfs/core": "^0.19.1",
1015 |         "@humanwhocodes/retry": "^0.3.0"
1016 |       },
1017 |       "engines": {
1018 |         "node": ">=18.18.0"
1019 |       }
1020 |     },
1021 |     "node_modules/@humanfs/node/node_modules/@humanwhocodes/retry": {
1022 |       "version": "0.3.1",
1023 |       "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.3.1.tgz",
1024 |       "integrity": "sha512-JBxkERygn7Bv/GbN5Rv8Ul6LVknS+5Bp6RgDC/O8gEBU/yeH5Ui5C/OlWrTb6qct7LjjfT6Re2NxB0ln0yYybA==",
1025 |       "dev": true,
1026 |       "license": "Apache-2.0",
1027 |       "engines": {
1028 |         "node": ">=18.18"
1029 |       },
1030 |       "funding": {
1031 |         "type": "github",
1032 |         "url": "https://github.com/sponsors/nzakas"
1033 |       }
1034 |     },
1035 |     "node_modules/@humanwhocodes/module-importer": {
1036 |       "version": "1.0.1",
1037 |       "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
1038 |       "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
1039 |       "dev": true,
1040 |       "license": "Apache-2.0",
1041 |       "engines": {
1042 |         "node": ">=12.22"
1043 |       },
1044 |       "funding": {
1045 |         "type": "github",
1046 |         "url": "https://github.com/sponsors/nzakas"
1047 |       }
1048 |     },
1049 |     "node_modules/@humanwhocodes/retry": {
1050 |       "version": "0.4.1",
1051 |       "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.1.tgz",
1052 |       "integrity": "sha512-c7hNEllBlenFTHBky65mhq8WD2kbN9Q6gk0bTk8lSBvc554jpXSkST1iePudpt7+A/AQvuHs9EMqjHDXMY1lrA==",
1053 |       "dev": true,
1054 |       "license": "Apache-2.0",
1055 |       "engines": {
1056 |         "node": ">=18.18"
1057 |       },
1058 |       "funding": {
1059 |         "type": "github",
1060 |         "url": "https://github.com/sponsors/nzakas"
1061 |       }
1062 |     },
1063 |     "node_modules/@isaacs/cliui": {
1064 |       "version": "8.0.2",
1065 |       "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
1066 |       "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
1067 |       "license": "ISC",
1068 |       "dependencies": {
1069 |         "string-width": "^5.1.2",
1070 |         "string-width-cjs": "npm:string-width@^4.2.0",
1071 |         "strip-ansi": "^7.0.1",
1072 |         "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
1073 |         "wrap-ansi": "^8.1.0",
1074 |         "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
1075 |       },
1076 |       "engines": {
1077 |         "node": ">=12"
1078 |       }
1079 |     },
1080 |     "node_modules/@isaacs/cliui/node_modules/ansi-regex": {
1081 |       "version": "6.1.0",
1082 |       "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
1083 |       "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
1084 |       "license": "MIT",
1085 |       "engines": {
1086 |         "node": ">=12"
1087 |       },
1088 |       "funding": {
1089 |         "url": "https://github.com/chalk/ansi-regex?sponsor=1"
1090 |       }
1091 |     },
1092 |     "node_modules/@isaacs/cliui/node_modules/ansi-styles": {
1093 |       "version": "6.2.1",
1094 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
1095 |       "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
1096 |       "license": "MIT",
1097 |       "engines": {
1098 |         "node": ">=12"
1099 |       },
1100 |       "funding": {
1101 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
1102 |       }
1103 |     },
1104 |     "node_modules/@isaacs/cliui/node_modules/emoji-regex": {
1105 |       "version": "9.2.2",
1106 |       "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
1107 |       "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
1108 |       "license": "MIT"
1109 |     },
1110 |     "node_modules/@isaacs/cliui/node_modules/string-width": {
1111 |       "version": "5.1.2",
1112 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
1113 |       "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
1114 |       "license": "MIT",
1115 |       "dependencies": {
1116 |         "eastasianwidth": "^0.2.0",
1117 |         "emoji-regex": "^9.2.2",
1118 |         "strip-ansi": "^7.0.1"
1119 |       },
1120 |       "engines": {
1121 |         "node": ">=12"
1122 |       },
1123 |       "funding": {
1124 |         "url": "https://github.com/sponsors/sindresorhus"
1125 |       }
1126 |     },
1127 |     "node_modules/@isaacs/cliui/node_modules/strip-ansi": {
1128 |       "version": "7.1.0",
1129 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
1130 |       "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
1131 |       "license": "MIT",
1132 |       "dependencies": {
1133 |         "ansi-regex": "^6.0.1"
1134 |       },
1135 |       "engines": {
1136 |         "node": ">=12"
1137 |       },
1138 |       "funding": {
1139 |         "url": "https://github.com/chalk/strip-ansi?sponsor=1"
1140 |       }
1141 |     },
1142 |     "node_modules/@isaacs/cliui/node_modules/wrap-ansi": {
1143 |       "version": "8.1.0",
1144 |       "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
1145 |       "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
1146 |       "license": "MIT",
1147 |       "dependencies": {
1148 |         "ansi-styles": "^6.1.0",
1149 |         "string-width": "^5.0.1",
1150 |         "strip-ansi": "^7.0.1"
1151 |       },
1152 |       "engines": {
1153 |         "node": ">=12"
1154 |       },
1155 |       "funding": {
1156 |         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
1157 |       }
1158 |     },
1159 |     "node_modules/@jridgewell/gen-mapping": {
1160 |       "version": "0.3.5",
1161 |       "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.5.tgz",
1162 |       "integrity": "sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==",
1163 |       "license": "MIT",
1164 |       "dependencies": {
1165 |         "@jridgewell/set-array": "^1.2.1",
1166 |         "@jridgewell/sourcemap-codec": "^1.4.10",
1167 |         "@jridgewell/trace-mapping": "^0.3.24"
1168 |       },
1169 |       "engines": {
1170 |         "node": ">=6.0.0"
1171 |       }
1172 |     },
1173 |     "node_modules/@jridgewell/resolve-uri": {
1174 |       "version": "3.1.2",
1175 |       "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
1176 |       "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
1177 |       "license": "MIT",
1178 |       "engines": {
1179 |         "node": ">=6.0.0"
1180 |       }
1181 |     },
1182 |     "node_modules/@jridgewell/set-array": {
1183 |       "version": "1.2.1",
1184 |       "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
1185 |       "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
1186 |       "license": "MIT",
1187 |       "engines": {
1188 |         "node": ">=6.0.0"
1189 |       }
1190 |     },
1191 |     "node_modules/@jridgewell/sourcemap-codec": {
1192 |       "version": "1.5.0",
1193 |       "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
1194 |       "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
1195 |       "license": "MIT"
1196 |     },
1197 |     "node_modules/@jridgewell/trace-mapping": {
1198 |       "version": "0.3.25",
1199 |       "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
1200 |       "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
1201 |       "license": "MIT",
1202 |       "dependencies": {
1203 |         "@jridgewell/resolve-uri": "^3.1.0",
1204 |         "@jridgewell/sourcemap-codec": "^1.4.14"
1205 |       }
1206 |     },
1207 |     "node_modules/@modelcontextprotocol/inspector-client": {
1208 |       "resolved": "client",
1209 |       "link": true
1210 |     },
1211 |     "node_modules/@modelcontextprotocol/inspector-server": {
1212 |       "resolved": "server",
1213 |       "link": true
1214 |     },
1215 |     "node_modules/@modelcontextprotocol/sdk": {
1216 |       "version": "1.6.1",
1217 |       "resolved": "https://registry.npmjs.org/@modelcontextprotocol/sdk/-/sdk-1.6.1.tgz",
1218 |       "integrity": "sha512-oxzMzYCkZHMntzuyerehK3fV6A2Kwh5BD6CGEJSVDU2QNEhfLOptf2X7esQgaHZXHZY0oHmMsOtIDLP71UJXgA==",
1219 |       "license": "MIT",
1220 |       "dependencies": {
1221 |         "content-type": "^1.0.5",
1222 |         "cors": "^2.8.5",
1223 |         "eventsource": "^3.0.2",
1224 |         "express": "^5.0.1",
1225 |         "express-rate-limit": "^7.5.0",
1226 |         "pkce-challenge": "^4.1.0",
1227 |         "raw-body": "^3.0.0",
1228 |         "zod": "^3.23.8",
1229 |         "zod-to-json-schema": "^3.24.1"
1230 |       },
1231 |       "engines": {
1232 |         "node": ">=18"
1233 |       }
1234 |     },
1235 |     "node_modules/@modelcontextprotocol/sdk/node_modules/accepts": {
1236 |       "version": "2.0.0",
1237 |       "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
1238 |       "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
1239 |       "license": "MIT",
1240 |       "dependencies": {
1241 |         "mime-types": "^3.0.0",
1242 |         "negotiator": "^1.0.0"
1243 |       },
1244 |       "engines": {
1245 |         "node": ">= 0.6"
1246 |       }
1247 |     },
1248 |     "node_modules/@modelcontextprotocol/sdk/node_modules/body-parser": {
1249 |       "version": "2.1.0",
1250 |       "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.1.0.tgz",
1251 |       "integrity": "sha512-/hPxh61E+ll0Ujp24Ilm64cykicul1ypfwjVttduAiEdtnJFvLePSrIPk+HMImtNv5270wOGCb1Tns2rybMkoQ==",
1252 |       "license": "MIT",
1253 |       "dependencies": {
1254 |         "bytes": "^3.1.2",
1255 |         "content-type": "^1.0.5",
1256 |         "debug": "^4.4.0",
1257 |         "http-errors": "^2.0.0",
1258 |         "iconv-lite": "^0.5.2",
1259 |         "on-finished": "^2.4.1",
1260 |         "qs": "^6.14.0",
1261 |         "raw-body": "^3.0.0",
1262 |         "type-is": "^2.0.0"
1263 |       },
1264 |       "engines": {
1265 |         "node": ">=18"
1266 |       }
1267 |     },
1268 |     "node_modules/@modelcontextprotocol/sdk/node_modules/body-parser/node_modules/debug": {
1269 |       "version": "4.4.0",
1270 |       "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
1271 |       "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
1272 |       "license": "MIT",
1273 |       "dependencies": {
1274 |         "ms": "^2.1.3"
1275 |       },
1276 |       "engines": {
1277 |         "node": ">=6.0"
1278 |       },
1279 |       "peerDependenciesMeta": {
1280 |         "supports-color": {
1281 |           "optional": true
1282 |         }
1283 |       }
1284 |     },
1285 |     "node_modules/@modelcontextprotocol/sdk/node_modules/body-parser/node_modules/qs": {
1286 |       "version": "6.14.0",
1287 |       "resolved": "https://registry.npmjs.org/qs/-/qs-6.14.0.tgz",
1288 |       "integrity": "sha512-YWWTjgABSKcvs/nWBi9PycY/JiPJqOD4JA6o9Sej2AtvSGarXxKC3OQSk4pAarbdQlKAh5D4FCQkJNkW+GAn3w==",
1289 |       "license": "BSD-3-Clause",
1290 |       "dependencies": {
1291 |         "side-channel": "^1.1.0"
1292 |       },
1293 |       "engines": {
1294 |         "node": ">=0.6"
1295 |       },
1296 |       "funding": {
1297 |         "url": "https://github.com/sponsors/ljharb"
1298 |       }
1299 |     },
1300 |     "node_modules/@modelcontextprotocol/sdk/node_modules/content-disposition": {
1301 |       "version": "1.0.0",
1302 |       "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.0.0.tgz",
1303 |       "integrity": "sha512-Au9nRL8VNUut/XSzbQA38+M78dzP4D+eqg3gfJHMIHHYa3bg067xj1KxMUWj+VULbiZMowKngFFbKczUrNJ1mg==",
1304 |       "license": "MIT",
1305 |       "dependencies": {
1306 |         "safe-buffer": "5.2.1"
1307 |       },
1308 |       "engines": {
1309 |         "node": ">= 0.6"
1310 |       }
1311 |     },
1312 |     "node_modules/@modelcontextprotocol/sdk/node_modules/cookie-signature": {
1313 |       "version": "1.2.2",
1314 |       "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
1315 |       "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
1316 |       "license": "MIT",
1317 |       "engines": {
1318 |         "node": ">=6.6.0"
1319 |       }
1320 |     },
1321 |     "node_modules/@modelcontextprotocol/sdk/node_modules/debug": {
1322 |       "version": "4.3.6",
1323 |       "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.6.tgz",
1324 |       "integrity": "sha512-O/09Bd4Z1fBrU4VzkhFqVgpPzaGbw6Sm9FEkBT1A/YBXQFGuuSxa1dN2nxgxS34JmKXqYx8CZAwEVoJFImUXIg==",
1325 |       "license": "MIT",
1326 |       "dependencies": {
1327 |         "ms": "2.1.2"
1328 |       },
1329 |       "engines": {
1330 |         "node": ">=6.0"
1331 |       },
1332 |       "peerDependenciesMeta": {
1333 |         "supports-color": {
1334 |           "optional": true
1335 |         }
1336 |       }
1337 |     },
1338 |     "node_modules/@modelcontextprotocol/sdk/node_modules/debug/node_modules/ms": {
1339 |       "version": "2.1.2",
1340 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
1341 |       "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
1342 |       "license": "MIT"
1343 |     },
1344 |     "node_modules/@modelcontextprotocol/sdk/node_modules/eventsource": {
1345 |       "version": "3.0.2",
1346 |       "resolved": "https://registry.npmjs.org/eventsource/-/eventsource-3.0.2.tgz",
1347 |       "integrity": "sha512-YolzkJNxsTL3tCJMWFxpxtG2sCjbZ4LQUBUrkdaJK0ub0p6lmJt+2+1SwhKjLc652lpH9L/79Ptez972H9tphw==",
1348 |       "license": "MIT",
1349 |       "dependencies": {
1350 |         "eventsource-parser": "^3.0.0"
1351 |       },
1352 |       "engines": {
1353 |         "node": ">=18.0.0"
1354 |       }
1355 |     },
1356 |     "node_modules/@modelcontextprotocol/sdk/node_modules/express": {
1357 |       "version": "5.0.1",
1358 |       "resolved": "https://registry.npmjs.org/express/-/express-5.0.1.tgz",
1359 |       "integrity": "sha512-ORF7g6qGnD+YtUG9yx4DFoqCShNMmUKiXuT5oWMHiOvt/4WFbHC6yCwQMTSBMno7AqntNCAzzcnnjowRkTL9eQ==",
1360 |       "license": "MIT",
1361 |       "dependencies": {
1362 |         "accepts": "^2.0.0",
1363 |         "body-parser": "^2.0.1",
1364 |         "content-disposition": "^1.0.0",
1365 |         "content-type": "~1.0.4",
1366 |         "cookie": "0.7.1",
1367 |         "cookie-signature": "^1.2.1",
1368 |         "debug": "4.3.6",
1369 |         "depd": "2.0.0",
1370 |         "encodeurl": "~2.0.0",
1371 |         "escape-html": "~1.0.3",
1372 |         "etag": "~1.8.1",
1373 |         "finalhandler": "^2.0.0",
1374 |         "fresh": "2.0.0",
1375 |         "http-errors": "2.0.0",
1376 |         "merge-descriptors": "^2.0.0",
1377 |         "methods": "~1.1.2",
1378 |         "mime-types": "^3.0.0",
1379 |         "on-finished": "2.4.1",
1380 |         "once": "1.4.0",
1381 |         "parseurl": "~1.3.3",
1382 |         "proxy-addr": "~2.0.7",
1383 |         "qs": "6.13.0",
1384 |         "range-parser": "~1.2.1",
1385 |         "router": "^2.0.0",
1386 |         "safe-buffer": "5.2.1",
1387 |         "send": "^1.1.0",
1388 |         "serve-static": "^2.1.0",
1389 |         "setprototypeof": "1.2.0",
1390 |         "statuses": "2.0.1",
1391 |         "type-is": "^2.0.0",
1392 |         "utils-merge": "1.0.1",
1393 |         "vary": "~1.1.2"
1394 |       },
1395 |       "engines": {
1396 |         "node": ">= 18"
1397 |       }
1398 |     },
1399 |     "node_modules/@modelcontextprotocol/sdk/node_modules/finalhandler": {
1400 |       "version": "2.0.0",
1401 |       "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.0.0.tgz",
1402 |       "integrity": "sha512-MX6Zo2adDViYh+GcxxB1dpO43eypOGUOL12rLCOTMQv/DfIbpSJUy4oQIIZhVZkH9e+bZWKMon0XHFEju16tkQ==",
1403 |       "license": "MIT",
1404 |       "dependencies": {
1405 |         "debug": "2.6.9",
1406 |         "encodeurl": "~1.0.2",
1407 |         "escape-html": "~1.0.3",
1408 |         "on-finished": "2.4.1",
1409 |         "parseurl": "~1.3.3",
1410 |         "statuses": "2.0.1",
1411 |         "unpipe": "~1.0.0"
1412 |       },
1413 |       "engines": {
1414 |         "node": ">= 0.8"
1415 |       }
1416 |     },
1417 |     "node_modules/@modelcontextprotocol/sdk/node_modules/finalhandler/node_modules/debug": {
1418 |       "version": "2.6.9",
1419 |       "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
1420 |       "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
1421 |       "license": "MIT",
1422 |       "dependencies": {
1423 |         "ms": "2.0.0"
1424 |       }
1425 |     },
1426 |     "node_modules/@modelcontextprotocol/sdk/node_modules/finalhandler/node_modules/encodeurl": {
1427 |       "version": "1.0.2",
1428 |       "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
1429 |       "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
1430 |       "license": "MIT",
1431 |       "engines": {
1432 |         "node": ">= 0.8"
1433 |       }
1434 |     },
1435 |     "node_modules/@modelcontextprotocol/sdk/node_modules/finalhandler/node_modules/ms": {
1436 |       "version": "2.0.0",
1437 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
1438 |       "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
1439 |       "license": "MIT"
1440 |     },
1441 |     "node_modules/@modelcontextprotocol/sdk/node_modules/fresh": {
1442 |       "version": "2.0.0",
1443 |       "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
1444 |       "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
1445 |       "license": "MIT",
1446 |       "engines": {
1447 |         "node": ">= 0.8"
1448 |       }
1449 |     },
1450 |     "node_modules/@modelcontextprotocol/sdk/node_modules/iconv-lite": {
1451 |       "version": "0.5.2",
1452 |       "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.5.2.tgz",
1453 |       "integrity": "sha512-kERHXvpSaB4aU3eANwidg79K8FlrN77m8G9V+0vOR3HYaRifrlwMEpT7ZBJqLSEIHnEgJTHcWK82wwLwwKwtag==",
1454 |       "license": "MIT",
1455 |       "dependencies": {
1456 |         "safer-buffer": ">= 2.1.2 < 3"
1457 |       },
1458 |       "engines": {
1459 |         "node": ">=0.10.0"
1460 |       }
1461 |     },
1462 |     "node_modules/@modelcontextprotocol/sdk/node_modules/media-typer": {
1463 |       "version": "1.1.0",
1464 |       "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
1465 |       "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
1466 |       "license": "MIT",
1467 |       "engines": {
1468 |         "node": ">= 0.8"
1469 |       }
1470 |     },
1471 |     "node_modules/@modelcontextprotocol/sdk/node_modules/merge-descriptors": {
1472 |       "version": "2.0.0",
1473 |       "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
1474 |       "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
1475 |       "license": "MIT",
1476 |       "engines": {
1477 |         "node": ">=18"
1478 |       },
1479 |       "funding": {
1480 |         "url": "https://github.com/sponsors/sindresorhus"
1481 |       }
1482 |     },
1483 |     "node_modules/@modelcontextprotocol/sdk/node_modules/mime-db": {
1484 |       "version": "1.53.0",
1485 |       "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.53.0.tgz",
1486 |       "integrity": "sha512-oHlN/w+3MQ3rba9rqFr6V/ypF10LSkdwUysQL7GkXoTgIWeV+tcXGA852TBxH+gsh8UWoyhR1hKcoMJTuWflpg==",
1487 |       "license": "MIT",
1488 |       "engines": {
1489 |         "node": ">= 0.6"
1490 |       }
1491 |     },
1492 |     "node_modules/@modelcontextprotocol/sdk/node_modules/mime-types": {
1493 |       "version": "3.0.0",
1494 |       "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.0.tgz",
1495 |       "integrity": "sha512-XqoSHeCGjVClAmoGFG3lVFqQFRIrTVw2OH3axRqAcfaw+gHWIfnASS92AV+Rl/mk0MupgZTRHQOjxY6YVnzK5w==",
1496 |       "license": "MIT",
1497 |       "dependencies": {
1498 |         "mime-db": "^1.53.0"
1499 |       },
1500 |       "engines": {
1501 |         "node": ">= 0.6"
1502 |       }
1503 |     },
1504 |     "node_modules/@modelcontextprotocol/sdk/node_modules/negotiator": {
1505 |       "version": "1.0.0",
1506 |       "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
1507 |       "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
1508 |       "license": "MIT",
1509 |       "engines": {
1510 |         "node": ">= 0.6"
1511 |       }
1512 |     },
1513 |     "node_modules/@modelcontextprotocol/sdk/node_modules/send": {
1514 |       "version": "1.1.0",
1515 |       "resolved": "https://registry.npmjs.org/send/-/send-1.1.0.tgz",
1516 |       "integrity": "sha512-v67WcEouB5GxbTWL/4NeToqcZiAWEq90N888fczVArY8A79J0L4FD7vj5hm3eUMua5EpoQ59wa/oovY6TLvRUA==",
1517 |       "license": "MIT",
1518 |       "dependencies": {
1519 |         "debug": "^4.3.5",
1520 |         "destroy": "^1.2.0",
1521 |         "encodeurl": "^2.0.0",
1522 |         "escape-html": "^1.0.3",
1523 |         "etag": "^1.8.1",
1524 |         "fresh": "^0.5.2",
1525 |         "http-errors": "^2.0.0",
1526 |         "mime-types": "^2.1.35",
1527 |         "ms": "^2.1.3",
1528 |         "on-finished": "^2.4.1",
1529 |         "range-parser": "^1.2.1",
1530 |         "statuses": "^2.0.1"
1531 |       },
1532 |       "engines": {
1533 |         "node": ">= 18"
1534 |       }
1535 |     },
1536 |     "node_modules/@modelcontextprotocol/sdk/node_modules/send/node_modules/fresh": {
1537 |       "version": "0.5.2",
1538 |       "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
1539 |       "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
1540 |       "license": "MIT",
1541 |       "engines": {
1542 |         "node": ">= 0.6"
1543 |       }
1544 |     },
1545 |     "node_modules/@modelcontextprotocol/sdk/node_modules/send/node_modules/mime-db": {
1546 |       "version": "1.52.0",
1547 |       "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
1548 |       "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
1549 |       "license": "MIT",
1550 |       "engines": {
1551 |         "node": ">= 0.6"
1552 |       }
1553 |     },
1554 |     "node_modules/@modelcontextprotocol/sdk/node_modules/send/node_modules/mime-types": {
1555 |       "version": "2.1.35",
1556 |       "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
1557 |       "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
1558 |       "license": "MIT",
1559 |       "dependencies": {
1560 |         "mime-db": "1.52.0"
1561 |       },
1562 |       "engines": {
1563 |         "node": ">= 0.6"
1564 |       }
1565 |     },
1566 |     "node_modules/@modelcontextprotocol/sdk/node_modules/serve-static": {
1567 |       "version": "2.1.0",
1568 |       "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.1.0.tgz",
1569 |       "integrity": "sha512-A3We5UfEjG8Z7VkDv6uItWw6HY2bBSBJT1KtVESn6EOoOr2jAxNhxWCLY3jDE2WcuHXByWju74ck3ZgLwL8xmA==",
1570 |       "license": "MIT",
1571 |       "dependencies": {
1572 |         "encodeurl": "^2.0.0",
1573 |         "escape-html": "^1.0.3",
1574 |         "parseurl": "^1.3.3",
1575 |         "send": "^1.0.0"
1576 |       },
1577 |       "engines": {
1578 |         "node": ">= 18"
1579 |       }
1580 |     },
1581 |     "node_modules/@modelcontextprotocol/sdk/node_modules/type-is": {
1582 |       "version": "2.0.0",
1583 |       "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.0.tgz",
1584 |       "integrity": "sha512-gd0sGezQYCbWSbkZr75mln4YBidWUN60+devscpLF5mtRDUpiaTvKpBNrdaCvel1NdR2k6vclXybU5fBd2i+nw==",
1585 |       "license": "MIT",
1586 |       "dependencies": {
1587 |         "content-type": "^1.0.5",
1588 |         "media-typer": "^1.1.0",
1589 |         "mime-types": "^3.0.0"
1590 |       },
1591 |       "engines": {
1592 |         "node": ">= 0.6"
1593 |       }
1594 |     },
1595 |     "node_modules/@nodelib/fs.scandir": {
1596 |       "version": "2.1.5",
1597 |       "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
1598 |       "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
1599 |       "license": "MIT",
1600 |       "dependencies": {
1601 |         "@nodelib/fs.stat": "2.0.5",
1602 |         "run-parallel": "^1.1.9"
1603 |       },
1604 |       "engines": {
1605 |         "node": ">= 8"
1606 |       }
1607 |     },
1608 |     "node_modules/@nodelib/fs.stat": {
1609 |       "version": "2.0.5",
1610 |       "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
1611 |       "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
1612 |       "license": "MIT",
1613 |       "engines": {
1614 |         "node": ">= 8"
1615 |       }
1616 |     },
1617 |     "node_modules/@nodelib/fs.walk": {
1618 |       "version": "1.2.8",
1619 |       "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
1620 |       "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
1621 |       "license": "MIT",
1622 |       "dependencies": {
1623 |         "@nodelib/fs.scandir": "2.1.5",
1624 |         "fastq": "^1.6.0"
1625 |       },
1626 |       "engines": {
1627 |         "node": ">= 8"
1628 |       }
1629 |     },
1630 |     "node_modules/@pkgjs/parseargs": {
1631 |       "version": "0.11.0",
1632 |       "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
1633 |       "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
1634 |       "license": "MIT",
1635 |       "optional": true,
1636 |       "engines": {
1637 |         "node": ">=14"
1638 |       }
1639 |     },
1640 |     "node_modules/@radix-ui/number": {
1641 |       "version": "1.1.0",
1642 |       "resolved": "https://registry.npmjs.org/@radix-ui/number/-/number-1.1.0.tgz",
1643 |       "integrity": "sha512-V3gRzhVNU1ldS5XhAPTom1fOIo4ccrjjJgmE+LI2h/WaFpHmx0MQApT+KZHnx8abG6Avtfcz4WoEciMnpFT3HQ==",
1644 |       "license": "MIT"
1645 |     },
1646 |     "node_modules/@radix-ui/primitive": {
1647 |       "version": "1.1.0",
1648 |       "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.0.tgz",
1649 |       "integrity": "sha512-4Z8dn6Upk0qk4P74xBhZ6Hd/w0mPEzOOLxy4xiPXOXqjF7jZS0VAKk7/x/H6FyY2zCkYJqePf1G5KmkmNJ4RBA==",
1650 |       "license": "MIT"
1651 |     },
1652 |     "node_modules/@radix-ui/react-arrow": {
1653 |       "version": "1.1.0",
1654 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-arrow/-/react-arrow-1.1.0.tgz",
1655 |       "integrity": "sha512-FmlW1rCg7hBpEBwFbjHwCW6AmWLQM6g/v0Sn8XbP9NvmSZ2San1FpQeyPtufzOMSIx7Y4dzjlHoifhp+7NkZhw==",
1656 |       "license": "MIT",
1657 |       "dependencies": {
1658 |         "@radix-ui/react-primitive": "2.0.0"
1659 |       },
1660 |       "peerDependencies": {
1661 |         "@types/react": "*",
1662 |         "@types/react-dom": "*",
1663 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
1664 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1665 |       },
1666 |       "peerDependenciesMeta": {
1667 |         "@types/react": {
1668 |           "optional": true
1669 |         },
1670 |         "@types/react-dom": {
1671 |           "optional": true
1672 |         }
1673 |       }
1674 |     },
1675 |     "node_modules/@radix-ui/react-checkbox": {
1676 |       "version": "1.1.4",
1677 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-checkbox/-/react-checkbox-1.1.4.tgz",
1678 |       "integrity": "sha512-wP0CPAHq+P5I4INKe3hJrIa1WoNqqrejzW+zoU0rOvo1b9gDEJJFl2rYfO1PYJUQCc2H1WZxIJmyv9BS8i5fLw==",
1679 |       "license": "MIT",
1680 |       "dependencies": {
1681 |         "@radix-ui/primitive": "1.1.1",
1682 |         "@radix-ui/react-compose-refs": "1.1.1",
1683 |         "@radix-ui/react-context": "1.1.1",
1684 |         "@radix-ui/react-presence": "1.1.2",
1685 |         "@radix-ui/react-primitive": "2.0.2",
1686 |         "@radix-ui/react-use-controllable-state": "1.1.0",
1687 |         "@radix-ui/react-use-previous": "1.1.0",
1688 |         "@radix-ui/react-use-size": "1.1.0"
1689 |       },
1690 |       "peerDependencies": {
1691 |         "@types/react": "*",
1692 |         "@types/react-dom": "*",
1693 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
1694 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1695 |       },
1696 |       "peerDependenciesMeta": {
1697 |         "@types/react": {
1698 |           "optional": true
1699 |         },
1700 |         "@types/react-dom": {
1701 |           "optional": true
1702 |         }
1703 |       }
1704 |     },
1705 |     "node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/primitive": {
1706 |       "version": "1.1.1",
1707 |       "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.1.tgz",
1708 |       "integrity": "sha512-SJ31y+Q/zAyShtXJc8x83i9TYdbAfHZ++tUZnvjJJqFjzsdUnKsxPL6IEtBlxKkU7yzer//GQtZSV4GbldL3YA==",
1709 |       "license": "MIT"
1710 |     },
1711 |     "node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-compose-refs": {
1712 |       "version": "1.1.1",
1713 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.1.tgz",
1714 |       "integrity": "sha512-Y9VzoRDSJtgFMUCoiZBDVo084VQ5hfpXxVE+NgkdNsjiDBByiImMZKKhxMwCbdHvhlENG6a833CbFkOQvTricw==",
1715 |       "license": "MIT",
1716 |       "peerDependencies": {
1717 |         "@types/react": "*",
1718 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1719 |       },
1720 |       "peerDependenciesMeta": {
1721 |         "@types/react": {
1722 |           "optional": true
1723 |         }
1724 |       }
1725 |     },
1726 |     "node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-presence": {
1727 |       "version": "1.1.2",
1728 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.2.tgz",
1729 |       "integrity": "sha512-18TFr80t5EVgL9x1SwF/YGtfG+l0BS0PRAlCWBDoBEiDQjeKgnNZRVJp/oVBl24sr3Gbfwc/Qpj4OcWTQMsAEg==",
1730 |       "license": "MIT",
1731 |       "dependencies": {
1732 |         "@radix-ui/react-compose-refs": "1.1.1",
1733 |         "@radix-ui/react-use-layout-effect": "1.1.0"
1734 |       },
1735 |       "peerDependencies": {
1736 |         "@types/react": "*",
1737 |         "@types/react-dom": "*",
1738 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
1739 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1740 |       },
1741 |       "peerDependenciesMeta": {
1742 |         "@types/react": {
1743 |           "optional": true
1744 |         },
1745 |         "@types/react-dom": {
1746 |           "optional": true
1747 |         }
1748 |       }
1749 |     },
1750 |     "node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-primitive": {
1751 |       "version": "2.0.2",
1752 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.0.2.tgz",
1753 |       "integrity": "sha512-Ec/0d38EIuvDF+GZjcMU/Ze6MxntVJYO/fRlCPhCaVUyPY9WTalHJw54tp9sXeJo3tlShWpy41vQRgLRGOuz+w==",
1754 |       "license": "MIT",
1755 |       "dependencies": {
1756 |         "@radix-ui/react-slot": "1.1.2"
1757 |       },
1758 |       "peerDependencies": {
1759 |         "@types/react": "*",
1760 |         "@types/react-dom": "*",
1761 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
1762 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1763 |       },
1764 |       "peerDependenciesMeta": {
1765 |         "@types/react": {
1766 |           "optional": true
1767 |         },
1768 |         "@types/react-dom": {
1769 |           "optional": true
1770 |         }
1771 |       }
1772 |     },
1773 |     "node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-slot": {
1774 |       "version": "1.1.2",
1775 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.1.2.tgz",
1776 |       "integrity": "sha512-YAKxaiGsSQJ38VzKH86/BPRC4rh+b1Jpa+JneA5LRE7skmLPNAyeG8kPJj/oo4STLvlrs8vkf/iYyc3A5stYCQ==",
1777 |       "license": "MIT",
1778 |       "dependencies": {
1779 |         "@radix-ui/react-compose-refs": "1.1.1"
1780 |       },
1781 |       "peerDependencies": {
1782 |         "@types/react": "*",
1783 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1784 |       },
1785 |       "peerDependenciesMeta": {
1786 |         "@types/react": {
1787 |           "optional": true
1788 |         }
1789 |       }
1790 |     },
1791 |     "node_modules/@radix-ui/react-collection": {
1792 |       "version": "1.1.0",
1793 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-collection/-/react-collection-1.1.0.tgz",
1794 |       "integrity": "sha512-GZsZslMJEyo1VKm5L1ZJY8tGDxZNPAoUeQUIbKeJfoi7Q4kmig5AsgLMYYuyYbfjd8fBmFORAIwYAkXMnXZgZw==",
1795 |       "license": "MIT",
1796 |       "dependencies": {
1797 |         "@radix-ui/react-compose-refs": "1.1.0",
1798 |         "@radix-ui/react-context": "1.1.0",
1799 |         "@radix-ui/react-primitive": "2.0.0",
1800 |         "@radix-ui/react-slot": "1.1.0"
1801 |       },
1802 |       "peerDependencies": {
1803 |         "@types/react": "*",
1804 |         "@types/react-dom": "*",
1805 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
1806 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1807 |       },
1808 |       "peerDependenciesMeta": {
1809 |         "@types/react": {
1810 |           "optional": true
1811 |         },
1812 |         "@types/react-dom": {
1813 |           "optional": true
1814 |         }
1815 |       }
1816 |     },
1817 |     "node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-context": {
1818 |       "version": "1.1.0",
1819 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.0.tgz",
1820 |       "integrity": "sha512-OKrckBy+sMEgYM/sMmqmErVn0kZqrHPJze+Ql3DzYsDDp0hl0L62nx/2122/Bvps1qz645jlcu2tD9lrRSdf8A==",
1821 |       "license": "MIT",
1822 |       "peerDependencies": {
1823 |         "@types/react": "*",
1824 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1825 |       },
1826 |       "peerDependenciesMeta": {
1827 |         "@types/react": {
1828 |           "optional": true
1829 |         }
1830 |       }
1831 |     },
1832 |     "node_modules/@radix-ui/react-compose-refs": {
1833 |       "version": "1.1.0",
1834 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.0.tgz",
1835 |       "integrity": "sha512-b4inOtiaOnYf9KWyO3jAeeCG6FeyfY6ldiEPanbUjWd+xIk5wZeHa8yVwmrJ2vderhu/BQvzCrJI0lHd+wIiqw==",
1836 |       "license": "MIT",
1837 |       "peerDependencies": {
1838 |         "@types/react": "*",
1839 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1840 |       },
1841 |       "peerDependenciesMeta": {
1842 |         "@types/react": {
1843 |           "optional": true
1844 |         }
1845 |       }
1846 |     },
1847 |     "node_modules/@radix-ui/react-context": {
1848 |       "version": "1.1.1",
1849 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.1.tgz",
1850 |       "integrity": "sha512-UASk9zi+crv9WteK/NU4PLvOoL3OuE6BWVKNF6hPRBtYBDXQ2u5iu3O59zUlJiTVvkyuycnqrztsHVJwcK9K+Q==",
1851 |       "license": "MIT",
1852 |       "peerDependencies": {
1853 |         "@types/react": "*",
1854 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1855 |       },
1856 |       "peerDependenciesMeta": {
1857 |         "@types/react": {
1858 |           "optional": true
1859 |         }
1860 |       }
1861 |     },
1862 |     "node_modules/@radix-ui/react-dialog": {
1863 |       "version": "1.1.3",
1864 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-dialog/-/react-dialog-1.1.3.tgz",
1865 |       "integrity": "sha512-ujGvqQNkZ0J7caQyl8XuZRj2/TIrYcOGwqz5TeD1OMcCdfBuEMP0D12ve+8J5F9XuNUth3FAKFWo/wt0E/GJrQ==",
1866 |       "dependencies": {
1867 |         "@radix-ui/primitive": "1.1.1",
1868 |         "@radix-ui/react-compose-refs": "1.1.1",
1869 |         "@radix-ui/react-context": "1.1.1",
1870 |         "@radix-ui/react-dismissable-layer": "1.1.2",
1871 |         "@radix-ui/react-focus-guards": "1.1.1",
1872 |         "@radix-ui/react-focus-scope": "1.1.1",
1873 |         "@radix-ui/react-id": "1.1.0",
1874 |         "@radix-ui/react-portal": "1.1.3",
1875 |         "@radix-ui/react-presence": "1.1.2",
1876 |         "@radix-ui/react-primitive": "2.0.1",
1877 |         "@radix-ui/react-slot": "1.1.1",
1878 |         "@radix-ui/react-use-controllable-state": "1.1.0",
1879 |         "aria-hidden": "^1.1.1",
1880 |         "react-remove-scroll": "2.6.0"
1881 |       },
1882 |       "peerDependencies": {
1883 |         "@types/react": "*",
1884 |         "@types/react-dom": "*",
1885 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
1886 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1887 |       },
1888 |       "peerDependenciesMeta": {
1889 |         "@types/react": {
1890 |           "optional": true
1891 |         },
1892 |         "@types/react-dom": {
1893 |           "optional": true
1894 |         }
1895 |       }
1896 |     },
1897 |     "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/primitive": {
1898 |       "version": "1.1.1",
1899 |       "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.1.tgz",
1900 |       "integrity": "sha512-SJ31y+Q/zAyShtXJc8x83i9TYdbAfHZ++tUZnvjJJqFjzsdUnKsxPL6IEtBlxKkU7yzer//GQtZSV4GbldL3YA=="
1901 |     },
1902 |     "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-compose-refs": {
1903 |       "version": "1.1.1",
1904 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.1.tgz",
1905 |       "integrity": "sha512-Y9VzoRDSJtgFMUCoiZBDVo084VQ5hfpXxVE+NgkdNsjiDBByiImMZKKhxMwCbdHvhlENG6a833CbFkOQvTricw==",
1906 |       "peerDependencies": {
1907 |         "@types/react": "*",
1908 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1909 |       },
1910 |       "peerDependenciesMeta": {
1911 |         "@types/react": {
1912 |           "optional": true
1913 |         }
1914 |       }
1915 |     },
1916 |     "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-dismissable-layer": {
1917 |       "version": "1.1.2",
1918 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.1.2.tgz",
1919 |       "integrity": "sha512-kEHnlhv7wUggvhuJPkyw4qspXLJOdYoAP4dO2c8ngGuXTq1w/HZp1YeVB+NQ2KbH1iEG+pvOCGYSqh9HZOz6hg==",
1920 |       "dependencies": {
1921 |         "@radix-ui/primitive": "1.1.1",
1922 |         "@radix-ui/react-compose-refs": "1.1.1",
1923 |         "@radix-ui/react-primitive": "2.0.1",
1924 |         "@radix-ui/react-use-callback-ref": "1.1.0",
1925 |         "@radix-ui/react-use-escape-keydown": "1.1.0"
1926 |       },
1927 |       "peerDependencies": {
1928 |         "@types/react": "*",
1929 |         "@types/react-dom": "*",
1930 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
1931 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1932 |       },
1933 |       "peerDependenciesMeta": {
1934 |         "@types/react": {
1935 |           "optional": true
1936 |         },
1937 |         "@types/react-dom": {
1938 |           "optional": true
1939 |         }
1940 |       }
1941 |     },
1942 |     "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-scope": {
1943 |       "version": "1.1.1",
1944 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.1.1.tgz",
1945 |       "integrity": "sha512-01omzJAYRxXdG2/he/+xy+c8a8gCydoQ1yOxnWNcRhrrBW5W+RQJ22EK1SaO8tb3WoUsuEw7mJjBozPzihDFjA==",
1946 |       "dependencies": {
1947 |         "@radix-ui/react-compose-refs": "1.1.1",
1948 |         "@radix-ui/react-primitive": "2.0.1",
1949 |         "@radix-ui/react-use-callback-ref": "1.1.0"
1950 |       },
1951 |       "peerDependencies": {
1952 |         "@types/react": "*",
1953 |         "@types/react-dom": "*",
1954 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
1955 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1956 |       },
1957 |       "peerDependenciesMeta": {
1958 |         "@types/react": {
1959 |           "optional": true
1960 |         },
1961 |         "@types/react-dom": {
1962 |           "optional": true
1963 |         }
1964 |       }
1965 |     },
1966 |     "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-portal": {
1967 |       "version": "1.1.3",
1968 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.1.3.tgz",
1969 |       "integrity": "sha512-NciRqhXnGojhT93RPyDaMPfLH3ZSl4jjIFbZQ1b/vxvZEdHsBZ49wP9w8L3HzUQwep01LcWtkUvm0OVB5JAHTw==",
1970 |       "dependencies": {
1971 |         "@radix-ui/react-primitive": "2.0.1",
1972 |         "@radix-ui/react-use-layout-effect": "1.1.0"
1973 |       },
1974 |       "peerDependencies": {
1975 |         "@types/react": "*",
1976 |         "@types/react-dom": "*",
1977 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
1978 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
1979 |       },
1980 |       "peerDependenciesMeta": {
1981 |         "@types/react": {
1982 |           "optional": true
1983 |         },
1984 |         "@types/react-dom": {
1985 |           "optional": true
1986 |         }
1987 |       }
1988 |     },
1989 |     "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence": {
1990 |       "version": "1.1.2",
1991 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.2.tgz",
1992 |       "integrity": "sha512-18TFr80t5EVgL9x1SwF/YGtfG+l0BS0PRAlCWBDoBEiDQjeKgnNZRVJp/oVBl24sr3Gbfwc/Qpj4OcWTQMsAEg==",
1993 |       "dependencies": {
1994 |         "@radix-ui/react-compose-refs": "1.1.1",
1995 |         "@radix-ui/react-use-layout-effect": "1.1.0"
1996 |       },
1997 |       "peerDependencies": {
1998 |         "@types/react": "*",
1999 |         "@types/react-dom": "*",
2000 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2001 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2002 |       },
2003 |       "peerDependenciesMeta": {
2004 |         "@types/react": {
2005 |           "optional": true
2006 |         },
2007 |         "@types/react-dom": {
2008 |           "optional": true
2009 |         }
2010 |       }
2011 |     },
2012 |     "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-primitive": {
2013 |       "version": "2.0.1",
2014 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.0.1.tgz",
2015 |       "integrity": "sha512-sHCWTtxwNn3L3fH8qAfnF3WbUZycW93SM1j3NFDzXBiz8D6F5UTTy8G1+WFEaiCdvCVRJWj6N2R4Xq6HdiHmDg==",
2016 |       "dependencies": {
2017 |         "@radix-ui/react-slot": "1.1.1"
2018 |       },
2019 |       "peerDependencies": {
2020 |         "@types/react": "*",
2021 |         "@types/react-dom": "*",
2022 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2023 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2024 |       },
2025 |       "peerDependenciesMeta": {
2026 |         "@types/react": {
2027 |           "optional": true
2028 |         },
2029 |         "@types/react-dom": {
2030 |           "optional": true
2031 |         }
2032 |       }
2033 |     },
2034 |     "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-slot": {
2035 |       "version": "1.1.1",
2036 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.1.1.tgz",
2037 |       "integrity": "sha512-RApLLOcINYJA+dMVbOju7MYv1Mb2EBp2nH4HdDzXTSyaR5optlm6Otrz1euW3HbdOR8UmmFK06TD+A9frYWv+g==",
2038 |       "dependencies": {
2039 |         "@radix-ui/react-compose-refs": "1.1.1"
2040 |       },
2041 |       "peerDependencies": {
2042 |         "@types/react": "*",
2043 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2044 |       },
2045 |       "peerDependenciesMeta": {
2046 |         "@types/react": {
2047 |           "optional": true
2048 |         }
2049 |       }
2050 |     },
2051 |     "node_modules/@radix-ui/react-direction": {
2052 |       "version": "1.1.0",
2053 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-direction/-/react-direction-1.1.0.tgz",
2054 |       "integrity": "sha512-BUuBvgThEiAXh2DWu93XsT+a3aWrGqolGlqqw5VU1kG7p/ZH2cuDlM1sRLNnY3QcBS69UIz2mcKhMxDsdewhjg==",
2055 |       "license": "MIT",
2056 |       "peerDependencies": {
2057 |         "@types/react": "*",
2058 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2059 |       },
2060 |       "peerDependenciesMeta": {
2061 |         "@types/react": {
2062 |           "optional": true
2063 |         }
2064 |       }
2065 |     },
2066 |     "node_modules/@radix-ui/react-dismissable-layer": {
2067 |       "version": "1.1.1",
2068 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.1.1.tgz",
2069 |       "integrity": "sha512-QSxg29lfr/xcev6kSz7MAlmDnzbP1eI/Dwn3Tp1ip0KT5CUELsxkekFEMVBEoykI3oV39hKT4TKZzBNMbcTZYQ==",
2070 |       "license": "MIT",
2071 |       "dependencies": {
2072 |         "@radix-ui/primitive": "1.1.0",
2073 |         "@radix-ui/react-compose-refs": "1.1.0",
2074 |         "@radix-ui/react-primitive": "2.0.0",
2075 |         "@radix-ui/react-use-callback-ref": "1.1.0",
2076 |         "@radix-ui/react-use-escape-keydown": "1.1.0"
2077 |       },
2078 |       "peerDependencies": {
2079 |         "@types/react": "*",
2080 |         "@types/react-dom": "*",
2081 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2082 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2083 |       },
2084 |       "peerDependenciesMeta": {
2085 |         "@types/react": {
2086 |           "optional": true
2087 |         },
2088 |         "@types/react-dom": {
2089 |           "optional": true
2090 |         }
2091 |       }
2092 |     },
2093 |     "node_modules/@radix-ui/react-focus-guards": {
2094 |       "version": "1.1.1",
2095 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-guards/-/react-focus-guards-1.1.1.tgz",
2096 |       "integrity": "sha512-pSIwfrT1a6sIoDASCSpFwOasEwKTZWDw/iBdtnqKO7v6FeOzYJ7U53cPzYFVR3geGGXgVHaH+CdngrrAzqUGxg==",
2097 |       "license": "MIT",
2098 |       "peerDependencies": {
2099 |         "@types/react": "*",
2100 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2101 |       },
2102 |       "peerDependenciesMeta": {
2103 |         "@types/react": {
2104 |           "optional": true
2105 |         }
2106 |       }
2107 |     },
2108 |     "node_modules/@radix-ui/react-focus-scope": {
2109 |       "version": "1.1.0",
2110 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.1.0.tgz",
2111 |       "integrity": "sha512-200UD8zylvEyL8Bx+z76RJnASR2gRMuxlgFCPAe/Q/679a/r0eK3MBVYMb7vZODZcffZBdob1EGnky78xmVvcA==",
2112 |       "license": "MIT",
2113 |       "dependencies": {
2114 |         "@radix-ui/react-compose-refs": "1.1.0",
2115 |         "@radix-ui/react-primitive": "2.0.0",
2116 |         "@radix-ui/react-use-callback-ref": "1.1.0"
2117 |       },
2118 |       "peerDependencies": {
2119 |         "@types/react": "*",
2120 |         "@types/react-dom": "*",
2121 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2122 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2123 |       },
2124 |       "peerDependenciesMeta": {
2125 |         "@types/react": {
2126 |           "optional": true
2127 |         },
2128 |         "@types/react-dom": {
2129 |           "optional": true
2130 |         }
2131 |       }
2132 |     },
2133 |     "node_modules/@radix-ui/react-icons": {
2134 |       "version": "1.3.2",
2135 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-icons/-/react-icons-1.3.2.tgz",
2136 |       "integrity": "sha512-fyQIhGDhzfc9pK2kH6Pl9c4BDJGfMkPqkyIgYDthyNYoNg3wVhoJMMh19WS4Up/1KMPFVpNsT2q3WmXn2N1m6g==",
2137 |       "license": "MIT",
2138 |       "peerDependencies": {
2139 |         "react": "^16.x || ^17.x || ^18.x || ^19.0.0 || ^19.0.0-rc"
2140 |       }
2141 |     },
2142 |     "node_modules/@radix-ui/react-id": {
2143 |       "version": "1.1.0",
2144 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.0.tgz",
2145 |       "integrity": "sha512-EJUrI8yYh7WOjNOqpoJaf1jlFIH2LvtgAl+YcFqNCa+4hj64ZXmPkAKOFs/ukjz3byN6bdb/AVUqHkI8/uWWMA==",
2146 |       "license": "MIT",
2147 |       "dependencies": {
2148 |         "@radix-ui/react-use-layout-effect": "1.1.0"
2149 |       },
2150 |       "peerDependencies": {
2151 |         "@types/react": "*",
2152 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2153 |       },
2154 |       "peerDependenciesMeta": {
2155 |         "@types/react": {
2156 |           "optional": true
2157 |         }
2158 |       }
2159 |     },
2160 |     "node_modules/@radix-ui/react-label": {
2161 |       "version": "2.1.0",
2162 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-label/-/react-label-2.1.0.tgz",
2163 |       "integrity": "sha512-peLblDlFw/ngk3UWq0VnYaOLy6agTZZ+MUO/WhVfm14vJGML+xH4FAl2XQGLqdefjNb7ApRg6Yn7U42ZhmYXdw==",
2164 |       "license": "MIT",
2165 |       "dependencies": {
2166 |         "@radix-ui/react-primitive": "2.0.0"
2167 |       },
2168 |       "peerDependencies": {
2169 |         "@types/react": "*",
2170 |         "@types/react-dom": "*",
2171 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2172 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2173 |       },
2174 |       "peerDependenciesMeta": {
2175 |         "@types/react": {
2176 |           "optional": true
2177 |         },
2178 |         "@types/react-dom": {
2179 |           "optional": true
2180 |         }
2181 |       }
2182 |     },
2183 |     "node_modules/@radix-ui/react-popover": {
2184 |       "version": "1.1.3",
2185 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-popover/-/react-popover-1.1.3.tgz",
2186 |       "integrity": "sha512-MBDKFwRe6fi0LT8m/Jl4V8J3WbS/UfXJtsgg8Ym5w5AyPG3XfHH4zhBp1P8HmZK83T8J7UzVm6/JpDE3WMl1Dw==",
2187 |       "dependencies": {
2188 |         "@radix-ui/primitive": "1.1.1",
2189 |         "@radix-ui/react-compose-refs": "1.1.1",
2190 |         "@radix-ui/react-context": "1.1.1",
2191 |         "@radix-ui/react-dismissable-layer": "1.1.2",
2192 |         "@radix-ui/react-focus-guards": "1.1.1",
2193 |         "@radix-ui/react-focus-scope": "1.1.1",
2194 |         "@radix-ui/react-id": "1.1.0",
2195 |         "@radix-ui/react-popper": "1.2.1",
2196 |         "@radix-ui/react-portal": "1.1.3",
2197 |         "@radix-ui/react-presence": "1.1.2",
2198 |         "@radix-ui/react-primitive": "2.0.1",
2199 |         "@radix-ui/react-slot": "1.1.1",
2200 |         "@radix-ui/react-use-controllable-state": "1.1.0",
2201 |         "aria-hidden": "^1.1.1",
2202 |         "react-remove-scroll": "2.6.0"
2203 |       },
2204 |       "peerDependencies": {
2205 |         "@types/react": "*",
2206 |         "@types/react-dom": "*",
2207 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2208 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2209 |       },
2210 |       "peerDependenciesMeta": {
2211 |         "@types/react": {
2212 |           "optional": true
2213 |         },
2214 |         "@types/react-dom": {
2215 |           "optional": true
2216 |         }
2217 |       }
2218 |     },
2219 |     "node_modules/@radix-ui/react-popover/node_modules/@radix-ui/primitive": {
2220 |       "version": "1.1.1",
2221 |       "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.1.tgz",
2222 |       "integrity": "sha512-SJ31y+Q/zAyShtXJc8x83i9TYdbAfHZ++tUZnvjJJqFjzsdUnKsxPL6IEtBlxKkU7yzer//GQtZSV4GbldL3YA=="
2223 |     },
2224 |     "node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-arrow": {
2225 |       "version": "1.1.1",
2226 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-arrow/-/react-arrow-1.1.1.tgz",
2227 |       "integrity": "sha512-NaVpZfmv8SKeZbn4ijN2V3jlHA9ngBG16VnIIm22nUR0Yk8KUALyBxT3KYEUnNuch9sTE8UTsS3whzBgKOL30w==",
2228 |       "dependencies": {
2229 |         "@radix-ui/react-primitive": "2.0.1"
2230 |       },
2231 |       "peerDependencies": {
2232 |         "@types/react": "*",
2233 |         "@types/react-dom": "*",
2234 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2235 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2236 |       },
2237 |       "peerDependenciesMeta": {
2238 |         "@types/react": {
2239 |           "optional": true
2240 |         },
2241 |         "@types/react-dom": {
2242 |           "optional": true
2243 |         }
2244 |       }
2245 |     },
2246 |     "node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-compose-refs": {
2247 |       "version": "1.1.1",
2248 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.1.tgz",
2249 |       "integrity": "sha512-Y9VzoRDSJtgFMUCoiZBDVo084VQ5hfpXxVE+NgkdNsjiDBByiImMZKKhxMwCbdHvhlENG6a833CbFkOQvTricw==",
2250 |       "peerDependencies": {
2251 |         "@types/react": "*",
2252 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2253 |       },
2254 |       "peerDependenciesMeta": {
2255 |         "@types/react": {
2256 |           "optional": true
2257 |         }
2258 |       }
2259 |     },
2260 |     "node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-dismissable-layer": {
2261 |       "version": "1.1.2",
2262 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.1.2.tgz",
2263 |       "integrity": "sha512-kEHnlhv7wUggvhuJPkyw4qspXLJOdYoAP4dO2c8ngGuXTq1w/HZp1YeVB+NQ2KbH1iEG+pvOCGYSqh9HZOz6hg==",
2264 |       "dependencies": {
2265 |         "@radix-ui/primitive": "1.1.1",
2266 |         "@radix-ui/react-compose-refs": "1.1.1",
2267 |         "@radix-ui/react-primitive": "2.0.1",
2268 |         "@radix-ui/react-use-callback-ref": "1.1.0",
2269 |         "@radix-ui/react-use-escape-keydown": "1.1.0"
2270 |       },
2271 |       "peerDependencies": {
2272 |         "@types/react": "*",
2273 |         "@types/react-dom": "*",
2274 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2275 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2276 |       },
2277 |       "peerDependenciesMeta": {
2278 |         "@types/react": {
2279 |           "optional": true
2280 |         },
2281 |         "@types/react-dom": {
2282 |           "optional": true
2283 |         }
2284 |       }
2285 |     },
2286 |     "node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-focus-scope": {
2287 |       "version": "1.1.1",
2288 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.1.1.tgz",
2289 |       "integrity": "sha512-01omzJAYRxXdG2/he/+xy+c8a8gCydoQ1yOxnWNcRhrrBW5W+RQJ22EK1SaO8tb3WoUsuEw7mJjBozPzihDFjA==",
2290 |       "dependencies": {
2291 |         "@radix-ui/react-compose-refs": "1.1.1",
2292 |         "@radix-ui/react-primitive": "2.0.1",
2293 |         "@radix-ui/react-use-callback-ref": "1.1.0"
2294 |       },
2295 |       "peerDependencies": {
2296 |         "@types/react": "*",
2297 |         "@types/react-dom": "*",
2298 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2299 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2300 |       },
2301 |       "peerDependenciesMeta": {
2302 |         "@types/react": {
2303 |           "optional": true
2304 |         },
2305 |         "@types/react-dom": {
2306 |           "optional": true
2307 |         }
2308 |       }
2309 |     },
2310 |     "node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-popper": {
2311 |       "version": "1.2.1",
2312 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-popper/-/react-popper-1.2.1.tgz",
2313 |       "integrity": "sha512-3kn5Me69L+jv82EKRuQCXdYyf1DqHwD2U/sxoNgBGCB7K9TRc3bQamQ+5EPM9EvyPdli0W41sROd+ZU1dTCztw==",
2314 |       "dependencies": {
2315 |         "@floating-ui/react-dom": "^2.0.0",
2316 |         "@radix-ui/react-arrow": "1.1.1",
2317 |         "@radix-ui/react-compose-refs": "1.1.1",
2318 |         "@radix-ui/react-context": "1.1.1",
2319 |         "@radix-ui/react-primitive": "2.0.1",
2320 |         "@radix-ui/react-use-callback-ref": "1.1.0",
2321 |         "@radix-ui/react-use-layout-effect": "1.1.0",
2322 |         "@radix-ui/react-use-rect": "1.1.0",
2323 |         "@radix-ui/react-use-size": "1.1.0",
2324 |         "@radix-ui/rect": "1.1.0"
2325 |       },
2326 |       "peerDependencies": {
2327 |         "@types/react": "*",
2328 |         "@types/react-dom": "*",
2329 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2330 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2331 |       },
2332 |       "peerDependenciesMeta": {
2333 |         "@types/react": {
2334 |           "optional": true
2335 |         },
2336 |         "@types/react-dom": {
2337 |           "optional": true
2338 |         }
2339 |       }
2340 |     },
2341 |     "node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-portal": {
2342 |       "version": "1.1.3",
2343 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.1.3.tgz",
2344 |       "integrity": "sha512-NciRqhXnGojhT93RPyDaMPfLH3ZSl4jjIFbZQ1b/vxvZEdHsBZ49wP9w8L3HzUQwep01LcWtkUvm0OVB5JAHTw==",
2345 |       "dependencies": {
2346 |         "@radix-ui/react-primitive": "2.0.1",
2347 |         "@radix-ui/react-use-layout-effect": "1.1.0"
2348 |       },
2349 |       "peerDependencies": {
2350 |         "@types/react": "*",
2351 |         "@types/react-dom": "*",
2352 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2353 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2354 |       },
2355 |       "peerDependenciesMeta": {
2356 |         "@types/react": {
2357 |           "optional": true
2358 |         },
2359 |         "@types/react-dom": {
2360 |           "optional": true
2361 |         }
2362 |       }
2363 |     },
2364 |     "node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-presence": {
2365 |       "version": "1.1.2",
2366 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.2.tgz",
2367 |       "integrity": "sha512-18TFr80t5EVgL9x1SwF/YGtfG+l0BS0PRAlCWBDoBEiDQjeKgnNZRVJp/oVBl24sr3Gbfwc/Qpj4OcWTQMsAEg==",
2368 |       "dependencies": {
2369 |         "@radix-ui/react-compose-refs": "1.1.1",
2370 |         "@radix-ui/react-use-layout-effect": "1.1.0"
2371 |       },
2372 |       "peerDependencies": {
2373 |         "@types/react": "*",
2374 |         "@types/react-dom": "*",
2375 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2376 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2377 |       },
2378 |       "peerDependenciesMeta": {
2379 |         "@types/react": {
2380 |           "optional": true
2381 |         },
2382 |         "@types/react-dom": {
2383 |           "optional": true
2384 |         }
2385 |       }
2386 |     },
2387 |     "node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-primitive": {
2388 |       "version": "2.0.1",
2389 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.0.1.tgz",
2390 |       "integrity": "sha512-sHCWTtxwNn3L3fH8qAfnF3WbUZycW93SM1j3NFDzXBiz8D6F5UTTy8G1+WFEaiCdvCVRJWj6N2R4Xq6HdiHmDg==",
2391 |       "dependencies": {
2392 |         "@radix-ui/react-slot": "1.1.1"
2393 |       },
2394 |       "peerDependencies": {
2395 |         "@types/react": "*",
2396 |         "@types/react-dom": "*",
2397 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2398 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2399 |       },
2400 |       "peerDependenciesMeta": {
2401 |         "@types/react": {
2402 |           "optional": true
2403 |         },
2404 |         "@types/react-dom": {
2405 |           "optional": true
2406 |         }
2407 |       }
2408 |     },
2409 |     "node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-slot": {
2410 |       "version": "1.1.1",
2411 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.1.1.tgz",
2412 |       "integrity": "sha512-RApLLOcINYJA+dMVbOju7MYv1Mb2EBp2nH4HdDzXTSyaR5optlm6Otrz1euW3HbdOR8UmmFK06TD+A9frYWv+g==",
2413 |       "dependencies": {
2414 |         "@radix-ui/react-compose-refs": "1.1.1"
2415 |       },
2416 |       "peerDependencies": {
2417 |         "@types/react": "*",
2418 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2419 |       },
2420 |       "peerDependenciesMeta": {
2421 |         "@types/react": {
2422 |           "optional": true
2423 |         }
2424 |       }
2425 |     },
2426 |     "node_modules/@radix-ui/react-popper": {
2427 |       "version": "1.2.0",
2428 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-popper/-/react-popper-1.2.0.tgz",
2429 |       "integrity": "sha512-ZnRMshKF43aBxVWPWvbj21+7TQCvhuULWJ4gNIKYpRlQt5xGRhLx66tMp8pya2UkGHTSlhpXwmjqltDYHhw7Vg==",
2430 |       "license": "MIT",
2431 |       "dependencies": {
2432 |         "@floating-ui/react-dom": "^2.0.0",
2433 |         "@radix-ui/react-arrow": "1.1.0",
2434 |         "@radix-ui/react-compose-refs": "1.1.0",
2435 |         "@radix-ui/react-context": "1.1.0",
2436 |         "@radix-ui/react-primitive": "2.0.0",
2437 |         "@radix-ui/react-use-callback-ref": "1.1.0",
2438 |         "@radix-ui/react-use-layout-effect": "1.1.0",
2439 |         "@radix-ui/react-use-rect": "1.1.0",
2440 |         "@radix-ui/react-use-size": "1.1.0",
2441 |         "@radix-ui/rect": "1.1.0"
2442 |       },
2443 |       "peerDependencies": {
2444 |         "@types/react": "*",
2445 |         "@types/react-dom": "*",
2446 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2447 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2448 |       },
2449 |       "peerDependenciesMeta": {
2450 |         "@types/react": {
2451 |           "optional": true
2452 |         },
2453 |         "@types/react-dom": {
2454 |           "optional": true
2455 |         }
2456 |       }
2457 |     },
2458 |     "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-context": {
2459 |       "version": "1.1.0",
2460 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.0.tgz",
2461 |       "integrity": "sha512-OKrckBy+sMEgYM/sMmqmErVn0kZqrHPJze+Ql3DzYsDDp0hl0L62nx/2122/Bvps1qz645jlcu2tD9lrRSdf8A==",
2462 |       "license": "MIT",
2463 |       "peerDependencies": {
2464 |         "@types/react": "*",
2465 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2466 |       },
2467 |       "peerDependenciesMeta": {
2468 |         "@types/react": {
2469 |           "optional": true
2470 |         }
2471 |       }
2472 |     },
2473 |     "node_modules/@radix-ui/react-portal": {
2474 |       "version": "1.1.2",
2475 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.1.2.tgz",
2476 |       "integrity": "sha512-WeDYLGPxJb/5EGBoedyJbT0MpoULmwnIPMJMSldkuiMsBAv7N1cRdsTWZWht9vpPOiN3qyiGAtbK2is47/uMFg==",
2477 |       "license": "MIT",
2478 |       "dependencies": {
2479 |         "@radix-ui/react-primitive": "2.0.0",
2480 |         "@radix-ui/react-use-layout-effect": "1.1.0"
2481 |       },
2482 |       "peerDependencies": {
2483 |         "@types/react": "*",
2484 |         "@types/react-dom": "*",
2485 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2486 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2487 |       },
2488 |       "peerDependenciesMeta": {
2489 |         "@types/react": {
2490 |           "optional": true
2491 |         },
2492 |         "@types/react-dom": {
2493 |           "optional": true
2494 |         }
2495 |       }
2496 |     },
2497 |     "node_modules/@radix-ui/react-presence": {
2498 |       "version": "1.1.1",
2499 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.1.tgz",
2500 |       "integrity": "sha512-IeFXVi4YS1K0wVZzXNrbaaUvIJ3qdY+/Ih4eHFhWA9SwGR9UDX7Ck8abvL57C4cv3wwMvUE0OG69Qc3NCcTe/A==",
2501 |       "license": "MIT",
2502 |       "dependencies": {
2503 |         "@radix-ui/react-compose-refs": "1.1.0",
2504 |         "@radix-ui/react-use-layout-effect": "1.1.0"
2505 |       },
2506 |       "peerDependencies": {
2507 |         "@types/react": "*",
2508 |         "@types/react-dom": "*",
2509 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2510 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2511 |       },
2512 |       "peerDependenciesMeta": {
2513 |         "@types/react": {
2514 |           "optional": true
2515 |         },
2516 |         "@types/react-dom": {
2517 |           "optional": true
2518 |         }
2519 |       }
2520 |     },
2521 |     "node_modules/@radix-ui/react-primitive": {
2522 |       "version": "2.0.0",
2523 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.0.0.tgz",
2524 |       "integrity": "sha512-ZSpFm0/uHa8zTvKBDjLFWLo8dkr4MBsiDLz0g3gMUwqgLHz9rTaRRGYDgvZPtBJgYCBKXkS9fzmoySgr8CO6Cw==",
2525 |       "license": "MIT",
2526 |       "dependencies": {
2527 |         "@radix-ui/react-slot": "1.1.0"
2528 |       },
2529 |       "peerDependencies": {
2530 |         "@types/react": "*",
2531 |         "@types/react-dom": "*",
2532 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2533 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2534 |       },
2535 |       "peerDependenciesMeta": {
2536 |         "@types/react": {
2537 |           "optional": true
2538 |         },
2539 |         "@types/react-dom": {
2540 |           "optional": true
2541 |         }
2542 |       }
2543 |     },
2544 |     "node_modules/@radix-ui/react-roving-focus": {
2545 |       "version": "1.1.0",
2546 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-roving-focus/-/react-roving-focus-1.1.0.tgz",
2547 |       "integrity": "sha512-EA6AMGeq9AEeQDeSH0aZgG198qkfHSbvWTf1HvoDmOB5bBG/qTxjYMWUKMnYiV6J/iP/J8MEFSuB2zRU2n7ODA==",
2548 |       "license": "MIT",
2549 |       "dependencies": {
2550 |         "@radix-ui/primitive": "1.1.0",
2551 |         "@radix-ui/react-collection": "1.1.0",
2552 |         "@radix-ui/react-compose-refs": "1.1.0",
2553 |         "@radix-ui/react-context": "1.1.0",
2554 |         "@radix-ui/react-direction": "1.1.0",
2555 |         "@radix-ui/react-id": "1.1.0",
2556 |         "@radix-ui/react-primitive": "2.0.0",
2557 |         "@radix-ui/react-use-callback-ref": "1.1.0",
2558 |         "@radix-ui/react-use-controllable-state": "1.1.0"
2559 |       },
2560 |       "peerDependencies": {
2561 |         "@types/react": "*",
2562 |         "@types/react-dom": "*",
2563 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2564 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2565 |       },
2566 |       "peerDependenciesMeta": {
2567 |         "@types/react": {
2568 |           "optional": true
2569 |         },
2570 |         "@types/react-dom": {
2571 |           "optional": true
2572 |         }
2573 |       }
2574 |     },
2575 |     "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-context": {
2576 |       "version": "1.1.0",
2577 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.0.tgz",
2578 |       "integrity": "sha512-OKrckBy+sMEgYM/sMmqmErVn0kZqrHPJze+Ql3DzYsDDp0hl0L62nx/2122/Bvps1qz645jlcu2tD9lrRSdf8A==",
2579 |       "license": "MIT",
2580 |       "peerDependencies": {
2581 |         "@types/react": "*",
2582 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2583 |       },
2584 |       "peerDependenciesMeta": {
2585 |         "@types/react": {
2586 |           "optional": true
2587 |         }
2588 |       }
2589 |     },
2590 |     "node_modules/@radix-ui/react-select": {
2591 |       "version": "2.1.2",
2592 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-select/-/react-select-2.1.2.tgz",
2593 |       "integrity": "sha512-rZJtWmorC7dFRi0owDmoijm6nSJH1tVw64QGiNIZ9PNLyBDtG+iAq+XGsya052At4BfarzY/Dhv9wrrUr6IMZA==",
2594 |       "license": "MIT",
2595 |       "dependencies": {
2596 |         "@radix-ui/number": "1.1.0",
2597 |         "@radix-ui/primitive": "1.1.0",
2598 |         "@radix-ui/react-collection": "1.1.0",
2599 |         "@radix-ui/react-compose-refs": "1.1.0",
2600 |         "@radix-ui/react-context": "1.1.1",
2601 |         "@radix-ui/react-direction": "1.1.0",
2602 |         "@radix-ui/react-dismissable-layer": "1.1.1",
2603 |         "@radix-ui/react-focus-guards": "1.1.1",
2604 |         "@radix-ui/react-focus-scope": "1.1.0",
2605 |         "@radix-ui/react-id": "1.1.0",
2606 |         "@radix-ui/react-popper": "1.2.0",
2607 |         "@radix-ui/react-portal": "1.1.2",
2608 |         "@radix-ui/react-primitive": "2.0.0",
2609 |         "@radix-ui/react-slot": "1.1.0",
2610 |         "@radix-ui/react-use-callback-ref": "1.1.0",
2611 |         "@radix-ui/react-use-controllable-state": "1.1.0",
2612 |         "@radix-ui/react-use-layout-effect": "1.1.0",
2613 |         "@radix-ui/react-use-previous": "1.1.0",
2614 |         "@radix-ui/react-visually-hidden": "1.1.0",
2615 |         "aria-hidden": "^1.1.1",
2616 |         "react-remove-scroll": "2.6.0"
2617 |       },
2618 |       "peerDependencies": {
2619 |         "@types/react": "*",
2620 |         "@types/react-dom": "*",
2621 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2622 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2623 |       },
2624 |       "peerDependenciesMeta": {
2625 |         "@types/react": {
2626 |           "optional": true
2627 |         },
2628 |         "@types/react-dom": {
2629 |           "optional": true
2630 |         }
2631 |       }
2632 |     },
2633 |     "node_modules/@radix-ui/react-slot": {
2634 |       "version": "1.1.0",
2635 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.1.0.tgz",
2636 |       "integrity": "sha512-FUCf5XMfmW4dtYl69pdS4DbxKy8nj4M7SafBgPllysxmdachynNflAdp/gCsnYWNDnge6tI9onzMp5ARYc1KNw==",
2637 |       "license": "MIT",
2638 |       "dependencies": {
2639 |         "@radix-ui/react-compose-refs": "1.1.0"
2640 |       },
2641 |       "peerDependencies": {
2642 |         "@types/react": "*",
2643 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2644 |       },
2645 |       "peerDependenciesMeta": {
2646 |         "@types/react": {
2647 |           "optional": true
2648 |         }
2649 |       }
2650 |     },
2651 |     "node_modules/@radix-ui/react-tabs": {
2652 |       "version": "1.1.1",
2653 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-tabs/-/react-tabs-1.1.1.tgz",
2654 |       "integrity": "sha512-3GBUDmP2DvzmtYLMsHmpA1GtR46ZDZ+OreXM/N+kkQJOPIgytFWWTfDQmBQKBvaFS0Vno0FktdbVzN28KGrMdw==",
2655 |       "license": "MIT",
2656 |       "dependencies": {
2657 |         "@radix-ui/primitive": "1.1.0",
2658 |         "@radix-ui/react-context": "1.1.1",
2659 |         "@radix-ui/react-direction": "1.1.0",
2660 |         "@radix-ui/react-id": "1.1.0",
2661 |         "@radix-ui/react-presence": "1.1.1",
2662 |         "@radix-ui/react-primitive": "2.0.0",
2663 |         "@radix-ui/react-roving-focus": "1.1.0",
2664 |         "@radix-ui/react-use-controllable-state": "1.1.0"
2665 |       },
2666 |       "peerDependencies": {
2667 |         "@types/react": "*",
2668 |         "@types/react-dom": "*",
2669 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2670 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2671 |       },
2672 |       "peerDependenciesMeta": {
2673 |         "@types/react": {
2674 |           "optional": true
2675 |         },
2676 |         "@types/react-dom": {
2677 |           "optional": true
2678 |         }
2679 |       }
2680 |     },
2681 |     "node_modules/@radix-ui/react-use-callback-ref": {
2682 |       "version": "1.1.0",
2683 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-use-callback-ref/-/react-use-callback-ref-1.1.0.tgz",
2684 |       "integrity": "sha512-CasTfvsy+frcFkbXtSJ2Zu9JHpN8TYKxkgJGWbjiZhFivxaeW7rMeZt7QELGVLaYVfFMsKHjb7Ak0nMEe+2Vfw==",
2685 |       "license": "MIT",
2686 |       "peerDependencies": {
2687 |         "@types/react": "*",
2688 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2689 |       },
2690 |       "peerDependenciesMeta": {
2691 |         "@types/react": {
2692 |           "optional": true
2693 |         }
2694 |       }
2695 |     },
2696 |     "node_modules/@radix-ui/react-use-controllable-state": {
2697 |       "version": "1.1.0",
2698 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.1.0.tgz",
2699 |       "integrity": "sha512-MtfMVJiSr2NjzS0Aa90NPTnvTSg6C/JLCV7ma0W6+OMV78vd8OyRpID+Ng9LxzsPbLeuBnWBA1Nq30AtBIDChw==",
2700 |       "license": "MIT",
2701 |       "dependencies": {
2702 |         "@radix-ui/react-use-callback-ref": "1.1.0"
2703 |       },
2704 |       "peerDependencies": {
2705 |         "@types/react": "*",
2706 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2707 |       },
2708 |       "peerDependenciesMeta": {
2709 |         "@types/react": {
2710 |           "optional": true
2711 |         }
2712 |       }
2713 |     },
2714 |     "node_modules/@radix-ui/react-use-escape-keydown": {
2715 |       "version": "1.1.0",
2716 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-use-escape-keydown/-/react-use-escape-keydown-1.1.0.tgz",
2717 |       "integrity": "sha512-L7vwWlR1kTTQ3oh7g1O0CBF3YCyyTj8NmhLR+phShpyA50HCfBFKVJTpshm9PzLiKmehsrQzTYTpX9HvmC9rhw==",
2718 |       "license": "MIT",
2719 |       "dependencies": {
2720 |         "@radix-ui/react-use-callback-ref": "1.1.0"
2721 |       },
2722 |       "peerDependencies": {
2723 |         "@types/react": "*",
2724 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2725 |       },
2726 |       "peerDependenciesMeta": {
2727 |         "@types/react": {
2728 |           "optional": true
2729 |         }
2730 |       }
2731 |     },
2732 |     "node_modules/@radix-ui/react-use-layout-effect": {
2733 |       "version": "1.1.0",
2734 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.0.tgz",
2735 |       "integrity": "sha512-+FPE0rOdziWSrH9athwI1R0HDVbWlEhd+FR+aSDk4uWGmSJ9Z54sdZVDQPZAinJhJXwfT+qnj969mCsT2gfm5w==",
2736 |       "license": "MIT",
2737 |       "peerDependencies": {
2738 |         "@types/react": "*",
2739 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2740 |       },
2741 |       "peerDependenciesMeta": {
2742 |         "@types/react": {
2743 |           "optional": true
2744 |         }
2745 |       }
2746 |     },
2747 |     "node_modules/@radix-ui/react-use-previous": {
2748 |       "version": "1.1.0",
2749 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-use-previous/-/react-use-previous-1.1.0.tgz",
2750 |       "integrity": "sha512-Z/e78qg2YFnnXcW88A4JmTtm4ADckLno6F7OXotmkQfeuCVaKuYzqAATPhVzl3delXE7CxIV8shofPn3jPc5Og==",
2751 |       "license": "MIT",
2752 |       "peerDependencies": {
2753 |         "@types/react": "*",
2754 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2755 |       },
2756 |       "peerDependenciesMeta": {
2757 |         "@types/react": {
2758 |           "optional": true
2759 |         }
2760 |       }
2761 |     },
2762 |     "node_modules/@radix-ui/react-use-rect": {
2763 |       "version": "1.1.0",
2764 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-use-rect/-/react-use-rect-1.1.0.tgz",
2765 |       "integrity": "sha512-0Fmkebhr6PiseyZlYAOtLS+nb7jLmpqTrJyv61Pe68MKYW6OWdRE2kI70TaYY27u7H0lajqM3hSMMLFq18Z7nQ==",
2766 |       "license": "MIT",
2767 |       "dependencies": {
2768 |         "@radix-ui/rect": "1.1.0"
2769 |       },
2770 |       "peerDependencies": {
2771 |         "@types/react": "*",
2772 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2773 |       },
2774 |       "peerDependenciesMeta": {
2775 |         "@types/react": {
2776 |           "optional": true
2777 |         }
2778 |       }
2779 |     },
2780 |     "node_modules/@radix-ui/react-use-size": {
2781 |       "version": "1.1.0",
2782 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-use-size/-/react-use-size-1.1.0.tgz",
2783 |       "integrity": "sha512-XW3/vWuIXHa+2Uwcc2ABSfcCledmXhhQPlGbfcRXbiUQI5Icjcg19BGCZVKKInYbvUCut/ufbbLLPFC5cbb1hw==",
2784 |       "license": "MIT",
2785 |       "dependencies": {
2786 |         "@radix-ui/react-use-layout-effect": "1.1.0"
2787 |       },
2788 |       "peerDependencies": {
2789 |         "@types/react": "*",
2790 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2791 |       },
2792 |       "peerDependenciesMeta": {
2793 |         "@types/react": {
2794 |           "optional": true
2795 |         }
2796 |       }
2797 |     },
2798 |     "node_modules/@radix-ui/react-visually-hidden": {
2799 |       "version": "1.1.0",
2800 |       "resolved": "https://registry.npmjs.org/@radix-ui/react-visually-hidden/-/react-visually-hidden-1.1.0.tgz",
2801 |       "integrity": "sha512-N8MDZqtgCgG5S3aV60INAB475osJousYpZ4cTJ2cFbMpdHS5Y6loLTH8LPtkj2QN0x93J30HT/M3qJXM0+lyeQ==",
2802 |       "license": "MIT",
2803 |       "dependencies": {
2804 |         "@radix-ui/react-primitive": "2.0.0"
2805 |       },
2806 |       "peerDependencies": {
2807 |         "@types/react": "*",
2808 |         "@types/react-dom": "*",
2809 |         "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
2810 |         "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
2811 |       },
2812 |       "peerDependenciesMeta": {
2813 |         "@types/react": {
2814 |           "optional": true
2815 |         },
2816 |         "@types/react-dom": {
2817 |           "optional": true
2818 |         }
2819 |       }
2820 |     },
2821 |     "node_modules/@radix-ui/rect": {
2822 |       "version": "1.1.0",
2823 |       "resolved": "https://registry.npmjs.org/@radix-ui/rect/-/rect-1.1.0.tgz",
2824 |       "integrity": "sha512-A9+lCBZoaMJlVKcRBz2YByCG+Cp2t6nAnMnNba+XiWxnj6r4JUFqfsgwocMBZU9LPtdxC6wB56ySYpc7LQIoJg==",
2825 |       "license": "MIT"
2826 |     },
2827 |     "node_modules/@rollup/rollup-android-arm-eabi": {
2828 |       "version": "4.27.4",
2829 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.27.4.tgz",
2830 |       "integrity": "sha512-2Y3JT6f5MrQkICUyRVCw4oa0sutfAsgaSsb0Lmmy1Wi2y7X5vT9Euqw4gOsCyy0YfKURBg35nhUKZS4mDcfULw==",
2831 |       "cpu": [
2832 |         "arm"
2833 |       ],
2834 |       "dev": true,
2835 |       "license": "MIT",
2836 |       "optional": true,
2837 |       "os": [
2838 |         "android"
2839 |       ]
2840 |     },
2841 |     "node_modules/@rollup/rollup-android-arm64": {
2842 |       "version": "4.27.4",
2843 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.27.4.tgz",
2844 |       "integrity": "sha512-wzKRQXISyi9UdCVRqEd0H4cMpzvHYt1f/C3CoIjES6cG++RHKhrBj2+29nPF0IB5kpy9MS71vs07fvrNGAl/iA==",
2845 |       "cpu": [
2846 |         "arm64"
2847 |       ],
2848 |       "dev": true,
2849 |       "license": "MIT",
2850 |       "optional": true,
2851 |       "os": [
2852 |         "android"
2853 |       ]
2854 |     },
2855 |     "node_modules/@rollup/rollup-darwin-arm64": {
2856 |       "version": "4.27.4",
2857 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.27.4.tgz",
2858 |       "integrity": "sha512-PlNiRQapift4LNS8DPUHuDX/IdXiLjf8mc5vdEmUR0fF/pyy2qWwzdLjB+iZquGr8LuN4LnUoSEvKRwjSVYz3Q==",
2859 |       "cpu": [
2860 |         "arm64"
2861 |       ],
2862 |       "dev": true,
2863 |       "license": "MIT",
2864 |       "optional": true,
2865 |       "os": [
2866 |         "darwin"
2867 |       ]
2868 |     },
2869 |     "node_modules/@rollup/rollup-darwin-x64": {
2870 |       "version": "4.27.4",
2871 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.27.4.tgz",
2872 |       "integrity": "sha512-o9bH2dbdgBDJaXWJCDTNDYa171ACUdzpxSZt+u/AAeQ20Nk5x+IhA+zsGmrQtpkLiumRJEYef68gcpn2ooXhSQ==",
2873 |       "cpu": [
2874 |         "x64"
2875 |       ],
2876 |       "dev": true,
2877 |       "license": "MIT",
2878 |       "optional": true,
2879 |       "os": [
2880 |         "darwin"
2881 |       ]
2882 |     },
2883 |     "node_modules/@rollup/rollup-freebsd-arm64": {
2884 |       "version": "4.27.4",
2885 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.27.4.tgz",
2886 |       "integrity": "sha512-NBI2/i2hT9Q+HySSHTBh52da7isru4aAAo6qC3I7QFVsuhxi2gM8t/EI9EVcILiHLj1vfi+VGGPaLOUENn7pmw==",
2887 |       "cpu": [
2888 |         "arm64"
2889 |       ],
2890 |       "dev": true,
2891 |       "license": "MIT",
2892 |       "optional": true,
2893 |       "os": [
2894 |         "freebsd"
2895 |       ]
2896 |     },
2897 |     "node_modules/@rollup/rollup-freebsd-x64": {
2898 |       "version": "4.27.4",
2899 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.27.4.tgz",
2900 |       "integrity": "sha512-wYcC5ycW2zvqtDYrE7deary2P2UFmSh85PUpAx+dwTCO9uw3sgzD6Gv9n5X4vLaQKsrfTSZZ7Z7uynQozPVvWA==",
2901 |       "cpu": [
2902 |         "x64"
2903 |       ],
2904 |       "dev": true,
2905 |       "license": "MIT",
2906 |       "optional": true,
2907 |       "os": [
2908 |         "freebsd"
2909 |       ]
2910 |     },
2911 |     "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
2912 |       "version": "4.27.4",
2913 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.27.4.tgz",
2914 |       "integrity": "sha512-9OwUnK/xKw6DyRlgx8UizeqRFOfi9mf5TYCw1uolDaJSbUmBxP85DE6T4ouCMoN6pXw8ZoTeZCSEfSaYo+/s1w==",
2915 |       "cpu": [
2916 |         "arm"
2917 |       ],
2918 |       "dev": true,
2919 |       "license": "MIT",
2920 |       "optional": true,
2921 |       "os": [
2922 |         "linux"
2923 |       ]
2924 |     },
2925 |     "node_modules/@rollup/rollup-linux-arm-musleabihf": {
2926 |       "version": "4.27.4",
2927 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.27.4.tgz",
2928 |       "integrity": "sha512-Vgdo4fpuphS9V24WOV+KwkCVJ72u7idTgQaBoLRD0UxBAWTF9GWurJO9YD9yh00BzbkhpeXtm6na+MvJU7Z73A==",
2929 |       "cpu": [
2930 |         "arm"
2931 |       ],
2932 |       "dev": true,
2933 |       "license": "MIT",
2934 |       "optional": true,
2935 |       "os": [
2936 |         "linux"
2937 |       ]
2938 |     },
2939 |     "node_modules/@rollup/rollup-linux-arm64-gnu": {
2940 |       "version": "4.27.4",
2941 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.27.4.tgz",
2942 |       "integrity": "sha512-pleyNgyd1kkBkw2kOqlBx+0atfIIkkExOTiifoODo6qKDSpnc6WzUY5RhHdmTdIJXBdSnh6JknnYTtmQyobrVg==",
2943 |       "cpu": [
2944 |         "arm64"
2945 |       ],
2946 |       "dev": true,
2947 |       "license": "MIT",
2948 |       "optional": true,
2949 |       "os": [
2950 |         "linux"
2951 |       ]
2952 |     },
2953 |     "node_modules/@rollup/rollup-linux-arm64-musl": {
2954 |       "version": "4.27.4",
2955 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.27.4.tgz",
2956 |       "integrity": "sha512-caluiUXvUuVyCHr5DxL8ohaaFFzPGmgmMvwmqAITMpV/Q+tPoaHZ/PWa3t8B2WyoRcIIuu1hkaW5KkeTDNSnMA==",
2957 |       "cpu": [
2958 |         "arm64"
2959 |       ],
2960 |       "dev": true,
2961 |       "license": "MIT",
2962 |       "optional": true,
2963 |       "os": [
2964 |         "linux"
2965 |       ]
2966 |     },
2967 |     "node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
2968 |       "version": "4.27.4",
2969 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.27.4.tgz",
2970 |       "integrity": "sha512-FScrpHrO60hARyHh7s1zHE97u0KlT/RECzCKAdmI+LEoC1eDh/RDji9JgFqyO+wPDb86Oa/sXkily1+oi4FzJQ==",
2971 |       "cpu": [
2972 |         "ppc64"
2973 |       ],
2974 |       "dev": true,
2975 |       "license": "MIT",
2976 |       "optional": true,
2977 |       "os": [
2978 |         "linux"
2979 |       ]
2980 |     },
2981 |     "node_modules/@rollup/rollup-linux-riscv64-gnu": {
2982 |       "version": "4.27.4",
2983 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.27.4.tgz",
2984 |       "integrity": "sha512-qyyprhyGb7+RBfMPeww9FlHwKkCXdKHeGgSqmIXw9VSUtvyFZ6WZRtnxgbuz76FK7LyoN8t/eINRbPUcvXB5fw==",
2985 |       "cpu": [
2986 |         "riscv64"
2987 |       ],
2988 |       "dev": true,
2989 |       "license": "MIT",
2990 |       "optional": true,
2991 |       "os": [
2992 |         "linux"
2993 |       ]
2994 |     },
2995 |     "node_modules/@rollup/rollup-linux-s390x-gnu": {
2996 |       "version": "4.27.4",
2997 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.27.4.tgz",
2998 |       "integrity": "sha512-PFz+y2kb6tbh7m3A7nA9++eInGcDVZUACulf/KzDtovvdTizHpZaJty7Gp0lFwSQcrnebHOqxF1MaKZd7psVRg==",
2999 |       "cpu": [
3000 |         "s390x"
3001 |       ],
3002 |       "dev": true,
3003 |       "license": "MIT",
3004 |       "optional": true,
3005 |       "os": [
3006 |         "linux"
3007 |       ]
3008 |     },
3009 |     "node_modules/@rollup/rollup-linux-x64-gnu": {
3010 |       "version": "4.27.4",
3011 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.27.4.tgz",
3012 |       "integrity": "sha512-Ni8mMtfo+o/G7DVtweXXV/Ol2TFf63KYjTtoZ5f078AUgJTmaIJnj4JFU7TK/9SVWTaSJGxPi5zMDgK4w+Ez7Q==",
3013 |       "cpu": [
3014 |         "x64"
3015 |       ],
3016 |       "dev": true,
3017 |       "license": "MIT",
3018 |       "optional": true,
3019 |       "os": [
3020 |         "linux"
3021 |       ]
3022 |     },
3023 |     "node_modules/@rollup/rollup-linux-x64-musl": {
3024 |       "version": "4.27.4",
3025 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.27.4.tgz",
3026 |       "integrity": "sha512-5AeeAF1PB9TUzD+3cROzFTnAJAcVUGLuR8ng0E0WXGkYhp6RD6L+6szYVX+64Rs0r72019KHZS1ka1q+zU/wUw==",
3027 |       "cpu": [
3028 |         "x64"
3029 |       ],
3030 |       "dev": true,
3031 |       "license": "MIT",
3032 |       "optional": true,
3033 |       "os": [
3034 |         "linux"
3035 |       ]
3036 |     },
3037 |     "node_modules/@rollup/rollup-win32-arm64-msvc": {
3038 |       "version": "4.27.4",
3039 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.27.4.tgz",
3040 |       "integrity": "sha512-yOpVsA4K5qVwu2CaS3hHxluWIK5HQTjNV4tWjQXluMiiiu4pJj4BN98CvxohNCpcjMeTXk/ZMJBRbgRg8HBB6A==",
3041 |       "cpu": [
3042 |         "arm64"
3043 |       ],
3044 |       "dev": true,
3045 |       "license": "MIT",
3046 |       "optional": true,
3047 |       "os": [
3048 |         "win32"
3049 |       ]
3050 |     },
3051 |     "node_modules/@rollup/rollup-win32-ia32-msvc": {
3052 |       "version": "4.27.4",
3053 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.27.4.tgz",
3054 |       "integrity": "sha512-KtwEJOaHAVJlxV92rNYiG9JQwQAdhBlrjNRp7P9L8Cb4Rer3in+0A+IPhJC9y68WAi9H0sX4AiG2NTsVlmqJeQ==",
3055 |       "cpu": [
3056 |         "ia32"
3057 |       ],
3058 |       "dev": true,
3059 |       "license": "MIT",
3060 |       "optional": true,
3061 |       "os": [
3062 |         "win32"
3063 |       ]
3064 |     },
3065 |     "node_modules/@rollup/rollup-win32-x64-msvc": {
3066 |       "version": "4.27.4",
3067 |       "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.27.4.tgz",
3068 |       "integrity": "sha512-3j4jx1TppORdTAoBJRd+/wJRGCPC0ETWkXOecJ6PPZLj6SptXkrXcNqdj0oclbKML6FkQltdz7bBA3rUSirZug==",
3069 |       "cpu": [
3070 |         "x64"
3071 |       ],
3072 |       "dev": true,
3073 |       "license": "MIT",
3074 |       "optional": true,
3075 |       "os": [
3076 |         "win32"
3077 |       ]
3078 |     },
3079 |     "node_modules/@tsconfig/node10": {
3080 |       "version": "1.0.11",
3081 |       "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.11.tgz",
3082 |       "integrity": "sha512-DcRjDCujK/kCk/cUe8Xz8ZSpm8mS3mNNpta+jGCA6USEDfktlNvm1+IuZ9eTcDbNk41BHwpHHeW+N1lKCz4zOw==",
3083 |       "license": "MIT"
3084 |     },
3085 |     "node_modules/@tsconfig/node12": {
3086 |       "version": "1.0.11",
3087 |       "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
3088 |       "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
3089 |       "license": "MIT"
3090 |     },
3091 |     "node_modules/@tsconfig/node14": {
3092 |       "version": "1.0.3",
3093 |       "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
3094 |       "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
3095 |       "license": "MIT"
3096 |     },
3097 |     "node_modules/@tsconfig/node16": {
3098 |       "version": "1.0.4",
3099 |       "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
3100 |       "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
3101 |       "license": "MIT"
3102 |     },
3103 |     "node_modules/@types/babel__core": {
3104 |       "version": "7.20.5",
3105 |       "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
3106 |       "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
3107 |       "dev": true,
3108 |       "license": "MIT",
3109 |       "dependencies": {
3110 |         "@babel/parser": "^7.20.7",
3111 |         "@babel/types": "^7.20.7",
3112 |         "@types/babel__generator": "*",
3113 |         "@types/babel__template": "*",
3114 |         "@types/babel__traverse": "*"
3115 |       }
3116 |     },
3117 |     "node_modules/@types/babel__generator": {
3118 |       "version": "7.6.8",
3119 |       "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.8.tgz",
3120 |       "integrity": "sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==",
3121 |       "dev": true,
3122 |       "license": "MIT",
3123 |       "dependencies": {
3124 |         "@babel/types": "^7.0.0"
3125 |       }
3126 |     },
3127 |     "node_modules/@types/babel__template": {
3128 |       "version": "7.4.4",
3129 |       "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
3130 |       "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
3131 |       "dev": true,
3132 |       "license": "MIT",
3133 |       "dependencies": {
3134 |         "@babel/parser": "^7.1.0",
3135 |         "@babel/types": "^7.0.0"
3136 |       }
3137 |     },
3138 |     "node_modules/@types/babel__traverse": {
3139 |       "version": "7.20.6",
3140 |       "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.20.6.tgz",
3141 |       "integrity": "sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==",
3142 |       "dev": true,
3143 |       "license": "MIT",
3144 |       "dependencies": {
3145 |         "@babel/types": "^7.20.7"
3146 |       }
3147 |     },
3148 |     "node_modules/@types/body-parser": {
3149 |       "version": "1.19.5",
3150 |       "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.5.tgz",
3151 |       "integrity": "sha512-fB3Zu92ucau0iQ0JMCFQE7b/dv8Ot07NI3KaZIkIUNXq82k4eBAqUaneXfleGY9JWskeS9y+u0nXMyspcuQrCg==",
3152 |       "dev": true,
3153 |       "license": "MIT",
3154 |       "dependencies": {
3155 |         "@types/connect": "*",
3156 |         "@types/node": "*"
3157 |       }
3158 |     },
3159 |     "node_modules/@types/connect": {
3160 |       "version": "3.4.38",
3161 |       "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
3162 |       "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
3163 |       "dev": true,
3164 |       "license": "MIT",
3165 |       "dependencies": {
3166 |         "@types/node": "*"
3167 |       }
3168 |     },
3169 |     "node_modules/@types/cors": {
3170 |       "version": "2.8.17",
3171 |       "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.17.tgz",
3172 |       "integrity": "sha512-8CGDvrBj1zgo2qE+oS3pOCyYNqCPryMWY2bGfwA0dcfopWGgxs+78df0Rs3rc9THP4JkOhLsAa+15VdpAqkcUA==",
3173 |       "dev": true,
3174 |       "license": "MIT",
3175 |       "dependencies": {
3176 |         "@types/node": "*"
3177 |       }
3178 |     },
3179 |     "node_modules/@types/estree": {
3180 |       "version": "1.0.6",
3181 |       "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
3182 |       "integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
3183 |       "dev": true,
3184 |       "license": "MIT"
3185 |     },
3186 |     "node_modules/@types/express": {
3187 |       "version": "4.17.21",
3188 |       "resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.21.tgz",
3189 |       "integrity": "sha512-ejlPM315qwLpaQlQDTjPdsUFSc6ZsP4AN6AlWnogPjQ7CVi7PYF3YVz+CY3jE2pwYf7E/7HlDAN0rV2GxTG0HQ==",
3190 |       "dev": true,
3191 |       "license": "MIT",
3192 |       "dependencies": {
3193 |         "@types/body-parser": "*",
3194 |         "@types/express-serve-static-core": "^4.17.33",
3195 |         "@types/qs": "*",
3196 |         "@types/serve-static": "*"
3197 |       }
3198 |     },
3199 |     "node_modules/@types/express-serve-static-core": {
3200 |       "version": "4.19.6",
3201 |       "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.19.6.tgz",
3202 |       "integrity": "sha512-N4LZ2xG7DatVqhCZzOGb1Yi5lMbXSZcmdLDe9EzSndPV2HpWYWzRbaerl2n27irrm94EPpprqa8KpskPT085+A==",
3203 |       "dev": true,
3204 |       "license": "MIT",
3205 |       "dependencies": {
3206 |         "@types/node": "*",
3207 |         "@types/qs": "*",
3208 |         "@types/range-parser": "*",
3209 |         "@types/send": "*"
3210 |       }
3211 |     },
3212 |     "node_modules/@types/http-errors": {
3213 |       "version": "2.0.4",
3214 |       "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.4.tgz",
3215 |       "integrity": "sha512-D0CFMMtydbJAegzOyHjtiKPLlvnm3iTZyZRSZoLq2mRhDdmLfIWOCYPfQJ4cu2erKghU++QvjcUjp/5h7hESpA==",
3216 |       "dev": true,
3217 |       "license": "MIT"
3218 |     },
3219 |     "node_modules/@types/json-schema": {
3220 |       "version": "7.0.15",
3221 |       "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
3222 |       "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
3223 |       "dev": true,
3224 |       "license": "MIT"
3225 |     },
3226 |     "node_modules/@types/mime": {
3227 |       "version": "1.3.5",
3228 |       "resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz",
3229 |       "integrity": "sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w==",
3230 |       "dev": true,
3231 |       "license": "MIT"
3232 |     },
3233 |     "node_modules/@types/node": {
3234 |       "version": "22.10.0",
3235 |       "resolved": "https://registry.npmjs.org/@types/node/-/node-22.10.0.tgz",
3236 |       "integrity": "sha512-XC70cRZVElFHfIUB40FgZOBbgJYFKKMa5nb9lxcwYstFG/Mi+/Y0bGS+rs6Dmhmkpq4pnNiLiuZAbc02YCOnmA==",
3237 |       "license": "MIT",
3238 |       "dependencies": {
3239 |         "undici-types": "~6.20.0"
3240 |       }
3241 |     },
3242 |     "node_modules/@types/prismjs": {
3243 |       "version": "1.26.5",
3244 |       "resolved": "https://registry.npmjs.org/@types/prismjs/-/prismjs-1.26.5.tgz",
3245 |       "integrity": "sha512-AUZTa7hQ2KY5L7AmtSiqxlhWxb4ina0yd8hNbl4TWuqnv/pFP0nDMb3YrfSBf4hJVGLh2YEIBfKaBW/9UEl6IQ==",
3246 |       "license": "MIT"
3247 |     },
3248 |     "node_modules/@types/prop-types": {
3249 |       "version": "15.7.13",
3250 |       "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.13.tgz",
3251 |       "integrity": "sha512-hCZTSvwbzWGvhqxp/RqVqwU999pBf2vp7hzIjiYOsl8wqOmUxkQ6ddw1cV3l8811+kdUFus/q4d1Y3E3SyEifA==",
3252 |       "devOptional": true,
3253 |       "license": "MIT"
3254 |     },
3255 |     "node_modules/@types/qs": {
3256 |       "version": "6.9.17",
3257 |       "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.9.17.tgz",
3258 |       "integrity": "sha512-rX4/bPcfmvxHDv0XjfJELTTr+iB+tn032nPILqHm5wbthUUUuVtNGGqzhya9XUxjTP8Fpr0qYgSZZKxGY++svQ==",
3259 |       "dev": true,
3260 |       "license": "MIT"
3261 |     },
3262 |     "node_modules/@types/range-parser": {
3263 |       "version": "1.2.7",
3264 |       "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
3265 |       "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
3266 |       "dev": true,
3267 |       "license": "MIT"
3268 |     },
3269 |     "node_modules/@types/react": {
3270 |       "version": "18.3.12",
3271 |       "resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.12.tgz",
3272 |       "integrity": "sha512-D2wOSq/d6Agt28q7rSI3jhU7G6aiuzljDGZ2hTZHIkrTLUI+AF3WMeKkEZ9nN2fkBAlcktT6vcZjDFiIhMYEQw==",
3273 |       "devOptional": true,
3274 |       "license": "MIT",
3275 |       "dependencies": {
3276 |         "@types/prop-types": "*",
3277 |         "csstype": "^3.0.2"
3278 |       }
3279 |     },
3280 |     "node_modules/@types/react-dom": {
3281 |       "version": "18.3.1",
3282 |       "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.3.1.tgz",
3283 |       "integrity": "sha512-qW1Mfv8taImTthu4KoXgDfLuk4bydU6Q/TkADnDWWHwi4NX4BR+LWfTp2sVmTqRrsHvyDDTelgelxJ+SsejKKQ==",
3284 |       "devOptional": true,
3285 |       "license": "MIT",
3286 |       "dependencies": {
3287 |         "@types/react": "*"
3288 |       }
3289 |     },
3290 |     "node_modules/@types/send": {
3291 |       "version": "0.17.4",
3292 |       "resolved": "https://registry.npmjs.org/@types/send/-/send-0.17.4.tgz",
3293 |       "integrity": "sha512-x2EM6TJOybec7c52BX0ZspPodMsQUd5L6PRwOunVyVUhXiBSKf3AezDL8Dgvgt5o0UfKNfuA0eMLr2wLT4AiBA==",
3294 |       "dev": true,
3295 |       "license": "MIT",
3296 |       "dependencies": {
3297 |         "@types/mime": "^1",
3298 |         "@types/node": "*"
3299 |       }
3300 |     },
3301 |     "node_modules/@types/serve-handler": {
3302 |       "version": "6.1.4",
3303 |       "resolved": "https://registry.npmjs.org/@types/serve-handler/-/serve-handler-6.1.4.tgz",
3304 |       "integrity": "sha512-aXy58tNie0NkuSCY291xUxl0X+kGYy986l4kqW6Gi4kEXgr6Tx0fpSH7YwUSa5usPpG3s9DBeIR6hHcDtL2IvQ==",
3305 |       "dev": true,
3306 |       "license": "MIT",
3307 |       "dependencies": {
3308 |         "@types/node": "*"
3309 |       }
3310 |     },
3311 |     "node_modules/@types/serve-static": {
3312 |       "version": "1.15.7",
3313 |       "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.7.tgz",
3314 |       "integrity": "sha512-W8Ym+h8nhuRwaKPaDw34QUkwsGi6Rc4yYqvKFo5rm2FUEhCFbzVWrxXUxuKK8TASjWsysJY0nsmNCGhCOIsrOw==",
3315 |       "dev": true,
3316 |       "license": "MIT",
3317 |       "dependencies": {
3318 |         "@types/http-errors": "*",
3319 |         "@types/node": "*",
3320 |         "@types/send": "*"
3321 |       }
3322 |     },
3323 |     "node_modules/@types/shell-quote": {
3324 |       "version": "1.7.5",
3325 |       "resolved": "https://registry.npmjs.org/@types/shell-quote/-/shell-quote-1.7.5.tgz",
3326 |       "integrity": "sha512-+UE8GAGRPbJVQDdxi16dgadcBfQ+KG2vgZhV1+3A1XmHbmwcdwhCUwIdy+d3pAGrbvgRoVSjeI9vOWyq376Yzw==",
3327 |       "dev": true,
3328 |       "license": "MIT"
3329 |     },
3330 |     "node_modules/@types/ws": {
3331 |       "version": "8.5.13",
3332 |       "resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.5.13.tgz",
3333 |       "integrity": "sha512-osM/gWBTPKgHV8XkTunnegTRIsvF6owmf5w+JtAfOw472dptdm0dlGv4xCt6GwQRcC2XVOvvRE/0bAoQcL2QkA==",
3334 |       "dev": true,
3335 |       "license": "MIT",
3336 |       "dependencies": {
3337 |         "@types/node": "*"
3338 |       }
3339 |     },
3340 |     "node_modules/@typescript-eslint/eslint-plugin": {
3341 |       "version": "8.16.0",
3342 |       "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.16.0.tgz",
3343 |       "integrity": "sha512-5YTHKV8MYlyMI6BaEG7crQ9BhSc8RxzshOReKwZwRWN0+XvvTOm+L/UYLCYxFpfwYuAAqhxiq4yae0CMFwbL7Q==",
3344 |       "dev": true,
3345 |       "license": "MIT",
3346 |       "dependencies": {
3347 |         "@eslint-community/regexpp": "^4.10.0",
3348 |         "@typescript-eslint/scope-manager": "8.16.0",
3349 |         "@typescript-eslint/type-utils": "8.16.0",
3350 |         "@typescript-eslint/utils": "8.16.0",
3351 |         "@typescript-eslint/visitor-keys": "8.16.0",
3352 |         "graphemer": "^1.4.0",
3353 |         "ignore": "^5.3.1",
3354 |         "natural-compare": "^1.4.0",
3355 |         "ts-api-utils": "^1.3.0"
3356 |       },
3357 |       "engines": {
3358 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
3359 |       },
3360 |       "funding": {
3361 |         "type": "opencollective",
3362 |         "url": "https://opencollective.com/typescript-eslint"
3363 |       },
3364 |       "peerDependencies": {
3365 |         "@typescript-eslint/parser": "^8.0.0 || ^8.0.0-alpha.0",
3366 |         "eslint": "^8.57.0 || ^9.0.0"
3367 |       },
3368 |       "peerDependenciesMeta": {
3369 |         "typescript": {
3370 |           "optional": true
3371 |         }
3372 |       }
3373 |     },
3374 |     "node_modules/@typescript-eslint/parser": {
3375 |       "version": "8.16.0",
3376 |       "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.16.0.tgz",
3377 |       "integrity": "sha512-D7DbgGFtsqIPIFMPJwCad9Gfi/hC0PWErRRHFnaCWoEDYi5tQUDiJCTmGUbBiLzjqAck4KcXt9Ayj0CNlIrF+w==",
3378 |       "dev": true,
3379 |       "license": "BSD-2-Clause",
3380 |       "dependencies": {
3381 |         "@typescript-eslint/scope-manager": "8.16.0",
3382 |         "@typescript-eslint/types": "8.16.0",
3383 |         "@typescript-eslint/typescript-estree": "8.16.0",
3384 |         "@typescript-eslint/visitor-keys": "8.16.0",
3385 |         "debug": "^4.3.4"
3386 |       },
3387 |       "engines": {
3388 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
3389 |       },
3390 |       "funding": {
3391 |         "type": "opencollective",
3392 |         "url": "https://opencollective.com/typescript-eslint"
3393 |       },
3394 |       "peerDependencies": {
3395 |         "eslint": "^8.57.0 || ^9.0.0"
3396 |       },
3397 |       "peerDependenciesMeta": {
3398 |         "typescript": {
3399 |           "optional": true
3400 |         }
3401 |       }
3402 |     },
3403 |     "node_modules/@typescript-eslint/scope-manager": {
3404 |       "version": "8.16.0",
3405 |       "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.16.0.tgz",
3406 |       "integrity": "sha512-mwsZWubQvBki2t5565uxF0EYvG+FwdFb8bMtDuGQLdCCnGPrDEDvm1gtfynuKlnpzeBRqdFCkMf9jg1fnAK8sg==",
3407 |       "dev": true,
3408 |       "license": "MIT",
3409 |       "dependencies": {
3410 |         "@typescript-eslint/types": "8.16.0",
3411 |         "@typescript-eslint/visitor-keys": "8.16.0"
3412 |       },
3413 |       "engines": {
3414 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
3415 |       },
3416 |       "funding": {
3417 |         "type": "opencollective",
3418 |         "url": "https://opencollective.com/typescript-eslint"
3419 |       }
3420 |     },
3421 |     "node_modules/@typescript-eslint/type-utils": {
3422 |       "version": "8.16.0",
3423 |       "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.16.0.tgz",
3424 |       "integrity": "sha512-IqZHGG+g1XCWX9NyqnI/0CX5LL8/18awQqmkZSl2ynn8F76j579dByc0jhfVSnSnhf7zv76mKBQv9HQFKvDCgg==",
3425 |       "dev": true,
3426 |       "license": "MIT",
3427 |       "dependencies": {
3428 |         "@typescript-eslint/typescript-estree": "8.16.0",
3429 |         "@typescript-eslint/utils": "8.16.0",
3430 |         "debug": "^4.3.4",
3431 |         "ts-api-utils": "^1.3.0"
3432 |       },
3433 |       "engines": {
3434 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
3435 |       },
3436 |       "funding": {
3437 |         "type": "opencollective",
3438 |         "url": "https://opencollective.com/typescript-eslint"
3439 |       },
3440 |       "peerDependencies": {
3441 |         "eslint": "^8.57.0 || ^9.0.0"
3442 |       },
3443 |       "peerDependenciesMeta": {
3444 |         "typescript": {
3445 |           "optional": true
3446 |         }
3447 |       }
3448 |     },
3449 |     "node_modules/@typescript-eslint/types": {
3450 |       "version": "8.16.0",
3451 |       "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.16.0.tgz",
3452 |       "integrity": "sha512-NzrHj6thBAOSE4d9bsuRNMvk+BvaQvmY4dDglgkgGC0EW/tB3Kelnp3tAKH87GEwzoxgeQn9fNGRyFJM/xd+GQ==",
3453 |       "dev": true,
3454 |       "license": "MIT",
3455 |       "engines": {
3456 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
3457 |       },
3458 |       "funding": {
3459 |         "type": "opencollective",
3460 |         "url": "https://opencollective.com/typescript-eslint"
3461 |       }
3462 |     },
3463 |     "node_modules/@typescript-eslint/typescript-estree": {
3464 |       "version": "8.16.0",
3465 |       "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.16.0.tgz",
3466 |       "integrity": "sha512-E2+9IzzXMc1iaBy9zmo+UYvluE3TW7bCGWSF41hVWUE01o8nzr1rvOQYSxelxr6StUvRcTMe633eY8mXASMaNw==",
3467 |       "dev": true,
3468 |       "license": "BSD-2-Clause",
3469 |       "dependencies": {
3470 |         "@typescript-eslint/types": "8.16.0",
3471 |         "@typescript-eslint/visitor-keys": "8.16.0",
3472 |         "debug": "^4.3.4",
3473 |         "fast-glob": "^3.3.2",
3474 |         "is-glob": "^4.0.3",
3475 |         "minimatch": "^9.0.4",
3476 |         "semver": "^7.6.0",
3477 |         "ts-api-utils": "^1.3.0"
3478 |       },
3479 |       "engines": {
3480 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
3481 |       },
3482 |       "funding": {
3483 |         "type": "opencollective",
3484 |         "url": "https://opencollective.com/typescript-eslint"
3485 |       },
3486 |       "peerDependenciesMeta": {
3487 |         "typescript": {
3488 |           "optional": true
3489 |         }
3490 |       }
3491 |     },
3492 |     "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
3493 |       "version": "2.0.1",
3494 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
3495 |       "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
3496 |       "dev": true,
3497 |       "license": "MIT",
3498 |       "dependencies": {
3499 |         "balanced-match": "^1.0.0"
3500 |       }
3501 |     },
3502 |     "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
3503 |       "version": "9.0.5",
3504 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
3505 |       "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
3506 |       "dev": true,
3507 |       "license": "ISC",
3508 |       "dependencies": {
3509 |         "brace-expansion": "^2.0.1"
3510 |       },
3511 |       "engines": {
3512 |         "node": ">=16 || 14 >=14.17"
3513 |       },
3514 |       "funding": {
3515 |         "url": "https://github.com/sponsors/isaacs"
3516 |       }
3517 |     },
3518 |     "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
3519 |       "version": "7.6.3",
3520 |       "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.3.tgz",
3521 |       "integrity": "sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==",
3522 |       "dev": true,
3523 |       "license": "ISC",
3524 |       "bin": {
3525 |         "semver": "bin/semver.js"
3526 |       },
3527 |       "engines": {
3528 |         "node": ">=10"
3529 |       }
3530 |     },
3531 |     "node_modules/@typescript-eslint/utils": {
3532 |       "version": "8.16.0",
3533 |       "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.16.0.tgz",
3534 |       "integrity": "sha512-C1zRy/mOL8Pj157GiX4kaw7iyRLKfJXBR3L82hk5kS/GyHcOFmy4YUq/zfZti72I9wnuQtA/+xzft4wCC8PJdA==",
3535 |       "dev": true,
3536 |       "license": "MIT",
3537 |       "dependencies": {
3538 |         "@eslint-community/eslint-utils": "^4.4.0",
3539 |         "@typescript-eslint/scope-manager": "8.16.0",
3540 |         "@typescript-eslint/types": "8.16.0",
3541 |         "@typescript-eslint/typescript-estree": "8.16.0"
3542 |       },
3543 |       "engines": {
3544 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
3545 |       },
3546 |       "funding": {
3547 |         "type": "opencollective",
3548 |         "url": "https://opencollective.com/typescript-eslint"
3549 |       },
3550 |       "peerDependencies": {
3551 |         "eslint": "^8.57.0 || ^9.0.0"
3552 |       },
3553 |       "peerDependenciesMeta": {
3554 |         "typescript": {
3555 |           "optional": true
3556 |         }
3557 |       }
3558 |     },
3559 |     "node_modules/@typescript-eslint/visitor-keys": {
3560 |       "version": "8.16.0",
3561 |       "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.16.0.tgz",
3562 |       "integrity": "sha512-pq19gbaMOmFE3CbL0ZB8J8BFCo2ckfHBfaIsaOZgBIF4EoISJIdLX5xRhd0FGB0LlHReNRuzoJoMGpTjq8F2CQ==",
3563 |       "dev": true,
3564 |       "license": "MIT",
3565 |       "dependencies": {
3566 |         "@typescript-eslint/types": "8.16.0",
3567 |         "eslint-visitor-keys": "^4.2.0"
3568 |       },
3569 |       "engines": {
3570 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
3571 |       },
3572 |       "funding": {
3573 |         "type": "opencollective",
3574 |         "url": "https://opencollective.com/typescript-eslint"
3575 |       }
3576 |     },
3577 |     "node_modules/@vitejs/plugin-react": {
3578 |       "version": "4.3.4",
3579 |       "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-4.3.4.tgz",
3580 |       "integrity": "sha512-SCCPBJtYLdE8PX/7ZQAs1QAZ8Jqwih+0VBLum1EGqmCCQal+MIUqLCzj3ZUy8ufbC0cAM4LRlSTm7IQJwWT4ug==",
3581 |       "dev": true,
3582 |       "license": "MIT",
3583 |       "dependencies": {
3584 |         "@babel/core": "^7.26.0",
3585 |         "@babel/plugin-transform-react-jsx-self": "^7.25.9",
3586 |         "@babel/plugin-transform-react-jsx-source": "^7.25.9",
3587 |         "@types/babel__core": "^7.20.5",
3588 |         "react-refresh": "^0.14.2"
3589 |       },
3590 |       "engines": {
3591 |         "node": "^14.18.0 || >=16.0.0"
3592 |       },
3593 |       "peerDependencies": {
3594 |         "vite": "^4.2.0 || ^5.0.0 || ^6.0.0"
3595 |       }
3596 |     },
3597 |     "node_modules/accepts": {
3598 |       "version": "1.3.8",
3599 |       "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
3600 |       "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
3601 |       "license": "MIT",
3602 |       "dependencies": {
3603 |         "mime-types": "~2.1.34",
3604 |         "negotiator": "0.6.3"
3605 |       },
3606 |       "engines": {
3607 |         "node": ">= 0.6"
3608 |       }
3609 |     },
3610 |     "node_modules/acorn": {
3611 |       "version": "8.14.0",
3612 |       "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.0.tgz",
3613 |       "integrity": "sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==",
3614 |       "license": "MIT",
3615 |       "bin": {
3616 |         "acorn": "bin/acorn"
3617 |       },
3618 |       "engines": {
3619 |         "node": ">=0.4.0"
3620 |       }
3621 |     },
3622 |     "node_modules/acorn-jsx": {
3623 |       "version": "5.3.2",
3624 |       "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
3625 |       "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
3626 |       "dev": true,
3627 |       "license": "MIT",
3628 |       "peerDependencies": {
3629 |         "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
3630 |       }
3631 |     },
3632 |     "node_modules/acorn-walk": {
3633 |       "version": "8.3.4",
3634 |       "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.4.tgz",
3635 |       "integrity": "sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==",
3636 |       "license": "MIT",
3637 |       "dependencies": {
3638 |         "acorn": "^8.11.0"
3639 |       },
3640 |       "engines": {
3641 |         "node": ">=0.4.0"
3642 |       }
3643 |     },
3644 |     "node_modules/ajv": {
3645 |       "version": "6.12.6",
3646 |       "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
3647 |       "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
3648 |       "dev": true,
3649 |       "license": "MIT",
3650 |       "dependencies": {
3651 |         "fast-deep-equal": "^3.1.1",
3652 |         "fast-json-stable-stringify": "^2.0.0",
3653 |         "json-schema-traverse": "^0.4.1",
3654 |         "uri-js": "^4.2.2"
3655 |       },
3656 |       "funding": {
3657 |         "type": "github",
3658 |         "url": "https://github.com/sponsors/epoberezkin"
3659 |       }
3660 |     },
3661 |     "node_modules/ansi-regex": {
3662 |       "version": "5.0.1",
3663 |       "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
3664 |       "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
3665 |       "license": "MIT",
3666 |       "engines": {
3667 |         "node": ">=8"
3668 |       }
3669 |     },
3670 |     "node_modules/ansi-styles": {
3671 |       "version": "4.3.0",
3672 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
3673 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
3674 |       "license": "MIT",
3675 |       "dependencies": {
3676 |         "color-convert": "^2.0.1"
3677 |       },
3678 |       "engines": {
3679 |         "node": ">=8"
3680 |       },
3681 |       "funding": {
3682 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
3683 |       }
3684 |     },
3685 |     "node_modules/any-promise": {
3686 |       "version": "1.3.0",
3687 |       "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
3688 |       "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
3689 |       "license": "MIT"
3690 |     },
3691 |     "node_modules/anymatch": {
3692 |       "version": "3.1.3",
3693 |       "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
3694 |       "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
3695 |       "license": "ISC",
3696 |       "dependencies": {
3697 |         "normalize-path": "^3.0.0",
3698 |         "picomatch": "^2.0.4"
3699 |       },
3700 |       "engines": {
3701 |         "node": ">= 8"
3702 |       }
3703 |     },
3704 |     "node_modules/arg": {
3705 |       "version": "5.0.2",
3706 |       "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
3707 |       "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
3708 |       "license": "MIT"
3709 |     },
3710 |     "node_modules/argparse": {
3711 |       "version": "2.0.1",
3712 |       "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
3713 |       "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
3714 |       "dev": true,
3715 |       "license": "Python-2.0"
3716 |     },
3717 |     "node_modules/aria-hidden": {
3718 |       "version": "1.2.4",
3719 |       "resolved": "https://registry.npmjs.org/aria-hidden/-/aria-hidden-1.2.4.tgz",
3720 |       "integrity": "sha512-y+CcFFwelSXpLZk/7fMB2mUbGtX9lKycf1MWJ7CaTIERyitVlyQx6C+sxcROU2BAJ24OiZyK+8wj2i8AlBoS3A==",
3721 |       "license": "MIT",
3722 |       "dependencies": {
3723 |         "tslib": "^2.0.0"
3724 |       },
3725 |       "engines": {
3726 |         "node": ">=10"
3727 |       }
3728 |     },
3729 |     "node_modules/array-flatten": {
3730 |       "version": "1.1.1",
3731 |       "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
3732 |       "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
3733 |       "license": "MIT"
3734 |     },
3735 |     "node_modules/autoprefixer": {
3736 |       "version": "10.4.20",
3737 |       "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.20.tgz",
3738 |       "integrity": "sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==",
3739 |       "dev": true,
3740 |       "funding": [
3741 |         {
3742 |           "type": "opencollective",
3743 |           "url": "https://opencollective.com/postcss/"
3744 |         },
3745 |         {
3746 |           "type": "tidelift",
3747 |           "url": "https://tidelift.com/funding/github/npm/autoprefixer"
3748 |         },
3749 |         {
3750 |           "type": "github",
3751 |           "url": "https://github.com/sponsors/ai"
3752 |         }
3753 |       ],
3754 |       "license": "MIT",
3755 |       "dependencies": {
3756 |         "browserslist": "^4.23.3",
3757 |         "caniuse-lite": "^1.0.30001646",
3758 |         "fraction.js": "^4.3.7",
3759 |         "normalize-range": "^0.1.2",
3760 |         "picocolors": "^1.0.1",
3761 |         "postcss-value-parser": "^4.2.0"
3762 |       },
3763 |       "bin": {
3764 |         "autoprefixer": "bin/autoprefixer"
3765 |       },
3766 |       "engines": {
3767 |         "node": "^10 || ^12 || >=14"
3768 |       },
3769 |       "peerDependencies": {
3770 |         "postcss": "^8.1.0"
3771 |       }
3772 |     },
3773 |     "node_modules/balanced-match": {
3774 |       "version": "1.0.2",
3775 |       "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
3776 |       "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
3777 |       "license": "MIT"
3778 |     },
3779 |     "node_modules/binary-extensions": {
3780 |       "version": "2.3.0",
3781 |       "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
3782 |       "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
3783 |       "license": "MIT",
3784 |       "engines": {
3785 |         "node": ">=8"
3786 |       },
3787 |       "funding": {
3788 |         "url": "https://github.com/sponsors/sindresorhus"
3789 |       }
3790 |     },
3791 |     "node_modules/body-parser": {
3792 |       "version": "1.20.3",
3793 |       "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.3.tgz",
3794 |       "integrity": "sha512-7rAxByjUMqQ3/bHJy7D6OGXvx/MMc4IqBn/X0fcM1QUcAItpZrBEYhWGem+tzXH90c+G01ypMcYJBO9Y30203g==",
3795 |       "license": "MIT",
3796 |       "dependencies": {
3797 |         "bytes": "3.1.2",
3798 |         "content-type": "~1.0.5",
3799 |         "debug": "2.6.9",
3800 |         "depd": "2.0.0",
3801 |         "destroy": "1.2.0",
3802 |         "http-errors": "2.0.0",
3803 |         "iconv-lite": "0.4.24",
3804 |         "on-finished": "2.4.1",
3805 |         "qs": "6.13.0",
3806 |         "raw-body": "2.5.2",
3807 |         "type-is": "~1.6.18",
3808 |         "unpipe": "1.0.0"
3809 |       },
3810 |       "engines": {
3811 |         "node": ">= 0.8",
3812 |         "npm": "1.2.8000 || >= 1.4.16"
3813 |       }
3814 |     },
3815 |     "node_modules/body-parser/node_modules/debug": {
3816 |       "version": "2.6.9",
3817 |       "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
3818 |       "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
3819 |       "license": "MIT",
3820 |       "dependencies": {
3821 |         "ms": "2.0.0"
3822 |       }
3823 |     },
3824 |     "node_modules/body-parser/node_modules/ms": {
3825 |       "version": "2.0.0",
3826 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
3827 |       "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
3828 |       "license": "MIT"
3829 |     },
3830 |     "node_modules/body-parser/node_modules/raw-body": {
3831 |       "version": "2.5.2",
3832 |       "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.2.tgz",
3833 |       "integrity": "sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==",
3834 |       "license": "MIT",
3835 |       "dependencies": {
3836 |         "bytes": "3.1.2",
3837 |         "http-errors": "2.0.0",
3838 |         "iconv-lite": "0.4.24",
3839 |         "unpipe": "1.0.0"
3840 |       },
3841 |       "engines": {
3842 |         "node": ">= 0.8"
3843 |       }
3844 |     },
3845 |     "node_modules/brace-expansion": {
3846 |       "version": "1.1.11",
3847 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
3848 |       "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
3849 |       "license": "MIT",
3850 |       "dependencies": {
3851 |         "balanced-match": "^1.0.0",
3852 |         "concat-map": "0.0.1"
3853 |       }
3854 |     },
3855 |     "node_modules/braces": {
3856 |       "version": "3.0.3",
3857 |       "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
3858 |       "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
3859 |       "license": "MIT",
3860 |       "dependencies": {
3861 |         "fill-range": "^7.1.1"
3862 |       },
3863 |       "engines": {
3864 |         "node": ">=8"
3865 |       }
3866 |     },
3867 |     "node_modules/browserslist": {
3868 |       "version": "4.24.2",
3869 |       "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.2.tgz",
3870 |       "integrity": "sha512-ZIc+Q62revdMcqC6aChtW4jz3My3klmCO1fEmINZY/8J3EpBg5/A/D0AKmBveUh6pgoeycoMkVMko84tuYS+Gg==",
3871 |       "dev": true,
3872 |       "funding": [
3873 |         {
3874 |           "type": "opencollective",
3875 |           "url": "https://opencollective.com/browserslist"
3876 |         },
3877 |         {
3878 |           "type": "tidelift",
3879 |           "url": "https://tidelift.com/funding/github/npm/browserslist"
3880 |         },
3881 |         {
3882 |           "type": "github",
3883 |           "url": "https://github.com/sponsors/ai"
3884 |         }
3885 |       ],
3886 |       "license": "MIT",
3887 |       "dependencies": {
3888 |         "caniuse-lite": "^1.0.30001669",
3889 |         "electron-to-chromium": "^1.5.41",
3890 |         "node-releases": "^2.0.18",
3891 |         "update-browserslist-db": "^1.1.1"
3892 |       },
3893 |       "bin": {
3894 |         "browserslist": "cli.js"
3895 |       },
3896 |       "engines": {
3897 |         "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
3898 |       }
3899 |     },
3900 |     "node_modules/bytes": {
3901 |       "version": "3.1.2",
3902 |       "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
3903 |       "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
3904 |       "license": "MIT",
3905 |       "engines": {
3906 |         "node": ">= 0.8"
3907 |       }
3908 |     },
3909 |     "node_modules/call-bind-apply-helpers": {
3910 |       "version": "1.0.2",
3911 |       "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
3912 |       "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
3913 |       "license": "MIT",
3914 |       "dependencies": {
3915 |         "es-errors": "^1.3.0",
3916 |         "function-bind": "^1.1.2"
3917 |       },
3918 |       "engines": {
3919 |         "node": ">= 0.4"
3920 |       }
3921 |     },
3922 |     "node_modules/call-bound": {
3923 |       "version": "1.0.4",
3924 |       "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
3925 |       "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
3926 |       "license": "MIT",
3927 |       "dependencies": {
3928 |         "call-bind-apply-helpers": "^1.0.2",
3929 |         "get-intrinsic": "^1.3.0"
3930 |       },
3931 |       "engines": {
3932 |         "node": ">= 0.4"
3933 |       },
3934 |       "funding": {
3935 |         "url": "https://github.com/sponsors/ljharb"
3936 |       }
3937 |     },
3938 |     "node_modules/callsites": {
3939 |       "version": "3.1.0",
3940 |       "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
3941 |       "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
3942 |       "dev": true,
3943 |       "license": "MIT",
3944 |       "engines": {
3945 |         "node": ">=6"
3946 |       }
3947 |     },
3948 |     "node_modules/camelcase-css": {
3949 |       "version": "2.0.1",
3950 |       "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
3951 |       "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
3952 |       "license": "MIT",
3953 |       "engines": {
3954 |         "node": ">= 6"
3955 |       }
3956 |     },
3957 |     "node_modules/caniuse-lite": {
3958 |       "version": "1.0.30001684",
3959 |       "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001684.tgz",
3960 |       "integrity": "sha512-G1LRwLIQjBQoyq0ZJGqGIJUXzJ8irpbjHLpVRXDvBEScFJ9b17sgK6vlx0GAJFE21okD7zXl08rRRUfq6HdoEQ==",
3961 |       "dev": true,
3962 |       "funding": [
3963 |         {
3964 |           "type": "opencollective",
3965 |           "url": "https://opencollective.com/browserslist"
3966 |         },
3967 |         {
3968 |           "type": "tidelift",
3969 |           "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
3970 |         },
3971 |         {
3972 |           "type": "github",
3973 |           "url": "https://github.com/sponsors/ai"
3974 |         }
3975 |       ],
3976 |       "license": "CC-BY-4.0"
3977 |     },
3978 |     "node_modules/chalk": {
3979 |       "version": "4.1.2",
3980 |       "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
3981 |       "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
3982 |       "license": "MIT",
3983 |       "dependencies": {
3984 |         "ansi-styles": "^4.1.0",
3985 |         "supports-color": "^7.1.0"
3986 |       },
3987 |       "engines": {
3988 |         "node": ">=10"
3989 |       },
3990 |       "funding": {
3991 |         "url": "https://github.com/chalk/chalk?sponsor=1"
3992 |       }
3993 |     },
3994 |     "node_modules/chalk/node_modules/supports-color": {
3995 |       "version": "7.2.0",
3996 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
3997 |       "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
3998 |       "license": "MIT",
3999 |       "dependencies": {
4000 |         "has-flag": "^4.0.0"
4001 |       },
4002 |       "engines": {
4003 |         "node": ">=8"
4004 |       }
4005 |     },
4006 |     "node_modules/chokidar": {
4007 |       "version": "3.6.0",
4008 |       "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
4009 |       "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
4010 |       "license": "MIT",
4011 |       "dependencies": {
4012 |         "anymatch": "~3.1.2",
4013 |         "braces": "~3.0.2",
4014 |         "glob-parent": "~5.1.2",
4015 |         "is-binary-path": "~2.1.0",
4016 |         "is-glob": "~4.0.1",
4017 |         "normalize-path": "~3.0.0",
4018 |         "readdirp": "~3.6.0"
4019 |       },
4020 |       "engines": {
4021 |         "node": ">= 8.10.0"
4022 |       },
4023 |       "funding": {
4024 |         "url": "https://paulmillr.com/funding/"
4025 |       },
4026 |       "optionalDependencies": {
4027 |         "fsevents": "~2.3.2"
4028 |       }
4029 |     },
4030 |     "node_modules/chokidar/node_modules/glob-parent": {
4031 |       "version": "5.1.2",
4032 |       "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
4033 |       "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
4034 |       "license": "ISC",
4035 |       "dependencies": {
4036 |         "is-glob": "^4.0.1"
4037 |       },
4038 |       "engines": {
4039 |         "node": ">= 6"
4040 |       }
4041 |     },
4042 |     "node_modules/class-variance-authority": {
4043 |       "version": "0.7.1",
4044 |       "resolved": "https://registry.npmjs.org/class-variance-authority/-/class-variance-authority-0.7.1.tgz",
4045 |       "integrity": "sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==",
4046 |       "license": "Apache-2.0",
4047 |       "dependencies": {
4048 |         "clsx": "^2.1.1"
4049 |       },
4050 |       "funding": {
4051 |         "url": "https://polar.sh/cva"
4052 |       }
4053 |     },
4054 |     "node_modules/cliui": {
4055 |       "version": "8.0.1",
4056 |       "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
4057 |       "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
4058 |       "license": "ISC",
4059 |       "dependencies": {
4060 |         "string-width": "^4.2.0",
4061 |         "strip-ansi": "^6.0.1",
4062 |         "wrap-ansi": "^7.0.0"
4063 |       },
4064 |       "engines": {
4065 |         "node": ">=12"
4066 |       }
4067 |     },
4068 |     "node_modules/clsx": {
4069 |       "version": "2.1.1",
4070 |       "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
4071 |       "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
4072 |       "license": "MIT",
4073 |       "engines": {
4074 |         "node": ">=6"
4075 |       }
4076 |     },
4077 |     "node_modules/cmdk": {
4078 |       "version": "1.0.4",
4079 |       "resolved": "https://registry.npmjs.org/cmdk/-/cmdk-1.0.4.tgz",
4080 |       "integrity": "sha512-AnsjfHyHpQ/EFeAnG216WY7A5LiYCoZzCSygiLvfXC3H3LFGCprErteUcszaVluGOhuOTbJS3jWHrSDYPBBygg==",
4081 |       "dependencies": {
4082 |         "@radix-ui/react-dialog": "^1.1.2",
4083 |         "@radix-ui/react-id": "^1.1.0",
4084 |         "@radix-ui/react-primitive": "^2.0.0",
4085 |         "use-sync-external-store": "^1.2.2"
4086 |       },
4087 |       "peerDependencies": {
4088 |         "react": "^18 || ^19 || ^19.0.0-rc",
4089 |         "react-dom": "^18 || ^19 || ^19.0.0-rc"
4090 |       }
4091 |     },
4092 |     "node_modules/color-convert": {
4093 |       "version": "2.0.1",
4094 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
4095 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
4096 |       "license": "MIT",
4097 |       "dependencies": {
4098 |         "color-name": "~1.1.4"
4099 |       },
4100 |       "engines": {
4101 |         "node": ">=7.0.0"
4102 |       }
4103 |     },
4104 |     "node_modules/color-name": {
4105 |       "version": "1.1.4",
4106 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
4107 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
4108 |       "license": "MIT"
4109 |     },
4110 |     "node_modules/commander": {
4111 |       "version": "4.1.1",
4112 |       "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
4113 |       "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
4114 |       "license": "MIT",
4115 |       "engines": {
4116 |         "node": ">= 6"
4117 |       }
4118 |     },
4119 |     "node_modules/concat-map": {
4120 |       "version": "0.0.1",
4121 |       "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
4122 |       "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
4123 |       "license": "MIT"
4124 |     },
4125 |     "node_modules/concurrently": {
4126 |       "version": "9.1.0",
4127 |       "resolved": "https://registry.npmjs.org/concurrently/-/concurrently-9.1.0.tgz",
4128 |       "integrity": "sha512-VxkzwMAn4LP7WyMnJNbHN5mKV9L2IbyDjpzemKr99sXNR3GqRNMMHdm7prV1ws9wg7ETj6WUkNOigZVsptwbgg==",
4129 |       "license": "MIT",
4130 |       "dependencies": {
4131 |         "chalk": "^4.1.2",
4132 |         "lodash": "^4.17.21",
4133 |         "rxjs": "^7.8.1",
4134 |         "shell-quote": "^1.8.1",
4135 |         "supports-color": "^8.1.1",
4136 |         "tree-kill": "^1.2.2",
4137 |         "yargs": "^17.7.2"
4138 |       },
4139 |       "bin": {
4140 |         "conc": "dist/bin/concurrently.js",
4141 |         "concurrently": "dist/bin/concurrently.js"
4142 |       },
4143 |       "engines": {
4144 |         "node": ">=18"
4145 |       },
4146 |       "funding": {
4147 |         "url": "https://github.com/open-cli-tools/concurrently?sponsor=1"
4148 |       }
4149 |     },
4150 |     "node_modules/content-disposition": {
4151 |       "version": "0.5.4",
4152 |       "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
4153 |       "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
4154 |       "license": "MIT",
4155 |       "dependencies": {
4156 |         "safe-buffer": "5.2.1"
4157 |       },
4158 |       "engines": {
4159 |         "node": ">= 0.6"
4160 |       }
4161 |     },
4162 |     "node_modules/content-type": {
4163 |       "version": "1.0.5",
4164 |       "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
4165 |       "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
4166 |       "license": "MIT",
4167 |       "engines": {
4168 |         "node": ">= 0.6"
4169 |       }
4170 |     },
4171 |     "node_modules/convert-source-map": {
4172 |       "version": "2.0.0",
4173 |       "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
4174 |       "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
4175 |       "dev": true,
4176 |       "license": "MIT"
4177 |     },
4178 |     "node_modules/cookie": {
4179 |       "version": "0.7.1",
4180 |       "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.1.tgz",
4181 |       "integrity": "sha512-6DnInpx7SJ2AK3+CTUE/ZM0vWTUboZCegxhC2xiIydHR9jNuTAASBrfEpHhiGOZw/nX51bHt6YQl8jsGo4y/0w==",
4182 |       "license": "MIT",
4183 |       "engines": {
4184 |         "node": ">= 0.6"
4185 |       }
4186 |     },
4187 |     "node_modules/cookie-signature": {
4188 |       "version": "1.0.6",
4189 |       "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
4190 |       "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==",
4191 |       "license": "MIT"
4192 |     },
4193 |     "node_modules/cors": {
4194 |       "version": "2.8.5",
4195 |       "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
4196 |       "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
4197 |       "license": "MIT",
4198 |       "dependencies": {
4199 |         "object-assign": "^4",
4200 |         "vary": "^1"
4201 |       },
4202 |       "engines": {
4203 |         "node": ">= 0.10"
4204 |       }
4205 |     },
4206 |     "node_modules/create-require": {
4207 |       "version": "1.1.1",
4208 |       "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
4209 |       "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
4210 |       "license": "MIT"
4211 |     },
4212 |     "node_modules/cross-spawn": {
4213 |       "version": "7.0.6",
4214 |       "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
4215 |       "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
4216 |       "license": "MIT",
4217 |       "dependencies": {
4218 |         "path-key": "^3.1.0",
4219 |         "shebang-command": "^2.0.0",
4220 |         "which": "^2.0.1"
4221 |       },
4222 |       "engines": {
4223 |         "node": ">= 8"
4224 |       }
4225 |     },
4226 |     "node_modules/cssesc": {
4227 |       "version": "3.0.0",
4228 |       "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
4229 |       "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
4230 |       "license": "MIT",
4231 |       "bin": {
4232 |         "cssesc": "bin/cssesc"
4233 |       },
4234 |       "engines": {
4235 |         "node": ">=4"
4236 |       }
4237 |     },
4238 |     "node_modules/csstype": {
4239 |       "version": "3.1.3",
4240 |       "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
4241 |       "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
4242 |       "devOptional": true,
4243 |       "license": "MIT"
4244 |     },
4245 |     "node_modules/debug": {
4246 |       "version": "4.3.7",
4247 |       "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
4248 |       "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
4249 |       "license": "MIT",
4250 |       "dependencies": {
4251 |         "ms": "^2.1.3"
4252 |       },
4253 |       "engines": {
4254 |         "node": ">=6.0"
4255 |       },
4256 |       "peerDependenciesMeta": {
4257 |         "supports-color": {
4258 |           "optional": true
4259 |         }
4260 |       }
4261 |     },
4262 |     "node_modules/deep-is": {
4263 |       "version": "0.1.4",
4264 |       "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
4265 |       "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
4266 |       "dev": true,
4267 |       "license": "MIT"
4268 |     },
4269 |     "node_modules/depd": {
4270 |       "version": "2.0.0",
4271 |       "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
4272 |       "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
4273 |       "license": "MIT",
4274 |       "engines": {
4275 |         "node": ">= 0.8"
4276 |       }
4277 |     },
4278 |     "node_modules/destroy": {
4279 |       "version": "1.2.0",
4280 |       "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
4281 |       "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
4282 |       "license": "MIT",
4283 |       "engines": {
4284 |         "node": ">= 0.8",
4285 |         "npm": "1.2.8000 || >= 1.4.16"
4286 |       }
4287 |     },
4288 |     "node_modules/detect-node-es": {
4289 |       "version": "1.1.0",
4290 |       "resolved": "https://registry.npmjs.org/detect-node-es/-/detect-node-es-1.1.0.tgz",
4291 |       "integrity": "sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==",
4292 |       "license": "MIT"
4293 |     },
4294 |     "node_modules/didyoumean": {
4295 |       "version": "1.2.2",
4296 |       "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
4297 |       "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
4298 |       "license": "Apache-2.0"
4299 |     },
4300 |     "node_modules/diff": {
4301 |       "version": "4.0.2",
4302 |       "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
4303 |       "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",
4304 |       "license": "BSD-3-Clause",
4305 |       "engines": {
4306 |         "node": ">=0.3.1"
4307 |       }
4308 |     },
4309 |     "node_modules/dlv": {
4310 |       "version": "1.1.3",
4311 |       "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
4312 |       "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
4313 |       "license": "MIT"
4314 |     },
4315 |     "node_modules/dunder-proto": {
4316 |       "version": "1.0.1",
4317 |       "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
4318 |       "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
4319 |       "license": "MIT",
4320 |       "dependencies": {
4321 |         "call-bind-apply-helpers": "^1.0.1",
4322 |         "es-errors": "^1.3.0",
4323 |         "gopd": "^1.2.0"
4324 |       },
4325 |       "engines": {
4326 |         "node": ">= 0.4"
4327 |       }
4328 |     },
4329 |     "node_modules/eastasianwidth": {
4330 |       "version": "0.2.0",
4331 |       "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
4332 |       "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
4333 |       "license": "MIT"
4334 |     },
4335 |     "node_modules/ee-first": {
4336 |       "version": "1.1.1",
4337 |       "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
4338 |       "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
4339 |       "license": "MIT"
4340 |     },
4341 |     "node_modules/electron-to-chromium": {
4342 |       "version": "1.5.65",
4343 |       "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.65.tgz",
4344 |       "integrity": "sha512-PWVzBjghx7/wop6n22vS2MLU8tKGd4Q91aCEGhG/TYmW6PP5OcSXcdnxTe1NNt0T66N8D6jxh4kC8UsdzOGaIw==",
4345 |       "dev": true,
4346 |       "license": "ISC"
4347 |     },
4348 |     "node_modules/emoji-regex": {
4349 |       "version": "8.0.0",
4350 |       "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
4351 |       "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
4352 |       "license": "MIT"
4353 |     },
4354 |     "node_modules/encodeurl": {
4355 |       "version": "2.0.0",
4356 |       "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
4357 |       "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
4358 |       "license": "MIT",
4359 |       "engines": {
4360 |         "node": ">= 0.8"
4361 |       }
4362 |     },
4363 |     "node_modules/es-define-property": {
4364 |       "version": "1.0.1",
4365 |       "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
4366 |       "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
4367 |       "license": "MIT",
4368 |       "engines": {
4369 |         "node": ">= 0.4"
4370 |       }
4371 |     },
4372 |     "node_modules/es-errors": {
4373 |       "version": "1.3.0",
4374 |       "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
4375 |       "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
4376 |       "license": "MIT",
4377 |       "engines": {
4378 |         "node": ">= 0.4"
4379 |       }
4380 |     },
4381 |     "node_modules/es-object-atoms": {
4382 |       "version": "1.1.1",
4383 |       "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
4384 |       "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
4385 |       "license": "MIT",
4386 |       "dependencies": {
4387 |         "es-errors": "^1.3.0"
4388 |       },
4389 |       "engines": {
4390 |         "node": ">= 0.4"
4391 |       }
4392 |     },
4393 |     "node_modules/esbuild": {
4394 |       "version": "0.23.1",
4395 |       "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.23.1.tgz",
4396 |       "integrity": "sha512-VVNz/9Sa0bs5SELtn3f7qhJCDPCF5oMEl5cO9/SSinpE9hbPVvxbd572HH5AKiP7WD8INO53GgfDDhRjkylHEg==",
4397 |       "dev": true,
4398 |       "hasInstallScript": true,
4399 |       "license": "MIT",
4400 |       "bin": {
4401 |         "esbuild": "bin/esbuild"
4402 |       },
4403 |       "engines": {
4404 |         "node": ">=18"
4405 |       },
4406 |       "optionalDependencies": {
4407 |         "@esbuild/aix-ppc64": "0.23.1",
4408 |         "@esbuild/android-arm": "0.23.1",
4409 |         "@esbuild/android-arm64": "0.23.1",
4410 |         "@esbuild/android-x64": "0.23.1",
4411 |         "@esbuild/darwin-arm64": "0.23.1",
4412 |         "@esbuild/darwin-x64": "0.23.1",
4413 |         "@esbuild/freebsd-arm64": "0.23.1",
4414 |         "@esbuild/freebsd-x64": "0.23.1",
4415 |         "@esbuild/linux-arm": "0.23.1",
4416 |         "@esbuild/linux-arm64": "0.23.1",
4417 |         "@esbuild/linux-ia32": "0.23.1",
4418 |         "@esbuild/linux-loong64": "0.23.1",
4419 |         "@esbuild/linux-mips64el": "0.23.1",
4420 |         "@esbuild/linux-ppc64": "0.23.1",
4421 |         "@esbuild/linux-riscv64": "0.23.1",
4422 |         "@esbuild/linux-s390x": "0.23.1",
4423 |         "@esbuild/linux-x64": "0.23.1",
4424 |         "@esbuild/netbsd-x64": "0.23.1",
4425 |         "@esbuild/openbsd-arm64": "0.23.1",
4426 |         "@esbuild/openbsd-x64": "0.23.1",
4427 |         "@esbuild/sunos-x64": "0.23.1",
4428 |         "@esbuild/win32-arm64": "0.23.1",
4429 |         "@esbuild/win32-ia32": "0.23.1",
4430 |         "@esbuild/win32-x64": "0.23.1"
4431 |       }
4432 |     },
4433 |     "node_modules/escalade": {
4434 |       "version": "3.2.0",
4435 |       "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
4436 |       "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
4437 |       "license": "MIT",
4438 |       "engines": {
4439 |         "node": ">=6"
4440 |       }
4441 |     },
4442 |     "node_modules/escape-html": {
4443 |       "version": "1.0.3",
4444 |       "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
4445 |       "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
4446 |       "license": "MIT"
4447 |     },
4448 |     "node_modules/escape-string-regexp": {
4449 |       "version": "4.0.0",
4450 |       "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
4451 |       "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
4452 |       "dev": true,
4453 |       "license": "MIT",
4454 |       "engines": {
4455 |         "node": ">=10"
4456 |       },
4457 |       "funding": {
4458 |         "url": "https://github.com/sponsors/sindresorhus"
4459 |       }
4460 |     },
4461 |     "node_modules/eslint": {
4462 |       "version": "9.15.0",
4463 |       "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.15.0.tgz",
4464 |       "integrity": "sha512-7CrWySmIibCgT1Os28lUU6upBshZ+GxybLOrmRzi08kS8MBuO8QA7pXEgYgY5W8vK3e74xv0lpjo9DbaGU9Rkw==",
4465 |       "dev": true,
4466 |       "license": "MIT",
4467 |       "dependencies": {
4468 |         "@eslint-community/eslint-utils": "^4.2.0",
4469 |         "@eslint-community/regexpp": "^4.12.1",
4470 |         "@eslint/config-array": "^0.19.0",
4471 |         "@eslint/core": "^0.9.0",
4472 |         "@eslint/eslintrc": "^3.2.0",
4473 |         "@eslint/js": "9.15.0",
4474 |         "@eslint/plugin-kit": "^0.2.3",
4475 |         "@humanfs/node": "^0.16.6",
4476 |         "@humanwhocodes/module-importer": "^1.0.1",
4477 |         "@humanwhocodes/retry": "^0.4.1",
4478 |         "@types/estree": "^1.0.6",
4479 |         "@types/json-schema": "^7.0.15",
4480 |         "ajv": "^6.12.4",
4481 |         "chalk": "^4.0.0",
4482 |         "cross-spawn": "^7.0.5",
4483 |         "debug": "^4.3.2",
4484 |         "escape-string-regexp": "^4.0.0",
4485 |         "eslint-scope": "^8.2.0",
4486 |         "eslint-visitor-keys": "^4.2.0",
4487 |         "espree": "^10.3.0",
4488 |         "esquery": "^1.5.0",
4489 |         "esutils": "^2.0.2",
4490 |         "fast-deep-equal": "^3.1.3",
4491 |         "file-entry-cache": "^8.0.0",
4492 |         "find-up": "^5.0.0",
4493 |         "glob-parent": "^6.0.2",
4494 |         "ignore": "^5.2.0",
4495 |         "imurmurhash": "^0.1.4",
4496 |         "is-glob": "^4.0.0",
4497 |         "json-stable-stringify-without-jsonify": "^1.0.1",
4498 |         "lodash.merge": "^4.6.2",
4499 |         "minimatch": "^3.1.2",
4500 |         "natural-compare": "^1.4.0",
4501 |         "optionator": "^0.9.3"
4502 |       },
4503 |       "bin": {
4504 |         "eslint": "bin/eslint.js"
4505 |       },
4506 |       "engines": {
4507 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
4508 |       },
4509 |       "funding": {
4510 |         "url": "https://eslint.org/donate"
4511 |       },
4512 |       "peerDependencies": {
4513 |         "jiti": "*"
4514 |       },
4515 |       "peerDependenciesMeta": {
4516 |         "jiti": {
4517 |           "optional": true
4518 |         }
4519 |       }
4520 |     },
4521 |     "node_modules/eslint-plugin-react-hooks": {
4522 |       "version": "5.1.0-rc-fb9a90fa48-20240614",
4523 |       "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-5.1.0-rc-fb9a90fa48-20240614.tgz",
4524 |       "integrity": "sha512-xsiRwaDNF5wWNC4ZHLut+x/YcAxksUd9Rizt7LaEn3bV8VyYRpXnRJQlLOfYaVy9esk4DFP4zPPnoNVjq5Gc0w==",
4525 |       "dev": true,
4526 |       "license": "MIT",
4527 |       "engines": {
4528 |         "node": ">=10"
4529 |       },
4530 |       "peerDependencies": {
4531 |         "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
4532 |       }
4533 |     },
4534 |     "node_modules/eslint-plugin-react-refresh": {
4535 |       "version": "0.4.14",
4536 |       "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.14.tgz",
4537 |       "integrity": "sha512-aXvzCTK7ZBv1e7fahFuR3Z/fyQQSIQ711yPgYRj+Oj64tyTgO4iQIDmYXDBqvSWQ/FA4OSCsXOStlF+noU0/NA==",
4538 |       "dev": true,
4539 |       "license": "MIT",
4540 |       "peerDependencies": {
4541 |         "eslint": ">=7"
4542 |       }
4543 |     },
4544 |     "node_modules/eslint-scope": {
4545 |       "version": "8.2.0",
4546 |       "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.2.0.tgz",
4547 |       "integrity": "sha512-PHlWUfG6lvPc3yvP5A4PNyBL1W8fkDUccmI21JUu/+GKZBoH/W5u6usENXUrWFRsyoW5ACUjFGgAFQp5gUlb/A==",
4548 |       "dev": true,
4549 |       "license": "BSD-2-Clause",
4550 |       "dependencies": {
4551 |         "esrecurse": "^4.3.0",
4552 |         "estraverse": "^5.2.0"
4553 |       },
4554 |       "engines": {
4555 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
4556 |       },
4557 |       "funding": {
4558 |         "url": "https://opencollective.com/eslint"
4559 |       }
4560 |     },
4561 |     "node_modules/eslint-visitor-keys": {
4562 |       "version": "4.2.0",
4563 |       "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.0.tgz",
4564 |       "integrity": "sha512-UyLnSehNt62FFhSwjZlHmeokpRK59rcz29j+F1/aDgbkbRTk7wIc9XzdoasMUbRNKDM0qQt/+BJ4BrpFeABemw==",
4565 |       "dev": true,
4566 |       "license": "Apache-2.0",
4567 |       "engines": {
4568 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
4569 |       },
4570 |       "funding": {
4571 |         "url": "https://opencollective.com/eslint"
4572 |       }
4573 |     },
4574 |     "node_modules/espree": {
4575 |       "version": "10.3.0",
4576 |       "resolved": "https://registry.npmjs.org/espree/-/espree-10.3.0.tgz",
4577 |       "integrity": "sha512-0QYC8b24HWY8zjRnDTL6RiHfDbAWn63qb4LMj1Z4b076A4une81+z03Kg7l7mn/48PUTqoLptSXez8oknU8Clg==",
4578 |       "dev": true,
4579 |       "license": "BSD-2-Clause",
4580 |       "dependencies": {
4581 |         "acorn": "^8.14.0",
4582 |         "acorn-jsx": "^5.3.2",
4583 |         "eslint-visitor-keys": "^4.2.0"
4584 |       },
4585 |       "engines": {
4586 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
4587 |       },
4588 |       "funding": {
4589 |         "url": "https://opencollective.com/eslint"
4590 |       }
4591 |     },
4592 |     "node_modules/esquery": {
4593 |       "version": "1.6.0",
4594 |       "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
4595 |       "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
4596 |       "dev": true,
4597 |       "license": "BSD-3-Clause",
4598 |       "dependencies": {
4599 |         "estraverse": "^5.1.0"
4600 |       },
4601 |       "engines": {
4602 |         "node": ">=0.10"
4603 |       }
4604 |     },
4605 |     "node_modules/esrecurse": {
4606 |       "version": "4.3.0",
4607 |       "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
4608 |       "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
4609 |       "dev": true,
4610 |       "license": "BSD-2-Clause",
4611 |       "dependencies": {
4612 |         "estraverse": "^5.2.0"
4613 |       },
4614 |       "engines": {
4615 |         "node": ">=4.0"
4616 |       }
4617 |     },
4618 |     "node_modules/estraverse": {
4619 |       "version": "5.3.0",
4620 |       "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
4621 |       "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
4622 |       "dev": true,
4623 |       "license": "BSD-2-Clause",
4624 |       "engines": {
4625 |         "node": ">=4.0"
4626 |       }
4627 |     },
4628 |     "node_modules/esutils": {
4629 |       "version": "2.0.3",
4630 |       "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
4631 |       "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
4632 |       "dev": true,
4633 |       "license": "BSD-2-Clause",
4634 |       "engines": {
4635 |         "node": ">=0.10.0"
4636 |       }
4637 |     },
4638 |     "node_modules/etag": {
4639 |       "version": "1.8.1",
4640 |       "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
4641 |       "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
4642 |       "license": "MIT",
4643 |       "engines": {
4644 |         "node": ">= 0.6"
4645 |       }
4646 |     },
4647 |     "node_modules/eventsource-parser": {
4648 |       "version": "3.0.0",
4649 |       "resolved": "https://registry.npmjs.org/eventsource-parser/-/eventsource-parser-3.0.0.tgz",
4650 |       "integrity": "sha512-T1C0XCUimhxVQzW4zFipdx0SficT651NnkR0ZSH3yQwh+mFMdLfgjABVi4YtMTtaL4s168593DaoaRLMqryavA==",
4651 |       "license": "MIT",
4652 |       "engines": {
4653 |         "node": ">=18.0.0"
4654 |       }
4655 |     },
4656 |     "node_modules/express": {
4657 |       "version": "4.21.2",
4658 |       "resolved": "https://registry.npmjs.org/express/-/express-4.21.2.tgz",
4659 |       "integrity": "sha512-28HqgMZAmih1Czt9ny7qr6ek2qddF4FclbMzwhCREB6OFfH+rXAnuNCwo1/wFvrtbgsQDb4kSbX9de9lFbrXnA==",
4660 |       "license": "MIT",
4661 |       "dependencies": {
4662 |         "accepts": "~1.3.8",
4663 |         "array-flatten": "1.1.1",
4664 |         "body-parser": "1.20.3",
4665 |         "content-disposition": "0.5.4",
4666 |         "content-type": "~1.0.4",
4667 |         "cookie": "0.7.1",
4668 |         "cookie-signature": "1.0.6",
4669 |         "debug": "2.6.9",
4670 |         "depd": "2.0.0",
4671 |         "encodeurl": "~2.0.0",
4672 |         "escape-html": "~1.0.3",
4673 |         "etag": "~1.8.1",
4674 |         "finalhandler": "1.3.1",
4675 |         "fresh": "0.5.2",
4676 |         "http-errors": "2.0.0",
4677 |         "merge-descriptors": "1.0.3",
4678 |         "methods": "~1.1.2",
4679 |         "on-finished": "2.4.1",
4680 |         "parseurl": "~1.3.3",
4681 |         "path-to-regexp": "0.1.12",
4682 |         "proxy-addr": "~2.0.7",
4683 |         "qs": "6.13.0",
4684 |         "range-parser": "~1.2.1",
4685 |         "safe-buffer": "5.2.1",
4686 |         "send": "0.19.0",
4687 |         "serve-static": "1.16.2",
4688 |         "setprototypeof": "1.2.0",
4689 |         "statuses": "2.0.1",
4690 |         "type-is": "~1.6.18",
4691 |         "utils-merge": "1.0.1",
4692 |         "vary": "~1.1.2"
4693 |       },
4694 |       "engines": {
4695 |         "node": ">= 0.10.0"
4696 |       },
4697 |       "funding": {
4698 |         "type": "opencollective",
4699 |         "url": "https://opencollective.com/express"
4700 |       }
4701 |     },
4702 |     "node_modules/express-rate-limit": {
4703 |       "version": "7.5.0",
4704 |       "resolved": "https://registry.npmjs.org/express-rate-limit/-/express-rate-limit-7.5.0.tgz",
4705 |       "integrity": "sha512-eB5zbQh5h+VenMPM3fh+nw1YExi5nMr6HUCR62ELSP11huvxm/Uir1H1QEyTkk5QX6A58pX6NmaTMceKZ0Eodg==",
4706 |       "license": "MIT",
4707 |       "engines": {
4708 |         "node": ">= 16"
4709 |       },
4710 |       "funding": {
4711 |         "url": "https://github.com/sponsors/express-rate-limit"
4712 |       },
4713 |       "peerDependencies": {
4714 |         "express": "^4.11 || 5 || ^5.0.0-beta.1"
4715 |       }
4716 |     },
4717 |     "node_modules/express/node_modules/debug": {
4718 |       "version": "2.6.9",
4719 |       "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
4720 |       "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
4721 |       "license": "MIT",
4722 |       "dependencies": {
4723 |         "ms": "2.0.0"
4724 |       }
4725 |     },
4726 |     "node_modules/express/node_modules/ms": {
4727 |       "version": "2.0.0",
4728 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
4729 |       "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
4730 |       "license": "MIT"
4731 |     },
4732 |     "node_modules/fast-deep-equal": {
4733 |       "version": "3.1.3",
4734 |       "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
4735 |       "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
4736 |       "dev": true,
4737 |       "license": "MIT"
4738 |     },
4739 |     "node_modules/fast-glob": {
4740 |       "version": "3.3.2",
4741 |       "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
4742 |       "integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
4743 |       "license": "MIT",
4744 |       "dependencies": {
4745 |         "@nodelib/fs.stat": "^2.0.2",
4746 |         "@nodelib/fs.walk": "^1.2.3",
4747 |         "glob-parent": "^5.1.2",
4748 |         "merge2": "^1.3.0",
4749 |         "micromatch": "^4.0.4"
4750 |       },
4751 |       "engines": {
4752 |         "node": ">=8.6.0"
4753 |       }
4754 |     },
4755 |     "node_modules/fast-glob/node_modules/glob-parent": {
4756 |       "version": "5.1.2",
4757 |       "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
4758 |       "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
4759 |       "license": "ISC",
4760 |       "dependencies": {
4761 |         "is-glob": "^4.0.1"
4762 |       },
4763 |       "engines": {
4764 |         "node": ">= 6"
4765 |       }
4766 |     },
4767 |     "node_modules/fast-json-stable-stringify": {
4768 |       "version": "2.1.0",
4769 |       "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
4770 |       "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
4771 |       "dev": true,
4772 |       "license": "MIT"
4773 |     },
4774 |     "node_modules/fast-levenshtein": {
4775 |       "version": "2.0.6",
4776 |       "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
4777 |       "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
4778 |       "dev": true,
4779 |       "license": "MIT"
4780 |     },
4781 |     "node_modules/fastq": {
4782 |       "version": "1.17.1",
4783 |       "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
4784 |       "integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
4785 |       "license": "ISC",
4786 |       "dependencies": {
4787 |         "reusify": "^1.0.4"
4788 |       }
4789 |     },
4790 |     "node_modules/file-entry-cache": {
4791 |       "version": "8.0.0",
4792 |       "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
4793 |       "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
4794 |       "dev": true,
4795 |       "license": "MIT",
4796 |       "dependencies": {
4797 |         "flat-cache": "^4.0.0"
4798 |       },
4799 |       "engines": {
4800 |         "node": ">=16.0.0"
4801 |       }
4802 |     },
4803 |     "node_modules/fill-range": {
4804 |       "version": "7.1.1",
4805 |       "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
4806 |       "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
4807 |       "license": "MIT",
4808 |       "dependencies": {
4809 |         "to-regex-range": "^5.0.1"
4810 |       },
4811 |       "engines": {
4812 |         "node": ">=8"
4813 |       }
4814 |     },
4815 |     "node_modules/finalhandler": {
4816 |       "version": "1.3.1",
4817 |       "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.1.tgz",
4818 |       "integrity": "sha512-6BN9trH7bp3qvnrRyzsBz+g3lZxTNZTbVO2EV1CS0WIcDbawYVdYvGflME/9QP0h0pYlCDBCTjYa9nZzMDpyxQ==",
4819 |       "license": "MIT",
4820 |       "dependencies": {
4821 |         "debug": "2.6.9",
4822 |         "encodeurl": "~2.0.0",
4823 |         "escape-html": "~1.0.3",
4824 |         "on-finished": "2.4.1",
4825 |         "parseurl": "~1.3.3",
4826 |         "statuses": "2.0.1",
4827 |         "unpipe": "~1.0.0"
4828 |       },
4829 |       "engines": {
4830 |         "node": ">= 0.8"
4831 |       }
4832 |     },
4833 |     "node_modules/finalhandler/node_modules/debug": {
4834 |       "version": "2.6.9",
4835 |       "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
4836 |       "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
4837 |       "license": "MIT",
4838 |       "dependencies": {
4839 |         "ms": "2.0.0"
4840 |       }
4841 |     },
4842 |     "node_modules/finalhandler/node_modules/ms": {
4843 |       "version": "2.0.0",
4844 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
4845 |       "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
4846 |       "license": "MIT"
4847 |     },
4848 |     "node_modules/find-up": {
4849 |       "version": "5.0.0",
4850 |       "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
4851 |       "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
4852 |       "dev": true,
4853 |       "license": "MIT",
4854 |       "dependencies": {
4855 |         "locate-path": "^6.0.0",
4856 |         "path-exists": "^4.0.0"
4857 |       },
4858 |       "engines": {
4859 |         "node": ">=10"
4860 |       },
4861 |       "funding": {
4862 |         "url": "https://github.com/sponsors/sindresorhus"
4863 |       }
4864 |     },
4865 |     "node_modules/flat-cache": {
4866 |       "version": "4.0.1",
4867 |       "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
4868 |       "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
4869 |       "dev": true,
4870 |       "license": "MIT",
4871 |       "dependencies": {
4872 |         "flatted": "^3.2.9",
4873 |         "keyv": "^4.5.4"
4874 |       },
4875 |       "engines": {
4876 |         "node": ">=16"
4877 |       }
4878 |     },
4879 |     "node_modules/flatted": {
4880 |       "version": "3.3.2",
4881 |       "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.2.tgz",
4882 |       "integrity": "sha512-AiwGJM8YcNOaobumgtng+6NHuOqC3A7MixFeDafM3X9cIUM+xUXoS5Vfgf+OihAYe20fxqNM9yPBXJzRtZ/4eA==",
4883 |       "dev": true,
4884 |       "license": "ISC"
4885 |     },
4886 |     "node_modules/foreground-child": {
4887 |       "version": "3.3.0",
4888 |       "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
4889 |       "integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
4890 |       "license": "ISC",
4891 |       "dependencies": {
4892 |         "cross-spawn": "^7.0.0",
4893 |         "signal-exit": "^4.0.1"
4894 |       },
4895 |       "engines": {
4896 |         "node": ">=14"
4897 |       },
4898 |       "funding": {
4899 |         "url": "https://github.com/sponsors/isaacs"
4900 |       }
4901 |     },
4902 |     "node_modules/forwarded": {
4903 |       "version": "0.2.0",
4904 |       "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
4905 |       "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
4906 |       "license": "MIT",
4907 |       "engines": {
4908 |         "node": ">= 0.6"
4909 |       }
4910 |     },
4911 |     "node_modules/fraction.js": {
4912 |       "version": "4.3.7",
4913 |       "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
4914 |       "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
4915 |       "dev": true,
4916 |       "license": "MIT",
4917 |       "engines": {
4918 |         "node": "*"
4919 |       },
4920 |       "funding": {
4921 |         "type": "patreon",
4922 |         "url": "https://github.com/sponsors/rawify"
4923 |       }
4924 |     },
4925 |     "node_modules/fresh": {
4926 |       "version": "0.5.2",
4927 |       "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
4928 |       "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
4929 |       "license": "MIT",
4930 |       "engines": {
4931 |         "node": ">= 0.6"
4932 |       }
4933 |     },
4934 |     "node_modules/fsevents": {
4935 |       "version": "2.3.3",
4936 |       "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
4937 |       "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
4938 |       "hasInstallScript": true,
4939 |       "license": "MIT",
4940 |       "optional": true,
4941 |       "os": [
4942 |         "darwin"
4943 |       ],
4944 |       "engines": {
4945 |         "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
4946 |       }
4947 |     },
4948 |     "node_modules/function-bind": {
4949 |       "version": "1.1.2",
4950 |       "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
4951 |       "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
4952 |       "license": "MIT",
4953 |       "funding": {
4954 |         "url": "https://github.com/sponsors/ljharb"
4955 |       }
4956 |     },
4957 |     "node_modules/gensync": {
4958 |       "version": "1.0.0-beta.2",
4959 |       "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
4960 |       "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
4961 |       "dev": true,
4962 |       "license": "MIT",
4963 |       "engines": {
4964 |         "node": ">=6.9.0"
4965 |       }
4966 |     },
4967 |     "node_modules/get-caller-file": {
4968 |       "version": "2.0.5",
4969 |       "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
4970 |       "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
4971 |       "license": "ISC",
4972 |       "engines": {
4973 |         "node": "6.* || 8.* || >= 10.*"
4974 |       }
4975 |     },
4976 |     "node_modules/get-intrinsic": {
4977 |       "version": "1.3.0",
4978 |       "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
4979 |       "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
4980 |       "license": "MIT",
4981 |       "dependencies": {
4982 |         "call-bind-apply-helpers": "^1.0.2",
4983 |         "es-define-property": "^1.0.1",
4984 |         "es-errors": "^1.3.0",
4985 |         "es-object-atoms": "^1.1.1",
4986 |         "function-bind": "^1.1.2",
4987 |         "get-proto": "^1.0.1",
4988 |         "gopd": "^1.2.0",
4989 |         "has-symbols": "^1.1.0",
4990 |         "hasown": "^2.0.2",
4991 |         "math-intrinsics": "^1.1.0"
4992 |       },
4993 |       "engines": {
4994 |         "node": ">= 0.4"
4995 |       },
4996 |       "funding": {
4997 |         "url": "https://github.com/sponsors/ljharb"
4998 |       }
4999 |     },
5000 |     "node_modules/get-nonce": {
5001 |       "version": "1.0.1",
5002 |       "resolved": "https://registry.npmjs.org/get-nonce/-/get-nonce-1.0.1.tgz",
5003 |       "integrity": "sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==",
5004 |       "license": "MIT",
5005 |       "engines": {
5006 |         "node": ">=6"
5007 |       }
5008 |     },
5009 |     "node_modules/get-proto": {
5010 |       "version": "1.0.1",
5011 |       "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
5012 |       "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
5013 |       "license": "MIT",
5014 |       "dependencies": {
5015 |         "dunder-proto": "^1.0.1",
5016 |         "es-object-atoms": "^1.0.0"
5017 |       },
5018 |       "engines": {
5019 |         "node": ">= 0.4"
5020 |       }
5021 |     },
5022 |     "node_modules/get-tsconfig": {
5023 |       "version": "4.8.1",
5024 |       "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.8.1.tgz",
5025 |       "integrity": "sha512-k9PN+cFBmaLWtVz29SkUoqU5O0slLuHJXt/2P+tMVFT+phsSGXGkp9t3rQIqdz0e+06EHNGs3oM6ZX1s2zHxRg==",
5026 |       "dev": true,
5027 |       "license": "MIT",
5028 |       "dependencies": {
5029 |         "resolve-pkg-maps": "^1.0.0"
5030 |       },
5031 |       "funding": {
5032 |         "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
5033 |       }
5034 |     },
5035 |     "node_modules/glob": {
5036 |       "version": "10.4.5",
5037 |       "resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
5038 |       "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
5039 |       "license": "ISC",
5040 |       "dependencies": {
5041 |         "foreground-child": "^3.1.0",
5042 |         "jackspeak": "^3.1.2",
5043 |         "minimatch": "^9.0.4",
5044 |         "minipass": "^7.1.2",
5045 |         "package-json-from-dist": "^1.0.0",
5046 |         "path-scurry": "^1.11.1"
5047 |       },
5048 |       "bin": {
5049 |         "glob": "dist/esm/bin.mjs"
5050 |       },
5051 |       "funding": {
5052 |         "url": "https://github.com/sponsors/isaacs"
5053 |       }
5054 |     },
5055 |     "node_modules/glob-parent": {
5056 |       "version": "6.0.2",
5057 |       "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
5058 |       "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
5059 |       "license": "ISC",
5060 |       "dependencies": {
5061 |         "is-glob": "^4.0.3"
5062 |       },
5063 |       "engines": {
5064 |         "node": ">=10.13.0"
5065 |       }
5066 |     },
5067 |     "node_modules/glob/node_modules/brace-expansion": {
5068 |       "version": "2.0.1",
5069 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
5070 |       "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
5071 |       "license": "MIT",
5072 |       "dependencies": {
5073 |         "balanced-match": "^1.0.0"
5074 |       }
5075 |     },
5076 |     "node_modules/glob/node_modules/minimatch": {
5077 |       "version": "9.0.5",
5078 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
5079 |       "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
5080 |       "license": "ISC",
5081 |       "dependencies": {
5082 |         "brace-expansion": "^2.0.1"
5083 |       },
5084 |       "engines": {
5085 |         "node": ">=16 || 14 >=14.17"
5086 |       },
5087 |       "funding": {
5088 |         "url": "https://github.com/sponsors/isaacs"
5089 |       }
5090 |     },
5091 |     "node_modules/globals": {
5092 |       "version": "15.12.0",
5093 |       "resolved": "https://registry.npmjs.org/globals/-/globals-15.12.0.tgz",
5094 |       "integrity": "sha512-1+gLErljJFhbOVyaetcwJiJ4+eLe45S2E7P5UiZ9xGfeq3ATQf5DOv9G7MH3gGbKQLkzmNh2DxfZwLdw+j6oTQ==",
5095 |       "dev": true,
5096 |       "license": "MIT",
5097 |       "engines": {
5098 |         "node": ">=18"
5099 |       },
5100 |       "funding": {
5101 |         "url": "https://github.com/sponsors/sindresorhus"
5102 |       }
5103 |     },
5104 |     "node_modules/gopd": {
5105 |       "version": "1.2.0",
5106 |       "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
5107 |       "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
5108 |       "license": "MIT",
5109 |       "engines": {
5110 |         "node": ">= 0.4"
5111 |       },
5112 |       "funding": {
5113 |         "url": "https://github.com/sponsors/ljharb"
5114 |       }
5115 |     },
5116 |     "node_modules/graphemer": {
5117 |       "version": "1.4.0",
5118 |       "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
5119 |       "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
5120 |       "dev": true,
5121 |       "license": "MIT"
5122 |     },
5123 |     "node_modules/has-flag": {
5124 |       "version": "4.0.0",
5125 |       "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
5126 |       "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
5127 |       "license": "MIT",
5128 |       "engines": {
5129 |         "node": ">=8"
5130 |       }
5131 |     },
5132 |     "node_modules/has-symbols": {
5133 |       "version": "1.1.0",
5134 |       "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
5135 |       "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
5136 |       "license": "MIT",
5137 |       "engines": {
5138 |         "node": ">= 0.4"
5139 |       },
5140 |       "funding": {
5141 |         "url": "https://github.com/sponsors/ljharb"
5142 |       }
5143 |     },
5144 |     "node_modules/hasown": {
5145 |       "version": "2.0.2",
5146 |       "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
5147 |       "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
5148 |       "license": "MIT",
5149 |       "dependencies": {
5150 |         "function-bind": "^1.1.2"
5151 |       },
5152 |       "engines": {
5153 |         "node": ">= 0.4"
5154 |       }
5155 |     },
5156 |     "node_modules/http-errors": {
5157 |       "version": "2.0.0",
5158 |       "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
5159 |       "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
5160 |       "license": "MIT",
5161 |       "dependencies": {
5162 |         "depd": "2.0.0",
5163 |         "inherits": "2.0.4",
5164 |         "setprototypeof": "1.2.0",
5165 |         "statuses": "2.0.1",
5166 |         "toidentifier": "1.0.1"
5167 |       },
5168 |       "engines": {
5169 |         "node": ">= 0.8"
5170 |       }
5171 |     },
5172 |     "node_modules/iconv-lite": {
5173 |       "version": "0.4.24",
5174 |       "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
5175 |       "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
5176 |       "license": "MIT",
5177 |       "dependencies": {
5178 |         "safer-buffer": ">= 2.1.2 < 3"
5179 |       },
5180 |       "engines": {
5181 |         "node": ">=0.10.0"
5182 |       }
5183 |     },
5184 |     "node_modules/ignore": {
5185 |       "version": "5.3.2",
5186 |       "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
5187 |       "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
5188 |       "dev": true,
5189 |       "license": "MIT",
5190 |       "engines": {
5191 |         "node": ">= 4"
5192 |       }
5193 |     },
5194 |     "node_modules/import-fresh": {
5195 |       "version": "3.3.0",
5196 |       "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
5197 |       "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
5198 |       "dev": true,
5199 |       "license": "MIT",
5200 |       "dependencies": {
5201 |         "parent-module": "^1.0.0",
5202 |         "resolve-from": "^4.0.0"
5203 |       },
5204 |       "engines": {
5205 |         "node": ">=6"
5206 |       },
5207 |       "funding": {
5208 |         "url": "https://github.com/sponsors/sindresorhus"
5209 |       }
5210 |     },
5211 |     "node_modules/imurmurhash": {
5212 |       "version": "0.1.4",
5213 |       "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
5214 |       "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
5215 |       "dev": true,
5216 |       "license": "MIT",
5217 |       "engines": {
5218 |         "node": ">=0.8.19"
5219 |       }
5220 |     },
5221 |     "node_modules/inherits": {
5222 |       "version": "2.0.4",
5223 |       "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
5224 |       "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
5225 |       "license": "ISC"
5226 |     },
5227 |     "node_modules/invariant": {
5228 |       "version": "2.2.4",
5229 |       "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
5230 |       "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
5231 |       "license": "MIT",
5232 |       "dependencies": {
5233 |         "loose-envify": "^1.0.0"
5234 |       }
5235 |     },
5236 |     "node_modules/ipaddr.js": {
5237 |       "version": "1.9.1",
5238 |       "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
5239 |       "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
5240 |       "license": "MIT",
5241 |       "engines": {
5242 |         "node": ">= 0.10"
5243 |       }
5244 |     },
5245 |     "node_modules/is-binary-path": {
5246 |       "version": "2.1.0",
5247 |       "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
5248 |       "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
5249 |       "license": "MIT",
5250 |       "dependencies": {
5251 |         "binary-extensions": "^2.0.0"
5252 |       },
5253 |       "engines": {
5254 |         "node": ">=8"
5255 |       }
5256 |     },
5257 |     "node_modules/is-core-module": {
5258 |       "version": "2.15.1",
5259 |       "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.15.1.tgz",
5260 |       "integrity": "sha512-z0vtXSwucUJtANQWldhbtbt7BnL0vxiFjIdDLAatwhDYty2bad6s+rijD6Ri4YuYJubLzIJLUidCh09e1djEVQ==",
5261 |       "license": "MIT",
5262 |       "dependencies": {
5263 |         "hasown": "^2.0.2"
5264 |       },
5265 |       "engines": {
5266 |         "node": ">= 0.4"
5267 |       },
5268 |       "funding": {
5269 |         "url": "https://github.com/sponsors/ljharb"
5270 |       }
5271 |     },
5272 |     "node_modules/is-extglob": {
5273 |       "version": "2.1.1",
5274 |       "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
5275 |       "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
5276 |       "license": "MIT",
5277 |       "engines": {
5278 |         "node": ">=0.10.0"
5279 |       }
5280 |     },
5281 |     "node_modules/is-fullwidth-code-point": {
5282 |       "version": "3.0.0",
5283 |       "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
5284 |       "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
5285 |       "license": "MIT",
5286 |       "engines": {
5287 |         "node": ">=8"
5288 |       }
5289 |     },
5290 |     "node_modules/is-glob": {
5291 |       "version": "4.0.3",
5292 |       "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
5293 |       "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
5294 |       "license": "MIT",
5295 |       "dependencies": {
5296 |         "is-extglob": "^2.1.1"
5297 |       },
5298 |       "engines": {
5299 |         "node": ">=0.10.0"
5300 |       }
5301 |     },
5302 |     "node_modules/is-number": {
5303 |       "version": "7.0.0",
5304 |       "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
5305 |       "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
5306 |       "license": "MIT",
5307 |       "engines": {
5308 |         "node": ">=0.12.0"
5309 |       }
5310 |     },
5311 |     "node_modules/is-promise": {
5312 |       "version": "4.0.0",
5313 |       "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
5314 |       "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
5315 |       "license": "MIT"
5316 |     },
5317 |     "node_modules/isexe": {
5318 |       "version": "2.0.0",
5319 |       "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
5320 |       "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
5321 |       "license": "ISC"
5322 |     },
5323 |     "node_modules/jackspeak": {
5324 |       "version": "3.4.3",
5325 |       "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
5326 |       "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
5327 |       "license": "BlueOak-1.0.0",
5328 |       "dependencies": {
5329 |         "@isaacs/cliui": "^8.0.2"
5330 |       },
5331 |       "funding": {
5332 |         "url": "https://github.com/sponsors/isaacs"
5333 |       },
5334 |       "optionalDependencies": {
5335 |         "@pkgjs/parseargs": "^0.11.0"
5336 |       }
5337 |     },
5338 |     "node_modules/jiti": {
5339 |       "version": "1.21.6",
5340 |       "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.6.tgz",
5341 |       "integrity": "sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==",
5342 |       "license": "MIT",
5343 |       "bin": {
5344 |         "jiti": "bin/jiti.js"
5345 |       }
5346 |     },
5347 |     "node_modules/js-tokens": {
5348 |       "version": "4.0.0",
5349 |       "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
5350 |       "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
5351 |       "license": "MIT"
5352 |     },
5353 |     "node_modules/js-yaml": {
5354 |       "version": "4.1.0",
5355 |       "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
5356 |       "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
5357 |       "dev": true,
5358 |       "license": "MIT",
5359 |       "dependencies": {
5360 |         "argparse": "^2.0.1"
5361 |       },
5362 |       "bin": {
5363 |         "js-yaml": "bin/js-yaml.js"
5364 |       }
5365 |     },
5366 |     "node_modules/jsesc": {
5367 |       "version": "3.0.2",
5368 |       "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.0.2.tgz",
5369 |       "integrity": "sha512-xKqzzWXDttJuOcawBt4KnKHHIf5oQ/Cxax+0PWFG+DFDgHNAdi+TXECADI+RYiFUMmx8792xsMbbgXj4CwnP4g==",
5370 |       "dev": true,
5371 |       "license": "MIT",
5372 |       "bin": {
5373 |         "jsesc": "bin/jsesc"
5374 |       },
5375 |       "engines": {
5376 |         "node": ">=6"
5377 |       }
5378 |     },
5379 |     "node_modules/json-buffer": {
5380 |       "version": "3.0.1",
5381 |       "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
5382 |       "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
5383 |       "dev": true,
5384 |       "license": "MIT"
5385 |     },
5386 |     "node_modules/json-schema-traverse": {
5387 |       "version": "0.4.1",
5388 |       "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
5389 |       "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
5390 |       "dev": true,
5391 |       "license": "MIT"
5392 |     },
5393 |     "node_modules/json-stable-stringify-without-jsonify": {
5394 |       "version": "1.0.1",
5395 |       "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
5396 |       "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
5397 |       "dev": true,
5398 |       "license": "MIT"
5399 |     },
5400 |     "node_modules/json5": {
5401 |       "version": "2.2.3",
5402 |       "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
5403 |       "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
5404 |       "dev": true,
5405 |       "license": "MIT",
5406 |       "bin": {
5407 |         "json5": "lib/cli.js"
5408 |       },
5409 |       "engines": {
5410 |         "node": ">=6"
5411 |       }
5412 |     },
5413 |     "node_modules/keyv": {
5414 |       "version": "4.5.4",
5415 |       "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
5416 |       "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
5417 |       "dev": true,
5418 |       "license": "MIT",
5419 |       "dependencies": {
5420 |         "json-buffer": "3.0.1"
5421 |       }
5422 |     },
5423 |     "node_modules/levn": {
5424 |       "version": "0.4.1",
5425 |       "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
5426 |       "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
5427 |       "dev": true,
5428 |       "license": "MIT",
5429 |       "dependencies": {
5430 |         "prelude-ls": "^1.2.1",
5431 |         "type-check": "~0.4.0"
5432 |       },
5433 |       "engines": {
5434 |         "node": ">= 0.8.0"
5435 |       }
5436 |     },
5437 |     "node_modules/lilconfig": {
5438 |       "version": "2.1.0",
5439 |       "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.1.0.tgz",
5440 |       "integrity": "sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==",
5441 |       "license": "MIT",
5442 |       "engines": {
5443 |         "node": ">=10"
5444 |       }
5445 |     },
5446 |     "node_modules/lines-and-columns": {
5447 |       "version": "1.2.4",
5448 |       "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
5449 |       "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
5450 |       "license": "MIT"
5451 |     },
5452 |     "node_modules/locate-path": {
5453 |       "version": "6.0.0",
5454 |       "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
5455 |       "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
5456 |       "dev": true,
5457 |       "license": "MIT",
5458 |       "dependencies": {
5459 |         "p-locate": "^5.0.0"
5460 |       },
5461 |       "engines": {
5462 |         "node": ">=10"
5463 |       },
5464 |       "funding": {
5465 |         "url": "https://github.com/sponsors/sindresorhus"
5466 |       }
5467 |     },
5468 |     "node_modules/lodash": {
5469 |       "version": "4.17.21",
5470 |       "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
5471 |       "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
5472 |       "license": "MIT"
5473 |     },
5474 |     "node_modules/lodash.merge": {
5475 |       "version": "4.6.2",
5476 |       "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
5477 |       "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
5478 |       "dev": true,
5479 |       "license": "MIT"
5480 |     },
5481 |     "node_modules/loose-envify": {
5482 |       "version": "1.4.0",
5483 |       "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
5484 |       "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
5485 |       "license": "MIT",
5486 |       "dependencies": {
5487 |         "js-tokens": "^3.0.0 || ^4.0.0"
5488 |       },
5489 |       "bin": {
5490 |         "loose-envify": "cli.js"
5491 |       }
5492 |     },
5493 |     "node_modules/lru-cache": {
5494 |       "version": "5.1.1",
5495 |       "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
5496 |       "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
5497 |       "dev": true,
5498 |       "license": "ISC",
5499 |       "dependencies": {
5500 |         "yallist": "^3.0.2"
5501 |       }
5502 |     },
5503 |     "node_modules/lucide-react": {
5504 |       "version": "0.447.0",
5505 |       "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.447.0.tgz",
5506 |       "integrity": "sha512-SZ//hQmvi+kDKrNepArVkYK7/jfeZ5uFNEnYmd45RKZcbGD78KLnrcNXmgeg6m+xNHFvTG+CblszXCy4n6DN4w==",
5507 |       "license": "ISC",
5508 |       "peerDependencies": {
5509 |         "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0-rc"
5510 |       }
5511 |     },
5512 |     "node_modules/make-error": {
5513 |       "version": "1.3.6",
5514 |       "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
5515 |       "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
5516 |       "license": "ISC"
5517 |     },
5518 |     "node_modules/math-intrinsics": {
5519 |       "version": "1.1.0",
5520 |       "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
5521 |       "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
5522 |       "license": "MIT",
5523 |       "engines": {
5524 |         "node": ">= 0.4"
5525 |       }
5526 |     },
5527 |     "node_modules/media-typer": {
5528 |       "version": "0.3.0",
5529 |       "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
5530 |       "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
5531 |       "license": "MIT",
5532 |       "engines": {
5533 |         "node": ">= 0.6"
5534 |       }
5535 |     },
5536 |     "node_modules/merge-descriptors": {
5537 |       "version": "1.0.3",
5538 |       "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz",
5539 |       "integrity": "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==",
5540 |       "license": "MIT",
5541 |       "funding": {
5542 |         "url": "https://github.com/sponsors/sindresorhus"
5543 |       }
5544 |     },
5545 |     "node_modules/merge2": {
5546 |       "version": "1.4.1",
5547 |       "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
5548 |       "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
5549 |       "license": "MIT",
5550 |       "engines": {
5551 |         "node": ">= 8"
5552 |       }
5553 |     },
5554 |     "node_modules/methods": {
5555 |       "version": "1.1.2",
5556 |       "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
5557 |       "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
5558 |       "license": "MIT",
5559 |       "engines": {
5560 |         "node": ">= 0.6"
5561 |       }
5562 |     },
5563 |     "node_modules/micromatch": {
5564 |       "version": "4.0.8",
5565 |       "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
5566 |       "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
5567 |       "license": "MIT",
5568 |       "dependencies": {
5569 |         "braces": "^3.0.3",
5570 |         "picomatch": "^2.3.1"
5571 |       },
5572 |       "engines": {
5573 |         "node": ">=8.6"
5574 |       }
5575 |     },
5576 |     "node_modules/mime": {
5577 |       "version": "1.6.0",
5578 |       "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
5579 |       "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
5580 |       "license": "MIT",
5581 |       "bin": {
5582 |         "mime": "cli.js"
5583 |       },
5584 |       "engines": {
5585 |         "node": ">=4"
5586 |       }
5587 |     },
5588 |     "node_modules/mime-db": {
5589 |       "version": "1.52.0",
5590 |       "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
5591 |       "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
5592 |       "license": "MIT",
5593 |       "engines": {
5594 |         "node": ">= 0.6"
5595 |       }
5596 |     },
5597 |     "node_modules/mime-types": {
5598 |       "version": "2.1.35",
5599 |       "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
5600 |       "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
5601 |       "license": "MIT",
5602 |       "dependencies": {
5603 |         "mime-db": "1.52.0"
5604 |       },
5605 |       "engines": {
5606 |         "node": ">= 0.6"
5607 |       }
5608 |     },
5609 |     "node_modules/minimatch": {
5610 |       "version": "3.1.2",
5611 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
5612 |       "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
5613 |       "license": "ISC",
5614 |       "dependencies": {
5615 |         "brace-expansion": "^1.1.7"
5616 |       },
5617 |       "engines": {
5618 |         "node": "*"
5619 |       }
5620 |     },
5621 |     "node_modules/minipass": {
5622 |       "version": "7.1.2",
5623 |       "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
5624 |       "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
5625 |       "license": "ISC",
5626 |       "engines": {
5627 |         "node": ">=16 || 14 >=14.17"
5628 |       }
5629 |     },
5630 |     "node_modules/ms": {
5631 |       "version": "2.1.3",
5632 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
5633 |       "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
5634 |       "license": "MIT"
5635 |     },
5636 |     "node_modules/mz": {
5637 |       "version": "2.7.0",
5638 |       "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
5639 |       "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
5640 |       "license": "MIT",
5641 |       "dependencies": {
5642 |         "any-promise": "^1.0.0",
5643 |         "object-assign": "^4.0.1",
5644 |         "thenify-all": "^1.0.0"
5645 |       }
5646 |     },
5647 |     "node_modules/nanoid": {
5648 |       "version": "3.3.8",
5649 |       "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.8.tgz",
5650 |       "integrity": "sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==",
5651 |       "funding": [
5652 |         {
5653 |           "type": "github",
5654 |           "url": "https://github.com/sponsors/ai"
5655 |         }
5656 |       ],
5657 |       "license": "MIT",
5658 |       "bin": {
5659 |         "nanoid": "bin/nanoid.cjs"
5660 |       },
5661 |       "engines": {
5662 |         "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
5663 |       }
5664 |     },
5665 |     "node_modules/natural-compare": {
5666 |       "version": "1.4.0",
5667 |       "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
5668 |       "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
5669 |       "dev": true,
5670 |       "license": "MIT"
5671 |     },
5672 |     "node_modules/negotiator": {
5673 |       "version": "0.6.3",
5674 |       "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
5675 |       "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
5676 |       "license": "MIT",
5677 |       "engines": {
5678 |         "node": ">= 0.6"
5679 |       }
5680 |     },
5681 |     "node_modules/node-releases": {
5682 |       "version": "2.0.18",
5683 |       "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.18.tgz",
5684 |       "integrity": "sha512-d9VeXT4SJ7ZeOqGX6R5EM022wpL+eWPooLI+5UpWn2jCT1aosUQEhQP214x33Wkwx3JQMvIm+tIoVOdodFS40g==",
5685 |       "dev": true,
5686 |       "license": "MIT"
5687 |     },
5688 |     "node_modules/normalize-path": {
5689 |       "version": "3.0.0",
5690 |       "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
5691 |       "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
5692 |       "license": "MIT",
5693 |       "engines": {
5694 |         "node": ">=0.10.0"
5695 |       }
5696 |     },
5697 |     "node_modules/normalize-range": {
5698 |       "version": "0.1.2",
5699 |       "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
5700 |       "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
5701 |       "dev": true,
5702 |       "license": "MIT",
5703 |       "engines": {
5704 |         "node": ">=0.10.0"
5705 |       }
5706 |     },
5707 |     "node_modules/object-assign": {
5708 |       "version": "4.1.1",
5709 |       "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
5710 |       "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
5711 |       "license": "MIT",
5712 |       "engines": {
5713 |         "node": ">=0.10.0"
5714 |       }
5715 |     },
5716 |     "node_modules/object-hash": {
5717 |       "version": "3.0.0",
5718 |       "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
5719 |       "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
5720 |       "license": "MIT",
5721 |       "engines": {
5722 |         "node": ">= 6"
5723 |       }
5724 |     },
5725 |     "node_modules/object-inspect": {
5726 |       "version": "1.13.3",
5727 |       "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.3.tgz",
5728 |       "integrity": "sha512-kDCGIbxkDSXE3euJZZXzc6to7fCrKHNI/hSRQnRuQ+BWjFNzZwiFF8fj/6o2t2G9/jTj8PSIYTfCLelLZEeRpA==",
5729 |       "license": "MIT",
5730 |       "engines": {
5731 |         "node": ">= 0.4"
5732 |       },
5733 |       "funding": {
5734 |         "url": "https://github.com/sponsors/ljharb"
5735 |       }
5736 |     },
5737 |     "node_modules/on-finished": {
5738 |       "version": "2.4.1",
5739 |       "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
5740 |       "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
5741 |       "license": "MIT",
5742 |       "dependencies": {
5743 |         "ee-first": "1.1.1"
5744 |       },
5745 |       "engines": {
5746 |         "node": ">= 0.8"
5747 |       }
5748 |     },
5749 |     "node_modules/once": {
5750 |       "version": "1.4.0",
5751 |       "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
5752 |       "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
5753 |       "license": "ISC",
5754 |       "dependencies": {
5755 |         "wrappy": "1"
5756 |       }
5757 |     },
5758 |     "node_modules/optionator": {
5759 |       "version": "0.9.4",
5760 |       "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
5761 |       "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
5762 |       "dev": true,
5763 |       "license": "MIT",
5764 |       "dependencies": {
5765 |         "deep-is": "^0.1.3",
5766 |         "fast-levenshtein": "^2.0.6",
5767 |         "levn": "^0.4.1",
5768 |         "prelude-ls": "^1.2.1",
5769 |         "type-check": "^0.4.0",
5770 |         "word-wrap": "^1.2.5"
5771 |       },
5772 |       "engines": {
5773 |         "node": ">= 0.8.0"
5774 |       }
5775 |     },
5776 |     "node_modules/p-limit": {
5777 |       "version": "3.1.0",
5778 |       "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
5779 |       "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
5780 |       "dev": true,
5781 |       "license": "MIT",
5782 |       "dependencies": {
5783 |         "yocto-queue": "^0.1.0"
5784 |       },
5785 |       "engines": {
5786 |         "node": ">=10"
5787 |       },
5788 |       "funding": {
5789 |         "url": "https://github.com/sponsors/sindresorhus"
5790 |       }
5791 |     },
5792 |     "node_modules/p-locate": {
5793 |       "version": "5.0.0",
5794 |       "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
5795 |       "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
5796 |       "dev": true,
5797 |       "license": "MIT",
5798 |       "dependencies": {
5799 |         "p-limit": "^3.0.2"
5800 |       },
5801 |       "engines": {
5802 |         "node": ">=10"
5803 |       },
5804 |       "funding": {
5805 |         "url": "https://github.com/sponsors/sindresorhus"
5806 |       }
5807 |     },
5808 |     "node_modules/package-json-from-dist": {
5809 |       "version": "1.0.1",
5810 |       "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
5811 |       "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
5812 |       "license": "BlueOak-1.0.0"
5813 |     },
5814 |     "node_modules/parent-module": {
5815 |       "version": "1.0.1",
5816 |       "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
5817 |       "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
5818 |       "dev": true,
5819 |       "license": "MIT",
5820 |       "dependencies": {
5821 |         "callsites": "^3.0.0"
5822 |       },
5823 |       "engines": {
5824 |         "node": ">=6"
5825 |       }
5826 |     },
5827 |     "node_modules/parseurl": {
5828 |       "version": "1.3.3",
5829 |       "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
5830 |       "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
5831 |       "license": "MIT",
5832 |       "engines": {
5833 |         "node": ">= 0.8"
5834 |       }
5835 |     },
5836 |     "node_modules/path-exists": {
5837 |       "version": "4.0.0",
5838 |       "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
5839 |       "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
5840 |       "dev": true,
5841 |       "license": "MIT",
5842 |       "engines": {
5843 |         "node": ">=8"
5844 |       }
5845 |     },
5846 |     "node_modules/path-is-inside": {
5847 |       "version": "1.0.2",
5848 |       "resolved": "https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz",
5849 |       "integrity": "sha512-DUWJr3+ULp4zXmol/SZkFf3JGsS9/SIv+Y3Rt93/UjPpDpklB5f1er4O3POIbUuUJ3FXgqte2Q7SrU6zAqwk8w==",
5850 |       "license": "(WTFPL OR MIT)"
5851 |     },
5852 |     "node_modules/path-key": {
5853 |       "version": "3.1.1",
5854 |       "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
5855 |       "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
5856 |       "license": "MIT",
5857 |       "engines": {
5858 |         "node": ">=8"
5859 |       }
5860 |     },
5861 |     "node_modules/path-parse": {
5862 |       "version": "1.0.7",
5863 |       "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
5864 |       "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
5865 |       "license": "MIT"
5866 |     },
5867 |     "node_modules/path-scurry": {
5868 |       "version": "1.11.1",
5869 |       "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
5870 |       "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
5871 |       "license": "BlueOak-1.0.0",
5872 |       "dependencies": {
5873 |         "lru-cache": "^10.2.0",
5874 |         "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
5875 |       },
5876 |       "engines": {
5877 |         "node": ">=16 || 14 >=14.18"
5878 |       },
5879 |       "funding": {
5880 |         "url": "https://github.com/sponsors/isaacs"
5881 |       }
5882 |     },
5883 |     "node_modules/path-scurry/node_modules/lru-cache": {
5884 |       "version": "10.4.3",
5885 |       "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
5886 |       "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
5887 |       "license": "ISC"
5888 |     },
5889 |     "node_modules/path-to-regexp": {
5890 |       "version": "0.1.12",
5891 |       "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.12.tgz",
5892 |       "integrity": "sha512-RA1GjUVMnvYFxuqovrEqZoxxW5NUZqbwKtYz/Tt7nXerk0LbLblQmrsgdeOxV5SFHf0UDggjS/bSeOZwt1pmEQ==",
5893 |       "license": "MIT"
5894 |     },
5895 |     "node_modules/picocolors": {
5896 |       "version": "1.1.1",
5897 |       "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
5898 |       "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
5899 |       "license": "ISC"
5900 |     },
5901 |     "node_modules/picomatch": {
5902 |       "version": "2.3.1",
5903 |       "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
5904 |       "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
5905 |       "license": "MIT",
5906 |       "engines": {
5907 |         "node": ">=8.6"
5908 |       },
5909 |       "funding": {
5910 |         "url": "https://github.com/sponsors/jonschlinkert"
5911 |       }
5912 |     },
5913 |     "node_modules/pify": {
5914 |       "version": "2.3.0",
5915 |       "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
5916 |       "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
5917 |       "license": "MIT",
5918 |       "engines": {
5919 |         "node": ">=0.10.0"
5920 |       }
5921 |     },
5922 |     "node_modules/pirates": {
5923 |       "version": "4.0.6",
5924 |       "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.6.tgz",
5925 |       "integrity": "sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==",
5926 |       "license": "MIT",
5927 |       "engines": {
5928 |         "node": ">= 6"
5929 |       }
5930 |     },
5931 |     "node_modules/pkce-challenge": {
5932 |       "version": "4.1.0",
5933 |       "resolved": "https://registry.npmjs.org/pkce-challenge/-/pkce-challenge-4.1.0.tgz",
5934 |       "integrity": "sha512-ZBmhE1C9LcPoH9XZSdwiPtbPHZROwAnMy+kIFQVrnMCxY4Cudlz3gBOpzilgc0jOgRaiT3sIWfpMomW2ar2orQ==",
5935 |       "license": "MIT",
5936 |       "engines": {
5937 |         "node": ">=16.20.0"
5938 |       }
5939 |     },
5940 |     "node_modules/postcss": {
5941 |       "version": "8.4.49",
5942 |       "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.49.tgz",
5943 |       "integrity": "sha512-OCVPnIObs4N29kxTjzLfUryOkvZEq+pf8jTF0lg8E7uETuWHA+v7j3c/xJmiqpX450191LlmZfUKkXxkTry7nA==",
5944 |       "funding": [
5945 |         {
5946 |           "type": "opencollective",
5947 |           "url": "https://opencollective.com/postcss/"
5948 |         },
5949 |         {
5950 |           "type": "tidelift",
5951 |           "url": "https://tidelift.com/funding/github/npm/postcss"
5952 |         },
5953 |         {
5954 |           "type": "github",
5955 |           "url": "https://github.com/sponsors/ai"
5956 |         }
5957 |       ],
5958 |       "license": "MIT",
5959 |       "dependencies": {
5960 |         "nanoid": "^3.3.7",
5961 |         "picocolors": "^1.1.1",
5962 |         "source-map-js": "^1.2.1"
5963 |       },
5964 |       "engines": {
5965 |         "node": "^10 || ^12 || >=14"
5966 |       }
5967 |     },
5968 |     "node_modules/postcss-import": {
5969 |       "version": "15.1.0",
5970 |       "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
5971 |       "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
5972 |       "license": "MIT",
5973 |       "dependencies": {
5974 |         "postcss-value-parser": "^4.0.0",
5975 |         "read-cache": "^1.0.0",
5976 |         "resolve": "^1.1.7"
5977 |       },
5978 |       "engines": {
5979 |         "node": ">=14.0.0"
5980 |       },
5981 |       "peerDependencies": {
5982 |         "postcss": "^8.0.0"
5983 |       }
5984 |     },
5985 |     "node_modules/postcss-js": {
5986 |       "version": "4.0.1",
5987 |       "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz",
5988 |       "integrity": "sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==",
5989 |       "license": "MIT",
5990 |       "dependencies": {
5991 |         "camelcase-css": "^2.0.1"
5992 |       },
5993 |       "engines": {
5994 |         "node": "^12 || ^14 || >= 16"
5995 |       },
5996 |       "funding": {
5997 |         "type": "opencollective",
5998 |         "url": "https://opencollective.com/postcss/"
5999 |       },
6000 |       "peerDependencies": {
6001 |         "postcss": "^8.4.21"
6002 |       }
6003 |     },
6004 |     "node_modules/postcss-load-config": {
6005 |       "version": "4.0.2",
6006 |       "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
6007 |       "integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
6008 |       "funding": [
6009 |         {
6010 |           "type": "opencollective",
6011 |           "url": "https://opencollective.com/postcss/"
6012 |         },
6013 |         {
6014 |           "type": "github",
6015 |           "url": "https://github.com/sponsors/ai"
6016 |         }
6017 |       ],
6018 |       "license": "MIT",
6019 |       "dependencies": {
6020 |         "lilconfig": "^3.0.0",
6021 |         "yaml": "^2.3.4"
6022 |       },
6023 |       "engines": {
6024 |         "node": ">= 14"
6025 |       },
6026 |       "peerDependencies": {
6027 |         "postcss": ">=8.0.9",
6028 |         "ts-node": ">=9.0.0"
6029 |       },
6030 |       "peerDependenciesMeta": {
6031 |         "postcss": {
6032 |           "optional": true
6033 |         },
6034 |         "ts-node": {
6035 |           "optional": true
6036 |         }
6037 |       }
6038 |     },
6039 |     "node_modules/postcss-load-config/node_modules/lilconfig": {
6040 |       "version": "3.1.2",
6041 |       "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.2.tgz",
6042 |       "integrity": "sha512-eop+wDAvpItUys0FWkHIKeC9ybYrTGbU41U5K7+bttZZeohvnY7M9dZ5kB21GNWiFT2q1OoPTvncPCgSOVO5ow==",
6043 |       "license": "MIT",
6044 |       "engines": {
6045 |         "node": ">=14"
6046 |       },
6047 |       "funding": {
6048 |         "url": "https://github.com/sponsors/antonk52"
6049 |       }
6050 |     },
6051 |     "node_modules/postcss-nested": {
6052 |       "version": "6.2.0",
6053 |       "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
6054 |       "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
6055 |       "funding": [
6056 |         {
6057 |           "type": "opencollective",
6058 |           "url": "https://opencollective.com/postcss/"
6059 |         },
6060 |         {
6061 |           "type": "github",
6062 |           "url": "https://github.com/sponsors/ai"
6063 |         }
6064 |       ],
6065 |       "license": "MIT",
6066 |       "dependencies": {
6067 |         "postcss-selector-parser": "^6.1.1"
6068 |       },
6069 |       "engines": {
6070 |         "node": ">=12.0"
6071 |       },
6072 |       "peerDependencies": {
6073 |         "postcss": "^8.2.14"
6074 |       }
6075 |     },
6076 |     "node_modules/postcss-selector-parser": {
6077 |       "version": "6.1.2",
6078 |       "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
6079 |       "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
6080 |       "license": "MIT",
6081 |       "dependencies": {
6082 |         "cssesc": "^3.0.0",
6083 |         "util-deprecate": "^1.0.2"
6084 |       },
6085 |       "engines": {
6086 |         "node": ">=4"
6087 |       }
6088 |     },
6089 |     "node_modules/postcss-value-parser": {
6090 |       "version": "4.2.0",
6091 |       "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
6092 |       "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
6093 |       "license": "MIT"
6094 |     },
6095 |     "node_modules/prelude-ls": {
6096 |       "version": "1.2.1",
6097 |       "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
6098 |       "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
6099 |       "dev": true,
6100 |       "license": "MIT",
6101 |       "engines": {
6102 |         "node": ">= 0.8.0"
6103 |       }
6104 |     },
6105 |     "node_modules/prettier": {
6106 |       "version": "3.3.3",
6107 |       "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.3.3.tgz",
6108 |       "integrity": "sha512-i2tDNA0O5IrMO757lfrdQZCc2jPNDVntV0m/+4whiDfWaTKfMNgR7Qz0NAeGz/nRqF4m5/6CLzbP4/liHt12Ew==",
6109 |       "dev": true,
6110 |       "license": "MIT",
6111 |       "bin": {
6112 |         "prettier": "bin/prettier.cjs"
6113 |       },
6114 |       "engines": {
6115 |         "node": ">=14"
6116 |       },
6117 |       "funding": {
6118 |         "url": "https://github.com/prettier/prettier?sponsor=1"
6119 |       }
6120 |     },
6121 |     "node_modules/prismjs": {
6122 |       "version": "1.29.0",
6123 |       "resolved": "https://registry.npmjs.org/prismjs/-/prismjs-1.29.0.tgz",
6124 |       "integrity": "sha512-Kx/1w86q/epKcmte75LNrEoT+lX8pBpavuAbvJWRXar7Hz8jrtF+e3vY751p0R8H9HdArwaCTNDDzHg/ScJK1Q==",
6125 |       "license": "MIT",
6126 |       "engines": {
6127 |         "node": ">=6"
6128 |       }
6129 |     },
6130 |     "node_modules/proxy-addr": {
6131 |       "version": "2.0.7",
6132 |       "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
6133 |       "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
6134 |       "license": "MIT",
6135 |       "dependencies": {
6136 |         "forwarded": "0.2.0",
6137 |         "ipaddr.js": "1.9.1"
6138 |       },
6139 |       "engines": {
6140 |         "node": ">= 0.10"
6141 |       }
6142 |     },
6143 |     "node_modules/punycode": {
6144 |       "version": "2.3.1",
6145 |       "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
6146 |       "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
6147 |       "dev": true,
6148 |       "license": "MIT",
6149 |       "engines": {
6150 |         "node": ">=6"
6151 |       }
6152 |     },
6153 |     "node_modules/qs": {
6154 |       "version": "6.13.0",
6155 |       "resolved": "https://registry.npmjs.org/qs/-/qs-6.13.0.tgz",
6156 |       "integrity": "sha512-+38qI9SOr8tfZ4QmJNplMUxqjbe7LKvvZgWdExBOmd+egZTtjLB67Gu0HRX3u/XOq7UU2Nx6nsjvS16Z9uwfpg==",
6157 |       "license": "BSD-3-Clause",
6158 |       "dependencies": {
6159 |         "side-channel": "^1.0.6"
6160 |       },
6161 |       "engines": {
6162 |         "node": ">=0.6"
6163 |       },
6164 |       "funding": {
6165 |         "url": "https://github.com/sponsors/ljharb"
6166 |       }
6167 |     },
6168 |     "node_modules/queue-microtask": {
6169 |       "version": "1.2.3",
6170 |       "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
6171 |       "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
6172 |       "funding": [
6173 |         {
6174 |           "type": "github",
6175 |           "url": "https://github.com/sponsors/feross"
6176 |         },
6177 |         {
6178 |           "type": "patreon",
6179 |           "url": "https://www.patreon.com/feross"
6180 |         },
6181 |         {
6182 |           "type": "consulting",
6183 |           "url": "https://feross.org/support"
6184 |         }
6185 |       ],
6186 |       "license": "MIT"
6187 |     },
6188 |     "node_modules/range-parser": {
6189 |       "version": "1.2.1",
6190 |       "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
6191 |       "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
6192 |       "license": "MIT",
6193 |       "engines": {
6194 |         "node": ">= 0.6"
6195 |       }
6196 |     },
6197 |     "node_modules/raw-body": {
6198 |       "version": "3.0.0",
6199 |       "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.0.tgz",
6200 |       "integrity": "sha512-RmkhL8CAyCRPXCE28MMH0z2PNWQBNk2Q09ZdxM9IOOXwxwZbN+qbWaatPkdkWIKL2ZVDImrN/pK5HTRz2PcS4g==",
6201 |       "license": "MIT",
6202 |       "dependencies": {
6203 |         "bytes": "3.1.2",
6204 |         "http-errors": "2.0.0",
6205 |         "iconv-lite": "0.6.3",
6206 |         "unpipe": "1.0.0"
6207 |       },
6208 |       "engines": {
6209 |         "node": ">= 0.8"
6210 |       }
6211 |     },
6212 |     "node_modules/raw-body/node_modules/iconv-lite": {
6213 |       "version": "0.6.3",
6214 |       "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
6215 |       "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
6216 |       "license": "MIT",
6217 |       "dependencies": {
6218 |         "safer-buffer": ">= 2.1.2 < 3.0.0"
6219 |       },
6220 |       "engines": {
6221 |         "node": ">=0.10.0"
6222 |       }
6223 |     },
6224 |     "node_modules/react": {
6225 |       "version": "18.3.1",
6226 |       "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
6227 |       "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
6228 |       "license": "MIT",
6229 |       "dependencies": {
6230 |         "loose-envify": "^1.1.0"
6231 |       },
6232 |       "engines": {
6233 |         "node": ">=0.10.0"
6234 |       }
6235 |     },
6236 |     "node_modules/react-dom": {
6237 |       "version": "18.3.1",
6238 |       "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
6239 |       "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
6240 |       "license": "MIT",
6241 |       "dependencies": {
6242 |         "loose-envify": "^1.1.0",
6243 |         "scheduler": "^0.23.2"
6244 |       },
6245 |       "peerDependencies": {
6246 |         "react": "^18.3.1"
6247 |       }
6248 |     },
6249 |     "node_modules/react-refresh": {
6250 |       "version": "0.14.2",
6251 |       "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.14.2.tgz",
6252 |       "integrity": "sha512-jCvmsr+1IUSMUyzOkRcvnVbX3ZYC6g9TDrDbFuFmRDq7PD4yaGbLKNQL6k2jnArV8hjYxh7hVhAZB6s9HDGpZA==",
6253 |       "dev": true,
6254 |       "license": "MIT",
6255 |       "engines": {
6256 |         "node": ">=0.10.0"
6257 |       }
6258 |     },
6259 |     "node_modules/react-remove-scroll": {
6260 |       "version": "2.6.0",
6261 |       "resolved": "https://registry.npmjs.org/react-remove-scroll/-/react-remove-scroll-2.6.0.tgz",
6262 |       "integrity": "sha512-I2U4JVEsQenxDAKaVa3VZ/JeJZe0/2DxPWL8Tj8yLKctQJQiZM52pn/GWFpSp8dftjM3pSAHVJZscAnC/y+ySQ==",
6263 |       "license": "MIT",
6264 |       "dependencies": {
6265 |         "react-remove-scroll-bar": "^2.3.6",
6266 |         "react-style-singleton": "^2.2.1",
6267 |         "tslib": "^2.1.0",
6268 |         "use-callback-ref": "^1.3.0",
6269 |         "use-sidecar": "^1.1.2"
6270 |       },
6271 |       "engines": {
6272 |         "node": ">=10"
6273 |       },
6274 |       "peerDependencies": {
6275 |         "@types/react": "^16.8.0 || ^17.0.0 || ^18.0.0",
6276 |         "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
6277 |       },
6278 |       "peerDependenciesMeta": {
6279 |         "@types/react": {
6280 |           "optional": true
6281 |         }
6282 |       }
6283 |     },
6284 |     "node_modules/react-remove-scroll-bar": {
6285 |       "version": "2.3.6",
6286 |       "resolved": "https://registry.npmjs.org/react-remove-scroll-bar/-/react-remove-scroll-bar-2.3.6.tgz",
6287 |       "integrity": "sha512-DtSYaao4mBmX+HDo5YWYdBWQwYIQQshUV/dVxFxK+KM26Wjwp1gZ6rv6OC3oujI6Bfu6Xyg3TwK533AQutsn/g==",
6288 |       "license": "MIT",
6289 |       "dependencies": {
6290 |         "react-style-singleton": "^2.2.1",
6291 |         "tslib": "^2.0.0"
6292 |       },
6293 |       "engines": {
6294 |         "node": ">=10"
6295 |       },
6296 |       "peerDependencies": {
6297 |         "@types/react": "^16.8.0 || ^17.0.0 || ^18.0.0",
6298 |         "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
6299 |       },
6300 |       "peerDependenciesMeta": {
6301 |         "@types/react": {
6302 |           "optional": true
6303 |         }
6304 |       }
6305 |     },
6306 |     "node_modules/react-simple-code-editor": {
6307 |       "version": "0.14.1",
6308 |       "resolved": "https://registry.npmjs.org/react-simple-code-editor/-/react-simple-code-editor-0.14.1.tgz",
6309 |       "integrity": "sha512-BR5DtNRy+AswWJECyA17qhUDvrrCZ6zXOCfkQY5zSmb96BVUbpVAv03WpcjcwtCwiLbIANx3gebHOcXYn1EHow==",
6310 |       "license": "MIT",
6311 |       "peerDependencies": {
6312 |         "react": ">=16.8.0",
6313 |         "react-dom": ">=16.8.0"
6314 |       }
6315 |     },
6316 |     "node_modules/react-style-singleton": {
6317 |       "version": "2.2.1",
6318 |       "resolved": "https://registry.npmjs.org/react-style-singleton/-/react-style-singleton-2.2.1.tgz",
6319 |       "integrity": "sha512-ZWj0fHEMyWkHzKYUr2Bs/4zU6XLmq9HsgBURm7g5pAVfyn49DgUiNgY2d4lXRlYSiCif9YBGpQleewkcqddc7g==",
6320 |       "license": "MIT",
6321 |       "dependencies": {
6322 |         "get-nonce": "^1.0.0",
6323 |         "invariant": "^2.2.4",
6324 |         "tslib": "^2.0.0"
6325 |       },
6326 |       "engines": {
6327 |         "node": ">=10"
6328 |       },
6329 |       "peerDependencies": {
6330 |         "@types/react": "^16.8.0 || ^17.0.0 || ^18.0.0",
6331 |         "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
6332 |       },
6333 |       "peerDependenciesMeta": {
6334 |         "@types/react": {
6335 |           "optional": true
6336 |         }
6337 |       }
6338 |     },
6339 |     "node_modules/react-toastify": {
6340 |       "version": "10.0.6",
6341 |       "resolved": "https://registry.npmjs.org/react-toastify/-/react-toastify-10.0.6.tgz",
6342 |       "integrity": "sha512-yYjp+omCDf9lhZcrZHKbSq7YMuK0zcYkDFTzfRFgTXkTFHZ1ToxwAonzA4JI5CxA91JpjFLmwEsZEgfYfOqI1A==",
6343 |       "license": "MIT",
6344 |       "dependencies": {
6345 |         "clsx": "^2.1.0"
6346 |       },
6347 |       "peerDependencies": {
6348 |         "react": ">=18",
6349 |         "react-dom": ">=18"
6350 |       }
6351 |     },
6352 |     "node_modules/read-cache": {
6353 |       "version": "1.0.0",
6354 |       "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
6355 |       "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
6356 |       "license": "MIT",
6357 |       "dependencies": {
6358 |         "pify": "^2.3.0"
6359 |       }
6360 |     },
6361 |     "node_modules/readdirp": {
6362 |       "version": "3.6.0",
6363 |       "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
6364 |       "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
6365 |       "license": "MIT",
6366 |       "dependencies": {
6367 |         "picomatch": "^2.2.1"
6368 |       },
6369 |       "engines": {
6370 |         "node": ">=8.10.0"
6371 |       }
6372 |     },
6373 |     "node_modules/require-directory": {
6374 |       "version": "2.1.1",
6375 |       "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
6376 |       "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
6377 |       "license": "MIT",
6378 |       "engines": {
6379 |         "node": ">=0.10.0"
6380 |       }
6381 |     },
6382 |     "node_modules/resolve": {
6383 |       "version": "1.22.8",
6384 |       "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",
6385 |       "integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",
6386 |       "license": "MIT",
6387 |       "dependencies": {
6388 |         "is-core-module": "^2.13.0",
6389 |         "path-parse": "^1.0.7",
6390 |         "supports-preserve-symlinks-flag": "^1.0.0"
6391 |       },
6392 |       "bin": {
6393 |         "resolve": "bin/resolve"
6394 |       },
6395 |       "funding": {
6396 |         "url": "https://github.com/sponsors/ljharb"
6397 |       }
6398 |     },
6399 |     "node_modules/resolve-from": {
6400 |       "version": "4.0.0",
6401 |       "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
6402 |       "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
6403 |       "dev": true,
6404 |       "license": "MIT",
6405 |       "engines": {
6406 |         "node": ">=4"
6407 |       }
6408 |     },
6409 |     "node_modules/resolve-pkg-maps": {
6410 |       "version": "1.0.0",
6411 |       "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
6412 |       "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
6413 |       "dev": true,
6414 |       "license": "MIT",
6415 |       "funding": {
6416 |         "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
6417 |       }
6418 |     },
6419 |     "node_modules/reusify": {
6420 |       "version": "1.0.4",
6421 |       "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
6422 |       "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
6423 |       "license": "MIT",
6424 |       "engines": {
6425 |         "iojs": ">=1.0.0",
6426 |         "node": ">=0.10.0"
6427 |       }
6428 |     },
6429 |     "node_modules/rollup": {
6430 |       "version": "4.27.4",
6431 |       "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.27.4.tgz",
6432 |       "integrity": "sha512-RLKxqHEMjh/RGLsDxAEsaLO3mWgyoU6x9w6n1ikAzet4B3gI2/3yP6PWY2p9QzRTh6MfEIXB3MwsOY0Iv3vNrw==",
6433 |       "dev": true,
6434 |       "license": "MIT",
6435 |       "dependencies": {
6436 |         "@types/estree": "1.0.6"
6437 |       },
6438 |       "bin": {
6439 |         "rollup": "dist/bin/rollup"
6440 |       },
6441 |       "engines": {
6442 |         "node": ">=18.0.0",
6443 |         "npm": ">=8.0.0"
6444 |       },
6445 |       "optionalDependencies": {
6446 |         "@rollup/rollup-android-arm-eabi": "4.27.4",
6447 |         "@rollup/rollup-android-arm64": "4.27.4",
6448 |         "@rollup/rollup-darwin-arm64": "4.27.4",
6449 |         "@rollup/rollup-darwin-x64": "4.27.4",
6450 |         "@rollup/rollup-freebsd-arm64": "4.27.4",
6451 |         "@rollup/rollup-freebsd-x64": "4.27.4",
6452 |         "@rollup/rollup-linux-arm-gnueabihf": "4.27.4",
6453 |         "@rollup/rollup-linux-arm-musleabihf": "4.27.4",
6454 |         "@rollup/rollup-linux-arm64-gnu": "4.27.4",
6455 |         "@rollup/rollup-linux-arm64-musl": "4.27.4",
6456 |         "@rollup/rollup-linux-powerpc64le-gnu": "4.27.4",
6457 |         "@rollup/rollup-linux-riscv64-gnu": "4.27.4",
6458 |         "@rollup/rollup-linux-s390x-gnu": "4.27.4",
6459 |         "@rollup/rollup-linux-x64-gnu": "4.27.4",
6460 |         "@rollup/rollup-linux-x64-musl": "4.27.4",
6461 |         "@rollup/rollup-win32-arm64-msvc": "4.27.4",
6462 |         "@rollup/rollup-win32-ia32-msvc": "4.27.4",
6463 |         "@rollup/rollup-win32-x64-msvc": "4.27.4",
6464 |         "fsevents": "~2.3.2"
6465 |       }
6466 |     },
6467 |     "node_modules/router": {
6468 |       "version": "2.1.0",
6469 |       "resolved": "https://registry.npmjs.org/router/-/router-2.1.0.tgz",
6470 |       "integrity": "sha512-/m/NSLxeYEgWNtyC+WtNHCF7jbGxOibVWKnn+1Psff4dJGOfoXP+MuC/f2CwSmyiHdOIzYnYFp4W6GxWfekaLA==",
6471 |       "license": "MIT",
6472 |       "dependencies": {
6473 |         "is-promise": "^4.0.0",
6474 |         "parseurl": "^1.3.3",
6475 |         "path-to-regexp": "^8.0.0"
6476 |       },
6477 |       "engines": {
6478 |         "node": ">= 18"
6479 |       }
6480 |     },
6481 |     "node_modules/router/node_modules/path-to-regexp": {
6482 |       "version": "8.2.0",
6483 |       "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.2.0.tgz",
6484 |       "integrity": "sha512-TdrF7fW9Rphjq4RjrW0Kp2AW0Ahwu9sRGTkS6bvDi0SCwZlEZYmcfDbEsTz8RVk0EHIS/Vd1bv3JhG+1xZuAyQ==",
6485 |       "license": "MIT",
6486 |       "engines": {
6487 |         "node": ">=16"
6488 |       }
6489 |     },
6490 |     "node_modules/run-parallel": {
6491 |       "version": "1.2.0",
6492 |       "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
6493 |       "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
6494 |       "funding": [
6495 |         {
6496 |           "type": "github",
6497 |           "url": "https://github.com/sponsors/feross"
6498 |         },
6499 |         {
6500 |           "type": "patreon",
6501 |           "url": "https://www.patreon.com/feross"
6502 |         },
6503 |         {
6504 |           "type": "consulting",
6505 |           "url": "https://feross.org/support"
6506 |         }
6507 |       ],
6508 |       "license": "MIT",
6509 |       "dependencies": {
6510 |         "queue-microtask": "^1.2.2"
6511 |       }
6512 |     },
6513 |     "node_modules/rxjs": {
6514 |       "version": "7.8.1",
6515 |       "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.1.tgz",
6516 |       "integrity": "sha512-AA3TVj+0A2iuIoQkWEK/tqFjBq2j+6PO6Y0zJcvzLAFhEFIO3HL0vls9hWLncZbAAbK0mar7oZ4V079I/qPMxg==",
6517 |       "license": "Apache-2.0",
6518 |       "dependencies": {
6519 |         "tslib": "^2.1.0"
6520 |       }
6521 |     },
6522 |     "node_modules/safe-buffer": {
6523 |       "version": "5.2.1",
6524 |       "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
6525 |       "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
6526 |       "funding": [
6527 |         {
6528 |           "type": "github",
6529 |           "url": "https://github.com/sponsors/feross"
6530 |         },
6531 |         {
6532 |           "type": "patreon",
6533 |           "url": "https://www.patreon.com/feross"
6534 |         },
6535 |         {
6536 |           "type": "consulting",
6537 |           "url": "https://feross.org/support"
6538 |         }
6539 |       ],
6540 |       "license": "MIT"
6541 |     },
6542 |     "node_modules/safer-buffer": {
6543 |       "version": "2.1.2",
6544 |       "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
6545 |       "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
6546 |       "license": "MIT"
6547 |     },
6548 |     "node_modules/scheduler": {
6549 |       "version": "0.23.2",
6550 |       "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
6551 |       "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
6552 |       "license": "MIT",
6553 |       "dependencies": {
6554 |         "loose-envify": "^1.1.0"
6555 |       }
6556 |     },
6557 |     "node_modules/semver": {
6558 |       "version": "6.3.1",
6559 |       "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
6560 |       "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
6561 |       "dev": true,
6562 |       "license": "ISC",
6563 |       "bin": {
6564 |         "semver": "bin/semver.js"
6565 |       }
6566 |     },
6567 |     "node_modules/send": {
6568 |       "version": "0.19.0",
6569 |       "resolved": "https://registry.npmjs.org/send/-/send-0.19.0.tgz",
6570 |       "integrity": "sha512-dW41u5VfLXu8SJh5bwRmyYUbAoSB3c9uQh6L8h/KtsFREPWpbX1lrljJo186Jc4nmci/sGUZ9a0a0J2zgfq2hw==",
6571 |       "license": "MIT",
6572 |       "dependencies": {
6573 |         "debug": "2.6.9",
6574 |         "depd": "2.0.0",
6575 |         "destroy": "1.2.0",
6576 |         "encodeurl": "~1.0.2",
6577 |         "escape-html": "~1.0.3",
6578 |         "etag": "~1.8.1",
6579 |         "fresh": "0.5.2",
6580 |         "http-errors": "2.0.0",
6581 |         "mime": "1.6.0",
6582 |         "ms": "2.1.3",
6583 |         "on-finished": "2.4.1",
6584 |         "range-parser": "~1.2.1",
6585 |         "statuses": "2.0.1"
6586 |       },
6587 |       "engines": {
6588 |         "node": ">= 0.8.0"
6589 |       }
6590 |     },
6591 |     "node_modules/send/node_modules/debug": {
6592 |       "version": "2.6.9",
6593 |       "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
6594 |       "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
6595 |       "license": "MIT",
6596 |       "dependencies": {
6597 |         "ms": "2.0.0"
6598 |       }
6599 |     },
6600 |     "node_modules/send/node_modules/debug/node_modules/ms": {
6601 |       "version": "2.0.0",
6602 |       "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
6603 |       "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
6604 |       "license": "MIT"
6605 |     },
6606 |     "node_modules/send/node_modules/encodeurl": {
6607 |       "version": "1.0.2",
6608 |       "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
6609 |       "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
6610 |       "license": "MIT",
6611 |       "engines": {
6612 |         "node": ">= 0.8"
6613 |       }
6614 |     },
6615 |     "node_modules/serve-handler": {
6616 |       "version": "6.1.6",
6617 |       "resolved": "https://registry.npmjs.org/serve-handler/-/serve-handler-6.1.6.tgz",
6618 |       "integrity": "sha512-x5RL9Y2p5+Sh3D38Fh9i/iQ5ZK+e4xuXRd/pGbM4D13tgo/MGwbttUk8emytcr1YYzBYs+apnUngBDFYfpjPuQ==",
6619 |       "license": "MIT",
6620 |       "dependencies": {
6621 |         "bytes": "3.0.0",
6622 |         "content-disposition": "0.5.2",
6623 |         "mime-types": "2.1.18",
6624 |         "minimatch": "3.1.2",
6625 |         "path-is-inside": "1.0.2",
6626 |         "path-to-regexp": "3.3.0",
6627 |         "range-parser": "1.2.0"
6628 |       }
6629 |     },
6630 |     "node_modules/serve-handler/node_modules/bytes": {
6631 |       "version": "3.0.0",
6632 |       "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
6633 |       "integrity": "sha512-pMhOfFDPiv9t5jjIXkHosWmkSyQbvsgEVNkz0ERHbuLh2T/7j4Mqqpz523Fe8MVY89KC6Sh/QfS2sM+SjgFDcw==",
6634 |       "license": "MIT",
6635 |       "engines": {
6636 |         "node": ">= 0.8"
6637 |       }
6638 |     },
6639 |     "node_modules/serve-handler/node_modules/content-disposition": {
6640 |       "version": "0.5.2",
6641 |       "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.2.tgz",
6642 |       "integrity": "sha512-kRGRZw3bLlFISDBgwTSA1TMBFN6J6GWDeubmDE3AF+3+yXL8hTWv8r5rkLbqYXY4RjPk/EzHnClI3zQf1cFmHA==",
6643 |       "license": "MIT",
6644 |       "engines": {
6645 |         "node": ">= 0.6"
6646 |       }
6647 |     },
6648 |     "node_modules/serve-handler/node_modules/mime-db": {
6649 |       "version": "1.33.0",
6650 |       "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.33.0.tgz",
6651 |       "integrity": "sha512-BHJ/EKruNIqJf/QahvxwQZXKygOQ256myeN/Ew+THcAa5q+PjyTTMMeNQC4DZw5AwfvelsUrA6B67NKMqXDbzQ==",
6652 |       "license": "MIT",
6653 |       "engines": {
6654 |         "node": ">= 0.6"
6655 |       }
6656 |     },
6657 |     "node_modules/serve-handler/node_modules/mime-types": {
6658 |       "version": "2.1.18",
6659 |       "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.18.tgz",
6660 |       "integrity": "sha512-lc/aahn+t4/SWV/qcmumYjymLsWfN3ELhpmVuUFjgsORruuZPVSwAQryq+HHGvO/SI2KVX26bx+En+zhM8g8hQ==",
6661 |       "license": "MIT",
6662 |       "dependencies": {
6663 |         "mime-db": "~1.33.0"
6664 |       },
6665 |       "engines": {
6666 |         "node": ">= 0.6"
6667 |       }
6668 |     },
6669 |     "node_modules/serve-handler/node_modules/path-to-regexp": {
6670 |       "version": "3.3.0",
6671 |       "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-3.3.0.tgz",
6672 |       "integrity": "sha512-qyCH421YQPS2WFDxDjftfc1ZR5WKQzVzqsp4n9M2kQhVOo/ByahFoUNJfl58kOcEGfQ//7weFTDhm+ss8Ecxgw==",
6673 |       "license": "MIT"
6674 |     },
6675 |     "node_modules/serve-handler/node_modules/range-parser": {
6676 |       "version": "1.2.0",
6677 |       "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.0.tgz",
6678 |       "integrity": "sha512-kA5WQoNVo4t9lNx2kQNFCxKeBl5IbbSNBl1M/tLkw9WCn+hxNBAW5Qh8gdhs63CJnhjJ2zQWFoqPJP2sK1AV5A==",
6679 |       "license": "MIT",
6680 |       "engines": {
6681 |         "node": ">= 0.6"
6682 |       }
6683 |     },
6684 |     "node_modules/serve-static": {
6685 |       "version": "1.16.2",
6686 |       "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.2.tgz",
6687 |       "integrity": "sha512-VqpjJZKadQB/PEbEwvFdO43Ax5dFBZ2UECszz8bQ7pi7wt//PWe1P6MN7eCnjsatYtBT6EuiClbjSWP2WrIoTw==",
6688 |       "license": "MIT",
6689 |       "dependencies": {
6690 |         "encodeurl": "~2.0.0",
6691 |         "escape-html": "~1.0.3",
6692 |         "parseurl": "~1.3.3",
6693 |         "send": "0.19.0"
6694 |       },
6695 |       "engines": {
6696 |         "node": ">= 0.8.0"
6697 |       }
6698 |     },
6699 |     "node_modules/setprototypeof": {
6700 |       "version": "1.2.0",
6701 |       "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
6702 |       "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
6703 |       "license": "ISC"
6704 |     },
6705 |     "node_modules/shebang-command": {
6706 |       "version": "2.0.0",
6707 |       "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
6708 |       "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
6709 |       "license": "MIT",
6710 |       "dependencies": {
6711 |         "shebang-regex": "^3.0.0"
6712 |       },
6713 |       "engines": {
6714 |         "node": ">=8"
6715 |       }
6716 |     },
6717 |     "node_modules/shebang-regex": {
6718 |       "version": "3.0.0",
6719 |       "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
6720 |       "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
6721 |       "license": "MIT",
6722 |       "engines": {
6723 |         "node": ">=8"
6724 |       }
6725 |     },
6726 |     "node_modules/shell-quote": {
6727 |       "version": "1.8.2",
6728 |       "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.8.2.tgz",
6729 |       "integrity": "sha512-AzqKpGKjrj7EM6rKVQEPpB288oCfnrEIuyoT9cyF4nmGa7V8Zk6f7RRqYisX8X9m+Q7bd632aZW4ky7EhbQztA==",
6730 |       "license": "MIT",
6731 |       "engines": {
6732 |         "node": ">= 0.4"
6733 |       },
6734 |       "funding": {
6735 |         "url": "https://github.com/sponsors/ljharb"
6736 |       }
6737 |     },
6738 |     "node_modules/side-channel": {
6739 |       "version": "1.1.0",
6740 |       "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
6741 |       "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
6742 |       "license": "MIT",
6743 |       "dependencies": {
6744 |         "es-errors": "^1.3.0",
6745 |         "object-inspect": "^1.13.3",
6746 |         "side-channel-list": "^1.0.0",
6747 |         "side-channel-map": "^1.0.1",
6748 |         "side-channel-weakmap": "^1.0.2"
6749 |       },
6750 |       "engines": {
6751 |         "node": ">= 0.4"
6752 |       },
6753 |       "funding": {
6754 |         "url": "https://github.com/sponsors/ljharb"
6755 |       }
6756 |     },
6757 |     "node_modules/side-channel-list": {
6758 |       "version": "1.0.0",
6759 |       "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
6760 |       "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
6761 |       "license": "MIT",
6762 |       "dependencies": {
6763 |         "es-errors": "^1.3.0",
6764 |         "object-inspect": "^1.13.3"
6765 |       },
6766 |       "engines": {
6767 |         "node": ">= 0.4"
6768 |       },
6769 |       "funding": {
6770 |         "url": "https://github.com/sponsors/ljharb"
6771 |       }
6772 |     },
6773 |     "node_modules/side-channel-map": {
6774 |       "version": "1.0.1",
6775 |       "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
6776 |       "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
6777 |       "license": "MIT",
6778 |       "dependencies": {
6779 |         "call-bound": "^1.0.2",
6780 |         "es-errors": "^1.3.0",
6781 |         "get-intrinsic": "^1.2.5",
6782 |         "object-inspect": "^1.13.3"
6783 |       },
6784 |       "engines": {
6785 |         "node": ">= 0.4"
6786 |       },
6787 |       "funding": {
6788 |         "url": "https://github.com/sponsors/ljharb"
6789 |       }
6790 |     },
6791 |     "node_modules/side-channel-weakmap": {
6792 |       "version": "1.0.2",
6793 |       "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
6794 |       "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
6795 |       "license": "MIT",
6796 |       "dependencies": {
6797 |         "call-bound": "^1.0.2",
6798 |         "es-errors": "^1.3.0",
6799 |         "get-intrinsic": "^1.2.5",
6800 |         "object-inspect": "^1.13.3",
6801 |         "side-channel-map": "^1.0.1"
6802 |       },
6803 |       "engines": {
6804 |         "node": ">= 0.4"
6805 |       },
6806 |       "funding": {
6807 |         "url": "https://github.com/sponsors/ljharb"
6808 |       }
6809 |     },
6810 |     "node_modules/signal-exit": {
6811 |       "version": "4.1.0",
6812 |       "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
6813 |       "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
6814 |       "license": "ISC",
6815 |       "engines": {
6816 |         "node": ">=14"
6817 |       },
6818 |       "funding": {
6819 |         "url": "https://github.com/sponsors/isaacs"
6820 |       }
6821 |     },
6822 |     "node_modules/source-map-js": {
6823 |       "version": "1.2.1",
6824 |       "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
6825 |       "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
6826 |       "license": "BSD-3-Clause",
6827 |       "engines": {
6828 |         "node": ">=0.10.0"
6829 |       }
6830 |     },
6831 |     "node_modules/spawn-rx": {
6832 |       "version": "5.1.2",
6833 |       "resolved": "https://registry.npmjs.org/spawn-rx/-/spawn-rx-5.1.2.tgz",
6834 |       "integrity": "sha512-/y7tJKALVZ1lPzeZZB9jYnmtrL7d0N2zkorii5a7r7dhHkWIuLTzZpZzMJLK1dmYRgX/NCc4iarTO3F7BS2c/A==",
6835 |       "license": "MIT",
6836 |       "dependencies": {
6837 |         "debug": "^4.3.7",
6838 |         "rxjs": "^7.8.1"
6839 |       }
6840 |     },
6841 |     "node_modules/statuses": {
6842 |       "version": "2.0.1",
6843 |       "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
6844 |       "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
6845 |       "license": "MIT",
6846 |       "engines": {
6847 |         "node": ">= 0.8"
6848 |       }
6849 |     },
6850 |     "node_modules/string-width": {
6851 |       "version": "4.2.3",
6852 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
6853 |       "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
6854 |       "license": "MIT",
6855 |       "dependencies": {
6856 |         "emoji-regex": "^8.0.0",
6857 |         "is-fullwidth-code-point": "^3.0.0",
6858 |         "strip-ansi": "^6.0.1"
6859 |       },
6860 |       "engines": {
6861 |         "node": ">=8"
6862 |       }
6863 |     },
6864 |     "node_modules/string-width-cjs": {
6865 |       "name": "string-width",
6866 |       "version": "4.2.3",
6867 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
6868 |       "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
6869 |       "license": "MIT",
6870 |       "dependencies": {
6871 |         "emoji-regex": "^8.0.0",
6872 |         "is-fullwidth-code-point": "^3.0.0",
6873 |         "strip-ansi": "^6.0.1"
6874 |       },
6875 |       "engines": {
6876 |         "node": ">=8"
6877 |       }
6878 |     },
6879 |     "node_modules/strip-ansi": {
6880 |       "version": "6.0.1",
6881 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
6882 |       "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
6883 |       "license": "MIT",
6884 |       "dependencies": {
6885 |         "ansi-regex": "^5.0.1"
6886 |       },
6887 |       "engines": {
6888 |         "node": ">=8"
6889 |       }
6890 |     },
6891 |     "node_modules/strip-ansi-cjs": {
6892 |       "name": "strip-ansi",
6893 |       "version": "6.0.1",
6894 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
6895 |       "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
6896 |       "license": "MIT",
6897 |       "dependencies": {
6898 |         "ansi-regex": "^5.0.1"
6899 |       },
6900 |       "engines": {
6901 |         "node": ">=8"
6902 |       }
6903 |     },
6904 |     "node_modules/strip-json-comments": {
6905 |       "version": "3.1.1",
6906 |       "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
6907 |       "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
6908 |       "dev": true,
6909 |       "license": "MIT",
6910 |       "engines": {
6911 |         "node": ">=8"
6912 |       },
6913 |       "funding": {
6914 |         "url": "https://github.com/sponsors/sindresorhus"
6915 |       }
6916 |     },
6917 |     "node_modules/sucrase": {
6918 |       "version": "3.35.0",
6919 |       "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
6920 |       "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
6921 |       "license": "MIT",
6922 |       "dependencies": {
6923 |         "@jridgewell/gen-mapping": "^0.3.2",
6924 |         "commander": "^4.0.0",
6925 |         "glob": "^10.3.10",
6926 |         "lines-and-columns": "^1.1.6",
6927 |         "mz": "^2.7.0",
6928 |         "pirates": "^4.0.1",
6929 |         "ts-interface-checker": "^0.1.9"
6930 |       },
6931 |       "bin": {
6932 |         "sucrase": "bin/sucrase",
6933 |         "sucrase-node": "bin/sucrase-node"
6934 |       },
6935 |       "engines": {
6936 |         "node": ">=16 || 14 >=14.17"
6937 |       }
6938 |     },
6939 |     "node_modules/supports-color": {
6940 |       "version": "8.1.1",
6941 |       "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
6942 |       "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
6943 |       "license": "MIT",
6944 |       "dependencies": {
6945 |         "has-flag": "^4.0.0"
6946 |       },
6947 |       "engines": {
6948 |         "node": ">=10"
6949 |       },
6950 |       "funding": {
6951 |         "url": "https://github.com/chalk/supports-color?sponsor=1"
6952 |       }
6953 |     },
6954 |     "node_modules/supports-preserve-symlinks-flag": {
6955 |       "version": "1.0.0",
6956 |       "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
6957 |       "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
6958 |       "license": "MIT",
6959 |       "engines": {
6960 |         "node": ">= 0.4"
6961 |       },
6962 |       "funding": {
6963 |         "url": "https://github.com/sponsors/ljharb"
6964 |       }
6965 |     },
6966 |     "node_modules/tailwind-merge": {
6967 |       "version": "2.5.5",
6968 |       "resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-2.5.5.tgz",
6969 |       "integrity": "sha512-0LXunzzAZzo0tEPxV3I297ffKZPlKDrjj7NXphC8V5ak9yHC5zRmxnOe2m/Rd/7ivsOMJe3JZ2JVocoDdQTRBA==",
6970 |       "license": "MIT",
6971 |       "funding": {
6972 |         "type": "github",
6973 |         "url": "https://github.com/sponsors/dcastil"
6974 |       }
6975 |     },
6976 |     "node_modules/tailwindcss": {
6977 |       "version": "3.4.15",
6978 |       "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.15.tgz",
6979 |       "integrity": "sha512-r4MeXnfBmSOuKUWmXe6h2CcyfzJCEk4F0pptO5jlnYSIViUkVmsawj80N5h2lO3gwcmSb4n3PuN+e+GC1Guylw==",
6980 |       "license": "MIT",
6981 |       "dependencies": {
6982 |         "@alloc/quick-lru": "^5.2.0",
6983 |         "arg": "^5.0.2",
6984 |         "chokidar": "^3.6.0",
6985 |         "didyoumean": "^1.2.2",
6986 |         "dlv": "^1.1.3",
6987 |         "fast-glob": "^3.3.2",
6988 |         "glob-parent": "^6.0.2",
6989 |         "is-glob": "^4.0.3",
6990 |         "jiti": "^1.21.6",
6991 |         "lilconfig": "^2.1.0",
6992 |         "micromatch": "^4.0.8",
6993 |         "normalize-path": "^3.0.0",
6994 |         "object-hash": "^3.0.0",
6995 |         "picocolors": "^1.1.1",
6996 |         "postcss": "^8.4.47",
6997 |         "postcss-import": "^15.1.0",
6998 |         "postcss-js": "^4.0.1",
6999 |         "postcss-load-config": "^4.0.2",
7000 |         "postcss-nested": "^6.2.0",
7001 |         "postcss-selector-parser": "^6.1.2",
7002 |         "resolve": "^1.22.8",
7003 |         "sucrase": "^3.35.0"
7004 |       },
7005 |       "bin": {
7006 |         "tailwind": "lib/cli.js",
7007 |         "tailwindcss": "lib/cli.js"
7008 |       },
7009 |       "engines": {
7010 |         "node": ">=14.0.0"
7011 |       }
7012 |     },
7013 |     "node_modules/tailwindcss-animate": {
7014 |       "version": "1.0.7",
7015 |       "resolved": "https://registry.npmjs.org/tailwindcss-animate/-/tailwindcss-animate-1.0.7.tgz",
7016 |       "integrity": "sha512-bl6mpH3T7I3UFxuvDEXLxy/VuFxBk5bbzplh7tXI68mwMokNYd1t9qPBHlnyTwfa4JGC4zP516I1hYYtQ/vspA==",
7017 |       "license": "MIT",
7018 |       "peerDependencies": {
7019 |         "tailwindcss": ">=3.0.0 || insiders"
7020 |       }
7021 |     },
7022 |     "node_modules/thenify": {
7023 |       "version": "3.3.1",
7024 |       "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
7025 |       "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
7026 |       "license": "MIT",
7027 |       "dependencies": {
7028 |         "any-promise": "^1.0.0"
7029 |       }
7030 |     },
7031 |     "node_modules/thenify-all": {
7032 |       "version": "1.6.0",
7033 |       "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
7034 |       "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
7035 |       "license": "MIT",
7036 |       "dependencies": {
7037 |         "thenify": ">= 3.1.0 < 4"
7038 |       },
7039 |       "engines": {
7040 |         "node": ">=0.8"
7041 |       }
7042 |     },
7043 |     "node_modules/to-regex-range": {
7044 |       "version": "5.0.1",
7045 |       "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
7046 |       "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
7047 |       "license": "MIT",
7048 |       "dependencies": {
7049 |         "is-number": "^7.0.0"
7050 |       },
7051 |       "engines": {
7052 |         "node": ">=8.0"
7053 |       }
7054 |     },
7055 |     "node_modules/toidentifier": {
7056 |       "version": "1.0.1",
7057 |       "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
7058 |       "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
7059 |       "license": "MIT",
7060 |       "engines": {
7061 |         "node": ">=0.6"
7062 |       }
7063 |     },
7064 |     "node_modules/tree-kill": {
7065 |       "version": "1.2.2",
7066 |       "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
7067 |       "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
7068 |       "license": "MIT",
7069 |       "bin": {
7070 |         "tree-kill": "cli.js"
7071 |       }
7072 |     },
7073 |     "node_modules/ts-api-utils": {
7074 |       "version": "1.4.2",
7075 |       "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.4.2.tgz",
7076 |       "integrity": "sha512-ZF5gQIQa/UmzfvxbHZI3JXN0/Jt+vnAfAviNRAMc491laiK6YCLpCW9ft8oaCRFOTxCZtUTE6XB0ZQAe3olntw==",
7077 |       "dev": true,
7078 |       "license": "MIT",
7079 |       "engines": {
7080 |         "node": ">=16"
7081 |       },
7082 |       "peerDependencies": {
7083 |         "typescript": ">=4.2.0"
7084 |       }
7085 |     },
7086 |     "node_modules/ts-interface-checker": {
7087 |       "version": "0.1.13",
7088 |       "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
7089 |       "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
7090 |       "license": "Apache-2.0"
7091 |     },
7092 |     "node_modules/ts-node": {
7093 |       "version": "10.9.2",
7094 |       "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
7095 |       "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
7096 |       "license": "MIT",
7097 |       "dependencies": {
7098 |         "@cspotcode/source-map-support": "^0.8.0",
7099 |         "@tsconfig/node10": "^1.0.7",
7100 |         "@tsconfig/node12": "^1.0.7",
7101 |         "@tsconfig/node14": "^1.0.0",
7102 |         "@tsconfig/node16": "^1.0.2",
7103 |         "acorn": "^8.4.1",
7104 |         "acorn-walk": "^8.1.1",
7105 |         "arg": "^4.1.0",
7106 |         "create-require": "^1.1.0",
7107 |         "diff": "^4.0.1",
7108 |         "make-error": "^1.1.1",
7109 |         "v8-compile-cache-lib": "^3.0.1",
7110 |         "yn": "3.1.1"
7111 |       },
7112 |       "bin": {
7113 |         "ts-node": "dist/bin.js",
7114 |         "ts-node-cwd": "dist/bin-cwd.js",
7115 |         "ts-node-esm": "dist/bin-esm.js",
7116 |         "ts-node-script": "dist/bin-script.js",
7117 |         "ts-node-transpile-only": "dist/bin-transpile.js",
7118 |         "ts-script": "dist/bin-script-deprecated.js"
7119 |       },
7120 |       "peerDependencies": {
7121 |         "@swc/core": ">=1.2.50",
7122 |         "@swc/wasm": ">=1.2.50",
7123 |         "@types/node": "*",
7124 |         "typescript": ">=2.7"
7125 |       },
7126 |       "peerDependenciesMeta": {
7127 |         "@swc/core": {
7128 |           "optional": true
7129 |         },
7130 |         "@swc/wasm": {
7131 |           "optional": true
7132 |         }
7133 |       }
7134 |     },
7135 |     "node_modules/ts-node/node_modules/arg": {
7136 |       "version": "4.1.3",
7137 |       "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
7138 |       "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
7139 |       "license": "MIT"
7140 |     },
7141 |     "node_modules/tslib": {
7142 |       "version": "2.8.1",
7143 |       "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
7144 |       "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
7145 |       "license": "0BSD"
7146 |     },
7147 |     "node_modules/tsx": {
7148 |       "version": "4.19.2",
7149 |       "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.19.2.tgz",
7150 |       "integrity": "sha512-pOUl6Vo2LUq/bSa8S5q7b91cgNSjctn9ugq/+Mvow99qW6x/UZYwzxy/3NmqoT66eHYfCVvFvACC58UBPFf28g==",
7151 |       "dev": true,
7152 |       "license": "MIT",
7153 |       "dependencies": {
7154 |         "esbuild": "~0.23.0",
7155 |         "get-tsconfig": "^4.7.5"
7156 |       },
7157 |       "bin": {
7158 |         "tsx": "dist/cli.mjs"
7159 |       },
7160 |       "engines": {
7161 |         "node": ">=18.0.0"
7162 |       },
7163 |       "optionalDependencies": {
7164 |         "fsevents": "~2.3.3"
7165 |       }
7166 |     },
7167 |     "node_modules/type-check": {
7168 |       "version": "0.4.0",
7169 |       "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
7170 |       "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
7171 |       "dev": true,
7172 |       "license": "MIT",
7173 |       "dependencies": {
7174 |         "prelude-ls": "^1.2.1"
7175 |       },
7176 |       "engines": {
7177 |         "node": ">= 0.8.0"
7178 |       }
7179 |     },
7180 |     "node_modules/type-is": {
7181 |       "version": "1.6.18",
7182 |       "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
7183 |       "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
7184 |       "license": "MIT",
7185 |       "dependencies": {
7186 |         "media-typer": "0.3.0",
7187 |         "mime-types": "~2.1.24"
7188 |       },
7189 |       "engines": {
7190 |         "node": ">= 0.6"
7191 |       }
7192 |     },
7193 |     "node_modules/typescript": {
7194 |       "version": "5.7.2",
7195 |       "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.7.2.tgz",
7196 |       "integrity": "sha512-i5t66RHxDvVN40HfDd1PsEThGNnlMCMT3jMUuoh9/0TaqWevNontacunWyN02LA9/fIbEWlcHZcgTKb9QoaLfg==",
7197 |       "license": "Apache-2.0",
7198 |       "bin": {
7199 |         "tsc": "bin/tsc",
7200 |         "tsserver": "bin/tsserver"
7201 |       },
7202 |       "engines": {
7203 |         "node": ">=14.17"
7204 |       }
7205 |     },
7206 |     "node_modules/typescript-eslint": {
7207 |       "version": "8.16.0",
7208 |       "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.16.0.tgz",
7209 |       "integrity": "sha512-wDkVmlY6O2do4V+lZd0GtRfbtXbeD0q9WygwXXSJnC1xorE8eqyC2L1tJimqpSeFrOzRlYtWnUp/uzgHQOgfBQ==",
7210 |       "dev": true,
7211 |       "license": "MIT",
7212 |       "dependencies": {
7213 |         "@typescript-eslint/eslint-plugin": "8.16.0",
7214 |         "@typescript-eslint/parser": "8.16.0",
7215 |         "@typescript-eslint/utils": "8.16.0"
7216 |       },
7217 |       "engines": {
7218 |         "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
7219 |       },
7220 |       "funding": {
7221 |         "type": "opencollective",
7222 |         "url": "https://opencollective.com/typescript-eslint"
7223 |       },
7224 |       "peerDependencies": {
7225 |         "eslint": "^8.57.0 || ^9.0.0"
7226 |       },
7227 |       "peerDependenciesMeta": {
7228 |         "typescript": {
7229 |           "optional": true
7230 |         }
7231 |       }
7232 |     },
7233 |     "node_modules/undici-types": {
7234 |       "version": "6.20.0",
7235 |       "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.20.0.tgz",
7236 |       "integrity": "sha512-Ny6QZ2Nju20vw1SRHe3d9jVu6gJ+4e3+MMpqu7pqE5HT6WsTSlce++GQmK5UXS8mzV8DSYHrQH+Xrf2jVcuKNg==",
7237 |       "license": "MIT"
7238 |     },
7239 |     "node_modules/unpipe": {
7240 |       "version": "1.0.0",
7241 |       "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
7242 |       "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
7243 |       "license": "MIT",
7244 |       "engines": {
7245 |         "node": ">= 0.8"
7246 |       }
7247 |     },
7248 |     "node_modules/update-browserslist-db": {
7249 |       "version": "1.1.1",
7250 |       "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.1.tgz",
7251 |       "integrity": "sha512-R8UzCaa9Az+38REPiJ1tXlImTJXlVfgHZsglwBD/k6nj76ctsH1E3q4doGrukiLQd3sGQYu56r5+lo5r94l29A==",
7252 |       "dev": true,
7253 |       "funding": [
7254 |         {
7255 |           "type": "opencollective",
7256 |           "url": "https://opencollective.com/browserslist"
7257 |         },
7258 |         {
7259 |           "type": "tidelift",
7260 |           "url": "https://tidelift.com/funding/github/npm/browserslist"
7261 |         },
7262 |         {
7263 |           "type": "github",
7264 |           "url": "https://github.com/sponsors/ai"
7265 |         }
7266 |       ],
7267 |       "license": "MIT",
7268 |       "dependencies": {
7269 |         "escalade": "^3.2.0",
7270 |         "picocolors": "^1.1.0"
7271 |       },
7272 |       "bin": {
7273 |         "update-browserslist-db": "cli.js"
7274 |       },
7275 |       "peerDependencies": {
7276 |         "browserslist": ">= 4.21.0"
7277 |       }
7278 |     },
7279 |     "node_modules/uri-js": {
7280 |       "version": "4.4.1",
7281 |       "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
7282 |       "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
7283 |       "dev": true,
7284 |       "license": "BSD-2-Clause",
7285 |       "dependencies": {
7286 |         "punycode": "^2.1.0"
7287 |       }
7288 |     },
7289 |     "node_modules/use-callback-ref": {
7290 |       "version": "1.3.2",
7291 |       "resolved": "https://registry.npmjs.org/use-callback-ref/-/use-callback-ref-1.3.2.tgz",
7292 |       "integrity": "sha512-elOQwe6Q8gqZgDA8mrh44qRTQqpIHDcZ3hXTLjBe1i4ph8XpNJnO+aQf3NaG+lriLopI4HMx9VjQLfPQ6vhnoA==",
7293 |       "license": "MIT",
7294 |       "dependencies": {
7295 |         "tslib": "^2.0.0"
7296 |       },
7297 |       "engines": {
7298 |         "node": ">=10"
7299 |       },
7300 |       "peerDependencies": {
7301 |         "@types/react": "^16.8.0 || ^17.0.0 || ^18.0.0",
7302 |         "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
7303 |       },
7304 |       "peerDependenciesMeta": {
7305 |         "@types/react": {
7306 |           "optional": true
7307 |         }
7308 |       }
7309 |     },
7310 |     "node_modules/use-sidecar": {
7311 |       "version": "1.1.2",
7312 |       "resolved": "https://registry.npmjs.org/use-sidecar/-/use-sidecar-1.1.2.tgz",
7313 |       "integrity": "sha512-epTbsLuzZ7lPClpz2TyryBfztm7m+28DlEv2ZCQ3MDr5ssiwyOwGH/e5F9CkfWjJ1t4clvI58yF822/GUkjjhw==",
7314 |       "license": "MIT",
7315 |       "dependencies": {
7316 |         "detect-node-es": "^1.1.0",
7317 |         "tslib": "^2.0.0"
7318 |       },
7319 |       "engines": {
7320 |         "node": ">=10"
7321 |       },
7322 |       "peerDependencies": {
7323 |         "@types/react": "^16.9.0 || ^17.0.0 || ^18.0.0",
7324 |         "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
7325 |       },
7326 |       "peerDependenciesMeta": {
7327 |         "@types/react": {
7328 |           "optional": true
7329 |         }
7330 |       }
7331 |     },
7332 |     "node_modules/use-sync-external-store": {
7333 |       "version": "1.4.0",
7334 |       "resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.4.0.tgz",
7335 |       "integrity": "sha512-9WXSPC5fMv61vaupRkCKCxsPxBocVnwakBEkMIHHpkTTg6icbJtg6jzgtLDm4bl3cSHAca52rYWih0k4K3PfHw==",
7336 |       "peerDependencies": {
7337 |         "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
7338 |       }
7339 |     },
7340 |     "node_modules/util-deprecate": {
7341 |       "version": "1.0.2",
7342 |       "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
7343 |       "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
7344 |       "license": "MIT"
7345 |     },
7346 |     "node_modules/utils-merge": {
7347 |       "version": "1.0.1",
7348 |       "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
7349 |       "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
7350 |       "license": "MIT",
7351 |       "engines": {
7352 |         "node": ">= 0.4.0"
7353 |       }
7354 |     },
7355 |     "node_modules/v8-compile-cache-lib": {
7356 |       "version": "3.0.1",
7357 |       "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
7358 |       "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
7359 |       "license": "MIT"
7360 |     },
7361 |     "node_modules/vary": {
7362 |       "version": "1.1.2",
7363 |       "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
7364 |       "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
7365 |       "license": "MIT",
7366 |       "engines": {
7367 |         "node": ">= 0.8"
7368 |       }
7369 |     },
7370 |     "node_modules/vite": {
7371 |       "version": "5.4.12",
7372 |       "resolved": "https://registry.npmjs.org/vite/-/vite-5.4.12.tgz",
7373 |       "integrity": "sha512-KwUaKB27TvWwDJr1GjjWthLMATbGEbeWYZIbGZ5qFIsgPP3vWzLu4cVooqhm5/Z2SPDUMjyPVjTztm5tYKwQxA==",
7374 |       "dev": true,
7375 |       "license": "MIT",
7376 |       "dependencies": {
7377 |         "esbuild": "^0.21.3",
7378 |         "postcss": "^8.4.43",
7379 |         "rollup": "^4.20.0"
7380 |       },
7381 |       "bin": {
7382 |         "vite": "bin/vite.js"
7383 |       },
7384 |       "engines": {
7385 |         "node": "^18.0.0 || >=20.0.0"
7386 |       },
7387 |       "funding": {
7388 |         "url": "https://github.com/vitejs/vite?sponsor=1"
7389 |       },
7390 |       "optionalDependencies": {
7391 |         "fsevents": "~2.3.3"
7392 |       },
7393 |       "peerDependencies": {
7394 |         "@types/node": "^18.0.0 || >=20.0.0",
7395 |         "less": "*",
7396 |         "lightningcss": "^1.21.0",
7397 |         "sass": "*",
7398 |         "sass-embedded": "*",
7399 |         "stylus": "*",
7400 |         "sugarss": "*",
7401 |         "terser": "^5.4.0"
7402 |       },
7403 |       "peerDependenciesMeta": {
7404 |         "@types/node": {
7405 |           "optional": true
7406 |         },
7407 |         "less": {
7408 |           "optional": true
7409 |         },
7410 |         "lightningcss": {
7411 |           "optional": true
7412 |         },
7413 |         "sass": {
7414 |           "optional": true
7415 |         },
7416 |         "sass-embedded": {
7417 |           "optional": true
7418 |         },
7419 |         "stylus": {
7420 |           "optional": true
7421 |         },
7422 |         "sugarss": {
7423 |           "optional": true
7424 |         },
7425 |         "terser": {
7426 |           "optional": true
7427 |         }
7428 |       }
7429 |     },
7430 |     "node_modules/vite/node_modules/@esbuild/aix-ppc64": {
7431 |       "version": "0.21.5",
7432 |       "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
7433 |       "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
7434 |       "cpu": [
7435 |         "ppc64"
7436 |       ],
7437 |       "dev": true,
7438 |       "license": "MIT",
7439 |       "optional": true,
7440 |       "os": [
7441 |         "aix"
7442 |       ],
7443 |       "engines": {
7444 |         "node": ">=12"
7445 |       }
7446 |     },
7447 |     "node_modules/vite/node_modules/@esbuild/android-arm": {
7448 |       "version": "0.21.5",
7449 |       "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
7450 |       "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
7451 |       "cpu": [
7452 |         "arm"
7453 |       ],
7454 |       "dev": true,
7455 |       "license": "MIT",
7456 |       "optional": true,
7457 |       "os": [
7458 |         "android"
7459 |       ],
7460 |       "engines": {
7461 |         "node": ">=12"
7462 |       }
7463 |     },
7464 |     "node_modules/vite/node_modules/@esbuild/android-arm64": {
7465 |       "version": "0.21.5",
7466 |       "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
7467 |       "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
7468 |       "cpu": [
7469 |         "arm64"
7470 |       ],
7471 |       "dev": true,
7472 |       "license": "MIT",
7473 |       "optional": true,
7474 |       "os": [
7475 |         "android"
7476 |       ],
7477 |       "engines": {
7478 |         "node": ">=12"
7479 |       }
7480 |     },
7481 |     "node_modules/vite/node_modules/@esbuild/android-x64": {
7482 |       "version": "0.21.5",
7483 |       "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
7484 |       "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
7485 |       "cpu": [
7486 |         "x64"
7487 |       ],
7488 |       "dev": true,
7489 |       "license": "MIT",
7490 |       "optional": true,
7491 |       "os": [
7492 |         "android"
7493 |       ],
7494 |       "engines": {
7495 |         "node": ">=12"
7496 |       }
7497 |     },
7498 |     "node_modules/vite/node_modules/@esbuild/darwin-arm64": {
7499 |       "version": "0.21.5",
7500 |       "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
7501 |       "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
7502 |       "cpu": [
7503 |         "arm64"
7504 |       ],
7505 |       "dev": true,
7506 |       "license": "MIT",
7507 |       "optional": true,
7508 |       "os": [
7509 |         "darwin"
7510 |       ],
7511 |       "engines": {
7512 |         "node": ">=12"
7513 |       }
7514 |     },
7515 |     "node_modules/vite/node_modules/@esbuild/darwin-x64": {
7516 |       "version": "0.21.5",
7517 |       "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
7518 |       "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
7519 |       "cpu": [
7520 |         "x64"
7521 |       ],
7522 |       "dev": true,
7523 |       "license": "MIT",
7524 |       "optional": true,
7525 |       "os": [
7526 |         "darwin"
7527 |       ],
7528 |       "engines": {
7529 |         "node": ">=12"
7530 |       }
7531 |     },
7532 |     "node_modules/vite/node_modules/@esbuild/freebsd-arm64": {
7533 |       "version": "0.21.5",
7534 |       "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
7535 |       "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
7536 |       "cpu": [
7537 |         "arm64"
7538 |       ],
7539 |       "dev": true,
7540 |       "license": "MIT",
7541 |       "optional": true,
7542 |       "os": [
7543 |         "freebsd"
7544 |       ],
7545 |       "engines": {
7546 |         "node": ">=12"
7547 |       }
7548 |     },
7549 |     "node_modules/vite/node_modules/@esbuild/freebsd-x64": {
7550 |       "version": "0.21.5",
7551 |       "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
7552 |       "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
7553 |       "cpu": [
7554 |         "x64"
7555 |       ],
7556 |       "dev": true,
7557 |       "license": "MIT",
7558 |       "optional": true,
7559 |       "os": [
7560 |         "freebsd"
7561 |       ],
7562 |       "engines": {
7563 |         "node": ">=12"
7564 |       }
7565 |     },
7566 |     "node_modules/vite/node_modules/@esbuild/linux-arm": {
7567 |       "version": "0.21.5",
7568 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
7569 |       "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
7570 |       "cpu": [
7571 |         "arm"
7572 |       ],
7573 |       "dev": true,
7574 |       "license": "MIT",
7575 |       "optional": true,
7576 |       "os": [
7577 |         "linux"
7578 |       ],
7579 |       "engines": {
7580 |         "node": ">=12"
7581 |       }
7582 |     },
7583 |     "node_modules/vite/node_modules/@esbuild/linux-arm64": {
7584 |       "version": "0.21.5",
7585 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
7586 |       "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
7587 |       "cpu": [
7588 |         "arm64"
7589 |       ],
7590 |       "dev": true,
7591 |       "license": "MIT",
7592 |       "optional": true,
7593 |       "os": [
7594 |         "linux"
7595 |       ],
7596 |       "engines": {
7597 |         "node": ">=12"
7598 |       }
7599 |     },
7600 |     "node_modules/vite/node_modules/@esbuild/linux-ia32": {
7601 |       "version": "0.21.5",
7602 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
7603 |       "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
7604 |       "cpu": [
7605 |         "ia32"
7606 |       ],
7607 |       "dev": true,
7608 |       "license": "MIT",
7609 |       "optional": true,
7610 |       "os": [
7611 |         "linux"
7612 |       ],
7613 |       "engines": {
7614 |         "node": ">=12"
7615 |       }
7616 |     },
7617 |     "node_modules/vite/node_modules/@esbuild/linux-loong64": {
7618 |       "version": "0.21.5",
7619 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
7620 |       "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
7621 |       "cpu": [
7622 |         "loong64"
7623 |       ],
7624 |       "dev": true,
7625 |       "license": "MIT",
7626 |       "optional": true,
7627 |       "os": [
7628 |         "linux"
7629 |       ],
7630 |       "engines": {
7631 |         "node": ">=12"
7632 |       }
7633 |     },
7634 |     "node_modules/vite/node_modules/@esbuild/linux-mips64el": {
7635 |       "version": "0.21.5",
7636 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
7637 |       "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
7638 |       "cpu": [
7639 |         "mips64el"
7640 |       ],
7641 |       "dev": true,
7642 |       "license": "MIT",
7643 |       "optional": true,
7644 |       "os": [
7645 |         "linux"
7646 |       ],
7647 |       "engines": {
7648 |         "node": ">=12"
7649 |       }
7650 |     },
7651 |     "node_modules/vite/node_modules/@esbuild/linux-ppc64": {
7652 |       "version": "0.21.5",
7653 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
7654 |       "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
7655 |       "cpu": [
7656 |         "ppc64"
7657 |       ],
7658 |       "dev": true,
7659 |       "license": "MIT",
7660 |       "optional": true,
7661 |       "os": [
7662 |         "linux"
7663 |       ],
7664 |       "engines": {
7665 |         "node": ">=12"
7666 |       }
7667 |     },
7668 |     "node_modules/vite/node_modules/@esbuild/linux-riscv64": {
7669 |       "version": "0.21.5",
7670 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
7671 |       "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
7672 |       "cpu": [
7673 |         "riscv64"
7674 |       ],
7675 |       "dev": true,
7676 |       "license": "MIT",
7677 |       "optional": true,
7678 |       "os": [
7679 |         "linux"
7680 |       ],
7681 |       "engines": {
7682 |         "node": ">=12"
7683 |       }
7684 |     },
7685 |     "node_modules/vite/node_modules/@esbuild/linux-s390x": {
7686 |       "version": "0.21.5",
7687 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
7688 |       "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
7689 |       "cpu": [
7690 |         "s390x"
7691 |       ],
7692 |       "dev": true,
7693 |       "license": "MIT",
7694 |       "optional": true,
7695 |       "os": [
7696 |         "linux"
7697 |       ],
7698 |       "engines": {
7699 |         "node": ">=12"
7700 |       }
7701 |     },
7702 |     "node_modules/vite/node_modules/@esbuild/linux-x64": {
7703 |       "version": "0.21.5",
7704 |       "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
7705 |       "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
7706 |       "cpu": [
7707 |         "x64"
7708 |       ],
7709 |       "dev": true,
7710 |       "license": "MIT",
7711 |       "optional": true,
7712 |       "os": [
7713 |         "linux"
7714 |       ],
7715 |       "engines": {
7716 |         "node": ">=12"
7717 |       }
7718 |     },
7719 |     "node_modules/vite/node_modules/@esbuild/netbsd-x64": {
7720 |       "version": "0.21.5",
7721 |       "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
7722 |       "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
7723 |       "cpu": [
7724 |         "x64"
7725 |       ],
7726 |       "dev": true,
7727 |       "license": "MIT",
7728 |       "optional": true,
7729 |       "os": [
7730 |         "netbsd"
7731 |       ],
7732 |       "engines": {
7733 |         "node": ">=12"
7734 |       }
7735 |     },
7736 |     "node_modules/vite/node_modules/@esbuild/openbsd-x64": {
7737 |       "version": "0.21.5",
7738 |       "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
7739 |       "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
7740 |       "cpu": [
7741 |         "x64"
7742 |       ],
7743 |       "dev": true,
7744 |       "license": "MIT",
7745 |       "optional": true,
7746 |       "os": [
7747 |         "openbsd"
7748 |       ],
7749 |       "engines": {
7750 |         "node": ">=12"
7751 |       }
7752 |     },
7753 |     "node_modules/vite/node_modules/@esbuild/sunos-x64": {
7754 |       "version": "0.21.5",
7755 |       "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
7756 |       "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
7757 |       "cpu": [
7758 |         "x64"
7759 |       ],
7760 |       "dev": true,
7761 |       "license": "MIT",
7762 |       "optional": true,
7763 |       "os": [
7764 |         "sunos"
7765 |       ],
7766 |       "engines": {
7767 |         "node": ">=12"
7768 |       }
7769 |     },
7770 |     "node_modules/vite/node_modules/@esbuild/win32-arm64": {
7771 |       "version": "0.21.5",
7772 |       "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
7773 |       "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
7774 |       "cpu": [
7775 |         "arm64"
7776 |       ],
7777 |       "dev": true,
7778 |       "license": "MIT",
7779 |       "optional": true,
7780 |       "os": [
7781 |         "win32"
7782 |       ],
7783 |       "engines": {
7784 |         "node": ">=12"
7785 |       }
7786 |     },
7787 |     "node_modules/vite/node_modules/@esbuild/win32-ia32": {
7788 |       "version": "0.21.5",
7789 |       "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
7790 |       "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
7791 |       "cpu": [
7792 |         "ia32"
7793 |       ],
7794 |       "dev": true,
7795 |       "license": "MIT",
7796 |       "optional": true,
7797 |       "os": [
7798 |         "win32"
7799 |       ],
7800 |       "engines": {
7801 |         "node": ">=12"
7802 |       }
7803 |     },
7804 |     "node_modules/vite/node_modules/@esbuild/win32-x64": {
7805 |       "version": "0.21.5",
7806 |       "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
7807 |       "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
7808 |       "cpu": [
7809 |         "x64"
7810 |       ],
7811 |       "dev": true,
7812 |       "license": "MIT",
7813 |       "optional": true,
7814 |       "os": [
7815 |         "win32"
7816 |       ],
7817 |       "engines": {
7818 |         "node": ">=12"
7819 |       }
7820 |     },
7821 |     "node_modules/vite/node_modules/esbuild": {
7822 |       "version": "0.21.5",
7823 |       "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
7824 |       "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
7825 |       "dev": true,
7826 |       "hasInstallScript": true,
7827 |       "license": "MIT",
7828 |       "bin": {
7829 |         "esbuild": "bin/esbuild"
7830 |       },
7831 |       "engines": {
7832 |         "node": ">=12"
7833 |       },
7834 |       "optionalDependencies": {
7835 |         "@esbuild/aix-ppc64": "0.21.5",
7836 |         "@esbuild/android-arm": "0.21.5",
7837 |         "@esbuild/android-arm64": "0.21.5",
7838 |         "@esbuild/android-x64": "0.21.5",
7839 |         "@esbuild/darwin-arm64": "0.21.5",
7840 |         "@esbuild/darwin-x64": "0.21.5",
7841 |         "@esbuild/freebsd-arm64": "0.21.5",
7842 |         "@esbuild/freebsd-x64": "0.21.5",
7843 |         "@esbuild/linux-arm": "0.21.5",
7844 |         "@esbuild/linux-arm64": "0.21.5",
7845 |         "@esbuild/linux-ia32": "0.21.5",
7846 |         "@esbuild/linux-loong64": "0.21.5",
7847 |         "@esbuild/linux-mips64el": "0.21.5",
7848 |         "@esbuild/linux-ppc64": "0.21.5",
7849 |         "@esbuild/linux-riscv64": "0.21.5",
7850 |         "@esbuild/linux-s390x": "0.21.5",
7851 |         "@esbuild/linux-x64": "0.21.5",
7852 |         "@esbuild/netbsd-x64": "0.21.5",
7853 |         "@esbuild/openbsd-x64": "0.21.5",
7854 |         "@esbuild/sunos-x64": "0.21.5",
7855 |         "@esbuild/win32-arm64": "0.21.5",
7856 |         "@esbuild/win32-ia32": "0.21.5",
7857 |         "@esbuild/win32-x64": "0.21.5"
7858 |       }
7859 |     },
7860 |     "node_modules/which": {
7861 |       "version": "2.0.2",
7862 |       "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
7863 |       "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
7864 |       "license": "ISC",
7865 |       "dependencies": {
7866 |         "isexe": "^2.0.0"
7867 |       },
7868 |       "bin": {
7869 |         "node-which": "bin/node-which"
7870 |       },
7871 |       "engines": {
7872 |         "node": ">= 8"
7873 |       }
7874 |     },
7875 |     "node_modules/word-wrap": {
7876 |       "version": "1.2.5",
7877 |       "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
7878 |       "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
7879 |       "dev": true,
7880 |       "license": "MIT",
7881 |       "engines": {
7882 |         "node": ">=0.10.0"
7883 |       }
7884 |     },
7885 |     "node_modules/wrap-ansi": {
7886 |       "version": "7.0.0",
7887 |       "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
7888 |       "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
7889 |       "license": "MIT",
7890 |       "dependencies": {
7891 |         "ansi-styles": "^4.0.0",
7892 |         "string-width": "^4.1.0",
7893 |         "strip-ansi": "^6.0.0"
7894 |       },
7895 |       "engines": {
7896 |         "node": ">=10"
7897 |       },
7898 |       "funding": {
7899 |         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
7900 |       }
7901 |     },
7902 |     "node_modules/wrap-ansi-cjs": {
7903 |       "name": "wrap-ansi",
7904 |       "version": "7.0.0",
7905 |       "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
7906 |       "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
7907 |       "license": "MIT",
7908 |       "dependencies": {
7909 |         "ansi-styles": "^4.0.0",
7910 |         "string-width": "^4.1.0",
7911 |         "strip-ansi": "^6.0.0"
7912 |       },
7913 |       "engines": {
7914 |         "node": ">=10"
7915 |       },
7916 |       "funding": {
7917 |         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
7918 |       }
7919 |     },
7920 |     "node_modules/wrappy": {
7921 |       "version": "1.0.2",
7922 |       "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
7923 |       "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
7924 |       "license": "ISC"
7925 |     },
7926 |     "node_modules/ws": {
7927 |       "version": "8.18.0",
7928 |       "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.0.tgz",
7929 |       "integrity": "sha512-8VbfWfHLbbwu3+N6OKsOMpBdT4kXPDDB9cJk2bJ6mh9ucxdlnNvH1e+roYkKmN9Nxw2yjz7VzeO9oOz2zJ04Pw==",
7930 |       "license": "MIT",
7931 |       "engines": {
7932 |         "node": ">=10.0.0"
7933 |       },
7934 |       "peerDependencies": {
7935 |         "bufferutil": "^4.0.1",
7936 |         "utf-8-validate": ">=5.0.2"
7937 |       },
7938 |       "peerDependenciesMeta": {
7939 |         "bufferutil": {
7940 |           "optional": true
7941 |         },
7942 |         "utf-8-validate": {
7943 |           "optional": true
7944 |         }
7945 |       }
7946 |     },
7947 |     "node_modules/y18n": {
7948 |       "version": "5.0.8",
7949 |       "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
7950 |       "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
7951 |       "license": "ISC",
7952 |       "engines": {
7953 |         "node": ">=10"
7954 |       }
7955 |     },
7956 |     "node_modules/yallist": {
7957 |       "version": "3.1.1",
7958 |       "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
7959 |       "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
7960 |       "dev": true,
7961 |       "license": "ISC"
7962 |     },
7963 |     "node_modules/yaml": {
7964 |       "version": "2.6.1",
7965 |       "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.6.1.tgz",
7966 |       "integrity": "sha512-7r0XPzioN/Q9kXBro/XPnA6kznR73DHq+GXh5ON7ZozRO6aMjbmiBuKste2wslTFkC5d1dw0GooOCepZXJ2SAg==",
7967 |       "license": "ISC",
7968 |       "bin": {
7969 |         "yaml": "bin.mjs"
7970 |       },
7971 |       "engines": {
7972 |         "node": ">= 14"
7973 |       }
7974 |     },
7975 |     "node_modules/yargs": {
7976 |       "version": "17.7.2",
7977 |       "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
7978 |       "integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
7979 |       "license": "MIT",
7980 |       "dependencies": {
7981 |         "cliui": "^8.0.1",
7982 |         "escalade": "^3.1.1",
7983 |         "get-caller-file": "^2.0.5",
7984 |         "require-directory": "^2.1.1",
7985 |         "string-width": "^4.2.3",
7986 |         "y18n": "^5.0.5",
7987 |         "yargs-parser": "^21.1.1"
7988 |       },
7989 |       "engines": {
7990 |         "node": ">=12"
7991 |       }
7992 |     },
7993 |     "node_modules/yargs-parser": {
7994 |       "version": "21.1.1",
7995 |       "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
7996 |       "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
7997 |       "license": "ISC",
7998 |       "engines": {
7999 |         "node": ">=12"
8000 |       }
8001 |     },
8002 |     "node_modules/yn": {
8003 |       "version": "3.1.1",
8004 |       "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
8005 |       "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
8006 |       "license": "MIT",
8007 |       "engines": {
8008 |         "node": ">=6"
8009 |       }
8010 |     },
8011 |     "node_modules/yocto-queue": {
8012 |       "version": "0.1.0",
8013 |       "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
8014 |       "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
8015 |       "dev": true,
8016 |       "license": "MIT",
8017 |       "engines": {
8018 |         "node": ">=10"
8019 |       },
8020 |       "funding": {
8021 |         "url": "https://github.com/sponsors/sindresorhus"
8022 |       }
8023 |     },
8024 |     "node_modules/zod": {
8025 |       "version": "3.24.1",
8026 |       "resolved": "https://registry.npmjs.org/zod/-/zod-3.24.1.tgz",
8027 |       "integrity": "sha512-muH7gBL9sI1nciMZV67X5fTKKBLtwpZ5VBp1vsOQzj1MhrBZ4wlVCm3gedKZWLp0Oyel8sIGfeiz54Su+OVT+A==",
8028 |       "license": "MIT",
8029 |       "funding": {
8030 |         "url": "https://github.com/sponsors/colinhacks"
8031 |       }
8032 |     },
8033 |     "node_modules/zod-to-json-schema": {
8034 |       "version": "3.24.1",
8035 |       "resolved": "https://registry.npmjs.org/zod-to-json-schema/-/zod-to-json-schema-3.24.1.tgz",
8036 |       "integrity": "sha512-3h08nf3Vw3Wl3PK+q3ow/lIil81IT2Oa7YpQyUUDsEWbXveMesdfK1xBd2RhCkynwZndAxixji/7SYJJowr62w==",
8037 |       "license": "ISC",
8038 |       "peerDependencies": {
8039 |         "zod": "^3.24.1"
8040 |       }
8041 |     },
8042 |     "server": {
8043 |       "name": "@modelcontextprotocol/inspector-server",
8044 |       "version": "0.5.1",
8045 |       "license": "MIT",
8046 |       "dependencies": {
8047 |         "@modelcontextprotocol/sdk": "^1.6.1",
8048 |         "cors": "^2.8.5",
8049 |         "express": "^4.21.0",
8050 |         "ws": "^8.18.0",
8051 |         "zod": "^3.23.8"
8052 |       },
8053 |       "bin": {
8054 |         "mcp-inspector-server": "build/index.js"
8055 |       },
8056 |       "devDependencies": {
8057 |         "@types/cors": "^2.8.17",
8058 |         "@types/express": "^4.17.21",
8059 |         "@types/ws": "^8.5.12",
8060 |         "tsx": "^4.19.0",
8061 |         "typescript": "^5.6.2"
8062 |       }
8063 |     }
8064 |   }
8065 | }
8066 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/inspector",
 3 |   "version": "0.6.0",
 4 |   "description": "Model Context Protocol inspector",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/inspector/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-inspector": "./bin/cli.js"
12 |   },
13 |   "files": [
14 |     "bin",
15 |     "client/bin",
16 |     "client/dist",
17 |     "server/build"
18 |   ],
19 |   "workspaces": [
20 |     "client",
21 |     "server"
22 |   ],
23 |   "scripts": {
24 |     "dev": "concurrently \"cd client && npm run dev\" \"cd server && npm run dev\"",
25 |     "dev:windows": "concurrently \"cd client && npm run dev\" \"cd server && npm run dev:windows",
26 |     "build-server": "cd server && npm run build",
27 |     "build-client": "cd client && npm run build",
28 |     "build": "npm run build-server && npm run build-client",
29 |     "start-server": "cd server && npm run start",
30 |     "start-client": "cd client && npm run preview",
31 |     "start": "node ./bin/cli.js",
32 |     "prepare": "npm run build",
33 |     "prettier-fix": "prettier --write .",
34 |     "publish-all": "npm publish --workspaces --access public && npm publish --access public"
35 |   },
36 |   "dependencies": {
37 |     "@modelcontextprotocol/inspector-client": "^0.6.0",
38 |     "@modelcontextprotocol/inspector-server": "^0.6.0",
39 |     "concurrently": "^9.0.1",
40 |     "shell-quote": "^1.8.2",
41 |     "spawn-rx": "^5.1.2",
42 |     "ts-node": "^10.9.2"
43 |   },
44 |   "devDependencies": {
45 |     "@types/node": "^22.7.5",
46 |     "@types/shell-quote": "^1.7.5",
47 |     "prettier": "3.3.3"
48 |   }
49 | }
50 | 


--------------------------------------------------------------------------------
/server/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/inspector-server",
 3 |   "version": "0.6.0",
 4 |   "description": "Server-side application for the Model Context Protocol inspector",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/inspector/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-inspector-server": "build/index.js"
12 |   },
13 |   "files": [
14 |     "build"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc",
18 |     "start": "node build/index.js",
19 |     "dev": "tsx watch --clear-screen=false src/index.ts",
20 |     "dev:windows": "tsx watch --clear-screen=false src/index.ts < NUL"
21 |   },
22 |   "devDependencies": {
23 |     "@types/cors": "^2.8.17",
24 |     "@types/express": "^4.17.21",
25 |     "@types/ws": "^8.5.12",
26 |     "tsx": "^4.19.0",
27 |     "typescript": "^5.6.2"
28 |   },
29 |   "dependencies": {
30 |     "@modelcontextprotocol/sdk": "^1.6.1",
31 |     "cors": "^2.8.5",
32 |     "express": "^4.21.0",
33 |     "ws": "^8.18.0",
34 |     "zod": "^3.23.8"
35 |   }
36 | }
37 | 


--------------------------------------------------------------------------------
/server/src/index.ts:
--------------------------------------------------------------------------------
  1 | #!/usr/bin/env node
  2 | 
  3 | import cors from "cors";
  4 | import { parseArgs } from "node:util";
  5 | import { parse as shellParseArgs } from "shell-quote";
  6 | 
  7 | import {
  8 |   SSEClientTransport,
  9 |   SseError,
 10 | } from "@modelcontextprotocol/sdk/client/sse.js";
 11 | import {
 12 |   StdioClientTransport,
 13 |   getDefaultEnvironment,
 14 | } from "@modelcontextprotocol/sdk/client/stdio.js";
 15 | import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
 16 | import express from "express";
 17 | import { findActualExecutable } from "spawn-rx";
 18 | import mcpProxy from "./mcpProxy.js";
 19 | 
 20 | const SSE_HEADERS_PASSTHROUGH = ["authorization"];
 21 | 
 22 | const defaultEnvironment = {
 23 |   ...getDefaultEnvironment(),
 24 |   ...(process.env.MCP_ENV_VARS ? JSON.parse(process.env.MCP_ENV_VARS) : {}),
 25 | };
 26 | 
 27 | const { values } = parseArgs({
 28 |   args: process.argv.slice(2),
 29 |   options: {
 30 |     env: { type: "string", default: "" },
 31 |     args: { type: "string", default: "" },
 32 |   },
 33 | });
 34 | 
 35 | const app = express();
 36 | app.use(cors());
 37 | 
 38 | let webAppTransports: SSEServerTransport[] = [];
 39 | 
 40 | const createTransport = async (req: express.Request) => {
 41 |   const query = req.query;
 42 |   console.log("Query parameters:", query);
 43 | 
 44 |   const transportType = query.transportType as string;
 45 | 
 46 |   if (transportType === "stdio") {
 47 |     const command = query.command as string;
 48 |     const origArgs = shellParseArgs(query.args as string) as string[];
 49 |     const queryEnv = query.env ? JSON.parse(query.env as string) : {};
 50 |     const env = { ...process.env, ...defaultEnvironment, ...queryEnv };
 51 | 
 52 |     const { cmd, args } = findActualExecutable(command, origArgs);
 53 | 
 54 |     console.log(`Stdio transport: command=${cmd}, args=${args}`);
 55 | 
 56 |     const transport = new StdioClientTransport({
 57 |       command: cmd,
 58 |       args,
 59 |       env,
 60 |       stderr: "pipe",
 61 |     });
 62 | 
 63 |     await transport.start();
 64 | 
 65 |     console.log("Spawned stdio transport");
 66 |     return transport;
 67 |   } else if (transportType === "sse") {
 68 |     const url = query.url as string;
 69 |     const headers: HeadersInit = {
 70 |       Accept: "text/event-stream",
 71 |     };
 72 |     for (const key of SSE_HEADERS_PASSTHROUGH) {
 73 |       if (req.headers[key] === undefined) {
 74 |         continue;
 75 |       }
 76 | 
 77 |       const value = req.headers[key];
 78 |       headers[key] = Array.isArray(value) ? value[value.length - 1] : value;
 79 |     }
 80 | 
 81 |     console.log(`SSE transport: url=${url}, headers=${Object.keys(headers)}`);
 82 | 
 83 |     const transport = new SSEClientTransport(new URL(url), {
 84 |       eventSourceInit: {
 85 |         fetch: (url, init) => fetch(url, { ...init, headers }),
 86 |       },
 87 |       requestInit: {
 88 |         headers,
 89 |       },
 90 |     });
 91 |     await transport.start();
 92 | 
 93 |     console.log("Connected to SSE transport");
 94 |     return transport;
 95 |   } else {
 96 |     console.error(`Invalid transport type: ${transportType}`);
 97 |     throw new Error("Invalid transport type specified");
 98 |   }
 99 | };
100 | 
101 | app.get("/sse", async (req, res) => {
102 |   try {
103 |     console.log("New SSE connection");
104 | 
105 |     let backingServerTransport;
106 |     try {
107 |       backingServerTransport = await createTransport(req);
108 |     } catch (error) {
109 |       if (error instanceof SseError && error.code === 401) {
110 |         console.error(
111 |           "Received 401 Unauthorized from MCP server:",
112 |           error.message,
113 |         );
114 |         res.status(401).json(error);
115 |         return;
116 |       }
117 | 
118 |       throw error;
119 |     }
120 | 
121 |     console.log("Connected MCP client to backing server transport");
122 | 
123 |     const webAppTransport = new SSEServerTransport("/message", res);
124 |     console.log("Created web app transport");
125 | 
126 |     webAppTransports.push(webAppTransport);
127 |     console.log("Created web app transport");
128 | 
129 |     await webAppTransport.start();
130 | 
131 |     if (backingServerTransport instanceof StdioClientTransport) {
132 |       backingServerTransport.stderr!.on("data", (chunk) => {
133 |         webAppTransport.send({
134 |           jsonrpc: "2.0",
135 |           method: "notifications/stderr",
136 |           params: {
137 |             content: chunk.toString(),
138 |           },
139 |         });
140 |       });
141 |     }
142 | 
143 |     mcpProxy({
144 |       transportToClient: webAppTransport,
145 |       transportToServer: backingServerTransport,
146 |     });
147 | 
148 |     console.log("Set up MCP proxy");
149 |   } catch (error) {
150 |     console.error("Error in /sse route:", error);
151 |     res.status(500).json(error);
152 |   }
153 | });
154 | 
155 | app.post("/message", async (req, res) => {
156 |   try {
157 |     const sessionId = req.query.sessionId;
158 |     console.log(`Received message for sessionId ${sessionId}`);
159 | 
160 |     const transport = webAppTransports.find((t) => t.sessionId === sessionId);
161 |     if (!transport) {
162 |       res.status(404).end("Session not found");
163 |       return;
164 |     }
165 |     await transport.handlePostMessage(req, res);
166 |   } catch (error) {
167 |     console.error("Error in /message route:", error);
168 |     res.status(500).json(error);
169 |   }
170 | });
171 | 
172 | app.get("/config", (req, res) => {
173 |   try {
174 |     res.json({
175 |       defaultEnvironment,
176 |       defaultCommand: values.env,
177 |       defaultArgs: values.args,
178 |     });
179 |   } catch (error) {
180 |     console.error("Error in /config route:", error);
181 |     res.status(500).json(error);
182 |   }
183 | });
184 | 
185 | const PORT = process.env.PORT || 3000;
186 | 
187 | try {
188 |   const server = app.listen(PORT);
189 | 
190 |   server.on("listening", () => {
191 |     const addr = server.address();
192 |     const port = typeof addr === "string" ? addr : addr?.port;
193 |     console.log(`Proxy server listening on port ${port}`);
194 |   });
195 | } catch (error) {
196 |   console.error("Failed to start server:", error);
197 |   process.exit(1);
198 | }
199 | 


--------------------------------------------------------------------------------
/server/src/mcpProxy.ts:
--------------------------------------------------------------------------------
 1 | import { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
 2 | 
 3 | function onClientError(error: Error) {
 4 |   console.error("Error from inspector client:", error);
 5 | }
 6 | 
 7 | function onServerError(error: Error) {
 8 |   console.error("Error from MCP server:", error);
 9 | }
10 | 
11 | export default function mcpProxy({
12 |   transportToClient,
13 |   transportToServer,
14 | }: {
15 |   transportToClient: Transport;
16 |   transportToServer: Transport;
17 | }) {
18 |   let transportToClientClosed = false;
19 |   let transportToServerClosed = false;
20 | 
21 |   transportToClient.onmessage = (message) => {
22 |     transportToServer.send(message).catch(onServerError);
23 |   };
24 | 
25 |   transportToServer.onmessage = (message) => {
26 |     transportToClient.send(message).catch(onClientError);
27 |   };
28 | 
29 |   transportToClient.onclose = () => {
30 |     if (transportToServerClosed) {
31 |       return;
32 |     }
33 | 
34 |     transportToClientClosed = true;
35 |     transportToServer.close().catch(onServerError);
36 |   };
37 | 
38 |   transportToServer.onclose = () => {
39 |     if (transportToClientClosed) {
40 |       return;
41 |     }
42 |     transportToServerClosed = true;
43 |     transportToClient.close().catch(onClientError);
44 |   };
45 | 
46 |   transportToClient.onerror = onClientError;
47 |   transportToServer.onerror = onServerError;
48 | }
49 | 


--------------------------------------------------------------------------------
/server/tsconfig.json:
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
11 |     "forceConsistentCasingInFileNames": true,
12 |     "resolveJsonModule": true
13 |   },
14 |   "include": ["src/**/*"],
15 |   "exclude": ["node_modules", "packages", "**/*.spec.ts"]
16 | }
17 | 


--------------------------------------------------------------------------------