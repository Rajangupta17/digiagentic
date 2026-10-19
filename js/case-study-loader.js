/**
 * Case-study detail loader
 * Populates the single case-study page from the API using ?slug= query param.
 */
;(function () {
  'use strict';

  function getSlug() {
    var match = window.location.search.match(/[?&]slug=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  }

  function render(cs) {
    var title = document.querySelector('#cs-title');
    var kicker = document.querySelector('.case-study-hero .section-kicker');
    var lede = document.querySelector('.case-study-lede');
    var breadcrumbCurrent = document.querySelector('.case-study-hero .subservice-breadcrumbs > span:last-child');

    if (title) title.textContent = cs.title || '';
    if (kicker) kicker.textContent = cs.kicker || cs.category || '';
    if (lede) lede.textContent = cs.lede || cs.excerpt || '';
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = cs.title || 'Case study';

    /* body sections */
    var sections = document.querySelectorAll('.case-study-section');
    sections.forEach(function (sec) {
      var h2 = sec.querySelector('h2');
      if (!h2) return;
      var heading = h2.textContent.trim().toLowerCase();

      if (heading === 'the challenge' && cs.challenge) {
        var p = sec.querySelector('p');
        if (p) p.innerHTML = cs.challenge;
      }
      if (heading === 'our approach' && cs.approach) {
        var p2 = sec.querySelector('p');
        if (p2) p2.innerHTML = cs.approach;
      }
    });

    /* stats */
    if (cs.stats && cs.stats.length) {
      var statsContainer = document.querySelector('.case-study-stats');
      if (statsContainer) {
        statsContainer.innerHTML = cs.stats.map(function (s) {
          return (
            '<div class="case-study-stat" role="listitem">' +
              '<span class="case-study-stat-value">' + s.value + '</span>' +
              '<span class="case-study-stat-label">' + s.label + '</span>' +
            '</div>'
          );
        }).join('');
      }
    }

    /* services used */
    if (cs.services && cs.services.length) {
      var pills = document.querySelector('.case-study-services');
      if (pills) {
        pills.innerHTML = cs.services.map(function (svc) {
          var href = svc.url || '#';
          return '<a class="case-study-pill" href="' + href + '">' + svc.title + '</a>';
        }).join('');
      }
    }

    /* page meta */
    if (cs.title) {
      document.title = cs.title + ' | DigiAgentic';
    }
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && cs.title) ogTitle.setAttribute('content', cs.title + ' | DigiAgentic');

    var desc = document.querySelector('meta[name="description"]');
    var ogDesc = document.querySelector('meta[property="og:description"]');
    var excerpt = cs.lede || cs.excerpt || '';
    if (excerpt) {
      if (desc) desc.setAttribute('content', excerpt);
      if (ogDesc) ogDesc.setAttribute('content', excerpt);
    }
  }

  function init() {
    if (typeof DigiAgentic === 'undefined') return;

    var slug = getSlug();
    if (!slug) return;

    DigiAgentic.work.getCase(slug)
      .then(function (cs) {
        if (cs && cs.title) render(cs);
      })
      .catch(function () { /* keep static fallback */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
