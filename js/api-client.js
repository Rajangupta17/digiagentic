/**
 * DigiAgentic API Client
 * Connects the static frontend to the headless Wagtail CMS backend.
 *
 * Usage:
 *   DigiAgentic.blog.getPosts({ category: 'foundation', page: 1 })
 *   DigiAgentic.blog.getPost('my-post-slug')
 *   DigiAgentic.work.getCases({ industry: 'healthcare', page: 1 })
 *   DigiAgentic.work.getCase('case-slug')
 *   DigiAgentic.faq.getAll()
 *   DigiAgentic.contact.submit({ name, email, company, phone, service_interest, message })
 */
;(function (root) {
  'use strict';

  var API_BASE = 'https://api.digiagentic.in';

  /* ── helpers ────────────────────────────────────────────────── */

  function toQuery(params) {
    if (!params) return '';
    var parts = [];
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] != null && params[key] !== '') {
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
      }
    }
    return parts.length ? '?' + parts.join('&') : '';
  }

  function fetchAPI(endpoint, options) {
    var url = API_BASE + endpoint;
    var opts = Object.assign({ headers: { 'Content-Type': 'application/json' } }, options || {});

    return fetch(url, opts)
      .then(function (res) {
        if (!res.ok) throw new Error('API error: ' + res.status);
        return res.json();
      });
  }

  /* ── public namespaces ─────────────────────────────────────── */

  root.DigiAgentic = {
    API_BASE: API_BASE,

    /** Blog posts */
    blog: {
      getPosts: function (params) {
        return fetchAPI('/api/blog/posts/' + toQuery(params));
      },
      getPost: function (slug) {
        return fetchAPI('/api/blog/posts/' + encodeURIComponent(slug) + '/');
      }
    },

    /** Work / case studies */
    work: {
      getCases: function (params) {
        return fetchAPI('/api/work/cases/' + toQuery(params));
      },
      getCase: function (slug) {
        return fetchAPI('/api/work/cases/' + encodeURIComponent(slug) + '/');
      }
    },

    /** FAQs */
    faq: {
      getAll: function () {
        return fetchAPI('/api/faq/');
      }
    },

    /** Contact form */
    contact: {
      submit: function (formData) {
        return fetchAPI('/api/contact/submit/', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
      }
    }
  };
})(window);
