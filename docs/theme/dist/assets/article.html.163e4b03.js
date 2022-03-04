import{_ as e,f as t}from"./app.2bf926e2.js";var i="/assets/article-list.6f415a33.png",a="/assets/icon-type.41b1a39c.png";const r={},s=t('<p>The topic provides you with a list of all articles under the path <code>/article/</code> by default.</p><h2 id="auto-excerpt" tabindex="-1"><a class="header-anchor" href="#auto-excerpt" aria-hidden="true">#</a> Auto Excerpt</h2><p>By default, the theme will only display the excerpt or description you specify in the article list.</p><p>If you want the theme to automatically extract excerpts, set <code>autoExcerpt: true</code> in <code>themeConfig.plugins.blog</code>.</p><h2 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> Article</h2><p>All articles will be added to the article list by default and rendered under the path <code>/article/</code>.</p><p><img src="'+i+'" alt="Article list" loading="lazy"></p><p>If you don\u2019t want the list to contain some specific articles, just set the <code>article</code> to <code>false</code> in the frontmatter of the article.</p><p>To sticky a specific article in the article list, just set <code>sticky</code> to <code>true</code> in the frontmatter of the article.</p><div class="custom-container tip"><p class="custom-container-title">Order</p><p>For sticky articles, you can set <code>sticky</code> with a number to set their order. Articles with large numbers will be listed first.</p></div><h2 id="star-articles" tabindex="-1"><a class="header-anchor" href="#star-articles" aria-hidden="true">#</a> Star articles</h2><p>You can star an article by setting <code>star</code> to <code>true</code> in frontmatter. After staring, users can view these articles on the <code>/star/</code> page.</p><p>At the same time, any star articles will be displayed in the article column on the sidebar of the blog homepage.</p><div class="custom-container info"><p class="custom-container-title">Info</p><p>Our consideration for providing star options: Theme users may want to show visitors some high-quality articles, but do not want sticky articles to flood the homepage, resulting in visitors not being able to see the recently updated articles.</p></div><div class="custom-container tip"><p class="custom-container-title">Order</p><p>Similar to sticky articles, you can also set <code>star</code> to number to set their order. Articles with large numbers will be listed first.</p></div><h2 id="encryption-and-slideshow" tabindex="-1"><a class="header-anchor" href="#encryption-and-slideshow" aria-hidden="true">#</a> Encryption and Slideshow</h2><p>The theme provides separate lists for the two special pages: encrypted article page and slide page. You can view them on the <code>/encrypt/</code> and <code>/slide/</code> pages.</p><p>At the same time, to help visitors distinguish between these two categories of pages, their categories will be clearly marked with icons in the article list.</p><p><img src="'+a+'" alt="Category Tips" loading="lazy"></p>',19);function o(c,l){return s}var d=e(r,[["render",o]]);export{d as default};
