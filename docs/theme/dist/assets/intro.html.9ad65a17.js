import{_ as r,r as t,o as p,a as u,b as n,d as s,w as a,F as d,e,f as h}from"./app.2bf926e2.js";const b={},m=e("Besides Markdown syntaxes VuePress itself adds, "),k=n("code",null,"vuepress-theme-hope",-1),_=e(" enables more syntax in Markdown via "),g={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/",target:"_blank",rel:"noopener noreferrer"},f=e("vuepress-plugin-md-enhance"),v=e(" plugin."),y=n("h2",{id:"built-in-enhancements",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#built-in-enhancements","aria-hidden":"true"},"#"),e(" Built-in enhancements")],-1),x=n("p",null,"VuePress comes with GitHub-style tables, Emoji, TOC, code line numbers, specific line highlighting, etc. are all available out of the box.",-1),w=e("For detailed syntax, please see "),C=e("Built-in Markdown Enhance"),E=e("."),j=n("h2",{id:"enable-markdown-enhance",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#enable-markdown-enhance","aria-hidden":"true"},"#"),e(" Enable Markdown Enhance")],-1),B=n("code",null,"themeconfig.plugin.mdEnhance",-1),V=e(" in "),I=n("code",null,".vuepress/config.js",-1),L=e(" will be passed to the plugin as a plugin option. Visit "),N={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/",target:"_blank",rel:"noopener noreferrer"},A=e("plugin documentation"),G=e(" to see the usage."),H=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"Tips"),n("p",null,"Don\u2019t worry about the size of your site. If you don\u2019t enable related features, the final code won\u2019t include code for these features.")],-1),M=n("h2",{id:"enable-all",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#enable-all","aria-hidden":"true"},"#"),e(" Enable all")],-1),P=e("You can set "),T=n("code",null,"themeconfig.plugins.mdEnhance.enableAll",-1),S=e(" to enable all features of the "),F={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/",target:"_blank",rel:"noopener noreferrer"},O=e("md-enhance"),Y=e(" plugin."),z=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.ts"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" defineHopeConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineHopeConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  themeConfig`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    plugins`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      mdEnhance`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        enableAll`),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),R=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// .vuepress/config.js"),e(`
`),n("span",{class:"token keyword"},"const"),e(),n("span",{class:"token punctuation"},"{"),e(" defineHopeConfig "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

module`),n("span",{class:"token punctuation"},"."),e("exports "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"defineHopeConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"themeConfig"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
        `),n("span",{class:"token literal-property property"},"enableAll"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),q=h('<div class="custom-container danger"><p class="custom-container-title">Warning</p><p>Please use this option ONLY for playing or testing.</p><p>As time grows, <code>vupress-plugin-md-enhance</code> is becoming more powerful. It\u2019s adding lots of syntax to Markdown parser and more code to output.</p><p>Enabling features you don\u2019t need will increase dev and build time. (<code>markdown-it</code> has to check extra syntax)</p><p>Also, presentation feature will add a 700KB size chunk (mostly is <code>reveal.js</code>) to your output.</p><p>Please enable ONLY the feature you want to use.</p></div><h3 id="enable-specific-syntax" tabindex="-1"><a class="header-anchor" href="#enable-specific-syntax" aria-hidden="true">#</a> Enable specific syntax</h3>',2),D=e("Specific syntax configuration items can be found in the corresponding instruction page or "),J=e("Theme Plugin Config"),K=e(".");function W(Q,U){const o=t("ExternalLinkIcon"),l=t("RouterLink"),i=t("CodeGroupItem"),c=t("CodeGroup");return p(),u(d,null,[n("p",null,[m,k,_,n("a",g,[f,s(o)]),v]),y,x,n("p",null,[w,s(l,{to:"/basic/vuepress/markdown.html"},{default:a(()=>[C]),_:1}),E]),j,n("p",null,[B,V,I,L,n("a",N,[A,s(o)]),G]),H,M,n("p",null,[P,T,S,n("a",F,[O,s(o)]),Y]),s(c,null,{default:a(()=>[s(i,{title:"TS"},{default:a(()=>[z]),_:1}),s(i,{title:"JS"},{default:a(()=>[R]),_:1})]),_:1}),q,n("p",null,[D,s(l,{to:"/config/plugins/md-enhance.html"},{default:a(()=>[J]),_:1}),K])],64)}var Z=r(b,[["render",W]]);export{Z as default};
