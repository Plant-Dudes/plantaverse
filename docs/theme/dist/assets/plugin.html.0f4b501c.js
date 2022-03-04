import{_ as r,r as t,o as c,a as i,b as s,d as e,w as l,F as u,e as n,f as o}from"./app.2bf926e2.js";const d={},_=s("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),n(" \u4ECB\u7ECD")],-1),h=n("\u501F\u52A9\u4E8E "),b={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin-api.md",target:"_blank",rel:"noopener noreferrer"},k=n("\u63D2\u4EF6 API"),m=n(" \uFF0C VuePress \u63D2\u4EF6\u53EF\u4EE5\u4E3A\u4F60\u63D0\u4F9B\u5404\u79CD\u4E0D\u540C\u7684\u529F\u80FD\u3002"),g=s("h2",{id:"\u793E\u533A\u63D2\u4EF6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u793E\u533A\u63D2\u4EF6","aria-hidden":"true"},"#"),n(" \u793E\u533A\u63D2\u4EF6")],-1),v=n("\u793E\u533A\u7528\u6237\u521B\u5EFA\u4E86\u5F88\u591A\u63D2\u4EF6\uFF0C\u5E76\u5C06\u5B83\u4EEC\u53D1\u5E03\u5230\u4E86 "),f={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},j=n("NPM"),x=n(" \u4E0A\u3002 VuePress \u56E2\u961F\u4E5F\u5728 "),q={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},w=n("@vuepress"),B=n(" Scope \u4E0B\u7EF4\u62A4\u4E86\u4E00\u4E9B\u5B98\u65B9\u63D2\u4EF6\u3002\u67E5\u770B\u63D2\u4EF6\u672C\u8EAB\u7684\u6587\u6863\u53EF\u4EE5\u83B7\u53D6\u66F4\u8BE6\u7EC6\u7684\u6307\u5F15\u3002"),E=n("\u4E00\u822C\u800C\u8A00\uFF0C\u4F60\u9700\u8981\u5728 "),y={href:"https://v2.vuepress.vuejs.org/zh/reference/config.md#plugins",target:"_blank",rel:"noopener noreferrer"},z=n("plugins"),V=n(" \u914D\u7F6E\u9879\u4E2D\u8BBE\u7F6E\u4F60\u8981\u4F7F\u7528\u7684\u63D2\u4EF6\u540D\u79F0\uFF1A"),N=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">/* \u914D\u7F6E\u9879 */</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u63D2\u4EF6\u540D\u79F0\u6216\u8005\u5B83\u7684\u7B80\u79F0\uFF1A</p><table><thead><tr><th>\u63D2\u4EF6\u540D\u79F0</th><th>\u7B80\u79F0</th></tr></thead><tbody><tr><td><code>vuepress-plugin-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-plugin-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/plugin-foobar</code></td><td><code>@vuepress/foobar</code></td></tr></tbody></table>`,3),P={class:"custom-container tip"},A=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),I=s("p",null,"\u5927\u90E8\u5206\u63D2\u4EF6\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21\uFF0C\u5982\u679C\u540C\u4E00\u4E2A\u63D2\u4EF6\u88AB\u591A\u6B21\u4F7F\u7528\uFF0C\u90A3\u4E48\u53EA\u6709\u6700\u540E\u4E00\u6B21\u4F1A\u751F\u6548\u3002",-1),L=n("\u7136\u800C\uFF0C\u90E8\u5206\u63D2\u4EF6\u662F\u53EF\u4EE5\u88AB\u591A\u6B21\u4F7F\u7528\u7684 (\u4F8B\u5982 "),F={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/container.md",target:"_blank",rel:"noopener noreferrer"},C=n("@vuepress/plugin-container"),D=n(") \uFF0C\u4F60\u5E94\u8BE5\u67E5\u770B\u63D2\u4EF6\u672C\u8EAB\u7684\u6587\u6863\u6765\u83B7\u53D6\u8BE6\u7EC6\u6307\u5F15\u3002"),R=s("h2",{id:"\u672C\u5730\u63D2\u4EF6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u672C\u5730\u63D2\u4EF6","aria-hidden":"true"},"#"),n(" \u672C\u5730\u63D2\u4EF6")],-1),S=s("p",null,"\u5982\u679C\u4F60\u60F3\u8981\u4F7F\u7528\u81EA\u5DF1\u7684\u63D2\u4EF6\uFF0C\u4F46\u662F\u53C8\u4E0D\u60F3\u53D1\u5E03\u5B83\uFF0C\u4F60\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u672C\u5730\u63D2\u4EF6\u3002",-1),M=n("\u63A8\u8350\u4F60\u76F4\u63A5\u5C06 "),T=n("\u914D\u7F6E\u6587\u4EF6"),G=n(" \u4F5C\u4E3A\u63D2\u4EF6\u4F7F\u7528\uFF0C\u56E0\u4E3A "),H={href:"https://v2.vuepress.vuejs.org/zh/reference/config.md#%E6%8F%92%E4%BB%B6-api",target:"_blank",rel:"noopener noreferrer"},J=n("\u51E0\u4E4E\u6240\u6709\u7684\u63D2\u4EF6 API \u90FD\u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u4F7F\u7528"),K=n("\uFF0C\u8FD9\u5728\u7EDD\u5927\u591A\u6570\u573A\u666F\u4E0B\u90FD\u66F4\u4E3A\u65B9\u4FBF\u3002"),O=o(`<p>\u4F46\u662F\u5982\u679C\u4F60\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8981\u505A\u7684\u4E8B\u60C5\u592A\u591A\u4E86\uFF0C\u6700\u597D\u8FD8\u662F\u5C06\u5B83\u4EEC\u63D0\u53D6\u5230\u5355\u72EC\u7684\u63D2\u4EF6\u4E2D\uFF0C\u7136\u540E\u901A\u8FC7\u8BBE\u7F6E\u7EDD\u5BF9\u8DEF\u5F84\u6216\u8005\u901A\u8FC7 require \u6765\u4F7F\u7528\u5B83\u4EEC\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./path/to/your-plugin.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./another-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2),Q=n("\u524D\u5F80 "),U={href:"https://v2.vuepress.vuejs.org/zh/advanced/plugin.md",target:"_blank",rel:"noopener noreferrer"},W=n("\u6DF1\u5165 > \u5F00\u53D1\u63D2\u4EF6"),X=n(" \u5B66\u4E60\u5982\u4F55\u5F00\u53D1\u4F60\u81EA\u5DF1\u7684\u63D2\u4EF6\u3002");function Y(Z,$){const a=t("ExternalLinkIcon"),p=t("RouterLink");return c(),i(u,null,[_,s("p",null,[h,s("a",b,[k,e(a)]),m]),g,s("p",null,[v,s("a",f,[j,e(a)]),x,s("a",q,[w,e(a)]),B]),s("p",null,[E,s("a",y,[z,e(a)]),V]),N,s("div",P,[A,I,s("p",null,[L,s("a",F,[C,e(a)]),D])]),R,S,s("p",null,[M,e(p,{to:"/zh/basic/vuepress/config.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:l(()=>[T]),_:1}),G,s("a",H,[J,e(a)]),K]),O,s("p",null,[Q,s("a",U,[W,e(a)]),X])],64)}var sn=r(d,[["render",Y]]);export{sn as default};
