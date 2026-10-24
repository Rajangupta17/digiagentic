/* ============================================================
   DigiAgentic — in-site keyword search (Pagefind).
   Loaded on every page (landing + CMS). Wires the navbar search
   button / search form to open a modal that queries the Pagefind
   index built at deploy time (/pagefind/). No server needed.
   Degrades silently if the index isn't present (e.g. local dev).
   ============================================================ */
(function () {
  var buttons = document.querySelectorAll(".search-btn");
  var forms = document.querySelectorAll(".search-form");
  if (!buttons.length && !forms.length) return;

  var BASE = "/pagefind/";
  var modal = null;
  var initialised = false;

  function ensureCss() {
    if (document.getElementById("pf-css")) return;
    var l = document.createElement("link");
    l.id = "pf-css";
    l.rel = "stylesheet";
    l.href = BASE + "pagefind-ui.css";
    document.head.appendChild(l);
  }

  function buildModal() {
    modal = document.createElement("div");
    modal.className = "site-search-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Search the site");
    modal.hidden = true;
    modal.innerHTML =
      '<div class="site-search-box">' +
      '<button type="button" class="site-search-close" aria-label="Close search">&times;</button>' +
      '<div id="pf-search"></div>' +
      "</div>";
    document.body.appendChild(modal);
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
    modal.querySelector(".site-search-close").addEventListener("click", closeModal);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal && !modal.hidden) closeModal();
    });
  }

  function loadScript(src, cb) {
    var s = document.createElement("script");
    s.src = src;
    s.onload = function () { cb(null); };
    s.onerror = function () { cb(new Error("load failed")); };
    document.head.appendChild(s);
  }

  function focusInput() {
    var inp = modal.querySelector("input");
    if (inp) try { inp.focus(); } catch (e) {}
  }

  function openModal() {
    ensureCss();
    if (!modal) buildModal();
    modal.hidden = false;
    document.body.style.overflow = "hidden";

    if (initialised) { focusInput(); return; }

    function start() {
      if (!window.PagefindUI) {
        document.getElementById("pf-search").innerHTML =
          '<p style="padding:18px;font-family:Poppins,sans-serif;color:#6b7186;">' +
          "Search is being set up. Please try again in a moment.</p>";
        return;
      }
      try {
        new window.PagefindUI({
          element: "#pf-search",
          showImages: false,
          showSubResults: true,
          resetStyles: true
        });
        initialised = true;
        focusInput();
      } catch (e) {}
    }

    if (window.PagefindUI) start();
    else loadScript(BASE + "pagefind-ui.js", function () { start(); });
  }

  function closeModal() {
    if (modal) { modal.hidden = true; document.body.style.overflow = ""; }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function (e) { e.preventDefault(); openModal(); });
  });
  // The old search form submitted to "/" (did nothing). Intercept it → open search.
  forms.forEach(function (f) {
    f.addEventListener("submit", function (e) { e.preventDefault(); openModal(); });
  });
})();
