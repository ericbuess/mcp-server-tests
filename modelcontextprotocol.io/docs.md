├── .prettierignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── clients.mdx
├── development
    ├── contributing.mdx
    ├── roadmap.mdx
    └── updates.mdx
├── docs.json
├── docs
    ├── concepts
    │   ├── architecture.mdx
    │   ├── prompts.mdx
    │   ├── resources.mdx
    │   ├── roots.mdx
    │   ├── sampling.mdx
    │   ├── tools.mdx
    │   └── transports.mdx
    └── tools
    │   ├── debugging.mdx
    │   └── inspector.mdx
├── examples.mdx
├── favicon.svg
├── images
    ├── available-mcp-tools.png
    ├── claude-desktop-mcp-hammer-icon.svg
    ├── claude-desktop-mcp-plug-icon.svg
    ├── client-claude-cli-python.png
    ├── current-weather.png
    ├── hero-dark.svg
    ├── hero-light.svg
    ├── java
    │   ├── class-diagrams.puml
    │   ├── java-mcp-client-architecture.jpg
    │   ├── java-mcp-server-architecture.jpg
    │   ├── java-mcp-uml-classdiagram.svg
    │   └── mcp-stack.svg
    ├── mcp-inspector.png
    ├── og-image.png
    ├── quickstart-approve.png
    ├── quickstart-developer.png
    ├── quickstart-filesystem.png
    ├── quickstart-hammer.png
    ├── quickstart-menu.png
    ├── quickstart-screenshot.png
    ├── quickstart-tools.png
    ├── visual-indicator-mcp-tools.png
    └── weather-alerts.png
├── introduction.mdx
├── logo
    ├── dark.png
    ├── dark.svg
    ├── light.png
    └── light.svg
├── quickstart
    ├── client.mdx
    ├── server.mdx
    └── user.mdx
├── sdk
    └── java
    │   ├── mcp-client.mdx
    │   ├── mcp-overview.mdx
    │   └── mcp-server.mdx
├── snippets
    └── snippet-intro.mdx
└── tutorials
    ├── building-a-client-node.mdx
    └── building-mcp-with-llms.mdx


/.prettierignore:
--------------------------------------------------------------------------------
1 | *.mdx


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
 1 | # Contributing to MCP Documentation
 2 | 
 3 | Thank you for your interest in contributing to the Model Context Protocol (MCP) documentation! This guide will help you get started with contributing.
 4 | 
 5 | ## Getting Started
 6 | 
 7 | 1. Install the required tools:
 8 |    - Node.js
 9 |    - Git
10 |    - [Mintlify CLI](https://www.npmjs.com/package/mintlify): `npm i -g mintlify`
11 | 2. Fork and clone the repository
12 | 3. Create a new branch for your changes
13 | 4. Run `mintlify dev` to preview changes locally
14 | 
15 | ## Documentation Guidelines
16 | 
17 | - Keep content clear, concise, and technically accurate
18 | - Follow the existing file structure and naming conventions
19 | - Include code examples where appropriate
20 | - Use proper MDX formatting and components
21 | - Test all links and code samples
22 | 
23 | ## Content Types
24 | 
25 | You can contribute to:
26 | 
27 | - Conceptual guides
28 | - API reference documentation
29 | - Tutorials and quickstarts
30 | - Best practices and examples
31 | - Troubleshooting guides
32 | 
33 | ## Pull Request Process
34 | 
35 | 1. Ensure your changes follow our documentation guidelines
36 | 2. Update the relevant table of contents if needed
37 | 3. Test your changes locally using `mintlify dev`
38 | 4. Submit a pull request with a clear description of your changes
39 | 5. Wait for review and address any feedback
40 | 
41 | ## Need Help?
42 | 
43 | - Check existing documentation at [modelcontextprotocol.io](https://modelcontextprotocol.io)
44 | - [Open an issue](https://github.com/modelcontextprotocol/docs/issues) for bugs or concerns
45 | - Join our [community discussions](https://github.com/modelcontextprotocol/docs/discussions)
46 | 
47 | ## Code of Conduct
48 | 
49 | Please note that this project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold these guidelines.
50 | 


--------------------------------------------------------------------------------
/LICENSE.md:
--------------------------------------------------------------------------------
  1 | Attribution 4.0 International
  2 | 
  3 | =======================================================================
  4 | 
  5 | Creative Commons Corporation ("Creative Commons") is not a law firm and
  6 | does not provide legal services or legal advice. Distribution of
  7 | Creative Commons public licenses does not create a lawyer-client or
  8 | other relationship. Creative Commons makes its licenses and related
  9 | information available on an "as-is" basis. Creative Commons gives no
 10 | warranties regarding its licenses, any material licensed under their
 11 | terms and conditions, or any related information. Creative Commons
 12 | disclaims all liability for damages resulting from their use to the
 13 | fullest extent possible.
 14 | 
 15 | Using Creative Commons Public Licenses
 16 | 
 17 | Creative Commons public licenses provide a standard set of terms and
 18 | conditions that creators and other rights holders may use to share
 19 | original works of authorship and other material subject to copyright
 20 | and certain other rights specified in the public license below. The
 21 | following considerations are for informational purposes only, are not
 22 | exhaustive, and do not form part of our licenses.
 23 | 
 24 |      Considerations for licensors: Our public licenses are
 25 |      intended for use by those authorized to give the public
 26 |      permission to use material in ways otherwise restricted by
 27 |      copyright and certain other rights. Our licenses are
 28 |      irrevocable. Licensors should read and understand the terms
 29 |      and conditions of the license they choose before applying it.
 30 |      Licensors should also secure all rights necessary before
 31 |      applying our licenses so that the public can reuse the
 32 |      material as expected. Licensors should clearly mark any
 33 |      material not subject to the license. This includes other CC-
 34 |      licensed material, or material used under an exception or
 35 |      limitation to copyright. More considerations for licensors:
 36 |     wiki.creativecommons.org/Considerations_for_licensors
 37 | 
 38 |      Considerations for the public: By using one of our public
 39 |      licenses, a licensor grants the public permission to use the
 40 |      licensed material under specified terms and conditions. If
 41 |      the licensor's permission is not necessary for any reason--for
 42 |      example, because of any applicable exception or limitation to
 43 |      copyright--then that use is not regulated by the license. Our
 44 |      licenses grant only permissions under copyright and certain
 45 |      other rights that a licensor has authority to grant. Use of
 46 |      the licensed material may still be restricted for other
 47 |      reasons, including because others have copyright or other
 48 |      rights in the material. A licensor may make special requests,
 49 |      such as asking that all changes be marked or described.
 50 |      Although not required by our licenses, you are encouraged to
 51 |      respect those requests where reasonable. More considerations
 52 |      for the public:
 53 |     wiki.creativecommons.org/Considerations_for_licensees
 54 | 
 55 | =======================================================================
 56 | 
 57 | Creative Commons Attribution 4.0 International Public License
 58 | 
 59 | By exercising the Licensed Rights (defined below), You accept and agree
 60 | to be bound by the terms and conditions of this Creative Commons
 61 | Attribution 4.0 International Public License ("Public License"). To the
 62 | extent this Public License may be interpreted as a contract, You are
 63 | granted the Licensed Rights in consideration of Your acceptance of
 64 | these terms and conditions, and the Licensor grants You such rights in
 65 | consideration of benefits the Licensor receives from making the
 66 | Licensed Material available under these terms and conditions.
 67 | 
 68 | Section 1 -- Definitions.
 69 | 
 70 | a. Adapted Material means material subject to Copyright and Similar
 71 | Rights that is derived from or based upon the Licensed Material
 72 | and in which the Licensed Material is translated, altered,
 73 | arranged, transformed, or otherwise modified in a manner requiring
 74 | permission under the Copyright and Similar Rights held by the
 75 | Licensor. For purposes of this Public License, where the Licensed
 76 | Material is a musical work, performance, or sound recording,
 77 | Adapted Material is always produced where the Licensed Material is
 78 | synched in timed relation with a moving image.
 79 | 
 80 | b. Adapter's License means the license You apply to Your Copyright
 81 | and Similar Rights in Your contributions to Adapted Material in
 82 | accordance with the terms and conditions of this Public License.
 83 | 
 84 | c. Copyright and Similar Rights means copyright and/or similar rights
 85 | closely related to copyright including, without limitation,
 86 | performance, broadcast, sound recording, and Sui Generis Database
 87 | Rights, without regard to how the rights are labeled or
 88 | categorized. For purposes of this Public License, the rights
 89 | specified in Section 2(b)(1)-(2) are not Copyright and Similar
 90 | Rights.
 91 | 
 92 | d. Effective Technological Measures means those measures that, in the
 93 | absence of proper authority, may not be circumvented under laws
 94 | fulfilling obligations under Article 11 of the WIPO Copyright
 95 | Treaty adopted on December 20, 1996, and/or similar international
 96 | agreements.
 97 | 
 98 | e. Exceptions and Limitations means fair use, fair dealing, and/or
 99 | any other exception or limitation to Copyright and Similar Rights
100 | that applies to Your use of the Licensed Material.
101 | 
102 | f. Licensed Material means the artistic or literary work, database,
103 | or other material to which the Licensor applied this Public
104 | License.
105 | 
106 | g. Licensed Rights means the rights granted to You subject to the
107 | terms and conditions of this Public License, which are limited to
108 | all Copyright and Similar Rights that apply to Your use of the
109 | Licensed Material and that the Licensor has authority to license.
110 | 
111 | h. Licensor means the individual(s) or entity(ies) granting rights
112 | under this Public License.
113 | 
114 | i. Share means to provide material to the public by any means or
115 | process that requires permission under the Licensed Rights, such
116 | as reproduction, public display, public performance, distribution,
117 | dissemination, communication, or importation, and to make material
118 | available to the public including in ways that members of the
119 | public may access the material from a place and at a time
120 | individually chosen by them.
121 | 
122 | j. Sui Generis Database Rights means rights other than copyright
123 | resulting from Directive 96/9/EC of the European Parliament and of
124 | the Council of 11 March 1996 on the legal protection of databases,
125 | as amended and/or succeeded, as well as other essentially
126 | equivalent rights anywhere in the world.
127 | 
128 | k. You means the individual or entity exercising the Licensed Rights
129 | under this Public License. Your has a corresponding meaning.
130 | 
131 | Section 2 -- Scope.
132 | 
133 | a. License grant.
134 | 
135 |        1. Subject to the terms and conditions of this Public License,
136 |           the Licensor hereby grants You a worldwide, royalty-free,
137 |           non-sublicensable, non-exclusive, irrevocable license to
138 |           exercise the Licensed Rights in the Licensed Material to:
139 | 
140 |             a. reproduce and Share the Licensed Material, in whole or
141 |                in part; and
142 | 
143 |             b. produce, reproduce, and Share Adapted Material.
144 | 
145 |        2. Exceptions and Limitations. For the avoidance of doubt, where
146 |           Exceptions and Limitations apply to Your use, this Public
147 |           License does not apply, and You do not need to comply with
148 |           its terms and conditions.
149 | 
150 |        3. Term. The term of this Public License is specified in Section
151 |           6(a).
152 | 
153 |        4. Media and formats; technical modifications allowed. The
154 |           Licensor authorizes You to exercise the Licensed Rights in
155 |           all media and formats whether now known or hereafter created,
156 |           and to make technical modifications necessary to do so. The
157 |           Licensor waives and/or agrees not to assert any right or
158 |           authority to forbid You from making technical modifications
159 |           necessary to exercise the Licensed Rights, including
160 |           technical modifications necessary to circumvent Effective
161 |           Technological Measures. For purposes of this Public License,
162 |           simply making modifications authorized by this Section 2(a)
163 |           (4) never produces Adapted Material.
164 | 
165 |        5. Downstream recipients.
166 | 
167 |             a. Offer from the Licensor -- Licensed Material. Every
168 |                recipient of the Licensed Material automatically
169 |                receives an offer from the Licensor to exercise the
170 |                Licensed Rights under the terms and conditions of this
171 |                Public License.
172 | 
173 |             b. No downstream restrictions. You may not offer or impose
174 |                any additional or different terms or conditions on, or
175 |                apply any Effective Technological Measures to, the
176 |                Licensed Material if doing so restricts exercise of the
177 |                Licensed Rights by any recipient of the Licensed
178 |                Material.
179 | 
180 |        6. No endorsement. Nothing in this Public License constitutes or
181 |           may be construed as permission to assert or imply that You
182 |           are, or that Your use of the Licensed Material is, connected
183 |           with, or sponsored, endorsed, or granted official status by,
184 |           the Licensor or others designated to receive attribution as
185 |           provided in Section 3(a)(1)(A)(i).
186 | 
187 | b. Other rights.
188 | 
189 |        1. Moral rights, such as the right of integrity, are not
190 |           licensed under this Public License, nor are publicity,
191 |           privacy, and/or other similar personality rights; however, to
192 |           the extent possible, the Licensor waives and/or agrees not to
193 |           assert any such rights held by the Licensor to the limited
194 |           extent necessary to allow You to exercise the Licensed
195 |           Rights, but not otherwise.
196 | 
197 |        2. Patent and trademark rights are not licensed under this
198 |           Public License.
199 | 
200 |        3. To the extent possible, the Licensor waives any right to
201 |           collect royalties from You for the exercise of the Licensed
202 |           Rights, whether directly or through a collecting society
203 |           under any voluntary or waivable statutory or compulsory
204 |           licensing scheme. In all other cases the Licensor expressly
205 |           reserves any right to collect such royalties.
206 | 
207 | Section 3 -- License Conditions.
208 | 
209 | Your exercise of the Licensed Rights is expressly made subject to the
210 | following conditions.
211 | 
212 | a. Attribution.
213 | 
214 |        1. If You Share the Licensed Material (including in modified
215 |           form), You must:
216 | 
217 |             a. retain the following if it is supplied by the Licensor
218 |                with the Licensed Material:
219 | 
220 |                  i. identification of the creator(s) of the Licensed
221 |                     Material and any others designated to receive
222 |                     attribution, in any reasonable manner requested by
223 |                     the Licensor (including by pseudonym if
224 |                     designated);
225 | 
226 |                 ii. a copyright notice;
227 | 
228 |                iii. a notice that refers to this Public License;
229 | 
230 |                 iv. a notice that refers to the disclaimer of
231 |                     warranties;
232 | 
233 |                  v. a URI or hyperlink to the Licensed Material to the
234 |                     extent reasonably practicable;
235 | 
236 |             b. indicate if You modified the Licensed Material and
237 |                retain an indication of any previous modifications; and
238 | 
239 |             c. indicate the Licensed Material is licensed under this
240 |                Public License, and include the text of, or the URI or
241 |                hyperlink to, this Public License.
242 | 
243 |        2. You may satisfy the conditions in Section 3(a)(1) in any
244 |           reasonable manner based on the medium, means, and context in
245 |           which You Share the Licensed Material. For example, it may be
246 |           reasonable to satisfy the conditions by providing a URI or
247 |           hyperlink to a resource that includes the required
248 |           information.
249 | 
250 |        3. If requested by the Licensor, You must remove any of the
251 |           information required by Section 3(a)(1)(A) to the extent
252 |           reasonably practicable.
253 | 
254 |        4. If You Share Adapted Material You produce, the Adapter's
255 |           License You apply must not prevent recipients of the Adapted
256 |           Material from complying with this Public License.
257 | 
258 | Section 4 -- Sui Generis Database Rights.
259 | 
260 | Where the Licensed Rights include Sui Generis Database Rights that
261 | apply to Your use of the Licensed Material:
262 | 
263 | a. for the avoidance of doubt, Section 2(a)(1) grants You the right
264 | to extract, reuse, reproduce, and Share all or a substantial
265 | portion of the contents of the database;
266 | 
267 | b. if You include all or a substantial portion of the database
268 | contents in a database in which You have Sui Generis Database
269 | Rights, then the database in which You have Sui Generis Database
270 | Rights (but not its individual contents) is Adapted Material; and
271 | 
272 | c. You must comply with the conditions in Section 3(a) if You Share
273 | all or a substantial portion of the contents of the database.
274 | 
275 | For the avoidance of doubt, this Section 4 supplements and does not
276 | replace Your obligations under this Public License where the Licensed
277 | Rights include other Copyright and Similar Rights.
278 | 
279 | Section 5 -- Disclaimer of Warranties and Limitation of Liability.
280 | 
281 | a. UNLESS OTHERWISE SEPARATELY UNDERTAKEN BY THE LICENSOR, TO THE
282 | EXTENT POSSIBLE, THE LICENSOR OFFERS THE LICENSED MATERIAL AS-IS
283 | AND AS-AVAILABLE, AND MAKES NO REPRESENTATIONS OR WARRANTIES OF
284 | ANY KIND CONCERNING THE LICENSED MATERIAL, WHETHER EXPRESS,
285 | IMPLIED, STATUTORY, OR OTHER. THIS INCLUDES, WITHOUT LIMITATION,
286 | WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
287 | PURPOSE, NON-INFRINGEMENT, ABSENCE OF LATENT OR OTHER DEFECTS,
288 | ACCURACY, OR THE PRESENCE OR ABSENCE OF ERRORS, WHETHER OR NOT
289 | KNOWN OR DISCOVERABLE. WHERE DISCLAIMERS OF WARRANTIES ARE NOT
290 | ALLOWED IN FULL OR IN PART, THIS DISCLAIMER MAY NOT APPLY TO YOU.
291 | 
292 | b. TO THE EXTENT POSSIBLE, IN NO EVENT WILL THE LICENSOR BE LIABLE
293 | TO YOU ON ANY LEGAL THEORY (INCLUDING, WITHOUT LIMITATION,
294 | NEGLIGENCE) OR OTHERWISE FOR ANY DIRECT, SPECIAL, INDIRECT,
295 | INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR OTHER LOSSES,
296 | COSTS, EXPENSES, OR DAMAGES ARISING OUT OF THIS PUBLIC LICENSE OR
297 | USE OF THE LICENSED MATERIAL, EVEN IF THE LICENSOR HAS BEEN
298 | ADVISED OF THE POSSIBILITY OF SUCH LOSSES, COSTS, EXPENSES, OR
299 | DAMAGES. WHERE A LIMITATION OF LIABILITY IS NOT ALLOWED IN FULL OR
300 | IN PART, THIS LIMITATION MAY NOT APPLY TO YOU.
301 | 
302 | c. The disclaimer of warranties and limitation of liability provided
303 | above shall be interpreted in a manner that, to the extent
304 | possible, most closely approximates an absolute disclaimer and
305 | waiver of all liability.
306 | 
307 | Section 6 -- Term and Termination.
308 | 
309 | a. This Public License applies for the term of the Copyright and
310 | Similar Rights licensed here. However, if You fail to comply with
311 | this Public License, then Your rights under this Public License
312 | terminate automatically.
313 | 
314 | b. Where Your right to use the Licensed Material has terminated under
315 | Section 6(a), it reinstates:
316 | 
317 |        1. automatically as of the date the violation is cured, provided
318 |           it is cured within 30 days of Your discovery of the
319 |           violation; or
320 | 
321 |        2. upon express reinstatement by the Licensor.
322 | 
323 |      For the avoidance of doubt, this Section 6(b) does not affect any
324 |      right the Licensor may have to seek remedies for Your violations
325 |      of this Public License.
326 | 
327 | c. For the avoidance of doubt, the Licensor may also offer the
328 | Licensed Material under separate terms or conditions or stop
329 | distributing the Licensed Material at any time; however, doing so
330 | will not terminate this Public License.
331 | 
332 | d. Sections 1, 5, 6, 7, and 8 survive termination of this Public
333 | License.
334 | 
335 | Section 7 -- Other Terms and Conditions.
336 | 
337 | a. The Licensor shall not be bound by any additional or different
338 | terms or conditions communicated by You unless expressly agreed.
339 | 
340 | b. Any arrangements, understandings, or agreements regarding the
341 | Licensed Material not stated herein are separate from and
342 | independent of the terms and conditions of this Public License.
343 | 
344 | Section 8 -- Interpretation.
345 | 
346 | a. For the avoidance of doubt, this Public License does not, and
347 | shall not be interpreted to, reduce, limit, restrict, or impose
348 | conditions on any use of the Licensed Material that could lawfully
349 | be made without permission under this Public License.
350 | 
351 | b. To the extent possible, if any provision of this Public License is
352 | deemed unenforceable, it shall be automatically reformed to the
353 | minimum extent necessary to make it enforceable. If the provision
354 | cannot be reformed, it shall be severed from this Public License
355 | without affecting the enforceability of the remaining terms and
356 | conditions.
357 | 
358 | c. No term or condition of this Public License will be waived and no
359 | failure to comply consented to unless expressly agreed to by the
360 | Licensor.
361 | 
362 | d. Nothing in this Public License constitutes or may be interpreted
363 | as a limitation upon, or waiver of, any privileges and immunities
364 | that apply to the Licensor or You, including from the legal
365 | processes of any jurisdiction or authority.
366 | 
367 | =======================================================================
368 | 
369 | Creative Commons is not a party to its public
370 | licenses. Notwithstanding, Creative Commons may elect to apply one of
371 | its public licenses to material it publishes and in those instances
372 | will be considered the “Licensor.” The text of the Creative Commons
373 | public licenses is dedicated to the public domain under the CC0 Public
374 | Domain Dedication. Except for the limited purpose of indicating that
375 | material is shared under a Creative Commons public license or as
376 | otherwise permitted by the Creative Commons policies published at
377 | creativecommons.org/policies, Creative Commons does not authorize the
378 | use of the trademark "Creative Commons" or any other trademark or logo
379 | of Creative Commons without its prior written consent including,
380 | without limitation, in connection with any unauthorized modifications
381 | to any of its public licenses or any other arrangements,
382 | understandings, or agreements concerning use of licensed material. For
383 | the avoidance of doubt, this paragraph does not form part of the
384 | public licenses.
385 | 
386 | Creative Commons may be contacted at creativecommons.org.
387 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
 1 | # Model Context Protocol Documentation
 2 | 
 3 | The official documentation for the [Model Context Protocol](https://modelcontextprotocol.io).
 4 | 
 5 | For detailed contribution guidelines, development setup, and troubleshooting, please see our [Contributing Guide](CONTRIBUTING.md).
 6 | 
 7 | ### Publishing Changes
 8 | 
 9 | Changes will be deployed to production automatically after pushing to the default branch.
10 | 


--------------------------------------------------------------------------------
/clients.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: "Example Clients"
  3 | description: "A list of applications that support MCP integrations"
  4 | ---
  5 | 
  6 | This page provides an overview of applications that support the Model Context Protocol (MCP). Each client may support different MCP features, allowing for varying levels of integration with MCP servers.
  7 | 
  8 | ## Feature support matrix
  9 | 
 10 | | Client                                      | [Resources] | [Prompts] | [Tools] | [Sampling] | Roots | Notes                                                                        |
 11 | |---------------------------------------------|-------------|-----------|---------|------------|--------|-----------------------------------------------------------------------------|
 12 | | [Claude Desktop App][Claude]                | ✅          | ✅        | ✅      | ❌         | ❌    | Full support for all MCP features                                           |
 13 | | [5ire][5ire]                                | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools.                                                             |
 14 | | [BeeAI Framework][BeeAI Framework]          | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools in agentic workflows.                                        |
 15 | | [Cline][Cline]                              | ✅          | ❌        | ✅      | ❌         | ❌    | Supports tools and resources.                                               |
 16 | | [Continue][Continue]                        | ✅          | ✅        | ✅      | ❌         | ❌    | Full support for all MCP features                                           |
 17 | | [Cursor][Cursor]                            | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools.                                                             |
 18 | | [Emacs Mcp][Mcp.el]                         | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools in Emacs.                                                    |
 19 | | [Firebase Genkit][Genkit]                   | ⚠️          | ✅        | ✅      | ❌         | ❌    | Supports resource list and lookup through tools.                            |
 20 | | [GenAIScript][GenAIScript]                  | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools.                                                             |
 21 | | [Goose][Goose]                              | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools.                                                             |
 22 | | [LibreChat][LibreChat]                      | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools for Agents                                                   |
 23 | | [mcp-agent][mcp-agent]                      | ❌          | ❌        | ✅      | ⚠️         | ❌    | Supports tools, server connection management, and agent workflows.          |
 24 | | [oterm][oterm]                              | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools.                                                             |
 25 | | [Roo Code][Roo Code]                        | ✅          | ❌        | ✅      | ❌         | ❌    | Supports tools and resources.                                               |
 26 | | [Sourcegraph Cody][Cody]                    | ✅          | ❌        | ❌      | ❌         | ❌    | Supports resources through OpenCTX                                          |
 27 | | [Superinterface][Superinterface]            | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools                                                              |
 28 | | [TheiaAI/TheiaIDE][TheiaAI/TheiaIDE]        | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools for Agents in Theia AI and the AI-powered Theia IDE          |
 29 | | [Windsurf Editor][Windsurf]                 | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools with AI Flow for collaborative development.                  |
 30 | | [Zed][Zed]                                  | ❌          | ✅        | ❌      | ❌         | ❌    | Prompts appear as slash commands                                            |
 31 | | [SpinAI][SpinAI]                            | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools for Typescript AI Agents                                     |
 32 | | [OpenSumi][OpenSumi]                        | ❌          | ❌        | ✅      | ❌         | ❌    | Supports tools in OpenSumi                                                  |
 33 | | [Daydreams Agents][Daydreams]              | ✅          | ✅        | ✅      | ❌         | ❌    | Support for drop in Servers to Daydreams agents                             |
 34 | 
 35 | [Claude]: https://claude.ai/download
 36 | [Cursor]: https://cursor.com
 37 | [Zed]: https://zed.dev
 38 | [Cody]: https://sourcegraph.com/cody
 39 | [Genkit]: https://github.com/firebase/genkit
 40 | [Continue]: https://github.com/continuedev/continue
 41 | [GenAIScript]: https://microsoft.github.io/genaiscript/reference/scripts/mcp-tools/
 42 | [Cline]: https://github.com/cline/cline
 43 | [LibreChat]: https://github.com/danny-avila/LibreChat
 44 | [TheiaAI/TheiaIDE]: https://eclipsesource.com/blogs/2024/12/19/theia-ide-and-theia-ai-support-mcp/
 45 | [Superinterface]: https://superinterface.ai
 46 | [5ire]: https://github.com/nanbingxyz/5ire
 47 | [BeeAI Framework]: https://i-am-bee.github.io/beeai-framework
 48 | [mcp-agent]: https://github.com/lastmile-ai/mcp-agent
 49 | [Mcp.el]: https://github.com/lizqwerscott/mcp.el
 50 | [Roo Code]: https://roocode.com
 51 | [Goose]: https://block.github.io/goose/docs/goose-architecture/#interoperability-with-extensions
 52 | [Windsurf]: https://codeium.com/windsurf
 53 | [Daydreams]: https://github.com/daydreamsai/daydreams
 54 | [SpinAI]: https://spinai.dev
 55 | [OpenSumi]: https://github.com/opensumi/core
 56 | [oterm]: https://github.com/ggozad/oterm
 57 | [Resources]: https://modelcontextprotocol.io/docs/concepts/resources
 58 | [Prompts]: https://modelcontextprotocol.io/docs/concepts/prompts
 59 | [Tools]: https://modelcontextprotocol.io/docs/concepts/tools
 60 | [Sampling]: https://modelcontextprotocol.io/docs/concepts/sampling
 61 | 
 62 | ## Client details
 63 | 
 64 | ### Claude Desktop App
 65 | The Claude desktop application provides comprehensive support for MCP, enabling deep integration with local tools and data sources.
 66 | 
 67 | **Key features:**
 68 | - Full support for resources, allowing attachment of local files and data
 69 | - Support for prompt templates
 70 | - Tool integration for executing commands and scripts
 71 | - Local server connections for enhanced privacy and security
 72 | 
 73 | > ⓘ Note: The Claude.ai web application does not currently support MCP. MCP features are only available in the desktop application.
 74 | 
 75 | ### 5ire
 76 | [5ire](https://github.com/nanbingxyz/5ire) is an open source cross-platform desktop AI assistant that supports tools through MCP servers.
 77 | 
 78 | **Key features:**
 79 | - Built-in MCP servers can be quickly enabled and disabled.
 80 | - Users can add more servers by modifying the configuration file.
 81 | - It is open-source and user-friendly, suitable for beginners.
 82 | - Future support for MCP will be continuously improved.
 83 | 
 84 | ### BeeAI Framework
 85 | [BeeAI Framework](https://i-am-bee.github.io/beeai-framework) is an open-source framework for building, deploying, and serving powerful agentic workflows at scale. The framework includes the **MCP Tool**, a native feature that simplifies the integration of MCP servers into agentic workflows.
 86 | 
 87 | **Key features:**
 88 | - Seamlessly incorporate MCP tools into agentic workflows.
 89 | - Quickly instantiate framework-native tools from connected MCP client(s).
 90 | - Planned future support for agentic MCP capabilities.
 91 | 
 92 | **Learn more:**
 93 | - [Example of using MCP tools in agentic workflow](https://i-am-bee.github.io/beeai-framework/#/typescript/tools?id=using-the-mcptool-class)
 94 | 
 95 | ### Cline
 96 | [Cline](https://github.com/cline/cline) is an autonomous coding agent in VS Code that edits files, runs commands, uses a browser, and more–with your permission at each step.
 97 | 
 98 | **Key features:**
 99 | - Create and add tools through natural language (e.g. "add a tool that searches the web")
100 | - Share custom MCP servers Cline creates with others via the `~/Documents/Cline/MCP` directory
101 | - Displays configured MCP servers along with their tools, resources, and any error logs
102 | 
103 | ### Continue
104 | [Continue](https://github.com/continuedev/continue) is an open-source AI code assistant, with built-in support for all MCP features.
105 | 
106 | **Key features**
107 | - Type "@" to mention MCP resources
108 | - Prompt templates surface as slash commands
109 | - Use both built-in and MCP tools directly in chat
110 | - Supports VS Code and JetBrains IDEs, with any LLM
111 | 
112 | ### Cursor
113 | [Cursor](https://docs.cursor.com/advanced/model-context-protocol) is an AI code editor.
114 | 
115 | **Key Features**:
116 | - Support for MCP tools in Cursor Composer
117 | - Support for both STDIO and SSE
118 | 
119 | ### Emacs Mcp
120 | [Emacs Mcp](https://github.com/lizqwerscott/mcp.el) is an Emacs client designed to interface with MCP servers, enabling seamless connections and interactions. It provides MCP tool invocation support for AI plugins like [gptel](https://github.com/karthink/gptel) and [llm](https://github.com/ahyatt/llm), adhering to Emacs' standard tool invocation format. This integration enhances the functionality of AI tools within the Emacs ecosystem.
121 | 
122 | **Key features:**
123 | - Provides MCP tool support for Emacs.
124 | 
125 | ### Firebase Genkit
126 | [Genkit](https://github.com/firebase/genkit) is Firebase's SDK for building and integrating GenAI features into applications. The [genkitx-mcp](https://github.com/firebase/genkit/tree/main/js/plugins/mcp) plugin enables consuming MCP servers as a client or creating MCP servers from Genkit tools and prompts.
127 | 
128 | **Key features:**
129 | - Client support for tools and prompts (resources partially supported)
130 | - Rich discovery with support in Genkit's Dev UI playground
131 | - Seamless interoperability with Genkit's existing tools and prompts
132 | - Works across a wide variety of GenAI models from top providers
133 | 
134 | ### GenAIScript
135 | Programmatically assemble prompts for LLMs using [GenAIScript](https://microsoft.github.io/genaiscript/) (in JavaScript). Orchestrate LLMs, tools, and data in JavaScript.
136 | 
137 | **Key features:**
138 | - JavaScript toolbox to work with prompts
139 | - Abstraction to make it easy and productive
140 | - Seamless Visual Studio Code integration
141 | 
142 | ### Goose
143 | [Goose](https://github.com/block/goose) is an open source AI agent that supercharges your software development by automating coding tasks.
144 | 
145 | **Key features:**
146 | - Expose MCP functionality to Goose through tools.
147 | - MCPs can be installed directly via the [extensions directory](https://block.github.io/goose/v1/extensions/), CLI, or UI.
148 | - Goose allows you to extend its functionality by [building your own MCP servers](https://block.github.io/goose/docs/tutorials/custom-extensions).
149 | - Includes built-in tools for development, web scraping, automation, memory, and integrations with JetBrains and Google Drive.
150 | 
151 | ### LibreChat
152 | [LibreChat](https://github.com/danny-avila/LibreChat) is an open-source, customizable AI chat UI that supports multiple AI providers, now including MCP integration.
153 | 
154 | **Key features:**
155 | - Extend current tool ecosystem, including [Code Interpreter](https://www.librechat.ai/docs/features/code_interpreter) and Image generation tools, through MCP servers
156 | - Add tools to customizable [Agents](https://www.librechat.ai/docs/features/agents), using a variety of LLMs from top providers
157 | - Open-source and self-hostable, with secure multi-user support
158 | - Future roadmap includes expanded MCP feature support
159 | 
160 | ### mcp-agent
161 | [mcp-agent] is a simple, composable framework to build agents using Model Context Protocol.
162 | 
163 | **Key features:**
164 | - Automatic connection management of MCP servers.
165 | - Expose tools from multiple servers to an LLM.
166 | - Implements every pattern defined in [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents).
167 | - Supports workflow pause/resume signals, such as waiting for human feedback.
168 | 
169 | ### oterm
170 | [oterm] is a terminal client for Ollama allowing users to create chats/agents.
171 | 
172 | **Key features:**
173 | 
174 |  - Support for multiple fully customizable chat sessions with Ollama connected with tools.
175 |  - Support for MCP tools.
176 | 
177 | ### Roo Code
178 | [Roo Code](https://roocode.com) enables AI coding assistance via MCP.
179 | 
180 | **Key features:**
181 | - Support for MCP tools and resources
182 | - Integration with development workflows
183 | - Extensible AI capabilities
184 | 
185 | ### Sourcegraph Cody
186 | [Cody](https://openctx.org/docs/providers/modelcontextprotocol) is Sourcegraph's AI coding assistant, which implements MCP through OpenCTX.
187 | 
188 | **Key features:**
189 | - Support for MCP resources
190 | - Integration with Sourcegraph's code intelligence
191 | - Uses OpenCTX as an abstraction layer
192 | - Future support planned for additional MCP features
193 | 
194 | ### SpinAI
195 | [SpinAI](https://spinai.dev) is an open-source TypeScript framework for building observable AI agents. The framework provides native MCP compatibility, allowing agents to seamlessly integrate with MCP servers and tools.
196 | 
197 | **Key features:**
198 | - Built-in MCP compatibility for AI agents
199 | - Open-source TypeScript framework
200 | - Observable agent architecture
201 | - Native support for MCP tools integration
202 | 
203 | ### Superinterface
204 | [Superinterface](https://superinterface.ai) is AI infrastructure and a developer platform to build in-app AI assistants with support for MCP, interactive components, client-side function calling and more.
205 | 
206 | **Key features:**
207 | - Use tools from MCP servers in assistants embedded via React components or script tags
208 | - SSE transport support
209 | - Use any AI model from any AI provider (OpenAI, Anthropic, Ollama, others)
210 | 
211 | ### TheiaAI/TheiaIDE
212 | [Theia AI](https://eclipsesource.com/blogs/2024/10/07/introducing-theia-ai/) is a framework for building AI-enhanced tools and IDEs. The [AI-powered Theia IDE](https://eclipsesource.com/blogs/2024/10/08/introducting-ai-theia-ide/) is an open and flexible development environment built on Theia AI.
213 | 
214 | **Key features:**
215 | - **Tool Integration**: Theia AI enables AI agents, including those in the Theia IDE, to utilize MCP servers for seamless tool interaction.
216 | - **Customizable Prompts**: The Theia IDE allows users to define and adapt prompts, dynamically integrating MCP servers for tailored workflows.
217 | - **Custom agents**: The Theia IDE supports creating custom agents that leverage MCP capabilities, enabling users to design dedicated workflows on the fly.
218 | 
219 | Theia AI and Theia IDE's MCP integration provide users with flexibility, making them powerful platforms for exploring and adapting MCP.
220 | 
221 | **Learn more:**
222 | - [Theia IDE and Theia AI MCP Announcement](https://eclipsesource.com/blogs/2024/12/19/theia-ide-and-theia-ai-support-mcp/)
223 | - [Download the AI-powered Theia IDE](https://theia-ide.org/)
224 | 
225 | ### Windsurf Editor
226 | [Windsurf Editor](https://codeium.com/windsurf) is an agentic IDE that combines AI assistance with developer workflows. It features an innovative AI Flow system that enables both collaborative and independent AI interactions while maintaining developer control.
227 | 
228 | **Key features:**
229 | - Revolutionary AI Flow paradigm for human-AI collaboration
230 | - Intelligent code generation and understanding
231 | - Rich development tools with multi-model support
232 | 
233 | ### Zed
234 | [Zed](https://zed.dev/docs/assistant/model-context-protocol) is a high-performance code editor with built-in MCP support, focusing on prompt templates and tool integration.
235 | 
236 | **Key features:**
237 | - Prompt templates surface as slash commands in the editor
238 | - Tool integration for enhanced coding workflows
239 | - Tight integration with editor features and workspace context
240 | - Does not support MCP resources
241 | 
242 | ### OpenSumi
243 | [OpenSumi](https://github.com/opensumi/core) is a framework helps you quickly build AI Native IDE products.
244 | 
245 | **Key features:**
246 | - Supports MCP tools in OpenSumi
247 | - Supports built-in IDE MCP servers and custom MCP servers
248 | 
249 | ### Daydreams
250 | [Daydreams](https://github.com/daydreamsai/daydreams) is a generative agent framework for executing anything onchain
251 | 
252 | **Key features:**
253 | - Supports MCP Servers in config
254 | - Exposes MCP Client
255 | 
256 | ## Adding MCP support to your application
257 | 
258 | If you've added MCP support to your application, we encourage you to submit a pull request to add it to this list. MCP integration can provide your users with powerful contextual AI capabilities and make your application part of the growing MCP ecosystem.
259 | 
260 | Benefits of adding MCP support:
261 | - Enable users to bring their own context and tools
262 | - Join a growing ecosystem of interoperable AI applications
263 | - Provide users with flexible integration options
264 | - Support local-first AI workflows
265 | 
266 | To get started with implementing MCP in your application, check out our [Python](https://github.com/modelcontextprotocol/python-sdk) or [TypeScript SDK Documentation](https://github.com/modelcontextprotocol/typescript-sdk)
267 | 
268 | ## Updates and corrections
269 | 
270 | This list is maintained by the community. If you notice any inaccuracies or would like to update information about MCP support in your application, please submit a pull request or [open an issue in our documentation repository](https://github.com/modelcontextprotocol/docs/issues).
271 | 


--------------------------------------------------------------------------------
/development/contributing.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Contributing
 3 | description: How to participate in Model Context Protocol development
 4 | ---
 5 | 
 6 | We welcome contributions from the community! Please review our [contributing guidelines](https://github.com/modelcontextprotocol/.github/blob/main/CONTRIBUTING.md) for details on how to submit changes.
 7 | 
 8 | All contributors must adhere to our [Code of Conduct](https://github.com/modelcontextprotocol/.github/blob/main/CODE_OF_CONDUCT.md).
 9 | 
10 | For questions and discussions, please use [GitHub Discussions](https://github.com/orgs/modelcontextprotocol/discussions).
11 | 


--------------------------------------------------------------------------------
/development/roadmap.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Roadmap
 3 | description: Our plans for evolving Model Context Protocol (H1 2025)
 4 | ---
 5 | 
 6 | The Model Context Protocol is rapidly evolving. This page outlines our current thinking on key priorities and future direction for **the first half of 2025**, though these may change significantly as the project develops.
 7 | 
 8 | <Note>The ideas presented here are not commitments—we may solve these challenges differently than described, or some may not materialize at all. This is also not an _exhaustive_ list; we may incorporate work that isn't mentioned here.</Note>
 9 | 
10 | We encourage community participation! Each section links to relevant discussions where you can learn more and contribute your thoughts.
11 | 
12 | ## Remote MCP Support
13 | 
14 | Our top priority is improving [remote MCP connections](https://github.com/modelcontextprotocol/specification/discussions/112), allowing clients to securely connect to MCP servers over the internet. Key initiatives include:
15 | 
16 | - [**Authentication & Authorization**](https://github.com/modelcontextprotocol/specification/discussions/64): Adding standardized auth capabilities, particularly focused on OAuth 2.0 support.
17 | 
18 | - [**Service Discovery**](https://github.com/modelcontextprotocol/specification/discussions/69): Defining how clients can discover and connect to remote MCP servers.
19 | 
20 | - [**Stateless Operations**](https://github.com/modelcontextprotocol/specification/discussions/102): Thinking about whether MCP could encompass serverless environments too, where they will need to be mostly stateless.
21 | 
22 | ## Reference Implementations
23 | 
24 | To help developers build with MCP, we want to offer documentation for:
25 | 
26 | - **Client Examples**: Comprehensive reference client implementation(s), demonstrating all protocol features
27 | - **Protocol Drafting**: Streamlined process for proposing and incorporating new protocol features
28 | 
29 | ## Distribution & Discovery
30 | 
31 | Looking ahead, we're exploring ways to make MCP servers more accessible. Some areas we may investigate include:
32 | 
33 | - **Package Management**: Standardized packaging format for MCP servers
34 | - **Installation Tools**: Simplified server installation across MCP clients
35 | - **Sandboxing**: Improved security through server isolation
36 | - **Server Registry**: A common directory for discovering available MCP servers
37 | 
38 | ## Agent Support
39 | 
40 | We're expanding MCP's capabilities for [complex agentic workflows](https://github.com/modelcontextprotocol/specification/discussions/111), particularly focusing on:
41 | 
42 | - [**Hierarchical Agent Systems**](https://github.com/modelcontextprotocol/specification/discussions/94): Improved support for trees of agents through namespacing and topology awareness.
43 | 
44 | - [**Interactive Workflows**](https://github.com/modelcontextprotocol/specification/issues/97): Better handling of user permissions and information requests across agent hierarchies, and ways to send output to users instead of models.
45 | 
46 | - [**Streaming Results**](https://github.com/modelcontextprotocol/specification/issues/117): Real-time updates from long-running agent operations.
47 | 
48 | ## Broader Ecosystem
49 | 
50 | We're also invested in:
51 | 
52 | - **Community-Led Standards Development**: Fostering a collaborative ecosystem where all AI providers can help shape MCP as an open standard through equal participation and shared governance, ensuring it meets the needs of diverse AI applications and use cases.
53 | - [**Additional Modalities**](https://github.com/modelcontextprotocol/specification/discussions/88): Expanding beyond text to support audio, video, and other formats.
54 | - [**Standardization**] Considering standardization through a standardization body.
55 | 
56 | ## Get Involved
57 | 
58 | We welcome community participation in shaping MCP's future. Visit our [GitHub Discussions](https://github.com/orgs/modelcontextprotocol/discussions) to join the conversation and contribute your ideas.
59 | 


--------------------------------------------------------------------------------
/development/updates.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: "What's New"
 3 | description: 'The latest updates and improvements to MCP'
 4 | ---
 5 | 
 6 | <Update label="2025-02-14" description="Java SDK released">
 7 |   - We're excited to announce that the Java SDK developed by Spring AI at VMware Tanzu is now
 8 |     the official [Java SDK](https://github.com/modelcontextprotocol/java-sdk) for MCP.
 9 |     This joins our existing Kotlin SDK in our growing list of supported languages.
10 |     The Spring AI team will maintain the SDK as an integral part of the Model Context Protocol
11 |     organization. We're thrilled to welcome them to the MCP community!
12 | </Update>
13 | 
14 | <Update label="2025-01-27" description="Python SDK 1.2.1">
15 |   - Version [1.2.1](https://github.com/modelcontextprotocol/python-sdk/releases/tag/v1.2.1) of the MCP Python SDK has been released,
16 |     delivering important stability improvements and bug fixes.
17 | </Update>
18 | <Update label="2025-01-18" description="SDK and Server Improvements">
19 |   - Simplified, express-like API in the [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
20 |   - Added 8 new clients to the [clients page](https://modelcontextprotocol.io/clients)
21 | </Update>
22 | 
23 | <Update label="2025-01-03" description="SDK and Server Improvements">
24 |   - FastMCP API in the [Python SDK](https://github.com/modelcontextprotocol/python-sdk)
25 |   - Dockerized MCP servers in the [servers repo](https://github.com/modelcontextprotocol/servers)
26 | </Update>
27 | 
28 | <Update label="2024-12-21" description="Kotlin SDK released">
29 |   - Jetbrains released a Kotlin SDK for MCP!
30 |   - For a sample MCP Kotlin server, check out [this repository](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/samples/kotlin-mcp-server)
31 | </Update>
32 | 


--------------------------------------------------------------------------------
/docs.json:
--------------------------------------------------------------------------------
  1 | {
  2 |   "$schema": "https://mintlify.com/docs.json",
  3 |   "theme": "willow",
  4 |   "name": "Model Context Protocol",
  5 |   "colors": {
  6 |     "primary": "#09090b",
  7 |     "light": "#FAFAFA",
  8 |     "dark": "#09090b"
  9 |   },
 10 |   "favicon": "/favicon.svg",
 11 |   "navigation": {
 12 |     "tabs": [
 13 |       {
 14 |         "tab": "Documentation",
 15 |         "groups": [
 16 |           {
 17 |             "group": "Get Started",
 18 |             "pages": [
 19 |               "introduction",
 20 |               {
 21 |                 "group": "Quickstart",
 22 |                 "pages": [
 23 |                   "quickstart/server",
 24 |                   "quickstart/client",
 25 |                   "quickstart/user"
 26 |                 ]
 27 |               },
 28 |               "examples",
 29 |               "clients"
 30 |             ]
 31 |           },
 32 |           {
 33 |             "group": "Tutorials",
 34 |             "pages": [
 35 |               "tutorials/building-mcp-with-llms",
 36 |               "docs/tools/debugging",
 37 |               "docs/tools/inspector"
 38 |             ]
 39 |           },
 40 |           {
 41 |             "group": "Concepts",
 42 |             "pages": [
 43 |               "docs/concepts/architecture",
 44 |               "docs/concepts/resources",
 45 |               "docs/concepts/prompts",
 46 |               "docs/concepts/tools",
 47 |               "docs/concepts/sampling",
 48 |               "docs/concepts/roots",
 49 |               "docs/concepts/transports"
 50 |             ]
 51 |           },
 52 |           {
 53 |             "group": "Development",
 54 |             "pages": [
 55 |               "development/updates",
 56 |               "development/roadmap",
 57 |               "development/contributing"
 58 |             ]
 59 |           }
 60 |         ]
 61 |       },
 62 |       {
 63 |         "tab": "SDKs",
 64 |         "icon": "book-open",
 65 |         "groups": [
 66 |           {
 67 |             "group": "Java",
 68 |             "pages": [
 69 |               "sdk/java/mcp-overview",
 70 |               "sdk/java/mcp-client",
 71 |               "sdk/java/mcp-server"
 72 |             ]
 73 |           }
 74 |         ]
 75 |       }
 76 |     ],
 77 |     "global": {
 78 |       "anchors": [
 79 |         {
 80 |           "anchor": "Python SDK",
 81 |           "href": "https://github.com/modelcontextprotocol/python-sdk",
 82 |           "icon": "python"
 83 |         },
 84 |         {
 85 |           "anchor": "TypeScript SDK",
 86 |           "href": "https://github.com/modelcontextprotocol/typescript-sdk",
 87 |           "icon": "square-js"
 88 |         },
 89 |         {
 90 |           "anchor": "Java SDK",
 91 |           "href": "https://github.com/modelcontextprotocol/java-sdk",
 92 |           "icon": "java"
 93 |         },
 94 |         {
 95 |           "anchor": "Kotlin SDK",
 96 |           "href": "https://github.com/modelcontextprotocol/kotlin-sdk",
 97 |           "icon": "square-k"
 98 |         },
 99 |         {
100 |           "anchor": "Specification",
101 |           "href": "https://spec.modelcontextprotocol.io",
102 |           "icon": "book"
103 |         }
104 |       ]
105 |     }
106 |   },
107 |   "logo": {
108 |     "light": "/logo/light.svg",
109 |     "dark": "/logo/dark.svg"
110 |   },
111 |   "navbar": {
112 |     "links": [],
113 |     "primary": {
114 |       "type": "button",
115 |       "label": "GitHub",
116 |       "href": "https://github.com/modelcontextprotocol"
117 |     }
118 |   },
119 |   "seo": {
120 |     "metatags": {
121 |       "og:image": "https://raw.githubusercontent.com/modelcontextprotocol/docs/2eb6171ddbfeefde349dc3b8d5e2b87414c26250/images/og-image.png"
122 |     },
123 |     "indexing": "navigable"
124 |   },
125 |   "footer": {
126 |     "socials": {
127 |       "github": "https://github.com/modelcontextprotocol"
128 |     }
129 |   },
130 |   "redirects": [
131 |     {
132 |       "source": "/tutorials/building-a-client",
133 |       "destination": "/quickstart/client"
134 |     },
135 |     {
136 |       "source": "/quickstart",
137 |       "destination": "/quickstart/server"
138 |     }
139 |   ]
140 | }
141 | 


--------------------------------------------------------------------------------
/docs/concepts/architecture.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: "Core architecture"
  3 | description: "Understand how MCP connects clients, servers, and LLMs"
  4 | ---
  5 | 
  6 | The Model Context Protocol (MCP) is built on a flexible, extensible architecture that enables seamless communication between LLM applications and integrations. This document covers the core architectural components and concepts.
  7 | 
  8 | ## Overview
  9 | 
 10 | MCP follows a client-server architecture where:
 11 | 
 12 | - **Hosts** are LLM applications (like Claude Desktop or IDEs) that initiate connections
 13 | - **Clients** maintain 1:1 connections with servers, inside the host application
 14 | - **Servers** provide context, tools, and prompts to clients
 15 | 
 16 | ```mermaid
 17 | flowchart LR
 18 |     subgraph "Host"
 19 |         client1[MCP Client]
 20 |         client2[MCP Client]
 21 |     end
 22 |     subgraph "Server Process"
 23 |         server1[MCP Server]
 24 |     end
 25 |     subgraph "Server Process"
 26 |         server2[MCP Server]
 27 |     end
 28 | 
 29 |     client1 <-->|Transport Layer| server1
 30 |     client2 <-->|Transport Layer| server2
 31 | ```
 32 | 
 33 | ## Core components
 34 | 
 35 | ### Protocol layer
 36 | 
 37 | The protocol layer handles message framing, request/response linking, and high-level communication patterns.
 38 | 
 39 | <Tabs>
 40 |   <Tab title="TypeScript">
 41 |     ```typescript
 42 |     class Protocol<Request, Notification, Result> {
 43 |         // Handle incoming requests
 44 |         setRequestHandler<T>(schema: T, handler: (request: T, extra: RequestHandlerExtra) => Promise<Result>): void
 45 | 
 46 |         // Handle incoming notifications
 47 |         setNotificationHandler<T>(schema: T, handler: (notification: T) => Promise<void>): void
 48 | 
 49 |         // Send requests and await responses
 50 |         request<T>(request: Request, schema: T, options?: RequestOptions): Promise<T>
 51 | 
 52 |         // Send one-way notifications
 53 |         notification(notification: Notification): Promise<void>
 54 |     }
 55 |     ```
 56 |   </Tab>
 57 |   <Tab title="Python">
 58 |     ```python
 59 |     class Session(BaseSession[RequestT, NotificationT, ResultT]):
 60 |         async def send_request(
 61 |             self,
 62 |             request: RequestT,
 63 |             result_type: type[Result]
 64 |         ) -> Result:
 65 |             """
 66 |             Send request and wait for response. Raises McpError if response contains error.
 67 |             """
 68 |             # Request handling implementation
 69 | 
 70 |         async def send_notification(
 71 |             self,
 72 |             notification: NotificationT
 73 |         ) -> None:
 74 |             """Send one-way notification that doesn't expect response."""
 75 |             # Notification handling implementation
 76 | 
 77 |         async def _received_request(
 78 |             self,
 79 |             responder: RequestResponder[ReceiveRequestT, ResultT]
 80 |         ) -> None:
 81 |             """Handle incoming request from other side."""
 82 |             # Request handling implementation
 83 | 
 84 |         async def _received_notification(
 85 |             self,
 86 |             notification: ReceiveNotificationT
 87 |         ) -> None:
 88 |             """Handle incoming notification from other side."""
 89 |             # Notification handling implementation
 90 |     ```
 91 |   </Tab>
 92 | </Tabs>
 93 | 
 94 | Key classes include:
 95 | 
 96 | * `Protocol`
 97 | * `Client`
 98 | * `Server`
 99 | 
100 | ### Transport layer
101 | 
102 | The transport layer handles the actual communication between clients and servers. MCP supports multiple transport mechanisms:
103 | 
104 | 1. **Stdio transport**
105 |    - Uses standard input/output for communication
106 |    - Ideal for local processes
107 | 
108 | 2. **HTTP with SSE transport**
109 |    - Uses Server-Sent Events for server-to-client messages
110 |    - HTTP POST for client-to-server messages
111 | 
112 | All transports use [JSON-RPC](https://www.jsonrpc.org/) 2.0 to exchange messages. See the [specification](https://spec.modelcontextprotocol.io) for detailed information about the Model Context Protocol message format.
113 | 
114 | ### Message types
115 | 
116 | MCP has these main types of messages:
117 | 
118 | 1. **Requests** expect a response from the other side:
119 |     ```typescript
120 |     interface Request {
121 |       method: string;
122 |       params?: { ... };
123 |     }
124 |     ```
125 | 
126 | 2. **Results** are successful responses to requests:
127 |     ```typescript
128 |     interface Result {
129 |       [key: string]: unknown;
130 |     }
131 |     ```
132 | 
133 | 3. **Errors** indicate that a request failed:
134 |     ```typescript
135 |     interface Error {
136 |       code: number;
137 |       message: string;
138 |       data?: unknown;
139 |     }
140 |     ```
141 | 
142 | 4. **Notifications** are one-way messages that don't expect a response:
143 |     ```typescript
144 |     interface Notification {
145 |       method: string;
146 |       params?: { ... };
147 |     }
148 |     ```
149 | 
150 | ## Connection lifecycle
151 | 
152 | ### 1. Initialization
153 | 
154 | ```mermaid
155 | sequenceDiagram
156 |     participant Client
157 |     participant Server
158 | 
159 |     Client->>Server: initialize request
160 |     Server->>Client: initialize response
161 |     Client->>Server: initialized notification
162 | 
163 |     Note over Client,Server: Connection ready for use
164 | ```
165 | 
166 | 1. Client sends `initialize` request with protocol version and capabilities
167 | 2. Server responds with its protocol version and capabilities
168 | 3. Client sends `initialized` notification as acknowledgment
169 | 4. Normal message exchange begins
170 | 
171 | ### 2. Message exchange
172 | 
173 | After initialization, the following patterns are supported:
174 | 
175 | - **Request-Response**: Client or server sends requests, the other responds
176 | - **Notifications**: Either party sends one-way messages
177 | 
178 | ### 3. Termination
179 | 
180 | Either party can terminate the connection:
181 | - Clean shutdown via `close()`
182 | - Transport disconnection
183 | - Error conditions
184 | 
185 | ## Error handling
186 | 
187 | MCP defines these standard error codes:
188 | 
189 | ```typescript
190 | enum ErrorCode {
191 |   // Standard JSON-RPC error codes
192 |   ParseError = -32700,
193 |   InvalidRequest = -32600,
194 |   MethodNotFound = -32601,
195 |   InvalidParams = -32602,
196 |   InternalError = -32603
197 | }
198 | ```
199 | 
200 | SDKs and applications can define their own error codes above -32000.
201 | 
202 | Errors are propagated through:
203 | - Error responses to requests
204 | - Error events on transports
205 | - Protocol-level error handlers
206 | 
207 | ## Implementation example
208 | 
209 | Here's a basic example of implementing an MCP server:
210 | 
211 | <Tabs>
212 |   <Tab title="TypeScript">
213 |     ```typescript
214 |     import { Server } from "@modelcontextprotocol/sdk/server/index.js";
215 |     import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
216 | 
217 |     const server = new Server({
218 |       name: "example-server",
219 |       version: "1.0.0"
220 |     }, {
221 |       capabilities: {
222 |         resources: {}
223 |       }
224 |     });
225 | 
226 |     // Handle requests
227 |     server.setRequestHandler(ListResourcesRequestSchema, async () => {
228 |       return {
229 |         resources: [
230 |           {
231 |             uri: "example://resource",
232 |             name: "Example Resource"
233 |           }
234 |         ]
235 |       };
236 |     });
237 | 
238 |     // Connect transport
239 |     const transport = new StdioServerTransport();
240 |     await server.connect(transport);
241 |     ```
242 |   </Tab>
243 |   <Tab title="Python">
244 |     ```python
245 |     import asyncio
246 |     import mcp.types as types
247 |     from mcp.server import Server
248 |     from mcp.server.stdio import stdio_server
249 | 
250 |     app = Server("example-server")
251 | 
252 |     @app.list_resources()
253 |     async def list_resources() -> list[types.Resource]:
254 |         return [
255 |             types.Resource(
256 |                 uri="example://resource",
257 |                 name="Example Resource"
258 |             )
259 |         ]
260 | 
261 |     async def main():
262 |         async with stdio_server() as streams:
263 |             await app.run(
264 |                 streams[0],
265 |                 streams[1],
266 |                 app.create_initialization_options()
267 |             )
268 | 
269 |     if __name__ == "__main__":
270 |         asyncio.run(main)
271 |     ```
272 |   </Tab>
273 | </Tabs>
274 | 
275 | ## Best practices
276 | 
277 | ### Transport selection
278 | 
279 | 1. **Local communication**
280 |    - Use stdio transport for local processes
281 |    - Efficient for same-machine communication
282 |    - Simple process management
283 | 
284 | 2. **Remote communication**
285 |    - Use SSE for scenarios requiring HTTP compatibility
286 |    - Consider security implications including authentication and authorization
287 | 
288 | ### Message handling
289 | 
290 | 1. **Request processing**
291 |    - Validate inputs thoroughly
292 |    - Use type-safe schemas
293 |    - Handle errors gracefully
294 |    - Implement timeouts
295 | 
296 | 2. **Progress reporting**
297 |    - Use progress tokens for long operations
298 |    - Report progress incrementally
299 |    - Include total progress when known
300 | 
301 | 3. **Error management**
302 |    - Use appropriate error codes
303 |    - Include helpful error messages
304 |    - Clean up resources on errors
305 | 
306 | ## Security considerations
307 | 
308 | 1. **Transport security**
309 |    - Use TLS for remote connections
310 |    - Validate connection origins
311 |    - Implement authentication when needed
312 | 
313 | 2. **Message validation**
314 |    - Validate all incoming messages
315 |    - Sanitize inputs
316 |    - Check message size limits
317 |    - Verify JSON-RPC format
318 | 
319 | 3. **Resource protection**
320 |    - Implement access controls
321 |    - Validate resource paths
322 |    - Monitor resource usage
323 |    - Rate limit requests
324 | 
325 | 4. **Error handling**
326 |    - Don't leak sensitive information
327 |    - Log security-relevant errors
328 |    - Implement proper cleanup
329 |    - Handle DoS scenarios
330 | 
331 | ## Debugging and monitoring
332 | 
333 | 1. **Logging**
334 |    - Log protocol events
335 |    - Track message flow
336 |    - Monitor performance
337 |    - Record errors
338 | 
339 | 2. **Diagnostics**
340 |    - Implement health checks
341 |    - Monitor connection state
342 |    - Track resource usage
343 |    - Profile performance
344 | 
345 | 3. **Testing**
346 |    - Test different transports
347 |    - Verify error handling
348 |    - Check edge cases
349 |    - Load test servers
350 | 


--------------------------------------------------------------------------------
/docs/concepts/prompts.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: "Prompts"
  3 | description: "Create reusable prompt templates and workflows"
  4 | ---
  5 | 
  6 | Prompts enable servers to define reusable prompt templates and workflows that clients can easily surface to users and LLMs. They provide a powerful way to standardize and share common LLM interactions.
  7 | 
  8 | <Note>
  9 |   Prompts are designed to be **user-controlled**, meaning they are exposed from servers to clients with the intention of the user being able to explicitly select them for use.
 10 | </Note>
 11 | 
 12 | ## Overview
 13 | 
 14 | Prompts in MCP are predefined templates that can:
 15 | - Accept dynamic arguments
 16 | - Include context from resources
 17 | - Chain multiple interactions
 18 | - Guide specific workflows
 19 | - Surface as UI elements (like slash commands)
 20 | 
 21 | ## Prompt structure
 22 | 
 23 | Each prompt is defined with:
 24 | 
 25 | ```typescript
 26 | {
 27 |   name: string;              // Unique identifier for the prompt
 28 |   description?: string;      // Human-readable description
 29 |   arguments?: [              // Optional list of arguments
 30 |     {
 31 |       name: string;          // Argument identifier
 32 |       description?: string;  // Argument description
 33 |       required?: boolean;    // Whether argument is required
 34 |     }
 35 |   ]
 36 | }
 37 | ```
 38 | 
 39 | ## Discovering prompts
 40 | 
 41 | Clients can discover available prompts through the `prompts/list` endpoint:
 42 | 
 43 | ```typescript
 44 | // Request
 45 | {
 46 |   method: "prompts/list"
 47 | }
 48 | 
 49 | // Response
 50 | {
 51 |   prompts: [
 52 |     {
 53 |       name: "analyze-code",
 54 |       description: "Analyze code for potential improvements",
 55 |       arguments: [
 56 |         {
 57 |           name: "language",
 58 |           description: "Programming language",
 59 |           required: true
 60 |         }
 61 |       ]
 62 |     }
 63 |   ]
 64 | }
 65 | ```
 66 | 
 67 | ## Using prompts
 68 | 
 69 | To use a prompt, clients make a `prompts/get` request:
 70 | 
 71 | ```typescript
 72 | // Request
 73 | {
 74 |   method: "prompts/get",
 75 |   params: {
 76 |     name: "analyze-code",
 77 |     arguments: {
 78 |       language: "python"
 79 |     }
 80 |   }
 81 | }
 82 | 
 83 | // Response
 84 | {
 85 |   description: "Analyze Python code for potential improvements",
 86 |   messages: [
 87 |     {
 88 |       role: "user",
 89 |       content: {
 90 |         type: "text",
 91 |         text: "Please analyze the following Python code for potential improvements:\n\n```python\ndef calculate_sum(numbers):\n    total = 0\n    for num in numbers:\n        total = total + num\n    return total\n\nresult = calculate_sum([1, 2, 3, 4, 5])\nprint(result)\n```"
 92 |       }
 93 |     }
 94 |   ]
 95 | }
 96 | ```
 97 | 
 98 | ## Dynamic prompts
 99 | 
100 | Prompts can be dynamic and include:
101 | 
102 | ### Embedded resource context
103 | 
104 | ```json
105 | {
106 |   "name": "analyze-project",
107 |   "description": "Analyze project logs and code",
108 |   "arguments": [
109 |     {
110 |       "name": "timeframe",
111 |       "description": "Time period to analyze logs",
112 |       "required": true
113 |     },
114 |     {
115 |       "name": "fileUri",
116 |       "description": "URI of code file to review",
117 |       "required": true
118 |     }
119 |   ]
120 | }
121 | ```
122 | 
123 | When handling the `prompts/get` request:
124 | 
125 | ```json
126 | {
127 |   "messages": [
128 |     {
129 |       "role": "user",
130 |       "content": {
131 |         "type": "text",
132 |         "text": "Analyze these system logs and the code file for any issues:"
133 |       }
134 |     },
135 |     {
136 |       "role": "user",
137 |       "content": {
138 |         "type": "resource",
139 |         "resource": {
140 |           "uri": "logs://recent?timeframe=1h",
141 |           "text": "[2024-03-14 15:32:11] ERROR: Connection timeout in network.py:127\n[2024-03-14 15:32:15] WARN: Retrying connection (attempt 2/3)\n[2024-03-14 15:32:20] ERROR: Max retries exceeded",
142 |           "mimeType": "text/plain"
143 |         }
144 |       }
145 |     },
146 |     {
147 |       "role": "user",
148 |       "content": {
149 |         "type": "resource",
150 |         "resource": {
151 |           "uri": "file:///path/to/code.py",
152 |           "text": "def connect_to_service(timeout=30):\n    retries = 3\n    for attempt in range(retries):\n        try:\n            return establish_connection(timeout)\n        except TimeoutError:\n            if attempt == retries - 1:\n                raise\n            time.sleep(5)\n\ndef establish_connection(timeout):\n    # Connection implementation\n    pass",
153 |           "mimeType": "text/x-python"
154 |         }
155 |       }
156 |     }
157 |   ]
158 | }
159 | ```
160 | 
161 | ### Multi-step workflows
162 | 
163 | ```typescript
164 | const debugWorkflow = {
165 |   name: "debug-error",
166 |   async getMessages(error: string) {
167 |     return [
168 |       {
169 |         role: "user",
170 |         content: {
171 |           type: "text",
172 |           text: `Here's an error I'm seeing: ${error}`
173 |         }
174 |       },
175 |       {
176 |         role: "assistant",
177 |         content: {
178 |           type: "text",
179 |           text: "I'll help analyze this error. What have you tried so far?"
180 |         }
181 |       },
182 |       {
183 |         role: "user",
184 |         content: {
185 |           type: "text",
186 |           text: "I've tried restarting the service, but the error persists."
187 |         }
188 |       }
189 |     ];
190 |   }
191 | };
192 | ```
193 | 
194 | ## Example implementation
195 | 
196 | Here's a complete example of implementing prompts in an MCP server:
197 | 
198 | <Tabs>
199 |   <Tab title="TypeScript">
200 |     ```typescript
201 |     import { Server } from "@modelcontextprotocol/sdk/server";
202 |     import {
203 |       ListPromptsRequestSchema,
204 |       GetPromptRequestSchema
205 |     } from "@modelcontextprotocol/sdk/types";
206 | 
207 |     const PROMPTS = {
208 |       "git-commit": {
209 |         name: "git-commit",
210 |         description: "Generate a Git commit message",
211 |         arguments: [
212 |           {
213 |             name: "changes",
214 |             description: "Git diff or description of changes",
215 |             required: true
216 |           }
217 |         ]
218 |       },
219 |       "explain-code": {
220 |         name: "explain-code",
221 |         description: "Explain how code works",
222 |         arguments: [
223 |           {
224 |             name: "code",
225 |             description: "Code to explain",
226 |             required: true
227 |           },
228 |           {
229 |             name: "language",
230 |             description: "Programming language",
231 |             required: false
232 |           }
233 |         ]
234 |       }
235 |     };
236 | 
237 |     const server = new Server({
238 |       name: "example-prompts-server",
239 |       version: "1.0.0"
240 |     }, {
241 |       capabilities: {
242 |         prompts: {}
243 |       }
244 |     });
245 | 
246 |     // List available prompts
247 |     server.setRequestHandler(ListPromptsRequestSchema, async () => {
248 |       return {
249 |         prompts: Object.values(PROMPTS)
250 |       };
251 |     });
252 | 
253 |     // Get specific prompt
254 |     server.setRequestHandler(GetPromptRequestSchema, async (request) => {
255 |       const prompt = PROMPTS[request.params.name];
256 |       if (!prompt) {
257 |         throw new Error(`Prompt not found: ${request.params.name}`);
258 |       }
259 | 
260 |       if (request.params.name === "git-commit") {
261 |         return {
262 |           messages: [
263 |             {
264 |               role: "user",
265 |               content: {
266 |                 type: "text",
267 |                 text: `Generate a concise but descriptive commit message for these changes:\n\n${request.params.arguments?.changes}`
268 |               }
269 |             }
270 |           ]
271 |         };
272 |       }
273 | 
274 |       if (request.params.name === "explain-code") {
275 |         const language = request.params.arguments?.language || "Unknown";
276 |         return {
277 |           messages: [
278 |             {
279 |               role: "user",
280 |               content: {
281 |                 type: "text",
282 |                 text: `Explain how this ${language} code works:\n\n${request.params.arguments?.code}`
283 |               }
284 |             }
285 |           ]
286 |         };
287 |       }
288 | 
289 |       throw new Error("Prompt implementation not found");
290 |     });
291 |     ```
292 |   </Tab>
293 |   <Tab title="Python">
294 |     ```python
295 |     from mcp.server import Server
296 |     import mcp.types as types
297 | 
298 |     # Define available prompts
299 |     PROMPTS = {
300 |         "git-commit": types.Prompt(
301 |             name="git-commit",
302 |             description="Generate a Git commit message",
303 |             arguments=[
304 |                 types.PromptArgument(
305 |                     name="changes",
306 |                     description="Git diff or description of changes",
307 |                     required=True
308 |                 )
309 |             ],
310 |         ),
311 |         "explain-code": types.Prompt(
312 |             name="explain-code",
313 |             description="Explain how code works",
314 |             arguments=[
315 |                 types.PromptArgument(
316 |                     name="code",
317 |                     description="Code to explain",
318 |                     required=True
319 |                 ),
320 |                 types.PromptArgument(
321 |                     name="language",
322 |                     description="Programming language",
323 |                     required=False
324 |                 )
325 |             ],
326 |         )
327 |     }
328 | 
329 |     # Initialize server
330 |     app = Server("example-prompts-server")
331 | 
332 |     @app.list_prompts()
333 |     async def list_prompts() -> list[types.Prompt]:
334 |         return list(PROMPTS.values())
335 | 
336 |     @app.get_prompt()
337 |     async def get_prompt(
338 |         name: str, arguments: dict[str, str] | None = None
339 |     ) -> types.GetPromptResult:
340 |         if name not in PROMPTS:
341 |             raise ValueError(f"Prompt not found: {name}")
342 | 
343 |         if name == "git-commit":
344 |             changes = arguments.get("changes") if arguments else ""
345 |             return types.GetPromptResult(
346 |                 messages=[
347 |                     types.PromptMessage(
348 |                         role="user",
349 |                         content=types.TextContent(
350 |                             type="text",
351 |                             text=f"Generate a concise but descriptive commit message "
352 |                             f"for these changes:\n\n{changes}"
353 |                         )
354 |                     )
355 |                 ]
356 |             )
357 | 
358 |         if name == "explain-code":
359 |             code = arguments.get("code") if arguments else ""
360 |             language = arguments.get("language", "Unknown") if arguments else "Unknown"
361 |             return types.GetPromptResult(
362 |                 messages=[
363 |                     types.PromptMessage(
364 |                         role="user",
365 |                         content=types.TextContent(
366 |                             type="text",
367 |                             text=f"Explain how this {language} code works:\n\n{code}"
368 |                         )
369 |                     )
370 |                 ]
371 |             )
372 | 
373 |         raise ValueError("Prompt implementation not found")
374 |     ```
375 |   </Tab>
376 | </Tabs>
377 | 
378 | ## Best practices
379 | 
380 | When implementing prompts:
381 | 
382 | 1. Use clear, descriptive prompt names
383 | 2. Provide detailed descriptions for prompts and arguments
384 | 3. Validate all required arguments
385 | 4. Handle missing arguments gracefully
386 | 5. Consider versioning for prompt templates
387 | 6. Cache dynamic content when appropriate
388 | 7. Implement error handling
389 | 8. Document expected argument formats
390 | 9. Consider prompt composability
391 | 10. Test prompts with various inputs
392 | 
393 | ## UI integration
394 | 
395 | Prompts can be surfaced in client UIs as:
396 | 
397 | - Slash commands
398 | - Quick actions
399 | - Context menu items
400 | - Command palette entries
401 | - Guided workflows
402 | - Interactive forms
403 | 
404 | ## Updates and changes
405 | 
406 | Servers can notify clients about prompt changes:
407 | 
408 | 1. Server capability: `prompts.listChanged`
409 | 2. Notification: `notifications/prompts/list_changed`
410 | 3. Client re-fetches prompt list
411 | 
412 | ## Security considerations
413 | 
414 | When implementing prompts:
415 | 
416 | - Validate all arguments
417 | - Sanitize user input
418 | - Consider rate limiting
419 | - Implement access controls
420 | - Audit prompt usage
421 | - Handle sensitive data appropriately
422 | - Validate generated content
423 | - Implement timeouts
424 | - Consider prompt injection risks
425 | - Document security requirements
426 | 


--------------------------------------------------------------------------------
/docs/concepts/resources.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: "Resources"
  3 | description: "Expose data and content from your servers to LLMs"
  4 | ---
  5 | 
  6 | Resources are a core primitive in the Model Context Protocol (MCP) that allow servers to expose data and content that can be read by clients and used as context for LLM interactions.
  7 | 
  8 | <Note>
  9 |   Resources are designed to be **application-controlled**, meaning that the client application can decide how and when they should be used.
 10 |   Different MCP clients may handle resources differently. For example:
 11 |   - Claude Desktop currently requires users to explicitly select resources before they can be used
 12 |   - Other clients might automatically select resources based on heuristics
 13 |   - Some implementations may even allow the AI model itself to determine which resources to use
 14 | 
 15 |   Server authors should be prepared to handle any of these interaction patterns when implementing resource support. In order to expose data to models automatically, server authors should use a **model-controlled** primitive such as [Tools](./tools).
 16 | </Note>
 17 | 
 18 | ## Overview
 19 | 
 20 | Resources represent any kind of data that an MCP server wants to make available to clients. This can include:
 21 | 
 22 | - File contents
 23 | - Database records
 24 | - API responses
 25 | - Live system data
 26 | - Screenshots and images
 27 | - Log files
 28 | - And more
 29 | 
 30 | Each resource is identified by a unique URI and can contain either text or binary data.
 31 | 
 32 | ## Resource URIs
 33 | 
 34 | Resources are identified using URIs that follow this format:
 35 | 
 36 | ```
 37 | [protocol]://[host]/[path]
 38 | ```
 39 | 
 40 | For example:
 41 | - `file:///home/user/documents/report.pdf`
 42 | - `postgres://database/customers/schema`
 43 | - `screen://localhost/display1`
 44 | 
 45 | The protocol and path structure is defined by the MCP server implementation. Servers can define their own custom URI schemes.
 46 | 
 47 | ## Resource types
 48 | 
 49 | Resources can contain two types of content:
 50 | 
 51 | ### Text resources
 52 | 
 53 | Text resources contain UTF-8 encoded text data. These are suitable for:
 54 | - Source code
 55 | - Configuration files
 56 | - Log files
 57 | - JSON/XML data
 58 | - Plain text
 59 | 
 60 | ### Binary resources
 61 | 
 62 | Binary resources contain raw binary data encoded in base64. These are suitable for:
 63 | - Images
 64 | - PDFs
 65 | - Audio files
 66 | - Video files
 67 | - Other non-text formats
 68 | 
 69 | ## Resource discovery
 70 | 
 71 | Clients can discover available resources through two main methods:
 72 | 
 73 | ### Direct resources
 74 | 
 75 | Servers expose a list of concrete resources via the `resources/list` endpoint. Each resource includes:
 76 | 
 77 | ```typescript
 78 | {
 79 |   uri: string;           // Unique identifier for the resource
 80 |   name: string;          // Human-readable name
 81 |   description?: string;  // Optional description
 82 |   mimeType?: string;     // Optional MIME type
 83 | }
 84 | ```
 85 | 
 86 | ### Resource templates
 87 | 
 88 | For dynamic resources, servers can expose [URI templates](https://datatracker.ietf.org/doc/html/rfc6570) that clients can use to construct valid resource URIs:
 89 | 
 90 | ```typescript
 91 | {
 92 |   uriTemplate: string;   // URI template following RFC 6570
 93 |   name: string;          // Human-readable name for this type
 94 |   description?: string;  // Optional description
 95 |   mimeType?: string;     // Optional MIME type for all matching resources
 96 | }
 97 | ```
 98 | 
 99 | ## Reading resources
100 | 
101 | To read a resource, clients make a `resources/read` request with the resource URI.
102 | 
103 | The server responds with a list of resource contents:
104 | 
105 | ```typescript
106 | {
107 |   contents: [
108 |     {
109 |       uri: string;        // The URI of the resource
110 |       mimeType?: string;  // Optional MIME type
111 | 
112 |       // One of:
113 |       text?: string;      // For text resources
114 |       blob?: string;      // For binary resources (base64 encoded)
115 |     }
116 |   ]
117 | }
118 | ```
119 | 
120 | <Tip>
121 |   Servers may return multiple resources in response to one `resources/read` request. This could be used, for example, to return a list of files inside a directory when the directory is read.
122 | </Tip>
123 | 
124 | ## Resource updates
125 | 
126 | MCP supports real-time updates for resources through two mechanisms:
127 | 
128 | ### List changes
129 | 
130 | Servers can notify clients when their list of available resources changes via the `notifications/resources/list_changed` notification.
131 | 
132 | ### Content changes
133 | 
134 | Clients can subscribe to updates for specific resources:
135 | 
136 | 1. Client sends `resources/subscribe` with resource URI
137 | 2. Server sends `notifications/resources/updated` when the resource changes
138 | 3. Client can fetch latest content with `resources/read`
139 | 4. Client can unsubscribe with `resources/unsubscribe`
140 | 
141 | ## Example implementation
142 | 
143 | Here's a simple example of implementing resource support in an MCP server:
144 | 
145 | <Tabs>
146 |   <Tab title="TypeScript">
147 |     ```typescript
148 |     const server = new Server({
149 |       name: "example-server",
150 |       version: "1.0.0"
151 |     }, {
152 |       capabilities: {
153 |         resources: {}
154 |       }
155 |     });
156 | 
157 |     // List available resources
158 |     server.setRequestHandler(ListResourcesRequestSchema, async () => {
159 |       return {
160 |         resources: [
161 |           {
162 |             uri: "file:///logs/app.log",
163 |             name: "Application Logs",
164 |             mimeType: "text/plain"
165 |           }
166 |         ]
167 |       };
168 |     });
169 | 
170 |     // Read resource contents
171 |     server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
172 |       const uri = request.params.uri;
173 | 
174 |       if (uri === "file:///logs/app.log") {
175 |         const logContents = await readLogFile();
176 |         return {
177 |           contents: [
178 |             {
179 |               uri,
180 |               mimeType: "text/plain",
181 |               text: logContents
182 |             }
183 |           ]
184 |         };
185 |       }
186 | 
187 |       throw new Error("Resource not found");
188 |     });
189 |     ```
190 |   </Tab>
191 |   <Tab title="Python">
192 |     ```python
193 |     app = Server("example-server")
194 | 
195 |     @app.list_resources()
196 |     async def list_resources() -> list[types.Resource]:
197 |         return [
198 |             types.Resource(
199 |                 uri="file:///logs/app.log",
200 |                 name="Application Logs",
201 |                 mimeType="text/plain"
202 |             )
203 |         ]
204 | 
205 |     @app.read_resource()
206 |     async def read_resource(uri: AnyUrl) -> str:
207 |         if str(uri) == "file:///logs/app.log":
208 |             log_contents = await read_log_file()
209 |             return log_contents
210 | 
211 |         raise ValueError("Resource not found")
212 | 
213 |     # Start server
214 |     async with stdio_server() as streams:
215 |         await app.run(
216 |             streams[0],
217 |             streams[1],
218 |             app.create_initialization_options()
219 |         )
220 |     ```
221 |   </Tab>
222 | </Tabs>
223 | 
224 | ## Best practices
225 | 
226 | When implementing resource support:
227 | 
228 | 1. Use clear, descriptive resource names and URIs
229 | 2. Include helpful descriptions to guide LLM understanding
230 | 3. Set appropriate MIME types when known
231 | 4. Implement resource templates for dynamic content
232 | 5. Use subscriptions for frequently changing resources
233 | 6. Handle errors gracefully with clear error messages
234 | 7. Consider pagination for large resource lists
235 | 8. Cache resource contents when appropriate
236 | 9. Validate URIs before processing
237 | 10. Document your custom URI schemes
238 | 
239 | ## Security considerations
240 | 
241 | When exposing resources:
242 | 
243 | - Validate all resource URIs
244 | - Implement appropriate access controls
245 | - Sanitize file paths to prevent directory traversal
246 | - Be cautious with binary data handling
247 | - Consider rate limiting for resource reads
248 | - Audit resource access
249 | - Encrypt sensitive data in transit
250 | - Validate MIME types
251 | - Implement timeouts for long-running reads
252 | - Handle resource cleanup appropriately
253 | 


--------------------------------------------------------------------------------
/docs/concepts/roots.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: "Roots"
 3 | description: "Understanding roots in MCP"
 4 | ---
 5 | 
 6 | Roots are a concept in MCP that define the boundaries where servers can operate. They provide a way for clients to inform servers about relevant resources and their locations.
 7 | 
 8 | ## What are Roots?
 9 | 
10 | A root is a URI that a client suggests a server should focus on. When a client connects to a server, it declares which roots the server should work with. While primarily used for filesystem paths, roots can be any valid URI including HTTP URLs.
11 | 
12 | For example, roots could be:
13 | 
14 | ```
15 | file:///home/user/projects/myapp
16 | https://api.example.com/v1
17 | ```
18 | 
19 | ## Why Use Roots?
20 | 
21 | Roots serve several important purposes:
22 | 
23 | 1. **Guidance**: They inform servers about relevant resources and locations
24 | 2. **Clarity**: Roots make it clear which resources are part of your workspace
25 | 3. **Organization**: Multiple roots let you work with different resources simultaneously
26 | 
27 | ## How Roots Work
28 | 
29 | When a client supports roots, it:
30 | 
31 | 1. Declares the `roots` capability during connection
32 | 2. Provides a list of suggested roots to the server
33 | 3. Notifies the server when roots change (if supported)
34 | 
35 | While roots are informational and not strictly enforcing, servers should:
36 | 
37 | 1. Respect the provided roots
38 | 2. Use root URIs to locate and access resources
39 | 3. Prioritize operations within root boundaries
40 | 
41 | ## Common Use Cases
42 | 
43 | Roots are commonly used to define:
44 | 
45 | - Project directories
46 | - Repository locations
47 | - API endpoints
48 | - Configuration locations
49 | - Resource boundaries
50 | 
51 | ## Best Practices
52 | 
53 | When working with roots:
54 | 
55 | 1. Only suggest necessary resources
56 | 2. Use clear, descriptive names for roots
57 | 3. Monitor root accessibility
58 | 4. Handle root changes gracefully
59 | 
60 | ## Example
61 | 
62 | Here's how a typical MCP client might expose roots:
63 | 
64 | ```json
65 | {
66 |   "roots": [
67 |     {
68 |       "uri": "file:///home/user/projects/frontend",
69 |       "name": "Frontend Repository"
70 |     },
71 |     {
72 |       "uri": "https://api.example.com/v1",
73 |       "name": "API Endpoint"
74 |     }
75 |   ]
76 | }
77 | ```
78 | 
79 | This configuration suggests the server focus on both a local repository and an API endpoint while keeping them logically separated.


--------------------------------------------------------------------------------
/docs/concepts/sampling.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: "Sampling"
  3 | description: "Let your servers request completions from LLMs"
  4 | ---
  5 | 
  6 | Sampling is a powerful MCP feature that allows servers to request LLM completions through the client, enabling sophisticated agentic behaviors while maintaining security and privacy.
  7 | 
  8 | <Info>
  9 |   This feature of MCP is not yet supported in the Claude Desktop client.
 10 | </Info>
 11 | 
 12 | ## How sampling works
 13 | 
 14 | The sampling flow follows these steps:
 15 | 
 16 | 1. Server sends a `sampling/createMessage` request to the client
 17 | 2. Client reviews the request and can modify it
 18 | 3. Client samples from an LLM
 19 | 4. Client reviews the completion
 20 | 5. Client returns the result to the server
 21 | 
 22 | This human-in-the-loop design ensures users maintain control over what the LLM sees and generates.
 23 | 
 24 | ## Message format
 25 | 
 26 | Sampling requests use a standardized message format:
 27 | 
 28 | ```typescript
 29 | {
 30 |   messages: [
 31 |     {
 32 |       role: "user" | "assistant",
 33 |       content: {
 34 |         type: "text" | "image",
 35 | 
 36 |         // For text:
 37 |         text?: string,
 38 | 
 39 |         // For images:
 40 |         data?: string,             // base64 encoded
 41 |         mimeType?: string
 42 |       }
 43 |     }
 44 |   ],
 45 |   modelPreferences?: {
 46 |     hints?: [{
 47 |       name?: string                // Suggested model name/family
 48 |     }],
 49 |     costPriority?: number,         // 0-1, importance of minimizing cost
 50 |     speedPriority?: number,        // 0-1, importance of low latency
 51 |     intelligencePriority?: number  // 0-1, importance of capabilities
 52 |   },
 53 |   systemPrompt?: string,
 54 |   includeContext?: "none" | "thisServer" | "allServers",
 55 |   temperature?: number,
 56 |   maxTokens: number,
 57 |   stopSequences?: string[],
 58 |   metadata?: Record<string, unknown>
 59 | }
 60 | ```
 61 | 
 62 | ## Request parameters
 63 | 
 64 | ### Messages
 65 | 
 66 | The `messages` array contains the conversation history to send to the LLM. Each message has:
 67 | 
 68 | - `role`: Either "user" or "assistant"
 69 | - `content`: The message content, which can be:
 70 |   - Text content with a `text` field
 71 |   - Image content with `data` (base64) and `mimeType` fields
 72 | 
 73 | ### Model preferences
 74 | 
 75 | The `modelPreferences` object allows servers to specify their model selection preferences:
 76 | 
 77 | - `hints`: Array of model name suggestions that clients can use to select an appropriate model:
 78 |   - `name`: String that can match full or partial model names (e.g. "claude-3", "sonnet")
 79 |   - Clients may map hints to equivalent models from different providers
 80 |   - Multiple hints are evaluated in preference order
 81 | 
 82 | - Priority values (0-1 normalized):
 83 |   - `costPriority`: Importance of minimizing costs
 84 |   - `speedPriority`: Importance of low latency response
 85 |   - `intelligencePriority`: Importance of advanced model capabilities
 86 | 
 87 | Clients make the final model selection based on these preferences and their available models.
 88 | 
 89 | ### System prompt
 90 | 
 91 | An optional `systemPrompt` field allows servers to request a specific system prompt. The client may modify or ignore this.
 92 | 
 93 | ### Context inclusion
 94 | 
 95 | The `includeContext` parameter specifies what MCP context to include:
 96 | 
 97 | - `"none"`: No additional context
 98 | - `"thisServer"`: Include context from the requesting server
 99 | - `"allServers"`: Include context from all connected MCP servers
100 | 
101 | The client controls what context is actually included.
102 | 
103 | ### Sampling parameters
104 | 
105 | Fine-tune the LLM sampling with:
106 | 
107 | - `temperature`: Controls randomness (0.0 to 1.0)
108 | - `maxTokens`: Maximum tokens to generate
109 | - `stopSequences`: Array of sequences that stop generation
110 | - `metadata`: Additional provider-specific parameters
111 | 
112 | ## Response format
113 | 
114 | The client returns a completion result:
115 | 
116 | ```typescript
117 | {
118 |   model: string,  // Name of the model used
119 |   stopReason?: "endTurn" | "stopSequence" | "maxTokens" | string,
120 |   role: "user" | "assistant",
121 |   content: {
122 |     type: "text" | "image",
123 |     text?: string,
124 |     data?: string,
125 |     mimeType?: string
126 |   }
127 | }
128 | ```
129 | 
130 | ## Example request
131 | 
132 | Here's an example of requesting sampling from a client:
133 | ```json
134 | {
135 |   "method": "sampling/createMessage",
136 |   "params": {
137 |     "messages": [
138 |       {
139 |         "role": "user",
140 |         "content": {
141 |           "type": "text",
142 |           "text": "What files are in the current directory?"
143 |         }
144 |       }
145 |     ],
146 |     "systemPrompt": "You are a helpful file system assistant.",
147 |     "includeContext": "thisServer",
148 |     "maxTokens": 100
149 |   }
150 | }
151 | ```
152 | 
153 | ## Best practices
154 | 
155 | When implementing sampling:
156 | 
157 | 1. Always provide clear, well-structured prompts
158 | 2. Handle both text and image content appropriately
159 | 3. Set reasonable token limits
160 | 4. Include relevant context through `includeContext`
161 | 5. Validate responses before using them
162 | 6. Handle errors gracefully
163 | 7. Consider rate limiting sampling requests
164 | 8. Document expected sampling behavior
165 | 9. Test with various model parameters
166 | 10. Monitor sampling costs
167 | 
168 | ## Human in the loop controls
169 | 
170 | Sampling is designed with human oversight in mind:
171 | 
172 | ### For prompts
173 | 
174 | - Clients should show users the proposed prompt
175 | - Users should be able to modify or reject prompts
176 | - System prompts can be filtered or modified
177 | - Context inclusion is controlled by the client
178 | 
179 | ### For completions
180 | 
181 | - Clients should show users the completion
182 | - Users should be able to modify or reject completions
183 | - Clients can filter or modify completions
184 | - Users control which model is used
185 | 
186 | ## Security considerations
187 | 
188 | When implementing sampling:
189 | 
190 | - Validate all message content
191 | - Sanitize sensitive information
192 | - Implement appropriate rate limits
193 | - Monitor sampling usage
194 | - Encrypt data in transit
195 | - Handle user data privacy
196 | - Audit sampling requests
197 | - Control cost exposure
198 | - Implement timeouts
199 | - Handle model errors gracefully
200 | 
201 | ## Common patterns
202 | 
203 | ### Agentic workflows
204 | 
205 | Sampling enables agentic patterns like:
206 | 
207 | - Reading and analyzing resources
208 | - Making decisions based on context
209 | - Generating structured data
210 | - Handling multi-step tasks
211 | - Providing interactive assistance
212 | 
213 | ### Context management
214 | 
215 | Best practices for context:
216 | 
217 | - Request minimal necessary context
218 | - Structure context clearly
219 | - Handle context size limits
220 | - Update context as needed
221 | - Clean up stale context
222 | 
223 | ### Error handling
224 | 
225 | Robust error handling should:
226 | 
227 | - Catch sampling failures
228 | - Handle timeout errors
229 | - Manage rate limits
230 | - Validate responses
231 | - Provide fallback behaviors
232 | - Log errors appropriately
233 | 
234 | ## Limitations
235 | 
236 | Be aware of these limitations:
237 | 
238 | - Sampling depends on client capabilities
239 | - Users control sampling behavior
240 | - Context size has limits
241 | - Rate limits may apply
242 | - Costs should be considered
243 | - Model availability varies
244 | - Response times vary
245 | - Not all content types supported
246 | 


--------------------------------------------------------------------------------
/docs/concepts/tools.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: "Tools"
  3 | description: "Enable LLMs to perform actions through your server"
  4 | ---
  5 | 
  6 | Tools are a powerful primitive in the Model Context Protocol (MCP) that enable servers to expose executable functionality to clients. Through tools, LLMs can interact with external systems, perform computations, and take actions in the real world.
  7 | 
  8 | <Note>
  9 |   Tools are designed to be **model-controlled**, meaning that tools are exposed from servers to clients with the intention of the AI model being able to automatically invoke them (with a human in the loop to grant approval).
 10 | </Note>
 11 | 
 12 | ## Overview
 13 | 
 14 | Tools in MCP allow servers to expose executable functions that can be invoked by clients and used by LLMs to perform actions. Key aspects of tools include:
 15 | 
 16 | - **Discovery**: Clients can list available tools through the `tools/list` endpoint
 17 | - **Invocation**: Tools are called using the `tools/call` endpoint, where servers perform the requested operation and return results
 18 | - **Flexibility**: Tools can range from simple calculations to complex API interactions
 19 | 
 20 | Like [resources](/docs/concepts/resources), tools are identified by unique names and can include descriptions to guide their usage. However, unlike resources, tools represent dynamic operations that can modify state or interact with external systems.
 21 | 
 22 | ## Tool definition structure
 23 | 
 24 | Each tool is defined with the following structure:
 25 | 
 26 | ```typescript
 27 | {
 28 |   name: string;          // Unique identifier for the tool
 29 |   description?: string;  // Human-readable description
 30 |   inputSchema: {         // JSON Schema for the tool's parameters
 31 |     type: "object",
 32 |     properties: { ... }  // Tool-specific parameters
 33 |   }
 34 | }
 35 | ```
 36 | 
 37 | ## Implementing tools
 38 | 
 39 | Here's an example of implementing a basic tool in an MCP server:
 40 | 
 41 | <Tabs>
 42 |   <Tab title="TypeScript">
 43 |     ```typescript
 44 |     const server = new Server({
 45 |       name: "example-server",
 46 |       version: "1.0.0"
 47 |     }, {
 48 |       capabilities: {
 49 |         tools: {}
 50 |       }
 51 |     });
 52 | 
 53 |     // Define available tools
 54 |     server.setRequestHandler(ListToolsRequestSchema, async () => {
 55 |       return {
 56 |         tools: [{
 57 |           name: "calculate_sum",
 58 |           description: "Add two numbers together",
 59 |           inputSchema: {
 60 |             type: "object",
 61 |             properties: {
 62 |               a: { type: "number" },
 63 |               b: { type: "number" }
 64 |             },
 65 |             required: ["a", "b"]
 66 |           }
 67 |         }]
 68 |       };
 69 |     });
 70 | 
 71 |     // Handle tool execution
 72 |     server.setRequestHandler(CallToolRequestSchema, async (request) => {
 73 |       if (request.params.name === "calculate_sum") {
 74 |         const { a, b } = request.params.arguments;
 75 |         return {
 76 |           content: [
 77 |             {
 78 |               type: "text",
 79 |               text: String(a + b)
 80 |             }
 81 |           ]
 82 |         };
 83 |       }
 84 |       throw new Error("Tool not found");
 85 |     });
 86 |     ```
 87 |   </Tab>
 88 |   <Tab title="Python">
 89 |     ```python
 90 |     app = Server("example-server")
 91 | 
 92 |     @app.list_tools()
 93 |     async def list_tools() -> list[types.Tool]:
 94 |         return [
 95 |             types.Tool(
 96 |                 name="calculate_sum",
 97 |                 description="Add two numbers together",
 98 |                 inputSchema={
 99 |                     "type": "object",
100 |                     "properties": {
101 |                         "a": {"type": "number"},
102 |                         "b": {"type": "number"}
103 |                     },
104 |                     "required": ["a", "b"]
105 |                 }
106 |             )
107 |         ]
108 | 
109 |     @app.call_tool()
110 |     async def call_tool(
111 |         name: str,
112 |         arguments: dict
113 |     ) -> list[types.TextContent | types.ImageContent | types.EmbeddedResource]:
114 |         if name == "calculate_sum":
115 |             a = arguments["a"]
116 |             b = arguments["b"]
117 |             result = a + b
118 |             return [types.TextContent(type="text", text=str(result))]
119 |         raise ValueError(f"Tool not found: {name}")
120 |     ```
121 |   </Tab>
122 | </Tabs>
123 | 
124 | ## Example tool patterns
125 | 
126 | Here are some examples of types of tools that a server could provide:
127 | 
128 | ### System operations
129 | 
130 | Tools that interact with the local system:
131 | 
132 | ```typescript
133 | {
134 |   name: "execute_command",
135 |   description: "Run a shell command",
136 |   inputSchema: {
137 |     type: "object",
138 |     properties: {
139 |       command: { type: "string" },
140 |       args: { type: "array", items: { type: "string" } }
141 |     }
142 |   }
143 | }
144 | ```
145 | 
146 | ### API integrations
147 | 
148 | Tools that wrap external APIs:
149 | 
150 | ```typescript
151 | {
152 |   name: "github_create_issue",
153 |   description: "Create a GitHub issue",
154 |   inputSchema: {
155 |     type: "object",
156 |     properties: {
157 |       title: { type: "string" },
158 |       body: { type: "string" },
159 |       labels: { type: "array", items: { type: "string" } }
160 |     }
161 |   }
162 | }
163 | ```
164 | 
165 | ### Data processing
166 | 
167 | Tools that transform or analyze data:
168 | 
169 | ```typescript
170 | {
171 |   name: "analyze_csv",
172 |   description: "Analyze a CSV file",
173 |   inputSchema: {
174 |     type: "object",
175 |     properties: {
176 |       filepath: { type: "string" },
177 |       operations: {
178 |         type: "array",
179 |         items: {
180 |           enum: ["sum", "average", "count"]
181 |         }
182 |       }
183 |     }
184 |   }
185 | }
186 | ```
187 | 
188 | ## Best practices
189 | 
190 | When implementing tools:
191 | 
192 | 1. Provide clear, descriptive names and descriptions
193 | 2. Use detailed JSON Schema definitions for parameters
194 | 3. Include examples in tool descriptions to demonstrate how the model should use them
195 | 4. Implement proper error handling and validation
196 | 5. Use progress reporting for long operations
197 | 6. Keep tool operations focused and atomic
198 | 7. Document expected return value structures
199 | 8. Implement proper timeouts
200 | 9. Consider rate limiting for resource-intensive operations
201 | 10. Log tool usage for debugging and monitoring
202 | 
203 | ## Security considerations
204 | 
205 | When exposing tools:
206 | 
207 | ### Input validation
208 | 
209 | - Validate all parameters against the schema
210 | - Sanitize file paths and system commands
211 | - Validate URLs and external identifiers
212 | - Check parameter sizes and ranges
213 | - Prevent command injection
214 | 
215 | ### Access control
216 | 
217 | - Implement authentication where needed
218 | - Use appropriate authorization checks
219 | - Audit tool usage
220 | - Rate limit requests
221 | - Monitor for abuse
222 | 
223 | ### Error handling
224 | 
225 | - Don't expose internal errors to clients
226 | - Log security-relevant errors
227 | - Handle timeouts appropriately
228 | - Clean up resources after errors
229 | - Validate return values
230 | 
231 | ## Tool discovery and updates
232 | 
233 | MCP supports dynamic tool discovery:
234 | 
235 | 1. Clients can list available tools at any time
236 | 2. Servers can notify clients when tools change using `notifications/tools/list_changed`
237 | 3. Tools can be added or removed during runtime
238 | 4. Tool definitions can be updated (though this should be done carefully)
239 | 
240 | ## Error handling
241 | 
242 | Tool errors should be reported within the result object, not as MCP protocol-level errors. This allows the LLM to see and potentially handle the error. When a tool encounters an error:
243 | 
244 | 1. Set `isError` to `true` in the result
245 | 2. Include error details in the `content` array
246 | 
247 | Here's an example of proper error handling for tools:
248 | 
249 | <Tabs>
250 |   <Tab title="TypeScript">
251 |     ```typescript
252 |     try {
253 |       // Tool operation
254 |       const result = performOperation();
255 |       return {
256 |         content: [
257 |           {
258 |             type: "text",
259 |             text: `Operation successful: ${result}`
260 |           }
261 |         ]
262 |       };
263 |     } catch (error) {
264 |       return {
265 |         isError: true,
266 |         content: [
267 |           {
268 |             type: "text",
269 |             text: `Error: ${error.message}`
270 |           }
271 |         ]
272 |       };
273 |     }
274 |     ```
275 |   </Tab>
276 |   <Tab title="Python">
277 |     ```python
278 |     try:
279 |         # Tool operation
280 |         result = perform_operation()
281 |         return types.CallToolResult(
282 |             content=[
283 |                 types.TextContent(
284 |                     type="text",
285 |                     text=f"Operation successful: {result}"
286 |                 )
287 |             ]
288 |         )
289 |     except Exception as error:
290 |         return types.CallToolResult(
291 |             isError=True,
292 |             content=[
293 |                 types.TextContent(
294 |                     type="text",
295 |                     text=f"Error: {str(error)}"
296 |                 )
297 |             ]
298 |         )
299 |     ```
300 |   </Tab>
301 | </Tabs>
302 | 
303 | This approach allows the LLM to see that an error occurred and potentially take corrective action or request human intervention.
304 | 
305 | ## Testing tools
306 | 
307 | A comprehensive testing strategy for MCP tools should cover:
308 | 
309 | - **Functional testing**: Verify tools execute correctly with valid inputs and handle invalid inputs appropriately
310 | - **Integration testing**: Test tool interaction with external systems using both real and mocked dependencies
311 | - **Security testing**: Validate authentication, authorization, input sanitization, and rate limiting
312 | - **Performance testing**: Check behavior under load, timeout handling, and resource cleanup
313 | - **Error handling**: Ensure tools properly report errors through the MCP protocol and clean up resources
314 | 


--------------------------------------------------------------------------------
/docs/concepts/transports.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: "Transports"
  3 | description: "Learn about MCP's communication mechanisms"
  4 | ---
  5 | 
  6 | Transports in the Model Context Protocol (MCP) provide the foundation for communication between clients and servers. A transport handles the underlying mechanics of how messages are sent and received.
  7 | 
  8 | ## Message Format
  9 | 
 10 | MCP uses [JSON-RPC](https://www.jsonrpc.org/) 2.0 as its wire format. The transport layer is responsible for converting MCP protocol messages into JSON-RPC format for transmission and converting received JSON-RPC messages back into MCP protocol messages.
 11 | 
 12 | There are three types of JSON-RPC messages used:
 13 | 
 14 | ### Requests
 15 | ```typescript
 16 | {
 17 |   jsonrpc: "2.0",
 18 |   id: number | string,
 19 |   method: string,
 20 |   params?: object
 21 | }
 22 | ```
 23 | 
 24 | ### Responses
 25 | ```typescript
 26 | {
 27 |   jsonrpc: "2.0",
 28 |   id: number | string,
 29 |   result?: object,
 30 |   error?: {
 31 |     code: number,
 32 |     message: string,
 33 |     data?: unknown
 34 |   }
 35 | }
 36 | ```
 37 | 
 38 | ### Notifications
 39 | ```typescript
 40 | {
 41 |   jsonrpc: "2.0",
 42 |   method: string,
 43 |   params?: object
 44 | }
 45 | ```
 46 | 
 47 | ## Built-in Transport Types
 48 | 
 49 | MCP includes two standard transport implementations:
 50 | 
 51 | ### Standard Input/Output (stdio)
 52 | 
 53 | The stdio transport enables communication through standard input and output streams. This is particularly useful for local integrations and command-line tools.
 54 | 
 55 | Use stdio when:
 56 | - Building command-line tools
 57 | - Implementing local integrations
 58 | - Needing simple process communication
 59 | - Working with shell scripts
 60 | 
 61 | <Tabs>
 62 |   <Tab title="TypeScript (Server)">
 63 |     ```typescript
 64 |     const server = new Server({
 65 |       name: "example-server",
 66 |       version: "1.0.0"
 67 |     }, {
 68 |       capabilities: {}
 69 |     });
 70 | 
 71 |     const transport = new StdioServerTransport();
 72 |     await server.connect(transport);
 73 |     ```
 74 |   </Tab>
 75 |   <Tab title="TypeScript (Client)">
 76 |     ```typescript
 77 |     const client = new Client({
 78 |       name: "example-client",
 79 |       version: "1.0.0"
 80 |     }, {
 81 |       capabilities: {}
 82 |     });
 83 | 
 84 |     const transport = new StdioClientTransport({
 85 |       command: "./server",
 86 |       args: ["--option", "value"]
 87 |     });
 88 |     await client.connect(transport);
 89 |     ```
 90 |   </Tab>
 91 |   <Tab title="Python (Server)">
 92 |     ```python
 93 |     app = Server("example-server")
 94 | 
 95 |     async with stdio_server() as streams:
 96 |         await app.run(
 97 |             streams[0],
 98 |             streams[1],
 99 |             app.create_initialization_options()
100 |         )
101 |     ```
102 |   </Tab>
103 |   <Tab title="Python (Client)">
104 |     ```python
105 |     params = StdioServerParameters(
106 |         command="./server",
107 |         args=["--option", "value"]
108 |     )
109 | 
110 |     async with stdio_client(params) as streams:
111 |         async with ClientSession(streams[0], streams[1]) as session:
112 |             await session.initialize()
113 |     ```
114 |   </Tab>
115 | </Tabs>
116 | 
117 | ### Server-Sent Events (SSE)
118 | 
119 | SSE transport enables server-to-client streaming with HTTP POST requests for client-to-server communication.
120 | 
121 | Use SSE when:
122 | - Only server-to-client streaming is needed
123 | - Working with restricted networks
124 | - Implementing simple updates
125 | 
126 | <Tabs>
127 |   <Tab title="TypeScript (Server)">
128 |     ```typescript
129 |     import express from "express";
130 |     
131 |     const app = express();
132 |     
133 |     const server = new Server({
134 |       name: "example-server",
135 |       version: "1.0.0"
136 |     }, {
137 |       capabilities: {}
138 |     });
139 |     
140 |     let transport: SSEServerTransport | null = null;
141 | 
142 |     app.get("/sse", (req, res) => {
143 |       transport = new SSEServerTransport("/messages", res);
144 |       server.connect(transport);
145 |     });
146 | 
147 |     app.post("/messages", (req, res) => {
148 |       if (transport) {
149 |         transport.handlePostMessage(req, res);
150 |       }
151 |     });
152 | 
153 |     app.listen(3000);
154 |     ```
155 |   </Tab>
156 |   <Tab title="TypeScript (Client)">
157 |     ```typescript
158 |     const client = new Client({
159 |       name: "example-client",
160 |       version: "1.0.0"
161 |     }, {
162 |       capabilities: {}
163 |     });
164 | 
165 |     const transport = new SSEClientTransport(
166 |       new URL("http://localhost:3000/sse")
167 |     );
168 |     await client.connect(transport);
169 |     ```
170 |   </Tab>
171 |   <Tab title="Python (Server)">
172 |     ```python
173 |     from mcp.server.sse import SseServerTransport
174 |     from starlette.applications import Starlette
175 |     from starlette.routing import Route
176 | 
177 |     app = Server("example-server")
178 |     sse = SseServerTransport("/messages")
179 | 
180 |     async def handle_sse(scope, receive, send):
181 |         async with sse.connect_sse(scope, receive, send) as streams:
182 |             await app.run(streams[0], streams[1], app.create_initialization_options())
183 | 
184 |     async def handle_messages(scope, receive, send):
185 |         await sse.handle_post_message(scope, receive, send)
186 | 
187 |     starlette_app = Starlette(
188 |         routes=[
189 |             Route("/sse", endpoint=handle_sse),
190 |             Route("/messages", endpoint=handle_messages, methods=["POST"]),
191 |         ]
192 |     )
193 |     ```
194 |   </Tab>
195 |   <Tab title="Python (Client)">
196 |     ```python
197 |     async with sse_client("http://localhost:8000/sse") as streams:
198 |         async with ClientSession(streams[0], streams[1]) as session:
199 |             await session.initialize()
200 |     ```
201 |   </Tab>
202 | </Tabs>
203 | 
204 | ## Custom Transports
205 | 
206 | MCP makes it easy to implement custom transports for specific needs. Any transport implementation just needs to conform to the Transport interface:
207 | 
208 | You can implement custom transports for:
209 | - Custom network protocols
210 | - Specialized communication channels
211 | - Integration with existing systems
212 | - Performance optimization
213 | 
214 | <Tabs>
215 |   <Tab title="TypeScript">
216 |     ```typescript
217 |     interface Transport {
218 |       // Start processing messages
219 |       start(): Promise<void>;
220 | 
221 |       // Send a JSON-RPC message
222 |       send(message: JSONRPCMessage): Promise<void>;
223 | 
224 |       // Close the connection
225 |       close(): Promise<void>;
226 | 
227 |       // Callbacks
228 |       onclose?: () => void;
229 |       onerror?: (error: Error) => void;
230 |       onmessage?: (message: JSONRPCMessage) => void;
231 |     }
232 |     ```
233 |   </Tab>
234 |   <Tab title="Python">
235 |     Note that while MCP Servers are often implemented with asyncio, we recommend
236 |     implementing low-level interfaces like transports with `anyio` for wider compatibility.
237 |     ```python
238 |     @contextmanager
239 |     async def create_transport(
240 |         read_stream: MemoryObjectReceiveStream[JSONRPCMessage | Exception],
241 |         write_stream: MemoryObjectSendStream[JSONRPCMessage]
242 |     ):
243 |         """
244 |         Transport interface for MCP.
245 | 
246 |         Args:
247 |             read_stream: Stream to read incoming messages from
248 |             write_stream: Stream to write outgoing messages to
249 |         """
250 |         async with anyio.create_task_group() as tg:
251 |             try:
252 |                 # Start processing messages
253 |                 tg.start_soon(lambda: process_messages(read_stream))
254 | 
255 |                 # Send messages
256 |                 async with write_stream:
257 |                     yield write_stream
258 | 
259 |             except Exception as exc:
260 |                 # Handle errors
261 |                 raise exc
262 |             finally:
263 |                 # Clean up
264 |                 tg.cancel_scope.cancel()
265 |                 await write_stream.aclose()
266 |                 await read_stream.aclose()
267 |     ```
268 |   </Tab>
269 | </Tabs>
270 | 
271 | ## Error Handling
272 | 
273 | Transport implementations should handle various error scenarios:
274 | 
275 | 1. Connection errors
276 | 2. Message parsing errors
277 | 3. Protocol errors
278 | 4. Network timeouts
279 | 5. Resource cleanup
280 | 
281 | Example error handling:
282 | 
283 | <Tabs>
284 |   <Tab title="TypeScript">
285 |     ```typescript
286 |     class ExampleTransport implements Transport {
287 |       async start() {
288 |         try {
289 |           // Connection logic
290 |         } catch (error) {
291 |           this.onerror?.(new Error(`Failed to connect: ${error}`));
292 |           throw error;
293 |         }
294 |       }
295 | 
296 |       async send(message: JSONRPCMessage) {
297 |         try {
298 |           // Sending logic
299 |         } catch (error) {
300 |           this.onerror?.(new Error(`Failed to send message: ${error}`));
301 |           throw error;
302 |         }
303 |       }
304 |     }
305 |     ```
306 |   </Tab>
307 |   <Tab title="Python">
308 |   Note that while MCP Servers are often implemented with asyncio, we recommend
309 |   implementing low-level interfaces like transports with `anyio` for wider compatibility.
310 |     ```python
311 |     @contextmanager
312 |     async def example_transport(scope: Scope, receive: Receive, send: Send):
313 |         try:
314 |             # Create streams for bidirectional communication
315 |             read_stream_writer, read_stream = anyio.create_memory_object_stream(0)
316 |             write_stream, write_stream_reader = anyio.create_memory_object_stream(0)
317 | 
318 |             async def message_handler():
319 |                 try:
320 |                     async with read_stream_writer:
321 |                         # Message handling logic
322 |                         pass
323 |                 except Exception as exc:
324 |                     logger.error(f"Failed to handle message: {exc}")
325 |                     raise exc
326 | 
327 |             async with anyio.create_task_group() as tg:
328 |                 tg.start_soon(message_handler)
329 |                 try:
330 |                     # Yield streams for communication
331 |                     yield read_stream, write_stream
332 |                 except Exception as exc:
333 |                     logger.error(f"Transport error: {exc}")
334 |                     raise exc
335 |                 finally:
336 |                     tg.cancel_scope.cancel()
337 |                     await write_stream.aclose()
338 |                     await read_stream.aclose()
339 |         except Exception as exc:
340 |             logger.error(f"Failed to initialize transport: {exc}")
341 |             raise exc
342 |     ```
343 |   </Tab>
344 | </Tabs>
345 | 
346 | ## Best Practices
347 | 
348 | When implementing or using MCP transport:
349 | 
350 | 1. Handle connection lifecycle properly
351 | 2. Implement proper error handling
352 | 3. Clean up resources on connection close
353 | 4. Use appropriate timeouts
354 | 5. Validate messages before sending
355 | 6. Log transport events for debugging
356 | 7. Implement reconnection logic when appropriate
357 | 8. Handle backpressure in message queues
358 | 9. Monitor connection health
359 | 10. Implement proper security measures
360 | 
361 | ## Security Considerations
362 | 
363 | When implementing transport:
364 | 
365 | ### Authentication and Authorization
366 | - Implement proper authentication mechanisms
367 | - Validate client credentials
368 | - Use secure token handling
369 | - Implement authorization checks
370 | 
371 | ### Data Security
372 | - Use TLS for network transport
373 | - Encrypt sensitive data
374 | - Validate message integrity
375 | - Implement message size limits
376 | - Sanitize input data
377 | 
378 | ### Network Security
379 | - Implement rate limiting
380 | - Use appropriate timeouts
381 | - Handle denial of service scenarios
382 | - Monitor for unusual patterns
383 | - Implement proper firewall rules
384 | 
385 | ## Debugging Transport
386 | 
387 | Tips for debugging transport issues:
388 | 
389 | 1. Enable debug logging
390 | 2. Monitor message flow
391 | 3. Check connection states
392 | 4. Validate message formats
393 | 5. Test error scenarios
394 | 6. Use network analysis tools
395 | 7. Implement health checks
396 | 8. Monitor resource usage
397 | 9. Test edge cases
398 | 10. Use proper error tracking
399 | 


--------------------------------------------------------------------------------
/docs/tools/debugging.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Debugging
  3 | description: A comprehensive guide to debugging Model Context Protocol (MCP) integrations
  4 | ---
  5 | 
  6 | Effective debugging is essential when developing MCP servers or integrating them with applications. This guide covers the debugging tools and approaches available in the MCP ecosystem.
  7 | 
  8 | <Info>
  9 |   This guide is for macOS. Guides for other platforms are coming soon.
 10 | </Info>
 11 | 
 12 | ## Debugging tools overview
 13 | 
 14 | MCP provides several tools for debugging at different levels:
 15 | 
 16 | 1. **MCP Inspector**
 17 |    - Interactive debugging interface
 18 |    - Direct server testing
 19 |    - See the [Inspector guide](/docs/tools/inspector) for details
 20 | 
 21 | 2. **Claude Desktop Developer Tools**
 22 |    - Integration testing
 23 |    - Log collection
 24 |    - Chrome DevTools integration
 25 | 
 26 | 3. **Server Logging**
 27 |    - Custom logging implementations
 28 |    - Error tracking
 29 |    - Performance monitoring
 30 | 
 31 | ## Debugging in Claude Desktop
 32 | 
 33 | ### Checking server status
 34 | 
 35 | The Claude.app interface provides basic server status information:
 36 | 
 37 | 1. Click the <img src="/images/claude-desktop-mcp-plug-icon.svg" style={{display: 'inline', margin: 0, height: '1.3em'}} /> icon to view:
 38 |    - Connected servers
 39 |    - Available prompts and resources
 40 | 
 41 | 2. Click the <img src="/images/claude-desktop-mcp-hammer-icon.svg" style={{display: 'inline', margin: 0, height: '1.3em'}} /> icon to view:
 42 |    - Tools made available to the model
 43 | 
 44 | ### Viewing logs
 45 | 
 46 | Review detailed MCP logs from Claude Desktop:
 47 | 
 48 | ```bash
 49 | # Follow logs in real-time
 50 | tail -n 20 -F ~/Library/Logs/Claude/mcp*.log
 51 | ```
 52 | 
 53 | The logs capture:
 54 | - Server connection events
 55 | - Configuration issues
 56 | - Runtime errors
 57 | - Message exchanges
 58 | 
 59 | ### Using Chrome DevTools
 60 | 
 61 | Access Chrome's developer tools inside Claude Desktop to investigate client-side errors:
 62 | 
 63 | 1. Create a `developer_settings.json` file with `allowDevTools` set to true:
 64 | 
 65 | ```bash
 66 | echo '{"allowDevTools": true}' > ~/Library/Application\ Support/Claude/developer_settings.json
 67 | ```
 68 | 
 69 | 2. Open DevTools: `Command-Option-Shift-i`
 70 | 
 71 | Note: You'll see two DevTools windows:
 72 | - Main content window
 73 | - App title bar window
 74 | 
 75 | Use the Console panel to inspect client-side errors.
 76 | 
 77 | Use the Network panel to inspect:
 78 | - Message payloads
 79 | - Connection timing
 80 | 
 81 | ## Common issues
 82 | 
 83 | ### Working directory
 84 | 
 85 | When using MCP servers with Claude Desktop:
 86 | 
 87 | - The working directory for servers launched via `claude_desktop_config.json` may be undefined (like `/` on macOS) since Claude Desktop could be started from anywhere
 88 | - Always use absolute paths in your configuration and `.env` files to ensure reliable operation
 89 | - For testing servers directly via command line, the working directory will be where you run the command
 90 | 
 91 | For example in `claude_desktop_config.json`, use:
 92 | ```json
 93 | {
 94 |   "command": "npx",
 95 |   "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username/data"]
 96 | }
 97 | ```
 98 | Instead of relative paths like `./data`
 99 | 
100 | ### Environment variables
101 | 
102 | MCP servers inherit only a subset of environment variables automatically, like `USER`, `HOME`, and `PATH`.
103 | 
104 | To override the default variables or provide your own, you can specify an `env` key in `claude_desktop_config.json`:
105 | 
106 | ```json
107 | {
108 |   "myserver": {
109 |     "command": "mcp-server-myapp",
110 |     "env": {
111 |       "MYAPP_API_KEY": "some_key",
112 |     }
113 |   }
114 | }
115 | ```
116 | 
117 | ### Server initialization
118 | 
119 | Common initialization problems:
120 | 
121 | 1. **Path Issues**
122 |    - Incorrect server executable path
123 |    - Missing required files
124 |    - Permission problems
125 |    - Try using an absolute path for `command`
126 | 
127 | 2. **Configuration Errors**
128 |    - Invalid JSON syntax
129 |    - Missing required fields
130 |    - Type mismatches
131 | 
132 | 3. **Environment Problems**
133 |    - Missing environment variables
134 |    - Incorrect variable values
135 |    - Permission restrictions
136 | 
137 | ### Connection problems
138 | 
139 | When servers fail to connect:
140 | 
141 | 1. Check Claude Desktop logs
142 | 2. Verify server process is running
143 | 3. Test standalone with [Inspector](/docs/tools/inspector)
144 | 4. Verify protocol compatibility
145 | 
146 | ## Implementing logging
147 | 
148 | ### Server-side logging
149 | 
150 | When building a server that uses the local stdio [transport](/docs/concepts/transports), all messages logged to stderr (standard error) will be captured by the host application (e.g., Claude Desktop) automatically.
151 | 
152 | <Warning>
153 |   Local MCP servers should not log messages to stdout (standard out), as this will interfere with protocol operation.
154 | </Warning>
155 | 
156 | For all [transports](/docs/concepts/transports), you can also provide logging to the client by sending a log message notification:
157 | 
158 | <Tabs>
159 |   <Tab title="Python">
160 |     ```python
161 |     server.request_context.session.send_log_message(
162 |       level="info",
163 |       data="Server started successfully",
164 |     )
165 |     ```
166 |   </Tab>
167 |   <Tab title="TypeScript">
168 |     ```typescript
169 |     server.sendLoggingMessage({
170 |       level: "info",
171 |       data: "Server started successfully",
172 |     });
173 |     ```
174 |   </Tab>
175 | </Tabs>
176 | 
177 | Important events to log:
178 | - Initialization steps
179 | - Resource access
180 | - Tool execution
181 | - Error conditions
182 | - Performance metrics
183 | 
184 | ### Client-side logging
185 | 
186 | In client applications:
187 | 
188 | 1. Enable debug logging
189 | 2. Monitor network traffic
190 | 3. Track message exchanges
191 | 4. Record error states
192 | 
193 | ## Debugging workflow
194 | 
195 | ### Development cycle
196 | 
197 | 1. Initial Development
198 |    - Use [Inspector](/docs/tools/inspector) for basic testing
199 |    - Implement core functionality
200 |    - Add logging points
201 | 
202 | 2. Integration Testing
203 |    - Test in Claude Desktop
204 |    - Monitor logs
205 |    - Check error handling
206 | 
207 | ### Testing changes
208 | 
209 | To test changes efficiently:
210 | 
211 | - **Configuration changes**: Restart Claude Desktop
212 | - **Server code changes**: Use Command-R to reload
213 | - **Quick iteration**: Use [Inspector](/docs/tools/inspector) during development
214 | 
215 | ## Best practices
216 | 
217 | ### Logging strategy
218 | 
219 | 1. **Structured Logging**
220 |    - Use consistent formats
221 |    - Include context
222 |    - Add timestamps
223 |    - Track request IDs
224 | 
225 | 2. **Error Handling**
226 |    - Log stack traces
227 |    - Include error context
228 |    - Track error patterns
229 |    - Monitor recovery
230 | 
231 | 3. **Performance Tracking**
232 |    - Log operation timing
233 |    - Monitor resource usage
234 |    - Track message sizes
235 |    - Measure latency
236 | 
237 | ### Security considerations
238 | 
239 | When debugging:
240 | 
241 | 1. **Sensitive Data**
242 |    - Sanitize logs
243 |    - Protect credentials
244 |    - Mask personal information
245 | 
246 | 2. **Access Control**
247 |    - Verify permissions
248 |    - Check authentication
249 |    - Monitor access patterns
250 | 
251 | ## Getting help
252 | 
253 | When encountering issues:
254 | 
255 | 1. **First Steps**
256 |    - Check server logs
257 |    - Test with [Inspector](/docs/tools/inspector)
258 |    - Review configuration
259 |    - Verify environment
260 | 
261 | 2. **Support Channels**
262 |    - GitHub issues
263 |    - GitHub discussions
264 | 
265 | 3. **Providing Information**
266 |    - Log excerpts
267 |    - Configuration files
268 |    - Steps to reproduce
269 |    - Environment details
270 | 
271 | ## Next steps
272 | 
273 | <CardGroup cols={2}>
274 |   <Card
275 |     title="MCP Inspector"
276 |     icon="magnifying-glass"
277 |     href="/docs/tools/inspector"
278 |   >
279 |     Learn to use the MCP Inspector
280 |   </Card>
281 | </CardGroup>
282 | 


--------------------------------------------------------------------------------
/docs/tools/inspector.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Inspector
  3 | description: In-depth guide to using the MCP Inspector for testing and debugging Model Context Protocol servers
  4 | ---
  5 | 
  6 | The [MCP Inspector](https://github.com/modelcontextprotocol/inspector) is an interactive developer tool for testing and debugging MCP servers. While the [Debugging Guide](/docs/tools/debugging) covers the Inspector as part of the overall debugging toolkit, this document provides a detailed exploration of the Inspector's features and capabilities.
  7 | 
  8 | ## Getting started
  9 | 
 10 | ### Installation and basic usage
 11 | 
 12 | The Inspector runs directly through `npx` without requiring installation:
 13 | 
 14 | 
 15 | ```bash
 16 | npx @modelcontextprotocol/inspector <command>
 17 | ```
 18 | 
 19 | ```bash
 20 | npx @modelcontextprotocol/inspector <command> <arg1> <arg2>
 21 | ```
 22 | 
 23 | #### Inspecting servers from NPM or PyPi
 24 | 
 25 | A common way to start server packages from [NPM](https://npmjs.com) or [PyPi](https://pypi.com).
 26 | 
 27 | <Tabs>
 28 | 
 29 |   <Tab title="NPM package">
 30 |   ```bash
 31 |   npx -y @modelcontextprotocol/inspector npx <package-name> <args>
 32 |   # For example
 33 |   npx -y @modelcontextprotocol/inspector npx server-postgres postgres://127.0.0.1/testdb
 34 |   ```
 35 |   </Tab>
 36 | 
 37 |   <Tab title="PyPi package">
 38 |   ```bash
 39 |   npx @modelcontextprotocol/inspector uvx <package-name> <args>
 40 |   # For example
 41 |   npx @modelcontextprotocol/inspector uvx mcp-server-git --repository ~/code/mcp/servers.git
 42 |   ```
 43 |   </Tab>
 44 | </Tabs>
 45 | 
 46 | #### Inspecting locally developed servers
 47 | 
 48 | To inspect servers locally developed or downloaded as a repository, the most common
 49 | way is:
 50 | 
 51 | <Tabs>
 52 |   <Tab title="TypeScript">
 53 |   ```bash
 54 |   npx @modelcontextprotocol/inspector node path/to/server/index.js args...
 55 |   ```
 56 |   </Tab>
 57 |   <Tab title="Python">
 58 |   ```bash
 59 |   npx @modelcontextprotocol/inspector \
 60 |     uv \
 61 |     --directory path/to/server \
 62 |     run \
 63 |     package-name \
 64 |     args...
 65 |   ```
 66 |   </Tab>
 67 | </Tabs>
 68 | 
 69 | Please carefully read any attached README for the most accurate instructions.
 70 | 
 71 | ## Feature overview
 72 | 
 73 | <Frame caption="The MCP Inspector interface">
 74 |   <img src="/images/mcp-inspector.png" />
 75 | </Frame>
 76 | 
 77 | The Inspector provides several features for interacting with your MCP server:
 78 | 
 79 | ### Server connection pane
 80 | - Allows selecting the [transport](/docs/concepts/transports) for connecting to the server
 81 | - For local servers, supports customizing the command-line arguments and environment
 82 | 
 83 | ### Resources tab
 84 | - Lists all available resources
 85 | - Shows resource metadata (MIME types, descriptions)
 86 | - Allows resource content inspection
 87 | - Supports subscription testing
 88 | 
 89 | ### Prompts tab
 90 | - Displays available prompt templates
 91 | - Shows prompt arguments and descriptions
 92 | - Enables prompt testing with custom arguments
 93 | - Previews generated messages
 94 | 
 95 | ### Tools tab
 96 | - Lists available tools
 97 | - Shows tool schemas and descriptions
 98 | - Enables tool testing with custom inputs
 99 | - Displays tool execution results
100 | 
101 | ### Notifications pane
102 | - Presents all logs recorded from the server
103 | - Shows notifications received from the server
104 | 
105 | ## Best practices
106 | 
107 | ### Development workflow
108 | 
109 | 1. Start Development
110 |    - Launch Inspector with your server
111 |    - Verify basic connectivity
112 |    - Check capability negotiation
113 | 
114 | 2. Iterative testing
115 |    - Make server changes
116 |    - Rebuild the server
117 |    - Reconnect the Inspector
118 |    - Test affected features
119 |    - Monitor messages
120 | 
121 | 3. Test edge cases
122 |    - Invalid inputs
123 |    - Missing prompt arguments
124 |    - Concurrent operations
125 |    - Verify error handling and error responses
126 | 
127 | ## Next steps
128 | 
129 | <CardGroup cols={2}>
130 |     <Card
131 |         title="Inspector Repository"
132 |         icon="github"
133 |         href="https://github.com/modelcontextprotocol/inspector"
134 |     >
135 |         Check out the MCP Inspector source code
136 |     </Card>
137 | 
138 |     <Card
139 |         title="Debugging Guide"
140 |         icon="bug"
141 |         href="/docs/tools/debugging"
142 |     >
143 |         Learn about broader debugging strategies
144 |     </Card>
145 | </CardGroup>
146 | 


--------------------------------------------------------------------------------
/examples.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Example Servers 
  3 | description: 'A list of example servers and implementations'
  4 | ---
  5 | 
  6 | This page showcases various Model Context Protocol (MCP) servers that demonstrate the protocol's capabilities and versatility. These servers enable Large Language Models (LLMs) to securely access tools and data sources.
  7 | 
  8 | ## Reference implementations
  9 | 
 10 | These official reference servers demonstrate core MCP features and SDK usage:
 11 | 
 12 | ### Data and file systems
 13 | - **[Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)** - Secure file operations with configurable access controls
 14 | - **[PostgreSQL](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres)** - Read-only database access with schema inspection capabilities
 15 | - **[SQLite](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite)** - Database interaction and business intelligence features
 16 | - **[Google Drive](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive)** - File access and search capabilities for Google Drive
 17 | 
 18 | ### Development tools
 19 | - **[Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git)** - Tools to read, search, and manipulate Git repositories
 20 | - **[GitHub](https://github.com/modelcontextprotocol/servers/tree/main/src/github)** - Repository management, file operations, and GitHub API integration
 21 | - **[GitLab](https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab)** - GitLab API integration enabling project management
 22 | - **[Sentry](https://github.com/modelcontextprotocol/servers/tree/main/src/sentry)** - Retrieving and analyzing issues from Sentry.io
 23 | 
 24 | ### Web and browser automation
 25 | - **[Brave Search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search)** - Web and local search using Brave's Search API
 26 | - **[Fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch)** - Web content fetching and conversion optimized for LLM usage
 27 | - **[Puppeteer](https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer)** - Browser automation and web scraping capabilities
 28 | 
 29 | ### Productivity and communication
 30 | - **[Slack](https://github.com/modelcontextprotocol/servers/tree/main/src/slack)** - Channel management and messaging capabilities
 31 | - **[Google Maps](https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps)** - Location services, directions, and place details
 32 | - **[Memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory)** - Knowledge graph-based persistent memory system
 33 | 
 34 | ### AI and specialized tools
 35 | - **[EverArt](https://github.com/modelcontextprotocol/servers/tree/main/src/everart)** - AI image generation using various models
 36 | - **[Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)** - Dynamic problem-solving through thought sequences
 37 | - **[AWS KB Retrieval](https://github.com/modelcontextprotocol/servers/tree/main/src/aws-kb-retrieval-server)** - Retrieval from AWS Knowledge Base using Bedrock Agent Runtime
 38 | 
 39 | ## Official integrations
 40 | 
 41 | These MCP servers are maintained by companies for their platforms:
 42 | 
 43 | - **[Axiom](https://github.com/axiomhq/mcp-server-axiom)** - Query and analyze logs, traces, and event data using natural language
 44 | - **[Browserbase](https://github.com/browserbase/mcp-server-browserbase)** - Automate browser interactions in the cloud
 45 | - **[Cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)** - Deploy and manage resources on the Cloudflare developer platform
 46 | - **[E2B](https://github.com/e2b-dev/mcp-server)** - Execute code in secure cloud sandboxes
 47 | - **[Neon](https://github.com/neondatabase/mcp-server-neon)** - Interact with the Neon serverless Postgres platform
 48 | - **[Obsidian Markdown Notes](https://github.com/calclavia/mcp-obsidian)** - Read and search through Markdown notes in Obsidian vaults
 49 | - **[Qdrant](https://github.com/qdrant/mcp-server-qdrant/)** - Implement semantic memory using the Qdrant vector search engine
 50 | - **[Raygun](https://github.com/MindscapeHQ/mcp-server-raygun)** - Access crash reporting and monitoring data
 51 | - **[Search1API](https://github.com/fatwang2/search1api-mcp)** - Unified API for search, crawling, and sitemaps
 52 | - **[Stripe](https://github.com/stripe/agent-toolkit)** - Interact with the Stripe API
 53 | - **[Tinybird](https://github.com/tinybirdco/mcp-tinybird)** - Interface with the Tinybird serverless ClickHouse platform
 54 | - **[Weaviate](https://github.com/weaviate/mcp-server-weaviate)** - Enable Agentic RAG through your Weaviate collection(s)
 55 | 
 56 | ## Community highlights
 57 | 
 58 | A growing ecosystem of community-developed servers extends MCP's capabilities:
 59 | 
 60 | - **[Docker](https://github.com/ckreiling/mcp-server-docker)** - Manage containers, images, volumes, and networks
 61 | - **[Kubernetes](https://github.com/Flux159/mcp-server-kubernetes)** - Manage pods, deployments, and services
 62 | - **[Linear](https://github.com/jerhadf/linear-mcp-server)** - Project management and issue tracking
 63 | - **[Snowflake](https://github.com/datawiz168/mcp-snowflake-service)** - Interact with Snowflake databases
 64 | - **[Spotify](https://github.com/varunneal/spotify-mcp)** - Control Spotify playback and manage playlists
 65 | - **[Todoist](https://github.com/abhiz123/todoist-mcp-server)** - Task management integration
 66 | 
 67 | > **Note:** Community servers are untested and should be used at your own risk. They are not affiliated with or endorsed by Anthropic.
 68 | 
 69 | For a complete list of community servers, visit the [MCP Servers Repository](https://github.com/modelcontextprotocol/servers).
 70 | 
 71 | ## Getting started
 72 | 
 73 | ### Using reference servers
 74 | 
 75 | TypeScript-based servers can be used directly with `npx`:
 76 | 
 77 | ```bash
 78 | npx -y @modelcontextprotocol/server-memory
 79 | ```
 80 | 
 81 | Python-based servers can be used with `uvx` (recommended) or `pip`:
 82 | 
 83 | ```bash
 84 | # Using uvx
 85 | uvx mcp-server-git
 86 | 
 87 | # Using pip
 88 | pip install mcp-server-git
 89 | python -m mcp_server_git
 90 | ```
 91 | 
 92 | ### Configuring with Claude
 93 | 
 94 | To use an MCP server with Claude, add it to your configuration:
 95 | 
 96 | ```json
 97 | {
 98 |   "mcpServers": {
 99 |     "memory": {
100 |       "command": "npx",
101 |       "args": ["-y", "@modelcontextprotocol/server-memory"]
102 |     },
103 |     "filesystem": {
104 |       "command": "npx",
105 |       "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"]
106 |     },
107 |     "github": {
108 |       "command": "npx",
109 |       "args": ["-y", "@modelcontextprotocol/server-github"],
110 |       "env": {
111 |         "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
112 |       }
113 |     }
114 |   }
115 | }
116 | ```
117 | 
118 | ## Additional resources
119 | 
120 | - [MCP Servers Repository](https://github.com/modelcontextprotocol/servers) - Complete collection of reference implementations and community servers
121 | - [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - Curated list of MCP servers
122 | - [MCP CLI](https://github.com/wong2/mcp-cli) - Command-line inspector for testing MCP servers
123 | - [MCP Get](https://mcp-get.com) - Tool for installing and managing MCP servers
124 | - [Supergateway](https://github.com/supercorp-ai/supergateway) - Run MCP stdio servers over SSE
125 | 
126 | Visit our [GitHub Discussions](https://github.com/orgs/modelcontextprotocol/discussions) to engage with the MCP community.
127 | 


--------------------------------------------------------------------------------
/favicon.svg:
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
/images/available-mcp-tools.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/available-mcp-tools.png


--------------------------------------------------------------------------------
/images/claude-desktop-mcp-hammer-icon.svg:
--------------------------------------------------------------------------------
1 | <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M31.4175 14L22.985 5.51002C20.7329 3.26243 17.6811 2.00012 14.4993 2.00012C11.3176 2.00012 8.26581 3.26243 6.01372 5.51002L6.00247 5.52127L4.28122 7.30002C4.10292 7.49163 4.00685 7.74552 4.01364 8.00717C4.02043 8.26883 4.12954 8.51739 4.31754 8.6995C4.50554 8.88161 4.75745 8.98276 5.01919 8.98122C5.28092 8.97968 5.53163 8.87558 5.71747 8.69127L7.43372 6.91877C8.12421 6.22842 8.91217 5.64303 9.77247 5.18127L15.585 11L3.58497 23C3.39921 23.1857 3.25185 23.4062 3.15131 23.6489C3.05077 23.8916 2.99902 24.1517 2.99902 24.4144C2.99902 24.6771 3.05077 24.9372 3.15131 25.1799C3.25185 25.4225 3.39921 25.643 3.58497 25.8288L6.17122 28.415C6.35694 28.6008 6.57744 28.7481 6.82012 28.8487C7.06281 28.9492 7.32291 29.001 7.5856 29.001C7.84828 29.001 8.10839 28.9492 8.35107 28.8487C8.59375 28.7481 8.81425 28.6008 8.99997 28.415L21 16.415L22.7925 18.2075L25 20.4125C25.1857 20.5983 25.4062 20.7456 25.6489 20.8462C25.8916 20.9467 26.1517 20.9985 26.4143 20.9985C26.677 20.9985 26.9371 20.9467 27.1798 20.8462C27.4225 20.7456 27.643 20.5983 27.8287 20.4125L31.415 16.8263C31.7897 16.4516 32.0005 15.9436 32.0009 15.4137C32.0014 14.8838 31.7915 14.3753 31.4175 14ZM7.58497 27L4.99997 24.4138L13.5 15.9138L16.085 18.5L7.58497 27ZM20.2925 14.29L17.5 17.0838L14.9137 14.5L17.7075 11.7063C17.8004 11.6134 17.8742 11.5031 17.9245 11.3817C17.9749 11.2603 18.0008 11.1302 18.0008 10.9988C18.0008 10.8673 17.9749 10.7372 17.9245 10.6158C17.8742 10.4944 17.8004 10.3841 17.7075 10.2913L11.79 4.37502C13.4996 3.89351 15.3067 3.87606 17.0253 4.32445C18.744 4.77284 20.3122 5.67089 21.5687 6.92627L27.0962 12.49L23.5 16.0825L21.7075 14.29C21.6146 14.197 21.5043 14.1233 21.3829 14.073C21.2615 14.0226 21.1314 13.9967 21 13.9967C20.8686 13.9967 20.7384 14.0226 20.617 14.073C20.4956 14.1233 20.3853 14.197 20.2925 14.29ZM26.4175 18.9975L24.9175 17.4975L28.5 13.9063L30 15.4063L26.4175 18.9975Z" fill="#343330"/>
3 | </svg>
4 | 


--------------------------------------------------------------------------------
/images/claude-desktop-mcp-plug-icon.svg:
--------------------------------------------------------------------------------
1 | <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M18.7076 17.2926C18.6147 17.1996 18.5044 17.1258 18.383 17.0755C18.2616 17.0252 18.1315 16.9993 18.0001 16.9993C17.8687 16.9993 17.7385 17.0252 17.6171 17.0755C17.4957 17.1258 17.3854 17.1996 17.2926 17.2926L15.0001 19.5863L12.4138 17.0001L14.7076 14.7076C14.8952 14.5199 15.0006 14.2654 15.0006 14.0001C15.0006 13.7347 14.8952 13.4802 14.7076 13.2926C14.5199 13.1049 14.2654 12.9995 14.0001 12.9995C13.7347 12.9995 13.4802 13.1049 13.2926 13.2926L11.0001 15.5863L8.70757 13.2926C8.51993 13.1049 8.26543 12.9995 8.00007 12.9995C7.7347 12.9995 7.48021 13.1049 7.29257 13.2926C7.10493 13.4802 6.99951 13.7347 6.99951 14.0001C6.99951 14.2654 7.10493 14.5199 7.29257 14.7076L8.08632 15.5001L5.17132 18.4138C4.79979 18.7852 4.50507 19.2262 4.30399 19.7116C4.10292 20.197 3.99942 20.7172 3.99942 21.2426C3.99942 21.7679 4.10292 22.2881 4.30399 22.7735C4.50507 23.2589 4.79979 23.6999 5.17132 24.0713L5.84382 24.7426L2.29257 28.2926C2.19966 28.3855 2.12596 28.4958 2.07567 28.6172C2.02539 28.7386 1.99951 28.8687 1.99951 29.0001C1.99951 29.1314 2.02539 29.2616 2.07567 29.3829C2.12596 29.5043 2.19966 29.6146 2.29257 29.7076C2.48021 29.8952 2.7347 30.0006 3.00007 30.0006C3.13146 30.0006 3.26157 29.9747 3.38296 29.9244C3.50436 29.8742 3.61466 29.8005 3.70757 29.7076L7.25757 26.1563L7.92882 26.8288C8.30026 27.2003 8.74126 27.4951 9.22662 27.6961C9.71198 27.8972 10.2322 28.0007 10.7576 28.0007C11.2829 28.0007 11.8032 27.8972 12.2885 27.6961C12.7739 27.4951 13.2149 27.2003 13.5863 26.8288L16.5001 23.9138L17.2926 24.7076C17.3855 24.8005 17.4958 24.8742 17.6172 24.9244C17.7386 24.9747 17.8687 25.0006 18.0001 25.0006C18.1315 25.0006 18.2616 24.9747 18.383 24.9244C18.5044 24.8742 18.6147 24.8005 18.7076 24.7076C18.8005 24.6146 18.8742 24.5043 18.9245 24.3829C18.9747 24.2616 19.0006 24.1314 19.0006 24.0001C19.0006 23.8687 18.9747 23.7386 18.9245 23.6172C18.8742 23.4958 18.8005 23.3855 18.7076 23.2926L16.4138 21.0001L18.7076 18.7076C18.8005 18.6147 18.8743 18.5044 18.9246 18.383C18.975 18.2616 19.0009 18.1315 19.0009 18.0001C19.0009 17.8686 18.975 17.7385 18.9246 17.6171C18.8743 17.4957 18.8005 17.3854 18.7076 17.2926ZM12.1713 25.4176C11.7963 25.7923 11.2878 26.0029 10.7576 26.0029C10.2274 26.0029 9.71885 25.7923 9.34382 25.4176L6.58632 22.6563C6.21153 22.2813 6.00099 21.7728 6.00099 21.2426C6.00099 20.7123 6.21153 20.2038 6.58632 19.8288L9.50007 16.9138L15.0863 22.5001L12.1713 25.4176ZM29.7076 2.29255C29.6147 2.19958 29.5044 2.12582 29.383 2.07549C29.2616 2.02517 29.1315 1.99927 29.0001 1.99927C28.8687 1.99927 28.7385 2.02517 28.6171 2.07549C28.4957 2.12582 28.3854 2.19958 28.2926 2.29255L24.7426 5.8438L24.0713 5.1713C23.3203 4.42249 22.3031 4.00199 21.2426 4.00199C20.1821 4.00199 19.1648 4.42249 18.4138 5.1713L15.5001 8.0863L14.7076 7.29255C14.5199 7.10491 14.2654 6.9995 14.0001 6.9995C13.7347 6.9995 13.4802 7.10491 13.2926 7.29255C13.1049 7.4802 12.9995 7.73469 12.9995 8.00005C12.9995 8.26542 13.1049 8.51991 13.2926 8.70755L23.2926 18.7076C23.3855 18.8005 23.4958 18.8742 23.6172 18.9244C23.7386 18.9747 23.8687 19.0006 24.0001 19.0006C24.1315 19.0006 24.2616 18.9747 24.383 18.9244C24.5044 18.8742 24.6147 18.8005 24.7076 18.7076C24.8005 18.6146 24.8742 18.5043 24.9245 18.3829C24.9747 18.2616 25.0006 18.1314 25.0006 18.0001C25.0006 17.8687 24.9747 17.7386 24.9245 17.6172C24.8742 17.4958 24.8005 17.3855 24.7076 17.2926L23.9138 16.5001L26.8288 13.5863C27.2003 13.2149 27.4951 12.7739 27.6961 12.2885C27.8972 11.8031 28.0007 11.2829 28.0007 10.7576C28.0007 10.2322 27.8972 9.71197 27.6961 9.22661C27.4951 8.74125 27.2003 8.30025 26.8288 7.9288L26.1563 7.25755L29.7076 3.70755C29.8005 3.61468 29.8743 3.50439 29.9246 3.38299C29.975 3.2616 30.0009 3.13147 30.0009 3.00005C30.0009 2.86864 29.975 2.73851 29.9246 2.61711C29.8743 2.49572 29.8005 2.38543 29.7076 2.29255ZM25.4138 12.1676L22.5001 15.0863L16.9138 9.50005L19.8288 6.5863C20.2039 6.21151 20.7124 6.00098 21.2426 6.00098C21.7728 6.00098 22.2813 6.21151 22.6563 6.5863L25.4138 9.3363C25.6005 9.52214 25.7487 9.74303 25.8498 9.98629C25.9509 10.2295 26.0029 10.4904 26.0029 10.7538C26.0029 11.0172 25.9509 11.2781 25.8498 11.5213C25.7487 11.7646 25.6005 11.9855 25.4138 12.1713V12.1676Z" fill="#343330"/>
3 | </svg>
4 | 


--------------------------------------------------------------------------------
/images/client-claude-cli-python.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/client-claude-cli-python.png


--------------------------------------------------------------------------------
/images/current-weather.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/current-weather.png


--------------------------------------------------------------------------------
/images/hero-dark.svg:
--------------------------------------------------------------------------------
  1 | <svg width="700" height="320" viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  2 | <g clip-path="url(#clip0_2862_30)">
  3 | <rect width="700" height="320" rx="16" fill="url(#paint0_linear_2862_30)"/>
  4 | <path d="M311.889 247.3C283.097 247.215 258.226 231.466 246.292 201.629C234.357 171.793 238.02 134.523 253.414 101.112C282.206 101.197 307.077 116.945 319.011 146.782C330.946 176.619 327.283 213.888 311.889 247.3Z" fill="white"/>
  5 | <path d="M311.889 247.3C283.097 247.215 258.226 231.466 246.292 201.629C234.357 171.793 238.02 134.523 253.414 101.112C282.206 101.197 307.077 116.945 319.011 146.782C330.946 176.619 327.283 213.888 311.889 247.3Z" fill="url(#paint1_radial_2862_30)"/>
  6 | <path d="M311.889 247.3C283.097 247.215 258.226 231.466 246.292 201.629C234.357 171.793 238.02 134.523 253.414 101.112C282.206 101.197 307.077 116.945 319.011 146.782C330.946 176.619 327.283 213.888 311.889 247.3Z" fill="black" fill-opacity="0.5" style="mix-blend-mode:hard-light"/>
  7 | <path d="M311.889 247.3C283.097 247.215 258.226 231.466 246.292 201.629C234.357 171.793 238.02 134.523 253.414 101.112C282.206 101.197 307.077 116.945 319.011 146.782C330.946 176.619 327.283 213.888 311.889 247.3Z" fill="url(#paint2_linear_2862_30)" fill-opacity="0.5" style="mix-blend-mode:hard-light"/>
  8 | <path d="M311.72 247.034C283.108 246.887 258.409 231.208 246.538 201.531C234.656 171.825 238.271 134.702 253.583 101.377C282.195 101.524 306.894 117.203 318.765 146.88C330.647 176.586 327.031 213.709 311.72 247.034Z" stroke="url(#paint3_linear_2862_30)" stroke-opacity="0.05" stroke-width="0.530516"/>
  9 | <path d="M305.839 247.174C343.92 237.419 377.154 210.619 393.585 171.64C410.017 132.661 405.98 90.1988 386.347 56.1934C348.266 65.9477 315.032 92.7486 298.601 131.728C282.169 170.706 286.206 213.168 305.839 247.174Z" fill="white"/>
 10 | <path d="M305.839 247.174C343.92 237.419 377.154 210.619 393.585 171.64C410.017 132.661 405.98 90.1988 386.347 56.1934C348.266 65.9477 315.032 92.7486 298.601 131.728C282.169 170.706 286.206 213.168 305.839 247.174Z" fill="url(#paint4_radial_2862_30)"/>
 11 | <path d="M393.341 171.537C376.971 210.369 343.89 237.091 305.969 246.867C286.462 212.959 282.476 170.663 298.845 131.831C315.215 92.9978 348.295 66.2765 386.217 56.5004C405.724 90.4077 409.71 132.704 393.341 171.537Z" stroke="url(#paint5_linear_2862_30)" stroke-opacity="0.05" stroke-width="0.530516"/>
 12 | <path d="M305.686 246.995C329.749 266.114 361.965 272.832 393.67 262.129C425.376 251.426 449.499 225.691 461.03 194.556C436.967 175.437 404.751 168.719 373.045 179.422C341.34 190.125 317.217 215.86 305.686 246.995Z" fill="white"/>
 13 | <path d="M305.686 246.995C329.749 266.114 361.965 272.832 393.67 262.129C425.376 251.426 449.499 225.691 461.03 194.556C436.967 175.437 404.751 168.719 373.045 179.422C341.34 190.125 317.217 215.86 305.686 246.995Z" fill="url(#paint6_radial_2862_30)"/>
 14 | <path d="M305.686 246.995C329.749 266.114 361.965 272.832 393.67 262.129C425.376 251.426 449.499 225.691 461.03 194.556C436.967 175.437 404.751 168.719 373.045 179.422C341.34 190.125 317.217 215.86 305.686 246.995Z" fill="black" fill-opacity="0.2" style="mix-blend-mode:hard-light"/>
 15 | <path d="M305.686 246.995C329.749 266.114 361.965 272.832 393.67 262.129C425.376 251.426 449.499 225.691 461.03 194.556C436.967 175.437 404.751 168.719 373.045 179.422C341.34 190.125 317.217 215.86 305.686 246.995Z" fill="url(#paint7_linear_2862_30)" fill-opacity="0.5" style="mix-blend-mode:hard-light"/>
 16 | <path d="M393.586 261.878C362.034 272.529 329.98 265.88 306.002 246.907C317.534 215.919 341.57 190.327 373.13 179.673C404.681 169.023 436.735 175.671 460.714 194.644C449.181 225.632 425.145 251.224 393.586 261.878Z" stroke="url(#paint8_linear_2862_30)" stroke-opacity="0.05" stroke-width="0.530516"/>
 17 | <g opacity="0.8" filter="url(#filter0_f_2862_30)">
 18 | <circle cx="660" cy="-60" r="160" fill="#18E244" fill-opacity="0.4"/>
 19 | </g>
 20 | <g opacity="0.8" filter="url(#filter1_f_2862_30)">
 21 | <circle cx="20" cy="213" r="160" fill="#18CAE2" fill-opacity="0.33"/>
 22 | </g>
 23 | <g opacity="0.8" filter="url(#filter2_f_2862_30)">
 24 | <circle cx="660" cy="480" r="160" fill="#18E2B2" fill-opacity="0.52"/>
 25 | </g>
 26 | <g opacity="0.8" filter="url(#filter3_f_2862_30)">
 27 | <circle cx="20" cy="413" r="160" fill="#4018E2" fill-opacity="0.22"/>
 28 | </g>
 29 | <path opacity="0.2" d="M0 50H700" stroke="url(#paint9_radial_2862_30)" stroke-dasharray="4 4"/>
 30 | <path opacity="0.1" d="M0 82H700" stroke="url(#paint10_radial_2862_30)" stroke-dasharray="4 4"/>
 31 | <path opacity="0.2" d="M239 0L239 320" stroke="url(#paint11_radial_2862_30)" stroke-dasharray="4 4"/>
 32 | <path opacity="0.1" d="M271 0L271 320" stroke="url(#paint12_radial_2862_30)" stroke-dasharray="4 4"/>
 33 | <path opacity="0.2" d="M461 0L461 320" stroke="url(#paint13_radial_2862_30)" stroke-dasharray="4 4"/>
 34 | <path opacity="0.1" d="M429 0L429 320" stroke="url(#paint14_radial_2862_30)" stroke-dasharray="4 4"/>
 35 | <path opacity="0.2" d="M0 271H700" stroke="url(#paint15_radial_2862_30)" stroke-dasharray="4 4"/>
 36 | <path opacity="0.1" d="M0 239H700" stroke="url(#paint16_radial_2862_30)" stroke-dasharray="4 4"/>
 37 | <g style="mix-blend-mode:overlay" opacity="0.1">
 38 | <path d="M0 160H700" stroke="url(#paint17_linear_2862_30)"/>
 39 | </g>
 40 | <g style="mix-blend-mode:overlay" opacity="0.2">
 41 | <path d="M511 -1L189 321" stroke="url(#paint18_linear_2862_30)"/>
 42 | </g>
 43 | <g style="mix-blend-mode:overlay" opacity="0.2">
 44 | <path d="M511 321L189 -1" stroke="url(#paint19_linear_2862_30)"/>
 45 | </g>
 46 | <g style="mix-blend-mode:overlay" opacity="0.1">
 47 | <circle cx="350" cy="160" r="111" stroke="white"/>
 48 | </g>
 49 | <g style="mix-blend-mode:overlay" opacity="0.1">
 50 | <circle cx="350" cy="160" r="79" stroke="white"/>
 51 | </g>
 52 | </g>
 53 | <defs>
 54 | <filter id="filter0_f_2862_30" x="260" y="-460" width="800" height="800" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
 55 | <feFlood flood-opacity="0" result="BackgroundImageFix"/>
 56 | <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
 57 | <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_2862_30"/>
 58 | </filter>
 59 | <filter id="filter1_f_2862_30" x="-380" y="-187" width="800" height="800" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
 60 | <feFlood flood-opacity="0" result="BackgroundImageFix"/>
 61 | <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
 62 | <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_2862_30"/>
 63 | </filter>
 64 | <filter id="filter2_f_2862_30" x="260" y="80" width="800" height="800" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
 65 | <feFlood flood-opacity="0" result="BackgroundImageFix"/>
 66 | <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
 67 | <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_2862_30"/>
 68 | </filter>
 69 | <filter id="filter3_f_2862_30" x="-380" y="13" width="800" height="800" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
 70 | <feFlood flood-opacity="0" result="BackgroundImageFix"/>
 71 | <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
 72 | <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_2862_30"/>
 73 | </filter>
 74 | <linearGradient id="paint0_linear_2862_30" x1="1.04308e-05" y1="320" x2="710.784" y2="26.0793" gradientUnits="userSpaceOnUse">
 75 | <stop stop-color="#18E299" stop-opacity="0.09"/>
 76 | <stop offset="0.729167" stop-color="#0D9373" stop-opacity="0.08"/>
 77 | </linearGradient>
 78 | <radialGradient id="paint1_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(208.697 189.703) rotate(-10.029) scale(169.097 167.466)">
 79 | <stop stop-color="#00B0BB"/>
 80 | <stop offset="1" stop-color="#00DB65"/>
 81 | </radialGradient>
 82 | <linearGradient id="paint2_linear_2862_30" x1="306.587" y1="93.5598" x2="252.341" y2="224.228" gradientUnits="userSpaceOnUse">
 83 | <stop stop-color="#18E299"/>
 84 | <stop offset="1"/>
 85 | </linearGradient>
 86 | <linearGradient id="paint3_linear_2862_30" x1="311.84" y1="123.717" x2="253.579" y2="224.761" gradientUnits="userSpaceOnUse">
 87 | <stop/>
 88 | <stop offset="1" stop-opacity="0"/>
 89 | </linearGradient>
 90 | <radialGradient id="paint4_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(313.407 243.64) rotate(-75.7542) scale(203.632 223.902)">
 91 | <stop stop-color="#00BBBB"/>
 92 | <stop offset="0.712616" stop-color="#00DB65"/>
 93 | </radialGradient>
 94 | <linearGradient id="paint5_linear_2862_30" x1="308.586" y1="102.284" x2="383.487" y2="201.169" gradientUnits="userSpaceOnUse">
 95 | <stop/>
 96 | <stop offset="1" stop-opacity="0"/>
 97 | </linearGradient>
 98 | <radialGradient id="paint6_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(311.446 249.925) rotate(-20.3524) scale(174.776 163.096)">
 99 | <stop stop-color="#00B0BB"/>
100 | <stop offset="1" stop-color="#00DB65"/>
101 | </radialGradient>
102 | <linearGradient id="paint7_linear_2862_30" x1="395.842" y1="169.781" x2="332.121" y2="263.82" gradientUnits="userSpaceOnUse">
103 | <stop stop-color="#00B1BC"/>
104 | <stop offset="1"/>
105 | </linearGradient>
106 | <linearGradient id="paint8_linear_2862_30" x1="395.842" y1="169.781" x2="370.99" y2="271.799" gradientUnits="userSpaceOnUse">
107 | <stop/>
108 | <stop offset="1" stop-opacity="0"/>
109 | </linearGradient>
110 | <radialGradient id="paint9_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 50) scale(398.125 182)">
111 | <stop offset="0.348958" stop-color="#84FFD3"/>
112 | <stop offset="0.880208" stop-color="#18E299" stop-opacity="0"/>
113 | </radialGradient>
114 | <radialGradient id="paint10_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 82) scale(398.125 182)">
115 | <stop offset="0.348958" stop-color="#84FFD3"/>
116 | <stop offset="0.880208" stop-color="#18E299" stop-opacity="0"/>
117 | </radialGradient>
118 | <radialGradient id="paint11_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(239 160) rotate(90) scale(182 182)">
119 | <stop offset="0.348958" stop-color="#84FFD3"/>
120 | <stop offset="0.880208" stop-color="#18E299" stop-opacity="0"/>
121 | </radialGradient>
122 | <radialGradient id="paint12_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(271 160) rotate(90) scale(182 182)">
123 | <stop offset="0.348958" stop-color="#84FFD3"/>
124 | <stop offset="0.880208" stop-color="#18E299" stop-opacity="0"/>
125 | </radialGradient>
126 | <radialGradient id="paint13_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(461 160) rotate(90) scale(182 182)">
127 | <stop offset="0.348958" stop-color="#84FFD3"/>
128 | <stop offset="0.880208" stop-color="#18E299" stop-opacity="0"/>
129 | </radialGradient>
130 | <radialGradient id="paint14_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(429 160) rotate(90) scale(182 182)">
131 | <stop offset="0.348958" stop-color="#84FFD3"/>
132 | <stop offset="0.880208" stop-color="#18E299" stop-opacity="0"/>
133 | </radialGradient>
134 | <radialGradient id="paint15_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 271) scale(398.125 182)">
135 | <stop offset="0.348958" stop-color="#84FFD3"/>
136 | <stop offset="0.880208" stop-color="#18E299" stop-opacity="0"/>
137 | </radialGradient>
138 | <radialGradient id="paint16_radial_2862_30" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 239) scale(398.125 182)">
139 | <stop offset="0.348958" stop-color="#84FFD3"/>
140 | <stop offset="0.880208" stop-color="#18E299" stop-opacity="0"/>
141 | </radialGradient>
142 | <linearGradient id="paint17_linear_2862_30" x1="0" y1="160" x2="700" y2="160" gradientUnits="userSpaceOnUse">
143 | <stop stop-color="white" stop-opacity="0.1"/>
144 | <stop offset="0.5" stop-color="white"/>
145 | <stop offset="1" stop-color="white" stop-opacity="0.1"/>
146 | </linearGradient>
147 | <linearGradient id="paint18_linear_2862_30" x1="511" y1="-1" x2="189" y2="321" gradientUnits="userSpaceOnUse">
148 | <stop stop-color="white" stop-opacity="0.1"/>
149 | <stop offset="0.5" stop-color="white"/>
150 | <stop offset="1" stop-color="white" stop-opacity="0.1"/>
151 | </linearGradient>
152 | <linearGradient id="paint19_linear_2862_30" x1="511" y1="321" x2="189" y2="-0.999997" gradientUnits="userSpaceOnUse">
153 | <stop stop-color="white" stop-opacity="0.1"/>
154 | <stop offset="0.5" stop-color="white"/>
155 | <stop offset="1" stop-color="white" stop-opacity="0.1"/>
156 | </linearGradient>
157 | <clipPath id="clip0_2862_30">
158 | <rect width="700" height="320" rx="16" fill="white"/>
159 | </clipPath>
160 | </defs>
161 | </svg>
162 | 


--------------------------------------------------------------------------------
/images/hero-light.svg:
--------------------------------------------------------------------------------
  1 | <svg width="700" height="320" viewBox="0 0 700 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  2 | <g clip-path="url(#clip0_2862_278)">
  3 | <rect width="700" height="320" rx="16" fill="url(#paint0_linear_2862_278)"/>
  4 | <path d="M311.889 247.3C283.097 247.215 258.226 231.466 246.292 201.629C234.357 171.793 238.02 134.523 253.414 101.112C282.206 101.197 307.077 116.945 319.011 146.782C330.946 176.619 327.283 213.888 311.889 247.3Z" fill="white"/>
  5 | <path d="M311.889 247.3C283.097 247.215 258.226 231.466 246.292 201.629C234.357 171.793 238.02 134.523 253.414 101.112C282.206 101.197 307.077 116.945 319.011 146.782C330.946 176.619 327.283 213.888 311.889 247.3Z" fill="url(#paint1_radial_2862_278)"/>
  6 | <path d="M311.889 247.3C283.097 247.215 258.226 231.466 246.292 201.629C234.357 171.793 238.02 134.523 253.414 101.112C282.206 101.197 307.077 116.945 319.011 146.782C330.946 176.619 327.283 213.888 311.889 247.3Z" fill="black" fill-opacity="0.5" style="mix-blend-mode:hard-light"/>
  7 | <path d="M311.889 247.3C283.097 247.215 258.226 231.466 246.292 201.629C234.357 171.793 238.02 134.523 253.414 101.112C282.206 101.197 307.077 116.945 319.011 146.782C330.946 176.619 327.283 213.888 311.889 247.3Z" fill="url(#paint2_linear_2862_278)" fill-opacity="0.5" style="mix-blend-mode:hard-light"/>
  8 | <path d="M311.72 247.034C283.108 246.887 258.409 231.208 246.538 201.531C234.656 171.825 238.271 134.702 253.583 101.377C282.195 101.524 306.894 117.203 318.765 146.88C330.647 176.586 327.031 213.709 311.72 247.034Z" stroke="url(#paint3_linear_2862_278)" stroke-opacity="0.05" stroke-width="0.530516"/>
  9 | <path d="M305.839 247.174C343.92 237.419 377.154 210.619 393.585 171.64C410.017 132.661 405.98 90.1988 386.347 56.1934C348.266 65.9477 315.032 92.7486 298.601 131.728C282.169 170.706 286.206 213.168 305.839 247.174Z" fill="white"/>
 10 | <path d="M305.839 247.174C343.92 237.419 377.154 210.619 393.585 171.64C410.017 132.661 405.98 90.1988 386.347 56.1934C348.266 65.9477 315.032 92.7486 298.601 131.728C282.169 170.706 286.206 213.168 305.839 247.174Z" fill="url(#paint4_radial_2862_278)"/>
 11 | <path d="M393.341 171.537C376.971 210.369 343.89 237.091 305.969 246.867C286.462 212.959 282.476 170.663 298.845 131.831C315.215 92.9978 348.295 66.2765 386.217 56.5004C405.724 90.4077 409.71 132.704 393.341 171.537Z" stroke="url(#paint5_linear_2862_278)" stroke-opacity="0.05" stroke-width="0.530516"/>
 12 | <path d="M305.686 246.995C329.75 266.114 361.965 272.832 393.671 262.129C425.376 251.426 449.499 225.691 461.03 194.556C436.967 175.437 404.751 168.719 373.046 179.422C341.34 190.125 317.217 215.86 305.686 246.995Z" fill="white"/>
 13 | <path d="M305.686 246.995C329.75 266.114 361.965 272.832 393.671 262.129C425.376 251.426 449.499 225.691 461.03 194.556C436.967 175.437 404.751 168.719 373.046 179.422C341.34 190.125 317.217 215.86 305.686 246.995Z" fill="url(#paint6_radial_2862_278)"/>
 14 | <path d="M305.686 246.995C329.75 266.114 361.965 272.832 393.671 262.129C425.376 251.426 449.499 225.691 461.03 194.556C436.967 175.437 404.751 168.719 373.046 179.422C341.34 190.125 317.217 215.86 305.686 246.995Z" fill="black" fill-opacity="0.2" style="mix-blend-mode:hard-light"/>
 15 | <path d="M305.686 246.995C329.75 266.114 361.965 272.832 393.671 262.129C425.376 251.426 449.499 225.691 461.03 194.556C436.967 175.437 404.751 168.719 373.046 179.422C341.34 190.125 317.217 215.86 305.686 246.995Z" fill="url(#paint7_linear_2862_278)" fill-opacity="0.5" style="mix-blend-mode:hard-light"/>
 16 | <path d="M393.586 261.878C362.035 272.529 329.981 265.88 306.002 246.907C317.535 215.919 341.571 190.327 373.13 179.673C404.682 169.023 436.736 175.671 460.715 194.644C449.182 225.632 425.146 251.224 393.586 261.878Z" stroke="url(#paint8_linear_2862_278)" stroke-opacity="0.05" stroke-width="0.530516"/>
 17 | <g opacity="0.8" filter="url(#filter0_f_2862_278)">
 18 | <circle cx="660" cy="-60" r="160" fill="#18E299" fill-opacity="0.4"/>
 19 | </g>
 20 | <g opacity="0.8" filter="url(#filter1_f_2862_278)">
 21 | <circle cx="20" cy="213" r="160" fill="#18E299" fill-opacity="0.33"/>
 22 | </g>
 23 | <g opacity="0.8" filter="url(#filter2_f_2862_278)">
 24 | <circle cx="660" cy="480" r="160" fill="#18E299" fill-opacity="0.52"/>
 25 | </g>
 26 | <g opacity="0.8" filter="url(#filter3_f_2862_278)">
 27 | <circle cx="20" cy="413" r="160" fill="#18E299" fill-opacity="0.22"/>
 28 | </g>
 29 | <g style="mix-blend-mode:overlay" opacity="0.1">
 30 | <path d="M0 50H700" stroke="black" stroke-dasharray="4 4"/>
 31 | </g>
 32 | <g style="mix-blend-mode:overlay" opacity="0.1">
 33 | <path d="M0 82H700" stroke="black" stroke-dasharray="4 4"/>
 34 | </g>
 35 | <g style="mix-blend-mode:overlay" opacity="0.1">
 36 | <path d="M239 0L239 320" stroke="black" stroke-dasharray="4 4"/>
 37 | </g>
 38 | <g style="mix-blend-mode:overlay" opacity="0.1">
 39 | <path d="M271 0L271 320" stroke="black" stroke-dasharray="4 4"/>
 40 | </g>
 41 | <g style="mix-blend-mode:overlay" opacity="0.1">
 42 | <path d="M461 0L461 320" stroke="black" stroke-dasharray="4 4"/>
 43 | </g>
 44 | <g style="mix-blend-mode:overlay" opacity="0.1">
 45 | <path d="M350 0L350 320" stroke="url(#paint9_linear_2862_278)"/>
 46 | </g>
 47 | <g style="mix-blend-mode:overlay" opacity="0.1">
 48 | <path d="M429 0L429 320" stroke="black" stroke-dasharray="4 4"/>
 49 | </g>
 50 | <g style="mix-blend-mode:overlay" opacity="0.1">
 51 | <path d="M0 271H700" stroke="black" stroke-dasharray="4 4"/>
 52 | </g>
 53 | <g style="mix-blend-mode:overlay" opacity="0.1">
 54 | <path d="M0 239H700" stroke="black" stroke-dasharray="4 4"/>
 55 | </g>
 56 | <g style="mix-blend-mode:overlay" opacity="0.1">
 57 | <path d="M0 160H700" stroke="url(#paint10_linear_2862_278)"/>
 58 | </g>
 59 | <g style="mix-blend-mode:overlay" opacity="0.1">
 60 | <path d="M511 -1L189 321" stroke="url(#paint11_linear_2862_278)"/>
 61 | </g>
 62 | <g style="mix-blend-mode:overlay" opacity="0.1">
 63 | <path d="M511 321L189 -1" stroke="url(#paint12_linear_2862_278)"/>
 64 | </g>
 65 | <g style="mix-blend-mode:overlay" opacity="0.05">
 66 | <circle cx="350" cy="160" r="111" stroke="black"/>
 67 | </g>
 68 | <g style="mix-blend-mode:overlay" opacity="0.05">
 69 | <circle cx="350" cy="160" r="79" stroke="black"/>
 70 | </g>
 71 | </g>
 72 | <defs>
 73 | <filter id="filter0_f_2862_278" x="260" y="-460" width="800" height="800" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
 74 | <feFlood flood-opacity="0" result="BackgroundImageFix"/>
 75 | <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
 76 | <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_2862_278"/>
 77 | </filter>
 78 | <filter id="filter1_f_2862_278" x="-380" y="-187" width="800" height="800" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
 79 | <feFlood flood-opacity="0" result="BackgroundImageFix"/>
 80 | <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
 81 | <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_2862_278"/>
 82 | </filter>
 83 | <filter id="filter2_f_2862_278" x="260" y="80" width="800" height="800" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
 84 | <feFlood flood-opacity="0" result="BackgroundImageFix"/>
 85 | <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
 86 | <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_2862_278"/>
 87 | </filter>
 88 | <filter id="filter3_f_2862_278" x="-380" y="13" width="800" height="800" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
 89 | <feFlood flood-opacity="0" result="BackgroundImageFix"/>
 90 | <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
 91 | <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_2862_278"/>
 92 | </filter>
 93 | <linearGradient id="paint0_linear_2862_278" x1="1.04308e-05" y1="320" x2="710.784" y2="26.0793" gradientUnits="userSpaceOnUse">
 94 | <stop stop-color="#18E299" stop-opacity="0.09"/>
 95 | <stop offset="0.729167" stop-color="#0D9373" stop-opacity="0.08"/>
 96 | </linearGradient>
 97 | <radialGradient id="paint1_radial_2862_278" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(208.697 189.703) rotate(-10.029) scale(169.097 167.466)">
 98 | <stop stop-color="#00B0BB"/>
 99 | <stop offset="1" stop-color="#00DB65"/>
100 | </radialGradient>
101 | <linearGradient id="paint2_linear_2862_278" x1="306.587" y1="93.5598" x2="252.341" y2="224.228" gradientUnits="userSpaceOnUse">
102 | <stop stop-color="#18E299"/>
103 | <stop offset="1"/>
104 | </linearGradient>
105 | <linearGradient id="paint3_linear_2862_278" x1="311.84" y1="123.717" x2="253.579" y2="224.761" gradientUnits="userSpaceOnUse">
106 | <stop/>
107 | <stop offset="1" stop-opacity="0"/>
108 | </linearGradient>
109 | <radialGradient id="paint4_radial_2862_278" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(313.407 243.64) rotate(-75.7542) scale(203.632 223.902)">
110 | <stop stop-color="#00BBBB"/>
111 | <stop offset="0.712616" stop-color="#00DB65"/>
112 | </radialGradient>
113 | <linearGradient id="paint5_linear_2862_278" x1="308.586" y1="102.284" x2="383.487" y2="201.169" gradientUnits="userSpaceOnUse">
114 | <stop/>
115 | <stop offset="1" stop-opacity="0"/>
116 | </linearGradient>
117 | <radialGradient id="paint6_radial_2862_278" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(311.447 249.925) rotate(-20.3524) scale(174.776 163.096)">
118 | <stop stop-color="#00B0BB"/>
119 | <stop offset="1" stop-color="#00DB65"/>
120 | </radialGradient>
121 | <linearGradient id="paint7_linear_2862_278" x1="395.843" y1="169.781" x2="332.121" y2="263.82" gradientUnits="userSpaceOnUse">
122 | <stop stop-color="#00B1BC"/>
123 | <stop offset="1"/>
124 | </linearGradient>
125 | <linearGradient id="paint8_linear_2862_278" x1="395.843" y1="169.781" x2="370.991" y2="271.799" gradientUnits="userSpaceOnUse">
126 | <stop/>
127 | <stop offset="1" stop-opacity="0"/>
128 | </linearGradient>
129 | <linearGradient id="paint9_linear_2862_278" x1="350" y1="0" x2="350" y2="320" gradientUnits="userSpaceOnUse">
130 | <stop stop-opacity="0"/>
131 | <stop offset="0.0001" stop-opacity="0.3"/>
132 | <stop offset="0.333333"/>
133 | <stop offset="0.666667"/>
134 | <stop offset="1" stop-opacity="0.3"/>
135 | </linearGradient>
136 | <linearGradient id="paint10_linear_2862_278" x1="0" y1="160" x2="700" y2="160" gradientUnits="userSpaceOnUse">
137 | <stop stop-opacity="0.1"/>
138 | <stop offset="0.5"/>
139 | <stop offset="1" stop-opacity="0.1"/>
140 | </linearGradient>
141 | <linearGradient id="paint11_linear_2862_278" x1="511" y1="-1" x2="189" y2="321" gradientUnits="userSpaceOnUse">
142 | <stop stop-opacity="0.1"/>
143 | <stop offset="0.5"/>
144 | <stop offset="1" stop-opacity="0.1"/>
145 | </linearGradient>
146 | <linearGradient id="paint12_linear_2862_278" x1="511" y1="321" x2="189" y2="-0.999997" gradientUnits="userSpaceOnUse">
147 | <stop stop-opacity="0.1"/>
148 | <stop offset="0.5"/>
149 | <stop offset="1" stop-opacity="0.1"/>
150 | </linearGradient>
151 | <clipPath id="clip0_2862_278">
152 | <rect width="700" height="320" rx="16" fill="white"/>
153 | </clipPath>
154 | </defs>
155 | </svg>
156 | 


--------------------------------------------------------------------------------
/images/java/class-diagrams.puml:
--------------------------------------------------------------------------------
  1 | @startuml Core Components
  2 | 
  3 | ' Core Interfaces
  4 | interface McpTransport {
  5 |   +Mono<Void> connect(Function<Mono<JSONRPCMessage>, Mono<JSONRPCMessage>> handler)
  6 |   +Mono<Void> sendMessage(JSONRPCMessage message)
  7 |   +void close()
  8 |   +Mono<Void> closeGracefully()
  9 |   +<T> T unmarshalFrom(Object data, TypeReference<T> typeRef)
 10 | }
 11 | 
 12 | interface McpSession {
 13 |   +<T> Mono<T> sendRequest(String method, Object requestParams, TypeReference<T> typeRef)
 14 |   +Mono<Void> sendNotification(String method, Map<String, Object> params)
 15 |   +Mono<Void> closeGracefully()
 16 |   +void close()
 17 | }
 18 | 
 19 | ' Core Implementation Classes
 20 | class DefaultMcpSession {
 21 |   +interface RequestHandler
 22 |   +interface NotificationHandler
 23 | }
 24 | 
 25 | ' Client Classes
 26 | class McpClient {
 27 |   +{static} Builder using(ClientMcpTransport transport)
 28 | }
 29 | 
 30 | class McpAsyncClient {
 31 |   +Mono<InitializeResult> initialize()
 32 |   +ServerCapabilities getServerCapabilities()
 33 |   +Implementation getServerInfo()
 34 |   +ClientCapabilities getClientCapabilities()
 35 |   +Implementation getClientInfo()
 36 |   +void close()
 37 |   +Mono<Void> closeGracefully()
 38 |   +Mono<Object> ping()
 39 |   +Mono<Void> addRoot(Root root)
 40 |   +Mono<Void> removeRoot(String rootUri)
 41 |   +Mono<Void> rootsListChangedNotification()
 42 |   +Mono<CallToolResult> callTool(CallToolRequest request)
 43 |   +Mono<ListToolsResult> listTools()
 44 |   +Mono<ListResourcesResult> listResources()
 45 |   +Mono<ReadResourceResult> readResource(ReadResourceRequest request)
 46 |   +Mono<ListResourceTemplatesResult> listResourceTemplates()
 47 |   +Mono<Void> subscribeResource(SubscribeRequest request)
 48 |   +Mono<Void> unsubscribeResource(UnsubscribeRequest request)
 49 |   +Mono<ListPromptsResult> listPrompts()
 50 |   +Mono<GetPromptResult> getPrompt(GetPromptRequest request)
 51 |   +Mono<Void> setLoggingLevel(LoggingLevel level)
 52 | }
 53 | 
 54 | class McpSyncClient {
 55 |   +InitializeResult initialize()
 56 |   +ServerCapabilities getServerCapabilities()
 57 |   +Implementation getServerInfo()
 58 |   +ClientCapabilities getClientCapabilities()
 59 |   +Implementation getClientInfo()
 60 |   +void close()
 61 |   +boolean closeGracefully()
 62 |   +Object ping()
 63 |   +void addRoot(Root root)
 64 |   +void removeRoot(String rootUri)
 65 |   +void rootsListChangedNotification()
 66 |   +CallToolResult callTool(CallToolRequest request)
 67 |   +ListToolsResult listTools()
 68 |   +ListResourcesResult listResources()
 69 |   +ReadResourceResult readResource(ReadResourceRequest request)
 70 |   +ListResourceTemplatesResult listResourceTemplates()
 71 |   +void subscribeResource(SubscribeRequest request)
 72 |   +void unsubscribeResource(UnsubscribeRequest request)
 73 |   +ListPromptsResult listPrompts()
 74 |   +GetPromptResult getPrompt(GetPromptRequest request)
 75 |   +void setLoggingLevel(LoggingLevel level)
 76 | }
 77 | 
 78 | ' Server Classes
 79 | class McpServer {
 80 |   +{static} Builder using(ServerMcpTransport transport)
 81 | }
 82 | 
 83 | class McpAsyncServer {
 84 |   
 85 |   +ServerCapabilities getServerCapabilities()
 86 |   +Implementation getServerInfo()
 87 |   +ClientCapabilities getClientCapabilities()
 88 |   +Implementation getClientInfo()
 89 |   +void close()
 90 |   +Mono<Void> closeGracefully()
 91 |   
 92 |   ' Tool Management
 93 |   +Mono<Void> addTool(ToolRegistration toolRegistration)
 94 |   +Mono<Void> removeTool(String toolName)
 95 |   +Mono<Void> notifyToolsListChanged()
 96 |   
 97 |   ' Resource Management
 98 |   +Mono<Void> addResource(ResourceRegistration resourceHandler)
 99 |   +Mono<Void> removeResource(String resourceUri)
100 |   +Mono<Void> notifyResourcesListChanged()
101 |   
102 |   ' Prompt Management
103 |   +Mono<Void> addPrompt(PromptRegistration promptRegistration)
104 |   +Mono<Void> removePrompt(String promptName)
105 |   +Mono<Void> notifyPromptsListChanged()
106 |   
107 |   ' Logging
108 |   +Mono<Void> loggingNotification(LoggingMessageNotification notification)
109 |   
110 |   ' Sampling
111 |   +Mono<CreateMessageResult> createMessage(CreateMessageRequest request)
112 | }
113 | 
114 | class McpSyncServer {
115 |   +McpAsyncServer getAsyncServer()
116 |   
117 |   +ServerCapabilities getServerCapabilities()
118 |   +Implementation getServerInfo()
119 |   +ClientCapabilities getClientCapabilities()
120 |   +Implementation getClientInfo()
121 |   +void close()
122 |   +void closeGracefully()
123 |   
124 |   ' Tool Management
125 |   +void addTool(ToolRegistration toolHandler)
126 |   +void removeTool(String toolName)
127 |   +void notifyToolsListChanged()
128 |   
129 |   ' Resource Management
130 |   +void addResource(ResourceRegistration resourceHandler)
131 |   +void removeResource(String resourceUri)
132 |   +void notifyResourcesListChanged()
133 |   
134 |   ' Prompt Management
135 |   +void addPrompt(PromptRegistration promptRegistration)
136 |   +void removePrompt(String promptName)
137 |   +void notifyPromptsListChanged()
138 |   
139 |   ' Logging
140 |   +void loggingNotification(LoggingMessageNotification notification)
141 |   
142 |   ' Sampling
143 |   +CreateMessageResult createMessage(CreateMessageRequest request)
144 | }
145 | 
146 | ' Transport Implementations
147 | class StdioClientTransport implements ClientMcpTransport {  
148 |   +void setErrorHandler(Consumer<String> errorHandler)
149 |   +Sinks.Many<String> getErrorSink()
150 | }
151 | 
152 | class StdioServerTransport implements ServerMcpTransport {
153 | }
154 | 
155 | 
156 | class HttpServletSseServerTransport implements ServerMcpTransport {
157 | }
158 | 
159 | 
160 | class HttpClientSseClientTransport implements ClientMcpTransport {  
161 | }
162 | 
163 | 
164 | class WebFluxSseClientTransport implements ClientMcpTransport {
165 | }
166 | 
167 | 
168 | class WebFluxSseServerTransport implements ServerMcpTransport {
169 |   +RouterFunction<?> getRouterFunction()
170 | }
171 | 
172 | class WebMvcSseServerTransport implements ServerMcpTransport {
173 |   +RouterFunction<?> getRouterFunction()
174 | }
175 | 
176 | 
177 | ' Schema and Error Classes
178 | class McpSchema {
179 |   +class ErrorCodes
180 |   +interface Request
181 |   +interface JSONRPCMessage
182 |   +interface ResourceContents
183 |   +interface Content
184 |   +interface ServerCapabilities
185 |   +{static} JSONRPCMessage deserializeJsonRpcMessage()
186 | }
187 | 
188 | class McpError {
189 | }
190 | 
191 | ' Relationships
192 | McpTransport <|.. ClientMcpTransport
193 | McpTransport <|.. ServerMcpTransport
194 | 
195 | McpSession <|.. DefaultMcpSession
196 | DefaultMcpSession --o McpAsyncClient
197 | DefaultMcpSession --o McpAsyncServer
198 | 
199 | McpClient ..> McpAsyncClient : creates
200 | McpClient ..> McpSyncClient : creates
201 | McpSyncClient --> McpAsyncClient : delegates to
202 | 
203 | McpServer ..> McpAsyncServer : creates
204 | McpServer ..> McpSyncServer : creates
205 | McpSyncServer o-- McpAsyncServer
206 | 
207 | DefaultMcpSession o-- McpTransport
208 | McpSchema <.. McpSession : uses
209 | McpError ..> McpSession : throws
210 | 
211 | @enduml
212 | 
213 | @startuml Message Flow
214 | 
215 | package "MCP Schema" {
216 |   interface JSONRPCMessage {
217 |     +String jsonrpc()
218 |   }
219 |   
220 |   interface Request {
221 |   }
222 |   
223 |   class InitializeRequest
224 |   class CallToolRequest
225 |   class ListToolsRequest
226 |   class ListResourcesRequest
227 |   class ReadResourceRequest
228 |   class ListResourceTemplatesRequest
229 |   class ListPromptsRequest
230 |   class GetPromptRequest
231 | }
232 | 
233 | package "Resource Types" {
234 |   interface ResourceContents {
235 |     +String uri()
236 |     +String mimeType()
237 |   }
238 |   
239 |   class TextResourceContents
240 |   class BlobResourceContents
241 |   
242 |   interface Content {
243 |     +String type()
244 |   }
245 |   
246 |   class TextContent
247 |   class ImageContent
248 |   class EmbeddedResource
249 |   
250 |   interface Annotated {
251 |     +Annotations annotations()
252 |   }
253 |   
254 |   interface PromptOrResourceReference {
255 |     +String type()
256 |   }
257 |   
258 |   class PromptReference
259 |   class ResourceReference
260 | }
261 | 
262 | JSONRPCMessage <|.. Request
263 | Request <|.. InitializeRequest
264 | Request <|.. CallToolRequest
265 | Request <|.. ListToolsRequest
266 | Request <|.. ListResourcesRequest
267 | Request <|.. ReadResourceRequest
268 | Request <|.. ListResourceTemplatesRequest
269 | Request <|.. ListPromptsRequest
270 | Request <|.. GetPromptRequest
271 | 
272 | ResourceContents <|.. TextResourceContents
273 | ResourceContents <|.. BlobResourceContents
274 | 
275 | Content <|.. TextContent
276 | Content <|.. ImageContent
277 | Content <|.. EmbeddedResource
278 | 
279 | PromptOrResourceReference <|.. PromptReference
280 | PromptOrResourceReference <|.. ResourceReference
281 | 
282 | @enduml
283 | 


--------------------------------------------------------------------------------
/images/java/java-mcp-client-architecture.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/java/java-mcp-client-architecture.jpg


--------------------------------------------------------------------------------
/images/java/java-mcp-server-architecture.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/java/java-mcp-server-architecture.jpg


--------------------------------------------------------------------------------
/images/java/java-mcp-uml-classdiagram.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentStyleType="text/css" height="1616px" preserveAspectRatio="none" style="width:2294px;height:1616px;background:#FFFFFF;" version="1.1" viewBox="0 0 2294 1616" width="2294px" zoomAndPan="magnify"><defs/><g><!--class McpTransport--><g id="elem_McpTransport"><rect codeLine="2" fill="#F1F1F1" height="129.4844" id="McpTransport" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="710.9541" x="731.5" y="1091"/><ellipse cx="1034.52" cy="1107" fill="#B4A7E5" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1030.4419,1102.7656 L1030.4419,1100.6094 L1037.8325,1100.6094 L1037.8325,1102.7656 L1035.3638,1102.7656 L1035.3638,1110.8438 L1037.8325,1110.8438 L1037.8325,1113 L1030.4419,1113 L1030.4419,1110.8438 L1032.9106,1110.8438 L1032.9106,1102.7656 L1030.4419,1102.7656 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" font-style="italic" lengthAdjust="spacing" textLength="96.4141" x="1055.02" y="1111.8467">McpTransport</text><line style="stroke:#181818;stroke-width:0.5;" x1="732.5" x2="1441.4541" y1="1123" y2="1123"/><line style="stroke:#181818;stroke-width:0.5;" x1="732.5" x2="1441.4541" y1="1131" y2="1131"/><ellipse cx="742.5" cy="1144.6484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="684.9541" x="751.5" y="1147.9951">Mono&lt;Void&gt; connect(Function&lt;Mono&lt;JSONRPCMessage&gt;, Mono&lt;JSONRPCMessage&gt;&gt; handler)</text><ellipse cx="742.5" cy="1160.9453" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="394.0439" x="751.5" y="1164.292">Mono&lt;Void&gt; sendMessage(JSONRPCMessage message)</text><ellipse cx="742.5" cy="1177.2422" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="81.0605" x="751.5" y="1180.5889">void close()</text><ellipse cx="742.5" cy="1193.5391" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="215.2568" x="751.5" y="1196.8857">Mono&lt;Void&gt; closeGracefully()</text><ellipse cx="742.5" cy="1209.8359" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="458.0146" x="751.5" y="1213.1826">&lt;T&gt; T unmarshalFrom(Object data, TypeReference&lt;T&gt; typeRef)</text></g><!--class McpSession--><g id="elem_McpSession"><rect codeLine="10" fill="#F1F1F1" height="113.1875" id="McpSession" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="709.833" x="732" y="246"/><ellipse cx="1041.627" cy="262" fill="#B4A7E5" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1037.5488,257.7656 L1037.5488,255.6094 L1044.9395,255.6094 L1044.9395,257.7656 L1042.4707,257.7656 L1042.4707,265.8438 L1044.9395,265.8438 L1044.9395,268 L1037.5488,268 L1037.5488,265.8438 L1040.0176,265.8438 L1040.0176,257.7656 L1037.5488,257.7656 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" font-style="italic" lengthAdjust="spacing" textLength="82.0791" x="1062.127" y="266.8467">McpSession</text><line style="stroke:#181818;stroke-width:0.5;" x1="733" x2="1440.833" y1="278" y2="278"/><line style="stroke:#181818;stroke-width:0.5;" x1="733" x2="1440.833" y1="286" y2="286"/><ellipse cx="743" cy="299.6484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="683.833" x="752" y="302.9951">&lt;T&gt; Mono&lt;T&gt; sendRequest(String method, Object requestParams, TypeReference&lt;T&gt; typeRef)</text><ellipse cx="743" cy="315.9453" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="537.4961" x="752" y="319.292">Mono&lt;Void&gt; sendNotification(String method, Map&lt;String, Object&gt; params)</text><ellipse cx="743" cy="332.2422" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="215.2568" x="752" y="335.5889">Mono&lt;Void&gt; closeGracefully()</text><ellipse cx="743" cy="348.5391" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="81.0605" x="752" y="351.8857">void close()</text></g><!--class DefaultMcpSession--><g id="elem_DefaultMcpSession"><rect codeLine="18" fill="#F1F1F1" height="80.5938" id="DefaultMcpSession" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="228.3438" x="973" y="615"/><ellipse cx="1016.4001" cy="631" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1019.3688,636.6406 Q1018.7907,636.9375 1018.1501,637.0781 Q1017.5095,637.2344 1016.8063,637.2344 Q1014.3063,637.2344 1012.9782,635.5938 Q1011.6657,633.9375 1011.6657,630.8125 Q1011.6657,627.6875 1012.9782,626.0313 Q1014.3063,624.375 1016.8063,624.375 Q1017.5095,624.375 1018.1501,624.5313 Q1018.8063,624.6875 1019.3688,624.9844 L1019.3688,627.7031 Q1018.7438,627.125 1018.1501,626.8594 Q1017.5563,626.5781 1016.9313,626.5781 Q1015.5876,626.5781 1014.9001,627.6563 Q1014.2126,628.7188 1014.2126,630.8125 Q1014.2126,632.9063 1014.9001,633.9844 Q1015.5876,635.0469 1016.9313,635.0469 Q1017.5563,635.0469 1018.1501,634.7813 Q1018.7438,634.5 1019.3688,633.9219 L1019.3688,636.6406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="133.2324" x="1036.7112" y="635.8467">DefaultMcpSession</text><line style="stroke:#181818;stroke-width:0.5;" x1="974" x2="1200.3438" y1="647" y2="647"/><ellipse cx="984" cy="660.6484" fill="none" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="179.5117" x="993" y="663.9951">interface RequestHandler</text><ellipse cx="984" cy="676.9453" fill="none" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="202.3438" x="993" y="680.292">interface NotificationHandler</text><line style="stroke:#181818;stroke-width:0.5;" x1="974" x2="1200.3438" y1="687.5938" y2="687.5938"/></g><!--class McpClient--><g id="elem_McpClient"><rect codeLine="24" fill="#F1F1F1" height="64.2969" id="McpClient" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="334.7861" x="316.5" y="270.5"/><ellipse cx="445.0464" cy="286.5" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M448.0151,292.1406 Q447.437,292.4375 446.7964,292.5781 Q446.1558,292.7344 445.4526,292.7344 Q442.9526,292.7344 441.6245,291.0938 Q440.312,289.4375 440.312,286.3125 Q440.312,283.1875 441.6245,281.5313 Q442.9526,279.875 445.4526,279.875 Q446.1558,279.875 446.7964,280.0313 Q447.4526,280.1875 448.0151,280.4844 L448.0151,283.2031 Q447.3901,282.625 446.7964,282.3594 Q446.2026,282.0781 445.5776,282.0781 Q444.2339,282.0781 443.5464,283.1563 Q442.8589,284.2188 442.8589,286.3125 Q442.8589,288.4063 443.5464,289.4844 Q444.2339,290.5469 445.5776,290.5469 Q446.2026,290.5469 446.7964,290.2813 Q447.3901,290 448.0151,289.4219 L448.0151,292.1406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="69.1934" x="465.5464" y="291.3467">McpClient</text><line style="stroke:#181818;stroke-width:0.5;" x1="317.5" x2="650.2861" y1="302.5" y2="302.5"/><line style="stroke:#181818;stroke-width:0.5;" x1="317.5" x2="650.2861" y1="310.5" y2="310.5"/><ellipse cx="327.5" cy="324.1484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" text-decoration="underline" textLength="308.7861" x="336.5" y="327.4951">Builder using(ClientMcpTransport transport)</text></g><!--class McpAsyncClient--><g id="elem_McpAsyncClient"><rect codeLine="28" fill="#F1F1F1" height="390.2344" id="McpAsyncClient" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="561.1445" x="135.5" y="960.5"/><ellipse cx="356.3623" cy="976.5" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M359.3311,982.1406 Q358.7529,982.4375 358.1123,982.5781 Q357.4717,982.7344 356.7686,982.7344 Q354.2686,982.7344 352.9404,981.0938 Q351.6279,979.4375 351.6279,976.3125 Q351.6279,973.1875 352.9404,971.5313 Q354.2686,969.875 356.7686,969.875 Q357.4717,969.875 358.1123,970.0313 Q358.7686,970.1875 359.3311,970.4844 L359.3311,973.2031 Q358.7061,972.625 358.1123,972.3594 Q357.5186,972.0781 356.8936,972.0781 Q355.5498,972.0781 354.8623,973.1563 Q354.1748,974.2188 354.1748,976.3125 Q354.1748,978.4063 354.8623,979.4844 Q355.5498,980.5469 356.8936,980.5469 Q357.5186,980.5469 358.1123,980.2813 Q358.7061,980 359.3311,979.4219 L359.3311,982.1406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="110.9199" x="376.8623" y="981.3467">McpAsyncClient</text><line style="stroke:#181818;stroke-width:0.5;" x1="136.5" x2="695.6445" y1="992.5" y2="992.5"/><line style="stroke:#181818;stroke-width:0.5;" x1="136.5" x2="695.6445" y1="1000.5" y2="1000.5"/><ellipse cx="146.5" cy="1014.1484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="237.7471" x="155.5" y="1017.4951">Mono&lt;InitializeResult&gt; initialize()</text><ellipse cx="146.5" cy="1030.4453" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="293.5078" x="155.5" y="1033.792">ServerCapabilities getServerCapabilities()</text><ellipse cx="146.5" cy="1046.7422" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="221.9355" x="155.5" y="1050.0889">Implementation getServerInfo()</text><ellipse cx="146.5" cy="1063.0391" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="282.748" x="155.5" y="1066.3857">ClientCapabilities getClientCapabilities()</text><ellipse cx="146.5" cy="1079.3359" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="216.5557" x="155.5" y="1082.6826">Implementation getClientInfo()</text><ellipse cx="146.5" cy="1095.6328" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="81.0605" x="155.5" y="1098.9795">void close()</text><ellipse cx="146.5" cy="1111.9297" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="215.2568" x="155.5" y="1115.2764">Mono&lt;Void&gt; closeGracefully()</text><ellipse cx="146.5" cy="1128.2266" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="153.0498" x="155.5" y="1131.5732">Mono&lt;Object&gt; ping()</text><ellipse cx="146.5" cy="1144.5234" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="231.7109" x="155.5" y="1147.8701">Mono&lt;Void&gt; addRoot(Root root)</text><ellipse cx="146.5" cy="1160.8203" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="288.1553" x="155.5" y="1164.167">Mono&lt;Void&gt; removeRoot(String rootUri)</text><ellipse cx="146.5" cy="1177.1172" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="310.7959" x="155.5" y="1180.4639">Mono&lt;Void&gt; rootsListChangedNotification()</text><ellipse cx="146.5" cy="1193.4141" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="401.3174" x="155.5" y="1196.7607">Mono&lt;CallToolResult&gt; callTool(CallToolRequest request)</text><ellipse cx="146.5" cy="1209.7109" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="239.5723" x="155.5" y="1213.0576">Mono&lt;ListToolsResult&gt; listTools()</text><ellipse cx="146.5" cy="1226.0078" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="310.707" x="155.5" y="1229.3545">Mono&lt;ListResourcesResult&gt; listResources()</text><ellipse cx="146.5" cy="1242.3047" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="535.1445" x="155.5" y="1245.6514">Mono&lt;ReadResourceResult&gt; readResource(ReadResourceRequest request)</text><ellipse cx="146.5" cy="1258.6016" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="443.2285" x="155.5" y="1261.9482">Mono&lt;ListResourceTemplatesResult&gt; listResourceTemplates()</text><ellipse cx="146.5" cy="1274.8984" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="424.4229" x="155.5" y="1278.2451">Mono&lt;Void&gt; subscribeResource(SubscribeRequest request)</text><ellipse cx="146.5" cy="1291.1953" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="459.6963" x="155.5" y="1294.542">Mono&lt;Void&gt; unsubscribeResource(UnsubscribeRequest request)</text><ellipse cx="146.5" cy="1307.4922" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="281.9824" x="155.5" y="1310.8389">Mono&lt;ListPromptsResult&gt; listPrompts()</text><ellipse cx="146.5" cy="1323.7891" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="461.501" x="155.5" y="1327.1357">Mono&lt;GetPromptResult&gt; getPrompt(GetPromptRequest request)</text><ellipse cx="146.5" cy="1340.0859" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="352.9531" x="155.5" y="1343.4326">Mono&lt;Void&gt; setLoggingLevel(LoggingLevel level)</text></g><!--class McpSyncClient--><g id="elem_McpSyncClient"><rect codeLine="52" fill="#F1F1F1" height="390.2344" id="McpSyncClient" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="499.6006" x="7" y="460.5"/><ellipse cx="201.0825" cy="476.5" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M204.0513,482.1406 Q203.4731,482.4375 202.8325,482.5781 Q202.1919,482.7344 201.4888,482.7344 Q198.9888,482.7344 197.6606,481.0938 Q196.3481,479.4375 196.3481,476.3125 Q196.3481,473.1875 197.6606,471.5313 Q198.9888,469.875 201.4888,469.875 Q202.1919,469.875 202.8325,470.0313 Q203.4888,470.1875 204.0513,470.4844 L204.0513,473.2031 Q203.4263,472.625 202.8325,472.3594 Q202.2388,472.0781 201.6138,472.0781 Q200.27,472.0781 199.5825,473.1563 Q198.895,474.2188 198.895,476.3125 Q198.895,478.4063 199.5825,479.4844 Q200.27,480.5469 201.6138,480.5469 Q202.2388,480.5469 202.8325,480.2813 Q203.4263,480 204.0513,479.4219 L204.0513,482.1406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="102.9355" x="221.5825" y="481.3467">McpSyncClient</text><line style="stroke:#181818;stroke-width:0.5;" x1="8" x2="505.6006" y1="492.5" y2="492.5"/><line style="stroke:#181818;stroke-width:0.5;" x1="8" x2="505.6006" y1="500.5" y2="500.5"/><ellipse cx="18" cy="514.1484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="176.2031" x="27" y="517.4951">InitializeResult initialize()</text><ellipse cx="18" cy="530.4453" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="293.5078" x="27" y="533.792">ServerCapabilities getServerCapabilities()</text><ellipse cx="18" cy="546.7422" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="221.9355" x="27" y="550.0889">Implementation getServerInfo()</text><ellipse cx="18" cy="563.0391" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="282.748" x="27" y="566.3857">ClientCapabilities getClientCapabilities()</text><ellipse cx="18" cy="579.3359" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="216.5557" x="27" y="582.6826">Implementation getClientInfo()</text><ellipse cx="18" cy="595.6328" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="81.0605" x="27" y="598.9795">void close()</text><ellipse cx="18" cy="611.9297" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="178.7666" x="27" y="615.2764">boolean closeGracefully()</text><ellipse cx="18" cy="628.2266" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="91.5059" x="27" y="631.5732">Object ping()</text><ellipse cx="18" cy="644.5234" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="168.875" x="27" y="647.8701">void addRoot(Root root)</text><ellipse cx="18" cy="660.8203" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="225.3193" x="27" y="664.167">void removeRoot(String rootUri)</text><ellipse cx="18" cy="677.1172" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="247.96" x="27" y="680.4639">void rootsListChangedNotification()</text><ellipse cx="18" cy="693.4141" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="339.7734" x="27" y="696.7607">CallToolResult callTool(CallToolRequest request)</text><ellipse cx="18" cy="709.7109" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="178.0283" x="27" y="713.0576">ListToolsResult listTools()</text><ellipse cx="18" cy="726.0078" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="249.1631" x="27" y="729.3545">ListResourcesResult listResources()</text><ellipse cx="18" cy="742.3047" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="473.6006" x="27" y="745.6514">ReadResourceResult readResource(ReadResourceRequest request)</text><ellipse cx="18" cy="758.6016" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="381.6846" x="27" y="761.9482">ListResourceTemplatesResult listResourceTemplates()</text><ellipse cx="18" cy="774.8984" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="361.5869" x="27" y="778.2451">void subscribeResource(SubscribeRequest request)</text><ellipse cx="18" cy="791.1953" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="396.8604" x="27" y="794.542">void unsubscribeResource(UnsubscribeRequest request)</text><ellipse cx="18" cy="807.4922" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="220.4385" x="27" y="810.8389">ListPromptsResult listPrompts()</text><ellipse cx="18" cy="823.7891" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="399.957" x="27" y="827.1357">GetPromptResult getPrompt(GetPromptRequest request)</text><ellipse cx="18" cy="840.0859" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="290.1172" x="27" y="843.4326">void setLoggingLevel(LoggingLevel level)</text></g><!--class McpServer--><g id="elem_McpServer"><rect codeLine="77" fill="#F1F1F1" height="64.2969" id="McpServer" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="340.166" x="1639" y="270.5"/><ellipse cx="1767.5464" cy="286.5" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1770.5151,292.1406 Q1769.937,292.4375 1769.2964,292.5781 Q1768.6558,292.7344 1767.9526,292.7344 Q1765.4526,292.7344 1764.1245,291.0938 Q1762.812,289.4375 1762.812,286.3125 Q1762.812,283.1875 1764.1245,281.5313 Q1765.4526,279.875 1767.9526,279.875 Q1768.6558,279.875 1769.2964,280.0313 Q1769.9526,280.1875 1770.5151,280.4844 L1770.5151,283.2031 Q1769.8901,282.625 1769.2964,282.3594 Q1768.7026,282.0781 1768.0776,282.0781 Q1766.7339,282.0781 1766.0464,283.1563 Q1765.3589,284.2188 1765.3589,286.3125 Q1765.3589,288.4063 1766.0464,289.4844 Q1766.7339,290.5469 1768.0776,290.5469 Q1768.7026,290.5469 1769.2964,290.2813 Q1769.8901,290 1770.5151,289.4219 L1770.5151,292.1406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="74.5732" x="1788.0464" y="291.3467">McpServer</text><line style="stroke:#181818;stroke-width:0.5;" x1="1640" x2="1978.166" y1="302.5" y2="302.5"/><line style="stroke:#181818;stroke-width:0.5;" x1="1640" x2="1978.166" y1="310.5" y2="310.5"/><ellipse cx="1650" cy="324.1484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" text-decoration="underline" textLength="314.166" x="1659" y="327.4951">Builder using(ServerMcpTransport transport)</text></g><!--class McpAsyncServer--><g id="elem_McpAsyncServer"><rect codeLine="81" fill="#F1F1F1" height="406.5313" id="McpAsyncServer" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="584.7559" x="1477.5" y="952"/><ellipse cx="1707.478" cy="968" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1710.4468,973.6406 Q1709.8687,973.9375 1709.228,974.0781 Q1708.5874,974.2344 1707.8843,974.2344 Q1705.3843,974.2344 1704.0562,972.5938 Q1702.7437,970.9375 1702.7437,967.8125 Q1702.7437,964.6875 1704.0562,963.0313 Q1705.3843,961.375 1707.8843,961.375 Q1708.5874,961.375 1709.228,961.5313 Q1709.8843,961.6875 1710.4468,961.9844 L1710.4468,964.7031 Q1709.8218,964.125 1709.228,963.8594 Q1708.6343,963.5781 1708.0093,963.5781 Q1706.6655,963.5781 1705.978,964.6563 Q1705.2905,965.7188 1705.2905,967.8125 Q1705.2905,969.9063 1705.978,970.9844 Q1706.6655,972.0469 1708.0093,972.0469 Q1708.6343,972.0469 1709.228,971.7813 Q1709.8218,971.5 1710.4468,970.9219 L1710.4468,973.6406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="116.2998" x="1727.978" y="972.8467">McpAsyncServer</text><line style="stroke:#181818;stroke-width:0.5;" x1="1478.5" x2="2061.2559" y1="984" y2="984"/><line style="stroke:#181818;stroke-width:0.5;" x1="1478.5" x2="2061.2559" y1="992" y2="992"/><ellipse cx="1488.5" cy="1005.6484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="293.5078" x="1497.5" y="1008.9951">ServerCapabilities getServerCapabilities()</text><ellipse cx="1488.5" cy="1021.9453" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="221.9355" x="1497.5" y="1025.292">Implementation getServerInfo()</text><ellipse cx="1488.5" cy="1038.2422" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="282.748" x="1497.5" y="1041.5889">ClientCapabilities getClientCapabilities()</text><ellipse cx="1488.5" cy="1054.5391" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="216.5557" x="1497.5" y="1057.8857">Implementation getClientInfo()</text><ellipse cx="1488.5" cy="1070.8359" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="81.0605" x="1497.5" y="1074.1826">void close()</text><ellipse cx="1488.5" cy="1087.1328" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="215.2568" x="1497.5" y="1090.4795">Mono&lt;Void&gt; closeGracefully()</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1497.5" y="1106.7764">&#160;</text><ellipse cx="1488.5" cy="1119.7266" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="394.3994" x="1497.5" y="1123.0732">Mono&lt;Void&gt; addTool(ToolRegistration toolRegistration)</text><ellipse cx="1488.5" cy="1136.0234" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="304.9238" x="1497.5" y="1139.3701">Mono&lt;Void&gt; removeTool(String toolName)</text><ellipse cx="1488.5" cy="1152.3203" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="271.6943" x="1497.5" y="1155.667">Mono&lt;Void&gt; notifyToolsListChanged()</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1497.5" y="1171.9639">&#160;</text><ellipse cx="1488.5" cy="1184.9141" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="470.2646" x="1497.5" y="1188.2607">Mono&lt;Void&gt; addResource(ResourceRegistration resourceHandler)</text><ellipse cx="1488.5" cy="1201.2109" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="353.7393" x="1497.5" y="1204.5576">Mono&lt;Void&gt; removeResource(String resourceUri)</text><ellipse cx="1488.5" cy="1217.5078" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="307.2617" x="1497.5" y="1220.8545">Mono&lt;Void&gt; notifyResourcesListChanged()</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1497.5" y="1237.1514">&#160;</text><ellipse cx="1488.5" cy="1250.1016" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="461.5215" x="1497.5" y="1253.4482">Mono&lt;Void&gt; addPrompt(PromptRegistration promptRegistration)</text><ellipse cx="1488.5" cy="1266.3984" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="350.8408" x="1497.5" y="1269.7451">Mono&lt;Void&gt; removePrompt(String promptName)</text><ellipse cx="1488.5" cy="1282.6953" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="292.8994" x="1497.5" y="1286.042">Mono&lt;Void&gt; notifyPromptsListChanged()</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1497.5" y="1302.3389">&#160;</text><ellipse cx="1488.5" cy="1315.2891" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="520.7002" x="1497.5" y="1318.6357">Mono&lt;Void&gt; loggingNotification(LoggingMessageNotification notification)</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1497.5" y="1334.9326">&#160;</text><ellipse cx="1488.5" cy="1347.8828" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="558.7559" x="1497.5" y="1351.2295">Mono&lt;CreateMessageResult&gt; createMessage(CreateMessageRequest request)</text></g><!--class McpSyncServer--><g id="elem_McpSyncServer"><rect codeLine="112" fill="#F1F1F1" height="439.125" id="McpSyncServer" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="523.2119" x="1764.5" y="436"/><ellipse cx="1967.6982" cy="452" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1970.667,457.6406 Q1970.0889,457.9375 1969.4482,458.0781 Q1968.8076,458.2344 1968.1045,458.2344 Q1965.6045,458.2344 1964.2764,456.5938 Q1962.9639,454.9375 1962.9639,451.8125 Q1962.9639,448.6875 1964.2764,447.0313 Q1965.6045,445.375 1968.1045,445.375 Q1968.8076,445.375 1969.4482,445.5313 Q1970.1045,445.6875 1970.667,445.9844 L1970.667,448.7031 Q1970.042,448.125 1969.4482,447.8594 Q1968.8545,447.5781 1968.2295,447.5781 Q1966.8857,447.5781 1966.1982,448.6563 Q1965.5107,449.7188 1965.5107,451.8125 Q1965.5107,453.9063 1966.1982,454.9844 Q1966.8857,456.0469 1968.2295,456.0469 Q1968.8545,456.0469 1969.4482,455.7813 Q1970.042,455.5 1970.667,454.9219 L1970.667,457.6406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="108.3154" x="1988.1982" y="456.8467">McpSyncServer</text><line style="stroke:#181818;stroke-width:0.5;" x1="1765.5" x2="2286.7119" y1="468" y2="468"/><line style="stroke:#181818;stroke-width:0.5;" x1="1765.5" x2="2286.7119" y1="476" y2="476"/><ellipse cx="1775.5" cy="489.6484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="242.2998" x="1784.5" y="492.9951">McpAsyncServer getAsyncServer()</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1784.5" y="509.292">&#160;</text><ellipse cx="1775.5" cy="522.2422" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="293.5078" x="1784.5" y="525.5889">ServerCapabilities getServerCapabilities()</text><ellipse cx="1775.5" cy="538.5391" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="221.9355" x="1784.5" y="541.8857">Implementation getServerInfo()</text><ellipse cx="1775.5" cy="554.8359" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="282.748" x="1784.5" y="558.1826">ClientCapabilities getClientCapabilities()</text><ellipse cx="1775.5" cy="571.1328" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="216.5557" x="1784.5" y="574.4795">Implementation getClientInfo()</text><ellipse cx="1775.5" cy="587.4297" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="81.0605" x="1784.5" y="590.7764">void close()</text><ellipse cx="1775.5" cy="603.7266" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="152.4209" x="1784.5" y="607.0732">void closeGracefully()</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1784.5" y="623.3701">&#160;</text><ellipse cx="1775.5" cy="636.3203" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="301.6357" x="1784.5" y="639.667">void addTool(ToolRegistration toolHandler)</text><ellipse cx="1775.5" cy="652.6172" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="242.0879" x="1784.5" y="655.9639">void removeTool(String toolName)</text><ellipse cx="1775.5" cy="668.9141" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="208.8584" x="1784.5" y="672.2607">void notifyToolsListChanged()</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1784.5" y="688.5576">&#160;</text><ellipse cx="1775.5" cy="701.5078" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="407.4287" x="1784.5" y="704.8545">void addResource(ResourceRegistration resourceHandler)</text><ellipse cx="1775.5" cy="717.8047" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="290.9033" x="1784.5" y="721.1514">void removeResource(String resourceUri)</text><ellipse cx="1775.5" cy="734.1016" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="244.4258" x="1784.5" y="737.4482">void notifyResourcesListChanged()</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1784.5" y="753.7451">&#160;</text><ellipse cx="1775.5" cy="766.6953" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="398.6855" x="1784.5" y="770.042">void addPrompt(PromptRegistration promptRegistration)</text><ellipse cx="1775.5" cy="782.9922" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="288.0049" x="1784.5" y="786.3389">void removePrompt(String promptName)</text><ellipse cx="1775.5" cy="799.2891" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="230.0635" x="1784.5" y="802.6357">void notifyPromptsListChanged()</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1784.5" y="818.9326">&#160;</text><ellipse cx="1775.5" cy="831.8828" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="457.8643" x="1784.5" y="835.2295">void loggingNotification(LoggingMessageNotification notification)</text><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="4.4502" x="1784.5" y="851.5264">&#160;</text><ellipse cx="1775.5" cy="864.4766" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="497.2119" x="1784.5" y="867.8232">CreateMessageResult createMessage(CreateMessageRequest request)</text></g><!--class StdioClientTransport--><g id="elem_StdioClientTransport"><rect codeLine="145" fill="#F1F1F1" height="80.5938" id="StdioClientTransport" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="412.8525" x="639.5" y="1529"/><ellipse cx="769.6768" cy="1545" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M772.6455,1550.6406 Q772.0674,1550.9375 771.4268,1551.0781 Q770.7861,1551.2344 770.083,1551.2344 Q767.583,1551.2344 766.2549,1549.5938 Q764.9424,1547.9375 764.9424,1544.8125 Q764.9424,1541.6875 766.2549,1540.0313 Q767.583,1538.375 770.083,1538.375 Q770.7861,1538.375 771.4268,1538.5313 Q772.083,1538.6875 772.6455,1538.9844 L772.6455,1541.7031 Q772.0205,1541.125 771.4268,1540.8594 Q770.833,1540.5781 770.208,1540.5781 Q768.8643,1540.5781 768.1768,1541.6563 Q767.4893,1542.7188 767.4893,1544.8125 Q767.4893,1546.9063 768.1768,1547.9844 Q768.8643,1549.0469 770.208,1549.0469 Q770.833,1549.0469 771.4268,1548.7813 Q772.0205,1548.5 772.6455,1547.9219 L772.6455,1550.6406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="143.999" x="790.1768" y="1549.8467">StdioClientTransport</text><line style="stroke:#181818;stroke-width:0.5;" x1="640.5" x2="1051.3525" y1="1561" y2="1561"/><line style="stroke:#181818;stroke-width:0.5;" x1="640.5" x2="1051.3525" y1="1569" y2="1569"/><ellipse cx="650.5" cy="1582.6484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="386.8525" x="659.5" y="1585.9951">void setErrorHandler(Consumer&lt;String&gt; errorHandler)</text><ellipse cx="650.5" cy="1598.9453" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="247.3584" x="659.5" y="1602.292">Sinks.Many&lt;String&gt; getErrorSink()</text></g><!--class ClientMcpTransport--><g id="elem_ClientMcpTransport"><rect fill="#F1F1F1" height="48" id="ClientMcpTransport" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="168.9443" x="584.5" y="1420"/><ellipse cx="599.5" cy="1436" fill="#B4A7E5" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M595.4219,1431.7656 L595.4219,1429.6094 L602.8125,1429.6094 L602.8125,1431.7656 L600.3438,1431.7656 L600.3438,1439.8438 L602.8125,1439.8438 L602.8125,1442 L595.4219,1442 L595.4219,1439.8438 L597.8906,1439.8438 L597.8906,1431.7656 L595.4219,1431.7656 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" font-style="italic" lengthAdjust="spacing" textLength="136.9443" x="613.5" y="1440.8467">ClientMcpTransport</text><line style="stroke:#181818;stroke-width:0.5;" x1="585.5" x2="752.4443" y1="1452" y2="1452"/><line style="stroke:#181818;stroke-width:0.5;" x1="585.5" x2="752.4443" y1="1460" y2="1460"/></g><!--class StdioServerTransport--><g id="elem_StdioServerTransport"><rect codeLine="150" fill="#F1F1F1" height="48" id="StdioServerTransport" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="181.3789" x="1433.5" y="1545.5"/><ellipse cx="1448.5" cy="1561.5" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1451.4688,1567.1406 Q1450.8906,1567.4375 1450.25,1567.5781 Q1449.6094,1567.7344 1448.9063,1567.7344 Q1446.4063,1567.7344 1445.0781,1566.0938 Q1443.7656,1564.4375 1443.7656,1561.3125 Q1443.7656,1558.1875 1445.0781,1556.5313 Q1446.4063,1554.875 1448.9063,1554.875 Q1449.6094,1554.875 1450.25,1555.0313 Q1450.9063,1555.1875 1451.4688,1555.4844 L1451.4688,1558.2031 Q1450.8438,1557.625 1450.25,1557.3594 Q1449.6563,1557.0781 1449.0313,1557.0781 Q1447.6875,1557.0781 1447,1558.1563 Q1446.3125,1559.2188 1446.3125,1561.3125 Q1446.3125,1563.4063 1447,1564.4844 Q1447.6875,1565.5469 1449.0313,1565.5469 Q1449.6563,1565.5469 1450.25,1565.2813 Q1450.8438,1565 1451.4688,1564.4219 L1451.4688,1567.1406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="149.3789" x="1462.5" y="1566.3467">StdioServerTransport</text><line style="stroke:#181818;stroke-width:0.5;" x1="1434.5" x2="1613.8789" y1="1577.5" y2="1577.5"/><line style="stroke:#181818;stroke-width:0.5;" x1="1434.5" x2="1613.8789" y1="1585.5" y2="1585.5"/></g><!--class ServerMcpTransport--><g id="elem_ServerMcpTransport"><rect fill="#F1F1F1" height="48" id="ServerMcpTransport" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="174.3242" x="1437" y="1420"/><ellipse cx="1452" cy="1436" fill="#B4A7E5" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1447.9219,1431.7656 L1447.9219,1429.6094 L1455.3125,1429.6094 L1455.3125,1431.7656 L1452.8438,1431.7656 L1452.8438,1439.8438 L1455.3125,1439.8438 L1455.3125,1442 L1447.9219,1442 L1447.9219,1439.8438 L1450.3906,1439.8438 L1450.3906,1431.7656 L1447.9219,1431.7656 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" font-style="italic" lengthAdjust="spacing" textLength="142.3242" x="1466" y="1440.8467">ServerMcpTransport</text><line style="stroke:#181818;stroke-width:0.5;" x1="1438" x2="1610.3242" y1="1452" y2="1452"/><line style="stroke:#181818;stroke-width:0.5;" x1="1438" x2="1610.3242" y1="1460" y2="1460"/></g><!--class HttpServletSseServerTransport--><g id="elem_HttpServletSseServerTransport"><rect codeLine="154" fill="#F1F1F1" height="48" id="HttpServletSseServerTransport" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="250.3809" x="1650" y="1545.5"/><ellipse cx="1665" cy="1561.5" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1667.9688,1567.1406 Q1667.3906,1567.4375 1666.75,1567.5781 Q1666.1094,1567.7344 1665.4063,1567.7344 Q1662.9063,1567.7344 1661.5781,1566.0938 Q1660.2656,1564.4375 1660.2656,1561.3125 Q1660.2656,1558.1875 1661.5781,1556.5313 Q1662.9063,1554.875 1665.4063,1554.875 Q1666.1094,1554.875 1666.75,1555.0313 Q1667.4063,1555.1875 1667.9688,1555.4844 L1667.9688,1558.2031 Q1667.3438,1557.625 1666.75,1557.3594 Q1666.1563,1557.0781 1665.5313,1557.0781 Q1664.1875,1557.0781 1663.5,1558.1563 Q1662.8125,1559.2188 1662.8125,1561.3125 Q1662.8125,1563.4063 1663.5,1564.4844 Q1664.1875,1565.5469 1665.5313,1565.5469 Q1666.1563,1565.5469 1666.75,1565.2813 Q1667.3438,1565 1667.9688,1564.4219 L1667.9688,1567.1406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="218.3809" x="1679" y="1566.3467">HttpServletSseServerTransport</text><line style="stroke:#181818;stroke-width:0.5;" x1="1651" x2="1899.3809" y1="1577.5" y2="1577.5"/><line style="stroke:#181818;stroke-width:0.5;" x1="1651" x2="1899.3809" y1="1585.5" y2="1585.5"/></g><!--class HttpClientSseClientTransport--><g id="elem_HttpClientSseClientTransport"><rect codeLine="158" fill="#F1F1F1" height="48" id="HttpClientSseClientTransport" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="235.998" x="107" y="1545.5"/><ellipse cx="122" cy="1561.5" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M124.9688,1567.1406 Q124.3906,1567.4375 123.75,1567.5781 Q123.1094,1567.7344 122.4063,1567.7344 Q119.9063,1567.7344 118.5781,1566.0938 Q117.2656,1564.4375 117.2656,1561.3125 Q117.2656,1558.1875 118.5781,1556.5313 Q119.9063,1554.875 122.4063,1554.875 Q123.1094,1554.875 123.75,1555.0313 Q124.4063,1555.1875 124.9688,1555.4844 L124.9688,1558.2031 Q124.3438,1557.625 123.75,1557.3594 Q123.1563,1557.0781 122.5313,1557.0781 Q121.1875,1557.0781 120.5,1558.1563 Q119.8125,1559.2188 119.8125,1561.3125 Q119.8125,1563.4063 120.5,1564.4844 Q121.1875,1565.5469 122.5313,1565.5469 Q123.1563,1565.5469 123.75,1565.2813 Q124.3438,1565 124.9688,1564.4219 L124.9688,1567.1406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="203.998" x="136" y="1566.3467">HttpClientSseClientTransport</text><line style="stroke:#181818;stroke-width:0.5;" x1="108" x2="341.998" y1="1577.5" y2="1577.5"/><line style="stroke:#181818;stroke-width:0.5;" x1="108" x2="341.998" y1="1585.5" y2="1585.5"/></g><!--class WebFluxSseClientTransport--><g id="elem_WebFluxSseClientTransport"><rect codeLine="162" fill="#F1F1F1" height="48" id="WebFluxSseClientTransport" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="225.5186" x="378" y="1545.5"/><ellipse cx="393" cy="1561.5" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M395.9688,1567.1406 Q395.3906,1567.4375 394.75,1567.5781 Q394.1094,1567.7344 393.4063,1567.7344 Q390.9063,1567.7344 389.5781,1566.0938 Q388.2656,1564.4375 388.2656,1561.3125 Q388.2656,1558.1875 389.5781,1556.5313 Q390.9063,1554.875 393.4063,1554.875 Q394.1094,1554.875 394.75,1555.0313 Q395.4063,1555.1875 395.9688,1555.4844 L395.9688,1558.2031 Q395.3438,1557.625 394.75,1557.3594 Q394.1563,1557.0781 393.5313,1557.0781 Q392.1875,1557.0781 391.5,1558.1563 Q390.8125,1559.2188 390.8125,1561.3125 Q390.8125,1563.4063 391.5,1564.4844 Q392.1875,1565.5469 393.5313,1565.5469 Q394.1563,1565.5469 394.75,1565.2813 Q395.3438,1565 395.9688,1564.4219 L395.9688,1567.1406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="193.5186" x="407" y="1566.3467">WebFluxSseClientTransport</text><line style="stroke:#181818;stroke-width:0.5;" x1="379" x2="602.5186" y1="1577.5" y2="1577.5"/><line style="stroke:#181818;stroke-width:0.5;" x1="379" x2="602.5186" y1="1585.5" y2="1585.5"/></g><!--class WebFluxSseServerTransport--><g id="elem_WebFluxSseServerTransport"><rect codeLine="166" fill="#F1F1F1" height="64.2969" id="WebFluxSseServerTransport" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="309.9307" x="1935" y="1537.5"/><ellipse cx="1986.2661" cy="1553.5" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1989.2349,1559.1406 Q1988.6567,1559.4375 1988.0161,1559.5781 Q1987.3755,1559.7344 1986.6724,1559.7344 Q1984.1724,1559.7344 1982.8442,1558.0938 Q1981.5317,1556.4375 1981.5317,1553.3125 Q1981.5317,1550.1875 1982.8442,1548.5313 Q1984.1724,1546.875 1986.6724,1546.875 Q1987.3755,1546.875 1988.0161,1547.0313 Q1988.6724,1547.1875 1989.2349,1547.4844 L1989.2349,1550.2031 Q1988.6099,1549.625 1988.0161,1549.3594 Q1987.4224,1549.0781 1986.7974,1549.0781 Q1985.4536,1549.0781 1984.7661,1550.1563 Q1984.0786,1551.2188 1984.0786,1553.3125 Q1984.0786,1555.4063 1984.7661,1556.4844 Q1985.4536,1557.5469 1986.7974,1557.5469 Q1987.4224,1557.5469 1988.0161,1557.2813 Q1988.6099,1557 1989.2349,1556.4219 L1989.2349,1559.1406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="198.8984" x="2006.7661" y="1558.3467">WebFluxSseServerTransport</text><line style="stroke:#181818;stroke-width:0.5;" x1="1936" x2="2243.9307" y1="1569.5" y2="1569.5"/><line style="stroke:#181818;stroke-width:0.5;" x1="1936" x2="2243.9307" y1="1577.5" y2="1577.5"/><ellipse cx="1946" cy="1591.1484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="283.9307" x="1955" y="1594.4951">RouterFunction&lt;?&gt; getRouterFunction()</text></g><!--class WebMvcSseServerTransport--><g id="elem_WebMvcSseServerTransport"><rect codeLine="170" fill="#F1F1F1" height="64.2969" id="WebMvcSseServerTransport" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="309.9307" x="1088" y="1537.5"/><ellipse cx="1139.7856" cy="1553.5" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1142.7544,1559.1406 Q1142.1763,1559.4375 1141.5356,1559.5781 Q1140.895,1559.7344 1140.1919,1559.7344 Q1137.6919,1559.7344 1136.3638,1558.0938 Q1135.0513,1556.4375 1135.0513,1553.3125 Q1135.0513,1550.1875 1136.3638,1548.5313 Q1137.6919,1546.875 1140.1919,1546.875 Q1140.895,1546.875 1141.5356,1547.0313 Q1142.1919,1547.1875 1142.7544,1547.4844 L1142.7544,1550.2031 Q1142.1294,1549.625 1141.5356,1549.3594 Q1140.9419,1549.0781 1140.3169,1549.0781 Q1138.9731,1549.0781 1138.2856,1550.1563 Q1137.5981,1551.2188 1137.5981,1553.3125 Q1137.5981,1555.4063 1138.2856,1556.4844 Q1138.9731,1557.5469 1140.3169,1557.5469 Q1140.9419,1557.5469 1141.5356,1557.2813 Q1142.1294,1557 1142.7544,1556.4219 L1142.7544,1559.1406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="197.8594" x="1160.2856" y="1558.3467">WebMvcSseServerTransport</text><line style="stroke:#181818;stroke-width:0.5;" x1="1089" x2="1396.9307" y1="1569.5" y2="1569.5"/><line style="stroke:#181818;stroke-width:0.5;" x1="1089" x2="1396.9307" y1="1577.5" y2="1577.5"/><ellipse cx="1099" cy="1591.1484" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="283.9307" x="1108" y="1594.4951">RouterFunction&lt;?&gt; getRouterFunction()</text></g><!--class McpSchema--><g id="elem_McpSchema"><rect codeLine="176" fill="#F1F1F1" height="162.0781" id="McpSchema" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="357.0918" x="778.5" y="7"/><ellipse cx="910.3208" cy="23" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M913.2896,28.6406 Q912.7114,28.9375 912.0708,29.0781 Q911.4302,29.2344 910.7271,29.2344 Q908.2271,29.2344 906.8989,27.5938 Q905.5864,25.9375 905.5864,22.8125 Q905.5864,19.6875 906.8989,18.0313 Q908.2271,16.375 910.7271,16.375 Q911.4302,16.375 912.0708,16.5313 Q912.7271,16.6875 913.2896,16.9844 L913.2896,19.7031 Q912.6646,19.125 912.0708,18.8594 Q911.4771,18.5781 910.8521,18.5781 Q909.5083,18.5781 908.8208,19.6563 Q908.1333,20.7188 908.1333,22.8125 Q908.1333,24.9063 908.8208,25.9844 Q909.5083,27.0469 910.8521,27.0469 Q911.4771,27.0469 912.0708,26.7813 Q912.6646,26.5 913.2896,25.9219 L913.2896,28.6406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="84.9502" x="930.8208" y="27.8467">McpSchema</text><line style="stroke:#181818;stroke-width:0.5;" x1="779.5" x2="1134.5918" y1="39" y2="39"/><ellipse cx="789.5" cy="52.6484" fill="none" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="117.0176" x="798.5" y="55.9951">class ErrorCodes</text><ellipse cx="789.5" cy="68.9453" fill="none" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="124.3867" x="798.5" y="72.292">interface Request</text><ellipse cx="789.5" cy="85.2422" fill="none" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="190.7021" x="798.5" y="88.5889">interface JSONRPCMessage</text><ellipse cx="789.5" cy="101.5391" fill="none" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="195.002" x="798.5" y="104.8857">interface ResourceContents</text><ellipse cx="789.5" cy="117.8359" fill="none" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="122.5684" x="798.5" y="121.1826">interface Content</text><ellipse cx="789.5" cy="134.1328" fill="none" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="194.4619" x="798.5" y="137.4795">interface ServerCapabilities</text><line style="stroke:#181818;stroke-width:0.5;" x1="779.5" x2="1134.5918" y1="144.7813" y2="144.7813"/><ellipse cx="789.5" cy="158.4297" fill="#84BE84" rx="3" ry="3" style="stroke:#038048;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" text-decoration="underline" textLength="331.0918" x="798.5" y="161.7764">JSONRPCMessage deserializeJsonRpcMessage()</text></g><!--class McpError--><g id="elem_McpError"><rect codeLine="186" fill="#F1F1F1" height="48" id="McpError" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:0.5;" width="95.3418" x="1170.5" y="64"/><ellipse cx="1185.5" cy="80" fill="#ADD1B2" rx="11" ry="11" style="stroke:#181818;stroke-width:1;"/><path d="M1188.4688,85.6406 Q1187.8906,85.9375 1187.25,86.0781 Q1186.6094,86.2344 1185.9063,86.2344 Q1183.4063,86.2344 1182.0781,84.5938 Q1180.7656,82.9375 1180.7656,79.8125 Q1180.7656,76.6875 1182.0781,75.0313 Q1183.4063,73.375 1185.9063,73.375 Q1186.6094,73.375 1187.25,73.5313 Q1187.9063,73.6875 1188.4688,73.9844 L1188.4688,76.7031 Q1187.8438,76.125 1187.25,75.8594 Q1186.6563,75.5781 1186.0313,75.5781 Q1184.6875,75.5781 1184,76.6563 Q1183.3125,77.7188 1183.3125,79.8125 Q1183.3125,81.9063 1184,82.9844 Q1184.6875,84.0469 1186.0313,84.0469 Q1186.6563,84.0469 1187.25,83.7813 Q1187.8438,83.5 1188.4688,82.9219 L1188.4688,85.6406 Z " fill="#000000"/><text fill="#000000" font-family="sans-serif" font-size="14" lengthAdjust="spacing" textLength="63.3418" x="1199.5" y="84.8467">McpError</text><line style="stroke:#181818;stroke-width:0.5;" x1="1171.5" x2="1264.8418" y1="96" y2="96"/><line style="stroke:#181818;stroke-width:0.5;" x1="1171.5" x2="1264.8418" y1="104" y2="104"/></g><!--reverse link ClientMcpTransport to StdioClientTransport--><g id="link_ClientMcpTransport_StdioClientTransport"><path d="M717.0526,1478.5288 C741.4926,1495.5788 760.51,1508.85 789.18,1528.86 " fill="none" id="ClientMcpTransport-backto-StdioClientTransport" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="none" points="702.29,1468.23,713.6197,1483.4497,720.4855,1473.6079,702.29,1468.23" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link ServerMcpTransport to StdioServerTransport--><g id="link_ServerMcpTransport_StdioServerTransport"><path d="M1524,1486.23 C1524,1508.31 1524,1523.33 1524,1545.37 " fill="none" id="ServerMcpTransport-backto-StdioServerTransport" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="none" points="1524,1468.23,1518,1486.23,1530,1486.23,1524,1468.23" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link ServerMcpTransport to HttpServletSseServerTransport--><g id="link_ServerMcpTransport_HttpServletSseServerTransport"><path d="M1587.0691,1476.0303 C1631.8991,1498.1003 1682.99,1523.23 1727.89,1545.32 " fill="none" id="ServerMcpTransport-backto-HttpServletSseServerTransport" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="none" points="1570.92,1468.08,1584.419,1481.4133,1589.7192,1470.6472,1570.92,1468.08" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link ClientMcpTransport to HttpClientSseClientTransport--><g id="link_ClientMcpTransport_HttpClientSseClientTransport"><path d="M566.9043,1472.2225 C504.7443,1488.8925 435.71,1507.64 360,1529 C341.43,1534.24 321.47,1540.01 302.74,1545.48 " fill="none" id="ClientMcpTransport-backto-HttpClientSseClientTransport" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="none" points="584.29,1467.56,565.3502,1466.4272,568.4585,1478.0177,584.29,1467.56" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link ClientMcpTransport to WebFluxSseClientTransport--><g id="link_ClientMcpTransport_WebFluxSseClientTransport"><path d="M620.7316,1478.4917 C588.9116,1500.5717 556.1,1523.33 524.33,1545.37 " fill="none" id="ClientMcpTransport-backto-WebFluxSseClientTransport" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="none" points="635.52,1468.23,617.311,1473.5623,624.1522,1483.4212,635.52,1468.23" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link ServerMcpTransport to WebFluxSseServerTransport--><g id="link_ServerMcpTransport_WebFluxSseServerTransport"><path d="M1628.947,1466.9032 C1708.847,1483.6532 1812.67,1505.68 1918,1529 C1930.26,1531.72 1943.01,1534.57 1955.77,1537.46 " fill="none" id="ServerMcpTransport-backto-WebFluxSseServerTransport" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="none" points="1611.33,1463.21,1627.716,1472.7755,1630.1781,1461.0308,1611.33,1463.21" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link ServerMcpTransport to WebMvcSseServerTransport--><g id="link_ServerMcpTransport_WebMvcSseServerTransport"><path d="M1455.0021,1475.3242 C1410.4421,1494.9142 1362.61,1515.93 1313.56,1537.49 " fill="none" id="ServerMcpTransport-backto-WebMvcSseServerTransport" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="none" points="1471.48,1468.08,1452.5874,1469.8316,1457.4168,1480.8168,1471.48,1468.08" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link McpTransport to ClientMcpTransport--><g id="link_McpTransport_ClientMcpTransport"><path codeLine="190" d="M979.3828,1230.2564 C887.2628,1293.3964 765.82,1376.64 702.99,1419.7 " fill="none" id="McpTransport-backto-ClientMcpTransport" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="none" points="994.23,1220.08,975.9906,1225.3074,982.7749,1235.2055,994.23,1220.08" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link McpTransport to ServerMcpTransport--><g id="link_McpTransport_ServerMcpTransport"><path codeLine="191" d="M1199.0331,1229.9494 C1295.4731,1293.1794 1423.15,1376.88 1488.72,1419.87 " fill="none" id="McpTransport-backto-ServerMcpTransport" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="none" points="1183.98,1220.08,1195.7433,1234.9671,1202.3229,1224.9317,1183.98,1220.08" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link McpSession to DefaultMcpSession--><g id="link_McpSession_DefaultMcpSession"><path codeLine="193" d="M1087,377.12 C1087,448.45 1087,552.39 1087,614.94 " fill="none" id="McpSession-backto-DefaultMcpSession" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="none" points="1087,359.12,1081,377.12,1093,377.12,1087,359.12" style="stroke:#181818;stroke-width:1;"/></g><!--link DefaultMcpSession to McpAsyncClient--><g id="link_DefaultMcpSession_McpAsyncClient"><path codeLine="194" d="M1033.51,696.2 C956.43,753.41 818.5558,855.728 687.0458,953.338 " fill="none" id="DefaultMcpSession-to-McpAsyncClient" style="stroke:#181818;stroke-width:1;"/><polygon fill="none" points="677.41,960.49,684.6119,960.126,687.0458,953.338,679.8439,953.7021,677.41,960.49" style="stroke:#181818;stroke-width:1;"/></g><!--link DefaultMcpSession to McpAsyncServer--><g id="link_DefaultMcpSession_McpAsyncServer"><path codeLine="195" d="M1141.45,696.2 C1217.62,751.74 1351.6438,849.46 1482.4538,944.84 " fill="none" id="DefaultMcpSession-to-McpAsyncServer" style="stroke:#181818;stroke-width:1;"/><polygon fill="none" points="1492.15,951.91,1489.6586,945.143,1482.4538,944.84,1484.9453,951.6071,1492.15,951.91" style="stroke:#181818;stroke-width:1;"/></g><!--link McpClient to McpAsyncClient--><g id="link_McpClient_McpAsyncClient"><path codeLine="197" d="M496.28,334.76 C505.99,361.24 518.75,400.46 524,436 C552.5,629.02 559.77,683.2 524,875 C518.75,903.13 512.6628,926.3731 503.3728,954.4831 " fill="none" id="McpClient-to-McpAsyncClient" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="#181818" points="501.49,960.18,508.1121,952.8898,503.059,955.4325,500.5162,950.3794,501.49,960.18" style="stroke:#181818;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="48.3247" x="550" y="660.0669">creates</text></g><!--link McpClient to McpSyncClient--><g id="link_McpClient_McpSyncClient"><path codeLine="198" d="M463.86,334.65 C444.76,364.18 417.6084,406.1618 385.9184,455.1618 " fill="none" id="McpClient-to-McpSyncClient" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="#181818" points="382.66,460.2,390.9063,454.815,385.3753,456.0015,384.1888,450.4705,382.66,460.2" style="stroke:#181818;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="48.3247" x="425" y="402.0669">creates</text></g><!--link McpSyncClient to McpAsyncClient--><g id="link_McpSyncClient_McpAsyncClient"><path codeLine="199" d="M319.04,850.82 C330.5,886.72 340.6454,918.4842 352.1054,954.3842 " fill="none" id="McpSyncClient-to-McpAsyncClient" style="stroke:#181818;stroke-width:1;"/><polygon fill="#181818" points="353.93,960.1,355.0036,950.3098,352.4095,955.3368,347.3825,952.7427,353.93,960.1" style="stroke:#181818;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="81.1294" x="343" y="918.0669">delegates to</text></g><!--link McpServer to McpAsyncServer--><g id="link_McpServer_McpAsyncServer"><path codeLine="201" d="M1771.45,334.52 C1745.02,358.95 1711.8,395.55 1697,436 C1636.02,602.61 1663.2546,798.7393 1701.1646,946.0493 " fill="none" id="McpServer-to-McpAsyncServer" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="#181818" points="1702.66,951.86,1704.2907,942.1471,1701.4139,947.0178,1696.5432,944.1409,1702.66,951.86" style="stroke:#181818;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="48.3247" x="1698" y="660.0669">creates</text></g><!--link McpServer to McpSyncServer--><g id="link_McpServer_McpSyncServer"><path codeLine="202" d="M1828.26,334.65 C1843.45,359.23 1862.9848,390.8266 1887.6348,430.6966 " fill="none" id="McpServer-to-McpSyncServer" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="#181818" points="1890.79,435.8,1889.4594,426.0414,1888.1607,431.5472,1882.6549,430.2484,1890.79,435.8" style="stroke:#181818;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="48.3247" x="1868" y="402.0669">creates</text></g><!--reverse link McpSyncServer to McpAsyncServer--><g id="link_McpSyncServer_McpAsyncServer"><path codeLine="203" d="M1908.0431,885.9621 C1894.9531,911.4221 1887.13,926.64 1874.16,951.87 " fill="none" id="McpSyncServer-backto-McpAsyncServer" style="stroke:#181818;stroke-width:1;"/><polygon fill="none" points="1913.53,875.29,1907.2292,878.7971,1908.0431,885.9621,1914.3439,882.455,1913.53,875.29" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link DefaultMcpSession to McpTransport--><g id="link_DefaultMcpSession_McpTransport"><path codeLine="205" d="M1087,708.41 C1087,794.62 1087,986.83 1087,1091 " fill="none" id="DefaultMcpSession-backto-McpTransport" style="stroke:#181818;stroke-width:1;"/><polygon fill="none" points="1087,696.41,1083,702.41,1087,708.41,1091,702.41,1087,696.41" style="stroke:#181818;stroke-width:1;"/></g><!--reverse link McpSchema to McpSession--><g id="link_McpSchema_McpSession"><path codeLine="206" d="M1009.0909,174.1484 C1024.7809,199.7984 1038.67,222.5 1053.05,246 " fill="none" id="McpSchema-backto-McpSession" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="#181818" points="1005.96,169.03,1007.2441,178.7948,1008.5691,173.2953,1014.0686,174.6203,1005.96,169.03" style="stroke:#181818;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="29.7832" x="1035" y="212.0669">uses</text></g><!--link McpError to McpSession--><g id="link_McpError_McpSession"><path codeLine="207" d="M1203.73,112.15 C1184.1,143.99 1151.2982,197.1923 1124.4682,240.7223 " fill="none" id="McpError-to-McpSession" style="stroke:#181818;stroke-width:1;stroke-dasharray:7.0,7.0;"/><polygon fill="#181818" points="1121.32,245.83,1129.4474,240.2672,1123.9435,241.5736,1122.6371,236.0696,1121.32,245.83" style="stroke:#181818;stroke-width:1;"/><text fill="#000000" font-family="sans-serif" font-size="13" lengthAdjust="spacing" textLength="44.04" x="1149" y="212.0669">throws</text></g><!--SRC=[tLZTSk8s5BxdANGNxpJa0NOOEYrjDjb9iXbWssjX7y2ja5n9Jfkc- -xLhot9me6qlTZEC82FllEZe_FfoBf02yO1tL89V8jB49FQ_qNtPRFcc8g6SObU9WXzSyyec_t4wcgEIaOfbBAuRcafQqPdPkpZwjF3yd5n3qBW7SmlKKuwHtjCAmByNM9J0AqSg8XrqC7-6eqd1KObOGAAr8AHVk0g-crBoBCTdwtdQ8rQUi1Sx36vvknGVDhyeg975PRu4gsV6rZ25ZZG4ZHQMi6xoPT9d8-L2aDDrcP38utljGrz2R-r86InahocEnMotBFg4ZbNt8u-OeuFOipdC2SFJDRRkiGwpwdrUzpChCXxcgF6-3WfDr4krMmlN3qS6W87eDBuH0k2XL2rKUfVz0DiSKjaceu-KIuHDtQLux5mBXvW_P9Q-KjSAHzERboy21rG-GLztzQa0evQeIPUM4XKhjB_CxFgZ7qddcaPMZJvkQMrh36f_rGB8DJCvgZk93PDA-1Fm1UumPkQg24GQ0ToABNe97iTyfPkcKNO459xG-anUnRPspkN4cQyAnUTmrGDLzMICLdeByJLLmhWS61FO32k93NgCwy7G2KMTxMG2qNx7SJLt8CNc90rOyGlGUcUYtx0L9KdKg-fRMk0yAh42ueOfCPPozKc5m8xOG1U0gwyt6Dv82jYm4XS7hG6jOPOvbrtWuDL4Er6bBpUGETvrKkEkBMQBHtgVWvb8q4_gXsoaL6eJXG4-06SqCDsNb04GwCn2f1tRBTJjNC7Jq2Ay04H_HspTvMGD-NjLq_RZIfQm3JFMTT7UhOQxJnFpT0uGotaLMx6j3oDbGaXKpvcg9XZuf24vt5mX7vZx3DvEPDtHkSDZ1kGRSYrX6QdiipEuZH-NI1RvyFUw-HZlTT2JkwzWSN_OLzLdmkaArqTowWwhchRmxvg-6EvirFBpQrtcGZo_TReEZPhZGTyW1H9DOcV3U42QlS1-keS3JAWcQTO42ntmflyGTxjF1rttExZdZDd11jojm5amxR5FXgqOuQdHH1mCn3bOtOMNCHMwtYE7LEpuJgo9Nh4IgDzrY7TgquuPDsuXyxo2gkw3KqlrBuemUbtvwTGM2IGPCD8csp8-uIvYYJ1ev_kLqVa_lb42ljcUvoy8HU2_dkKiGRpHgvshVzibeOdWrVu6GJu1cRw4C_cP13XA1k3y4xaeT7ujncO8T-vt5C5rpNFk9HzBrx9gcQsfdjexQ42PTw0Nomn_K7WHyuPTuLGB9JbzW3StHpC4GIZzkHSqr_5bLhHvmwpSqRqK17i6IOsozziR9aJmelMTketKffp1b6RW81_PiUcGPavFrMzePzXSqtQFywtahLnxeJqmPUr4dXtiVQjINqi3FElVDq_bV-nAtr8BFTmm4WL2J9ra3akMeInR8K6k62LGkLkY69XVEMNAjWDI5Mkr3EAHvqq5WwRJtICJIuOLOZ0xRlZHy7eiYazVUFsQAV-Occx169fkgyRCOdIE_lhwYfJ9HdGS6qca-1kpM06LswJuINSTCgIAwvNGDQnSURUgg-kvkajsNktcOaXR7K45SYdqup12WZiD5ZrGpTLSxG8lJjHR3U2hOwXUZcRJWUJ7QR4eQ8bSfKyKwaFaE_LEuzrOgl0Hz8Doprdluk_0G00]--></g></svg>


--------------------------------------------------------------------------------
/images/java/mcp-stack.svg:
--------------------------------------------------------------------------------
  1 | <?xml version="1.0" encoding="UTF-8" standalone="no"?>
  2 | <svg
  3 |    version="1.1"
  4 |    viewBox="0 0 343.69525 195.14102"
  5 |    fill="none"
  6 |    stroke="none"
  7 |    stroke-linecap="square"
  8 |    stroke-miterlimit="10"
  9 |    id="svg27"
 10 |    sodipodi:docname="MCP draft.svg"
 11 |    width="343.69525"
 12 |    height="195.14102"
 13 |    inkscape:version="1.3.2 (091e20e, 2023-11-25)"
 14 |    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
 15 |    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
 16 |    xmlns="http://www.w3.org/2000/svg"
 17 |    xmlns:svg="http://www.w3.org/2000/svg">
 18 |   <defs
 19 |      id="defs27" />
 20 |   <sodipodi:namedview
 21 |      id="namedview27"
 22 |      pagecolor="#ffffff"
 23 |      bordercolor="#000000"
 24 |      borderopacity="0.25"
 25 |      inkscape:showpageshadow="2"
 26 |      inkscape:pageopacity="0.0"
 27 |      inkscape:pagecheckerboard="0"
 28 |      inkscape:deskcolor="#d1d1d1"
 29 |      inkscape:zoom="1.0974637"
 30 |      inkscape:cx="188.61671"
 31 |      inkscape:cy="182.23837"
 32 |      inkscape:window-width="1312"
 33 |      inkscape:window-height="983"
 34 |      inkscape:window-x="0"
 35 |      inkscape:window-y="38"
 36 |      inkscape:window-maximized="0"
 37 |      inkscape:current-layer="svg27">
 38 |     <inkscape:page
 39 |        x="0"
 40 |        y="0"
 41 |        width="343.69525"
 42 |        height="195.14102"
 43 |        id="page29"
 44 |        margin="0 0 0 0"
 45 |        bleed="0" />
 46 |   </sodipodi:namedview>
 47 |   <clipPath
 48 |      id="p.0">
 49 |     <path
 50 |        d="M 0,0 H 1024 V 768 H 0 Z"
 51 |        clip-rule="nonzero"
 52 |        id="path1" />
 53 |   </clipPath>
 54 |   <g
 55 |      clip-path="url(#p.0)"
 56 |      id="g27"
 57 |      transform="translate(-334.47681,-179.33106)">
 58 |     <path
 59 |        fill="#ffffff"
 60 |        d="M 530.6168,196.96588 H 668.0026 V 315.04462 H 530.6168 Z"
 61 |        fill-rule="evenodd"
 62 |        id="path4" />
 63 |     <path
 64 |        stroke="#999999"
 65 |        stroke-width="1"
 66 |        stroke-linejoin="round"
 67 |        stroke-linecap="butt"
 68 |        d="M 530.6168,196.96588 H 668.0026 V 315.04462 H 530.6168 Z"
 69 |        fill-rule="evenodd"
 70 |        id="path5" />
 71 |     <path
 72 |        fill="#999999"
 73 |        d="m 552.9071,221.32588 q -0.35937,0 -0.60937,-0.23438 -0.23438,-0.25 -0.23438,-0.59375 v -10.82812 q 0,-0.375 0.23438,-0.60938 0.25,-0.23437 0.60937,-0.23437 0.46875,0 0.73438,0.45312 l 5,10.03125 h -0.51563 l 4.89063,-10.03125 q 0.25,-0.45312 0.73437,-0.45312 0.34375,0 0.57813,0.23437 0.25,0.23438 0.25,0.60938 v 10.82812 q 0,0.34375 -0.25,0.59375 -0.25,0.23438 -0.57813,0.23438 -0.35937,0 -0.59375,-0.23438 -0.23437,-0.25 -0.23437,-0.59375 v -8.53125 l 0.3125,-0.0781 -4.1875,8.54687 q -0.28125,0.40625 -0.71875,0.40625 -0.53125,0 -0.76563,-0.48437 l -4.15625,-8.3125 0.32813,-0.0781 v 8.53125 q 0,0.34375 -0.25,0.59375 -0.23438,0.23438 -0.57813,0.23438 z m 20.47766,0.15625 q -1.29687,0 -2.4375,-0.48438 -1.125,-0.48437 -1.96875,-1.35937 -0.82812,-0.875 -1.29687,-2.03125 -0.46875,-1.17188 -0.46875,-2.53125 0,-1.34375 0.46875,-2.5 0.46875,-1.17188 1.29687,-2.03125 0.84375,-0.875 1.96875,-1.375 1.125,-0.5 2.4375,-0.5 1.23438,0 2.10938,0.32812 0.89062,0.3125 1.79687,1.04688 0.125,0.0937 0.1875,0.20312 0.0781,0.10938 0.0937,0.21875 0.0312,0.0937 0.0312,0.23438 0,0.3125 -0.21875,0.51562 -0.21875,0.1875 -0.51562,0.21875 -0.29688,0.0156 -0.59375,-0.20312 -0.59375,-0.51563 -1.23438,-0.78125 -0.625,-0.28125 -1.65625,-0.28125 -0.95312,0 -1.78125,0.39062 -0.82812,0.375 -1.46875,1.04688 -0.625,0.67187 -0.98437,1.5625 -0.34375,0.89062 -0.34375,1.90625 0,1.01562 0.34375,1.90625 0.35937,0.89062 0.98437,1.5625 0.64063,0.67187 1.46875,1.04687 0.82813,0.375 1.78125,0.375 0.8125,0 1.53125,-0.28125 0.73438,-0.28125 1.40625,-0.78125 0.29688,-0.20312 0.5625,-0.17187 0.28125,0.0156 0.46875,0.21875 0.20313,0.20312 0.20313,0.54687 0,0.17188 -0.0625,0.32813 -0.0625,0.14062 -0.1875,0.26562 -0.875,0.6875 -1.85938,1.04688 -0.98437,0.34375 -2.0625,0.34375 z m 7.66638,-0.15625 q -0.35937,0 -0.60937,-0.23438 -0.23438,-0.25 -0.23438,-0.59375 v -10.82812 q 0,-0.375 0.23438,-0.60938 0.25,-0.23437 0.60937,-0.23437 h 3.1875 q 1.20313,0 2.125,0.53125 0.9375,0.53125 1.45313,1.46875 0.53125,0.9375 0.53125,2.14062 0,1.17188 -0.53125,2.09375 -0.51563,0.90625 -1.45313,1.42188 -0.92187,0.5 -2.125,0.5 h -2.35937 v 3.51562 q 0,0.34375 -0.23438,0.59375 -0.23437,0.23438 -0.59375,0.23438 z m 0.82813,-5.875 h 2.35937 q 0.75,0 1.29688,-0.3125 0.5625,-0.32813 0.875,-0.875 0.32812,-0.5625 0.32812,-1.29688 0,-0.76562 -0.32812,-1.34375 -0.3125,-0.57812 -0.875,-0.90625 -0.54688,-0.34375 -1.29688,-0.34375 h -2.35937 z m 16.95294,6.03125 q -1.01562,0 -1.95312,-0.3125 -0.92188,-0.32813 -1.60938,-0.89063 -0.6875,-0.57812 -1.01562,-1.34375 -0.15625,-0.32812 0.0156,-0.60937 0.17188,-0.29688 0.5625,-0.375 0.29688,-0.0625 0.57813,0.0937 0.28125,0.14062 0.42187,0.45312 0.1875,0.39063 0.625,0.73438 0.4375,0.32812 1.0625,0.54687 0.625,0.20313 1.3125,0.20313 0.78125,0 1.42188,-0.23438 0.64062,-0.25 1.04687,-0.70312 0.40625,-0.45313 0.40625,-1.125 0,-0.84375 -0.67187,-1.51563 -0.65625,-0.67187 -2.1875,-0.84375 -1.98438,-0.1875 -3.125,-1.15625 -1.125,-0.98437 -1.125,-2.42187 0,-1.0625 0.59375,-1.79688 0.59375,-0.73437 1.60937,-1.10937 1.01563,-0.39063 2.26563,-0.39063 0.96875,0 1.6875,0.28125 0.73437,0.26563 1.28125,0.75 0.54687,0.46875 0.95312,1.125 0.21875,0.35938 0.17188,0.67188 -0.0312,0.3125 -0.3125,0.48437 -0.29688,0.1875 -0.65625,0.0781 -0.34375,-0.10938 -0.51563,-0.40625 -0.26562,-0.46875 -0.64062,-0.78125 -0.35938,-0.32813 -0.85938,-0.51563 -0.48437,-0.1875 -1.15625,-0.1875 -1.1875,-0.0156 -2,0.45313 -0.79687,0.45312 -0.79687,1.39062 0,0.48438 0.25,0.92188 0.25,0.4375 0.90625,0.76562 0.67187,0.3125 1.92187,0.4375 1.90625,0.20313 2.96875,1.17188 1.0625,0.95312 1.0625,2.54687 0,0.90625 -0.375,1.57813 -0.375,0.67187 -1.01562,1.14062 -0.625,0.45313 -1.4375,0.67188 -0.79688,0.21875 -1.67188,0.21875 z m 10.99237,-0.0937 q -1.32812,0 -2.35937,-0.5625 -1.03125,-0.57813 -1.625,-1.57813 -0.57813,-1 -0.57813,-2.29687 0,-1.3125 0.54688,-2.3125 0.5625,-1 1.53125,-1.5625 0.98437,-0.5625 2.25,-0.5625 1.25,0 2.14062,0.54687 0.90625,0.54688 1.375,1.51563 0.46875,0.96875 0.46875,2.23437 0,0.3125 -0.21875,0.51563 -0.20312,0.1875 -0.51562,0.1875 h -6.45313 v -1.28125 h 6.40625 l -0.65625,0.45312 q -0.0156,-0.79687 -0.32812,-1.42187 -0.29688,-0.64063 -0.85938,-1 -0.5625,-0.375 -1.35937,-0.375 -0.90625,0 -1.5625,0.40625 -0.64063,0.39062 -0.98438,1.09375 -0.32812,0.6875 -0.32812,1.5625 0,0.89062 0.39062,1.57812 0.40625,0.6875 1.10938,1.09375 0.70312,0.39063 1.60937,0.39063 0.5,0 1.01563,-0.1875 0.53125,-0.1875 0.84375,-0.42188 0.23437,-0.17187 0.51562,-0.17187 0.28125,-0.0156 0.5,0.15625 0.26563,0.23437 0.28125,0.53125 0.0156,0.28125 -0.25,0.5 -0.54687,0.42187 -1.35937,0.70312 -0.8125,0.26563 -1.54688,0.26563 z m 6.60791,-5.53125 q 0,-0.96875 0.46875,-1.71875 0.48438,-0.76563 1.28125,-1.20313 0.79688,-0.45312 1.76563,-0.45312 0.95312,0 1.42187,0.3125 0.46875,0.3125 0.35938,0.73437 -0.0469,0.23438 -0.1875,0.35938 -0.125,0.10937 -0.3125,0.14062 -0.17188,0.0312 -0.375,-0.0156 -1.03125,-0.20313 -1.84375,-0.0312 -0.8125,0.17187 -1.28125,0.65625 -0.46875,0.48437 -0.46875,1.21875 z m 0.0156,5.46875 q -0.375,0 -0.59375,-0.20313 -0.20313,-0.20312 -0.20313,-0.59375 v -7.15625 q 0,-0.39062 0.20313,-0.59375 0.21875,-0.20312 0.59375,-0.20312 0.40625,0 0.60937,0.20312 0.20313,0.1875 0.20313,0.59375 v 7.15625 q 0,0.375 -0.20313,0.59375 -0.20312,0.20313 -0.60937,0.20313 z m 9.94787,-0.0156 q -0.5,0 -0.78125,-0.53125 l -3.39062,-7.15625 q -0.125,-0.26562 -0.0312,-0.53125 0.10937,-0.26562 0.42187,-0.40625 0.26563,-0.14062 0.54688,-0.0469 0.28125,0.0937 0.42187,0.375 l 3.17188,6.82812 h -0.76563 l 3.14063,-6.82812 q 0.14062,-0.28125 0.4375,-0.375 0.29687,-0.0937 0.59375,0.0469 0.29687,0.125 0.39062,0.40625 0.0937,0.26563 -0.0312,0.53125 l -3.39062,7.15625 q -0.25,0.53125 -0.73438,0.53125 z m 9.58862,0.0781 q -1.32812,0 -2.35937,-0.5625 -1.03125,-0.57813 -1.625,-1.57813 -0.57813,-1 -0.57813,-2.29687 0,-1.3125 0.54688,-2.3125 0.5625,-1 1.53125,-1.5625 0.98437,-0.5625 2.25,-0.5625 1.25,0 2.14062,0.54687 0.90625,0.54688 1.375,1.51563 0.46875,0.96875 0.46875,2.23437 0,0.3125 -0.21875,0.51563 -0.20312,0.1875 -0.51562,0.1875 h -6.45313 v -1.28125 h 6.40625 l -0.65625,0.45312 q -0.0156,-0.79687 -0.32812,-1.42187 -0.29688,-0.64063 -0.85938,-1 -0.5625,-0.375 -1.35937,-0.375 -0.90625,0 -1.5625,0.40625 -0.64063,0.39062 -0.98438,1.09375 -0.32812,0.6875 -0.32812,1.5625 0,0.89062 0.39062,1.57812 0.40625,0.6875 1.10938,1.09375 0.70312,0.39063 1.60937,0.39063 0.5,0 1.01563,-0.1875 0.53125,-0.1875 0.84375,-0.42188 0.23437,-0.17187 0.51562,-0.17187 0.28125,-0.0156 0.5,0.15625 0.26563,0.23437 0.28125,0.53125 0.0156,0.28125 -0.25,0.5 -0.54687,0.42187 -1.35937,0.70312 -0.8125,0.26563 -1.54688,0.26563 z m 6.60791,-5.53125 q 0,-0.96875 0.46875,-1.71875 0.48438,-0.76563 1.28125,-1.20313 0.79688,-0.45312 1.76563,-0.45312 0.95312,0 1.42187,0.3125 0.46875,0.3125 0.35938,0.73437 -0.0469,0.23438 -0.1875,0.35938 -0.125,0.10937 -0.3125,0.14062 -0.17188,0.0312 -0.375,-0.0156 -1.03125,-0.20313 -1.84375,-0.0312 -0.8125,0.17187 -1.28125,0.65625 -0.46875,0.48437 -0.46875,1.21875 z m 0.0156,5.46875 q -0.375,0 -0.59375,-0.20313 -0.20313,-0.20312 -0.20313,-0.59375 v -7.15625 q 0,-0.39062 0.20313,-0.59375 0.21875,-0.20312 0.59375,-0.20312 0.40625,0 0.60937,0.20312 0.20313,0.1875 0.20313,0.59375 v 7.15625 q 0,0.375 -0.20313,0.59375 -0.20312,0.20313 -0.60937,0.20313 z"
 74 |        fill-rule="nonzero"
 75 |        id="path6" />
 76 |     <path
 77 |        fill="#ffffff"
 78 |        d="m 530.66406,233.5643 h 137.3858 v 74.77167 h -137.3858 z"
 79 |        fill-rule="evenodd"
 80 |        id="path7" />
 81 |     <path
 82 |        stroke="#999999"
 83 |        stroke-width="1"
 84 |        stroke-linejoin="round"
 85 |        stroke-linecap="butt"
 86 |        d="m 530.66406,233.5643 h 137.3858 v 74.77167 h -137.3858 z"
 87 |        fill-rule="evenodd"
 88 |        id="path8" />
 89 |     <path
 90 |        fill="#999999"
 91 |        d="m 552.6487,256.64432 q -0.23438,0 -0.40625,-0.17188 -0.15625,-0.17187 -0.15625,-0.40625 V 245.7693 q 0,-0.25 0.15625,-0.40625 0.17187,-0.17187 0.40625,-0.17187 0.35937,0 0.51562,0.29687 l 4.9375,9.82813 h -0.5 l 4.85938,-9.82813 q 0.17187,-0.29687 0.51562,-0.29687 0.23438,0 0.39063,0.17187 0.15625,0.15625 0.15625,0.40625 v 10.29689 q 0,0.23438 -0.15625,0.40625 -0.15625,0.17188 -0.39063,0.17188 -0.25,0 -0.42187,-0.17188 -0.17188,-0.17187 -0.17188,-0.40625 v -8.81251 l 0.25,0.0156 -4.32812,8.82814 q -0.15625,0.28125 -0.48438,0.28125 -0.375,0 -0.53125,-0.34375 l -4.35937,-8.71876 0.29687,-0.0625 v 8.81251 q 0,0.23438 -0.17187,0.40625 -0.17188,0.17188 -0.40625,0.17188 z m 18.95593,0.14062 q -1.1875,0 -2.21875,-0.45312 -1.03125,-0.45314 -1.82812,-1.26564 -0.78125,-0.8125 -1.21875,-1.875 -0.4375,-1.0625 -0.4375,-2.28125 0,-1.20313 0.42187,-2.26563 0.4375,-1.0625 1.21875,-1.85937 0.79688,-0.8125 1.82813,-1.26563 1.03125,-0.46875 2.23437,-0.46875 1.0625,0 1.92188,0.3125 0.85937,0.29688 1.67187,0.98438 0.125,0.0937 0.14063,0.23437 0.0312,0.14063 -0.0312,0.26563 -0.0469,0.125 -0.17188,0.1875 -0.0312,0.10937 -0.15625,0.17187 -0.10937,0.0625 -0.26562,0.0469 -0.14063,-0.0156 -0.29688,-0.14063 -0.5625,-0.5 -1.25,-0.73437 -0.67187,-0.25 -1.5625,-0.25 -0.95312,0 -1.78125,0.39062 -0.82812,0.375 -1.46875,1.04688 -0.625,0.65625 -0.98437,1.51562 -0.35938,0.85938 -0.35938,1.82813 0,1 0.35938,1.875 0.35937,0.85937 0.98437,1.51562 0.64063,0.65625 1.46875,1.03125 0.82813,0.375 1.78125,0.375 0.8125,0 1.53125,-0.26562 0.71875,-0.26563 1.35938,-0.76563 0.17187,-0.14062 0.35937,-0.10937 0.20313,0.0312 0.34375,0.17187 0.15625,0.14063 0.15625,0.375 0,0.125 -0.0469,0.21875 -0.0312,0.0937 -0.10938,0.20313 -0.75,0.68751 -1.67187,0.96876 -0.92188,0.28125 -1.92188,0.28125 z m 6.67792,-0.14062 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.17188 -0.15625,-0.42188 V 245.7693 q 0,-0.25 0.15625,-0.40625 0.15625,-0.17187 0.40625,-0.17187 h 2.9375 q 1.07813,0 1.90625,0.48437 0.84375,0.46875 1.3125,1.3125 0.46875,0.82813 0.46875,1.9375 0,1.0625 -0.46875,1.89063 -0.46875,0.82812 -1.3125,1.3125 -0.82812,0.46875 -1.90625,0.46875 h -2.35937 v 3.46877 q 0,0.25 -0.17188,0.42187 -0.15625,0.15625 -0.40625,0.15625 z m 0.57813,-5.14064 h 2.35937 q 0.75,0 1.32813,-0.32813 0.59375,-0.32812 0.92187,-0.90625 0.32813,-0.59375 0.32813,-1.34375 0,-0.78125 -0.32813,-1.35937 -0.32812,-0.59375 -0.92187,-0.92188 -0.57813,-0.34375 -1.32813,-0.34375 h -2.35937 z m 15.63897,5.28126 q -0.9375,0 -1.73437,-0.26562 -0.79688,-0.26563 -1.39063,-0.76564 -0.57812,-0.5 -0.89062,-1.15625 -0.125,-0.23438 -0.0156,-0.4375 0.10938,-0.20313 0.375,-0.26563 0.20313,-0.0625 0.40625,0.0469 0.20313,0.0937 0.29688,0.29687 0.21875,0.42188 0.64062,0.76563 0.4375,0.34375 1.01563,0.53125 0.59375,0.17187 1.29687,0.17187 0.78125,0 1.375,-0.25 0.60938,-0.26562 0.95313,-0.75 0.34375,-0.5 0.34375,-1.20312 0,-0.89063 -0.67188,-1.53125 -0.65625,-0.64063 -2.0625,-0.82813 -1.71875,-0.20312 -2.6875,-1.0625 -0.95312,-0.85937 -0.95312,-2.09375 0,-0.90625 0.46875,-1.5625 0.48437,-0.65625 1.3125,-1.01562 0.84375,-0.35938 1.92187,-0.35938 0.8125,0 1.46875,0.26563 0.65625,0.25 1.14063,0.67187 0.5,0.40625 0.79687,0.90625 0.15625,0.23438 0.0937,0.45313 -0.0469,0.21875 -0.25,0.34375 -0.21875,0.0937 -0.45312,0.0312 -0.21875,-0.0781 -0.32813,-0.28125 -0.23437,-0.34375 -0.5625,-0.64063 -0.32812,-0.29687 -0.79687,-0.46875 -0.46875,-0.1875 -1.125,-0.20312 -1.15625,0 -1.85938,0.5 -0.70312,0.48437 -0.70312,1.42187 0,0.5 0.26562,0.92188 0.26563,0.42187 0.85938,0.71875 0.60937,0.29687 1.64062,0.45312 1.82813,0.25 2.71875,1.10938 0.89063,0.85937 0.89063,2.23437 0,0.79688 -0.29688,1.42188 -0.28125,0.60937 -0.79687,1.03125 -0.51563,0.40626 -1.21875,0.62501 -0.6875,0.21875 -1.48438,0.21875 z m 9.67121,-0.0625 q -1.1875,0 -2.10938,-0.51562 -0.90625,-0.53127 -1.4375,-1.45314 -0.51562,-0.92188 -0.51562,-2.10938 0,-1.20312 0.48437,-2.10937 0.5,-0.92188 1.35938,-1.45313 0.875,-0.53125 2,-0.53125 1.10937,0 1.9375,0.51563 0.82812,0.5 1.28125,1.39062 0.45312,0.89063 0.45312,2.04688 0,0.23437 -0.14062,0.375 -0.14063,0.125 -0.375,0.125 h -6.23438 v -0.9375 h 6.34375 l -0.625,0.45312 q 0.0156,-0.84375 -0.3125,-1.51562 -0.32812,-0.67188 -0.92187,-1.04688 -0.57813,-0.39062 -1.40625,-0.39062 -0.82813,0 -1.46875,0.40625 -0.625,0.39062 -0.96875,1.09375 -0.34375,0.6875 -0.34375,1.57812 0,0.89063 0.375,1.57813 0.39062,0.6875 1.0625,1.09375 0.6875,0.39062 1.5625,0.39062 0.53125,0 1.0625,-0.17187 0.53125,-0.1875 0.85937,-0.46875 0.15625,-0.14063 0.35938,-0.14063 0.21875,-0.0156 0.35937,0.10938 0.1875,0.17187 0.1875,0.375 0.0156,0.20312 -0.15625,0.35937 -0.48437,0.40627 -1.23437,0.68752 -0.75,0.26562 -1.4375,0.26562 z m 8.17083,0 q -0.875,0 -1.73437,-0.29687 -0.84375,-0.29688 -1.35938,-0.87502 -0.17187,-0.1875 -0.14062,-0.40625 0.0312,-0.21875 0.21875,-0.375 0.20312,-0.14062 0.42187,-0.10937 0.23438,0.0156 0.375,0.1875 0.34375,0.40625 0.92188,0.625 0.59375,0.21875 1.29687,0.21875 1.07813,0 1.5625,-0.375 0.48438,-0.375 0.5,-0.90625 0,-0.51563 -0.5,-0.85938 -0.5,-0.34375 -1.64062,-0.54687 -1.48438,-0.23438 -2.17188,-0.8125 -0.6875,-0.59375 -0.6875,-1.39063 0,-0.75 0.39063,-1.25 0.40625,-0.5 1.0625,-0.75 0.65625,-0.25 1.45312,-0.25 0.98438,0 1.6875,0.34375 0.71875,0.32813 1.15625,0.90625 0.14063,0.1875 0.10938,0.39063 -0.0312,0.20312 -0.23438,0.34375 -0.17187,0.0937 -0.40625,0.0625 -0.21875,-0.0312 -0.375,-0.21875 -0.375,-0.42188 -0.85937,-0.60938 -0.48438,-0.20312 -1.10938,-0.20312 -0.8125,0 -1.29687,0.32812 -0.48438,0.32813 -0.48438,0.82813 0,0.34375 0.1875,0.59375 0.1875,0.25 0.625,0.4375 0.45313,0.1875 1.26563,0.3125 1.09375,0.1875 1.73437,0.53125 0.64063,0.34375 0.90625,0.8125 0.26563,0.45312 0.26563,0.98437 0,0.70313 -0.40625,1.21875 -0.39063,0.51564 -1.10938,0.81252 -0.70312,0.29687 -1.625,0.29687 z m 7.89978,0 q -0.875,0 -1.73437,-0.29687 -0.84375,-0.29688 -1.35938,-0.87502 -0.17187,-0.1875 -0.14062,-0.40625 0.0312,-0.21875 0.21875,-0.375 0.20312,-0.14062 0.42187,-0.10937 0.23438,0.0156 0.375,0.1875 0.34375,0.40625 0.92188,0.625 0.59375,0.21875 1.29687,0.21875 1.07813,0 1.5625,-0.375 0.48438,-0.375 0.5,-0.90625 0,-0.51563 -0.5,-0.85938 -0.5,-0.34375 -1.64062,-0.54687 -1.48438,-0.23438 -2.17188,-0.8125 -0.6875,-0.59375 -0.6875,-1.39063 0,-0.75 0.39063,-1.25 0.40625,-0.5 1.0625,-0.75 0.65625,-0.25 1.45312,-0.25 0.98438,0 1.6875,0.34375 0.71875,0.32813 1.15625,0.90625 0.14063,0.1875 0.10938,0.39063 -0.0312,0.20312 -0.23438,0.34375 -0.17187,0.0937 -0.40625,0.0625 -0.21875,-0.0312 -0.375,-0.21875 -0.375,-0.42188 -0.85937,-0.60938 -0.48438,-0.20312 -1.10938,-0.20312 -0.8125,0 -1.29687,0.32812 -0.48438,0.32813 -0.48438,0.82813 0,0.34375 0.1875,0.59375 0.1875,0.25 0.625,0.4375 0.45313,0.1875 1.26563,0.3125 1.09375,0.1875 1.73437,0.53125 0.64063,0.34375 0.90625,0.8125 0.26563,0.45312 0.26563,0.98437 0,0.70313 -0.40625,1.21875 -0.39063,0.51564 -1.10938,0.81252 -0.70312,0.29687 -1.625,0.29687 z m 5.89972,-0.0781 q -0.26562,0 -0.42187,-0.15625 -0.15625,-0.15625 -0.15625,-0.42188 v -6.87501 q 0,-0.25 0.15625,-0.40625 0.15625,-0.15625 0.42187,-0.15625 0.25,0 0.40625,0.15625 0.15625,0.15625 0.15625,0.40625 v 6.87501 q 0,0.26563 -0.15625,0.42188 -0.15625,0.15625 -0.40625,0.15625 z m -0.0156,-9.54689 q -0.32813,0 -0.5625,-0.23438 -0.23438,-0.23437 -0.23438,-0.5625 0,-0.375 0.23438,-0.57812 0.25,-0.21875 0.57812,-0.21875 0.29688,0 0.53125,0.21875 0.25,0.20312 0.25,0.57812 0,0.32813 -0.23437,0.5625 -0.23438,0.23438 -0.5625,0.23438 z m 7.09509,9.62501 q -1.17187,0 -2.09375,-0.53125 -0.92187,-0.53126 -1.45312,-1.45314 -0.53125,-0.92187 -0.53125,-2.09375 0,-1.1875 0.53125,-2.10937 0.53125,-0.92188 1.45312,-1.45313 0.92188,-0.53125 2.09375,-0.53125 1.17188,0 2.07813,0.53125 0.92187,0.53125 1.45312,1.45313 0.53125,0.92187 0.54688,2.10937 0,1.17188 -0.54688,2.09375 -0.53125,0.92188 -1.45312,1.45314 -0.90625,0.53125 -2.07813,0.53125 z m 0,-1.03126 q 0.84375,0 1.51563,-0.39063 0.6875,-0.40625 1.0625,-1.09375 0.375,-0.6875 0.375,-1.5625 0,-0.875 -0.375,-1.5625 -0.375,-0.70312 -1.0625,-1.09375 -0.67188,-0.40625 -1.51563,-0.40625 -0.84375,0 -1.53125,0.40625 -0.67187,0.39063 -1.0625,1.09375 -0.375,0.6875 -0.375,1.5625 0,0.875 0.375,1.5625 0.39063,0.6875 1.0625,1.09375 0.6875,0.39063 1.53125,0.39063 z m 13.14105,0.95314 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.17188 -0.15625,-0.40625 v -3.81252 q 0,-0.90625 -0.34375,-1.48437 -0.34375,-0.59375 -0.9375,-0.875 -0.59375,-0.29688 -1.34375,-0.29688 -0.71875,0 -1.29687,0.28125 -0.57813,0.26563 -0.92188,0.75 -0.32812,0.48438 -0.32812,1.10938 h -0.8125 q 0.0312,-0.92188 0.5,-1.64063 0.46875,-0.73437 1.23437,-1.15625 0.78125,-0.42187 1.73438,-0.42187 1.04687,0 1.85937,0.4375 0.82813,0.4375 1.29688,1.28125 0.48437,0.82812 0.48437,2.01562 v 3.81252 q 0,0.23437 -0.17187,0.40625 -0.15625,0.15625 -0.39063,0.15625 z m -6.29687,0 q -0.26563,0 -0.42188,-0.15625 -0.15625,-0.15625 -0.15625,-0.40625 v -6.89064 q 0,-0.25 0.15625,-0.40625 0.15625,-0.15625 0.42188,-0.15625 0.25,0 0.40625,0.15625 0.15625,0.15625 0.15625,0.40625 v 6.89064 q 0,0.25 -0.15625,0.40625 -0.15625,0.15625 -0.40625,0.15625 z"
 92 |        fill-rule="nonzero"
 93 |        id="path9" />
 94 |     <path
 95 |        fill="#999999"
 96 |        d="m 530.66406,269.38315 h 137.3858 v 45.66928 h -137.3858 z"
 97 |        fill-rule="evenodd"
 98 |        id="path10" />
 99 |     <path
100 |        stroke="#999999"
101 |        stroke-width="1"
102 |        stroke-linejoin="round"
103 |        stroke-linecap="butt"
104 |        d="m 530.66406,269.38315 h 137.3858 v 45.66928 h -137.3858 z"
105 |        fill-rule="evenodd"
106 |        id="path11" />
107 |     <path
108 |        fill="#ffffff"
109 |        d="m 544.7865,288.2978 q -0.23437,0 -0.40625,-0.17188 -0.15625,-0.17187 -0.15625,-0.40625 V 277.4228 q 0,-0.25 0.15625,-0.40625 0.17188,-0.17188 0.40625,-0.17188 0.35938,0 0.51563,0.29688 l 4.9375,9.82812 h -0.5 l 4.85937,-9.82812 q 0.17188,-0.29688 0.51563,-0.29688 0.23437,0 0.39062,0.17188 0.15625,0.15625 0.15625,0.40625 v 10.29687 q 0,0.23438 -0.15625,0.40625 -0.15625,0.17188 -0.39062,0.17188 -0.25,0 -0.42188,-0.17188 -0.17187,-0.17187 -0.17187,-0.40625 v -8.8125 l 0.25,0.0156 -4.32813,8.82812 q -0.15625,0.28125 -0.48437,0.28125 -0.375,0 -0.53125,-0.34375 l -4.35938,-8.71875 0.29688,-0.0625 v 8.8125 q 0,0.23438 -0.17188,0.40625 -0.17187,0.17188 -0.40625,0.17188 z m 18.95593,0.14062 q -1.1875,0 -2.21875,-0.45312 -1.03125,-0.45313 -1.82812,-1.26563 -0.78125,-0.8125 -1.21875,-1.875 -0.4375,-1.0625 -0.4375,-2.28125 0,-1.20312 0.42187,-2.26562 0.4375,-1.0625 1.21875,-1.85938 0.79688,-0.8125 1.82813,-1.26562 1.03125,-0.46875 2.23437,-0.46875 1.0625,0 1.92188,0.3125 0.85937,0.29687 1.67187,0.98437 0.125,0.0937 0.14063,0.23438 0.0312,0.14062 -0.0312,0.26562 -0.0469,0.125 -0.17188,0.1875 -0.0312,0.10938 -0.15625,0.17188 -0.10937,0.0625 -0.26562,0.0469 -0.14063,-0.0156 -0.29688,-0.14062 -0.5625,-0.5 -1.25,-0.73438 -0.67187,-0.25 -1.5625,-0.25 -0.95312,0 -1.78125,0.39063 -0.82812,0.375 -1.46875,1.04687 -0.625,0.65625 -0.98437,1.51563 -0.35938,0.85937 -0.35938,1.82812 0,1 0.35938,1.875 0.35937,0.85938 0.98437,1.51563 0.64063,0.65625 1.46875,1.03125 0.82813,0.375 1.78125,0.375 0.8125,0 1.53125,-0.26563 0.71875,-0.26562 1.35938,-0.76562 0.17187,-0.14063 0.35937,-0.10938 0.20313,0.0312 0.34375,0.17188 0.15625,0.14062 0.15625,0.375 0,0.125 -0.0469,0.21875 -0.0312,0.0937 -0.10938,0.20312 -0.75,0.6875 -1.67187,0.96875 -0.92188,0.28125 -1.92188,0.28125 z m 6.67792,-0.14062 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.17188 -0.15625,-0.42188 V 277.4228 q 0,-0.25 0.15625,-0.40625 0.15625,-0.17188 0.40625,-0.17188 h 2.9375 q 1.07813,0 1.90625,0.48438 0.84375,0.46875 1.3125,1.3125 0.46875,0.82812 0.46875,1.9375 0,1.0625 -0.46875,1.89062 -0.46875,0.82813 -1.3125,1.3125 -0.82812,0.46875 -1.90625,0.46875 h -2.35937 v 3.46875 q 0,0.25 -0.17188,0.42188 -0.15625,0.15625 -0.40625,0.15625 z m 0.57813,-5.14063 h 2.35937 q 0.75,0 1.32813,-0.32812 0.59375,-0.32813 0.92187,-0.90625 0.32813,-0.59375 0.32813,-1.34375 0,-0.78125 -0.32813,-1.35938 -0.32812,-0.59375 -0.92187,-0.92187 -0.57813,-0.34375 -1.32813,-0.34375 h -2.35937 z m 15.45147,5.14063 q -0.23437,0 -0.40625,-0.17188 -0.17187,-0.17187 -0.17187,-0.40625 v -10.875 h 1.14062 v 10.875 q 0,0.23438 -0.15625,0.40625 -0.15625,0.17188 -0.40625,0.17188 z m -4.04687,-10.40625 q -0.23438,0 -0.39063,-0.14063 -0.14062,-0.15625 -0.14062,-0.375 0,-0.23437 0.14062,-0.375 0.15625,-0.15625 0.39063,-0.15625 h 8.10937 q 0.23438,0 0.375,0.15625 0.14063,0.14063 0.14063,0.375 0,0.21875 -0.14063,0.375 -0.14062,0.14063 -0.375,0.14063 z m 8.57782,5.46875 q 0.0469,-0.90625 0.48437,-1.625 0.4375,-0.71875 1.125,-1.125 0.70313,-0.42188 1.54688,-0.42188 0.67187,0 1.03125,0.20313 0.375,0.1875 0.29687,0.54687 -0.0625,0.21875 -0.20312,0.29688 -0.14063,0.0781 -0.34375,0.0625 -0.1875,-0.0156 -0.4375,-0.0312 -0.82813,-0.0781 -1.46875,0.17187 -0.625,0.23438 -1,0.73438 -0.375,0.5 -0.375,1.1875 z m 0.0937,4.9375 q -0.26563,0 -0.42188,-0.14063 -0.14062,-0.15625 -0.14062,-0.42187 v -6.89063 q 0,-0.26562 0.14062,-0.40625 0.15625,-0.15625 0.42188,-0.15625 0.26562,0 0.40625,0.15625 0.15625,0.14063 0.15625,0.40625 v 6.89063 q 0,0.26562 -0.15625,0.42187 -0.14063,0.14063 -0.40625,0.14063 z m 9.09466,0.0781 q -1.125,0 -2.01562,-0.53125 -0.89063,-0.54687 -1.42188,-1.46875 -0.51562,-0.92187 -0.51562,-2.07812 0,-1.17188 0.53125,-2.09375 0.54687,-0.92188 1.46875,-1.45313 0.92187,-0.54687 2.07812,-0.54687 1.15625,0 2.0625,0.54687 0.92188,0.53125 1.45313,1.45313 0.54687,0.92187 0.5625,2.09375 l -0.45313,0.34375 q 0,1.0625 -0.5,1.90625 -0.48437,0.84375 -1.32812,1.34375 -0.84375,0.48437 -1.92188,0.48437 z m 0.125,-1.03125 q 0.84375,0 1.51563,-0.39062 0.67187,-0.40625 1.04687,-1.09375 0.39063,-0.70313 0.39063,-1.5625 0,-0.875 -0.39063,-1.5625 -0.375,-0.70313 -1.04687,-1.09375 -0.67188,-0.40625 -1.51563,-0.40625 -0.82812,0 -1.51562,0.40625 -0.67188,0.39062 -1.0625,1.09375 -0.39063,0.6875 -0.39063,1.5625 0,0.85937 0.39063,1.5625 0.39062,0.6875 1.0625,1.09375 0.6875,0.39062 1.51562,0.39062 z m 3.5,0.95313 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.15625 -0.15625,-0.40625 v -2.5 l 0.26563,-1.15625 0.875,0.21875 v 3.4375 q 0,0.25 -0.17188,0.40625 -0.15625,0.15625 -0.40625,0.15625 z m 9.64106,0 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.17188 -0.15625,-0.40625 v -3.8125 q 0,-0.90625 -0.34375,-1.48438 -0.34375,-0.59375 -0.9375,-0.875 -0.59375,-0.29687 -1.34375,-0.29687 -0.71875,0 -1.29688,0.28125 -0.57812,0.26562 -0.92187,0.75 -0.32813,0.48437 -0.32813,1.10937 h -0.8125 q 0.0312,-0.92187 0.5,-1.64062 0.46875,-0.73438 1.23438,-1.15625 0.78125,-0.42188 1.73437,-0.42188 1.04688,0 1.85938,0.4375 0.82812,0.4375 1.29687,1.28125 0.48438,0.82813 0.48438,2.01563 v 3.8125 q 0,0.23437 -0.17188,0.40625 -0.15625,0.15625 -0.39062,0.15625 z m -6.29688,0 q -0.26562,0 -0.42187,-0.15625 -0.15625,-0.15625 -0.15625,-0.40625 v -6.89063 q 0,-0.25 0.15625,-0.40625 0.15625,-0.15625 0.42187,-0.15625 0.25,0 0.40625,0.15625 0.15625,0.15625 0.15625,0.40625 v 6.89063 q 0,0.25 -0.15625,0.40625 -0.15625,0.15625 -0.40625,0.15625 z m 12.15668,0.0781 q -0.875,0 -1.73438,-0.29687 -0.84375,-0.29688 -1.35937,-0.875 -0.17188,-0.1875 -0.14063,-0.40625 0.0312,-0.21875 0.21875,-0.375 0.20313,-0.14063 0.42188,-0.10938 0.23437,0.0156 0.375,0.1875 0.34375,0.40625 0.92187,0.625 0.59375,0.21875 1.29688,0.21875 1.07812,0 1.5625,-0.375 0.48437,-0.375 0.5,-0.90625 0,-0.51562 -0.5,-0.85937 -0.5,-0.34375 -1.64063,-0.54688 -1.48437,-0.23437 -2.17187,-0.8125 -0.6875,-0.59375 -0.6875,-1.39062 0,-0.75 0.39062,-1.25 0.40625,-0.5 1.0625,-0.75 0.65625,-0.25 1.45313,-0.25 0.98437,0 1.6875,0.34375 0.71875,0.32812 1.15625,0.90625 0.14062,0.1875 0.10937,0.39062 -0.0312,0.20313 -0.23437,0.34375 -0.17188,0.0937 -0.40625,0.0625 -0.21875,-0.0312 -0.375,-0.21875 -0.375,-0.42187 -0.85938,-0.60937 -0.48437,-0.20313 -1.10937,-0.20313 -0.8125,0 -1.29688,0.32813 -0.48437,0.32812 -0.48437,0.82812 0,0.34375 0.1875,0.59375 0.1875,0.25 0.625,0.4375 0.45312,0.1875 1.26562,0.3125 1.09375,0.1875 1.73438,0.53125 0.64062,0.34375 0.90625,0.8125 0.26562,0.45313 0.26562,0.98438 0,0.70312 -0.40625,1.21875 -0.39062,0.51562 -1.10937,0.8125 -0.70313,0.29687 -1.625,0.29687 z m 5.6654,3.34375 q -0.26562,0 -0.42187,-0.15625 -0.15625,-0.14062 -0.15625,-0.40625 v -6.92187 q 0.0156,-1.14063 0.54687,-2.04688 0.54688,-0.92187 1.45313,-1.45312 0.92187,-0.53125 2.0625,-0.53125 1.17187,0 2.09375,0.54687 0.92187,0.53125 1.45312,1.45313 0.54688,0.92187 0.54688,2.09375 0,1.15625 -0.53125,2.07812 -0.51563,0.92188 -1.40625,1.46875 -0.89063,0.53125 -2.01563,0.53125 -0.98437,0 -1.78125,-0.42187 -0.79687,-0.42188 -1.28125,-1.10938 v 4.3125 q 0,0.26563 -0.15625,0.40625 -0.15625,0.15625 -0.40625,0.15625 z m 3.48438,-4.375 q 0.85937,0 1.53125,-0.39062 0.67187,-0.40625 1.0625,-1.09375 0.39062,-0.70313 0.39062,-1.5625 0,-0.875 -0.39062,-1.5625 -0.39063,-0.70313 -1.0625,-1.09375 -0.67188,-0.40625 -1.53125,-0.40625 -0.82813,0 -1.51563,0.40625 -0.67187,0.39062 -1.04687,1.09375 -0.375,0.6875 -0.375,1.5625 0,0.85937 0.375,1.5625 0.375,0.6875 1.04687,1.09375 0.6875,0.39062 1.51563,0.39062 z m 9.95575,1.03125 q -1.17188,0 -2.09375,-0.53125 -0.92188,-0.53125 -1.45313,-1.45312 -0.53125,-0.92188 -0.53125,-2.09375 0,-1.1875 0.53125,-2.10938 0.53125,-0.92187 1.45313,-1.45312 0.92187,-0.53125 2.09375,-0.53125 1.17187,0 2.07812,0.53125 0.92188,0.53125 1.45313,1.45312 0.53125,0.92188 0.54687,2.10938 0,1.17187 -0.54687,2.09375 -0.53125,0.92187 -1.45313,1.45312 -0.90625,0.53125 -2.07812,0.53125 z m 0,-1.03125 q 0.84375,0 1.51562,-0.39062 0.6875,-0.40625 1.0625,-1.09375 0.375,-0.6875 0.375,-1.5625 0,-0.875 -0.375,-1.5625 -0.375,-0.70313 -1.0625,-1.09375 -0.67187,-0.40625 -1.51562,-0.40625 -0.84375,0 -1.53125,0.40625 -0.67188,0.39062 -1.0625,1.09375 -0.375,0.6875 -0.375,1.5625 0,0.875 0.375,1.5625 0.39062,0.6875 1.0625,1.09375 0.6875,0.39062 1.53125,0.39062 z m 6.7348,-3.98437 q 0.0469,-0.90625 0.48437,-1.625 0.4375,-0.71875 1.125,-1.125 0.70313,-0.42188 1.54688,-0.42188 0.67187,0 1.03125,0.20313 0.375,0.1875 0.29687,0.54687 -0.0625,0.21875 -0.20312,0.29688 -0.14063,0.0781 -0.34375,0.0625 -0.1875,-0.0156 -0.4375,-0.0312 -0.82813,-0.0781 -1.46875,0.17187 -0.625,0.23438 -1,0.73438 -0.375,0.5 -0.375,1.1875 z m 0.0937,4.9375 q -0.26563,0 -0.42188,-0.14063 -0.14062,-0.15625 -0.14062,-0.42187 v -6.89063 q 0,-0.26562 0.14062,-0.40625 0.15625,-0.15625 0.42188,-0.15625 0.26562,0 0.40625,0.15625 0.15625,0.14063 0.15625,0.40625 v 6.89063 q 0,0.26562 -0.15625,0.42187 -0.14063,0.14063 -0.40625,0.14063 z m 9.29071,0 q -0.78125,0 -1.39063,-0.35938 -0.59375,-0.375 -0.95312,-1.01562 -0.34375,-0.64063 -0.34375,-1.45313 v -7.17187 q 0,-0.25 0.14062,-0.40625 0.15625,-0.15625 0.40625,-0.15625 0.25,0 0.40625,0.15625 0.17188,0.15625 0.17188,0.40625 v 7.17187 q 0,0.75 0.4375,1.23438 0.4375,0.46875 1.125,0.46875 h 0.39062 q 0.23438,0 0.375,0.15625 0.15625,0.15625 0.15625,0.40625 0,0.25 -0.17187,0.40625 -0.17188,0.15625 -0.4375,0.15625 z m -3.64063,-6.73438 q -0.21875,0 -0.375,-0.14062 -0.14062,-0.14063 -0.14062,-0.34375 0,-0.23438 0.14062,-0.35938 0.15625,-0.14062 0.375,-0.14062 h 3.73438 q 0.21875,0 0.35937,0.14062 0.15625,0.125 0.15625,0.35938 0,0.20312 -0.15625,0.34375 -0.14062,0.14062 -0.35937,0.14062 z"
110 |        fill-rule="nonzero"
111 |        id="path12" />
112 |     <path
113 |        fill="#ffffff"
114 |        d="m 574.1676,309.71967 q -0.17188,0 -0.3125,-0.0937 -0.125,-0.0781 -0.23438,-0.28125 -0.85937,-1.76563 -1.28125,-3.53125 -0.42187,-1.76563 -0.42187,-3.54688 0,-1.76562 0.42187,-3.53125 0.42188,-1.76562 1.28125,-3.51562 0.1875,-0.39063 0.54688,-0.39063 0.23437,0 0.39062,0.17188 0.17188,0.15625 0.17188,0.39062 0,0.17188 -0.0937,0.32813 -1.60938,3.26562 -1.60938,6.5625 0,1.64062 0.40625,3.29687 0.42188,1.65625 1.21875,3.28125 0.0937,0.17188 0.0937,0.3125 0,0.23438 -0.17187,0.39063 -0.15625,0.15625 -0.40625,0.15625 z m 5.70514,-3.28125 q -0.9375,0 -1.73438,-0.26563 -0.79687,-0.26562 -1.39062,-0.76562 -0.57813,-0.5 -0.89063,-1.15625 -0.125,-0.23438 -0.0156,-0.4375 0.10937,-0.20313 0.375,-0.26563 0.20312,-0.0625 0.40625,0.0469 0.20312,0.0937 0.29687,0.29687 0.21875,0.42188 0.64063,0.76563 0.4375,0.34375 1.01562,0.53125 0.59375,0.17187 1.29688,0.17187 0.78125,0 1.375,-0.25 0.60937,-0.26562 0.95312,-0.75 0.34375,-0.5 0.34375,-1.20312 0,-0.89063 -0.67187,-1.53125 -0.65625,-0.64063 -2.0625,-0.82813 -1.71875,-0.20312 -2.6875,-1.0625 -0.95313,-0.85937 -0.95313,-2.09375 0,-0.90625 0.46875,-1.5625 0.48438,-0.65625 1.3125,-1.01562 0.84375,-0.35938 1.92188,-0.35938 0.8125,0 1.46875,0.26563 0.65625,0.25 1.14062,0.67187 0.5,0.40625 0.79688,0.90625 0.15625,0.23438 0.0937,0.45313 -0.0469,0.21875 -0.25,0.34375 -0.21875,0.0937 -0.45313,0.0312 -0.21875,-0.0781 -0.32812,-0.28125 -0.23438,-0.34375 -0.5625,-0.64063 -0.32813,-0.29687 -0.79688,-0.46875 -0.46875,-0.1875 -1.125,-0.20312 -1.15625,0 -1.85937,0.5 -0.70313,0.48437 -0.70313,1.42187 0,0.5 0.26563,0.92188 0.26562,0.42187 0.85937,0.71875 0.60938,0.29687 1.64063,0.45312 1.82812,0.25 2.71875,1.10938 0.89062,0.85937 0.89062,2.23437 0,0.79688 -0.29687,1.42188 -0.28125,0.60937 -0.79688,1.03125 -0.51562,0.40625 -1.21875,0.625 -0.6875,0.21875 -1.48437,0.21875 z m 9.6712,-0.0625 q -1.1875,0 -2.10937,-0.51563 -0.90625,-0.53125 -1.4375,-1.45312 -0.51563,-0.92188 -0.51563,-2.10938 0,-1.20312 0.48438,-2.10937 0.5,-0.92188 1.35937,-1.45313 0.875,-0.53125 2,-0.53125 1.10938,0 1.9375,0.51563 0.82813,0.5 1.28125,1.39062 0.45313,0.89063 0.45313,2.04688 0,0.23437 -0.14063,0.375 -0.14062,0.125 -0.375,0.125 h -6.23437 v -0.9375 h 6.34375 l -0.625,0.45312 q 0.0156,-0.84375 -0.3125,-1.51562 -0.32813,-0.67188 -0.92188,-1.04688 -0.57812,-0.39062 -1.40625,-0.39062 -0.82812,0 -1.46875,0.40625 -0.625,0.39062 -0.96875,1.09375 -0.34375,0.6875 -0.34375,1.57812 0,0.89063 0.375,1.57813 0.39063,0.6875 1.0625,1.09375 0.6875,0.39062 1.5625,0.39062 0.53125,0 1.0625,-0.17187 0.53125,-0.1875 0.85938,-0.46875 0.15625,-0.14063 0.35937,-0.14063 0.21875,-0.0156 0.35938,0.10938 0.1875,0.17187 0.1875,0.375 0.0156,0.20312 -0.15625,0.35937 -0.48438,0.40625 -1.23438,0.6875 -0.75,0.26563 -1.4375,0.26563 z m 5.82709,-5.01563 q 0.0469,-0.90625 0.48438,-1.625 0.4375,-0.71875 1.125,-1.125 0.70312,-0.42187 1.54687,-0.42187 0.67188,0 1.03125,0.20312 0.375,0.1875 0.29688,0.54688 -0.0625,0.21875 -0.20313,0.29687 -0.14062,0.0781 -0.34375,0.0625 -0.1875,-0.0156 -0.4375,-0.0312 -0.82812,-0.0781 -1.46875,0.17188 -0.625,0.23437 -1,0.73437 -0.375,0.5 -0.375,1.1875 z m 0.0937,4.9375 q -0.26562,0 -0.42187,-0.14062 -0.14063,-0.15625 -0.14063,-0.42188 v -6.89062 q 0,-0.26563 0.14063,-0.40625 0.15625,-0.15625 0.42187,-0.15625 0.26563,0 0.40625,0.15625 0.15625,0.14062 0.15625,0.40625 v 6.89062 q 0,0.26563 -0.15625,0.42188 -0.14062,0.14062 -0.40625,0.14062 z m 8.90009,0 q -0.35938,0 -0.53125,-0.375 l -3.25,-6.90625 q -0.0937,-0.1875 -0.0156,-0.375 0.0781,-0.20312 0.29688,-0.29687 0.20312,-0.10938 0.39062,-0.0312 0.1875,0.0625 0.29688,0.26562 l 3.125,6.75 h -0.60938 l 3.07813,-6.75 q 0.0937,-0.20312 0.29687,-0.26562 0.21875,-0.0781 0.42188,0.0156 0.20312,0.0937 0.28125,0.29688 0.0781,0.20312 -0.0156,0.375 l -3.21875,6.92187 q -0.17187,0.375 -0.54687,0.375 z m 8.70227,0.0781 q -1.1875,0 -2.10938,-0.51563 -0.90625,-0.53125 -1.4375,-1.45312 -0.51562,-0.92188 -0.51562,-2.10938 0,-1.20312 0.48437,-2.10937 0.5,-0.92188 1.35938,-1.45313 0.875,-0.53125 2,-0.53125 1.10937,0 1.9375,0.51563 0.82812,0.5 1.28125,1.39062 0.45312,0.89063 0.45312,2.04688 0,0.23437 -0.14062,0.375 -0.14063,0.125 -0.375,0.125 h -6.23438 v -0.9375 h 6.34375 l -0.625,0.45312 q 0.0156,-0.84375 -0.3125,-1.51562 -0.32812,-0.67188 -0.92187,-1.04688 -0.57813,-0.39062 -1.40625,-0.39062 -0.82813,0 -1.46875,0.40625 -0.625,0.39062 -0.96875,1.09375 -0.34375,0.6875 -0.34375,1.57812 0,0.89063 0.375,1.57813 0.39062,0.6875 1.0625,1.09375 0.6875,0.39062 1.5625,0.39062 0.53125,0 1.0625,-0.17187 0.53125,-0.1875 0.85937,-0.46875 0.15625,-0.14063 0.35938,-0.14063 0.21875,-0.0156 0.35937,0.10938 0.1875,0.17187 0.1875,0.375 0.0156,0.20312 -0.15625,0.35937 -0.48437,0.40625 -1.23437,0.6875 -0.75,0.26563 -1.4375,0.26563 z m 5.82708,-5.01563 q 0.0469,-0.90625 0.48438,-1.625 0.4375,-0.71875 1.125,-1.125 0.70312,-0.42187 1.54687,-0.42187 0.67188,0 1.03125,0.20312 0.375,0.1875 0.29688,0.54688 -0.0625,0.21875 -0.20313,0.29687 -0.14062,0.0781 -0.34375,0.0625 -0.1875,-0.0156 -0.4375,-0.0312 -0.82812,-0.0781 -1.46875,0.17188 -0.625,0.23437 -1,0.73437 -0.375,0.5 -0.375,1.1875 z m 0.0937,4.9375 q -0.26562,0 -0.42187,-0.14062 -0.14063,-0.15625 -0.14063,-0.42188 v -6.89062 q 0,-0.26563 0.14063,-0.40625 0.15625,-0.15625 0.42187,-0.15625 0.26563,0 0.40625,0.15625 0.15625,0.14062 0.15625,0.40625 v 6.89062 q 0,0.26563 -0.15625,0.42188 -0.14062,0.14062 -0.40625,0.14062 z m 5.55634,3.42188 q -0.23438,0 -0.40625,-0.15625 -0.15625,-0.15625 -0.15625,-0.39063 0,-0.14062 0.0781,-0.3125 0.8125,-1.625 1.21875,-3.28125 0.42188,-1.65625 0.42188,-3.29687 0,-3.29688 -1.625,-6.5625 -0.0781,-0.15625 -0.0937,-0.32813 0,-0.23437 0.17187,-0.39062 0.17188,-0.17188 0.39063,-0.17188 0.375,0 0.5625,0.39063 0.85937,1.75 1.28125,3.51562 0.42187,1.76563 0.42187,3.53125 0,1.78125 -0.4375,3.54688 -0.42187,1.76562 -1.26562,3.53125 -0.125,0.20312 -0.25,0.28125 -0.125,0.0937 -0.3125,0.0937 z"
115 |        fill-rule="nonzero"
116 |        id="path13" />
117 |     <path
118 |        fill="#ffffff"
119 |        d="M 346.61942,196.9685 H 484.00525 V 315.04723 H 346.61942 Z"
120 |        fill-rule="evenodd"
121 |        id="path14" />
122 |     <path
123 |        stroke="#999999"
124 |        stroke-width="1"
125 |        stroke-linejoin="round"
126 |        stroke-linecap="butt"
127 |        d="M 346.61942,196.9685 H 484.00525 V 315.04723 H 346.61942 Z"
128 |        fill-rule="evenodd"
129 |        id="path15" />
130 |     <path
131 |        fill="#999999"
132 |        d="m 371.68576,221.3285 q -0.35937,0 -0.60937,-0.23438 -0.23438,-0.25 -0.23438,-0.59375 v -10.82812 q 0,-0.375 0.23438,-0.60938 0.25,-0.23437 0.60937,-0.23437 0.46875,0 0.73438,0.45312 l 5,10.03125 h -0.51563 l 4.89063,-10.03125 q 0.25,-0.45312 0.73437,-0.45312 0.34375,0 0.57813,0.23437 0.25,0.23438 0.25,0.60938 v 10.82812 q 0,0.34375 -0.25,0.59375 -0.25,0.23438 -0.57813,0.23438 -0.35937,0 -0.59375,-0.23438 -0.23437,-0.25 -0.23437,-0.59375 v -8.53125 l 0.3125,-0.0781 -4.1875,8.54687 q -0.28125,0.40625 -0.71875,0.40625 -0.53125,0 -0.76563,-0.48437 l -4.15625,-8.3125 0.32813,-0.0781 v 8.53125 q 0,0.34375 -0.25,0.59375 -0.23438,0.23438 -0.57813,0.23438 z m 20.47766,0.15625 q -1.29687,0 -2.4375,-0.48438 -1.125,-0.48437 -1.96875,-1.35937 -0.82812,-0.875 -1.29687,-2.03125 -0.46875,-1.17188 -0.46875,-2.53125 0,-1.34375 0.46875,-2.5 0.46875,-1.17188 1.29687,-2.03125 0.84375,-0.875 1.96875,-1.375 1.125,-0.5 2.4375,-0.5 1.23438,0 2.10938,0.32812 0.89062,0.3125 1.79687,1.04688 0.125,0.0937 0.1875,0.20312 0.0781,0.10938 0.0937,0.21875 0.0312,0.0937 0.0312,0.23438 0,0.3125 -0.21875,0.51562 -0.21875,0.1875 -0.51562,0.21875 -0.29688,0.0156 -0.59375,-0.20312 -0.59375,-0.51563 -1.23438,-0.78125 -0.625,-0.28125 -1.65625,-0.28125 -0.95312,0 -1.78125,0.39062 -0.82812,0.375 -1.46875,1.04688 -0.625,0.67187 -0.98437,1.5625 -0.34375,0.89062 -0.34375,1.90625 0,1.01562 0.34375,1.90625 0.35937,0.89062 0.98437,1.5625 0.64063,0.67187 1.46875,1.04687 0.82813,0.375 1.78125,0.375 0.8125,0 1.53125,-0.28125 0.73438,-0.28125 1.40625,-0.78125 0.29688,-0.20312 0.5625,-0.17187 0.28125,0.0156 0.46875,0.21875 0.20313,0.20312 0.20313,0.54687 0,0.17188 -0.0625,0.32813 -0.0625,0.14062 -0.1875,0.26562 -0.875,0.6875 -1.85938,1.04688 -0.98437,0.34375 -2.0625,0.34375 z m 7.66638,-0.15625 q -0.35937,0 -0.60937,-0.23438 -0.23438,-0.25 -0.23438,-0.59375 v -10.82812 q 0,-0.375 0.23438,-0.60938 0.25,-0.23437 0.60937,-0.23437 h 3.1875 q 1.20313,0 2.125,0.53125 0.9375,0.53125 1.45313,1.46875 0.53125,0.9375 0.53125,2.14062 0,1.17188 -0.53125,2.09375 -0.51563,0.90625 -1.45313,1.42188 -0.92187,0.5 -2.125,0.5 h -2.35937 v 3.51562 q 0,0.34375 -0.23438,0.59375 -0.23437,0.23438 -0.59375,0.23438 z m 0.82813,-5.875 h 2.35937 q 0.75,0 1.29688,-0.3125 0.5625,-0.32813 0.875,-0.875 0.32812,-0.5625 0.32812,-1.29688 0,-0.76562 -0.32812,-1.34375 -0.3125,-0.57812 -0.875,-0.90625 -0.54688,-0.34375 -1.29688,-0.34375 h -2.35937 z m 18.59353,6.03125 q -1.29687,0 -2.4375,-0.48438 -1.125,-0.48437 -1.96875,-1.35937 -0.82812,-0.875 -1.29687,-2.03125 -0.46875,-1.17188 -0.46875,-2.53125 0,-1.34375 0.46875,-2.5 0.46875,-1.17188 1.29687,-2.03125 0.84375,-0.875 1.96875,-1.375 1.125,-0.5 2.4375,-0.5 1.23438,0 2.10938,0.32812 0.89062,0.3125 1.79687,1.04688 0.125,0.0937 0.1875,0.20312 0.0781,0.10938 0.0937,0.21875 0.0312,0.0937 0.0312,0.23438 0,0.3125 -0.21875,0.51562 -0.21875,0.1875 -0.51562,0.21875 -0.29688,0.0156 -0.59375,-0.20312 -0.59375,-0.51563 -1.23438,-0.78125 -0.625,-0.28125 -1.65625,-0.28125 -0.95312,0 -1.78125,0.39062 -0.82812,0.375 -1.46875,1.04688 -0.625,0.67187 -0.98437,1.5625 -0.34375,0.89062 -0.34375,1.90625 0,1.01562 0.34375,1.90625 0.35937,0.89062 0.98437,1.5625 0.64063,0.67187 1.46875,1.04687 0.82813,0.375 1.78125,0.375 0.8125,0 1.53125,-0.28125 0.73438,-0.28125 1.40625,-0.78125 0.29688,-0.20312 0.5625,-0.17187 0.28125,0.0156 0.46875,0.21875 0.20313,0.20312 0.20313,0.54687 0,0.17188 -0.0625,0.32813 -0.0625,0.14062 -0.1875,0.26562 -0.875,0.6875 -1.85938,1.04688 -0.98437,0.34375 -2.0625,0.34375 z m 8.74451,-0.15625 q -0.70312,0 -1.25,-0.375 -0.53125,-0.39063 -0.84375,-1.04688 -0.29687,-0.67187 -0.29687,-1.53125 v -8.75 q 0,-0.34375 0.21875,-0.5625 0.21875,-0.23437 0.57812,-0.23437 0.34375,0 0.5625,0.23437 0.23438,0.21875 0.23438,0.5625 v 8.75 q 0,0.57813 0.21875,0.96875 0.23437,0.39063 0.57812,0.39063 h 0.40625 q 0.3125,0 0.51563,0.21875 0.20312,0.21875 0.20312,0.57812 0,0.34375 -0.3125,0.57813 -0.29687,0.21875 -0.78125,0.21875 z m 3.70627,0 q -0.35938,0 -0.59375,-0.23438 -0.23438,-0.23437 -0.23438,-0.57812 v -7.125 q 0,-0.35938 0.23438,-0.57813 0.23437,-0.23437 0.59375,-0.23437 0.35937,0 0.57812,0.23437 0.23438,0.21875 0.23438,0.57813 v 7.125 q 0,0.34375 -0.23438,0.57812 -0.21875,0.23438 -0.57812,0.23438 z m 0,-10.17188 q -0.4375,0 -0.75,-0.3125 -0.3125,-0.3125 -0.3125,-0.75 0,-0.42187 0.3125,-0.73437 0.3125,-0.3125 0.75,-0.3125 0.42187,0 0.73437,0.3125 0.3125,0.3125 0.3125,0.73437 0,0.4375 -0.3125,0.75 -0.3125,0.3125 -0.73437,0.3125 z m 7.957,10.23438 q -1.32813,0 -2.35938,-0.5625 -1.03125,-0.57813 -1.625,-1.57813 -0.57812,-1 -0.57812,-2.29687 0,-1.3125 0.54687,-2.3125 0.5625,-1 1.53125,-1.5625 0.98438,-0.5625 2.25,-0.5625 1.25,0 2.14063,0.54687 0.90625,0.54688 1.375,1.51563 0.46875,0.96875 0.46875,2.23437 0,0.3125 -0.21875,0.51563 -0.20313,0.1875 -0.51563,0.1875 h -6.45312 v -1.28125 h 6.40625 l -0.65625,0.45312 q -0.0156,-0.79687 -0.32813,-1.42187 -0.29687,-0.64063 -0.85937,-1 -0.5625,-0.375 -1.35938,-0.375 -0.90625,0 -1.5625,0.40625 -0.64062,0.39062 -0.98437,1.09375 -0.32813,0.6875 -0.32813,1.5625 0,0.89062 0.39063,1.57812 0.40625,0.6875 1.10937,1.09375 0.70313,0.39063 1.60938,0.39063 0.5,0 1.01562,-0.1875 0.53125,-0.1875 0.84375,-0.42188 0.23438,-0.17187 0.51563,-0.17187 0.28125,-0.0156 0.5,0.15625 0.26562,0.23437 0.28125,0.53125 0.0156,0.28125 -0.25,0.5 -0.54688,0.42187 -1.35938,0.70312 -0.8125,0.26563 -1.54687,0.26563 z m 13.21729,-0.0469 q -0.34375,0 -0.57813,-0.23437 -0.23437,-0.23438 -0.23437,-0.57813 v -3.9375 q 0,-0.90625 -0.34375,-1.48437 -0.32813,-0.57813 -0.90625,-0.85938 -0.5625,-0.28125 -1.29688,-0.28125 -0.67187,0 -1.21875,0.28125 -0.53125,0.26563 -0.85937,0.71875 -0.3125,0.45313 -0.3125,1.04688 h -1.01563 q 0,-1 0.48438,-1.79688 0.5,-0.79687 1.34375,-1.25 0.84375,-0.46875 1.90625,-0.46875 1.09375,0 1.96875,0.46875 0.875,0.46875 1.375,1.39063 0.5,0.90625 0.5,2.23437 v 3.9375 q 0,0.34375 -0.23438,0.57813 -0.21875,0.23437 -0.57812,0.23437 z m -6.57813,0 q -0.34375,0 -0.57812,-0.23437 -0.23438,-0.23438 -0.23438,-0.57813 v -7.1406 q 0,-0.35938 0.23438,-0.57813 0.23437,-0.23437 0.57812,-0.23437 0.375,0 0.59375,0.23437 0.23438,0.21875 0.23438,0.57813 v 7.14062 q 0,0.34375 -0.23438,0.57813 -0.21875,0.23437 -0.59375,0.23437 z m 13.28702,-0.0156 q -0.79688,0 -1.4375,-0.40625 -0.64063,-0.40625 -1.01563,-1.10938 -0.35937,-0.70312 -0.35937,-1.59375 v -7.625 q 0,-0.35937 0.21875,-0.57812 0.21875,-0.21875 0.57812,-0.21875 0.34375,0 0.5625,0.21875 0.23438,0.21875 0.23438,0.57812 v 7.625 q 0,0.64063 0.34375,1.07813 0.35937,0.4375 0.875,0.4375 h 0.54687 q 0.28125,0 0.48438,0.21875 0.20312,0.21875 0.20312,0.57812 0,0.34375 -0.26562,0.57813 -0.26563,0.21875 -0.6875,0.21875 z m -3.54688,-7.0625 q -0.34375,0 -0.5625,-0.1875 -0.20312,-0.1875 -0.20312,-0.48438 0,-0.3125 0.20312,-0.5 0.21875,-0.20312 0.5625,-0.20312 h 3.6875 q 0.34375,0 0.54688,0.20312 0.20312,0.1875 0.20312,0.5 0,0.29688 -0.20312,0.48438 -0.20313,0.1875 -0.54688,0.1875 z"
133 |        fill-rule="nonzero"
134 |        id="path16" />
135 |     <path
136 |        fill="#ffffff"
137 |        d="m 346.60104,233.56168 h 137.38583 v 74.77167 H 346.60104 Z"
138 |        fill-rule="evenodd"
139 |        id="path17" />
140 |     <path
141 |        stroke="#999999"
142 |        stroke-width="1"
143 |        stroke-linejoin="round"
144 |        stroke-linecap="butt"
145 |        d="m 346.60104,233.56168 h 137.38583 v 74.77167 H 346.60104 Z"
146 |        fill-rule="evenodd"
147 |        id="path18" />
148 |     <path
149 |        fill="#999999"
150 |        d="m 368.58566,256.6417 q -0.23437,0 -0.40625,-0.17187 -0.15625,-0.17188 -0.15625,-0.40625 v -10.29689 q 0,-0.25 0.15625,-0.40625 0.17188,-0.17188 0.40625,-0.17188 0.35938,0 0.51563,0.29688 l 4.9375,9.82812 h -0.5 l 4.85937,-9.82812 q 0.17188,-0.29688 0.51563,-0.29688 0.23437,0 0.39062,0.17188 0.15625,0.15625 0.15625,0.40625 v 10.29689 q 0,0.23437 -0.15625,0.40625 -0.15625,0.17187 -0.39062,0.17187 -0.25,0 -0.42188,-0.17187 -0.17187,-0.17188 -0.17187,-0.40625 v -8.81252 l 0.25,0.0156 -4.32813,8.82814 q -0.15625,0.28125 -0.48437,0.28125 -0.375,0 -0.53125,-0.34375 l -4.35938,-8.71877 0.29688,-0.0625 v 8.81252 q 0,0.23437 -0.17188,0.40625 -0.17187,0.17187 -0.40625,0.17187 z m 18.95596,0.14063 q -1.1875,0 -2.21875,-0.45313 -1.03125,-0.45314 -1.82812,-1.26564 -0.78125,-0.8125 -1.21875,-1.875 -0.4375,-1.0625 -0.4375,-2.28125 0,-1.20313 0.42187,-2.26563 0.4375,-1.0625 1.21875,-1.85937 0.79688,-0.8125 1.82813,-1.26563 1.03125,-0.46875 2.23437,-0.46875 1.0625,0 1.92188,0.3125 0.85937,0.29688 1.67187,0.98438 0.125,0.0937 0.14063,0.23437 0.0312,0.14063 -0.0312,0.26563 -0.0469,0.125 -0.17188,0.1875 -0.0312,0.10937 -0.15625,0.17187 -0.10937,0.0625 -0.26562,0.0469 -0.14063,-0.0156 -0.29688,-0.14063 -0.5625,-0.5 -1.25,-0.73437 -0.67187,-0.25 -1.5625,-0.25 -0.95312,0 -1.78125,0.39062 -0.82812,0.375 -1.46875,1.04688 -0.625,0.65625 -0.98437,1.51562 -0.35938,0.85938 -0.35938,1.82813 0,1 0.35938,1.875 0.35937,0.85937 0.98437,1.51562 0.64063,0.65625 1.46875,1.03125 0.82813,0.375 1.78125,0.375 0.8125,0 1.53125,-0.26562 0.71875,-0.26563 1.35938,-0.76563 0.17187,-0.14062 0.35937,-0.10937 0.20313,0.0312 0.34375,0.17187 0.15625,0.14063 0.15625,0.375 0,0.125 -0.0469,0.21875 -0.0312,0.0937 -0.10938,0.20313 -0.75,0.68751 -1.67187,0.96876 -0.92188,0.28125 -1.92188,0.28126 z m 6.67792,-0.14063 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.17187 -0.15625,-0.42187 v -10.29689 q 0,-0.25 0.15625,-0.40625 0.15625,-0.17188 0.40625,-0.17188 h 2.9375 q 1.07813,0 1.90625,0.48438 0.84375,0.46875 1.3125,1.3125 0.46875,0.82812 0.46875,1.9375 0,1.0625 -0.46875,1.89062 -0.46875,0.82813 -1.3125,1.3125 -0.82812,0.46875 -1.90625,0.46875 h -2.35937 v 3.46877 q 0,0.25 -0.17188,0.42187 -0.15625,0.15625 -0.40625,0.15625 z m 0.57813,-5.14064 h 2.35937 q 0.75,0 1.32813,-0.32813 0.59375,-0.32812 0.92187,-0.90625 0.32813,-0.59375 0.32813,-1.34375 0,-0.78125 -0.32813,-1.35937 -0.32812,-0.59375 -0.92187,-0.92188 -0.57813,-0.34375 -1.32813,-0.34375 h -2.35937 z m 15.63897,5.28127 q -0.9375,0 -1.73437,-0.26563 -0.79688,-0.26562 -1.39063,-0.76564 -0.57812,-0.5 -0.89062,-1.15625 -0.125,-0.23438 -0.0156,-0.4375 0.10938,-0.20313 0.375,-0.26563 0.20313,-0.0625 0.40625,0.0469 0.20313,0.0937 0.29688,0.29687 0.21875,0.42188 0.64062,0.76563 0.4375,0.34375 1.01563,0.53125 0.59375,0.17187 1.29687,0.17187 0.78125,0 1.375,-0.25 0.60938,-0.26562 0.95313,-0.75 0.34375,-0.5 0.34375,-1.20312 0,-0.89063 -0.67188,-1.53125 -0.65625,-0.64063 -2.0625,-0.82813 -1.71875,-0.20312 -2.6875,-1.0625 -0.95312,-0.85937 -0.95312,-2.09375 0,-0.90625 0.46875,-1.5625 0.48437,-0.65625 1.3125,-1.01562 0.84375,-0.35938 1.92187,-0.35938 0.8125,0 1.46875,0.26563 0.65625,0.25 1.14063,0.67187 0.5,0.40625 0.79687,0.90625 0.15625,0.23438 0.0937,0.45313 -0.0469,0.21875 -0.25,0.34375 -0.21875,0.0937 -0.45312,0.0312 -0.21875,-0.0781 -0.32813,-0.28125 -0.23437,-0.34375 -0.5625,-0.64063 -0.32812,-0.29687 -0.79687,-0.46875 -0.46875,-0.1875 -1.125,-0.20312 -1.15625,0 -1.85938,0.5 -0.70312,0.48437 -0.70312,1.42187 0,0.5 0.26562,0.92188 0.26563,0.42187 0.85938,0.71875 0.60937,0.29687 1.64062,0.45312 1.82813,0.25 2.71875,1.10938 0.89063,0.85937 0.89063,2.23437 0,0.79688 -0.29688,1.42188 -0.28125,0.60937 -0.79687,1.03125 -0.51563,0.40627 -1.21875,0.62502 -0.6875,0.21875 -1.48438,0.21875 z m 9.67121,-0.0625 q -1.1875,0 -2.10938,-0.51563 -0.90625,-0.53127 -1.4375,-1.45314 -0.51562,-0.92188 -0.51562,-2.10938 0,-1.20312 0.48437,-2.10937 0.5,-0.92188 1.35938,-1.45313 0.875,-0.53125 2,-0.53125 1.10937,0 1.9375,0.51563 0.82812,0.5 1.28125,1.39062 0.45312,0.89063 0.45312,2.04688 0,0.23437 -0.14062,0.375 -0.14063,0.125 -0.375,0.125 h -6.23438 v -0.9375 h 6.34375 l -0.625,0.45312 q 0.0156,-0.84375 -0.3125,-1.51562 -0.32812,-0.67188 -0.92187,-1.04688 -0.57813,-0.39062 -1.40625,-0.39062 -0.82813,0 -1.46875,0.40625 -0.625,0.39062 -0.96875,1.09375 -0.34375,0.6875 -0.34375,1.57812 0,0.89063 0.375,1.57813 0.39062,0.6875 1.0625,1.09375 0.6875,0.39062 1.5625,0.39062 0.53125,0 1.0625,-0.17187 0.53125,-0.1875 0.85937,-0.46875 0.15625,-0.14063 0.35938,-0.14063 0.21875,-0.0156 0.35937,0.10938 0.1875,0.17187 0.1875,0.375 0.0156,0.20312 -0.15625,0.35937 -0.48437,0.40627 -1.23437,0.68752 -0.75,0.26562 -1.4375,0.26563 z m 8.17086,0 q -0.875,0 -1.73437,-0.29688 -0.84375,-0.29687 -1.35938,-0.87502 -0.17187,-0.1875 -0.14062,-0.40625 0.0312,-0.21875 0.21875,-0.375 0.20312,-0.14062 0.42187,-0.10937 0.23438,0.0156 0.375,0.1875 0.34375,0.40625 0.92188,0.625 0.59375,0.21875 1.29687,0.21875 1.07813,0 1.5625,-0.375 0.48438,-0.375 0.5,-0.90625 0,-0.51563 -0.5,-0.85938 -0.5,-0.34375 -1.64062,-0.54687 -1.48438,-0.23438 -2.17188,-0.8125 -0.6875,-0.59375 -0.6875,-1.39063 0,-0.75 0.39063,-1.25 0.40625,-0.5 1.0625,-0.75 0.65625,-0.25 1.45312,-0.25 0.98438,0 1.6875,0.34375 0.71875,0.32813 1.15625,0.90625 0.14063,0.1875 0.10938,0.39063 -0.0312,0.20312 -0.23438,0.34375 -0.17187,0.0937 -0.40625,0.0625 -0.21875,-0.0312 -0.375,-0.21875 -0.375,-0.42188 -0.85937,-0.60938 -0.48438,-0.20312 -1.10938,-0.20312 -0.8125,0 -1.29687,0.32812 -0.48438,0.32813 -0.48438,0.82813 0,0.34375 0.1875,0.59375 0.1875,0.25 0.625,0.4375 0.45313,0.1875 1.26563,0.3125 1.09375,0.1875 1.73437,0.53125 0.64063,0.34375 0.90625,0.8125 0.26563,0.45312 0.26563,0.98437 0,0.70313 -0.40625,1.21875 -0.39063,0.51565 -1.10938,0.81252 -0.70312,0.29688 -1.625,0.29688 z m 7.89975,0 q -0.875,0 -1.73437,-0.29688 -0.84375,-0.29687 -1.35938,-0.87502 -0.17187,-0.1875 -0.14062,-0.40625 0.0312,-0.21875 0.21875,-0.375 0.20312,-0.14062 0.42187,-0.10937 0.23438,0.0156 0.375,0.1875 0.34375,0.40625 0.92188,0.625 0.59375,0.21875 1.29687,0.21875 1.07813,0 1.5625,-0.375 0.48438,-0.375 0.5,-0.90625 0,-0.51563 -0.5,-0.85938 -0.5,-0.34375 -1.64062,-0.54687 -1.48438,-0.23438 -2.17188,-0.8125 -0.6875,-0.59375 -0.6875,-1.39063 0,-0.75 0.39063,-1.25 0.40625,-0.5 1.0625,-0.75 0.65625,-0.25 1.45312,-0.25 0.98438,0 1.6875,0.34375 0.71875,0.32813 1.15625,0.90625 0.14063,0.1875 0.10938,0.39063 -0.0312,0.20312 -0.23438,0.34375 -0.17187,0.0937 -0.40625,0.0625 -0.21875,-0.0312 -0.375,-0.21875 -0.375,-0.42188 -0.85937,-0.60938 -0.48438,-0.20312 -1.10938,-0.20312 -0.8125,0 -1.29687,0.32812 -0.48438,0.32813 -0.48438,0.82813 0,0.34375 0.1875,0.59375 0.1875,0.25 0.625,0.4375 0.45313,0.1875 1.26563,0.3125 1.09375,0.1875 1.73437,0.53125 0.64063,0.34375 0.90625,0.8125 0.26563,0.45312 0.26563,0.98437 0,0.70313 -0.40625,1.21875 -0.39063,0.51565 -1.10938,0.81252 -0.70312,0.29688 -1.625,0.29688 z m 5.89975,-0.0781 q -0.26562,0 -0.42187,-0.15625 -0.15625,-0.15625 -0.15625,-0.42187 v -6.87502 q 0,-0.25 0.15625,-0.40625 0.15625,-0.15625 0.42187,-0.15625 0.25,0 0.40625,0.15625 0.15625,0.15625 0.15625,0.40625 v 6.87502 q 0,0.26562 -0.15625,0.42187 -0.15625,0.15625 -0.40625,0.15625 z m -0.0156,-9.54689 q -0.32813,0 -0.5625,-0.23437 -0.23438,-0.23438 -0.23438,-0.5625 0,-0.375 0.23438,-0.57813 0.25,-0.21875 0.57812,-0.21875 0.29688,0 0.53125,0.21875 0.25,0.20313 0.25,0.57813 0,0.32812 -0.23437,0.5625 -0.23438,0.23437 -0.5625,0.23437 z m 7.09503,9.62502 q -1.17187,0 -2.09375,-0.53125 -0.92187,-0.53127 -1.45312,-1.45315 -0.53125,-0.92187 -0.53125,-2.09375 0,-1.1875 0.53125,-2.10937 0.53125,-0.92188 1.45312,-1.45313 0.92188,-0.53125 2.09375,-0.53125 1.17188,0 2.07813,0.53125 0.92187,0.53125 1.45312,1.45313 0.53125,0.92187 0.54688,2.10937 0,1.17188 -0.54688,2.09375 -0.53125,0.92188 -1.45312,1.45315 -0.90625,0.53125 -2.07813,0.53125 z m 0,-1.03127 q 0.84375,0 1.51563,-0.39063 0.6875,-0.40625 1.0625,-1.09375 0.375,-0.6875 0.375,-1.5625 0,-0.875 -0.375,-1.5625 -0.375,-0.70312 -1.0625,-1.09375 -0.67188,-0.40625 -1.51563,-0.40625 -0.84375,0 -1.53125,0.40625 -0.67187,0.39063 -1.0625,1.09375 -0.375,0.6875 -0.375,1.5625 0,0.875 0.375,1.5625 0.39063,0.6875 1.0625,1.09375 0.6875,0.39063 1.53125,0.39063 z m 13.14108,0.95314 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.17188 -0.15625,-0.40625 v -3.81252 q 0,-0.90625 -0.34375,-1.48437 -0.34375,-0.59375 -0.9375,-0.875 -0.59375,-0.29688 -1.34375,-0.29688 -0.71875,0 -1.29687,0.28125 -0.57813,0.26563 -0.92188,0.75 -0.32812,0.48438 -0.32812,1.10938 h -0.8125 q 0.0312,-0.92188 0.5,-1.64063 0.46875,-0.73437 1.23437,-1.15625 0.78125,-0.42187 1.73438,-0.42187 1.04687,0 1.85937,0.4375 0.82813,0.4375 1.29688,1.28125 0.48437,0.82812 0.48437,2.01562 v 3.81252 q 0,0.23437 -0.17187,0.40625 -0.15625,0.15625 -0.39063,0.15625 z m -6.29687,0 q -0.26563,0 -0.42188,-0.15625 -0.15625,-0.15625 -0.15625,-0.40625 v -6.89064 q 0,-0.25 0.15625,-0.40625 0.15625,-0.15625 0.42188,-0.15625 0.25,0 0.40625,0.15625 0.15625,0.15625 0.15625,0.40625 v 6.89064 q 0,0.25 -0.15625,0.40625 -0.15625,0.15625 -0.40625,0.15625 z"
151 |        fill-rule="nonzero"
152 |        id="path19" />
153 |     <path
154 |        fill="#999999"
155 |        d="m 346.60104,269.38315 h 137.38583 v 45.66928 H 346.60104 Z"
156 |        fill-rule="evenodd"
157 |        id="path20" />
158 |     <path
159 |        stroke="#999999"
160 |        stroke-width="1"
161 |        stroke-linejoin="round"
162 |        stroke-linecap="butt"
163 |        d="m 346.60104,269.38315 h 137.38583 v 45.66928 H 346.60104 Z"
164 |        fill-rule="evenodd"
165 |        id="path21" />
166 |     <path
167 |        fill="#ffffff"
168 |        d="m 360.72348,288.2978 q -0.23438,0 -0.40625,-0.17188 -0.15625,-0.17187 -0.15625,-0.40625 V 277.4228 q 0,-0.25 0.15625,-0.40625 0.17187,-0.17188 0.40625,-0.17188 0.35937,0 0.51562,0.29688 l 4.9375,9.82812 h -0.5 l 4.85938,-9.82812 q 0.17187,-0.29688 0.51562,-0.29688 0.23438,0 0.39063,0.17188 0.15625,0.15625 0.15625,0.40625 v 10.29687 q 0,0.23438 -0.15625,0.40625 -0.15625,0.17188 -0.39063,0.17188 -0.25,0 -0.42187,-0.17188 -0.17188,-0.17187 -0.17188,-0.40625 v -8.8125 l 0.25,0.0156 -4.32812,8.82812 q -0.15625,0.28125 -0.48438,0.28125 -0.375,0 -0.53125,-0.34375 l -4.35937,-8.71875 0.29687,-0.0625 v 8.8125 q 0,0.23438 -0.17187,0.40625 -0.17188,0.17188 -0.40625,0.17188 z m 18.95596,0.14062 q -1.1875,0 -2.21875,-0.45312 -1.03125,-0.45313 -1.82812,-1.26563 -0.78125,-0.8125 -1.21875,-1.875 -0.4375,-1.0625 -0.4375,-2.28125 0,-1.20312 0.42187,-2.26562 0.4375,-1.0625 1.21875,-1.85938 0.79688,-0.8125 1.82813,-1.26562 1.03125,-0.46875 2.23437,-0.46875 1.0625,0 1.92188,0.3125 0.85937,0.29687 1.67187,0.98437 0.125,0.0937 0.14063,0.23438 0.0312,0.14062 -0.0312,0.26562 -0.0469,0.125 -0.17188,0.1875 -0.0312,0.10938 -0.15625,0.17188 -0.10937,0.0625 -0.26562,0.0469 -0.14063,-0.0156 -0.29688,-0.14062 -0.5625,-0.5 -1.25,-0.73438 -0.67187,-0.25 -1.5625,-0.25 -0.95312,0 -1.78125,0.39063 -0.82812,0.375 -1.46875,1.04687 -0.625,0.65625 -0.98437,1.51563 -0.35938,0.85937 -0.35938,1.82812 0,1 0.35938,1.875 0.35937,0.85938 0.98437,1.51563 0.64063,0.65625 1.46875,1.03125 0.82813,0.375 1.78125,0.375 0.8125,0 1.53125,-0.26563 0.71875,-0.26562 1.35938,-0.76562 0.17187,-0.14063 0.35937,-0.10938 0.20313,0.0312 0.34375,0.17188 0.15625,0.14062 0.15625,0.375 0,0.125 -0.0469,0.21875 -0.0312,0.0937 -0.10938,0.20312 -0.75,0.6875 -1.67187,0.96875 -0.92188,0.28125 -1.92188,0.28125 z m 6.67792,-0.14062 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.17188 -0.15625,-0.42188 V 277.4228 q 0,-0.25 0.15625,-0.40625 0.15625,-0.17188 0.40625,-0.17188 h 2.9375 q 1.07813,0 1.90625,0.48438 0.84375,0.46875 1.3125,1.3125 0.46875,0.82812 0.46875,1.9375 0,1.0625 -0.46875,1.89062 -0.46875,0.82813 -1.3125,1.3125 -0.82812,0.46875 -1.90625,0.46875 h -2.35937 v 3.46875 q 0,0.25 -0.17188,0.42188 -0.15625,0.15625 -0.40625,0.15625 z m 0.57813,-5.14063 h 2.35937 q 0.75,0 1.32813,-0.32812 0.59375,-0.32813 0.92187,-0.90625 0.32813,-0.59375 0.32813,-1.34375 0,-0.78125 -0.32813,-1.35938 -0.32812,-0.59375 -0.92187,-0.92187 -0.57813,-0.34375 -1.32813,-0.34375 h -2.35937 z m 15.45147,5.14063 q -0.23437,0 -0.40625,-0.17188 -0.17187,-0.17187 -0.17187,-0.40625 v -10.875 h 1.14062 v 10.875 q 0,0.23438 -0.15625,0.40625 -0.15625,0.17188 -0.40625,0.17188 z m -4.04687,-10.40625 q -0.23438,0 -0.39063,-0.14063 -0.14062,-0.15625 -0.14062,-0.375 0,-0.23437 0.14062,-0.375 0.15625,-0.15625 0.39063,-0.15625 h 8.10937 q 0.23438,0 0.375,0.15625 0.14063,0.14063 0.14063,0.375 0,0.21875 -0.14063,0.375 -0.14062,0.14063 -0.375,0.14063 z m 8.57779,5.46875 q 0.0469,-0.90625 0.48437,-1.625 0.4375,-0.71875 1.125,-1.125 0.70313,-0.42188 1.54688,-0.42188 0.67187,0 1.03125,0.20313 0.375,0.1875 0.29687,0.54687 -0.0625,0.21875 -0.20312,0.29688 -0.14063,0.0781 -0.34375,0.0625 -0.1875,-0.0156 -0.4375,-0.0312 -0.82813,-0.0781 -1.46875,0.17187 -0.625,0.23438 -1,0.73438 -0.375,0.5 -0.375,1.1875 z m 0.0937,4.9375 q -0.26563,0 -0.42188,-0.14063 -0.14062,-0.15625 -0.14062,-0.42187 v -6.89063 q 0,-0.26562 0.14062,-0.40625 0.15625,-0.15625 0.42188,-0.15625 0.26562,0 0.40625,0.15625 0.15625,0.14063 0.15625,0.40625 v 6.89063 q 0,0.26562 -0.15625,0.42187 -0.14063,0.14063 -0.40625,0.14063 z m 9.09466,0.0781 q -1.125,0 -2.01562,-0.53125 -0.89063,-0.54687 -1.42188,-1.46875 -0.51562,-0.92187 -0.51562,-2.07812 0,-1.17188 0.53125,-2.09375 0.54687,-0.92188 1.46875,-1.45313 0.92187,-0.54687 2.07812,-0.54687 1.15625,0 2.0625,0.54687 0.92188,0.53125 1.45313,1.45313 0.54687,0.92187 0.5625,2.09375 l -0.45313,0.34375 q 0,1.0625 -0.5,1.90625 -0.48437,0.84375 -1.32812,1.34375 -0.84375,0.48437 -1.92188,0.48437 z m 0.125,-1.03125 q 0.84375,0 1.51563,-0.39062 0.67187,-0.40625 1.04687,-1.09375 0.39063,-0.70313 0.39063,-1.5625 0,-0.875 -0.39063,-1.5625 -0.375,-0.70313 -1.04687,-1.09375 -0.67188,-0.40625 -1.51563,-0.40625 -0.82812,0 -1.51562,0.40625 -0.67188,0.39062 -1.0625,1.09375 -0.39063,0.6875 -0.39063,1.5625 0,0.85937 0.39063,1.5625 0.39062,0.6875 1.0625,1.09375 0.6875,0.39062 1.51562,0.39062 z m 3.5,0.95313 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.15625 -0.15625,-0.40625 v -2.5 l 0.26563,-1.15625 0.875,0.21875 v 3.4375 q 0,0.25 -0.17188,0.40625 -0.15625,0.15625 -0.40625,0.15625 z m 9.64109,0 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.17188 -0.15625,-0.40625 v -3.8125 q 0,-0.90625 -0.34375,-1.48438 -0.34375,-0.59375 -0.9375,-0.875 -0.59375,-0.29687 -1.34375,-0.29687 -0.71875,0 -1.29688,0.28125 -0.57812,0.26562 -0.92187,0.75 -0.32813,0.48437 -0.32813,1.10937 h -0.8125 q 0.0312,-0.92187 0.5,-1.64062 0.46875,-0.73438 1.23438,-1.15625 0.78125,-0.42188 1.73437,-0.42188 1.04688,0 1.85938,0.4375 0.82812,0.4375 1.29687,1.28125 0.48438,0.82813 0.48438,2.01563 v 3.8125 q 0,0.23437 -0.17188,0.40625 -0.15625,0.15625 -0.39062,0.15625 z m -6.29688,0 q -0.26562,0 -0.42187,-0.15625 -0.15625,-0.15625 -0.15625,-0.40625 v -6.89063 q 0,-0.25 0.15625,-0.40625 0.15625,-0.15625 0.42187,-0.15625 0.25,0 0.40625,0.15625 0.15625,0.15625 0.15625,0.40625 v 6.89063 q 0,0.25 -0.15625,0.40625 -0.15625,0.15625 -0.40625,0.15625 z m 12.15668,0.0781 q -0.875,0 -1.73438,-0.29687 -0.84375,-0.29688 -1.35937,-0.875 -0.17188,-0.1875 -0.14063,-0.40625 0.0312,-0.21875 0.21875,-0.375 0.20313,-0.14063 0.42188,-0.10938 0.23437,0.0156 0.375,0.1875 0.34375,0.40625 0.92187,0.625 0.59375,0.21875 1.29688,0.21875 1.07812,0 1.5625,-0.375 0.48437,-0.375 0.5,-0.90625 0,-0.51562 -0.5,-0.85937 -0.5,-0.34375 -1.64063,-0.54688 -1.48437,-0.23437 -2.17187,-0.8125 -0.6875,-0.59375 -0.6875,-1.39062 0,-0.75 0.39062,-1.25 0.40625,-0.5 1.0625,-0.75 0.65625,-0.25 1.45313,-0.25 0.98437,0 1.6875,0.34375 0.71875,0.32812 1.15625,0.90625 0.14062,0.1875 0.10937,0.39062 -0.0312,0.20313 -0.23437,0.34375 -0.17188,0.0937 -0.40625,0.0625 -0.21875,-0.0312 -0.375,-0.21875 -0.375,-0.42187 -0.85938,-0.60937 -0.48437,-0.20313 -1.10937,-0.20313 -0.8125,0 -1.29688,0.32813 -0.48437,0.32812 -0.48437,0.82812 0,0.34375 0.1875,0.59375 0.1875,0.25 0.625,0.4375 0.45312,0.1875 1.26562,0.3125 1.09375,0.1875 1.73438,0.53125 0.64062,0.34375 0.90625,0.8125 0.26562,0.45313 0.26562,0.98438 0,0.70312 -0.40625,1.21875 -0.39062,0.51562 -1.10937,0.8125 -0.70313,0.29687 -1.625,0.29687 z m 5.66537,3.34375 q -0.26562,0 -0.42187,-0.15625 -0.15625,-0.14062 -0.15625,-0.40625 v -6.92187 q 0.0156,-1.14063 0.54687,-2.04688 0.54688,-0.92187 1.45313,-1.45312 0.92187,-0.53125 2.0625,-0.53125 1.17187,0 2.09375,0.54687 0.92187,0.53125 1.45312,1.45313 0.54688,0.92187 0.54688,2.09375 0,1.15625 -0.53125,2.07812 -0.51563,0.92188 -1.40625,1.46875 -0.89063,0.53125 -2.01563,0.53125 -0.98437,0 -1.78125,-0.42187 -0.79687,-0.42188 -1.28125,-1.10938 v 4.3125 q 0,0.26563 -0.15625,0.40625 -0.15625,0.15625 -0.40625,0.15625 z m 3.48438,-4.375 q 0.85937,0 1.53125,-0.39062 0.67187,-0.40625 1.0625,-1.09375 0.39062,-0.70313 0.39062,-1.5625 0,-0.875 -0.39062,-1.5625 -0.39063,-0.70313 -1.0625,-1.09375 -0.67188,-0.40625 -1.53125,-0.40625 -0.82813,0 -1.51563,0.40625 -0.67187,0.39062 -1.04687,1.09375 -0.375,0.6875 -0.375,1.5625 0,0.85937 0.375,1.5625 0.375,0.6875 1.04687,1.09375 0.6875,0.39062 1.51563,0.39062 z m 9.95578,1.03125 q -1.17188,0 -2.09375,-0.53125 -0.92188,-0.53125 -1.45313,-1.45312 -0.53125,-0.92188 -0.53125,-2.09375 0,-1.1875 0.53125,-2.10938 0.53125,-0.92187 1.45313,-1.45312 0.92187,-0.53125 2.09375,-0.53125 1.17187,0 2.07812,0.53125 0.92188,0.53125 1.45313,1.45312 0.53125,0.92188 0.54687,2.10938 0,1.17187 -0.54687,2.09375 -0.53125,0.92187 -1.45313,1.45312 -0.90625,0.53125 -2.07812,0.53125 z m 0,-1.03125 q 0.84375,0 1.51562,-0.39062 0.6875,-0.40625 1.0625,-1.09375 0.375,-0.6875 0.375,-1.5625 0,-0.875 -0.375,-1.5625 -0.375,-0.70313 -1.0625,-1.09375 -0.67187,-0.40625 -1.51562,-0.40625 -0.84375,0 -1.53125,0.40625 -0.67188,0.39062 -1.0625,1.09375 -0.375,0.6875 -0.375,1.5625 0,0.875 0.375,1.5625 0.39062,0.6875 1.0625,1.09375 0.6875,0.39062 1.53125,0.39062 z m 6.7348,-3.98437 q 0.0469,-0.90625 0.48437,-1.625 0.4375,-0.71875 1.125,-1.125 0.70313,-0.42188 1.54688,-0.42188 0.67187,0 1.03125,0.20313 0.375,0.1875 0.29687,0.54687 -0.0625,0.21875 -0.20312,0.29688 -0.14063,0.0781 -0.34375,0.0625 -0.1875,-0.0156 -0.4375,-0.0312 -0.82813,-0.0781 -1.46875,0.17187 -0.625,0.23438 -1,0.73438 -0.375,0.5 -0.375,1.1875 z m 0.0937,4.9375 q -0.26563,0 -0.42188,-0.14063 -0.14062,-0.15625 -0.14062,-0.42187 v -6.89063 q 0,-0.26562 0.14062,-0.40625 0.15625,-0.15625 0.42188,-0.15625 0.26562,0 0.40625,0.15625 0.15625,0.14063 0.15625,0.40625 v 6.89063 q 0,0.26562 -0.15625,0.42187 -0.14063,0.14063 -0.40625,0.14063 z m 9.29071,0 q -0.78125,0 -1.39063,-0.35938 -0.59375,-0.375 -0.95312,-1.01562 -0.34375,-0.64063 -0.34375,-1.45313 v -7.17187 q 0,-0.25 0.14062,-0.40625 0.15625,-0.15625 0.40625,-0.15625 0.25,0 0.40625,0.15625 0.17188,0.15625 0.17188,0.40625 v 7.17187 q 0,0.75 0.4375,1.23438 0.4375,0.46875 1.125,0.46875 h 0.39062 q 0.23438,0 0.375,0.15625 0.15625,0.15625 0.15625,0.40625 0,0.25 -0.17187,0.40625 -0.17188,0.15625 -0.4375,0.15625 z m -3.64063,-6.73438 q -0.21875,0 -0.375,-0.14062 -0.14062,-0.14063 -0.14062,-0.34375 0,-0.23438 0.14062,-0.35938 0.15625,-0.14062 0.375,-0.14062 h 3.73438 q 0.21875,0 0.35937,0.14062 0.15625,0.125 0.15625,0.35938 0,0.20312 -0.15625,0.34375 -0.14062,0.14062 -0.35937,0.14062 z"
169 |        fill-rule="nonzero"
170 |        id="path22" />
171 |     <path
172 |        fill="#ffffff"
173 |        d="m 392.35425,309.71967 q -0.17188,0 -0.3125,-0.0937 -0.125,-0.0781 -0.23438,-0.28125 -0.85937,-1.76563 -1.28125,-3.53125 -0.42187,-1.76563 -0.42187,-3.54688 0,-1.76562 0.42187,-3.53125 0.42188,-1.76562 1.28125,-3.51562 0.1875,-0.39063 0.54688,-0.39063 0.23437,0 0.39062,0.17188 0.17188,0.15625 0.17188,0.39062 0,0.17188 -0.0937,0.32813 -1.60938,3.26562 -1.60938,6.5625 0,1.64062 0.40625,3.29687 0.42188,1.65625 1.21875,3.28125 0.0937,0.17188 0.0937,0.3125 0,0.23438 -0.17187,0.39063 -0.15625,0.15625 -0.40625,0.15625 z m 7.33014,-3.28125 q -1.1875,0 -2.21875,-0.45313 -1.03125,-0.45312 -1.82813,-1.26562 -0.78125,-0.8125 -1.21875,-1.875 -0.4375,-1.0625 -0.4375,-2.28125 0,-1.20313 0.42188,-2.26563 0.4375,-1.0625 1.21875,-1.85937 0.79687,-0.8125 1.82812,-1.26563 1.03125,-0.46875 2.23438,-0.46875 1.0625,0 1.92187,0.3125 0.85938,0.29688 1.67188,0.98438 0.125,0.0937 0.14062,0.23437 0.0312,0.14063 -0.0312,0.26563 -0.0469,0.125 -0.17187,0.1875 -0.0312,0.10937 -0.15625,0.17187 -0.10938,0.0625 -0.26563,0.0469 -0.14062,-0.0156 -0.29687,-0.14063 -0.5625,-0.5 -1.25,-0.73437 -0.67188,-0.25 -1.5625,-0.25 -0.95313,0 -1.78125,0.39062 -0.82813,0.375 -1.46875,1.04688 -0.625,0.65625 -0.98438,1.51562 -0.35937,0.85938 -0.35937,1.82813 0,1 0.35937,1.875 0.35938,0.85937 0.98438,1.51562 0.64062,0.65625 1.46875,1.03125 0.82812,0.375 1.78125,0.375 0.8125,0 1.53125,-0.26562 0.71875,-0.26563 1.35937,-0.76563 0.17188,-0.14062 0.35938,-0.10937 0.20312,0.0312 0.34375,0.17187 0.15625,0.14063 0.15625,0.375 0,0.125 -0.0469,0.21875 -0.0312,0.0937 -0.10937,0.20313 -0.75,0.6875 -1.67188,0.96875 -0.92187,0.28125 -1.92187,0.28125 z m 7.69354,-0.14063 q -0.57812,0 -1.04687,-0.3125 -0.46875,-0.32812 -0.71875,-0.89062 -0.25,-0.57813 -0.25,-1.32813 v -8.35937 q 0,-0.25 0.14062,-0.40625 0.15625,-0.15625 0.40625,-0.15625 0.25,0 0.40625,0.15625 0.15625,0.15625 0.15625,0.40625 v 8.35937 q 0,0.625 0.25,1.03125 0.26563,0.39063 0.65625,0.39063 h 0.375 q 0.21875,0 0.34375,0.15625 0.14063,0.14062 0.14063,0.39062 0,0.25 -0.1875,0.40625 -0.1875,0.15625 -0.48438,0.15625 z m 3.21118,0 q -0.26562,0 -0.42187,-0.15625 -0.15625,-0.15625 -0.15625,-0.42187 v -6.875 q 0,-0.25 0.15625,-0.40625 0.15625,-0.15625 0.42187,-0.15625 0.25,0 0.40625,0.15625 0.15625,0.15625 0.15625,0.40625 v 6.875 q 0,0.26562 -0.15625,0.42187 -0.15625,0.15625 -0.40625,0.15625 z m -0.0156,-9.54687 q -0.32813,0 -0.5625,-0.23438 -0.23438,-0.23437 -0.23438,-0.5625 0,-0.375 0.23438,-0.57812 0.25,-0.21875 0.57812,-0.21875 0.29688,0 0.53125,0.21875 0.25,0.20312 0.25,0.57812 0,0.32813 -0.23437,0.5625 -0.23438,0.23438 -0.5625,0.23438 z m 7.07944,9.625 q -1.1875,0 -2.10938,-0.51563 -0.90625,-0.53125 -1.4375,-1.45312 -0.51562,-0.92188 -0.51562,-2.10938 0,-1.20312 0.48437,-2.10937 0.5,-0.92188 1.35938,-1.45313 0.875,-0.53125 2,-0.53125 1.10937,0 1.9375,0.51563 0.82812,0.5 1.28125,1.39062 0.45312,0.89063 0.45312,2.04688 0,0.23437 -0.14062,0.375 -0.14063,0.125 -0.375,0.125 h -6.23438 v -0.9375 h 6.34375 l -0.625,0.45312 q 0.0156,-0.84375 -0.3125,-1.51562 -0.32812,-0.67188 -0.92187,-1.04688 -0.57813,-0.39062 -1.40625,-0.39062 -0.82813,0 -1.46875,0.40625 -0.625,0.39062 -0.96875,1.09375 -0.34375,0.6875 -0.34375,1.57812 0,0.89063 0.375,1.57813 0.39062,0.6875 1.0625,1.09375 0.6875,0.39062 1.5625,0.39062 0.53125,0 1.0625,-0.17187 0.53125,-0.1875 0.85937,-0.46875 0.15625,-0.14063 0.35938,-0.14063 0.21875,-0.0156 0.35937,0.10938 0.1875,0.17187 0.1875,0.375 0.0156,0.20312 -0.15625,0.35937 -0.48437,0.40625 -1.23437,0.6875 -0.75,0.26563 -1.4375,0.26563 z m 12.23333,-0.0781 q -0.25,0 -0.40625,-0.15625 -0.15625,-0.17187 -0.15625,-0.40625 v -3.8125 q 0,-0.90625 -0.34375,-1.48437 -0.34375,-0.59375 -0.9375,-0.875 -0.59375,-0.29688 -1.34375,-0.29688 -0.71875,0 -1.29687,0.28125 -0.57813,0.26563 -0.92188,0.75 -0.32812,0.48438 -0.32812,1.10938 h -0.8125 q 0.0312,-0.92188 0.5,-1.64063 0.46875,-0.73437 1.23437,-1.15625 0.78125,-0.42187 1.73438,-0.42187 1.04687,0 1.85937,0.4375 0.82813,0.4375 1.29688,1.28125 0.48437,0.82812 0.48437,2.01562 v 3.8125 q 0,0.23438 -0.17187,0.40625 -0.15625,0.15625 -0.39063,0.15625 z m -6.29687,0 q -0.26563,0 -0.42188,-0.15625 -0.15625,-0.15625 -0.15625,-0.40625 v -6.89062 q 0,-0.25 0.15625,-0.40625 0.15625,-0.15625 0.42188,-0.15625 0.25,0 0.40625,0.15625 0.15625,0.15625 0.15625,0.40625 v 6.89062 q 0,0.25 -0.15625,0.40625 -0.15625,0.15625 -0.40625,0.15625 z m 12.48483,0 q -0.78125,0 -1.39062,-0.35937 -0.59375,-0.375 -0.95313,-1.01563 -0.34375,-0.64062 -0.34375,-1.45312 v -7.17188 q 0,-0.25 0.14063,-0.40625 0.15625,-0.15625 0.40625,-0.15625 0.25,0 0.40625,0.15625 0.17187,0.15625 0.17187,0.40625 v 7.17188 q 0,0.75 0.4375,1.23437 0.4375,0.46875 1.125,0.46875 h 0.39063 q 0.23437,0 0.375,0.15625 0.15625,0.15625 0.15625,0.40625 0,0.25 -0.17188,0.40625 -0.17187,0.15625 -0.4375,0.15625 z m -3.64062,-6.73437 q -0.21875,0 -0.375,-0.14063 -0.14063,-0.14062 -0.14063,-0.34375 0,-0.23437 0.14063,-0.35937 0.15625,-0.14063 0.375,-0.14063 h 3.73437 q 0.21875,0 0.35938,0.14063 0.15625,0.125 0.15625,0.35937 0,0.20313 -0.15625,0.34375 -0.14063,0.14063 -0.35938,0.14063 z m 5.79806,10.15625 q -0.23437,0 -0.40625,-0.15625 -0.15625,-0.15625 -0.15625,-0.39063 0,-0.14062 0.0781,-0.3125 0.8125,-1.625 1.21875,-3.28125 0.42187,-1.65625 0.42187,-3.29687 0,-3.29688 -1.625,-6.5625 -0.0781,-0.15625 -0.0937,-0.32813 0,-0.23437 0.17188,-0.39062 0.17187,-0.17188 0.39062,-0.17188 0.375,0 0.5625,0.39063 0.85938,1.75 1.28125,3.51562 0.42188,1.76563 0.42188,3.53125 0,1.78125 -0.4375,3.54688 -0.42188,1.76562 -1.26563,3.53125 -0.125,0.20312 -0.25,0.28125 -0.125,0.0937 -0.3125,0.0937 z"
174 |        fill-rule="nonzero"
175 |        id="path23" />
176 |     <path
177 |        fill="#999999"
178 |        d="m 370.27295,324.2128 h 264.66144 v 39.59055 H 370.27295 Z"
179 |        fill-rule="evenodd"
180 |        id="path24" />
181 |     <path
182 |        fill="#ffffff"
183 |        d="m 448.76105,350.02432 q -1.01563,0 -1.89063,-0.29688 -0.875,-0.29687 -1.51562,-0.82812 -0.64063,-0.54688 -0.96875,-1.26563 -0.14063,-0.26562 -0.0156,-0.46875 0.125,-0.21875 0.40625,-0.3125 0.23438,-0.0625 0.4375,0.0625 0.21875,0.10938 0.32813,0.32813 0.25,0.46875 0.70312,0.84375 0.46875,0.35937 1.10938,0.5625 0.64062,0.1875 1.40625,0.1875 0.84375,0 1.5,-0.26563 0.65625,-0.28125 1.03125,-0.8125 0.39062,-0.54687 0.39062,-1.3125 0,-0.98437 -0.73437,-1.6875 -0.71875,-0.70312 -2.25,-0.89062 -1.875,-0.21875 -2.9375,-1.15625 -1.04688,-0.9375 -1.04688,-2.29688 0,-0.98437 0.51563,-1.70312 0.53125,-0.71875 1.4375,-1.10938 0.90625,-0.39062 2.09375,-0.39062 0.875,0 1.59375,0.28125 0.73437,0.28125 1.26562,0.73437 0.53125,0.45313 0.875,1 0.15625,0.25 0.0937,0.5 -0.0469,0.23438 -0.28125,0.35938 -0.23437,0.125 -0.48437,0.0469 -0.25,-0.0937 -0.375,-0.3125 -0.23438,-0.375 -0.59375,-0.70312 -0.35938,-0.32813 -0.875,-0.51563 -0.51563,-0.1875 -1.23438,-0.20312 -1.26562,0 -2.03125,0.53125 -0.76562,0.53125 -0.76562,1.5625 0,0.54687 0.28125,1 0.29687,0.45312 0.95312,0.78125 0.67188,0.32812 1.78125,0.48437 2,0.29688 2.96875,1.23438 0.96875,0.9375 0.96875,2.4375 0,0.85937 -0.3125,1.53125 -0.3125,0.67187 -0.875,1.14062 -0.5625,0.45313 -1.32812,0.6875 -0.76563,0.23438 -1.625,0.23438 z m 10.01392,-0.15625 q -0.84375,0 -1.51563,-0.39063 -0.65625,-0.40625 -1.04687,-1.09375 -0.375,-0.70312 -0.375,-1.60937 v -7.8125 q 0,-0.28125 0.15625,-0.45313 0.17187,-0.17187 0.45312,-0.17187 0.26563,0 0.4375,0.17187 0.1875,0.17188 0.1875,0.45313 v 7.8125 q 0,0.82812 0.46875,1.34375 0.48438,0.51562 1.23438,0.51562 h 0.4375 q 0.25,0 0.40625,0.1875 0.17187,0.17188 0.17187,0.4375 0,0.26563 -0.20312,0.4375 -0.1875,0.17188 -0.46875,0.17188 z m -3.98438,-7.35938 q -0.23437,0 -0.40625,-0.14062 -0.15625,-0.15625 -0.15625,-0.39063 0,-0.23437 0.15625,-0.39062 0.17188,-0.15625 0.40625,-0.15625 h 4.07813 q 0.25,0 0.40625,0.15625 0.15625,0.15625 0.15625,0.39062 0,0.23438 -0.15625,0.39063 -0.15625,0.14062 -0.40625,0.14062 z m 10.97888,7.4375 q -1.26562,0 -2.28125,-0.57812 -1,-0.59375 -1.59375,-1.59375 -0.57812,-1.01563 -0.57812,-2.29688 0,-1.25 0.5625,-2.25 0.57812,-1.01562 1.54687,-1.59375 0.98438,-0.59375 2.21875,-0.59375 1.07813,0 1.9375,0.45313 0.85938,0.45312 1.39063,1.20312 v -4.70312 q 0,-0.28125 0.17187,-0.45313 0.17188,-0.17187 0.45313,-0.17187 0.26562,0 0.4375,0.17187 0.1875,0.17188 0.1875,0.45313 v 7.5625 q -0.0312,1.23437 -0.625,2.23437 -0.57813,1 -1.57813,1.57813 -1,0.57812 -2.25,0.57812 z m 0,-1.125 q 0.9375,0 1.65625,-0.4375 0.73438,-0.4375 1.15625,-1.1875 0.42188,-0.75 0.42188,-1.71875 0,-0.9375 -0.42188,-1.6875 -0.42187,-0.76562 -1.15625,-1.20312 -0.71875,-0.4375 -1.65625,-0.4375 -0.90625,0 -1.64062,0.4375 -0.73438,0.4375 -1.17188,1.20312 -0.4375,0.75 -0.4375,1.6875 0,0.96875 0.4375,1.71875 0.4375,0.75 1.17188,1.1875 0.73437,0.4375 1.64062,0.4375 z m 8.20264,1.04688 q -0.28125,0 -0.45313,-0.17188 -0.15625,-0.17187 -0.15625,-0.45312 v -7.5 q 0,-0.29688 0.15625,-0.45313 0.17188,-0.17187 0.45313,-0.17187 0.28125,0 0.4375,0.17187 0.17187,0.15625 0.17187,0.45313 v 7.5 q 0,0.28125 -0.17187,0.45312 -0.15625,0.17188 -0.4375,0.17188 z m 0,-10.42188 q -0.35938,0 -0.625,-0.25 -0.25,-0.25 -0.25,-0.625 0,-0.40625 0.26562,-0.625 0.26563,-0.23437 0.625,-0.23437 0.32813,0 0.59375,0.23437 0.26563,0.21875 0.26563,0.625 0,0.375 -0.26563,0.625 -0.25,0.25 -0.60937,0.25 z m 7.7334,10.5 q -1.28125,0 -2.29688,-0.57812 -1,-0.57813 -1.57812,-1.57813 -0.57813,-1.01562 -0.57813,-2.29687 0,-1.28125 0.57813,-2.29688 0.57812,-1.01562 1.57812,-1.57812 1.01563,-0.57813 2.29688,-0.57813 1.28125,0 2.28125,0.57813 1,0.5625 1.57812,1.57812 0.57813,1.01563 0.59375,2.29688 0,1.28125 -0.59375,2.29687 -0.57812,1 -1.57812,1.57813 -1,0.57812 -2.28125,0.57812 z m 0,-1.125 q 0.9375,0 1.67187,-0.42187 0.73438,-0.4375 1.14063,-1.1875 0.42187,-0.75 0.42187,-1.71875 0,-0.95313 -0.42187,-1.70313 -0.40625,-0.76562 -1.14063,-1.20312 -0.73437,-0.4375 -1.67187,-0.4375 -0.92188,0 -1.65625,0.4375 -0.73438,0.4375 -1.17188,1.20312 -0.42187,0.75 -0.42187,1.70313 0,0.96875 0.42187,1.71875 0.4375,0.75 1.17188,1.1875 0.73437,0.42187 1.65625,0.42187 z m 13.22314,4.79688 q -0.26562,0 -0.45312,-0.1875 -0.17188,-0.17188 -0.17188,-0.4375 v -15.01563 q 0,-0.25 0.17188,-0.4375 0.1875,-0.1875 0.45312,-0.1875 0.26563,0 0.4375,0.1875 0.1875,0.1875 0.1875,0.4375 v 15.01563 q 0,0.26562 -0.1875,0.4375 -0.17187,0.1875 -0.4375,0.1875 z m 13.2565,-3.59375 q -1.01562,0 -1.89062,-0.29688 -0.875,-0.29687 -1.51563,-0.82812 -0.64062,-0.54688 -0.96875,-1.26563 -0.14062,-0.26562 -0.0156,-0.46875 0.125,-0.21875 0.40625,-0.3125 0.23437,-0.0625 0.4375,0.0625 0.21875,0.10938 0.32812,0.32813 0.25,0.46875 0.70313,0.84375 0.46875,0.35937 1.10937,0.5625 0.64063,0.1875 1.40625,0.1875 0.84375,0 1.5,-0.26563 0.65625,-0.28125 1.03125,-0.8125 0.39063,-0.54687 0.39063,-1.3125 0,-0.98437 -0.73438,-1.6875 -0.71875,-0.70312 -2.25,-0.89062 -1.875,-0.21875 -2.9375,-1.15625 -1.04687,-0.9375 -1.04687,-2.29688 0,-0.98437 0.51562,-1.70312 0.53125,-0.71875 1.4375,-1.10938 0.90625,-0.39062 2.09375,-0.39062 0.875,0 1.59375,0.28125 0.73438,0.28125 1.26563,0.73437 0.53125,0.45313 0.875,1 0.15628,0.25 0.0938,0.5 -0.0469,0.23438 -0.28128,0.35938 -0.23438,0.125 -0.48438,0.0469 -0.25,-0.0937 -0.375,-0.3125 -0.23437,-0.375 -0.59375,-0.70312 -0.35937,-0.32813 -0.875,-0.51563 -0.51562,-0.1875 -1.23437,-0.20312 -1.26563,0 -2.03125,0.53125 -0.76563,0.53125 -0.76563,1.5625 0,0.54687 0.28125,1 0.29688,0.45312 0.95313,0.78125 0.67187,0.32812 1.78125,0.48437 2,0.29688 2.96875,1.23438 0.96878,0.9375 0.96878,2.4375 0,0.85937 -0.3125,1.53125 -0.31253,0.67187 -0.87503,1.14062 -0.5625,0.45313 -1.32813,0.6875 -0.76562,0.23438 -1.625,0.23438 z m 10.59208,0 q -1.01563,0 -1.89063,-0.29688 -0.875,-0.29687 -1.51562,-0.82812 -0.64063,-0.54688 -0.96875,-1.26563 -0.14063,-0.26562 -0.0156,-0.46875 0.125,-0.21875 0.40625,-0.3125 0.23438,-0.0625 0.4375,0.0625 0.21875,0.10938 0.32813,0.32813 0.25,0.46875 0.70312,0.84375 0.46875,0.35937 1.10938,0.5625 0.64062,0.1875 1.40625,0.1875 0.84375,0 1.5,-0.26563 0.65625,-0.28125 1.03125,-0.8125 0.39062,-0.54687 0.39062,-1.3125 0,-0.98437 -0.73437,-1.6875 -0.71875,-0.70312 -2.25,-0.89062 -1.875,-0.21875 -2.9375,-1.15625 -1.04688,-0.9375 -1.04688,-2.29688 0,-0.98437 0.51563,-1.70312 0.53125,-0.71875 1.4375,-1.10938 0.90625,-0.39062 2.09375,-0.39062 0.875,0 1.59375,0.28125 0.73437,0.28125 1.26562,0.73437 0.53125,0.45313 0.875,1 0.15625,0.25 0.0937,0.5 -0.0469,0.23438 -0.28125,0.35938 -0.23437,0.125 -0.48437,0.0469 -0.25,-0.0937 -0.375,-0.3125 -0.23438,-0.375 -0.59375,-0.70312 -0.35938,-0.32813 -0.875,-0.51563 -0.51563,-0.1875 -1.23438,-0.20312 -1.26562,0 -2.03125,0.53125 -0.76562,0.53125 -0.76562,1.5625 0,0.54687 0.28125,1 0.29687,0.45312 0.95312,0.78125 0.67188,0.32812 1.78125,0.48437 2,0.29688 2.96875,1.23438 0.96875,0.9375 0.96875,2.4375 0,0.85937 -0.3125,1.53125 -0.3125,0.67187 -0.875,1.14062 -0.5625,0.45313 -1.32812,0.6875 -0.76563,0.23438 -1.625,0.23438 z m 7.37323,-0.15625 q -0.26563,0 -0.45313,-0.17188 -0.17187,-0.1875 -0.17187,-0.45312 v -11.25 q 0,-0.26563 0.17187,-0.4375 0.1875,-0.1875 0.45313,-0.1875 h 7.51562 q 0.25,0 0.4375,0.17187 0.1875,0.17188 0.1875,0.4375 0,0.25 -0.1875,0.42188 -0.1875,0.17187 -0.4375,0.17187 h -6.89062 v 4.42188 h 5.01562 q 0.26563,0 0.4375,0.17187 0.1875,0.17188 0.1875,0.4375 0,0.25 -0.1875,0.4375 -0.17187,0.17188 -0.4375,0.17188 h -5.01562 v 4.45312 h 6.89062 q 0.25,0 0.4375,0.1875 0.1875,0.17188 0.1875,0.40625 0,0.26563 -0.1875,0.4375 -0.1875,0.17188 -0.4375,0.17188 z m 16.66632,3.75 q -0.26563,0 -0.45313,-0.1875 -0.17187,-0.17188 -0.17187,-0.4375 v -15.01563 q 0,-0.25 0.17187,-0.4375 0.1875,-0.1875 0.45313,-0.1875 0.26562,0 0.4375,0.1875 0.1875,0.1875 0.1875,0.4375 v 15.01563 q 0,0.26562 -0.1875,0.4375 -0.17188,0.1875 -0.4375,0.1875 z m 9.36584,-3.75 q -0.375,0 -0.65625,-0.26563 -0.26562,-0.28125 -0.26562,-0.65625 0,-0.40625 0.26562,-0.67187 0.28125,-0.28125 0.65625,-0.28125 0.40625,0 0.67188,0.28125 0.28125,0.28125 0.28125,0.67187 0,0.375 -0.28125,0.65625 -0.26563,0.26563 -0.67188,0.26563 z m 3.73438,0 q -0.39063,0 -0.65625,-0.26563 -0.26563,-0.28125 -0.26563,-0.65625 0,-0.40625 0.26563,-0.67187 0.26562,-0.28125 0.65625,-0.28125 0.375,0 0.65625,0.28125 0.28125,0.28125 0.28125,0.67187 0,0.375 -0.26563,0.65625 -0.26562,0.26563 -0.67187,0.26563 z m 3.73437,0 q -0.40625,0 -0.67187,-0.26563 -0.26563,-0.28125 -0.26563,-0.65625 0,-0.39062 0.26563,-0.67187 0.26562,-0.28125 0.67187,-0.28125 0.375,0 0.64063,0.28125 0.28125,0.26562 0.28125,0.67187 0,0.375 -0.28125,0.65625 -0.26563,0.26563 -0.64063,0.26563 z"
184 |        fill-rule="nonzero"
185 |        id="path25" />
186 |     <path
187 |        fill="#999999"
188 |        d="m 382.9029,363.81628 h -18.60034 v 0 c -4.81516,0 -9.43311,-1.91281 -12.83792,-5.31766 -3.40485,-3.40484 -5.31766,-8.02276 -5.31766,-12.83792 v -21.52948 h 36.75592 z"
189 |        fill-rule="evenodd"
190 |        id="path26" />
191 |     <path
192 |        fill="#999999"
193 |        d="m 667.9974,324.28458 -0.016,20.17407 v 0 c -0.004,5.13288 -2.04706,10.05551 -5.67945,13.685 -3.63238,3.62949 -8.55664,5.66849 -13.68951,5.66849 h -19.82758 l 0.0315,-39.52756 z"
194 |        fill-rule="evenodd"
195 |        id="path27" />
196 |   </g>
197 | </svg>
198 | 


--------------------------------------------------------------------------------
/images/mcp-inspector.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/mcp-inspector.png


--------------------------------------------------------------------------------
/images/og-image.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/og-image.png


--------------------------------------------------------------------------------
/images/quickstart-approve.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/quickstart-approve.png


--------------------------------------------------------------------------------
/images/quickstart-developer.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/quickstart-developer.png


--------------------------------------------------------------------------------
/images/quickstart-filesystem.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/quickstart-filesystem.png


--------------------------------------------------------------------------------
/images/quickstart-hammer.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/quickstart-hammer.png


--------------------------------------------------------------------------------
/images/quickstart-menu.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/quickstart-menu.png


--------------------------------------------------------------------------------
/images/quickstart-screenshot.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/quickstart-screenshot.png


--------------------------------------------------------------------------------
/images/quickstart-tools.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/quickstart-tools.png


--------------------------------------------------------------------------------
/images/visual-indicator-mcp-tools.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/visual-indicator-mcp-tools.png


--------------------------------------------------------------------------------
/images/weather-alerts.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/images/weather-alerts.png


--------------------------------------------------------------------------------
/introduction.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Introduction
  3 | description: 'Get started with the Model Context Protocol (MCP)'
  4 | ---
  5 | 
  6 | <Note>Java SDK released! Check out [what else is new.](/development/updates)</Note>
  7 | 
  8 | MCP is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.
  9 | 
 10 | ## Why MCP?
 11 | 
 12 | MCP helps you build agents and complex workflows on top of LLMs. LLMs frequently need to integrate with data and tools, and MCP provides:
 13 | - A growing list of pre-built integrations that your LLM can directly plug into
 14 | - The flexibility to switch between LLM providers and vendors
 15 | - Best practices for securing your data within your infrastructure
 16 | 
 17 | ### General architecture
 18 | 
 19 | At its core, MCP follows a client-server architecture where a host application can connect to multiple servers:
 20 | 
 21 | ```mermaid
 22 | flowchart LR
 23 |     subgraph "Your Computer"
 24 |         Host["Host with MCP Client\n(Claude, IDEs, Tools)"]
 25 |         S1["MCP Server A"]
 26 |         S2["MCP Server B"]
 27 |         S3["MCP Server C"]
 28 |         Host <-->|"MCP Protocol"| S1
 29 |         Host <-->|"MCP Protocol"| S2
 30 |         Host <-->|"MCP Protocol"| S3
 31 |         S1 <--> D1[("Local\nData Source A")]
 32 |         S2 <--> D2[("Local\nData Source B")]
 33 |     end
 34 |     subgraph "Internet"
 35 |         S3 <-->|"Web APIs"| D3[("Remote\nService C")]
 36 |     end
 37 | ```
 38 | 
 39 | - **MCP Hosts**: Programs like Claude Desktop, IDEs, or AI tools that want to access data through MCP
 40 | - **MCP Clients**: Protocol clients that maintain 1:1 connections with servers
 41 | - **MCP Servers**: Lightweight programs that each expose specific capabilities through the standardized Model Context Protocol
 42 | - **Local Data Sources**: Your computer's files, databases, and services that MCP servers can securely access
 43 | - **Remote Services**: External systems available over the internet (e.g., through APIs) that MCP servers can connect to
 44 | 
 45 | ## Get started
 46 | 
 47 | Choose the path that best fits your needs:
 48 | 
 49 | #### Quick Starts
 50 | <CardGroup cols={2}>
 51 |   <Card
 52 |     title="For Server Developers"
 53 |     icon="bolt"
 54 |     href="/quickstart/server"
 55 |   >
 56 |     Get started building your own server to use in Claude for Desktop and other clients
 57 |   </Card>
 58 |   <Card
 59 |     title="For Client Developers"
 60 |     icon="bolt"
 61 |     href="/quickstart/client"
 62 |   >
 63 |     Get started building your own client that can integrate with all MCP servers
 64 |   </Card>
 65 |   <Card
 66 |     title="For Claude Desktop Users"
 67 |     icon="bolt"
 68 |     href="/quickstart/user"
 69 |   >
 70 |     Get started using pre-built servers in Claude for Desktop
 71 |   </Card>
 72 | </CardGroup>
 73 | 
 74 | #### Examples
 75 | <CardGroup cols={2}>
 76 |   <Card
 77 |     title="Example Servers"
 78 |     icon="grid"
 79 |     href="/examples"
 80 |   >
 81 |     Check out our gallery of official MCP servers and implementations
 82 |   </Card>
 83 |   <Card
 84 |     title="Example Clients"
 85 |     icon="cubes"
 86 |     href="/clients"
 87 |   >
 88 |     View the list of clients that support MCP integrations
 89 |   </Card>
 90 | </CardGroup>
 91 | 
 92 | ## Tutorials
 93 | 
 94 | <CardGroup cols={2}>
 95 |   <Card
 96 |     title="Building MCP with LLMs"
 97 |     icon="comments"
 98 |     href="/tutorials/building-mcp-with-llms"
 99 |   >
100 |     Learn how to use LLMs like Claude to speed up your MCP development
101 |   </Card>
102 |   <Card
103 |   title="Debugging Guide"
104 |   icon="bug"
105 |   href="/docs/tools/debugging">
106 |     Learn how to effectively debug MCP servers and integrations
107 |   </Card>
108 |   <Card
109 |     title="MCP Inspector"
110 |     icon="magnifying-glass"
111 |     href="/docs/tools/inspector"
112 |   >
113 |     Test and inspect your MCP servers with our interactive debugging tool
114 |   </Card>
115 |   <Card
116 |     title="MCP Workshop (Video, 2hr)"
117 |     icon="person-chalkboard"
118 |     href="https://www.youtube.com/watch?v=kQmXtrmQ5Zg"
119 |   >
120 |     <iframe src="https://www.youtube.com/embed/kQmXtrmQ5Zg"> </iframe>
121 |   </Card>
122 | </CardGroup>
123 | 
124 | ## Explore MCP
125 | 
126 | Dive deeper into MCP's core concepts and capabilities:
127 | 
128 | <CardGroup cols={2}>
129 |   <Card
130 |     title="Core architecture"
131 |     icon="sitemap"
132 |     href="/docs/concepts/architecture"
133 |   >
134 |     Understand how MCP connects clients, servers, and LLMs
135 |   </Card>
136 |   <Card
137 |     title="Resources"
138 |     icon="database"
139 |     href="/docs/concepts/resources"
140 |   >
141 |     Expose data and content from your servers to LLMs
142 |   </Card>
143 |   <Card
144 |     title="Prompts"
145 |     icon="message"
146 |     href="/docs/concepts/prompts"
147 |   >
148 |     Create reusable prompt templates and workflows
149 |   </Card>
150 |   <Card
151 |     title="Tools"
152 |     icon="wrench"
153 |     href="/docs/concepts/tools"
154 |   >
155 |     Enable LLMs to perform actions through your server
156 |   </Card>
157 |   <Card
158 |     title="Sampling"
159 |     icon="robot"
160 |     href="/docs/concepts/sampling"
161 |   >
162 |     Let your servers request completions from LLMs
163 |   </Card>
164 |   <Card
165 |     title="Transports"
166 |     icon="network-wired"
167 |     href="/docs/concepts/transports"
168 |   >
169 |     Learn about MCP's communication mechanism
170 |   </Card>
171 | </CardGroup>
172 | 
173 | ## Contributing
174 | 
175 | Want to contribute? Check out our [Contributing Guide](/development/contributing) to learn how you can help improve MCP.
176 | 
177 | ## Support and Feedback
178 | 
179 | Here's how to get help or provide feedback:
180 | 
181 | - For bug reports and feature requests related to the MCP specification, SDKs, or documentation (open source), please [create a GitHub issue](https://github.com/modelcontextprotocol)
182 | - For discussions or Q&A about the MCP specification, use the [specification discussions](https://github.com/modelcontextprotocol/specification/discussions)
183 | - For discussions or Q&A about other MCP open source components, use the [organization discussions](https://github.com/orgs/modelcontextprotocol/discussions)
184 | - For bug reports, feature requests, and questions related to Claude.app and claude.ai's MCP integration, please email mcp-support@anthropic.com
185 | 


--------------------------------------------------------------------------------
/logo/dark.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/logo/dark.png


--------------------------------------------------------------------------------
/logo/dark.svg:
--------------------------------------------------------------------------------
1 | <svg width="1338" height="195" viewBox="0 0 1338 195" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M25 97.8528L92.8822 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706V29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177" stroke="white" stroke-width="12" stroke-linecap="round"/>
3 | <path d="M76.2652 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52" stroke="white" stroke-width="12" stroke-linecap="round"/>
4 | <path d="M109.853 46.9411L59.6482 97.1457C50.2756 106.518 50.2756 121.714 59.6482 131.087V131.087C69.0208 140.459 84.2167 140.459 93.5893 131.087L143.794 80.8822" stroke="white" stroke-width="12" stroke-linecap="round"/>
5 | <path d="M223.886 63.1818H239.364L260.091 113.773H260.909L281.636 63.1818H297.114V133H284.977V85.0341H284.33L265.034 132.795H255.966L236.67 84.9318H236.023V133H223.886V63.1818ZM333.182 134.023C328.068 134.023 323.636 132.898 319.886 130.648C316.136 128.398 313.227 125.25 311.159 121.205C309.114 117.159 308.091 112.432 308.091 107.023C308.091 101.614 309.114 96.875 311.159 92.8068C313.227 88.7386 316.136 85.5795 319.886 83.3295C323.636 81.0795 328.068 79.9545 333.182 79.9545C338.295 79.9545 342.727 81.0795 346.477 83.3295C350.227 85.5795 353.125 88.7386 355.17 92.8068C357.239 96.875 358.273 101.614 358.273 107.023C358.273 112.432 357.239 117.159 355.17 121.205C353.125 125.25 350.227 128.398 346.477 130.648C342.727 132.898 338.295 134.023 333.182 134.023ZM333.25 124.136C336.023 124.136 338.341 123.375 340.205 121.852C342.068 120.307 343.455 118.239 344.364 115.648C345.295 113.057 345.761 110.17 345.761 106.989C345.761 103.784 345.295 100.886 344.364 98.2955C343.455 95.6818 342.068 93.6023 340.205 92.0568C338.341 90.5114 336.023 89.7386 333.25 89.7386C330.409 89.7386 328.045 90.5114 326.159 92.0568C324.295 93.6023 322.898 95.6818 321.966 98.2955C321.057 100.886 320.602 103.784 320.602 106.989C320.602 110.17 321.057 113.057 321.966 115.648C322.898 118.239 324.295 120.307 326.159 121.852C328.045 123.375 330.409 124.136 333.25 124.136ZM388.179 133.92C384.065 133.92 380.384 132.864 377.134 130.75C373.884 128.636 371.315 125.568 369.429 121.545C367.543 117.523 366.599 112.636 366.599 106.886C366.599 101.068 367.554 96.1591 369.463 92.1591C371.395 88.1364 373.997 85.1023 377.27 83.0568C380.543 80.9886 384.19 79.9545 388.213 79.9545C391.281 79.9545 393.804 80.4773 395.781 81.5227C397.759 82.5455 399.327 83.7841 400.486 85.2386C401.645 86.6705 402.543 88.0227 403.179 89.2955H403.69V63.1818H416.065V133H403.929V124.75H403.179C402.543 126.023 401.622 127.375 400.418 128.807C399.213 130.216 397.622 131.42 395.645 132.42C393.668 133.42 391.179 133.92 388.179 133.92ZM391.622 123.795C394.236 123.795 396.463 123.091 398.304 121.682C400.145 120.25 401.543 118.261 402.497 115.716C403.452 113.17 403.929 110.205 403.929 106.818C403.929 103.432 403.452 100.489 402.497 97.9886C401.565 95.4886 400.179 93.5455 398.338 92.1591C396.52 90.7727 394.281 90.0795 391.622 90.0795C388.872 90.0795 386.577 90.7955 384.736 92.2273C382.895 93.6591 381.509 95.6364 380.577 98.1591C379.645 100.682 379.179 103.568 379.179 106.818C379.179 110.091 379.645 113.011 380.577 115.58C381.531 118.125 382.929 120.136 384.77 121.614C386.634 123.068 388.918 123.795 391.622 123.795ZM452.398 134.023C447.148 134.023 442.614 132.932 438.795 130.75C435 128.545 432.08 125.432 430.034 121.409C427.989 117.364 426.966 112.602 426.966 107.125C426.966 101.739 427.989 97.0114 430.034 92.9432C432.102 88.8523 434.989 85.6705 438.693 83.3977C442.398 81.1023 446.75 79.9545 451.75 79.9545C454.977 79.9545 458.023 80.4773 460.886 81.5227C463.773 82.5455 466.318 84.1364 468.523 86.2955C470.75 88.4545 472.5 91.2045 473.773 94.5455C475.045 97.8636 475.682 101.818 475.682 106.409V110.193H432.761V101.875H463.852C463.83 99.5114 463.318 97.4091 462.318 95.5682C461.318 93.7045 459.92 92.2386 458.125 91.1705C456.352 90.1023 454.284 89.5682 451.92 89.5682C449.398 89.5682 447.182 90.1818 445.273 91.4091C443.364 92.6136 441.875 94.2045 440.807 96.1818C439.761 98.1364 439.227 100.284 439.205 102.625V109.886C439.205 112.932 439.761 115.545 440.875 117.727C441.989 119.886 443.545 121.545 445.545 122.705C447.545 123.841 449.886 124.409 452.568 124.409C454.364 124.409 455.989 124.159 457.443 123.659C458.898 123.136 460.159 122.375 461.227 121.375C462.295 120.375 463.102 119.136 463.648 117.659L475.17 118.955C474.443 122 473.057 124.659 471.011 126.932C468.989 129.182 466.398 130.932 463.239 132.182C460.08 133.409 456.466 134.023 452.398 134.023ZM498.463 63.1818V133H486.122V63.1818H498.463ZM595.273 86.7386H582.523C582.159 84.6477 581.489 82.7955 580.511 81.1818C579.534 79.5455 578.318 78.1591 576.864 77.0227C575.409 75.8864 573.75 75.0341 571.886 74.4659C570.045 73.875 568.057 73.5795 565.92 73.5795C562.125 73.5795 558.761 74.5341 555.83 76.4432C552.898 78.3295 550.602 81.1023 548.943 84.7614C547.284 88.3977 546.455 92.8409 546.455 98.0909C546.455 103.432 547.284 107.932 548.943 111.591C550.625 115.227 552.92 117.977 555.83 119.841C558.761 121.682 562.114 122.602 565.886 122.602C567.977 122.602 569.932 122.33 571.75 121.784C573.591 121.216 575.239 120.386 576.693 119.295C578.17 118.205 579.409 116.864 580.409 115.273C581.432 113.682 582.136 111.864 582.523 109.818L595.273 109.886C594.795 113.205 593.761 116.318 592.17 119.227C590.602 122.136 588.545 124.705 586 126.932C583.455 129.136 580.477 130.864 577.068 132.114C573.659 133.341 569.875 133.955 565.716 133.955C559.58 133.955 554.102 132.534 549.284 129.693C544.466 126.852 540.67 122.75 537.898 117.386C535.125 112.023 533.739 105.591 533.739 98.0909C533.739 90.5682 535.136 84.1364 537.932 78.7955C540.727 73.4318 544.534 69.3295 549.352 66.4886C554.17 63.6477 559.625 62.2273 565.716 62.2273C569.602 62.2273 573.216 62.7727 576.557 63.8636C579.898 64.9545 582.875 66.5568 585.489 68.6705C588.102 70.7614 590.25 73.3295 591.932 76.375C593.636 79.3977 594.75 82.8523 595.273 86.7386ZM629.151 134.023C624.037 134.023 619.605 132.898 615.855 130.648C612.105 128.398 609.196 125.25 607.128 121.205C605.082 117.159 604.06 112.432 604.06 107.023C604.06 101.614 605.082 96.875 607.128 92.8068C609.196 88.7386 612.105 85.5795 615.855 83.3295C619.605 81.0795 624.037 79.9545 629.151 79.9545C634.264 79.9545 638.696 81.0795 642.446 83.3295C646.196 85.5795 649.094 88.7386 651.139 92.8068C653.207 96.875 654.241 101.614 654.241 107.023C654.241 112.432 653.207 117.159 651.139 121.205C649.094 125.25 646.196 128.398 642.446 130.648C638.696 132.898 634.264 134.023 629.151 134.023ZM629.219 124.136C631.991 124.136 634.31 123.375 636.173 121.852C638.037 120.307 639.423 118.239 640.332 115.648C641.264 113.057 641.73 110.17 641.73 106.989C641.73 103.784 641.264 100.886 640.332 98.2955C639.423 95.6818 638.037 93.6023 636.173 92.0568C634.31 90.5114 631.991 89.7386 629.219 89.7386C626.378 89.7386 624.014 90.5114 622.128 92.0568C620.264 93.6023 618.866 95.6818 617.935 98.2955C617.026 100.886 616.571 103.784 616.571 106.989C616.571 110.17 617.026 113.057 617.935 115.648C618.866 118.239 620.264 120.307 622.128 121.852C624.014 123.375 626.378 124.136 629.219 124.136ZM677.057 102.318V133H664.716V80.6364H676.511V89.5341H677.125C678.33 86.6023 680.25 84.2727 682.886 82.5455C685.545 80.8182 688.83 79.9545 692.739 79.9545C696.352 79.9545 699.5 80.7273 702.182 82.2727C704.886 83.8182 706.977 86.0568 708.455 88.9886C709.955 91.9205 710.693 95.4773 710.67 99.6591V133H698.33V101.568C698.33 98.0682 697.42 95.3295 695.602 93.3523C693.807 91.375 691.318 90.3864 688.136 90.3864C685.977 90.3864 684.057 90.8636 682.375 91.8182C680.716 92.75 679.409 94.1023 678.455 95.875C677.523 97.6477 677.057 99.7955 677.057 102.318ZM749.364 80.6364V90.1818H719.261V80.6364H749.364ZM726.693 68.0909H739.034V117.25C739.034 118.909 739.284 120.182 739.784 121.068C740.307 121.932 740.989 122.523 741.83 122.841C742.67 123.159 743.602 123.318 744.625 123.318C745.398 123.318 746.102 123.261 746.739 123.148C747.398 123.034 747.898 122.932 748.239 122.841L750.318 132.489C749.659 132.716 748.716 132.966 747.489 133.239C746.284 133.511 744.807 133.67 743.057 133.716C739.966 133.807 737.182 133.341 734.705 132.318C732.227 131.273 730.261 129.659 728.807 127.477C727.375 125.295 726.67 122.568 726.693 119.295V68.0909ZM782.304 134.023C777.054 134.023 772.52 132.932 768.702 130.75C764.906 128.545 761.986 125.432 759.94 121.409C757.895 117.364 756.872 112.602 756.872 107.125C756.872 101.739 757.895 97.0114 759.94 92.9432C762.009 88.8523 764.895 85.6705 768.599 83.3977C772.304 81.1023 776.656 79.9545 781.656 79.9545C784.884 79.9545 787.929 80.4773 790.793 81.5227C793.679 82.5455 796.224 84.1364 798.429 86.2955C800.656 88.4545 802.406 91.2045 803.679 94.5455C804.952 97.8636 805.588 101.818 805.588 106.409V110.193H762.668V101.875H793.759C793.736 99.5114 793.224 97.4091 792.224 95.5682C791.224 93.7045 789.827 92.2386 788.031 91.1705C786.259 90.1023 784.19 89.5682 781.827 89.5682C779.304 89.5682 777.088 90.1818 775.179 91.4091C773.27 92.6136 771.781 94.2045 770.713 96.1818C769.668 98.1364 769.134 100.284 769.111 102.625V109.886C769.111 112.932 769.668 115.545 770.781 117.727C771.895 119.886 773.452 121.545 775.452 122.705C777.452 123.841 779.793 124.409 782.474 124.409C784.27 124.409 785.895 124.159 787.349 123.659C788.804 123.136 790.065 122.375 791.134 121.375C792.202 120.375 793.009 119.136 793.554 117.659L805.077 118.955C804.349 122 802.963 124.659 800.918 126.932C798.895 129.182 796.304 130.932 793.145 132.182C789.986 133.409 786.372 134.023 782.304 134.023ZM824.994 80.6364L835.562 99.9659L846.301 80.6364H859.358L843.574 106.818L859.631 133H846.642L835.562 114.148L824.585 133H811.494L827.449 106.818L811.903 80.6364H824.994ZM895.051 80.6364V90.1818H864.949V80.6364H895.051ZM872.381 68.0909H884.722V117.25C884.722 118.909 884.972 120.182 885.472 121.068C885.994 121.932 886.676 122.523 887.517 122.841C888.358 123.159 889.29 123.318 890.312 123.318C891.085 123.318 891.79 123.261 892.426 123.148C893.085 123.034 893.585 122.932 893.926 122.841L896.006 132.489C895.347 132.716 894.403 132.966 893.176 133.239C891.972 133.511 890.494 133.67 888.744 133.716C885.653 133.807 882.869 133.341 880.392 132.318C877.915 131.273 875.949 129.659 874.494 127.477C873.063 125.295 872.358 122.568 872.381 119.295V68.0909ZM929.73 133V63.1818H955.912C961.276 63.1818 965.776 64.1818 969.412 66.1818C973.071 68.1818 975.832 70.9318 977.696 74.4318C979.582 77.9091 980.526 81.8636 980.526 86.2955C980.526 90.7727 979.582 94.75 977.696 98.2273C975.81 101.705 973.026 104.443 969.344 106.443C965.662 108.42 961.128 109.409 955.741 109.409H938.389V99.0114H954.037C957.173 99.0114 959.741 98.4659 961.741 97.375C963.741 96.2841 965.219 94.7841 966.173 92.875C967.151 90.9659 967.639 88.7727 967.639 86.2955C967.639 83.8182 967.151 81.6364 966.173 79.75C965.219 77.8636 963.73 76.3977 961.707 75.3523C959.707 74.2841 957.128 73.75 953.969 73.75H942.378V133H929.73ZM990.966 133V80.6364H1002.93V89.3636H1003.48C1004.43 86.3409 1006.07 84.0114 1008.39 82.375C1010.73 80.7159 1013.4 79.8864 1016.4 79.8864C1017.08 79.8864 1017.84 79.9205 1018.68 79.9886C1019.55 80.0341 1020.26 80.1136 1020.83 80.2273V91.5795C1020.31 91.3977 1019.48 91.2386 1018.34 91.1023C1017.23 90.9432 1016.15 90.8636 1015.1 90.8636C1012.85 90.8636 1010.83 91.3523 1009.03 92.3295C1007.26 93.2841 1005.86 94.6136 1004.84 96.3182C1003.82 98.0227 1003.31 99.9886 1003.31 102.216V133H990.966ZM1049.71 134.023C1044.6 134.023 1040.17 132.898 1036.42 130.648C1032.67 128.398 1029.76 125.25 1027.69 121.205C1025.64 117.159 1024.62 112.432 1024.62 107.023C1024.62 101.614 1025.64 96.875 1027.69 92.8068C1029.76 88.7386 1032.67 85.5795 1036.42 83.3295C1040.17 81.0795 1044.6 79.9545 1049.71 79.9545C1054.83 79.9545 1059.26 81.0795 1063.01 83.3295C1066.76 85.5795 1069.66 88.7386 1071.7 92.8068C1073.77 96.875 1074.8 101.614 1074.8 107.023C1074.8 112.432 1073.77 117.159 1071.7 121.205C1069.66 125.25 1066.76 128.398 1063.01 130.648C1059.26 132.898 1054.83 134.023 1049.71 134.023ZM1049.78 124.136C1052.55 124.136 1054.87 123.375 1056.74 121.852C1058.6 120.307 1059.99 118.239 1060.89 115.648C1061.83 113.057 1062.29 110.17 1062.29 106.989C1062.29 103.784 1061.83 100.886 1060.89 98.2955C1059.99 95.6818 1058.6 93.6023 1056.74 92.0568C1054.87 90.5114 1052.55 89.7386 1049.78 89.7386C1046.94 89.7386 1044.58 90.5114 1042.69 92.0568C1040.83 93.6023 1039.43 95.6818 1038.5 98.2955C1037.59 100.886 1037.13 103.784 1037.13 106.989C1037.13 110.17 1037.59 113.057 1038.5 115.648C1039.43 118.239 1040.83 120.307 1042.69 121.852C1044.58 123.375 1046.94 124.136 1049.78 124.136ZM1111.43 80.6364V90.1818H1081.32V80.6364H1111.43ZM1088.76 68.0909H1101.1V117.25C1101.1 118.909 1101.35 120.182 1101.85 121.068C1102.37 121.932 1103.05 122.523 1103.89 122.841C1104.73 123.159 1105.66 123.318 1106.69 123.318C1107.46 123.318 1108.16 123.261 1108.8 123.148C1109.46 123.034 1109.96 122.932 1110.3 122.841L1112.38 132.489C1111.72 132.716 1110.78 132.966 1109.55 133.239C1108.35 133.511 1106.87 133.67 1105.12 133.716C1102.03 133.807 1099.24 133.341 1096.77 132.318C1094.29 131.273 1092.32 129.659 1090.87 127.477C1089.44 125.295 1088.73 122.568 1088.76 119.295V68.0909ZM1144.03 134.023C1138.91 134.023 1134.48 132.898 1130.73 130.648C1126.98 128.398 1124.07 125.25 1122 121.205C1119.96 117.159 1118.93 112.432 1118.93 107.023C1118.93 101.614 1119.96 96.875 1122 92.8068C1124.07 88.7386 1126.98 85.5795 1130.73 83.3295C1134.48 81.0795 1138.91 79.9545 1144.03 79.9545C1149.14 79.9545 1153.57 81.0795 1157.32 83.3295C1161.07 85.5795 1163.97 88.7386 1166.01 92.8068C1168.08 96.875 1169.12 101.614 1169.12 107.023C1169.12 112.432 1168.08 117.159 1166.01 121.205C1163.97 125.25 1161.07 128.398 1157.32 130.648C1153.57 132.898 1149.14 134.023 1144.03 134.023ZM1144.09 124.136C1146.87 124.136 1149.18 123.375 1151.05 121.852C1152.91 120.307 1154.3 118.239 1155.21 115.648C1156.14 113.057 1156.61 110.17 1156.61 106.989C1156.61 103.784 1156.14 100.886 1155.21 98.2955C1154.3 95.6818 1152.91 93.6023 1151.05 92.0568C1149.18 90.5114 1146.87 89.7386 1144.09 89.7386C1141.25 89.7386 1138.89 90.5114 1137 92.0568C1135.14 93.6023 1133.74 95.6818 1132.81 98.2955C1131.9 100.886 1131.45 103.784 1131.45 106.989C1131.45 110.17 1131.9 113.057 1132.81 115.648C1133.74 118.239 1135.14 120.307 1137 121.852C1138.89 123.375 1141.25 124.136 1144.09 124.136ZM1202.43 134.023C1197.2 134.023 1192.72 132.875 1188.97 130.58C1185.24 128.284 1182.36 125.114 1180.34 121.068C1178.34 117 1177.34 112.318 1177.34 107.023C1177.34 101.705 1178.36 97.0114 1180.41 92.9432C1182.45 88.8523 1185.34 85.6705 1189.07 83.3977C1192.82 81.1023 1197.25 79.9545 1202.36 79.9545C1206.61 79.9545 1210.38 80.7386 1213.65 82.3068C1216.94 83.8523 1219.57 86.0455 1221.52 88.8864C1223.48 91.7045 1224.59 95 1224.86 98.7727H1213.07C1212.59 96.25 1211.45 94.1477 1209.66 92.4659C1207.89 90.7614 1205.51 89.9091 1202.53 89.9091C1200.01 89.9091 1197.8 90.5909 1195.89 91.9545C1193.98 93.2955 1192.49 95.2273 1191.42 97.75C1190.38 100.273 1189.85 103.295 1189.85 106.818C1189.85 110.386 1190.38 113.455 1191.42 116.023C1192.47 118.568 1193.93 120.534 1195.82 121.92C1197.73 123.284 1199.97 123.966 1202.53 123.966C1204.35 123.966 1205.98 123.625 1207.41 122.943C1208.86 122.239 1210.08 121.227 1211.06 119.909C1212.03 118.591 1212.7 116.989 1213.07 115.102H1224.86C1224.57 118.807 1223.48 122.091 1221.59 124.955C1219.7 127.795 1217.14 130.023 1213.89 131.636C1210.64 133.227 1206.82 134.023 1202.43 134.023ZM1257.84 134.023C1252.72 134.023 1248.29 132.898 1244.54 130.648C1240.79 128.398 1237.88 125.25 1235.82 121.205C1233.77 117.159 1232.75 112.432 1232.75 107.023C1232.75 101.614 1233.77 96.875 1235.82 92.8068C1237.88 88.7386 1240.79 85.5795 1244.54 83.3295C1248.29 81.0795 1252.72 79.9545 1257.84 79.9545C1262.95 79.9545 1267.38 81.0795 1271.13 83.3295C1274.88 85.5795 1277.78 88.7386 1279.83 92.8068C1281.89 96.875 1282.93 101.614 1282.93 107.023C1282.93 112.432 1281.89 117.159 1279.83 121.205C1277.78 125.25 1274.88 128.398 1271.13 130.648C1267.38 132.898 1262.95 134.023 1257.84 134.023ZM1257.91 124.136C1260.68 124.136 1263 123.375 1264.86 121.852C1266.72 120.307 1268.11 118.239 1269.02 115.648C1269.95 113.057 1270.42 110.17 1270.42 106.989C1270.42 103.784 1269.95 100.886 1269.02 98.2955C1268.11 95.6818 1266.72 93.6023 1264.86 92.0568C1263 90.5114 1260.68 89.7386 1257.91 89.7386C1255.07 89.7386 1252.7 90.5114 1250.82 92.0568C1248.95 93.6023 1247.55 95.6818 1246.62 98.2955C1245.71 100.886 1245.26 103.784 1245.26 106.989C1245.26 110.17 1245.71 113.057 1246.62 115.648C1247.55 118.239 1248.95 120.307 1250.82 121.852C1252.7 123.375 1255.07 124.136 1257.91 124.136ZM1305.74 63.1818V133H1293.4V63.1818H1305.74Z" fill="white"/>
6 | </svg>
7 | 


--------------------------------------------------------------------------------
/logo/light.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/modelcontextprotocol/docs/main/logo/light.png


--------------------------------------------------------------------------------
/logo/light.svg:
--------------------------------------------------------------------------------
1 | <svg width="1338" height="195" viewBox="0 0 1338 195" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M25 97.8528L92.8823 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706V29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177" stroke="black" stroke-width="12" stroke-linecap="round"/>
3 | <path d="M76.2653 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52" stroke="black" stroke-width="12" stroke-linecap="round"/>
4 | <path d="M109.853 46.9411L59.6482 97.1457C50.2757 106.518 50.2757 121.714 59.6482 131.087V131.087C69.0208 140.459 84.2168 140.459 93.5894 131.087L143.794 80.8822" stroke="black" stroke-width="12" stroke-linecap="round"/>
5 | <path d="M223.886 63.1818H239.364L260.091 113.773H260.909L281.636 63.1818H297.114V133H284.977V85.0341H284.33L265.034 132.795H255.966L236.67 84.9318H236.023V133H223.886V63.1818ZM333.182 134.023C328.068 134.023 323.636 132.898 319.886 130.648C316.136 128.398 313.227 125.25 311.159 121.205C309.114 117.159 308.091 112.432 308.091 107.023C308.091 101.614 309.114 96.875 311.159 92.8068C313.227 88.7386 316.136 85.5795 319.886 83.3295C323.636 81.0795 328.068 79.9545 333.182 79.9545C338.295 79.9545 342.727 81.0795 346.477 83.3295C350.227 85.5795 353.125 88.7386 355.17 92.8068C357.239 96.875 358.273 101.614 358.273 107.023C358.273 112.432 357.239 117.159 355.17 121.205C353.125 125.25 350.227 128.398 346.477 130.648C342.727 132.898 338.295 134.023 333.182 134.023ZM333.25 124.136C336.023 124.136 338.341 123.375 340.205 121.852C342.068 120.307 343.455 118.239 344.364 115.648C345.295 113.057 345.761 110.17 345.761 106.989C345.761 103.784 345.295 100.886 344.364 98.2955C343.455 95.6818 342.068 93.6023 340.205 92.0568C338.341 90.5114 336.023 89.7386 333.25 89.7386C330.409 89.7386 328.045 90.5114 326.159 92.0568C324.295 93.6023 322.898 95.6818 321.966 98.2955C321.057 100.886 320.602 103.784 320.602 106.989C320.602 110.17 321.057 113.057 321.966 115.648C322.898 118.239 324.295 120.307 326.159 121.852C328.045 123.375 330.409 124.136 333.25 124.136ZM388.179 133.92C384.065 133.92 380.384 132.864 377.134 130.75C373.884 128.636 371.315 125.568 369.429 121.545C367.543 117.523 366.599 112.636 366.599 106.886C366.599 101.068 367.554 96.1591 369.463 92.1591C371.395 88.1364 373.997 85.1023 377.27 83.0568C380.543 80.9886 384.19 79.9545 388.213 79.9545C391.281 79.9545 393.804 80.4773 395.781 81.5227C397.759 82.5455 399.327 83.7841 400.486 85.2386C401.645 86.6705 402.543 88.0227 403.179 89.2955H403.69V63.1818H416.065V133H403.929V124.75H403.179C402.543 126.023 401.622 127.375 400.418 128.807C399.213 130.216 397.622 131.42 395.645 132.42C393.668 133.42 391.179 133.92 388.179 133.92ZM391.622 123.795C394.236 123.795 396.463 123.091 398.304 121.682C400.145 120.25 401.543 118.261 402.497 115.716C403.452 113.17 403.929 110.205 403.929 106.818C403.929 103.432 403.452 100.489 402.497 97.9886C401.565 95.4886 400.179 93.5455 398.338 92.1591C396.52 90.7727 394.281 90.0795 391.622 90.0795C388.872 90.0795 386.577 90.7955 384.736 92.2273C382.895 93.6591 381.509 95.6364 380.577 98.1591C379.645 100.682 379.179 103.568 379.179 106.818C379.179 110.091 379.645 113.011 380.577 115.58C381.531 118.125 382.929 120.136 384.77 121.614C386.634 123.068 388.918 123.795 391.622 123.795ZM452.398 134.023C447.148 134.023 442.614 132.932 438.795 130.75C435 128.545 432.08 125.432 430.034 121.409C427.989 117.364 426.966 112.602 426.966 107.125C426.966 101.739 427.989 97.0114 430.034 92.9432C432.102 88.8523 434.989 85.6705 438.693 83.3977C442.398 81.1023 446.75 79.9545 451.75 79.9545C454.977 79.9545 458.023 80.4773 460.886 81.5227C463.773 82.5455 466.318 84.1364 468.523 86.2955C470.75 88.4545 472.5 91.2045 473.773 94.5455C475.045 97.8636 475.682 101.818 475.682 106.409V110.193H432.761V101.875H463.852C463.83 99.5114 463.318 97.4091 462.318 95.5682C461.318 93.7045 459.92 92.2386 458.125 91.1705C456.352 90.1023 454.284 89.5682 451.92 89.5682C449.398 89.5682 447.182 90.1818 445.273 91.4091C443.364 92.6136 441.875 94.2045 440.807 96.1818C439.761 98.1364 439.227 100.284 439.205 102.625V109.886C439.205 112.932 439.761 115.545 440.875 117.727C441.989 119.886 443.545 121.545 445.545 122.705C447.545 123.841 449.886 124.409 452.568 124.409C454.364 124.409 455.989 124.159 457.443 123.659C458.898 123.136 460.159 122.375 461.227 121.375C462.295 120.375 463.102 119.136 463.648 117.659L475.17 118.955C474.443 122 473.057 124.659 471.011 126.932C468.989 129.182 466.398 130.932 463.239 132.182C460.08 133.409 456.466 134.023 452.398 134.023ZM498.463 63.1818V133H486.122V63.1818H498.463ZM595.273 86.7386H582.523C582.159 84.6477 581.489 82.7955 580.511 81.1818C579.534 79.5455 578.318 78.1591 576.864 77.0227C575.409 75.8864 573.75 75.0341 571.886 74.4659C570.045 73.875 568.057 73.5795 565.92 73.5795C562.125 73.5795 558.761 74.5341 555.83 76.4432C552.898 78.3295 550.602 81.1023 548.943 84.7614C547.284 88.3977 546.455 92.8409 546.455 98.0909C546.455 103.432 547.284 107.932 548.943 111.591C550.625 115.227 552.92 117.977 555.83 119.841C558.761 121.682 562.114 122.602 565.886 122.602C567.977 122.602 569.932 122.33 571.75 121.784C573.591 121.216 575.239 120.386 576.693 119.295C578.17 118.205 579.409 116.864 580.409 115.273C581.432 113.682 582.136 111.864 582.523 109.818L595.273 109.886C594.795 113.205 593.761 116.318 592.17 119.227C590.602 122.136 588.545 124.705 586 126.932C583.455 129.136 580.477 130.864 577.068 132.114C573.659 133.341 569.875 133.955 565.716 133.955C559.58 133.955 554.102 132.534 549.284 129.693C544.466 126.852 540.67 122.75 537.898 117.386C535.125 112.023 533.739 105.591 533.739 98.0909C533.739 90.5682 535.136 84.1364 537.932 78.7955C540.727 73.4318 544.534 69.3295 549.352 66.4886C554.17 63.6477 559.625 62.2273 565.716 62.2273C569.602 62.2273 573.216 62.7727 576.557 63.8636C579.898 64.9545 582.875 66.5568 585.489 68.6705C588.102 70.7614 590.25 73.3295 591.932 76.375C593.636 79.3977 594.75 82.8523 595.273 86.7386ZM629.151 134.023C624.037 134.023 619.605 132.898 615.855 130.648C612.105 128.398 609.196 125.25 607.128 121.205C605.082 117.159 604.06 112.432 604.06 107.023C604.06 101.614 605.082 96.875 607.128 92.8068C609.196 88.7386 612.105 85.5795 615.855 83.3295C619.605 81.0795 624.037 79.9545 629.151 79.9545C634.264 79.9545 638.696 81.0795 642.446 83.3295C646.196 85.5795 649.094 88.7386 651.139 92.8068C653.207 96.875 654.241 101.614 654.241 107.023C654.241 112.432 653.207 117.159 651.139 121.205C649.094 125.25 646.196 128.398 642.446 130.648C638.696 132.898 634.264 134.023 629.151 134.023ZM629.219 124.136C631.991 124.136 634.31 123.375 636.173 121.852C638.037 120.307 639.423 118.239 640.332 115.648C641.264 113.057 641.73 110.17 641.73 106.989C641.73 103.784 641.264 100.886 640.332 98.2955C639.423 95.6818 638.037 93.6023 636.173 92.0568C634.31 90.5114 631.991 89.7386 629.219 89.7386C626.378 89.7386 624.014 90.5114 622.128 92.0568C620.264 93.6023 618.866 95.6818 617.935 98.2955C617.026 100.886 616.571 103.784 616.571 106.989C616.571 110.17 617.026 113.057 617.935 115.648C618.866 118.239 620.264 120.307 622.128 121.852C624.014 123.375 626.378 124.136 629.219 124.136ZM677.057 102.318V133H664.716V80.6364H676.511V89.5341H677.125C678.33 86.6023 680.25 84.2727 682.886 82.5455C685.545 80.8182 688.83 79.9545 692.739 79.9545C696.352 79.9545 699.5 80.7273 702.182 82.2727C704.886 83.8182 706.977 86.0568 708.455 88.9886C709.955 91.9205 710.693 95.4773 710.67 99.6591V133H698.33V101.568C698.33 98.0682 697.42 95.3295 695.602 93.3523C693.807 91.375 691.318 90.3864 688.136 90.3864C685.977 90.3864 684.057 90.8636 682.375 91.8182C680.716 92.75 679.409 94.1023 678.455 95.875C677.523 97.6477 677.057 99.7955 677.057 102.318ZM749.364 80.6364V90.1818H719.261V80.6364H749.364ZM726.693 68.0909H739.034V117.25C739.034 118.909 739.284 120.182 739.784 121.068C740.307 121.932 740.989 122.523 741.83 122.841C742.67 123.159 743.602 123.318 744.625 123.318C745.398 123.318 746.102 123.261 746.739 123.148C747.398 123.034 747.898 122.932 748.239 122.841L750.318 132.489C749.659 132.716 748.716 132.966 747.489 133.239C746.284 133.511 744.807 133.67 743.057 133.716C739.966 133.807 737.182 133.341 734.705 132.318C732.227 131.273 730.261 129.659 728.807 127.477C727.375 125.295 726.67 122.568 726.693 119.295V68.0909ZM782.304 134.023C777.054 134.023 772.52 132.932 768.702 130.75C764.906 128.545 761.986 125.432 759.94 121.409C757.895 117.364 756.872 112.602 756.872 107.125C756.872 101.739 757.895 97.0114 759.94 92.9432C762.009 88.8523 764.895 85.6705 768.599 83.3977C772.304 81.1023 776.656 79.9545 781.656 79.9545C784.884 79.9545 787.929 80.4773 790.793 81.5227C793.679 82.5455 796.224 84.1364 798.429 86.2955C800.656 88.4545 802.406 91.2045 803.679 94.5455C804.952 97.8636 805.588 101.818 805.588 106.409V110.193H762.668V101.875H793.759C793.736 99.5114 793.224 97.4091 792.224 95.5682C791.224 93.7045 789.827 92.2386 788.031 91.1705C786.259 90.1023 784.19 89.5682 781.827 89.5682C779.304 89.5682 777.088 90.1818 775.179 91.4091C773.27 92.6136 771.781 94.2045 770.713 96.1818C769.668 98.1364 769.134 100.284 769.111 102.625V109.886C769.111 112.932 769.668 115.545 770.781 117.727C771.895 119.886 773.452 121.545 775.452 122.705C777.452 123.841 779.793 124.409 782.474 124.409C784.27 124.409 785.895 124.159 787.349 123.659C788.804 123.136 790.065 122.375 791.134 121.375C792.202 120.375 793.009 119.136 793.554 117.659L805.077 118.955C804.349 122 802.963 124.659 800.918 126.932C798.895 129.182 796.304 130.932 793.145 132.182C789.986 133.409 786.372 134.023 782.304 134.023ZM824.994 80.6364L835.562 99.9659L846.301 80.6364H859.358L843.574 106.818L859.631 133H846.642L835.562 114.148L824.585 133H811.494L827.449 106.818L811.903 80.6364H824.994ZM895.051 80.6364V90.1818H864.949V80.6364H895.051ZM872.381 68.0909H884.722V117.25C884.722 118.909 884.972 120.182 885.472 121.068C885.994 121.932 886.676 122.523 887.517 122.841C888.358 123.159 889.29 123.318 890.312 123.318C891.085 123.318 891.79 123.261 892.426 123.148C893.085 123.034 893.585 122.932 893.926 122.841L896.006 132.489C895.347 132.716 894.403 132.966 893.176 133.239C891.972 133.511 890.494 133.67 888.744 133.716C885.653 133.807 882.869 133.341 880.392 132.318C877.915 131.273 875.949 129.659 874.494 127.477C873.063 125.295 872.358 122.568 872.381 119.295V68.0909ZM929.73 133V63.1818H955.912C961.276 63.1818 965.776 64.1818 969.412 66.1818C973.071 68.1818 975.832 70.9318 977.696 74.4318C979.582 77.9091 980.526 81.8636 980.526 86.2955C980.526 90.7727 979.582 94.75 977.696 98.2273C975.81 101.705 973.026 104.443 969.344 106.443C965.662 108.42 961.128 109.409 955.741 109.409H938.389V99.0114H954.037C957.173 99.0114 959.741 98.4659 961.741 97.375C963.741 96.2841 965.219 94.7841 966.173 92.875C967.151 90.9659 967.639 88.7727 967.639 86.2955C967.639 83.8182 967.151 81.6364 966.173 79.75C965.219 77.8636 963.73 76.3977 961.707 75.3523C959.707 74.2841 957.128 73.75 953.969 73.75H942.378V133H929.73ZM990.966 133V80.6364H1002.93V89.3636H1003.48C1004.43 86.3409 1006.07 84.0114 1008.39 82.375C1010.73 80.7159 1013.4 79.8864 1016.4 79.8864C1017.08 79.8864 1017.84 79.9205 1018.68 79.9886C1019.55 80.0341 1020.26 80.1136 1020.83 80.2273V91.5795C1020.31 91.3977 1019.48 91.2386 1018.34 91.1023C1017.23 90.9432 1016.15 90.8636 1015.1 90.8636C1012.85 90.8636 1010.83 91.3523 1009.03 92.3295C1007.26 93.2841 1005.86 94.6136 1004.84 96.3182C1003.82 98.0227 1003.31 99.9886 1003.31 102.216V133H990.966ZM1049.71 134.023C1044.6 134.023 1040.17 132.898 1036.42 130.648C1032.67 128.398 1029.76 125.25 1027.69 121.205C1025.64 117.159 1024.62 112.432 1024.62 107.023C1024.62 101.614 1025.64 96.875 1027.69 92.8068C1029.76 88.7386 1032.67 85.5795 1036.42 83.3295C1040.17 81.0795 1044.6 79.9545 1049.71 79.9545C1054.83 79.9545 1059.26 81.0795 1063.01 83.3295C1066.76 85.5795 1069.66 88.7386 1071.7 92.8068C1073.77 96.875 1074.8 101.614 1074.8 107.023C1074.8 112.432 1073.77 117.159 1071.7 121.205C1069.66 125.25 1066.76 128.398 1063.01 130.648C1059.26 132.898 1054.83 134.023 1049.71 134.023ZM1049.78 124.136C1052.55 124.136 1054.87 123.375 1056.74 121.852C1058.6 120.307 1059.99 118.239 1060.89 115.648C1061.83 113.057 1062.29 110.17 1062.29 106.989C1062.29 103.784 1061.83 100.886 1060.89 98.2955C1059.99 95.6818 1058.6 93.6023 1056.74 92.0568C1054.87 90.5114 1052.55 89.7386 1049.78 89.7386C1046.94 89.7386 1044.58 90.5114 1042.69 92.0568C1040.83 93.6023 1039.43 95.6818 1038.5 98.2955C1037.59 100.886 1037.13 103.784 1037.13 106.989C1037.13 110.17 1037.59 113.057 1038.5 115.648C1039.43 118.239 1040.83 120.307 1042.69 121.852C1044.58 123.375 1046.94 124.136 1049.78 124.136ZM1111.43 80.6364V90.1818H1081.32V80.6364H1111.43ZM1088.76 68.0909H1101.1V117.25C1101.1 118.909 1101.35 120.182 1101.85 121.068C1102.37 121.932 1103.05 122.523 1103.89 122.841C1104.73 123.159 1105.66 123.318 1106.69 123.318C1107.46 123.318 1108.16 123.261 1108.8 123.148C1109.46 123.034 1109.96 122.932 1110.3 122.841L1112.38 132.489C1111.72 132.716 1110.78 132.966 1109.55 133.239C1108.35 133.511 1106.87 133.67 1105.12 133.716C1102.03 133.807 1099.24 133.341 1096.77 132.318C1094.29 131.273 1092.32 129.659 1090.87 127.477C1089.44 125.295 1088.73 122.568 1088.76 119.295V68.0909ZM1144.03 134.023C1138.91 134.023 1134.48 132.898 1130.73 130.648C1126.98 128.398 1124.07 125.25 1122 121.205C1119.96 117.159 1118.93 112.432 1118.93 107.023C1118.93 101.614 1119.96 96.875 1122 92.8068C1124.07 88.7386 1126.98 85.5795 1130.73 83.3295C1134.48 81.0795 1138.91 79.9545 1144.03 79.9545C1149.14 79.9545 1153.57 81.0795 1157.32 83.3295C1161.07 85.5795 1163.97 88.7386 1166.01 92.8068C1168.08 96.875 1169.12 101.614 1169.12 107.023C1169.12 112.432 1168.08 117.159 1166.01 121.205C1163.97 125.25 1161.07 128.398 1157.32 130.648C1153.57 132.898 1149.14 134.023 1144.03 134.023ZM1144.09 124.136C1146.87 124.136 1149.18 123.375 1151.05 121.852C1152.91 120.307 1154.3 118.239 1155.21 115.648C1156.14 113.057 1156.61 110.17 1156.61 106.989C1156.61 103.784 1156.14 100.886 1155.21 98.2955C1154.3 95.6818 1152.91 93.6023 1151.05 92.0568C1149.18 90.5114 1146.87 89.7386 1144.09 89.7386C1141.25 89.7386 1138.89 90.5114 1137 92.0568C1135.14 93.6023 1133.74 95.6818 1132.81 98.2955C1131.9 100.886 1131.45 103.784 1131.45 106.989C1131.45 110.17 1131.9 113.057 1132.81 115.648C1133.74 118.239 1135.14 120.307 1137 121.852C1138.89 123.375 1141.25 124.136 1144.09 124.136ZM1202.43 134.023C1197.2 134.023 1192.72 132.875 1188.97 130.58C1185.24 128.284 1182.36 125.114 1180.34 121.068C1178.34 117 1177.34 112.318 1177.34 107.023C1177.34 101.705 1178.36 97.0114 1180.41 92.9432C1182.45 88.8523 1185.34 85.6705 1189.07 83.3977C1192.82 81.1023 1197.25 79.9545 1202.36 79.9545C1206.61 79.9545 1210.38 80.7386 1213.65 82.3068C1216.94 83.8523 1219.57 86.0455 1221.52 88.8864C1223.48 91.7045 1224.59 95 1224.86 98.7727H1213.07C1212.59 96.25 1211.45 94.1477 1209.66 92.4659C1207.89 90.7614 1205.51 89.9091 1202.53 89.9091C1200.01 89.9091 1197.8 90.5909 1195.89 91.9545C1193.98 93.2955 1192.49 95.2273 1191.42 97.75C1190.38 100.273 1189.85 103.295 1189.85 106.818C1189.85 110.386 1190.38 113.455 1191.42 116.023C1192.47 118.568 1193.93 120.534 1195.82 121.92C1197.73 123.284 1199.97 123.966 1202.53 123.966C1204.35 123.966 1205.98 123.625 1207.41 122.943C1208.86 122.239 1210.08 121.227 1211.06 119.909C1212.03 118.591 1212.7 116.989 1213.07 115.102H1224.86C1224.57 118.807 1223.48 122.091 1221.59 124.955C1219.7 127.795 1217.14 130.023 1213.89 131.636C1210.64 133.227 1206.82 134.023 1202.43 134.023ZM1257.84 134.023C1252.72 134.023 1248.29 132.898 1244.54 130.648C1240.79 128.398 1237.88 125.25 1235.82 121.205C1233.77 117.159 1232.75 112.432 1232.75 107.023C1232.75 101.614 1233.77 96.875 1235.82 92.8068C1237.88 88.7386 1240.79 85.5795 1244.54 83.3295C1248.29 81.0795 1252.72 79.9545 1257.84 79.9545C1262.95 79.9545 1267.38 81.0795 1271.13 83.3295C1274.88 85.5795 1277.78 88.7386 1279.83 92.8068C1281.89 96.875 1282.93 101.614 1282.93 107.023C1282.93 112.432 1281.89 117.159 1279.83 121.205C1277.78 125.25 1274.88 128.398 1271.13 130.648C1267.38 132.898 1262.95 134.023 1257.84 134.023ZM1257.91 124.136C1260.68 124.136 1263 123.375 1264.86 121.852C1266.72 120.307 1268.11 118.239 1269.02 115.648C1269.95 113.057 1270.42 110.17 1270.42 106.989C1270.42 103.784 1269.95 100.886 1269.02 98.2955C1268.11 95.6818 1266.72 93.6023 1264.86 92.0568C1263 90.5114 1260.68 89.7386 1257.91 89.7386C1255.07 89.7386 1252.7 90.5114 1250.82 92.0568C1248.95 93.6023 1247.55 95.6818 1246.62 98.2955C1245.71 100.886 1245.26 103.784 1245.26 106.989C1245.26 110.17 1245.71 113.057 1246.62 115.648C1247.55 118.239 1248.95 120.307 1250.82 121.852C1252.7 123.375 1255.07 124.136 1257.91 124.136ZM1305.74 63.1818V133H1293.4V63.1818H1305.74Z" fill="black"/>
6 | </svg>
7 | 


--------------------------------------------------------------------------------
/quickstart/client.mdx:
--------------------------------------------------------------------------------
   1 | ---
   2 | title: "For Client Developers"
   3 | description: "Get started building your own client that can integrate with all MCP servers."
   4 | ---
   5 | 
   6 | In this tutorial, you'll learn how to build a LLM-powered chatbot client that connects to MCP servers. It helps to have gone through the [Server quickstart](/quickstart/server) that guides you through the basic of building your first server.
   7 | 
   8 | <Tabs>
   9 | <Tab title="Python">
  10 | 
  11 | [You can find the complete code for this tutorial here.](https://github.com/modelcontextprotocol/quickstart-resources/tree/main/mcp-client-python)
  12 | 
  13 | ## System Requirements
  14 | 
  15 | Before starting, ensure your system meets these requirements:
  16 | - Mac or Windows computer
  17 | - Latest Python version installed
  18 | - Latest version of `uv` installed
  19 | 
  20 | ## Setting Up Your Environment
  21 | 
  22 | First, create a new Python project with `uv`:
  23 | 
  24 | ```bash
  25 | # Create project directory
  26 | uv init mcp-client
  27 | cd mcp-client
  28 | 
  29 | # Create virtual environment
  30 | uv venv
  31 | 
  32 | # Activate virtual environment
  33 | # On Windows:
  34 | .venv\Scripts\activate
  35 | # On Unix or MacOS:
  36 | source .venv/bin/activate
  37 | 
  38 | # Install required packages
  39 | uv add mcp anthropic python-dotenv
  40 | 
  41 | # Remove boilerplate files
  42 | rm hello.py
  43 | 
  44 | # Create our main file
  45 | touch client.py
  46 | ```
  47 | 
  48 | ## Setting Up Your API Key
  49 | 
  50 | You'll need an Anthropic API key from the [Anthropic Console](https://console.anthropic.com/settings/keys).
  51 | 
  52 | Create a `.env` file to store it:
  53 | 
  54 | ```bash
  55 | # Create .env file
  56 | touch .env
  57 | ```
  58 | 
  59 | Add your key to the `.env` file:
  60 | ```bash
  61 | ANTHROPIC_API_KEY=<your key here>
  62 | ```
  63 | 
  64 | Add `.env` to your `.gitignore`:
  65 | ```bash
  66 | echo ".env" >> .gitignore
  67 | ```
  68 | 
  69 | <Warning>
  70 | Make sure you keep your `ANTHROPIC_API_KEY` secure!
  71 | </Warning>
  72 | 
  73 | ## Creating the Client
  74 | 
  75 | ### Basic Client Structure
  76 | First, let's set up our imports and create the basic client class:
  77 | 
  78 | ```python
  79 | import asyncio
  80 | from typing import Optional
  81 | from contextlib import AsyncExitStack
  82 | 
  83 | from mcp import ClientSession, StdioServerParameters
  84 | from mcp.client.stdio import stdio_client
  85 | 
  86 | from anthropic import Anthropic
  87 | from dotenv import load_dotenv
  88 | 
  89 | load_dotenv()  # load environment variables from .env
  90 | 
  91 | class MCPClient:
  92 |     def __init__(self):
  93 |         # Initialize session and client objects
  94 |         self.session: Optional[ClientSession] = None
  95 |         self.exit_stack = AsyncExitStack()
  96 |         self.anthropic = Anthropic()
  97 |     # methods will go here
  98 | ```
  99 | 
 100 | ### Server Connection Management
 101 | 
 102 | Next, we'll implement the method to connect to an MCP server:
 103 | 
 104 | ```python
 105 | async def connect_to_server(self, server_script_path: str):
 106 |     """Connect to an MCP server
 107 | 
 108 |     Args:
 109 |         server_script_path: Path to the server script (.py or .js)
 110 |     """
 111 |     is_python = server_script_path.endswith('.py')
 112 |     is_js = server_script_path.endswith('.js')
 113 |     if not (is_python or is_js):
 114 |         raise ValueError("Server script must be a .py or .js file")
 115 | 
 116 |     command = "python" if is_python else "node"
 117 |     server_params = StdioServerParameters(
 118 |         command=command,
 119 |         args=[server_script_path],
 120 |         env=None
 121 |     )
 122 | 
 123 |     stdio_transport = await self.exit_stack.enter_async_context(stdio_client(server_params))
 124 |     self.stdio, self.write = stdio_transport
 125 |     self.session = await self.exit_stack.enter_async_context(ClientSession(self.stdio, self.write))
 126 | 
 127 |     await self.session.initialize()
 128 | 
 129 |     # List available tools
 130 |     response = await self.session.list_tools()
 131 |     tools = response.tools
 132 |     print("\nConnected to server with tools:", [tool.name for tool in tools])
 133 | ```
 134 | 
 135 | ### Query Processing Logic
 136 | 
 137 | Now let's add the core functionality for processing queries and handling tool calls:
 138 | 
 139 | ```python
 140 | async def process_query(self, query: str) -> str:
 141 |     """Process a query using Claude and available tools"""
 142 |     messages = [
 143 |         {
 144 |             "role": "user",
 145 |             "content": query
 146 |         }
 147 |     ]
 148 | 
 149 |     response = await self.session.list_tools()
 150 |     available_tools = [{
 151 |         "name": tool.name,
 152 |         "description": tool.description,
 153 |         "input_schema": tool.inputSchema
 154 |     } for tool in response.tools]
 155 | 
 156 |     # Initial Claude API call
 157 |     response = self.anthropic.messages.create(
 158 |         model="claude-3-5-sonnet-20241022",
 159 |         max_tokens=1000,
 160 |         messages=messages,
 161 |         tools=available_tools
 162 |     )
 163 | 
 164 |     # Process response and handle tool calls
 165 |     final_text = []
 166 | 
 167 |     assistant_message_content = []
 168 |     for content in response.content:
 169 |         if content.type == 'text':
 170 |             final_text.append(content.text)
 171 |             assistant_message_content.append(content)
 172 |         elif content.type == 'tool_use':
 173 |             tool_name = content.name
 174 |             tool_args = content.input
 175 | 
 176 |             # Execute tool call
 177 |             result = await self.session.call_tool(tool_name, tool_args)
 178 |             final_text.append(f"[Calling tool {tool_name} with args {tool_args}]")
 179 | 
 180 |             assistant_message_content.append(content)
 181 |             messages.append({
 182 |                 "role": "assistant",
 183 |                 "content": assistant_message_content
 184 |             })
 185 |             messages.append({
 186 |                 "role": "user",
 187 |                 "content": [
 188 |                     {
 189 |                         "type": "tool_result",
 190 |                         "tool_use_id": content.id,
 191 |                         "content": result.content
 192 |                     }
 193 |                 ]
 194 |             })
 195 | 
 196 |             # Get next response from Claude
 197 |             response = self.anthropic.messages.create(
 198 |                 model="claude-3-5-sonnet-20241022",
 199 |                 max_tokens=1000,
 200 |                 messages=messages,
 201 |                 tools=available_tools
 202 |             )
 203 | 
 204 |             final_text.append(response.content[0].text)
 205 | 
 206 |     return "\n".join(final_text)
 207 | ```
 208 | 
 209 | ### Interactive Chat Interface
 210 | Now we'll add the chat loop and cleanup functionality:
 211 | 
 212 | ```python
 213 | async def chat_loop(self):
 214 |     """Run an interactive chat loop"""
 215 |     print("\nMCP Client Started!")
 216 |     print("Type your queries or 'quit' to exit.")
 217 | 
 218 |     while True:
 219 |         try:
 220 |             query = input("\nQuery: ").strip()
 221 | 
 222 |             if query.lower() == 'quit':
 223 |                 break
 224 | 
 225 |             response = await self.process_query(query)
 226 |             print("\n" + response)
 227 | 
 228 |         except Exception as e:
 229 |             print(f"\nError: {str(e)}")
 230 | 
 231 | async def cleanup(self):
 232 |     """Clean up resources"""
 233 |     await self.exit_stack.aclose()
 234 | ```
 235 | 
 236 | ### Main Entry Point
 237 | 
 238 | Finally, we'll add the main execution logic:
 239 | 
 240 | ```python
 241 | async def main():
 242 |     if len(sys.argv) < 2:
 243 |         print("Usage: python client.py <path_to_server_script>")
 244 |         sys.exit(1)
 245 | 
 246 |     client = MCPClient()
 247 |     try:
 248 |         await client.connect_to_server(sys.argv[1])
 249 |         await client.chat_loop()
 250 |     finally:
 251 |         await client.cleanup()
 252 | 
 253 | if __name__ == "__main__":
 254 |     import sys
 255 |     asyncio.run(main())
 256 | ```
 257 | 
 258 | You can find the complete `client.py` file [here.](https://gist.github.com/zckly/f3f28ea731e096e53b39b47bf0a2d4b1)
 259 | 
 260 | ## Key Components Explained
 261 | 
 262 | ### 1. Client Initialization
 263 | - The `MCPClient` class initializes with session management and API clients
 264 | - Uses `AsyncExitStack` for proper resource management
 265 | - Configures the Anthropic client for Claude interactions
 266 | 
 267 | ### 2. Server Connection
 268 | - Supports both Python and Node.js servers
 269 | - Validates server script type
 270 | - Sets up proper communication channels
 271 | - Initializes the session and lists available tools
 272 | 
 273 | ### 3. Query Processing
 274 | - Maintains conversation context
 275 | - Handles Claude's responses and tool calls
 276 | - Manages the message flow between Claude and tools
 277 | - Combines results into a coherent response
 278 | 
 279 | ### 4. Interactive Interface
 280 | - Provides a simple command-line interface
 281 | - Handles user input and displays responses
 282 | - Includes basic error handling
 283 | - Allows graceful exit
 284 | 
 285 | ### 5. Resource Management
 286 | - Proper cleanup of resources
 287 | - Error handling for connection issues
 288 | - Graceful shutdown procedures
 289 | 
 290 | ## Common Customization Points
 291 | 
 292 | 1. **Tool Handling**
 293 |    - Modify `process_query()` to handle specific tool types
 294 |    - Add custom error handling for tool calls
 295 |    - Implement tool-specific response formatting
 296 | 
 297 | 2. **Response Processing**
 298 |    - Customize how tool results are formatted
 299 |    - Add response filtering or transformation
 300 |    - Implement custom logging
 301 | 
 302 | 3. **User Interface**
 303 |    - Add a GUI or web interface
 304 |    - Implement rich console output
 305 |    - Add command history or auto-completion
 306 | 
 307 | ## Running the Client
 308 | 
 309 | To run your client with any MCP server:
 310 | 
 311 | ```bash
 312 | uv run client.py path/to/server.py # python server
 313 | uv run client.py path/to/build/index.js # node server
 314 | ```
 315 | 
 316 | <Note>
 317 | If you're continuing the weather tutorial from the server quickstart, your command might look something like this: `python client.py .../weather/src/weather/server.py`
 318 | </Note>
 319 | 
 320 | The client will:
 321 | 1. Connect to the specified server
 322 | 2. List available tools
 323 | 3. Start an interactive chat session where you can:
 324 |    - Enter queries
 325 |    - See tool executions
 326 |    - Get responses from Claude
 327 | 
 328 | Here's an example of what it should look like if connected to the weather server from the server quickstart:
 329 | 
 330 | <Frame>
 331 |   <img src="/images/client-claude-cli-python.png" />
 332 | </Frame>
 333 | 
 334 | ## How It Works
 335 | 
 336 | When you submit a query:
 337 | 
 338 | 1. The client gets the list of available tools from the server
 339 | 2. Your query is sent to Claude along with tool descriptions
 340 | 3. Claude decides which tools (if any) to use
 341 | 4. The client executes any requested tool calls through the server
 342 | 5. Results are sent back to Claude
 343 | 6. Claude provides a natural language response
 344 | 7. The response is displayed to you
 345 | 
 346 | ## Best practices
 347 | 
 348 | 1. **Error Handling**
 349 |    - Always wrap tool calls in try-catch blocks
 350 |    - Provide meaningful error messages
 351 |    - Gracefully handle connection issues
 352 | 
 353 | 2. **Resource Management**
 354 |    - Use `AsyncExitStack` for proper cleanup
 355 |    - Close connections when done
 356 |    - Handle server disconnections
 357 | 
 358 | 3. **Security**
 359 |    - Store API keys securely in `.env`
 360 |    - Validate server responses
 361 |    - Be cautious with tool permissions
 362 | 
 363 | ## Troubleshooting
 364 | 
 365 | ### Server Path Issues
 366 | - Double-check the path to your server script is correct
 367 | - Use the absolute path if the relative path isn't working
 368 | - For Windows users, make sure to use forward slashes (/) or escaped backslashes (\\) in the path
 369 | - Verify the server file has the correct extension (.py for Python or .js for Node.js)
 370 | 
 371 | Example of correct path usage:
 372 | ```bash
 373 | # Relative path
 374 | uv run client.py ./server/weather.py
 375 | 
 376 | # Absolute path
 377 | uv run client.py /Users/username/projects/mcp-server/weather.py
 378 | 
 379 | # Windows path (either format works)
 380 | uv run client.py C:/projects/mcp-server/weather.py
 381 | uv run client.py C:\\projects\\mcp-server\\weather.py
 382 | ```
 383 | 
 384 | ### Response Timing
 385 | - The first response might take up to 30 seconds to return
 386 | - This is normal and happens while:
 387 |   - The server initializes
 388 |   - Claude processes the query
 389 |   - Tools are being executed
 390 | - Subsequent responses are typically faster
 391 | - Don't interrupt the process during this initial waiting period
 392 | 
 393 | ### Common Error Messages
 394 | 
 395 | If you see:
 396 | - `FileNotFoundError`: Check your server path
 397 | - `Connection refused`: Ensure the server is running and the path is correct
 398 | - `Tool execution failed`: Verify the tool's required environment variables are set
 399 | - `Timeout error`: Consider increasing the timeout in your client configuration
 400 | 
 401 | </Tab>
 402 | 
 403 | <Tab title="Node">
 404 | 
 405 | [You can find the complete code for this tutorial here.](https://github.com/modelcontextprotocol/quickstart-resources/tree/main/mcp-client-typescript)
 406 | ## System Requirements
 407 | 
 408 | Before starting, ensure your system meets these requirements:
 409 | - Mac or Windows computer
 410 | - Node.js 16 or higher installed
 411 | - Latest version of `npm` installed
 412 | - Anthropic API key (Claude)
 413 | 
 414 | ## Setting Up Your Environment
 415 | 
 416 | First, let's create and set up our project:
 417 | 
 418 | <CodeGroup>
 419 | ```bash MacOS/Linux
 420 | # Create project directory
 421 | mkdir mcp-client-typescript
 422 | cd mcp-client-typescript
 423 | 
 424 | # Initialize npm project
 425 | npm init -y
 426 | 
 427 | # Install dependencies
 428 | npm install @anthropic-ai/sdk @modelcontextprotocol/sdk dotenv
 429 | 
 430 | # Install dev dependencies
 431 | npm install -D @types/node typescript
 432 | 
 433 | # Create source file
 434 | touch index.ts
 435 | ```
 436 | 
 437 | ```powershell Windows
 438 | # Create project directory
 439 | md mcp-client-typescript
 440 | cd mcp-client-typescript
 441 | 
 442 | # Initialize npm project
 443 | npm init -y
 444 | 
 445 | # Install dependencies
 446 | npm install @anthropic-ai/sdk @modelcontextprotocol/sdk dotenv
 447 | 
 448 | # Install dev dependencies
 449 | npm install -D @types/node typescript
 450 | 
 451 | # Create source file
 452 | new-item index.ts
 453 | ```
 454 | </CodeGroup>
 455 | 
 456 | Update your `package.json` to set `type: "module"` and a build script:
 457 | 
 458 | ```json package.json
 459 | {
 460 |   "type": "module",
 461 |   "scripts": {
 462 |     "build": "tsc && chmod 755 build/index.js"
 463 |   }
 464 | }
 465 | ```
 466 | 
 467 | Create a `tsconfig.json` in the root of your project:
 468 | 
 469 | ```json tsconfig.json
 470 | {
 471 |   "compilerOptions": {
 472 |     "target": "ES2022",
 473 |     "module": "Node16",
 474 |     "moduleResolution": "Node16",
 475 |     "outDir": "./build",
 476 |     "rootDir": "./",
 477 |     "strict": true,
 478 |     "esModuleInterop": true,
 479 |     "skipLibCheck": true,
 480 |     "forceConsistentCasingInFileNames": true
 481 |   },
 482 |   "include": ["index.ts"],
 483 |   "exclude": ["node_modules"]
 484 | }
 485 | ```
 486 | 
 487 | ## Setting Up Your API Key
 488 | 
 489 | You'll need an Anthropic API key from the [Anthropic Console](https://console.anthropic.com/settings/keys).
 490 | 
 491 | Create a `.env` file to store it:
 492 | 
 493 | ```bash
 494 | echo "ANTHROPIC_API_KEY=<your key here>" > .env
 495 | ```
 496 | 
 497 | Add `.env` to your `.gitignore`:
 498 | ```bash
 499 | echo ".env" >> .gitignore
 500 | ```
 501 | 
 502 | <Warning>
 503 | Make sure you keep your `ANTHROPIC_API_KEY` secure!
 504 | </Warning>
 505 | 
 506 | ## Creating the Client
 507 | 
 508 | ### Basic Client Structure
 509 | 
 510 | First, let's set up our imports and create the basic client class in `index.ts`:
 511 | 
 512 | ```typescript
 513 | import { Anthropic } from "@anthropic-ai/sdk";
 514 | import {
 515 |   MessageParam,
 516 |   Tool,
 517 | } from "@anthropic-ai/sdk/resources/messages/messages.mjs";
 518 | import { Client } from "@modelcontextprotocol/sdk/client/index.js";
 519 | import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
 520 | import readline from "readline/promises";
 521 | import dotenv from "dotenv";
 522 | 
 523 | dotenv.config();
 524 | 
 525 | const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
 526 | if (!ANTHROPIC_API_KEY) {
 527 |   throw new Error("ANTHROPIC_API_KEY is not set");
 528 | }
 529 | 
 530 | class MCPClient {
 531 |   private mcp: Client;
 532 |   private anthropic: Anthropic;
 533 |   private transport: StdioClientTransport | null = null;
 534 |   private tools: Tool[] = [];
 535 | 
 536 |   constructor() {
 537 |     this.anthropic = new Anthropic({
 538 |       apiKey: ANTHROPIC_API_KEY,
 539 |     });
 540 |     this.mcp = new Client({ name: "mcp-client-cli", version: "1.0.0" });
 541 |   }
 542 |   // methods will go here
 543 | }
 544 | ```
 545 | 
 546 | ### Server Connection Management
 547 | 
 548 | Next, we'll implement the method to connect to an MCP server:
 549 | 
 550 | ```typescript
 551 | async connectToServer(serverScriptPath: string) {
 552 |   try {
 553 |     const isJs = serverScriptPath.endsWith(".js");
 554 |     const isPy = serverScriptPath.endsWith(".py");
 555 |     if (!isJs && !isPy) {
 556 |       throw new Error("Server script must be a .js or .py file");
 557 |     }
 558 |     const command = isPy
 559 |       ? process.platform === "win32"
 560 |         ? "python"
 561 |         : "python3"
 562 |       : process.execPath;
 563 |     
 564 |     this.transport = new StdioClientTransport({
 565 |       command,
 566 |       args: [serverScriptPath],
 567 |     });
 568 |     this.mcp.connect(this.transport);
 569 |     
 570 |     const toolsResult = await this.mcp.listTools();
 571 |     this.tools = toolsResult.tools.map((tool) => {
 572 |       return {
 573 |         name: tool.name,
 574 |         description: tool.description,
 575 |         input_schema: tool.inputSchema,
 576 |       };
 577 |     });
 578 |     console.log(
 579 |       "Connected to server with tools:",
 580 |       this.tools.map(({ name }) => name)
 581 |     );
 582 |   } catch (e) {
 583 |     console.log("Failed to connect to MCP server: ", e);
 584 |     throw e;
 585 |   }
 586 | }
 587 | ```
 588 | 
 589 | ### Query Processing Logic
 590 | 
 591 | Now let's add the core functionality for processing queries and handling tool calls:
 592 | 
 593 | ```typescript
 594 | async processQuery(query: string) {
 595 |   const messages: MessageParam[] = [
 596 |     {
 597 |       role: "user",
 598 |       content: query,
 599 |     },
 600 |   ];
 601 | 
 602 |   const response = await this.anthropic.messages.create({
 603 |     model: "claude-3-5-sonnet-20241022",
 604 |     max_tokens: 1000,
 605 |     messages,
 606 |     tools: this.tools,
 607 |   });
 608 | 
 609 |   const finalText = [];
 610 |   const toolResults = [];
 611 | 
 612 |   for (const content of response.content) {
 613 |     if (content.type === "text") {
 614 |       finalText.push(content.text);
 615 |     } else if (content.type === "tool_use") {
 616 |       const toolName = content.name;
 617 |       const toolArgs = content.input as { [x: string]: unknown } | undefined;
 618 | 
 619 |       const result = await this.mcp.callTool({
 620 |         name: toolName,
 621 |         arguments: toolArgs,
 622 |       });
 623 |       toolResults.push(result);
 624 |       finalText.push(
 625 |         `[Calling tool ${toolName} with args ${JSON.stringify(toolArgs)}]`
 626 |       );
 627 | 
 628 |       messages.push({
 629 |         role: "user",
 630 |         content: result.content as string,
 631 |       });
 632 | 
 633 |       const response = await this.anthropic.messages.create({
 634 |         model: "claude-3-5-sonnet-20241022",
 635 |         max_tokens: 1000,
 636 |         messages,
 637 |       });
 638 | 
 639 |       finalText.push(
 640 |         response.content[0].type === "text" ? response.content[0].text : ""
 641 |       );
 642 |     }
 643 |   }
 644 | 
 645 |   return finalText.join("\n");
 646 | }
 647 | ```
 648 | 
 649 | ### Interactive Chat Interface
 650 | 
 651 | Now we'll add the chat loop and cleanup functionality:
 652 | 
 653 | ```typescript
 654 | async chatLoop() {
 655 |   const rl = readline.createInterface({
 656 |     input: process.stdin,
 657 |     output: process.stdout,
 658 |   });
 659 | 
 660 |   try {
 661 |     console.log("\nMCP Client Started!");
 662 |     console.log("Type your queries or 'quit' to exit.");
 663 | 
 664 |     while (true) {
 665 |       const message = await rl.question("\nQuery: ");
 666 |       if (message.toLowerCase() === "quit") {
 667 |         break;
 668 |       }
 669 |       const response = await this.processQuery(message);
 670 |       console.log("\n" + response);
 671 |     }
 672 |   } finally {
 673 |     rl.close();
 674 |   }
 675 | }
 676 | 
 677 | async cleanup() {
 678 |   await this.mcp.close();
 679 | }
 680 | ```
 681 | 
 682 | ### Main Entry Point
 683 | 
 684 | Finally, we'll add the main execution logic:
 685 | 
 686 | ```typescript
 687 | async function main() {
 688 |   if (process.argv.length < 3) {
 689 |     console.log("Usage: node index.ts <path_to_server_script>");
 690 |     return;
 691 |   }
 692 |   const mcpClient = new MCPClient();
 693 |   try {
 694 |     await mcpClient.connectToServer(process.argv[2]);
 695 |     await mcpClient.chatLoop();
 696 |   } finally {
 697 |     await mcpClient.cleanup();
 698 |     process.exit(0);
 699 |   }
 700 | }
 701 | 
 702 | main();
 703 | ```
 704 | 
 705 | ## Running the Client
 706 | 
 707 | To run your client with any MCP server:
 708 | 
 709 | ```bash
 710 | # Build TypeScript
 711 | npm run build
 712 | 
 713 | # Run the client
 714 | node build/index.js path/to/server.py # python server
 715 | node build/index.js path/to/build/index.js # node server
 716 | ```
 717 | 
 718 | <Note>
 719 | If you're continuing the weather tutorial from the server quickstart, your command might look something like this: `node build/index.js .../quickstart-resources/weather-server-typescript/build/index.js`
 720 | </Note>
 721 | 
 722 | **The client will:**
 723 | 1. Connect to the specified server
 724 | 2. List available tools
 725 | 3. Start an interactive chat session where you can:
 726 |    - Enter queries
 727 |    - See tool executions
 728 |    - Get responses from Claude
 729 | 
 730 | ## How It Works
 731 | 
 732 | When you submit a query:
 733 | 
 734 | 1. The client gets the list of available tools from the server
 735 | 2. Your query is sent to Claude along with tool descriptions
 736 | 3. Claude decides which tools (if any) to use
 737 | 4. The client executes any requested tool calls through the server
 738 | 5. Results are sent back to Claude
 739 | 6. Claude provides a natural language response
 740 | 7. The response is displayed to you
 741 | 
 742 | ## Best practices
 743 | 
 744 | 1. **Error Handling**
 745 |    - Use TypeScript's type system for better error detection
 746 |    - Wrap tool calls in try-catch blocks
 747 |    - Provide meaningful error messages
 748 |    - Gracefully handle connection issues
 749 | 
 750 | 2. **Security**
 751 |    - Store API keys securely in `.env`
 752 |    - Validate server responses
 753 |    - Be cautious with tool permissions
 754 | 
 755 | ## Troubleshooting
 756 | 
 757 | ### Server Path Issues
 758 | - Double-check the path to your server script is correct
 759 | - Use the absolute path if the relative path isn't working
 760 | - For Windows users, make sure to use forward slashes (/) or escaped backslashes (\\) in the path
 761 | - Verify the server file has the correct extension (.js for Node.js or .py for Python)
 762 | 
 763 | Example of correct path usage:
 764 | ```bash
 765 | # Relative path
 766 | node build/index.js ./server/build/index.js
 767 | 
 768 | # Absolute path
 769 | node build/index.js /Users/username/projects/mcp-server/build/index.js
 770 | 
 771 | # Windows path (either format works)
 772 | node build/index.js C:/projects/mcp-server/build/index.js
 773 | node build/index.js C:\\projects\\mcp-server\\build\\index.js
 774 | ```
 775 | 
 776 | ### Response Timing
 777 | - The first response might take up to 30 seconds to return
 778 | - This is normal and happens while:
 779 |   - The server initializes
 780 |   - Claude processes the query
 781 |   - Tools are being executed
 782 | - Subsequent responses are typically faster
 783 | - Don't interrupt the process during this initial waiting period
 784 | 
 785 | ### Common Error Messages
 786 | 
 787 | If you see:
 788 | - `Error: Cannot find module`: Check your build folder and ensure TypeScript compilation succeeded
 789 | - `Connection refused`: Ensure the server is running and the path is correct
 790 | - `Tool execution failed`: Verify the tool's required environment variables are set
 791 | - `ANTHROPIC_API_KEY is not set`: Check your .env file and environment variables
 792 | - `TypeError`: Ensure you're using the correct types for tool arguments
 793 | 
 794 | </Tab>
 795 | 
 796 | 
 797 | <Tab title="Java">
 798 | 
 799 | <Note>
 800 | This is a quickstart demo based on Spring AI MCP auto-configuration and boot starters.
 801 | To learn how to create sync and async MCP Clients manually, consult the [Java SDK Client](/sdk/java/mcp-client) documentation
 802 | </Note>
 803 | 
 804 | This example demonstrates how to build an interactive chatbot that combines Spring AI's Model Context Protocol (MCP) with the [Brave Search MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search). The application creates a conversational interface powered by Anthropic's Claude AI model that can perform internet searches through Brave Search, enabling natural language interactions with real-time web data.
 805 | [You can find the complete code for this tutorial here.](https://github.com/spring-projects/spring-ai-examples/tree/main/model-context-protocol/web-search/brave-chatbot)
 806 | 
 807 | ## System Requirements
 808 | 
 809 | Before starting, ensure your system meets these requirements:
 810 | - Java 17 or higher
 811 | - Maven 3.6+
 812 | - npx package manager
 813 | - Anthropic API key (Claude)
 814 | - Brave Search API key
 815 | 
 816 | ## Setting Up Your Environment
 817 | 
 818 | 1. Install npx (Node Package eXecute):
 819 |    First, make sure to install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
 820 |    and then run:
 821 |    ```bash
 822 |    npm install -g npx
 823 |    ```
 824 | 
 825 | 2. Clone the repository:
 826 |    ```bash
 827 |    git clone https://github.com/spring-projects/spring-ai-examples.git
 828 |    cd model-context-protocol/brave-chatbot
 829 |    ```
 830 | 
 831 | 3. Set up your API keys:
 832 |    ```bash
 833 |    export ANTHROPIC_API_KEY='your-anthropic-api-key-here'
 834 |    export BRAVE_API_KEY='your-brave-api-key-here'
 835 |    ```
 836 | 
 837 | 4. Build the application:
 838 |    ```bash
 839 |    ./mvnw clean install
 840 |    ```
 841 | 
 842 | 5. Run the application using Maven:
 843 |    ```bash
 844 |    ./mvnw spring-boot:run
 845 |    ```
 846 | 
 847 | <Warning>
 848 | Make sure you keep your `ANTHROPIC_API_KEY` and `BRAVE_API_KEY` keys secure!
 849 | </Warning>
 850 | 
 851 | 
 852 | ## How it Works
 853 | 
 854 | The application integrates Spring AI with the Brave Search MCP server through several components:
 855 | 
 856 | ### MCP Client Configuration
 857 | 
 858 | 1. Required dependencies in pom.xml:
 859 | ```xml
 860 | <dependency>
 861 |     <groupId>org.springframework.ai</groupId>
 862 |     <artifactId>spring-ai-mcp-client-spring-boot-starter</artifactId>
 863 | </dependency>
 864 | <dependency>
 865 |     <groupId>org.springframework.ai</groupId>
 866 |     <artifactId>spring-ai-anthropic-spring-boot-starter</artifactId>
 867 | </dependency>
 868 | ```
 869 | 
 870 | 2. Application properties (application.yml):
 871 | ```yml
 872 | spring:
 873 |   ai:
 874 |     mcp:
 875 |       client:
 876 |         enabled: true
 877 |         name: brave-search-client
 878 |         version: 1.0.0
 879 |         type: SYNC
 880 |         request-timeout: 20s
 881 |         stdio:
 882 |           root-change-notification: true
 883 |           servers-configuration: classpath:/mcp-servers-config.json
 884 |     anthropic:
 885 |       api-key: ${ANTHROPIC_API_KEY}
 886 | ```
 887 | 
 888 | This activates the `spring-ai-mcp-client-spring-boot-starter` to create one or more `McpClient`s based on the provided server configuration.
 889 | 
 890 | 3. MCP Server Configuration (`mcp-servers-config.json`):
 891 | ```json
 892 | {
 893 |   "mcpServers": {
 894 |     "brave-search": {
 895 |       "command": "npx",
 896 |       "args": [
 897 |         "-y",
 898 |         "@modelcontextprotocol/server-brave-search"
 899 |       ],
 900 |       "env": {
 901 |         "BRAVE_API_KEY": "<PUT YOUR BRAVE API KEY>"
 902 |       }
 903 |     }
 904 |   }
 905 | }
 906 | ```
 907 | 
 908 | ### Chat Implementation
 909 | 
 910 | The chatbot is implemented using Spring AI's ChatClient with MCP tool integration:
 911 | 
 912 | ```java
 913 | var chatClient = chatClientBuilder
 914 |     .defaultSystem("You are useful assistant, expert in AI and Java.")
 915 |     .defaultTools((Object[]) mcpToolAdapter.toolCallbacks())
 916 |     .defaultAdvisors(new MessageChatMemoryAdvisor(new InMemoryChatMemory()))
 917 |     .build();
 918 | ```
 919 | 
 920 | Key features:
 921 | - Uses Claude AI model for natural language understanding
 922 | - Integrates Brave Search through MCP for real-time web search capabilities
 923 | - Maintains conversation memory using InMemoryChatMemory
 924 | - Runs as an interactive command-line application
 925 | 
 926 | ### Build and run
 927 | 
 928 | ```bash
 929 | ./mvnw clean install
 930 | java -jar ./target/ai-mcp-brave-chatbot-0.0.1-SNAPSHOT.jar
 931 | ```
 932 | 
 933 | or
 934 | 
 935 | ```bash
 936 | ./mvnw spring-boot:run
 937 | ```
 938 | 
 939 | The application will start an interactive chat session where you can ask questions. The chatbot will use Brave Search when it needs to find information from the internet to answer your queries.
 940 | 
 941 | The chatbot can:
 942 | - Answer questions using its built-in knowledge
 943 | - Perform web searches when needed using Brave Search
 944 | - Remember context from previous messages in the conversation
 945 | - Combine information from multiple sources to provide comprehensive answers
 946 | 
 947 | ### Advanced Configuration
 948 | 
 949 | The MCP client supports additional configuration options:
 950 | 
 951 | - Client customization through `McpSyncClientCustomizer` or `McpAsyncClientCustomizer`
 952 | - Multiple clients with multiple transport types: `STDIO` and `SSE` (Server-Sent Events)
 953 | - Integration with Spring AI's tool execution framework
 954 | - Automatic client initialization and lifecycle management
 955 | 
 956 | For WebFlux-based applications, you can use the WebFlux starter instead:
 957 | 
 958 | ```xml
 959 | <dependency>
 960 |     <groupId>org.springframework.ai</groupId>
 961 |     <artifactId>spring-ai-mcp-client-webflux-spring-boot-starter</artifactId>
 962 | </dependency>
 963 | ```
 964 | 
 965 | This provides similar functionality but uses a WebFlux-based SSE transport implementation, recommended for production deployments.
 966 | 
 967 | </Tab>
 968 | 
 969 | <Tab title="Kotlin">
 970 | 
 971 | [You can find the complete code for this tutorial here.](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/samples/kotlin-mcp-client)
 972 | 
 973 | ## System Requirements
 974 | 
 975 | Before starting, ensure your system meets these requirements:
 976 | - Java 17 or higher
 977 | - Anthropic API key (Claude)
 978 | 
 979 | ## Setting up your environment
 980 | 
 981 | First, let's install `java` and `gradle` if you haven't already.
 982 | You can download `java` from [official Oracle JDK website](https://www.oracle.com/java/technologies/downloads/).
 983 | Verify your `java` installation:
 984 | ```bash
 985 | java --version
 986 | ```
 987 | 
 988 | Now, let's create and set up your project:
 989 | 
 990 | <CodeGroup>
 991 | ```bash MacOS/Linux
 992 | # Create a new directory for our project
 993 | mkdir kotlin-mcp-client
 994 | cd kotlin-mcp-client
 995 | 
 996 | # Initialize a new kotlin project
 997 | gradle init
 998 | ```
 999 | 
1000 | ```powershell Windows
1001 | # Create a new directory for our project
1002 | md kotlin-mcp-client
1003 | cd kotlin-mcp-client
1004 | # Initialize a new kotlin project
1005 | gradle init
1006 | ```
1007 | </CodeGroup>
1008 | 
1009 | After running `gradle init`, you will be presented with options for creating your project.
1010 | Select **Application** as the project type, **Kotlin** as the programming language, and **Java 17** as the Java version.
1011 | 
1012 | Alternatively, you can create a Kotlin application using the [IntelliJ IDEA project wizard](https://kotlinlang.org/docs/jvm-get-started.html).
1013 | 
1014 | After creating the project, add the following dependencies:
1015 | 
1016 | <CodeGroup>
1017 | ```kotlin build.gradle.kts
1018 | val mcpVersion = "0.3.0"
1019 | val slf4jVersion = "2.0.9"
1020 | val anthropicVersion = "0.8.0"
1021 | 
1022 | dependencies {
1023 |     implementation("io.modelcontextprotocol:kotlin-sdk:$mcpVersion")
1024 |     implementation("org.slf4j:slf4j-nop:$slf4jVersion")
1025 |     implementation("com.anthropic:anthropic-java:$anthropicVersion")
1026 | }
1027 | ```
1028 | 
1029 | ```groovy build.gradle
1030 | def mcpVersion = '0.3.0'
1031 | def slf4jVersion = '2.0.9'
1032 | def anthropicVersion = '0.8.0'
1033 | dependencies {
1034 |     implementation "io.modelcontextprotocol:kotlin-sdk:$mcpVersion"
1035 |     implementation "org.slf4j:slf4j-nop:$slf4jVersion"
1036 |     implementation "com.anthropic:anthropic-java:$anthropicVersion"
1037 | }
1038 | ```
1039 | </CodeGroup>
1040 | 
1041 | Also, add the following plugins to your build script:
1042 | <CodeGroup>
1043 | ```kotlin build.gradle.kts
1044 | plugins {
1045 |     id("com.github.johnrengelman.shadow") version "8.1.1"
1046 | }
1047 | ```
1048 | 
1049 | ```groovy build.gradle
1050 | plugins {
1051 |     id 'com.github.johnrengelman.shadow' version '8.1.1'
1052 | }
1053 | ```
1054 | </CodeGroup>
1055 | 
1056 | ## Setting up your API key
1057 | 
1058 | You'll need an Anthropic API key from the [Anthropic Console](https://console.anthropic.com/settings/keys).
1059 | 
1060 | Set up your API key:
1061 | ```bash
1062 | export ANTHROPIC_API_KEY='your-anthropic-api-key-here'
1063 | ```
1064 | 
1065 | <Warning>
1066 | Make sure your keep your `ANTHROPIC_API_KEY` secure!
1067 | </Warning>
1068 | 
1069 | ## Creating the Client
1070 | 
1071 | ### Basic Client Structure
1072 | 
1073 | First, let's create the basic client class:
1074 | 
1075 | ```kotlin
1076 | class MCPClient : AutoCloseable {
1077 |     private val anthropic = AnthropicOkHttpClient.fromEnv()
1078 |     private val mcp: Client = Client(clientInfo = Implementation(name = "mcp-client-cli", version = "1.0.0"))
1079 |     private lateinit var tools: List<ToolUnion>
1080 | 
1081 |     // methods will go here
1082 | 
1083 |     override fun close() {
1084 |         runBlocking {
1085 |             mcp.close()
1086 |             anthropic.close()
1087 |         }
1088 |     }
1089 | ```
1090 | 
1091 | ### Server connection managment
1092 | 
1093 | Next, we'll implement the method to connect to an MCP server:
1094 | 
1095 | ```kotlin
1096 | suspend fun connectToServer(serverScriptPath: String) {
1097 |     try {
1098 |         val command = buildList {
1099 |             when (serverScriptPath.substringAfterLast(".")) {
1100 |                 "js" -> add("node")
1101 |                 "py" -> add(if (System.getProperty("os.name").lowercase().contains("win")) "python" else "python3")
1102 |                 "jar" -> addAll(listOf("java", "-jar"))
1103 |                 else -> throw IllegalArgumentException("Server script must be a .js, .py or .jar file")
1104 |             }
1105 |             add(serverScriptPath)
1106 |         }
1107 | 
1108 |         val process = ProcessBuilder(command).start()
1109 |         val transport = StdioClientTransport(
1110 |             input = process.inputStream.asSource().buffered(),
1111 |             output = process.outputStream.asSink().buffered()
1112 |         )
1113 | 
1114 |         mcp.connect(transport)
1115 | 
1116 |         val toolsResult = mcp.listTools()
1117 |         tools = toolsResult?.tools?.map { tool ->
1118 |             ToolUnion.ofTool(
1119 |                 Tool.builder()
1120 |                     .name(tool.name)
1121 |                     .description(tool.description ?: "")
1122 |                     .inputSchema(
1123 |                         Tool.InputSchema.builder()
1124 |                             .type(JsonValue.from(tool.inputSchema.type))
1125 |                             .properties(tool.inputSchema.properties.toJsonValue())
1126 |                             .putAdditionalProperty("required", JsonValue.from(tool.inputSchema.required))
1127 |                             .build()
1128 |                     )
1129 |                     .build()
1130 |             )
1131 |         } ?: emptyList()
1132 |         println("Connected to server with tools: ${tools.joinToString(", ") { it.tool().get().name() }}")
1133 |     } catch (e: Exception) {
1134 |         println("Failed to connect to MCP server: $e")
1135 |         throw e
1136 |     }
1137 | }
1138 | ```
1139 | 
1140 | Also create a helper function to convert from `JsonObject` to `JsonValue` for Anthropic:
1141 | ```kotlin
1142 | private fun JsonObject.toJsonValue(): JsonValue {
1143 |     val mapper = ObjectMapper()
1144 |     val node = mapper.readTree(this.toString())
1145 |     return JsonValue.fromJsonNode(node)
1146 | }
1147 | ```
1148 | 
1149 | ### Query processing logic
1150 | 
1151 | Now let's add the core functionality for processing queries and handling tool calls:
1152 | 
1153 | ```kotlin
1154 | private val messageParamsBuilder: MessageCreateParams.Builder = MessageCreateParams.builder()
1155 |     .model(Model.CLAUDE_3_5_SONNET_20241022)
1156 |     .maxTokens(1024)
1157 | 
1158 | suspend fun processQuery(query: String): String {
1159 |     val messages = mutableListOf(
1160 |         MessageParam.builder()
1161 |             .role(MessageParam.Role.USER)
1162 |             .content(query)
1163 |             .build()
1164 |     )
1165 | 
1166 |     val response = anthropic.messages().create(
1167 |         messageParamsBuilder
1168 |             .messages(messages)
1169 |             .tools(tools)
1170 |             .build()
1171 |     )
1172 | 
1173 |     val finalText = mutableListOf<String>()
1174 |     response.content().forEach { content ->
1175 |         when {
1176 |             content.isText() -> finalText.add(content.text().getOrNull()?.text() ?: "")
1177 | 
1178 |             content.isToolUse() -> {
1179 |                 val toolName = content.toolUse().get().name()
1180 |                 val toolArgs =
1181 |                     content.toolUse().get()._input().convert(object : TypeReference<Map<String, JsonValue>>() {})
1182 | 
1183 |                 val result = mcp.callTool(
1184 |                     name = toolName,
1185 |                     arguments = toolArgs ?: emptyMap()
1186 |                 )
1187 |                 finalText.add("[Calling tool $toolName with args $toolArgs]")
1188 | 
1189 |                 messages.add(
1190 |                     MessageParam.builder()
1191 |                         .role(MessageParam.Role.USER)
1192 |                         .content(
1193 |                             """
1194 |                                 "type": "tool_result",
1195 |                                 "tool_name": $toolName,
1196 |                                 "result": ${result?.content?.joinToString("\n") { (it as TextContent).text ?: "" }}
1197 |                             """.trimIndent()
1198 |                         )
1199 |                         .build()
1200 |                 )
1201 | 
1202 |                 val aiResponse = anthropic.messages().create(
1203 |                     messageParamsBuilder
1204 |                         .messages(messages)
1205 |                         .build()
1206 |                 )
1207 | 
1208 |                 finalText.add(aiResponse.content().first().text().getOrNull()?.text() ?: "")
1209 |             }
1210 |         }
1211 |     }
1212 | 
1213 |     return finalText.joinToString("\n", prefix = "", postfix = "")
1214 | }
1215 | ```
1216 | 
1217 | ### Interactive chat
1218 | 
1219 | We'll add the chat loop:
1220 | 
1221 | ```kotlin
1222 | suspend fun chatLoop() {
1223 |     println("\nMCP Client Started!")
1224 |     println("Type your queries or 'quit' to exit.")
1225 | 
1226 |     while (true) {
1227 |         print("\nQuery: ")
1228 |         val message = readLine() ?: break
1229 |         if (message.lowercase() == "quit") break
1230 |         val response = processQuery(message)
1231 |         println("\n$response")
1232 |     }
1233 | }
1234 | ```
1235 | 
1236 | ### Main entry point
1237 | 
1238 | Finally, we'll add the main execution function:
1239 | 
1240 | ```kotlin
1241 | fun main(args: Array<String>) = runBlocking {
1242 |     if (args.isEmpty()) throw IllegalArgumentException("Usage: java -jar <your_path>/build/libs/kotlin-mcp-client-0.1.0-all.jar <path_to_server_script>")
1243 |     val serverPath = args.first()
1244 |     val client = MCPClient()
1245 |     client.use {
1246 |         client.connectToServer(serverPath)
1247 |         client.chatLoop()
1248 |     }
1249 | }
1250 | ```
1251 | 
1252 | ## Running the client
1253 | 
1254 | To run your client with any MCP server:
1255 | 
1256 | ```bash
1257 | ./gradlew build
1258 | 
1259 | # Run the client
1260 | java -jar build/libs/<your-jar-name>.jar path/to/server.jar # jvm server
1261 | java -jar build/libs/<your-jar-name>.jar path/to/server.py # python server
1262 | java -jar build/libs/<your-jar-name>.jar path/to/build/index.js # node server
1263 | ```
1264 | 
1265 | <Note>
1266 | If you're continuing the weather tutorial from the server quickstart, your command might look something like this: `java -jar build/libs/kotlin-mcp-client-0.1.0-all.jar .../samples/weather-stdio-server/build/libs/weather-stdio-server-0.1.0-all.jar`
1267 | </Note>
1268 | 
1269 | **The client will:**
1270 | 1. Connect to the specified server
1271 | 2. List available tools
1272 | 3. Start an interactive chat session where you can:
1273 |    - Enter queries
1274 |    - See tool executions
1275 |    - Get responses from Claude
1276 | 
1277 | ## How it works
1278 | 
1279 | Here's a high-level workflow schema:
1280 | 
1281 | ```mermaid
1282 | ---
1283 | config:
1284 |     theme: neutral
1285 | ---
1286 | sequenceDiagram
1287 |     actor User
1288 |     participant Client
1289 |     participant Claude
1290 |     participant MCP_Server as MCP Server
1291 |     participant Tools
1292 | 
1293 |     User->>Client: Send query
1294 |     Client<<->>MCP_Server: Get available tools
1295 |     Client->>Claude: Send query with tool descriptions
1296 |     Claude-->>Client: Decide tool execution
1297 |     Client->>MCP_Server: Request tool execution
1298 |     MCP_Server->>Tools: Execute chosen tools
1299 |     Tools-->>MCP_Server: Return results
1300 |     MCP_Server-->>Client: Send results
1301 |     Client->>Claude: Send tool results
1302 |     Claude-->>Client: Provide final response
1303 |     Client-->>User: Display response
1304 | ```
1305 | 
1306 | When you submit a query:
1307 | 1. The client gets the list of available tools from the server
1308 | 2. Your query is sent to Claude along with tool descriptions
1309 | 3. Claude decides which tools (if any) to use
1310 | 4. The client executes any requested tool calls through the server
1311 | 5. Results are sent back to Claude
1312 | 6. Claude provides a natural language response
1313 | 7. The response is displayed to you
1314 | 
1315 | ## Best practices
1316 | 
1317 | 1. **Error Handling**
1318 |    - Leverage Kotlin's type system to model errors explicitly
1319 |    - Wrap external tool and API calls in `try-catch` blocks when exceptions are possible
1320 |    - Provide clear and meaningful error messages
1321 |    - Handle network timeouts and connection issues gracefully
1322 | 
1323 | 2. **Security**
1324 |    - Store API keys and secrets securely in `local.properties`, environment variables, or secret managers
1325 |    - Validate all external responses to avoid unexpected or unsafe data usage
1326 |    - Be cautious with permissions and trust boundaries when using tools
1327 | 
1328 | ## Troubleshooting
1329 | 
1330 | ### Server Path Issues
1331 | - Double-check the path to your server script is correct
1332 | - Use the absolute path if the relative path isn't working
1333 | - For Windows users, make sure to use forward slashes (/) or escaped backslashes (\\) in the path
1334 | - Make sure that the required runtime is installed (java for Java, npm for Node.js, or uv for Python)
1335 | - Verify the server file has the correct extension (.jar for Java, .js for Node.js or .py for Python)
1336 | 
1337 | Example of correct path usage:
1338 | ```bash
1339 | # Relative path
1340 | java -jar build/libs/client.jar ./server/build/libs/server.jar
1341 | 
1342 | # Absoulute path
1343 | java -jar build/libs/client.jar /Users/username/projects/mcp-server/build/libs/server.jar
1344 | 
1345 | # Windows path (either format works)
1346 | java -jar build/libs/client.jar C:/projects/mcp-server/build/libs/server.jar
1347 | java -jar build/libs/client.jar C:\\projects\\mcp-server\\build\\libs\\server.jar
1348 | ```
1349 | 
1350 | ### Response Timing
1351 | - The first response might take up to 30 seconds to return
1352 | - This is normal and happens while:
1353 |   - The server initializes
1354 |   - Claude processes the query
1355 |   - Tools are being executed
1356 | - Subsequent responses are typically faster
1357 | - Don't interrupt the process during this initial waiting period
1358 | 
1359 | ### Common Error Messages
1360 | 
1361 | If you see:
1362 | - `Connection refused`: Ensure the server is running and the path is correct
1363 | - `Tool execution failed`: Verify the tool's required environment variables are set
1364 | - `ANTHROPIC_API_KEY is not set`: Check your environment variables
1365 | 
1366 | </Tab>
1367 | 
1368 | </Tabs>
1369 | 
1370 | ## Next steps
1371 | 
1372 | <CardGroup cols={2}>
1373 |   <Card
1374 |     title="Example servers"
1375 |     icon="grid"
1376 |     href="/examples"
1377 |   >
1378 |     Check out our gallery of official MCP servers and implementations
1379 |   </Card>
1380 |   <Card
1381 |     title="Clients"
1382 |     icon="cubes"
1383 |     href="/clients"
1384 |   >
1385 |     View the list of clients that support MCP integrations
1386 |   </Card>
1387 |   <Card
1388 |     title="Building MCP with LLMs"
1389 |     icon="comments"
1390 |     href="/tutorials/building-mcp-with-llms"
1391 |   >
1392 |     Learn how to use LLMs like Claude to speed up your MCP development
1393 |   </Card>
1394 |    <Card
1395 |     title="Core architecture"
1396 |     icon="sitemap"
1397 |     href="/docs/concepts/architecture"
1398 |   >
1399 |     Understand how MCP connects clients, servers, and LLMs
1400 |   </Card>
1401 | </CardGroup>
1402 | 


--------------------------------------------------------------------------------
/quickstart/server.mdx:
--------------------------------------------------------------------------------
   1 | ---
   2 | title: "For Server Developers"
   3 | description: "Get started building your own server to use in Claude for Desktop and other clients."
   4 | ---
   5 | 
   6 | In this tutorial, we'll build a simple MCP weather server and connect it to a host, Claude for Desktop. We'll start with a basic setup, and then progress to more complex use cases.
   7 | 
   8 | ### What we'll be building
   9 | 
  10 | Many LLMs do not currently have the ability to fetch the forecast and severe weather alerts. Let's use MCP to solve that!
  11 | 
  12 | We'll build a server that exposes two tools: `get-alerts` and `get-forecast`. Then we'll connect the server to an MCP host (in this case, Claude for Desktop):
  13 | 
  14 | <Frame>
  15 |   <img src="/images/weather-alerts.png" />
  16 | </Frame>
  17 | <Frame>
  18 |   <img src="/images/current-weather.png" />
  19 | </Frame>
  20 | 
  21 | <Note>
  22 | Servers can connect to any client. We've chosen Claude for Desktop here for simplicity, but we also have guides on [building your own client](/quickstart/client) as well as a [list of other clients here](/clients).
  23 | </Note>
  24 | 
  25 | <Accordion title="Why Claude for Desktop and not Claude.ai?">
  26 |   Because servers are locally run, MCP currently only supports desktop hosts. Remote hosts are in active development.
  27 | </Accordion>
  28 | 
  29 | ### Core MCP Concepts
  30 | 
  31 | MCP servers can provide three main types of capabilities:
  32 | 
  33 | 1. **Resources**: File-like data that can be read by clients (like API responses or file contents)
  34 | 2. **Tools**: Functions that can be called by the LLM (with user approval)
  35 | 3. **Prompts**: Pre-written templates that help users accomplish specific tasks
  36 | 
  37 | This tutorial will primarily focus on tools.
  38 | 
  39 | <Tabs>
  40 | <Tab title='Python'>
  41 | 
  42 | Let's get started with building our weather server! [You can find the complete code for what we'll be building here.](https://github.com/modelcontextprotocol/quickstart-resources/tree/main/weather-server-python)
  43 | 
  44 | ### Prerequisite knowledge
  45 | 
  46 | This quickstart assumes you have familiarity with:
  47 | - Python
  48 | - LLMs like Claude
  49 | 
  50 | ### System requirements
  51 | 
  52 | - Python 3.10 or higher installed.
  53 | - You must use the Python MCP SDK 1.2.0 or higher.
  54 | 
  55 | ### Set up your environment
  56 | 
  57 | First, let's install `uv` and set up our Python project and environment:
  58 | 
  59 | <CodeGroup>
  60 | 
  61 | ```bash MacOS/Linux
  62 | curl -LsSf https://astral.sh/uv/install.sh | sh
  63 | ```
  64 | 
  65 | ```powershell Windows
  66 | powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
  67 | ```
  68 | 
  69 | </CodeGroup>
  70 | 
  71 | Make sure to restart your terminal afterwards to ensure that the `uv` command gets picked up.
  72 | 
  73 | Now, let's create and set up our project:
  74 | 
  75 | <CodeGroup>
  76 | ```bash MacOS/Linux
  77 | # Create a new directory for our project
  78 | uv init weather
  79 | cd weather
  80 | 
  81 | # Create virtual environment and activate it
  82 | uv venv
  83 | source .venv/bin/activate
  84 | 
  85 | # Install dependencies
  86 | uv add "mcp[cli]" httpx
  87 | 
  88 | # Create our server file
  89 | touch weather.py
  90 | ```
  91 | 
  92 | ```powershell Windows
  93 | # Create a new directory for our project
  94 | uv init weather
  95 | cd weather
  96 | 
  97 | # Create virtual environment and activate it
  98 | uv venv
  99 | .venv\Scripts\activate
 100 | 
 101 | # Install dependencies
 102 | uv add mcp[cli] httpx
 103 | 
 104 | # Create our server file
 105 | new-item weather.py
 106 | ```
 107 | </CodeGroup>
 108 | 
 109 | Now let's dive into building your server.
 110 | 
 111 | ## Building your server
 112 | 
 113 | ### Importing packages and setting up the instance
 114 | 
 115 | Add these to the top of your `weather.py`:
 116 | ```python
 117 | from typing import Any
 118 | import httpx
 119 | from mcp.server.fastmcp import FastMCP
 120 | 
 121 | # Initialize FastMCP server
 122 | mcp = FastMCP("weather")
 123 | 
 124 | # Constants
 125 | NWS_API_BASE = "https://api.weather.gov"
 126 | USER_AGENT = "weather-app/1.0"
 127 | ```
 128 | 
 129 | The FastMCP class uses Python type hints and docstrings to automatically generate tool definitions, making it easy to create and maintain MCP tools.
 130 | 
 131 | ### Helper functions
 132 | 
 133 | Next, let's add our helper functions for querying and formatting the data from the National Weather Service API:
 134 | 
 135 | ```python
 136 | async def make_nws_request(url: str) -> dict[str, Any] | None:
 137 |     """Make a request to the NWS API with proper error handling."""
 138 |     headers = {
 139 |         "User-Agent": USER_AGENT,
 140 |         "Accept": "application/geo+json"
 141 |     }
 142 |     async with httpx.AsyncClient() as client:
 143 |         try:
 144 |             response = await client.get(url, headers=headers, timeout=30.0)
 145 |             response.raise_for_status()
 146 |             return response.json()
 147 |         except Exception:
 148 |             return None
 149 | 
 150 | def format_alert(feature: dict) -> str:
 151 |     """Format an alert feature into a readable string."""
 152 |     props = feature["properties"]
 153 |     return f"""
 154 | Event: {props.get('event', 'Unknown')}
 155 | Area: {props.get('areaDesc', 'Unknown')}
 156 | Severity: {props.get('severity', 'Unknown')}
 157 | Description: {props.get('description', 'No description available')}
 158 | Instructions: {props.get('instruction', 'No specific instructions provided')}
 159 | """
 160 | ```
 161 | 
 162 | ### Implementing tool execution
 163 | 
 164 | The tool execution handler is responsible for actually executing the logic of each tool. Let's add it:
 165 | 
 166 | ```python
 167 | @mcp.tool()
 168 | async def get_alerts(state: str) -> str:
 169 |     """Get weather alerts for a US state.
 170 | 
 171 |     Args:
 172 |         state: Two-letter US state code (e.g. CA, NY)
 173 |     """
 174 |     url = f"{NWS_API_BASE}/alerts/active/area/{state}"
 175 |     data = await make_nws_request(url)
 176 | 
 177 |     if not data or "features" not in data:
 178 |         return "Unable to fetch alerts or no alerts found."
 179 | 
 180 |     if not data["features"]:
 181 |         return "No active alerts for this state."
 182 | 
 183 |     alerts = [format_alert(feature) for feature in data["features"]]
 184 |     return "\n---\n".join(alerts)
 185 | 
 186 | @mcp.tool()
 187 | async def get_forecast(latitude: float, longitude: float) -> str:
 188 |     """Get weather forecast for a location.
 189 | 
 190 |     Args:
 191 |         latitude: Latitude of the location
 192 |         longitude: Longitude of the location
 193 |     """
 194 |     # First get the forecast grid endpoint
 195 |     points_url = f"{NWS_API_BASE}/points/{latitude},{longitude}"
 196 |     points_data = await make_nws_request(points_url)
 197 | 
 198 |     if not points_data:
 199 |         return "Unable to fetch forecast data for this location."
 200 | 
 201 |     # Get the forecast URL from the points response
 202 |     forecast_url = points_data["properties"]["forecast"]
 203 |     forecast_data = await make_nws_request(forecast_url)
 204 | 
 205 |     if not forecast_data:
 206 |         return "Unable to fetch detailed forecast."
 207 | 
 208 |     # Format the periods into a readable forecast
 209 |     periods = forecast_data["properties"]["periods"]
 210 |     forecasts = []
 211 |     for period in periods[:5]:  # Only show next 5 periods
 212 |         forecast = f"""
 213 | {period['name']}:
 214 | Temperature: {period['temperature']}°{period['temperatureUnit']}
 215 | Wind: {period['windSpeed']} {period['windDirection']}
 216 | Forecast: {period['detailedForecast']}
 217 | """
 218 |         forecasts.append(forecast)
 219 | 
 220 |     return "\n---\n".join(forecasts)
 221 | ```
 222 | 
 223 | ### Running the server
 224 | 
 225 | Finally, let's initialize and run the server:
 226 | 
 227 | ```python
 228 | if __name__ == "__main__":
 229 |     # Initialize and run the server
 230 |     mcp.run(transport='stdio')
 231 | ```
 232 | 
 233 | Your server is complete! Run `uv run weather.py` to confirm that everything's working.
 234 | 
 235 | Let's now test your server from an existing MCP host, Claude for Desktop.
 236 | 
 237 | ## Testing your server with Claude for Desktop
 238 | 
 239 | <Note>
 240 | Claude for Desktop is not yet available on Linux. Linux users can proceed to the [Building a client](/quickstart/client) tutorial to build an MCP client that connects to the server we just built.
 241 | </Note>
 242 | 
 243 | First, make sure you have Claude for Desktop installed. [You can install the latest version
 244 | here.](https://claude.ai/download) If you already have Claude for Desktop, **make sure it's updated to the latest version.**
 245 | 
 246 | We'll need to configure Claude for Desktop for whichever MCP servers you want to use. To do this, open your Claude for Desktop App configuration at `~/Library/Application Support/Claude/claude_desktop_config.json` in a text editor. Make sure to create the file if it doesn't exist.
 247 | 
 248 | For example, if you have [VS Code](https://code.visualstudio.com/) installed:
 249 | 
 250 | <Tabs>
 251 | <Tab title="MacOS/Linux">
 252 | ```bash
 253 | code ~/Library/Application\ Support/Claude/claude_desktop_config.json
 254 | ```
 255 | </Tab>
 256 | <Tab title="Windows">
 257 | ```powershell
 258 | code $env:AppData\Claude\claude_desktop_config.json
 259 | ```
 260 | </Tab>
 261 | </Tabs>
 262 | 
 263 | You'll then add your servers in the `mcpServers` key. The MCP UI elements will only show up in Claude for Desktop if at least one server is properly configured.
 264 | 
 265 | In this case, we'll add our single weather server like so:
 266 | 
 267 | <Tabs>
 268 | <Tab title="MacOS/Linux">
 269 | ```json Python
 270 | {
 271 |     "mcpServers": {
 272 |         "weather": {
 273 |             "command": "uv",
 274 |             "args": [
 275 |                 "--directory",
 276 |                 "/ABSOLUTE/PATH/TO/PARENT/FOLDER/weather",
 277 |                 "run",
 278 |                 "weather.py"
 279 |             ]
 280 |         }
 281 |     }
 282 | }
 283 | ```
 284 | </Tab>
 285 | <Tab title="Windows">
 286 | ```json Python
 287 | {
 288 |     "mcpServers": {
 289 |         "weather": {
 290 |             "command": "uv",
 291 |             "args": [
 292 |                 "--directory",
 293 |                 "C:\\ABSOLUTE\\PATH\\TO\\PARENT\\FOLDER\\weather",
 294 |                 "run",
 295 |                 "weather.py"
 296 |             ]
 297 |         }
 298 |     }
 299 | }
 300 | ```
 301 | </Tab>
 302 | </Tabs>
 303 | 
 304 | <Warning>
 305 | You may need to put the full path to the `uv` executable in the `command` field. You can get this by running `which uv` on MacOS/Linux or `where uv` on Windows.
 306 | </Warning>
 307 | 
 308 | <Note>
 309 | Make sure you pass in the absolute path to your server.
 310 | </Note>
 311 | 
 312 | This tells Claude for Desktop:
 313 | 1. There's an MCP server named "weather"
 314 | 2. To launch it by running `uv --directory /ABSOLUTE/PATH/TO/PARENT/FOLDER/weather run weather.py`
 315 | 
 316 | Save the file, and restart **Claude for Desktop**.
 317 | </Tab>
 318 | 
 319 | <Tab title='Node'>
 320 | Let's get started with building our weather server! [You can find the complete code for what we'll be building here.](https://github.com/modelcontextprotocol/quickstart-resources/tree/main/weather-server-typescript)
 321 | 
 322 | ### Prerequisite knowledge
 323 | 
 324 | This quickstart assumes you have familiarity with:
 325 | - TypeScript
 326 | - LLMs like Claude
 327 | 
 328 | ### System requirements
 329 | 
 330 | For TypeScript, make sure you have the latest version of Node installed.
 331 | 
 332 | ### Set up your environment
 333 | 
 334 | First, let's install Node.js and npm if you haven't already. You can download them from [nodejs.org](https://nodejs.org/).
 335 | Verify your Node.js installation:
 336 | ```bash
 337 | node --version
 338 | npm --version
 339 | ```
 340 | For this tutorial, you'll need Node.js version 16 or higher.
 341 | 
 342 | Now, let's create and set up our project:
 343 | 
 344 | <CodeGroup>
 345 | ```bash MacOS/Linux
 346 | # Create a new directory for our project
 347 | mkdir weather
 348 | cd weather
 349 | 
 350 | # Initialize a new npm project
 351 | npm init -y
 352 | 
 353 | # Install dependencies
 354 | npm install @modelcontextprotocol/sdk zod
 355 | npm install -D @types/node typescript
 356 | 
 357 | # Create our files
 358 | mkdir src
 359 | touch src/index.ts
 360 | ```
 361 | 
 362 | ```powershell Windows
 363 | # Create a new directory for our project
 364 | md weather
 365 | cd weather
 366 | 
 367 | # Initialize a new npm project
 368 | npm init -y
 369 | 
 370 | # Install dependencies
 371 | npm install @modelcontextprotocol/sdk zod
 372 | npm install -D @types/node typescript
 373 | 
 374 | # Create our files
 375 | md src
 376 | new-item src\index.ts
 377 | ```
 378 | </CodeGroup>
 379 | 
 380 | Update your package.json to add type: "module" and a build script:
 381 | 
 382 | ```json package.json
 383 | {
 384 |   "type": "module",
 385 |   "bin": {
 386 |     "weather": "./build/index.js"
 387 |   },
 388 |   "scripts": {
 389 |     "build": "tsc && chmod 755 build/index.js"
 390 |   },
 391 |   "files": [
 392 |     "build"
 393 |   ],
 394 | }
 395 | ```
 396 | 
 397 | Create a `tsconfig.json` in the root of your project:
 398 | 
 399 | ```json tsconfig.json
 400 | {
 401 |   "compilerOptions": {
 402 |     "target": "ES2022",
 403 |     "module": "Node16",
 404 |     "moduleResolution": "Node16",
 405 |     "outDir": "./build",
 406 |     "rootDir": "./src",
 407 |     "strict": true,
 408 |     "esModuleInterop": true,
 409 |     "skipLibCheck": true,
 410 |     "forceConsistentCasingInFileNames": true
 411 |   },
 412 |   "include": ["src/**/*"],
 413 |   "exclude": ["node_modules"]
 414 | }
 415 | ```
 416 | 
 417 | Now let's dive into building your server.
 418 | 
 419 | ## Building your server
 420 | 
 421 | ### Importing packages and setting up the instance
 422 | 
 423 | Add these to the top of your `src/index.ts`:
 424 | ```typescript
 425 | import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
 426 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
 427 | import { z } from "zod";
 428 | 
 429 | const NWS_API_BASE = "https://api.weather.gov";
 430 | const USER_AGENT = "weather-app/1.0";
 431 | 
 432 | // Create server instance
 433 | const server = new McpServer({
 434 |   name: "weather",
 435 |   version: "1.0.0",
 436 | });
 437 | ```
 438 | 
 439 | ### Helper functions
 440 | 
 441 | Next, let's add our helper functions for querying and formatting the data from the National Weather Service API:
 442 | 
 443 | ```typescript
 444 | // Helper function for making NWS API requests
 445 | async function makeNWSRequest<T>(url: string): Promise<T | null> {
 446 |   const headers = {
 447 |     "User-Agent": USER_AGENT,
 448 |     Accept: "application/geo+json",
 449 |   };
 450 | 
 451 |   try {
 452 |     const response = await fetch(url, { headers });
 453 |     if (!response.ok) {
 454 |       throw new Error(`HTTP error! status: ${response.status}`);
 455 |     }
 456 |     return (await response.json()) as T;
 457 |   } catch (error) {
 458 |     console.error("Error making NWS request:", error);
 459 |     return null;
 460 |   }
 461 | }
 462 | 
 463 | interface AlertFeature {
 464 |   properties: {
 465 |     event?: string;
 466 |     areaDesc?: string;
 467 |     severity?: string;
 468 |     status?: string;
 469 |     headline?: string;
 470 |   };
 471 | }
 472 | 
 473 | // Format alert data
 474 | function formatAlert(feature: AlertFeature): string {
 475 |   const props = feature.properties;
 476 |   return [
 477 |     `Event: ${props.event || "Unknown"}`,
 478 |     `Area: ${props.areaDesc || "Unknown"}`,
 479 |     `Severity: ${props.severity || "Unknown"}`,
 480 |     `Status: ${props.status || "Unknown"}`,
 481 |     `Headline: ${props.headline || "No headline"}`,
 482 |     "---",
 483 |   ].join("\n");
 484 | }
 485 | 
 486 | interface ForecastPeriod {
 487 |   name?: string;
 488 |   temperature?: number;
 489 |   temperatureUnit?: string;
 490 |   windSpeed?: string;
 491 |   windDirection?: string;
 492 |   shortForecast?: string;
 493 | }
 494 | 
 495 | interface AlertsResponse {
 496 |   features: AlertFeature[];
 497 | }
 498 | 
 499 | interface PointsResponse {
 500 |   properties: {
 501 |     forecast?: string;
 502 |   };
 503 | }
 504 | 
 505 | interface ForecastResponse {
 506 |   properties: {
 507 |     periods: ForecastPeriod[];
 508 |   };
 509 | }
 510 | ```
 511 | 
 512 | ### Implementing tool execution
 513 | 
 514 | The tool execution handler is responsible for actually executing the logic of each tool. Let's add it:
 515 | 
 516 | ```typescript
 517 | // Register weather tools
 518 | server.tool(
 519 |   "get-alerts",
 520 |   "Get weather alerts for a state",
 521 |   {
 522 |     state: z.string().length(2).describe("Two-letter state code (e.g. CA, NY)"),
 523 |   },
 524 |   async ({ state }) => {
 525 |     const stateCode = state.toUpperCase();
 526 |     const alertsUrl = `${NWS_API_BASE}/alerts?area=${stateCode}`;
 527 |     const alertsData = await makeNWSRequest<AlertsResponse>(alertsUrl);
 528 | 
 529 |     if (!alertsData) {
 530 |       return {
 531 |         content: [
 532 |           {
 533 |             type: "text",
 534 |             text: "Failed to retrieve alerts data",
 535 |           },
 536 |         ],
 537 |       };
 538 |     }
 539 | 
 540 |     const features = alertsData.features || [];
 541 |     if (features.length === 0) {
 542 |       return {
 543 |         content: [
 544 |           {
 545 |             type: "text",
 546 |             text: `No active alerts for ${stateCode}`,
 547 |           },
 548 |         ],
 549 |       };
 550 |     }
 551 | 
 552 |     const formattedAlerts = features.map(formatAlert);
 553 |     const alertsText = `Active alerts for ${stateCode}:\n\n${formattedAlerts.join("\n")}`;
 554 | 
 555 |     return {
 556 |       content: [
 557 |         {
 558 |           type: "text",
 559 |           text: alertsText,
 560 |         },
 561 |       ],
 562 |     };
 563 |   },
 564 | );
 565 | 
 566 | server.tool(
 567 |   "get-forecast",
 568 |   "Get weather forecast for a location",
 569 |   {
 570 |     latitude: z.number().min(-90).max(90).describe("Latitude of the location"),
 571 |     longitude: z.number().min(-180).max(180).describe("Longitude of the location"),
 572 |   },
 573 |   async ({ latitude, longitude }) => {
 574 |     // Get grid point data
 575 |     const pointsUrl = `${NWS_API_BASE}/points/${latitude.toFixed(4)},${longitude.toFixed(4)}`;
 576 |     const pointsData = await makeNWSRequest<PointsResponse>(pointsUrl);
 577 | 
 578 |     if (!pointsData) {
 579 |       return {
 580 |         content: [
 581 |           {
 582 |             type: "text",
 583 |             text: `Failed to retrieve grid point data for coordinates: ${latitude}, ${longitude}. This location may not be supported by the NWS API (only US locations are supported).`,
 584 |           },
 585 |         ],
 586 |       };
 587 |     }
 588 | 
 589 |     const forecastUrl = pointsData.properties?.forecast;
 590 |     if (!forecastUrl) {
 591 |       return {
 592 |         content: [
 593 |           {
 594 |             type: "text",
 595 |             text: "Failed to get forecast URL from grid point data",
 596 |           },
 597 |         ],
 598 |       };
 599 |     }
 600 | 
 601 |     // Get forecast data
 602 |     const forecastData = await makeNWSRequest<ForecastResponse>(forecastUrl);
 603 |     if (!forecastData) {
 604 |       return {
 605 |         content: [
 606 |           {
 607 |             type: "text",
 608 |             text: "Failed to retrieve forecast data",
 609 |           },
 610 |         ],
 611 |       };
 612 |     }
 613 | 
 614 |     const periods = forecastData.properties?.periods || [];
 615 |     if (periods.length === 0) {
 616 |       return {
 617 |         content: [
 618 |           {
 619 |             type: "text",
 620 |             text: "No forecast periods available",
 621 |           },
 622 |         ],
 623 |       };
 624 |     }
 625 | 
 626 |     // Format forecast periods
 627 |     const formattedForecast = periods.map((period: ForecastPeriod) =>
 628 |       [
 629 |         `${period.name || "Unknown"}:`,
 630 |         `Temperature: ${period.temperature || "Unknown"}°${period.temperatureUnit || "F"}`,
 631 |         `Wind: ${period.windSpeed || "Unknown"} ${period.windDirection || ""}`,
 632 |         `${period.shortForecast || "No forecast available"}`,
 633 |         "---",
 634 |       ].join("\n"),
 635 |     );
 636 | 
 637 |     const forecastText = `Forecast for ${latitude}, ${longitude}:\n\n${formattedForecast.join("\n")}`;
 638 | 
 639 |     return {
 640 |       content: [
 641 |         {
 642 |           type: "text",
 643 |           text: forecastText,
 644 |         },
 645 |       ],
 646 |     };
 647 |   },
 648 | );
 649 | ```
 650 | 
 651 | ### Running the server
 652 | 
 653 | Finally, implement the main function to run the server:
 654 | 
 655 | ```typescript
 656 | async function main() {
 657 |   const transport = new StdioServerTransport();
 658 |   await server.connect(transport);
 659 |   console.error("Weather MCP Server running on stdio");
 660 | }
 661 | 
 662 | main().catch((error) => {
 663 |   console.error("Fatal error in main():", error);
 664 |   process.exit(1);
 665 | });
 666 | ```
 667 | 
 668 | Make sure to run `npm run build` to build your server! This is a very important step in getting your server to connect.
 669 | 
 670 | Let's now test your server from an existing MCP host, Claude for Desktop.
 671 | 
 672 | ## Testing your server with Claude for Desktop
 673 | 
 674 | <Note>
 675 | Claude for Desktop is not yet available on Linux. Linux users can proceed to the [Building a client](/quickstart/client) tutorial to build an MCP client that connects to the server we just built.
 676 | </Note>
 677 | 
 678 | First, make sure you have Claude for Desktop installed. [You can install the latest version
 679 | here.](https://claude.ai/download) If you already have Claude for Desktop, **make sure it's updated to the latest version.**
 680 | 
 681 | We'll need to configure Claude for Desktop for whichever MCP servers you want to use. To do this, open your Claude for Desktop App configuration at `~/Library/Application Support/Claude/claude_desktop_config.json` in a text editor. Make sure to create the file if it doesn't exist.
 682 | 
 683 | For example, if you have [VS Code](https://code.visualstudio.com/) installed:
 684 | 
 685 | <Tabs>
 686 | <Tab title="MacOS/Linux">
 687 | ```bash
 688 | code ~/Library/Application\ Support/Claude/claude_desktop_config.json
 689 | ```
 690 | </Tab>
 691 | <Tab title="Windows">
 692 | ```powershell
 693 | code $env:AppData\Claude\claude_desktop_config.json
 694 | ```
 695 | </Tab>
 696 | </Tabs>
 697 | 
 698 | You'll then add your servers in the `mcpServers` key. The MCP UI elements will only show up in Claude for Desktop if at least one server is properly configured.
 699 | 
 700 | In this case, we'll add our single weather server like so:
 701 | 
 702 | <Tabs>
 703 | <Tab title="MacOS/Linux">
 704 | <CodeGroup>
 705 | ```json Node
 706 | {
 707 |     "mcpServers": {
 708 |         "weather": {
 709 |             "command": "node",
 710 |             "args": [
 711 |                 "/ABSOLUTE/PATH/TO/PARENT/FOLDER/weather/build/index.js"
 712 |             ]
 713 |         }
 714 |     }
 715 | }
 716 | ```
 717 | </CodeGroup>
 718 | </Tab>
 719 | <Tab title="Windows">
 720 | <CodeGroup>
 721 | ```json Node
 722 | {
 723 |     "mcpServers": {
 724 |         "weather": {
 725 |             "command": "node",
 726 |             "args": [
 727 |                 "C:\\PATH\\TO\\PARENT\\FOLDER\\weather\\build\\index.js"
 728 |             ]
 729 |         }
 730 |     }
 731 | }
 732 | ```
 733 | </CodeGroup>
 734 | </Tab>
 735 | </Tabs>
 736 | 
 737 | This tells Claude for Desktop:
 738 | 1. There's an MCP server named "weather"
 739 | 2. Launch it by running `node /ABSOLUTE/PATH/TO/PARENT/FOLDER/weather/build/index.js`
 740 | 
 741 | Save the file, and restart **Claude for Desktop**.
 742 | </Tab>
 743 | <Tab title='Java'>
 744 | 
 745 | <Note>
 746 | This is a quickstart demo based on Spring AI MCP auto-configuration and boot starters. 
 747 | To learn how to create sync and async MCP Servers, manually, consult the [Java SDK Server](/sdk/java/mcp-server) documentation.
 748 | </Note>
 749 | 
 750 | 
 751 | Let's get started with building our weather server! 
 752 | [You can find the complete code for what we'll be building here.](https://github.com/spring-projects/spring-ai-examples/tree/main/model-context-protocol/weather/starter-stdio-server)
 753 | 
 754 | For more information, see the [MCP Server Boot Starter](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-server-boot-starter-docs.html) reference documentation.
 755 | For manual MCP Server implementation, refer to the [MCP Server Java SDK documentation](/sdk/java/mcp-server).
 756 | 
 757 | ### System requirements
 758 | 
 759 | - Java 17 or higher installed.
 760 | - [Spring Boot 3.3.x](https://docs.spring.io/spring-boot/installing.html) or higher
 761 | 
 762 | ### Set up your environment
 763 | 
 764 | Use the [Spring Initizer](https://start.spring.io/) to bootstrat the project.
 765 | 
 766 | You will need to add the following dependencies:
 767 | 
 768 | <Tabs>
 769 |   <Tab title="Maven">
 770 |   ```xml
 771 |   <dependencies>
 772 |         <dependency>
 773 |             <groupId>org.springframework.ai</groupId>
 774 |             <artifactId>spring-ai-mcp-server-spring-boot-starter</artifactId>
 775 |         </dependency>
 776 | 
 777 |         <dependency>
 778 |             <groupId>org.springframework</groupId>
 779 |             <artifactId>spring-web</artifactId>
 780 |         </dependency>
 781 |   </dependencies>
 782 |   ```
 783 |   </Tab>
 784 |   <Tab title="Gradle">
 785 |   ```groovy
 786 |   dependencies {
 787 |     implementation platform("org.springframework.ai:spring-ai-mcp-server-spring-boot-starter")
 788 |     implementation platform("org.springframework:spring-web")   
 789 |   }
 790 |   ```
 791 |   </Tab>
 792 | </Tabs>
 793 | 
 794 | Then configure your application by setting the applicaiton properties:
 795 | 
 796 | <CodeGroup>
 797 | 
 798 | ```bash application.properties
 799 | spring.main.bannerMode=off
 800 | logging.pattern.console=
 801 | ```
 802 | 
 803 | ```yaml application.yml
 804 | logging:
 805 |   pattern:
 806 |     console:
 807 | spring:
 808 |   main:
 809 |     banner-mode: off
 810 | ```
 811 | </CodeGroup>
 812 | 
 813 | The [Server Configuration Properties](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-server-boot-starter-docs.html#_configuration_properties) documents all available properties.
 814 | 
 815 | Now let's dive into building your server.
 816 | 
 817 | ## Building your server
 818 | 
 819 | ### Weather Service
 820 | 
 821 | Let's implement a [WeatheService.java](https://github.com/spring-projects/spring-ai-examples/blob/main/model-context-protocol/weather/starter-stdio-server/src/main/java/org/springframework/ai/mcp/sample/server/WeatherService.java) that uses a REST client to query the data from the National Weather Service API:
 822 | 
 823 | ```java
 824 | @Service
 825 | public class WeatherService {
 826 | 
 827 | 	private final RestClient restClient;
 828 | 
 829 | 	public WeatherService() {
 830 | 		this.restClient = RestClient.builder()
 831 | 			.baseUrl("https://api.weather.gov")
 832 | 			.defaultHeader("Accept", "application/geo+json")
 833 | 			.defaultHeader("User-Agent", "WeatherApiClient/1.0 (your@email.com)")
 834 | 			.build();
 835 | 	}
 836 | 
 837 |   @Tool(description = "Get weather forecast for a specific latitude/longitude")
 838 |   public String getWeatherForecastByLocation(
 839 |       double latitude,   // Latitude coordinate
 840 |       double longitude   // Longitude coordinate
 841 |   ) {
 842 |       // Returns detailed forecast including:
 843 |       // - Temperature and unit
 844 |       // - Wind speed and direction
 845 |       // - Detailed forecast description
 846 |   }
 847 | 	
 848 |   @Tool(description = "Get weather alerts for a US state")
 849 |   public String getAlerts(
 850 |       @ToolParam(description = "Two-letter US state code (e.g. CA, NY") String state)
 851 |   ) {
 852 |       // Returns active alerts including:
 853 |       // - Event type
 854 |       // - Affected area
 855 |       // - Severity
 856 |       // - Description
 857 |       // - Safety instructions
 858 |   }
 859 | 
 860 |   // ......
 861 | }
 862 | ```
 863 | 
 864 | The `@Service` annotation with auto-register the service in your applicaiton context.
 865 | The Spring AI `@Tool` annotation, making it easy to create and maintain MCP tools.
 866 | 
 867 | The auto-configuration will automatically register these tools with the MCP server. 
 868 | 
 869 | ### Create your Boot Applicaiton
 870 | 
 871 | ```java
 872 | @SpringBootApplication
 873 | public class McpServerApplication {
 874 | 
 875 | 	public static void main(String[] args) {
 876 | 		SpringApplication.run(McpServerApplication.class, args);
 877 | 	}
 878 | 
 879 | 	@Bean
 880 | 	public ToolCallbackProvider weatherTools(WeatherService weatherService) {
 881 | 		return  MethodToolCallbackProvider.builder().toolObjects(weatherService).build();
 882 | 	}
 883 | }
 884 | ```
 885 | 
 886 | Uses the the `MethodToolCallbackProvider` utils to convert the `@Tools` into actionalble callbackes used by the MCP server.
 887 | 
 888 | ### Running the server
 889 | 
 890 | Finally, let's build the server:
 891 | 
 892 | ```bash
 893 | ./mvnw clean install
 894 | ```
 895 | 
 896 | This will generate a `mcp-weather-stdio-server-0.0.1-SNAPSHOT.jar` file within the `target` folder.
 897 | 
 898 | Let's now test your server from an existing MCP host, Claude for Desktop.
 899 | 
 900 | ## Testing your server with Claude for Desktop
 901 | 
 902 | <Note>
 903 | Claude for Desktop is not yet available on Linux.
 904 | </Note>
 905 | 
 906 | First, make sure you have Claude for Desktop installed. 
 907 | [You can install the latest version here.](https://claude.ai/download) If you already have Claude for Desktop, **make sure it's updated to the latest version.**
 908 | 
 909 | We'll need to configure Claude for Desktop for whichever MCP servers you want to use. 
 910 | To do this, open your Claude for Desktop App configuration at `~/Library/Application Support/Claude/claude_desktop_config.json` in a text editor. 
 911 | Make sure to create the file if it doesn't exist.
 912 | 
 913 | For example, if you have [VS Code](https://code.visualstudio.com/) installed:
 914 | 
 915 | <Tabs>
 916 |   <Tab title="MacOS/Linux">
 917 |   ```bash
 918 |   code ~/Library/Application\ Support/Claude/claude_desktop_config.json
 919 |   ```
 920 |   </Tab>
 921 |   <Tab title="Windows">
 922 |   ```powershell
 923 |   code $env:AppData\Claude\claude_desktop_config.json
 924 |   ```
 925 |   </Tab>
 926 | </Tabs>
 927 | 
 928 | You'll then add your servers in the `mcpServers` key. 
 929 | The MCP UI elements will only show up in Claude for Desktop if at least one server is properly configured.
 930 | 
 931 | In this case, we'll add our single weather server like so:
 932 | 
 933 | <Tabs>
 934 |   <Tab title="MacOS/Linux">
 935 |   ```json java
 936 |   {
 937 |     "mcpServers": {
 938 |       "spring-ai-mcp-weather": {
 939 |         "command": "java",
 940 |         "args": [
 941 |           "-Dspring.ai.mcp.server.stdio=true",
 942 |           "-jar",
 943 |           "/ABSOLUTE/PATH/TO/PARENT/FOLDER/mcp-weather-stdio-server-0.0.1-SNAPSHOT.jar"
 944 |         ]
 945 |       }
 946 |     }
 947 |   }
 948 |   ```
 949 |   </Tab>
 950 | 
 951 |   <Tab title="Windows">
 952 |   ```json java
 953 |   {
 954 |     "mcpServers": {
 955 |       "spring-ai-mcp-weather": {
 956 |         "command": "java",
 957 |         "args": [
 958 |           "-Dspring.ai.mcp.server.transport=STDIO",
 959 |           "-jar",
 960 |           "C:\\ABSOLUTE\\PATH\\TO\\PARENT\\FOLDER\\weather\\mcp-weather-stdio-server-0.0.1-SNAPSHOT.jar"
 961 |         ]
 962 |       }
 963 |     }
 964 |   }
 965 |   ```
 966 |   </Tab>
 967 | </Tabs>
 968 | 
 969 | <Note>
 970 | Make sure you pass in the absolute path to your server.
 971 | </Note>
 972 | 
 973 | This tells Claude for Desktop:
 974 | 1. There's an MCP server named "my-weather-server"
 975 | 2. To launch it by running `java -jar /ABSOLUTE/PATH/TO/PARENT/FOLDER/mcp-weather-stdio-server-0.0.1-SNAPSHOT.jar`
 976 | 
 977 | Save the file, and restart **Claude for Desktop**.
 978 | 
 979 | ## Testing your server with Java client
 980 | 
 981 | ### Create a MCP Client manually
 982 | 
 983 | Use the `McpClient` to connect to the server:
 984 | 
 985 | ```java
 986 | var stdioParams = ServerParameters.builder("java")
 987 |   .args("-jar", "/ABSOLUTE/PATH/TO/PARENT/FOLDER/mcp-weather-stdio-server-0.0.1-SNAPSHOT.jar")
 988 |   .build();
 989 | 
 990 | var stdioTransport = new StdioClientTransport(stdioParams);
 991 | 
 992 | var mcpClient = McpClient.sync(stdioTransport).build();
 993 | 
 994 | mcpClient.initialize();
 995 | 
 996 | ListToolsResult toolsList = mcpClient.listTools();
 997 | 
 998 | CallToolResult weather = mcpClient.callTool(
 999 |   new CallToolRequest("getWeatherForecastByLocation",
1000 |       Map.of("latitude", "47.6062", "longitude", "-122.3321")));
1001 | 
1002 | CallToolResult alert = mcpClient.callTool(
1003 |   new CallToolRequest("getAlerts", Map.of("state", "NY")));
1004 | 
1005 | mcpClient.closeGracefully();
1006 | ```
1007 | 
1008 | ### Use MCP Client Boot Starter
1009 | 
1010 | Create a new boot starter applicaiton using the `spring-ai-mcp-client-spring-boot-starter` dependency:
1011 | 
1012 | ```xml
1013 | <dependency>
1014 |     <groupId>org.springframework.ai</groupId>
1015 |     <artifactId>spring-ai-mcp-client-spring-boot-starter</artifactId>
1016 | </dependency>
1017 | ```
1018 | 
1019 | and set the `spring.ai.mcp.client.stdio.servers-configuration` property to point to your `claude_desktop_config.json`.
1020 | You can re-use the existing Anthropic Destop configuration:
1021 | 
1022 | ```properties
1023 | spring.ai.mcp.client.stdio.servers-configuration=file:PATH/TO/claude_desktop_config.json
1024 | ```
1025 | 
1026 | When you start your client applicaiton, the auto-configuration will create, automatically MCP clients from the claude_desktop_config.json.
1027 | 
1028 | For more information, see the [MCP Client Boot Starters](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-server-boot-client-docs.html) reference documentation.
1029 | 
1030 | ## More Java MCP Server examples
1031 | 
1032 | The [starter-webflux-server](https://github.com/spring-projects/spring-ai-examples/tree/main/model-context-protocol/weather/starter-webflux-server) demonstrates how to create a MCP server using SSE transport. 
1033 | It showcases how to define and register MCP Tools, Resources, and Prompts, using the Spring Boot's auto-configuration capabilities.
1034 | 
1035 | </Tab>
1036 | 
1037 | <Tab title='Kotlin'>
1038 | Let's get started with building our weather server! [You can find the complete code for what we'll be building here.](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/samples/weather-stdio-server)
1039 | 
1040 | ### Prerequisite knowledge
1041 | 
1042 | This quickstart assumes you have familiarity with:
1043 | - Kotlin
1044 | - LLMs like Claude
1045 | 
1046 | ### System requirements
1047 | 
1048 | - Java 17 or higher installed.
1049 | 
1050 | ### Set up your environment
1051 | 
1052 | First, let's install `java` and `gradle` if you haven't already.
1053 | You can download `java` from [official Oracle JDK website](https://www.oracle.com/java/technologies/downloads/).
1054 | Verify your `java` installation:
1055 | ```bash
1056 | java --version
1057 | ```
1058 | 
1059 | Now, let's create and set up your project:
1060 | 
1061 | <CodeGroup>
1062 | ```bash MacOS/Linux
1063 | # Create a new directory for our project
1064 | mkdir weather
1065 | cd weather
1066 | 
1067 | # Initialize a new kotlin project
1068 | gradle init
1069 | ```
1070 | 
1071 | ```powershell Windows
1072 | # Create a new directory for our project
1073 | md weather
1074 | cd weather
1075 | 
1076 | # Initialize a new kotlin project
1077 | gradle init
1078 | ```
1079 | </CodeGroup>
1080 | 
1081 | After running `gradle init`, you will be presented with options for creating your project.
1082 | Select **Application** as the project type, **Kotlin** as the programming language, and **Java 17** as the Java version.
1083 | 
1084 | Alternatively, you can create a Kotlin application using the [IntelliJ IDEA project wizard](https://kotlinlang.org/docs/jvm-get-started.html).
1085 | 
1086 | After creating the project, add the following dependencies:
1087 | <CodeGroup>
1088 | ```kotlin build.gradle.kts
1089 | val mcpVersion = "0.3.0"
1090 | val slf4jVersion = "2.0.9"
1091 | val ktorVersion = "3.1.1"
1092 | 
1093 | dependencies {
1094 |     implementation("io.modelcontextprotocol:kotlin-sdk:$mcpVersion")
1095 |     implementation("org.slf4j:slf4j-nop:$slf4jVersion")
1096 |     implementation("io.ktor:ktor-client-content-negotiation:$ktorVersion")
1097 |     implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
1098 | }
1099 | ```
1100 | 
1101 | ```groovy build.gradle
1102 | def mcpVersion = '0.3.0'
1103 | def slf4jVersion = '2.0.9'
1104 | def ktorVersion = '3.1.1'
1105 | 
1106 | dependencies {
1107 |     implementation "io.modelcontextprotocol:kotlin-sdk:$mcpVersion"
1108 |     implementation "org.slf4j:slf4j-nop:$slf4jVersion"
1109 |     implementation "io.ktor:ktor-client-content-negotiation:$ktorVersion"
1110 |     implementation "io.ktor:ktor-serialization-kotlinx-json:$ktorVersion"
1111 | }
1112 | ```
1113 | </CodeGroup>
1114 | 
1115 | Also, add the following plugins to your build script:
1116 | <CodeGroup>
1117 | ```kotlin build.gradle.kts
1118 | plugins {
1119 |     kotlin("plugin.serialization") version "your_version_of_kotlin"
1120 |     id("com.github.johnrengelman.shadow") version "8.1.1"
1121 | }
1122 | ```
1123 | 
1124 | ```groovy build.gradle
1125 | plugins {
1126 |     id 'org.jetbrains.kotlin.plugin.serialization' version 'your_version_of_kotlin'
1127 |     id 'com.github.johnrengelman.shadow' version '8.1.1'
1128 | }
1129 | ```
1130 | </CodeGroup>
1131 | 
1132 | Now let’s dive into building your server.
1133 | 
1134 | ## Building your server
1135 | 
1136 | ### Setting up the instance
1137 | 
1138 | Add a server initialization function:
1139 | 
1140 | ```kotlin
1141 | // Main function to run the MCP server
1142 | fun `run mcp server`() {
1143 |     // Create the MCP Server instance with a basic implementation
1144 |     val server = Server(
1145 |         Implementation(
1146 |             name = "weather", // Tool name is "weather"
1147 |             version = "1.0.0" // Version of the implementation
1148 |         ),
1149 |         ServerOptions(
1150 |             capabilities = ServerCapabilities(tools = ServerCapabilities.Tools(listChanged = true))
1151 |         )
1152 |     )
1153 | 
1154 |     // Create a transport using standard IO for server communication
1155 |     val transport = StdioServerTransport(
1156 |         System.`in`.asInput(),
1157 |         System.out.asSink().buffered()
1158 |     )
1159 | 
1160 |     runBlocking {
1161 |         server.connect(transport)
1162 |         val done = Job()
1163 |         server.onCloseCallback = {
1164 |             done.complete()
1165 |         }
1166 |         done.join()
1167 |     }
1168 | }
1169 | ```
1170 | 
1171 | ### Weather API helper functions
1172 | 
1173 | Next, let's add functions and data classes for querying and converting responses from the National Weather Service API:
1174 | 
1175 | ```kotlin
1176 | // Extension function to fetch forecast information for given latitude and longitude
1177 | suspend fun HttpClient.getForecast(latitude: Double, longitude: Double): List<String> {
1178 |     val points = this.get("/points/$latitude,$longitude").body<Points>()
1179 |     val forecast = this.get(points.properties.forecast).body<Forecast>()
1180 |     return forecast.properties.periods.map { period ->
1181 |         """
1182 |             ${period.name}:
1183 |             Temperature: ${period.temperature} ${period.temperatureUnit}
1184 |             Wind: ${period.windSpeed} ${period.windDirection}
1185 |             Forecast: ${period.detailedForecast}
1186 |         """.trimIndent()
1187 |     }
1188 | }
1189 | 
1190 | // Extension function to fetch weather alerts for a given state
1191 | suspend fun HttpClient.getAlerts(state: String): List<String> {
1192 |     val alerts = this.get("/alerts/active/area/$state").body<Alert>()
1193 |     return alerts.features.map { feature ->
1194 |         """
1195 |             Event: ${feature.properties.event}
1196 |             Area: ${feature.properties.areaDesc}
1197 |             Severity: ${feature.properties.severity}
1198 |             Description: ${feature.properties.description}
1199 |             Instruction: ${feature.properties.instruction}
1200 |         """.trimIndent()
1201 |     }
1202 | }
1203 | 
1204 | @Serializable
1205 | data class Points(
1206 |     val properties: Properties
1207 | ) {
1208 |     @Serializable
1209 |     data class Properties(val forecast: String)
1210 | }
1211 | 
1212 | @Serializable
1213 | data class Forecast(
1214 |     val properties: Properties
1215 | ) {
1216 |     @Serializable
1217 |     data class Properties(val periods: List<Period>)
1218 | 
1219 |     @Serializable
1220 |     data class Period(
1221 |         val number: Int, val name: String, val startTime: String, val endTime: String,
1222 |         val isDaytime: Boolean, val temperature: Int, val temperatureUnit: String,
1223 |         val temperatureTrend: String, val probabilityOfPrecipitation: JsonObject,
1224 |         val windSpeed: String, val windDirection: String,
1225 |         val shortForecast: String, val detailedForecast: String,
1226 |     )
1227 | }
1228 | 
1229 | @Serializable
1230 | data class Alert(
1231 |     val features: List<Feature>
1232 | ) {
1233 |     @Serializable
1234 |     data class Feature(
1235 |         val properties: Properties
1236 |     )
1237 | 
1238 |     @Serializable
1239 |     data class Properties(
1240 |         val event: String, val areaDesc: String, val severity: String,
1241 |         val description: String, val instruction: String?,
1242 |     )
1243 | }
1244 | ```
1245 | 
1246 | ### Implementing tool execution
1247 | 
1248 | The tool execution handler is responsible for actually executing the logic of each tool. Let's add it:
1249 | 
1250 | ```kotlin
1251 | // Create an HTTP client with a default request configuration and JSON content negotiation
1252 | val httpClient = HttpClient {
1253 |     defaultRequest {
1254 |     url("https://api.weather.gov")
1255 |     headers {
1256 |         append("Accept", "application/geo+json")
1257 |         append("User-Agent", "WeatherApiClient/1.0")
1258 |     }
1259 |     contentType(ContentType.Application.Json)
1260 |     }
1261 |     // Install content negotiation plugin for JSON serialization/deserialization
1262 |     install(ContentNegotiation) { json(Json { ignoreUnknownKeys = true }) }
1263 | }
1264 | 
1265 | // Register a tool to fetch weather alerts by state
1266 | server.addTool(
1267 |     name = "get_alerts",
1268 |     description = """
1269 |         Get weather alerts for a US state. Input is Two-letter US state code (e.g. CA, NY)
1270 |     """.trimIndent(),
1271 |     inputSchema = Tool.Input(
1272 |         properties = JsonObject(
1273 |             mapOf(
1274 |                 "state" to JsonObject(
1275 |                     mapOf(
1276 |                         "type" to JsonPrimitive("string"),
1277 |                         "description" to JsonPrimitive("Two-letter US state code (e.g. CA, NY)")
1278 |                     )
1279 |                 ),
1280 |             )
1281 |         ),
1282 |         required = listOf("state")
1283 |     )
1284 | ) { request ->
1285 |     val state = request.arguments["state"]?.jsonPrimitive?.content
1286 |     if (state == null) {
1287 |         return@addTool CallToolResult(
1288 |             content = listOf(TextContent("The 'state' parameter is required."))
1289 |         )
1290 |     }
1291 | 
1292 |     val alerts = httpClient.getAlerts(state)
1293 | 
1294 |     CallToolResult(content = alerts.map { TextContent(it) })
1295 | }
1296 | 
1297 | // Register a tool to fetch weather forecast by latitude and longitude
1298 | server.addTool(
1299 |     name = "get_forecast",
1300 |     description = """
1301 |         Get weather forecast for a specific latitude/longitude
1302 |     """.trimIndent(),
1303 |     inputSchema = Tool.Input(
1304 |         properties = JsonObject(
1305 |             mapOf(
1306 |                 "latitude" to JsonObject(mapOf("type" to JsonPrimitive("number"))),
1307 |                 "longitude" to JsonObject(mapOf("type" to JsonPrimitive("number"))),
1308 |             )
1309 |         ),
1310 |         required = listOf("latitude", "longitude")
1311 |     )
1312 | ) { request ->
1313 |     val latitude = request.arguments["latitude"]?.jsonPrimitive?.doubleOrNull
1314 |     val longitude = request.arguments["longitude"]?.jsonPrimitive?.doubleOrNull
1315 |     if (latitude == null || longitude == null) {
1316 |         return@addTool CallToolResult(
1317 |             content = listOf(TextContent("The 'latitude' and 'longitude' parameters are required."))
1318 |         )
1319 |     }
1320 | 
1321 |     val forecast = httpClient.getForecast(latitude, longitude)
1322 | 
1323 |     CallToolResult(content = forecast.map { TextContent(it) })
1324 | }
1325 | ```
1326 | 
1327 | ### Running the server
1328 | 
1329 | Finally, implement the main function to run the server:
1330 | 
1331 | ```kotlin
1332 | fun main() = `run mcp server`()
1333 | ```
1334 | 
1335 | Make sure to run `./gradlew build` to build your server. This is a very important step in getting your server to connect.
1336 | 
1337 | Let's now test your server from an existing MCP host, Claude for Desktop.
1338 | 
1339 | ## Testing your server with Claude for Desktop
1340 | 
1341 | <Note>
1342 | Claude for Desktop is not yet available on Linux. Linux users can proceed to the [Building a client](/quickstart/client) tutorial to build an MCP client that connects to the server we just built.
1343 | </Note>
1344 | 
1345 | First, make sure you have Claude for Desktop installed. [You can install the latest version
1346 | here.](https://claude.ai/download) If you already have Claude for Desktop, **make sure it's updated to the latest version.**
1347 | 
1348 | We'll need to configure Claude for Desktop for whichever MCP servers you want to use.
1349 | To do this, open your Claude for Desktop App configuration at `~/Library/Application Support/Claude/claude_desktop_config.json` in a text editor.
1350 | Make sure to create the file if it doesn't exist.
1351 | 
1352 | For example, if you have [VS Code](https://code.visualstudio.com/) installed:
1353 | 
1354 | <CodeGroup>
1355 | ```bash MacOS/Linux
1356 | code ~/Library/Application\ Support/Claude/claude_desktop_config.json
1357 | ```
1358 | 
1359 | ```powershell Windows
1360 | code $env:AppData\Claude\claude_desktop_config.json
1361 | ```
1362 | </CodeGroup>
1363 | 
1364 | You'll then add your servers in the `mcpServers` key.
1365 | The MCP UI elements will only show up in Claude for Desktop if at least one server is properly configured.
1366 | 
1367 | In this case, we'll add our single weather server like so:
1368 | 
1369 | <CodeGroup>
1370 | ```json MacOS/Linux
1371 | {
1372 |     "mcpServers": {
1373 |         "weather": {
1374 |             "command": "java",
1375 |             "args": [
1376 |                 "-jar",
1377 |                 "/ABSOLUTE/PATH/TO/PARENT/FOLDER/weather/build/libs/weather-0.1.0-all.jar"
1378 |             ]
1379 |         }
1380 |     }
1381 | }
1382 | ```
1383 | 
1384 | ```json Windows
1385 | {
1386 |     "mcpServers": {
1387 |         "weather": {
1388 |             "command": "java",
1389 |             "args": [
1390 |                 "-jar",
1391 |                 "C:\\PATH\\TO\\PARENT\\FOLDER\\weather\\build\\libs\\weather-0.1.0-all.jar"
1392 |             ]
1393 |         }
1394 |     }
1395 | }
1396 | ```
1397 | </CodeGroup>
1398 | 
1399 | This tells Claude for Desktop:
1400 | 1. There's an MCP server named "weather"
1401 | 2. Launch it by running `java -jar /ABSOLUTE/PATH/TO/PARENT/FOLDER/weather/build/libs/weather-0.1.0-all.jar`
1402 | 
1403 | Save the file, and restart **Claude for Desktop**.
1404 | 
1405 | </Tab>
1406 | </Tabs>
1407 | 
1408 | ### Test with commands
1409 | 
1410 | Let's make sure Claude for Desktop is picking up the two tools we've exposed in our `weather` server. You can do this by looking for the hammer <img src="/images/claude-desktop-mcp-hammer-icon.svg" style={{display: 'inline', margin: 0, height: '1.3em'}} /> icon:
1411 | 
1412 | <Frame>
1413 |   <img src="/images/visual-indicator-mcp-tools.png" />
1414 | </Frame>
1415 | 
1416 | After clicking on the hammer icon, you should see two tools listed:
1417 | 
1418 | <Frame>
1419 |   <img src="/images/available-mcp-tools.png" />
1420 | </Frame>
1421 | 
1422 | If your server isn't being picked up by Claude for Desktop, proceed to the [Troubleshooting](#troubleshooting) section for debugging tips.
1423 | 
1424 | If the hammer icon has shown up, you can now test your server by running the following commands in Claude for Desktop:
1425 | 
1426 | - What's the weather in Sacramento?
1427 | - What are the active weather alerts in Texas?
1428 | 
1429 | <Frame>
1430 |   <img src="/images/current-weather.png" />
1431 | </Frame>
1432 | <Frame>
1433 |   <img src="/images/weather-alerts.png" />
1434 | </Frame>
1435 | 
1436 | <Note>
1437 | Since this is the US National Weather service, the queries will only work for US locations.
1438 | </Note>
1439 | 
1440 | ## What's happening under the hood
1441 | 
1442 | When you ask a question:
1443 | 
1444 | 1. The client sends your question to Claude
1445 | 2. Claude analyzes the available tools and decides which one(s) to use
1446 | 3. The client executes the chosen tool(s) through the MCP server
1447 | 4. The results are sent back to Claude
1448 | 5. Claude formulates a natural language response
1449 | 6. The response is displayed to you!
1450 | 
1451 | ## Troubleshooting
1452 | 
1453 | <AccordionGroup>
1454 | <Accordion title="Claude for Desktop Integration Issues">
1455 | **Getting logs from Claude for Desktop**
1456 | 
1457 | Claude.app logging related to MCP is written to log files in `~/Library/Logs/Claude`:
1458 | 
1459 | - `mcp.log` will contain general logging about MCP connections and connection failures.
1460 | - Files named `mcp-server-SERVERNAME.log` will contain error (stderr) logging from the named server.
1461 | 
1462 | You can run the following command to list recent logs and follow along with any new ones:
1463 | ```bash
1464 | # Check Claude's logs for errors
1465 | tail -n 20 -f ~/Library/Logs/Claude/mcp*.log
1466 | ```
1467 | 
1468 | **Server not showing up in Claude**
1469 | 
1470 | 1. Check your `claude_desktop_config.json` file syntax
1471 | 2. Make sure the path to your project is absolute and not relative
1472 | 3. Restart Claude for Desktop completely
1473 | 
1474 | **Tool calls failing silently**
1475 | 
1476 | If Claude attempts to use the tools but they fail:
1477 | 
1478 | 1. Check Claude's logs for errors
1479 | 2. Verify your server builds and runs without errors
1480 | 3. Try restarting Claude for Desktop
1481 | 
1482 | **None of this is working. What do I do?**
1483 | 
1484 | Please refer to our [debugging guide](/docs/tools/debugging) for better debugging tools and more detailed guidance.
1485 | </Accordion>
1486 | <Accordion title="Weather API Issues">
1487 | **Error: Failed to retrieve grid point data**
1488 | 
1489 | This usually means either:
1490 | 1. The coordinates are outside the US
1491 | 2. The NWS API is having issues
1492 | 3. You're being rate limited
1493 | 
1494 | Fix:
1495 | 
1496 | - Verify you're using US coordinates
1497 | - Add a small delay between requests
1498 | - Check the NWS API status page
1499 | 
1500 | **Error: No active alerts for [STATE]**
1501 | 
1502 | This isn't an error - it just means there are no current weather alerts for that state. Try a different state or check during severe weather.
1503 | </Accordion>
1504 | 
1505 | </AccordionGroup>
1506 | 
1507 | <Note>
1508 | For more advanced troubleshooting, check out our guide on [Debugging MCP](/docs/tools/debugging)
1509 | </Note>
1510 | 
1511 | ## Next steps
1512 | 
1513 | <CardGroup cols={2}>
1514 |   <Card
1515 |     title="Building a client"
1516 |     icon="outlet"
1517 |     href="/quickstart/client"
1518 |   >
1519 |     Learn how to build your own MCP client that can connect to your server
1520 |   </Card>
1521 |   <Card
1522 |     title="Example servers"
1523 |     icon="grid"
1524 |     href="/examples"
1525 |   >
1526 |     Check out our gallery of official MCP servers and implementations
1527 |   </Card>
1528 |   <Card
1529 |     title="Debugging Guide"
1530 |     icon="bug"
1531 |     href="/docs/tools/debugging"
1532 |   >
1533 |     Learn how to effectively debug MCP servers and integrations
1534 |   </Card>
1535 |   <Card
1536 |     title="Building MCP with LLMs"
1537 |     icon="comments"
1538 |     href="/tutorials/building-mcp-with-llms"
1539 |   >
1540 |     Learn how to use LLMs like Claude to speed up your MCP development
1541 |   </Card>
1542 | </CardGroup>
1543 | 


--------------------------------------------------------------------------------
/quickstart/user.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: "For Claude Desktop Users"
  3 | description: "Get started using pre-built servers in Claude for Desktop."
  4 | ---
  5 | 
  6 | In this tutorial, you will extend [Claude for Desktop](https://claude.ai/download) so that it can read from your computer's file system, write new files, move files, and even search files.
  7 | 
  8 | <Frame>
  9 |   <img src="/images/quickstart-filesystem.png" />
 10 | </Frame>
 11 | 
 12 | Don't worry — it will ask you for your permission before executing these actions!
 13 | 
 14 | ## 1. Download Claude for Desktop
 15 | 
 16 | Start by downloading [Claude for Desktop](https://claude.ai/download), choosing either macOS or Windows. (Linux is not yet supported for Claude for Desktop.)
 17 | 
 18 | Follow the installation instructions.
 19 | 
 20 | If you already have Claude for Desktop, make sure it's on the latest version by clicking on the Claude menu on your computer and selecting "Check for Updates..."
 21 | 
 22 | <Accordion title="Why Claude for Desktop and not Claude.ai?">
 23 |   Because servers are locally run, MCP currently only supports desktop hosts. Remote hosts are in active development.
 24 | </Accordion>
 25 | 
 26 | ## 2. Add the Filesystem MCP Server
 27 | 
 28 | To add this filesystem functionality, we will be installing a pre-built [Filesystem MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) to Claude for Desktop. This is one of dozens of [servers](https://github.com/modelcontextprotocol/servers/tree/main) created by Anthropic and the community.
 29 | 
 30 | Get started by opening up the Claude menu on your computer and select "Settings..." Please note that these are not the Claude Account Settings found in the app window itself.
 31 | 
 32 | This is what it should look like on a Mac:
 33 | <Frame style={{ textAlign: 'center' }}>
 34 |   <img src="/images/quickstart-menu.png" width="400" />
 35 | </Frame>
 36 | 
 37 | Click on "Developer" in the lefthand bar of the Settings pane, and then click on "Edit Config":
 38 | <Frame>
 39 |   <img src="/images/quickstart-developer.png" />
 40 | </Frame>
 41 | 
 42 | This will create a configuration file at:
 43 | - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
 44 | - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
 45 | 
 46 | if you don't already have one, and will display the file in your file system.
 47 | 
 48 | Open up the configuration file in any text editor. Replace the file contents with this:
 49 | <Tabs>
 50 | <Tab title="MacOS/Linux">
 51 | ```json
 52 | {
 53 |   "mcpServers": {
 54 |     "filesystem": {
 55 |       "command": "npx",
 56 |       "args": [
 57 |         "-y",
 58 |         "@modelcontextprotocol/server-filesystem",
 59 |         "/Users/username/Desktop",
 60 |         "/Users/username/Downloads"
 61 |       ]
 62 |     }
 63 |   }
 64 | }
 65 | ```
 66 | </Tab>
 67 | <Tab title="Windows">
 68 | ```json
 69 | {
 70 |   "mcpServers": {
 71 |     "filesystem": {
 72 |       "command": "npx",
 73 |       "args": [
 74 |         "-y",
 75 |         "@modelcontextprotocol/server-filesystem",
 76 |         "C:\\Users\\username\\Desktop",
 77 |         "C:\\Users\\username\\Downloads"
 78 |       ]
 79 |     }
 80 |   }
 81 | }
 82 | ```
 83 | </Tab>
 84 | </Tabs>
 85 | 
 86 | Make sure to replace `username` with your computer's username. The paths should point to valid directories that you want Claude to be able to access and modify. It's set up to work for Desktop and Downloads, but you can add more paths as well.
 87 | 
 88 | You will also need [Node.js](https://nodejs.org) on your computer for this to run properly. To verify you have Node installed, open the command line on your computer.
 89 | - On macOS, open the Terminal from your Applications folder
 90 | - On Windows, press Windows + R, type "cmd", and press Enter
 91 | 
 92 | Once in the command line, verify you have Node installed by entering in the following command:
 93 | ```bash
 94 | node --version
 95 | ```
 96 | If you get an error saying "command not found" or "node is not recognized", download Node from [nodejs.org](https://nodejs.org/).
 97 | 
 98 | <Tip>
 99 | **How does the configuration file work?**
100 | 
101 | This configuration file tells Claude for Desktop which MCP servers to start up every time you start the application. In this case, we have added one server called "filesystem" that will use the Node `npx` command to install and run `@modelcontextprotocol/server-filesystem`. This server, described [here](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem), will let you access your file system in Claude for Desktop.
102 | </Tip>
103 | 
104 | <Warning>
105 | **Command Privileges**
106 | 
107 | Claude for Desktop will run the commands in the configuration file with the permissions of your user account, and access to your local files. Only add commands if you understand and trust the source.
108 | </Warning>
109 | 
110 | ## 3. Restart Claude
111 | 
112 | After updating your configuration file, you need to restart Claude for Desktop.
113 | 
114 | Upon restarting, you should see a hammer <img src="/images/claude-desktop-mcp-hammer-icon.svg" style={{display: 'inline', margin: 0, height: '1.3em'}} /> icon in the bottom right corner of the input box:
115 | 
116 | <Frame>
117 |   <img src="/images/quickstart-hammer.png" />
118 | </Frame>
119 | 
120 | After clicking on the hammer icon, you should see the tools that come with the Filesystem MCP Server:
121 | 
122 | <Frame style={{ textAlign: 'center' }}>
123 |   <img src="/images/quickstart-tools.png" width="400" />
124 | </Frame>
125 | 
126 | If your server isn't being picked up by Claude for Desktop, proceed to the [Troubleshooting](#troubleshooting) section for debugging tips.
127 | 
128 | ## 4. Try it out!
129 | 
130 | You can now talk to Claude and ask it about your filesystem. It should know when to call the relevant tools.
131 | 
132 | Things you might try asking Claude:
133 | - Can you write a poem and save it to my desktop?
134 | - What are some work-related files in my downloads folder?
135 | - Can you take all the images on my desktop and move them to a new folder called "Images"?
136 | 
137 | As needed, Claude will call the relevant tools and seek your approval before taking an action:
138 | <Frame style={{ textAlign: 'center' }}>
139 |   <img src="/images/quickstart-approve.png" width="500" />
140 | </Frame>
141 | 
142 | ## Troubleshooting
143 | 
144 | <AccordionGroup>
145 | <Accordion title="Server not showing up in Claude / hammer icon missing">
146 |   1. Restart Claude for Desktop completely
147 |   2. Check your `claude_desktop_config.json` file syntax
148 |   3. Make sure the file paths included in `claude_desktop_config.json` are valid and that they are absolute and not relative
149 |   4. Look at [logs](#getting-logs-from-claude-for-desktop) to see why the server is not connecting
150 |   5. In your command line, try manually running the server (replacing `username` as you did in `claude_desktop_config.json`) to see if you get any errors:
151 | <Tabs>
152 | <Tab title="MacOS/Linux">
153 | ```bash
154 | npx -y @modelcontextprotocol/server-filesystem /Users/username/Desktop /Users/username/Downloads
155 | ```
156 | </Tab>
157 | <Tab title="Windows">
158 | ```bash
159 | npx -y @modelcontextprotocol/server-filesystem C:\Users\username\Desktop C:\Users\username\Downloads
160 | ```
161 | </Tab>
162 | </Tabs>
163 | </Accordion>
164 | <Accordion title="Getting logs from Claude for Desktop">
165 |   Claude.app logging related to MCP is written to log files in:
166 |   - macOS: `~/Library/Logs/Claude`
167 |   - Windows: `%APPDATA%\Claude\logs`
168 | 
169 |   - `mcp.log` will contain general logging about MCP connections and connection failures.
170 |   - Files named `mcp-server-SERVERNAME.log` will contain error (stderr) logging from the named server.
171 | 
172 |   You can run the following command to list recent logs and follow along with any new ones (on Windows, it will only show recent logs):
173 | <Tabs>
174 | <Tab title="MacOS/Linux">
175 | ```bash
176 | # Check Claude's logs for errors
177 | tail -n 20 -f ~/Library/Logs/Claude/mcp*.log
178 | ```
179 | </Tab>
180 | <Tab title="Windows">
181 | ```bash
182 | type "%APPDATA%\Claude\logs\mcp*.log"
183 | ```
184 | </Tab>
185 | </Tabs>
186 | </Accordion>
187 | <Accordion title="Tool calls failing silently">
188 |   If Claude attempts to use the tools but they fail:
189 | 
190 |   1. Check Claude's logs for errors
191 |   2. Verify your server builds and runs without errors
192 |   3. Try restarting Claude for Desktop
193 | </Accordion>
194 | <Accordion title="None of this is working. What do I do?">
195 |   Please refer to our [debugging guide](/docs/tools/debugging) for better debugging tools and more detailed guidance.
196 | </Accordion>
197 | <Accordion title="ENOENT error and `${APPDATA}` in paths on Windows">
198 | If your configured server fails to load, and you see within its logs an error referring to `${APPDATA}` within a path, you may need to add the expanded value of `%APPDATA%` to your `env` key in `claude_desktop_config.json`:
199 | 
200 | ```json
201 | {
202 |   "brave-search": {
203 |     "command": "npx",
204 |     "args": ["-y", "@modelcontextprotocol/server-brave-search"],
205 |     "env": {
206 |       "APPDATA": "C:\\Users\\user\\AppData\\Roaming\\",
207 |       "BRAVE_API_KEY": "..."
208 |     }
209 |   }
210 | }
211 | ```
212 | 
213 | With this change in place, launch Claude Desktop once again.
214 | 
215 | <Warning>
216 | **NPM should be installed globally**
217 | 
218 | The `npx` command may continue to fail if you have not installed NPM globally. If NPM is already installed globally, you will find `%APPDATA%\npm` exists on your system. If not, you can install NPM globally by running the following command:
219 | 
220 | ```bash
221 | npm install -g npm
222 | ```
223 | </Warning>
224 | 
225 | </Accordion>
226 | </AccordionGroup>
227 | 
228 | ## Next steps
229 | <CardGroup cols={2}>
230 |   <Card
231 |     title="Explore other servers"
232 |     icon="grid"
233 |     href="/examples"
234 |   >
235 |     Check out our gallery of official MCP servers and implementations
236 |   </Card>
237 |   <Card
238 |     title="Build your own server"
239 |     icon="code"
240 |     href="/quickstart/server"
241 |   >
242 |     Now build your own custom server to use in Claude for Desktop and other clients
243 |   </Card>
244 | </CardGroup>
245 | 


--------------------------------------------------------------------------------
/sdk/java/mcp-client.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: MCP Client
  3 | description: Learn how to use the Model Context Protocol (MCP) client to interact with MCP servers
  4 | ---
  5 | 
  6 | # Model Context Protocol Client
  7 | 
  8 | The MCP Client is a key component in the Model Context Protocol (MCP) architecture, responsible for establishing and managing connections with MCP servers. It implements the client-side of the protocol, handling:
  9 | 
 10 | - Protocol version negotiation to ensure compatibility with servers
 11 | - Capability negotiation to determine available features
 12 | - Message transport and JSON-RPC communication
 13 | - Tool discovery and execution
 14 | - Resource access and management
 15 | - Prompt system interactions
 16 | - Optional features like roots management and sampling support
 17 | 
 18 | The client provides both synchronous and asynchronous APIs for flexibility in different application contexts.
 19 | 
 20 | <Tabs>
 21 |   <Tab title="Sync API">
 22 | ```java
 23 | // Create a sync client with custom configuration
 24 | McpSyncClient client = McpClient.sync(transport)
 25 |     .requestTimeout(Duration.ofSeconds(10))
 26 |     .capabilities(ClientCapabilities.builder()
 27 |         .roots(true)      // Enable roots capability
 28 |         .sampling()       // Enable sampling capability
 29 |         .build())
 30 |     .sampling(request -> new CreateMessageResult(response))
 31 |     .build();
 32 | 
 33 | // Initialize connection
 34 | client.initialize();
 35 | 
 36 | // List available tools
 37 | ListToolsResult tools = client.listTools();
 38 | 
 39 | // Call a tool
 40 | CallToolResult result = client.callTool(
 41 |     new CallToolRequest("calculator", 
 42 |         Map.of("operation", "add", "a", 2, "b", 3))
 43 | );
 44 | 
 45 | // List and read resources
 46 | ListResourcesResult resources = client.listResources();
 47 | ReadResourceResult resource = client.readResource(
 48 |     new ReadResourceRequest("resource://uri")
 49 | );
 50 | 
 51 | // List and use prompts
 52 | ListPromptsResult prompts = client.listPrompts();
 53 | GetPromptResult prompt = client.getPrompt(
 54 |     new GetPromptRequest("greeting", Map.of("name", "Spring"))
 55 | );
 56 | 
 57 | // Add/remove roots
 58 | client.addRoot(new Root("file:///path", "description"));
 59 | client.removeRoot("file:///path");
 60 | 
 61 | // Close client
 62 | client.closeGracefully();
 63 | ```
 64 |   </Tab>
 65 | 
 66 |   <Tab title="Async API">
 67 | ```java
 68 | // Create an async client with custom configuration
 69 | McpAsyncClient client = McpClient.async(transport)
 70 |     .requestTimeout(Duration.ofSeconds(10))
 71 |     .capabilities(ClientCapabilities.builder()
 72 |         .roots(true)      // Enable roots capability
 73 |         .sampling()       // Enable sampling capability
 74 |         .build())
 75 |     .sampling(request -> Mono.just(new CreateMessageResult(response)))
 76 |     .toolsChangeConsumer(tools -> Mono.fromRunnable(() -> {
 77 |         logger.info("Tools updated: {}", tools);
 78 |     }))
 79 |     .resourcesChangeConsumer(resources -> Mono.fromRunnable(() -> {
 80 |         logger.info("Resources updated: {}", resources);
 81 |     }))
 82 |     .promptsChangeConsumer(prompts -> Mono.fromRunnable(() -> {
 83 |         logger.info("Prompts updated: {}", prompts);
 84 |     }))
 85 |     .build();
 86 | 
 87 | // Initialize connection and use features
 88 | client.initialize()
 89 |     .flatMap(initResult -> client.listTools())
 90 |     .flatMap(tools -> {
 91 |         return client.callTool(new CallToolRequest(
 92 |             "calculator", 
 93 |             Map.of("operation", "add", "a", 2, "b", 3)
 94 |         ));
 95 |     })
 96 |     .flatMap(result -> {
 97 |         return client.listResources()
 98 |             .flatMap(resources -> 
 99 |                 client.readResource(new ReadResourceRequest("resource://uri"))
100 |             );
101 |     })
102 |     .flatMap(resource -> {
103 |         return client.listPrompts()
104 |             .flatMap(prompts ->
105 |                 client.getPrompt(new GetPromptRequest(
106 |                     "greeting", 
107 |                     Map.of("name", "Spring")
108 |                 ))
109 |             );
110 |     })
111 |     .flatMap(prompt -> {
112 |         return client.addRoot(new Root("file:///path", "description"))
113 |             .then(client.removeRoot("file:///path"));            
114 |     })
115 |     .doFinally(signalType -> {
116 |         client.closeGracefully().subscribe();
117 |     })
118 |     .subscribe();
119 | ```
120 |   </Tab>
121 | </Tabs>
122 | 
123 | ## Client Transport
124 | 
125 | The transport layer handles the communication between MCP clients and servers, providing different implementations for various use cases. The client transport manages message serialization, connection establishment, and protocol-specific communication patterns.
126 | 
127 | <Tabs>
128 |     <Tab title="STDIO">
129 |         Creates transport for in-process based communication
130 |         ```java
131 |         ServerParameters params = ServerParameters.builder("npx")
132 |             .args("-y", "@modelcontextprotocol/server-everything", "dir")
133 |             .build();
134 |         McpTransport transport = new StdioClientTransport(params);
135 |         ```
136 |     </Tab>
137 |     <Tab title="SSE (HttpClient)">
138 |         Creates a framework agnostic (pure Java API) SSE client transport. Included in the core mcp module.
139 |         ```java
140 |         McpTransport transport = new HttpClientSseClientTransport("http://your-mcp-server");
141 |         ```
142 |     </Tab>
143 |     <Tab title="SSE (WebFlux)">
144 |         Creates WebFlux-based SSE client transport. Requires the mcp-webflux-sse-transport dependency.
145 |         ```java
146 |         WebClient.Builder webClientBuilder = WebClient.builder()
147 |             .baseUrl("http://your-mcp-server");
148 |         McpTransport transport = new WebFluxSseClientTransport(webClientBuilder);
149 |         ```
150 |     </Tab>
151 | </Tabs>
152 | 
153 | ## Client Capabilities
154 | 
155 | The client can be configured with various capabilities:
156 | 
157 | ```java
158 | var capabilities = ClientCapabilities.builder()
159 |     .roots(true)      // Enable filesystem roots support with list changes notifications
160 |     .sampling()       // Enable LLM sampling support
161 |     .build();
162 | ```
163 | 
164 | ### Roots Support
165 | 
166 | Roots define the boundaries of where servers can operate within the filesystem:
167 | 
168 | ```java
169 | // Add a root dynamically
170 | client.addRoot(new Root("file:///path", "description"));
171 | 
172 | // Remove a root
173 | client.removeRoot("file:///path");
174 | 
175 | // Notify server of roots changes
176 | client.rootsListChangedNotification();
177 | ```
178 | 
179 | The roots capability allows servers to:
180 | 
181 | - Request the list of accessible filesystem roots
182 | - Receive notifications when the roots list changes
183 | - Understand which directories and files they have access to
184 | 
185 | 
186 | ### Sampling Support
187 | 
188 | Sampling enables servers to request LLM interactions ("completions" or "generations") through the client:
189 | 
190 | ```java
191 | // Configure sampling handler
192 | Function<CreateMessageRequest, CreateMessageResult> samplingHandler = request -> {
193 |     // Sampling implementation that interfaces with LLM
194 |     return new CreateMessageResult(response);
195 | };
196 | 
197 | // Create client with sampling support
198 | var client = McpClient.sync(transport)
199 |     .capabilities(ClientCapabilities.builder()
200 |         .sampling()
201 |         .build())
202 |     .sampling(samplingHandler)
203 |     .build();
204 | ```
205 | 
206 | This capability allows:
207 | - Servers to leverage AI capabilities without requiring API keys
208 | - Clients to maintain control over model access and permissions
209 | - Support for both text and image-based interactions
210 | - Optional inclusion of MCP server context in prompts
211 | 
212 | 
213 | ## Using MCP Clients
214 | 
215 | ### Tool Execution
216 | 
217 | Tools are server-side functions that clients can discover and execute. The MCP client provides methods to list available tools and execute them with specific parameters. Each tool has a unique name and accepts a map of parameters.
218 | 
219 | <Tabs>
220 |   <Tab title="Sync API">
221 | ```java
222 | // List available tools and their names
223 | var tools = client.listTools();
224 | tools.forEach(tool -> System.out.println(tool.getName()));
225 | 
226 | // Execute a tool with parameters
227 | var result = client.callTool("calculator", Map.of(
228 |     "operation", "add",
229 |     "a", 1,
230 |     "b", 2
231 | ));
232 | ```
233 |   </Tab>
234 | 
235 |   <Tab title="Async API">
236 | ```java
237 | // List available tools asynchronously
238 | client.listTools()
239 |     .doOnNext(tools -> tools.forEach(tool -> 
240 |         System.out.println(tool.getName())))
241 |     .subscribe();
242 | 
243 | // Execute a tool asynchronously
244 | client.callTool("calculator", Map.of(
245 |         "operation", "add",
246 |         "a", 1,
247 |         "b", 2
248 |     ))
249 |     .subscribe();
250 | ```
251 |   </Tab>
252 | </Tabs>
253 | 
254 | ### Resource Access
255 | 
256 | Resources represent server-side data sources that clients can access using URI templates. The MCP client provides methods to discover available resources and retrieve their contents through a standardized interface.
257 | 
258 | <Tabs>
259 |   <Tab title="Sync API">
260 | ```java
261 | // List available resources and their names
262 | var resources = client.listResources();
263 | resources.forEach(resource -> System.out.println(resource.getName()));
264 | 
265 | // Retrieve resource content using a URI template
266 | var content = client.getResource("file", Map.of(
267 |     "path", "/path/to/file.txt"
268 | ));
269 | ```
270 |   </Tab>
271 | 
272 |   <Tab title="Async API">
273 | ```java
274 | // List available resources asynchronously
275 | client.listResources()
276 |     .doOnNext(resources -> resources.forEach(resource -> 
277 |         System.out.println(resource.getName())))
278 |     .subscribe();
279 | 
280 | // Retrieve resource content asynchronously
281 | client.getResource("file", Map.of(
282 |         "path", "/path/to/file.txt"
283 |     ))
284 |     .subscribe();
285 | ```
286 |   </Tab>
287 | </Tabs>
288 | 
289 | ### Prompt System
290 | 
291 | The prompt system enables interaction with server-side prompt templates. These templates can be discovered and executed with custom parameters, allowing for dynamic text generation based on predefined patterns.
292 | 
293 | <Tabs>
294 |   <Tab title="Sync API">
295 | ```java
296 | // List available prompt templates
297 | var prompts = client.listPrompts();
298 | prompts.forEach(prompt -> System.out.println(prompt.getName()));
299 | 
300 | // Execute a prompt template with parameters
301 | var response = client.executePrompt("echo", Map.of(
302 |     "text", "Hello, World!"
303 | ));
304 | ```
305 |   </Tab>
306 | 
307 |   <Tab title="Async API">
308 | ```java
309 | // List available prompt templates asynchronously
310 | client.listPrompts()
311 |     .doOnNext(prompts -> prompts.forEach(prompt -> 
312 |         System.out.println(prompt.getName())))
313 |     .subscribe();
314 | 
315 | // Execute a prompt template asynchronously
316 | client.executePrompt("echo", Map.of(
317 |         "text", "Hello, World!"
318 |     ))
319 |     .subscribe();
320 | ```
321 |   </Tab>
322 | </Tabs>
323 | 


--------------------------------------------------------------------------------
/sdk/java/mcp-overview.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: Overview
  3 | description: Introduction to the Model Context Protocol (MCP) Java SDK
  4 | ---
  5 | 
  6 | Java SDK for the [Model Context Protocol](https://modelcontextprotocol.org/docs/concepts/architecture)
  7 | enables standardized integration between AI models and tools.
  8 | 
  9 | ## Features
 10 | 
 11 | - MCP Client and MCP Server implementations supporting:
 12 |   - Protocol [version compatibility negotiation](https://spec.modelcontextprotocol.io/specification/2024-11-05/basic/lifecycle/#initialization)
 13 |   - [Tool](https://spec.modelcontextprotocol.io/specification/2024-11-05/server/tools/) discovery, execution, list change notifications
 14 |   - [Resource](https://spec.modelcontextprotocol.io/specification/2024-11-05/server/resources/) management with URI templates
 15 |   - [Roots](https://spec.modelcontextprotocol.io/specification/2024-11-05/client/roots/) list management and notifications
 16 |   - [Prompt](https://spec.modelcontextprotocol.io/specification/2024-11-05/server/prompts/) handling and management
 17 |   - [Sampling](https://spec.modelcontextprotocol.io/specification/2024-11-05/client/sampling/) support for AI model interactions
 18 | - Multiple transport implementations:
 19 |   - Default transports:
 20 |     - Stdio-based transport for process-based communication
 21 |     - Java HttpClient-based SSE client transport for HTTP SSE Client-side streaming
 22 |     - Servlet-based SSE server transport for HTTP SSE Server streaming
 23 |   - Spring-based transports:
 24 |     - WebFlux SSE client and server transports for reactive HTTP streaming
 25 |     - WebMVC SSE transport for servlet-based HTTP streaming
 26 | - Supports Synchronous and Asynchronous programming paradigms
 27 | 
 28 | ## Architecture
 29 | 
 30 | The SDK follows a layered architecture with clear separation of concerns:
 31 | 
 32 | ![MCP Stack Architecture](/images/java/mcp-stack.svg)
 33 | 
 34 | - **Client/Server Layer (McpClient/McpServer)**: Both use McpSession for sync/async operations,
 35 | with McpClient handling client-side protocol operations and McpServer managing server-side protocol operations.
 36 | - **Session Layer (McpSession)**: Manages communication patterns and state using DefaultMcpSession implementation.
 37 | - **Transport Layer (McpTransport)**: Handles JSON-RPC message serialization/deserialization via:
 38 |   - StdioTransport (stdin/stdout) in the core module
 39 |   - HTTP SSE transports in dedicated transport modules (Java HttpClient, Spring WebFlux, Spring WebMVC)
 40 | 
 41 | 
 42 | The MCP Client is a key component in the Model Context Protocol (MCP) architecture, responsible for establishing and managing connections with MCP servers. 
 43 | It implements the client-side of the protocol.
 44 | 
 45 | ![Java MCP Client Architecture](/images/java/java-mcp-client-architecture.jpg)
 46 | 
 47 | The MCP Server is a foundational component in the Model Context Protocol (MCP) architecture that provides tools, resources, and capabilities to clients. 
 48 | It implements the server-side of the protocol.
 49 | 
 50 | ![Java MCP Server Architecture](/images/java/java-mcp-server-architecture.jpg)
 51 | 
 52 | Key Interactions:
 53 | 
 54 | - **Client/Server Initialization**: Transport setup, protocol compatibility check, capability negotiation, and implementation details exchange.
 55 | - **Message Flow**: JSON-RPC message handling with validation, type-safe response processing, and error handling.
 56 | - **Resource Management**: Resource discovery, URI template-based access, subscription system, and content retrieval.
 57 | 
 58 | ## Dependencies
 59 | 
 60 | Add the following Maven dependency to your project:
 61 | 
 62 | <Tabs>
 63 |   <Tab title="Maven">
 64 | The core MCP functionality:
 65 | 
 66 | ```xml
 67 | <dependency>
 68 |     <groupId>io.modelcontextprotocol.sdk</groupId>
 69 |     <artifactId>mcp</artifactId>
 70 | </dependency>
 71 | ```
 72 | 
 73 | For HTTP SSE transport implementations, add one of the following dependencies:
 74 | 
 75 | ```xml
 76 | <!-- Spring WebFlux-based SSE client and server transport -->
 77 | <dependency>
 78 |     <groupId>io.modelcontextprotocol.sdk</groupId>
 79 |     <artifactId>mcp-spring-webflux</artifactId>
 80 | </dependency>
 81 | 
 82 | <!-- Spring WebMVC-based SSE server transport -->
 83 | <dependency>
 84 |     <groupId>io.modelcontextprotocol.sdk</groupId>
 85 |     <artifactId>mcp-spring-webmvc</artifactId>
 86 | </dependency>
 87 | ```
 88 |   </Tab>
 89 |     <Tab title="Gradle">
 90 |     The core MCP functionality:
 91 | 
 92 |   ```groovy
 93 |   dependencies {
 94 |     implementation platform("io.modelcontextprotocol.sdk:mcp")
 95 |     //...
 96 |   }
 97 |   ```
 98 | 
 99 |     For HTTP SSE transport implementations, add one of the following dependencies:
100 | 
101 |     ```groovy
102 |     // Spring WebFlux-based SSE client and server transport
103 |     dependencies {
104 |       implementation platform("io.modelcontextprotocol.sdk:mcp-spring-webflux")
105 |     }
106 | 
107 |     // Spring WebMVC-based SSE server transport
108 |     dependencies {
109 |       implementation platform("io.modelcontextprotocol.sdk:mcp-spring-webmvc")
110 |     }
111 |     ```
112 |   </Tab>
113 | </Tabs>
114 | 
115 | ### Bill of Materials (BOM)
116 | 
117 | The Bill of Materials (BOM) declares the recommended versions of all the dependencies used by a given release.
118 | Using the BOM from your application's build script avoids the need for you to specify and maintain the dependency versions yourself.
119 | Instead, the version of the BOM you're using determines the utilized dependency versions.
120 | It also ensures that you're using supported and tested versions of the dependencies by default, unless you choose to override them.
121 | 
122 | Add the BOM to your project:
123 | 
124 | <Tabs>
125 |   <Tab title="Maven">
126 | ```xml
127 | <dependencyManagement>
128 |     <dependencies>
129 |         <dependency>
130 |             <groupId>io.modelcontextprotocol.sdk</groupId>
131 |             <artifactId>mcp-bom</artifactId>
132 |             <version>0.7.0</version>
133 |             <type>pom</type>
134 |             <scope>import</scope>
135 |         </dependency>
136 |     </dependencies>
137 | </dependencyManagement>
138 | ```
139 |   </Tab>
140 | 
141 |   <Tab title="Gradle">
142 | ```groovy
143 | dependencies {
144 |   implementation platform("io.modelcontextprotocol.sdk:mcp-bom:0.7.0")
145 |   //...
146 | }
147 | ```
148 | 
149 | Gradle users can also use the Spring AI MCP BOM by leveraging Gradle (5.0+) native support for declaring dependency constraints using a Maven BOM.
150 | This is implemented by adding a 'platform' dependency handler method to the dependencies section of your Gradle build script.
151 | As shown in the snippet above this can then be followed by version-less declarations of the Starter Dependencies for the one or more spring-ai modules you wish to use, e.g. spring-ai-openai.
152 |   </Tab>
153 | </Tabs>
154 | 
155 | Replace the version number with the version of the BOM you want to use.
156 | 
157 | ### Available Dependencies
158 | 
159 | The following dependencies are available and managed by the BOM:
160 | 
161 | - Core Dependencies 
162 |   - `io.modelcontextprotocol.sdk:mcp` - Core MCP library providing the base functionality and APIs for Model Context Protocol implementation.
163 | - Transport Dependencies
164 |   - `io.modelcontextprotocol.sdk:mcp-spring-webflux` - WebFlux-based Server-Sent Events (SSE) transport implementation for reactive applications.
165 |   - `io.modelcontextprotocol.sdk:mcp-spring-webmvc` - WebMVC-based Server-Sent Events (SSE) transport implementation for servlet-based applications.
166 | - Testing Dependencies
167 |   - `io.modelcontextprotocol.sdk:mcp-test` - Testing utilities and support for MCP-based applications.
168 | 
169 | 


--------------------------------------------------------------------------------
/sdk/java/mcp-server.mdx:
--------------------------------------------------------------------------------
  1 | ---
  2 | title: MCP Server
  3 | description: Learn how to implement and configure a Model Context Protocol (MCP) server
  4 | ---
  5 | 
  6 | ## Overview
  7 | 
  8 | The MCP Server is a foundational component in the Model Context Protocol (MCP) architecture that provides tools, resources, and capabilities to clients. It implements the server-side of the protocol, responsible for:
  9 | 
 10 | - Exposing tools that clients can discover and execute
 11 | - Managing resources with URI-based access patterns
 12 | - Providing prompt templates and handling prompt requests
 13 | - Supporting capability negotiation with clients
 14 | - Implementing server-side protocol operations
 15 | - Managing concurrent client connections
 16 | - Providing structured logging and notifications
 17 | 
 18 | The server supports both synchronous and asynchronous APIs, allowing for flexible integration in different application contexts.
 19 | 
 20 | <Tabs>
 21 |   <Tab title="Sync API">
 22 | ```java
 23 | // Create a server with custom configuration
 24 | McpSyncServer syncServer = McpServer.sync(transport)
 25 |     .serverInfo("my-server", "1.0.0")
 26 |     .capabilities(ServerCapabilities.builder()
 27 |         .resources(true)     // Enable resource support
 28 |         .tools(true)         // Enable tool support
 29 |         .prompts(true)       // Enable prompt support
 30 |         .logging()           // Enable logging support
 31 |         .build())
 32 |     .build();
 33 | 
 34 | // Register tools, resources, and prompts
 35 | syncServer.addTool(syncToolRegistration);
 36 | syncServer.addResource(syncResourceRegistration);
 37 | syncServer.addPrompt(syncPromptRegistration);
 38 | 
 39 | // Send logging notifications
 40 | syncServer.loggingNotification(LoggingMessageNotification.builder()
 41 |     .level(LoggingLevel.INFO)
 42 |     .logger("custom-logger")
 43 |     .data("Server initialized")
 44 |     .build());
 45 | 
 46 | // Close the server when done
 47 | syncServer.close();
 48 | ```
 49 |   </Tab>
 50 | 
 51 |   <Tab title="Async API">
 52 | ```java
 53 | // Create an async server with custom configuration
 54 | McpAsyncServer asyncServer = McpServer.async(transport)
 55 |     .serverInfo("my-server", "1.0.0")
 56 |     .capabilities(ServerCapabilities.builder()
 57 |         .resources(true)     // Enable resource support
 58 |         .tools(true)         // Enable tool support
 59 |         .prompts(true)       // Enable prompt support
 60 |         .logging()           // Enable logging support
 61 |         .build())
 62 |     .build();
 63 | 
 64 | // Register tools, resources, and prompts
 65 | asyncServer.addTool(asyncToolRegistration)
 66 |     .doOnSuccess(v -> logger.info("Tool registered"))
 67 |     .subscribe();
 68 | 
 69 | asyncServer.addResource(asyncResourceRegistration)
 70 |     .doOnSuccess(v -> logger.info("Resource registered"))
 71 |     .subscribe();
 72 | 
 73 | asyncServer.addPrompt(asyncPromptRegistration)
 74 |     .doOnSuccess(v -> logger.info("Prompt registered"))
 75 |     .subscribe();
 76 | 
 77 | // Send logging notifications
 78 | asyncServer.loggingNotification(LoggingMessageNotification.builder()
 79 |     .level(LoggingLevel.INFO)
 80 |     .logger("custom-logger")
 81 |     .data("Server initialized")
 82 |     .build());
 83 | 
 84 | // Close the server when done
 85 | asyncServer.close()
 86 |     .doOnSuccess(v -> logger.info("Server closed"))
 87 |     .subscribe();
 88 | ```
 89 |   </Tab>
 90 | </Tabs>
 91 | 
 92 | 
 93 | ## Server Transport
 94 | 
 95 | The transport layer in the MCP SDK is responsible for handling the communication between clients and servers. It provides different implementations to support various communication protocols and patterns. The SDK includes several built-in transport implementations:
 96 | 
 97 | <Tabs>
 98 |   
 99 |   <Tab title="STDIO">
100 |     <>
101 |       Create in-process based transport:
102 | 
103 |       ```java
104 |       StdioServerTransport transport = new StdioServerTransport(new ObjectMapper());
105 |       ```
106 | 
107 |       Provides bidirectional JSON-RPC message handling over standard input/output streams with non-blocking message processing, serialization/deserialization, and graceful shutdown support.
108 | 
109 |       Key features:
110 |       <ul>
111 |         <li>Bidirectional communication through stdin/stdout</li>
112 |         <li>Process-based integration support</li>
113 |         <li>Simple setup and configuration</li>
114 |         <li>Lightweight implementation</li>
115 |       </ul>
116 |     </>
117 |   </Tab>
118 | 
119 | <Tab title="SSE (WebFlux)">
120 |   <>
121 |     <p>Creates WebFlux-based SSE server transport.<br />Requires the <code>mcp-spring-webflux</code> dependency.</p>
122 | 
123 |     ```java
124 |     @Configuration
125 |     class McpConfig {
126 |         @Bean
127 |         WebFluxSseServerTransport webFluxSseServerTransport(ObjectMapper mapper) {
128 |             return new WebFluxSseServerTransport(mapper, "/mcp/message");
129 |         }
130 | 
131 |         @Bean
132 |         RouterFunction<?> mcpRouterFunction(WebFluxSseServerTransport transport) {
133 |             return transport.getRouterFunction();
134 |         }
135 |     }
136 |     ```
137 | 
138 |     <p>Implements the MCP HTTP with SSE transport specification, providing:</p>
139 |     <ul>
140 |       <li>Reactive HTTP streaming with WebFlux</li>
141 |       <li>Concurrent client connections through SSE endpoints</li>
142 |       <li>Message routing and session management</li>
143 |       <li>Graceful shutdown capabilities</li>
144 |     </ul>
145 |   </>
146 | </Tab>
147 | 
148 | 
149 | <Tab title="SSE (WebMvc)">
150 |   <>
151 |     <p>Creates WebMvc-based SSE server transport.<br />Requires the <code>mcp-spring-webmvc</code> dependency.</p>
152 | 
153 |     ```java
154 |     @Configuration
155 |     @EnableWebMvc
156 |     class McpConfig {
157 |         @Bean
158 |         WebMvcSseServerTransport webMvcSseServerTransport(ObjectMapper mapper) {
159 |             return new WebMvcSseServerTransport(mapper, "/mcp/message");
160 |         }
161 | 
162 |         @Bean
163 |         RouterFunction<ServerResponse> mcpRouterFunction(WebMvcSseServerTransport transport) {
164 |             return transport.getRouterFunction();
165 |         }
166 |     }
167 |     ```
168 | 
169 |     <p>Implements the MCP HTTP with SSE transport specification, providing:</p>
170 |     <ul>
171 |       <li>Server-side event streaming</li>
172 |       <li>Integration with Spring WebMVC</li>
173 |       <li>Support for traditional web applications</li>
174 |       <li>Synchronous operation handling</li>
175 |     </ul>
176 |   </>
177 | </Tab>
178 | 
179 | 
180 | <Tab title="SSE (Servlet)">
181 |   <>
182 |     <p>
183 |       Creates a Servlet-based SSE server transport. It is included in the core <code>mcp</code> module.<br />
184 |       The <code>HttpServletSseServerTransport</code> can be used with any Servlet container.<br />
185 |       To use it with a Spring Web application, you can register it as a Servlet bean:
186 |     </p>
187 | 
188 |     ```java
189 |     @Configuration
190 |     @EnableWebMvc
191 |     public class McpServerConfig implements WebMvcConfigurer {
192 | 
193 |         @Bean
194 |         public HttpServletSseServerTransport servletSseServerTransport() {
195 |             return new HttpServletSseServerTransport(new ObjectMapper(), "/mcp/message");
196 |         }
197 | 
198 |         @Bean
199 |         public ServletRegistrationBean customServletBean(HttpServletSseServerTransport servlet) {
200 |             return new ServletRegistrationBean(servlet);
201 |         }
202 |     }
203 |     ```
204 | 
205 |     <p>
206 |       Implements the MCP HTTP with SSE transport specification using the traditional Servlet API, providing:
207 |     </p>
208 |     <ul>
209 |       <li>Asynchronous message handling using Servlet 6.0 async support</li>
210 |       <li>Session management for multiple client connections</li>
211 |       <li>
212 |         Two types of endpoints:
213 |         <ul>
214 |           <li>SSE endpoint (<code>/sse</code>) for server-to-client events</li>
215 |           <li>Message endpoint (configurable) for client-to-server requests</li>
216 |         </ul>
217 |       </li>
218 |       <li>Error handling and response formatting</li>
219 |       <li>Graceful shutdown support</li>
220 |     </ul>
221 |   </>
222 | </Tab>
223 | 
224 | </Tabs>
225 | 
226 | 
227 | ## Server Capabilities
228 | 
229 | The server can be configured with various capabilities:
230 | 
231 | ```java
232 | var capabilities = ServerCapabilities.builder()
233 |     .resources(false, true)  // Resource support with list changes notifications
234 |     .tools(true)            // Tool support with list changes notifications
235 |     .prompts(true)          // Prompt support with list changes notifications
236 |     .logging()              // Enable logging support (enabled by default with loging level INFO)
237 |     .build();
238 | ```
239 | 
240 | ### Logging Support
241 | 
242 | The server provides structured logging capabilities that allow sending log messages to clients with different severity levels:
243 | 
244 | ```java
245 | // Send a log message to clients
246 | server.loggingNotification(LoggingMessageNotification.builder()
247 |     .level(LoggingLevel.INFO)
248 |     .logger("custom-logger")
249 |     .data("Custom log message")
250 |     .build());
251 | ```
252 | 
253 | Clients can control the minimum logging level they receive through the `mcpClient.setLoggingLevel(level)` request. Messages below the set level will be filtered out.
254 | Supported logging levels (in order of increasing severity): DEBUG (0), INFO (1), NOTICE (2), WARNING (3), ERROR (4), CRITICAL (5), ALERT (6), EMERGENCY (7)
255 | 
256 | ### Tool Registration
257 | 
258 | <Tabs>
259 |   <Tab title="Sync">
260 | ```java
261 | // Sync tool registration
262 | var schema = """
263 |             {
264 |               "type" : "object",
265 |               "id" : "urn:jsonschema:Operation",
266 |               "properties" : {
267 |                 "operation" : {
268 |                   "type" : "string"
269 |                 },
270 |                 "a" : {
271 |                   "type" : "number"
272 |                 },
273 |                 "b" : {
274 |                   "type" : "number"
275 |                 }
276 |               }
277 |             }
278 |             """;
279 | var syncToolRegistration = new McpServerFeatures.SyncToolRegistration(
280 |     new Tool("calculator", "Basic calculator", schema),
281 |     arguments -> {
282 |         // Tool implementation
283 |         return new CallToolResult(result, false);
284 |     }
285 | );
286 | ```
287 |   </Tab>
288 | 
289 |   <Tab title="Async">
290 | ```java
291 | // Async tool registration
292 | var schema = """
293 |             {
294 |               "type" : "object",
295 |               "id" : "urn:jsonschema:Operation",
296 |               "properties" : {
297 |                 "operation" : {
298 |                   "type" : "string"
299 |                 },
300 |                 "a" : {
301 |                   "type" : "number"
302 |                 },
303 |                 "b" : {
304 |                   "type" : "number"
305 |                 }
306 |               }
307 |             }
308 |             """;
309 | var asyncToolRegistration = new McpServerFeatures.AsyncToolRegistration(
310 |     new Tool("calculator", "Basic calculator", schema),
311 |     arguments -> {
312 |         // Tool implementation
313 |         return Mono.just(new CallToolResult(result, false));
314 |     }
315 | );
316 | ```
317 |   </Tab>
318 | </Tabs>
319 | 
320 | ### Resource Registration
321 | 
322 | <Tabs>
323 |   <Tab title="Sync">
324 | ```java
325 | // Sync resource registration
326 | var syncResourceRegistration = new McpServerFeatures.SyncResourceRegistration(
327 |     new Resource("custom://resource", "name", "description", "mime-type", null),
328 |     request -> {
329 |         // Resource read implementation
330 |         return new ReadResourceResult(contents);
331 |     }
332 | );
333 | ```
334 |   </Tab>
335 | 
336 |   <Tab title="Async">
337 | ```java
338 | // Async resource registration
339 | var asyncResourceRegistration = new McpServerFeatures.AsyncResourceRegistration(
340 |     new Resource("custom://resource", "name", "description", "mime-type", null),
341 |     request -> {
342 |         // Resource read implementation
343 |         return Mono.just(new ReadResourceResult(contents));
344 |     }
345 | );
346 | ```
347 |   </Tab>
348 | </Tabs>
349 | 
350 | ### Prompt Registration
351 | 
352 | <Tabs>
353 |   <Tab title="Sync">
354 | ```java
355 | // Sync prompt registration
356 | var syncPromptRegistration = new McpServerFeatures.SyncPromptRegistration(
357 |     new Prompt("greeting", "description", List.of(
358 |         new PromptArgument("name", "description", true)
359 |     )),
360 |     request -> {
361 |         // Prompt implementation
362 |         return new GetPromptResult(description, messages);
363 |     }
364 | );
365 | ```
366 |   </Tab>
367 | 
368 |   <Tab title="Async">
369 | ```java
370 | // Async prompt registration
371 | var asyncPromptRegistration = new McpServerFeatures.AsyncPromptRegistration(
372 |     new Prompt("greeting", "description", List.of(
373 |         new PromptArgument("name", "description", true)
374 |     )),
375 |     request -> {
376 |         // Prompt implementation
377 |         return Mono.just(new GetPromptResult(description, messages));
378 |     }
379 | );
380 | ```
381 |   </Tab>
382 | </Tabs>
383 | 
384 | ## Error Handling
385 | 
386 | The SDK provides comprehensive error handling through the McpError class, covering protocol compatibility, transport communication, JSON-RPC messaging, tool execution, resource management, prompt handling, timeouts, and connection issues. This unified error handling approach ensures consistent and reliable error management across both synchronous and asynchronous operations.
387 | 


--------------------------------------------------------------------------------
/snippets/snippet-intro.mdx:
--------------------------------------------------------------------------------
1 | One of the core principles of software development is DRY (Don't Repeat
2 | Yourself). This is a principle that apply to documentation as
3 | well. If you find yourself repeating the same content in multiple places, you
4 | should consider creating a custom snippet to keep your content in sync.
5 | 


--------------------------------------------------------------------------------
/tutorials/building-a-client-node.mdx:
--------------------------------------------------------------------------------
  1 | <Tab title="Node">
  2 | ## System Requirements
  3 | 
  4 | Before starting, ensure your system meets these requirements:
  5 | - Mac or Windows computer
  6 | - Node.js version 16 or higher installed
  7 | - npm (comes with Node.js)
  8 | 
  9 | ## Setting Up Your Environment
 10 | 
 11 | First, create a new Node.js project:
 12 | 
 13 | ```bash
 14 | # Create project directory
 15 | mkdir mcp-client
 16 | cd mcp-client
 17 | 
 18 | # Initialize npm project
 19 | npm init -y
 20 | 
 21 | # Install dependencies
 22 | npm install @modelcontextprotocol/sdk @anthropic-ai/sdk dotenv
 23 | npm install -D typescript @types/node
 24 | 
 25 | # Create TypeScript config
 26 | npx tsc --init
 27 | 
 28 | # Create necessary files
 29 | mkdir src
 30 | touch src/client.ts
 31 | touch .env
 32 | ```
 33 | 
 34 | Update your `package.json` to add necessary configuration:
 35 | 
 36 | ```json
 37 | {
 38 |   "type": "module",
 39 |   "scripts": {
 40 |     "build": "tsc",
 41 |     "start": "node build/client.js"
 42 |   }
 43 | }
 44 | ```
 45 | 
 46 | Update your `tsconfig.json` with appropriate settings:
 47 | 
 48 | ```json
 49 | {
 50 |   "compilerOptions": {
 51 |     "target": "ES2022",
 52 |     "module": "Node16",
 53 |     "moduleResolution": "Node16",
 54 |     "outDir": "./build",
 55 |     "rootDir": "./src",
 56 |     "strict": true,
 57 |     "esModuleInterop": true,
 58 |     "skipLibCheck": true,
 59 |     "forceConsistentCasingInFileNames": true
 60 |   },
 61 |   "include": ["src/**/*"]
 62 | }
 63 | ```
 64 | 
 65 | ## Setting Up Your API Key
 66 | 
 67 | You'll need an Anthropic API key from the [Anthropic Console](https://console.anthropic.com/settings/keys).
 68 | 
 69 | Create a `.env` file:
 70 | ```bash
 71 | ANTHROPIC_API_KEY=your_key_here
 72 | ```
 73 | 
 74 | Add `.env` to your `.gitignore`:
 75 | ```bash
 76 | echo ".env" >> .gitignore
 77 | ```
 78 | 
 79 | ## Creating the Client
 80 | 
 81 | First, let's set up our imports and create the basic client class in `src/client.ts`:
 82 | 
 83 | ```typescript
 84 | import { Client } from "@modelcontextprotocol/sdk/client/index.js";
 85 | import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
 86 | import Anthropic from "@anthropic-ai/sdk";
 87 | import dotenv from "dotenv";
 88 | import {
 89 |   CallToolResultSchema,
 90 |   ListToolsResultSchema,
 91 | } from "@modelcontextprotocol/sdk/types.js";
 92 | import * as readline from "node:readline";
 93 | 
 94 | dotenv.config();
 95 | 
 96 | interface MCPClientConfig {
 97 |   name?: string;
 98 |   version?: string;
 99 | }
100 | 
101 | class MCPClient {
102 |   private client: Client | null = null;
103 |   private anthropic: Anthropic;
104 |   private transport: StdioClientTransport | null = null;
105 | 
106 |   constructor(config: MCPClientConfig = {}) {
107 |     this.anthropic = new Anthropic();
108 |   }
109 | 
110 |   // Methods will go here
111 | }
112 | ```
113 | 
114 | ## Server Connection Management
115 | 
116 | Next, implement the method to connect to an MCP server:
117 | 
118 | ```typescript
119 |   async connectToServer(serverScriptPath: string): Promise<void> {
120 |     const isPython = serverScriptPath.endsWith(".py");
121 |     const isJs = serverScriptPath.endsWith(".js");
122 | 
123 |     if (!isPython && !isJs) {
124 |       throw new Error("Server script must be a .py or .js file");
125 |     }
126 | 
127 |     const command = isPython ? "python" : "node";
128 | 
129 |     this.transport = new StdioClientTransport({
130 |       command,
131 |       args: [serverScriptPath],
132 |     });
133 | 
134 |     this.client = new Client(
135 |       {
136 |         name: "mcp-client",
137 |         version: "1.0.0",
138 |       },
139 |       {
140 |         capabilities: {},
141 |       }
142 |     );
143 | 
144 |     await this.client.connect(this.transport);
145 | 
146 |     // List available tools
147 |     const response = await this.client.request(
148 |       { method: "tools/list" },
149 |       ListToolsResultSchema
150 |     );
151 | 
152 |     console.log(
153 |       "\nConnected to server with tools:",
154 |       response.tools.map((tool: any) => tool.name)
155 |     );
156 |   }
157 | ```
158 | 
159 | ## Query Processing Logic
160 | 
161 | Now add the core functionality for processing queries and handling tool calls:
162 | 
163 | ```typescript
164 |   async processQuery(query: string): Promise<string> {
165 |     if (!this.client) {
166 |       throw new Error("Client not connected");
167 |     }
168 | 
169 |     // Initialize messages array with user query
170 |     let messages: Anthropic.MessageParam[] = [
171 |       {
172 |         role: "user",
173 |         content: query,
174 |       },
175 |     ];
176 | 
177 |     // Get available tools
178 |     const toolsResponse = await this.client.request(
179 |       { method: "tools/list" },
180 |       ListToolsResultSchema
181 |     );
182 | 
183 |     const availableTools = toolsResponse.tools.map((tool: any) => ({
184 |       name: tool.name,
185 |       description: tool.description,
186 |       input_schema: tool.inputSchema,
187 |     }));
188 | 
189 |     const finalText: string[] = [];
190 |     let currentResponse = await this.anthropic.messages.create({
191 |       model: "claude-3-5-sonnet-20241022",
192 |       max_tokens: 1000,
193 |       messages,
194 |       tools: availableTools,
195 |     });
196 | 
197 |     // Process the response and any tool calls
198 |     while (true) {
199 |       // Add Claude's response to final text and messages
200 |       for (const content of currentResponse.content) {
201 |         if (content.type === "text") {
202 |           finalText.push(content.text);
203 |         } else if (content.type === "tool_use") {
204 |           const toolName = content.name;
205 |           const toolArgs = content.input;
206 | 
207 |           // Execute tool call
208 |           const result = await this.client.request(
209 |             {
210 |               method: "tools/call",
211 |               params: {
212 |                 name: toolName,
213 |                 arguments: toolArgs,
214 |               },
215 |             },
216 |             CallToolResultSchema
217 |           );
218 | 
219 |           finalText.push(
220 |             `[Calling tool ${toolName} with args ${JSON.stringify(toolArgs)}]`
221 |           );
222 | 
223 |           // Add Claude's response (including tool use) to messages
224 |           messages.push({
225 |             role: "assistant",
226 |             content: currentResponse.content,
227 |           });
228 | 
229 |           // Add tool result to messages
230 |           messages.push({
231 |             role: "user",
232 |             content: [
233 |               {
234 |                 type: "tool_result",
235 |                 tool_use_id: content.id,
236 |                 content: [
237 |                   { type: "text", text: JSON.stringify(result.content) },
238 |                 ],
239 |               },
240 |             ],
241 |           });
242 | 
243 |           // Get next response from Claude with tool results
244 |           currentResponse = await this.anthropic.messages.create({
245 |             model: "claude-3-5-sonnet-20241022",
246 |             max_tokens: 1000,
247 |             messages,
248 |             tools: availableTools,
249 |           });
250 | 
251 |           // Add Claude's interpretation of the tool results to final text
252 |           if (currentResponse.content[0]?.type === "text") {
253 |             finalText.push(currentResponse.content[0].text);
254 |           }
255 | 
256 |           // Continue the loop to process any additional tool calls
257 |           continue;
258 |         }
259 |       }
260 | 
261 |       // If we reach here, there were no tool calls in the response
262 |       break;
263 |     }
264 | 
265 |     return finalText.join("\n");
266 |   }
267 | 
268 | ```
269 | 
270 | ## Interactive Chat Interface
271 | 
272 | Add the chat loop and cleanup functionality:
273 | 
274 | ```typescript
275 |   async chatLoop(): Promise<void> {
276 |     console.log("\nMCP Client Started!");
277 |     console.log("Type your queries or 'quit' to exit.");
278 | 
279 |     // Using Node's readline for console input
280 |     const rl = readline.createInterface({
281 |       input: process.stdin,
282 |       output: process.stdout,
283 |     });
284 | 
285 |     const askQuestion = () => {
286 |       rl.question("\nQuery: ", async (query: string) => {
287 |         try {
288 |           if (query.toLowerCase() === "quit") {
289 |             await this.cleanup();
290 |             rl.close();
291 |             return;
292 |           }
293 | 
294 |           const response = await this.processQuery(query);
295 |           console.log("\n" + response);
296 |           askQuestion();
297 |         } catch (error) {
298 |           console.error("\nError:", error);
299 |           askQuestion();
300 |         }
301 |       });
302 |     };
303 | 
304 |     askQuestion();
305 |   }
306 | 
307 |   async cleanup(): Promise<void> {
308 |     if (this.transport) {
309 |       await this.transport.close();
310 |     }
311 |   }
312 | ```
313 | 
314 | ## Main Entry Point
315 | 
316 | Finally, add the main execution logic outside the class:
317 | 
318 | ```typescript
319 | // Main execution
320 | async function main() {
321 |   if (process.argv.length < 3) {
322 |     console.log("Usage: ts-node client.ts <path_to_server_script>");
323 |     process.exit(1);
324 |   }
325 | 
326 |   const client = new MCPClient();
327 |   try {
328 |     await client.connectToServer(process.argv[2]);
329 |     await client.chatLoop();
330 |   } catch (error) {
331 |     console.error("Error:", error);
332 |     await client.cleanup();
333 |     process.exit(1);
334 |   }
335 | }
336 | 
337 | // Run main if this is the main module
338 | if (import.meta.url === new URL(process.argv[1], "file:").href) {
339 |   main();
340 | }
341 | 
342 | export default MCPClient;
343 | ```
344 | 
345 | ## Running the Client
346 | 
347 | To run your client with any MCP server:
348 | 
349 | ```bash
350 | # Build the TypeScript code. Make sure to rerun this every time you update `client.ts`!
351 | npm run build
352 | 
353 | # Run the client
354 | node build/client.js path/to/server.py  # for Python servers
355 | node build/client.js path/to/server.js  # for Node.js servers
356 | ```
357 | 
358 | The client will:
359 | 1. Connect to the specified server
360 | 2. List available tools
361 | 3. Start an interactive chat session where you can:
362 |    - Enter queries
363 |    - See tool executions
364 |    - Get responses from Claude
365 | 
366 | ## Key Components Explained
367 | 
368 | #### 1. Client Initialization
369 | - The `MCPClient` class initializes with session management and API clients
370 | - Sets up the MCP client with basic capabilities
371 | - Configures the Anthropic client for Claude interactions
372 | 
373 | #### 2. Server Connection
374 | - Supports both Python and Node.js servers
375 | - Validates server script type
376 | - Sets up proper communication channels
377 | - Lists available tools on connection
378 | 
379 | #### 3. Query Processing
380 | - Maintains conversation context
381 | - Handles Claude's responses and tool calls
382 | - Manages the message flow between Claude and tools
383 | - Combines results into a coherent response
384 | 
385 | #### 4. Interactive Interface
386 | - Provides a simple command-line interface
387 | - Handles user input and displays responses
388 | - Includes basic error handling
389 | - Allows graceful exit
390 | 
391 | #### 5. Resource Management
392 | - Proper cleanup of resources
393 | - Error handling for connection issues
394 | - Graceful shutdown procedures
395 | 
396 | ### Common Customization Points
397 | 
398 | 1. **Tool Handling**
399 |    - Modify `processQuery()` to handle specific tool types
400 |    - Add custom error handling for tool calls
401 |    - Implement tool-specific response formatting
402 | 
403 | 2. **Response Processing**
404 |    - Customize how tool results are formatted
405 |    - Add response filtering or transformation
406 |    - Implement custom logging
407 | 
408 | 3. **User Interface**
409 |    - Add a GUI or web interface
410 |    - Implement rich console output
411 |    - Add command history or auto-completion
412 | 
413 | ### Best Practices
414 | 
415 | 1. **Error Handling**
416 |    - Always wrap tool calls in try-catch blocks
417 |    - Provide meaningful error messages
418 |    - Gracefully handle connection issues
419 | 
420 | 2. **Resource Management**
421 |    - Use proper cleanup methods
422 |    - Close connections when done
423 |    - Handle server disconnections
424 | 
425 | 3. **Security**
426 |    - Store API keys securely in `.env`
427 |    - Validate server responses
428 |    - Be cautious with tool permissions
429 | 
430 | ### Troubleshooting
431 | 
432 | #### Server Path Issues
433 | - Double-check the path to your server script
434 | - Use absolute paths if relative paths aren't working
435 | - For Windows users, use forward slashes (/) or escaped backslashes (\\)
436 | - Verify the server file has the correct extension (.py or .js)
437 | 
438 | Example of correct path usage:
439 | ```bash
440 | # Relative path
441 | node build/client.js ./server/weather.js
442 | 
443 | # Absolute path
444 | node build/client.js /Users/username/projects/mcp-server/weather.js
445 | 
446 | # Windows path (either format works)
447 | node build/client.js C:/projects/mcp-server/weather.js
448 | node build/client.js C:\\projects\\mcp-server\\weather.js
449 | ```
450 | 
451 | #### Connection Issues
452 | - Verify the server script exists and has correct permissions
453 | - Check that the server script is executable
454 | - Ensure the server script's dependencies are installed
455 | - Try running the server script directly to check for errors
456 | 
457 | #### Tool Execution Issues
458 | - Check server logs for error messages
459 | - Verify tool input arguments match the schema
460 | - Ensure tool dependencies are available
461 | - Add debug logging to track execution flow
462 | </Tab>


--------------------------------------------------------------------------------
/tutorials/building-mcp-with-llms.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: "Building MCP with LLMs"
 3 | description: "Speed up your MCP development using LLMs such as Claude!"
 4 | ---
 5 | 
 6 | This guide will help you use LLMs to help you build custom Model Context Protocol (MCP) servers and clients. We'll be focusing on Claude for this tutorial, but you can do this with any frontier LLM.
 7 | 
 8 | ## Preparing the documentation
 9 | 
10 | Before starting, gather the necessary documentation to help Claude understand MCP:
11 | 
12 | 1. Visit https://modelcontextprotocol.io/llms-full.txt and copy the full documentation text
13 | 2. Navigate to either the [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) or [Python SDK repository](https://github.com/modelcontextprotocol/python-sdk)
14 | 3. Copy the README files and other relevant documentation
15 | 4. Paste these documents into your conversation with Claude
16 | 
17 | ## Describing your server
18 | 
19 | Once you've provided the documentation, clearly describe to Claude what kind of server you want to build. Be specific about:
20 | 
21 | - What resources your server will expose
22 | - What tools it will provide
23 | - Any prompts it should offer
24 | - What external systems it needs to interact with
25 | 
26 | For example:
27 | ```
28 | Build an MCP server that:
29 | - Connects to my company's PostgreSQL database
30 | - Exposes table schemas as resources
31 | - Provides tools for running read-only SQL queries
32 | - Includes prompts for common data analysis tasks
33 | ```
34 | 
35 | ## Working with Claude
36 | 
37 | When working with Claude on MCP servers:
38 | 
39 | 1. Start with the core functionality first, then iterate to add more features
40 | 2. Ask Claude to explain any parts of the code you don't understand
41 | 3. Request modifications or improvements as needed
42 | 4. Have Claude help you test the server and handle edge cases
43 | 
44 | Claude can help implement all the key MCP features:
45 | 
46 | - Resource management and exposure
47 | - Tool definitions and implementations
48 | - Prompt templates and handlers
49 | - Error handling and logging
50 | - Connection and transport setup
51 | 
52 | ## Best practices
53 | 
54 | When building MCP servers with Claude:
55 | 
56 | - Break down complex servers into smaller pieces
57 | - Test each component thoroughly before moving on
58 | - Keep security in mind - validate inputs and limit access appropriately
59 | - Document your code well for future maintenance
60 | - Follow MCP protocol specifications carefully
61 | 
62 | ## Next steps
63 | 
64 | After Claude helps you build your server:
65 | 
66 | 1. Review the generated code carefully
67 | 2. Test the server with the MCP Inspector tool
68 | 3. Connect it to Claude.app or other MCP clients
69 | 4. Iterate based on real usage and feedback
70 | 
71 | Remember that Claude can help you modify and improve your server as requirements change over time.
72 | 
73 | Need more guidance? Just ask Claude specific questions about implementing MCP features or troubleshooting issues that arise.


--------------------------------------------------------------------------------