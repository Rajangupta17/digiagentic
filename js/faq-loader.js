/**
 * FAQ loader
 * Replaces hardcoded <details> entries with API-driven FAQs.
 */
;(function () {
  'use strict';

  var CONTAINER_SELECTOR = '.faq-list';

  function faqHTML(item, idx) {
    var openAttr = idx === 0 ? ' open' : '';
    return (
      '<details style="border:1px solid var(--page-rule);border-radius:12px;padding:0;margin-bottom:14px;background:#fff"' + openAttr + '>' +
        '<summary style="padding:20px 24px;cursor:pointer;font-family:\'Poppins\',sans-serif;font-size:1.02rem;font-weight:600;color:var(--page-indigo);list-style:none;display:flex;align-items:center;justify-content:space-between">' +
          '<span>' + item.question + '</span>' +
          '<span aria-hidden="true" style="color:var(--page-teal);font-size:1.2rem;transition:transform 200ms ease">+</span>' +
        '</summary>' +
        '<div style="padding:0 24px 20px;color:var(--page-slate);line-height:1.75">' +
          item.answer +
        '</div>' +
      '</details>'
    );
  }

  function render(faqs) {
    var container = document.querySelector(CONTAINER_SELECTOR);
    if (!container || !faqs.length) return;
    container.innerHTML = faqs.map(faqHTML).join('');
  }

  function init() {
    if (typeof DigiAgentic === 'undefined') return;

    DigiAgentic.faq.getAll()
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
