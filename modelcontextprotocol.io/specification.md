├── .gitattributes
├── .github
    └── workflows
    │   ├── main.yml
    │   ├── markdown-format.yml
    │   └── site.yml
├── .gitignore
├── .npmrc
├── .nvmrc
├── CNAME
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
├── docs
    ├── resources
    │   └── _index.md
    └── specification
    │   ├── 2024-11-05
    │       ├── _index.md
    │       ├── architecture
    │       │   └── _index.md
    │       ├── basic
    │       │   ├── _index.md
    │       │   ├── lifecycle.md
    │       │   ├── messages.md
    │       │   ├── transports.md
    │       │   ├── utilities
    │       │   │   ├── _index.md
    │       │   │   ├── cancellation.md
    │       │   │   ├── ping.md
    │       │   │   └── progress.md
    │       │   └── versioning.md
    │       ├── client
    │       │   ├── _index.md
    │       │   ├── roots.md
    │       │   └── sampling.md
    │       ├── contributing
    │       │   └── _index.md
    │       ├── revisions
    │       │   ├── 2024-11-05.md
    │       │   └── _index.md
    │       └── server
    │       │   ├── _index.md
    │       │   ├── prompts.md
    │       │   ├── resource-picker.png
    │       │   ├── resources.md
    │       │   ├── slash-command.png
    │       │   ├── tools.md
    │       │   └── utilities
    │       │       ├── _index.md
    │       │       ├── completion.md
    │       │       ├── logging.md
    │       │       └── pagination.md
    │   ├── _index.md
    │   └── draft
    │       ├── _index.md
    │       ├── architecture
    │           └── _index.md
    │       ├── basic
    │           ├── _index.md
    │           ├── authorization.md
    │           ├── lifecycle.md
    │           ├── messages.md
    │           ├── transports.md
    │           ├── utilities
    │           │   ├── _index.md
    │           │   ├── cancellation.md
    │           │   ├── ping.md
    │           │   └── progress.md
    │           └── versioning.md
    │       ├── client
    │           ├── _index.md
    │           ├── roots.md
    │           └── sampling.md
    │       ├── contributing
    │           └── _index.md
    │       ├── revisions
    │           ├── 2024-11-05.md
    │           └── _index.md
    │       └── server
    │           ├── _index.md
    │           ├── prompts.md
    │           ├── resource-picker.png
    │           ├── resources.md
    │           ├── slash-command.png
    │           ├── tools.md
    │           └── utilities
    │               ├── _index.md
    │               ├── completion.md
    │               ├── logging.md
    │               └── pagination.md
├── package-lock.json
├── package.json
├── schema
    ├── 2024-11-05
    │   ├── schema.json
    │   └── schema.ts
    └── draft
    │   ├── schema.json
    │   └── schema.ts
├── scripts
    └── validate_examples.ts
└── site
    ├── .gitignore
    ├── go.mod
    ├── go.sum
    ├── hugo.yaml
    ├── layouts
        └── index.html
    └── static
        ├── android-chrome-192x192.png
        ├── android-chrome-512x512.png
        ├── apple-touch-icon.png
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── favicon.ico
        ├── favicon.svg
        ├── images
            ├── dark.svg
            └── light.svg
        └── site.webmanifest


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
 7 | 
 8 | jobs:
 9 |   validate:
10 |     runs-on: ubuntu-latest
11 | 
12 |     steps:
13 |       - uses: actions/checkout@v4
14 |       - uses: actions/setup-node@v2
15 |         with:
16 |           node-version: 20
17 |           cache: npm
18 | 
19 |       - run: npm ci
20 | 
21 |       - run: npm run validate:schema
22 | 
23 |       - run: npm run generate:json
24 |       - name: Verify that `npm run generate:json` did not change outputs (if it did, please re-run it and re-commit!)
25 |         run: git diff --exit-code
26 | 


--------------------------------------------------------------------------------
/.github/workflows/markdown-format.yml:
--------------------------------------------------------------------------------
 1 | name: Markdown Format Check
 2 | 
 3 | on:
 4 |   push:
 5 |     paths:
 6 |       - '**/*.md'
 7 |   pull_request:
 8 |     paths:
 9 |       - '**/*.md'
10 | 
11 | jobs:
12 |   format:
13 |     runs-on: ubuntu-latest
14 |     steps:
15 |       - uses: actions/checkout@v4
16 |       
17 |       - name: Setup Node.js
18 |         uses: actions/setup-node@v4
19 |         with:
20 |           node-version: '20'
21 |           
22 |       - name: Install dependencies
23 |         run: npm ci
24 |         
25 |       - name: Check markdown formatting
26 |         run: npm run format:check


--------------------------------------------------------------------------------
/.github/workflows/site.yml:
--------------------------------------------------------------------------------
 1 | # Sample workflow for building and deploying a Hugo site to GitHub Pages
 2 | name: Deploy Hugo site to Pages
 3 | 
 4 | on:
 5 |   # Runs on pushes targeting the default branch
 6 |   push:
 7 |     branches:
 8 |       - main
 9 | 
10 |   # Allows you to run this workflow manually from the Actions tab
11 |   workflow_dispatch:
12 | 
13 | # Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
14 | permissions:
15 |   contents: read
16 |   pages: write
17 |   id-token: write
18 | 
19 | # Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
20 | # However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
21 | concurrency:
22 |   group: "pages"
23 |   cancel-in-progress: false
24 | 
25 | # Default to bash
26 | defaults:
27 |   run:
28 |     shell: bash
29 | 
30 | jobs:
31 |   # Build job
32 |   build:
33 |     runs-on: ubuntu-latest
34 |     env:
35 |       HUGO_VERSION: 0.134.2
36 |     steps:
37 |       - name: Install Hugo CLI
38 |         run: |
39 |           wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
40 |           && sudo dpkg -i ${{ runner.temp }}/hugo.deb
41 |       - name: Install Dart Sass
42 |         run: sudo snap install dart-sass
43 |       - name: Checkout
44 |         uses: actions/checkout@v4
45 |         with:
46 |           submodules: recursive
47 |           fetch-depth: 0
48 |       - name: Setup Pages
49 |         id: pages
50 |         uses: actions/configure-pages@v5
51 |       - name: Install Node.js dependencies
52 |         run: "[[ -f site/package-lock.json || -f site/npm-shrinkwrap.json ]] && npm ci --prefix site || true"
53 |       - name: Build with Hugo
54 |         env:
55 |           HUGO_CACHEDIR: ${{ runner.temp }}/hugo_cache
56 |           HUGO_ENVIRONMENT: production
57 |           TZ: America/Los_Angeles
58 |         run: |
59 |           hugo \
60 |             --gc \
61 |             --minify \
62 |             --baseURL "${{ steps.pages.outputs.base_url }}/" \
63 |             -s site
64 |       - name: Upload artifact
65 |         uses: actions/upload-pages-artifact@v3
66 |         with:
67 |           path: ./site/public
68 | 
69 |   # Deployment job
70 |   deploy:
71 |     environment:
72 |       name: github-pages
73 |       url: ${{ steps.deployment.outputs.page_url }}
74 |     runs-on: ubuntu-latest
75 |     needs: build
76 |     steps:
77 |       - name: Deploy to GitHub Pages
78 |         id: deployment
79 |         uses: actions/deploy-pages@v4
80 | 


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | .DS_Store
3 | 


--------------------------------------------------------------------------------
/.npmrc:
--------------------------------------------------------------------------------
1 | registry = "https://registry.npmjs.org/"
2 | 


--------------------------------------------------------------------------------
/.nvmrc:
--------------------------------------------------------------------------------
1 | v20.16.0
2 | 


--------------------------------------------------------------------------------
/CNAME:
--------------------------------------------------------------------------------
1 | spec.modelcontextprotocol.io
2 | 


--------------------------------------------------------------------------------
/CODE_OF_CONDUCT.md:
--------------------------------------------------------------------------------
  1 | # Contributor Covenant Code of Conduct
  2 | 
  3 | ## Our Pledge
  4 | 
  5 | We as members, contributors, and leaders pledge to make participation in our community a
  6 | harassment-free experience for everyone, regardless of age, body size, visible or
  7 | invisible disability, ethnicity, sex characteristics, gender identity and expression,
  8 | level of experience, education, socio-economic status, nationality, personal appearance,
  9 | race, religion, or sexual identity and orientation.
 10 | 
 11 | We pledge to act and interact in ways that contribute to an open, welcoming, diverse,
 12 | inclusive, and healthy community.
 13 | 
 14 | ## Our Standards
 15 | 
 16 | Examples of behavior that contributes to a positive environment for our community
 17 | include:
 18 | 
 19 | - Demonstrating empathy and kindness toward other people
 20 | - Being respectful of differing opinions, viewpoints, and experiences
 21 | - Giving and gracefully accepting constructive feedback
 22 | - Accepting responsibility and apologizing to those affected by our mistakes, and
 23 |   learning from the experience
 24 | - Focusing on what is best not just for us as individuals, but for the overall community
 25 | 
 26 | Examples of unacceptable behavior include:
 27 | 
 28 | - The use of sexualized language or imagery, and sexual attention or advances of any kind
 29 | - Trolling, insulting or derogatory comments, and personal or political attacks
 30 | - Public or private harassment
 31 | - Publishing others' private information, such as a physical or email address, without
 32 |   their explicit permission
 33 | - Other conduct which could reasonably be considered inappropriate in a professional
 34 |   setting
 35 | 
 36 | ## Enforcement Responsibilities
 37 | 
 38 | Community leaders are responsible for clarifying and enforcing our standards of
 39 | acceptable behavior and will take appropriate and fair corrective action in response to
 40 | any behavior that they deem inappropriate, threatening, offensive, or harmful.
 41 | 
 42 | Community leaders have the right and responsibility to remove, edit, or reject comments,
 43 | commits, code, wiki edits, issues, and other contributions that are not aligned to this
 44 | Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
 45 | 
 46 | ## Scope
 47 | 
 48 | This Code of Conduct applies within all community spaces, and also applies when an
 49 | individual is officially representing the community in public spaces. Examples of
 50 | representing our community include using an official e-mail address, posting via an
 51 | official social media account, or acting as an appointed representative at an online or
 52 | offline event.
 53 | 
 54 | ## Enforcement
 55 | 
 56 | Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to
 57 | the community leaders responsible for enforcement at mcp-coc@anthropic.com. All
 58 | complaints will be reviewed and investigated promptly and fairly.
 59 | 
 60 | All community leaders are obligated to respect the privacy and security of the reporter
 61 | of any incident.
 62 | 
 63 | ## Enforcement Guidelines
 64 | 
 65 | Community leaders will follow these Community Impact Guidelines in determining the
 66 | consequences for any action they deem in violation of this Code of Conduct:
 67 | 
 68 | ### 1. Correction
 69 | 
 70 | **Community Impact**: Use of inappropriate language or other behavior deemed
 71 | unprofessional or unwelcome in the community.
 72 | 
 73 | **Consequence**: A private, written warning from community leaders, providing clarity
 74 | around the nature of the violation and an explanation of why the behavior was
 75 | inappropriate. A public apology may be requested.
 76 | 
 77 | ### 2. Warning
 78 | 
 79 | **Community Impact**: A violation through a single incident or series of actions.
 80 | 
 81 | **Consequence**: A warning with consequences for continued behavior. No interaction with
 82 | the people involved, including unsolicited interaction with those enforcing the Code of
 83 | Conduct, for a specified period of time. This includes avoiding interactions in community
 84 | spaces as well as external channels like social media. Violating these terms may lead to
 85 | a temporary or permanent ban.
 86 | 
 87 | ### 3. Temporary Ban
 88 | 
 89 | **Community Impact**: A serious violation of community standards, including sustained
 90 | inappropriate behavior.
 91 | 
 92 | **Consequence**: A temporary ban from any sort of interaction or public communication
 93 | with the community for a specified period of time. No public or private interaction with
 94 | the people involved, including unsolicited interaction with those enforcing the Code of
 95 | Conduct, is allowed during this period. Violating these terms may lead to a permanent
 96 | ban.
 97 | 
 98 | ### 4. Permanent Ban
 99 | 
100 | **Community Impact**: Demonstrating a pattern of violation of community standards,
101 | including sustained inappropriate behavior, harassment of an individual, or aggression
102 | toward or disparagement of classes of individuals.
103 | 
104 | **Consequence**: A permanent ban from any sort of public interaction within the
105 | community.
106 | 
107 | ## Attribution
108 | 
109 | This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 2.0,
110 | available at https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.
111 | 
112 | Community Impact Guidelines were inspired by
113 | [Mozilla's code of conduct enforcement ladder](https://github.com/mozilla/diversity).
114 | 
115 | [homepage]: https://www.contributor-covenant.org
116 | 
117 | For answers to common questions about this code of conduct, see the FAQ at
118 | https://www.contributor-covenant.org/faq. Translations are available at
119 | https://www.contributor-covenant.org/translations.
120 | 


--------------------------------------------------------------------------------
/CONTRIBUTING.md:
--------------------------------------------------------------------------------
 1 | # Contributing to Model Context Protocol
 2 | 
 3 | Thank you for your interest in contributing to the Model Context Protocol specification!
 4 | This document outlines how to contribute to this project.
 5 | 
 6 | ## Prerequisites
 7 | 
 8 | The following software is required to work on the spec:
 9 | 
10 | - Node.js 20 or above
11 | - TypeScript
12 | - TypeScript JSON Schema (for generating JSON schema)
13 | - [Hugo](https://gohugo.io/) (optional, for docs)
14 | - Go (optional, for docs)
15 | - nvm (optional, for managing Node versions)
16 | 
17 | ## Getting Started
18 | 
19 | 1. Fork the repository
20 | 2. Clone your fork:
21 | 
22 | ```bash
23 | git clone https://github.com/YOUR-USERNAME/specification.git
24 | cd specification
25 | ```
26 | 
27 | 3. Install dependencies:
28 | 
29 | ```bash
30 | nvm install  # install correct Node version
31 | npm install  # install dependencies
32 | ```
33 | 
34 | ## Making Changes
35 | 
36 | Note that schema changes are made to `schema.ts`. `schema.json` is generated from
37 | `schema.ts` using `npm run validate:schema`.
38 | 
39 | 1. Create a new branch:
40 | 
41 | ```bash
42 | git checkout -b feature/your-feature-name
43 | ```
44 | 
45 | 2. Make your changes
46 | 3. Validate your changes:
47 | 
48 | ```bash
49 | npm run validate:schema    # validate schema
50 | npm run generate:json     # generate JSON schema
51 | ```
52 | 
53 | 4. Run docs locally (optional):
54 | 
55 | ```bash
56 | npm run serve:docs
57 | ```
58 | 
59 | ## Submitting Changes
60 | 
61 | 1. Push your changes to your fork
62 | 2. Submit a pull request to the main repository
63 | 3. Follow the pull request template
64 | 4. Wait for review
65 | 
66 | ## Code of Conduct
67 | 
68 | This project follows a Code of Conduct. Please review it in
69 | [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
70 | 
71 | ## Questions
72 | 
73 | If you have questions, please create an issue in the repository.
74 | 
75 | ## License
76 | 
77 | By contributing, you agree that your contributions will be licensed under the MIT
78 | License.
79 | 
80 | ## Security
81 | 
82 | Please review our [Security Policy](SECURITY.md) for reporting security issues.
83 | 


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
 1 | # Model Context Protocol specification
 2 | 
 3 | This repo contains the specification and protocol schema for the Model Context Protocol.
 4 | 
 5 | The schema is [defined in TypeScript](schema/2024-11-05/schema.ts) first, but
 6 | [made available as JSON Schema](schema/2024-11-05/schema.json) as well, for wider
 7 | compatibility.
 8 | 
 9 | ## Contributing
10 | 
11 | Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this
12 | project.
13 | 
14 | ## License
15 | 
16 | This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for
17 | details.
18 | 


--------------------------------------------------------------------------------
/SECURITY.md:
--------------------------------------------------------------------------------
 1 | # Security Policy
 2 | 
 3 | Thank you for helping us keep the SDKs and systems they interact with secure.
 4 | 
 5 | ## Reporting Security Issues
 6 | 
 7 | This SDK is maintained by [Anthropic](https://www.anthropic.com/) as part of the Model
 8 | Context Protocol project.
 9 | 
10 | The security of our systems and user data is Anthropic’s top priority. We appreciate the
11 | work of security researchers acting in good faith in identifying and reporting potential
12 | vulnerabilities.
13 | 
14 | Our security program is managed on HackerOne and we ask that any validated vulnerability
15 | in this functionality be reported through their
16 | [submission form](https://hackerone.com/anthropic-vdp/reports/new?type=team&report_type=vulnerability).
17 | 
18 | ## Vulnerability Disclosure Program
19 | 
20 | Our Vulnerability Program Guidelines are defined on our
21 | [HackerOne program page](https://hackerone.com/anthropic-vdp).
22 | 


--------------------------------------------------------------------------------
/docs/resources/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: "Additional Resources"
 3 | weight: 20
 4 | breadcrumbs: false
 5 | sidebar:
 6 |   exclude: true
 7 | ---
 8 | 
 9 | The Model Context Protocol (MCP) provides multiple resources for documentation and
10 | implementation:
11 | 
12 | - **User Documentation**: Visit
13 |   [modelcontextprotocol.io](https://modelcontextprotocol.io) for comprehensive
14 |   user-facing documentation
15 | - **Python SDK**: The Python implementation is available at
16 |   [github.com/modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) -
17 |   [Issues](https://github.com/modelcontextprotocol/python-sdk/issues)
18 | - **Specification**: The core specification is available at
19 |   [github.com/modelcontextprotocol/specification](https://github.com/modelcontextprotocol/specification) -
20 |   [Discussions](https://github.com/modelcontextprotocol/specification/discussions)
21 | - **TypeScript SDK**: The TypeScript implementation can be found at
22 |   [github.com/modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) -
23 |   [Issues](https://github.com/modelcontextprotocol/typescript-sdk/issues)
24 | 
25 | For questions or discussions, please open a discussion in the appropriate GitHub
26 | repository based on your implementation or use case. You can also visit the
27 | [Model Context Protocol organization on GitHub](https://github.com/modelcontextprotocol)
28 | to see all repositories and ongoing development.
29 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/_index.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Specification (Latest)
  3 | cascade:
  4 |   type: docs
  5 | breadcrumbs: false
  6 | weight: 10
  7 | aliases:
  8 |   - /latest
  9 | ---
 10 | 
 11 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 12 | {{< /callout >}}
 13 | 
 14 | [Model Context Protocol](https://modelcontextprotocol.io) (MCP) is an open protocol that
 15 | enables seamless integration between LLM applications and external data sources and
 16 | tools. Whether you're building an AI-powered IDE, enhancing a chat interface, or creating
 17 | custom AI workflows, MCP provides a standardized way to connect LLMs with the context
 18 | they need.
 19 | 
 20 | This specification defines the authoritative protocol requirements, based on the
 21 | TypeScript schema in
 22 | [schema.ts](https://github.com/modelcontextprotocol/specification/blob/main/schema/2024-11-05/schema.ts).
 23 | 
 24 | For implementation guides and examples, visit
 25 | [modelcontextprotocol.io](https://modelcontextprotocol.io).
 26 | 
 27 | The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD
 28 | NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
 29 | interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14)
 30 | [[RFC2119](https://datatracker.ietf.org/doc/html/rfc2119)]
 31 | [[RFC8174](https://datatracker.ietf.org/doc/html/rfc8174)] when, and only when, they
 32 | appear in all capitals, as shown here.
 33 | 
 34 | ## Overview
 35 | 
 36 | MCP provides a standardized way for applications to:
 37 | 
 38 | - Share contextual information with language models
 39 | - Expose tools and capabilities to AI systems
 40 | - Build composable integrations and workflows
 41 | 
 42 | The protocol uses [JSON-RPC](https://www.jsonrpc.org/) 2.0 messages to establish
 43 | communication between:
 44 | 
 45 | - **Hosts**: LLM applications that initiate connections
 46 | - **Clients**: Connectors within the host application
 47 | - **Servers**: Services that provide context and capabilities
 48 | 
 49 | MCP takes some inspiration from the
 50 | [Language Server Protocol](https://microsoft.github.io/language-server-protocol/), which
 51 | standardizes how to add support for programming languages across a whole ecosystem of
 52 | development tools. In a similar way, MCP standardizes how to integrate additional context
 53 | and tools into the ecosystem of AI applications.
 54 | 
 55 | ## Key Details
 56 | 
 57 | ### Base Protocol
 58 | 
 59 | - [JSON-RPC](https://www.jsonrpc.org/) message format
 60 | - Stateful connections
 61 | - Server and client capability negotiation
 62 | 
 63 | ### Features
 64 | 
 65 | Servers offer any of the following features to clients:
 66 | 
 67 | - **Resources**: Context and data, for the user or the AI model to use
 68 | - **Prompts**: Templated messages and workflows for users
 69 | - **Tools**: Functions for the AI model to execute
 70 | 
 71 | Clients may offer the following feature to servers:
 72 | 
 73 | - **Sampling**: Server-initiated agentic behaviors and recursive LLM interactions
 74 | 
 75 | ### Additional Utilities
 76 | 
 77 | - Configuration
 78 | - Progress tracking
 79 | - Cancellation
 80 | - Error reporting
 81 | - Logging
 82 | 
 83 | ## Security and Trust & Safety
 84 | 
 85 | The Model Context Protocol enables powerful capabilities through arbitrary data access
 86 | and code execution paths. With this power comes important security and trust
 87 | considerations that all implementors must carefully address.
 88 | 
 89 | ### Key Principles
 90 | 
 91 | 1. **User Consent and Control**
 92 | 
 93 |    - Users must explicitly consent to and understand all data access and operations
 94 |    - Users must retain control over what data is shared and what actions are taken
 95 |    - Implementors should provide clear UIs for reviewing and authorizing activities
 96 | 
 97 | 2. **Data Privacy**
 98 | 
 99 |    - Hosts must obtain explicit user consent before exposing user data to servers
100 |    - Hosts must not transmit resource data elsewhere without user consent
101 |    - User data should be protected with appropriate access controls
102 | 
103 | 3. **Tool Safety**
104 | 
105 |    - Tools represent arbitrary code execution and must be treated with appropriate
106 |      caution
107 |    - Hosts must obtain explicit user consent before invoking any tool
108 |    - Users should understand what each tool does before authorizing its use
109 | 
110 | 4. **LLM Sampling Controls**
111 |    - Users must explicitly approve any LLM sampling requests
112 |    - Users should control:
113 |      - Whether sampling occurs at all
114 |      - The actual prompt that will be sent
115 |      - What results the server can see
116 |    - The protocol intentionally limits server visibility into prompts
117 | 
118 | ### Implementation Guidelines
119 | 
120 | While MCP itself cannot enforce these security principles at the protocol level,
121 | implementors **SHOULD**:
122 | 
123 | 1. Build robust consent and authorization flows into their applications
124 | 2. Provide clear documentation of security implications
125 | 3. Implement appropriate access controls and data protections
126 | 4. Follow security best practices in their integrations
127 | 5. Consider privacy implications in their feature designs
128 | 
129 | ## Learn More
130 | 
131 | Explore the detailed specification for each protocol component:
132 | 
133 | {{< cards >}} {{< card link="architecture" title="Architecture" icon="template" >}}
134 | {{< card link="basic" title="Base Protocol" icon="code" >}}
135 | {{< card link="server" title="Server Features" icon="server" >}}
136 | {{< card link="client" title="Client Features" icon="user" >}}
137 | {{< card link="contributing" title="Contributing" icon="pencil" >}} {{< /cards >}}
138 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/architecture/_index.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Architecture
  3 | cascade:
  4 |   type: docs
  5 | weight: 1
  6 | ---
  7 | 
  8 | The Model Context Protocol (MCP) follows a client-host-server architecture where each
  9 | host can run multiple client instances. This architecture enables users to integrate AI
 10 | capabilities across applications while maintaining clear security boundaries and
 11 | isolating concerns. Built on JSON-RPC, MCP provides a stateful session protocol focused
 12 | on context exchange and sampling coordination between clients and servers.
 13 | 
 14 | ## Core Components
 15 | 
 16 | ```mermaid
 17 | graph LR
 18 |     subgraph "Application Host Process"
 19 |         H[Host]
 20 |         C1[Client 1]
 21 |         C2[Client 2]
 22 |         C3[Client 3]
 23 |         H --> C1
 24 |         H --> C2
 25 |         H --> C3
 26 |     end
 27 | 
 28 |     subgraph "Local machine"
 29 |         S1[Server 1<br>Files & Git]
 30 |         S2[Server 2<br>Database]
 31 |         R1[("Local<br>Resource A")]
 32 |         R2[("Local<br>Resource B")]
 33 | 
 34 |         C1 --> S1
 35 |         C2 --> S2
 36 |         S1 <--> R1
 37 |         S2 <--> R2
 38 |     end
 39 | 
 40 |     subgraph "Internet"
 41 |         S3[Server 3<br>External APIs]
 42 |         R3[("Remote<br>Resource C")]
 43 | 
 44 |         C3 --> S3
 45 |         S3 <--> R3
 46 |     end
 47 | ```
 48 | 
 49 | ### Host
 50 | 
 51 | The host process acts as the container and coordinator:
 52 | 
 53 | - Creates and manages multiple client instances
 54 | - Controls client connection permissions and lifecycle
 55 | - Enforces security policies and consent requirements
 56 | - Handles user authorization decisions
 57 | - Coordinates AI/LLM integration and sampling
 58 | - Manages context aggregation across clients
 59 | 
 60 | ### Clients
 61 | 
 62 | Each client is created by the host and maintains an isolated server connection:
 63 | 
 64 | - Establishes one stateful session per server
 65 | - Handles protocol negotiation and capability exchange
 66 | - Routes protocol messages bidirectionally
 67 | - Manages subscriptions and notifications
 68 | - Maintains security boundaries between servers
 69 | 
 70 | A host application creates and manages multiple clients, with each client having a 1:1
 71 | relationship with a particular server.
 72 | 
 73 | ### Servers
 74 | 
 75 | Servers provide specialized context and capabilities:
 76 | 
 77 | - Expose resources, tools and prompts via MCP primitives
 78 | - Operate independently with focused responsibilities
 79 | - Request sampling through client interfaces
 80 | - Must respect security constraints
 81 | - Can be local processes or remote services
 82 | 
 83 | ## Design Principles
 84 | 
 85 | MCP is built on several key design principles that inform its architecture and
 86 | implementation:
 87 | 
 88 | 1. **Servers should be extremely easy to build**
 89 | 
 90 |    - Host applications handle complex orchestration responsibilities
 91 |    - Servers focus on specific, well-defined capabilities
 92 |    - Simple interfaces minimize implementation overhead
 93 |    - Clear separation enables maintainable code
 94 | 
 95 | 2. **Servers should be highly composable**
 96 | 
 97 |    - Each server provides focused functionality in isolation
 98 |    - Multiple servers can be combined seamlessly
 99 |    - Shared protocol enables interoperability
100 |    - Modular design supports extensibility
101 | 
102 | 3. **Servers should not be able to read the whole conversation, nor "see into" other
103 |    servers**
104 | 
105 |    - Servers receive only necessary contextual information
106 |    - Full conversation history stays with the host
107 |    - Each server connection maintains isolation
108 |    - Cross-server interactions are controlled by the host
109 |    - Host process enforces security boundaries
110 | 
111 | 4. **Features can be added to servers and clients progressively**
112 |    - Core protocol provides minimal required functionality
113 |    - Additional capabilities can be negotiated as needed
114 |    - Servers and clients evolve independently
115 |    - Protocol designed for future extensibility
116 |    - Backwards compatibility is maintained
117 | 
118 | ## Message Types
119 | 
120 | MCP defines three core message types based on
121 | [JSON-RPC 2.0](https://www.jsonrpc.org/specification):
122 | 
123 | - **Requests**: Bidirectional messages with method and parameters expecting a response
124 | - **Responses**: Successful results or errors matching specific request IDs
125 | - **Notifications**: One-way messages requiring no response
126 | 
127 | Each message type follows the JSON-RPC 2.0 specification for structure and delivery
128 | semantics.
129 | 
130 | ## Capability Negotiation
131 | 
132 | The Model Context Protocol uses a capability-based negotiation system where clients and
133 | servers explicitly declare their supported features during initialization. Capabilities
134 | determine which protocol features and primitives are available during a session.
135 | 
136 | - Servers declare capabilities like resource subscriptions, tool support, and prompt
137 |   templates
138 | - Clients declare capabilities like sampling support and notification handling
139 | - Both parties must respect declared capabilities throughout the session
140 | - Additional capabilities can be negotiated through extensions to the protocol
141 | 
142 | ```mermaid
143 | sequenceDiagram
144 |     participant Host
145 |     participant Client
146 |     participant Server
147 | 
148 |     Host->>+Client: Initialize client
149 |     Client->>+Server: Initialize session with capabilities
150 |     Server-->>Client: Respond with supported capabilities
151 | 
152 |     Note over Host,Server: Active Session with Negotiated Features
153 | 
154 |     loop Client Requests
155 |         Host->>Client: User- or model-initiated action
156 |         Client->>Server: Request (tools/resources)
157 |         Server-->>Client: Response
158 |         Client-->>Host: Update UI or respond to model
159 |     end
160 | 
161 |     loop Server Requests
162 |         Server->>Client: Request (sampling)
163 |         Client->>Host: Forward to AI
164 |         Host-->>Client: AI response
165 |         Client-->>Server: Response
166 |     end
167 | 
168 |     loop Notifications
169 |         Server--)Client: Resource updates
170 |         Client--)Server: Status changes
171 |     end
172 | 
173 |     Host->>Client: Terminate
174 |     Client->>-Server: End session
175 |     deactivate Server
176 | ```
177 | 
178 | Each capability unlocks specific protocol features for use during the session. For
179 | example:
180 | 
181 | - Implemented [server features]({{< ref "/specification/2024-11-05/server" >}}) must be
182 |   advertised in the server's capabilities
183 | - Emitting resource subscription notifications requires the server to declare
184 |   subscription support
185 | - Tool invocation requires the server to declare tool capabilities
186 | - [Sampling]({{< ref "/specification/2024-11-05/client" >}}) requires the client to
187 |   declare support in its capabilities
188 | 
189 | This capability negotiation ensures clients and servers have a clear understanding of
190 | supported functionality while maintaining protocol extensibility.
191 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/basic/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Base Protocol
 3 | cascade:
 4 |   type: docs
 5 | weight: 2
 6 | ---
 7 | 
 8 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 9 | {{< /callout >}}
10 | 
11 | All messages between MCP clients and servers **MUST** follow the
12 | [JSON-RPC 2.0](https://www.jsonrpc.org/specification) specification. The protocol defines
13 | three fundamental types of messages:
14 | 
15 | | Type            | Description                            | Requirements                           |
16 | | --------------- | -------------------------------------- | -------------------------------------- |
17 | | `Requests`      | Messages sent to initiate an operation | Must include unique ID and method name |
18 | | `Responses`     | Messages sent in reply to requests     | Must include same ID as request        |
19 | | `Notifications` | One-way messages with no reply         | Must not include an ID                 |
20 | 
21 | **Responses** are further sub-categorized as either **successful results** or **errors**.
22 | Results can follow any JSON object structure, while errors must include an error code and
23 | message at minimum.
24 | 
25 | ## Protocol Layers
26 | 
27 | The Model Context Protocol consists of several key components that work together:
28 | 
29 | - **Base Protocol**: Core JSON-RPC message types
30 | - **Lifecycle Management**: Connection initialization, capability negotiation, and
31 |   session control
32 | - **Server Features**: Resources, prompts, and tools exposed by servers
33 | - **Client Features**: Sampling and root directory lists provided by clients
34 | - **Utilities**: Cross-cutting concerns like logging and argument completion
35 | 
36 | All implementations **MUST** support the base protocol and lifecycle management
37 | components. Other components **MAY** be implemented based on the specific needs of the
38 | application.
39 | 
40 | These protocol layers establish clear separation of concerns while enabling rich
41 | interactions between clients and servers. The modular design allows implementations to
42 | support exactly the features they need.
43 | 
44 | See the following pages for more details on the different components:
45 | 
46 | {{< cards >}}
47 | {{< card link="/specification/2024-11-05/basic/lifecycle" title="Lifecycle" icon="refresh" >}}
48 | {{< card link="/specification/2024-11-05/server/resources" title="Resources" icon="document" >}}
49 | {{< card link="/specification/2024-11-05/server/prompts" title="Prompts" icon="chat-alt-2" >}}
50 | {{< card link="/specification/2024-11-05/server/tools" title="Tools" icon="adjustments" >}}
51 | {{< card link="/specification/2024-11-05/server/utilities/logging" title="Logging" icon="annotation" >}}
52 | {{< card link="/specification/2024-11-05/client/sampling" title="Sampling" icon="code" >}}
53 | {{< /cards >}}
54 | 
55 | ## Auth
56 | 
57 | Authentication and authorization are not currently part of the core MCP specification,
58 | but we are considering ways to introduce them in future. Join us in
59 | [GitHub Discussions](https://github.com/modelcontextprotocol/specification/discussions)
60 | to help shape the future of the protocol!
61 | 
62 | Clients and servers **MAY** negotiate their own custom authentication and authorization
63 | strategies.
64 | 
65 | ## Schema
66 | 
67 | The full specification of the protocol is defined as a
68 | [TypeScript schema](http://github.com/modelcontextprotocol/specification/tree/main/schema/2024-11-05/schema.ts).
69 | This is the source of truth for all protocol messages and structures.
70 | 
71 | There is also a
72 | [JSON Schema](http://github.com/modelcontextprotocol/specification/tree/main/schema/2024-11-05/schema.json),
73 | which is automatically generated from the TypeScript source of truth, for use with
74 | various automated tooling.
75 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/basic/lifecycle.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Lifecycle
  3 | type: docs
  4 | weight: 30
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
  8 | {{< /callout >}}
  9 | 
 10 | The Model Context Protocol (MCP) defines a rigorous lifecycle for client-server
 11 | connections that ensures proper capability negotiation and state management.
 12 | 
 13 | 1. **Initialization**: Capability negotiation and protocol version agreement
 14 | 2. **Operation**: Normal protocol communication
 15 | 3. **Shutdown**: Graceful termination of the connection
 16 | 
 17 | ```mermaid
 18 | sequenceDiagram
 19 |     participant Client
 20 |     participant Server
 21 | 
 22 |     Note over Client,Server: Initialization Phase
 23 |     activate Client
 24 |     Client->>+Server: initialize request
 25 |     Server-->>Client: initialize response
 26 |     Client--)Server: initialized notification
 27 | 
 28 |     Note over Client,Server: Operation Phase
 29 |     rect rgb(200, 220, 250)
 30 |         note over Client,Server: Normal protocol operations
 31 |     end
 32 | 
 33 |     Note over Client,Server: Shutdown
 34 |     Client--)-Server: Disconnect
 35 |     deactivate Server
 36 |     Note over Client,Server: Connection closed
 37 | ```
 38 | 
 39 | ## Lifecycle Phases
 40 | 
 41 | ### Initialization
 42 | 
 43 | The initialization phase **MUST** be the first interaction between client and server.
 44 | During this phase, the client and server:
 45 | 
 46 | - Establish protocol version compatibility
 47 | - Exchange and negotiate capabilities
 48 | - Share implementation details
 49 | 
 50 | The client **MUST** initiate this phase by sending an `initialize` request containing:
 51 | 
 52 | - Protocol version supported
 53 | - Client capabilities
 54 | - Client implementation information
 55 | 
 56 | ```json
 57 | {
 58 |   "jsonrpc": "2.0",
 59 |   "id": 1,
 60 |   "method": "initialize",
 61 |   "params": {
 62 |     "protocolVersion": "2024-11-05",
 63 |     "capabilities": {
 64 |       "roots": {
 65 |         "listChanged": true
 66 |       },
 67 |       "sampling": {}
 68 |     },
 69 |     "clientInfo": {
 70 |       "name": "ExampleClient",
 71 |       "version": "1.0.0"
 72 |     }
 73 |   }
 74 | }
 75 | ```
 76 | 
 77 | The server **MUST** respond with its own capabilities and information:
 78 | 
 79 | ```json
 80 | {
 81 |   "jsonrpc": "2.0",
 82 |   "id": 1,
 83 |   "result": {
 84 |     "protocolVersion": "2024-11-05",
 85 |     "capabilities": {
 86 |       "logging": {},
 87 |       "prompts": {
 88 |         "listChanged": true
 89 |       },
 90 |       "resources": {
 91 |         "subscribe": true,
 92 |         "listChanged": true
 93 |       },
 94 |       "tools": {
 95 |         "listChanged": true
 96 |       }
 97 |     },
 98 |     "serverInfo": {
 99 |       "name": "ExampleServer",
100 |       "version": "1.0.0"
101 |     }
102 |   }
103 | }
104 | ```
105 | 
106 | After successful initialization, the client **MUST** send an `initialized` notification
107 | to indicate it is ready to begin normal operations:
108 | 
109 | ```json
110 | {
111 |   "jsonrpc": "2.0",
112 |   "method": "notifications/initialized"
113 | }
114 | ```
115 | 
116 | - The client **SHOULD NOT** send requests other than
117 |   [pings]({{< ref "/specification/2024-11-05/basic/utilities/ping" >}}) before the server
118 |   has responded to the `initialize` request.
119 | - The server **SHOULD NOT** send requests other than
120 |   [pings]({{< ref "/specification/2024-11-05/basic/utilities/ping" >}}) and
121 |   [logging]({{< ref "/specification/2024-11-05/server/utilities/logging" >}}) before
122 |   receiving the `initialized` notification.
123 | 
124 | #### Version Negotiation
125 | 
126 | In the `initialize` request, the client **MUST** send a protocol version it supports.
127 | This **SHOULD** be the _latest_ version supported by the client.
128 | 
129 | If the server supports the requested protocol version, it **MUST** respond with the same
130 | version. Otherwise, the server **MUST** respond with another protocol version it
131 | supports. This **SHOULD** be the _latest_ version supported by the server.
132 | 
133 | If the client does not support the version in the server's response, it **SHOULD**
134 | disconnect.
135 | 
136 | #### Capability Negotiation
137 | 
138 | Client and server capabilities establish which optional protocol features will be
139 | available during the session.
140 | 
141 | Key capabilities include:
142 | 
143 | | Category | Capability     | Description                                                                                       |
144 | | -------- | -------------- | ------------------------------------------------------------------------------------------------- |
145 | | Client   | `roots`        | Ability to provide filesystem [roots]({{< ref "/specification/2024-11-05/client/roots" >}})       |
146 | | Client   | `sampling`     | Support for LLM [sampling]({{< ref "/specification/2024-11-05/client/sampling" >}}) requests      |
147 | | Client   | `experimental` | Describes support for non-standard experimental features                                          |
148 | | Server   | `prompts`      | Offers [prompt templates]({{< ref "/specification/2024-11-05/server/prompts" >}})                 |
149 | | Server   | `resources`    | Provides readable [resources]({{< ref "/specification/2024-11-05/server/resources" >}})           |
150 | | Server   | `tools`        | Exposes callable [tools]({{< ref "/specification/2024-11-05/server/tools" >}})                    |
151 | | Server   | `logging`      | Emits structured [log messages]({{< ref "/specification/2024-11-05/server/utilities/logging" >}}) |
152 | | Server   | `experimental` | Describes support for non-standard experimental features                                          |
153 | 
154 | Capability objects can describe sub-capabilities like:
155 | 
156 | - `listChanged`: Support for list change notifications (for prompts, resources, and
157 |   tools)
158 | - `subscribe`: Support for subscribing to individual items' changes (resources only)
159 | 
160 | ### Operation
161 | 
162 | During the operation phase, the client and server exchange messages according to the
163 | negotiated capabilities.
164 | 
165 | Both parties **SHOULD**:
166 | 
167 | - Respect the negotiated protocol version
168 | - Only use capabilities that were successfully negotiated
169 | 
170 | ### Shutdown
171 | 
172 | During the shutdown phase, one side (usually the client) cleanly terminates the protocol
173 | connection. No specific shutdown messages are defined—instead, the underlying transport
174 | mechanism should be used to signal connection termination:
175 | 
176 | #### stdio
177 | 
178 | For the stdio [transport]({{< ref "/specification/2024-11-05/basic/transports" >}}), the
179 | client **SHOULD** initiate shutdown by:
180 | 
181 | 1. First, closing the input stream to the child process (the server)
182 | 2. Waiting for the server to exit, or sending `SIGTERM` if the server does not exit
183 |    within a reasonable time
184 | 3. Sending `SIGKILL` if the server does not exit within a reasonable time after `SIGTERM`
185 | 
186 | The server **MAY** initiate shutdown by closing its output stream to the client and
187 | exiting.
188 | 
189 | #### HTTP
190 | 
191 | For HTTP [transports]({{< ref "/specification/2024-11-05/basic/transports" >}}), shutdown
192 | is indicated by closing the associated HTTP connection(s).
193 | 
194 | ## Error Handling
195 | 
196 | Implementations **SHOULD** be prepared to handle these error cases:
197 | 
198 | - Protocol version mismatch
199 | - Failure to negotiate required capabilities
200 | - Initialize request timeout
201 | - Shutdown timeout
202 | 
203 | Implementations **SHOULD** implement appropriate timeouts for all requests, to prevent
204 | hung connections and resource exhaustion.
205 | 
206 | Example initialization error:
207 | 
208 | ```json
209 | {
210 |   "jsonrpc": "2.0",
211 |   "id": 1,
212 |   "error": {
213 |     "code": -32602,
214 |     "message": "Unsupported protocol version",
215 |     "data": {
216 |       "supported": ["2024-11-05"],
217 |       "requested": "1.0.0"
218 |     }
219 |   }
220 | }
221 | ```
222 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/basic/messages.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Messages
 3 | type: docs
 4 | weight: 20
 5 | ---
 6 | 
 7 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 8 | {{< /callout >}}
 9 | 
10 | All messages in MCP **MUST** follow the
11 | [JSON-RPC 2.0](https://www.jsonrpc.org/specification) specification. The protocol defines
12 | three types of messages:
13 | 
14 | ## Requests
15 | 
16 | Requests are sent from the client to the server or vice versa.
17 | 
18 | ```typescript
19 | {
20 |   jsonrpc: "2.0";
21 |   id: string | number;
22 |   method: string;
23 |   params?: {
24 |     [key: string]: unknown;
25 |   };
26 | }
27 | ```
28 | 
29 | - Requests **MUST** include a string or integer ID.
30 | - Unlike base JSON-RPC, the ID **MUST NOT** be `null`.
31 | - The request ID **MUST NOT** have been previously used by the requestor within the same
32 |   session.
33 | 
34 | ## Responses
35 | 
36 | Responses are sent in reply to requests.
37 | 
38 | ```typescript
39 | {
40 |   jsonrpc: "2.0";
41 |   id: string | number;
42 |   result?: {
43 |     [key: string]: unknown;
44 |   }
45 |   error?: {
46 |     code: number;
47 |     message: string;
48 |     data?: unknown;
49 |   }
50 | }
51 | ```
52 | 
53 | - Responses **MUST** include the same ID as the request they correspond to.
54 | - Either a `result` or an `error` **MUST** be set. A response **MUST NOT** set both.
55 | - Error codes **MUST** be integers.
56 | 
57 | ## Notifications
58 | 
59 | Notifications are sent from the client to the server or vice versa. They do not expect a
60 | response.
61 | 
62 | ```typescript
63 | {
64 |   jsonrpc: "2.0";
65 |   method: string;
66 |   params?: {
67 |     [key: string]: unknown;
68 |   };
69 | }
70 | ```
71 | 
72 | - Notifications **MUST NOT** include an ID.
73 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/basic/transports.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Transports
 3 | type: docs
 4 | weight: 40
 5 | ---
 6 | 
 7 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 8 | {{< /callout >}}
 9 | 
10 | MCP currently defines two standard transport mechanisms for client-server communication:
11 | 
12 | 1. [stdio](#stdio), communication over standard in and standard out
13 | 2. [HTTP with Server-Sent Events](#http-with-sse) (SSE)
14 | 
15 | Clients **SHOULD** support stdio whenever possible.
16 | 
17 | It is also possible for clients and servers to implement
18 | [custom transports](#custom-transports) in a pluggable fashion.
19 | 
20 | ## stdio
21 | 
22 | In the **stdio** transport:
23 | 
24 | - The client launches the MCP server as a subprocess.
25 | - The server receives JSON-RPC messages on its standard input (`stdin`) and writes
26 |   responses to its standard output (`stdout`).
27 | - Messages are delimited by newlines, and **MUST NOT** contain embedded newlines.
28 | - The server **MAY** write UTF-8 strings to its standard error (`stderr`) for logging
29 |   purposes. Clients **MAY** capture, forward, or ignore this logging.
30 | - The server **MUST NOT** write anything to its `stdout` that is not a valid MCP message.
31 | - The client **MUST NOT** write anything to the server's `stdin` that is not a valid MCP
32 |   message.
33 | 
34 | ```mermaid
35 | sequenceDiagram
36 |     participant Client
37 |     participant Server Process
38 | 
39 |     Client->>+Server Process: Launch subprocess
40 |     loop Message Exchange
41 |         Client->>Server Process: Write to stdin
42 |         Server Process->>Client: Write to stdout
43 |         Server Process--)Client: Optional logs on stderr
44 |     end
45 |     Client->>Server Process: Close stdin, terminate subprocess
46 |     deactivate Server Process
47 | ```
48 | 
49 | ## HTTP with SSE
50 | 
51 | In the **SSE** transport, the server operates as an independent process that can handle
52 | multiple client connections.
53 | 
54 | The server **MUST** provide two endpoints:
55 | 
56 | 1. An SSE endpoint, for clients to establish a connection and receive messages from the
57 |    server
58 | 2. A regular HTTP POST endpoint for clients to send messages to the server
59 | 
60 | When a client connects, the server **MUST** send an `endpoint` event containing a URI for
61 | the client to use for sending messages. All subsequent client messages **MUST** be sent
62 | as HTTP POST requests to this endpoint.
63 | 
64 | Server messages are sent as SSE `message` events, with the message content encoded as
65 | JSON in the event data.
66 | 
67 | ```mermaid
68 | sequenceDiagram
69 |     participant Client
70 |     participant Server
71 | 
72 |     Client->>Server: Open SSE connection
73 |     Server->>Client: endpoint event
74 |     loop Message Exchange
75 |         Client->>Server: HTTP POST messages
76 |         Server->>Client: SSE message events
77 |     end
78 |     Client->>Server: Close SSE connection
79 | ```
80 | 
81 | ## Custom Transports
82 | 
83 | Clients and servers **MAY** implement additional custom transport mechanisms to suit
84 | their specific needs. The protocol is transport-agnostic and can be implemented over any
85 | communication channel that supports bidirectional message exchange.
86 | 
87 | Implementers who choose to support custom transports **MUST** ensure they preserve the
88 | JSON-RPC message format and lifecycle requirements defined by MCP. Custom transports
89 | **SHOULD** document their specific connection establishment and message exchange patterns
90 | to aid interoperability.
91 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/basic/utilities/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Utilities
 3 | ---
 4 | 
 5 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 6 | {{< /callout >}}
 7 | 
 8 | These optional features enhance the base protocol functionality with various utilities.
 9 | 
10 | {{< cards >}} {{< card link="ping" title="Ping" icon="status-online" >}}
11 | {{< card link="cancellation" title="Cancellation" icon="x" >}}
12 | {{< card link="progress" title="Progress" icon="clock" >}} {{< /cards >}}
13 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/basic/utilities/cancellation.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Cancellation
 3 | weight: 10
 4 | ---
 5 | 
 6 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 7 | {{< /callout >}}
 8 | 
 9 | The Model Context Protocol (MCP) supports optional cancellation of in-progress requests
10 | through notification messages. Either side can send a cancellation notification to
11 | indicate that a previously-issued request should be terminated.
12 | 
13 | ## Cancellation Flow
14 | 
15 | When a party wants to cancel an in-progress request, it sends a `notifications/cancelled`
16 | notification containing:
17 | 
18 | - The ID of the request to cancel
19 | - An optional reason string that can be logged or displayed
20 | 
21 | ```json
22 | {
23 |   "jsonrpc": "2.0",
24 |   "method": "notifications/cancelled",
25 |   "params": {
26 |     "requestId": "123",
27 |     "reason": "User requested cancellation"
28 |   }
29 | }
30 | ```
31 | 
32 | ## Behavior Requirements
33 | 
34 | 1. Cancellation notifications **MUST** only reference requests that:
35 |    - Were previously issued in the same direction
36 |    - Are believed to still be in-progress
37 | 2. The `initialize` request **MUST NOT** be cancelled by clients
38 | 3. Receivers of cancellation notifications **SHOULD**:
39 |    - Stop processing the cancelled request
40 |    - Free associated resources
41 |    - Not send a response for the cancelled request
42 | 4. Receivers **MAY** ignore cancellation notifications if:
43 |    - The referenced request is unknown
44 |    - Processing has already completed
45 |    - The request cannot be cancelled
46 | 5. The sender of the cancellation notification **SHOULD** ignore any response to the
47 |    request that arrives afterward
48 | 
49 | ## Timing Considerations
50 | 
51 | Due to network latency, cancellation notifications may arrive after request processing
52 | has completed, and potentially after a response has already been sent.
53 | 
54 | Both parties **MUST** handle these race conditions gracefully:
55 | 
56 | ```mermaid
57 | sequenceDiagram
58 |    participant Client
59 |    participant Server
60 | 
61 |    Client->>Server: Request (ID: 123)
62 |    Note over Server: Processing starts
63 |    Client--)Server: notifications/cancelled (ID: 123)
64 |    alt
65 |       Note over Server: Processing may have<br/>completed before<br/>cancellation arrives
66 |    else If not completed
67 |       Note over Server: Stop processing
68 |    end
69 | ```
70 | 
71 | ## Implementation Notes
72 | 
73 | - Both parties **SHOULD** log cancellation reasons for debugging
74 | - Application UIs **SHOULD** indicate when cancellation is requested
75 | 
76 | ## Error Handling
77 | 
78 | Invalid cancellation notifications **SHOULD** be ignored:
79 | 
80 | - Unknown request IDs
81 | - Already completed requests
82 | - Malformed notifications
83 | 
84 | This maintains the "fire and forget" nature of notifications while allowing for race
85 | conditions in asynchronous communication.
86 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/basic/utilities/ping.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Ping
 3 | weight: 5
 4 | ---
 5 | 
 6 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 7 | {{< /callout >}}
 8 | 
 9 | The Model Context Protocol includes an optional ping mechanism that allows either party
10 | to verify that their counterpart is still responsive and the connection is alive.
11 | 
12 | ## Overview
13 | 
14 | The ping functionality is implemented through a simple request/response pattern. Either
15 | the client or server can initiate a ping by sending a `ping` request.
16 | 
17 | ## Message Format
18 | 
19 | A ping request is a standard JSON-RPC request with no parameters:
20 | 
21 | ```json
22 | {
23 |   "jsonrpc": "2.0",
24 |   "id": "123",
25 |   "method": "ping"
26 | }
27 | ```
28 | 
29 | ## Behavior Requirements
30 | 
31 | 1. The receiver **MUST** respond promptly with an empty response:
32 | 
33 | ```json
34 | {
35 |   "jsonrpc": "2.0",
36 |   "id": "123",
37 |   "result": {}
38 | }
39 | ```
40 | 
41 | 2. If no response is received within a reasonable timeout period, the sender **MAY**:
42 |    - Consider the connection stale
43 |    - Terminate the connection
44 |    - Attempt reconnection procedures
45 | 
46 | ## Usage Patterns
47 | 
48 | ```mermaid
49 | sequenceDiagram
50 |     participant Sender
51 |     participant Receiver
52 | 
53 |     Sender->>Receiver: ping request
54 |     Receiver->>Sender: empty response
55 | ```
56 | 
57 | ## Implementation Considerations
58 | 
59 | - Implementations **SHOULD** periodically issue pings to detect connection health
60 | - The frequency of pings **SHOULD** be configurable
61 | - Timeouts **SHOULD** be appropriate for the network environment
62 | - Excessive pinging **SHOULD** be avoided to reduce network overhead
63 | 
64 | ## Error Handling
65 | 
66 | - Timeouts **SHOULD** be treated as connection failures
67 | - Multiple failed pings **MAY** trigger connection reset
68 | - Implementations **SHOULD** log ping failures for diagnostics
69 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/basic/utilities/progress.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Progress
 3 | weight: 30
 4 | ---
 5 | 
 6 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 7 | {{< /callout >}}
 8 | 
 9 | The Model Context Protocol (MCP) supports optional progress tracking for long-running
10 | operations through notification messages. Either side can send progress notifications to
11 | provide updates about operation status.
12 | 
13 | ## Progress Flow
14 | 
15 | When a party wants to _receive_ progress updates for a request, it includes a
16 | `progressToken` in the request metadata.
17 | 
18 | - Progress tokens **MUST** be a string or integer value
19 | - Progress tokens can be chosen by the sender using any means, but **MUST** be unique
20 |   across all active requests.
21 | 
22 | ```json
23 | {
24 |   "jsonrpc": "2.0",
25 |   "id": 1,
26 |   "method": "some_method",
27 |   "params": {
28 |     "_meta": {
29 |       "progressToken": "abc123"
30 |     }
31 |   }
32 | }
33 | ```
34 | 
35 | The receiver **MAY** then send progress notifications containing:
36 | 
37 | - The original progress token
38 | - The current progress value so far
39 | - An optional "total" value
40 | 
41 | ```json
42 | {
43 |   "jsonrpc": "2.0",
44 |   "method": "notifications/progress",
45 |   "params": {
46 |     "progressToken": "abc123",
47 |     "progress": 50,
48 |     "total": 100
49 |   }
50 | }
51 | ```
52 | 
53 | - The `progress` value **MUST** increase with each notification, even if the total is
54 |   unknown.
55 | - The `progress` and the `total` values **MAY** be floating point.
56 | 
57 | ## Behavior Requirements
58 | 
59 | 1. Progress notifications **MUST** only reference tokens that:
60 | 
61 |    - Were provided in an active request
62 |    - Are associated with an in-progress operation
63 | 
64 | 2. Receivers of progress requests **MAY**:
65 |    - Choose not to send any progress notifications
66 |    - Send notifications at whatever frequency they deem appropriate
67 |    - Omit the total value if unknown
68 | 
69 | ```mermaid
70 | sequenceDiagram
71 |     participant Sender
72 |     participant Receiver
73 | 
74 |     Note over Sender,Receiver: Request with progress token
75 |     Sender->>Receiver: Method request with progressToken
76 | 
77 |     Note over Sender,Receiver: Progress updates
78 |     loop Progress Updates
79 |         Receiver-->>Sender: Progress notification (0.2/1.0)
80 |         Receiver-->>Sender: Progress notification (0.6/1.0)
81 |         Receiver-->>Sender: Progress notification (1.0/1.0)
82 |     end
83 | 
84 |     Note over Sender,Receiver: Operation complete
85 |     Receiver->>Sender: Method response
86 | ```
87 | 
88 | ## Implementation Notes
89 | 
90 | - Senders and receivers **SHOULD** track active progress tokens
91 | - Both parties **SHOULD** implement rate limiting to prevent flooding
92 | - Progress notifications **MUST** stop after completion
93 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/basic/versioning.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Versioning
 3 | type: docs
 4 | weight: 80
 5 | ---
 6 | 
 7 | The Model Context Protocol uses string-based version identifiers following the format
 8 | `YYYY-MM-DD`, to indicate the last date backwards incompatible changes were made.
 9 | 
10 | The current protocol version is **{{< param protocolRevision >}}**. [See all
11 | revisions]({{< ref "/specification/2024-11-05/revisions" >}}).
12 | 
13 | {{< callout type="info" >}} The protocol version will _not_ be incremented when the
14 | protocol is updated, as long as the changes maintain backwards compatibility. This allows
15 | for incremental improvements while preserving interoperability. {{< /callout >}}
16 | 
17 | Version negotiation happens during
18 | [initialization]({{< ref "/specification/2024-11-05/basic/lifecycle#initialization" >}}).
19 | Clients and servers **MAY** support multiple protocol versions simultaneously, but they
20 | **MUST** agree on a single version to use for the session.
21 | 
22 | The protocol provides appropriate error handling if version negotiation fails, allowing
23 | clients to gracefully terminate connections when they cannot find a version compatible
24 | with the server.
25 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/client/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Client Features
 3 | cascade:
 4 |   type: docs
 5 | weight: 4
 6 | ---
 7 | 
 8 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 9 | {{< /callout >}}
10 | 
11 | Clients can implement additional features to enrich connected MCP servers:
12 | 
13 | {{< cards >}} {{< card link="roots" title="Roots" icon="folder" >}}
14 | {{< card link="sampling" title="Sampling" icon="annotation" >}} {{< /cards >}}
15 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/client/roots.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Roots
  3 | type: docs
  4 | weight: 40
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
  8 | {{< /callout >}}
  9 | 
 10 | The Model Context Protocol (MCP) provides a standardized way for clients to expose
 11 | filesystem "roots" to servers. Roots define the boundaries of where servers can operate
 12 | within the filesystem, allowing them to understand which directories and files they have
 13 | access to. Servers can request the list of roots from supporting clients and receive
 14 | notifications when that list changes.
 15 | 
 16 | ## User Interaction Model
 17 | 
 18 | Roots in MCP are typically exposed through workspace or project configuration interfaces.
 19 | 
 20 | For example, implementations could offer a workspace/project picker that allows users to
 21 | select directories and files the server should have access to. This can be combined with
 22 | automatic workspace detection from version control systems or project files.
 23 | 
 24 | However, implementations are free to expose roots through any interface pattern that
 25 | suits their needs&mdash;the protocol itself does not mandate any specific user
 26 | interaction model.
 27 | 
 28 | ## Capabilities
 29 | 
 30 | Clients that support roots **MUST** declare the `roots` capability during
 31 | [initialization]({{< ref "/specification/2024-11-05/basic/lifecycle#initialization" >}}):
 32 | 
 33 | ```json
 34 | {
 35 |   "capabilities": {
 36 |     "roots": {
 37 |       "listChanged": true
 38 |     }
 39 |   }
 40 | }
 41 | ```
 42 | 
 43 | `listChanged` indicates whether the client will emit notifications when the list of roots
 44 | changes.
 45 | 
 46 | ## Protocol Messages
 47 | 
 48 | ### Listing Roots
 49 | 
 50 | To retrieve roots, servers send a `roots/list` request:
 51 | 
 52 | **Request:**
 53 | 
 54 | ```json
 55 | {
 56 |   "jsonrpc": "2.0",
 57 |   "id": 1,
 58 |   "method": "roots/list"
 59 | }
 60 | ```
 61 | 
 62 | **Response:**
 63 | 
 64 | ```json
 65 | {
 66 |   "jsonrpc": "2.0",
 67 |   "id": 1,
 68 |   "result": {
 69 |     "roots": [
 70 |       {
 71 |         "uri": "file:///home/user/projects/myproject",
 72 |         "name": "My Project"
 73 |       }
 74 |     ]
 75 |   }
 76 | }
 77 | ```
 78 | 
 79 | ### Root List Changes
 80 | 
 81 | When roots change, clients that support `listChanged` **MUST** send a notification:
 82 | 
 83 | ```json
 84 | {
 85 |   "jsonrpc": "2.0",
 86 |   "method": "notifications/roots/list_changed"
 87 | }
 88 | ```
 89 | 
 90 | ## Message Flow
 91 | 
 92 | ```mermaid
 93 | sequenceDiagram
 94 |     participant Server
 95 |     participant Client
 96 | 
 97 |     Note over Server,Client: Discovery
 98 |     Server->>Client: roots/list
 99 |     Client-->>Server: Available roots
100 | 
101 |     Note over Server,Client: Changes
102 |     Client--)Server: notifications/roots/list_changed
103 |     Server->>Client: roots/list
104 |     Client-->>Server: Updated roots
105 | ```
106 | 
107 | ## Data Types
108 | 
109 | ### Root
110 | 
111 | A root definition includes:
112 | 
113 | - `uri`: Unique identifier for the root. This **MUST** be a `file://` URI in the current
114 |   specification.
115 | - `name`: Optional human-readable name for display purposes.
116 | 
117 | Example roots for different use cases:
118 | 
119 | #### Project Directory
120 | 
121 | ```json
122 | {
123 |   "uri": "file:///home/user/projects/myproject",
124 |   "name": "My Project"
125 | }
126 | ```
127 | 
128 | #### Multiple Repositories
129 | 
130 | ```json
131 | [
132 |   {
133 |     "uri": "file:///home/user/repos/frontend",
134 |     "name": "Frontend Repository"
135 |   },
136 |   {
137 |     "uri": "file:///home/user/repos/backend",
138 |     "name": "Backend Repository"
139 |   }
140 | ]
141 | ```
142 | 
143 | ## Error Handling
144 | 
145 | Clients **SHOULD** return standard JSON-RPC errors for common failure cases:
146 | 
147 | - Client does not support roots: `-32601` (Method not found)
148 | - Internal errors: `-32603`
149 | 
150 | Example error:
151 | 
152 | ```json
153 | {
154 |   "jsonrpc": "2.0",
155 |   "id": 1,
156 |   "error": {
157 |     "code": -32601,
158 |     "message": "Roots not supported",
159 |     "data": {
160 |       "reason": "Client does not have roots capability"
161 |     }
162 |   }
163 | }
164 | ```
165 | 
166 | ## Security Considerations
167 | 
168 | 1. Clients **MUST**:
169 | 
170 |    - Only expose roots with appropriate permissions
171 |    - Validate all root URIs to prevent path traversal
172 |    - Implement proper access controls
173 |    - Monitor root accessibility
174 | 
175 | 2. Servers **SHOULD**:
176 |    - Handle cases where roots become unavailable
177 |    - Respect root boundaries during operations
178 |    - Validate all paths against provided roots
179 | 
180 | ## Implementation Guidelines
181 | 
182 | 1. Clients **SHOULD**:
183 | 
184 |    - Prompt users for consent before exposing roots to servers
185 |    - Provide clear user interfaces for root management
186 |    - Validate root accessibility before exposing
187 |    - Monitor for root changes
188 | 
189 | 2. Servers **SHOULD**:
190 |    - Check for roots capability before usage
191 |    - Handle root list changes gracefully
192 |    - Respect root boundaries in operations
193 |    - Cache root information appropriately
194 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/client/sampling.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Sampling
  3 | type: docs
  4 | weight: 40
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
  8 | {{< /callout >}}
  9 | 
 10 | The Model Context Protocol (MCP) provides a standardized way for servers to request LLM
 11 | sampling ("completions" or "generations") from language models via clients. This flow
 12 | allows clients to maintain control over model access, selection, and permissions while
 13 | enabling servers to leverage AI capabilities&mdash;with no server API keys necessary.
 14 | Servers can request text or image-based interactions and optionally include context from
 15 | MCP servers in their prompts.
 16 | 
 17 | ## User Interaction Model
 18 | 
 19 | Sampling in MCP allows servers to implement agentic behaviors, by enabling LLM calls to
 20 | occur _nested_ inside other MCP server features.
 21 | 
 22 | Implementations are free to expose sampling through any interface pattern that suits
 23 | their needs&mdash;the protocol itself does not mandate any specific user interaction
 24 | model.
 25 | 
 26 | {{< callout type="warning" >}} For trust & safety and security, there **SHOULD** always
 27 | be a human in the loop with the ability to deny sampling requests.
 28 | 
 29 | Applications **SHOULD**:
 30 | 
 31 | - Provide UI that makes it easy and intuitive to review sampling requests
 32 | - Allow users to view and edit prompts before sending
 33 | - Present generated responses for review before delivery {{< /callout >}}
 34 | 
 35 | ## Capabilities
 36 | 
 37 | Clients that support sampling **MUST** declare the `sampling` capability during
 38 | [initialization]({{< ref "/specification/2024-11-05/basic/lifecycle#initialization" >}}):
 39 | 
 40 | ```json
 41 | {
 42 |   "capabilities": {
 43 |     "sampling": {}
 44 |   }
 45 | }
 46 | ```
 47 | 
 48 | ## Protocol Messages
 49 | 
 50 | ### Creating Messages
 51 | 
 52 | To request a language model generation, servers send a `sampling/createMessage` request:
 53 | 
 54 | **Request:**
 55 | 
 56 | ```json
 57 | {
 58 |   "jsonrpc": "2.0",
 59 |   "id": 1,
 60 |   "method": "sampling/createMessage",
 61 |   "params": {
 62 |     "messages": [
 63 |       {
 64 |         "role": "user",
 65 |         "content": {
 66 |           "type": "text",
 67 |           "text": "What is the capital of France?"
 68 |         }
 69 |       }
 70 |     ],
 71 |     "modelPreferences": {
 72 |       "hints": [
 73 |         {
 74 |           "name": "claude-3-sonnet"
 75 |         }
 76 |       ],
 77 |       "intelligencePriority": 0.8,
 78 |       "speedPriority": 0.5
 79 |     },
 80 |     "systemPrompt": "You are a helpful assistant.",
 81 |     "maxTokens": 100
 82 |   }
 83 | }
 84 | ```
 85 | 
 86 | **Response:**
 87 | 
 88 | ```json
 89 | {
 90 |   "jsonrpc": "2.0",
 91 |   "id": 1,
 92 |   "result": {
 93 |     "role": "assistant",
 94 |     "content": {
 95 |       "type": "text",
 96 |       "text": "The capital of France is Paris."
 97 |     },
 98 |     "model": "claude-3-sonnet-20240307",
 99 |     "stopReason": "endTurn"
100 |   }
101 | }
102 | ```
103 | 
104 | ## Message Flow
105 | 
106 | ```mermaid
107 | sequenceDiagram
108 |     participant Server
109 |     participant Client
110 |     participant User
111 |     participant LLM
112 | 
113 |     Note over Server,Client: Server initiates sampling
114 |     Server->>Client: sampling/createMessage
115 | 
116 |     Note over Client,User: Human-in-the-loop review
117 |     Client->>User: Present request for approval
118 |     User-->>Client: Review and approve/modify
119 | 
120 |     Note over Client,LLM: Model interaction
121 |     Client->>LLM: Forward approved request
122 |     LLM-->>Client: Return generation
123 | 
124 |     Note over Client,User: Response review
125 |     Client->>User: Present response for approval
126 |     User-->>Client: Review and approve/modify
127 | 
128 |     Note over Server,Client: Complete request
129 |     Client-->>Server: Return approved response
130 | ```
131 | 
132 | ## Data Types
133 | 
134 | ### Messages
135 | 
136 | Sampling messages can contain:
137 | 
138 | #### Text Content
139 | 
140 | ```json
141 | {
142 |   "type": "text",
143 |   "text": "The message content"
144 | }
145 | ```
146 | 
147 | #### Image Content
148 | 
149 | ```json
150 | {
151 |   "type": "image",
152 |   "data": "base64-encoded-image-data",
153 |   "mimeType": "image/jpeg"
154 | }
155 | ```
156 | 
157 | ### Model Preferences
158 | 
159 | Model selection in MCP requires careful abstraction since servers and clients may use
160 | different AI providers with distinct model offerings. A server cannot simply request a
161 | specific model by name since the client may not have access to that exact model or may
162 | prefer to use a different provider's equivalent model.
163 | 
164 | To solve this, MCP implements a preference system that combines abstract capability
165 | priorities with optional model hints:
166 | 
167 | #### Capability Priorities
168 | 
169 | Servers express their needs through three normalized priority values (0-1):
170 | 
171 | - `costPriority`: How important is minimizing costs? Higher values prefer cheaper models.
172 | - `speedPriority`: How important is low latency? Higher values prefer faster models.
173 | - `intelligencePriority`: How important are advanced capabilities? Higher values prefer
174 |   more capable models.
175 | 
176 | #### Model Hints
177 | 
178 | While priorities help select models based on characteristics, `hints` allow servers to
179 | suggest specific models or model families:
180 | 
181 | - Hints are treated as substrings that can match model names flexibly
182 | - Multiple hints are evaluated in order of preference
183 | - Clients **MAY** map hints to equivalent models from different providers
184 | - Hints are advisory&mdash;clients make final model selection
185 | 
186 | For example:
187 | 
188 | ```json
189 | {
190 |   "hints": [
191 |     { "name": "claude-3-sonnet" }, // Prefer Sonnet-class models
192 |     { "name": "claude" } // Fall back to any Claude model
193 |   ],
194 |   "costPriority": 0.3, // Cost is less important
195 |   "speedPriority": 0.8, // Speed is very important
196 |   "intelligencePriority": 0.5 // Moderate capability needs
197 | }
198 | ```
199 | 
200 | The client processes these preferences to select an appropriate model from its available
201 | options. For instance, if the client doesn't have access to Claude models but has Gemini,
202 | it might map the sonnet hint to `gemini-1.5-pro` based on similar capabilities.
203 | 
204 | ## Error Handling
205 | 
206 | Clients **SHOULD** return errors for common failure cases:
207 | 
208 | Example error:
209 | 
210 | ```json
211 | {
212 |   "jsonrpc": "2.0",
213 |   "id": 1,
214 |   "error": {
215 |     "code": -1,
216 |     "message": "User rejected sampling request"
217 |   }
218 | }
219 | ```
220 | 
221 | ## Security Considerations
222 | 
223 | 1. Clients **SHOULD** implement user approval controls
224 | 2. Both parties **SHOULD** validate message content
225 | 3. Clients **SHOULD** respect model preference hints
226 | 4. Clients **SHOULD** implement rate limiting
227 | 5. Both parties **MUST** handle sensitive data appropriately
228 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/contributing/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: "Contributions"
 3 | weight: 10
 4 | cascade:
 5 |   type: docs
 6 | breadcrumbs: false
 7 | ---
 8 | 
 9 | We welcome contributions from the community! Please review our
10 | [contributing guidelines](https://github.com/modelcontextprotocol/specification/blob/main/CONTRIBUTING.md)
11 | for details on how to submit changes.
12 | 
13 | All contributors must adhere to our
14 | [Code of Conduct](https://github.com/modelcontextprotocol/specification/blob/main/CODE_OF_CONDUCT.md).
15 | 
16 | For questions and discussions, please use
17 | [GitHub Discussions](https://github.com/modelcontextprotocol/specification/discussions).
18 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/revisions/2024-11-05.md:
--------------------------------------------------------------------------------
1 | ---
2 | title: 2024-11-05 (Current)
3 | weight: 1
4 | ---
5 | 
6 | This is the current version of the specification. This revision may continue to receive
7 | backwards compatible changes.
8 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/revisions/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Revisions
 3 | cascade:
 4 |   type: docs
 5 | ---
 6 | 
 7 | This page lists the different revisions of the Model Context Protocol. See
 8 | [Versioning]({{< ref "/specification/2024-11-05/basic/versioning" >}}) for more
 9 | information about how the protocol is versioned.
10 | 
11 | Revisions may be marked as:
12 | 
13 | - **Draft**: in-progress specifications, not yet ready for consumption.
14 | - **Current**: the current protocol version, which is ready for use and may continue to
15 |   receive [backwards compatible
16 |   changes]({{< ref "/specification/2024-11-05/basic/versioning" >}}).
17 | - **Final**: past, complete specifications that will not be changed.
18 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/server/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Server Features
 3 | cascade:
 4 |   type: docs
 5 | weight: 3
 6 | ---
 7 | 
 8 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 9 | {{< /callout >}}
10 | 
11 | Servers provide the fundamental building blocks for adding context to language models via
12 | MCP. These primitives enable rich interactions between clients, servers, and language
13 | models:
14 | 
15 | - **Prompts**: Pre-defined templates or instructions that guide language model
16 |   interactions
17 | - **Resources**: Structured data or content that provides additional context to the model
18 | - **Tools**: Executable functions that allow models to perform actions or retrieve
19 |   information
20 | 
21 | Each primitive can be summarized in the following control hierarchy:
22 | 
23 | | Primitive | Control                | Description                                        | Example                         |
24 | | --------- | ---------------------- | -------------------------------------------------- | ------------------------------- |
25 | | Prompts   | User-controlled        | Interactive templates invoked by user choice       | Slash commands, menu options    |
26 | | Resources | Application-controlled | Contextual data attached and managed by the client | File contents, git history      |
27 | | Tools     | Model-controlled       | Functions exposed to the LLM to take actions       | API POST requests, file writing |
28 | 
29 | Explore these key primitives in more detail below:
30 | 
31 | {{< cards >}} {{< card link="prompts" title="Prompts" icon="chat-alt-2" >}}
32 | {{< card link="resources" title="Resources" icon="document" >}}
33 | {{< card link="tools" title="Tools" icon="adjustments" >}} {{< /cards >}}
34 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/server/prompts.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Prompts
  3 | weight: 10
  4 | ---
  5 | 
  6 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
  7 | {{< /callout >}}
  8 | 
  9 | The Model Context Protocol (MCP) provides a standardized way for servers to expose prompt
 10 | templates to clients. Prompts allow servers to provide structured messages and
 11 | instructions for interacting with language models. Clients can discover available
 12 | prompts, retrieve their contents, and provide arguments to customize them.
 13 | 
 14 | ## User Interaction Model
 15 | 
 16 | Prompts are designed to be **user-controlled**, meaning they are exposed from servers to
 17 | clients with the intention of the user being able to explicitly select them for use.
 18 | 
 19 | Typically, prompts would be triggered through user-initiated commands in the user
 20 | interface, which allows users to naturally discover and invoke available prompts.
 21 | 
 22 | For example, as slash commands:
 23 | 
 24 | ![Example of prompt exposed as slash command](slash-command.png)
 25 | 
 26 | However, implementors are free to expose prompts through any interface pattern that suits
 27 | their needs&mdash;the protocol itself does not mandate any specific user interaction
 28 | model.
 29 | 
 30 | ## Capabilities
 31 | 
 32 | Servers that support prompts **MUST** declare the `prompts` capability during
 33 | [initialization]({{< ref "/specification/2024-11-05/basic/lifecycle#initialization" >}}):
 34 | 
 35 | ```json
 36 | {
 37 |   "capabilities": {
 38 |     "prompts": {
 39 |       "listChanged": true
 40 |     }
 41 |   }
 42 | }
 43 | ```
 44 | 
 45 | `listChanged` indicates whether the server will emit notifications when the list of
 46 | available prompts changes.
 47 | 
 48 | ## Protocol Messages
 49 | 
 50 | ### Listing Prompts
 51 | 
 52 | To retrieve available prompts, clients send a `prompts/list` request. This operation
 53 | supports
 54 | [pagination]({{< ref "/specification/2024-11-05/server/utilities/pagination" >}}).
 55 | 
 56 | **Request:**
 57 | 
 58 | ```json
 59 | {
 60 |   "jsonrpc": "2.0",
 61 |   "id": 1,
 62 |   "method": "prompts/list",
 63 |   "params": {
 64 |     "cursor": "optional-cursor-value"
 65 |   }
 66 | }
 67 | ```
 68 | 
 69 | **Response:**
 70 | 
 71 | ```json
 72 | {
 73 |   "jsonrpc": "2.0",
 74 |   "id": 1,
 75 |   "result": {
 76 |     "prompts": [
 77 |       {
 78 |         "name": "code_review",
 79 |         "description": "Asks the LLM to analyze code quality and suggest improvements",
 80 |         "arguments": [
 81 |           {
 82 |             "name": "code",
 83 |             "description": "The code to review",
 84 |             "required": true
 85 |           }
 86 |         ]
 87 |       }
 88 |     ],
 89 |     "nextCursor": "next-page-cursor"
 90 |   }
 91 | }
 92 | ```
 93 | 
 94 | ### Getting a Prompt
 95 | 
 96 | To retrieve a specific prompt, clients send a `prompts/get` request. Arguments may be
 97 | auto-completed through [the completion
 98 | API]({{< ref "/specification/2024-11-05/server/utilities/completion" >}}).
 99 | 
100 | **Request:**
101 | 
102 | ```json
103 | {
104 |   "jsonrpc": "2.0",
105 |   "id": 2,
106 |   "method": "prompts/get",
107 |   "params": {
108 |     "name": "code_review",
109 |     "arguments": {
110 |       "code": "def hello():\n    print('world')"
111 |     }
112 |   }
113 | }
114 | ```
115 | 
116 | **Response:**
117 | 
118 | ```json
119 | {
120 |   "jsonrpc": "2.0",
121 |   "id": 2,
122 |   "result": {
123 |     "description": "Code review prompt",
124 |     "messages": [
125 |       {
126 |         "role": "user",
127 |         "content": {
128 |           "type": "text",
129 |           "text": "Please review this Python code:\ndef hello():\n    print('world')"
130 |         }
131 |       }
132 |     ]
133 |   }
134 | }
135 | ```
136 | 
137 | ### List Changed Notification
138 | 
139 | When the list of available prompts changes, servers that declared the `listChanged`
140 | capability **SHOULD** send a notification:
141 | 
142 | ```json
143 | {
144 |   "jsonrpc": "2.0",
145 |   "method": "notifications/prompts/list_changed"
146 | }
147 | ```
148 | 
149 | ## Message Flow
150 | 
151 | ```mermaid
152 | sequenceDiagram
153 |     participant Client
154 |     participant Server
155 | 
156 |     Note over Client,Server: Discovery
157 |     Client->>Server: prompts/list
158 |     Server-->>Client: List of prompts
159 | 
160 |     Note over Client,Server: Usage
161 |     Client->>Server: prompts/get
162 |     Server-->>Client: Prompt content
163 | 
164 |     opt listChanged
165 |       Note over Client,Server: Changes
166 |       Server--)Client: prompts/list_changed
167 |       Client->>Server: prompts/list
168 |       Server-->>Client: Updated prompts
169 |     end
170 | ```
171 | 
172 | ## Data Types
173 | 
174 | ### Prompt
175 | 
176 | A prompt definition includes:
177 | 
178 | - `name`: Unique identifier for the prompt
179 | - `description`: Optional human-readable description
180 | - `arguments`: Optional list of arguments for customization
181 | 
182 | ### PromptMessage
183 | 
184 | Messages in a prompt can contain:
185 | 
186 | - `role`: Either "user" or "assistant" to indicate the speaker
187 | - `content`: One of the following content types:
188 | 
189 | #### Text Content
190 | 
191 | Text content represents plain text messages:
192 | 
193 | ```json
194 | {
195 |   "type": "text",
196 |   "text": "The text content of the message"
197 | }
198 | ```
199 | 
200 | This is the most common content type used for natural language interactions.
201 | 
202 | #### Image Content
203 | 
204 | Image content allows including visual information in messages:
205 | 
206 | ```json
207 | {
208 |   "type": "image",
209 |   "data": "base64-encoded-image-data",
210 |   "mimeType": "image/png"
211 | }
212 | ```
213 | 
214 | The image data **MUST** be base64-encoded and include a valid MIME type. This enables
215 | multi-modal interactions where visual context is important.
216 | 
217 | #### Embedded Resources
218 | 
219 | Embedded resources allow referencing server-side resources directly in messages:
220 | 
221 | ```json
222 | {
223 |   "type": "resource",
224 |   "resource": {
225 |     "uri": "resource://example",
226 |     "mimeType": "text/plain",
227 |     "text": "Resource content"
228 |   }
229 | }
230 | ```
231 | 
232 | Resources can contain either text or binary (blob) data and **MUST** include:
233 | 
234 | - A valid resource URI
235 | - The appropriate MIME type
236 | - Either text content or base64-encoded blob data
237 | 
238 | Embedded resources enable prompts to seamlessly incorporate server-managed content like
239 | documentation, code samples, or other reference materials directly into the conversation
240 | flow.
241 | 
242 | ## Error Handling
243 | 
244 | Servers **SHOULD** return standard JSON-RPC errors for common failure cases:
245 | 
246 | - Invalid prompt name: `-32602` (Invalid params)
247 | - Missing required arguments: `-32602` (Invalid params)
248 | - Internal errors: `-32603` (Internal error)
249 | 
250 | ## Implementation Considerations
251 | 
252 | 1. Servers **SHOULD** validate prompt arguments before processing
253 | 2. Clients **SHOULD** handle pagination for large prompt lists
254 | 3. Both parties **SHOULD** respect capability negotiation
255 | 
256 | ## Security
257 | 
258 | Implementations **MUST** carefully validate all prompt inputs and outputs to prevent
259 | injection attacks or unauthorized access to resources.
260 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/server/resource-picker.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/specification/main/docs/specification/2024-11-05/server/resource-picker.png


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/server/resources.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Resources
  3 | type: docs
  4 | weight: 20
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
  8 | {{< /callout >}}
  9 | 
 10 | The Model Context Protocol (MCP) provides a standardized way for servers to expose
 11 | resources to clients. Resources allow servers to share data that provides context to
 12 | language models, such as files, database schemas, or application-specific information.
 13 | Each resource is uniquely identified by a
 14 | [URI](https://datatracker.ietf.org/doc/html/rfc3986).
 15 | 
 16 | ## User Interaction Model
 17 | 
 18 | Resources in MCP are designed to be **application-driven**, with host applications
 19 | determining how to incorporate context based on their needs.
 20 | 
 21 | For example, applications could:
 22 | 
 23 | - Expose resources through UI elements for explicit selection, in a tree or list view
 24 | - Allow the user to search through and filter available resources
 25 | - Implement automatic context inclusion, based on heuristics or the AI model's selection
 26 | 
 27 | ![Example of resource context picker](resource-picker.png)
 28 | 
 29 | However, implementations are free to expose resources through any interface pattern that
 30 | suits their needs&mdash;the protocol itself does not mandate any specific user
 31 | interaction model.
 32 | 
 33 | ## Capabilities
 34 | 
 35 | Servers that support resources **MUST** declare the `resources` capability:
 36 | 
 37 | ```json
 38 | {
 39 |   "capabilities": {
 40 |     "resources": {
 41 |       "subscribe": true,
 42 |       "listChanged": true
 43 |     }
 44 |   }
 45 | }
 46 | ```
 47 | 
 48 | The capability supports two optional features:
 49 | 
 50 | - `subscribe`: whether the client can subscribe to be notified of changes to individual
 51 |   resources.
 52 | - `listChanged`: whether the server will emit notifications when the list of available
 53 |   resources changes.
 54 | 
 55 | Both `subscribe` and `listChanged` are optional&mdash;servers can support neither,
 56 | either, or both:
 57 | 
 58 | ```json
 59 | {
 60 |   "capabilities": {
 61 |     "resources": {} // Neither feature supported
 62 |   }
 63 | }
 64 | ```
 65 | 
 66 | ```json
 67 | {
 68 |   "capabilities": {
 69 |     "resources": {
 70 |       "subscribe": true // Only subscriptions supported
 71 |     }
 72 |   }
 73 | }
 74 | ```
 75 | 
 76 | ```json
 77 | {
 78 |   "capabilities": {
 79 |     "resources": {
 80 |       "listChanged": true // Only list change notifications supported
 81 |     }
 82 |   }
 83 | }
 84 | ```
 85 | 
 86 | ## Protocol Messages
 87 | 
 88 | ### Listing Resources
 89 | 
 90 | To discover available resources, clients send a `resources/list` request. This operation
 91 | supports
 92 | [pagination]({{< ref "/specification/2024-11-05/server/utilities/pagination" >}}).
 93 | 
 94 | **Request:**
 95 | 
 96 | ```json
 97 | {
 98 |   "jsonrpc": "2.0",
 99 |   "id": 1,
100 |   "method": "resources/list",
101 |   "params": {
102 |     "cursor": "optional-cursor-value"
103 |   }
104 | }
105 | ```
106 | 
107 | **Response:**
108 | 
109 | ```json
110 | {
111 |   "jsonrpc": "2.0",
112 |   "id": 1,
113 |   "result": {
114 |     "resources": [
115 |       {
116 |         "uri": "file:///project/src/main.rs",
117 |         "name": "main.rs",
118 |         "description": "Primary application entry point",
119 |         "mimeType": "text/x-rust"
120 |       }
121 |     ],
122 |     "nextCursor": "next-page-cursor"
123 |   }
124 | }
125 | ```
126 | 
127 | ### Reading Resources
128 | 
129 | To retrieve resource contents, clients send a `resources/read` request:
130 | 
131 | **Request:**
132 | 
133 | ```json
134 | {
135 |   "jsonrpc": "2.0",
136 |   "id": 2,
137 |   "method": "resources/read",
138 |   "params": {
139 |     "uri": "file:///project/src/main.rs"
140 |   }
141 | }
142 | ```
143 | 
144 | **Response:**
145 | 
146 | ```json
147 | {
148 |   "jsonrpc": "2.0",
149 |   "id": 2,
150 |   "result": {
151 |     "contents": [
152 |       {
153 |         "uri": "file:///project/src/main.rs",
154 |         "mimeType": "text/x-rust",
155 |         "text": "fn main() {\n    println!(\"Hello world!\");\n}"
156 |       }
157 |     ]
158 |   }
159 | }
160 | ```
161 | 
162 | ### Resource Templates
163 | 
164 | Resource templates allow servers to expose parameterized resources using
165 | [URI templates](https://datatracker.ietf.org/doc/html/rfc6570). Arguments may be
166 | auto-completed through [the completion
167 | API]({{< ref "/specification/2024-11-05/server/utilities/completion" >}}).
168 | 
169 | **Request:**
170 | 
171 | ```json
172 | {
173 |   "jsonrpc": "2.0",
174 |   "id": 3,
175 |   "method": "resources/templates/list"
176 | }
177 | ```
178 | 
179 | **Response:**
180 | 
181 | ```json
182 | {
183 |   "jsonrpc": "2.0",
184 |   "id": 3,
185 |   "result": {
186 |     "resourceTemplates": [
187 |       {
188 |         "uriTemplate": "file:///{path}",
189 |         "name": "Project Files",
190 |         "description": "Access files in the project directory",
191 |         "mimeType": "application/octet-stream"
192 |       }
193 |     ]
194 |   }
195 | }
196 | ```
197 | 
198 | ### List Changed Notification
199 | 
200 | When the list of available resources changes, servers that declared the `listChanged`
201 | capability **SHOULD** send a notification:
202 | 
203 | ```json
204 | {
205 |   "jsonrpc": "2.0",
206 |   "method": "notifications/resources/list_changed"
207 | }
208 | ```
209 | 
210 | ### Subscriptions
211 | 
212 | The protocol supports optional subscriptions to resource changes. Clients can subscribe
213 | to specific resources and receive notifications when they change:
214 | 
215 | **Subscribe Request:**
216 | 
217 | ```json
218 | {
219 |   "jsonrpc": "2.0",
220 |   "id": 4,
221 |   "method": "resources/subscribe",
222 |   "params": {
223 |     "uri": "file:///project/src/main.rs"
224 |   }
225 | }
226 | ```
227 | 
228 | **Update Notification:**
229 | 
230 | ```json
231 | {
232 |   "jsonrpc": "2.0",
233 |   "method": "notifications/resources/updated",
234 |   "params": {
235 |     "uri": "file:///project/src/main.rs"
236 |   }
237 | }
238 | ```
239 | 
240 | ## Message Flow
241 | 
242 | ```mermaid
243 | sequenceDiagram
244 |     participant Client
245 |     participant Server
246 | 
247 |     Note over Client,Server: Resource Discovery
248 |     Client->>Server: resources/list
249 |     Server-->>Client: List of resources
250 | 
251 |     Note over Client,Server: Resource Access
252 |     Client->>Server: resources/read
253 |     Server-->>Client: Resource contents
254 | 
255 |     Note over Client,Server: Subscriptions
256 |     Client->>Server: resources/subscribe
257 |     Server-->>Client: Subscription confirmed
258 | 
259 |     Note over Client,Server: Updates
260 |     Server--)Client: notifications/resources/updated
261 |     Client->>Server: resources/read
262 |     Server-->>Client: Updated contents
263 | ```
264 | 
265 | ## Data Types
266 | 
267 | ### Resource
268 | 
269 | A resource definition includes:
270 | 
271 | - `uri`: Unique identifier for the resource
272 | - `name`: Human-readable name
273 | - `description`: Optional description
274 | - `mimeType`: Optional MIME type
275 | 
276 | ### Resource Contents
277 | 
278 | Resources can contain either text or binary data:
279 | 
280 | #### Text Content
281 | 
282 | ```json
283 | {
284 |   "uri": "file:///example.txt",
285 |   "mimeType": "text/plain",
286 |   "text": "Resource content"
287 | }
288 | ```
289 | 
290 | #### Binary Content
291 | 
292 | ```json
293 | {
294 |   "uri": "file:///example.png",
295 |   "mimeType": "image/png",
296 |   "blob": "base64-encoded-data"
297 | }
298 | ```
299 | 
300 | ## Common URI Schemes
301 | 
302 | The protocol defines several standard URI schemes. This list not
303 | exhaustive&mdash;implementations are always free to use additional, custom URI schemes.
304 | 
305 | ### https://
306 | 
307 | Used to represent a resource available on the web.
308 | 
309 | Servers **SHOULD** use this scheme only when the client is able to fetch and load the
310 | resource directly from the web on its own—that is, it doesn’t need to read the resource
311 | via the MCP server.
312 | 
313 | For other use cases, servers **SHOULD** prefer to use another URI scheme, or define a
314 | custom one, even if the server will itself be downloading resource contents over the
315 | internet.
316 | 
317 | ### file://
318 | 
319 | Used to identify resources that behave like a filesystem. However, the resources do not
320 | need to map to an actual physical filesystem.
321 | 
322 | MCP servers **MAY** identify file:// resources with an
323 | [XDG MIME type](https://specifications.freedesktop.org/shared-mime-info-spec/0.14/ar01s02.html#id-1.3.14),
324 | like `inode/directory`, to represent non-regular files (such as directories) that don’t
325 | otherwise have a standard MIME type.
326 | 
327 | ### git://
328 | 
329 | Git version control integration.
330 | 
331 | ## Error Handling
332 | 
333 | Servers **SHOULD** return standard JSON-RPC errors for common failure cases:
334 | 
335 | - Resource not found: `-32002`
336 | - Internal errors: `-32603`
337 | 
338 | Example error:
339 | 
340 | ```json
341 | {
342 |   "jsonrpc": "2.0",
343 |   "id": 5,
344 |   "error": {
345 |     "code": -32002,
346 |     "message": "Resource not found",
347 |     "data": {
348 |       "uri": "file:///nonexistent.txt"
349 |     }
350 |   }
351 | }
352 | ```
353 | 
354 | ## Security Considerations
355 | 
356 | 1. Servers **MUST** validate all resource URIs
357 | 2. Access controls **SHOULD** be implemented for sensitive resources
358 | 3. Binary data **MUST** be properly encoded
359 | 4. Resource permissions **SHOULD** be checked before operations
360 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/server/slash-command.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/specification/main/docs/specification/2024-11-05/server/slash-command.png


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/server/tools.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Tools
  3 | type: docs
  4 | weight: 40
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
  8 | {{< /callout >}}
  9 | 
 10 | The Model Context Protocol (MCP) allows servers to expose tools that can be invoked by
 11 | language models. Tools enable models to interact with external systems, such as querying
 12 | databases, calling APIs, or performing computations. Each tool is uniquely identified by
 13 | a name and includes metadata describing its schema.
 14 | 
 15 | ## User Interaction Model
 16 | 
 17 | Tools in MCP are designed to be **model-controlled**, meaning that the language model can
 18 | discover and invoke tools automatically based on its contextual understanding and the
 19 | user's prompts.
 20 | 
 21 | However, implementations are free to expose tools through any interface pattern that
 22 | suits their needs&mdash;the protocol itself does not mandate any specific user
 23 | interaction model.
 24 | 
 25 | {{< callout type="warning" >}} For trust & safety and security, there **SHOULD** always
 26 | be a human in the loop with the ability to deny tool invocations.
 27 | 
 28 | Applications **SHOULD**:
 29 | 
 30 | - Provide UI that makes clear which tools are being exposed to the AI model
 31 | - Insert clear visual indicators when tools are invoked
 32 | - Present confirmation prompts to the user for operations, to ensure a human is in the
 33 |   loop {{< /callout >}}
 34 | 
 35 | ## Capabilities
 36 | 
 37 | Servers that support tools **MUST** declare the `tools` capability:
 38 | 
 39 | ```json
 40 | {
 41 |   "capabilities": {
 42 |     "tools": {
 43 |       "listChanged": true
 44 |     }
 45 |   }
 46 | }
 47 | ```
 48 | 
 49 | `listChanged` indicates whether the server will emit notifications when the list of
 50 | available tools changes.
 51 | 
 52 | ## Protocol Messages
 53 | 
 54 | ### Listing Tools
 55 | 
 56 | To discover available tools, clients send a `tools/list` request. This operation supports
 57 | [pagination]({{< ref "/specification/2024-11-05/server/utilities/pagination" >}}).
 58 | 
 59 | **Request:**
 60 | 
 61 | ```json
 62 | {
 63 |   "jsonrpc": "2.0",
 64 |   "id": 1,
 65 |   "method": "tools/list",
 66 |   "params": {
 67 |     "cursor": "optional-cursor-value"
 68 |   }
 69 | }
 70 | ```
 71 | 
 72 | **Response:**
 73 | 
 74 | ```json
 75 | {
 76 |   "jsonrpc": "2.0",
 77 |   "id": 1,
 78 |   "result": {
 79 |     "tools": [
 80 |       {
 81 |         "name": "get_weather",
 82 |         "description": "Get current weather information for a location",
 83 |         "inputSchema": {
 84 |           "type": "object",
 85 |           "properties": {
 86 |             "location": {
 87 |               "type": "string",
 88 |               "description": "City name or zip code"
 89 |             }
 90 |           },
 91 |           "required": ["location"]
 92 |         }
 93 |       }
 94 |     ],
 95 |     "nextCursor": "next-page-cursor"
 96 |   }
 97 | }
 98 | ```
 99 | 
100 | ### Calling Tools
101 | 
102 | To invoke a tool, clients send a `tools/call` request:
103 | 
104 | **Request:**
105 | 
106 | ```json
107 | {
108 |   "jsonrpc": "2.0",
109 |   "id": 2,
110 |   "method": "tools/call",
111 |   "params": {
112 |     "name": "get_weather",
113 |     "arguments": {
114 |       "location": "New York"
115 |     }
116 |   }
117 | }
118 | ```
119 | 
120 | **Response:**
121 | 
122 | ```json
123 | {
124 |   "jsonrpc": "2.0",
125 |   "id": 2,
126 |   "result": {
127 |     "content": [
128 |       {
129 |         "type": "text",
130 |         "text": "Current weather in New York:\nTemperature: 72°F\nConditions: Partly cloudy"
131 |       }
132 |     ],
133 |     "isError": false
134 |   }
135 | }
136 | ```
137 | 
138 | ### List Changed Notification
139 | 
140 | When the list of available tools changes, servers that declared the `listChanged`
141 | capability **SHOULD** send a notification:
142 | 
143 | ```json
144 | {
145 |   "jsonrpc": "2.0",
146 |   "method": "notifications/tools/list_changed"
147 | }
148 | ```
149 | 
150 | ## Message Flow
151 | 
152 | ```mermaid
153 | sequenceDiagram
154 |     participant LLM
155 |     participant Client
156 |     participant Server
157 | 
158 |     Note over Client,Server: Discovery
159 |     Client->>Server: tools/list
160 |     Server-->>Client: List of tools
161 | 
162 |     Note over Client,LLM: Tool Selection
163 |     LLM->>Client: Select tool to use
164 | 
165 |     Note over Client,Server: Invocation
166 |     Client->>Server: tools/call
167 |     Server-->>Client: Tool result
168 |     Client->>LLM: Process result
169 | 
170 |     Note over Client,Server: Updates
171 |     Server--)Client: tools/list_changed
172 |     Client->>Server: tools/list
173 |     Server-->>Client: Updated tools
174 | ```
175 | 
176 | ## Data Types
177 | 
178 | ### Tool
179 | 
180 | A tool definition includes:
181 | 
182 | - `name`: Unique identifier for the tool
183 | - `description`: Human-readable description of functionality
184 | - `inputSchema`: JSON Schema defining expected parameters
185 | 
186 | ### Tool Result
187 | 
188 | Tool results can contain multiple content items of different types:
189 | 
190 | #### Text Content
191 | 
192 | ```json
193 | {
194 |   "type": "text",
195 |   "text": "Tool result text"
196 | }
197 | ```
198 | 
199 | #### Image Content
200 | 
201 | ```json
202 | {
203 |   "type": "image",
204 |   "data": "base64-encoded-data",
205 |   "mimeType": "image/png"
206 | }
207 | ```
208 | 
209 | #### Embedded Resources
210 | 
211 | [Resources]({{< ref "/specification/2024-11-05/server/resources" >}}) **MAY** be
212 | embedded, to provide additional context or data, behind a URI that can be subscribed to
213 | or fetched again by the client later:
214 | 
215 | ```json
216 | {
217 |   "type": "resource",
218 |   "resource": {
219 |     "uri": "resource://example",
220 |     "mimeType": "text/plain",
221 |     "text": "Resource content"
222 |   }
223 | }
224 | ```
225 | 
226 | ## Error Handling
227 | 
228 | Tools use two error reporting mechanisms:
229 | 
230 | 1. **Protocol Errors**: Standard JSON-RPC errors for issues like:
231 | 
232 |    - Unknown tools
233 |    - Invalid arguments
234 |    - Server errors
235 | 
236 | 2. **Tool Execution Errors**: Reported in tool results with `isError: true`:
237 |    - API failures
238 |    - Invalid input data
239 |    - Business logic errors
240 | 
241 | Example protocol error:
242 | 
243 | ```json
244 | {
245 |   "jsonrpc": "2.0",
246 |   "id": 3,
247 |   "error": {
248 |     "code": -32602,
249 |     "message": "Unknown tool: invalid_tool_name"
250 |   }
251 | }
252 | ```
253 | 
254 | Example tool execution error:
255 | 
256 | ```json
257 | {
258 |   "jsonrpc": "2.0",
259 |   "id": 4,
260 |   "result": {
261 |     "content": [
262 |       {
263 |         "type": "text",
264 |         "text": "Failed to fetch weather data: API rate limit exceeded"
265 |       }
266 |     ],
267 |     "isError": true
268 |   }
269 | }
270 | ```
271 | 
272 | ## Security Considerations
273 | 
274 | 1. Servers **MUST**:
275 | 
276 |    - Validate all tool inputs
277 |    - Implement proper access controls
278 |    - Rate limit tool invocations
279 |    - Sanitize tool outputs
280 | 
281 | 2. Clients **SHOULD**:
282 |    - Prompt for user confirmation on sensitive operations
283 |    - Show tool inputs to the user before calling the server, to avoid malicious or
284 |      accidental data exfiltration
285 |    - Validate tool results before passing to LLM
286 |    - Implement timeouts for tool calls
287 |    - Log tool usage for audit purposes
288 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/server/utilities/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Utilities
 3 | ---
 4 | 
 5 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 6 | {{< /callout >}}
 7 | 
 8 | These optional features can be used to enhance server functionality.
 9 | 
10 | {{< cards >}} {{< card link="completion" title="Completion" icon="at-symbol" >}}
11 | {{< card link="logging" title="Logging" icon="terminal" >}}
12 | {{< card link="pagination" title="Pagination" icon="collection" >}} {{< /cards >}}
13 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/server/utilities/completion.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Completion
  3 | ---
  4 | 
  5 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
  6 | {{< /callout >}}
  7 | 
  8 | The Model Context Protocol (MCP) provides a standardized way for servers to offer
  9 | argument autocompletion suggestions for prompts and resource URIs. This enables rich,
 10 | IDE-like experiences where users receive contextual suggestions while entering argument
 11 | values.
 12 | 
 13 | ## User Interaction Model
 14 | 
 15 | Completion in MCP is designed to support interactive user experiences similar to IDE code
 16 | completion.
 17 | 
 18 | For example, applications may show completion suggestions in a dropdown or popup menu as
 19 | users type, with the ability to filter and select from available options.
 20 | 
 21 | However, implementations are free to expose completion through any interface pattern that
 22 | suits their needs&mdash;the protocol itself does not mandate any specific user
 23 | interaction model.
 24 | 
 25 | ## Protocol Messages
 26 | 
 27 | ### Requesting Completions
 28 | 
 29 | To get completion suggestions, clients send a `completion/complete` request specifying
 30 | what is being completed through a reference type:
 31 | 
 32 | **Request:**
 33 | 
 34 | ```json
 35 | {
 36 |   "jsonrpc": "2.0",
 37 |   "id": 1,
 38 |   "method": "completion/complete",
 39 |   "params": {
 40 |     "ref": {
 41 |       "type": "ref/prompt",
 42 |       "name": "code_review"
 43 |     },
 44 |     "argument": {
 45 |       "name": "language",
 46 |       "value": "py"
 47 |     }
 48 |   }
 49 | }
 50 | ```
 51 | 
 52 | **Response:**
 53 | 
 54 | ```json
 55 | {
 56 |   "jsonrpc": "2.0",
 57 |   "id": 1,
 58 |   "result": {
 59 |     "completion": {
 60 |       "values": ["python", "pytorch", "pyside"],
 61 |       "total": 10,
 62 |       "hasMore": true
 63 |     }
 64 |   }
 65 | }
 66 | ```
 67 | 
 68 | ### Reference Types
 69 | 
 70 | The protocol supports two types of completion references:
 71 | 
 72 | | Type           | Description                 | Example                                             |
 73 | | -------------- | --------------------------- | --------------------------------------------------- |
 74 | | `ref/prompt`   | References a prompt by name | `{"type": "ref/prompt", "name": "code_review"}`     |
 75 | | `ref/resource` | References a resource URI   | `{"type": "ref/resource", "uri": "file:///{path}"}` |
 76 | 
 77 | ### Completion Results
 78 | 
 79 | Servers return an array of completion values ranked by relevance, with:
 80 | 
 81 | - Maximum 100 items per response
 82 | - Optional total number of available matches
 83 | - Boolean indicating if additional results exist
 84 | 
 85 | ## Message Flow
 86 | 
 87 | ```mermaid
 88 | sequenceDiagram
 89 |     participant Client
 90 |     participant Server
 91 | 
 92 |     Note over Client: User types argument
 93 |     Client->>Server: completion/complete
 94 |     Server-->>Client: Completion suggestions
 95 | 
 96 |     Note over Client: User continues typing
 97 |     Client->>Server: completion/complete
 98 |     Server-->>Client: Refined suggestions
 99 | ```
100 | 
101 | ## Data Types
102 | 
103 | ### CompleteRequest
104 | 
105 | - `ref`: A `PromptReference` or `ResourceReference`
106 | - `argument`: Object containing:
107 |   - `name`: Argument name
108 |   - `value`: Current value
109 | 
110 | ### CompleteResult
111 | 
112 | - `completion`: Object containing:
113 |   - `values`: Array of suggestions (max 100)
114 |   - `total`: Optional total matches
115 |   - `hasMore`: Additional results flag
116 | 
117 | ## Implementation Considerations
118 | 
119 | 1. Servers **SHOULD**:
120 | 
121 |    - Return suggestions sorted by relevance
122 |    - Implement fuzzy matching where appropriate
123 |    - Rate limit completion requests
124 |    - Validate all inputs
125 | 
126 | 2. Clients **SHOULD**:
127 |    - Debounce rapid completion requests
128 |    - Cache completion results where appropriate
129 |    - Handle missing or partial results gracefully
130 | 
131 | ## Security
132 | 
133 | Implementations **MUST**:
134 | 
135 | - Validate all completion inputs
136 | - Implement appropriate rate limiting
137 | - Control access to sensitive suggestions
138 | - Prevent completion-based information disclosure
139 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/server/utilities/logging.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Logging
  3 | ---
  4 | 
  5 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
  6 | {{< /callout >}}
  7 | 
  8 | The Model Context Protocol (MCP) provides a standardized way for servers to send
  9 | structured log messages to clients. Clients can control logging verbosity by setting
 10 | minimum log levels, with servers sending notifications containing severity levels,
 11 | optional logger names, and arbitrary JSON-serializable data.
 12 | 
 13 | ## User Interaction Model
 14 | 
 15 | Implementations are free to expose logging through any interface pattern that suits their
 16 | needs&mdash;the protocol itself does not mandate any specific user interaction model.
 17 | 
 18 | ## Capabilities
 19 | 
 20 | Servers that emit log message notifications **MUST** declare the `logging` capability:
 21 | 
 22 | ```json
 23 | {
 24 |   "capabilities": {
 25 |     "logging": {}
 26 |   }
 27 | }
 28 | ```
 29 | 
 30 | ## Log Levels
 31 | 
 32 | The protocol follows the standard syslog severity levels specified in
 33 | [RFC 5424](https://datatracker.ietf.org/doc/html/rfc5424#section-6.2.1):
 34 | 
 35 | | Level     | Description                      | Example Use Case           |
 36 | | --------- | -------------------------------- | -------------------------- |
 37 | | debug     | Detailed debugging information   | Function entry/exit points |
 38 | | info      | General informational messages   | Operation progress updates |
 39 | | notice    | Normal but significant events    | Configuration changes      |
 40 | | warning   | Warning conditions               | Deprecated feature usage   |
 41 | | error     | Error conditions                 | Operation failures         |
 42 | | critical  | Critical conditions              | System component failures  |
 43 | | alert     | Action must be taken immediately | Data corruption detected   |
 44 | | emergency | System is unusable               | Complete system failure    |
 45 | 
 46 | ## Protocol Messages
 47 | 
 48 | ### Setting Log Level
 49 | 
 50 | To configure the minimum log level, clients **MAY** send a `logging/setLevel` request:
 51 | 
 52 | **Request:**
 53 | 
 54 | ```json
 55 | {
 56 |   "jsonrpc": "2.0",
 57 |   "id": 1,
 58 |   "method": "logging/setLevel",
 59 |   "params": {
 60 |     "level": "info"
 61 |   }
 62 | }
 63 | ```
 64 | 
 65 | ### Log Message Notifications
 66 | 
 67 | Servers send log messages using `notifications/message` notifications:
 68 | 
 69 | ```json
 70 | {
 71 |   "jsonrpc": "2.0",
 72 |   "method": "notifications/message",
 73 |   "params": {
 74 |     "level": "error",
 75 |     "logger": "database",
 76 |     "data": {
 77 |       "error": "Connection failed",
 78 |       "details": {
 79 |         "host": "localhost",
 80 |         "port": 5432
 81 |       }
 82 |     }
 83 |   }
 84 | }
 85 | ```
 86 | 
 87 | ## Message Flow
 88 | 
 89 | ```mermaid
 90 | sequenceDiagram
 91 |     participant Client
 92 |     participant Server
 93 | 
 94 |     Note over Client,Server: Configure Logging
 95 |     Client->>Server: logging/setLevel (info)
 96 |     Server-->>Client: Empty Result
 97 | 
 98 |     Note over Client,Server: Server Activity
 99 |     Server--)Client: notifications/message (info)
100 |     Server--)Client: notifications/message (warning)
101 |     Server--)Client: notifications/message (error)
102 | 
103 |     Note over Client,Server: Level Change
104 |     Client->>Server: logging/setLevel (error)
105 |     Server-->>Client: Empty Result
106 |     Note over Server: Only sends error level<br/>and above
107 | ```
108 | 
109 | ## Error Handling
110 | 
111 | Servers **SHOULD** return standard JSON-RPC errors for common failure cases:
112 | 
113 | - Invalid log level: `-32602` (Invalid params)
114 | - Configuration errors: `-32603` (Internal error)
115 | 
116 | ## Implementation Considerations
117 | 
118 | 1. Servers **SHOULD**:
119 | 
120 |    - Rate limit log messages
121 |    - Include relevant context in data field
122 |    - Use consistent logger names
123 |    - Remove sensitive information
124 | 
125 | 2. Clients **MAY**:
126 |    - Present log messages in the UI
127 |    - Implement log filtering/search
128 |    - Display severity visually
129 |    - Persist log messages
130 | 
131 | ## Security
132 | 
133 | 1. Log messages **MUST NOT** contain:
134 | 
135 |    - Credentials or secrets
136 |    - Personal identifying information
137 |    - Internal system details that could aid attacks
138 | 
139 | 2. Implementations **SHOULD**:
140 |    - Rate limit messages
141 |    - Validate all data fields
142 |    - Control log access
143 |    - Monitor for sensitive content
144 | 


--------------------------------------------------------------------------------
/docs/specification/2024-11-05/server/utilities/pagination.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Pagination
 3 | ---
 4 | 
 5 | {{< callout type="info" >}} **Protocol Revision**: {{< param protocolRevision >}}
 6 | {{< /callout >}}
 7 | 
 8 | The Model Context Protocol (MCP) supports paginating list operations that may return
 9 | large result sets. Pagination allows servers to yield results in smaller chunks rather
10 | than all at once.
11 | 
12 | Pagination is especially important when connecting to external services over the
13 | internet, but also useful for local integrations to avoid performance issues with large
14 | data sets.
15 | 
16 | ## Pagination Model
17 | 
18 | Pagination in MCP uses an opaque cursor-based approach, instead of numbered pages.
19 | 
20 | - The **cursor** is an opaque string token, representing a position in the result set
21 | - **Page size** is determined by the server, and **MAY NOT** be fixed
22 | 
23 | ## Response Format
24 | 
25 | Pagination starts when the server sends a **response** that includes:
26 | 
27 | - The current page of results
28 | - An optional `nextCursor` field if more results exist
29 | 
30 | ```json
31 | {
32 |   "jsonrpc": "2.0",
33 |   "id": "123",
34 |   "result": {
35 |     "resources": [...],
36 |     "nextCursor": "eyJwYWdlIjogM30="
37 |   }
38 | }
39 | ```
40 | 
41 | ## Request Format
42 | 
43 | After receiving a cursor, the client can _continue_ paginating by issuing a request
44 | including that cursor:
45 | 
46 | ```json
47 | {
48 |   "jsonrpc": "2.0",
49 |   "method": "resources/list",
50 |   "params": {
51 |     "cursor": "eyJwYWdlIjogMn0="
52 |   }
53 | }
54 | ```
55 | 
56 | ## Pagination Flow
57 | 
58 | ```mermaid
59 | sequenceDiagram
60 |     participant Client
61 |     participant Server
62 | 
63 |     Client->>Server: List Request (no cursor)
64 |     loop Pagination Loop
65 |       Server-->>Client: Page of results + nextCursor
66 |       Client->>Server: List Request (with cursor)
67 |     end
68 | ```
69 | 
70 | ## Operations Supporting Pagination
71 | 
72 | The following MCP operations support pagination:
73 | 
74 | - `resources/list` - List available resources
75 | - `resources/templates/list` - List resource templates
76 | - `prompts/list` - List available prompts
77 | - `tools/list` - List available tools
78 | 
79 | ## Implementation Guidelines
80 | 
81 | 1. Servers **SHOULD**:
82 | 
83 |    - Provide stable cursors
84 |    - Handle invalid cursors gracefully
85 | 
86 | 2. Clients **SHOULD**:
87 | 
88 |    - Treat a missing `nextCursor` as the end of results
89 |    - Support both paginated and non-paginated flows
90 | 
91 | 3. Clients **MUST** treat cursors as opaque tokens:
92 |    - Don't make assumptions about cursor format
93 |    - Don't attempt to parse or modify cursors
94 |    - Don't persist cursors across sessions
95 | 
96 | ## Error Handling
97 | 
98 | Invalid cursors **SHOULD** result in an error with code -32602 (Invalid params).
99 | 


--------------------------------------------------------------------------------
/docs/specification/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Specification
 3 | cascade:
 4 |   type: docs
 5 | breadcrumbs: false
 6 | weight: 10
 7 | aliases:
 8 |   - /latest
 9 | ---
10 | 


--------------------------------------------------------------------------------
/docs/specification/draft/_index.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Specification (Draft)
  3 | cascade:
  4 |   type: docs
  5 | breadcrumbs: false
  6 | weight: 10
  7 | aliases:
  8 |   - /draft
  9 | ---
 10 | 
 11 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 12 | 
 13 | [Model Context Protocol](https://modelcontextprotocol.io) (MCP) is an open protocol that
 14 | enables seamless integration between LLM applications and external data sources and
 15 | tools. Whether you're building an AI-powered IDE, enhancing a chat interface, or creating
 16 | custom AI workflows, MCP provides a standardized way to connect LLMs with the context
 17 | they need.
 18 | 
 19 | This specification defines the authoritative protocol requirements, based on the
 20 | TypeScript schema in
 21 | [schema.ts](https://github.com/modelcontextprotocol/specification/blob/main/schema/draft/schema.ts).
 22 | 
 23 | For implementation guides and examples, visit
 24 | [modelcontextprotocol.io](https://modelcontextprotocol.io).
 25 | 
 26 | The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD
 27 | NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
 28 | interpreted as described in [BCP 14](https://datatracker.ietf.org/doc/html/bcp14)
 29 | [[RFC2119](https://datatracker.ietf.org/doc/html/rfc2119)]
 30 | [[RFC8174](https://datatracker.ietf.org/doc/html/rfc8174)] when, and only when, they
 31 | appear in all capitals, as shown here.
 32 | 
 33 | ## Overview
 34 | 
 35 | MCP provides a standardized way for applications to:
 36 | 
 37 | - Share contextual information with language models
 38 | - Expose tools and capabilities to AI systems
 39 | - Build composable integrations and workflows
 40 | 
 41 | The protocol uses [JSON-RPC](https://www.jsonrpc.org/) 2.0 messages to establish
 42 | communication between:
 43 | 
 44 | - **Hosts**: LLM applications that initiate connections
 45 | - **Clients**: Connectors within the host application
 46 | - **Servers**: Services that provide context and capabilities
 47 | 
 48 | MCP takes some inspiration from the
 49 | [Language Server Protocol](https://microsoft.github.io/language-server-protocol/), which
 50 | standardizes how to add support for programming languages across a whole ecosystem of
 51 | development tools. In a similar way, MCP standardizes how to integrate additional context
 52 | and tools into the ecosystem of AI applications.
 53 | 
 54 | ## Key Details
 55 | 
 56 | ### Base Protocol
 57 | 
 58 | - [JSON-RPC](https://www.jsonrpc.org/) message format
 59 | - Stateful connections
 60 | - Server and client capability negotiation
 61 | 
 62 | ### Features
 63 | 
 64 | Servers offer any of the following features to clients:
 65 | 
 66 | - **Resources**: Context and data, for the user or the AI model to use
 67 | - **Prompts**: Templated messages and workflows for users
 68 | - **Tools**: Functions for the AI model to execute
 69 | 
 70 | Clients may offer the following feature to servers:
 71 | 
 72 | - **Sampling**: Server-initiated agentic behaviors and recursive LLM interactions
 73 | 
 74 | ### Additional Utilities
 75 | 
 76 | - Configuration
 77 | - Progress tracking
 78 | - Cancellation
 79 | - Error reporting
 80 | - Logging
 81 | 
 82 | ## Security and Trust & Safety
 83 | 
 84 | The Model Context Protocol enables powerful capabilities through arbitrary data access
 85 | and code execution paths. With this power comes important security and trust
 86 | considerations that all implementors must carefully address.
 87 | 
 88 | ### Key Principles
 89 | 
 90 | 1. **User Consent and Control**
 91 | 
 92 |    - Users must explicitly consent to and understand all data access and operations
 93 |    - Users must retain control over what data is shared and what actions are taken
 94 |    - Implementors should provide clear UIs for reviewing and authorizing activities
 95 | 
 96 | 2. **Data Privacy**
 97 | 
 98 |    - Hosts must obtain explicit user consent before exposing user data to servers
 99 |    - Hosts must not transmit resource data elsewhere without user consent
100 |    - User data should be protected with appropriate access controls
101 | 
102 | 3. **Tool Safety**
103 | 
104 |    - Tools represent arbitrary code execution and must be treated with appropriate
105 |      caution
106 |    - Hosts must obtain explicit user consent before invoking any tool
107 |    - Users should understand what each tool does before authorizing its use
108 | 
109 | 4. **LLM Sampling Controls**
110 |    - Users must explicitly approve any LLM sampling requests
111 |    - Users should control:
112 |      - Whether sampling occurs at all
113 |      - The actual prompt that will be sent
114 |      - What results the server can see
115 |    - The protocol intentionally limits server visibility into prompts
116 | 
117 | ### Implementation Guidelines
118 | 
119 | While MCP itself cannot enforce these security principles at the protocol level,
120 | implementors **SHOULD**:
121 | 
122 | 1. Build robust consent and authorization flows into their applications
123 | 2. Provide clear documentation of security implications
124 | 3. Implement appropriate access controls and data protections
125 | 4. Follow security best practices in their integrations
126 | 5. Consider privacy implications in their feature designs
127 | 
128 | ## Learn More
129 | 
130 | Explore the detailed specification for each protocol component:
131 | 
132 | {{< cards >}} {{< card link="architecture" title="Architecture" icon="template" >}}
133 | {{< card link="basic" title="Base Protocol" icon="code" >}}
134 | {{< card link="server" title="Server Features" icon="server" >}}
135 | {{< card link="client" title="Client Features" icon="user" >}}
136 | {{< card link="contributing" title="Contributing" icon="pencil" >}} {{< /cards >}}
137 | 


--------------------------------------------------------------------------------
/docs/specification/draft/architecture/_index.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Architecture
  3 | cascade:
  4 |   type: docs
  5 | weight: 1
  6 | ---
  7 | 
  8 | The Model Context Protocol (MCP) follows a client-host-server architecture where each
  9 | host can run multiple client instances. This architecture enables users to integrate AI
 10 | capabilities across applications while maintaining clear security boundaries and
 11 | isolating concerns. Built on JSON-RPC, MCP provides a stateful session protocol focused
 12 | on context exchange and sampling coordination between clients and servers.
 13 | 
 14 | ## Core Components
 15 | 
 16 | ```mermaid
 17 | graph LR
 18 |     subgraph "Application Host Process"
 19 |         H[Host]
 20 |         C1[Client 1]
 21 |         C2[Client 2]
 22 |         C3[Client 3]
 23 |         H --> C1
 24 |         H --> C2
 25 |         H --> C3
 26 |     end
 27 | 
 28 |     subgraph "Local machine"
 29 |         S1[Server 1<br>Files & Git]
 30 |         S2[Server 2<br>Database]
 31 |         R1[("Local<br>Resource A")]
 32 |         R2[("Local<br>Resource B")]
 33 | 
 34 |         C1 --> S1
 35 |         C2 --> S2
 36 |         S1 <--> R1
 37 |         S2 <--> R2
 38 |     end
 39 | 
 40 |     subgraph "Internet"
 41 |         S3[Server 3<br>External APIs]
 42 |         R3[("Remote<br>Resource C")]
 43 | 
 44 |         C3 --> S3
 45 |         S3 <--> R3
 46 |     end
 47 | ```
 48 | 
 49 | ### Host
 50 | 
 51 | The host process acts as the container and coordinator:
 52 | 
 53 | - Creates and manages multiple client instances
 54 | - Controls client connection permissions and lifecycle
 55 | - Enforces security policies and consent requirements
 56 | - Handles user authorization decisions
 57 | - Coordinates AI/LLM integration and sampling
 58 | - Manages context aggregation across clients
 59 | 
 60 | ### Clients
 61 | 
 62 | Each client is created by the host and maintains an isolated server connection:
 63 | 
 64 | - Establishes one stateful session per server
 65 | - Handles protocol negotiation and capability exchange
 66 | - Routes protocol messages bidirectionally
 67 | - Manages subscriptions and notifications
 68 | - Maintains security boundaries between servers
 69 | 
 70 | A host application creates and manages multiple clients, with each client having a 1:1
 71 | relationship with a particular server.
 72 | 
 73 | ### Servers
 74 | 
 75 | Servers provide specialized context and capabilities:
 76 | 
 77 | - Expose resources, tools and prompts via MCP primitives
 78 | - Operate independently with focused responsibilities
 79 | - Request sampling through client interfaces
 80 | - Must respect security constraints
 81 | - Can be local processes or remote services
 82 | 
 83 | ## Design Principles
 84 | 
 85 | MCP is built on several key design principles that inform its architecture and
 86 | implementation:
 87 | 
 88 | 1. **Servers should be extremely easy to build**
 89 | 
 90 |    - Host applications handle complex orchestration responsibilities
 91 |    - Servers focus on specific, well-defined capabilities
 92 |    - Simple interfaces minimize implementation overhead
 93 |    - Clear separation enables maintainable code
 94 | 
 95 | 2. **Servers should be highly composable**
 96 | 
 97 |    - Each server provides focused functionality in isolation
 98 |    - Multiple servers can be combined seamlessly
 99 |    - Shared protocol enables interoperability
100 |    - Modular design supports extensibility
101 | 
102 | 3. **Servers should not be able to read the whole conversation, nor "see into" other
103 |    servers**
104 | 
105 |    - Servers receive only necessary contextual information
106 |    - Full conversation history stays with the host
107 |    - Each server connection maintains isolation
108 |    - Cross-server interactions are controlled by the host
109 |    - Host process enforces security boundaries
110 | 
111 | 4. **Features can be added to servers and clients progressively**
112 |    - Core protocol provides minimal required functionality
113 |    - Additional capabilities can be negotiated as needed
114 |    - Servers and clients evolve independently
115 |    - Protocol designed for future extensibility
116 |    - Backwards compatibility is maintained
117 | 
118 | ## Message Types
119 | 
120 | MCP defines three core message types based on
121 | [JSON-RPC 2.0](https://www.jsonrpc.org/specification):
122 | 
123 | - **Requests**: Bidirectional messages with method and parameters expecting a response
124 | - **Responses**: Successful results or errors matching specific request IDs
125 | - **Notifications**: One-way messages requiring no response
126 | 
127 | Each message type follows the JSON-RPC 2.0 specification for structure and delivery
128 | semantics.
129 | 
130 | ## Capability Negotiation
131 | 
132 | The Model Context Protocol uses a capability-based negotiation system where clients and
133 | servers explicitly declare their supported features during initialization. Capabilities
134 | determine which protocol features and primitives are available during a session.
135 | 
136 | - Servers declare capabilities like resource subscriptions, tool support, and prompt
137 |   templates
138 | - Clients declare capabilities like sampling support and notification handling
139 | - Both parties must respect declared capabilities throughout the session
140 | - Additional capabilities can be negotiated through extensions to the protocol
141 | 
142 | ```mermaid
143 | sequenceDiagram
144 |     participant Host
145 |     participant Client
146 |     participant Server
147 | 
148 |     Host->>+Client: Initialize client
149 |     Client->>+Server: Initialize session with capabilities
150 |     Server-->>Client: Respond with supported capabilities
151 | 
152 |     Note over Host,Server: Active Session with Negotiated Features
153 | 
154 |     loop Client Requests
155 |         Host->>Client: User- or model-initiated action
156 |         Client->>Server: Request (tools/resources)
157 |         Server-->>Client: Response
158 |         Client-->>Host: Update UI or respond to model
159 |     end
160 | 
161 |     loop Server Requests
162 |         Server->>Client: Request (sampling)
163 |         Client->>Host: Forward to AI
164 |         Host-->>Client: AI response
165 |         Client-->>Server: Response
166 |     end
167 | 
168 |     loop Notifications
169 |         Server--)Client: Resource updates
170 |         Client--)Server: Status changes
171 |     end
172 | 
173 |     Host->>Client: Terminate
174 |     Client->>-Server: End session
175 |     deactivate Server
176 | ```
177 | 
178 | Each capability unlocks specific protocol features for use during the session. For
179 | example:
180 | 
181 | - Implemented [server features]({{< ref "/specification/draft/server" >}}) must be
182 |   advertised in the server's capabilities
183 | - Emitting resource subscription notifications requires the server to declare
184 |   subscription support
185 | - Tool invocation requires the server to declare tool capabilities
186 | - [Sampling]({{< ref "/specification/draft/client" >}}) requires the client to declare
187 |   support in its capabilities
188 | 
189 | This capability negotiation ensures clients and servers have a clear understanding of
190 | supported functionality while maintaining protocol extensibility.
191 | 


--------------------------------------------------------------------------------
/docs/specification/draft/basic/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Base Protocol
 3 | cascade:
 4 |   type: docs
 5 | weight: 2
 6 | ---
 7 | 
 8 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 9 | 
10 | All messages between MCP clients and servers **MUST** follow the
11 | [JSON-RPC 2.0](https://www.jsonrpc.org/specification) specification. The protocol defines
12 | three fundamental types of messages:
13 | 
14 | | Type            | Description                            | Requirements                           |
15 | | --------------- | -------------------------------------- | -------------------------------------- |
16 | | `Requests`      | Messages sent to initiate an operation | Must include unique ID and method name |
17 | | `Responses`     | Messages sent in reply to requests     | Must include same ID as request        |
18 | | `Notifications` | One-way messages with no reply         | Must not include an ID                 |
19 | 
20 | **Responses** are further sub-categorized as either **successful results** or **errors**.
21 | Results can follow any JSON object structure, while errors must include an error code and
22 | message at minimum.
23 | 
24 | ## Protocol Layers
25 | 
26 | The Model Context Protocol consists of several key components that work together:
27 | 
28 | - **Base Protocol**: Core JSON-RPC message types
29 | - **Lifecycle Management**: Connection initialization, capability negotiation, and
30 |   session control
31 | - **Server Features**: Resources, prompts, and tools exposed by servers
32 | - **Client Features**: Sampling and root directory lists provided by clients
33 | - **Utilities**: Cross-cutting concerns like logging and argument completion
34 | 
35 | All implementations **MUST** support the base protocol and lifecycle management
36 | components. Other components **MAY** be implemented based on the specific needs of the
37 | application.
38 | 
39 | These protocol layers establish clear separation of concerns while enabling rich
40 | interactions between clients and servers. The modular design allows implementations to
41 | support exactly the features they need.
42 | 
43 | See the following pages for more details on the different components:
44 | 
45 | {{< cards >}}
46 | {{< card link="/specification/draft/basic/lifecycle" title="Lifecycle" icon="refresh" >}}
47 | {{< card link="/specification/draft/server/resources" title="Resources" icon="document" >}}
48 | {{< card link="/specification/draft/server/prompts" title="Prompts" icon="chat-alt-2" >}}
49 | {{< card link="/specification/draft/server/tools" title="Tools" icon="adjustments" >}}
50 | {{< card link="/specification/draft/server/utilities/logging" title="Logging" icon="annotation" >}}
51 | {{< card link="/specification/draft/client/sampling" title="Sampling" icon="code" >}}
52 | {{< /cards >}}
53 | 
54 | ## Auth
55 | 
56 | MCP provides an [Authorization]({{< ref "/specification/draft/basic/authorization" >}})
57 | framework for HTTP+SSE transport. Implementations using HTTP+SSE transport **SHOULD**
58 | conform to this specification, whereas implementations using STDIO transport **SHOULD
59 | NOT** follow this specification, and instead retrieve credentials from the environment.
60 | 
61 | Additionally, clients and servers **MAY** negotiate their own custom authentication and
62 | authorization strategies.
63 | 
64 | For further discussions and contributions to the evolution of MCP’s auth mechanisms, join
65 | us in
66 | [GitHub Discussions](https://github.com/modelcontextprotocol/specification/discussions)
67 | to help shape the future of the protocol!
68 | 
69 | ## Schema
70 | 
71 | The full specification of the protocol is defined as a
72 | [TypeScript schema](http://github.com/modelcontextprotocol/specification/tree/main/schema/draft/schema.ts).
73 | This is the source of truth for all protocol messages and structures.
74 | 
75 | There is also a
76 | [JSON Schema](http://github.com/modelcontextprotocol/specification/tree/main/schema/draft/schema.json),
77 | which is automatically generated from the TypeScript source of truth, for use with
78 | various automated tooling.
79 | 


--------------------------------------------------------------------------------
/docs/specification/draft/basic/authorization.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Authorization
  3 | type: docs
  4 | weight: 15
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
  8 | 
  9 | ## 1. Introduction
 10 | 
 11 | ### 1.1 Purpose and Scope
 12 | 
 13 | The Model Context Protocol provides authorization capabilities at the transport level,
 14 | enabling MCP clients to make requests to restricted MCP servers on behalf of resource
 15 | owners. This specification defines the authorization flow for HTTP+SSE transport.
 16 | 
 17 | ### 1.2 Protocol Requirements
 18 | 
 19 | Authorization is **OPTIONAL** for MCP implementations. When supported:
 20 | 
 21 | - Implementations using an HTTP+SSE transport **SHOULD** conform to this specification.
 22 | - Implementations using an STDIO transport **SHOULD NOT** follow this specification, and
 23 |   instead retrieve credentials from the environment.
 24 | - Implementations using alternative transports **MUST** follow established security best
 25 |   practices for their protocol.
 26 | 
 27 | ### 1.3 Standards Compliance
 28 | 
 29 | This authorization mechanism is based on established specifications listed below, but
 30 | implements a selected subset of their features to ensure security and interoperability
 31 | while maintaining simplicity:
 32 | 
 33 | - [OAuth 2.1 IETF DRAFT](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12)
 34 | - OAuth 2.0 Authorization Server Metadata
 35 |   ([RFC8414](https://datatracker.ietf.org/doc/html/rfc8414))
 36 | - OAuth 2.0 Dynamic Client Registration Protocol
 37 |   ([RFC7591](https://datatracker.ietf.org/doc/html/rfc7591))
 38 | 
 39 | ## 2. Authorization Flow
 40 | 
 41 | ### 2.1 Overview
 42 | 
 43 | 1. MCP auth implementations **MUST** implement OAuth 2.1 with appropriate security
 44 |    measures for both confidential and public clients.
 45 | 
 46 | 2. MCP auth implementations **SHOULD** support the OAuth 2.0 Dynamic Client Registration
 47 |    Protocol ([RFC7591](https://datatracker.ietf.org/doc/html/rfc7591)).
 48 | 
 49 | 3. MCP servers **SHOULD** and MCP clients **MUST** implement OAuth 2.0 Authorization
 50 |    Server Metadata ([RFC8414](https://datatracker.ietf.org/doc/html/rfc8414)). Servers
 51 |    that do not support Authorization Server Metadata **MUST** follow the default URI
 52 |    schema.
 53 | 
 54 | ### 2.2 Basic OAuth 2.1 Authorization
 55 | 
 56 | When authorization is required and not yet proven by the client, servers **MUST** respond
 57 | with _HTTP 401 Unauthorized_.
 58 | 
 59 | Clients initiate the
 60 | [OAuth 2.1 IETF DRAFT](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12)
 61 | authorization flow after receiving the _HTTP 401 Unauthorized_.
 62 | 
 63 | The following demonstrates the basic OAuth 2.1 for public clients using PKCE.
 64 | 
 65 | ```mermaid
 66 | sequenceDiagram
 67 |     participant B as User-Agent (Browser)
 68 |     participant C as Client
 69 |     participant M as MCP Server
 70 | 
 71 |     C->>M: MCP Request
 72 |     M->>C: HTTP 401 Unauthorized
 73 |     Note over C: Generate code_verifier and code_challenge
 74 |     C->>B: Open browser with authorization URL + code_challenge
 75 |     B->>M: GET /authorize
 76 |     Note over M: User logs in and authorizes
 77 |     M->>B: Redirect to callback URL with auth code
 78 |     B->>C: Callback with authorization code
 79 |     C->>M: Token Request with code + code_verifier
 80 |     M->>C: Access Token (+ Refresh Token)
 81 |     C->>M: MCP Request with Access Token
 82 |     Note over C,M: Begin standard MCP message exchange
 83 | ```
 84 | 
 85 | ### 2.3 Server Metadata Discovery
 86 | 
 87 | For server capability discovery:
 88 | 
 89 | - MCP clients _MUST_ follow the OAuth 2.0 Authorization Server Metadata protocol defined
 90 |   in [RFC8414](https://datatracker.ietf.org/doc/html/rfc8414).
 91 | - MCP server _SHOULD_ follow the OAuth 2.0 Authorization Server Metadata protocol.
 92 | - MCP servers that do not support the OAuth 2.0 Authorization Server Metadata protocol,
 93 |   _MUST_ support fallback URLs.
 94 | 
 95 | The discovery flow is illustrated below:
 96 | 
 97 | ```mermaid
 98 | sequenceDiagram
 99 |     participant C as Client
100 |     participant S as Server
101 | 
102 |     C->>S: GET /.well-known/oauth-authorization-server
103 |     alt Discovery Success
104 |         S->>C: 200 OK + Metadata Document
105 |         Note over C: Use endpoints from metadata
106 |     else Discovery Failed
107 |         S->>C: 404 Not Found
108 |         Note over C: Fall back to default endpoints
109 |     end
110 |     Note over C: Continue with authorization flow
111 | ```
112 | 
113 | #### 2.3.1 Server Metadata Discovery Headers
114 | 
115 | MCP clients _SHOULD_ include the header `MCP-Protocol-Version: <protocol-version>` during
116 | Server Metadata Discovery to allow the MCP server to respond based on the MCP protocol
117 | version.
118 | 
119 | For example: `MCP-Protocol-Version: 2024-11-05`
120 | 
121 | #### 2.3.2 Authorization Base URL
122 | 
123 | The authorization base URL **MUST** be determined from the [SSE
124 | endpoint]({{< ref "specification/draft/basic/transports#http-with-sse" >}}) URL by
125 | discarding any existing `path` component. For example:
126 | 
127 | If the SSE endpoint is `https://api.example.com/v1/sse`, then:
128 | 
129 | - The authorization base URL is `https://api.example.com`
130 | - The metadata endpoint **MUST** be at
131 |   `https://api.example.com/.well-known/oauth-authorization-server`
132 | 
133 | This ensures authorization endpoints are consistently located at the root level of the
134 | domain serving the SSE endpoint, regardless of any path components in the SSE endpoint
135 | URL.
136 | 
137 | #### 2.3.3 Fallbacks for Servers without Metadata Discovery
138 | 
139 | For servers that do not implement OAuth 2.0 Authorization Server Metadata, clients
140 | **MUST** use the following default endpoint paths relative to the authorization base URL
141 | (as defined in [Section
142 | 2.3.2]({{< ref "specification/draft/basic/authorization#232-authorization-base-url" >}})):
143 | 
144 | | Endpoint               | Default Path | Description                          |
145 | | ---------------------- | ------------ | ------------------------------------ |
146 | | Authorization Endpoint | /authorize   | Used for authorization requests      |
147 | | Token Endpoint         | /token       | Used for token exchange & refresh    |
148 | | Registration Endpoint  | /register    | Used for dynamic client registration |
149 | 
150 | For example, with an SSE endpoint of `https://api.example.com/v1/sse`, the default
151 | endpoints would be:
152 | 
153 | - `https://api.example.com/authorize`
154 | - `https://api.example.com/token`
155 | - `https://api.example.com/register`
156 | 
157 | Clients **MUST** first attempt to discover endpoints via the metadata document before
158 | falling back to default paths. When using default paths, all other protocol requirements
159 | remain unchanged.
160 | 
161 | ### 2.3 Dynamic Client Registration
162 | 
163 | MCP clients and servers **SHOULD** support the
164 | [OAuth 2.0 Dynamic Client Registration Protocol](https://datatracker.ietf.org/doc/html/rfc7591)
165 | to allow MCP clients to obtain OAuth client IDs without user interaction. This provides a
166 | standardized way for clients to automatically register with new servers, which is crucial
167 | for MCP because:
168 | 
169 | - Clients cannot know all possible servers in advance
170 | - Manual registration would create friction for users
171 | - It enables seamless connection to new servers
172 | - Servers can implement their own registration policies
173 | 
174 | Any MCP servers that _do not_ support Dynamic Client Registration need to provide
175 | alternative ways to obtain a client ID (and, if applicable, client secret). For one of
176 | these servers, MCP clients will have to either:
177 | 
178 | 1. Hardcode a client ID (and, if applicable, client secret) specifically for that MCP
179 |    server, or
180 | 2. Present a UI to users that allows them to enter these details, after registering an
181 |    OAuth client themselves (e.g., through a configuration interface hosted by the
182 |    server).
183 | 
184 | ### 2.4 Authorization Flow Steps
185 | 
186 | The complete Authorization flow proceeds as follows:
187 | 
188 | ```mermaid
189 | sequenceDiagram
190 |     participant B as User-Agent (Browser)
191 |     participant C as Client
192 |     participant M as MCP Server
193 | 
194 |     C->>M: GET /.well-known/oauth-authorization-server
195 |     alt Server Supports Discovery
196 |         M->>C: Authorization Server Metadata
197 |     else No Discovery
198 |         M->>C: 404 (Use default endpoints)
199 |     end
200 | 
201 |     alt Dynamic Client Registration
202 |         C->>M: POST /register
203 |         M->>C: Client Credentials
204 |     end
205 | 
206 |     Note over C: Generate PKCE Parameters
207 |     C->>B: Open browser with authorization URL + code_challenge
208 |     B->>M: Authorization Request
209 |     Note over M: User /authorizes
210 |     M->>B: Redirect to callback with authorization code
211 |     B->>C: Authorization code callback
212 |     C->>M: Token Request + code_verifier
213 |     M->>C: Access Token (+ Refresh Token)
214 |     C->>M: API Requests with Access Token
215 | ```
216 | 
217 | #### 2.4.1 Decision Flow Overview
218 | 
219 | ```mermaid
220 | flowchart TD
221 |     A[Start Auth Flow] --> B{Check Metadata Discovery}
222 |     B -->|Available| C[Use Metadata Endpoints]
223 |     B -->|Not Available| D[Use Default Endpoints]
224 | 
225 |     C --> G{Check Registration Endpoint}
226 |     D --> G
227 | 
228 |     G -->|Available| H[Perform Dynamic Registration]
229 |     G -->|Not Available| I[Alternative Registration Required]
230 | 
231 |     H --> J[Start OAuth Flow]
232 |     I --> J
233 | 
234 |     J --> K[Generate PKCE Parameters]
235 |     K --> L[Request Authorization]
236 |     L --> M[User Authorization]
237 |     M --> N[Exchange Code for Tokens]
238 |     N --> O[Use Access Token]
239 | ```
240 | 
241 | ### 2.5 Access Token Usage
242 | 
243 | #### 2.5.1 Token Requirements
244 | 
245 | Access token handling **MUST** conform to
246 | [OAuth 2.1 Section 5](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-5)
247 | requirements for resource requests. Specifically:
248 | 
249 | 1. MCP client **MUST** use the Authorization request header field
250 |    [Section 5.1.1](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-5.1.1):
251 | 
252 | ```
253 | Authorization: Bearer <access-token>
254 | ```
255 | 
256 | 2. Access tokens **MUST NOT** be included in the URI query string
257 | 
258 | Example request:
259 | 
260 | ```http
261 | GET /v1/contexts HTTP/1.1
262 | Host: mcp.example.com
263 | Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
264 | ```
265 | 
266 | #### 2.5.2 Token Handling
267 | 
268 | Resource servers **MUST** validate access tokens as described in
269 | [Section 5.2](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-5.2).
270 | If validation fails, servers **MUST** respond according to
271 | [Section 5.3](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-12#section-5.3)
272 | error handling requirements. Invalid or expired tokens **MUST** receive a HTTP 401
273 | response.
274 | 
275 | ### 2.6 Security Considerations
276 | 
277 | The following security requirements **MUST** be implemented:
278 | 
279 | 1. Clients **MUST** securely store tokens following OAuth 2.0 best practices
280 | 2. Servers **SHOULD** enforce token expiration and rotation
281 | 3. All authorization endpoints **MUST** be served over HTTPS
282 | 4. Servers **MUST** validate redirect URIs to prevent open redirect vulnerabilities
283 | 5. Redirect URIs **MUST** be either localhost URLs or HTTPS URLs
284 | 
285 | ### 2.7 Error Handling
286 | 
287 | Servers **MUST** return appropriate HTTP status codes for authorization errors:
288 | 
289 | | Status Code | Description  | Usage                                      |
290 | | ----------- | ------------ | ------------------------------------------ |
291 | | 401         | Unauthorized | Authorization required or token invalid    |
292 | | 403         | Forbidden    | Invalid scopes or insufficient permissions |
293 | | 400         | Bad Request  | Malformed authorization request            |
294 | 
295 | ### 2.8 Implementation Requirements
296 | 
297 | 1. Implementations **MUST** follow OAuth 2.1 security best practices
298 | 2. PKCE is **REQUIRED** for all clients
299 | 3. Token rotation **SHOULD** be implemented for enhanced security
300 | 4. Token lifetimes **SHOULD** be limited based on security requirements
301 | 
302 | ### 2.9 Third-Party Authorization Flow
303 | 
304 | #### 2.9.1 Overview
305 | 
306 | MCP servers **MAY** support delegated authorization through third-party authorization
307 | servers. In this flow, the MCP server acts as both an OAuth client (to the third-party
308 | auth server) and an OAuth authorization server (to the MCP client).
309 | 
310 | #### 2.9.2 Flow Description
311 | 
312 | The third-party authorization flow comprises these steps:
313 | 
314 | 1. MCP client initiates standard OAuth flow with MCP server
315 | 2. MCP server redirects user to third-party authorization server
316 | 3. User authorizes with third-party server
317 | 4. Third-party server redirects back to MCP server with authorization code
318 | 5. MCP server exchanges code for third-party access token
319 | 6. MCP server generates its own access token bound to the third-party session
320 | 7. MCP server completes original OAuth flow with MCP client
321 | 
322 | ```mermaid
323 | sequenceDiagram
324 |     participant B as User-Agent (Browser)
325 |     participant C as MCP Client
326 |     participant M as MCP Server
327 |     participant T as Third-Party Auth Server
328 | 
329 |     C->>M: Initial OAuth Request
330 |     M->>B: Redirect to Third-Party /authorize
331 |     B->>T: Authorization Request
332 |     Note over T: User authorizes
333 |     T->>B: Redirect to MCP Server callback
334 |     B->>M: Authorization code
335 |     M->>T: Exchange code for token
336 |     T->>M: Third-party access token
337 |     Note over M: Generate bound MCP token
338 |     M->>B: Redirect to MCP Client callback
339 |     B->>C: MCP authorization code
340 |     C->>M: Exchange code for token
341 |     M->>C: MCP access token
342 | ```
343 | 
344 | #### 2.9.3 Session Binding Requirements
345 | 
346 | MCP servers implementing third-party authorization **MUST**:
347 | 
348 | 1. Maintain secure mapping between third-party tokens and issued MCP tokens
349 | 2. Validate third-party token status before honoring MCP tokens
350 | 3. Implement appropriate token lifecycle management
351 | 4. Handle third-party token expiration and renewal
352 | 
353 | #### 2.9.4 Security Considerations
354 | 
355 | When implementing third-party authorization, servers **MUST**:
356 | 
357 | 1. Validate all redirect URIs
358 | 2. Securely store third-party credentials
359 | 3. Implement appropriate session timeout handling
360 | 4. Consider security implications of token chaining
361 | 5. Implement proper error handling for third-party auth failures
362 | 
363 | ## 3. Best Practices
364 | 
365 | #### 3.1 Local clients as Public OAuth 2.1 Clients
366 | 
367 | We strongly recommend that local clients implement OAuth 2.1 as a public client:
368 | 
369 | 1. Utilizing code challenges (PKCE) for authorization requests to prevent interception
370 |    attacks
371 | 2. Implementing secure token storage appropriate for the local system
372 | 3. Following token refresh best practices to maintain sessions
373 | 4. Properly handling token expiration and renewal
374 | 
375 | #### 3.2 Authorization Metadata Discovery
376 | 
377 | We strongly recommend that all clients implement metadata discovery. This reduces the
378 | need for users to provide endpoints manually or clients to fallback to the defined
379 | defaults.
380 | 
381 | #### 3.3 Dynamic Client Registration
382 | 
383 | Since clients do not know the set of MCP servers in advance, we strongly recommend the
384 | implementation of dynamic client registration. This allows applications to automatically
385 | register with the MCP server, and removes the need for users to obtain client ids
386 | manually.
387 | 


--------------------------------------------------------------------------------
/docs/specification/draft/basic/lifecycle.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Lifecycle
  3 | type: docs
  4 | weight: 30
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
  8 | 
  9 | The Model Context Protocol (MCP) defines a rigorous lifecycle for client-server
 10 | connections that ensures proper capability negotiation and state management.
 11 | 
 12 | 1. **Initialization**: Capability negotiation and protocol version agreement
 13 | 2. **Operation**: Normal protocol communication
 14 | 3. **Shutdown**: Graceful termination of the connection
 15 | 
 16 | ```mermaid
 17 | sequenceDiagram
 18 |     participant Client
 19 |     participant Server
 20 | 
 21 |     Note over Client,Server: Initialization Phase
 22 |     activate Client
 23 |     Client->>+Server: initialize request
 24 |     Server-->>Client: initialize response
 25 |     Client--)Server: initialized notification
 26 | 
 27 |     Note over Client,Server: Operation Phase
 28 |     rect rgb(200, 220, 250)
 29 |         note over Client,Server: Normal protocol operations
 30 |     end
 31 | 
 32 |     Note over Client,Server: Shutdown
 33 |     Client--)-Server: Disconnect
 34 |     deactivate Server
 35 |     Note over Client,Server: Connection closed
 36 | ```
 37 | 
 38 | ## Lifecycle Phases
 39 | 
 40 | ### Initialization
 41 | 
 42 | The initialization phase **MUST** be the first interaction between client and server.
 43 | During this phase, the client and server:
 44 | 
 45 | - Establish protocol version compatibility
 46 | - Exchange and negotiate capabilities
 47 | - Share implementation details
 48 | 
 49 | The client **MUST** initiate this phase by sending an `initialize` request containing:
 50 | 
 51 | - Protocol version supported
 52 | - Client capabilities
 53 | - Client implementation information
 54 | 
 55 | ```json
 56 | {
 57 |   "jsonrpc": "2.0",
 58 |   "id": 1,
 59 |   "method": "initialize",
 60 |   "params": {
 61 |     "protocolVersion": "2024-11-05",
 62 |     "capabilities": {
 63 |       "roots": {
 64 |         "listChanged": true
 65 |       },
 66 |       "sampling": {}
 67 |     },
 68 |     "clientInfo": {
 69 |       "name": "ExampleClient",
 70 |       "version": "1.0.0"
 71 |     }
 72 |   }
 73 | }
 74 | ```
 75 | 
 76 | The server **MUST** respond with its own capabilities and information:
 77 | 
 78 | ```json
 79 | {
 80 |   "jsonrpc": "2.0",
 81 |   "id": 1,
 82 |   "result": {
 83 |     "protocolVersion": "2024-11-05",
 84 |     "capabilities": {
 85 |       "logging": {},
 86 |       "prompts": {
 87 |         "listChanged": true
 88 |       },
 89 |       "resources": {
 90 |         "subscribe": true,
 91 |         "listChanged": true
 92 |       },
 93 |       "tools": {
 94 |         "listChanged": true
 95 |       }
 96 |     },
 97 |     "serverInfo": {
 98 |       "name": "ExampleServer",
 99 |       "version": "1.0.0"
100 |     }
101 |   }
102 | }
103 | ```
104 | 
105 | After successful initialization, the client **MUST** send an `initialized` notification
106 | to indicate it is ready to begin normal operations:
107 | 
108 | ```json
109 | {
110 |   "jsonrpc": "2.0",
111 |   "method": "notifications/initialized"
112 | }
113 | ```
114 | 
115 | - The client **SHOULD NOT** send requests other than
116 |   [pings]({{< ref "/specification/draft/basic/utilities/ping" >}}) before the server has
117 |   responded to the `initialize` request.
118 | - The server **SHOULD NOT** send requests other than
119 |   [pings]({{< ref "/specification/draft/basic/utilities/ping" >}}) and
120 |   [logging]({{< ref "/specification/draft/server/utilities/logging" >}}) before receiving
121 |   the `initialized` notification.
122 | 
123 | #### Version Negotiation
124 | 
125 | In the `initialize` request, the client **MUST** send a protocol version it supports.
126 | This **SHOULD** be the _latest_ version supported by the client.
127 | 
128 | If the server supports the requested protocol version, it **MUST** respond with the same
129 | version. Otherwise, the server **MUST** respond with another protocol version it
130 | supports. This **SHOULD** be the _latest_ version supported by the server.
131 | 
132 | If the client does not support the version in the server's response, it **SHOULD**
133 | disconnect.
134 | 
135 | #### Capability Negotiation
136 | 
137 | Client and server capabilities establish which optional protocol features will be
138 | available during the session.
139 | 
140 | Key capabilities include:
141 | 
142 | | Category | Capability     | Description                                                                                  |
143 | | -------- | -------------- | -------------------------------------------------------------------------------------------- |
144 | | Client   | `roots`        | Ability to provide filesystem [roots]({{< ref "/specification/draft/client/roots" >}})       |
145 | | Client   | `sampling`     | Support for LLM [sampling]({{< ref "/specification/draft/client/sampling" >}}) requests      |
146 | | Client   | `experimental` | Describes support for non-standard experimental features                                     |
147 | | Server   | `prompts`      | Offers [prompt templates]({{< ref "/specification/draft/server/prompts" >}})                 |
148 | | Server   | `resources`    | Provides readable [resources]({{< ref "/specification/draft/server/resources" >}})           |
149 | | Server   | `tools`        | Exposes callable [tools]({{< ref "/specification/draft/server/tools" >}})                    |
150 | | Server   | `logging`      | Emits structured [log messages]({{< ref "/specification/draft/server/utilities/logging" >}}) |
151 | | Server   | `experimental` | Describes support for non-standard experimental features                                     |
152 | 
153 | Capability objects can describe sub-capabilities like:
154 | 
155 | - `listChanged`: Support for list change notifications (for prompts, resources, and
156 |   tools)
157 | - `subscribe`: Support for subscribing to individual items' changes (resources only)
158 | 
159 | ### Operation
160 | 
161 | During the operation phase, the client and server exchange messages according to the
162 | negotiated capabilities.
163 | 
164 | Both parties **SHOULD**:
165 | 
166 | - Respect the negotiated protocol version
167 | - Only use capabilities that were successfully negotiated
168 | 
169 | ### Shutdown
170 | 
171 | During the shutdown phase, one side (usually the client) cleanly terminates the protocol
172 | connection. No specific shutdown messages are defined—instead, the underlying transport
173 | mechanism should be used to signal connection termination:
174 | 
175 | #### stdio
176 | 
177 | For the stdio [transport]({{< ref "/specification/draft/basic/transports" >}}), the
178 | client **SHOULD** initiate shutdown by:
179 | 
180 | 1. First, closing the input stream to the child process (the server)
181 | 2. Waiting for the server to exit, or sending `SIGTERM` if the server does not exit
182 |    within a reasonable time
183 | 3. Sending `SIGKILL` if the server does not exit within a reasonable time after `SIGTERM`
184 | 
185 | The server **MAY** initiate shutdown by closing its output stream to the client and
186 | exiting.
187 | 
188 | #### HTTP
189 | 
190 | For HTTP [transports]({{< ref "/specification/draft/basic/transports" >}}), shutdown is
191 | indicated by closing the associated HTTP connection(s).
192 | 
193 | ## Error Handling
194 | 
195 | Implementations **SHOULD** be prepared to handle these error cases:
196 | 
197 | - Protocol version mismatch
198 | - Failure to negotiate required capabilities
199 | - Initialize request timeout
200 | - Shutdown timeout
201 | 
202 | Implementations **SHOULD** implement appropriate timeouts for all requests, to prevent
203 | hung connections and resource exhaustion.
204 | 
205 | Example initialization error:
206 | 
207 | ```json
208 | {
209 |   "jsonrpc": "2.0",
210 |   "id": 1,
211 |   "error": {
212 |     "code": -32602,
213 |     "message": "Unsupported protocol version",
214 |     "data": {
215 |       "supported": ["2024-11-05"],
216 |       "requested": "1.0.0"
217 |     }
218 |   }
219 | }
220 | ```
221 | 


--------------------------------------------------------------------------------
/docs/specification/draft/basic/messages.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Messages
 3 | type: docs
 4 | weight: 20
 5 | ---
 6 | 
 7 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 8 | 
 9 | All messages in MCP **MUST** follow the
10 | [JSON-RPC 2.0](https://www.jsonrpc.org/specification) specification. The protocol defines
11 | three types of messages:
12 | 
13 | ## Requests
14 | 
15 | Requests are sent from the client to the server or vice versa.
16 | 
17 | ```typescript
18 | {
19 |   jsonrpc: "2.0";
20 |   id: string | number;
21 |   method: string;
22 |   params?: {
23 |     [key: string]: unknown;
24 |   };
25 | }
26 | ```
27 | 
28 | - Requests **MUST** include a string or integer ID.
29 | - Unlike base JSON-RPC, the ID **MUST NOT** be `null`.
30 | - The request ID **MUST NOT** have been previously used by the requestor within the same
31 |   session.
32 | 
33 | ## Responses
34 | 
35 | Responses are sent in reply to requests.
36 | 
37 | ```typescript
38 | {
39 |   jsonrpc: "2.0";
40 |   id: string | number;
41 |   result?: {
42 |     [key: string]: unknown;
43 |   }
44 |   error?: {
45 |     code: number;
46 |     message: string;
47 |     data?: unknown;
48 |   }
49 | }
50 | ```
51 | 
52 | - Responses **MUST** include the same ID as the request they correspond to.
53 | - Either a `result` or an `error` **MUST** be set. A response **MUST NOT** set both.
54 | - Error codes **MUST** be integers.
55 | 
56 | ## Notifications
57 | 
58 | Notifications are sent from the client to the server or vice versa. The receiver **MUST
59 | NOT** send a response.
60 | 
61 | ```typescript
62 | {
63 |   jsonrpc: "2.0";
64 |   method: string;
65 |   params?: {
66 |     [key: string]: unknown;
67 |   };
68 | }
69 | ```
70 | 
71 | - Notifications **MUST NOT** include an ID.
72 | 


--------------------------------------------------------------------------------
/docs/specification/draft/basic/transports.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Transports
 3 | type: docs
 4 | weight: 10
 5 | ---
 6 | 
 7 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 8 | 
 9 | MCP uses JSON-RPC to encode messages. JSON-RPC messages **MUST** be UTF-8 encoded.
10 | 
11 | The protocol currently defines two standard transport mechanisms for client-server
12 | communication:
13 | 
14 | 1. [stdio](#stdio), communication over standard in and standard out
15 | 2. [HTTP with Server-Sent Events](#http-with-sse) (SSE)
16 | 
17 | Clients **SHOULD** support stdio whenever possible.
18 | 
19 | It is also possible for clients and servers to implement
20 | [custom transports](#custom-transports) in a pluggable fashion.
21 | 
22 | ## stdio
23 | 
24 | In the **stdio** transport:
25 | 
26 | - The client launches the MCP server as a subprocess.
27 | - The server receives JSON-RPC messages on its standard input (`stdin`) and writes
28 |   responses to its standard output (`stdout`).
29 | - Messages are delimited by newlines, and **MUST NOT** contain embedded newlines.
30 | - The server **MAY** write UTF-8 strings to its standard error (`stderr`) for logging
31 |   purposes. Clients **MAY** capture, forward, or ignore this logging.
32 | - The server **MUST NOT** write anything to its `stdout` that is not a valid MCP message.
33 | - The client **MUST NOT** write anything to the server's `stdin` that is not a valid MCP
34 |   message.
35 | 
36 | ```mermaid
37 | sequenceDiagram
38 |     participant Client
39 |     participant Server Process
40 | 
41 |     Client->>+Server Process: Launch subprocess
42 |     loop Message Exchange
43 |         Client->>Server Process: Write to stdin
44 |         Server Process->>Client: Write to stdout
45 |         Server Process--)Client: Optional logs on stderr
46 |     end
47 |     Client->>Server Process: Close stdin, terminate subprocess
48 |     deactivate Server Process
49 | ```
50 | 
51 | ## HTTP with SSE
52 | 
53 | In the **SSE** transport, the server operates as an independent process that can handle
54 | multiple client connections.
55 | 
56 | The server **MUST** provide two endpoints:
57 | 
58 | 1. An SSE endpoint, for clients to establish a connection and receive messages from the
59 |    server
60 | 2. A regular HTTP POST endpoint for clients to send messages to the server
61 | 
62 | When a client connects, the server **MUST** send an `endpoint` event containing a URI for
63 | the client to use for sending messages. All subsequent client messages **MUST** be sent
64 | as HTTP POST requests to this endpoint.
65 | 
66 | Server messages are sent as SSE `message` events, with the message content encoded as
67 | JSON in the event data.
68 | 
69 | ```mermaid
70 | sequenceDiagram
71 |     participant Client
72 |     participant Server
73 | 
74 |     Client->>Server: Open SSE connection
75 |     Server->>Client: endpoint event
76 |     loop Message Exchange
77 |         Client->>Server: HTTP POST messages
78 |         Server->>Client: SSE message events
79 |     end
80 |     Client->>Server: Close SSE connection
81 | ```
82 | 
83 | ## Custom Transports
84 | 
85 | Clients and servers **MAY** implement additional custom transport mechanisms to suit
86 | their specific needs. The protocol is transport-agnostic and can be implemented over any
87 | communication channel that supports bidirectional message exchange.
88 | 
89 | Implementers who choose to support custom transports **MUST** ensure they preserve the
90 | JSON-RPC message format and lifecycle requirements defined by MCP. Custom transports
91 | **SHOULD** document their specific connection establishment and message exchange patterns
92 | to aid interoperability.
93 | 


--------------------------------------------------------------------------------
/docs/specification/draft/basic/utilities/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Utilities
 3 | ---
 4 | 
 5 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 6 | 
 7 | These optional features enhance the base protocol functionality with various utilities.
 8 | 
 9 | {{< cards >}} {{< card link="ping" title="Ping" icon="status-online" >}}
10 | {{< card link="cancellation" title="Cancellation" icon="x" >}}
11 | {{< card link="progress" title="Progress" icon="clock" >}} {{< /cards >}}
12 | 


--------------------------------------------------------------------------------
/docs/specification/draft/basic/utilities/cancellation.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Cancellation
 3 | weight: 10
 4 | ---
 5 | 
 6 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 7 | 
 8 | The Model Context Protocol (MCP) supports optional cancellation of in-progress requests
 9 | through notification messages. Either side can send a cancellation notification to
10 | indicate that a previously-issued request should be terminated.
11 | 
12 | ## Cancellation Flow
13 | 
14 | When a party wants to cancel an in-progress request, it sends a `notifications/cancelled`
15 | notification containing:
16 | 
17 | - The ID of the request to cancel
18 | - An optional reason string that can be logged or displayed
19 | 
20 | ```json
21 | {
22 |   "jsonrpc": "2.0",
23 |   "method": "notifications/cancelled",
24 |   "params": {
25 |     "requestId": "123",
26 |     "reason": "User requested cancellation"
27 |   }
28 | }
29 | ```
30 | 
31 | ## Behavior Requirements
32 | 
33 | 1. Cancellation notifications **MUST** only reference requests that:
34 |    - Were previously issued in the same direction
35 |    - Are believed to still be in-progress
36 | 2. The `initialize` request **MUST NOT** be cancelled by clients
37 | 3. Receivers of cancellation notifications **SHOULD**:
38 |    - Stop processing the cancelled request
39 |    - Free associated resources
40 |    - Not send a response for the cancelled request
41 | 4. Receivers **MAY** ignore cancellation notifications if:
42 |    - The referenced request is unknown
43 |    - Processing has already completed
44 |    - The request cannot be cancelled
45 | 5. The sender of the cancellation notification **SHOULD** ignore any response to the
46 |    request that arrives afterward
47 | 
48 | ## Timing Considerations
49 | 
50 | Due to network latency, cancellation notifications may arrive after request processing
51 | has completed, and potentially after a response has already been sent.
52 | 
53 | Both parties **MUST** handle these race conditions gracefully:
54 | 
55 | ```mermaid
56 | sequenceDiagram
57 |    participant Client
58 |    participant Server
59 | 
60 |    Client->>Server: Request (ID: 123)
61 |    Note over Server: Processing starts
62 |    Client--)Server: notifications/cancelled (ID: 123)
63 |    alt
64 |       Note over Server: Processing may have<br/>completed before<br/>cancellation arrives
65 |    else If not completed
66 |       Note over Server: Stop processing
67 |    end
68 | ```
69 | 
70 | ## Implementation Notes
71 | 
72 | - Both parties **SHOULD** log cancellation reasons for debugging
73 | - Application UIs **SHOULD** indicate when cancellation is requested
74 | 
75 | ## Error Handling
76 | 
77 | Invalid cancellation notifications **SHOULD** be ignored:
78 | 
79 | - Unknown request IDs
80 | - Already completed requests
81 | - Malformed notifications
82 | 
83 | This maintains the "fire and forget" nature of notifications while allowing for race
84 | conditions in asynchronous communication.
85 | 


--------------------------------------------------------------------------------
/docs/specification/draft/basic/utilities/ping.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Ping
 3 | weight: 5
 4 | ---
 5 | 
 6 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 7 | 
 8 | The Model Context Protocol includes an optional ping mechanism that allows either party
 9 | to verify that their counterpart is still responsive and the connection is alive.
10 | 
11 | ## Overview
12 | 
13 | The ping functionality is implemented through a simple request/response pattern. Either
14 | the client or server can initiate a ping by sending a `ping` request.
15 | 
16 | ## Message Format
17 | 
18 | A ping request is a standard JSON-RPC request with no parameters:
19 | 
20 | ```json
21 | {
22 |   "jsonrpc": "2.0",
23 |   "id": "123",
24 |   "method": "ping"
25 | }
26 | ```
27 | 
28 | ## Behavior Requirements
29 | 
30 | 1. The receiver **MUST** respond promptly with an empty response:
31 | 
32 | ```json
33 | {
34 |   "jsonrpc": "2.0",
35 |   "id": "123",
36 |   "result": {}
37 | }
38 | ```
39 | 
40 | 2. If no response is received within a reasonable timeout period, the sender **MAY**:
41 |    - Consider the connection stale
42 |    - Terminate the connection
43 |    - Attempt reconnection procedures
44 | 
45 | ## Usage Patterns
46 | 
47 | ```mermaid
48 | sequenceDiagram
49 |     participant Sender
50 |     participant Receiver
51 | 
52 |     Sender->>Receiver: ping request
53 |     Receiver->>Sender: empty response
54 | ```
55 | 
56 | ## Implementation Considerations
57 | 
58 | - Implementations **SHOULD** periodically issue pings to detect connection health
59 | - The frequency of pings **SHOULD** be configurable
60 | - Timeouts **SHOULD** be appropriate for the network environment
61 | - Excessive pinging **SHOULD** be avoided to reduce network overhead
62 | 
63 | ## Error Handling
64 | 
65 | - Timeouts **SHOULD** be treated as connection failures
66 | - Multiple failed pings **MAY** trigger connection reset
67 | - Implementations **SHOULD** log ping failures for diagnostics
68 | 


--------------------------------------------------------------------------------
/docs/specification/draft/basic/utilities/progress.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Progress
 3 | weight: 30
 4 | ---
 5 | 
 6 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 7 | 
 8 | The Model Context Protocol (MCP) supports optional progress tracking for long-running
 9 | operations through notification messages. Either side can send progress notifications to
10 | provide updates about operation status.
11 | 
12 | ## Progress Flow
13 | 
14 | When a party wants to _receive_ progress updates for a request, it includes a
15 | `progressToken` in the request metadata.
16 | 
17 | - Progress tokens **MUST** be a string or integer value
18 | - Progress tokens can be chosen by the sender using any means, but **MUST** be unique
19 |   across all active requests.
20 | 
21 | ```json
22 | {
23 |   "jsonrpc": "2.0",
24 |   "id": 1,
25 |   "method": "some_method",
26 |   "params": {
27 |     "_meta": {
28 |       "progressToken": "abc123"
29 |     }
30 |   }
31 | }
32 | ```
33 | 
34 | The receiver **MAY** then send progress notifications containing:
35 | 
36 | - The original progress token
37 | - The current progress value so far
38 | - An optional "total" value
39 | - An optional "message" value
40 | 
41 | ```json
42 | {
43 |   "jsonrpc": "2.0",
44 |   "method": "notifications/progress",
45 |   "params": {
46 |     "progressToken": "abc123",
47 |     "progress": 50,
48 |     "total": 100,
49 |     "message": "Reticulating splines..."
50 |   }
51 | }
52 | ```
53 | 
54 | - The `progress` value **MUST** increase with each notification, even if the total is
55 |   unknown.
56 | - The `progress` and the `total` values **MAY** be floating point.
57 | - The `message` field **SHOULD** provide relevant human readable progress information.
58 | 
59 | ## Behavior Requirements
60 | 
61 | 1. Progress notifications **MUST** only reference tokens that:
62 | 
63 |    - Were provided in an active request
64 |    - Are associated with an in-progress operation
65 | 
66 | 2. Receivers of progress requests **MAY**:
67 |    - Choose not to send any progress notifications
68 |    - Send notifications at whatever frequency they deem appropriate
69 |    - Omit the total value if unknown
70 | 
71 | ```mermaid
72 | sequenceDiagram
73 |     participant Sender
74 |     participant Receiver
75 | 
76 |     Note over Sender,Receiver: Request with progress token
77 |     Sender->>Receiver: Method request with progressToken
78 | 
79 |     Note over Sender,Receiver: Progress updates
80 |     loop Progress Updates
81 |         Receiver-->>Sender: Progress notification (0.2/1.0)
82 |         Receiver-->>Sender: Progress notification (0.6/1.0)
83 |         Receiver-->>Sender: Progress notification (1.0/1.0)
84 |     end
85 | 
86 |     Note over Sender,Receiver: Operation complete
87 |     Receiver->>Sender: Method response
88 | ```
89 | 
90 | ## Implementation Notes
91 | 
92 | - Senders and receivers **SHOULD** track active progress tokens
93 | - Both parties **SHOULD** implement rate limiting to prevent flooding
94 | - Progress notifications **MUST** stop after completion
95 | 


--------------------------------------------------------------------------------
/docs/specification/draft/basic/versioning.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Versioning
 3 | type: docs
 4 | weight: 80
 5 | ---
 6 | 
 7 | The Model Context Protocol uses string-based version identifiers following the format
 8 | `YYYY-MM-DD`, to indicate the last date backwards incompatible changes were made.
 9 | 
10 | The current protocol version is **draft**. [See all
11 | revisions]({{< ref "/specification/draft/revisions" >}}).
12 | 
13 | {{< callout type="info" >}} The protocol version will _not_ be incremented when the
14 | protocol is updated, as long as the changes maintain backwards compatibility. This allows
15 | for incremental improvements while preserving interoperability. {{< /callout >}}
16 | 
17 | Version negotiation happens during
18 | [initialization]({{< ref "/specification/draft/basic/lifecycle#initialization" >}}).
19 | Clients and servers **MAY** support multiple protocol versions simultaneously, but they
20 | **MUST** agree on a single version to use for the session.
21 | 
22 | The protocol provides appropriate error handling if version negotiation fails, allowing
23 | clients to gracefully terminate connections when they cannot find a version compatible
24 | with the server.
25 | 


--------------------------------------------------------------------------------
/docs/specification/draft/client/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Client Features
 3 | cascade:
 4 |   type: docs
 5 | weight: 4
 6 | ---
 7 | 
 8 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 9 | 
10 | Clients can implement additional features to enrich connected MCP servers:
11 | 
12 | {{< cards >}} {{< card link="roots" title="Roots" icon="folder" >}}
13 | {{< card link="sampling" title="Sampling" icon="annotation" >}} {{< /cards >}}
14 | 


--------------------------------------------------------------------------------
/docs/specification/draft/client/roots.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Roots
  3 | type: docs
  4 | weight: 40
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
  8 | 
  9 | The Model Context Protocol (MCP) provides a standardized way for clients to expose
 10 | filesystem "roots" to servers. Roots define the boundaries of where servers can operate
 11 | within the filesystem, allowing them to understand which directories and files they have
 12 | access to. Servers can request the list of roots from supporting clients and receive
 13 | notifications when that list changes.
 14 | 
 15 | ## User Interaction Model
 16 | 
 17 | Roots in MCP are typically exposed through workspace or project configuration interfaces.
 18 | 
 19 | For example, implementations could offer a workspace/project picker that allows users to
 20 | select directories and files the server should have access to. This can be combined with
 21 | automatic workspace detection from version control systems or project files.
 22 | 
 23 | However, implementations are free to expose roots through any interface pattern that
 24 | suits their needs&mdash;the protocol itself does not mandate any specific user
 25 | interaction model.
 26 | 
 27 | ## Capabilities
 28 | 
 29 | Clients that support roots **MUST** declare the `roots` capability during
 30 | [initialization]({{< ref "/specification/draft/basic/lifecycle#initialization" >}}):
 31 | 
 32 | ```json
 33 | {
 34 |   "capabilities": {
 35 |     "roots": {
 36 |       "listChanged": true
 37 |     }
 38 |   }
 39 | }
 40 | ```
 41 | 
 42 | `listChanged` indicates whether the client will emit notifications when the list of roots
 43 | changes.
 44 | 
 45 | ## Protocol Messages
 46 | 
 47 | ### Listing Roots
 48 | 
 49 | To retrieve roots, servers send a `roots/list` request:
 50 | 
 51 | **Request:**
 52 | 
 53 | ```json
 54 | {
 55 |   "jsonrpc": "2.0",
 56 |   "id": 1,
 57 |   "method": "roots/list"
 58 | }
 59 | ```
 60 | 
 61 | **Response:**
 62 | 
 63 | ```json
 64 | {
 65 |   "jsonrpc": "2.0",
 66 |   "id": 1,
 67 |   "result": {
 68 |     "roots": [
 69 |       {
 70 |         "uri": "file:///home/user/projects/myproject",
 71 |         "name": "My Project"
 72 |       }
 73 |     ]
 74 |   }
 75 | }
 76 | ```
 77 | 
 78 | ### Root List Changes
 79 | 
 80 | When roots change, clients that support `listChanged` **MUST** send a notification:
 81 | 
 82 | ```json
 83 | {
 84 |   "jsonrpc": "2.0",
 85 |   "method": "notifications/roots/list_changed"
 86 | }
 87 | ```
 88 | 
 89 | ## Message Flow
 90 | 
 91 | ```mermaid
 92 | sequenceDiagram
 93 |     participant Server
 94 |     participant Client
 95 | 
 96 |     Note over Server,Client: Discovery
 97 |     Server->>Client: roots/list
 98 |     Client-->>Server: Available roots
 99 | 
100 |     Note over Server,Client: Changes
101 |     Client--)Server: notifications/roots/list_changed
102 |     Server->>Client: roots/list
103 |     Client-->>Server: Updated roots
104 | ```
105 | 
106 | ## Data Types
107 | 
108 | ### Root
109 | 
110 | A root definition includes:
111 | 
112 | - `uri`: Unique identifier for the root. This **MUST** be a `file://` URI in the current
113 |   specification.
114 | - `name`: Optional human-readable name for display purposes.
115 | 
116 | Example roots for different use cases:
117 | 
118 | #### Project Directory
119 | 
120 | ```json
121 | {
122 |   "uri": "file:///home/user/projects/myproject",
123 |   "name": "My Project"
124 | }
125 | ```
126 | 
127 | #### Multiple Repositories
128 | 
129 | ```json
130 | [
131 |   {
132 |     "uri": "file:///home/user/repos/frontend",
133 |     "name": "Frontend Repository"
134 |   },
135 |   {
136 |     "uri": "file:///home/user/repos/backend",
137 |     "name": "Backend Repository"
138 |   }
139 | ]
140 | ```
141 | 
142 | ## Error Handling
143 | 
144 | Clients **SHOULD** return standard JSON-RPC errors for common failure cases:
145 | 
146 | - Client does not support roots: `-32601` (Method not found)
147 | - Internal errors: `-32603`
148 | 
149 | Example error:
150 | 
151 | ```json
152 | {
153 |   "jsonrpc": "2.0",
154 |   "id": 1,
155 |   "error": {
156 |     "code": -32601,
157 |     "message": "Roots not supported",
158 |     "data": {
159 |       "reason": "Client does not have roots capability"
160 |     }
161 |   }
162 | }
163 | ```
164 | 
165 | ## Security Considerations
166 | 
167 | 1. Clients **MUST**:
168 | 
169 |    - Only expose roots with appropriate permissions
170 |    - Validate all root URIs to prevent path traversal
171 |    - Implement proper access controls
172 |    - Monitor root accessibility
173 | 
174 | 2. Servers **SHOULD**:
175 |    - Handle cases where roots become unavailable
176 |    - Respect root boundaries during operations
177 |    - Validate all paths against provided roots
178 | 
179 | ## Implementation Guidelines
180 | 
181 | 1. Clients **SHOULD**:
182 | 
183 |    - Prompt users for consent before exposing roots to servers
184 |    - Provide clear user interfaces for root management
185 |    - Validate root accessibility before exposing
186 |    - Monitor for root changes
187 | 
188 | 2. Servers **SHOULD**:
189 |    - Check for roots capability before usage
190 |    - Handle root list changes gracefully
191 |    - Respect root boundaries in operations
192 |    - Cache root information appropriately
193 | 


--------------------------------------------------------------------------------
/docs/specification/draft/client/sampling.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Sampling
  3 | type: docs
  4 | weight: 40
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
  8 | 
  9 | The Model Context Protocol (MCP) provides a standardized way for servers to request LLM
 10 | sampling ("completions" or "generations") from language models via clients. This flow
 11 | allows clients to maintain control over model access, selection, and permissions while
 12 | enabling servers to leverage AI capabilities&mdash;with no server API keys necessary.
 13 | Servers can request text, audio, or image-based interactions and optionally include
 14 | context from MCP servers in their prompts.
 15 | 
 16 | ## User Interaction Model
 17 | 
 18 | Sampling in MCP allows servers to implement agentic behaviors, by enabling LLM calls to
 19 | occur _nested_ inside other MCP server features.
 20 | 
 21 | Implementations are free to expose sampling through any interface pattern that suits
 22 | their needs&mdash;the protocol itself does not mandate any specific user interaction
 23 | model.
 24 | 
 25 | {{< callout type="warning" >}} For trust & safety and security, there **SHOULD** always
 26 | be a human in the loop with the ability to deny sampling requests.
 27 | 
 28 | Applications **SHOULD**:
 29 | 
 30 | - Provide UI that makes it easy and intuitive to review sampling requests
 31 | - Allow users to view and edit prompts before sending
 32 | - Present generated responses for review before delivery {{< /callout >}}
 33 | 
 34 | ## Capabilities
 35 | 
 36 | Clients that support sampling **MUST** declare the `sampling` capability during
 37 | [initialization]({{< ref "../basic/lifecycle#initialization" >}}):
 38 | 
 39 | ```json
 40 | {
 41 |   "capabilities": {
 42 |     "sampling": {}
 43 |   }
 44 | }
 45 | ```
 46 | 
 47 | ## Protocol Messages
 48 | 
 49 | ### Creating Messages
 50 | 
 51 | To request a language model generation, servers send a `sampling/createMessage` request:
 52 | 
 53 | **Request:**
 54 | 
 55 | ```json
 56 | {
 57 |   "jsonrpc": "2.0",
 58 |   "id": 1,
 59 |   "method": "sampling/createMessage",
 60 |   "params": {
 61 |     "messages": [
 62 |       {
 63 |         "role": "user",
 64 |         "content": {
 65 |           "type": "text",
 66 |           "text": "What is the capital of France?"
 67 |         }
 68 |       }
 69 |     ],
 70 |     "modelPreferences": {
 71 |       "hints": [
 72 |         {
 73 |           "name": "claude-3-sonnet"
 74 |         }
 75 |       ],
 76 |       "intelligencePriority": 0.8,
 77 |       "speedPriority": 0.5
 78 |     },
 79 |     "systemPrompt": "You are a helpful assistant.",
 80 |     "maxTokens": 100
 81 |   }
 82 | }
 83 | ```
 84 | 
 85 | **Response:**
 86 | 
 87 | ```json
 88 | {
 89 |   "jsonrpc": "2.0",
 90 |   "id": 1,
 91 |   "result": {
 92 |     "role": "assistant",
 93 |     "content": {
 94 |       "type": "text",
 95 |       "text": "The capital of France is Paris."
 96 |     },
 97 |     "model": "claude-3-sonnet-20240307",
 98 |     "stopReason": "endTurn"
 99 |   }
100 | }
101 | ```
102 | 
103 | ## Message Flow
104 | 
105 | ```mermaid
106 | sequenceDiagram
107 |     participant Server
108 |     participant Client
109 |     participant User
110 |     participant LLM
111 | 
112 |     Note over Server,Client: Server initiates sampling
113 |     Server->>Client: sampling/createMessage
114 | 
115 |     Note over Client,User: Human-in-the-loop review
116 |     Client->>User: Present request for approval
117 |     User-->>Client: Review and approve/modify
118 | 
119 |     Note over Client,LLM: Model interaction
120 |     Client->>LLM: Forward approved request
121 |     LLM-->>Client: Return generation
122 | 
123 |     Note over Client,User: Response review
124 |     Client->>User: Present response for approval
125 |     User-->>Client: Review and approve/modify
126 | 
127 |     Note over Server,Client: Complete request
128 |     Client-->>Server: Return approved response
129 | ```
130 | 
131 | ## Data Types
132 | 
133 | ### Messages
134 | 
135 | Sampling messages can contain:
136 | 
137 | #### Text Content
138 | 
139 | ```json
140 | {
141 |   "type": "text",
142 |   "text": "The message content"
143 | }
144 | ```
145 | 
146 | #### Image Content
147 | 
148 | ```json
149 | {
150 |   "type": "image",
151 |   "data": "base64-encoded-image-data",
152 |   "mimeType": "image/jpeg"
153 | }
154 | ```
155 | 
156 | #### Audio Content
157 | 
158 | ```json
159 | {
160 |   "type": "audio",
161 |   "data": "base64-encoded-audio-data",
162 |   "mimeType": "audio/wav"
163 | }
164 | ```
165 | 
166 | ### Model Preferences
167 | 
168 | Model selection in MCP requires careful abstraction since servers and clients may use
169 | different AI providers with distinct model offerings. A server cannot simply request a
170 | specific model by name since the client may not have access to that exact model or may
171 | prefer to use a different provider's equivalent model.
172 | 
173 | To solve this, MCP implements a preference system that combines abstract capability
174 | priorities with optional model hints:
175 | 
176 | #### Capability Priorities
177 | 
178 | Servers express their needs through three normalized priority values (0-1):
179 | 
180 | - `costPriority`: How important is minimizing costs? Higher values prefer cheaper models.
181 | - `speedPriority`: How important is low latency? Higher values prefer faster models.
182 | - `intelligencePriority`: How important are advanced capabilities? Higher values prefer
183 |   more capable models.
184 | 
185 | #### Model Hints
186 | 
187 | While priorities help select models based on characteristics, `hints` allow servers to
188 | suggest specific models or model families:
189 | 
190 | - Hints are treated as substrings that can match model names flexibly
191 | - Multiple hints are evaluated in order of preference
192 | - Clients **MAY** map hints to equivalent models from different providers
193 | - Hints are advisory&mdash;clients make final model selection
194 | 
195 | For example:
196 | 
197 | ```json
198 | {
199 |   "hints": [
200 |     { "name": "claude-3-sonnet" }, // Prefer Sonnet-class models
201 |     { "name": "claude" } // Fall back to any Claude model
202 |   ],
203 |   "costPriority": 0.3, // Cost is less important
204 |   "speedPriority": 0.8, // Speed is very important
205 |   "intelligencePriority": 0.5 // Moderate capability needs
206 | }
207 | ```
208 | 
209 | The client processes these preferences to select an appropriate model from its available
210 | options. For instance, if the client doesn't have access to Claude models but has Gemini,
211 | it might map the sonnet hint to `gemini-1.5-pro` based on similar capabilities.
212 | 
213 | ## Error Handling
214 | 
215 | Clients **SHOULD** return errors for common failure cases:
216 | 
217 | Example error:
218 | 
219 | ```json
220 | {
221 |   "jsonrpc": "2.0",
222 |   "id": 1,
223 |   "error": {
224 |     "code": -1,
225 |     "message": "User rejected sampling request"
226 |   }
227 | }
228 | ```
229 | 
230 | ## Security Considerations
231 | 
232 | 1. Clients **SHOULD** implement user approval controls
233 | 2. Both parties **SHOULD** validate message content
234 | 3. Clients **SHOULD** respect model preference hints
235 | 4. Clients **SHOULD** implement rate limiting
236 | 5. Both parties **MUST** handle sensitive data appropriately
237 | 


--------------------------------------------------------------------------------
/docs/specification/draft/contributing/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: "Contributions"
 3 | weight: 10
 4 | cascade:
 5 |   type: docs
 6 | breadcrumbs: false
 7 | ---
 8 | 
 9 | We welcome contributions from the community! Please review our
10 | [contributing guidelines](https://github.com/modelcontextprotocol/specification/blob/main/CONTRIBUTING.md)
11 | for details on how to submit changes.
12 | 
13 | All contributors must adhere to our
14 | [Code of Conduct](https://github.com/modelcontextprotocol/specification/blob/main/CODE_OF_CONDUCT.md).
15 | 
16 | For questions and discussions, please use
17 | [GitHub Discussions](https://github.com/modelcontextprotocol/specification/discussions).
18 | 


--------------------------------------------------------------------------------
/docs/specification/draft/revisions/2024-11-05.md:
--------------------------------------------------------------------------------
1 | ---
2 | title: 2024-11-05 (Current)
3 | weight: 1
4 | ---
5 | 
6 | This is the current version of the specification. This revision may continue to receive
7 | backwards compatible changes.
8 | 


--------------------------------------------------------------------------------
/docs/specification/draft/revisions/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Revisions
 3 | cascade:
 4 |   type: docs
 5 | ---
 6 | 
 7 | This page lists the different revisions of the Model Context Protocol. See
 8 | [Versioning]({{< ref "/specification/draft/basic/versioning" >}}) for more information
 9 | about how the protocol is versioned.
10 | 
11 | Revisions may be marked as:
12 | 
13 | - **Draft**: in-progress specifications, not yet ready for consumption.
14 | - **Current**: the current protocol version, which is ready for use and may continue to
15 |   receive [backwards compatible
16 |   changes]({{< ref "/specification/draft/basic/versioning" >}}).
17 | - **Final**: past, complete specifications that will not be changed.
18 | 


--------------------------------------------------------------------------------
/docs/specification/draft/server/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Server Features
 3 | cascade:
 4 |   type: docs
 5 | weight: 3
 6 | ---
 7 | 
 8 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 9 | 
10 | Servers provide the fundamental building blocks for adding context to language models via
11 | MCP. These primitives enable rich interactions between clients, servers, and language
12 | models:
13 | 
14 | - **Prompts**: Pre-defined templates or instructions that guide language model
15 |   interactions
16 | - **Resources**: Structured data or content that provides additional context to the model
17 | - **Tools**: Executable functions that allow models to perform actions or retrieve
18 |   information
19 | 
20 | Each primitive can be summarized in the following control hierarchy:
21 | 
22 | | Primitive | Control                | Description                                        | Example                         |
23 | | --------- | ---------------------- | -------------------------------------------------- | ------------------------------- |
24 | | Prompts   | User-controlled        | Interactive templates invoked by user choice       | Slash commands, menu options    |
25 | | Resources | Application-controlled | Contextual data attached and managed by the client | File contents, git history      |
26 | | Tools     | Model-controlled       | Functions exposed to the LLM to take actions       | API POST requests, file writing |
27 | 
28 | Explore these key primitives in more detail below:
29 | 
30 | {{< cards >}} {{< card link="prompts" title="Prompts" icon="chat-alt-2" >}}
31 | {{< card link="resources" title="Resources" icon="document" >}}
32 | {{< card link="tools" title="Tools" icon="adjustments" >}} {{< /cards >}}
33 | 


--------------------------------------------------------------------------------
/docs/specification/draft/server/prompts.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Prompts
  3 | weight: 10
  4 | ---
  5 | 
  6 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
  7 | 
  8 | The Model Context Protocol (MCP) provides a standardized way for servers to expose prompt
  9 | templates to clients. Prompts allow servers to provide structured messages and
 10 | instructions for interacting with language models. Clients can discover available
 11 | prompts, retrieve their contents, and provide arguments to customize them.
 12 | 
 13 | ## User Interaction Model
 14 | 
 15 | Prompts are designed to be **user-controlled**, meaning they are exposed from servers to
 16 | clients with the intention of the user being able to explicitly select them for use.
 17 | 
 18 | Typically, prompts would be triggered through user-initiated commands in the user
 19 | interface, which allows users to naturally discover and invoke available prompts.
 20 | 
 21 | For example, as slash commands:
 22 | 
 23 | ![Example of prompt exposed as slash command](slash-command.png)
 24 | 
 25 | However, implementors are free to expose prompts through any interface pattern that suits
 26 | their needs&mdash;the protocol itself does not mandate any specific user interaction
 27 | model.
 28 | 
 29 | ## Capabilities
 30 | 
 31 | Servers that support prompts **MUST** declare the `prompts` capability during
 32 | [initialization]({{< ref "/specification/draft/basic/lifecycle#initialization" >}}):
 33 | 
 34 | ```json
 35 | {
 36 |   "capabilities": {
 37 |     "prompts": {
 38 |       "listChanged": true
 39 |     }
 40 |   }
 41 | }
 42 | ```
 43 | 
 44 | `listChanged` indicates whether the server will emit notifications when the list of
 45 | available prompts changes.
 46 | 
 47 | ## Protocol Messages
 48 | 
 49 | ### Listing Prompts
 50 | 
 51 | To retrieve available prompts, clients send a `prompts/list` request. This operation
 52 | supports [pagination]({{< ref "/specification/draft/server/utilities/pagination" >}}).
 53 | 
 54 | **Request:**
 55 | 
 56 | ```json
 57 | {
 58 |   "jsonrpc": "2.0",
 59 |   "id": 1,
 60 |   "method": "prompts/list",
 61 |   "params": {
 62 |     "cursor": "optional-cursor-value"
 63 |   }
 64 | }
 65 | ```
 66 | 
 67 | **Response:**
 68 | 
 69 | ```json
 70 | {
 71 |   "jsonrpc": "2.0",
 72 |   "id": 1,
 73 |   "result": {
 74 |     "prompts": [
 75 |       {
 76 |         "name": "code_review",
 77 |         "description": "Asks the LLM to analyze code quality and suggest improvements",
 78 |         "arguments": [
 79 |           {
 80 |             "name": "code",
 81 |             "description": "The code to review",
 82 |             "required": true
 83 |           }
 84 |         ]
 85 |       }
 86 |     ],
 87 |     "nextCursor": "next-page-cursor"
 88 |   }
 89 | }
 90 | ```
 91 | 
 92 | ### Getting a Prompt
 93 | 
 94 | To retrieve a specific prompt, clients send a `prompts/get` request. Arguments may be
 95 | auto-completed through [the completion
 96 | API]({{< ref "/specification/draft/server/utilities/completion" >}}).
 97 | 
 98 | **Request:**
 99 | 
100 | ```json
101 | {
102 |   "jsonrpc": "2.0",
103 |   "id": 2,
104 |   "method": "prompts/get",
105 |   "params": {
106 |     "name": "code_review",
107 |     "arguments": {
108 |       "code": "def hello():\n    print('world')"
109 |     }
110 |   }
111 | }
112 | ```
113 | 
114 | **Response:**
115 | 
116 | ```json
117 | {
118 |   "jsonrpc": "2.0",
119 |   "id": 2,
120 |   "result": {
121 |     "description": "Code review prompt",
122 |     "messages": [
123 |       {
124 |         "role": "user",
125 |         "content": {
126 |           "type": "text",
127 |           "text": "Please review this Python code:\ndef hello():\n    print('world')"
128 |         }
129 |       }
130 |     ]
131 |   }
132 | }
133 | ```
134 | 
135 | ### List Changed Notification
136 | 
137 | When the list of available prompts changes, servers that declared the `listChanged`
138 | capability **SHOULD** send a notification:
139 | 
140 | ```json
141 | {
142 |   "jsonrpc": "2.0",
143 |   "method": "notifications/prompts/list_changed"
144 | }
145 | ```
146 | 
147 | ## Message Flow
148 | 
149 | ```mermaid
150 | sequenceDiagram
151 |     participant Client
152 |     participant Server
153 | 
154 |     Note over Client,Server: Discovery
155 |     Client->>Server: prompts/list
156 |     Server-->>Client: List of prompts
157 | 
158 |     Note over Client,Server: Usage
159 |     Client->>Server: prompts/get
160 |     Server-->>Client: Prompt content
161 | 
162 |     opt listChanged
163 |       Note over Client,Server: Changes
164 |       Server--)Client: prompts/list_changed
165 |       Client->>Server: prompts/list
166 |       Server-->>Client: Updated prompts
167 |     end
168 | ```
169 | 
170 | ## Data Types
171 | 
172 | ### Prompt
173 | 
174 | A prompt definition includes:
175 | 
176 | - `name`: Unique identifier for the prompt
177 | - `description`: Optional human-readable description
178 | - `arguments`: Optional list of arguments for customization
179 | 
180 | ### PromptMessage
181 | 
182 | Messages in a prompt can contain:
183 | 
184 | - `role`: Either "user" or "assistant" to indicate the speaker
185 | - `content`: One of the following content types:
186 | 
187 | #### Text Content
188 | 
189 | Text content represents plain text messages:
190 | 
191 | ```json
192 | {
193 |   "type": "text",
194 |   "text": "The text content of the message"
195 | }
196 | ```
197 | 
198 | This is the most common content type used for natural language interactions.
199 | 
200 | #### Image Content
201 | 
202 | Image content allows including visual information in messages:
203 | 
204 | ```json
205 | {
206 |   "type": "image",
207 |   "data": "base64-encoded-image-data",
208 |   "mimeType": "image/png"
209 | }
210 | ```
211 | 
212 | The image data **MUST** be base64-encoded and include a valid MIME type. This enables
213 | multi-modal interactions where visual context is important.
214 | 
215 | #### Audio Content
216 | 
217 | Audio content allows including audio information in messages:
218 | 
219 | ```json
220 | {
221 |   "type": "audio",
222 |   "data": "base64-encoded-audio-data",
223 |   "mimeType": "audio/wav"
224 | }
225 | ```
226 | 
227 | The audio data MUST be base64-encoded and include a valid MIME type. This enables
228 | multi-modal interactions where audio context is important.
229 | 
230 | #### Embedded Resources
231 | 
232 | Embedded resources allow referencing server-side resources directly in messages:
233 | 
234 | ```json
235 | {
236 |   "type": "resource",
237 |   "resource": {
238 |     "uri": "resource://example",
239 |     "mimeType": "text/plain",
240 |     "text": "Resource content"
241 |   }
242 | }
243 | ```
244 | 
245 | Resources can contain either text or binary (blob) data and **MUST** include:
246 | 
247 | - A valid resource URI
248 | - The appropriate MIME type
249 | - Either text content or base64-encoded blob data
250 | 
251 | Embedded resources enable prompts to seamlessly incorporate server-managed content like
252 | documentation, code samples, or other reference materials directly into the conversation
253 | flow.
254 | 
255 | ## Error Handling
256 | 
257 | Servers **SHOULD** return standard JSON-RPC errors for common failure cases:
258 | 
259 | - Invalid prompt name: `-32602` (Invalid params)
260 | - Missing required arguments: `-32602` (Invalid params)
261 | - Internal errors: `-32603` (Internal error)
262 | 
263 | ## Implementation Considerations
264 | 
265 | 1. Servers **SHOULD** validate prompt arguments before processing
266 | 2. Clients **SHOULD** handle pagination for large prompt lists
267 | 3. Both parties **SHOULD** respect capability negotiation
268 | 
269 | ## Security
270 | 
271 | Implementations **MUST** carefully validate all prompt inputs and outputs to prevent
272 | injection attacks or unauthorized access to resources.
273 | 


--------------------------------------------------------------------------------
/docs/specification/draft/server/resource-picker.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/specification/main/docs/specification/draft/server/resource-picker.png


--------------------------------------------------------------------------------
/docs/specification/draft/server/resources.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Resources
  3 | type: docs
  4 | weight: 20
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
  8 | 
  9 | The Model Context Protocol (MCP) provides a standardized way for servers to expose
 10 | resources to clients. Resources allow servers to share data that provides context to
 11 | language models, such as files, database schemas, or application-specific information.
 12 | Each resource is uniquely identified by a
 13 | [URI](https://datatracker.ietf.org/doc/html/rfc3986).
 14 | 
 15 | ## User Interaction Model
 16 | 
 17 | Resources in MCP are designed to be **application-driven**, with host applications
 18 | determining how to incorporate context based on their needs.
 19 | 
 20 | For example, applications could:
 21 | 
 22 | - Expose resources through UI elements for explicit selection, in a tree or list view
 23 | - Allow the user to search through and filter available resources
 24 | - Implement automatic context inclusion, based on heuristics or the AI model's selection
 25 | 
 26 | ![Example of resource context picker](resource-picker.png)
 27 | 
 28 | However, implementations are free to expose resources through any interface pattern that
 29 | suits their needs&mdash;the protocol itself does not mandate any specific user
 30 | interaction model.
 31 | 
 32 | ## Capabilities
 33 | 
 34 | Servers that support resources **MUST** declare the `resources` capability:
 35 | 
 36 | ```json
 37 | {
 38 |   "capabilities": {
 39 |     "resources": {
 40 |       "subscribe": true,
 41 |       "listChanged": true
 42 |     }
 43 |   }
 44 | }
 45 | ```
 46 | 
 47 | The capability supports two optional features:
 48 | 
 49 | - `subscribe`: whether the client can subscribe to be notified of changes to individual
 50 |   resources.
 51 | - `listChanged`: whether the server will emit notifications when the list of available
 52 |   resources changes.
 53 | 
 54 | Both `subscribe` and `listChanged` are optional&mdash;servers can support neither,
 55 | either, or both:
 56 | 
 57 | ```json
 58 | {
 59 |   "capabilities": {
 60 |     "resources": {} // Neither feature supported
 61 |   }
 62 | }
 63 | ```
 64 | 
 65 | ```json
 66 | {
 67 |   "capabilities": {
 68 |     "resources": {
 69 |       "subscribe": true // Only subscriptions supported
 70 |     }
 71 |   }
 72 | }
 73 | ```
 74 | 
 75 | ```json
 76 | {
 77 |   "capabilities": {
 78 |     "resources": {
 79 |       "listChanged": true // Only list change notifications supported
 80 |     }
 81 |   }
 82 | }
 83 | ```
 84 | 
 85 | ## Protocol Messages
 86 | 
 87 | ### Listing Resources
 88 | 
 89 | To discover available resources, clients send a `resources/list` request. This operation
 90 | supports [pagination]({{< ref "/specification/draft/server/utilities/pagination" >}}).
 91 | 
 92 | **Request:**
 93 | 
 94 | ```json
 95 | {
 96 |   "jsonrpc": "2.0",
 97 |   "id": 1,
 98 |   "method": "resources/list",
 99 |   "params": {
100 |     "cursor": "optional-cursor-value"
101 |   }
102 | }
103 | ```
104 | 
105 | **Response:**
106 | 
107 | ```json
108 | {
109 |   "jsonrpc": "2.0",
110 |   "id": 1,
111 |   "result": {
112 |     "resources": [
113 |       {
114 |         "uri": "file:///project/src/main.rs",
115 |         "name": "main.rs",
116 |         "description": "Primary application entry point",
117 |         "mimeType": "text/x-rust"
118 |       }
119 |     ],
120 |     "nextCursor": "next-page-cursor"
121 |   }
122 | }
123 | ```
124 | 
125 | ### Reading Resources
126 | 
127 | To retrieve resource contents, clients send a `resources/read` request:
128 | 
129 | **Request:**
130 | 
131 | ```json
132 | {
133 |   "jsonrpc": "2.0",
134 |   "id": 2,
135 |   "method": "resources/read",
136 |   "params": {
137 |     "uri": "file:///project/src/main.rs"
138 |   }
139 | }
140 | ```
141 | 
142 | **Response:**
143 | 
144 | ```json
145 | {
146 |   "jsonrpc": "2.0",
147 |   "id": 2,
148 |   "result": {
149 |     "contents": [
150 |       {
151 |         "uri": "file:///project/src/main.rs",
152 |         "mimeType": "text/x-rust",
153 |         "text": "fn main() {\n    println!(\"Hello world!\");\n}"
154 |       }
155 |     ]
156 |   }
157 | }
158 | ```
159 | 
160 | ### Resource Templates
161 | 
162 | Resource templates allow servers to expose parameterized resources using
163 | [URI templates](https://datatracker.ietf.org/doc/html/rfc6570). Arguments may be
164 | auto-completed through [the completion
165 | API]({{< ref "/specification/draft/server/utilities/completion" >}}).
166 | 
167 | **Request:**
168 | 
169 | ```json
170 | {
171 |   "jsonrpc": "2.0",
172 |   "id": 3,
173 |   "method": "resources/templates/list"
174 | }
175 | ```
176 | 
177 | **Response:**
178 | 
179 | ```json
180 | {
181 |   "jsonrpc": "2.0",
182 |   "id": 3,
183 |   "result": {
184 |     "resourceTemplates": [
185 |       {
186 |         "uriTemplate": "file:///{path}",
187 |         "name": "Project Files",
188 |         "description": "Access files in the project directory",
189 |         "mimeType": "application/octet-stream"
190 |       }
191 |     ]
192 |   }
193 | }
194 | ```
195 | 
196 | ### List Changed Notification
197 | 
198 | When the list of available resources changes, servers that declared the `listChanged`
199 | capability **SHOULD** send a notification:
200 | 
201 | ```json
202 | {
203 |   "jsonrpc": "2.0",
204 |   "method": "notifications/resources/list_changed"
205 | }
206 | ```
207 | 
208 | ### Subscriptions
209 | 
210 | The protocol supports optional subscriptions to resource changes. Clients can subscribe
211 | to specific resources and receive notifications when they change:
212 | 
213 | **Subscribe Request:**
214 | 
215 | ```json
216 | {
217 |   "jsonrpc": "2.0",
218 |   "id": 4,
219 |   "method": "resources/subscribe",
220 |   "params": {
221 |     "uri": "file:///project/src/main.rs"
222 |   }
223 | }
224 | ```
225 | 
226 | **Update Notification:**
227 | 
228 | ```json
229 | {
230 |   "jsonrpc": "2.0",
231 |   "method": "notifications/resources/updated",
232 |   "params": {
233 |     "uri": "file:///project/src/main.rs"
234 |   }
235 | }
236 | ```
237 | 
238 | ## Message Flow
239 | 
240 | ```mermaid
241 | sequenceDiagram
242 |     participant Client
243 |     participant Server
244 | 
245 |     Note over Client,Server: Resource Discovery
246 |     Client->>Server: resources/list
247 |     Server-->>Client: List of resources
248 | 
249 |     Note over Client,Server: Resource Access
250 |     Client->>Server: resources/read
251 |     Server-->>Client: Resource contents
252 | 
253 |     Note over Client,Server: Subscriptions
254 |     Client->>Server: resources/subscribe
255 |     Server-->>Client: Subscription confirmed
256 | 
257 |     Note over Client,Server: Updates
258 |     Server--)Client: notifications/resources/updated
259 |     Client->>Server: resources/read
260 |     Server-->>Client: Updated contents
261 | ```
262 | 
263 | ## Data Types
264 | 
265 | ### Resource
266 | 
267 | A resource definition includes:
268 | 
269 | - `uri`: Unique identifier for the resource
270 | - `name`: Human-readable name
271 | - `description`: Optional description
272 | - `mimeType`: Optional MIME type
273 | - `size`: Optional size in bytes
274 | 
275 | ### Resource Contents
276 | 
277 | Resources can contain either text or binary data:
278 | 
279 | #### Text Content
280 | 
281 | ```json
282 | {
283 |   "uri": "file:///example.txt",
284 |   "mimeType": "text/plain",
285 |   "text": "Resource content"
286 | }
287 | ```
288 | 
289 | #### Binary Content
290 | 
291 | ```json
292 | {
293 |   "uri": "file:///example.png",
294 |   "mimeType": "image/png",
295 |   "blob": "base64-encoded-data"
296 | }
297 | ```
298 | 
299 | ## Common URI Schemes
300 | 
301 | The protocol defines several standard URI schemes. This list not
302 | exhaustive&mdash;implementations are always free to use additional, custom URI schemes.
303 | 
304 | ### https://
305 | 
306 | Used to represent a resource available on the web.
307 | 
308 | Servers **SHOULD** use this scheme only when the client is able to fetch and load the
309 | resource directly from the web on its own—that is, it doesn’t need to read the resource
310 | via the MCP server.
311 | 
312 | For other use cases, servers **SHOULD** prefer to use another URI scheme, or define a
313 | custom one, even if the server will itself be downloading resource contents over the
314 | internet.
315 | 
316 | ### file://
317 | 
318 | Used to identify resources that behave like a filesystem. However, the resources do not
319 | need to map to an actual physical filesystem.
320 | 
321 | MCP servers **MAY** identify file:// resources with an
322 | [XDG MIME type](https://specifications.freedesktop.org/shared-mime-info-spec/0.14/ar01s02.html#id-1.3.14),
323 | like `inode/directory`, to represent non-regular files (such as directories) that don’t
324 | otherwise have a standard MIME type.
325 | 
326 | ### git://
327 | 
328 | Git version control integration.
329 | 
330 | ## Error Handling
331 | 
332 | Servers **SHOULD** return standard JSON-RPC errors for common failure cases:
333 | 
334 | - Resource not found: `-32002`
335 | - Internal errors: `-32603`
336 | 
337 | Example error:
338 | 
339 | ```json
340 | {
341 |   "jsonrpc": "2.0",
342 |   "id": 5,
343 |   "error": {
344 |     "code": -32002,
345 |     "message": "Resource not found",
346 |     "data": {
347 |       "uri": "file:///nonexistent.txt"
348 |     }
349 |   }
350 | }
351 | ```
352 | 
353 | ## Security Considerations
354 | 
355 | 1. Servers **MUST** validate all resource URIs
356 | 2. Access controls **SHOULD** be implemented for sensitive resources
357 | 3. Binary data **MUST** be properly encoded
358 | 4. Resource permissions **SHOULD** be checked before operations
359 | 


--------------------------------------------------------------------------------
/docs/specification/draft/server/slash-command.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/specification/main/docs/specification/draft/server/slash-command.png


--------------------------------------------------------------------------------
/docs/specification/draft/server/tools.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Tools
  3 | type: docs
  4 | weight: 40
  5 | ---
  6 | 
  7 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
  8 | 
  9 | The Model Context Protocol (MCP) allows servers to expose tools that can be invoked by
 10 | language models. Tools enable models to interact with external systems, such as querying
 11 | databases, calling APIs, or performing computations. Each tool is uniquely identified by
 12 | a name and includes metadata describing its schema.
 13 | 
 14 | ## User Interaction Model
 15 | 
 16 | Tools in MCP are designed to be **model-controlled**, meaning that the language model can
 17 | discover and invoke tools automatically based on its contextual understanding and the
 18 | user's prompts.
 19 | 
 20 | However, implementations are free to expose tools through any interface pattern that
 21 | suits their needs&mdash;the protocol itself does not mandate any specific user
 22 | interaction model.
 23 | 
 24 | {{< callout type="warning" >}} For trust & safety and security, there **SHOULD** always
 25 | be a human in the loop with the ability to deny tool invocations.
 26 | 
 27 | Applications **SHOULD**:
 28 | 
 29 | - Provide UI that makes clear which tools are being exposed to the AI model
 30 | - Insert clear visual indicators when tools are invoked
 31 | - Present confirmation prompts to the user for operations, to ensure a human is in the
 32 |   loop {{< /callout >}}
 33 | 
 34 | ## Capabilities
 35 | 
 36 | Servers that support tools **MUST** declare the `tools` capability:
 37 | 
 38 | ```json
 39 | {
 40 |   "capabilities": {
 41 |     "tools": {
 42 |       "listChanged": true
 43 |     }
 44 |   }
 45 | }
 46 | ```
 47 | 
 48 | `listChanged` indicates whether the server will emit notifications when the list of
 49 | available tools changes.
 50 | 
 51 | ## Protocol Messages
 52 | 
 53 | ### Listing Tools
 54 | 
 55 | To discover available tools, clients send a `tools/list` request. This operation supports
 56 | [pagination]({{< ref "/specification/draft/server/utilities/pagination" >}}).
 57 | 
 58 | **Request:**
 59 | 
 60 | ```json
 61 | {
 62 |   "jsonrpc": "2.0",
 63 |   "id": 1,
 64 |   "method": "tools/list",
 65 |   "params": {
 66 |     "cursor": "optional-cursor-value"
 67 |   }
 68 | }
 69 | ```
 70 | 
 71 | **Response:**
 72 | 
 73 | ```json
 74 | {
 75 |   "jsonrpc": "2.0",
 76 |   "id": 1,
 77 |   "result": {
 78 |     "tools": [
 79 |       {
 80 |         "name": "get_weather",
 81 |         "description": "Get current weather information for a location",
 82 |         "inputSchema": {
 83 |           "type": "object",
 84 |           "properties": {
 85 |             "location": {
 86 |               "type": "string",
 87 |               "description": "City name or zip code"
 88 |             }
 89 |           },
 90 |           "required": ["location"]
 91 |         }
 92 |       }
 93 |     ],
 94 |     "nextCursor": "next-page-cursor"
 95 |   }
 96 | }
 97 | ```
 98 | 
 99 | ### Calling Tools
100 | 
101 | To invoke a tool, clients send a `tools/call` request:
102 | 
103 | **Request:**
104 | 
105 | ```json
106 | {
107 |   "jsonrpc": "2.0",
108 |   "id": 2,
109 |   "method": "tools/call",
110 |   "params": {
111 |     "name": "get_weather",
112 |     "arguments": {
113 |       "location": "New York"
114 |     }
115 |   }
116 | }
117 | ```
118 | 
119 | **Response:**
120 | 
121 | ```json
122 | {
123 |   "jsonrpc": "2.0",
124 |   "id": 2,
125 |   "result": {
126 |     "content": [
127 |       {
128 |         "type": "text",
129 |         "text": "Current weather in New York:\nTemperature: 72°F\nConditions: Partly cloudy"
130 |       }
131 |     ],
132 |     "isError": false
133 |   }
134 | }
135 | ```
136 | 
137 | ### List Changed Notification
138 | 
139 | When the list of available tools changes, servers that declared the `listChanged`
140 | capability **SHOULD** send a notification:
141 | 
142 | ```json
143 | {
144 |   "jsonrpc": "2.0",
145 |   "method": "notifications/tools/list_changed"
146 | }
147 | ```
148 | 
149 | ## Message Flow
150 | 
151 | ```mermaid
152 | sequenceDiagram
153 |     participant LLM
154 |     participant Client
155 |     participant Server
156 | 
157 |     Note over Client,Server: Discovery
158 |     Client->>Server: tools/list
159 |     Server-->>Client: List of tools
160 | 
161 |     Note over Client,LLM: Tool Selection
162 |     LLM->>Client: Select tool to use
163 | 
164 |     Note over Client,Server: Invocation
165 |     Client->>Server: tools/call
166 |     Server-->>Client: Tool result
167 |     Client->>LLM: Process result
168 | 
169 |     Note over Client,Server: Updates
170 |     Server--)Client: tools/list_changed
171 |     Client->>Server: tools/list
172 |     Server-->>Client: Updated tools
173 | ```
174 | 
175 | ## Data Types
176 | 
177 | ### Tool
178 | 
179 | A tool definition includes:
180 | 
181 | - `name`: Unique identifier for the tool
182 | - `description`: Human-readable description of functionality
183 | - `inputSchema`: JSON Schema defining expected parameters
184 | 
185 | ### Tool Result
186 | 
187 | Tool results can contain multiple content items of different types:
188 | 
189 | #### Text Content
190 | 
191 | ```json
192 | {
193 |   "type": "text",
194 |   "text": "Tool result text"
195 | }
196 | ```
197 | 
198 | #### Image Content
199 | 
200 | ```json
201 | {
202 |   "type": "image",
203 |   "data": "base64-encoded-data",
204 |   "mimeType": "image/png"
205 | }
206 | ```
207 | 
208 | #### Audio Content
209 | 
210 | ```json
211 | {
212 |   "type": "audio",
213 |   "data": "base64-encoded-audio-data",
214 |   "mimeType": "audio/wav"
215 | }
216 | ```
217 | 
218 | #### Embedded Resources
219 | 
220 | [Resources]({{< ref "/specification/draft/server/resources" >}}) **MAY** be embedded, to
221 | provide additional context or data, behind a URI that can be subscribed to or fetched
222 | again by the client later:
223 | 
224 | ```json
225 | {
226 |   "type": "resource",
227 |   "resource": {
228 |     "uri": "resource://example",
229 |     "mimeType": "text/plain",
230 |     "text": "Resource content"
231 |   }
232 | }
233 | ```
234 | 
235 | ## Error Handling
236 | 
237 | Tools use two error reporting mechanisms:
238 | 
239 | 1. **Protocol Errors**: Standard JSON-RPC errors for issues like:
240 | 
241 |    - Unknown tools
242 |    - Invalid arguments
243 |    - Server errors
244 | 
245 | 2. **Tool Execution Errors**: Reported in tool results with `isError: true`:
246 |    - API failures
247 |    - Invalid input data
248 |    - Business logic errors
249 | 
250 | Example protocol error:
251 | 
252 | ```json
253 | {
254 |   "jsonrpc": "2.0",
255 |   "id": 3,
256 |   "error": {
257 |     "code": -32602,
258 |     "message": "Unknown tool: invalid_tool_name"
259 |   }
260 | }
261 | ```
262 | 
263 | Example tool execution error:
264 | 
265 | ```json
266 | {
267 |   "jsonrpc": "2.0",
268 |   "id": 4,
269 |   "result": {
270 |     "content": [
271 |       {
272 |         "type": "text",
273 |         "text": "Failed to fetch weather data: API rate limit exceeded"
274 |       }
275 |     ],
276 |     "isError": true
277 |   }
278 | }
279 | ```
280 | 
281 | ## Security Considerations
282 | 
283 | 1. Servers **MUST**:
284 | 
285 |    - Validate all tool inputs
286 |    - Implement proper access controls
287 |    - Rate limit tool invocations
288 |    - Sanitize tool outputs
289 | 
290 | 2. Clients **SHOULD**:
291 |    - Prompt for user confirmation on sensitive operations
292 |    - Show tool inputs to the user before calling the server, to avoid malicious or
293 |      accidental data exfiltration
294 |    - Validate tool results before passing to LLM
295 |    - Implement timeouts for tool calls
296 |    - Log tool usage for audit purposes
297 | 


--------------------------------------------------------------------------------
/docs/specification/draft/server/utilities/_index.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Utilities
 3 | ---
 4 | 
 5 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 6 | 
 7 | These optional features can be used to enhance server functionality.
 8 | 
 9 | {{< cards >}} {{< card link="completion" title="Completion" icon="at-symbol" >}}
10 | {{< card link="logging" title="Logging" icon="terminal" >}}
11 | {{< card link="pagination" title="Pagination" icon="collection" >}} {{< /cards >}}
12 | 


--------------------------------------------------------------------------------
/docs/specification/draft/server/utilities/completion.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Completion
  3 | ---
  4 | 
  5 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
  6 | 
  7 | The Model Context Protocol (MCP) provides a standardized way for servers to offer
  8 | argument autocompletion suggestions for prompts and resource URIs. This enables rich,
  9 | IDE-like experiences where users receive contextual suggestions while entering argument
 10 | values.
 11 | 
 12 | ## User Interaction Model
 13 | 
 14 | Completion in MCP is designed to support interactive user experiences similar to IDE code
 15 | completion.
 16 | 
 17 | For example, applications may show completion suggestions in a dropdown or popup menu as
 18 | users type, with the ability to filter and select from available options.
 19 | 
 20 | However, implementations are free to expose completion through any interface pattern that
 21 | suits their needs&mdash;the protocol itself does not mandate any specific user
 22 | interaction model.
 23 | 
 24 | ## Protocol Messages
 25 | 
 26 | ### Requesting Completions
 27 | 
 28 | To get completion suggestions, clients send a `completion/complete` request specifying
 29 | what is being completed through a reference type:
 30 | 
 31 | **Request:**
 32 | 
 33 | ```json
 34 | {
 35 |   "jsonrpc": "2.0",
 36 |   "id": 1,
 37 |   "method": "completion/complete",
 38 |   "params": {
 39 |     "ref": {
 40 |       "type": "ref/prompt",
 41 |       "name": "code_review"
 42 |     },
 43 |     "argument": {
 44 |       "name": "language",
 45 |       "value": "py"
 46 |     }
 47 |   }
 48 | }
 49 | ```
 50 | 
 51 | **Response:**
 52 | 
 53 | ```json
 54 | {
 55 |   "jsonrpc": "2.0",
 56 |   "id": 1,
 57 |   "result": {
 58 |     "completion": {
 59 |       "values": ["python", "pytorch", "pyside"],
 60 |       "total": 10,
 61 |       "hasMore": true
 62 |     }
 63 |   }
 64 | }
 65 | ```
 66 | 
 67 | ### Reference Types
 68 | 
 69 | The protocol supports two types of completion references:
 70 | 
 71 | | Type           | Description                 | Example                                             |
 72 | | -------------- | --------------------------- | --------------------------------------------------- |
 73 | | `ref/prompt`   | References a prompt by name | `{"type": "ref/prompt", "name": "code_review"}`     |
 74 | | `ref/resource` | References a resource URI   | `{"type": "ref/resource", "uri": "file:///{path}"}` |
 75 | 
 76 | ### Completion Results
 77 | 
 78 | Servers return an array of completion values ranked by relevance, with:
 79 | 
 80 | - Maximum 100 items per response
 81 | - Optional total number of available matches
 82 | - Boolean indicating if additional results exist
 83 | 
 84 | ## Message Flow
 85 | 
 86 | ```mermaid
 87 | sequenceDiagram
 88 |     participant Client
 89 |     participant Server
 90 | 
 91 |     Note over Client: User types argument
 92 |     Client->>Server: completion/complete
 93 |     Server-->>Client: Completion suggestions
 94 | 
 95 |     Note over Client: User continues typing
 96 |     Client->>Server: completion/complete
 97 |     Server-->>Client: Refined suggestions
 98 | ```
 99 | 
100 | ## Data Types
101 | 
102 | ### CompleteRequest
103 | 
104 | - `ref`: A `PromptReference` or `ResourceReference`
105 | - `argument`: Object containing:
106 |   - `name`: Argument name
107 |   - `value`: Current value
108 | 
109 | ### CompleteResult
110 | 
111 | - `completion`: Object containing:
112 |   - `values`: Array of suggestions (max 100)
113 |   - `total`: Optional total matches
114 |   - `hasMore`: Additional results flag
115 | 
116 | ## Implementation Considerations
117 | 
118 | 1. Servers **SHOULD**:
119 | 
120 |    - Return suggestions sorted by relevance
121 |    - Implement fuzzy matching where appropriate
122 |    - Rate limit completion requests
123 |    - Validate all inputs
124 | 
125 | 2. Clients **SHOULD**:
126 |    - Debounce rapid completion requests
127 |    - Cache completion results where appropriate
128 |    - Handle missing or partial results gracefully
129 | 
130 | ## Security
131 | 
132 | Implementations **MUST**:
133 | 
134 | - Validate all completion inputs
135 | - Implement appropriate rate limiting
136 | - Control access to sensitive suggestions
137 | - Prevent completion-based information disclosure
138 | 


--------------------------------------------------------------------------------
/docs/specification/draft/server/utilities/logging.md:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Logging
  3 | ---
  4 | 
  5 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
  6 | 
  7 | The Model Context Protocol (MCP) provides a standardized way for servers to send
  8 | structured log messages to clients. Clients can control logging verbosity by setting
  9 | minimum log levels, with servers sending notifications containing severity levels,
 10 | optional logger names, and arbitrary JSON-serializable data.
 11 | 
 12 | ## User Interaction Model
 13 | 
 14 | Implementations are free to expose logging through any interface pattern that suits their
 15 | needs&mdash;the protocol itself does not mandate any specific user interaction model.
 16 | 
 17 | ## Capabilities
 18 | 
 19 | Servers that emit log message notifications **MUST** declare the `logging` capability:
 20 | 
 21 | ```json
 22 | {
 23 |   "capabilities": {
 24 |     "logging": {}
 25 |   }
 26 | }
 27 | ```
 28 | 
 29 | ## Log Levels
 30 | 
 31 | The protocol follows the standard syslog severity levels specified in
 32 | [RFC 5424](https://datatracker.ietf.org/doc/html/rfc5424#section-6.2.1):
 33 | 
 34 | | Level     | Description                      | Example Use Case           |
 35 | | --------- | -------------------------------- | -------------------------- |
 36 | | debug     | Detailed debugging information   | Function entry/exit points |
 37 | | info      | General informational messages   | Operation progress updates |
 38 | | notice    | Normal but significant events    | Configuration changes      |
 39 | | warning   | Warning conditions               | Deprecated feature usage   |
 40 | | error     | Error conditions                 | Operation failures         |
 41 | | critical  | Critical conditions              | System component failures  |
 42 | | alert     | Action must be taken immediately | Data corruption detected   |
 43 | | emergency | System is unusable               | Complete system failure    |
 44 | 
 45 | ## Protocol Messages
 46 | 
 47 | ### Setting Log Level
 48 | 
 49 | To configure the minimum log level, clients **MAY** send a `logging/setLevel` request:
 50 | 
 51 | **Request:**
 52 | 
 53 | ```json
 54 | {
 55 |   "jsonrpc": "2.0",
 56 |   "id": 1,
 57 |   "method": "logging/setLevel",
 58 |   "params": {
 59 |     "level": "info"
 60 |   }
 61 | }
 62 | ```
 63 | 
 64 | ### Log Message Notifications
 65 | 
 66 | Servers send log messages using `notifications/message` notifications:
 67 | 
 68 | ```json
 69 | {
 70 |   "jsonrpc": "2.0",
 71 |   "method": "notifications/message",
 72 |   "params": {
 73 |     "level": "error",
 74 |     "logger": "database",
 75 |     "data": {
 76 |       "error": "Connection failed",
 77 |       "details": {
 78 |         "host": "localhost",
 79 |         "port": 5432
 80 |       }
 81 |     }
 82 |   }
 83 | }
 84 | ```
 85 | 
 86 | ## Message Flow
 87 | 
 88 | ```mermaid
 89 | sequenceDiagram
 90 |     participant Client
 91 |     participant Server
 92 | 
 93 |     Note over Client,Server: Configure Logging
 94 |     Client->>Server: logging/setLevel (info)
 95 |     Server-->>Client: Empty Result
 96 | 
 97 |     Note over Client,Server: Server Activity
 98 |     Server--)Client: notifications/message (info)
 99 |     Server--)Client: notifications/message (warning)
100 |     Server--)Client: notifications/message (error)
101 | 
102 |     Note over Client,Server: Level Change
103 |     Client->>Server: logging/setLevel (error)
104 |     Server-->>Client: Empty Result
105 |     Note over Server: Only sends error level<br/>and above
106 | ```
107 | 
108 | ## Error Handling
109 | 
110 | Servers **SHOULD** return standard JSON-RPC errors for common failure cases:
111 | 
112 | - Invalid log level: `-32602` (Invalid params)
113 | - Configuration errors: `-32603` (Internal error)
114 | 
115 | ## Implementation Considerations
116 | 
117 | 1. Servers **SHOULD**:
118 | 
119 |    - Rate limit log messages
120 |    - Include relevant context in data field
121 |    - Use consistent logger names
122 |    - Remove sensitive information
123 | 
124 | 2. Clients **MAY**:
125 |    - Present log messages in the UI
126 |    - Implement log filtering/search
127 |    - Display severity visually
128 |    - Persist log messages
129 | 
130 | ## Security
131 | 
132 | 1. Log messages **MUST NOT** contain:
133 | 
134 |    - Credentials or secrets
135 |    - Personal identifying information
136 |    - Internal system details that could aid attacks
137 | 
138 | 2. Implementations **SHOULD**:
139 |    - Rate limit messages
140 |    - Validate all data fields
141 |    - Control log access
142 |    - Monitor for sensitive content
143 | 


--------------------------------------------------------------------------------
/docs/specification/draft/server/utilities/pagination.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Pagination
 3 | ---
 4 | 
 5 | {{< callout type="info" >}} **Protocol Revision**: draft {{< /callout >}}
 6 | 
 7 | The Model Context Protocol (MCP) supports paginating list operations that may return
 8 | large result sets. Pagination allows servers to yield results in smaller chunks rather
 9 | than all at once.
10 | 
11 | Pagination is especially important when connecting to external services over the
12 | internet, but also useful for local integrations to avoid performance issues with large
13 | data sets.
14 | 
15 | ## Pagination Model
16 | 
17 | Pagination in MCP uses an opaque cursor-based approach, instead of numbered pages.
18 | 
19 | - The **cursor** is an opaque string token, representing a position in the result set
20 | - **Page size** is determined by the server, and **MAY NOT** be fixed
21 | 
22 | ## Response Format
23 | 
24 | Pagination starts when the server sends a **response** that includes:
25 | 
26 | - The current page of results
27 | - An optional `nextCursor` field if more results exist
28 | 
29 | ```json
30 | {
31 |   "jsonrpc": "2.0",
32 |   "id": "123",
33 |   "result": {
34 |     "resources": [...],
35 |     "nextCursor": "eyJwYWdlIjogM30="
36 |   }
37 | }
38 | ```
39 | 
40 | ## Request Format
41 | 
42 | After receiving a cursor, the client can _continue_ paginating by issuing a request
43 | including that cursor:
44 | 
45 | ```json
46 | {
47 |   "jsonrpc": "2.0",
48 |   "method": "resources/list",
49 |   "params": {
50 |     "cursor": "eyJwYWdlIjogMn0="
51 |   }
52 | }
53 | ```
54 | 
55 | ## Pagination Flow
56 | 
57 | ```mermaid
58 | sequenceDiagram
59 |     participant Client
60 |     participant Server
61 | 
62 |     Client->>Server: List Request (no cursor)
63 |     loop Pagination Loop
64 |       Server-->>Client: Page of results + nextCursor
65 |       Client->>Server: List Request (with cursor)
66 |     end
67 | ```
68 | 
69 | ## Operations Supporting Pagination
70 | 
71 | The following MCP operations support pagination:
72 | 
73 | - `resources/list` - List available resources
74 | - `resources/templates/list` - List resource templates
75 | - `prompts/list` - List available prompts
76 | - `tools/list` - List available tools
77 | 
78 | ## Implementation Guidelines
79 | 
80 | 1. Servers **SHOULD**:
81 | 
82 |    - Provide stable cursors
83 |    - Handle invalid cursors gracefully
84 | 
85 | 2. Clients **SHOULD**:
86 | 
87 |    - Treat a missing `nextCursor` as the end of results
88 |    - Support both paginated and non-paginated flows
89 | 
90 | 3. Clients **MUST** treat cursors as opaque tokens:
91 |    - Don't make assumptions about cursor format
92 |    - Don't attempt to parse or modify cursors
93 |    - Don't persist cursors across sessions
94 | 
95 | ## Error Handling
96 | 
97 | Invalid cursors **SHOULD** result in an error with code -32602 (Invalid params).
98 | 


--------------------------------------------------------------------------------
/package-lock.json:
--------------------------------------------------------------------------------
   1 | {
   2 |   "name": "@modelcontextprotocol/specification",
   3 |   "version": "0.1.0",
   4 |   "lockfileVersion": 3,
   5 |   "requires": true,
   6 |   "packages": {
   7 |     "": {
   8 |       "name": "@modelcontextprotocol/specification",
   9 |       "version": "0.1.0",
  10 |       "license": "MIT",
  11 |       "devDependencies": {
  12 |         "ajv": "^8.17.1",
  13 |         "ajv-formats": "^3.0.1",
  14 |         "glob": "^11.0.0",
  15 |         "prettier": "^3.4.2",
  16 |         "tsx": "^4.19.1",
  17 |         "typescript": "^5.6.2",
  18 |         "typescript-json-schema": "^0.65.1"
  19 |       },
  20 |       "engines": {
  21 |         "node": ">=20"
  22 |       }
  23 |     },
  24 |     "node_modules/@cspotcode/source-map-support": {
  25 |       "version": "0.8.1",
  26 |       "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
  27 |       "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
  28 |       "dev": true,
  29 |       "license": "MIT",
  30 |       "dependencies": {
  31 |         "@jridgewell/trace-mapping": "0.3.9"
  32 |       },
  33 |       "engines": {
  34 |         "node": ">=12"
  35 |       }
  36 |     },
  37 |     "node_modules/@esbuild/darwin-arm64": {
  38 |       "version": "0.23.1",
  39 |       "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.23.1.tgz",
  40 |       "integrity": "sha512-YsS2e3Wtgnw7Wq53XXBLcV6JhRsEq8hkfg91ESVadIrzr9wO6jJDMZnCQbHm1Guc5t/CdDiFSSfWP58FNuvT3Q==",
  41 |       "cpu": [
  42 |         "arm64"
  43 |       ],
  44 |       "dev": true,
  45 |       "license": "MIT",
  46 |       "optional": true,
  47 |       "os": [
  48 |         "darwin"
  49 |       ],
  50 |       "engines": {
  51 |         "node": ">=18"
  52 |       }
  53 |     },
  54 |     "node_modules/@isaacs/cliui": {
  55 |       "version": "8.0.2",
  56 |       "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
  57 |       "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
  58 |       "dev": true,
  59 |       "license": "ISC",
  60 |       "dependencies": {
  61 |         "string-width": "^5.1.2",
  62 |         "string-width-cjs": "npm:string-width@^4.2.0",
  63 |         "strip-ansi": "^7.0.1",
  64 |         "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
  65 |         "wrap-ansi": "^8.1.0",
  66 |         "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
  67 |       },
  68 |       "engines": {
  69 |         "node": ">=12"
  70 |       }
  71 |     },
  72 |     "node_modules/@isaacs/cliui/node_modules/ansi-regex": {
  73 |       "version": "6.0.1",
  74 |       "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",
  75 |       "integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==",
  76 |       "dev": true,
  77 |       "license": "MIT",
  78 |       "engines": {
  79 |         "node": ">=12"
  80 |       },
  81 |       "funding": {
  82 |         "url": "https://github.com/chalk/ansi-regex?sponsor=1"
  83 |       }
  84 |     },
  85 |     "node_modules/@isaacs/cliui/node_modules/ansi-styles": {
  86 |       "version": "6.2.1",
  87 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
  88 |       "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
  89 |       "dev": true,
  90 |       "license": "MIT",
  91 |       "engines": {
  92 |         "node": ">=12"
  93 |       },
  94 |       "funding": {
  95 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
  96 |       }
  97 |     },
  98 |     "node_modules/@isaacs/cliui/node_modules/emoji-regex": {
  99 |       "version": "9.2.2",
 100 |       "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
 101 |       "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
 102 |       "dev": true,
 103 |       "license": "MIT"
 104 |     },
 105 |     "node_modules/@isaacs/cliui/node_modules/string-width": {
 106 |       "version": "5.1.2",
 107 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
 108 |       "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
 109 |       "dev": true,
 110 |       "license": "MIT",
 111 |       "dependencies": {
 112 |         "eastasianwidth": "^0.2.0",
 113 |         "emoji-regex": "^9.2.2",
 114 |         "strip-ansi": "^7.0.1"
 115 |       },
 116 |       "engines": {
 117 |         "node": ">=12"
 118 |       },
 119 |       "funding": {
 120 |         "url": "https://github.com/sponsors/sindresorhus"
 121 |       }
 122 |     },
 123 |     "node_modules/@isaacs/cliui/node_modules/strip-ansi": {
 124 |       "version": "7.1.0",
 125 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
 126 |       "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
 127 |       "dev": true,
 128 |       "license": "MIT",
 129 |       "dependencies": {
 130 |         "ansi-regex": "^6.0.1"
 131 |       },
 132 |       "engines": {
 133 |         "node": ">=12"
 134 |       },
 135 |       "funding": {
 136 |         "url": "https://github.com/chalk/strip-ansi?sponsor=1"
 137 |       }
 138 |     },
 139 |     "node_modules/@isaacs/cliui/node_modules/wrap-ansi": {
 140 |       "version": "8.1.0",
 141 |       "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
 142 |       "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
 143 |       "dev": true,
 144 |       "license": "MIT",
 145 |       "dependencies": {
 146 |         "ansi-styles": "^6.1.0",
 147 |         "string-width": "^5.0.1",
 148 |         "strip-ansi": "^7.0.1"
 149 |       },
 150 |       "engines": {
 151 |         "node": ">=12"
 152 |       },
 153 |       "funding": {
 154 |         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
 155 |       }
 156 |     },
 157 |     "node_modules/@jridgewell/resolve-uri": {
 158 |       "version": "3.1.2",
 159 |       "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
 160 |       "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
 161 |       "dev": true,
 162 |       "license": "MIT",
 163 |       "engines": {
 164 |         "node": ">=6.0.0"
 165 |       }
 166 |     },
 167 |     "node_modules/@jridgewell/sourcemap-codec": {
 168 |       "version": "1.5.0",
 169 |       "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
 170 |       "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
 171 |       "dev": true,
 172 |       "license": "MIT"
 173 |     },
 174 |     "node_modules/@jridgewell/trace-mapping": {
 175 |       "version": "0.3.9",
 176 |       "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
 177 |       "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
 178 |       "dev": true,
 179 |       "license": "MIT",
 180 |       "dependencies": {
 181 |         "@jridgewell/resolve-uri": "^3.0.3",
 182 |         "@jridgewell/sourcemap-codec": "^1.4.10"
 183 |       }
 184 |     },
 185 |     "node_modules/@pkgjs/parseargs": {
 186 |       "version": "0.11.0",
 187 |       "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
 188 |       "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
 189 |       "dev": true,
 190 |       "license": "MIT",
 191 |       "optional": true,
 192 |       "engines": {
 193 |         "node": ">=14"
 194 |       }
 195 |     },
 196 |     "node_modules/@tsconfig/node10": {
 197 |       "version": "1.0.11",
 198 |       "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.11.tgz",
 199 |       "integrity": "sha512-DcRjDCujK/kCk/cUe8Xz8ZSpm8mS3mNNpta+jGCA6USEDfktlNvm1+IuZ9eTcDbNk41BHwpHHeW+N1lKCz4zOw==",
 200 |       "dev": true,
 201 |       "license": "MIT"
 202 |     },
 203 |     "node_modules/@tsconfig/node12": {
 204 |       "version": "1.0.11",
 205 |       "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
 206 |       "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
 207 |       "dev": true,
 208 |       "license": "MIT"
 209 |     },
 210 |     "node_modules/@tsconfig/node14": {
 211 |       "version": "1.0.3",
 212 |       "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
 213 |       "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
 214 |       "dev": true,
 215 |       "license": "MIT"
 216 |     },
 217 |     "node_modules/@tsconfig/node16": {
 218 |       "version": "1.0.4",
 219 |       "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
 220 |       "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
 221 |       "dev": true,
 222 |       "license": "MIT"
 223 |     },
 224 |     "node_modules/@types/json-schema": {
 225 |       "version": "7.0.15",
 226 |       "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
 227 |       "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
 228 |       "dev": true,
 229 |       "license": "MIT"
 230 |     },
 231 |     "node_modules/@types/node": {
 232 |       "version": "18.19.50",
 233 |       "resolved": "https://registry.npmjs.org/@types/node/-/node-18.19.50.tgz",
 234 |       "integrity": "sha512-xonK+NRrMBRtkL1hVCc3G+uXtjh1Al4opBLjqVmipe5ZAaBYWW6cNAiBVZ1BvmkBhep698rP3UM3aRAdSALuhg==",
 235 |       "dev": true,
 236 |       "license": "MIT",
 237 |       "dependencies": {
 238 |         "undici-types": "~5.26.4"
 239 |       }
 240 |     },
 241 |     "node_modules/acorn": {
 242 |       "version": "8.12.1",
 243 |       "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.12.1.tgz",
 244 |       "integrity": "sha512-tcpGyI9zbizT9JbV6oYE477V6mTlXvvi0T0G3SNIYE2apm/G5huBa1+K89VGeovbg+jycCrfhl3ADxErOuO6Jg==",
 245 |       "dev": true,
 246 |       "license": "MIT",
 247 |       "bin": {
 248 |         "acorn": "bin/acorn"
 249 |       },
 250 |       "engines": {
 251 |         "node": ">=0.4.0"
 252 |       }
 253 |     },
 254 |     "node_modules/acorn-walk": {
 255 |       "version": "8.3.4",
 256 |       "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.4.tgz",
 257 |       "integrity": "sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==",
 258 |       "dev": true,
 259 |       "license": "MIT",
 260 |       "dependencies": {
 261 |         "acorn": "^8.11.0"
 262 |       },
 263 |       "engines": {
 264 |         "node": ">=0.4.0"
 265 |       }
 266 |     },
 267 |     "node_modules/ajv": {
 268 |       "version": "8.17.1",
 269 |       "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
 270 |       "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
 271 |       "dev": true,
 272 |       "license": "MIT",
 273 |       "dependencies": {
 274 |         "fast-deep-equal": "^3.1.3",
 275 |         "fast-uri": "^3.0.1",
 276 |         "json-schema-traverse": "^1.0.0",
 277 |         "require-from-string": "^2.0.2"
 278 |       },
 279 |       "funding": {
 280 |         "type": "github",
 281 |         "url": "https://github.com/sponsors/epoberezkin"
 282 |       }
 283 |     },
 284 |     "node_modules/ajv-formats": {
 285 |       "version": "3.0.1",
 286 |       "resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-3.0.1.tgz",
 287 |       "integrity": "sha512-8iUql50EUR+uUcdRQ3HDqa6EVyo3docL8g5WJ3FNcWmu62IbkGUue/pEyLBW8VGKKucTPgqeks4fIU1DA4yowQ==",
 288 |       "dev": true,
 289 |       "license": "MIT",
 290 |       "dependencies": {
 291 |         "ajv": "^8.0.0"
 292 |       },
 293 |       "peerDependencies": {
 294 |         "ajv": "^8.0.0"
 295 |       },
 296 |       "peerDependenciesMeta": {
 297 |         "ajv": {
 298 |           "optional": true
 299 |         }
 300 |       }
 301 |     },
 302 |     "node_modules/ansi-regex": {
 303 |       "version": "5.0.1",
 304 |       "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
 305 |       "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
 306 |       "dev": true,
 307 |       "license": "MIT",
 308 |       "engines": {
 309 |         "node": ">=8"
 310 |       }
 311 |     },
 312 |     "node_modules/ansi-styles": {
 313 |       "version": "4.3.0",
 314 |       "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
 315 |       "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
 316 |       "dev": true,
 317 |       "license": "MIT",
 318 |       "dependencies": {
 319 |         "color-convert": "^2.0.1"
 320 |       },
 321 |       "engines": {
 322 |         "node": ">=8"
 323 |       },
 324 |       "funding": {
 325 |         "url": "https://github.com/chalk/ansi-styles?sponsor=1"
 326 |       }
 327 |     },
 328 |     "node_modules/arg": {
 329 |       "version": "4.1.3",
 330 |       "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
 331 |       "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
 332 |       "dev": true,
 333 |       "license": "MIT"
 334 |     },
 335 |     "node_modules/balanced-match": {
 336 |       "version": "1.0.2",
 337 |       "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
 338 |       "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
 339 |       "dev": true,
 340 |       "license": "MIT"
 341 |     },
 342 |     "node_modules/brace-expansion": {
 343 |       "version": "2.0.1",
 344 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
 345 |       "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
 346 |       "dev": true,
 347 |       "license": "MIT",
 348 |       "dependencies": {
 349 |         "balanced-match": "^1.0.0"
 350 |       }
 351 |     },
 352 |     "node_modules/cliui": {
 353 |       "version": "8.0.1",
 354 |       "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
 355 |       "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
 356 |       "dev": true,
 357 |       "license": "ISC",
 358 |       "dependencies": {
 359 |         "string-width": "^4.2.0",
 360 |         "strip-ansi": "^6.0.1",
 361 |         "wrap-ansi": "^7.0.0"
 362 |       },
 363 |       "engines": {
 364 |         "node": ">=12"
 365 |       }
 366 |     },
 367 |     "node_modules/color-convert": {
 368 |       "version": "2.0.1",
 369 |       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
 370 |       "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
 371 |       "dev": true,
 372 |       "license": "MIT",
 373 |       "dependencies": {
 374 |         "color-name": "~1.1.4"
 375 |       },
 376 |       "engines": {
 377 |         "node": ">=7.0.0"
 378 |       }
 379 |     },
 380 |     "node_modules/color-name": {
 381 |       "version": "1.1.4",
 382 |       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
 383 |       "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
 384 |       "dev": true,
 385 |       "license": "MIT"
 386 |     },
 387 |     "node_modules/concat-map": {
 388 |       "version": "0.0.1",
 389 |       "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
 390 |       "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
 391 |       "dev": true,
 392 |       "license": "MIT"
 393 |     },
 394 |     "node_modules/create-require": {
 395 |       "version": "1.1.1",
 396 |       "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
 397 |       "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
 398 |       "dev": true,
 399 |       "license": "MIT"
 400 |     },
 401 |     "node_modules/cross-spawn": {
 402 |       "version": "7.0.6",
 403 |       "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
 404 |       "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
 405 |       "dev": true,
 406 |       "dependencies": {
 407 |         "path-key": "^3.1.0",
 408 |         "shebang-command": "^2.0.0",
 409 |         "which": "^2.0.1"
 410 |       },
 411 |       "engines": {
 412 |         "node": ">= 8"
 413 |       }
 414 |     },
 415 |     "node_modules/diff": {
 416 |       "version": "4.0.2",
 417 |       "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
 418 |       "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",
 419 |       "dev": true,
 420 |       "license": "BSD-3-Clause",
 421 |       "engines": {
 422 |         "node": ">=0.3.1"
 423 |       }
 424 |     },
 425 |     "node_modules/eastasianwidth": {
 426 |       "version": "0.2.0",
 427 |       "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
 428 |       "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
 429 |       "dev": true,
 430 |       "license": "MIT"
 431 |     },
 432 |     "node_modules/emoji-regex": {
 433 |       "version": "8.0.0",
 434 |       "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
 435 |       "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
 436 |       "dev": true,
 437 |       "license": "MIT"
 438 |     },
 439 |     "node_modules/esbuild": {
 440 |       "version": "0.23.1",
 441 |       "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.23.1.tgz",
 442 |       "integrity": "sha512-VVNz/9Sa0bs5SELtn3f7qhJCDPCF5oMEl5cO9/SSinpE9hbPVvxbd572HH5AKiP7WD8INO53GgfDDhRjkylHEg==",
 443 |       "dev": true,
 444 |       "hasInstallScript": true,
 445 |       "license": "MIT",
 446 |       "bin": {
 447 |         "esbuild": "bin/esbuild"
 448 |       },
 449 |       "engines": {
 450 |         "node": ">=18"
 451 |       },
 452 |       "optionalDependencies": {
 453 |         "@esbuild/aix-ppc64": "0.23.1",
 454 |         "@esbuild/android-arm": "0.23.1",
 455 |         "@esbuild/android-arm64": "0.23.1",
 456 |         "@esbuild/android-x64": "0.23.1",
 457 |         "@esbuild/darwin-arm64": "0.23.1",
 458 |         "@esbuild/darwin-x64": "0.23.1",
 459 |         "@esbuild/freebsd-arm64": "0.23.1",
 460 |         "@esbuild/freebsd-x64": "0.23.1",
 461 |         "@esbuild/linux-arm": "0.23.1",
 462 |         "@esbuild/linux-arm64": "0.23.1",
 463 |         "@esbuild/linux-ia32": "0.23.1",
 464 |         "@esbuild/linux-loong64": "0.23.1",
 465 |         "@esbuild/linux-mips64el": "0.23.1",
 466 |         "@esbuild/linux-ppc64": "0.23.1",
 467 |         "@esbuild/linux-riscv64": "0.23.1",
 468 |         "@esbuild/linux-s390x": "0.23.1",
 469 |         "@esbuild/linux-x64": "0.23.1",
 470 |         "@esbuild/netbsd-x64": "0.23.1",
 471 |         "@esbuild/openbsd-arm64": "0.23.1",
 472 |         "@esbuild/openbsd-x64": "0.23.1",
 473 |         "@esbuild/sunos-x64": "0.23.1",
 474 |         "@esbuild/win32-arm64": "0.23.1",
 475 |         "@esbuild/win32-ia32": "0.23.1",
 476 |         "@esbuild/win32-x64": "0.23.1"
 477 |       }
 478 |     },
 479 |     "node_modules/escalade": {
 480 |       "version": "3.2.0",
 481 |       "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
 482 |       "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
 483 |       "dev": true,
 484 |       "license": "MIT",
 485 |       "engines": {
 486 |         "node": ">=6"
 487 |       }
 488 |     },
 489 |     "node_modules/fast-deep-equal": {
 490 |       "version": "3.1.3",
 491 |       "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
 492 |       "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
 493 |       "dev": true,
 494 |       "license": "MIT"
 495 |     },
 496 |     "node_modules/fast-uri": {
 497 |       "version": "3.0.1",
 498 |       "resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.0.1.tgz",
 499 |       "integrity": "sha512-MWipKbbYiYI0UC7cl8m/i/IWTqfC8YXsqjzybjddLsFjStroQzsHXkc73JutMvBiXmOvapk+axIl79ig5t55Bw==",
 500 |       "dev": true,
 501 |       "license": "MIT"
 502 |     },
 503 |     "node_modules/foreground-child": {
 504 |       "version": "3.2.1",
 505 |       "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.2.1.tgz",
 506 |       "integrity": "sha512-PXUUyLqrR2XCWICfv6ukppP96sdFwWbNEnfEMt7jNsISjMsvaLNinAHNDYyvkyU+SZG2BTSbT5NjG+vZslfGTA==",
 507 |       "dev": true,
 508 |       "license": "ISC",
 509 |       "dependencies": {
 510 |         "cross-spawn": "^7.0.0",
 511 |         "signal-exit": "^4.0.1"
 512 |       },
 513 |       "engines": {
 514 |         "node": ">=14"
 515 |       },
 516 |       "funding": {
 517 |         "url": "https://github.com/sponsors/isaacs"
 518 |       }
 519 |     },
 520 |     "node_modules/fs.realpath": {
 521 |       "version": "1.0.0",
 522 |       "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
 523 |       "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
 524 |       "dev": true,
 525 |       "license": "ISC"
 526 |     },
 527 |     "node_modules/fsevents": {
 528 |       "version": "2.3.3",
 529 |       "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
 530 |       "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
 531 |       "dev": true,
 532 |       "license": "MIT",
 533 |       "optional": true,
 534 |       "os": [
 535 |         "darwin"
 536 |       ],
 537 |       "engines": {
 538 |         "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
 539 |       }
 540 |     },
 541 |     "node_modules/get-caller-file": {
 542 |       "version": "2.0.5",
 543 |       "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
 544 |       "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
 545 |       "dev": true,
 546 |       "license": "ISC",
 547 |       "engines": {
 548 |         "node": "6.* || 8.* || >= 10.*"
 549 |       }
 550 |     },
 551 |     "node_modules/get-tsconfig": {
 552 |       "version": "4.8.1",
 553 |       "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.8.1.tgz",
 554 |       "integrity": "sha512-k9PN+cFBmaLWtVz29SkUoqU5O0slLuHJXt/2P+tMVFT+phsSGXGkp9t3rQIqdz0e+06EHNGs3oM6ZX1s2zHxRg==",
 555 |       "dev": true,
 556 |       "license": "MIT",
 557 |       "dependencies": {
 558 |         "resolve-pkg-maps": "^1.0.0"
 559 |       },
 560 |       "funding": {
 561 |         "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
 562 |       }
 563 |     },
 564 |     "node_modules/glob": {
 565 |       "version": "11.0.0",
 566 |       "resolved": "https://registry.npmjs.org/glob/-/glob-11.0.0.tgz",
 567 |       "integrity": "sha512-9UiX/Bl6J2yaBbxKoEBRm4Cipxgok8kQYcOPEhScPwebu2I0HoQOuYdIO6S3hLuWoZgpDpwQZMzTFxgpkyT76g==",
 568 |       "dev": true,
 569 |       "license": "ISC",
 570 |       "dependencies": {
 571 |         "foreground-child": "^3.1.0",
 572 |         "jackspeak": "^4.0.1",
 573 |         "minimatch": "^10.0.0",
 574 |         "minipass": "^7.1.2",
 575 |         "package-json-from-dist": "^1.0.0",
 576 |         "path-scurry": "^2.0.0"
 577 |       },
 578 |       "bin": {
 579 |         "glob": "dist/esm/bin.mjs"
 580 |       },
 581 |       "engines": {
 582 |         "node": "20 || >=22"
 583 |       },
 584 |       "funding": {
 585 |         "url": "https://github.com/sponsors/isaacs"
 586 |       }
 587 |     },
 588 |     "node_modules/inflight": {
 589 |       "version": "1.0.6",
 590 |       "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
 591 |       "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
 592 |       "dev": true,
 593 |       "license": "ISC",
 594 |       "dependencies": {
 595 |         "once": "^1.3.0",
 596 |         "wrappy": "1"
 597 |       }
 598 |     },
 599 |     "node_modules/inherits": {
 600 |       "version": "2.0.4",
 601 |       "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
 602 |       "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
 603 |       "dev": true,
 604 |       "license": "ISC"
 605 |     },
 606 |     "node_modules/is-fullwidth-code-point": {
 607 |       "version": "3.0.0",
 608 |       "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
 609 |       "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
 610 |       "dev": true,
 611 |       "license": "MIT",
 612 |       "engines": {
 613 |         "node": ">=8"
 614 |       }
 615 |     },
 616 |     "node_modules/isexe": {
 617 |       "version": "2.0.0",
 618 |       "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
 619 |       "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
 620 |       "dev": true,
 621 |       "license": "ISC"
 622 |     },
 623 |     "node_modules/jackspeak": {
 624 |       "version": "4.0.1",
 625 |       "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-4.0.1.tgz",
 626 |       "integrity": "sha512-cub8rahkh0Q/bw1+GxP7aeSe29hHHn2V4m29nnDlvCdlgU+3UGxkZp7Z53jLUdpX3jdTO0nJZUDl3xvbWc2Xog==",
 627 |       "dev": true,
 628 |       "license": "BlueOak-1.0.0",
 629 |       "dependencies": {
 630 |         "@isaacs/cliui": "^8.0.2"
 631 |       },
 632 |       "engines": {
 633 |         "node": "20 || >=22"
 634 |       },
 635 |       "funding": {
 636 |         "url": "https://github.com/sponsors/isaacs"
 637 |       },
 638 |       "optionalDependencies": {
 639 |         "@pkgjs/parseargs": "^0.11.0"
 640 |       }
 641 |     },
 642 |     "node_modules/json-schema-traverse": {
 643 |       "version": "1.0.0",
 644 |       "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
 645 |       "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
 646 |       "dev": true,
 647 |       "license": "MIT"
 648 |     },
 649 |     "node_modules/lru-cache": {
 650 |       "version": "11.0.0",
 651 |       "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.0.0.tgz",
 652 |       "integrity": "sha512-Qv32eSV1RSCfhY3fpPE2GNZ8jgM9X7rdAfemLWqTUxwiyIC4jJ6Sy0fZ8H+oLWevO6i4/bizg7c8d8i6bxrzbA==",
 653 |       "dev": true,
 654 |       "license": "ISC",
 655 |       "engines": {
 656 |         "node": "20 || >=22"
 657 |       }
 658 |     },
 659 |     "node_modules/make-error": {
 660 |       "version": "1.3.6",
 661 |       "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
 662 |       "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
 663 |       "dev": true,
 664 |       "license": "ISC"
 665 |     },
 666 |     "node_modules/minimatch": {
 667 |       "version": "10.0.1",
 668 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.0.1.tgz",
 669 |       "integrity": "sha512-ethXTt3SGGR+95gudmqJ1eNhRO7eGEGIgYA9vnPatK4/etz2MEVDno5GMCibdMTuBMyElzIlgxMna3K94XDIDQ==",
 670 |       "dev": true,
 671 |       "license": "ISC",
 672 |       "dependencies": {
 673 |         "brace-expansion": "^2.0.1"
 674 |       },
 675 |       "engines": {
 676 |         "node": "20 || >=22"
 677 |       },
 678 |       "funding": {
 679 |         "url": "https://github.com/sponsors/isaacs"
 680 |       }
 681 |     },
 682 |     "node_modules/minipass": {
 683 |       "version": "7.1.2",
 684 |       "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
 685 |       "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
 686 |       "dev": true,
 687 |       "license": "ISC",
 688 |       "engines": {
 689 |         "node": ">=16 || 14 >=14.17"
 690 |       }
 691 |     },
 692 |     "node_modules/once": {
 693 |       "version": "1.4.0",
 694 |       "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
 695 |       "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
 696 |       "dev": true,
 697 |       "license": "ISC",
 698 |       "dependencies": {
 699 |         "wrappy": "1"
 700 |       }
 701 |     },
 702 |     "node_modules/package-json-from-dist": {
 703 |       "version": "1.0.0",
 704 |       "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.0.tgz",
 705 |       "integrity": "sha512-dATvCeZN/8wQsGywez1mzHtTlP22H8OEfPrVMLNr4/eGa+ijtLn/6M5f0dY8UKNrC2O9UCU6SSoG3qRKnt7STw==",
 706 |       "dev": true,
 707 |       "license": "BlueOak-1.0.0"
 708 |     },
 709 |     "node_modules/path-equal": {
 710 |       "version": "1.2.5",
 711 |       "resolved": "https://registry.npmjs.org/path-equal/-/path-equal-1.2.5.tgz",
 712 |       "integrity": "sha512-i73IctDr3F2W+bsOWDyyVm/lqsXO47aY9nsFZUjTT/aljSbkxHxxCoyZ9UUrM8jK0JVod+An+rl48RCsvWM+9g==",
 713 |       "dev": true,
 714 |       "license": "MIT"
 715 |     },
 716 |     "node_modules/path-is-absolute": {
 717 |       "version": "1.0.1",
 718 |       "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
 719 |       "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
 720 |       "dev": true,
 721 |       "license": "MIT",
 722 |       "engines": {
 723 |         "node": ">=0.10.0"
 724 |       }
 725 |     },
 726 |     "node_modules/path-key": {
 727 |       "version": "3.1.1",
 728 |       "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
 729 |       "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
 730 |       "dev": true,
 731 |       "license": "MIT",
 732 |       "engines": {
 733 |         "node": ">=8"
 734 |       }
 735 |     },
 736 |     "node_modules/path-scurry": {
 737 |       "version": "2.0.0",
 738 |       "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-2.0.0.tgz",
 739 |       "integrity": "sha512-ypGJsmGtdXUOeM5u93TyeIEfEhM6s+ljAhrk5vAvSx8uyY/02OvrZnA0YNGUrPXfpJMgI1ODd3nwz8Npx4O4cg==",
 740 |       "dev": true,
 741 |       "license": "BlueOak-1.0.0",
 742 |       "dependencies": {
 743 |         "lru-cache": "^11.0.0",
 744 |         "minipass": "^7.1.2"
 745 |       },
 746 |       "engines": {
 747 |         "node": "20 || >=22"
 748 |       },
 749 |       "funding": {
 750 |         "url": "https://github.com/sponsors/isaacs"
 751 |       }
 752 |     },
 753 |     "node_modules/prettier": {
 754 |       "version": "3.4.2",
 755 |       "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.4.2.tgz",
 756 |       "integrity": "sha512-e9MewbtFo+Fevyuxn/4rrcDAaq0IYxPGLvObpQjiZBMAzB9IGmzlnG9RZy3FFas+eBMu2vA0CszMeduow5dIuQ==",
 757 |       "dev": true,
 758 |       "license": "MIT",
 759 |       "bin": {
 760 |         "prettier": "bin/prettier.cjs"
 761 |       },
 762 |       "engines": {
 763 |         "node": ">=14"
 764 |       },
 765 |       "funding": {
 766 |         "url": "https://github.com/prettier/prettier?sponsor=1"
 767 |       }
 768 |     },
 769 |     "node_modules/require-directory": {
 770 |       "version": "2.1.1",
 771 |       "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
 772 |       "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
 773 |       "dev": true,
 774 |       "license": "MIT",
 775 |       "engines": {
 776 |         "node": ">=0.10.0"
 777 |       }
 778 |     },
 779 |     "node_modules/require-from-string": {
 780 |       "version": "2.0.2",
 781 |       "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
 782 |       "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
 783 |       "dev": true,
 784 |       "license": "MIT",
 785 |       "engines": {
 786 |         "node": ">=0.10.0"
 787 |       }
 788 |     },
 789 |     "node_modules/resolve-pkg-maps": {
 790 |       "version": "1.0.0",
 791 |       "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
 792 |       "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
 793 |       "dev": true,
 794 |       "license": "MIT",
 795 |       "funding": {
 796 |         "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
 797 |       }
 798 |     },
 799 |     "node_modules/safe-stable-stringify": {
 800 |       "version": "2.5.0",
 801 |       "resolved": "https://registry.npmjs.org/safe-stable-stringify/-/safe-stable-stringify-2.5.0.tgz",
 802 |       "integrity": "sha512-b3rppTKm9T+PsVCBEOUR46GWI7fdOs00VKZ1+9c1EWDaDMvjQc6tUwuFyIprgGgTcWoVHSKrU8H31ZHA2e0RHA==",
 803 |       "dev": true,
 804 |       "license": "MIT",
 805 |       "engines": {
 806 |         "node": ">=10"
 807 |       }
 808 |     },
 809 |     "node_modules/shebang-command": {
 810 |       "version": "2.0.0",
 811 |       "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
 812 |       "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
 813 |       "dev": true,
 814 |       "license": "MIT",
 815 |       "dependencies": {
 816 |         "shebang-regex": "^3.0.0"
 817 |       },
 818 |       "engines": {
 819 |         "node": ">=8"
 820 |       }
 821 |     },
 822 |     "node_modules/shebang-regex": {
 823 |       "version": "3.0.0",
 824 |       "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
 825 |       "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
 826 |       "dev": true,
 827 |       "license": "MIT",
 828 |       "engines": {
 829 |         "node": ">=8"
 830 |       }
 831 |     },
 832 |     "node_modules/signal-exit": {
 833 |       "version": "4.1.0",
 834 |       "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
 835 |       "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
 836 |       "dev": true,
 837 |       "license": "ISC",
 838 |       "engines": {
 839 |         "node": ">=14"
 840 |       },
 841 |       "funding": {
 842 |         "url": "https://github.com/sponsors/isaacs"
 843 |       }
 844 |     },
 845 |     "node_modules/string-width": {
 846 |       "version": "4.2.3",
 847 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
 848 |       "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
 849 |       "dev": true,
 850 |       "license": "MIT",
 851 |       "dependencies": {
 852 |         "emoji-regex": "^8.0.0",
 853 |         "is-fullwidth-code-point": "^3.0.0",
 854 |         "strip-ansi": "^6.0.1"
 855 |       },
 856 |       "engines": {
 857 |         "node": ">=8"
 858 |       }
 859 |     },
 860 |     "node_modules/string-width-cjs": {
 861 |       "name": "string-width",
 862 |       "version": "4.2.3",
 863 |       "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
 864 |       "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
 865 |       "dev": true,
 866 |       "license": "MIT",
 867 |       "dependencies": {
 868 |         "emoji-regex": "^8.0.0",
 869 |         "is-fullwidth-code-point": "^3.0.0",
 870 |         "strip-ansi": "^6.0.1"
 871 |       },
 872 |       "engines": {
 873 |         "node": ">=8"
 874 |       }
 875 |     },
 876 |     "node_modules/strip-ansi": {
 877 |       "version": "6.0.1",
 878 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
 879 |       "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
 880 |       "dev": true,
 881 |       "license": "MIT",
 882 |       "dependencies": {
 883 |         "ansi-regex": "^5.0.1"
 884 |       },
 885 |       "engines": {
 886 |         "node": ">=8"
 887 |       }
 888 |     },
 889 |     "node_modules/strip-ansi-cjs": {
 890 |       "name": "strip-ansi",
 891 |       "version": "6.0.1",
 892 |       "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
 893 |       "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
 894 |       "dev": true,
 895 |       "license": "MIT",
 896 |       "dependencies": {
 897 |         "ansi-regex": "^5.0.1"
 898 |       },
 899 |       "engines": {
 900 |         "node": ">=8"
 901 |       }
 902 |     },
 903 |     "node_modules/tsx": {
 904 |       "version": "4.19.1",
 905 |       "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.19.1.tgz",
 906 |       "integrity": "sha512-0flMz1lh74BR4wOvBjuh9olbnwqCPc35OOlfyzHba0Dc+QNUeWX/Gq2YTbnwcWPO3BMd8fkzRVrHcsR+a7z7rA==",
 907 |       "dev": true,
 908 |       "license": "MIT",
 909 |       "dependencies": {
 910 |         "esbuild": "~0.23.0",
 911 |         "get-tsconfig": "^4.7.5"
 912 |       },
 913 |       "bin": {
 914 |         "tsx": "dist/cli.mjs"
 915 |       },
 916 |       "engines": {
 917 |         "node": ">=18.0.0"
 918 |       },
 919 |       "optionalDependencies": {
 920 |         "fsevents": "~2.3.3"
 921 |       }
 922 |     },
 923 |     "node_modules/typescript": {
 924 |       "version": "5.6.2",
 925 |       "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.6.2.tgz",
 926 |       "integrity": "sha512-NW8ByodCSNCwZeghjN3o+JX5OFH0Ojg6sadjEKY4huZ52TqbJTJnDo5+Tw98lSy63NZvi4n+ez5m2u5d4PkZyw==",
 927 |       "dev": true,
 928 |       "license": "Apache-2.0",
 929 |       "bin": {
 930 |         "tsc": "bin/tsc",
 931 |         "tsserver": "bin/tsserver"
 932 |       },
 933 |       "engines": {
 934 |         "node": ">=14.17"
 935 |       }
 936 |     },
 937 |     "node_modules/typescript-json-schema": {
 938 |       "version": "0.65.1",
 939 |       "resolved": "https://registry.npmjs.org/typescript-json-schema/-/typescript-json-schema-0.65.1.tgz",
 940 |       "integrity": "sha512-tuGH7ff2jPaUYi6as3lHyHcKpSmXIqN7/mu50x3HlYn0EHzLpmt3nplZ7EuhUkO0eqDRc9GqWNkfjgBPIS9kxg==",
 941 |       "dev": true,
 942 |       "license": "BSD-3-Clause",
 943 |       "dependencies": {
 944 |         "@types/json-schema": "^7.0.9",
 945 |         "@types/node": "^18.11.9",
 946 |         "glob": "^7.1.7",
 947 |         "path-equal": "^1.2.5",
 948 |         "safe-stable-stringify": "^2.2.0",
 949 |         "ts-node": "^10.9.1",
 950 |         "typescript": "~5.5.0",
 951 |         "yargs": "^17.1.1"
 952 |       },
 953 |       "bin": {
 954 |         "typescript-json-schema": "bin/typescript-json-schema"
 955 |       }
 956 |     },
 957 |     "node_modules/typescript-json-schema/node_modules/brace-expansion": {
 958 |       "version": "1.1.11",
 959 |       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
 960 |       "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
 961 |       "dev": true,
 962 |       "license": "MIT",
 963 |       "dependencies": {
 964 |         "balanced-match": "^1.0.0",
 965 |         "concat-map": "0.0.1"
 966 |       }
 967 |     },
 968 |     "node_modules/typescript-json-schema/node_modules/glob": {
 969 |       "version": "7.2.3",
 970 |       "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
 971 |       "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
 972 |       "dev": true,
 973 |       "license": "ISC",
 974 |       "dependencies": {
 975 |         "fs.realpath": "^1.0.0",
 976 |         "inflight": "^1.0.4",
 977 |         "inherits": "2",
 978 |         "minimatch": "^3.1.1",
 979 |         "once": "^1.3.0",
 980 |         "path-is-absolute": "^1.0.0"
 981 |       },
 982 |       "engines": {
 983 |         "node": "*"
 984 |       },
 985 |       "funding": {
 986 |         "url": "https://github.com/sponsors/isaacs"
 987 |       }
 988 |     },
 989 |     "node_modules/typescript-json-schema/node_modules/minimatch": {
 990 |       "version": "3.1.2",
 991 |       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
 992 |       "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
 993 |       "dev": true,
 994 |       "license": "ISC",
 995 |       "dependencies": {
 996 |         "brace-expansion": "^1.1.7"
 997 |       },
 998 |       "engines": {
 999 |         "node": "*"
1000 |       }
1001 |     },
1002 |     "node_modules/typescript-json-schema/node_modules/ts-node": {
1003 |       "version": "10.9.2",
1004 |       "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
1005 |       "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
1006 |       "dev": true,
1007 |       "license": "MIT",
1008 |       "dependencies": {
1009 |         "@cspotcode/source-map-support": "^0.8.0",
1010 |         "@tsconfig/node10": "^1.0.7",
1011 |         "@tsconfig/node12": "^1.0.7",
1012 |         "@tsconfig/node14": "^1.0.0",
1013 |         "@tsconfig/node16": "^1.0.2",
1014 |         "acorn": "^8.4.1",
1015 |         "acorn-walk": "^8.1.1",
1016 |         "arg": "^4.1.0",
1017 |         "create-require": "^1.1.0",
1018 |         "diff": "^4.0.1",
1019 |         "make-error": "^1.1.1",
1020 |         "v8-compile-cache-lib": "^3.0.1",
1021 |         "yn": "3.1.1"
1022 |       },
1023 |       "bin": {
1024 |         "ts-node": "dist/bin.js",
1025 |         "ts-node-cwd": "dist/bin-cwd.js",
1026 |         "ts-node-esm": "dist/bin-esm.js",
1027 |         "ts-node-script": "dist/bin-script.js",
1028 |         "ts-node-transpile-only": "dist/bin-transpile.js",
1029 |         "ts-script": "dist/bin-script-deprecated.js"
1030 |       },
1031 |       "peerDependencies": {
1032 |         "@swc/core": ">=1.2.50",
1033 |         "@swc/wasm": ">=1.2.50",
1034 |         "@types/node": "*",
1035 |         "typescript": ">=2.7"
1036 |       },
1037 |       "peerDependenciesMeta": {
1038 |         "@swc/core": {
1039 |           "optional": true
1040 |         },
1041 |         "@swc/wasm": {
1042 |           "optional": true
1043 |         }
1044 |       }
1045 |     },
1046 |     "node_modules/typescript-json-schema/node_modules/typescript": {
1047 |       "version": "5.5.4",
1048 |       "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.5.4.tgz",
1049 |       "integrity": "sha512-Mtq29sKDAEYP7aljRgtPOpTvOfbwRWlS6dPRzwjdE+C0R4brX/GUyhHSecbHMFLNBLcJIPt9nl9yG5TZ1weH+Q==",
1050 |       "dev": true,
1051 |       "license": "Apache-2.0",
1052 |       "bin": {
1053 |         "tsc": "bin/tsc",
1054 |         "tsserver": "bin/tsserver"
1055 |       },
1056 |       "engines": {
1057 |         "node": ">=14.17"
1058 |       }
1059 |     },
1060 |     "node_modules/undici-types": {
1061 |       "version": "5.26.5",
1062 |       "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
1063 |       "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
1064 |       "dev": true,
1065 |       "license": "MIT"
1066 |     },
1067 |     "node_modules/v8-compile-cache-lib": {
1068 |       "version": "3.0.1",
1069 |       "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
1070 |       "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
1071 |       "dev": true,
1072 |       "license": "MIT"
1073 |     },
1074 |     "node_modules/which": {
1075 |       "version": "2.0.2",
1076 |       "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
1077 |       "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
1078 |       "dev": true,
1079 |       "license": "ISC",
1080 |       "dependencies": {
1081 |         "isexe": "^2.0.0"
1082 |       },
1083 |       "bin": {
1084 |         "node-which": "bin/node-which"
1085 |       },
1086 |       "engines": {
1087 |         "node": ">= 8"
1088 |       }
1089 |     },
1090 |     "node_modules/wrap-ansi": {
1091 |       "version": "7.0.0",
1092 |       "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
1093 |       "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
1094 |       "dev": true,
1095 |       "license": "MIT",
1096 |       "dependencies": {
1097 |         "ansi-styles": "^4.0.0",
1098 |         "string-width": "^4.1.0",
1099 |         "strip-ansi": "^6.0.0"
1100 |       },
1101 |       "engines": {
1102 |         "node": ">=10"
1103 |       },
1104 |       "funding": {
1105 |         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
1106 |       }
1107 |     },
1108 |     "node_modules/wrap-ansi-cjs": {
1109 |       "name": "wrap-ansi",
1110 |       "version": "7.0.0",
1111 |       "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
1112 |       "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
1113 |       "dev": true,
1114 |       "license": "MIT",
1115 |       "dependencies": {
1116 |         "ansi-styles": "^4.0.0",
1117 |         "string-width": "^4.1.0",
1118 |         "strip-ansi": "^6.0.0"
1119 |       },
1120 |       "engines": {
1121 |         "node": ">=10"
1122 |       },
1123 |       "funding": {
1124 |         "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
1125 |       }
1126 |     },
1127 |     "node_modules/wrappy": {
1128 |       "version": "1.0.2",
1129 |       "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
1130 |       "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
1131 |       "dev": true,
1132 |       "license": "ISC"
1133 |     },
1134 |     "node_modules/y18n": {
1135 |       "version": "5.0.8",
1136 |       "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
1137 |       "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
1138 |       "dev": true,
1139 |       "license": "ISC",
1140 |       "engines": {
1141 |         "node": ">=10"
1142 |       }
1143 |     },
1144 |     "node_modules/yargs": {
1145 |       "version": "17.7.2",
1146 |       "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
1147 |       "integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
1148 |       "dev": true,
1149 |       "license": "MIT",
1150 |       "dependencies": {
1151 |         "cliui": "^8.0.1",
1152 |         "escalade": "^3.1.1",
1153 |         "get-caller-file": "^2.0.5",
1154 |         "require-directory": "^2.1.1",
1155 |         "string-width": "^4.2.3",
1156 |         "y18n": "^5.0.5",
1157 |         "yargs-parser": "^21.1.1"
1158 |       },
1159 |       "engines": {
1160 |         "node": ">=12"
1161 |       }
1162 |     },
1163 |     "node_modules/yargs-parser": {
1164 |       "version": "21.1.1",
1165 |       "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
1166 |       "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
1167 |       "dev": true,
1168 |       "license": "ISC",
1169 |       "engines": {
1170 |         "node": ">=12"
1171 |       }
1172 |     },
1173 |     "node_modules/yn": {
1174 |       "version": "3.1.1",
1175 |       "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
1176 |       "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
1177 |       "dev": true,
1178 |       "license": "MIT",
1179 |       "engines": {
1180 |         "node": ">=6"
1181 |       }
1182 |     }
1183 |   }
1184 | }
1185 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/specification",
 3 |   "private": true,
 4 |   "version": "0.1.0",
 5 |   "description": "Model Context Protocol specification and protocol schema",
 6 |   "license": "MIT",
 7 |   "author": "Anthropic, PBC (https://anthropic.com)",
 8 |   "homepage": "https://modelcontextprotocol.io",
 9 |   "bugs": "https://github.com/modelcontextprotocol/specification/issues",
10 |   "engines": {
11 |     "node": ">=20"
12 |   },
13 |   "prettier": {
14 |     "overrides": [
15 |       {
16 |         "files": "*.md",
17 |         "options": {
18 |           "printWidth": 89,
19 |           "proseWrap": "always"
20 |         }
21 |       }
22 |     ]
23 |   },
24 |   "scripts": {
25 |     "validate:schema": "tsc --noEmit schema/**/*.ts",
26 |     "generate:json": "for f in schema/*/schema.ts; do typescript-json-schema --defaultNumberType integer --required \"$f\" \"*\" -o \"${f%ts}json\"; done",
27 |     "serve:docs": "hugo --source site/ server --logLevel debug --disableFastRender",
28 |     "format": "prettier --write \"**/*.md\"",
29 |     "format:check": "prettier --check \"**/*.md\""
30 |   },
31 |   "devDependencies": {
32 |     "ajv": "^8.17.1",
33 |     "ajv-formats": "^3.0.1",
34 |     "glob": "^11.0.0",
35 |     "prettier": "^3.4.2",
36 |     "tsx": "^4.19.1",
37 |     "typescript": "^5.6.2",
38 |     "typescript-json-schema": "^0.65.1"
39 |   },
40 |   "resolutions": {
41 |     "fast-json-patch": "^3.1.1"
42 |   }
43 | }
44 | 


--------------------------------------------------------------------------------
/schema/2024-11-05/schema.json:
--------------------------------------------------------------------------------
   1 | {
   2 |     "$schema": "http://json-schema.org/draft-07/schema#",
   3 |     "definitions": {
   4 |         "Annotated": {
   5 |             "description": "Base for objects that include optional annotations for the client. The client can use annotations to inform how objects are used or displayed",
   6 |             "properties": {
   7 |                 "annotations": {
   8 |                     "properties": {
   9 |                         "audience": {
  10 |                             "description": "Describes who the intended customer of this object or data is.\n\nIt can include multiple entries to indicate content useful for multiple audiences (e.g., `[\"user\", \"assistant\"]`).",
  11 |                             "items": {
  12 |                                 "$ref": "#/definitions/Role"
  13 |                             },
  14 |                             "type": "array"
  15 |                         },
  16 |                         "priority": {
  17 |                             "description": "Describes how important this data is for operating the server.\n\nA value of 1 means \"most important,\" and indicates that the data is\neffectively required, while 0 means \"least important,\" and indicates that\nthe data is entirely optional.",
  18 |                             "maximum": 1,
  19 |                             "minimum": 0,
  20 |                             "type": "number"
  21 |                         }
  22 |                     },
  23 |                     "type": "object"
  24 |                 }
  25 |             },
  26 |             "type": "object"
  27 |         },
  28 |         "BlobResourceContents": {
  29 |             "properties": {
  30 |                 "blob": {
  31 |                     "description": "A base64-encoded string representing the binary data of the item.",
  32 |                     "format": "byte",
  33 |                     "type": "string"
  34 |                 },
  35 |                 "mimeType": {
  36 |                     "description": "The MIME type of this resource, if known.",
  37 |                     "type": "string"
  38 |                 },
  39 |                 "uri": {
  40 |                     "description": "The URI of this resource.",
  41 |                     "format": "uri",
  42 |                     "type": "string"
  43 |                 }
  44 |             },
  45 |             "required": [
  46 |                 "blob",
  47 |                 "uri"
  48 |             ],
  49 |             "type": "object"
  50 |         },
  51 |         "CallToolRequest": {
  52 |             "description": "Used by the client to invoke a tool provided by the server.",
  53 |             "properties": {
  54 |                 "method": {
  55 |                     "const": "tools/call",
  56 |                     "type": "string"
  57 |                 },
  58 |                 "params": {
  59 |                     "properties": {
  60 |                         "arguments": {
  61 |                             "additionalProperties": {},
  62 |                             "type": "object"
  63 |                         },
  64 |                         "name": {
  65 |                             "type": "string"
  66 |                         }
  67 |                     },
  68 |                     "required": [
  69 |                         "name"
  70 |                     ],
  71 |                     "type": "object"
  72 |                 }
  73 |             },
  74 |             "required": [
  75 |                 "method",
  76 |                 "params"
  77 |             ],
  78 |             "type": "object"
  79 |         },
  80 |         "CallToolResult": {
  81 |             "description": "The server's response to a tool call.\n\nAny errors that originate from the tool SHOULD be reported inside the result\nobject, with `isError` set to true, _not_ as an MCP protocol-level error\nresponse. Otherwise, the LLM would not be able to see that an error occurred\nand self-correct.\n\nHowever, any errors in _finding_ the tool, an error indicating that the\nserver does not support tool calls, or any other exceptional conditions,\nshould be reported as an MCP error response.",
  82 |             "properties": {
  83 |                 "_meta": {
  84 |                     "additionalProperties": {},
  85 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
  86 |                     "type": "object"
  87 |                 },
  88 |                 "content": {
  89 |                     "items": {
  90 |                         "anyOf": [
  91 |                             {
  92 |                                 "$ref": "#/definitions/TextContent"
  93 |                             },
  94 |                             {
  95 |                                 "$ref": "#/definitions/ImageContent"
  96 |                             },
  97 |                             {
  98 |                                 "$ref": "#/definitions/EmbeddedResource"
  99 |                             }
 100 |                         ]
 101 |                     },
 102 |                     "type": "array"
 103 |                 },
 104 |                 "isError": {
 105 |                     "description": "Whether the tool call ended in an error.\n\nIf not set, this is assumed to be false (the call was successful).",
 106 |                     "type": "boolean"
 107 |                 }
 108 |             },
 109 |             "required": [
 110 |                 "content"
 111 |             ],
 112 |             "type": "object"
 113 |         },
 114 |         "CancelledNotification": {
 115 |             "description": "This notification can be sent by either side to indicate that it is cancelling a previously-issued request.\n\nThe request SHOULD still be in-flight, but due to communication latency, it is always possible that this notification MAY arrive after the request has already finished.\n\nThis notification indicates that the result will be unused, so any associated processing SHOULD cease.\n\nA client MUST NOT attempt to cancel its `initialize` request.",
 116 |             "properties": {
 117 |                 "method": {
 118 |                     "const": "notifications/cancelled",
 119 |                     "type": "string"
 120 |                 },
 121 |                 "params": {
 122 |                     "properties": {
 123 |                         "reason": {
 124 |                             "description": "An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.",
 125 |                             "type": "string"
 126 |                         },
 127 |                         "requestId": {
 128 |                             "$ref": "#/definitions/RequestId",
 129 |                             "description": "The ID of the request to cancel.\n\nThis MUST correspond to the ID of a request previously issued in the same direction."
 130 |                         }
 131 |                     },
 132 |                     "required": [
 133 |                         "requestId"
 134 |                     ],
 135 |                     "type": "object"
 136 |                 }
 137 |             },
 138 |             "required": [
 139 |                 "method",
 140 |                 "params"
 141 |             ],
 142 |             "type": "object"
 143 |         },
 144 |         "ClientCapabilities": {
 145 |             "description": "Capabilities a client may support. Known capabilities are defined here, in this schema, but this is not a closed set: any client can define its own, additional capabilities.",
 146 |             "properties": {
 147 |                 "experimental": {
 148 |                     "additionalProperties": {
 149 |                         "additionalProperties": true,
 150 |                         "properties": {},
 151 |                         "type": "object"
 152 |                     },
 153 |                     "description": "Experimental, non-standard capabilities that the client supports.",
 154 |                     "type": "object"
 155 |                 },
 156 |                 "roots": {
 157 |                     "description": "Present if the client supports listing roots.",
 158 |                     "properties": {
 159 |                         "listChanged": {
 160 |                             "description": "Whether the client supports notifications for changes to the roots list.",
 161 |                             "type": "boolean"
 162 |                         }
 163 |                     },
 164 |                     "type": "object"
 165 |                 },
 166 |                 "sampling": {
 167 |                     "additionalProperties": true,
 168 |                     "description": "Present if the client supports sampling from an LLM.",
 169 |                     "properties": {},
 170 |                     "type": "object"
 171 |                 }
 172 |             },
 173 |             "type": "object"
 174 |         },
 175 |         "ClientNotification": {
 176 |             "anyOf": [
 177 |                 {
 178 |                     "$ref": "#/definitions/CancelledNotification"
 179 |                 },
 180 |                 {
 181 |                     "$ref": "#/definitions/InitializedNotification"
 182 |                 },
 183 |                 {
 184 |                     "$ref": "#/definitions/ProgressNotification"
 185 |                 },
 186 |                 {
 187 |                     "$ref": "#/definitions/RootsListChangedNotification"
 188 |                 }
 189 |             ]
 190 |         },
 191 |         "ClientRequest": {
 192 |             "anyOf": [
 193 |                 {
 194 |                     "$ref": "#/definitions/InitializeRequest"
 195 |                 },
 196 |                 {
 197 |                     "$ref": "#/definitions/PingRequest"
 198 |                 },
 199 |                 {
 200 |                     "$ref": "#/definitions/ListResourcesRequest"
 201 |                 },
 202 |                 {
 203 |                     "$ref": "#/definitions/ListResourceTemplatesRequest"
 204 |                 },
 205 |                 {
 206 |                     "$ref": "#/definitions/ReadResourceRequest"
 207 |                 },
 208 |                 {
 209 |                     "$ref": "#/definitions/SubscribeRequest"
 210 |                 },
 211 |                 {
 212 |                     "$ref": "#/definitions/UnsubscribeRequest"
 213 |                 },
 214 |                 {
 215 |                     "$ref": "#/definitions/ListPromptsRequest"
 216 |                 },
 217 |                 {
 218 |                     "$ref": "#/definitions/GetPromptRequest"
 219 |                 },
 220 |                 {
 221 |                     "$ref": "#/definitions/ListToolsRequest"
 222 |                 },
 223 |                 {
 224 |                     "$ref": "#/definitions/CallToolRequest"
 225 |                 },
 226 |                 {
 227 |                     "$ref": "#/definitions/SetLevelRequest"
 228 |                 },
 229 |                 {
 230 |                     "$ref": "#/definitions/CompleteRequest"
 231 |                 }
 232 |             ]
 233 |         },
 234 |         "ClientResult": {
 235 |             "anyOf": [
 236 |                 {
 237 |                     "$ref": "#/definitions/Result"
 238 |                 },
 239 |                 {
 240 |                     "$ref": "#/definitions/CreateMessageResult"
 241 |                 },
 242 |                 {
 243 |                     "$ref": "#/definitions/ListRootsResult"
 244 |                 }
 245 |             ]
 246 |         },
 247 |         "CompleteRequest": {
 248 |             "description": "A request from the client to the server, to ask for completion options.",
 249 |             "properties": {
 250 |                 "method": {
 251 |                     "const": "completion/complete",
 252 |                     "type": "string"
 253 |                 },
 254 |                 "params": {
 255 |                     "properties": {
 256 |                         "argument": {
 257 |                             "description": "The argument's information",
 258 |                             "properties": {
 259 |                                 "name": {
 260 |                                     "description": "The name of the argument",
 261 |                                     "type": "string"
 262 |                                 },
 263 |                                 "value": {
 264 |                                     "description": "The value of the argument to use for completion matching.",
 265 |                                     "type": "string"
 266 |                                 }
 267 |                             },
 268 |                             "required": [
 269 |                                 "name",
 270 |                                 "value"
 271 |                             ],
 272 |                             "type": "object"
 273 |                         },
 274 |                         "ref": {
 275 |                             "anyOf": [
 276 |                                 {
 277 |                                     "$ref": "#/definitions/PromptReference"
 278 |                                 },
 279 |                                 {
 280 |                                     "$ref": "#/definitions/ResourceReference"
 281 |                                 }
 282 |                             ]
 283 |                         }
 284 |                     },
 285 |                     "required": [
 286 |                         "argument",
 287 |                         "ref"
 288 |                     ],
 289 |                     "type": "object"
 290 |                 }
 291 |             },
 292 |             "required": [
 293 |                 "method",
 294 |                 "params"
 295 |             ],
 296 |             "type": "object"
 297 |         },
 298 |         "CompleteResult": {
 299 |             "description": "The server's response to a completion/complete request",
 300 |             "properties": {
 301 |                 "_meta": {
 302 |                     "additionalProperties": {},
 303 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 304 |                     "type": "object"
 305 |                 },
 306 |                 "completion": {
 307 |                     "properties": {
 308 |                         "hasMore": {
 309 |                             "description": "Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.",
 310 |                             "type": "boolean"
 311 |                         },
 312 |                         "total": {
 313 |                             "description": "The total number of completion options available. This can exceed the number of values actually sent in the response.",
 314 |                             "type": "integer"
 315 |                         },
 316 |                         "values": {
 317 |                             "description": "An array of completion values. Must not exceed 100 items.",
 318 |                             "items": {
 319 |                                 "type": "string"
 320 |                             },
 321 |                             "type": "array"
 322 |                         }
 323 |                     },
 324 |                     "required": [
 325 |                         "values"
 326 |                     ],
 327 |                     "type": "object"
 328 |                 }
 329 |             },
 330 |             "required": [
 331 |                 "completion"
 332 |             ],
 333 |             "type": "object"
 334 |         },
 335 |         "CreateMessageRequest": {
 336 |             "description": "A request from the server to sample an LLM via the client. The client has full discretion over which model to select. The client should also inform the user before beginning sampling, to allow them to inspect the request (human in the loop) and decide whether to approve it.",
 337 |             "properties": {
 338 |                 "method": {
 339 |                     "const": "sampling/createMessage",
 340 |                     "type": "string"
 341 |                 },
 342 |                 "params": {
 343 |                     "properties": {
 344 |                         "includeContext": {
 345 |                             "description": "A request to include context from one or more MCP servers (including the caller), to be attached to the prompt. The client MAY ignore this request.",
 346 |                             "enum": [
 347 |                                 "allServers",
 348 |                                 "none",
 349 |                                 "thisServer"
 350 |                             ],
 351 |                             "type": "string"
 352 |                         },
 353 |                         "maxTokens": {
 354 |                             "description": "The maximum number of tokens to sample, as requested by the server. The client MAY choose to sample fewer tokens than requested.",
 355 |                             "type": "integer"
 356 |                         },
 357 |                         "messages": {
 358 |                             "items": {
 359 |                                 "$ref": "#/definitions/SamplingMessage"
 360 |                             },
 361 |                             "type": "array"
 362 |                         },
 363 |                         "metadata": {
 364 |                             "additionalProperties": true,
 365 |                             "description": "Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.",
 366 |                             "properties": {},
 367 |                             "type": "object"
 368 |                         },
 369 |                         "modelPreferences": {
 370 |                             "$ref": "#/definitions/ModelPreferences",
 371 |                             "description": "The server's preferences for which model to select. The client MAY ignore these preferences."
 372 |                         },
 373 |                         "stopSequences": {
 374 |                             "items": {
 375 |                                 "type": "string"
 376 |                             },
 377 |                             "type": "array"
 378 |                         },
 379 |                         "systemPrompt": {
 380 |                             "description": "An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.",
 381 |                             "type": "string"
 382 |                         },
 383 |                         "temperature": {
 384 |                             "type": "number"
 385 |                         }
 386 |                     },
 387 |                     "required": [
 388 |                         "maxTokens",
 389 |                         "messages"
 390 |                     ],
 391 |                     "type": "object"
 392 |                 }
 393 |             },
 394 |             "required": [
 395 |                 "method",
 396 |                 "params"
 397 |             ],
 398 |             "type": "object"
 399 |         },
 400 |         "CreateMessageResult": {
 401 |             "description": "The client's response to a sampling/create_message request from the server. The client should inform the user before returning the sampled message, to allow them to inspect the response (human in the loop) and decide whether to allow the server to see it.",
 402 |             "properties": {
 403 |                 "_meta": {
 404 |                     "additionalProperties": {},
 405 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 406 |                     "type": "object"
 407 |                 },
 408 |                 "content": {
 409 |                     "anyOf": [
 410 |                         {
 411 |                             "$ref": "#/definitions/TextContent"
 412 |                         },
 413 |                         {
 414 |                             "$ref": "#/definitions/ImageContent"
 415 |                         }
 416 |                     ]
 417 |                 },
 418 |                 "model": {
 419 |                     "description": "The name of the model that generated the message.",
 420 |                     "type": "string"
 421 |                 },
 422 |                 "role": {
 423 |                     "$ref": "#/definitions/Role"
 424 |                 },
 425 |                 "stopReason": {
 426 |                     "description": "The reason why sampling stopped, if known.",
 427 |                     "type": "string"
 428 |                 }
 429 |             },
 430 |             "required": [
 431 |                 "content",
 432 |                 "model",
 433 |                 "role"
 434 |             ],
 435 |             "type": "object"
 436 |         },
 437 |         "Cursor": {
 438 |             "description": "An opaque token used to represent a cursor for pagination.",
 439 |             "type": "string"
 440 |         },
 441 |         "EmbeddedResource": {
 442 |             "description": "The contents of a resource, embedded into a prompt or tool call result.\n\nIt is up to the client how best to render embedded resources for the benefit\nof the LLM and/or the user.",
 443 |             "properties": {
 444 |                 "annotations": {
 445 |                     "properties": {
 446 |                         "audience": {
 447 |                             "description": "Describes who the intended customer of this object or data is.\n\nIt can include multiple entries to indicate content useful for multiple audiences (e.g., `[\"user\", \"assistant\"]`).",
 448 |                             "items": {
 449 |                                 "$ref": "#/definitions/Role"
 450 |                             },
 451 |                             "type": "array"
 452 |                         },
 453 |                         "priority": {
 454 |                             "description": "Describes how important this data is for operating the server.\n\nA value of 1 means \"most important,\" and indicates that the data is\neffectively required, while 0 means \"least important,\" and indicates that\nthe data is entirely optional.",
 455 |                             "maximum": 1,
 456 |                             "minimum": 0,
 457 |                             "type": "number"
 458 |                         }
 459 |                     },
 460 |                     "type": "object"
 461 |                 },
 462 |                 "resource": {
 463 |                     "anyOf": [
 464 |                         {
 465 |                             "$ref": "#/definitions/TextResourceContents"
 466 |                         },
 467 |                         {
 468 |                             "$ref": "#/definitions/BlobResourceContents"
 469 |                         }
 470 |                     ]
 471 |                 },
 472 |                 "type": {
 473 |                     "const": "resource",
 474 |                     "type": "string"
 475 |                 }
 476 |             },
 477 |             "required": [
 478 |                 "resource",
 479 |                 "type"
 480 |             ],
 481 |             "type": "object"
 482 |         },
 483 |         "EmptyResult": {
 484 |             "$ref": "#/definitions/Result"
 485 |         },
 486 |         "GetPromptRequest": {
 487 |             "description": "Used by the client to get a prompt provided by the server.",
 488 |             "properties": {
 489 |                 "method": {
 490 |                     "const": "prompts/get",
 491 |                     "type": "string"
 492 |                 },
 493 |                 "params": {
 494 |                     "properties": {
 495 |                         "arguments": {
 496 |                             "additionalProperties": {
 497 |                                 "type": "string"
 498 |                             },
 499 |                             "description": "Arguments to use for templating the prompt.",
 500 |                             "type": "object"
 501 |                         },
 502 |                         "name": {
 503 |                             "description": "The name of the prompt or prompt template.",
 504 |                             "type": "string"
 505 |                         }
 506 |                     },
 507 |                     "required": [
 508 |                         "name"
 509 |                     ],
 510 |                     "type": "object"
 511 |                 }
 512 |             },
 513 |             "required": [
 514 |                 "method",
 515 |                 "params"
 516 |             ],
 517 |             "type": "object"
 518 |         },
 519 |         "GetPromptResult": {
 520 |             "description": "The server's response to a prompts/get request from the client.",
 521 |             "properties": {
 522 |                 "_meta": {
 523 |                     "additionalProperties": {},
 524 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 525 |                     "type": "object"
 526 |                 },
 527 |                 "description": {
 528 |                     "description": "An optional description for the prompt.",
 529 |                     "type": "string"
 530 |                 },
 531 |                 "messages": {
 532 |                     "items": {
 533 |                         "$ref": "#/definitions/PromptMessage"
 534 |                     },
 535 |                     "type": "array"
 536 |                 }
 537 |             },
 538 |             "required": [
 539 |                 "messages"
 540 |             ],
 541 |             "type": "object"
 542 |         },
 543 |         "ImageContent": {
 544 |             "description": "An image provided to or from an LLM.",
 545 |             "properties": {
 546 |                 "annotations": {
 547 |                     "properties": {
 548 |                         "audience": {
 549 |                             "description": "Describes who the intended customer of this object or data is.\n\nIt can include multiple entries to indicate content useful for multiple audiences (e.g., `[\"user\", \"assistant\"]`).",
 550 |                             "items": {
 551 |                                 "$ref": "#/definitions/Role"
 552 |                             },
 553 |                             "type": "array"
 554 |                         },
 555 |                         "priority": {
 556 |                             "description": "Describes how important this data is for operating the server.\n\nA value of 1 means \"most important,\" and indicates that the data is\neffectively required, while 0 means \"least important,\" and indicates that\nthe data is entirely optional.",
 557 |                             "maximum": 1,
 558 |                             "minimum": 0,
 559 |                             "type": "number"
 560 |                         }
 561 |                     },
 562 |                     "type": "object"
 563 |                 },
 564 |                 "data": {
 565 |                     "description": "The base64-encoded image data.",
 566 |                     "format": "byte",
 567 |                     "type": "string"
 568 |                 },
 569 |                 "mimeType": {
 570 |                     "description": "The MIME type of the image. Different providers may support different image types.",
 571 |                     "type": "string"
 572 |                 },
 573 |                 "type": {
 574 |                     "const": "image",
 575 |                     "type": "string"
 576 |                 }
 577 |             },
 578 |             "required": [
 579 |                 "data",
 580 |                 "mimeType",
 581 |                 "type"
 582 |             ],
 583 |             "type": "object"
 584 |         },
 585 |         "Implementation": {
 586 |             "description": "Describes the name and version of an MCP implementation.",
 587 |             "properties": {
 588 |                 "name": {
 589 |                     "type": "string"
 590 |                 },
 591 |                 "version": {
 592 |                     "type": "string"
 593 |                 }
 594 |             },
 595 |             "required": [
 596 |                 "name",
 597 |                 "version"
 598 |             ],
 599 |             "type": "object"
 600 |         },
 601 |         "InitializeRequest": {
 602 |             "description": "This request is sent from the client to the server when it first connects, asking it to begin initialization.",
 603 |             "properties": {
 604 |                 "method": {
 605 |                     "const": "initialize",
 606 |                     "type": "string"
 607 |                 },
 608 |                 "params": {
 609 |                     "properties": {
 610 |                         "capabilities": {
 611 |                             "$ref": "#/definitions/ClientCapabilities"
 612 |                         },
 613 |                         "clientInfo": {
 614 |                             "$ref": "#/definitions/Implementation"
 615 |                         },
 616 |                         "protocolVersion": {
 617 |                             "description": "The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.",
 618 |                             "type": "string"
 619 |                         }
 620 |                     },
 621 |                     "required": [
 622 |                         "capabilities",
 623 |                         "clientInfo",
 624 |                         "protocolVersion"
 625 |                     ],
 626 |                     "type": "object"
 627 |                 }
 628 |             },
 629 |             "required": [
 630 |                 "method",
 631 |                 "params"
 632 |             ],
 633 |             "type": "object"
 634 |         },
 635 |         "InitializeResult": {
 636 |             "description": "After receiving an initialize request from the client, the server sends this response.",
 637 |             "properties": {
 638 |                 "_meta": {
 639 |                     "additionalProperties": {},
 640 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 641 |                     "type": "object"
 642 |                 },
 643 |                 "capabilities": {
 644 |                     "$ref": "#/definitions/ServerCapabilities"
 645 |                 },
 646 |                 "instructions": {
 647 |                     "description": "Instructions describing how to use the server and its features.\n\nThis can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a \"hint\" to the model. For example, this information MAY be added to the system prompt.",
 648 |                     "type": "string"
 649 |                 },
 650 |                 "protocolVersion": {
 651 |                     "description": "The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.",
 652 |                     "type": "string"
 653 |                 },
 654 |                 "serverInfo": {
 655 |                     "$ref": "#/definitions/Implementation"
 656 |                 }
 657 |             },
 658 |             "required": [
 659 |                 "capabilities",
 660 |                 "protocolVersion",
 661 |                 "serverInfo"
 662 |             ],
 663 |             "type": "object"
 664 |         },
 665 |         "InitializedNotification": {
 666 |             "description": "This notification is sent from the client to the server after initialization has finished.",
 667 |             "properties": {
 668 |                 "method": {
 669 |                     "const": "notifications/initialized",
 670 |                     "type": "string"
 671 |                 },
 672 |                 "params": {
 673 |                     "additionalProperties": {},
 674 |                     "properties": {
 675 |                         "_meta": {
 676 |                             "additionalProperties": {},
 677 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
 678 |                             "type": "object"
 679 |                         }
 680 |                     },
 681 |                     "type": "object"
 682 |                 }
 683 |             },
 684 |             "required": [
 685 |                 "method"
 686 |             ],
 687 |             "type": "object"
 688 |         },
 689 |         "JSONRPCError": {
 690 |             "description": "A response to a request that indicates an error occurred.",
 691 |             "properties": {
 692 |                 "error": {
 693 |                     "properties": {
 694 |                         "code": {
 695 |                             "description": "The error type that occurred.",
 696 |                             "type": "integer"
 697 |                         },
 698 |                         "data": {
 699 |                             "description": "Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.)."
 700 |                         },
 701 |                         "message": {
 702 |                             "description": "A short description of the error. The message SHOULD be limited to a concise single sentence.",
 703 |                             "type": "string"
 704 |                         }
 705 |                     },
 706 |                     "required": [
 707 |                         "code",
 708 |                         "message"
 709 |                     ],
 710 |                     "type": "object"
 711 |                 },
 712 |                 "id": {
 713 |                     "$ref": "#/definitions/RequestId"
 714 |                 },
 715 |                 "jsonrpc": {
 716 |                     "const": "2.0",
 717 |                     "type": "string"
 718 |                 }
 719 |             },
 720 |             "required": [
 721 |                 "error",
 722 |                 "id",
 723 |                 "jsonrpc"
 724 |             ],
 725 |             "type": "object"
 726 |         },
 727 |         "JSONRPCMessage": {
 728 |             "anyOf": [
 729 |                 {
 730 |                     "$ref": "#/definitions/JSONRPCRequest"
 731 |                 },
 732 |                 {
 733 |                     "$ref": "#/definitions/JSONRPCNotification"
 734 |                 },
 735 |                 {
 736 |                     "$ref": "#/definitions/JSONRPCResponse"
 737 |                 },
 738 |                 {
 739 |                     "$ref": "#/definitions/JSONRPCError"
 740 |                 }
 741 |             ]
 742 |         },
 743 |         "JSONRPCNotification": {
 744 |             "description": "A notification which does not expect a response.",
 745 |             "properties": {
 746 |                 "jsonrpc": {
 747 |                     "const": "2.0",
 748 |                     "type": "string"
 749 |                 },
 750 |                 "method": {
 751 |                     "type": "string"
 752 |                 },
 753 |                 "params": {
 754 |                     "additionalProperties": {},
 755 |                     "properties": {
 756 |                         "_meta": {
 757 |                             "additionalProperties": {},
 758 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
 759 |                             "type": "object"
 760 |                         }
 761 |                     },
 762 |                     "type": "object"
 763 |                 }
 764 |             },
 765 |             "required": [
 766 |                 "jsonrpc",
 767 |                 "method"
 768 |             ],
 769 |             "type": "object"
 770 |         },
 771 |         "JSONRPCRequest": {
 772 |             "description": "A request that expects a response.",
 773 |             "properties": {
 774 |                 "id": {
 775 |                     "$ref": "#/definitions/RequestId"
 776 |                 },
 777 |                 "jsonrpc": {
 778 |                     "const": "2.0",
 779 |                     "type": "string"
 780 |                 },
 781 |                 "method": {
 782 |                     "type": "string"
 783 |                 },
 784 |                 "params": {
 785 |                     "additionalProperties": {},
 786 |                     "properties": {
 787 |                         "_meta": {
 788 |                             "properties": {
 789 |                                 "progressToken": {
 790 |                                     "$ref": "#/definitions/ProgressToken",
 791 |                                     "description": "If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications."
 792 |                                 }
 793 |                             },
 794 |                             "type": "object"
 795 |                         }
 796 |                     },
 797 |                     "type": "object"
 798 |                 }
 799 |             },
 800 |             "required": [
 801 |                 "id",
 802 |                 "jsonrpc",
 803 |                 "method"
 804 |             ],
 805 |             "type": "object"
 806 |         },
 807 |         "JSONRPCResponse": {
 808 |             "description": "A successful (non-error) response to a request.",
 809 |             "properties": {
 810 |                 "id": {
 811 |                     "$ref": "#/definitions/RequestId"
 812 |                 },
 813 |                 "jsonrpc": {
 814 |                     "const": "2.0",
 815 |                     "type": "string"
 816 |                 },
 817 |                 "result": {
 818 |                     "$ref": "#/definitions/Result"
 819 |                 }
 820 |             },
 821 |             "required": [
 822 |                 "id",
 823 |                 "jsonrpc",
 824 |                 "result"
 825 |             ],
 826 |             "type": "object"
 827 |         },
 828 |         "ListPromptsRequest": {
 829 |             "description": "Sent from the client to request a list of prompts and prompt templates the server has.",
 830 |             "properties": {
 831 |                 "method": {
 832 |                     "const": "prompts/list",
 833 |                     "type": "string"
 834 |                 },
 835 |                 "params": {
 836 |                     "properties": {
 837 |                         "cursor": {
 838 |                             "description": "An opaque token representing the current pagination position.\nIf provided, the server should return results starting after this cursor.",
 839 |                             "type": "string"
 840 |                         }
 841 |                     },
 842 |                     "type": "object"
 843 |                 }
 844 |             },
 845 |             "required": [
 846 |                 "method"
 847 |             ],
 848 |             "type": "object"
 849 |         },
 850 |         "ListPromptsResult": {
 851 |             "description": "The server's response to a prompts/list request from the client.",
 852 |             "properties": {
 853 |                 "_meta": {
 854 |                     "additionalProperties": {},
 855 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 856 |                     "type": "object"
 857 |                 },
 858 |                 "nextCursor": {
 859 |                     "description": "An opaque token representing the pagination position after the last returned result.\nIf present, there may be more results available.",
 860 |                     "type": "string"
 861 |                 },
 862 |                 "prompts": {
 863 |                     "items": {
 864 |                         "$ref": "#/definitions/Prompt"
 865 |                     },
 866 |                     "type": "array"
 867 |                 }
 868 |             },
 869 |             "required": [
 870 |                 "prompts"
 871 |             ],
 872 |             "type": "object"
 873 |         },
 874 |         "ListResourceTemplatesRequest": {
 875 |             "description": "Sent from the client to request a list of resource templates the server has.",
 876 |             "properties": {
 877 |                 "method": {
 878 |                     "const": "resources/templates/list",
 879 |                     "type": "string"
 880 |                 },
 881 |                 "params": {
 882 |                     "properties": {
 883 |                         "cursor": {
 884 |                             "description": "An opaque token representing the current pagination position.\nIf provided, the server should return results starting after this cursor.",
 885 |                             "type": "string"
 886 |                         }
 887 |                     },
 888 |                     "type": "object"
 889 |                 }
 890 |             },
 891 |             "required": [
 892 |                 "method"
 893 |             ],
 894 |             "type": "object"
 895 |         },
 896 |         "ListResourceTemplatesResult": {
 897 |             "description": "The server's response to a resources/templates/list request from the client.",
 898 |             "properties": {
 899 |                 "_meta": {
 900 |                     "additionalProperties": {},
 901 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 902 |                     "type": "object"
 903 |                 },
 904 |                 "nextCursor": {
 905 |                     "description": "An opaque token representing the pagination position after the last returned result.\nIf present, there may be more results available.",
 906 |                     "type": "string"
 907 |                 },
 908 |                 "resourceTemplates": {
 909 |                     "items": {
 910 |                         "$ref": "#/definitions/ResourceTemplate"
 911 |                     },
 912 |                     "type": "array"
 913 |                 }
 914 |             },
 915 |             "required": [
 916 |                 "resourceTemplates"
 917 |             ],
 918 |             "type": "object"
 919 |         },
 920 |         "ListResourcesRequest": {
 921 |             "description": "Sent from the client to request a list of resources the server has.",
 922 |             "properties": {
 923 |                 "method": {
 924 |                     "const": "resources/list",
 925 |                     "type": "string"
 926 |                 },
 927 |                 "params": {
 928 |                     "properties": {
 929 |                         "cursor": {
 930 |                             "description": "An opaque token representing the current pagination position.\nIf provided, the server should return results starting after this cursor.",
 931 |                             "type": "string"
 932 |                         }
 933 |                     },
 934 |                     "type": "object"
 935 |                 }
 936 |             },
 937 |             "required": [
 938 |                 "method"
 939 |             ],
 940 |             "type": "object"
 941 |         },
 942 |         "ListResourcesResult": {
 943 |             "description": "The server's response to a resources/list request from the client.",
 944 |             "properties": {
 945 |                 "_meta": {
 946 |                     "additionalProperties": {},
 947 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 948 |                     "type": "object"
 949 |                 },
 950 |                 "nextCursor": {
 951 |                     "description": "An opaque token representing the pagination position after the last returned result.\nIf present, there may be more results available.",
 952 |                     "type": "string"
 953 |                 },
 954 |                 "resources": {
 955 |                     "items": {
 956 |                         "$ref": "#/definitions/Resource"
 957 |                     },
 958 |                     "type": "array"
 959 |                 }
 960 |             },
 961 |             "required": [
 962 |                 "resources"
 963 |             ],
 964 |             "type": "object"
 965 |         },
 966 |         "ListRootsRequest": {
 967 |             "description": "Sent from the server to request a list of root URIs from the client. Roots allow\nservers to ask for specific directories or files to operate on. A common example\nfor roots is providing a set of repositories or directories a server should operate\non.\n\nThis request is typically used when the server needs to understand the file system\nstructure or access specific locations that the client has permission to read from.",
 968 |             "properties": {
 969 |                 "method": {
 970 |                     "const": "roots/list",
 971 |                     "type": "string"
 972 |                 },
 973 |                 "params": {
 974 |                     "additionalProperties": {},
 975 |                     "properties": {
 976 |                         "_meta": {
 977 |                             "properties": {
 978 |                                 "progressToken": {
 979 |                                     "$ref": "#/definitions/ProgressToken",
 980 |                                     "description": "If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications."
 981 |                                 }
 982 |                             },
 983 |                             "type": "object"
 984 |                         }
 985 |                     },
 986 |                     "type": "object"
 987 |                 }
 988 |             },
 989 |             "required": [
 990 |                 "method"
 991 |             ],
 992 |             "type": "object"
 993 |         },
 994 |         "ListRootsResult": {
 995 |             "description": "The client's response to a roots/list request from the server.\nThis result contains an array of Root objects, each representing a root directory\nor file that the server can operate on.",
 996 |             "properties": {
 997 |                 "_meta": {
 998 |                     "additionalProperties": {},
 999 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
1000 |                     "type": "object"
1001 |                 },
1002 |                 "roots": {
1003 |                     "items": {
1004 |                         "$ref": "#/definitions/Root"
1005 |                     },
1006 |                     "type": "array"
1007 |                 }
1008 |             },
1009 |             "required": [
1010 |                 "roots"
1011 |             ],
1012 |             "type": "object"
1013 |         },
1014 |         "ListToolsRequest": {
1015 |             "description": "Sent from the client to request a list of tools the server has.",
1016 |             "properties": {
1017 |                 "method": {
1018 |                     "const": "tools/list",
1019 |                     "type": "string"
1020 |                 },
1021 |                 "params": {
1022 |                     "properties": {
1023 |                         "cursor": {
1024 |                             "description": "An opaque token representing the current pagination position.\nIf provided, the server should return results starting after this cursor.",
1025 |                             "type": "string"
1026 |                         }
1027 |                     },
1028 |                     "type": "object"
1029 |                 }
1030 |             },
1031 |             "required": [
1032 |                 "method"
1033 |             ],
1034 |             "type": "object"
1035 |         },
1036 |         "ListToolsResult": {
1037 |             "description": "The server's response to a tools/list request from the client.",
1038 |             "properties": {
1039 |                 "_meta": {
1040 |                     "additionalProperties": {},
1041 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
1042 |                     "type": "object"
1043 |                 },
1044 |                 "nextCursor": {
1045 |                     "description": "An opaque token representing the pagination position after the last returned result.\nIf present, there may be more results available.",
1046 |                     "type": "string"
1047 |                 },
1048 |                 "tools": {
1049 |                     "items": {
1050 |                         "$ref": "#/definitions/Tool"
1051 |                     },
1052 |                     "type": "array"
1053 |                 }
1054 |             },
1055 |             "required": [
1056 |                 "tools"
1057 |             ],
1058 |             "type": "object"
1059 |         },
1060 |         "LoggingLevel": {
1061 |             "description": "The severity of a log message.\n\nThese map to syslog message severities, as specified in RFC-5424:\nhttps://datatracker.ietf.org/doc/html/rfc5424#section-6.2.1",
1062 |             "enum": [
1063 |                 "alert",
1064 |                 "critical",
1065 |                 "debug",
1066 |                 "emergency",
1067 |                 "error",
1068 |                 "info",
1069 |                 "notice",
1070 |                 "warning"
1071 |             ],
1072 |             "type": "string"
1073 |         },
1074 |         "LoggingMessageNotification": {
1075 |             "description": "Notification of a log message passed from server to client. If no logging/setLevel request has been sent from the client, the server MAY decide which messages to send automatically.",
1076 |             "properties": {
1077 |                 "method": {
1078 |                     "const": "notifications/message",
1079 |                     "type": "string"
1080 |                 },
1081 |                 "params": {
1082 |                     "properties": {
1083 |                         "data": {
1084 |                             "description": "The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here."
1085 |                         },
1086 |                         "level": {
1087 |                             "$ref": "#/definitions/LoggingLevel",
1088 |                             "description": "The severity of this log message."
1089 |                         },
1090 |                         "logger": {
1091 |                             "description": "An optional name of the logger issuing this message.",
1092 |                             "type": "string"
1093 |                         }
1094 |                     },
1095 |                     "required": [
1096 |                         "data",
1097 |                         "level"
1098 |                     ],
1099 |                     "type": "object"
1100 |                 }
1101 |             },
1102 |             "required": [
1103 |                 "method",
1104 |                 "params"
1105 |             ],
1106 |             "type": "object"
1107 |         },
1108 |         "ModelHint": {
1109 |             "description": "Hints to use for model selection.\n\nKeys not declared here are currently left unspecified by the spec and are up\nto the client to interpret.",
1110 |             "properties": {
1111 |                 "name": {
1112 |                     "description": "A hint for a model name.\n\nThe client SHOULD treat this as a substring of a model name; for example:\n - `claude-3-5-sonnet` should match `claude-3-5-sonnet-20241022`\n - `sonnet` should match `claude-3-5-sonnet-20241022`, `claude-3-sonnet-20240229`, etc.\n - `claude` should match any Claude model\n\nThe client MAY also map the string to a different provider's model name or a different model family, as long as it fills a similar niche; for example:\n - `gemini-1.5-flash` could match `claude-3-haiku-20240307`",
1113 |                     "type": "string"
1114 |                 }
1115 |             },
1116 |             "type": "object"
1117 |         },
1118 |         "ModelPreferences": {
1119 |             "description": "The server's preferences for model selection, requested of the client during sampling.\n\nBecause LLMs can vary along multiple dimensions, choosing the \"best\" model is\nrarely straightforward.  Different models excel in different areas—some are\nfaster but less capable, others are more capable but more expensive, and so\non. This interface allows servers to express their priorities across multiple\ndimensions to help clients make an appropriate selection for their use case.\n\nThese preferences are always advisory. The client MAY ignore them. It is also\nup to the client to decide how to interpret these preferences and how to\nbalance them against other considerations.",
1120 |             "properties": {
1121 |                 "costPriority": {
1122 |                     "description": "How much to prioritize cost when selecting a model. A value of 0 means cost\nis not important, while a value of 1 means cost is the most important\nfactor.",
1123 |                     "maximum": 1,
1124 |                     "minimum": 0,
1125 |                     "type": "number"
1126 |                 },
1127 |                 "hints": {
1128 |                     "description": "Optional hints to use for model selection.\n\nIf multiple hints are specified, the client MUST evaluate them in order\n(such that the first match is taken).\n\nThe client SHOULD prioritize these hints over the numeric priorities, but\nMAY still use the priorities to select from ambiguous matches.",
1129 |                     "items": {
1130 |                         "$ref": "#/definitions/ModelHint"
1131 |                     },
1132 |                     "type": "array"
1133 |                 },
1134 |                 "intelligencePriority": {
1135 |                     "description": "How much to prioritize intelligence and capabilities when selecting a\nmodel. A value of 0 means intelligence is not important, while a value of 1\nmeans intelligence is the most important factor.",
1136 |                     "maximum": 1,
1137 |                     "minimum": 0,
1138 |                     "type": "number"
1139 |                 },
1140 |                 "speedPriority": {
1141 |                     "description": "How much to prioritize sampling speed (latency) when selecting a model. A\nvalue of 0 means speed is not important, while a value of 1 means speed is\nthe most important factor.",
1142 |                     "maximum": 1,
1143 |                     "minimum": 0,
1144 |                     "type": "number"
1145 |                 }
1146 |             },
1147 |             "type": "object"
1148 |         },
1149 |         "Notification": {
1150 |             "properties": {
1151 |                 "method": {
1152 |                     "type": "string"
1153 |                 },
1154 |                 "params": {
1155 |                     "additionalProperties": {},
1156 |                     "properties": {
1157 |                         "_meta": {
1158 |                             "additionalProperties": {},
1159 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
1160 |                             "type": "object"
1161 |                         }
1162 |                     },
1163 |                     "type": "object"
1164 |                 }
1165 |             },
1166 |             "required": [
1167 |                 "method"
1168 |             ],
1169 |             "type": "object"
1170 |         },
1171 |         "PaginatedRequest": {
1172 |             "properties": {
1173 |                 "method": {
1174 |                     "type": "string"
1175 |                 },
1176 |                 "params": {
1177 |                     "properties": {
1178 |                         "cursor": {
1179 |                             "description": "An opaque token representing the current pagination position.\nIf provided, the server should return results starting after this cursor.",
1180 |                             "type": "string"
1181 |                         }
1182 |                     },
1183 |                     "type": "object"
1184 |                 }
1185 |             },
1186 |             "required": [
1187 |                 "method"
1188 |             ],
1189 |             "type": "object"
1190 |         },
1191 |         "PaginatedResult": {
1192 |             "properties": {
1193 |                 "_meta": {
1194 |                     "additionalProperties": {},
1195 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
1196 |                     "type": "object"
1197 |                 },
1198 |                 "nextCursor": {
1199 |                     "description": "An opaque token representing the pagination position after the last returned result.\nIf present, there may be more results available.",
1200 |                     "type": "string"
1201 |                 }
1202 |             },
1203 |             "type": "object"
1204 |         },
1205 |         "PingRequest": {
1206 |             "description": "A ping, issued by either the server or the client, to check that the other party is still alive. The receiver must promptly respond, or else may be disconnected.",
1207 |             "properties": {
1208 |                 "method": {
1209 |                     "const": "ping",
1210 |                     "type": "string"
1211 |                 },
1212 |                 "params": {
1213 |                     "additionalProperties": {},
1214 |                     "properties": {
1215 |                         "_meta": {
1216 |                             "properties": {
1217 |                                 "progressToken": {
1218 |                                     "$ref": "#/definitions/ProgressToken",
1219 |                                     "description": "If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications."
1220 |                                 }
1221 |                             },
1222 |                             "type": "object"
1223 |                         }
1224 |                     },
1225 |                     "type": "object"
1226 |                 }
1227 |             },
1228 |             "required": [
1229 |                 "method"
1230 |             ],
1231 |             "type": "object"
1232 |         },
1233 |         "ProgressNotification": {
1234 |             "description": "An out-of-band notification used to inform the receiver of a progress update for a long-running request.",
1235 |             "properties": {
1236 |                 "method": {
1237 |                     "const": "notifications/progress",
1238 |                     "type": "string"
1239 |                 },
1240 |                 "params": {
1241 |                     "properties": {
1242 |                         "progress": {
1243 |                             "description": "The progress thus far. This should increase every time progress is made, even if the total is unknown.",
1244 |                             "type": "number"
1245 |                         },
1246 |                         "progressToken": {
1247 |                             "$ref": "#/definitions/ProgressToken",
1248 |                             "description": "The progress token which was given in the initial request, used to associate this notification with the request that is proceeding."
1249 |                         },
1250 |                         "total": {
1251 |                             "description": "Total number of items to process (or total progress required), if known.",
1252 |                             "type": "number"
1253 |                         }
1254 |                     },
1255 |                     "required": [
1256 |                         "progress",
1257 |                         "progressToken"
1258 |                     ],
1259 |                     "type": "object"
1260 |                 }
1261 |             },
1262 |             "required": [
1263 |                 "method",
1264 |                 "params"
1265 |             ],
1266 |             "type": "object"
1267 |         },
1268 |         "ProgressToken": {
1269 |             "description": "A progress token, used to associate progress notifications with the original request.",
1270 |             "type": [
1271 |                 "string",
1272 |                 "integer"
1273 |             ]
1274 |         },
1275 |         "Prompt": {
1276 |             "description": "A prompt or prompt template that the server offers.",
1277 |             "properties": {
1278 |                 "arguments": {
1279 |                     "description": "A list of arguments to use for templating the prompt.",
1280 |                     "items": {
1281 |                         "$ref": "#/definitions/PromptArgument"
1282 |                     },
1283 |                     "type": "array"
1284 |                 },
1285 |                 "description": {
1286 |                     "description": "An optional description of what this prompt provides",
1287 |                     "type": "string"
1288 |                 },
1289 |                 "name": {
1290 |                     "description": "The name of the prompt or prompt template.",
1291 |                     "type": "string"
1292 |                 }
1293 |             },
1294 |             "required": [
1295 |                 "name"
1296 |             ],
1297 |             "type": "object"
1298 |         },
1299 |         "PromptArgument": {
1300 |             "description": "Describes an argument that a prompt can accept.",
1301 |             "properties": {
1302 |                 "description": {
1303 |                     "description": "A human-readable description of the argument.",
1304 |                     "type": "string"
1305 |                 },
1306 |                 "name": {
1307 |                     "description": "The name of the argument.",
1308 |                     "type": "string"
1309 |                 },
1310 |                 "required": {
1311 |                     "description": "Whether this argument must be provided.",
1312 |                     "type": "boolean"
1313 |                 }
1314 |             },
1315 |             "required": [
1316 |                 "name"
1317 |             ],
1318 |             "type": "object"
1319 |         },
1320 |         "PromptListChangedNotification": {
1321 |             "description": "An optional notification from the server to the client, informing it that the list of prompts it offers has changed. This may be issued by servers without any previous subscription from the client.",
1322 |             "properties": {
1323 |                 "method": {
1324 |                     "const": "notifications/prompts/list_changed",
1325 |                     "type": "string"
1326 |                 },
1327 |                 "params": {
1328 |                     "additionalProperties": {},
1329 |                     "properties": {
1330 |                         "_meta": {
1331 |                             "additionalProperties": {},
1332 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
1333 |                             "type": "object"
1334 |                         }
1335 |                     },
1336 |                     "type": "object"
1337 |                 }
1338 |             },
1339 |             "required": [
1340 |                 "method"
1341 |             ],
1342 |             "type": "object"
1343 |         },
1344 |         "PromptMessage": {
1345 |             "description": "Describes a message returned as part of a prompt.\n\nThis is similar to `SamplingMessage`, but also supports the embedding of\nresources from the MCP server.",
1346 |             "properties": {
1347 |                 "content": {
1348 |                     "anyOf": [
1349 |                         {
1350 |                             "$ref": "#/definitions/TextContent"
1351 |                         },
1352 |                         {
1353 |                             "$ref": "#/definitions/ImageContent"
1354 |                         },
1355 |                         {
1356 |                             "$ref": "#/definitions/EmbeddedResource"
1357 |                         }
1358 |                     ]
1359 |                 },
1360 |                 "role": {
1361 |                     "$ref": "#/definitions/Role"
1362 |                 }
1363 |             },
1364 |             "required": [
1365 |                 "content",
1366 |                 "role"
1367 |             ],
1368 |             "type": "object"
1369 |         },
1370 |         "PromptReference": {
1371 |             "description": "Identifies a prompt.",
1372 |             "properties": {
1373 |                 "name": {
1374 |                     "description": "The name of the prompt or prompt template",
1375 |                     "type": "string"
1376 |                 },
1377 |                 "type": {
1378 |                     "const": "ref/prompt",
1379 |                     "type": "string"
1380 |                 }
1381 |             },
1382 |             "required": [
1383 |                 "name",
1384 |                 "type"
1385 |             ],
1386 |             "type": "object"
1387 |         },
1388 |         "ReadResourceRequest": {
1389 |             "description": "Sent from the client to the server, to read a specific resource URI.",
1390 |             "properties": {
1391 |                 "method": {
1392 |                     "const": "resources/read",
1393 |                     "type": "string"
1394 |                 },
1395 |                 "params": {
1396 |                     "properties": {
1397 |                         "uri": {
1398 |                             "description": "The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.",
1399 |                             "format": "uri",
1400 |                             "type": "string"
1401 |                         }
1402 |                     },
1403 |                     "required": [
1404 |                         "uri"
1405 |                     ],
1406 |                     "type": "object"
1407 |                 }
1408 |             },
1409 |             "required": [
1410 |                 "method",
1411 |                 "params"
1412 |             ],
1413 |             "type": "object"
1414 |         },
1415 |         "ReadResourceResult": {
1416 |             "description": "The server's response to a resources/read request from the client.",
1417 |             "properties": {
1418 |                 "_meta": {
1419 |                     "additionalProperties": {},
1420 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
1421 |                     "type": "object"
1422 |                 },
1423 |                 "contents": {
1424 |                     "items": {
1425 |                         "anyOf": [
1426 |                             {
1427 |                                 "$ref": "#/definitions/TextResourceContents"
1428 |                             },
1429 |                             {
1430 |                                 "$ref": "#/definitions/BlobResourceContents"
1431 |                             }
1432 |                         ]
1433 |                     },
1434 |                     "type": "array"
1435 |                 }
1436 |             },
1437 |             "required": [
1438 |                 "contents"
1439 |             ],
1440 |             "type": "object"
1441 |         },
1442 |         "Request": {
1443 |             "properties": {
1444 |                 "method": {
1445 |                     "type": "string"
1446 |                 },
1447 |                 "params": {
1448 |                     "additionalProperties": {},
1449 |                     "properties": {
1450 |                         "_meta": {
1451 |                             "properties": {
1452 |                                 "progressToken": {
1453 |                                     "$ref": "#/definitions/ProgressToken",
1454 |                                     "description": "If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications."
1455 |                                 }
1456 |                             },
1457 |                             "type": "object"
1458 |                         }
1459 |                     },
1460 |                     "type": "object"
1461 |                 }
1462 |             },
1463 |             "required": [
1464 |                 "method"
1465 |             ],
1466 |             "type": "object"
1467 |         },
1468 |         "RequestId": {
1469 |             "description": "A uniquely identifying ID for a request in JSON-RPC.",
1470 |             "type": [
1471 |                 "string",
1472 |                 "integer"
1473 |             ]
1474 |         },
1475 |         "Resource": {
1476 |             "description": "A known resource that the server is capable of reading.",
1477 |             "properties": {
1478 |                 "annotations": {
1479 |                     "properties": {
1480 |                         "audience": {
1481 |                             "description": "Describes who the intended customer of this object or data is.\n\nIt can include multiple entries to indicate content useful for multiple audiences (e.g., `[\"user\", \"assistant\"]`).",
1482 |                             "items": {
1483 |                                 "$ref": "#/definitions/Role"
1484 |                             },
1485 |                             "type": "array"
1486 |                         },
1487 |                         "priority": {
1488 |                             "description": "Describes how important this data is for operating the server.\n\nA value of 1 means \"most important,\" and indicates that the data is\neffectively required, while 0 means \"least important,\" and indicates that\nthe data is entirely optional.",
1489 |                             "maximum": 1,
1490 |                             "minimum": 0,
1491 |                             "type": "number"
1492 |                         }
1493 |                     },
1494 |                     "type": "object"
1495 |                 },
1496 |                 "description": {
1497 |                     "description": "A description of what this resource represents.\n\nThis can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a \"hint\" to the model.",
1498 |                     "type": "string"
1499 |                 },
1500 |                 "mimeType": {
1501 |                     "description": "The MIME type of this resource, if known.",
1502 |                     "type": "string"
1503 |                 },
1504 |                 "name": {
1505 |                     "description": "A human-readable name for this resource.\n\nThis can be used by clients to populate UI elements.",
1506 |                     "type": "string"
1507 |                 },
1508 |                 "size": {
1509 |                     "description": "The size of the raw resource content, in bytes (i.e., before base64 encoding or any tokenization), if known.\n\nThis can be used by Hosts to display file sizes and estimate context window usage.",
1510 |                     "type": "integer"
1511 |                 },
1512 |                 "uri": {
1513 |                     "description": "The URI of this resource.",
1514 |                     "format": "uri",
1515 |                     "type": "string"
1516 |                 }
1517 |             },
1518 |             "required": [
1519 |                 "name",
1520 |                 "uri"
1521 |             ],
1522 |             "type": "object"
1523 |         },
1524 |         "ResourceContents": {
1525 |             "description": "The contents of a specific resource or sub-resource.",
1526 |             "properties": {
1527 |                 "mimeType": {
1528 |                     "description": "The MIME type of this resource, if known.",
1529 |                     "type": "string"
1530 |                 },
1531 |                 "uri": {
1532 |                     "description": "The URI of this resource.",
1533 |                     "format": "uri",
1534 |                     "type": "string"
1535 |                 }
1536 |             },
1537 |             "required": [
1538 |                 "uri"
1539 |             ],
1540 |             "type": "object"
1541 |         },
1542 |         "ResourceListChangedNotification": {
1543 |             "description": "An optional notification from the server to the client, informing it that the list of resources it can read from has changed. This may be issued by servers without any previous subscription from the client.",
1544 |             "properties": {
1545 |                 "method": {
1546 |                     "const": "notifications/resources/list_changed",
1547 |                     "type": "string"
1548 |                 },
1549 |                 "params": {
1550 |                     "additionalProperties": {},
1551 |                     "properties": {
1552 |                         "_meta": {
1553 |                             "additionalProperties": {},
1554 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
1555 |                             "type": "object"
1556 |                         }
1557 |                     },
1558 |                     "type": "object"
1559 |                 }
1560 |             },
1561 |             "required": [
1562 |                 "method"
1563 |             ],
1564 |             "type": "object"
1565 |         },
1566 |         "ResourceReference": {
1567 |             "description": "A reference to a resource or resource template definition.",
1568 |             "properties": {
1569 |                 "type": {
1570 |                     "const": "ref/resource",
1571 |                     "type": "string"
1572 |                 },
1573 |                 "uri": {
1574 |                     "description": "The URI or URI template of the resource.",
1575 |                     "format": "uri-template",
1576 |                     "type": "string"
1577 |                 }
1578 |             },
1579 |             "required": [
1580 |                 "type",
1581 |                 "uri"
1582 |             ],
1583 |             "type": "object"
1584 |         },
1585 |         "ResourceTemplate": {
1586 |             "description": "A template description for resources available on the server.",
1587 |             "properties": {
1588 |                 "annotations": {
1589 |                     "properties": {
1590 |                         "audience": {
1591 |                             "description": "Describes who the intended customer of this object or data is.\n\nIt can include multiple entries to indicate content useful for multiple audiences (e.g., `[\"user\", \"assistant\"]`).",
1592 |                             "items": {
1593 |                                 "$ref": "#/definitions/Role"
1594 |                             },
1595 |                             "type": "array"
1596 |                         },
1597 |                         "priority": {
1598 |                             "description": "Describes how important this data is for operating the server.\n\nA value of 1 means \"most important,\" and indicates that the data is\neffectively required, while 0 means \"least important,\" and indicates that\nthe data is entirely optional.",
1599 |                             "maximum": 1,
1600 |                             "minimum": 0,
1601 |                             "type": "number"
1602 |                         }
1603 |                     },
1604 |                     "type": "object"
1605 |                 },
1606 |                 "description": {
1607 |                     "description": "A description of what this template is for.\n\nThis can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a \"hint\" to the model.",
1608 |                     "type": "string"
1609 |                 },
1610 |                 "mimeType": {
1611 |                     "description": "The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.",
1612 |                     "type": "string"
1613 |                 },
1614 |                 "name": {
1615 |                     "description": "A human-readable name for the type of resource this template refers to.\n\nThis can be used by clients to populate UI elements.",
1616 |                     "type": "string"
1617 |                 },
1618 |                 "uriTemplate": {
1619 |                     "description": "A URI template (according to RFC 6570) that can be used to construct resource URIs.",
1620 |                     "format": "uri-template",
1621 |                     "type": "string"
1622 |                 }
1623 |             },
1624 |             "required": [
1625 |                 "name",
1626 |                 "uriTemplate"
1627 |             ],
1628 |             "type": "object"
1629 |         },
1630 |         "ResourceUpdatedNotification": {
1631 |             "description": "A notification from the server to the client, informing it that a resource has changed and may need to be read again. This should only be sent if the client previously sent a resources/subscribe request.",
1632 |             "properties": {
1633 |                 "method": {
1634 |                     "const": "notifications/resources/updated",
1635 |                     "type": "string"
1636 |                 },
1637 |                 "params": {
1638 |                     "properties": {
1639 |                         "uri": {
1640 |                             "description": "The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.",
1641 |                             "format": "uri",
1642 |                             "type": "string"
1643 |                         }
1644 |                     },
1645 |                     "required": [
1646 |                         "uri"
1647 |                     ],
1648 |                     "type": "object"
1649 |                 }
1650 |             },
1651 |             "required": [
1652 |                 "method",
1653 |                 "params"
1654 |             ],
1655 |             "type": "object"
1656 |         },
1657 |         "Result": {
1658 |             "additionalProperties": {},
1659 |             "properties": {
1660 |                 "_meta": {
1661 |                     "additionalProperties": {},
1662 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
1663 |                     "type": "object"
1664 |                 }
1665 |             },
1666 |             "type": "object"
1667 |         },
1668 |         "Role": {
1669 |             "description": "The sender or recipient of messages and data in a conversation.",
1670 |             "enum": [
1671 |                 "assistant",
1672 |                 "user"
1673 |             ],
1674 |             "type": "string"
1675 |         },
1676 |         "Root": {
1677 |             "description": "Represents a root directory or file that the server can operate on.",
1678 |             "properties": {
1679 |                 "name": {
1680 |                     "description": "An optional name for the root. This can be used to provide a human-readable\nidentifier for the root, which may be useful for display purposes or for\nreferencing the root in other parts of the application.",
1681 |                     "type": "string"
1682 |                 },
1683 |                 "uri": {
1684 |                     "description": "The URI identifying the root. This *must* start with file:// for now.\nThis restriction may be relaxed in future versions of the protocol to allow\nother URI schemes.",
1685 |                     "format": "uri",
1686 |                     "type": "string"
1687 |                 }
1688 |             },
1689 |             "required": [
1690 |                 "uri"
1691 |             ],
1692 |             "type": "object"
1693 |         },
1694 |         "RootsListChangedNotification": {
1695 |             "description": "A notification from the client to the server, informing it that the list of roots has changed.\nThis notification should be sent whenever the client adds, removes, or modifies any root.\nThe server should then request an updated list of roots using the ListRootsRequest.",
1696 |             "properties": {
1697 |                 "method": {
1698 |                     "const": "notifications/roots/list_changed",
1699 |                     "type": "string"
1700 |                 },
1701 |                 "params": {
1702 |                     "additionalProperties": {},
1703 |                     "properties": {
1704 |                         "_meta": {
1705 |                             "additionalProperties": {},
1706 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
1707 |                             "type": "object"
1708 |                         }
1709 |                     },
1710 |                     "type": "object"
1711 |                 }
1712 |             },
1713 |             "required": [
1714 |                 "method"
1715 |             ],
1716 |             "type": "object"
1717 |         },
1718 |         "SamplingMessage": {
1719 |             "description": "Describes a message issued to or received from an LLM API.",
1720 |             "properties": {
1721 |                 "content": {
1722 |                     "anyOf": [
1723 |                         {
1724 |                             "$ref": "#/definitions/TextContent"
1725 |                         },
1726 |                         {
1727 |                             "$ref": "#/definitions/ImageContent"
1728 |                         }
1729 |                     ]
1730 |                 },
1731 |                 "role": {
1732 |                     "$ref": "#/definitions/Role"
1733 |                 }
1734 |             },
1735 |             "required": [
1736 |                 "content",
1737 |                 "role"
1738 |             ],
1739 |             "type": "object"
1740 |         },
1741 |         "ServerCapabilities": {
1742 |             "description": "Capabilities that a server may support. Known capabilities are defined here, in this schema, but this is not a closed set: any server can define its own, additional capabilities.",
1743 |             "properties": {
1744 |                 "experimental": {
1745 |                     "additionalProperties": {
1746 |                         "additionalProperties": true,
1747 |                         "properties": {},
1748 |                         "type": "object"
1749 |                     },
1750 |                     "description": "Experimental, non-standard capabilities that the server supports.",
1751 |                     "type": "object"
1752 |                 },
1753 |                 "logging": {
1754 |                     "additionalProperties": true,
1755 |                     "description": "Present if the server supports sending log messages to the client.",
1756 |                     "properties": {},
1757 |                     "type": "object"
1758 |                 },
1759 |                 "prompts": {
1760 |                     "description": "Present if the server offers any prompt templates.",
1761 |                     "properties": {
1762 |                         "listChanged": {
1763 |                             "description": "Whether this server supports notifications for changes to the prompt list.",
1764 |                             "type": "boolean"
1765 |                         }
1766 |                     },
1767 |                     "type": "object"
1768 |                 },
1769 |                 "resources": {
1770 |                     "description": "Present if the server offers any resources to read.",
1771 |                     "properties": {
1772 |                         "listChanged": {
1773 |                             "description": "Whether this server supports notifications for changes to the resource list.",
1774 |                             "type": "boolean"
1775 |                         },
1776 |                         "subscribe": {
1777 |                             "description": "Whether this server supports subscribing to resource updates.",
1778 |                             "type": "boolean"
1779 |                         }
1780 |                     },
1781 |                     "type": "object"
1782 |                 },
1783 |                 "tools": {
1784 |                     "description": "Present if the server offers any tools to call.",
1785 |                     "properties": {
1786 |                         "listChanged": {
1787 |                             "description": "Whether this server supports notifications for changes to the tool list.",
1788 |                             "type": "boolean"
1789 |                         }
1790 |                     },
1791 |                     "type": "object"
1792 |                 }
1793 |             },
1794 |             "type": "object"
1795 |         },
1796 |         "ServerNotification": {
1797 |             "anyOf": [
1798 |                 {
1799 |                     "$ref": "#/definitions/CancelledNotification"
1800 |                 },
1801 |                 {
1802 |                     "$ref": "#/definitions/ProgressNotification"
1803 |                 },
1804 |                 {
1805 |                     "$ref": "#/definitions/ResourceListChangedNotification"
1806 |                 },
1807 |                 {
1808 |                     "$ref": "#/definitions/ResourceUpdatedNotification"
1809 |                 },
1810 |                 {
1811 |                     "$ref": "#/definitions/PromptListChangedNotification"
1812 |                 },
1813 |                 {
1814 |                     "$ref": "#/definitions/ToolListChangedNotification"
1815 |                 },
1816 |                 {
1817 |                     "$ref": "#/definitions/LoggingMessageNotification"
1818 |                 }
1819 |             ]
1820 |         },
1821 |         "ServerRequest": {
1822 |             "anyOf": [
1823 |                 {
1824 |                     "$ref": "#/definitions/PingRequest"
1825 |                 },
1826 |                 {
1827 |                     "$ref": "#/definitions/CreateMessageRequest"
1828 |                 },
1829 |                 {
1830 |                     "$ref": "#/definitions/ListRootsRequest"
1831 |                 }
1832 |             ]
1833 |         },
1834 |         "ServerResult": {
1835 |             "anyOf": [
1836 |                 {
1837 |                     "$ref": "#/definitions/Result"
1838 |                 },
1839 |                 {
1840 |                     "$ref": "#/definitions/InitializeResult"
1841 |                 },
1842 |                 {
1843 |                     "$ref": "#/definitions/ListResourcesResult"
1844 |                 },
1845 |                 {
1846 |                     "$ref": "#/definitions/ListResourceTemplatesResult"
1847 |                 },
1848 |                 {
1849 |                     "$ref": "#/definitions/ReadResourceResult"
1850 |                 },
1851 |                 {
1852 |                     "$ref": "#/definitions/ListPromptsResult"
1853 |                 },
1854 |                 {
1855 |                     "$ref": "#/definitions/GetPromptResult"
1856 |                 },
1857 |                 {
1858 |                     "$ref": "#/definitions/ListToolsResult"
1859 |                 },
1860 |                 {
1861 |                     "$ref": "#/definitions/CallToolResult"
1862 |                 },
1863 |                 {
1864 |                     "$ref": "#/definitions/CompleteResult"
1865 |                 }
1866 |             ]
1867 |         },
1868 |         "SetLevelRequest": {
1869 |             "description": "A request from the client to the server, to enable or adjust logging.",
1870 |             "properties": {
1871 |                 "method": {
1872 |                     "const": "logging/setLevel",
1873 |                     "type": "string"
1874 |                 },
1875 |                 "params": {
1876 |                     "properties": {
1877 |                         "level": {
1878 |                             "$ref": "#/definitions/LoggingLevel",
1879 |                             "description": "The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/message."
1880 |                         }
1881 |                     },
1882 |                     "required": [
1883 |                         "level"
1884 |                     ],
1885 |                     "type": "object"
1886 |                 }
1887 |             },
1888 |             "required": [
1889 |                 "method",
1890 |                 "params"
1891 |             ],
1892 |             "type": "object"
1893 |         },
1894 |         "SubscribeRequest": {
1895 |             "description": "Sent from the client to request resources/updated notifications from the server whenever a particular resource changes.",
1896 |             "properties": {
1897 |                 "method": {
1898 |                     "const": "resources/subscribe",
1899 |                     "type": "string"
1900 |                 },
1901 |                 "params": {
1902 |                     "properties": {
1903 |                         "uri": {
1904 |                             "description": "The URI of the resource to subscribe to. The URI can use any protocol; it is up to the server how to interpret it.",
1905 |                             "format": "uri",
1906 |                             "type": "string"
1907 |                         }
1908 |                     },
1909 |                     "required": [
1910 |                         "uri"
1911 |                     ],
1912 |                     "type": "object"
1913 |                 }
1914 |             },
1915 |             "required": [
1916 |                 "method",
1917 |                 "params"
1918 |             ],
1919 |             "type": "object"
1920 |         },
1921 |         "TextContent": {
1922 |             "description": "Text provided to or from an LLM.",
1923 |             "properties": {
1924 |                 "annotations": {
1925 |                     "properties": {
1926 |                         "audience": {
1927 |                             "description": "Describes who the intended customer of this object or data is.\n\nIt can include multiple entries to indicate content useful for multiple audiences (e.g., `[\"user\", \"assistant\"]`).",
1928 |                             "items": {
1929 |                                 "$ref": "#/definitions/Role"
1930 |                             },
1931 |                             "type": "array"
1932 |                         },
1933 |                         "priority": {
1934 |                             "description": "Describes how important this data is for operating the server.\n\nA value of 1 means \"most important,\" and indicates that the data is\neffectively required, while 0 means \"least important,\" and indicates that\nthe data is entirely optional.",
1935 |                             "maximum": 1,
1936 |                             "minimum": 0,
1937 |                             "type": "number"
1938 |                         }
1939 |                     },
1940 |                     "type": "object"
1941 |                 },
1942 |                 "text": {
1943 |                     "description": "The text content of the message.",
1944 |                     "type": "string"
1945 |                 },
1946 |                 "type": {
1947 |                     "const": "text",
1948 |                     "type": "string"
1949 |                 }
1950 |             },
1951 |             "required": [
1952 |                 "text",
1953 |                 "type"
1954 |             ],
1955 |             "type": "object"
1956 |         },
1957 |         "TextResourceContents": {
1958 |             "properties": {
1959 |                 "mimeType": {
1960 |                     "description": "The MIME type of this resource, if known.",
1961 |                     "type": "string"
1962 |                 },
1963 |                 "text": {
1964 |                     "description": "The text of the item. This must only be set if the item can actually be represented as text (not binary data).",
1965 |                     "type": "string"
1966 |                 },
1967 |                 "uri": {
1968 |                     "description": "The URI of this resource.",
1969 |                     "format": "uri",
1970 |                     "type": "string"
1971 |                 }
1972 |             },
1973 |             "required": [
1974 |                 "text",
1975 |                 "uri"
1976 |             ],
1977 |             "type": "object"
1978 |         },
1979 |         "Tool": {
1980 |             "description": "Definition for a tool the client can call.",
1981 |             "properties": {
1982 |                 "description": {
1983 |                     "description": "A human-readable description of the tool.",
1984 |                     "type": "string"
1985 |                 },
1986 |                 "inputSchema": {
1987 |                     "description": "A JSON Schema object defining the expected parameters for the tool.",
1988 |                     "properties": {
1989 |                         "properties": {
1990 |                             "additionalProperties": {
1991 |                                 "additionalProperties": true,
1992 |                                 "properties": {},
1993 |                                 "type": "object"
1994 |                             },
1995 |                             "type": "object"
1996 |                         },
1997 |                         "required": {
1998 |                             "items": {
1999 |                                 "type": "string"
2000 |                             },
2001 |                             "type": "array"
2002 |                         },
2003 |                         "type": {
2004 |                             "const": "object",
2005 |                             "type": "string"
2006 |                         }
2007 |                     },
2008 |                     "required": [
2009 |                         "type"
2010 |                     ],
2011 |                     "type": "object"
2012 |                 },
2013 |                 "name": {
2014 |                     "description": "The name of the tool.",
2015 |                     "type": "string"
2016 |                 }
2017 |             },
2018 |             "required": [
2019 |                 "inputSchema",
2020 |                 "name"
2021 |             ],
2022 |             "type": "object"
2023 |         },
2024 |         "ToolListChangedNotification": {
2025 |             "description": "An optional notification from the server to the client, informing it that the list of tools it offers has changed. This may be issued by servers without any previous subscription from the client.",
2026 |             "properties": {
2027 |                 "method": {
2028 |                     "const": "notifications/tools/list_changed",
2029 |                     "type": "string"
2030 |                 },
2031 |                 "params": {
2032 |                     "additionalProperties": {},
2033 |                     "properties": {
2034 |                         "_meta": {
2035 |                             "additionalProperties": {},
2036 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
2037 |                             "type": "object"
2038 |                         }
2039 |                     },
2040 |                     "type": "object"
2041 |                 }
2042 |             },
2043 |             "required": [
2044 |                 "method"
2045 |             ],
2046 |             "type": "object"
2047 |         },
2048 |         "UnsubscribeRequest": {
2049 |             "description": "Sent from the client to request cancellation of resources/updated notifications from the server. This should follow a previous resources/subscribe request.",
2050 |             "properties": {
2051 |                 "method": {
2052 |                     "const": "resources/unsubscribe",
2053 |                     "type": "string"
2054 |                 },
2055 |                 "params": {
2056 |                     "properties": {
2057 |                         "uri": {
2058 |                             "description": "The URI of the resource to unsubscribe from.",
2059 |                             "format": "uri",
2060 |                             "type": "string"
2061 |                         }
2062 |                     },
2063 |                     "required": [
2064 |                         "uri"
2065 |                     ],
2066 |                     "type": "object"
2067 |                 }
2068 |             },
2069 |             "required": [
2070 |                 "method",
2071 |                 "params"
2072 |             ],
2073 |             "type": "object"
2074 |         }
2075 |     }
2076 | }
2077 | 
2078 | 


--------------------------------------------------------------------------------
/schema/2024-11-05/schema.ts:
--------------------------------------------------------------------------------
   1 | /* JSON-RPC types */
   2 | export type JSONRPCMessage =
   3 |   | JSONRPCRequest
   4 |   | JSONRPCNotification
   5 |   | JSONRPCResponse
   6 |   | JSONRPCError;
   7 | 
   8 | export const LATEST_PROTOCOL_VERSION = "2024-11-05";
   9 | export const JSONRPC_VERSION = "2.0";
  10 | 
  11 | /**
  12 |  * A progress token, used to associate progress notifications with the original request.
  13 |  */
  14 | export type ProgressToken = string | number;
  15 | 
  16 | /**
  17 |  * An opaque token used to represent a cursor for pagination.
  18 |  */
  19 | export type Cursor = string;
  20 | 
  21 | export interface Request {
  22 |   method: string;
  23 |   params?: {
  24 |     _meta?: {
  25 |       /**
  26 |        * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
  27 |        */
  28 |       progressToken?: ProgressToken;
  29 |     };
  30 |     [key: string]: unknown;
  31 |   };
  32 | }
  33 | 
  34 | export interface Notification {
  35 |   method: string;
  36 |   params?: {
  37 |     /**
  38 |      * This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.
  39 |      */
  40 |     _meta?: { [key: string]: unknown };
  41 |     [key: string]: unknown;
  42 |   };
  43 | }
  44 | 
  45 | export interface Result {
  46 |   /**
  47 |    * This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.
  48 |    */
  49 |   _meta?: { [key: string]: unknown };
  50 |   [key: string]: unknown;
  51 | }
  52 | 
  53 | /**
  54 |  * A uniquely identifying ID for a request in JSON-RPC.
  55 |  */
  56 | export type RequestId = string | number;
  57 | 
  58 | /**
  59 |  * A request that expects a response.
  60 |  */
  61 | export interface JSONRPCRequest extends Request {
  62 |   jsonrpc: typeof JSONRPC_VERSION;
  63 |   id: RequestId;
  64 | }
  65 | 
  66 | /**
  67 |  * A notification which does not expect a response.
  68 |  */
  69 | export interface JSONRPCNotification extends Notification {
  70 |   jsonrpc: typeof JSONRPC_VERSION;
  71 | }
  72 | 
  73 | /**
  74 |  * A successful (non-error) response to a request.
  75 |  */
  76 | export interface JSONRPCResponse {
  77 |   jsonrpc: typeof JSONRPC_VERSION;
  78 |   id: RequestId;
  79 |   result: Result;
  80 | }
  81 | 
  82 | // Standard JSON-RPC error codes
  83 | export const PARSE_ERROR = -32700;
  84 | export const INVALID_REQUEST = -32600;
  85 | export const METHOD_NOT_FOUND = -32601;
  86 | export const INVALID_PARAMS = -32602;
  87 | export const INTERNAL_ERROR = -32603;
  88 | 
  89 | /**
  90 |  * A response to a request that indicates an error occurred.
  91 |  */
  92 | export interface JSONRPCError {
  93 |   jsonrpc: typeof JSONRPC_VERSION;
  94 |   id: RequestId;
  95 |   error: {
  96 |     /**
  97 |      * The error type that occurred.
  98 |      */
  99 |     code: number;
 100 |     /**
 101 |      * A short description of the error. The message SHOULD be limited to a concise single sentence.
 102 |      */
 103 |     message: string;
 104 |     /**
 105 |      * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
 106 |      */
 107 |     data?: unknown;
 108 |   };
 109 | }
 110 | 
 111 | /* Empty result */
 112 | /**
 113 |  * A response that indicates success but carries no data.
 114 |  */
 115 | export type EmptyResult = Result;
 116 | 
 117 | /* Cancellation */
 118 | /**
 119 |  * This notification can be sent by either side to indicate that it is cancelling a previously-issued request.
 120 |  *
 121 |  * The request SHOULD still be in-flight, but due to communication latency, it is always possible that this notification MAY arrive after the request has already finished.
 122 |  *
 123 |  * This notification indicates that the result will be unused, so any associated processing SHOULD cease.
 124 |  *
 125 |  * A client MUST NOT attempt to cancel its `initialize` request.
 126 |  */
 127 | export interface CancelledNotification extends Notification {
 128 |   method: "notifications/cancelled";
 129 |   params: {
 130 |     /**
 131 |      * The ID of the request to cancel.
 132 |      *
 133 |      * This MUST correspond to the ID of a request previously issued in the same direction.
 134 |      */
 135 |     requestId: RequestId;
 136 | 
 137 |     /**
 138 |      * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
 139 |      */
 140 |     reason?: string;
 141 |   };
 142 | }
 143 | 
 144 | /* Initialization */
 145 | /**
 146 |  * This request is sent from the client to the server when it first connects, asking it to begin initialization.
 147 |  */
 148 | export interface InitializeRequest extends Request {
 149 |   method: "initialize";
 150 |   params: {
 151 |     /**
 152 |      * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
 153 |      */
 154 |     protocolVersion: string;
 155 |     capabilities: ClientCapabilities;
 156 |     clientInfo: Implementation;
 157 |   };
 158 | }
 159 | 
 160 | /**
 161 |  * After receiving an initialize request from the client, the server sends this response.
 162 |  */
 163 | export interface InitializeResult extends Result {
 164 |   /**
 165 |    * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
 166 |    */
 167 |   protocolVersion: string;
 168 |   capabilities: ServerCapabilities;
 169 |   serverInfo: Implementation;
 170 |   /**
 171 |    * Instructions describing how to use the server and its features.
 172 |    *
 173 |    * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
 174 |    */
 175 |   instructions?: string;
 176 | }
 177 | 
 178 | /**
 179 |  * This notification is sent from the client to the server after initialization has finished.
 180 |  */
 181 | export interface InitializedNotification extends Notification {
 182 |   method: "notifications/initialized";
 183 | }
 184 | 
 185 | /**
 186 |  * Capabilities a client may support. Known capabilities are defined here, in this schema, but this is not a closed set: any client can define its own, additional capabilities.
 187 |  */
 188 | export interface ClientCapabilities {
 189 |   /**
 190 |    * Experimental, non-standard capabilities that the client supports.
 191 |    */
 192 |   experimental?: { [key: string]: object };
 193 |   /**
 194 |    * Present if the client supports listing roots.
 195 |    */
 196 |   roots?: {
 197 |     /**
 198 |      * Whether the client supports notifications for changes to the roots list.
 199 |      */
 200 |     listChanged?: boolean;
 201 |   };
 202 |   /**
 203 |    * Present if the client supports sampling from an LLM.
 204 |    */
 205 |   sampling?: object;
 206 | }
 207 | 
 208 | /**
 209 |  * Capabilities that a server may support. Known capabilities are defined here, in this schema, but this is not a closed set: any server can define its own, additional capabilities.
 210 |  */
 211 | export interface ServerCapabilities {
 212 |   /**
 213 |    * Experimental, non-standard capabilities that the server supports.
 214 |    */
 215 |   experimental?: { [key: string]: object };
 216 |   /**
 217 |    * Present if the server supports sending log messages to the client.
 218 |    */
 219 |   logging?: object;
 220 |   /**
 221 |    * Present if the server offers any prompt templates.
 222 |    */
 223 |   prompts?: {
 224 |     /**
 225 |      * Whether this server supports notifications for changes to the prompt list.
 226 |      */
 227 |     listChanged?: boolean;
 228 |   };
 229 |   /**
 230 |    * Present if the server offers any resources to read.
 231 |    */
 232 |   resources?: {
 233 |     /**
 234 |      * Whether this server supports subscribing to resource updates.
 235 |      */
 236 |     subscribe?: boolean;
 237 |     /**
 238 |      * Whether this server supports notifications for changes to the resource list.
 239 |      */
 240 |     listChanged?: boolean;
 241 |   };
 242 |   /**
 243 |    * Present if the server offers any tools to call.
 244 |    */
 245 |   tools?: {
 246 |     /**
 247 |      * Whether this server supports notifications for changes to the tool list.
 248 |      */
 249 |     listChanged?: boolean;
 250 |   };
 251 | }
 252 | 
 253 | /**
 254 |  * Describes the name and version of an MCP implementation.
 255 |  */
 256 | export interface Implementation {
 257 |   name: string;
 258 |   version: string;
 259 | }
 260 | 
 261 | /* Ping */
 262 | /**
 263 |  * A ping, issued by either the server or the client, to check that the other party is still alive. The receiver must promptly respond, or else may be disconnected.
 264 |  */
 265 | export interface PingRequest extends Request {
 266 |   method: "ping";
 267 | }
 268 | 
 269 | /* Progress notifications */
 270 | /**
 271 |  * An out-of-band notification used to inform the receiver of a progress update for a long-running request.
 272 |  */
 273 | export interface ProgressNotification extends Notification {
 274 |   method: "notifications/progress";
 275 |   params: {
 276 |     /**
 277 |      * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
 278 |      */
 279 |     progressToken: ProgressToken;
 280 |     /**
 281 |      * The progress thus far. This should increase every time progress is made, even if the total is unknown.
 282 |      *
 283 |      * @TJS-type number
 284 |      */
 285 |     progress: number;
 286 |     /**
 287 |      * Total number of items to process (or total progress required), if known.
 288 |      *
 289 |      * @TJS-type number
 290 |      */
 291 |     total?: number;
 292 |   };
 293 | }
 294 | 
 295 | /* Pagination */
 296 | export interface PaginatedRequest extends Request {
 297 |   params?: {
 298 |     /**
 299 |      * An opaque token representing the current pagination position.
 300 |      * If provided, the server should return results starting after this cursor.
 301 |      */
 302 |     cursor?: Cursor;
 303 |   };
 304 | }
 305 | 
 306 | export interface PaginatedResult extends Result {
 307 |   /**
 308 |    * An opaque token representing the pagination position after the last returned result.
 309 |    * If present, there may be more results available.
 310 |    */
 311 |   nextCursor?: Cursor;
 312 | }
 313 | 
 314 | /* Resources */
 315 | /**
 316 |  * Sent from the client to request a list of resources the server has.
 317 |  */
 318 | export interface ListResourcesRequest extends PaginatedRequest {
 319 |   method: "resources/list";
 320 | }
 321 | 
 322 | /**
 323 |  * The server's response to a resources/list request from the client.
 324 |  */
 325 | export interface ListResourcesResult extends PaginatedResult {
 326 |   resources: Resource[];
 327 | }
 328 | 
 329 | /**
 330 |  * Sent from the client to request a list of resource templates the server has.
 331 |  */
 332 | export interface ListResourceTemplatesRequest extends PaginatedRequest {
 333 |   method: "resources/templates/list";
 334 | }
 335 | 
 336 | /**
 337 |  * The server's response to a resources/templates/list request from the client.
 338 |  */
 339 | export interface ListResourceTemplatesResult extends PaginatedResult {
 340 |   resourceTemplates: ResourceTemplate[];
 341 | }
 342 | 
 343 | /**
 344 |  * Sent from the client to the server, to read a specific resource URI.
 345 |  */
 346 | export interface ReadResourceRequest extends Request {
 347 |   method: "resources/read";
 348 |   params: {
 349 |     /**
 350 |      * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
 351 |      *
 352 |      * @format uri
 353 |      */
 354 |     uri: string;
 355 |   };
 356 | }
 357 | 
 358 | /**
 359 |  * The server's response to a resources/read request from the client.
 360 |  */
 361 | export interface ReadResourceResult extends Result {
 362 |   contents: (TextResourceContents | BlobResourceContents)[];
 363 | }
 364 | 
 365 | /**
 366 |  * An optional notification from the server to the client, informing it that the list of resources it can read from has changed. This may be issued by servers without any previous subscription from the client.
 367 |  */
 368 | export interface ResourceListChangedNotification extends Notification {
 369 |   method: "notifications/resources/list_changed";
 370 | }
 371 | 
 372 | /**
 373 |  * Sent from the client to request resources/updated notifications from the server whenever a particular resource changes.
 374 |  */
 375 | export interface SubscribeRequest extends Request {
 376 |   method: "resources/subscribe";
 377 |   params: {
 378 |     /**
 379 |      * The URI of the resource to subscribe to. The URI can use any protocol; it is up to the server how to interpret it.
 380 |      *
 381 |      * @format uri
 382 |      */
 383 |     uri: string;
 384 |   };
 385 | }
 386 | 
 387 | /**
 388 |  * Sent from the client to request cancellation of resources/updated notifications from the server. This should follow a previous resources/subscribe request.
 389 |  */
 390 | export interface UnsubscribeRequest extends Request {
 391 |   method: "resources/unsubscribe";
 392 |   params: {
 393 |     /**
 394 |      * The URI of the resource to unsubscribe from.
 395 |      *
 396 |      * @format uri
 397 |      */
 398 |     uri: string;
 399 |   };
 400 | }
 401 | 
 402 | /**
 403 |  * A notification from the server to the client, informing it that a resource has changed and may need to be read again. This should only be sent if the client previously sent a resources/subscribe request.
 404 |  */
 405 | export interface ResourceUpdatedNotification extends Notification {
 406 |   method: "notifications/resources/updated";
 407 |   params: {
 408 |     /**
 409 |      * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
 410 |      *
 411 |      * @format uri
 412 |      */
 413 |     uri: string;
 414 |   };
 415 | }
 416 | 
 417 | /**
 418 |  * A known resource that the server is capable of reading.
 419 |  */
 420 | export interface Resource extends Annotated {
 421 |   /**
 422 |    * The URI of this resource.
 423 |    *
 424 |    * @format uri
 425 |    */
 426 |   uri: string;
 427 | 
 428 |   /**
 429 |    * A human-readable name for this resource.
 430 |    *
 431 |    * This can be used by clients to populate UI elements.
 432 |    */
 433 |   name: string;
 434 | 
 435 |   /**
 436 |    * A description of what this resource represents.
 437 |    *
 438 |    * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
 439 |    */
 440 |   description?: string;
 441 | 
 442 |   /**
 443 |    * The MIME type of this resource, if known.
 444 |    */
 445 |   mimeType?: string;
 446 | 
 447 |   /**
 448 |    * The size of the raw resource content, in bytes (i.e., before base64 encoding or any tokenization), if known.
 449 |    *
 450 |    * This can be used by Hosts to display file sizes and estimate context window usage.
 451 |    */
 452 |   size?: number;
 453 | }
 454 | 
 455 | /**
 456 |  * A template description for resources available on the server.
 457 |  */
 458 | export interface ResourceTemplate extends Annotated {
 459 |   /**
 460 |    * A URI template (according to RFC 6570) that can be used to construct resource URIs.
 461 |    *
 462 |    * @format uri-template
 463 |    */
 464 |   uriTemplate: string;
 465 | 
 466 |   /**
 467 |    * A human-readable name for the type of resource this template refers to.
 468 |    *
 469 |    * This can be used by clients to populate UI elements.
 470 |    */
 471 |   name: string;
 472 | 
 473 |   /**
 474 |    * A description of what this template is for.
 475 |    *
 476 |    * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
 477 |    */
 478 |   description?: string;
 479 | 
 480 |   /**
 481 |    * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
 482 |    */
 483 |   mimeType?: string;
 484 | }
 485 | 
 486 | /**
 487 |  * The contents of a specific resource or sub-resource.
 488 |  */
 489 | export interface ResourceContents {
 490 |   /**
 491 |    * The URI of this resource.
 492 |    *
 493 |    * @format uri
 494 |    */
 495 |   uri: string;
 496 |   /**
 497 |    * The MIME type of this resource, if known.
 498 |    */
 499 |   mimeType?: string;
 500 | }
 501 | 
 502 | export interface TextResourceContents extends ResourceContents {
 503 |   /**
 504 |    * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
 505 |    */
 506 |   text: string;
 507 | }
 508 | 
 509 | export interface BlobResourceContents extends ResourceContents {
 510 |   /**
 511 |    * A base64-encoded string representing the binary data of the item.
 512 |    *
 513 |    * @format byte
 514 |    */
 515 |   blob: string;
 516 | }
 517 | 
 518 | /* Prompts */
 519 | /**
 520 |  * Sent from the client to request a list of prompts and prompt templates the server has.
 521 |  */
 522 | export interface ListPromptsRequest extends PaginatedRequest {
 523 |   method: "prompts/list";
 524 | }
 525 | 
 526 | /**
 527 |  * The server's response to a prompts/list request from the client.
 528 |  */
 529 | export interface ListPromptsResult extends PaginatedResult {
 530 |   prompts: Prompt[];
 531 | }
 532 | 
 533 | /**
 534 |  * Used by the client to get a prompt provided by the server.
 535 |  */
 536 | export interface GetPromptRequest extends Request {
 537 |   method: "prompts/get";
 538 |   params: {
 539 |     /**
 540 |      * The name of the prompt or prompt template.
 541 |      */
 542 |     name: string;
 543 |     /**
 544 |      * Arguments to use for templating the prompt.
 545 |      */
 546 |     arguments?: { [key: string]: string };
 547 |   };
 548 | }
 549 | 
 550 | /**
 551 |  * The server's response to a prompts/get request from the client.
 552 |  */
 553 | export interface GetPromptResult extends Result {
 554 |   /**
 555 |    * An optional description for the prompt.
 556 |    */
 557 |   description?: string;
 558 |   messages: PromptMessage[];
 559 | }
 560 | 
 561 | /**
 562 |  * A prompt or prompt template that the server offers.
 563 |  */
 564 | export interface Prompt {
 565 |   /**
 566 |    * The name of the prompt or prompt template.
 567 |    */
 568 |   name: string;
 569 |   /**
 570 |    * An optional description of what this prompt provides
 571 |    */
 572 |   description?: string;
 573 |   /**
 574 |    * A list of arguments to use for templating the prompt.
 575 |    */
 576 |   arguments?: PromptArgument[];
 577 | }
 578 | 
 579 | /**
 580 |  * Describes an argument that a prompt can accept.
 581 |  */
 582 | export interface PromptArgument {
 583 |   /**
 584 |    * The name of the argument.
 585 |    */
 586 |   name: string;
 587 |   /**
 588 |    * A human-readable description of the argument.
 589 |    */
 590 |   description?: string;
 591 |   /**
 592 |    * Whether this argument must be provided.
 593 |    */
 594 |   required?: boolean;
 595 | }
 596 | 
 597 | /**
 598 |  * The sender or recipient of messages and data in a conversation.
 599 |  */
 600 | export type Role = "user" | "assistant";
 601 | 
 602 | /**
 603 |  * Describes a message returned as part of a prompt.
 604 |  *
 605 |  * This is similar to `SamplingMessage`, but also supports the embedding of
 606 |  * resources from the MCP server.
 607 |  */
 608 | export interface PromptMessage {
 609 |   role: Role;
 610 |   content: TextContent | ImageContent | EmbeddedResource;
 611 | }
 612 | 
 613 | /**
 614 |  * The contents of a resource, embedded into a prompt or tool call result.
 615 |  *
 616 |  * It is up to the client how best to render embedded resources for the benefit
 617 |  * of the LLM and/or the user.
 618 |  */
 619 | export interface EmbeddedResource extends Annotated {
 620 |   type: "resource";
 621 |   resource: TextResourceContents | BlobResourceContents;
 622 | }
 623 | 
 624 | /**
 625 |  * An optional notification from the server to the client, informing it that the list of prompts it offers has changed. This may be issued by servers without any previous subscription from the client.
 626 |  */
 627 | export interface PromptListChangedNotification extends Notification {
 628 |   method: "notifications/prompts/list_changed";
 629 | }
 630 | 
 631 | /* Tools */
 632 | /**
 633 |  * Sent from the client to request a list of tools the server has.
 634 |  */
 635 | export interface ListToolsRequest extends PaginatedRequest {
 636 |   method: "tools/list";
 637 | }
 638 | 
 639 | /**
 640 |  * The server's response to a tools/list request from the client.
 641 |  */
 642 | export interface ListToolsResult extends PaginatedResult {
 643 |   tools: Tool[];
 644 | }
 645 | 
 646 | /**
 647 |  * The server's response to a tool call.
 648 |  *
 649 |  * Any errors that originate from the tool SHOULD be reported inside the result
 650 |  * object, with `isError` set to true, _not_ as an MCP protocol-level error
 651 |  * response. Otherwise, the LLM would not be able to see that an error occurred
 652 |  * and self-correct.
 653 |  *
 654 |  * However, any errors in _finding_ the tool, an error indicating that the
 655 |  * server does not support tool calls, or any other exceptional conditions,
 656 |  * should be reported as an MCP error response.
 657 |  */
 658 | export interface CallToolResult extends Result {
 659 |   content: (TextContent | ImageContent | EmbeddedResource)[];
 660 | 
 661 |   /**
 662 |    * Whether the tool call ended in an error.
 663 |    *
 664 |    * If not set, this is assumed to be false (the call was successful).
 665 |    */
 666 |   isError?: boolean;
 667 | }
 668 | 
 669 | /**
 670 |  * Used by the client to invoke a tool provided by the server.
 671 |  */
 672 | export interface CallToolRequest extends Request {
 673 |   method: "tools/call";
 674 |   params: {
 675 |     name: string;
 676 |     arguments?: { [key: string]: unknown };
 677 |   };
 678 | }
 679 | 
 680 | /**
 681 |  * An optional notification from the server to the client, informing it that the list of tools it offers has changed. This may be issued by servers without any previous subscription from the client.
 682 |  */
 683 | export interface ToolListChangedNotification extends Notification {
 684 |   method: "notifications/tools/list_changed";
 685 | }
 686 | 
 687 | /**
 688 |  * Definition for a tool the client can call.
 689 |  */
 690 | export interface Tool {
 691 |   /**
 692 |    * The name of the tool.
 693 |    */
 694 |   name: string;
 695 |   /**
 696 |    * A human-readable description of the tool.
 697 |    */
 698 |   description?: string;
 699 |   /**
 700 |    * A JSON Schema object defining the expected parameters for the tool.
 701 |    */
 702 |   inputSchema: {
 703 |     type: "object";
 704 |     properties?: { [key: string]: object };
 705 |     required?: string[];
 706 |   };
 707 | }
 708 | 
 709 | /* Logging */
 710 | /**
 711 |  * A request from the client to the server, to enable or adjust logging.
 712 |  */
 713 | export interface SetLevelRequest extends Request {
 714 |   method: "logging/setLevel";
 715 |   params: {
 716 |     /**
 717 |      * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/message.
 718 |      */
 719 |     level: LoggingLevel;
 720 |   };
 721 | }
 722 | 
 723 | /**
 724 |  * Notification of a log message passed from server to client. If no logging/setLevel request has been sent from the client, the server MAY decide which messages to send automatically.
 725 |  */
 726 | export interface LoggingMessageNotification extends Notification {
 727 |   method: "notifications/message";
 728 |   params: {
 729 |     /**
 730 |      * The severity of this log message.
 731 |      */
 732 |     level: LoggingLevel;
 733 |     /**
 734 |      * An optional name of the logger issuing this message.
 735 |      */
 736 |     logger?: string;
 737 |     /**
 738 |      * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
 739 |      */
 740 |     data: unknown;
 741 |   };
 742 | }
 743 | 
 744 | /**
 745 |  * The severity of a log message.
 746 |  *
 747 |  * These map to syslog message severities, as specified in RFC-5424:
 748 |  * https://datatracker.ietf.org/doc/html/rfc5424#section-6.2.1
 749 |  */
 750 | export type LoggingLevel =
 751 |   | "debug"
 752 |   | "info"
 753 |   | "notice"
 754 |   | "warning"
 755 |   | "error"
 756 |   | "critical"
 757 |   | "alert"
 758 |   | "emergency";
 759 | 
 760 | /* Sampling */
 761 | /**
 762 |  * A request from the server to sample an LLM via the client. The client has full discretion over which model to select. The client should also inform the user before beginning sampling, to allow them to inspect the request (human in the loop) and decide whether to approve it.
 763 |  */
 764 | export interface CreateMessageRequest extends Request {
 765 |   method: "sampling/createMessage";
 766 |   params: {
 767 |     messages: SamplingMessage[];
 768 |     /**
 769 |      * The server's preferences for which model to select. The client MAY ignore these preferences.
 770 |      */
 771 |     modelPreferences?: ModelPreferences;
 772 |     /**
 773 |      * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
 774 |      */
 775 |     systemPrompt?: string;
 776 |     /**
 777 |      * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt. The client MAY ignore this request.
 778 |      */
 779 |     includeContext?: "none" | "thisServer" | "allServers";
 780 |     /**
 781 |      * @TJS-type number
 782 |      */
 783 |     temperature?: number;
 784 |     /**
 785 |      * The maximum number of tokens to sample, as requested by the server. The client MAY choose to sample fewer tokens than requested.
 786 |      */
 787 |     maxTokens: number;
 788 |     stopSequences?: string[];
 789 |     /**
 790 |      * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
 791 |      */
 792 |     metadata?: object;
 793 |   };
 794 | }
 795 | 
 796 | /**
 797 |  * The client's response to a sampling/create_message request from the server. The client should inform the user before returning the sampled message, to allow them to inspect the response (human in the loop) and decide whether to allow the server to see it.
 798 |  */
 799 | export interface CreateMessageResult extends Result, SamplingMessage {
 800 |   /**
 801 |    * The name of the model that generated the message.
 802 |    */
 803 |   model: string;
 804 |   /**
 805 |    * The reason why sampling stopped, if known.
 806 |    */
 807 |   stopReason?: "endTurn" | "stopSequence" | "maxTokens" | string;
 808 | }
 809 | 
 810 | /**
 811 |  * Describes a message issued to or received from an LLM API.
 812 |  */
 813 | export interface SamplingMessage {
 814 |   role: Role;
 815 |   content: TextContent | ImageContent;
 816 | }
 817 | 
 818 | /**
 819 |  * Base for objects that include optional annotations for the client. The client can use annotations to inform how objects are used or displayed
 820 |  */
 821 | export interface Annotated {
 822 |   annotations?: {
 823 |     /**
 824 |      * Describes who the intended customer of this object or data is.
 825 |      * 
 826 |      * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
 827 |      */
 828 |     audience?: Role[];
 829 | 
 830 |     /**
 831 |      * Describes how important this data is for operating the server.
 832 |      * 
 833 |      * A value of 1 means "most important," and indicates that the data is
 834 |      * effectively required, while 0 means "least important," and indicates that
 835 |      * the data is entirely optional.
 836 |      *
 837 |      * @TJS-type number
 838 |      * @minimum 0
 839 |      * @maximum 1
 840 |      */
 841 |     priority?: number;
 842 |   }
 843 | }
 844 | 
 845 | /**
 846 |  * Text provided to or from an LLM.
 847 |  */
 848 | export interface TextContent extends Annotated {
 849 |   type: "text";
 850 |   /**
 851 |    * The text content of the message.
 852 |    */
 853 |   text: string;
 854 | }
 855 | 
 856 | /**
 857 |  * An image provided to or from an LLM.
 858 |  */
 859 | export interface ImageContent extends Annotated {
 860 |   type: "image";
 861 |   /**
 862 |    * The base64-encoded image data.
 863 |    *
 864 |    * @format byte
 865 |    */
 866 |   data: string;
 867 |   /**
 868 |    * The MIME type of the image. Different providers may support different image types.
 869 |    */
 870 |   mimeType: string;
 871 | }
 872 | 
 873 | /**
 874 |  * The server's preferences for model selection, requested of the client during sampling.
 875 |  *
 876 |  * Because LLMs can vary along multiple dimensions, choosing the "best" model is
 877 |  * rarely straightforward.  Different models excel in different areas—some are
 878 |  * faster but less capable, others are more capable but more expensive, and so
 879 |  * on. This interface allows servers to express their priorities across multiple
 880 |  * dimensions to help clients make an appropriate selection for their use case.
 881 |  *
 882 |  * These preferences are always advisory. The client MAY ignore them. It is also
 883 |  * up to the client to decide how to interpret these preferences and how to
 884 |  * balance them against other considerations.
 885 |  */
 886 | export interface ModelPreferences {
 887 |   /**
 888 |    * Optional hints to use for model selection.
 889 |    *
 890 |    * If multiple hints are specified, the client MUST evaluate them in order
 891 |    * (such that the first match is taken).
 892 |    *
 893 |    * The client SHOULD prioritize these hints over the numeric priorities, but
 894 |    * MAY still use the priorities to select from ambiguous matches.
 895 |    */
 896 |   hints?: ModelHint[];
 897 | 
 898 |   /**
 899 |    * How much to prioritize cost when selecting a model. A value of 0 means cost
 900 |    * is not important, while a value of 1 means cost is the most important
 901 |    * factor.
 902 |    *
 903 |    * @TJS-type number
 904 |    * @minimum 0
 905 |    * @maximum 1
 906 |    */
 907 |   costPriority?: number;
 908 | 
 909 |   /**
 910 |    * How much to prioritize sampling speed (latency) when selecting a model. A
 911 |    * value of 0 means speed is not important, while a value of 1 means speed is
 912 |    * the most important factor.
 913 |    *
 914 |    * @TJS-type number
 915 |    * @minimum 0
 916 |    * @maximum 1
 917 |    */
 918 |   speedPriority?: number;
 919 | 
 920 |   /**
 921 |    * How much to prioritize intelligence and capabilities when selecting a
 922 |    * model. A value of 0 means intelligence is not important, while a value of 1
 923 |    * means intelligence is the most important factor.
 924 |    *
 925 |    * @TJS-type number
 926 |    * @minimum 0
 927 |    * @maximum 1
 928 |    */
 929 |   intelligencePriority?: number;
 930 | }
 931 | 
 932 | /**
 933 |  * Hints to use for model selection.
 934 |  *
 935 |  * Keys not declared here are currently left unspecified by the spec and are up
 936 |  * to the client to interpret.
 937 |  */
 938 | export interface ModelHint {
 939 |   /**
 940 |    * A hint for a model name.
 941 |    *
 942 |    * The client SHOULD treat this as a substring of a model name; for example:
 943 |    *  - `claude-3-5-sonnet` should match `claude-3-5-sonnet-20241022`
 944 |    *  - `sonnet` should match `claude-3-5-sonnet-20241022`, `claude-3-sonnet-20240229`, etc.
 945 |    *  - `claude` should match any Claude model
 946 |    *
 947 |    * The client MAY also map the string to a different provider's model name or a different model family, as long as it fills a similar niche; for example:
 948 |    *  - `gemini-1.5-flash` could match `claude-3-haiku-20240307`
 949 |    */
 950 |   name?: string;
 951 | }
 952 | 
 953 | /* Autocomplete */
 954 | /**
 955 |  * A request from the client to the server, to ask for completion options.
 956 |  */
 957 | export interface CompleteRequest extends Request {
 958 |   method: "completion/complete";
 959 |   params: {
 960 |     ref: PromptReference | ResourceReference;
 961 |     /**
 962 |      * The argument's information
 963 |      */
 964 |     argument: {
 965 |       /**
 966 |        * The name of the argument
 967 |        */
 968 |       name: string;
 969 |       /**
 970 |        * The value of the argument to use for completion matching.
 971 |        */
 972 |       value: string;
 973 |     };
 974 |   };
 975 | }
 976 | 
 977 | /**
 978 |  * The server's response to a completion/complete request
 979 |  */
 980 | export interface CompleteResult extends Result {
 981 |   completion: {
 982 |     /**
 983 |      * An array of completion values. Must not exceed 100 items.
 984 |      */
 985 |     values: string[];
 986 |     /**
 987 |      * The total number of completion options available. This can exceed the number of values actually sent in the response.
 988 |      */
 989 |     total?: number;
 990 |     /**
 991 |      * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
 992 |      */
 993 |     hasMore?: boolean;
 994 |   };
 995 | }
 996 | 
 997 | /**
 998 |  * A reference to a resource or resource template definition.
 999 |  */
1000 | export interface ResourceReference {
1001 |   type: "ref/resource";
1002 |   /**
1003 |    * The URI or URI template of the resource.
1004 |    *
1005 |    * @format uri-template
1006 |    */
1007 |   uri: string;
1008 | }
1009 | 
1010 | /**
1011 |  * Identifies a prompt.
1012 |  */
1013 | export interface PromptReference {
1014 |   type: "ref/prompt";
1015 |   /**
1016 |    * The name of the prompt or prompt template
1017 |    */
1018 |   name: string;
1019 | }
1020 | 
1021 | /* Roots */
1022 | /**
1023 |  * Sent from the server to request a list of root URIs from the client. Roots allow
1024 |  * servers to ask for specific directories or files to operate on. A common example
1025 |  * for roots is providing a set of repositories or directories a server should operate
1026 |  * on.
1027 |  *
1028 |  * This request is typically used when the server needs to understand the file system
1029 |  * structure or access specific locations that the client has permission to read from.
1030 |  */
1031 | export interface ListRootsRequest extends Request {
1032 |   method: "roots/list";
1033 | }
1034 | 
1035 | /**
1036 |  * The client's response to a roots/list request from the server.
1037 |  * This result contains an array of Root objects, each representing a root directory
1038 |  * or file that the server can operate on.
1039 |  */
1040 | export interface ListRootsResult extends Result {
1041 |   roots: Root[];
1042 | }
1043 | 
1044 | /**
1045 |  * Represents a root directory or file that the server can operate on.
1046 |  */
1047 | export interface Root {
1048 |   /**
1049 |    * The URI identifying the root. This *must* start with file:// for now.
1050 |    * This restriction may be relaxed in future versions of the protocol to allow
1051 |    * other URI schemes.
1052 |    *
1053 |    * @format uri
1054 |    */
1055 |   uri: string;
1056 |   /**
1057 |    * An optional name for the root. This can be used to provide a human-readable
1058 |    * identifier for the root, which may be useful for display purposes or for
1059 |    * referencing the root in other parts of the application.
1060 |    */
1061 |   name?: string;
1062 | }
1063 | 
1064 | /**
1065 |  * A notification from the client to the server, informing it that the list of roots has changed.
1066 |  * This notification should be sent whenever the client adds, removes, or modifies any root.
1067 |  * The server should then request an updated list of roots using the ListRootsRequest.
1068 |  */
1069 | export interface RootsListChangedNotification extends Notification {
1070 |   method: "notifications/roots/list_changed";
1071 | }
1072 | 
1073 | /* Client messages */
1074 | export type ClientRequest =
1075 |   | PingRequest
1076 |   | InitializeRequest
1077 |   | CompleteRequest
1078 |   | SetLevelRequest
1079 |   | GetPromptRequest
1080 |   | ListPromptsRequest
1081 |   | ListResourcesRequest
1082 |   | ListResourceTemplatesRequest
1083 |   | ReadResourceRequest
1084 |   | SubscribeRequest
1085 |   | UnsubscribeRequest
1086 |   | CallToolRequest
1087 |   | ListToolsRequest;
1088 | 
1089 | export type ClientNotification =
1090 |   | CancelledNotification
1091 |   | ProgressNotification
1092 |   | InitializedNotification
1093 |   | RootsListChangedNotification;
1094 | 
1095 | export type ClientResult = EmptyResult | CreateMessageResult | ListRootsResult;
1096 | 
1097 | /* Server messages */
1098 | export type ServerRequest =
1099 |   | PingRequest
1100 |   | CreateMessageRequest
1101 |   | ListRootsRequest;
1102 | 
1103 | export type ServerNotification =
1104 |   | CancelledNotification
1105 |   | ProgressNotification
1106 |   | LoggingMessageNotification
1107 |   | ResourceUpdatedNotification
1108 |   | ResourceListChangedNotification
1109 |   | ToolListChangedNotification
1110 |   | PromptListChangedNotification;
1111 | 
1112 | export type ServerResult =
1113 |   | EmptyResult
1114 |   | InitializeResult
1115 |   | CompleteResult
1116 |   | GetPromptResult
1117 |   | ListPromptsResult
1118 |   | ListResourcesResult
1119 |   | ListResourceTemplatesResult
1120 |   | ReadResourceResult
1121 |   | CallToolResult
1122 |   | ListToolsResult;
1123 | 


--------------------------------------------------------------------------------
/schema/draft/schema.json:
--------------------------------------------------------------------------------
   1 | {
   2 |     "$schema": "http://json-schema.org/draft-07/schema#",
   3 |     "definitions": {
   4 |         "Annotations": {
   5 |             "description": "Optional annotations for the client. The client can use annotations to inform how objects are used or displayed",
   6 |             "properties": {
   7 |                 "audience": {
   8 |                     "description": "Describes who the intended customer of this object or data is.\n\nIt can include multiple entries to indicate content useful for multiple audiences (e.g., `[\"user\", \"assistant\"]`).",
   9 |                     "items": {
  10 |                         "$ref": "#/definitions/Role"
  11 |                     },
  12 |                     "type": "array"
  13 |                 },
  14 |                 "priority": {
  15 |                     "description": "Describes how important this data is for operating the server.\n\nA value of 1 means \"most important,\" and indicates that the data is\neffectively required, while 0 means \"least important,\" and indicates that\nthe data is entirely optional.",
  16 |                     "maximum": 1,
  17 |                     "minimum": 0,
  18 |                     "type": "number"
  19 |                 }
  20 |             },
  21 |             "type": "object"
  22 |         },
  23 |         "AudioContent": {
  24 |             "description": "Audio provided to or from an LLM.",
  25 |             "properties": {
  26 |                 "annotations": {
  27 |                     "$ref": "#/definitions/Annotations",
  28 |                     "description": "Optional annotations for the client."
  29 |                 },
  30 |                 "data": {
  31 |                     "description": "The base64-encoded audio data.",
  32 |                     "format": "byte",
  33 |                     "type": "string"
  34 |                 },
  35 |                 "mimeType": {
  36 |                     "description": "The MIME type of the audio. Different providers may support different audio types.",
  37 |                     "type": "string"
  38 |                 },
  39 |                 "type": {
  40 |                     "const": "audio",
  41 |                     "type": "string"
  42 |                 }
  43 |             },
  44 |             "required": [
  45 |                 "data",
  46 |                 "mimeType",
  47 |                 "type"
  48 |             ],
  49 |             "type": "object"
  50 |         },
  51 |         "BlobResourceContents": {
  52 |             "properties": {
  53 |                 "blob": {
  54 |                     "description": "A base64-encoded string representing the binary data of the item.",
  55 |                     "format": "byte",
  56 |                     "type": "string"
  57 |                 },
  58 |                 "mimeType": {
  59 |                     "description": "The MIME type of this resource, if known.",
  60 |                     "type": "string"
  61 |                 },
  62 |                 "uri": {
  63 |                     "description": "The URI of this resource.",
  64 |                     "format": "uri",
  65 |                     "type": "string"
  66 |                 }
  67 |             },
  68 |             "required": [
  69 |                 "blob",
  70 |                 "uri"
  71 |             ],
  72 |             "type": "object"
  73 |         },
  74 |         "CallToolRequest": {
  75 |             "description": "Used by the client to invoke a tool provided by the server.",
  76 |             "properties": {
  77 |                 "method": {
  78 |                     "const": "tools/call",
  79 |                     "type": "string"
  80 |                 },
  81 |                 "params": {
  82 |                     "properties": {
  83 |                         "arguments": {
  84 |                             "additionalProperties": {},
  85 |                             "type": "object"
  86 |                         },
  87 |                         "name": {
  88 |                             "type": "string"
  89 |                         }
  90 |                     },
  91 |                     "required": [
  92 |                         "name"
  93 |                     ],
  94 |                     "type": "object"
  95 |                 }
  96 |             },
  97 |             "required": [
  98 |                 "method",
  99 |                 "params"
 100 |             ],
 101 |             "type": "object"
 102 |         },
 103 |         "CallToolResult": {
 104 |             "description": "The server's response to a tool call.\n\nAny errors that originate from the tool SHOULD be reported inside the result\nobject, with `isError` set to true, _not_ as an MCP protocol-level error\nresponse. Otherwise, the LLM would not be able to see that an error occurred\nand self-correct.\n\nHowever, any errors in _finding_ the tool, an error indicating that the\nserver does not support tool calls, or any other exceptional conditions,\nshould be reported as an MCP error response.",
 105 |             "properties": {
 106 |                 "_meta": {
 107 |                     "additionalProperties": {},
 108 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 109 |                     "type": "object"
 110 |                 },
 111 |                 "content": {
 112 |                     "items": {
 113 |                         "anyOf": [
 114 |                             {
 115 |                                 "$ref": "#/definitions/TextContent"
 116 |                             },
 117 |                             {
 118 |                                 "$ref": "#/definitions/ImageContent"
 119 |                             },
 120 |                             {
 121 |                                 "$ref": "#/definitions/AudioContent"
 122 |                             },
 123 |                             {
 124 |                                 "$ref": "#/definitions/EmbeddedResource"
 125 |                             }
 126 |                         ]
 127 |                     },
 128 |                     "type": "array"
 129 |                 },
 130 |                 "isError": {
 131 |                     "description": "Whether the tool call ended in an error.\n\nIf not set, this is assumed to be false (the call was successful).",
 132 |                     "type": "boolean"
 133 |                 }
 134 |             },
 135 |             "required": [
 136 |                 "content"
 137 |             ],
 138 |             "type": "object"
 139 |         },
 140 |         "CancelledNotification": {
 141 |             "description": "This notification can be sent by either side to indicate that it is cancelling a previously-issued request.\n\nThe request SHOULD still be in-flight, but due to communication latency, it is always possible that this notification MAY arrive after the request has already finished.\n\nThis notification indicates that the result will be unused, so any associated processing SHOULD cease.\n\nA client MUST NOT attempt to cancel its `initialize` request.",
 142 |             "properties": {
 143 |                 "method": {
 144 |                     "const": "notifications/cancelled",
 145 |                     "type": "string"
 146 |                 },
 147 |                 "params": {
 148 |                     "properties": {
 149 |                         "reason": {
 150 |                             "description": "An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.",
 151 |                             "type": "string"
 152 |                         },
 153 |                         "requestId": {
 154 |                             "$ref": "#/definitions/RequestId",
 155 |                             "description": "The ID of the request to cancel.\n\nThis MUST correspond to the ID of a request previously issued in the same direction."
 156 |                         }
 157 |                     },
 158 |                     "required": [
 159 |                         "requestId"
 160 |                     ],
 161 |                     "type": "object"
 162 |                 }
 163 |             },
 164 |             "required": [
 165 |                 "method",
 166 |                 "params"
 167 |             ],
 168 |             "type": "object"
 169 |         },
 170 |         "ClientCapabilities": {
 171 |             "description": "Capabilities a client may support. Known capabilities are defined here, in this schema, but this is not a closed set: any client can define its own, additional capabilities.",
 172 |             "properties": {
 173 |                 "experimental": {
 174 |                     "additionalProperties": {
 175 |                         "additionalProperties": true,
 176 |                         "properties": {},
 177 |                         "type": "object"
 178 |                     },
 179 |                     "description": "Experimental, non-standard capabilities that the client supports.",
 180 |                     "type": "object"
 181 |                 },
 182 |                 "roots": {
 183 |                     "description": "Present if the client supports listing roots.",
 184 |                     "properties": {
 185 |                         "listChanged": {
 186 |                             "description": "Whether the client supports notifications for changes to the roots list.",
 187 |                             "type": "boolean"
 188 |                         }
 189 |                     },
 190 |                     "type": "object"
 191 |                 },
 192 |                 "sampling": {
 193 |                     "additionalProperties": true,
 194 |                     "description": "Present if the client supports sampling from an LLM.",
 195 |                     "properties": {},
 196 |                     "type": "object"
 197 |                 }
 198 |             },
 199 |             "type": "object"
 200 |         },
 201 |         "ClientNotification": {
 202 |             "anyOf": [
 203 |                 {
 204 |                     "$ref": "#/definitions/CancelledNotification"
 205 |                 },
 206 |                 {
 207 |                     "$ref": "#/definitions/InitializedNotification"
 208 |                 },
 209 |                 {
 210 |                     "$ref": "#/definitions/ProgressNotification"
 211 |                 },
 212 |                 {
 213 |                     "$ref": "#/definitions/RootsListChangedNotification"
 214 |                 }
 215 |             ]
 216 |         },
 217 |         "ClientRequest": {
 218 |             "anyOf": [
 219 |                 {
 220 |                     "$ref": "#/definitions/InitializeRequest"
 221 |                 },
 222 |                 {
 223 |                     "$ref": "#/definitions/PingRequest"
 224 |                 },
 225 |                 {
 226 |                     "$ref": "#/definitions/ListResourcesRequest"
 227 |                 },
 228 |                 {
 229 |                     "$ref": "#/definitions/ReadResourceRequest"
 230 |                 },
 231 |                 {
 232 |                     "$ref": "#/definitions/SubscribeRequest"
 233 |                 },
 234 |                 {
 235 |                     "$ref": "#/definitions/UnsubscribeRequest"
 236 |                 },
 237 |                 {
 238 |                     "$ref": "#/definitions/ListPromptsRequest"
 239 |                 },
 240 |                 {
 241 |                     "$ref": "#/definitions/GetPromptRequest"
 242 |                 },
 243 |                 {
 244 |                     "$ref": "#/definitions/ListToolsRequest"
 245 |                 },
 246 |                 {
 247 |                     "$ref": "#/definitions/CallToolRequest"
 248 |                 },
 249 |                 {
 250 |                     "$ref": "#/definitions/SetLevelRequest"
 251 |                 },
 252 |                 {
 253 |                     "$ref": "#/definitions/CompleteRequest"
 254 |                 }
 255 |             ]
 256 |         },
 257 |         "ClientResult": {
 258 |             "anyOf": [
 259 |                 {
 260 |                     "$ref": "#/definitions/Result"
 261 |                 },
 262 |                 {
 263 |                     "$ref": "#/definitions/CreateMessageResult"
 264 |                 },
 265 |                 {
 266 |                     "$ref": "#/definitions/ListRootsResult"
 267 |                 }
 268 |             ]
 269 |         },
 270 |         "CompleteRequest": {
 271 |             "description": "A request from the client to the server, to ask for completion options.",
 272 |             "properties": {
 273 |                 "method": {
 274 |                     "const": "completion/complete",
 275 |                     "type": "string"
 276 |                 },
 277 |                 "params": {
 278 |                     "properties": {
 279 |                         "argument": {
 280 |                             "description": "The argument's information",
 281 |                             "properties": {
 282 |                                 "name": {
 283 |                                     "description": "The name of the argument",
 284 |                                     "type": "string"
 285 |                                 },
 286 |                                 "value": {
 287 |                                     "description": "The value of the argument to use for completion matching.",
 288 |                                     "type": "string"
 289 |                                 }
 290 |                             },
 291 |                             "required": [
 292 |                                 "name",
 293 |                                 "value"
 294 |                             ],
 295 |                             "type": "object"
 296 |                         },
 297 |                         "ref": {
 298 |                             "anyOf": [
 299 |                                 {
 300 |                                     "$ref": "#/definitions/PromptReference"
 301 |                                 },
 302 |                                 {
 303 |                                     "$ref": "#/definitions/ResourceReference"
 304 |                                 }
 305 |                             ]
 306 |                         }
 307 |                     },
 308 |                     "required": [
 309 |                         "argument",
 310 |                         "ref"
 311 |                     ],
 312 |                     "type": "object"
 313 |                 }
 314 |             },
 315 |             "required": [
 316 |                 "method",
 317 |                 "params"
 318 |             ],
 319 |             "type": "object"
 320 |         },
 321 |         "CompleteResult": {
 322 |             "description": "The server's response to a completion/complete request",
 323 |             "properties": {
 324 |                 "_meta": {
 325 |                     "additionalProperties": {},
 326 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 327 |                     "type": "object"
 328 |                 },
 329 |                 "completion": {
 330 |                     "properties": {
 331 |                         "hasMore": {
 332 |                             "description": "Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.",
 333 |                             "type": "boolean"
 334 |                         },
 335 |                         "total": {
 336 |                             "description": "The total number of completion options available. This can exceed the number of values actually sent in the response.",
 337 |                             "type": "integer"
 338 |                         },
 339 |                         "values": {
 340 |                             "description": "An array of completion values. Must not exceed 100 items.",
 341 |                             "items": {
 342 |                                 "type": "string"
 343 |                             },
 344 |                             "type": "array"
 345 |                         }
 346 |                     },
 347 |                     "required": [
 348 |                         "values"
 349 |                     ],
 350 |                     "type": "object"
 351 |                 }
 352 |             },
 353 |             "required": [
 354 |                 "completion"
 355 |             ],
 356 |             "type": "object"
 357 |         },
 358 |         "CreateMessageRequest": {
 359 |             "description": "A request from the server to sample an LLM via the client. The client has full discretion over which model to select. The client should also inform the user before beginning sampling, to allow them to inspect the request (human in the loop) and decide whether to approve it.",
 360 |             "properties": {
 361 |                 "method": {
 362 |                     "const": "sampling/createMessage",
 363 |                     "type": "string"
 364 |                 },
 365 |                 "params": {
 366 |                     "properties": {
 367 |                         "includeContext": {
 368 |                             "description": "A request to include context from one or more MCP servers (including the caller), to be attached to the prompt. The client MAY ignore this request.",
 369 |                             "enum": [
 370 |                                 "allServers",
 371 |                                 "none",
 372 |                                 "thisServer"
 373 |                             ],
 374 |                             "type": "string"
 375 |                         },
 376 |                         "maxTokens": {
 377 |                             "description": "The maximum number of tokens to sample, as requested by the server. The client MAY choose to sample fewer tokens than requested.",
 378 |                             "type": "integer"
 379 |                         },
 380 |                         "messages": {
 381 |                             "items": {
 382 |                                 "$ref": "#/definitions/SamplingMessage"
 383 |                             },
 384 |                             "type": "array"
 385 |                         },
 386 |                         "metadata": {
 387 |                             "additionalProperties": true,
 388 |                             "description": "Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.",
 389 |                             "properties": {},
 390 |                             "type": "object"
 391 |                         },
 392 |                         "modelPreferences": {
 393 |                             "$ref": "#/definitions/ModelPreferences",
 394 |                             "description": "The server's preferences for which model to select. The client MAY ignore these preferences."
 395 |                         },
 396 |                         "stopSequences": {
 397 |                             "items": {
 398 |                                 "type": "string"
 399 |                             },
 400 |                             "type": "array"
 401 |                         },
 402 |                         "systemPrompt": {
 403 |                             "description": "An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.",
 404 |                             "type": "string"
 405 |                         },
 406 |                         "temperature": {
 407 |                             "type": "number"
 408 |                         }
 409 |                     },
 410 |                     "required": [
 411 |                         "maxTokens",
 412 |                         "messages"
 413 |                     ],
 414 |                     "type": "object"
 415 |                 }
 416 |             },
 417 |             "required": [
 418 |                 "method",
 419 |                 "params"
 420 |             ],
 421 |             "type": "object"
 422 |         },
 423 |         "CreateMessageResult": {
 424 |             "description": "The client's response to a sampling/create_message request from the server. The client should inform the user before returning the sampled message, to allow them to inspect the response (human in the loop) and decide whether to allow the server to see it.",
 425 |             "properties": {
 426 |                 "_meta": {
 427 |                     "additionalProperties": {},
 428 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 429 |                     "type": "object"
 430 |                 },
 431 |                 "content": {
 432 |                     "anyOf": [
 433 |                         {
 434 |                             "$ref": "#/definitions/TextContent"
 435 |                         },
 436 |                         {
 437 |                             "$ref": "#/definitions/ImageContent"
 438 |                         },
 439 |                         {
 440 |                             "$ref": "#/definitions/AudioContent"
 441 |                         }
 442 |                     ]
 443 |                 },
 444 |                 "model": {
 445 |                     "description": "The name of the model that generated the message.",
 446 |                     "type": "string"
 447 |                 },
 448 |                 "role": {
 449 |                     "$ref": "#/definitions/Role"
 450 |                 },
 451 |                 "stopReason": {
 452 |                     "description": "The reason why sampling stopped, if known.",
 453 |                     "type": "string"
 454 |                 }
 455 |             },
 456 |             "required": [
 457 |                 "content",
 458 |                 "model",
 459 |                 "role"
 460 |             ],
 461 |             "type": "object"
 462 |         },
 463 |         "Cursor": {
 464 |             "description": "An opaque token used to represent a cursor for pagination.",
 465 |             "type": "string"
 466 |         },
 467 |         "EmbeddedResource": {
 468 |             "description": "The contents of a resource, embedded into a prompt or tool call result.\n\nIt is up to the client how best to render embedded resources for the benefit\nof the LLM and/or the user.",
 469 |             "properties": {
 470 |                 "annotations": {
 471 |                     "$ref": "#/definitions/Annotations",
 472 |                     "description": "Optional annotations for the client."
 473 |                 },
 474 |                 "resource": {
 475 |                     "anyOf": [
 476 |                         {
 477 |                             "$ref": "#/definitions/TextResourceContents"
 478 |                         },
 479 |                         {
 480 |                             "$ref": "#/definitions/BlobResourceContents"
 481 |                         }
 482 |                     ]
 483 |                 },
 484 |                 "type": {
 485 |                     "const": "resource",
 486 |                     "type": "string"
 487 |                 }
 488 |             },
 489 |             "required": [
 490 |                 "resource",
 491 |                 "type"
 492 |             ],
 493 |             "type": "object"
 494 |         },
 495 |         "EmptyResult": {
 496 |             "$ref": "#/definitions/Result"
 497 |         },
 498 |         "GetPromptRequest": {
 499 |             "description": "Used by the client to get a prompt provided by the server.",
 500 |             "properties": {
 501 |                 "method": {
 502 |                     "const": "prompts/get",
 503 |                     "type": "string"
 504 |                 },
 505 |                 "params": {
 506 |                     "properties": {
 507 |                         "arguments": {
 508 |                             "additionalProperties": {
 509 |                                 "type": "string"
 510 |                             },
 511 |                             "description": "Arguments to use for templating the prompt.",
 512 |                             "type": "object"
 513 |                         },
 514 |                         "name": {
 515 |                             "description": "The name of the prompt or prompt template.",
 516 |                             "type": "string"
 517 |                         }
 518 |                     },
 519 |                     "required": [
 520 |                         "name"
 521 |                     ],
 522 |                     "type": "object"
 523 |                 }
 524 |             },
 525 |             "required": [
 526 |                 "method",
 527 |                 "params"
 528 |             ],
 529 |             "type": "object"
 530 |         },
 531 |         "GetPromptResult": {
 532 |             "description": "The server's response to a prompts/get request from the client.",
 533 |             "properties": {
 534 |                 "_meta": {
 535 |                     "additionalProperties": {},
 536 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 537 |                     "type": "object"
 538 |                 },
 539 |                 "description": {
 540 |                     "description": "An optional description for the prompt.",
 541 |                     "type": "string"
 542 |                 },
 543 |                 "messages": {
 544 |                     "items": {
 545 |                         "$ref": "#/definitions/PromptMessage"
 546 |                     },
 547 |                     "type": "array"
 548 |                 }
 549 |             },
 550 |             "required": [
 551 |                 "messages"
 552 |             ],
 553 |             "type": "object"
 554 |         },
 555 |         "ImageContent": {
 556 |             "description": "An image provided to or from an LLM.",
 557 |             "properties": {
 558 |                 "annotations": {
 559 |                     "$ref": "#/definitions/Annotations",
 560 |                     "description": "Optional annotations for the client."
 561 |                 },
 562 |                 "data": {
 563 |                     "description": "The base64-encoded image data.",
 564 |                     "format": "byte",
 565 |                     "type": "string"
 566 |                 },
 567 |                 "mimeType": {
 568 |                     "description": "The MIME type of the image. Different providers may support different image types.",
 569 |                     "type": "string"
 570 |                 },
 571 |                 "type": {
 572 |                     "const": "image",
 573 |                     "type": "string"
 574 |                 }
 575 |             },
 576 |             "required": [
 577 |                 "data",
 578 |                 "mimeType",
 579 |                 "type"
 580 |             ],
 581 |             "type": "object"
 582 |         },
 583 |         "Implementation": {
 584 |             "description": "Describes the name and version of an MCP implementation.",
 585 |             "properties": {
 586 |                 "name": {
 587 |                     "type": "string"
 588 |                 },
 589 |                 "version": {
 590 |                     "type": "string"
 591 |                 }
 592 |             },
 593 |             "required": [
 594 |                 "name",
 595 |                 "version"
 596 |             ],
 597 |             "type": "object"
 598 |         },
 599 |         "InitializeRequest": {
 600 |             "description": "This request is sent from the client to the server when it first connects, asking it to begin initialization.",
 601 |             "properties": {
 602 |                 "method": {
 603 |                     "const": "initialize",
 604 |                     "type": "string"
 605 |                 },
 606 |                 "params": {
 607 |                     "properties": {
 608 |                         "capabilities": {
 609 |                             "$ref": "#/definitions/ClientCapabilities"
 610 |                         },
 611 |                         "clientInfo": {
 612 |                             "$ref": "#/definitions/Implementation"
 613 |                         },
 614 |                         "protocolVersion": {
 615 |                             "description": "The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.",
 616 |                             "type": "string"
 617 |                         }
 618 |                     },
 619 |                     "required": [
 620 |                         "capabilities",
 621 |                         "clientInfo",
 622 |                         "protocolVersion"
 623 |                     ],
 624 |                     "type": "object"
 625 |                 }
 626 |             },
 627 |             "required": [
 628 |                 "method",
 629 |                 "params"
 630 |             ],
 631 |             "type": "object"
 632 |         },
 633 |         "InitializeResult": {
 634 |             "description": "After receiving an initialize request from the client, the server sends this response.",
 635 |             "properties": {
 636 |                 "_meta": {
 637 |                     "additionalProperties": {},
 638 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 639 |                     "type": "object"
 640 |                 },
 641 |                 "capabilities": {
 642 |                     "$ref": "#/definitions/ServerCapabilities"
 643 |                 },
 644 |                 "instructions": {
 645 |                     "description": "Instructions describing how to use the server and its features.\n\nThis can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a \"hint\" to the model. For example, this information MAY be added to the system prompt.",
 646 |                     "type": "string"
 647 |                 },
 648 |                 "protocolVersion": {
 649 |                     "description": "The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.",
 650 |                     "type": "string"
 651 |                 },
 652 |                 "serverInfo": {
 653 |                     "$ref": "#/definitions/Implementation"
 654 |                 }
 655 |             },
 656 |             "required": [
 657 |                 "capabilities",
 658 |                 "protocolVersion",
 659 |                 "serverInfo"
 660 |             ],
 661 |             "type": "object"
 662 |         },
 663 |         "InitializedNotification": {
 664 |             "description": "This notification is sent from the client to the server after initialization has finished.",
 665 |             "properties": {
 666 |                 "method": {
 667 |                     "const": "notifications/initialized",
 668 |                     "type": "string"
 669 |                 },
 670 |                 "params": {
 671 |                     "additionalProperties": {},
 672 |                     "properties": {
 673 |                         "_meta": {
 674 |                             "additionalProperties": {},
 675 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
 676 |                             "type": "object"
 677 |                         }
 678 |                     },
 679 |                     "type": "object"
 680 |                 }
 681 |             },
 682 |             "required": [
 683 |                 "method"
 684 |             ],
 685 |             "type": "object"
 686 |         },
 687 |         "JSONRPCError": {
 688 |             "description": "A response to a request that indicates an error occurred.",
 689 |             "properties": {
 690 |                 "error": {
 691 |                     "properties": {
 692 |                         "code": {
 693 |                             "description": "The error type that occurred.",
 694 |                             "type": "integer"
 695 |                         },
 696 |                         "data": {
 697 |                             "description": "Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.)."
 698 |                         },
 699 |                         "message": {
 700 |                             "description": "A short description of the error. The message SHOULD be limited to a concise single sentence.",
 701 |                             "type": "string"
 702 |                         }
 703 |                     },
 704 |                     "required": [
 705 |                         "code",
 706 |                         "message"
 707 |                     ],
 708 |                     "type": "object"
 709 |                 },
 710 |                 "id": {
 711 |                     "$ref": "#/definitions/RequestId"
 712 |                 },
 713 |                 "jsonrpc": {
 714 |                     "const": "2.0",
 715 |                     "type": "string"
 716 |                 }
 717 |             },
 718 |             "required": [
 719 |                 "error",
 720 |                 "id",
 721 |                 "jsonrpc"
 722 |             ],
 723 |             "type": "object"
 724 |         },
 725 |         "JSONRPCMessage": {
 726 |             "anyOf": [
 727 |                 {
 728 |                     "$ref": "#/definitions/JSONRPCRequest"
 729 |                 },
 730 |                 {
 731 |                     "$ref": "#/definitions/JSONRPCNotification"
 732 |                 },
 733 |                 {
 734 |                     "$ref": "#/definitions/JSONRPCResponse"
 735 |                 },
 736 |                 {
 737 |                     "$ref": "#/definitions/JSONRPCError"
 738 |                 }
 739 |             ]
 740 |         },
 741 |         "JSONRPCNotification": {
 742 |             "description": "A notification which does not expect a response.",
 743 |             "properties": {
 744 |                 "jsonrpc": {
 745 |                     "const": "2.0",
 746 |                     "type": "string"
 747 |                 },
 748 |                 "method": {
 749 |                     "type": "string"
 750 |                 },
 751 |                 "params": {
 752 |                     "additionalProperties": {},
 753 |                     "properties": {
 754 |                         "_meta": {
 755 |                             "additionalProperties": {},
 756 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
 757 |                             "type": "object"
 758 |                         }
 759 |                     },
 760 |                     "type": "object"
 761 |                 }
 762 |             },
 763 |             "required": [
 764 |                 "jsonrpc",
 765 |                 "method"
 766 |             ],
 767 |             "type": "object"
 768 |         },
 769 |         "JSONRPCRequest": {
 770 |             "description": "A request that expects a response.",
 771 |             "properties": {
 772 |                 "id": {
 773 |                     "$ref": "#/definitions/RequestId"
 774 |                 },
 775 |                 "jsonrpc": {
 776 |                     "const": "2.0",
 777 |                     "type": "string"
 778 |                 },
 779 |                 "method": {
 780 |                     "type": "string"
 781 |                 },
 782 |                 "params": {
 783 |                     "additionalProperties": {},
 784 |                     "properties": {
 785 |                         "_meta": {
 786 |                             "properties": {
 787 |                                 "progressToken": {
 788 |                                     "$ref": "#/definitions/ProgressToken",
 789 |                                     "description": "If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications."
 790 |                                 }
 791 |                             },
 792 |                             "type": "object"
 793 |                         }
 794 |                     },
 795 |                     "type": "object"
 796 |                 }
 797 |             },
 798 |             "required": [
 799 |                 "id",
 800 |                 "jsonrpc",
 801 |                 "method"
 802 |             ],
 803 |             "type": "object"
 804 |         },
 805 |         "JSONRPCResponse": {
 806 |             "description": "A successful (non-error) response to a request.",
 807 |             "properties": {
 808 |                 "id": {
 809 |                     "$ref": "#/definitions/RequestId"
 810 |                 },
 811 |                 "jsonrpc": {
 812 |                     "const": "2.0",
 813 |                     "type": "string"
 814 |                 },
 815 |                 "result": {
 816 |                     "$ref": "#/definitions/Result"
 817 |                 }
 818 |             },
 819 |             "required": [
 820 |                 "id",
 821 |                 "jsonrpc",
 822 |                 "result"
 823 |             ],
 824 |             "type": "object"
 825 |         },
 826 |         "ListPromptsRequest": {
 827 |             "description": "Sent from the client to request a list of prompts and prompt templates the server has.",
 828 |             "properties": {
 829 |                 "method": {
 830 |                     "const": "prompts/list",
 831 |                     "type": "string"
 832 |                 },
 833 |                 "params": {
 834 |                     "properties": {
 835 |                         "cursor": {
 836 |                             "description": "An opaque token representing the current pagination position.\nIf provided, the server should return results starting after this cursor.",
 837 |                             "type": "string"
 838 |                         }
 839 |                     },
 840 |                     "type": "object"
 841 |                 }
 842 |             },
 843 |             "required": [
 844 |                 "method"
 845 |             ],
 846 |             "type": "object"
 847 |         },
 848 |         "ListPromptsResult": {
 849 |             "description": "The server's response to a prompts/list request from the client.",
 850 |             "properties": {
 851 |                 "_meta": {
 852 |                     "additionalProperties": {},
 853 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 854 |                     "type": "object"
 855 |                 },
 856 |                 "nextCursor": {
 857 |                     "description": "An opaque token representing the pagination position after the last returned result.\nIf present, there may be more results available.",
 858 |                     "type": "string"
 859 |                 },
 860 |                 "prompts": {
 861 |                     "items": {
 862 |                         "$ref": "#/definitions/Prompt"
 863 |                     },
 864 |                     "type": "array"
 865 |                 }
 866 |             },
 867 |             "required": [
 868 |                 "prompts"
 869 |             ],
 870 |             "type": "object"
 871 |         },
 872 |         "ListResourceTemplatesRequest": {
 873 |             "description": "Sent from the client to request a list of resource templates the server has.",
 874 |             "properties": {
 875 |                 "method": {
 876 |                     "const": "resources/templates/list",
 877 |                     "type": "string"
 878 |                 },
 879 |                 "params": {
 880 |                     "properties": {
 881 |                         "cursor": {
 882 |                             "description": "An opaque token representing the current pagination position.\nIf provided, the server should return results starting after this cursor.",
 883 |                             "type": "string"
 884 |                         }
 885 |                     },
 886 |                     "type": "object"
 887 |                 }
 888 |             },
 889 |             "required": [
 890 |                 "method"
 891 |             ],
 892 |             "type": "object"
 893 |         },
 894 |         "ListResourceTemplatesResult": {
 895 |             "description": "The server's response to a resources/templates/list request from the client.",
 896 |             "properties": {
 897 |                 "_meta": {
 898 |                     "additionalProperties": {},
 899 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 900 |                     "type": "object"
 901 |                 },
 902 |                 "nextCursor": {
 903 |                     "description": "An opaque token representing the pagination position after the last returned result.\nIf present, there may be more results available.",
 904 |                     "type": "string"
 905 |                 },
 906 |                 "resourceTemplates": {
 907 |                     "items": {
 908 |                         "$ref": "#/definitions/ResourceTemplate"
 909 |                     },
 910 |                     "type": "array"
 911 |                 }
 912 |             },
 913 |             "required": [
 914 |                 "resourceTemplates"
 915 |             ],
 916 |             "type": "object"
 917 |         },
 918 |         "ListResourcesRequest": {
 919 |             "description": "Sent from the client to request a list of resources the server has.",
 920 |             "properties": {
 921 |                 "method": {
 922 |                     "const": "resources/list",
 923 |                     "type": "string"
 924 |                 },
 925 |                 "params": {
 926 |                     "properties": {
 927 |                         "cursor": {
 928 |                             "description": "An opaque token representing the current pagination position.\nIf provided, the server should return results starting after this cursor.",
 929 |                             "type": "string"
 930 |                         }
 931 |                     },
 932 |                     "type": "object"
 933 |                 }
 934 |             },
 935 |             "required": [
 936 |                 "method"
 937 |             ],
 938 |             "type": "object"
 939 |         },
 940 |         "ListResourcesResult": {
 941 |             "description": "The server's response to a resources/list request from the client.",
 942 |             "properties": {
 943 |                 "_meta": {
 944 |                     "additionalProperties": {},
 945 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 946 |                     "type": "object"
 947 |                 },
 948 |                 "nextCursor": {
 949 |                     "description": "An opaque token representing the pagination position after the last returned result.\nIf present, there may be more results available.",
 950 |                     "type": "string"
 951 |                 },
 952 |                 "resources": {
 953 |                     "items": {
 954 |                         "$ref": "#/definitions/Resource"
 955 |                     },
 956 |                     "type": "array"
 957 |                 }
 958 |             },
 959 |             "required": [
 960 |                 "resources"
 961 |             ],
 962 |             "type": "object"
 963 |         },
 964 |         "ListRootsRequest": {
 965 |             "description": "Sent from the server to request a list of root URIs from the client. Roots allow\nservers to ask for specific directories or files to operate on. A common example\nfor roots is providing a set of repositories or directories a server should operate\non.\n\nThis request is typically used when the server needs to understand the file system\nstructure or access specific locations that the client has permission to read from.",
 966 |             "properties": {
 967 |                 "method": {
 968 |                     "const": "roots/list",
 969 |                     "type": "string"
 970 |                 },
 971 |                 "params": {
 972 |                     "additionalProperties": {},
 973 |                     "properties": {
 974 |                         "_meta": {
 975 |                             "properties": {
 976 |                                 "progressToken": {
 977 |                                     "$ref": "#/definitions/ProgressToken",
 978 |                                     "description": "If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications."
 979 |                                 }
 980 |                             },
 981 |                             "type": "object"
 982 |                         }
 983 |                     },
 984 |                     "type": "object"
 985 |                 }
 986 |             },
 987 |             "required": [
 988 |                 "method"
 989 |             ],
 990 |             "type": "object"
 991 |         },
 992 |         "ListRootsResult": {
 993 |             "description": "The client's response to a roots/list request from the server.\nThis result contains an array of Root objects, each representing a root directory\nor file that the server can operate on.",
 994 |             "properties": {
 995 |                 "_meta": {
 996 |                     "additionalProperties": {},
 997 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
 998 |                     "type": "object"
 999 |                 },
1000 |                 "roots": {
1001 |                     "items": {
1002 |                         "$ref": "#/definitions/Root"
1003 |                     },
1004 |                     "type": "array"
1005 |                 }
1006 |             },
1007 |             "required": [
1008 |                 "roots"
1009 |             ],
1010 |             "type": "object"
1011 |         },
1012 |         "ListToolsRequest": {
1013 |             "description": "Sent from the client to request a list of tools the server has.",
1014 |             "properties": {
1015 |                 "method": {
1016 |                     "const": "tools/list",
1017 |                     "type": "string"
1018 |                 },
1019 |                 "params": {
1020 |                     "properties": {
1021 |                         "cursor": {
1022 |                             "description": "An opaque token representing the current pagination position.\nIf provided, the server should return results starting after this cursor.",
1023 |                             "type": "string"
1024 |                         }
1025 |                     },
1026 |                     "type": "object"
1027 |                 }
1028 |             },
1029 |             "required": [
1030 |                 "method"
1031 |             ],
1032 |             "type": "object"
1033 |         },
1034 |         "ListToolsResult": {
1035 |             "description": "The server's response to a tools/list request from the client.",
1036 |             "properties": {
1037 |                 "_meta": {
1038 |                     "additionalProperties": {},
1039 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
1040 |                     "type": "object"
1041 |                 },
1042 |                 "nextCursor": {
1043 |                     "description": "An opaque token representing the pagination position after the last returned result.\nIf present, there may be more results available.",
1044 |                     "type": "string"
1045 |                 },
1046 |                 "tools": {
1047 |                     "items": {
1048 |                         "$ref": "#/definitions/Tool"
1049 |                     },
1050 |                     "type": "array"
1051 |                 }
1052 |             },
1053 |             "required": [
1054 |                 "tools"
1055 |             ],
1056 |             "type": "object"
1057 |         },
1058 |         "LoggingLevel": {
1059 |             "description": "The severity of a log message.\n\nThese map to syslog message severities, as specified in RFC-5424:\nhttps://datatracker.ietf.org/doc/html/rfc5424#section-6.2.1",
1060 |             "enum": [
1061 |                 "alert",
1062 |                 "critical",
1063 |                 "debug",
1064 |                 "emergency",
1065 |                 "error",
1066 |                 "info",
1067 |                 "notice",
1068 |                 "warning"
1069 |             ],
1070 |             "type": "string"
1071 |         },
1072 |         "LoggingMessageNotification": {
1073 |             "description": "Notification of a log message passed from server to client. If no logging/setLevel request has been sent from the client, the server MAY decide which messages to send automatically.",
1074 |             "properties": {
1075 |                 "method": {
1076 |                     "const": "notifications/message",
1077 |                     "type": "string"
1078 |                 },
1079 |                 "params": {
1080 |                     "properties": {
1081 |                         "data": {
1082 |                             "description": "The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here."
1083 |                         },
1084 |                         "level": {
1085 |                             "$ref": "#/definitions/LoggingLevel",
1086 |                             "description": "The severity of this log message."
1087 |                         },
1088 |                         "logger": {
1089 |                             "description": "An optional name of the logger issuing this message.",
1090 |                             "type": "string"
1091 |                         }
1092 |                     },
1093 |                     "required": [
1094 |                         "data",
1095 |                         "level"
1096 |                     ],
1097 |                     "type": "object"
1098 |                 }
1099 |             },
1100 |             "required": [
1101 |                 "method",
1102 |                 "params"
1103 |             ],
1104 |             "type": "object"
1105 |         },
1106 |         "ModelHint": {
1107 |             "description": "Hints to use for model selection.\n\nKeys not declared here are currently left unspecified by the spec and are up\nto the client to interpret.",
1108 |             "properties": {
1109 |                 "name": {
1110 |                     "description": "A hint for a model name.\n\nThe client SHOULD treat this as a substring of a model name; for example:\n - `claude-3-5-sonnet` should match `claude-3-5-sonnet-20241022`\n - `sonnet` should match `claude-3-5-sonnet-20241022`, `claude-3-sonnet-20240229`, etc.\n - `claude` should match any Claude model\n\nThe client MAY also map the string to a different provider's model name or a different model family, as long as it fills a similar niche; for example:\n - `gemini-1.5-flash` could match `claude-3-haiku-20240307`",
1111 |                     "type": "string"
1112 |                 }
1113 |             },
1114 |             "type": "object"
1115 |         },
1116 |         "ModelPreferences": {
1117 |             "description": "The server's preferences for model selection, requested of the client during sampling.\n\nBecause LLMs can vary along multiple dimensions, choosing the \"best\" model is\nrarely straightforward.  Different models excel in different areas—some are\nfaster but less capable, others are more capable but more expensive, and so\non. This interface allows servers to express their priorities across multiple\ndimensions to help clients make an appropriate selection for their use case.\n\nThese preferences are always advisory. The client MAY ignore them. It is also\nup to the client to decide how to interpret these preferences and how to\nbalance them against other considerations.",
1118 |             "properties": {
1119 |                 "costPriority": {
1120 |                     "description": "How much to prioritize cost when selecting a model. A value of 0 means cost\nis not important, while a value of 1 means cost is the most important\nfactor.",
1121 |                     "maximum": 1,
1122 |                     "minimum": 0,
1123 |                     "type": "number"
1124 |                 },
1125 |                 "hints": {
1126 |                     "description": "Optional hints to use for model selection.\n\nIf multiple hints are specified, the client MUST evaluate them in order\n(such that the first match is taken).\n\nThe client SHOULD prioritize these hints over the numeric priorities, but\nMAY still use the priorities to select from ambiguous matches.",
1127 |                     "items": {
1128 |                         "$ref": "#/definitions/ModelHint"
1129 |                     },
1130 |                     "type": "array"
1131 |                 },
1132 |                 "intelligencePriority": {
1133 |                     "description": "How much to prioritize intelligence and capabilities when selecting a\nmodel. A value of 0 means intelligence is not important, while a value of 1\nmeans intelligence is the most important factor.",
1134 |                     "maximum": 1,
1135 |                     "minimum": 0,
1136 |                     "type": "number"
1137 |                 },
1138 |                 "speedPriority": {
1139 |                     "description": "How much to prioritize sampling speed (latency) when selecting a model. A\nvalue of 0 means speed is not important, while a value of 1 means speed is\nthe most important factor.",
1140 |                     "maximum": 1,
1141 |                     "minimum": 0,
1142 |                     "type": "number"
1143 |                 }
1144 |             },
1145 |             "type": "object"
1146 |         },
1147 |         "Notification": {
1148 |             "properties": {
1149 |                 "method": {
1150 |                     "type": "string"
1151 |                 },
1152 |                 "params": {
1153 |                     "additionalProperties": {},
1154 |                     "properties": {
1155 |                         "_meta": {
1156 |                             "additionalProperties": {},
1157 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
1158 |                             "type": "object"
1159 |                         }
1160 |                     },
1161 |                     "type": "object"
1162 |                 }
1163 |             },
1164 |             "required": [
1165 |                 "method"
1166 |             ],
1167 |             "type": "object"
1168 |         },
1169 |         "PaginatedRequest": {
1170 |             "properties": {
1171 |                 "method": {
1172 |                     "type": "string"
1173 |                 },
1174 |                 "params": {
1175 |                     "properties": {
1176 |                         "cursor": {
1177 |                             "description": "An opaque token representing the current pagination position.\nIf provided, the server should return results starting after this cursor.",
1178 |                             "type": "string"
1179 |                         }
1180 |                     },
1181 |                     "type": "object"
1182 |                 }
1183 |             },
1184 |             "required": [
1185 |                 "method"
1186 |             ],
1187 |             "type": "object"
1188 |         },
1189 |         "PaginatedResult": {
1190 |             "properties": {
1191 |                 "_meta": {
1192 |                     "additionalProperties": {},
1193 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
1194 |                     "type": "object"
1195 |                 },
1196 |                 "nextCursor": {
1197 |                     "description": "An opaque token representing the pagination position after the last returned result.\nIf present, there may be more results available.",
1198 |                     "type": "string"
1199 |                 }
1200 |             },
1201 |             "type": "object"
1202 |         },
1203 |         "PingRequest": {
1204 |             "description": "A ping, issued by either the server or the client, to check that the other party is still alive. The receiver must promptly respond, or else may be disconnected.",
1205 |             "properties": {
1206 |                 "method": {
1207 |                     "const": "ping",
1208 |                     "type": "string"
1209 |                 },
1210 |                 "params": {
1211 |                     "additionalProperties": {},
1212 |                     "properties": {
1213 |                         "_meta": {
1214 |                             "properties": {
1215 |                                 "progressToken": {
1216 |                                     "$ref": "#/definitions/ProgressToken",
1217 |                                     "description": "If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications."
1218 |                                 }
1219 |                             },
1220 |                             "type": "object"
1221 |                         }
1222 |                     },
1223 |                     "type": "object"
1224 |                 }
1225 |             },
1226 |             "required": [
1227 |                 "method"
1228 |             ],
1229 |             "type": "object"
1230 |         },
1231 |         "ProgressNotification": {
1232 |             "description": "An out-of-band notification used to inform the receiver of a progress update for a long-running request.",
1233 |             "properties": {
1234 |                 "method": {
1235 |                     "const": "notifications/progress",
1236 |                     "type": "string"
1237 |                 },
1238 |                 "params": {
1239 |                     "properties": {
1240 |                         "message": {
1241 |                             "description": "An optional message describing the current progress.",
1242 |                             "type": "string"
1243 |                         },
1244 |                         "progress": {
1245 |                             "description": "The progress thus far. This should increase every time progress is made, even if the total is unknown.",
1246 |                             "type": "number"
1247 |                         },
1248 |                         "progressToken": {
1249 |                             "$ref": "#/definitions/ProgressToken",
1250 |                             "description": "The progress token which was given in the initial request, used to associate this notification with the request that is proceeding."
1251 |                         },
1252 |                         "total": {
1253 |                             "description": "Total number of items to process (or total progress required), if known.",
1254 |                             "type": "number"
1255 |                         }
1256 |                     },
1257 |                     "required": [
1258 |                         "progress",
1259 |                         "progressToken"
1260 |                     ],
1261 |                     "type": "object"
1262 |                 }
1263 |             },
1264 |             "required": [
1265 |                 "method",
1266 |                 "params"
1267 |             ],
1268 |             "type": "object"
1269 |         },
1270 |         "ProgressToken": {
1271 |             "description": "A progress token, used to associate progress notifications with the original request.",
1272 |             "type": [
1273 |                 "string",
1274 |                 "integer"
1275 |             ]
1276 |         },
1277 |         "Prompt": {
1278 |             "description": "A prompt or prompt template that the server offers.",
1279 |             "properties": {
1280 |                 "arguments": {
1281 |                     "description": "A list of arguments to use for templating the prompt.",
1282 |                     "items": {
1283 |                         "$ref": "#/definitions/PromptArgument"
1284 |                     },
1285 |                     "type": "array"
1286 |                 },
1287 |                 "description": {
1288 |                     "description": "An optional description of what this prompt provides",
1289 |                     "type": "string"
1290 |                 },
1291 |                 "name": {
1292 |                     "description": "The name of the prompt or prompt template.",
1293 |                     "type": "string"
1294 |                 }
1295 |             },
1296 |             "required": [
1297 |                 "name"
1298 |             ],
1299 |             "type": "object"
1300 |         },
1301 |         "PromptArgument": {
1302 |             "description": "Describes an argument that a prompt can accept.",
1303 |             "properties": {
1304 |                 "description": {
1305 |                     "description": "A human-readable description of the argument.",
1306 |                     "type": "string"
1307 |                 },
1308 |                 "name": {
1309 |                     "description": "The name of the argument.",
1310 |                     "type": "string"
1311 |                 },
1312 |                 "required": {
1313 |                     "description": "Whether this argument must be provided.",
1314 |                     "type": "boolean"
1315 |                 }
1316 |             },
1317 |             "required": [
1318 |                 "name"
1319 |             ],
1320 |             "type": "object"
1321 |         },
1322 |         "PromptListChangedNotification": {
1323 |             "description": "An optional notification from the server to the client, informing it that the list of prompts it offers has changed. This may be issued by servers without any previous subscription from the client.",
1324 |             "properties": {
1325 |                 "method": {
1326 |                     "const": "notifications/prompts/list_changed",
1327 |                     "type": "string"
1328 |                 },
1329 |                 "params": {
1330 |                     "additionalProperties": {},
1331 |                     "properties": {
1332 |                         "_meta": {
1333 |                             "additionalProperties": {},
1334 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
1335 |                             "type": "object"
1336 |                         }
1337 |                     },
1338 |                     "type": "object"
1339 |                 }
1340 |             },
1341 |             "required": [
1342 |                 "method"
1343 |             ],
1344 |             "type": "object"
1345 |         },
1346 |         "PromptMessage": {
1347 |             "description": "Describes a message returned as part of a prompt.\n\nThis is similar to `SamplingMessage`, but also supports the embedding of\nresources from the MCP server.",
1348 |             "properties": {
1349 |                 "content": {
1350 |                     "anyOf": [
1351 |                         {
1352 |                             "$ref": "#/definitions/TextContent"
1353 |                         },
1354 |                         {
1355 |                             "$ref": "#/definitions/ImageContent"
1356 |                         },
1357 |                         {
1358 |                             "$ref": "#/definitions/AudioContent"
1359 |                         },
1360 |                         {
1361 |                             "$ref": "#/definitions/EmbeddedResource"
1362 |                         }
1363 |                     ]
1364 |                 },
1365 |                 "role": {
1366 |                     "$ref": "#/definitions/Role"
1367 |                 }
1368 |             },
1369 |             "required": [
1370 |                 "content",
1371 |                 "role"
1372 |             ],
1373 |             "type": "object"
1374 |         },
1375 |         "PromptReference": {
1376 |             "description": "Identifies a prompt.",
1377 |             "properties": {
1378 |                 "name": {
1379 |                     "description": "The name of the prompt or prompt template",
1380 |                     "type": "string"
1381 |                 },
1382 |                 "type": {
1383 |                     "const": "ref/prompt",
1384 |                     "type": "string"
1385 |                 }
1386 |             },
1387 |             "required": [
1388 |                 "name",
1389 |                 "type"
1390 |             ],
1391 |             "type": "object"
1392 |         },
1393 |         "ReadResourceRequest": {
1394 |             "description": "Sent from the client to the server, to read a specific resource URI.",
1395 |             "properties": {
1396 |                 "method": {
1397 |                     "const": "resources/read",
1398 |                     "type": "string"
1399 |                 },
1400 |                 "params": {
1401 |                     "properties": {
1402 |                         "uri": {
1403 |                             "description": "The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.",
1404 |                             "format": "uri",
1405 |                             "type": "string"
1406 |                         }
1407 |                     },
1408 |                     "required": [
1409 |                         "uri"
1410 |                     ],
1411 |                     "type": "object"
1412 |                 }
1413 |             },
1414 |             "required": [
1415 |                 "method",
1416 |                 "params"
1417 |             ],
1418 |             "type": "object"
1419 |         },
1420 |         "ReadResourceResult": {
1421 |             "description": "The server's response to a resources/read request from the client.",
1422 |             "properties": {
1423 |                 "_meta": {
1424 |                     "additionalProperties": {},
1425 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
1426 |                     "type": "object"
1427 |                 },
1428 |                 "contents": {
1429 |                     "items": {
1430 |                         "anyOf": [
1431 |                             {
1432 |                                 "$ref": "#/definitions/TextResourceContents"
1433 |                             },
1434 |                             {
1435 |                                 "$ref": "#/definitions/BlobResourceContents"
1436 |                             }
1437 |                         ]
1438 |                     },
1439 |                     "type": "array"
1440 |                 }
1441 |             },
1442 |             "required": [
1443 |                 "contents"
1444 |             ],
1445 |             "type": "object"
1446 |         },
1447 |         "Request": {
1448 |             "properties": {
1449 |                 "method": {
1450 |                     "type": "string"
1451 |                 },
1452 |                 "params": {
1453 |                     "additionalProperties": {},
1454 |                     "properties": {
1455 |                         "_meta": {
1456 |                             "properties": {
1457 |                                 "progressToken": {
1458 |                                     "$ref": "#/definitions/ProgressToken",
1459 |                                     "description": "If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications."
1460 |                                 }
1461 |                             },
1462 |                             "type": "object"
1463 |                         }
1464 |                     },
1465 |                     "type": "object"
1466 |                 }
1467 |             },
1468 |             "required": [
1469 |                 "method"
1470 |             ],
1471 |             "type": "object"
1472 |         },
1473 |         "RequestId": {
1474 |             "description": "A uniquely identifying ID for a request in JSON-RPC.",
1475 |             "type": [
1476 |                 "string",
1477 |                 "integer"
1478 |             ]
1479 |         },
1480 |         "Resource": {
1481 |             "description": "A known resource that the server is capable of reading.",
1482 |             "properties": {
1483 |                 "annotations": {
1484 |                     "$ref": "#/definitions/Annotations",
1485 |                     "description": "Optional annotations for the client."
1486 |                 },
1487 |                 "description": {
1488 |                     "description": "A description of what this resource represents.\n\nThis can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a \"hint\" to the model.",
1489 |                     "type": "string"
1490 |                 },
1491 |                 "mimeType": {
1492 |                     "description": "The MIME type of this resource, if known.",
1493 |                     "type": "string"
1494 |                 },
1495 |                 "name": {
1496 |                     "description": "A human-readable name for this resource.\n\nThis can be used by clients to populate UI elements.",
1497 |                     "type": "string"
1498 |                 },
1499 |                 "uri": {
1500 |                     "description": "The URI of this resource.",
1501 |                     "format": "uri",
1502 |                     "type": "string"
1503 |                 }
1504 |             },
1505 |             "required": [
1506 |                 "name",
1507 |                 "uri"
1508 |             ],
1509 |             "type": "object"
1510 |         },
1511 |         "ResourceContents": {
1512 |             "description": "The contents of a specific resource or sub-resource.",
1513 |             "properties": {
1514 |                 "mimeType": {
1515 |                     "description": "The MIME type of this resource, if known.",
1516 |                     "type": "string"
1517 |                 },
1518 |                 "uri": {
1519 |                     "description": "The URI of this resource.",
1520 |                     "format": "uri",
1521 |                     "type": "string"
1522 |                 }
1523 |             },
1524 |             "required": [
1525 |                 "uri"
1526 |             ],
1527 |             "type": "object"
1528 |         },
1529 |         "ResourceListChangedNotification": {
1530 |             "description": "An optional notification from the server to the client, informing it that the list of resources it can read from has changed. This may be issued by servers without any previous subscription from the client.",
1531 |             "properties": {
1532 |                 "method": {
1533 |                     "const": "notifications/resources/list_changed",
1534 |                     "type": "string"
1535 |                 },
1536 |                 "params": {
1537 |                     "additionalProperties": {},
1538 |                     "properties": {
1539 |                         "_meta": {
1540 |                             "additionalProperties": {},
1541 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
1542 |                             "type": "object"
1543 |                         }
1544 |                     },
1545 |                     "type": "object"
1546 |                 }
1547 |             },
1548 |             "required": [
1549 |                 "method"
1550 |             ],
1551 |             "type": "object"
1552 |         },
1553 |         "ResourceReference": {
1554 |             "description": "A reference to a resource or resource template definition.",
1555 |             "properties": {
1556 |                 "type": {
1557 |                     "const": "ref/resource",
1558 |                     "type": "string"
1559 |                 },
1560 |                 "uri": {
1561 |                     "description": "The URI or URI template of the resource.",
1562 |                     "format": "uri-template",
1563 |                     "type": "string"
1564 |                 }
1565 |             },
1566 |             "required": [
1567 |                 "type",
1568 |                 "uri"
1569 |             ],
1570 |             "type": "object"
1571 |         },
1572 |         "ResourceTemplate": {
1573 |             "description": "A template description for resources available on the server.",
1574 |             "properties": {
1575 |                 "annotations": {
1576 |                     "$ref": "#/definitions/Annotations",
1577 |                     "description": "Optional annotations for the client."
1578 |                 },
1579 |                 "description": {
1580 |                     "description": "A description of what this template is for.\n\nThis can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a \"hint\" to the model.",
1581 |                     "type": "string"
1582 |                 },
1583 |                 "mimeType": {
1584 |                     "description": "The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.",
1585 |                     "type": "string"
1586 |                 },
1587 |                 "name": {
1588 |                     "description": "A human-readable name for the type of resource this template refers to.\n\nThis can be used by clients to populate UI elements.",
1589 |                     "type": "string"
1590 |                 },
1591 |                 "uriTemplate": {
1592 |                     "description": "A URI template (according to RFC 6570) that can be used to construct resource URIs.",
1593 |                     "format": "uri-template",
1594 |                     "type": "string"
1595 |                 }
1596 |             },
1597 |             "required": [
1598 |                 "name",
1599 |                 "uriTemplate"
1600 |             ],
1601 |             "type": "object"
1602 |         },
1603 |         "ResourceUpdatedNotification": {
1604 |             "description": "A notification from the server to the client, informing it that a resource has changed and may need to be read again. This should only be sent if the client previously sent a resources/subscribe request.",
1605 |             "properties": {
1606 |                 "method": {
1607 |                     "const": "notifications/resources/updated",
1608 |                     "type": "string"
1609 |                 },
1610 |                 "params": {
1611 |                     "properties": {
1612 |                         "uri": {
1613 |                             "description": "The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.",
1614 |                             "format": "uri",
1615 |                             "type": "string"
1616 |                         }
1617 |                     },
1618 |                     "required": [
1619 |                         "uri"
1620 |                     ],
1621 |                     "type": "object"
1622 |                 }
1623 |             },
1624 |             "required": [
1625 |                 "method",
1626 |                 "params"
1627 |             ],
1628 |             "type": "object"
1629 |         },
1630 |         "Result": {
1631 |             "additionalProperties": {},
1632 |             "properties": {
1633 |                 "_meta": {
1634 |                     "additionalProperties": {},
1635 |                     "description": "This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.",
1636 |                     "type": "object"
1637 |                 }
1638 |             },
1639 |             "type": "object"
1640 |         },
1641 |         "Role": {
1642 |             "description": "The sender or recipient of messages and data in a conversation.",
1643 |             "enum": [
1644 |                 "assistant",
1645 |                 "user"
1646 |             ],
1647 |             "type": "string"
1648 |         },
1649 |         "Root": {
1650 |             "description": "Represents a root directory or file that the server can operate on.",
1651 |             "properties": {
1652 |                 "name": {
1653 |                     "description": "An optional name for the root. This can be used to provide a human-readable\nidentifier for the root, which may be useful for display purposes or for\nreferencing the root in other parts of the application.",
1654 |                     "type": "string"
1655 |                 },
1656 |                 "uri": {
1657 |                     "description": "The URI identifying the root. This *must* start with file:// for now.\nThis restriction may be relaxed in future versions of the protocol to allow\nother URI schemes.",
1658 |                     "format": "uri",
1659 |                     "type": "string"
1660 |                 }
1661 |             },
1662 |             "required": [
1663 |                 "uri"
1664 |             ],
1665 |             "type": "object"
1666 |         },
1667 |         "RootsListChangedNotification": {
1668 |             "description": "A notification from the client to the server, informing it that the list of roots has changed.\nThis notification should be sent whenever the client adds, removes, or modifies any root.\nThe server should then request an updated list of roots using the ListRootsRequest.",
1669 |             "properties": {
1670 |                 "method": {
1671 |                     "const": "notifications/roots/list_changed",
1672 |                     "type": "string"
1673 |                 },
1674 |                 "params": {
1675 |                     "additionalProperties": {},
1676 |                     "properties": {
1677 |                         "_meta": {
1678 |                             "additionalProperties": {},
1679 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
1680 |                             "type": "object"
1681 |                         }
1682 |                     },
1683 |                     "type": "object"
1684 |                 }
1685 |             },
1686 |             "required": [
1687 |                 "method"
1688 |             ],
1689 |             "type": "object"
1690 |         },
1691 |         "SamplingMessage": {
1692 |             "description": "Describes a message issued to or received from an LLM API.",
1693 |             "properties": {
1694 |                 "content": {
1695 |                     "anyOf": [
1696 |                         {
1697 |                             "$ref": "#/definitions/TextContent"
1698 |                         },
1699 |                         {
1700 |                             "$ref": "#/definitions/ImageContent"
1701 |                         },
1702 |                         {
1703 |                             "$ref": "#/definitions/AudioContent"
1704 |                         }
1705 |                     ]
1706 |                 },
1707 |                 "role": {
1708 |                     "$ref": "#/definitions/Role"
1709 |                 }
1710 |             },
1711 |             "required": [
1712 |                 "content",
1713 |                 "role"
1714 |             ],
1715 |             "type": "object"
1716 |         },
1717 |         "ServerCapabilities": {
1718 |             "description": "Capabilities that a server may support. Known capabilities are defined here, in this schema, but this is not a closed set: any server can define its own, additional capabilities.",
1719 |             "properties": {
1720 |                 "experimental": {
1721 |                     "additionalProperties": {
1722 |                         "additionalProperties": true,
1723 |                         "properties": {},
1724 |                         "type": "object"
1725 |                     },
1726 |                     "description": "Experimental, non-standard capabilities that the server supports.",
1727 |                     "type": "object"
1728 |                 },
1729 |                 "logging": {
1730 |                     "additionalProperties": true,
1731 |                     "description": "Present if the server supports sending log messages to the client.",
1732 |                     "properties": {},
1733 |                     "type": "object"
1734 |                 },
1735 |                 "prompts": {
1736 |                     "description": "Present if the server offers any prompt templates.",
1737 |                     "properties": {
1738 |                         "listChanged": {
1739 |                             "description": "Whether this server supports notifications for changes to the prompt list.",
1740 |                             "type": "boolean"
1741 |                         }
1742 |                     },
1743 |                     "type": "object"
1744 |                 },
1745 |                 "resources": {
1746 |                     "description": "Present if the server offers any resources to read.",
1747 |                     "properties": {
1748 |                         "listChanged": {
1749 |                             "description": "Whether this server supports notifications for changes to the resource list.",
1750 |                             "type": "boolean"
1751 |                         },
1752 |                         "subscribe": {
1753 |                             "description": "Whether this server supports subscribing to resource updates.",
1754 |                             "type": "boolean"
1755 |                         }
1756 |                     },
1757 |                     "type": "object"
1758 |                 },
1759 |                 "tools": {
1760 |                     "description": "Present if the server offers any tools to call.",
1761 |                     "properties": {
1762 |                         "listChanged": {
1763 |                             "description": "Whether this server supports notifications for changes to the tool list.",
1764 |                             "type": "boolean"
1765 |                         }
1766 |                     },
1767 |                     "type": "object"
1768 |                 }
1769 |             },
1770 |             "type": "object"
1771 |         },
1772 |         "ServerNotification": {
1773 |             "anyOf": [
1774 |                 {
1775 |                     "$ref": "#/definitions/CancelledNotification"
1776 |                 },
1777 |                 {
1778 |                     "$ref": "#/definitions/ProgressNotification"
1779 |                 },
1780 |                 {
1781 |                     "$ref": "#/definitions/ResourceListChangedNotification"
1782 |                 },
1783 |                 {
1784 |                     "$ref": "#/definitions/ResourceUpdatedNotification"
1785 |                 },
1786 |                 {
1787 |                     "$ref": "#/definitions/PromptListChangedNotification"
1788 |                 },
1789 |                 {
1790 |                     "$ref": "#/definitions/ToolListChangedNotification"
1791 |                 },
1792 |                 {
1793 |                     "$ref": "#/definitions/LoggingMessageNotification"
1794 |                 }
1795 |             ]
1796 |         },
1797 |         "ServerRequest": {
1798 |             "anyOf": [
1799 |                 {
1800 |                     "$ref": "#/definitions/PingRequest"
1801 |                 },
1802 |                 {
1803 |                     "$ref": "#/definitions/CreateMessageRequest"
1804 |                 },
1805 |                 {
1806 |                     "$ref": "#/definitions/ListRootsRequest"
1807 |                 }
1808 |             ]
1809 |         },
1810 |         "ServerResult": {
1811 |             "anyOf": [
1812 |                 {
1813 |                     "$ref": "#/definitions/Result"
1814 |                 },
1815 |                 {
1816 |                     "$ref": "#/definitions/InitializeResult"
1817 |                 },
1818 |                 {
1819 |                     "$ref": "#/definitions/ListResourcesResult"
1820 |                 },
1821 |                 {
1822 |                     "$ref": "#/definitions/ReadResourceResult"
1823 |                 },
1824 |                 {
1825 |                     "$ref": "#/definitions/ListPromptsResult"
1826 |                 },
1827 |                 {
1828 |                     "$ref": "#/definitions/GetPromptResult"
1829 |                 },
1830 |                 {
1831 |                     "$ref": "#/definitions/ListToolsResult"
1832 |                 },
1833 |                 {
1834 |                     "$ref": "#/definitions/CallToolResult"
1835 |                 },
1836 |                 {
1837 |                     "$ref": "#/definitions/CompleteResult"
1838 |                 }
1839 |             ]
1840 |         },
1841 |         "SetLevelRequest": {
1842 |             "description": "A request from the client to the server, to enable or adjust logging.",
1843 |             "properties": {
1844 |                 "method": {
1845 |                     "const": "logging/setLevel",
1846 |                     "type": "string"
1847 |                 },
1848 |                 "params": {
1849 |                     "properties": {
1850 |                         "level": {
1851 |                             "$ref": "#/definitions/LoggingLevel",
1852 |                             "description": "The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/message."
1853 |                         }
1854 |                     },
1855 |                     "required": [
1856 |                         "level"
1857 |                     ],
1858 |                     "type": "object"
1859 |                 }
1860 |             },
1861 |             "required": [
1862 |                 "method",
1863 |                 "params"
1864 |             ],
1865 |             "type": "object"
1866 |         },
1867 |         "SubscribeRequest": {
1868 |             "description": "Sent from the client to request resources/updated notifications from the server whenever a particular resource changes.",
1869 |             "properties": {
1870 |                 "method": {
1871 |                     "const": "resources/subscribe",
1872 |                     "type": "string"
1873 |                 },
1874 |                 "params": {
1875 |                     "properties": {
1876 |                         "uri": {
1877 |                             "description": "The URI of the resource to subscribe to. The URI can use any protocol; it is up to the server how to interpret it.",
1878 |                             "format": "uri",
1879 |                             "type": "string"
1880 |                         }
1881 |                     },
1882 |                     "required": [
1883 |                         "uri"
1884 |                     ],
1885 |                     "type": "object"
1886 |                 }
1887 |             },
1888 |             "required": [
1889 |                 "method",
1890 |                 "params"
1891 |             ],
1892 |             "type": "object"
1893 |         },
1894 |         "TextContent": {
1895 |             "description": "Text provided to or from an LLM.",
1896 |             "properties": {
1897 |                 "annotations": {
1898 |                     "$ref": "#/definitions/Annotations",
1899 |                     "description": "Optional annotations for the client."
1900 |                 },
1901 |                 "text": {
1902 |                     "description": "The text content of the message.",
1903 |                     "type": "string"
1904 |                 },
1905 |                 "type": {
1906 |                     "const": "text",
1907 |                     "type": "string"
1908 |                 }
1909 |             },
1910 |             "required": [
1911 |                 "text",
1912 |                 "type"
1913 |             ],
1914 |             "type": "object"
1915 |         },
1916 |         "TextResourceContents": {
1917 |             "properties": {
1918 |                 "mimeType": {
1919 |                     "description": "The MIME type of this resource, if known.",
1920 |                     "type": "string"
1921 |                 },
1922 |                 "text": {
1923 |                     "description": "The text of the item. This must only be set if the item can actually be represented as text (not binary data).",
1924 |                     "type": "string"
1925 |                 },
1926 |                 "uri": {
1927 |                     "description": "The URI of this resource.",
1928 |                     "format": "uri",
1929 |                     "type": "string"
1930 |                 }
1931 |             },
1932 |             "required": [
1933 |                 "text",
1934 |                 "uri"
1935 |             ],
1936 |             "type": "object"
1937 |         },
1938 |         "Tool": {
1939 |             "description": "Definition for a tool the client can call.",
1940 |             "properties": {
1941 |                 "description": {
1942 |                     "description": "A human-readable description of the tool.",
1943 |                     "type": "string"
1944 |                 },
1945 |                 "inputSchema": {
1946 |                     "description": "A JSON Schema object defining the expected parameters for the tool.",
1947 |                     "properties": {
1948 |                         "properties": {
1949 |                             "additionalProperties": {
1950 |                                 "additionalProperties": true,
1951 |                                 "properties": {},
1952 |                                 "type": "object"
1953 |                             },
1954 |                             "type": "object"
1955 |                         },
1956 |                         "required": {
1957 |                             "items": {
1958 |                                 "type": "string"
1959 |                             },
1960 |                             "type": "array"
1961 |                         },
1962 |                         "type": {
1963 |                             "const": "object",
1964 |                             "type": "string"
1965 |                         }
1966 |                     },
1967 |                     "required": [
1968 |                         "type"
1969 |                     ],
1970 |                     "type": "object"
1971 |                 },
1972 |                 "name": {
1973 |                     "description": "The name of the tool.",
1974 |                     "type": "string"
1975 |                 }
1976 |             },
1977 |             "required": [
1978 |                 "inputSchema",
1979 |                 "name"
1980 |             ],
1981 |             "type": "object"
1982 |         },
1983 |         "ToolListChangedNotification": {
1984 |             "description": "An optional notification from the server to the client, informing it that the list of tools it offers has changed. This may be issued by servers without any previous subscription from the client.",
1985 |             "properties": {
1986 |                 "method": {
1987 |                     "const": "notifications/tools/list_changed",
1988 |                     "type": "string"
1989 |                 },
1990 |                 "params": {
1991 |                     "additionalProperties": {},
1992 |                     "properties": {
1993 |                         "_meta": {
1994 |                             "additionalProperties": {},
1995 |                             "description": "This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.",
1996 |                             "type": "object"
1997 |                         }
1998 |                     },
1999 |                     "type": "object"
2000 |                 }
2001 |             },
2002 |             "required": [
2003 |                 "method"
2004 |             ],
2005 |             "type": "object"
2006 |         },
2007 |         "UnsubscribeRequest": {
2008 |             "description": "Sent from the client to request cancellation of resources/updated notifications from the server. This should follow a previous resources/subscribe request.",
2009 |             "properties": {
2010 |                 "method": {
2011 |                     "const": "resources/unsubscribe",
2012 |                     "type": "string"
2013 |                 },
2014 |                 "params": {
2015 |                     "properties": {
2016 |                         "uri": {
2017 |                             "description": "The URI of the resource to unsubscribe from.",
2018 |                             "format": "uri",
2019 |                             "type": "string"
2020 |                         }
2021 |                     },
2022 |                     "required": [
2023 |                         "uri"
2024 |                     ],
2025 |                     "type": "object"
2026 |                 }
2027 |             },
2028 |             "required": [
2029 |                 "method",
2030 |                 "params"
2031 |             ],
2032 |             "type": "object"
2033 |         }
2034 |     }
2035 | }
2036 | 
2037 | 


--------------------------------------------------------------------------------
/schema/draft/schema.ts:
--------------------------------------------------------------------------------
   1 | /* JSON-RPC types */
   2 | export type JSONRPCMessage =
   3 |   | JSONRPCRequest
   4 |   | JSONRPCNotification
   5 |   | JSONRPCResponse
   6 |   | JSONRPCError;
   7 | 
   8 | export const LATEST_PROTOCOL_VERSION = "DRAFT-2025-v1";
   9 | export const JSONRPC_VERSION = "2.0";
  10 | 
  11 | /**
  12 |  * A progress token, used to associate progress notifications with the original request.
  13 |  */
  14 | export type ProgressToken = string | number;
  15 | 
  16 | /**
  17 |  * An opaque token used to represent a cursor for pagination.
  18 |  */
  19 | export type Cursor = string;
  20 | 
  21 | export interface Request {
  22 |   method: string;
  23 |   params?: {
  24 |     _meta?: {
  25 |       /**
  26 |        * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
  27 |        */
  28 |       progressToken?: ProgressToken;
  29 |     };
  30 |     [key: string]: unknown;
  31 |   };
  32 | }
  33 | 
  34 | export interface Notification {
  35 |   method: string;
  36 |   params?: {
  37 |     /**
  38 |      * This parameter name is reserved by MCP to allow clients and servers to attach additional metadata to their notifications.
  39 |      */
  40 |     _meta?: { [key: string]: unknown };
  41 |     [key: string]: unknown;
  42 |   };
  43 | }
  44 | 
  45 | export interface Result {
  46 |   /**
  47 |    * This result property is reserved by the protocol to allow clients and servers to attach additional metadata to their responses.
  48 |    */
  49 |   _meta?: { [key: string]: unknown };
  50 |   [key: string]: unknown;
  51 | }
  52 | 
  53 | /**
  54 |  * A uniquely identifying ID for a request in JSON-RPC.
  55 |  */
  56 | export type RequestId = string | number;
  57 | 
  58 | /**
  59 |  * A request that expects a response.
  60 |  */
  61 | export interface JSONRPCRequest extends Request {
  62 |   jsonrpc: typeof JSONRPC_VERSION;
  63 |   id: RequestId;
  64 | }
  65 | 
  66 | /**
  67 |  * A notification which does not expect a response.
  68 |  */
  69 | export interface JSONRPCNotification extends Notification {
  70 |   jsonrpc: typeof JSONRPC_VERSION;
  71 | }
  72 | 
  73 | /**
  74 |  * A successful (non-error) response to a request.
  75 |  */
  76 | export interface JSONRPCResponse {
  77 |   jsonrpc: typeof JSONRPC_VERSION;
  78 |   id: RequestId;
  79 |   result: Result;
  80 | }
  81 | 
  82 | // Standard JSON-RPC error codes
  83 | export const PARSE_ERROR = -32700;
  84 | export const INVALID_REQUEST = -32600;
  85 | export const METHOD_NOT_FOUND = -32601;
  86 | export const INVALID_PARAMS = -32602;
  87 | export const INTERNAL_ERROR = -32603;
  88 | 
  89 | /**
  90 |  * A response to a request that indicates an error occurred.
  91 |  */
  92 | export interface JSONRPCError {
  93 |   jsonrpc: typeof JSONRPC_VERSION;
  94 |   id: RequestId;
  95 |   error: {
  96 |     /**
  97 |      * The error type that occurred.
  98 |      */
  99 |     code: number;
 100 |     /**
 101 |      * A short description of the error. The message SHOULD be limited to a concise single sentence.
 102 |      */
 103 |     message: string;
 104 |     /**
 105 |      * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
 106 |      */
 107 |     data?: unknown;
 108 |   };
 109 | }
 110 | 
 111 | /* Empty result */
 112 | /**
 113 |  * A response that indicates success but carries no data.
 114 |  */
 115 | export type EmptyResult = Result;
 116 | 
 117 | /* Cancellation */
 118 | /**
 119 |  * This notification can be sent by either side to indicate that it is cancelling a previously-issued request.
 120 |  *
 121 |  * The request SHOULD still be in-flight, but due to communication latency, it is always possible that this notification MAY arrive after the request has already finished.
 122 |  *
 123 |  * This notification indicates that the result will be unused, so any associated processing SHOULD cease.
 124 |  *
 125 |  * A client MUST NOT attempt to cancel its `initialize` request.
 126 |  */
 127 | export interface CancelledNotification extends Notification {
 128 |   method: "notifications/cancelled";
 129 |   params: {
 130 |     /**
 131 |      * The ID of the request to cancel.
 132 |      *
 133 |      * This MUST correspond to the ID of a request previously issued in the same direction.
 134 |      */
 135 |     requestId: RequestId;
 136 | 
 137 |     /**
 138 |      * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
 139 |      */
 140 |     reason?: string;
 141 |   };
 142 | }
 143 | 
 144 | /* Initialization */
 145 | /**
 146 |  * This request is sent from the client to the server when it first connects, asking it to begin initialization.
 147 |  */
 148 | export interface InitializeRequest extends Request {
 149 |   method: "initialize";
 150 |   params: {
 151 |     /**
 152 |      * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
 153 |      */
 154 |     protocolVersion: string;
 155 |     capabilities: ClientCapabilities;
 156 |     clientInfo: Implementation;
 157 |   };
 158 | }
 159 | 
 160 | /**
 161 |  * After receiving an initialize request from the client, the server sends this response.
 162 |  */
 163 | export interface InitializeResult extends Result {
 164 |   /**
 165 |    * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
 166 |    */
 167 |   protocolVersion: string;
 168 |   capabilities: ServerCapabilities;
 169 |   serverInfo: Implementation;
 170 |   /**
 171 |    * Instructions describing how to use the server and its features.
 172 |    *
 173 |    * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
 174 |    */
 175 |   instructions?: string;
 176 | }
 177 | 
 178 | /**
 179 |  * This notification is sent from the client to the server after initialization has finished.
 180 |  */
 181 | export interface InitializedNotification extends Notification {
 182 |   method: "notifications/initialized";
 183 | }
 184 | 
 185 | /**
 186 |  * Capabilities a client may support. Known capabilities are defined here, in this schema, but this is not a closed set: any client can define its own, additional capabilities.
 187 |  */
 188 | export interface ClientCapabilities {
 189 |   /**
 190 |    * Experimental, non-standard capabilities that the client supports.
 191 |    */
 192 |   experimental?: { [key: string]: object };
 193 |   /**
 194 |    * Present if the client supports listing roots.
 195 |    */
 196 |   roots?: {
 197 |     /**
 198 |      * Whether the client supports notifications for changes to the roots list.
 199 |      */
 200 |     listChanged?: boolean;
 201 |   };
 202 |   /**
 203 |    * Present if the client supports sampling from an LLM.
 204 |    */
 205 |   sampling?: object;
 206 | }
 207 | 
 208 | /**
 209 |  * Capabilities that a server may support. Known capabilities are defined here, in this schema, but this is not a closed set: any server can define its own, additional capabilities.
 210 |  */
 211 | export interface ServerCapabilities {
 212 |   /**
 213 |    * Experimental, non-standard capabilities that the server supports.
 214 |    */
 215 |   experimental?: { [key: string]: object };
 216 |   /**
 217 |    * Present if the server supports sending log messages to the client.
 218 |    */
 219 |   logging?: object;
 220 |   /**
 221 |    * Present if the server offers any prompt templates.
 222 |    */
 223 |   prompts?: {
 224 |     /**
 225 |      * Whether this server supports notifications for changes to the prompt list.
 226 |      */
 227 |     listChanged?: boolean;
 228 |   };
 229 |   /**
 230 |    * Present if the server offers any resources to read.
 231 |    */
 232 |   resources?: {
 233 |     /**
 234 |      * Whether this server supports subscribing to resource updates.
 235 |      */
 236 |     subscribe?: boolean;
 237 |     /**
 238 |      * Whether this server supports notifications for changes to the resource list.
 239 |      */
 240 |     listChanged?: boolean;
 241 |   };
 242 |   /**
 243 |    * Present if the server offers any tools to call.
 244 |    */
 245 |   tools?: {
 246 |     /**
 247 |      * Whether this server supports notifications for changes to the tool list.
 248 |      */
 249 |     listChanged?: boolean;
 250 |   };
 251 | }
 252 | 
 253 | /**
 254 |  * Describes the name and version of an MCP implementation.
 255 |  */
 256 | export interface Implementation {
 257 |   name: string;
 258 |   version: string;
 259 | }
 260 | 
 261 | /* Ping */
 262 | /**
 263 |  * A ping, issued by either the server or the client, to check that the other party is still alive. The receiver must promptly respond, or else may be disconnected.
 264 |  */
 265 | export interface PingRequest extends Request {
 266 |   method: "ping";
 267 | }
 268 | 
 269 | /* Progress notifications */
 270 | /**
 271 |  * An out-of-band notification used to inform the receiver of a progress update for a long-running request.
 272 |  */
 273 | export interface ProgressNotification extends Notification {
 274 |   method: "notifications/progress";
 275 |   params: {
 276 |     /**
 277 |      * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
 278 |      */
 279 |     progressToken: ProgressToken;
 280 |     /**
 281 |      * The progress thus far. This should increase every time progress is made, even if the total is unknown.
 282 |      *
 283 |      * @TJS-type number
 284 |      */
 285 |     progress: number;
 286 |     /**
 287 |      * Total number of items to process (or total progress required), if known.
 288 |      *
 289 |      * @TJS-type number
 290 |      */
 291 |     total?: number;
 292 |     /**
 293 |      * An optional message describing the current progress.
 294 |      */
 295 |     message?: string;
 296 |   };
 297 | }
 298 | 
 299 | /* Pagination */
 300 | export interface PaginatedRequest extends Request {
 301 |   params?: {
 302 |     /**
 303 |      * An opaque token representing the current pagination position.
 304 |      * If provided, the server should return results starting after this cursor.
 305 |      */
 306 |     cursor?: Cursor;
 307 |   };
 308 | }
 309 | 
 310 | export interface PaginatedResult extends Result {
 311 |   /**
 312 |    * An opaque token representing the pagination position after the last returned result.
 313 |    * If present, there may be more results available.
 314 |    */
 315 |   nextCursor?: Cursor;
 316 | }
 317 | 
 318 | /* Resources */
 319 | /**
 320 |  * Sent from the client to request a list of resources the server has.
 321 |  */
 322 | export interface ListResourcesRequest extends PaginatedRequest {
 323 |   method: "resources/list";
 324 | }
 325 | 
 326 | /**
 327 |  * The server's response to a resources/list request from the client.
 328 |  */
 329 | export interface ListResourcesResult extends PaginatedResult {
 330 |   resources: Resource[];
 331 | }
 332 | 
 333 | /**
 334 |  * Sent from the client to request a list of resource templates the server has.
 335 |  */
 336 | export interface ListResourceTemplatesRequest extends PaginatedRequest {
 337 |   method: "resources/templates/list";
 338 | }
 339 | 
 340 | /**
 341 |  * The server's response to a resources/templates/list request from the client.
 342 |  */
 343 | export interface ListResourceTemplatesResult extends PaginatedResult {
 344 |   resourceTemplates: ResourceTemplate[];
 345 | }
 346 | 
 347 | /**
 348 |  * Sent from the client to the server, to read a specific resource URI.
 349 |  */
 350 | export interface ReadResourceRequest extends Request {
 351 |   method: "resources/read";
 352 |   params: {
 353 |     /**
 354 |      * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
 355 |      *
 356 |      * @format uri
 357 |      */
 358 |     uri: string;
 359 |   };
 360 | }
 361 | 
 362 | /**
 363 |  * The server's response to a resources/read request from the client.
 364 |  */
 365 | export interface ReadResourceResult extends Result {
 366 |   contents: (TextResourceContents | BlobResourceContents)[];
 367 | }
 368 | 
 369 | /**
 370 |  * An optional notification from the server to the client, informing it that the list of resources it can read from has changed. This may be issued by servers without any previous subscription from the client.
 371 |  */
 372 | export interface ResourceListChangedNotification extends Notification {
 373 |   method: "notifications/resources/list_changed";
 374 | }
 375 | 
 376 | /**
 377 |  * Sent from the client to request resources/updated notifications from the server whenever a particular resource changes.
 378 |  */
 379 | export interface SubscribeRequest extends Request {
 380 |   method: "resources/subscribe";
 381 |   params: {
 382 |     /**
 383 |      * The URI of the resource to subscribe to. The URI can use any protocol; it is up to the server how to interpret it.
 384 |      *
 385 |      * @format uri
 386 |      */
 387 |     uri: string;
 388 |   };
 389 | }
 390 | 
 391 | /**
 392 |  * Sent from the client to request cancellation of resources/updated notifications from the server. This should follow a previous resources/subscribe request.
 393 |  */
 394 | export interface UnsubscribeRequest extends Request {
 395 |   method: "resources/unsubscribe";
 396 |   params: {
 397 |     /**
 398 |      * The URI of the resource to unsubscribe from.
 399 |      *
 400 |      * @format uri
 401 |      */
 402 |     uri: string;
 403 |   };
 404 | }
 405 | 
 406 | /**
 407 |  * A notification from the server to the client, informing it that a resource has changed and may need to be read again. This should only be sent if the client previously sent a resources/subscribe request.
 408 |  */
 409 | export interface ResourceUpdatedNotification extends Notification {
 410 |   method: "notifications/resources/updated";
 411 |   params: {
 412 |     /**
 413 |      * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
 414 |      *
 415 |      * @format uri
 416 |      */
 417 |     uri: string;
 418 |   };
 419 | }
 420 | 
 421 | /**
 422 |  * A known resource that the server is capable of reading.
 423 |  */
 424 | export interface Resource {
 425 |   /**
 426 |    * The URI of this resource.
 427 |    *
 428 |    * @format uri
 429 |    */
 430 |   uri: string;
 431 | 
 432 |   /**
 433 |    * A human-readable name for this resource.
 434 |    *
 435 |    * This can be used by clients to populate UI elements.
 436 |    */
 437 |   name: string;
 438 | 
 439 |   /**
 440 |    * A description of what this resource represents.
 441 |    *
 442 |    * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
 443 |    */
 444 |   description?: string;
 445 | 
 446 |   /**
 447 |    * The MIME type of this resource, if known.
 448 |    */
 449 |   mimeType?: string;
 450 | 
 451 |   /**
 452 |    * Optional annotations for the client.
 453 |    */
 454 |   annotations?: Annotations;
 455 | }
 456 | 
 457 | /**
 458 |  * A template description for resources available on the server.
 459 |  */
 460 | export interface ResourceTemplate {
 461 |   /**
 462 |    * A URI template (according to RFC 6570) that can be used to construct resource URIs.
 463 |    *
 464 |    * @format uri-template
 465 |    */
 466 |   uriTemplate: string;
 467 | 
 468 |   /**
 469 |    * A human-readable name for the type of resource this template refers to.
 470 |    *
 471 |    * This can be used by clients to populate UI elements.
 472 |    */
 473 |   name: string;
 474 | 
 475 |   /**
 476 |    * A description of what this template is for.
 477 |    *
 478 |    * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
 479 |    */
 480 |   description?: string;
 481 | 
 482 |   /**
 483 |    * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
 484 |    */
 485 |   mimeType?: string;
 486 | 
 487 |   /**
 488 |    * Optional annotations for the client.
 489 |    */
 490 |   annotations?: Annotations;
 491 | }
 492 | 
 493 | /**
 494 |  * The contents of a specific resource or sub-resource.
 495 |  */
 496 | export interface ResourceContents {
 497 |   /**
 498 |    * The URI of this resource.
 499 |    *
 500 |    * @format uri
 501 |    */
 502 |   uri: string;
 503 |   /**
 504 |    * The MIME type of this resource, if known.
 505 |    */
 506 |   mimeType?: string;
 507 | }
 508 | 
 509 | export interface TextResourceContents extends ResourceContents {
 510 |   /**
 511 |    * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
 512 |    */
 513 |   text: string;
 514 | }
 515 | 
 516 | export interface BlobResourceContents extends ResourceContents {
 517 |   /**
 518 |    * A base64-encoded string representing the binary data of the item.
 519 |    *
 520 |    * @format byte
 521 |    */
 522 |   blob: string;
 523 | }
 524 | 
 525 | /* Prompts */
 526 | /**
 527 |  * Sent from the client to request a list of prompts and prompt templates the server has.
 528 |  */
 529 | export interface ListPromptsRequest extends PaginatedRequest {
 530 |   method: "prompts/list";
 531 | }
 532 | 
 533 | /**
 534 |  * The server's response to a prompts/list request from the client.
 535 |  */
 536 | export interface ListPromptsResult extends PaginatedResult {
 537 |   prompts: Prompt[];
 538 | }
 539 | 
 540 | /**
 541 |  * Used by the client to get a prompt provided by the server.
 542 |  */
 543 | export interface GetPromptRequest extends Request {
 544 |   method: "prompts/get";
 545 |   params: {
 546 |     /**
 547 |      * The name of the prompt or prompt template.
 548 |      */
 549 |     name: string;
 550 |     /**
 551 |      * Arguments to use for templating the prompt.
 552 |      */
 553 |     arguments?: { [key: string]: string };
 554 |   };
 555 | }
 556 | 
 557 | /**
 558 |  * The server's response to a prompts/get request from the client.
 559 |  */
 560 | export interface GetPromptResult extends Result {
 561 |   /**
 562 |    * An optional description for the prompt.
 563 |    */
 564 |   description?: string;
 565 |   messages: PromptMessage[];
 566 | }
 567 | 
 568 | /**
 569 |  * A prompt or prompt template that the server offers.
 570 |  */
 571 | export interface Prompt {
 572 |   /**
 573 |    * The name of the prompt or prompt template.
 574 |    */
 575 |   name: string;
 576 |   /**
 577 |    * An optional description of what this prompt provides
 578 |    */
 579 |   description?: string;
 580 |   /**
 581 |    * A list of arguments to use for templating the prompt.
 582 |    */
 583 |   arguments?: PromptArgument[];
 584 | }
 585 | 
 586 | /**
 587 |  * Describes an argument that a prompt can accept.
 588 |  */
 589 | export interface PromptArgument {
 590 |   /**
 591 |    * The name of the argument.
 592 |    */
 593 |   name: string;
 594 |   /**
 595 |    * A human-readable description of the argument.
 596 |    */
 597 |   description?: string;
 598 |   /**
 599 |    * Whether this argument must be provided.
 600 |    */
 601 |   required?: boolean;
 602 | }
 603 | 
 604 | /**
 605 |  * The sender or recipient of messages and data in a conversation.
 606 |  */
 607 | export type Role = "user" | "assistant";
 608 | 
 609 | /**
 610 |  * Describes a message returned as part of a prompt.
 611 |  *
 612 |  * This is similar to `SamplingMessage`, but also supports the embedding of
 613 |  * resources from the MCP server.
 614 |  */
 615 | export interface PromptMessage {
 616 |   role: Role;
 617 |   content: TextContent | ImageContent | AudioContent | EmbeddedResource;
 618 | }
 619 | 
 620 | /**
 621 |  * The contents of a resource, embedded into a prompt or tool call result.
 622 |  *
 623 |  * It is up to the client how best to render embedded resources for the benefit
 624 |  * of the LLM and/or the user.
 625 |  */
 626 | export interface EmbeddedResource {
 627 |   type: "resource";
 628 |   resource: TextResourceContents | BlobResourceContents;
 629 | 
 630 |   /**
 631 |    * Optional annotations for the client.
 632 |    */
 633 |   annotations?: Annotations;
 634 | }
 635 | 
 636 | /**
 637 |  * An optional notification from the server to the client, informing it that the list of prompts it offers has changed. This may be issued by servers without any previous subscription from the client.
 638 |  */
 639 | export interface PromptListChangedNotification extends Notification {
 640 |   method: "notifications/prompts/list_changed";
 641 | }
 642 | 
 643 | /* Tools */
 644 | /**
 645 |  * Sent from the client to request a list of tools the server has.
 646 |  */
 647 | export interface ListToolsRequest extends PaginatedRequest {
 648 |   method: "tools/list";
 649 | }
 650 | 
 651 | /**
 652 |  * The server's response to a tools/list request from the client.
 653 |  */
 654 | export interface ListToolsResult extends PaginatedResult {
 655 |   tools: Tool[];
 656 | }
 657 | 
 658 | /**
 659 |  * The server's response to a tool call.
 660 |  *
 661 |  * Any errors that originate from the tool SHOULD be reported inside the result
 662 |  * object, with `isError` set to true, _not_ as an MCP protocol-level error
 663 |  * response. Otherwise, the LLM would not be able to see that an error occurred
 664 |  * and self-correct.
 665 |  *
 666 |  * However, any errors in _finding_ the tool, an error indicating that the
 667 |  * server does not support tool calls, or any other exceptional conditions,
 668 |  * should be reported as an MCP error response.
 669 |  */
 670 | export interface CallToolResult extends Result {
 671 |   content: (TextContent | ImageContent | AudioContent | EmbeddedResource)[];
 672 | 
 673 |   /**
 674 |    * Whether the tool call ended in an error.
 675 |    *
 676 |    * If not set, this is assumed to be false (the call was successful).
 677 |    */
 678 |   isError?: boolean;
 679 | }
 680 | 
 681 | /**
 682 |  * Used by the client to invoke a tool provided by the server.
 683 |  */
 684 | export interface CallToolRequest extends Request {
 685 |   method: "tools/call";
 686 |   params: {
 687 |     name: string;
 688 |     arguments?: { [key: string]: unknown };
 689 |   };
 690 | }
 691 | 
 692 | /**
 693 |  * An optional notification from the server to the client, informing it that the list of tools it offers has changed. This may be issued by servers without any previous subscription from the client.
 694 |  */
 695 | export interface ToolListChangedNotification extends Notification {
 696 |   method: "notifications/tools/list_changed";
 697 | }
 698 | 
 699 | /**
 700 |  * Definition for a tool the client can call.
 701 |  */
 702 | export interface Tool {
 703 |   /**
 704 |    * The name of the tool.
 705 |    */
 706 |   name: string;
 707 |   /**
 708 |    * A human-readable description of the tool.
 709 |    */
 710 |   description?: string;
 711 |   /**
 712 |    * A JSON Schema object defining the expected parameters for the tool.
 713 |    */
 714 |   inputSchema: {
 715 |     type: "object";
 716 |     properties?: { [key: string]: object };
 717 |     required?: string[];
 718 |   };
 719 | }
 720 | 
 721 | /* Logging */
 722 | /**
 723 |  * A request from the client to the server, to enable or adjust logging.
 724 |  */
 725 | export interface SetLevelRequest extends Request {
 726 |   method: "logging/setLevel";
 727 |   params: {
 728 |     /**
 729 |      * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/message.
 730 |      */
 731 |     level: LoggingLevel;
 732 |   };
 733 | }
 734 | 
 735 | /**
 736 |  * Notification of a log message passed from server to client. If no logging/setLevel request has been sent from the client, the server MAY decide which messages to send automatically.
 737 |  */
 738 | export interface LoggingMessageNotification extends Notification {
 739 |   method: "notifications/message";
 740 |   params: {
 741 |     /**
 742 |      * The severity of this log message.
 743 |      */
 744 |     level: LoggingLevel;
 745 |     /**
 746 |      * An optional name of the logger issuing this message.
 747 |      */
 748 |     logger?: string;
 749 |     /**
 750 |      * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
 751 |      */
 752 |     data: unknown;
 753 |   };
 754 | }
 755 | 
 756 | /**
 757 |  * The severity of a log message.
 758 |  *
 759 |  * These map to syslog message severities, as specified in RFC-5424:
 760 |  * https://datatracker.ietf.org/doc/html/rfc5424#section-6.2.1
 761 |  */
 762 | export type LoggingLevel =
 763 |   | "debug"
 764 |   | "info"
 765 |   | "notice"
 766 |   | "warning"
 767 |   | "error"
 768 |   | "critical"
 769 |   | "alert"
 770 |   | "emergency";
 771 | 
 772 | /* Sampling */
 773 | /**
 774 |  * A request from the server to sample an LLM via the client. The client has full discretion over which model to select. The client should also inform the user before beginning sampling, to allow them to inspect the request (human in the loop) and decide whether to approve it.
 775 |  */
 776 | export interface CreateMessageRequest extends Request {
 777 |   method: "sampling/createMessage";
 778 |   params: {
 779 |     messages: SamplingMessage[];
 780 |     /**
 781 |      * The server's preferences for which model to select. The client MAY ignore these preferences.
 782 |      */
 783 |     modelPreferences?: ModelPreferences;
 784 |     /**
 785 |      * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
 786 |      */
 787 |     systemPrompt?: string;
 788 |     /**
 789 |      * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt. The client MAY ignore this request.
 790 |      */
 791 |     includeContext?: "none" | "thisServer" | "allServers";
 792 |     /**
 793 |      * @TJS-type number
 794 |      */
 795 |     temperature?: number;
 796 |     /**
 797 |      * The maximum number of tokens to sample, as requested by the server. The client MAY choose to sample fewer tokens than requested.
 798 |      */
 799 |     maxTokens: number;
 800 |     stopSequences?: string[];
 801 |     /**
 802 |      * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
 803 |      */
 804 |     metadata?: object;
 805 |   };
 806 | }
 807 | 
 808 | /**
 809 |  * The client's response to a sampling/create_message request from the server. The client should inform the user before returning the sampled message, to allow them to inspect the response (human in the loop) and decide whether to allow the server to see it.
 810 |  */
 811 | export interface CreateMessageResult extends Result, SamplingMessage {
 812 |   /**
 813 |    * The name of the model that generated the message.
 814 |    */
 815 |   model: string;
 816 |   /**
 817 |    * The reason why sampling stopped, if known.
 818 |    */
 819 |   stopReason?: "endTurn" | "stopSequence" | "maxTokens" | string;
 820 | }
 821 | 
 822 | /**
 823 |  * Describes a message issued to or received from an LLM API.
 824 |  */
 825 | export interface SamplingMessage {
 826 |   role: Role;
 827 |   content: TextContent | ImageContent | AudioContent;
 828 | }
 829 | 
 830 | /**
 831 |  * Optional annotations for the client. The client can use annotations to inform how objects are used or displayed
 832 |  */
 833 | export interface Annotations {
 834 |   /**
 835 |    * Describes who the intended customer of this object or data is.
 836 |    * 
 837 |    * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
 838 |    */
 839 |   audience?: Role[];
 840 | 
 841 |   /**
 842 |    * Describes how important this data is for operating the server.
 843 |    * 
 844 |    * A value of 1 means "most important," and indicates that the data is
 845 |    * effectively required, while 0 means "least important," and indicates that
 846 |    * the data is entirely optional.
 847 |    *
 848 |    * @TJS-type number
 849 |    * @minimum 0
 850 |    * @maximum 1
 851 |    */
 852 |   priority?: number;
 853 | }
 854 | 
 855 | /**
 856 |  * Text provided to or from an LLM.
 857 |  */
 858 | export interface TextContent {
 859 |   type: "text";
 860 | 
 861 |   /**
 862 |    * The text content of the message.
 863 |    */
 864 |   text: string;
 865 | 
 866 |   /**
 867 |    * Optional annotations for the client.
 868 |    */
 869 |   annotations?: Annotations;
 870 | }
 871 | 
 872 | /**
 873 |  * An image provided to or from an LLM.
 874 |  */
 875 | export interface ImageContent {
 876 |   type: "image";
 877 | 
 878 |   /**
 879 |    * The base64-encoded image data.
 880 |    *
 881 |    * @format byte
 882 |    */
 883 |   data: string;
 884 | 
 885 |   /**
 886 |    * The MIME type of the image. Different providers may support different image types.
 887 |    */
 888 |   mimeType: string;
 889 | 
 890 |   /**
 891 |    * Optional annotations for the client.
 892 |    */
 893 |   annotations?: Annotations;
 894 | }
 895 | 
 896 | 
 897 | /**
 898 |  * Audio provided to or from an LLM.
 899 |  */
 900 | export interface AudioContent {
 901 |   type: "audio";
 902 | 
 903 |   /**
 904 |    * The base64-encoded audio data.
 905 |    *
 906 |    * @format byte
 907 |    */
 908 |   data: string;
 909 | 
 910 |   /**
 911 |    * The MIME type of the audio. Different providers may support different audio types.
 912 |    */
 913 |   mimeType: string;
 914 | 
 915 |   /**
 916 |    * Optional annotations for the client.
 917 |    */
 918 |   annotations?: Annotations;
 919 | }
 920 | 
 921 | 
 922 | /**
 923 |  * The server's preferences for model selection, requested of the client during sampling.
 924 |  *
 925 |  * Because LLMs can vary along multiple dimensions, choosing the "best" model is
 926 |  * rarely straightforward.  Different models excel in different areas—some are
 927 |  * faster but less capable, others are more capable but more expensive, and so
 928 |  * on. This interface allows servers to express their priorities across multiple
 929 |  * dimensions to help clients make an appropriate selection for their use case.
 930 |  *
 931 |  * These preferences are always advisory. The client MAY ignore them. It is also
 932 |  * up to the client to decide how to interpret these preferences and how to
 933 |  * balance them against other considerations.
 934 |  */
 935 | export interface ModelPreferences {
 936 |   /**
 937 |    * Optional hints to use for model selection.
 938 |    *
 939 |    * If multiple hints are specified, the client MUST evaluate them in order
 940 |    * (such that the first match is taken).
 941 |    *
 942 |    * The client SHOULD prioritize these hints over the numeric priorities, but
 943 |    * MAY still use the priorities to select from ambiguous matches.
 944 |    */
 945 |   hints?: ModelHint[];
 946 | 
 947 |   /**
 948 |    * How much to prioritize cost when selecting a model. A value of 0 means cost
 949 |    * is not important, while a value of 1 means cost is the most important
 950 |    * factor.
 951 |    *
 952 |    * @TJS-type number
 953 |    * @minimum 0
 954 |    * @maximum 1
 955 |    */
 956 |   costPriority?: number;
 957 | 
 958 |   /**
 959 |    * How much to prioritize sampling speed (latency) when selecting a model. A
 960 |    * value of 0 means speed is not important, while a value of 1 means speed is
 961 |    * the most important factor.
 962 |    *
 963 |    * @TJS-type number
 964 |    * @minimum 0
 965 |    * @maximum 1
 966 |    */
 967 |   speedPriority?: number;
 968 | 
 969 |   /**
 970 |    * How much to prioritize intelligence and capabilities when selecting a
 971 |    * model. A value of 0 means intelligence is not important, while a value of 1
 972 |    * means intelligence is the most important factor.
 973 |    *
 974 |    * @TJS-type number
 975 |    * @minimum 0
 976 |    * @maximum 1
 977 |    */
 978 |   intelligencePriority?: number;
 979 | }
 980 | 
 981 | /**
 982 |  * Hints to use for model selection.
 983 |  *
 984 |  * Keys not declared here are currently left unspecified by the spec and are up
 985 |  * to the client to interpret.
 986 |  */
 987 | export interface ModelHint {
 988 |   /**
 989 |    * A hint for a model name.
 990 |    *
 991 |    * The client SHOULD treat this as a substring of a model name; for example:
 992 |    *  - `claude-3-5-sonnet` should match `claude-3-5-sonnet-20241022`
 993 |    *  - `sonnet` should match `claude-3-5-sonnet-20241022`, `claude-3-sonnet-20240229`, etc.
 994 |    *  - `claude` should match any Claude model
 995 |    *
 996 |    * The client MAY also map the string to a different provider's model name or a different model family, as long as it fills a similar niche; for example:
 997 |    *  - `gemini-1.5-flash` could match `claude-3-haiku-20240307`
 998 |    */
 999 |   name?: string;
1000 | }
1001 | 
1002 | /* Autocomplete */
1003 | /**
1004 |  * A request from the client to the server, to ask for completion options.
1005 |  */
1006 | export interface CompleteRequest extends Request {
1007 |   method: "completion/complete";
1008 |   params: {
1009 |     ref: PromptReference | ResourceReference;
1010 |     /**
1011 |      * The argument's information
1012 |      */
1013 |     argument: {
1014 |       /**
1015 |        * The name of the argument
1016 |        */
1017 |       name: string;
1018 |       /**
1019 |        * The value of the argument to use for completion matching.
1020 |        */
1021 |       value: string;
1022 |     };
1023 |   };
1024 | }
1025 | 
1026 | /**
1027 |  * The server's response to a completion/complete request
1028 |  */
1029 | export interface CompleteResult extends Result {
1030 |   completion: {
1031 |     /**
1032 |      * An array of completion values. Must not exceed 100 items.
1033 |      */
1034 |     values: string[];
1035 |     /**
1036 |      * The total number of completion options available. This can exceed the number of values actually sent in the response.
1037 |      */
1038 |     total?: number;
1039 |     /**
1040 |      * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
1041 |      */
1042 |     hasMore?: boolean;
1043 |   };
1044 | }
1045 | 
1046 | /**
1047 |  * A reference to a resource or resource template definition.
1048 |  */
1049 | export interface ResourceReference {
1050 |   type: "ref/resource";
1051 |   /**
1052 |    * The URI or URI template of the resource.
1053 |    *
1054 |    * @format uri-template
1055 |    */
1056 |   uri: string;
1057 | }
1058 | 
1059 | /**
1060 |  * Identifies a prompt.
1061 |  */
1062 | export interface PromptReference {
1063 |   type: "ref/prompt";
1064 |   /**
1065 |    * The name of the prompt or prompt template
1066 |    */
1067 |   name: string;
1068 | }
1069 | 
1070 | /* Roots */
1071 | /**
1072 |  * Sent from the server to request a list of root URIs from the client. Roots allow
1073 |  * servers to ask for specific directories or files to operate on. A common example
1074 |  * for roots is providing a set of repositories or directories a server should operate
1075 |  * on.
1076 |  *
1077 |  * This request is typically used when the server needs to understand the file system
1078 |  * structure or access specific locations that the client has permission to read from.
1079 |  */
1080 | export interface ListRootsRequest extends Request {
1081 |   method: "roots/list";
1082 | }
1083 | 
1084 | /**
1085 |  * The client's response to a roots/list request from the server.
1086 |  * This result contains an array of Root objects, each representing a root directory
1087 |  * or file that the server can operate on.
1088 |  */
1089 | export interface ListRootsResult extends Result {
1090 |   roots: Root[];
1091 | }
1092 | 
1093 | /**
1094 |  * Represents a root directory or file that the server can operate on.
1095 |  */
1096 | export interface Root {
1097 |   /**
1098 |    * The URI identifying the root. This *must* start with file:// for now.
1099 |    * This restriction may be relaxed in future versions of the protocol to allow
1100 |    * other URI schemes.
1101 |    *
1102 |    * @format uri
1103 |    */
1104 |   uri: string;
1105 |   /**
1106 |    * An optional name for the root. This can be used to provide a human-readable
1107 |    * identifier for the root, which may be useful for display purposes or for
1108 |    * referencing the root in other parts of the application.
1109 |    */
1110 |   name?: string;
1111 | }
1112 | 
1113 | /**
1114 |  * A notification from the client to the server, informing it that the list of roots has changed.
1115 |  * This notification should be sent whenever the client adds, removes, or modifies any root.
1116 |  * The server should then request an updated list of roots using the ListRootsRequest.
1117 |  */
1118 | export interface RootsListChangedNotification extends Notification {
1119 |   method: "notifications/roots/list_changed";
1120 | }
1121 | 
1122 | /* Client messages */
1123 | export type ClientRequest =
1124 |   | PingRequest
1125 |   | InitializeRequest
1126 |   | CompleteRequest
1127 |   | SetLevelRequest
1128 |   | GetPromptRequest
1129 |   | ListPromptsRequest
1130 |   | ListResourcesRequest
1131 |   | ReadResourceRequest
1132 |   | SubscribeRequest
1133 |   | UnsubscribeRequest
1134 |   | CallToolRequest
1135 |   | ListToolsRequest;
1136 | 
1137 | export type ClientNotification =
1138 |   | CancelledNotification
1139 |   | ProgressNotification
1140 |   | InitializedNotification
1141 |   | RootsListChangedNotification;
1142 | 
1143 | export type ClientResult = EmptyResult | CreateMessageResult | ListRootsResult;
1144 | 
1145 | /* Server messages */
1146 | export type ServerRequest =
1147 |   | PingRequest
1148 |   | CreateMessageRequest
1149 |   | ListRootsRequest;
1150 | 
1151 | export type ServerNotification =
1152 |   | CancelledNotification
1153 |   | ProgressNotification
1154 |   | LoggingMessageNotification
1155 |   | ResourceUpdatedNotification
1156 |   | ResourceListChangedNotification
1157 |   | ToolListChangedNotification
1158 |   | PromptListChangedNotification;
1159 | 
1160 | export type ServerResult =
1161 |   | EmptyResult
1162 |   | InitializeResult
1163 |   | CompleteResult
1164 |   | GetPromptResult
1165 |   | ListPromptsResult
1166 |   | ListResourcesResult
1167 |   | ReadResourceResult
1168 |   | CallToolResult
1169 |   | ListToolsResult;
1170 | 


--------------------------------------------------------------------------------
/scripts/validate_examples.ts:
--------------------------------------------------------------------------------
 1 | import * as fs from "fs";
 2 | import Ajv, { ValidateFunction } from "ajv";
 3 | import { globSync } from "glob";
 4 | import addFormats from "ajv-formats";
 5 | import { readFileSync } from "node:fs";
 6 | 
 7 | function createAjvInstance(): { ajv: Ajv; validate: ValidateFunction } {
 8 |   const ajv = new Ajv({
 9 |     // strict: true,
10 |     allowUnionTypes: true,
11 |   });
12 |   addFormats(ajv);
13 |   const schema = JSON.parse(readFileSync("schema/schema.json", "utf8"));
14 |   const validate = ajv.compile(schema);
15 | 
16 |   return { ajv, validate };
17 | }
18 | 
19 | function validateJsonBlocks(
20 |   validate: ValidateFunction,
21 |   filePath: string,
22 | ): void {
23 |   const content = fs.readFileSync(filePath, "utf8");
24 |   const jsonBlocks = content.match(/```json\s*\n([\s\S]*?)\n\s*```/g);
25 | 
26 |   if (!jsonBlocks) {
27 |     console.log("No JSON blocks found in the file.");
28 |     return;
29 |   }
30 | 
31 |   jsonBlocks.forEach((block, index) => {
32 |     try {
33 |       const jsonContent = block.replace(/```json\s*\n|\n\s*```/g, "");
34 |       const parsedJson = JSON.parse(jsonContent);
35 |       const valid = validate(parsedJson);
36 | 
37 |       if (valid) {
38 |         console.log(`JSON block ${index + 1} is valid.`);
39 |       } else {
40 |         console.log(`JSON block ${index + 1} is invalid:`);
41 |         console.log(parsedJson);
42 |         console.log(validate.errors);
43 |       }
44 |     } catch (error) {
45 |       console.error(
46 |         `Error parsing JSON block ${index + 1}:`,
47 |         (error as Error).message,
48 |       );
49 |     }
50 |   });
51 | }
52 | 
53 | const { validate } = createAjvInstance();
54 | 
55 | // Usage
56 | const mdFiles = globSync("examples/**/*.md", {});
57 | 
58 | mdFiles.forEach((filePath) => {
59 |   console.log(`Validating JSON blocks in ${filePath}:`);
60 |   validateJsonBlocks(validate, filePath);
61 |   console.log("\n"); // Add a newline for separation between files
62 | });
63 | 


--------------------------------------------------------------------------------
/site/.gitignore:
--------------------------------------------------------------------------------
1 | public/
2 | *.lock
3 | 


--------------------------------------------------------------------------------
/site/go.mod:
--------------------------------------------------------------------------------
1 | module github.com/modelcontextprotocol/specification
2 | 
3 | go 1.23.1
4 | 
5 | require github.com/imfing/hextra v0.8.3 // indirect
6 | 


--------------------------------------------------------------------------------
/site/go.sum:
--------------------------------------------------------------------------------
1 | github.com/imfing/hextra v0.8.3 h1:peKCtkOwcVMQV2EqMb/VUhwpYDsI1B14U1rDqAgMHzk=
2 | github.com/imfing/hextra v0.8.3/go.mod h1:cEfel3lU/bSx7lTE/+uuR4GJaphyOyiwNR3PTqFTXpI=
3 | 


--------------------------------------------------------------------------------
/site/hugo.yaml:
--------------------------------------------------------------------------------
  1 | baseURL: "https://spec.modelcontextprotocol.io"
  2 | title: Model Context Protocol Specification
  3 | 
  4 | enableEmoji: true
  5 | enableRobotsTXT: true
  6 | enableGitInfo: true
  7 | 
  8 | outputs:
  9 |   home: [HTML]
 10 |   page: [HTML]
 11 |   section: [HTML, RSS]
 12 | 
 13 | module:
 14 |   imports:
 15 |     - path: github.com/imfing/hextra
 16 | 
 17 | contentDir: ../docs
 18 | 
 19 | params:
 20 |   navbar:
 21 |     displayTitle: false
 22 |     displayLogo: true
 23 |     logo:
 24 |       path: images/light.svg
 25 |       dark: images/dark.svg
 26 |       link: /latest
 27 |       width: 204
 28 |       height: 30
 29 |   protocolRevision: "2024-11-05"
 30 | 
 31 | markup:
 32 |   goldmark:
 33 |     renderer:
 34 |       unsafe: false
 35 |   extensions:
 36 |     definitionList: true
 37 |     footnote: true
 38 |     linkify: true
 39 |     linkifyProtocol: https
 40 |     strikethrough: true
 41 |     table: true
 42 |     typographer:
 43 |       apostrophe: "&rsquo;"
 44 |       disable: false
 45 |       ellipsis: "&hellip;"
 46 |       emDash: "&mdash;"
 47 |       enDash: "&ndash;"
 48 |       leftAngleQuote: "&laquo;"
 49 |       leftDoubleQuote: "&ldquo;"
 50 |       leftSingleQuote: "&lsquo;"
 51 |       rightAngleQuote: "&raquo;"
 52 |       rightDoubleQuote: "&rdquo;"
 53 |       rightSingleQuote: "&rsquo;"
 54 |   highlight:
 55 |     noClasses: false
 56 | 
 57 | enableInlineShortcodes: true
 58 | 
 59 | menu:
 60 |   main:
 61 |     - name: Specification (Draft)
 62 |       pageRef: /draft
 63 |       weight: 1
 64 |     - name: Specification (Latest)
 65 |       pageRef: /latest
 66 |       weight: 2
 67 |     - name: Resources
 68 |       pageRef: /resources
 69 |       weight: 3
 70 |     - name: Search
 71 |       weight: 4
 72 |       params:
 73 |         type: search
 74 |     - name: GitHub
 75 |       weight: 5
 76 |       url: "https://github.com/modelcontextprotocol/specification"
 77 |       params:
 78 |         icon: github
 79 | 
 80 |   sidebar:
 81 |     - identifier: schema
 82 |       name: "Schema ↗"
 83 |       url: "https://github.com/modelcontextprotocol/specification/tree/main/schema"
 84 |       weight: 1
 85 |     - identifier: more
 86 |       name: More
 87 |       params:
 88 |         type: separator
 89 |       weight: 2
 90 |     - identifier: userDocs
 91 |       name: "User Guide ↗"
 92 |       url: "https://modelcontextprotocol.io"
 93 |       weight: 3
 94 |     - identifier: pythonSdk
 95 |       name: "Python SDK ↗"
 96 |       url: "https://github.com/modelcontextprotocol/python-sdk"
 97 |       weight: 4
 98 |     - identifier: typescriptSdk
 99 |       name: "TypeScript SDK ↗"
100 |       url: "https://github.com/modelcontextprotocol/typescript-sdk"
101 |       weight: 5
102 | 


--------------------------------------------------------------------------------
/site/layouts/index.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE html>
 2 | <html>
 3 | <head>
 4 |     <meta charset="utf-8">
 5 |     <title>Model Context Protocol Specification</title>
 6 |     <script>window.location.replace("/latest");</script>
 7 |     <meta http-equiv="refresh" content="0; url=/latest">
 8 |     <link rel="canonical" href="/latest">
 9 | </head>
10 | <body>
11 |     <h1>Model Context Protocol Specification</h1>
12 |     <p>Redirecting to <a href="/latest">specification</a>...</p>
13 | </body>
14 | </html>


--------------------------------------------------------------------------------
/site/static/android-chrome-192x192.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/specification/main/site/static/android-chrome-192x192.png


--------------------------------------------------------------------------------
/site/static/android-chrome-512x512.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/specification/main/site/static/android-chrome-512x512.png


--------------------------------------------------------------------------------
/site/static/apple-touch-icon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/specification/main/site/static/apple-touch-icon.png


--------------------------------------------------------------------------------
/site/static/favicon-16x16.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/specification/main/site/static/favicon-16x16.png


--------------------------------------------------------------------------------
/site/static/favicon-32x32.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/specification/main/site/static/favicon-32x32.png


--------------------------------------------------------------------------------
/site/static/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/specification/main/site/static/favicon.ico


--------------------------------------------------------------------------------
/site/static/favicon.svg:
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
/site/static/images/dark.svg:
--------------------------------------------------------------------------------
1 | <svg width="1338" height="195" viewBox="0 0 1338 195" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M25 97.8528L92.8822 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706V29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177" stroke="white" stroke-width="12" stroke-linecap="round"/>
3 | <path d="M76.2652 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52" stroke="white" stroke-width="12" stroke-linecap="round"/>
4 | <path d="M109.853 46.9411L59.6482 97.1457C50.2756 106.518 50.2756 121.714 59.6482 131.087V131.087C69.0208 140.459 84.2167 140.459 93.5893 131.087L143.794 80.8822" stroke="white" stroke-width="12" stroke-linecap="round"/>
5 | <path d="M223.886 63.1818H239.364L260.091 113.773H260.909L281.636 63.1818H297.114V133H284.977V85.0341H284.33L265.034 132.795H255.966L236.67 84.9318H236.023V133H223.886V63.1818ZM333.182 134.023C328.068 134.023 323.636 132.898 319.886 130.648C316.136 128.398 313.227 125.25 311.159 121.205C309.114 117.159 308.091 112.432 308.091 107.023C308.091 101.614 309.114 96.875 311.159 92.8068C313.227 88.7386 316.136 85.5795 319.886 83.3295C323.636 81.0795 328.068 79.9545 333.182 79.9545C338.295 79.9545 342.727 81.0795 346.477 83.3295C350.227 85.5795 353.125 88.7386 355.17 92.8068C357.239 96.875 358.273 101.614 358.273 107.023C358.273 112.432 357.239 117.159 355.17 121.205C353.125 125.25 350.227 128.398 346.477 130.648C342.727 132.898 338.295 134.023 333.182 134.023ZM333.25 124.136C336.023 124.136 338.341 123.375 340.205 121.852C342.068 120.307 343.455 118.239 344.364 115.648C345.295 113.057 345.761 110.17 345.761 106.989C345.761 103.784 345.295 100.886 344.364 98.2955C343.455 95.6818 342.068 93.6023 340.205 92.0568C338.341 90.5114 336.023 89.7386 333.25 89.7386C330.409 89.7386 328.045 90.5114 326.159 92.0568C324.295 93.6023 322.898 95.6818 321.966 98.2955C321.057 100.886 320.602 103.784 320.602 106.989C320.602 110.17 321.057 113.057 321.966 115.648C322.898 118.239 324.295 120.307 326.159 121.852C328.045 123.375 330.409 124.136 333.25 124.136ZM388.179 133.92C384.065 133.92 380.384 132.864 377.134 130.75C373.884 128.636 371.315 125.568 369.429 121.545C367.543 117.523 366.599 112.636 366.599 106.886C366.599 101.068 367.554 96.1591 369.463 92.1591C371.395 88.1364 373.997 85.1023 377.27 83.0568C380.543 80.9886 384.19 79.9545 388.213 79.9545C391.281 79.9545 393.804 80.4773 395.781 81.5227C397.759 82.5455 399.327 83.7841 400.486 85.2386C401.645 86.6705 402.543 88.0227 403.179 89.2955H403.69V63.1818H416.065V133H403.929V124.75H403.179C402.543 126.023 401.622 127.375 400.418 128.807C399.213 130.216 397.622 131.42 395.645 132.42C393.668 133.42 391.179 133.92 388.179 133.92ZM391.622 123.795C394.236 123.795 396.463 123.091 398.304 121.682C400.145 120.25 401.543 118.261 402.497 115.716C403.452 113.17 403.929 110.205 403.929 106.818C403.929 103.432 403.452 100.489 402.497 97.9886C401.565 95.4886 400.179 93.5455 398.338 92.1591C396.52 90.7727 394.281 90.0795 391.622 90.0795C388.872 90.0795 386.577 90.7955 384.736 92.2273C382.895 93.6591 381.509 95.6364 380.577 98.1591C379.645 100.682 379.179 103.568 379.179 106.818C379.179 110.091 379.645 113.011 380.577 115.58C381.531 118.125 382.929 120.136 384.77 121.614C386.634 123.068 388.918 123.795 391.622 123.795ZM452.398 134.023C447.148 134.023 442.614 132.932 438.795 130.75C435 128.545 432.08 125.432 430.034 121.409C427.989 117.364 426.966 112.602 426.966 107.125C426.966 101.739 427.989 97.0114 430.034 92.9432C432.102 88.8523 434.989 85.6705 438.693 83.3977C442.398 81.1023 446.75 79.9545 451.75 79.9545C454.977 79.9545 458.023 80.4773 460.886 81.5227C463.773 82.5455 466.318 84.1364 468.523 86.2955C470.75 88.4545 472.5 91.2045 473.773 94.5455C475.045 97.8636 475.682 101.818 475.682 106.409V110.193H432.761V101.875H463.852C463.83 99.5114 463.318 97.4091 462.318 95.5682C461.318 93.7045 459.92 92.2386 458.125 91.1705C456.352 90.1023 454.284 89.5682 451.92 89.5682C449.398 89.5682 447.182 90.1818 445.273 91.4091C443.364 92.6136 441.875 94.2045 440.807 96.1818C439.761 98.1364 439.227 100.284 439.205 102.625V109.886C439.205 112.932 439.761 115.545 440.875 117.727C441.989 119.886 443.545 121.545 445.545 122.705C447.545 123.841 449.886 124.409 452.568 124.409C454.364 124.409 455.989 124.159 457.443 123.659C458.898 123.136 460.159 122.375 461.227 121.375C462.295 120.375 463.102 119.136 463.648 117.659L475.17 118.955C474.443 122 473.057 124.659 471.011 126.932C468.989 129.182 466.398 130.932 463.239 132.182C460.08 133.409 456.466 134.023 452.398 134.023ZM498.463 63.1818V133H486.122V63.1818H498.463ZM595.273 86.7386H582.523C582.159 84.6477 581.489 82.7955 580.511 81.1818C579.534 79.5455 578.318 78.1591 576.864 77.0227C575.409 75.8864 573.75 75.0341 571.886 74.4659C570.045 73.875 568.057 73.5795 565.92 73.5795C562.125 73.5795 558.761 74.5341 555.83 76.4432C552.898 78.3295 550.602 81.1023 548.943 84.7614C547.284 88.3977 546.455 92.8409 546.455 98.0909C546.455 103.432 547.284 107.932 548.943 111.591C550.625 115.227 552.92 117.977 555.83 119.841C558.761 121.682 562.114 122.602 565.886 122.602C567.977 122.602 569.932 122.33 571.75 121.784C573.591 121.216 575.239 120.386 576.693 119.295C578.17 118.205 579.409 116.864 580.409 115.273C581.432 113.682 582.136 111.864 582.523 109.818L595.273 109.886C594.795 113.205 593.761 116.318 592.17 119.227C590.602 122.136 588.545 124.705 586 126.932C583.455 129.136 580.477 130.864 577.068 132.114C573.659 133.341 569.875 133.955 565.716 133.955C559.58 133.955 554.102 132.534 549.284 129.693C544.466 126.852 540.67 122.75 537.898 117.386C535.125 112.023 533.739 105.591 533.739 98.0909C533.739 90.5682 535.136 84.1364 537.932 78.7955C540.727 73.4318 544.534 69.3295 549.352 66.4886C554.17 63.6477 559.625 62.2273 565.716 62.2273C569.602 62.2273 573.216 62.7727 576.557 63.8636C579.898 64.9545 582.875 66.5568 585.489 68.6705C588.102 70.7614 590.25 73.3295 591.932 76.375C593.636 79.3977 594.75 82.8523 595.273 86.7386ZM629.151 134.023C624.037 134.023 619.605 132.898 615.855 130.648C612.105 128.398 609.196 125.25 607.128 121.205C605.082 117.159 604.06 112.432 604.06 107.023C604.06 101.614 605.082 96.875 607.128 92.8068C609.196 88.7386 612.105 85.5795 615.855 83.3295C619.605 81.0795 624.037 79.9545 629.151 79.9545C634.264 79.9545 638.696 81.0795 642.446 83.3295C646.196 85.5795 649.094 88.7386 651.139 92.8068C653.207 96.875 654.241 101.614 654.241 107.023C654.241 112.432 653.207 117.159 651.139 121.205C649.094 125.25 646.196 128.398 642.446 130.648C638.696 132.898 634.264 134.023 629.151 134.023ZM629.219 124.136C631.991 124.136 634.31 123.375 636.173 121.852C638.037 120.307 639.423 118.239 640.332 115.648C641.264 113.057 641.73 110.17 641.73 106.989C641.73 103.784 641.264 100.886 640.332 98.2955C639.423 95.6818 638.037 93.6023 636.173 92.0568C634.31 90.5114 631.991 89.7386 629.219 89.7386C626.378 89.7386 624.014 90.5114 622.128 92.0568C620.264 93.6023 618.866 95.6818 617.935 98.2955C617.026 100.886 616.571 103.784 616.571 106.989C616.571 110.17 617.026 113.057 617.935 115.648C618.866 118.239 620.264 120.307 622.128 121.852C624.014 123.375 626.378 124.136 629.219 124.136ZM677.057 102.318V133H664.716V80.6364H676.511V89.5341H677.125C678.33 86.6023 680.25 84.2727 682.886 82.5455C685.545 80.8182 688.83 79.9545 692.739 79.9545C696.352 79.9545 699.5 80.7273 702.182 82.2727C704.886 83.8182 706.977 86.0568 708.455 88.9886C709.955 91.9205 710.693 95.4773 710.67 99.6591V133H698.33V101.568C698.33 98.0682 697.42 95.3295 695.602 93.3523C693.807 91.375 691.318 90.3864 688.136 90.3864C685.977 90.3864 684.057 90.8636 682.375 91.8182C680.716 92.75 679.409 94.1023 678.455 95.875C677.523 97.6477 677.057 99.7955 677.057 102.318ZM749.364 80.6364V90.1818H719.261V80.6364H749.364ZM726.693 68.0909H739.034V117.25C739.034 118.909 739.284 120.182 739.784 121.068C740.307 121.932 740.989 122.523 741.83 122.841C742.67 123.159 743.602 123.318 744.625 123.318C745.398 123.318 746.102 123.261 746.739 123.148C747.398 123.034 747.898 122.932 748.239 122.841L750.318 132.489C749.659 132.716 748.716 132.966 747.489 133.239C746.284 133.511 744.807 133.67 743.057 133.716C739.966 133.807 737.182 133.341 734.705 132.318C732.227 131.273 730.261 129.659 728.807 127.477C727.375 125.295 726.67 122.568 726.693 119.295V68.0909ZM782.304 134.023C777.054 134.023 772.52 132.932 768.702 130.75C764.906 128.545 761.986 125.432 759.94 121.409C757.895 117.364 756.872 112.602 756.872 107.125C756.872 101.739 757.895 97.0114 759.94 92.9432C762.009 88.8523 764.895 85.6705 768.599 83.3977C772.304 81.1023 776.656 79.9545 781.656 79.9545C784.884 79.9545 787.929 80.4773 790.793 81.5227C793.679 82.5455 796.224 84.1364 798.429 86.2955C800.656 88.4545 802.406 91.2045 803.679 94.5455C804.952 97.8636 805.588 101.818 805.588 106.409V110.193H762.668V101.875H793.759C793.736 99.5114 793.224 97.4091 792.224 95.5682C791.224 93.7045 789.827 92.2386 788.031 91.1705C786.259 90.1023 784.19 89.5682 781.827 89.5682C779.304 89.5682 777.088 90.1818 775.179 91.4091C773.27 92.6136 771.781 94.2045 770.713 96.1818C769.668 98.1364 769.134 100.284 769.111 102.625V109.886C769.111 112.932 769.668 115.545 770.781 117.727C771.895 119.886 773.452 121.545 775.452 122.705C777.452 123.841 779.793 124.409 782.474 124.409C784.27 124.409 785.895 124.159 787.349 123.659C788.804 123.136 790.065 122.375 791.134 121.375C792.202 120.375 793.009 119.136 793.554 117.659L805.077 118.955C804.349 122 802.963 124.659 800.918 126.932C798.895 129.182 796.304 130.932 793.145 132.182C789.986 133.409 786.372 134.023 782.304 134.023ZM824.994 80.6364L835.562 99.9659L846.301 80.6364H859.358L843.574 106.818L859.631 133H846.642L835.562 114.148L824.585 133H811.494L827.449 106.818L811.903 80.6364H824.994ZM895.051 80.6364V90.1818H864.949V80.6364H895.051ZM872.381 68.0909H884.722V117.25C884.722 118.909 884.972 120.182 885.472 121.068C885.994 121.932 886.676 122.523 887.517 122.841C888.358 123.159 889.29 123.318 890.312 123.318C891.085 123.318 891.79 123.261 892.426 123.148C893.085 123.034 893.585 122.932 893.926 122.841L896.006 132.489C895.347 132.716 894.403 132.966 893.176 133.239C891.972 133.511 890.494 133.67 888.744 133.716C885.653 133.807 882.869 133.341 880.392 132.318C877.915 131.273 875.949 129.659 874.494 127.477C873.063 125.295 872.358 122.568 872.381 119.295V68.0909ZM929.73 133V63.1818H955.912C961.276 63.1818 965.776 64.1818 969.412 66.1818C973.071 68.1818 975.832 70.9318 977.696 74.4318C979.582 77.9091 980.526 81.8636 980.526 86.2955C980.526 90.7727 979.582 94.75 977.696 98.2273C975.81 101.705 973.026 104.443 969.344 106.443C965.662 108.42 961.128 109.409 955.741 109.409H938.389V99.0114H954.037C957.173 99.0114 959.741 98.4659 961.741 97.375C963.741 96.2841 965.219 94.7841 966.173 92.875C967.151 90.9659 967.639 88.7727 967.639 86.2955C967.639 83.8182 967.151 81.6364 966.173 79.75C965.219 77.8636 963.73 76.3977 961.707 75.3523C959.707 74.2841 957.128 73.75 953.969 73.75H942.378V133H929.73ZM990.966 133V80.6364H1002.93V89.3636H1003.48C1004.43 86.3409 1006.07 84.0114 1008.39 82.375C1010.73 80.7159 1013.4 79.8864 1016.4 79.8864C1017.08 79.8864 1017.84 79.9205 1018.68 79.9886C1019.55 80.0341 1020.26 80.1136 1020.83 80.2273V91.5795C1020.31 91.3977 1019.48 91.2386 1018.34 91.1023C1017.23 90.9432 1016.15 90.8636 1015.1 90.8636C1012.85 90.8636 1010.83 91.3523 1009.03 92.3295C1007.26 93.2841 1005.86 94.6136 1004.84 96.3182C1003.82 98.0227 1003.31 99.9886 1003.31 102.216V133H990.966ZM1049.71 134.023C1044.6 134.023 1040.17 132.898 1036.42 130.648C1032.67 128.398 1029.76 125.25 1027.69 121.205C1025.64 117.159 1024.62 112.432 1024.62 107.023C1024.62 101.614 1025.64 96.875 1027.69 92.8068C1029.76 88.7386 1032.67 85.5795 1036.42 83.3295C1040.17 81.0795 1044.6 79.9545 1049.71 79.9545C1054.83 79.9545 1059.26 81.0795 1063.01 83.3295C1066.76 85.5795 1069.66 88.7386 1071.7 92.8068C1073.77 96.875 1074.8 101.614 1074.8 107.023C1074.8 112.432 1073.77 117.159 1071.7 121.205C1069.66 125.25 1066.76 128.398 1063.01 130.648C1059.26 132.898 1054.83 134.023 1049.71 134.023ZM1049.78 124.136C1052.55 124.136 1054.87 123.375 1056.74 121.852C1058.6 120.307 1059.99 118.239 1060.89 115.648C1061.83 113.057 1062.29 110.17 1062.29 106.989C1062.29 103.784 1061.83 100.886 1060.89 98.2955C1059.99 95.6818 1058.6 93.6023 1056.74 92.0568C1054.87 90.5114 1052.55 89.7386 1049.78 89.7386C1046.94 89.7386 1044.58 90.5114 1042.69 92.0568C1040.83 93.6023 1039.43 95.6818 1038.5 98.2955C1037.59 100.886 1037.13 103.784 1037.13 106.989C1037.13 110.17 1037.59 113.057 1038.5 115.648C1039.43 118.239 1040.83 120.307 1042.69 121.852C1044.58 123.375 1046.94 124.136 1049.78 124.136ZM1111.43 80.6364V90.1818H1081.32V80.6364H1111.43ZM1088.76 68.0909H1101.1V117.25C1101.1 118.909 1101.35 120.182 1101.85 121.068C1102.37 121.932 1103.05 122.523 1103.89 122.841C1104.73 123.159 1105.66 123.318 1106.69 123.318C1107.46 123.318 1108.16 123.261 1108.8 123.148C1109.46 123.034 1109.96 122.932 1110.3 122.841L1112.38 132.489C1111.72 132.716 1110.78 132.966 1109.55 133.239C1108.35 133.511 1106.87 133.67 1105.12 133.716C1102.03 133.807 1099.24 133.341 1096.77 132.318C1094.29 131.273 1092.32 129.659 1090.87 127.477C1089.44 125.295 1088.73 122.568 1088.76 119.295V68.0909ZM1144.03 134.023C1138.91 134.023 1134.48 132.898 1130.73 130.648C1126.98 128.398 1124.07 125.25 1122 121.205C1119.96 117.159 1118.93 112.432 1118.93 107.023C1118.93 101.614 1119.96 96.875 1122 92.8068C1124.07 88.7386 1126.98 85.5795 1130.73 83.3295C1134.48 81.0795 1138.91 79.9545 1144.03 79.9545C1149.14 79.9545 1153.57 81.0795 1157.32 83.3295C1161.07 85.5795 1163.97 88.7386 1166.01 92.8068C1168.08 96.875 1169.12 101.614 1169.12 107.023C1169.12 112.432 1168.08 117.159 1166.01 121.205C1163.97 125.25 1161.07 128.398 1157.32 130.648C1153.57 132.898 1149.14 134.023 1144.03 134.023ZM1144.09 124.136C1146.87 124.136 1149.18 123.375 1151.05 121.852C1152.91 120.307 1154.3 118.239 1155.21 115.648C1156.14 113.057 1156.61 110.17 1156.61 106.989C1156.61 103.784 1156.14 100.886 1155.21 98.2955C1154.3 95.6818 1152.91 93.6023 1151.05 92.0568C1149.18 90.5114 1146.87 89.7386 1144.09 89.7386C1141.25 89.7386 1138.89 90.5114 1137 92.0568C1135.14 93.6023 1133.74 95.6818 1132.81 98.2955C1131.9 100.886 1131.45 103.784 1131.45 106.989C1131.45 110.17 1131.9 113.057 1132.81 115.648C1133.74 118.239 1135.14 120.307 1137 121.852C1138.89 123.375 1141.25 124.136 1144.09 124.136ZM1202.43 134.023C1197.2 134.023 1192.72 132.875 1188.97 130.58C1185.24 128.284 1182.36 125.114 1180.34 121.068C1178.34 117 1177.34 112.318 1177.34 107.023C1177.34 101.705 1178.36 97.0114 1180.41 92.9432C1182.45 88.8523 1185.34 85.6705 1189.07 83.3977C1192.82 81.1023 1197.25 79.9545 1202.36 79.9545C1206.61 79.9545 1210.38 80.7386 1213.65 82.3068C1216.94 83.8523 1219.57 86.0455 1221.52 88.8864C1223.48 91.7045 1224.59 95 1224.86 98.7727H1213.07C1212.59 96.25 1211.45 94.1477 1209.66 92.4659C1207.89 90.7614 1205.51 89.9091 1202.53 89.9091C1200.01 89.9091 1197.8 90.5909 1195.89 91.9545C1193.98 93.2955 1192.49 95.2273 1191.42 97.75C1190.38 100.273 1189.85 103.295 1189.85 106.818C1189.85 110.386 1190.38 113.455 1191.42 116.023C1192.47 118.568 1193.93 120.534 1195.82 121.92C1197.73 123.284 1199.97 123.966 1202.53 123.966C1204.35 123.966 1205.98 123.625 1207.41 122.943C1208.86 122.239 1210.08 121.227 1211.06 119.909C1212.03 118.591 1212.7 116.989 1213.07 115.102H1224.86C1224.57 118.807 1223.48 122.091 1221.59 124.955C1219.7 127.795 1217.14 130.023 1213.89 131.636C1210.64 133.227 1206.82 134.023 1202.43 134.023ZM1257.84 134.023C1252.72 134.023 1248.29 132.898 1244.54 130.648C1240.79 128.398 1237.88 125.25 1235.82 121.205C1233.77 117.159 1232.75 112.432 1232.75 107.023C1232.75 101.614 1233.77 96.875 1235.82 92.8068C1237.88 88.7386 1240.79 85.5795 1244.54 83.3295C1248.29 81.0795 1252.72 79.9545 1257.84 79.9545C1262.95 79.9545 1267.38 81.0795 1271.13 83.3295C1274.88 85.5795 1277.78 88.7386 1279.83 92.8068C1281.89 96.875 1282.93 101.614 1282.93 107.023C1282.93 112.432 1281.89 117.159 1279.83 121.205C1277.78 125.25 1274.88 128.398 1271.13 130.648C1267.38 132.898 1262.95 134.023 1257.84 134.023ZM1257.91 124.136C1260.68 124.136 1263 123.375 1264.86 121.852C1266.72 120.307 1268.11 118.239 1269.02 115.648C1269.95 113.057 1270.42 110.17 1270.42 106.989C1270.42 103.784 1269.95 100.886 1269.02 98.2955C1268.11 95.6818 1266.72 93.6023 1264.86 92.0568C1263 90.5114 1260.68 89.7386 1257.91 89.7386C1255.07 89.7386 1252.7 90.5114 1250.82 92.0568C1248.95 93.6023 1247.55 95.6818 1246.62 98.2955C1245.71 100.886 1245.26 103.784 1245.26 106.989C1245.26 110.17 1245.71 113.057 1246.62 115.648C1247.55 118.239 1248.95 120.307 1250.82 121.852C1252.7 123.375 1255.07 124.136 1257.91 124.136ZM1305.74 63.1818V133H1293.4V63.1818H1305.74Z" fill="white"/>
6 | </svg>
7 | 


--------------------------------------------------------------------------------
/site/static/images/light.svg:
--------------------------------------------------------------------------------
1 | <svg width="1338" height="195" viewBox="0 0 1338 195" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M25 97.8528L92.8823 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706V29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177" stroke="black" stroke-width="12" stroke-linecap="round"/>
3 | <path d="M76.2653 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52" stroke="black" stroke-width="12" stroke-linecap="round"/>
4 | <path d="M109.853 46.9411L59.6482 97.1457C50.2757 106.518 50.2757 121.714 59.6482 131.087V131.087C69.0208 140.459 84.2168 140.459 93.5894 131.087L143.794 80.8822" stroke="black" stroke-width="12" stroke-linecap="round"/>
5 | <path d="M223.886 63.1818H239.364L260.091 113.773H260.909L281.636 63.1818H297.114V133H284.977V85.0341H284.33L265.034 132.795H255.966L236.67 84.9318H236.023V133H223.886V63.1818ZM333.182 134.023C328.068 134.023 323.636 132.898 319.886 130.648C316.136 128.398 313.227 125.25 311.159 121.205C309.114 117.159 308.091 112.432 308.091 107.023C308.091 101.614 309.114 96.875 311.159 92.8068C313.227 88.7386 316.136 85.5795 319.886 83.3295C323.636 81.0795 328.068 79.9545 333.182 79.9545C338.295 79.9545 342.727 81.0795 346.477 83.3295C350.227 85.5795 353.125 88.7386 355.17 92.8068C357.239 96.875 358.273 101.614 358.273 107.023C358.273 112.432 357.239 117.159 355.17 121.205C353.125 125.25 350.227 128.398 346.477 130.648C342.727 132.898 338.295 134.023 333.182 134.023ZM333.25 124.136C336.023 124.136 338.341 123.375 340.205 121.852C342.068 120.307 343.455 118.239 344.364 115.648C345.295 113.057 345.761 110.17 345.761 106.989C345.761 103.784 345.295 100.886 344.364 98.2955C343.455 95.6818 342.068 93.6023 340.205 92.0568C338.341 90.5114 336.023 89.7386 333.25 89.7386C330.409 89.7386 328.045 90.5114 326.159 92.0568C324.295 93.6023 322.898 95.6818 321.966 98.2955C321.057 100.886 320.602 103.784 320.602 106.989C320.602 110.17 321.057 113.057 321.966 115.648C322.898 118.239 324.295 120.307 326.159 121.852C328.045 123.375 330.409 124.136 333.25 124.136ZM388.179 133.92C384.065 133.92 380.384 132.864 377.134 130.75C373.884 128.636 371.315 125.568 369.429 121.545C367.543 117.523 366.599 112.636 366.599 106.886C366.599 101.068 367.554 96.1591 369.463 92.1591C371.395 88.1364 373.997 85.1023 377.27 83.0568C380.543 80.9886 384.19 79.9545 388.213 79.9545C391.281 79.9545 393.804 80.4773 395.781 81.5227C397.759 82.5455 399.327 83.7841 400.486 85.2386C401.645 86.6705 402.543 88.0227 403.179 89.2955H403.69V63.1818H416.065V133H403.929V124.75H403.179C402.543 126.023 401.622 127.375 400.418 128.807C399.213 130.216 397.622 131.42 395.645 132.42C393.668 133.42 391.179 133.92 388.179 133.92ZM391.622 123.795C394.236 123.795 396.463 123.091 398.304 121.682C400.145 120.25 401.543 118.261 402.497 115.716C403.452 113.17 403.929 110.205 403.929 106.818C403.929 103.432 403.452 100.489 402.497 97.9886C401.565 95.4886 400.179 93.5455 398.338 92.1591C396.52 90.7727 394.281 90.0795 391.622 90.0795C388.872 90.0795 386.577 90.7955 384.736 92.2273C382.895 93.6591 381.509 95.6364 380.577 98.1591C379.645 100.682 379.179 103.568 379.179 106.818C379.179 110.091 379.645 113.011 380.577 115.58C381.531 118.125 382.929 120.136 384.77 121.614C386.634 123.068 388.918 123.795 391.622 123.795ZM452.398 134.023C447.148 134.023 442.614 132.932 438.795 130.75C435 128.545 432.08 125.432 430.034 121.409C427.989 117.364 426.966 112.602 426.966 107.125C426.966 101.739 427.989 97.0114 430.034 92.9432C432.102 88.8523 434.989 85.6705 438.693 83.3977C442.398 81.1023 446.75 79.9545 451.75 79.9545C454.977 79.9545 458.023 80.4773 460.886 81.5227C463.773 82.5455 466.318 84.1364 468.523 86.2955C470.75 88.4545 472.5 91.2045 473.773 94.5455C475.045 97.8636 475.682 101.818 475.682 106.409V110.193H432.761V101.875H463.852C463.83 99.5114 463.318 97.4091 462.318 95.5682C461.318 93.7045 459.92 92.2386 458.125 91.1705C456.352 90.1023 454.284 89.5682 451.92 89.5682C449.398 89.5682 447.182 90.1818 445.273 91.4091C443.364 92.6136 441.875 94.2045 440.807 96.1818C439.761 98.1364 439.227 100.284 439.205 102.625V109.886C439.205 112.932 439.761 115.545 440.875 117.727C441.989 119.886 443.545 121.545 445.545 122.705C447.545 123.841 449.886 124.409 452.568 124.409C454.364 124.409 455.989 124.159 457.443 123.659C458.898 123.136 460.159 122.375 461.227 121.375C462.295 120.375 463.102 119.136 463.648 117.659L475.17 118.955C474.443 122 473.057 124.659 471.011 126.932C468.989 129.182 466.398 130.932 463.239 132.182C460.08 133.409 456.466 134.023 452.398 134.023ZM498.463 63.1818V133H486.122V63.1818H498.463ZM595.273 86.7386H582.523C582.159 84.6477 581.489 82.7955 580.511 81.1818C579.534 79.5455 578.318 78.1591 576.864 77.0227C575.409 75.8864 573.75 75.0341 571.886 74.4659C570.045 73.875 568.057 73.5795 565.92 73.5795C562.125 73.5795 558.761 74.5341 555.83 76.4432C552.898 78.3295 550.602 81.1023 548.943 84.7614C547.284 88.3977 546.455 92.8409 546.455 98.0909C546.455 103.432 547.284 107.932 548.943 111.591C550.625 115.227 552.92 117.977 555.83 119.841C558.761 121.682 562.114 122.602 565.886 122.602C567.977 122.602 569.932 122.33 571.75 121.784C573.591 121.216 575.239 120.386 576.693 119.295C578.17 118.205 579.409 116.864 580.409 115.273C581.432 113.682 582.136 111.864 582.523 109.818L595.273 109.886C594.795 113.205 593.761 116.318 592.17 119.227C590.602 122.136 588.545 124.705 586 126.932C583.455 129.136 580.477 130.864 577.068 132.114C573.659 133.341 569.875 133.955 565.716 133.955C559.58 133.955 554.102 132.534 549.284 129.693C544.466 126.852 540.67 122.75 537.898 117.386C535.125 112.023 533.739 105.591 533.739 98.0909C533.739 90.5682 535.136 84.1364 537.932 78.7955C540.727 73.4318 544.534 69.3295 549.352 66.4886C554.17 63.6477 559.625 62.2273 565.716 62.2273C569.602 62.2273 573.216 62.7727 576.557 63.8636C579.898 64.9545 582.875 66.5568 585.489 68.6705C588.102 70.7614 590.25 73.3295 591.932 76.375C593.636 79.3977 594.75 82.8523 595.273 86.7386ZM629.151 134.023C624.037 134.023 619.605 132.898 615.855 130.648C612.105 128.398 609.196 125.25 607.128 121.205C605.082 117.159 604.06 112.432 604.06 107.023C604.06 101.614 605.082 96.875 607.128 92.8068C609.196 88.7386 612.105 85.5795 615.855 83.3295C619.605 81.0795 624.037 79.9545 629.151 79.9545C634.264 79.9545 638.696 81.0795 642.446 83.3295C646.196 85.5795 649.094 88.7386 651.139 92.8068C653.207 96.875 654.241 101.614 654.241 107.023C654.241 112.432 653.207 117.159 651.139 121.205C649.094 125.25 646.196 128.398 642.446 130.648C638.696 132.898 634.264 134.023 629.151 134.023ZM629.219 124.136C631.991 124.136 634.31 123.375 636.173 121.852C638.037 120.307 639.423 118.239 640.332 115.648C641.264 113.057 641.73 110.17 641.73 106.989C641.73 103.784 641.264 100.886 640.332 98.2955C639.423 95.6818 638.037 93.6023 636.173 92.0568C634.31 90.5114 631.991 89.7386 629.219 89.7386C626.378 89.7386 624.014 90.5114 622.128 92.0568C620.264 93.6023 618.866 95.6818 617.935 98.2955C617.026 100.886 616.571 103.784 616.571 106.989C616.571 110.17 617.026 113.057 617.935 115.648C618.866 118.239 620.264 120.307 622.128 121.852C624.014 123.375 626.378 124.136 629.219 124.136ZM677.057 102.318V133H664.716V80.6364H676.511V89.5341H677.125C678.33 86.6023 680.25 84.2727 682.886 82.5455C685.545 80.8182 688.83 79.9545 692.739 79.9545C696.352 79.9545 699.5 80.7273 702.182 82.2727C704.886 83.8182 706.977 86.0568 708.455 88.9886C709.955 91.9205 710.693 95.4773 710.67 99.6591V133H698.33V101.568C698.33 98.0682 697.42 95.3295 695.602 93.3523C693.807 91.375 691.318 90.3864 688.136 90.3864C685.977 90.3864 684.057 90.8636 682.375 91.8182C680.716 92.75 679.409 94.1023 678.455 95.875C677.523 97.6477 677.057 99.7955 677.057 102.318ZM749.364 80.6364V90.1818H719.261V80.6364H749.364ZM726.693 68.0909H739.034V117.25C739.034 118.909 739.284 120.182 739.784 121.068C740.307 121.932 740.989 122.523 741.83 122.841C742.67 123.159 743.602 123.318 744.625 123.318C745.398 123.318 746.102 123.261 746.739 123.148C747.398 123.034 747.898 122.932 748.239 122.841L750.318 132.489C749.659 132.716 748.716 132.966 747.489 133.239C746.284 133.511 744.807 133.67 743.057 133.716C739.966 133.807 737.182 133.341 734.705 132.318C732.227 131.273 730.261 129.659 728.807 127.477C727.375 125.295 726.67 122.568 726.693 119.295V68.0909ZM782.304 134.023C777.054 134.023 772.52 132.932 768.702 130.75C764.906 128.545 761.986 125.432 759.94 121.409C757.895 117.364 756.872 112.602 756.872 107.125C756.872 101.739 757.895 97.0114 759.94 92.9432C762.009 88.8523 764.895 85.6705 768.599 83.3977C772.304 81.1023 776.656 79.9545 781.656 79.9545C784.884 79.9545 787.929 80.4773 790.793 81.5227C793.679 82.5455 796.224 84.1364 798.429 86.2955C800.656 88.4545 802.406 91.2045 803.679 94.5455C804.952 97.8636 805.588 101.818 805.588 106.409V110.193H762.668V101.875H793.759C793.736 99.5114 793.224 97.4091 792.224 95.5682C791.224 93.7045 789.827 92.2386 788.031 91.1705C786.259 90.1023 784.19 89.5682 781.827 89.5682C779.304 89.5682 777.088 90.1818 775.179 91.4091C773.27 92.6136 771.781 94.2045 770.713 96.1818C769.668 98.1364 769.134 100.284 769.111 102.625V109.886C769.111 112.932 769.668 115.545 770.781 117.727C771.895 119.886 773.452 121.545 775.452 122.705C777.452 123.841 779.793 124.409 782.474 124.409C784.27 124.409 785.895 124.159 787.349 123.659C788.804 123.136 790.065 122.375 791.134 121.375C792.202 120.375 793.009 119.136 793.554 117.659L805.077 118.955C804.349 122 802.963 124.659 800.918 126.932C798.895 129.182 796.304 130.932 793.145 132.182C789.986 133.409 786.372 134.023 782.304 134.023ZM824.994 80.6364L835.562 99.9659L846.301 80.6364H859.358L843.574 106.818L859.631 133H846.642L835.562 114.148L824.585 133H811.494L827.449 106.818L811.903 80.6364H824.994ZM895.051 80.6364V90.1818H864.949V80.6364H895.051ZM872.381 68.0909H884.722V117.25C884.722 118.909 884.972 120.182 885.472 121.068C885.994 121.932 886.676 122.523 887.517 122.841C888.358 123.159 889.29 123.318 890.312 123.318C891.085 123.318 891.79 123.261 892.426 123.148C893.085 123.034 893.585 122.932 893.926 122.841L896.006 132.489C895.347 132.716 894.403 132.966 893.176 133.239C891.972 133.511 890.494 133.67 888.744 133.716C885.653 133.807 882.869 133.341 880.392 132.318C877.915 131.273 875.949 129.659 874.494 127.477C873.063 125.295 872.358 122.568 872.381 119.295V68.0909ZM929.73 133V63.1818H955.912C961.276 63.1818 965.776 64.1818 969.412 66.1818C973.071 68.1818 975.832 70.9318 977.696 74.4318C979.582 77.9091 980.526 81.8636 980.526 86.2955C980.526 90.7727 979.582 94.75 977.696 98.2273C975.81 101.705 973.026 104.443 969.344 106.443C965.662 108.42 961.128 109.409 955.741 109.409H938.389V99.0114H954.037C957.173 99.0114 959.741 98.4659 961.741 97.375C963.741 96.2841 965.219 94.7841 966.173 92.875C967.151 90.9659 967.639 88.7727 967.639 86.2955C967.639 83.8182 967.151 81.6364 966.173 79.75C965.219 77.8636 963.73 76.3977 961.707 75.3523C959.707 74.2841 957.128 73.75 953.969 73.75H942.378V133H929.73ZM990.966 133V80.6364H1002.93V89.3636H1003.48C1004.43 86.3409 1006.07 84.0114 1008.39 82.375C1010.73 80.7159 1013.4 79.8864 1016.4 79.8864C1017.08 79.8864 1017.84 79.9205 1018.68 79.9886C1019.55 80.0341 1020.26 80.1136 1020.83 80.2273V91.5795C1020.31 91.3977 1019.48 91.2386 1018.34 91.1023C1017.23 90.9432 1016.15 90.8636 1015.1 90.8636C1012.85 90.8636 1010.83 91.3523 1009.03 92.3295C1007.26 93.2841 1005.86 94.6136 1004.84 96.3182C1003.82 98.0227 1003.31 99.9886 1003.31 102.216V133H990.966ZM1049.71 134.023C1044.6 134.023 1040.17 132.898 1036.42 130.648C1032.67 128.398 1029.76 125.25 1027.69 121.205C1025.64 117.159 1024.62 112.432 1024.62 107.023C1024.62 101.614 1025.64 96.875 1027.69 92.8068C1029.76 88.7386 1032.67 85.5795 1036.42 83.3295C1040.17 81.0795 1044.6 79.9545 1049.71 79.9545C1054.83 79.9545 1059.26 81.0795 1063.01 83.3295C1066.76 85.5795 1069.66 88.7386 1071.7 92.8068C1073.77 96.875 1074.8 101.614 1074.8 107.023C1074.8 112.432 1073.77 117.159 1071.7 121.205C1069.66 125.25 1066.76 128.398 1063.01 130.648C1059.26 132.898 1054.83 134.023 1049.71 134.023ZM1049.78 124.136C1052.55 124.136 1054.87 123.375 1056.74 121.852C1058.6 120.307 1059.99 118.239 1060.89 115.648C1061.83 113.057 1062.29 110.17 1062.29 106.989C1062.29 103.784 1061.83 100.886 1060.89 98.2955C1059.99 95.6818 1058.6 93.6023 1056.74 92.0568C1054.87 90.5114 1052.55 89.7386 1049.78 89.7386C1046.94 89.7386 1044.58 90.5114 1042.69 92.0568C1040.83 93.6023 1039.43 95.6818 1038.5 98.2955C1037.59 100.886 1037.13 103.784 1037.13 106.989C1037.13 110.17 1037.59 113.057 1038.5 115.648C1039.43 118.239 1040.83 120.307 1042.69 121.852C1044.58 123.375 1046.94 124.136 1049.78 124.136ZM1111.43 80.6364V90.1818H1081.32V80.6364H1111.43ZM1088.76 68.0909H1101.1V117.25C1101.1 118.909 1101.35 120.182 1101.85 121.068C1102.37 121.932 1103.05 122.523 1103.89 122.841C1104.73 123.159 1105.66 123.318 1106.69 123.318C1107.46 123.318 1108.16 123.261 1108.8 123.148C1109.46 123.034 1109.96 122.932 1110.3 122.841L1112.38 132.489C1111.72 132.716 1110.78 132.966 1109.55 133.239C1108.35 133.511 1106.87 133.67 1105.12 133.716C1102.03 133.807 1099.24 133.341 1096.77 132.318C1094.29 131.273 1092.32 129.659 1090.87 127.477C1089.44 125.295 1088.73 122.568 1088.76 119.295V68.0909ZM1144.03 134.023C1138.91 134.023 1134.48 132.898 1130.73 130.648C1126.98 128.398 1124.07 125.25 1122 121.205C1119.96 117.159 1118.93 112.432 1118.93 107.023C1118.93 101.614 1119.96 96.875 1122 92.8068C1124.07 88.7386 1126.98 85.5795 1130.73 83.3295C1134.48 81.0795 1138.91 79.9545 1144.03 79.9545C1149.14 79.9545 1153.57 81.0795 1157.32 83.3295C1161.07 85.5795 1163.97 88.7386 1166.01 92.8068C1168.08 96.875 1169.12 101.614 1169.12 107.023C1169.12 112.432 1168.08 117.159 1166.01 121.205C1163.97 125.25 1161.07 128.398 1157.32 130.648C1153.57 132.898 1149.14 134.023 1144.03 134.023ZM1144.09 124.136C1146.87 124.136 1149.18 123.375 1151.05 121.852C1152.91 120.307 1154.3 118.239 1155.21 115.648C1156.14 113.057 1156.61 110.17 1156.61 106.989C1156.61 103.784 1156.14 100.886 1155.21 98.2955C1154.3 95.6818 1152.91 93.6023 1151.05 92.0568C1149.18 90.5114 1146.87 89.7386 1144.09 89.7386C1141.25 89.7386 1138.89 90.5114 1137 92.0568C1135.14 93.6023 1133.74 95.6818 1132.81 98.2955C1131.9 100.886 1131.45 103.784 1131.45 106.989C1131.45 110.17 1131.9 113.057 1132.81 115.648C1133.74 118.239 1135.14 120.307 1137 121.852C1138.89 123.375 1141.25 124.136 1144.09 124.136ZM1202.43 134.023C1197.2 134.023 1192.72 132.875 1188.97 130.58C1185.24 128.284 1182.36 125.114 1180.34 121.068C1178.34 117 1177.34 112.318 1177.34 107.023C1177.34 101.705 1178.36 97.0114 1180.41 92.9432C1182.45 88.8523 1185.34 85.6705 1189.07 83.3977C1192.82 81.1023 1197.25 79.9545 1202.36 79.9545C1206.61 79.9545 1210.38 80.7386 1213.65 82.3068C1216.94 83.8523 1219.57 86.0455 1221.52 88.8864C1223.48 91.7045 1224.59 95 1224.86 98.7727H1213.07C1212.59 96.25 1211.45 94.1477 1209.66 92.4659C1207.89 90.7614 1205.51 89.9091 1202.53 89.9091C1200.01 89.9091 1197.8 90.5909 1195.89 91.9545C1193.98 93.2955 1192.49 95.2273 1191.42 97.75C1190.38 100.273 1189.85 103.295 1189.85 106.818C1189.85 110.386 1190.38 113.455 1191.42 116.023C1192.47 118.568 1193.93 120.534 1195.82 121.92C1197.73 123.284 1199.97 123.966 1202.53 123.966C1204.35 123.966 1205.98 123.625 1207.41 122.943C1208.86 122.239 1210.08 121.227 1211.06 119.909C1212.03 118.591 1212.7 116.989 1213.07 115.102H1224.86C1224.57 118.807 1223.48 122.091 1221.59 124.955C1219.7 127.795 1217.14 130.023 1213.89 131.636C1210.64 133.227 1206.82 134.023 1202.43 134.023ZM1257.84 134.023C1252.72 134.023 1248.29 132.898 1244.54 130.648C1240.79 128.398 1237.88 125.25 1235.82 121.205C1233.77 117.159 1232.75 112.432 1232.75 107.023C1232.75 101.614 1233.77 96.875 1235.82 92.8068C1237.88 88.7386 1240.79 85.5795 1244.54 83.3295C1248.29 81.0795 1252.72 79.9545 1257.84 79.9545C1262.95 79.9545 1267.38 81.0795 1271.13 83.3295C1274.88 85.5795 1277.78 88.7386 1279.83 92.8068C1281.89 96.875 1282.93 101.614 1282.93 107.023C1282.93 112.432 1281.89 117.159 1279.83 121.205C1277.78 125.25 1274.88 128.398 1271.13 130.648C1267.38 132.898 1262.95 134.023 1257.84 134.023ZM1257.91 124.136C1260.68 124.136 1263 123.375 1264.86 121.852C1266.72 120.307 1268.11 118.239 1269.02 115.648C1269.95 113.057 1270.42 110.17 1270.42 106.989C1270.42 103.784 1269.95 100.886 1269.02 98.2955C1268.11 95.6818 1266.72 93.6023 1264.86 92.0568C1263 90.5114 1260.68 89.7386 1257.91 89.7386C1255.07 89.7386 1252.7 90.5114 1250.82 92.0568C1248.95 93.6023 1247.55 95.6818 1246.62 98.2955C1245.71 100.886 1245.26 103.784 1245.26 106.989C1245.26 110.17 1245.71 113.057 1246.62 115.648C1247.55 118.239 1248.95 120.307 1250.82 121.852C1252.7 123.375 1255.07 124.136 1257.91 124.136ZM1305.74 63.1818V133H1293.4V63.1818H1305.74Z" fill="black"/>
6 | </svg>
7 | 


--------------------------------------------------------------------------------
/site/static/site.webmanifest:
--------------------------------------------------------------------------------
1 | {"name":"","short_name":"","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"theme_color":"#ffffff","background_color":"#ffffff","display":"standalone"}


--------------------------------------------------------------------------------