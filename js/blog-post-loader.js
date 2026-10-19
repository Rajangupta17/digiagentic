/**
 * Blog post detail loader
 * Populates the single-post page from the API using ?slug= query param.
 * Falls back to static placeholder content if API is unreachable.
 */
;(function () {
  'use strict';

  function getSlug() {
    var match = window.location.search.match(/[?&]slug=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  }

  function render(post) {
    var title = document.querySelector('.blog-post-title');
    var category = document.querySelector('.blog-post-category');
    var meta = document.querySelector('.blog-post-meta');
    var body = document.querySelector('.blog-post-body');
    var breadcrumbCurrent = document.querySelector('.blog-post-breadcrumb-current');

    if (title) title.textContent = post.title || '';
    if (category) category.textContent = post.category || '';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = post.title || 'Article';

    if (meta) {
      var author = post.author || 'DigiAgentic';
      var readTime = post.read_time || post.reading_time || '5 min read';
      meta.textContent = 'By ' + author + ' · ' + readTime;
    }

    if (body && post.body) {
      body.innerHTML = post.body;
    }

    if (post.title) {
      document.title = post.title + ' | DigiAgentic Blog';
    }

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && post.title) ogTitle.setAttribute('content', post.title + ' | DigiAgentic');

    var desc = document.querySelector('meta[name="description"]');
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (post.excerpt) {
      if (desc) desc.setAttribute('content', post.excerpt);
      if (ogDesc) ogDesc.setAttribute('content', post.excerpt);
    }
  }

  function init() {
    if (typeof DigiAgentic === 'undefined') return;

    var slug = getSlug();
    if (!slug) return;

    DigiAgentic.blog.getPost(slug)
      .then(function (post) {
        if (post && post.title) render(post);
      })
      .catch(function () { /* keep static fallback */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
