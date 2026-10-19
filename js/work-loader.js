/**
 * Work / case-studies listing loader
 * Replaces hardcoded work cards with API-driven content.
 * Wires up filter buttons to re-fetch by service category.
 */
;(function () {
  'use strict';

  var GRID_SELECTOR = '.work-grid';
  var FILTERS_SELECTOR = '.work-filters';

  function cardHTML(cs) {
    var thumb = cs.thumbnail
      ? '<img src="' + cs.thumbnail + '" alt="" style="width:100%;height:100%;object-fit:cover">'
      : '<span style="color:var(--page-gold);font-family:\'Poppins\',sans-serif;font-weight:700;font-size:1.15rem;text-align:center;max-width:80%">Project Coming Soon</span>';

    var kicker = cs.kicker || cs.category || '';

    return (
      '<article class="work-card" style="border-radius:8px;overflow:hidden;border:1px solid var(--page-rule);background:var(--page-mist);transition:transform 240ms ease-out,box-shadow 240ms ease-out">' +
        '<div style="aspect-ratio:16/10;background:var(--page-indigo);display:flex;align-items:center;justify-content:center;padding:32px">' +
          thumb +
        '</div>' +
        '<div style="padding:24px">' +
          (kicker ? '<p style="margin:0 0 6px;color:var(--page-teal);font-family:\'Poppins\',sans-serif;font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase">' + kicker + '</p>' : '') +
          '<h3 style="font-family:\'Poppins\',sans-serif;font-size:1.05rem;font-weight:600;color:var(--page-indigo);margin:0 0 8px">' + (cs.title || '') + '</h3>' +
          '<p style="color:var(--page-slate);font-size:.92rem;line-height:1.7;margin:0 0 14px">' + (cs.excerpt || cs.description || '') + '</p>' +
          '<a href="case-study/index.html?slug=' + encodeURIComponent(cs.slug) + '" style="color:var(--page-teal);font-family:\'Poppins\',sans-serif;font-size:.82rem;font-weight:600;text-decoration:none">View case study <span aria-hidden="true">→</span></a>' +
        '</div>' +
      '</article>'
    );
  }

  function render(items) {
    var grid = document.querySelector(GRID_SELECTOR);
    if (!grid) return;
    if (!items.length) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--page-slate);padding:48px 0">No case studies found.</p>';
      return;
    }
    grid.innerHTML = items.map(cardHTML).join('');
  }

  function load(params) {
    DigiAgentic.work.getCases(params)
      .then(function (data) {
        var items = data.items || data.results || data;
        if (Array.isArray(items)) render(items);
      })
      .catch(function () { /* keep static fallback */ });
  }

  function wireFilters() {
    var nav = document.querySelector(FILTERS_SELECTOR);
    if (!nav) return;

    nav.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;

      nav.querySelectorAll('button').forEach(function (b) {
        b.className = 'button';
      });
      btn.className = 'button button-primary';

      var filter = btn.getAttribute('data-filter');
      load(filter && filter !== 'all' ? { service: filter } : {});
    });
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

    load(params);
    wireFilters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
