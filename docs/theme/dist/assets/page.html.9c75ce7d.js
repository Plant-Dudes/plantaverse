import{_ as e,f as n}from"./app.2bf926e2.js";const a={},s=n(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="\u5E9F\u5F03" tabindex="-1"><a class="header-anchor" href="#\u5E9F\u5F03" aria-hidden="true">#</a> \u5E9F\u5F03</h3><ul><li><p><code>time</code> \u6807\u8BB0\u4E3A\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 <code>date</code></p></li><li><p><code>categories</code> \u6807\u8BB0\u4E3A\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 <code>category</code></p></li><li><p><code>tags</code> \u6807\u8BB0\u4E3A\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 <code>tag</code></p></li></ul><h3 id="\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u53D8\u66F4" aria-hidden="true">#</a> \u53D8\u66F4</h3><ul><li><p><code>author</code> \u7C7B\u578B\u4ECE <code>string | undefined</code> \u6539\u4E3A <code>AuthorInfo[] | AuthorInfo | string[] | string | undefined</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6B64\u6539\u52A8\u5141\u8BB8\u4F60\u6DFB\u52A0\u591A\u4E2A\u4F5C\u8005\uFF0C\u5E76\u4E3A\u5176\u8BBE\u7F6E\u7F51\u7AD9\u3002</p></li><li><p><code>date</code> \u73B0\u5728\u4EC5\u652F\u6301\u4F7F\u7528 <code>-</code> \u6807\u8BB0\u7684\u6807\u51C6 DateString</p></li><li><p><code>category</code> \u7C7B\u578B\u4ECE <code>string | undefined</code> \u6539\u4E3A <code>string[] | string | undefined</code></p><p>\u4E3B\u9898\u73B0\u5728\u652F\u6301\u591A\u4E2A\u5206\u7C7B\u3002</p></li><li><p><code>pageInfo</code> \u7C7B\u578B\u4ECE <code>PageInfo[] | false</code> \u6539\u4E3A <code>ArticleInfo[] | false</code>\u3002</p><p>\u53EF\u586B\u5165\u7684\u503C\u4ECE <code>&#39;author&#39;</code>, <code>&#39;time&#39;</code>, <code>&#39;category&#39;</code>, <code>&#39;tag&#39;</code>, <code>&#39;reading-time&#39;</code>, <code>&#39;word&#39;</code>, <code>&#39;visitor&#39;</code> \u6539\u4E3A <code>&#39;Author&#39;</code>, <code>&#39;Date&#39;</code>, <code>&#39;Original&#39;</code>, <code>&#39;Category&#39;</code>, <code>&#39;Tag&#39;</code>, <code>&#39;ReadingTime&#39;</code>, <code>&#39;Word&#39;</code>, <code>&#39;Visitor&#39;</code></p></li><li><p><code>sidebarDepth</code> \u91CD\u547D\u540D\u4E3A <code>headingDepth</code></p></li><li><p><code>copyrightText</code> \u91CD\u547D\u540D\u4E3A <code>copyright</code></p></li><li><p><code>anchorDisplay</code> \u91CD\u547D\u540D\u4E3A <code>toc</code></p></li><li><p><code>updateTime</code> \u91CD\u547D\u540D\u4E3A <code>lastUpdated</code></p></li><li><p><code>prev</code> \u548C <code>next</code> \u7C7B\u578B\u7531 <code>string | false</code> \u6539\u4E3A <code>AutoLink | string | false</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AutoLink</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><h3 id="\u79FB\u9664" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664" aria-hidden="true">#</a> \u79FB\u9664</h3><ul><li><p>\u79FB\u9664 <code>password</code></p><p>\u51FA\u4E8E\u5B89\u5168\u6027\u8003\u8651 V2 \u79FB\u9664\u4E86\u8FD9\u79CD\u901A\u8FC7\u5BC6\u7801\u539F\u6587\u52A0\u5BC6\u7684\u65B9\u5F0F\u3002</p></li><li><p>\u79FB\u9664\u539F <code>copyright</code></p><p>\u76F8\u5173\u63D2\u4EF6\u6682\u672A\u9002\u914D V2\u3002</p></li><li><p>\u79FB\u9664 <code>mediaLink</code></p><p>\u9875\u811A\u4E0D\u518D\u5C55\u793A\u5A92\u4F53\u94FE\u63A5\u3002</p></li></ul>`,7);function o(c,d){return s}var p=e(a,[["render",o]]);export{p as default};