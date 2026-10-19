const servicePillars = [
  { number: "01", name: "Foundation", slug: "foundation", description: "Define the brand and build its core digital home." },
  { number: "02", name: "Visibility", slug: "visibility", description: "Help the right people discover and encounter the brand." },
  { number: "03", name: "Credibility", slug: "credibility", description: "Make expertise and usability clear when people evaluate you." },
  { number: "04", name: "Growth", slug: "growth", description: "Activate marketing and use evidence to choose what comes next." },
];

const serviceAliases = {
  "visual-identity": "brand-strategy",
  "website-foundations": "website-design",
  "thought-leadership": "content-marketing",
  "conversion-optimization": "ui-ux-design",
  "paid-media": "digital-marketing",
  "email-marketing": "digital-marketing",
  "lead-generation": "digital-marketing",
};

const serviceDetails = {
  "brand-strategy": {
    title: "Brand identity",
    description: "Build a clear brand position and consistent visual identity with practical brand guidelines.",
    pillar: "foundation",
    headline: "Make your business easier to recognize and understand.",
    lede: "Bring your positioning and visual identity together so customers can see what makes your business distinct.",
    introTitle: "Brand identity is strategy made visible.",
    intro: "We clarify who you serve, what makes your business different, and the impression your brand needs to create.",
    introSecond: "That direction informs your logo, colour, typography, and brand assets—so your website, profiles, and materials tell a consistent story.",
    includeTitle: "Build a clear position and a usable identity system.",
    includeLead: "Bring the strategic decisions and practical visual standards into one connected brand engagement.",
    items: [
      ["Audience & positioning", "Clarify who you serve, their needs, and the difference your business can credibly own."],
      ["Logo & visual system", "Develop practical logo variations, colour, typography, and core brand assets."],
      ["Brand guidelines", "Document standards so your team and partners can apply the identity consistently."],
    ],
    finishTitle: "One brand direction for every next step.",
    finishCopy: "Use the positioning and identity as the reference for website, content, visibility, and growth work.",
    artLabel: "POSITION WITH PURPOSE",
    points: ["Audience", "Position", "Identity", "Guidelines"],
  },
  "seo-strategy": {
    title: "SEO & search growth",
    description: "Improve technical and on-page search foundations to help the right people find your business.",
    pillar: "visibility",
    headline: "Be found by people already looking for what you do.",
    lede: "Build search visibility around genuine customer intent, technically sound pages, and useful information that accurately represents your business.",
    introTitle: "Search works best when your pages help people first.",
    intro: "We review the searches that matter to your offer, the questions customers need answered, and the technical condition of your site.",
    introSecond: "The plan combines keyword and competitor research with practical on-page, technical, and local search priorities. It focuses on qualified discovery, not traffic for its own sake.",
    includeTitle: "Make your website easier to discover and understand.",
    includeLead: "Follow search-engine guidance while building pages for people who need clear, reliable answers.",
    items: [
      ["Keyword & competitor research", "Find relevant service searches, customer questions, and realistic opportunities against named competitors."],
      ["Technical & on-page SEO", "Review crawlability, page structure, speed, titles, and content clarity; prioritize fixes that support discovery."],
      ["Local & content SEO", "Connect service pages, useful articles, and local signals to the areas and services you actually offer."],
    ],
    finishTitle: "A search plan tied to real customer demand.",
    finishCopy: "Track priority rankings and qualified organic enquiries over time. Search results are not guaranteed, and improvements depend on competition and implementation.",
    artLabel: "BE FOUND FOR WHAT MATTERS",
    points: ["Research", "Technical", "Content", "Enquiries"],
  },
  "content-marketing": {
    title: "Blog & content marketing",
    description: "Turn your expertise into useful blogs, articles, case studies, and website copy.",
    pillar: "visibility",
    headline: "Make your expertise useful before the first call.",
    lede: "Publish helpful, specific material that answers buyer questions, shows your expertise, and supports search and sales conversations.",
    introTitle: "Useful content makes considered decisions easier.",
    intro: "We plan around the questions customers ask before they are ready to speak with you, then turn your real expertise into clear, on-brand content.",
    introSecond: "That can include search-led blogs, industry articles, case studies, and website content. We develop useful expert perspectives here; the separate Content Creation service produces visual and short-form assets, while email campaigns belong to Digital Marketing.",
    includeTitle: "Create a body of work that earns attention over time.",
    includeLead: "Prioritize accurate, original and genuinely useful content—not publishing volume or keyword repetition.",
    items: [
      ["Editorial & search plan", "Choose topics from customer questions, search intent, and the knowledge your team can substantiate."],
      ["Blogs, articles & case studies", "Answer buyer questions, share a substantiated point of view, and show how your approach addresses a real client need."],
      ["Website content", "Make core pages clearer and give prospective customers useful information for their decision."],
    ],
    finishTitle: "Content that helps customers understand and choose.",
    finishCopy: "Measure relevant search visibility, assisted enquiries, reading engagement, and whether sales teams use the material.",
    artLabel: "MAKE EXPERTISE USEFUL",
    points: ["Questions", "Expertise", "Publishing", "Learning"],
  },
  "local-search": {
    title: "Google Business Profile management",
    description: "Set up and improve your Google Business Profile, local information, updates, and review response process.",
    pillar: "visibility",
    headline: "Make your local business information easy to trust.",
    lede: "Keep your Google Business Profile complete, accurate, and useful when nearby customers compare local options.",
    introTitle: "Your local profile can be a customer’s first impression.",
    intro: "Hours, services, photos, posts, and reviews help people understand whether your business fits their needs before they visit your website or call.",
    introSecond: "We help establish and maintain accurate profile information, connect it to your website, and build a considered process for updates and review responses. Broader organic website SEO is handled separately in SEO & Search Growth.",
    includeTitle: "Keep the details customers rely on up to date.",
    includeLead: "Support local relevance and trust without promising a particular ranking position.",
    items: [
      ["Setup & profile accuracy", "Support verification and keep business details, hours, categories, and services complete and current."],
      ["Posts, photos & service areas", "Plan useful profile updates and align local service information with your website."],
      ["Review management", "Set a timely, professional response process and monitor profile views and customer actions."],
    ],
    finishTitle: "A more useful and dependable local presence.",
    finishCopy: "Review profile completeness, calls, direction requests, customer actions, and review activity. Local visibility also depends on relevance, distance, and prominence.",
    artLabel: "BE FOUND CLOSE TO HOME",
    points: ["Accuracy", "Services", "Reviews", "Actions"],
  },
  "website-design": {
    title: "Website design & development",
    description: "Plan, design, build, and maintain responsive websites that explain your offer and guide customer action.",
    pillar: "foundation",
    headline: "Build the digital home your other channels can point to.",
    lede: "Plan, design, and build a clear website that explains your offer, works across devices, and gives visitors a useful next step.",
    introTitle: "A useful website starts with the right structure.",
    intro: "We plan and build business websites, portfolios, landing pages, blogs, and e-commerce experiences around your audience and business goals.",
    introSecond: "This service owns website structure, visual design, development, and maintenance. Specialized usability audits and app or dashboard interface work sit under UI/UX Design.",
    includeTitle: "Take the website from brief to a dependable launch.",
    includeLead: "Choose the right scope for a new site, rebuild, landing page, or ongoing maintenance.",
    items: [
      ["Plan & design", "Set page structure, content priorities, and responsive visual design aligned with your brand."],
      ["Build & launch", "Develop business, portfolio, blog, landing-page, or e-commerce websites, including WordPress where appropriate."],
      ["Maintain & improve", "Keep the site supported and review load time, mobile usability, accessibility, and enquiry or purchase journeys."],
    ],
    finishTitle: "A dependable destination for your digital presence.",
    finishCopy: "Measure qualified enquiries or purchases, page speed, and mobile usability—not page count or visual novelty.",
    artLabel: "MAKE THE NEXT STEP CLEAR",
    points: ["Plan", "Design", "Build", "Improve"],
  },
  "social-media": {
    title: "Social media management",
    description: "Plan and manage consistent social media content, publishing, and community responses across selected channels.",
    pillar: "visibility",
    headline: "Keep your social presence active, clear, and consistent.",
    lede: "Manage selected channels with a practical content calendar, on-brand publishing, and timely community responses.",
    introTitle: "Social channels help people discover an active, consistent business.",
    intro: "A current, well-managed profile helps people understand what you do and see that your business is paying attention.",
    introSecond: "We can manage Instagram, LinkedIn, Facebook, and X where they suit your audience, with channel choices and publishing cadence agreed to match your capacity.",
    includeTitle: "Plan the work and look after the conversations.",
    includeLead: "Put consistency and useful interaction ahead of follower counts or posting volume.",
    items: [
      ["Channel strategy & calendar", "Select relevant channels and plan a realistic schedule around business priorities."],
      ["Publishing & brand consistency", "Prepare and publish approved content with consistent visual and written standards."],
      ["Community management", "Monitor comments and direct messages, agree response expectations, and review useful engagement."],
    ],
    finishTitle: "A social presence that supports the rest of your brand.",
    finishCopy: "Review publishing consistency, response time, saves and shares, and relevant visits or enquiries—not follower totals in isolation.",
    artLabel: "SHOW UP WITH INTENTION",
    points: ["Audience", "Channels", "Content", "Consistency"],
  },
  "personal-digital-presence": {
    title: "Personal digital presence",
    description: "Build a credible professional presence across personal branding, LinkedIn, portfolio, website, and reputation.",
    pillar: "credibility",
    headline: "Help people understand the person behind the work.",
    lede: "Make your expertise, experience, and professional point of view easier to find and assess online.",
    introTitle: "For many services, the buyer searches for you first.",
    intro: "A founder, consultant, executive, or specialist often carries the reputation that opens the first conversation.",
    introSecond: "We align your professional story across a LinkedIn profile, portfolio, personal website, and public touchpoints, while keeping claims grounded in evidence you can support.",
    includeTitle: "Make your experience clear across the places people check.",
    includeLead: "Build a personal presence that supports—not competes with—the company brand.",
    items: [
      ["Position & personal brand", "Clarify the expertise, audience, and professional themes you want your profile to communicate."],
      ["LinkedIn & portfolio", "Improve profile structure and create a portfolio that makes relevant work and credentials easy to assess."],
      ["Personal website & reputation", "Plan a personal website and review public search results so accurate, useful information is easier to find."],
    ],
    finishTitle: "A professional presence that reflects your real work.",
    finishCopy: "Look for relevant profile visibility, inbound enquiries, and opportunities connected to your professional goals.",
    artLabel: "MAKE EXPERTISE VISIBLE",
    points: ["Position", "Profile", "Portfolio", "Reputation"],
  },
  "content-creation": {
    title: "Content creation",
    description: "Produce consistent, on-brand social and digital assets, from graphic design and copy to short-form video.",
    pillar: "visibility",
    headline: "Give your strategy the content it needs.",
    lede: "Create useful, recognisable assets that help your business show up consistently across web, social, and campaigns.",
    introTitle: "A good plan still needs thoughtful production.",
    intro: "We create digital materials from approved briefs and brand guidance, making sure the words and visuals work together.",
    introSecond: "Depending on scope, production can include graphic design, social posts and carousels, short-form video editing, motion graphics, and copywriting with human review. Editorial planning, blog articles, and case studies belong to Blog & Content Marketing; email campaigns belong to Digital Marketing.",
    includeTitle: "Produce assets that are ready to use and reuse.",
    includeLead: "Prioritize brand consistency, accuracy, accessibility, and channel-appropriate formats.",
    items: [
      ["Design & social assets", "Create graphics, post layouts, and carousels that follow your visual identity."],
      ["Short-form video & motion", "Edit supplied footage into suitable Reels or Shorts and create supporting motion graphics."],
      ["Copywriting & adaptation", "Write or adapt approved messages for digital channels, then prepare reusable sizes and versions."],
    ],
    finishTitle: "A more consistent flow of ready-to-use content.",
    finishCopy: "Review on-brand, on-time delivery, audience response against your own baseline, and how effectively assets are reused.",
    artLabel: "CREATE WITH CONSISTENCY",
    points: ["Brief", "Design", "Review", "Reuse"],
  },
  "ui-ux-design": {
    title: "UI/UX design",
    description: "Improve usability with research-informed interfaces, wireframes, prototypes, and experience audits.",
    pillar: "credibility",
    headline: "Make it easier to use before making it beautiful.",
    lede: "Design clear digital journeys so customers can complete important tasks with less confusion and friction.",
    introTitle: "Usability is part of how people judge your business.",
    intro: "We examine how people move through a website, app, dashboard, or key flow, then identify where the interface makes their task harder.",
    introSecond: "Wireframes and prototypes help teams review structure before development. Experience audits identify usability and conversion friction; broader campaign planning and lead generation sit under Digital Marketing.",
    includeTitle: "Design the interface around the task.",
    includeLead: "Choose a focused engagement, from a usability audit to a designed and prototyped experience.",
    items: [
      ["Experience audit & flow", "Review a website, app, booking, quote, checkout, or onboarding journey for friction and unclear steps."],
      ["Wireframes & prototypes", "Make page or screen structure tangible so teams can review and test assumptions early."],
      ["Interface design", "Design responsive web UI, mobile app screens, or dashboards with clear hierarchy and accessible patterns."],
    ],
    finishTitle: "A clearer experience people can complete.",
    finishCopy: "Evaluate task completion, drop-off across steps, target-action conversion, and support questions related to confusion.",
    artLabel: "DESIGN FOR THE TASK",
    points: ["Understand", "Structure", "Prototype", "Test"],
  },
  "digital-marketing": {
    title: "Digital marketing",
    description: "Plan connected Google and Meta campaigns, lead generation, and email marketing around clear business goals.",
    pillar: "growth",
    headline: "Put marketing effort behind a clear business goal.",
    lede: "Connect the right audience, channel, offer, and follow-up so marketing activity supports a measurable customer action.",
    introTitle: "Digital marketing works as a coordinated plan—not isolated tactics.",
    intro: "We start with your objective, audience, offer, budget, and customer journey. From there, we recommend a practical mix of paid media, lead generation, and email.",
    introSecond: "Google Ads and Meta Ads can accelerate discovery; a relevant landing page and clear follow-up help turn attention into qualified enquiries. Email supports ongoing communication with people who have opted in.",
    includeTitle: "Coordinate campaigns, enquiries, and follow-up.",
    includeLead: "Choose the channels and activities that suit your readiness, audience, and business goal.",
    items: [
      ["Marketing strategy & paid media", "Select Google, Meta, or other suitable campaigns based on audience, offer, budget, and objective."],
      ["Lead-generation journey", "Connect campaign messages to a useful landing page, clear enquiry action, and agreed response process."],
      ["Permission-based email", "Plan relevant newsletters or campaign emails for people who have chosen to hear from your business."],
    ],
    finishTitle: "A connected route from campaign to customer action.",
    finishCopy: "Review qualified leads, cost per qualified lead, and return on ad spend where relevant—not impressions or clicks in isolation.",
    artLabel: "INVEST WITH INTENTION",
    points: ["Audience", "Message", "Channel", "Outcome"],
  },
  "analytics-reporting": {
    title: "Business intelligence & analytics",
    description: "Connect market, competitor, customer, sales, and channel data to practical business decisions.",
    pillar: "growth",
    headline: "Replace scattered numbers with a clearer view of what to do next.",
    lede: "Bring business and digital evidence together so your team can understand performance, customer behaviour, and where to focus.",
    introTitle: "Analytics should close the loop between action and learning.",
    intro: "We help organize relevant market, competitor, customer, sales, and digital performance information around the questions your business needs answered.",
    introSecond: "The deliverable may be a research summary, performance report, measurement plan, or Power BI dashboard, depending on the data available and the decisions you need to make. This service interprets performance; campaign execution belongs to Digital Marketing.",
    includeTitle: "Turn useful evidence into a decision people can explain.",
    includeLead: "Start with the business question, define the measures, and present findings in a form your team can use.",
    items: [
      ["Market, competitor & customer insight", "Research the landscape and organize available customer evidence to inform priorities."],
      ["Sales & channel measurement", "Define useful measures for leads, sales, and digital activity; check that key actions are tracked appropriately."],
      ["Reports & Power BI dashboards", "Bring agreed data into readable reports or dashboards, with context and practical next questions."],
    ],
    finishTitle: "A view of performance your team can act on.",
    finishCopy: "Success means being able to answer practical questions—such as where enquiries come from—and using the view to make better-informed decisions.",
    artLabel: "TURN EVIDENCE INTO ACTION",
    points: ["Research", "Measures", "Dashboard", "Decisions"],
  },
};

const icon = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="5.5"></circle><path d="M16 16L21 21"></path></svg>`;

const renderNavigation = (currentPillar) => `
  <header class="site-header">
    <div class="container nav-wrap">
      <a href="../../index.html" class="brand" aria-label="DigiAgentic home">
        <img src="../../assets/DigiAgentic_logo_transparent.png" alt="DigiAgentic logo" />
      </a>
      <button class="search-btn" type="button" aria-label="Search">${icon}</button>
      <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-label="Toggle navigation menu" />
      <label for="nav-toggle" class="nav-toggle-label" aria-label="Toggle navigation menu"><span></span><span></span><span></span></label>
      <div class="menu-panel">
        <form class="search-form" role="search" action="../../index.html" method="get">${icon}<input class="search-input" type="search" name="q" placeholder="Search..." aria-label="Search the site" /></form>
        <nav class="main-nav" aria-label="Main navigation">
          <ul class="nav-list">
            <li class="has-dropdown">
              <a href="../index.html" aria-current="page">Services <span class="caret">▾</span></a>
              <div class="mini-menu">${servicePillars.map((pillar) => `<a href="../${pillar.slug}/index.html"${pillar.slug === currentPillar ? ' aria-current="page"' : ""}>${pillar.number} / ${pillar.name}</a>`).join("")}</div>
            </li>
            <li class="has-dropdown"><a href="../../work/index.html">Work <span class="caret">▾</span></a><div class="mini-menu"><a href="../../work/index.html?service=brand">By service</a><a href="../../work/index.html?result=visibility">By result</a><a href="../../work/case-study/index.html">Case study</a></div></li>
            <li class="has-dropdown"><a href="../../about/index.html">About <span class="caret">▾</span></a><div class="mini-menu"><a href="../../about/why-us/index.html">Why Us</a><a href="../../about/our-approach/index.html">Our Approach</a><a href="../../blog/index.html">Blog</a><a href="../../faq/index.html">FAQs</a><a href="../../index.html#contact">Contact</a></div></li>
          </ul>
        </nav>
        <div class="nav-actions"><a href="../../free-digital-presence-audit/index.html" class="audit-btn">Get a Free Audit</a></div>
      </div>
    </div>
  </header>`;

const renderFooter = () => `
  <footer class="landing-footer">
    <section class="footer-cta" aria-labelledby="footer-cta-title">
      <div class="footer-cta-copy"><h2 id="footer-cta-title">Make your digital presence work as one.</h2><p>We connect your brand, website, content, search, and growth into one clear system—built around your business.</p></div>
      <a class="footer-cta-link" href="../../index.html#contact">Book a discovery call <span aria-hidden="true">→</span></a>
    </section>
    <div class="footer-main">
      <div class="footer-brand"><a href="../../index.html" aria-label="DigiAgentic home"><img src="../../assets/DigiAgentic_logo_pack/02_one_colour/white_horizontal_4096.png" alt="DigiAgentic" /></a><p>Your Vision. Our Mission. Your Digital Growth.</p><span>Digital presence strategy for ambitious businesses ready to turn expertise into visibility, credibility, and growth.</span></div>
      <nav class="footer-links" aria-label="Footer navigation"><div><h2>Explore</h2><a href="../index.html">Services</a><a href="../../index.html#approach">Our approach</a><a href="../../work/index.html">Our work</a></div><div><h2>Connect</h2><a href="../../index.html#contact">Contact</a><a href="../../about/index.html">About us</a><a href="../../blog/index.html">Insights</a></div></nav>
      <div class="footer-social"><h2>Follow DigiAgentic</h2><ul class="social-icon-list" aria-label="DigiAgentic social profiles"><li><span class="social-icon" role="img" aria-label="Instagram">◎</span></li><li><span class="social-icon" role="img" aria-label="LinkedIn">in</span></li></ul></div>
    </div>
    <div class="footer-bottom"><span>© DigiAgentic</span><a href="#top">Back to top ↑</a></div>
  </footer>`;

const renderDetail = (service) => {
  const pillar = servicePillars.find((item) => item.slug === service.pillar);
  const steps = service.points.map((point, index) => `<span class="subservice-art-point subservice-art-point-${["top", "right", "bottom", "left"][index]}" data-index="${String(index + 1).padStart(2, "0")}">${point}</span>`).join("");
  const pipeline = servicePillars.map((stage) => `
    <li class="service-pipeline-stage${stage.slug === service.pillar ? " is-current" : ""}">
      <a href="../${stage.slug}/index.html"${stage.slug === service.pillar ? ' aria-current="step"' : ""}>
        <span class="service-pipeline-number">${stage.number}</span>
        <span class="service-pipeline-copy"><strong>${stage.name}</strong><span>${stage.description}</span></span>
      </a>
    </li>`).join("");

  return `
    <main class="landing-page service-detail-page service-subpage">
      <section class="service-detail-hero subservice-hero" aria-labelledby="subservice-title">
        <div class="service-detail-hero-inner subservice-hero-inner">
          <div class="service-detail-copy">
            <nav class="subservice-breadcrumbs" aria-label="Breadcrumb"><a href="../index.html">Services</a><span aria-hidden="true">/</span><a href="../${pillar.slug}/index.html">${pillar.number} / ${pillar.name}</a></nav>
            <p class="service-detail-eyebrow">${pillar.number} / ${pillar.name}</p>
            <h1 id="subservice-title">${service.headline}</h1>
            <p class="service-detail-lede">${service.lede}</p>
            <div class="service-detail-actions"><a class="button button-primary" href="../../index.html#contact">Discuss ${service.title.toLowerCase()} <span aria-hidden="true">→</span></a><a class="service-detail-back" href="../${pillar.slug}/index.html">All ${pillar.name.toLowerCase()} services <span aria-hidden="true">↗</span></a></div>
          </div>
          <div class="subservice-hero-art" role="img" aria-label="${service.artLabel}: ${service.points.join(", ")}">
            <div class="subservice-art-core"><span>${service.artLabel}</span><strong>${pillar.name}<br />${service.title}</strong></div>
            ${steps}
          </div>
        </div>
      </section>
      <nav class="service-pipeline" aria-label="DigiAgentic service pathway">
        <div class="service-pipeline-inner">
          <p class="section-kicker">How the services connect</p>
          <ol>${pipeline}</ol>
          <p class="service-pipeline-note">This is a useful order of work, not a fixed funnel. Start with the stage that fits your business and customers.</p>
        </div>
      </nav>
      <section class="subservice-content">
        <div class="subservice-content-inner">
          <div class="subservice-intro">
            <div><p class="section-kicker">${pillar.number} / ${pillar.name}</p><h2>${service.introTitle}</h2></div>
            <div class="subservice-intro-copy"><p>${service.intro}</p><p>${service.introSecond}</p></div>
          </div>
          <section class="subservice-includes" aria-labelledby="subservice-includes-title">
            <header class="subservice-includes-heading"><p class="section-kicker">What this service covers</p><h2 id="subservice-includes-title">${service.includeTitle}</h2><p>${service.includeLead}</p></header>
            <div class="subservice-includes-grid">${service.items.map(([title, copy], index) => `<article class="subservice-include"><span class="subservice-include-index">${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div>
          </section>
        </div>
      </section>
      <section class="subservice-next"><div class="subservice-next-inner"><div class="subservice-next-copy"><p class="section-kicker">The outcome</p><h2>${service.finishTitle}</h2><p>${service.finishCopy}</p></div><a class="subservice-parent-link" href="../${pillar.slug}/index.html">Explore ${pillar.number} / ${pillar.name} <span aria-hidden="true">→</span></a></div></section>
      <section class="service-detail-cta" aria-labelledby="subservice-cta-title"><div class="service-detail-cta-inner"><div class="service-detail-cta-copy"><p class="section-kicker">Your next step starts with clarity</p><h2 id="subservice-cta-title">Let’s put this service in context.</h2><p>We’ll understand your business and recommend where this work fits in your wider digital presence.</p></div><a class="button button-primary" href="../../index.html#contact">Book a discovery call <span aria-hidden="true">→</span></a></div></section>
    </main>`;
};

const page = document.querySelector("[data-subservice-page]");
const currentSlug = page?.dataset.subservicePage;
const canonicalSlug = serviceAliases[currentSlug] ?? currentSlug;
const service = serviceDetails[canonicalSlug];

if (!page || !service) {
  throw new Error(`Missing DigiAgentic subservice content for "${currentSlug ?? "unknown"}".`);
}

if (canonicalSlug !== currentSlug) {
  window.location.replace(`../${canonicalSlug}/index.html`);
} else {
  document.title = `${service.title} | DigiAgentic`;
  document.querySelector('meta[name="description"]').content = service.description;
  page.innerHTML = `${renderNavigation(service.pillar)}${renderDetail(service)}${renderFooter()}`;
}
