const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

if ("IntersectionObserver" in window && !motionPreference.matches) {
  const revealTargets = document.querySelectorAll(
    [
      ".brand-proof-strip",
      ".why-copy",
      ".why-points article",
      ".section-heading",
      ".system-card",
      ".results-grid article",
      ".service-card",
      ".approach-intro",
      ".approach-ticker",
      ".testimonial-grid blockquote",
      ".client-review-card",
      ".contact-copy",
      ".contact-form",
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

}

const processTicker = document.querySelector(".approach-ticker");

if (processTicker) {
  const processTrack = processTicker.querySelector(".process-track");
  const originalSteps = processTrack.querySelector(".approach-steps");
  const toggleButton = processTicker.querySelector(".process-toggle");
  const duplicateSteps = originalSteps.cloneNode(true);
  duplicateSteps.setAttribute("aria-hidden", "true");
  processTrack.append(duplicateSteps);

  let isInView = false;
  let isPaused = false;
  const updateMotionPreference = () => {
    processTicker.classList.toggle("prefers-reduced-motion", motionPreference.matches);
    toggleButton.hidden = motionPreference.matches;
  };

  updateMotionPreference();
  motionPreference.addEventListener("change", updateMotionPreference);

  if ("IntersectionObserver" in window) {
    const tickerObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        processTicker.classList.toggle("is-in-view", isInView);
      },
      { threshold: 0.5 },
    );

    tickerObserver.observe(processTicker);
  } else if (!motionPreference.matches) {
    isInView = true;
    processTicker.classList.add("is-in-view");
  }

  document.addEventListener("visibilitychange", () => {
    processTicker.classList.toggle("is-document-hidden", document.hidden);
  });

  toggleButton.addEventListener("click", () => {
    isPaused = !isPaused;
    processTicker.classList.toggle("is-paused", isPaused);
    toggleButton.textContent = isPaused ? "Resume" : "Pause";
    toggleButton.setAttribute(
      "aria-label",
      `${isPaused ? "Resume" : "Pause"} continuous process ticker`,
    );
    toggleButton.setAttribute("aria-pressed", String(isPaused));
  });
}
