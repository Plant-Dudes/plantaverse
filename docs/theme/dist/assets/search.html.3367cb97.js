import{_ as o,r as p,o as r,a as l,b as n,d as a,w as c,F as i,e as s,f as u}from"./app.2bf926e2.js";const b={},k=s("The theme adds built-in support for "),h={href:"https://v2.vuepress.vuejs.org/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"@vuepress/search",-1),m=s(" and "),g={href:"https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"@vuepress/docsearch",-1),q=s("."),v=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"Note"),n("p",null,"To keep the theme simple, we will not add these two plugins as dependencies , so install the needed plugin yourself.")],-1),_=n("h2",{id:"use-vuepress-search",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#use-vuepress-search","aria-hidden":"true"},"#"),s(" use "),n("code",null,"@vuepress/search")],-1),f=n("p",null,[s("You can pass plugin options via "),n("code",null,"themeConfig.plugins.search"),s(".")],-1),w=s("See "),x={href:"https://v2.vuepress.vuejs.org/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},T=s("Plugin Docs"),E=s(" for the available options for search plugin."),I=u(`<h2 id="use-vuepress-docsearch" tabindex="-1"><a class="header-anchor" href="#use-vuepress-docsearch" aria-hidden="true">#</a> use <code>@vuepress/docsearch</code></h2><p>You can pass plugin options via <code>themeConfig.plugins.docsearch</code>.</p><p>In order to use the plugin properly, you need to pass in <code>apiKey</code>, <code>indexName</code> and <code>appId</code> correctly, and set up the Algolia Crawler correctly according to the following requirements.</p><details class="custom-block details"><summary>Crawler Config Example</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Crawler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">&quot;YOUR_APP_ID&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&quot;YOUR_API_KEY&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rateLimit</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token literal-property property">startUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// These are urls which algolia start to craw</span>
    <span class="token comment">// If your site is divided in to mutiple parts,</span>
    <span class="token comment">// you may want to set mutiple entry links</span>
    <span class="token string">&quot;https://YOUR_WEBSITE_URL/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sitemaps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// if you are using sitemap plugins (e.g.: vuepress-plugin-sitemap2), you may provide one</span>
    <span class="token string">&quot;https://YOUR_WEBSITE_URL/sitemap.xml&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ignoreCanonicalTo</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">exclusionPatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// You can use this to stop algolia crawing some paths</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">discoveryPatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// These are urls which algolia looking for,</span>
    <span class="token string">&quot;https://YOUR_WEBSITE_URL/**&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// Crawler schedule, set it according to your docs update frequency</span>
  <span class="token literal-property property">schedule</span><span class="token operator">:</span> <span class="token string">&quot;at 02:00 every 1 day&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// you may have mutiple actions, especially when you are deploying mutiple docs under one domain</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// name the index with name you like</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&quot;YOUR_INDEX_NAME&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// paths where the index take effect</span>
      <span class="token literal-property property">pathsToMatch</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://YOUR_WEBSITE_URL/**&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// controls how algolia extracts records from your site</span>
      <span class="token function-variable function">recordExtractor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $<span class="token punctuation">,</span> helpers <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// The following are the default options for vuepress-theme-hope</span>
        <span class="token comment">// vuepress-theme-hope default container class name is theme-hope-content</span>
        <span class="token keyword">return</span> helpers<span class="token punctuation">.</span><span class="token function">docsearch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">recordProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">lvl0</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">selectors</span><span class="token operator">:</span> <span class="token string">&quot;.sidebar-heading.active&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token string">&quot;Documentation&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl1</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h1&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl2</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h2&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl3</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h3&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl4</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h4&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl5</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h5&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lvl6</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content h6&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;.theme-hope-content p, .theme-hope-content li&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">indexHeadings</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">initialIndexSettings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// controls how index are initialized</span>
    <span class="token comment">// only has effects before index are initialize</span>
    <span class="token comment">// you may need to delete your index and recraw after modification</span>
    <span class="token constant">YOUR_INDEX_NAME</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">attributesForFaceting</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lang&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributesToRetrieve</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;hierarchy&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;anchor&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;url&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributesToHighlight</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;hierarchy&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hierarchy_camel&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributesToSnippet</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;content:10&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">camelCaseAttributes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;hierarchy&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hierarchy_radio&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">searchableAttributes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;unordered(hierarchy_radio_camel.lvl0)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio.lvl0)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio_camel.lvl1)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio.lvl1)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio_camel.lvl2)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio.lvl2)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio_camel.lvl3)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio.lvl3)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio_camel.lvl4)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio.lvl4)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio_camel.lvl5)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio.lvl5)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio_camel.lvl6)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_radio.lvl6)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_camel.lvl0)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy.lvl0)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_camel.lvl1)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy.lvl1)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_camel.lvl2)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy.lvl2)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_camel.lvl3)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy.lvl3)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_camel.lvl4)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy.lvl4)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_camel.lvl5)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy.lvl5)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy_camel.lvl6)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;unordered(hierarchy.lvl6)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">distinct</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributeForDistinct</span><span class="token operator">:</span> <span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">customRanking</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;desc(weight.pageRank)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;desc(weight.level)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;asc(weight.position)&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ranking</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;words&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;filters&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;typo&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;attribute&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;proximity&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;exact&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">highlightPreTag</span><span class="token operator">:</span> <span class="token string">&#39;&lt;span class=&quot;algolia-docsearch-suggestion--highlight&quot;&gt;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">highlightPostTag</span><span class="token operator">:</span> <span class="token string">&quot;&lt;/span&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minWordSizefor1Typo</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minWordSizefor2Typos</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token literal-property property">allowTyposOnNumericTokens</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minProximity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ignorePlurals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">advancedSyntax</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attributeCriteriaComputedByMinProximity</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">removeWordsIfNoResults</span><span class="token operator">:</span> <span class="token string">&quot;allOptional&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br></div></div></details><div class="custom-container warning"><p class="custom-container-title">Note</p><p><code>initialIndexSettings.YOUR_INDEX_NAME.attributesForFaceting</code> field <strong>must</strong> contain <code>&#39;lang&#39;</code>, otherwise the plugin will not work properly.</p></div>`,5),R=s("See "),N={href:"https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},P=s("Plugin Docs"),U=s(" for the available options for docsearch plugin."),Y=n("h2",{id:"additional-info",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#additional-info","aria-hidden":"true"},"#"),s(" Additional Info")],-1),C={class:"custom-container note"},S=n("p",{class:"custom-container-title"},"Note",-1),O=s("You can also call plugins via "),A=n("code",null,"plugins",-1),L=s(" in the "),B=s("VuePress config file"),D=s(".");function j(F,W){const t=p("ExternalLinkIcon"),e=p("RouterLink");return r(),l(i,null,[n("p",null,[k,n("a",h,[d,a(t)]),m,n("a",g,[y,a(t)]),q]),v,_,f,n("p",null,[w,n("a",x,[T,a(t)]),E]),I,n("p",null,[R,n("a",N,[P,a(t)]),U]),Y,n("div",C,[S,n("p",null,[O,A,L,a(e,{to:"/basic/vuepress/config.html"},{default:c(()=>[B]),_:1}),D])])],64)}var M=o(b,[["render",j]]);export{M as default};
