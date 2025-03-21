├── .github
    ├── DISCUSSION_TEMPLATE
    │   ├── general.yml
    │   ├── ideas.yml
    │   ├── q-a.yml
    │   └── show-and-tell.yml
    ├── ISSUE_TEMPLATE
    │   ├── bug_report.md
    │   └── feature_request.md
    └── pull_request_template.md
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── SECURITY.md
└── profile
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md
    ├── README.md
    └── assets
        └── light.png


/.github/DISCUSSION_TEMPLATE/general.yml:
--------------------------------------------------------------------------------
 1 | body:
 2 |   - type: checkboxes
 3 |     id: checklist
 4 |     attributes:
 5 |       label: Pre-submission Checklist
 6 |       description: Please verify the following before submitting your discussion
 7 |       options:
 8 |         - label: I have verified that this discussion would not be more appropriate as an issue in a specific repository
 9 |           required: true
10 |         - label: I have searched existing discussions to avoid duplicates
11 |           required: true
12 | 
13 |   - type: textarea
14 |     id: topic
15 |     attributes:
16 |       label: Discussion Topic
17 |       description: What would you like to discuss with the MCP community?
18 |       placeholder: |
19 |         Please provide a clear description of what you'd like to discuss.
20 |         Include relevant context and background information.
21 |     validations:
22 |       required: true
23 | 


--------------------------------------------------------------------------------
/.github/DISCUSSION_TEMPLATE/ideas.yml:
--------------------------------------------------------------------------------
 1 | body:
 2 |   - type: checkboxes
 3 |     id: checklist
 4 |     attributes:
 5 |       label: Pre-submission Checklist
 6 |       description: Please verify the following before submitting your idea
 7 |       options:
 8 |         - label: I have verified this would not be more appropriate as a feature request in a specific repository
 9 |           required: true
10 |         - label: I have searched existing discussions to avoid duplicates
11 |           required: true
12 | 
13 |   - type: textarea
14 |     id: idea
15 |     attributes:
16 |       label: Your Idea
17 |       description: Share your idea for improving MCP
18 |       placeholder: |
19 |         Please describe your idea in detail:
20 |         - What problem does it solve?
21 |         - Who would benefit from this?
22 |         - How might it be implemented?
23 |     validations:
24 |       required: true
25 | 
26 |   - type: checkboxes
27 |     id: scope
28 |     attributes:
29 |       label: Scope
30 |       description: What aspect of MCP does this idea relate to? (Select all that apply)
31 |       options:
32 |         - label: Protocol Specification
33 |         - label: SDK Features
34 |         - label: Documentation
35 |         - label: Developer Experience
36 |         - label: Other
37 | 


--------------------------------------------------------------------------------
/.github/DISCUSSION_TEMPLATE/q-a.yml:
--------------------------------------------------------------------------------
 1 | body:
 2 |   - type: checkboxes
 3 |     id: checklist
 4 |     attributes:
 5 |       label: Pre-submission Checklist
 6 |       description: Please verify the following before asking your question
 7 |       options:
 8 |         - label: I have checked that this question would not be more appropriate as an issue in a specific repository
 9 |           required: true
10 |         - label: I have searched existing discussions and documentation for answers
11 |           required: true
12 | 
13 |   - type: checkboxes
14 |     id: category
15 |     attributes:
16 |       label: Question Category
17 |       description: What area is your question about? Select all that apply.
18 |       options:
19 |         - label: Protocol Specification
20 |         - label: SDK Usage
21 |         - label: Server Implementation
22 |         - label: General Implementation
23 |         - label: Documentation
24 |         - label: Other
25 | 
26 |   - type: textarea
27 |     id: question
28 |     attributes:
29 |       label: Your Question
30 |       description: What would you like to know?
31 |       placeholder: Be specific and include any relevant context or code examples
32 |     validations:
33 |       required: true
34 | 


--------------------------------------------------------------------------------
/.github/DISCUSSION_TEMPLATE/show-and-tell.yml:
--------------------------------------------------------------------------------
 1 | body:
 2 |   - type: checkboxes
 3 |     id: checklist
 4 |     attributes:
 5 |       label: Pre-submission Checklist
 6 |       description: Please verify the following before sharing your work
 7 |       options:
 8 |         - label: This post follows the MCP community guidelines
 9 |           required: true
10 | 
11 |   - type: textarea
12 |     id: description
13 |     attributes:
14 |       label: What would you like to share?
15 |       description: Tell us about what you've built or learned with MCP
16 |       placeholder: |
17 |         Share details about:
18 |         - What you built
19 |         - How you built it
20 |         - What challenges you faced
21 |         - What you learned
22 |         - Any tips for others
23 |     validations:
24 |       required: true
25 | 
26 |   - type: textarea
27 |     id: links
28 |     attributes:
29 |       label: Relevant Links
30 |       description: Share any relevant links to your project
31 |       placeholder: |
32 |         - GitHub repository
33 |         - Blog post
34 |         - Demo
35 |         - Documentation
36 | 


--------------------------------------------------------------------------------
/.github/ISSUE_TEMPLATE/bug_report.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | name: Bug report
 3 | about: Create a report to help us improve
 4 | title: ''
 5 | labels: ["bug"]
 6 | assignees: ''
 7 | 
 8 | ---
 9 | 
10 | **Describe the bug**
11 | A clear and concise description of what the bug is.
12 | 
13 | **To Reproduce**
14 | Steps to reproduce the behavior:
15 | 1. 
16 | 
17 | **Expected behavior**
18 | A clear and concise description of what you expected to happen.
19 | 
20 | **Logs**
21 | If applicable, add logs to help explain your problem.
22 | 
23 | **Additional context**
24 | Add any other context about the problem here.
25 | 


--------------------------------------------------------------------------------
/.github/ISSUE_TEMPLATE/feature_request.md:
--------------------------------------------------------------------------------
 1 | ---
 2 | name: Feature request
 3 | about: Suggest an idea for this project
 4 | title: ''
 5 | labels: ["enhancement"]
 6 | assignees: ''
 7 | 
 8 | ---
 9 | 
10 | **Is your feature request related to a problem? Please describe.**
11 | A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]
12 | 
13 | **Describe the solution you'd like**
14 | A clear and concise description of what you want to happen.
15 | 
16 | **Describe alternatives you've considered**
17 | A clear and concise description of any alternative solutions or features you've considered.
18 | 
19 | **Additional context**
20 | Add any other context or screenshots about the feature request here.
21 | 


--------------------------------------------------------------------------------
/.github/pull_request_template.md:
--------------------------------------------------------------------------------
 1 | <!-- Provide a brief summary of your changes -->
 2 | 
 3 | ## Motivation and Context
 4 | <!-- Why is this change needed? What problem does it solve? -->
 5 | 
 6 | ## How Has This Been Tested?
 7 | <!-- Have you tested this in a real application? Which scenarios were tested? -->
 8 | 
 9 | ## Breaking Changes
10 | <!-- Will users need to update their code or configurations? -->
11 | 
12 | ## Types of changes
13 | <!-- What types of changes does your code introduce? Put an `x` in all the boxes that apply: -->
14 | - [ ] Bug fix (non-breaking change which fixes an issue)
15 | - [ ] New feature (non-breaking change which adds functionality)
16 | - [ ] Breaking change (fix or feature that would cause existing functionality to change)
17 | - [ ] Documentation update
18 | 
19 | ## Checklist
20 | <!-- Go over all the following points, and put an `x` in all the boxes that apply. -->
21 | - [ ] I have read the [MCP Documentation](https://modelcontextprotocol.io)
22 | - [ ] My code follows the repository's style guidelines
23 | - [ ] New and existing tests pass locally
24 | - [ ] I have added appropriate error handling
25 | - [ ] I have added or updated documentation as needed
26 | 
27 | ## Additional context
28 | <!-- Add any other context, implementation notes, or design decisions -->
29 | 


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
1 | .DS_Store
2 | 


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
 1 | # Contributing to Model Context Protocol
 2 | 
 3 | Thank you for your interest in contributing to the Model Context Protocol (MCP)! This document provides guidelines for contributing to any repository in the MCP organization.
 4 | 
 5 | ## How to Contribute
 6 | 
 7 | ### Issues and Discussions
 8 | - For bugs and actionable items, please prefer creating an issue in the relevant repository
 9 | - For open-ended or design discussions _specifically related to the specification_, use our [specification discussions](https://github.com/modelcontextprotocol/specification/discussions)
10 | - For other general discussions that are not suitable as issues, use our [organization discussions](https://github.com/orgs/modelcontextprotocol/discussions)
11 | 
12 | In all cases, please check for duplicates before creating new issues or discussions!
13 | 
14 | ### Pull Requests
15 | We welcome PRs across all our repositories! When submitting:
16 | - Fork the repository
17 | - Follow existing code style
18 | - Include tests where applicable
19 | - Update documentation as needed
20 | - Link related issues
21 | 
22 | ## Development Guidelines
23 | 
24 | ### Code Quality
25 | - Follow the repository's established patterns
26 | - Include appropriate documentation
27 | - Add tests for new functionality
28 | - Handle errors appropriately
29 | 
30 | ### Documentation
31 | - Keep READMEs current
32 | - Document configuration options
33 | - Provide clear examples
34 | - Include setup instructions
35 | 
36 | ### Security
37 | - Follow security best practices
38 | - Implement proper input validation
39 | - Document security considerations
40 | 
41 | ## Getting Started
42 | 
43 | 1. Fork the repository
44 | 2. Clone your fork:
45 |     ```bash
46 |     git clone https://github.com/your-username/repository-name.git
47 |     ```
48 | 3. Create a feature branch:
49 |     ```bash
50 |     git checkout -b my-feature
51 |     ```
52 | 4. Make your changes and commit:
53 |     ```bash
54 |     git commit -m "Description of changes"
55 |     ```
56 | 5. Push and create a Pull Request
57 | 
58 | ## Code of Conduct
59 | 
60 | Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
61 | 
62 | ## License
63 | 
64 | By contributing, you agree that your contributions will be licensed under the MIT License.
65 | 
66 | Thank you for contributing to Model Context Protocol!
67 | 


--------------------------------------------------------------------------------
/SECURITY.md:
--------------------------------------------------------------------------------
 1 | # Security Policy
 2 | Thank you for helping us keep Model Context Protocol and any systems it interacts with secure.
 3 | 
 4 | ## Reporting Security Issues
 5 | 
 6 | The Model Context Protocol project is maintained by [Anthropic](https://www.anthropic.com/).
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
/profile/CODE_OF_CONDUCT.md:
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
/profile/CONTRIBUTING.md:
--------------------------------------------------------------------------------
 1 | # Contributing
 2 | 
 3 | Thank you for your interest in contributing to the MCP!
 4 | 
 5 | Please find the contribution guide for the repositories in the project in the respective repository:
 6 | 
 7 | - [Specification Contributions](https://github.com/modelcontextprotocol/specification/blob/main/CONTRIBUTING.md)
 8 | - [TypeScript SDK Contributions](https://github.com/modelcontextprotocol/typescript-sdk/blob/main/CONTRIBUTING.md)
 9 | - [Python SDK Contributions](https://github.com/modelcontextprotocol/python-sdk/blob/main/CONTRIBUTING.md)
10 | - [Documentation Contributions](https://github.com/modelcontextprotocol/docs/blob/main/CONTRIBUTING.md)
11 | - [Create Python Server Contributions](https://github.com/modelcontextprotocol/create-python-server/blob/main/CONTRIBUTING.md)
12 | - [Create TypeScript Server Contributions](https://github.com/modelcontextprotocol/create-typescript-server/blob/main/CONTRIBUTING.md)
13 | - [Servers Contributions](https://github.com/modelcontextprotocol/servers/blob/main/CONTRIBUTING.md)
14 | 
15 | ## Code of Conduct
16 | 
17 | Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
18 | 
19 | ## License
20 | 
21 | By contributing, you agree that your contributions will be licensed under the MIT License.
22 | 


--------------------------------------------------------------------------------
/profile/README.md:
--------------------------------------------------------------------------------
 1 | # Model Context Protocol
 2 | 
 3 | <p align="center">
 4 |   <img src="assets/light.png" alt="MCP Logo" />
 5 | </p>
 6 | 
 7 | <p align="center">
 8 |   <strong>A protocol for seamless integration between LLM applications and external data sources</strong>
 9 | </p>
10 | 
11 | <p align="center">
12 |   <a href="https://modelcontextprotocol.io">Documentation</a> |
13 |   <a href="https://spec.modelcontextprotocol.io">Specification</a> |
14 |   <a href="https://github.com/orgs/modelcontextprotocol/discussions">Discussions</a>
15 | </p>
16 | 
17 | The Model Context Protocol (MCP) is an open protocol that enables seamless integration between LLM applications and external data sources and tools. Whether you're building an AI-powered IDE, enhancing a chat interface, or creating custom AI workflows, MCP provides a standardized way to connect LLMs with the context they need.
18 | 
19 | ## Getting Started
20 | 
21 | - 📚 Read the [Documentation](https://modelcontextprotocol.io) for guides and tutorials
22 | - 🔍 Review the [Specification](https://spec.modelcontextprotocol.io) for protocol details
23 | - 💻 Use our SDKs to start building:
24 |   - [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
25 |   - [Python SDK](https://github.com/modelcontextprotocol/python-sdk)
26 |   - [Java SDK](https://github.com/modelcontextprotocol/java-sdk)
27 |   - [Kotlin SDK](https://github.com/modelcontextprotocol/kotlin-sdk)
28 | 
29 | ## Project Structure
30 | 
31 | - [specification](https://github.com/modelcontextprotocol/specification) - Protocol specification and documentation
32 | - [typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) - TypeScript implementation
33 | - [python-sdk](https://github.com/modelcontextprotocol/python-sdk) - Python implementation
34 | - [java-sdk](https://github.com/modelcontextprotocol/java-sdk) - Java implementation
35 | - [kotlin-sdk](https://github.com/modelcontextprotocol/kotlin-sdk) - Kotlin implementation
36 | - [docs](https://github.com/modelcontextprotocol/docs) - User documentation and guides
37 | - [create-python-server](https://github.com/modelcontextprotocol/create-python-server) - Python server template
38 | - [create-typescript-server](https://github.com/modelcontextprotocol/create-typescript-server) - TypeScript server template
39 | - [create-kotlin-server](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/samples/kotlin-mcp-server) - Kotlin sample server
40 | - [servers](https://github.com/modelcontextprotocol/servers) - List of maintained servers
41 | 
42 | ## Contributing
43 | 
44 | We welcome contributions of all kinds! Whether you want to fix bugs, improve documentation, or propose new features, please see our [contributing guide](CONTRIBUTING.md) to get started.
45 | 
46 | Have questions? Join the discussion in our [community forum](https://github.com/orgs/modelcontextprotocol/discussions).
47 | 
48 | ## About
49 | 
50 | The Model Context Protocol is an open source project run by [Anthropic, PBC.](https://anthropic.com) and open to contributions from the entire community.
51 | 


--------------------------------------------------------------------------------
/profile/assets/light.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/.github/main/profile/assets/light.png


--------------------------------------------------------------------------------