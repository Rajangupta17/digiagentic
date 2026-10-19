/**
 * Contact form handler
 * Intercepts the existing contact form submission and sends it to the API.
 * Works with the form already in sections/contact markup.
 */
;(function () {
  'use strict';

  var FORM_SELECTOR = '.contact-form';

  function showStatus(form, type, msg) {
    var existing = form.querySelector('.form-status');
    if (existing) existing.remove();

    var el = document.createElement('div');
    el.className = 'form-status';
    el.setAttribute('role', 'alert');

    var bgColor = type === 'success' ? 'var(--page-teal)' : '#c0392b';
    el.style.cssText = 'margin-top:16px;padding:14px 20px;border-radius:8px;background:' + bgColor + ';color:#fff;font-family:"Poppins",sans-serif;font-size:.9rem;font-weight:500;text-align:center';
    el.textContent = msg;

    form.appendChild(el);

    if (type === 'success') {
      setTimeout(function () { if (el.parentNode) el.remove(); }, 6000);
    }
  }

  function setLoading(btn, loading) {
    if (loading) {
      btn.dataset.originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;
      btn.style.opacity = '0.7';
    } else {
      btn.textContent = btn.dataset.originalText || 'Send message';
      btn.disabled = false;
      btn.style.opacity = '1';
    }
  }

  function init() {
    if (typeof DigiAgentic === 'undefined') return;

    var form = document.querySelector(FORM_SELECTOR);
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = form.querySelector('button[type="submit"], .button-primary');
      if (btn) setLoading(btn, true);

      var formData = {
        name: (form.querySelector('[name="name"]') || {}).value || '',
        email: (form.querySelector('[name="email"]') || {}).value || '',
        company: (form.querySelector('[name="company"]') || {}).value || '',
        phone: (form.querySelector('[name="phone"]') || {}).value || '',
        service_interest: (form.querySelector('[name="service_interest"], [name="service"]') || {}).value || '',
        message: (form.querySelector('[name="message"]') || {}).value || ''
      };

      DigiAgentic.contact.submit(formData)
        .then(function () {
          showStatus(form, 'success', 'Thank you! We’ll be in touch shortly.');
          form.reset();
        })
        .catch(function () {
          showStatus(form, 'error', 'Something went wrong. Please try again or email us directly.');
        })
        .then(function () {
          if (btn) setLoading(btn, false);
        });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
