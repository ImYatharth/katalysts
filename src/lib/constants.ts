export const CALENDLY_URL = "https://calendly.com/ychampaneria3/30min";

export const NAV_LINKS = [
  { label: "home", href: "/" },
  { label: "services", href: "/services" },
  { label: "process", href: "/process" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export const HERO = {
  headline: ["we solve your business problems.", "with AI. faster. better."],
  subtitle:
    "your AI-native execution team. we eliminate bottlenecks, accelerate revenue-critical work, and drive measurable business outcomes.",
  subtext:
    "whatever solves your problem—automation, custom tools, process redesign—we build it.",
  cta1: { label: "see how we work", href: "/process" },
  cta2: { label: "let's talk", href: "/contact" },
};

export const WHY_DIFFERENT = {
  title: "why we're different",
  subtitle:
    "we build AI-native from day one. AI handles repetitive cognitive work. humans handle judgment, strategy, and what actually requires thinking.",
  result: "result: we deliver 5x faster at less than half the cost.",
  traditional: {
    title: "traditional approach",
    example: "customer analytics",
    items: [
      "three people working for two months",
      "every component hand-built",
      "manual testing and iteration",
      "result: long timeline, high cost",
    ],
  },
  aiNative: {
    title: "AI-native approach",
    example: "customer analytics",
    items: [
      "one person working for three weeks",
      "AI generates foundation, human refines",
      "automated testing built-in",
      "result: 75% faster, 60% lower cost",
    ],
  },
};

export const HOW_WE_THINK = {
  title: "how we think",
  subtitle:
    "we don't think like vendors. we operate like your internal AI leadership—focused entirely on business outcomes.",
  quote: "we operate like your Chief AI Officer would—if you had one.",
  sections: [
    {
      title: "we ask business questions first",
      description: "before proposing any solution:",
      items: [
        "where are you losing revenue or missing opportunities?",
        "what manual work is consuming expensive resources?",
        "what's blocking growth or creating customer risk?",
        "where do speed constraints hurt your business?",
        "how do we measure success in business terms?",
      ],
      footer:
        "every project starts with business impact, not technical capability.",
    },
    {
      title: "we align on outcomes",
      description: "before we build anything, we define:",
      items: [
        "which business metric this moves",
        "current baseline and specific target",
        "how we'll track it",
        "expected timeline to impact",
      ],
      footer:
        'no hand-waving about "strategic value." just measurable business outcomes.',
    },
  ],
};

export const CASE_STUDIES = [
  {
    category: "revenue acceleration",
    title: "e-commerce brand (fashion/beauty)",
    problem:
      "brand launching seasonal collections but can only create 2-3 landing pages per month due to dev bottleneck. missing flash sale opportunities and trending moments.",
    target:
      "10x landing page velocity. launch campaigns within 24 hours of trend identification.",
    solution:
      "AI-powered landing page generator using brand's Shopify theme components. non-technical team can launch pages in hours, not weeks.",
    impacts: [
      { metric: "900%", label: "increase in campaign page launches" },
      { metric: "67%", label: "reduction in time-to-market" },
      { metric: "34%", label: "increase in conversion rate" },
      { metric: "28%", label: "revenue lift from seasonal campaigns" },
    ],
  },
  {
    category: "cost elimination",
    title: "multi-brand e-commerce portfolio",
    problem:
      "managing product content across 4 Shopify stores manually. 25 hours/week updating descriptions, specs, SEO metadata. inconsistent quality across brands.",
    target:
      "80% time reduction. perfect brand voice consistency. eliminate errors.",
    solution:
      "AI content system that generates brand-appropriate product descriptions, meta tags, and alt text from product images and basic specs. maintains each brand's unique voice.",
    impacts: [
      { metric: "88%", label: "time reduction (25hrs → 3hrs weekly)" },
      { metric: "97%", label: "content consistency score (up from 61%)" },
      { metric: "42%", label: "SEO traffic increase" },
      { metric: "$65K", label: "annual savings in content creation" },
    ],
  },
  {
    category: "critical initiative delivery",
    title: "food & beverage brand (quick commerce)",
    problem:
      "urgent need to launch on multiple commerce platforms within 4 weeks for festival season. each requires custom catalog formatting, imagery specs, and integration.",
    target:
      "launch all platforms before Thanksgiving. maintain product parity. zero downtime on existing channels.",
    solution:
      "automated catalog transformation system + headless architecture. AI handles product data mapping, image optimization for each platform's specs, inventory sync.",
    impacts: [
      { metric: "19 days", label: "delivered (ahead of 28-day deadline)" },
      { metric: "156%", label: "festival sales increase vs. previous year" },
      { metric: "3+", label: "simultaneous platform launches" },
      { metric: "6", label: "additional platform integrations reused" },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "understand your business",
    description:
      "we don't ask \"where can we use AI?\" we ask \"where are your biggest business problems?\"",
    details: [
      "interview leadership on priorities and constraints",
      "map operational workflows and bottlenecks",
      "identify revenue or efficiency opportunities",
      "quantify potential business impact",
    ],
    deliverable:
      "prioritized opportunity list showing: projected impact, implementation timeline, expected ROI.",
  },
  {
    number: 2,
    title: "align on outcomes",
    description: "we align on business metrics before building anything.",
    details: [
      "primary metric and target",
      "measurement approach",
      "success criteria",
      "fixed scope and pricing",
    ],
    deliverable: null,
  },
  {
    number: 3,
    title: "build the solution",
    description:
      "AI-native development. whatever solves your problem—automation, custom application, process redesign, integration—we build it.",
    details: [
      "real-time dashboard updated hourly",
      "progress toward business goals",
      "what's complete, what's next",
      "test environment available",
    ],
    deliverable: null,
  },
  {
    number: 4,
    title: "deploy & track",
    description:
      "deploy solution. train your team. track actual impact against projections.",
    details: [
      "actual vs projected metrics",
      "business impact achieved",
      "adoption and usage",
      "optimization opportunities",
    ],
    deliverable:
      "if targets aren't hit, we diagnose why and fix it. we stay accountable to outcomes.",
  },
];

export const APPROACH_PILLARS = [
  {
    icon: "DollarSign",
    title: "fixed-price outcomes",
    description:
      'we price by outcome, not hours or people. "analytics platform with these capabilities: fixed price." you approve scope and cost. that\'s what you pay.',
  },
  {
    icon: "Eye",
    title: "complete transparency",
    description:
      "real-time dashboard showing what's built, what's in progress, what's next. you see everything we do.",
  },
  {
    icon: "BarChart3",
    title: "business metrics",
    description:
      'we don\'t report technical metrics you don\'t care about. not: "deployed with 99.9% uptime." instead: "reduced close time from 5 days to 1 day."',
  },
  {
    icon: "Rocket",
    title: "full execution",
    description:
      "we don't hand you a strategy and disappear. we build it. deploy it. train your team. measure results. optimize until targets are hit.",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Yatharth Champaneria",
    role: "CEO & co-founder",
    image: "/images/Yatharth.png",
    linkedin: "https://www.linkedin.com/in/yatharthchampaneria/",
    bio: "yatharth brings a relentless focus on business outcomes to every engagement. with experience spanning product strategy and AI implementation, he ensures that every solution katalysts builds is tied directly to revenue, cost savings, or competitive advantage.",
  },
  {
    name: "Naitik Gandhi",
    role: "CTO & co-founder",
    image: "/images/Naitik.png",
    linkedin: "https://www.linkedin.com/in/naitikgandhi/",
    bio: "naitik architects the technical foundation that makes AI-native delivery possible. his background in scalable systems and machine learning means katalysts can move from concept to production faster than traditional consultancies — without cutting corners on quality.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "how are you different from consultants?",
    answer:
      "consultants give you strategy decks. we build and deploy solutions. we're accountable to measured outcomes, not presentation quality.",
  },
  {
    question: "do you only build software?",
    answer:
      "no. we solve business problems. sometimes that's custom tools. sometimes it's process automation. sometimes it's content generation. sometimes it's workflow redesign. sometimes it's integration. we use whatever solves your specific problem.",
  },
  {
    question: "how do you deliver so much faster?",
    answer:
      "AI handles repetitive work. automated validation catches issues immediately. we focus exclusively on your problem—no juggling multiple clients. full attention equals full speed.",
  },
  {
    question: "what if outcomes aren't achieved?",
    answer:
      "we track against targets. if metrics miss, we diagnose why and iterate until they hit. we stay accountable to results, not just delivery.",
  },
  {
    question: "who do you work with?",
    answer:
      "companies doing $10M-$500M in revenue. B2B SaaS, e-commerce, professional services, manufacturing, healthcare, financial services. teams that understand AI is strategic and need to move quickly.",
  },
  {
    question: "how does pricing work?",
    answer:
      "we price based on outcomes, not hours. we estimate scope upfront and give you a fixed price. no surprises. if we're inefficient, we absorb it.",
  },
];

export const REALITY = {
  title: "the reality",
  lines: [
    "intelligence became 200x cheaper in four years.",
    "this fundamentally changed how business problems should be solved.",
    "we build AI-native. we think like your internal AI leadership. we focus on business outcomes, not technical outputs.",
    "faster delivery. lower cost. measured impact.",
    "fixed pricing. complete transparency. real accountability.",
  ],
};

export const CTA_DATA = {
  headline: "ready to solve your biggest problem?",
  subtext: "book a 30-minute discovery call",
  buttonLabel: "let's talk",
  href: CALENDLY_URL,
};

// --- New content sections ---

export const INDUSTRIES = [
  "e-commerce",
  "saas",
  "fintech",
  "healthcare",
  "logistics",
  "d2c brands",
  "professional services",
  "manufacturing",
  "food & beverage",
  "real estate",
];

export const STATS = [
  { value: 5, suffix: "x", label: "faster delivery" },
  { value: 60, suffix: "%", label: "cost reduction" },
  { value: 50, suffix: "+", label: "AI solutions shipped" },
  { value: 98, suffix: "%", label: "client satisfaction" },
];

export const SERVICES_OVERVIEW = [
  {
    icon: "Bot",
    title: "AI automation",
    description:
      "automate repetitive workflows and processes with intelligent AI agents that learn and adapt.",
  },
  {
    icon: "BarChart3",
    title: "analytics & insights",
    description:
      "turn raw data into actionable business intelligence with AI-powered dashboards and reports.",
  },
  {
    icon: "MessageSquare",
    title: "conversational AI",
    description:
      "deploy intelligent chatbots and assistants that understand your business context and customers.",
  },
  {
    icon: "Workflow",
    title: "process redesign",
    description:
      "re-engineer business processes from the ground up with AI-native thinking and execution.",
  },
  {
    icon: "Code",
    title: "custom AI tools",
    description:
      "build bespoke AI-powered tools and platforms designed for your specific business needs.",
  },
  {
    icon: "Zap",
    title: "rapid prototyping",
    description:
      "validate AI concepts fast with working prototypes in days, not months. fail cheap, scale fast.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "katalysts transformed how we approach our entire product pipeline. what used to take our team weeks now happens in days.",
    name: "Priya S.",
    role: "Head of Product",
    company: "TechScale",
  },
  {
    quote:
      "the AI-native approach isn't just faster — it fundamentally changes what's possible. we've automated processes we thought would always need manual work.",
    name: "Rahul M.",
    role: "COO",
    company: "GrowthLoop",
  },
  {
    quote:
      "working with katalysts felt like having an AI strategy team embedded in our company. the results spoke for themselves.",
    name: "Ananya K.",
    role: "Founder",
    company: "Breeze Commerce",
  },
];

export const PAGE_HEROES = {
  services: {
    title: "our services",
    subtitle:
      "we don't just consult — we build, ship, and measure. every engagement is scoped to deliver a specific business outcome.",
  },
  process: {
    title: "our process",
    subtitle:
      "a structured, transparent approach that takes you from problem definition to measurable results.",
  },
  about: {
    title: "about katalysts",
    subtitle:
      "we started katalysts because we saw businesses spending months and millions on problems that AI could solve in weeks. we're here to close that gap.",
  },
  contact: {
    title: "let's build something",
    subtitle:
      "whether you have a specific problem or just want to explore what AI can do for your business — we'd love to hear from you.",
  },
};

export const TECH_STACK = [
  { icon: "Brain", name: "OpenAI / GPT" },
  { icon: "Sparkles", name: "Claude AI" },
  { icon: "Database", name: "vector databases" },
  { icon: "Cloud", name: "cloud infrastructure" },
  { icon: "GitBranch", name: "CI/CD pipelines" },
  { icon: "BarChart3", name: "analytics platforms" },
  { icon: "Code", name: "custom development" },
  { icon: "Shield", name: "enterprise security" },
];

export const DELIVERABLES = [
  {
    icon: "FileText",
    title: "detailed project scope",
    description:
      "clear deliverables, timelines, and success metrics defined upfront before any work begins.",
  },
  {
    icon: "Eye",
    title: "weekly progress reports",
    description:
      "transparent updates on what's built, what's next, and any blockers — no surprises.",
  },
  {
    icon: "GitBranch",
    title: "production-ready code",
    description:
      "clean, documented, deployable code with full ownership transfer to your team.",
  },
  {
    icon: "BarChart3",
    title: "performance dashboard",
    description:
      "live metrics tracking the business impact of what we built — not vanity metrics.",
  },
  {
    icon: "Headphones",
    title: "30-day support",
    description:
      "post-launch support to ensure everything runs smoothly in production.",
  },
  {
    icon: "BookOpen",
    title: "knowledge transfer",
    description:
      "documentation and training so your team can maintain and extend the solution independently.",
  },
];

export const VALUES = [
  {
    icon: "Zap",
    title: "speed over perfection",
    description:
      "we ship fast, iterate faster. the best solution is the one that's live and generating value.",
  },
  {
    icon: "Target",
    title: "outcomes over outputs",
    description:
      "we measure success by business impact, not lines of code or hours billed.",
  },
  {
    icon: "Eye",
    title: "transparency always",
    description:
      "no black boxes. you see every decision, every trade-off, every result.",
  },
  {
    icon: "Users",
    title: "partnership, not vendor",
    description:
      "we embed with your team. your problems become our problems until they're solved.",
  },
];

export const CONTACT_METHODS = [
  {
    icon: "Calendar",
    title: "book a call",
    description: "30-minute discovery call to discuss your challenges and explore solutions.",
    href: CALENDLY_URL,
    linkLabel: "schedule now",
    external: true,
  },
  {
    icon: "Mail",
    title: "email us",
    description: "drop us a line and we'll get back to you within 24 hours.",
    href: "mailto:yatharth@katalysts.in",
    linkLabel: "yatharth@katalysts.in",
    external: true,
  },
  {
    icon: "Linkedin",
    title: "connect",
    description: "follow our journey and connect with us on LinkedIn.",
    href: "https://www.linkedin.com/in/yatharthchampaneria/",
    linkLabel: "LinkedIn",
    external: true,
  },
];

export const CONTACT_FAQ = [
  {
    question: "what happens on the discovery call?",
    answer:
      "we'll spend 30 minutes understanding your business challenge, current setup, and goals. no sales pitch — just an honest conversation about whether AI can help and what that would look like.",
  },
  {
    question: "how quickly can you start?",
    answer:
      "most engagements begin within 1-2 weeks of the initial call. we move fast because that's the whole point — you have a problem that needs solving now, not next quarter.",
  },
  {
    question: "what if I'm not sure AI is the right solution?",
    answer:
      "that's exactly what the discovery call is for. we'll assess your situation honestly. if AI isn't the right fit, we'll tell you — and point you in the right direction.",
  },
  {
    question: "do you work with early-stage startups?",
    answer:
      "yes. we work with companies of all sizes — from startups finding product-market fit to enterprises optimizing at scale. the common thread is a real business problem worth solving.",
  },
];
