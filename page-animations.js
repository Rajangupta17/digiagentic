/**
 * DigiAgentic — Inner-page animation system
 *
 * Mirrors the landing-page reveal-on-scroll pattern
 * (IntersectionObserver + staggered delays).
 * Respects prefers-reduced-motion.
 */

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

if ("IntersectionObserver" in window && !motionPreference.matches) {
  /* ── Selectors to reveal on scroll ─────────────────────────── */

  const revealTargets = document.querySelectorAll(
    [
      /* ── Services index ──────────────────────────────────────── */
      ".services-banner-copy > *",
      ".services-intro",
      ".services-jump-links a",
      ".category-heading",
      ".service-card",
      ".services-final-cta-inner",

      /* ── Service-detail (pillar) pages ───────────────────────── */
      ".service-detail-intro",
      ".service-detail-intro-copy",
      ".pillar-services-heading",
      ".service-detail-journey-copy",
      ".service-layer-list a",

      /* ── Subservice pages ────────────────────────────────────── */
      ".service-pipeline-stage",
      ".subservice-intro",
      ".subservice-intro-copy",
      ".subservice-include",
      ".subservice-next-inner",

      /* ── Work / Portfolio ────────────────────────────────────── */
      ".work-filters",
      ".work-card",

      /* ── Case-study ──────────────────────────────────────────── */
      ".case-study-section",
      ".case-study-stat",
      ".case-study-pill",

      /* ── Generic / shared across inner pages ─────────────────── */
      ".section-kicker",
      ".section-heading",
      ".service-detail-cta-inner",

      /* ── Footer (same as landing) ────────────────────────────── */
      ".footer-brand",
      ".footer-links > div",
      ".footer-social",
    ].join(","),
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -36px 0px",
    },
  );

  document.documentElement.classList.add("motion-ready");

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal-on-scroll");
    target.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    revealObserver.observe(target);
  });

  /* ── Generic inner-page sections (for pages with no unique class) */

  const genericSections = document.querySelectorAll(
    "main.landing-page > section:not(.service-detail-hero):not(.subservice-hero):not(.service-detail-cta):not(.footer-cta)",
  );

  genericSections.forEach((section) => {
    /* Animate children that aren't already targeted */
    const children = section.querySelectorAll(
      "h2, h3, p, article, details, a[style], div[style]",
    );

    children.forEach((child) => {
      if (!child.classList.contains("reveal-on-scroll")) {
        child.classList.add("reveal-on-scroll");
        child.style.setProperty(
          "--reveal-delay",
          `${(Array.from(children).indexOf(child) % 4) * 70}ms`,
        );
        revealObserver.observe(child);
      }
    });
  });

  /* ── Hero entrance animation ─────────────────────────────── */

  const heroInner =
    document.querySelector(".service-detail-hero-inner") ||
    document.querySelector(".work-hero") ||
    document.querySelector(".case-study-hero") ||
    document.querySelector("main.landing-page > section:first-of-type");

  if (heroInner) {
    heroInner.classList.add("page-hero-animate");
    const heroChildren = heroInner.children;
    Array.from(heroChildren).forEach((child, i) => {
      child.style.setProperty("--hero-delay", `${80 + i * 80}ms`);
    });
  }

  /* ── Service-detail diagram spin-in ──────────────────────── */

  const diagram = document.querySelector(".service-detail-diagram");
  if (diagram) {
    diagram.classList.add("diagram-animate");
  }

  /* ── Subservice hero art ─────────────────────────────────── */

  const subserviceArt = document.querySelector(".subservice-hero-art");
  if (subserviceArt) {
    subserviceArt.classList.add("subservice-art-animate");
  }

  /* ── Banner layers (services index) ──────────────────────── */

  const bannerLayers = document.querySelectorAll(".banner-layer");
  bannerLayers.forEach((layer, i) => {
    layer.classList.add("banner-layer-animate");
    layer.style.setProperty("--layer-delay", `${200 + i * 120}ms`);
  });
}
