const e={key:"v-3ab8529e",path:"/zh/guide/advanced/pwa.html",title:"PWA",lang:"zh-CN",frontmatter:{title:"PWA",icon:"setting",category:["\u9AD8\u7EA7"],tag:["\u9AD8\u7EA7","PWA"],summary:`\u8BE5\u4E3B\u9898\u5C06\u901A\u8FC7\u5185\u7F6E [vuepress-plugin-pwa2][pwa2] \u63D0\u4F9B\u6E10\u8FDB\u5F0F Web \u5E94\u7528\u7A0B\u5E8F\u652F\u6301[1]\uFF0C\u8BE5\u529F\u80FD\u9ED8\u8BA4\u7981\u7528\u3002
\u76F8\u5173\u4FE1\u606F
vuepress-theme-hope \u5C06 themeConfig.plugins \u4E2D\u7684 pwa \u9009\u9879\u4F5C\u4E3A\u63D2\u4EF6\u9009\u9879\u63D0\u4F9B\u7ED9 vuepress-plugin-pwa2\u3002
\u4F60\u53EF\u4EE5\u5C06 themeConfig.plugins.pwa \u8BBE\u7F6E\u4E3A true \u6765\u4EE5\u9ED8\u8BA4\u914D\u7F6E\u542F\u7528\u63D2\u4EF6\u3002




PWA \u4ECB\u7ECD
PWA \u5168\u79F0 Progressive Web app\uFF0C\u5373\u6E10\u8FDB\u5F0F\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\uFF0C\u6807\u51C6\u7531 W3C \u89C4\u5B9A\u3002
\u5B83\u5141\u8BB8\u7F51\u7AD9\u901A\u8FC7\u652F\u6301\u8BE5\u7279\u6027\u7684\u6D4F\u89C8\u5668\u5C06\u7F51\u7AD9\u4F5C\u4E3A App \u5B89\u88C5\u5728\u5BF9\u5E94\u5E73\u53F0\u4E0A\u3002 \u21A9\uFE0E



`,head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2.netlify.app/zh/guide/advanced/pwa.html"}],["meta",{property:"og:title",content:"PWA"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:tag",content:"\u9AD8\u7EA7"}],["meta",{property:"article:tag",content:"PWA"}]]},excerpt:`<p>\u8BE5\u4E3B\u9898\u5C06\u901A\u8FC7\u5185\u7F6E [<code>vuepress-plugin-pwa2</code>][pwa2] \u63D0\u4F9B\u6E10\u8FDB\u5F0F Web \u5E94\u7528\u7A0B\u5E8F\u652F\u6301<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>\uFF0C\u8BE5\u529F\u80FD\u9ED8\u8BA4\u7981\u7528\u3002</p>
<div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p>
<p><code>vuepress-theme-hope</code> \u5C06 <code>themeConfig.plugins</code> \u4E2D\u7684 <code>pwa</code> \u9009\u9879\u4F5C\u4E3A\u63D2\u4EF6\u9009\u9879\u63D0\u4F9B\u7ED9 <code>vuepress-plugin-pwa2</code>\u3002</p>
<p>\u4F60\u53EF\u4EE5\u5C06 <code>themeConfig.plugins.pwa</code> \u8BBE\u7F6E\u4E3A <code>true</code> \u6765\u4EE5\u9ED8\u8BA4\u914D\u7F6E\u542F\u7528\u63D2\u4EF6\u3002<Badge text="\u4E0D\u63A8\u8350" type="warning" /></p>
</div>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><strong>PWA \u4ECB\u7ECD</strong></p>
<p>PWA \u5168\u79F0 Progressive Web app\uFF0C\u5373\u6E10\u8FDB\u5F0F\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\uFF0C\u6807\u51C6\u7531 W3C \u89C4\u5B9A\u3002</p>
<p>\u5B83\u5141\u8BB8\u7F51\u7AD9\u901A\u8FC7\u652F\u6301\u8BE5\u7279\u6027\u7684\u6D4F\u89C8\u5668\u5C06\u7F51\u7AD9\u4F5C\u4E3A App \u5B89\u88C5\u5728\u5BF9\u5E94\u5E73\u53F0\u4E0A\u3002 <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p>
</li>
</ol>
</section>
`,headers:[{level:2,title:"\u5185\u5BB9\u7F13\u5B58\u548C\u66F4\u65B0",slug:"\u5185\u5BB9\u7F13\u5B58\u548C\u66F4\u65B0",children:[{level:3,title:"\u9ED8\u8BA4\u7F13\u5B58",slug:"\u9ED8\u8BA4\u7F13\u5B58",children:[]},{level:3,title:"\u7F13\u5B58\u63A7\u5236",slug:"\u7F13\u5B58\u63A7\u5236",children:[]},{level:3,title:"\u66F4\u65B0\u5F39\u7A97",slug:"\u66F4\u65B0\u5F39\u7A97",children:[]}]},{level:2,title:"\u6E05\u5355\u6587\u4EF6\u751F\u6210",slug:"\u6E05\u5355\u6587\u4EF6\u751F\u6210",children:[{level:3,title:"\u81EA\u52A8\u751F\u6210",slug:"\u81EA\u52A8\u751F\u6210",children:[]},{level:3,title:"\u624B\u52A8\u914D\u7F6E",slug:"\u624B\u52A8\u914D\u7F6E",children:[]}]},{level:2,title:"\u5176\u4ED6\u9009\u9879",slug:"\u5176\u4ED6\u9009\u9879",children:[]},{level:2,title:"\u76F8\u5173\u9605\u8BFB",slug:"\u76F8\u5173\u9605\u8BFB",children:[]}],git:{},readingTime:{minutes:7.23,words:2168},filePathRelative:"zh/guide/advanced/pwa.md"};export{e as data};
