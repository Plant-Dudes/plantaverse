import{_ as n,f as a}from"./app.2bf926e2.js";var s="/assets/home.b5ec7a65.png";const e={},t=a('<p><code>vuepress-theme-hope</code> improves the default home page.</p><p>To use it, set <code>home: true</code> in page frontmatter. Any extra content after the <code>YAML front matter</code> will be parsed as normal Markdown and rendered after the features section.</p><p><img src="'+s+`" alt="Screenshot" loading="lazy"></p><h2 id="item-style" tabindex="-1"><a class="header-anchor" href="#item-style" aria-hidden="true">#</a> Item style</h2><p>The frontmatter parameters that can be configured are as follows:</p><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li>Type: <code>boolean</code></li></ul><p>Enable homepage style when set to <code>true</code></p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>Type: <code>string | false</code></li><li>Default: <code>&#39;Hello&#39;</code></li></ul><p>Title, won\u2019t display when set to <code>false</code></p><h3 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h3><ul><li>Type: <code>string</code></li></ul><p>Home hero (logo) image address, need to fill in the absolute path (pictures need to be placed in the <code>.vuepress/public</code> folder)</p><h3 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark" aria-hidden="true">#</a> heroImageDark</h3><ul><li>Type: <code>string</code></li></ul><p>Darkmode Home hero (logo) image address, need to fill in the absolute path (pictures need to be placed in the <code>.vuepress/public</code> folder), will be the same as <code>heroImage</code> by default.</p><h3 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h3><ul><li>Type: <code>string</code></li></ul><p>Home icon alt text</p><h3 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline" aria-hidden="true">#</a> tagline</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;Welcome to your VuePress site&#39;</code></li></ul><p>Append text</p><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h3><ul><li>Type: <code>ActionConfig | ActionConfig[]</code></li></ul><p><code>ActionConfig</code> structure:</p><ul><li><code>text</code>: Button text</li><li><code>link</code>: Button link</li><li><code>type</code>: Button type (Only support <code>&#39;primary&#39;</code> and <code>&#39;default&#39;</code> (default))</li></ul><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h3><ul><li>Type: <code>Feature[]</code></li></ul><p>Structure of <code>Feature</code>:</p><ul><li><code>title</code>: <code>string</code> title</li><li><code>details</code> (optional): <code>string</code> details</li><li><code>icon</code> (optional): <code>string</code> icon FontClass</li><li><code>link</code> (optional): <code>string</code> link address</li></ul><p>Feature description</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">icon</span><span class="token punctuation">:</span> home
<span class="token key atrule">title</span><span class="token punctuation">:</span> Home
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.svg
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>hope
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> A vuepress theme with tons of features\u2728
<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started \u{1F4A1}
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary

  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Config \u{1F6E0}
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /config/

<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Markdown Enhance
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> markdown
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Add align<span class="token punctuation">,</span> sup/sub script<span class="token punctuation">,</span> footnote<span class="token punctuation">,</span> tasklist<span class="token punctuation">,</span> tex<span class="token punctuation">,</span> flowchart<span class="token punctuation">,</span> diagram<span class="token punctuation">,</span> mark and presentation support in markdown
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/markdown/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Pageviews and comments
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> comment
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Start pageview statistics and comment support with Waline
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/comment/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Article information display
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> info
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Add author<span class="token punctuation">,</span> writing date<span class="token punctuation">,</span> reading time<span class="token punctuation">,</span> word count and other information to your article
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/page<span class="token punctuation">-</span>info/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Blog support
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> blog
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Add date<span class="token punctuation">,</span> tags and category to your articles<span class="token punctuation">,</span> then article<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> category and timeline list will be auto generated
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/blog/intro/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Article Encryption
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> lock
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Encrypt you article based on path and folders<span class="token punctuation">,</span> so that only the one you want could see them
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/encrypt/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Custom theme color
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> palette
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Supports custom theme colors and allows users to switch between preset theme colors
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/theme<span class="token punctuation">-</span>color/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Dark Mode
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> contrast
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Switch between light and dark modes freely
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/interface/darkmode/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> SEO enhancement
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> config
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Optimize pages for search engines
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/seo/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Sitemap
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> sitemap
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Generate a Sitemap for your website
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/sitemap/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Feed support
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> rss
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Generate feed to allow users to subcribe it
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/feed/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> PWA support
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> mobile
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Make your website more like an APP
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/pwa/

  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> More new features
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> more
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Including icon support<span class="token punctuation">,</span> path navigation<span class="token punctuation">,</span> footer support<span class="token punctuation">,</span> fullscreen button<span class="token punctuation">,</span> blog homepage<span class="token punctuation">,</span> etc.
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/feature/

<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright \xA9 2019<span class="token punctuation">-</span>present Mr.Hope</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div>`,34);function p(l,o){return t}var u=n(e,[["render",p]]);export{u as default};
