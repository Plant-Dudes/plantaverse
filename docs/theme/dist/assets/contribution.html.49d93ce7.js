import{_ as e,f as n}from"./app.2bf926e2.js";const s={},a=n(`<p>We always welcome everyone to contribute! Here is a guide for you.</p><h2 id="clone-and-install-project" tabindex="-1"><a class="header-anchor" href="#clone-and-install-project" aria-hidden="true">#</a> Clone and Install project</h2><p>Use Git to clone the project to the local, and use <code>yarn</code> to install dependencies.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:vuepress-theme-hope/vuepress-theme-hope.git

<span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>If you have not installed yarn, please install it using <code>npm i -g yarn</code>.</p></div><h2 id="project-file-structure" tabindex="-1"><a class="header-anchor" href="#project-file-structure" aria-hidden="true">#</a> Project File structure</h2><p>The project is a monorepo, managed by <code>lerna</code>.</p><ul><li><code>docs</code>: place the documentation of each plugin and theme, each subfolder is a project</li><li><code>demo</code>: theme demo project</li><li><code>packages</code>: place the code of each plugin and theme, each subfolder is a project</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 .github \u2192 GitHub config
\u251C\u2500\u2500 .husky \u2192 husky config
\u2502
\u251C\u2500\u2500 demo \u2192 Theme demo project
\u2502
\u251C\u2500\u2500 docs \u2192 document directory
\u2502 \u251C\u2500\u2500 add-this \u2192 add-this plugin document
\u2502 \u251C\u2500\u2500 blog \u2192 blog2 plugin document
\u2502 \u251C\u2500\u2500 comment \u2192 comment2 plugin document
\u2502 \u251C\u2500\u2500 components \u2192 @mr-hope/components plugin document
\u2502 \u251C\u2500\u2500 copy-code \u2192 copy-code2 plugin document
\u2502 \u251C\u2500\u2500 feed \u2192 feed2 plugin document
\u2502 \u251C\u2500\u2500 lightgallery \u2192 lightgallery plugin document
\u2502 \u251C\u2500\u2500 md-enhance \u2192 md-enhance plugin document
\u2502 \u251C\u2500\u2500 photo-swipe \u2192 photo-swipe document
\u2502 \u251C\u2500\u2500 pwa \u2192 pwa2 plugin document
\u2502 \u251C\u2500\u2500 reading-time \u2192 reading-time2 plugin document
\u2502 \u251C\u2500\u2500 sass-palette \u2192 sass-palette plugin document
\u2502 \u251C\u2500\u2500 seo \u2192 seo2 plugin document
\u2502 \u2514\u2500\u2500 theme \u2192 theme document
\u2502
\u251C\u2500\u2500 packages \u2192 project source code
\u2502 \u251C\u2500\u2500 add-this \u2192 add-this plugin
\u2502 \u251C\u2500\u2500 blog2 \u2192 blog2 plugin
\u2502 \u251C\u2500\u2500 comment2 \u2192 comment2 plugin
\u2502 \u251C\u2500\u2500 components \u2192 @mr-hope/components plugin
\u2502 \u251C\u2500\u2500 copy-code2 \u2192 copy-code2 plugin
\u2502 \u251C\u2500\u2500 create \u2192 create-vuepress-theme-hope helper
\u2502 \u251C\u2500\u2500 feed2 \u2192 feed2 plugin
\u2502 \u251C\u2500\u2500 lightgallery \u2192 lightgallery plugin
\u2502 \u251C\u2500\u2500 md-enhance \u2192 md-enhance plugin
\u2502 \u251C\u2500\u2500 photo-swipe \u2192 photo-swipe plugin
\u2502 \u251C\u2500\u2500 pwa2 \u2192 pwa2 plugin
\u2502 \u251C\u2500\u2500 reading-time2 \u2192 reading-time2 plugin
\u2502 \u251C\u2500\u2500 sass-palette \u2192 sass-palette plugin
\u2502 \u251C\u2500\u2500 seo2 \u2192 seo2 plugin
\u2502 \u251C\u2500\u2500 shared \u2192 shared file
\u2502 \u251C\u2500\u2500 sitemap2 \u2192 sitemap2 plugin
\u2502 \u2514\u2500\u2500 theme \u2192 vuepress-theme-hope theme
\u2502
\u251C\u2500\u2500 scripts \u2192 command scripts
\u2502
\u251C\u2500\u2500 ... \u2192 some config files
\u2502
\u251C\u2500\u2500 LICENSE \u2192 License
\u251C\u2500\u2500 package.json \u2192 root package.json
\u251C\u2500\u2500 README.md \u2192 project intro
\u251C\u2500\u2500 SECURITY.md \u2192 Security Policy
\u2502
\u251C\u2500\u2500 tsconfig.* \u2192 TypeScript config file
\u2502
\u2514\u2500\u2500 yarn.lock \u2192 yarn version lock file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h2 id="document-modification" tabindex="-1"><a class="header-anchor" href="#document-modification" aria-hidden="true">#</a> Document modification</h2><p>You can find the corresponding project in the docs folder so you can modify the corresponding Markdown directly.</p><p>After ensuring that the <code>yarn run lint</code> and <code>yarn run lint:md</code> commands emit no errors, you can commit to GitHub to open a PR.</p><p>To preview the project locally, since the docs are using local themes and plugins, you need to build the local project through <code>yarn run build</code>, and then start it with the corresponding command <code>yarn run docs/&lt;project abbreviation&gt;:serve</code> in the root directory to start devServer.</p><h2 id="project-modification" tabindex="-1"><a class="header-anchor" href="#project-modification" aria-hidden="true">#</a> Project modification</h2><p>The structure of each project is as follows:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 lib \u2192 compiled output file
\u2502 \u2502
\u2502 \u251C\u2500\u2500 client \u2192 client-side compiled code
\u2502 \u2502
\u2502 \u2514\u2500\u2500 node \u2192 Node.js side compiled code
\u2502
\u2514\u2500\u2500 src \u2192 source file
  \u2502
  \u251C\u2500\u2500 client \u2192 client-side souce code
  \u2502
  \u251C\u2500\u2500 node \u2192 Node.js side  soucecode
  \u2502
  \u2514\u2500\u2500 shared \u2192 Shared files between node and client
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Since the client-side uses ES Module (import/export) and the Node.js side uses commonjs (require/exports), the code in the node and client folders cannot be cross-referenced.</p><ul><li><code>client</code> folder stores the client code, compiled in esm format</li><li><code>node</code> folder stores the Node.js code, compiled in cjs format</li><li><code>shared</code> folder basically stores TypeScript types, and is compiled in cjs format. It can be referenced by the client and node folders.</li></ul><p>For better performance, all plugins are packed and minified using rollup when they are published.</p><h2 id="project-operation-and-development" tabindex="-1"><a class="header-anchor" href="#project-operation-and-development" aria-hidden="true">#</a> Project operation and development</h2><h3 id="how-to-build" tabindex="-1"><a class="header-anchor" href="#how-to-build" aria-hidden="true">#</a> How to build</h3><ul><li>For better performance, all plugins are packed and minified using <code>rollup</code> when they are published.</li><li>Use <code>cpx</code> package to copy and watch files in other formats from the source file to the output directory.</li></ul><h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> Command</h3><ol><li><p>Build project: <code>yarn run build</code></p><p>It will execute the two commands <code>yarn run build:copy</code> and <code>yarn run build:ts</code>, corresponding to the two build steps.</p></li><li><p>Develop project: <code>yarn run dev</code></p><p>It will execute the two commands <code>yarn run dev:copy</code> and <code>yarn run dev:ts</code>, and execute and watch the two build steps.</p></li><li><p>Format project: <code>yarn run lint</code></p><p>It will execute the two commands <code>yarn run lint:eslint</code> and <code>yarn run lint:prettier</code>.</p><p>If you modify Markdown, you also need to run the <code>yarn run lint:md</code> command.</p></li></ol><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Please do not mix build and dev commands as they compile in completely different ways.</p><p>You may need to execute the <code>yarn run clean</code> command to clear the last build results.</p></div><h2 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> Commit</h2><p>The project uses <code>husky</code> and <code>lint-staged</code> to add Git Hooks for verification:</p><ul><li><p>In <code>precommit</code> stage: use <code>lint-staged</code> to check the changed code with the corresponding Linter</p><p>This means that you need to ensure that your code is formatted by the project requirements and can pass Linter tests.</p></li><li><p>In <code>commit-msg</code> stage: use <code>commitlint</code> to verify the commit comment.</p><p>This means that you need to ensure that your commit comments comply with Semantic</p></li></ul><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>If you cannot pass the above Git Hooks, you will not be able to complete <code>git commit</code>.</p><p>If you have already contributed something, but cannot make a commit and don\u2019t know how to fix it, you can add the <code>--no-verify</code> flag when committing to bypass Git Hooks.</p></div>`,29);function o(i,c){return a}var t=e(s,[["render",o]]);export{t as default};
