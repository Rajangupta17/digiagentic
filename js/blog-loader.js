/**
 * Blog listing loader
 * Replaces hardcoded blog cards with API-driven content.
 * Falls back to static HTML if the API is unreachable.
 */
;(function () {
  'use strict';

  var HEADER_COLORS = ['var(--page-indigo)', 'var(--page-teal)', '#14172E'];
  var GRID_SELECTOR = '.blog-grid';          // added to blog/index.html
  var CATEGORY_MAP = {
    foundation: 'Foundation',
    visibility: 'Visibility',
    credibility: 'Credibility',
    growth: 'Growth'
  };

  function categoryLabel(cat) {
    if (!cat) return '';
    return CATEGORY_MAP[cat.toLowerCase()] || cat;
  }

  function cardHTML(post, idx) {
    var bg = HEADER_COLORS[idx % HEADER_COLORS.length];
    var cat = categoryLabel(post.category);
    var thumb = post.thumbnail
      ? '<img src="' + post.thumbnail + '" alt="" style="width:100%;height:100%;object-fit:cover">'
      : '<span style="color:var(--page-gold);font-family:\'Poppins\',sans-serif;font-weight:700;font-size:1.2rem;text-align:center">' + (cat || 'Article') + '</span>';

    return (
      '<article style="border-radius:16px;overflow:hidden;border:1px solid var(--page-rule);background:#fff;transition:transform 220ms ease,box-shadow 220ms ease">' +
        '<div style="aspect-ratio:16/9;background:' + bg + ';display:flex;align-items:center;justify-content:center;padding:24px">' +
          thumb +
        '</div>' +
        '<div style="padding:22px 24px 26px">' +
          (cat ? '<p style="margin:0 0 6px;color:var(--page-teal);font-family:\'Poppins\',sans-serif;font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase">' + cat + '</p>' : '') +
          '<h3 style="font-family:\'Poppins\',sans-serif;font-size:1.05rem;font-weight:600;color:var(--page-indigo);margin:0 0 8px">' + post.title + '</h3>' +
          '<p style="color:var(--page-slate);font-size:.92rem;line-height:1.7;margin:0 0 14px">' + (post.excerpt || '') + '</p>' +
          '<a href="post/index.html?slug=' + encodeURIComponent(post.slug) + '" style="color:var(--page-teal);font-family:\'Poppins\',sans-serif;font-size:.82rem;font-weight:600;text-decoration:none">Read article <span aria-hidden="true">→</span></a>' +
        '</div>' +
      '</article>'
    );
  }

  function render(posts) {
    var grid = document.querySelector(GRID_SELECTOR);
    if (!grid || !posts.length) return;
    grid.innerHTML = posts.map(cardHTML).join('');
  }

  function init() {
    if (typeof DigiAgentic === 'undefined') return;

    var params = {};
    var search = window.location.search;
    if (search) {
      search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (_, k, v) {
        params[decodeURIComponent(k)] = decodeURIComponent(v);
      });
    }

    DigiAgentic.blog.getPosts(params)
      .then(function (data) {
        var items = data.items || data.results || data;
        if (Array.isArray(items) && items.length) render(items);
      })
      .catch(function () { /* keep static fallback */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
