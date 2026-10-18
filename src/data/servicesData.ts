import {
  Bot,
  Boxes,
  Code2,
  GraduationCap,
  Layout,
  MessageSquare,
  ShoppingCart,
  Workflow,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  Database,
  Globe,
  Search,
  TrendingUp,
  Cpu,
  Layers,
  Users,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  badge: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  heroHighlight: string;
  stats: { value: string; label: string }[];
  keyFeatures: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  deliverables: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  relatedCategory: string;
}

export const SERVICES_LIST: ServiceDetail[] = [
  {
    slug: "web-chatbots-ai-agents",
    title: "Web Chatbots & AI Agents",
    shortTitle: "AI Chatbots & Agents",
    icon: Bot,
    badge: "Autonomous AI & LLMs",
    tagline: "Autonomous 24/7 AI Agents That Turn Web Visitors Into Paying Clients",
    shortDescription:
      "Server-based chatbots and autonomous agents that answer customers, qualify leads and work 24/7 on your website.",
    heroHighlight: "Intelligent AI Agents",
    fullDescription:
      "We build custom, autonomous AI agents and server-based conversational chatbots tailored to your business operations. Unlike generic rule-based widgets, our agents leverage modern Large Language Models (OpenAI, Claude, DeepSeek) coupled with Retrieval-Augmented Generation (RAG) to understand your exact products, policies, and pricing — qualifying leads, answering intricate customer questions, and automating backend workflows 24/7.",
    stats: [
      { value: "24/7", label: "Instant Lead Engagement" },
      { value: "85%+", label: "Inquiry Resolution Rate" },
      { value: "<1.2s", label: "Response Generation Time" },
      { value: "3.5x", label: "Average Conversion Boost" },
    ],
    keyFeatures: [
      {
        title: "Trained on Your Private Knowledge Base",
        description:
          "Secure RAG architecture that ingests your PDFs, docs, catalogues, and FAQs so your agent answers with 100% brand precision.",
        icon: Database,
      },
      {
        title: "Autonomous Lead Qualification",
        description:
          "Intelligently asks qualifying questions, captures verified client details, and syncs high-value leads directly into your CRM or email.",
        icon: TrendingUp,
      },
      {
        title: "Multi-Model AI Engine",
        description:
          "Engineered with fallback resilience across OpenAI GPT-4o, Anthropic Claude, and Gemini for the highest accuracy and uptime.",
        icon: Cpu,
      },
      {
        title: "Human-in-the-Loop Handover",
        description:
          "Seamlessly transfers complex queries to your live team whenever needed, complete with conversation summaries and client context.",
        icon: Users,
      },
      {
        title: "Custom UI Chat Widget",
        description:
          "Tailor-made to match your brand colors, dark/light theme, typography, and mobile ergonomics — not a cookie-cutter popup.",
        icon: Sparkles,
      },
      {
        title: "Enterprise Privacy & Security",
        description:
          "Zero data leakage, end-to-end encrypted sessions, and compliant server infrastructure hosted on isolated cloud endpoints.",
        icon: ShieldCheck,
      },
    ],
    deliverables: [
      "Custom responsive chat widget tailored to your branding",
      "Dedicated Python/Node agent backend server",
      "Vector database embeddings for your private company knowledge",
      "CRM & email webhook integrations (Supabase, HubSpot, Webhooks)",
      "Analytics dashboard with conversation histories & lead telemetry",
      "Admin console to review logs and fine-tune system prompts",
    ],
    processSteps: [
      {
        step: "01",
        title: "Knowledge Discovery",
        description:
          "We analyze your sales funnel, common customer inquiries, knowledge documents, and desired agent personality.",
      },
      {
        step: "02",
        title: "Agent Architecture & RAG",
        description:
          "We vectorize your documentation, configure the LLM pipeline with guardrails, and build custom tool-calling integrations.",
      },
      {
        step: "03",
        title: "Widget Design & UI Build",
        description:
          "We craft a sleek, mobile-optimized chat interface adhering to your brand's dark and light aesthetic.",
      },
      {
        step: "04",
        title: "Testing, Benchmark & Launch",
        description:
          "We run rigorous stress tests for accuracy, latency, and security before deploying to your live production website.",
      },
    ],
    faq: [
      {
        question: "Can the AI hallucinate or provide wrong pricing?",
        answer:
          "No. We enforce strict system guardrails and deterministic RAG verification. If information is not in your verified knowledge base, the agent politely falls back or escalates to your live team.",
      },
      {
        question: "Can it integrate with our existing website and CRM?",
        answer:
          "Yes! Our agents embed seamlessly into any stack (React, Next.js, WordPress, Shopify, Webflow) and integrate with any CRM or webhook API.",
      },
      {
        question: "Does it support multiple languages?",
        answer:
          "Yes, our agents are naturally multilingual and can comfortably converse in English, Urdu, Roman Urdu, Arabic, and over 40 other languages.",
      },
    ],
    relatedCategory: "Bots & Agents",
  },
  {
    slug: "ai-integrated-lms",
    title: "AI-Integrated LMS",
    shortTitle: "AI-Integrated LMS",
    icon: GraduationCap,
    badge: "EdTech & Smart Learning",
    tagline: "Learning Management Systems Powered by Adaptive AI Tutors",
    shortDescription:
      "Learning management systems with courses, quizzes, progress tracking and AI tutors that personalize learning for every student.",
    heroHighlight: "Intelligent Learning Platforms",
    fullDescription:
      "Transform online education, academies, and enterprise training with next-generation Learning Management Systems. We fuse comprehensive course administration with 24/7 AI personal tutors that adapt to each student's pace, generate dynamic practice quizzes, and grade open-ended assignments instantly.",
    stats: [
      { value: "10x", label: "Faster Student Grading" },
      { value: "98%", label: "Course Completion Boost" },
      { value: "24/7", label: "On-Demand AI Tutor Assistance" },
      { value: "HD", label: "Video Streaming & DRM" },
    ],
    keyFeatures: [
      {
        title: "24/7 AI Teaching Assistant",
        description:
          "Students can ask questions anytime; the embedded AI tutor explains complex concepts based strictly on lecture transcripts.",
        icon: Bot,
      },
      {
        title: "Adaptive Learning Pathways",
        description:
          "Automatically assesses student weak spots and provides personalized review modules, flashcards, and supplementary exercises.",
        icon: Sparkles,
      },
      {
        title: "Automated Quiz & Essay Grading",
        description:
          "AI evaluates descriptive student answers, checks rubrics, and offers constructive formative feedback in seconds.",
        icon: CheckCircle2,
      },
      {
        title: "Secure Video Hosting & Streaming",
        description:
          "Bandwidth-optimized video delivery with anti-piracy watermarking, playback speed controls, and timestamped note-taking.",
        icon: Layers,
      },
      {
        title: "Multi-Tenant School / Corporate Portals",
        description:
          "Support multiple campuses, enterprise departments, and custom instructor hierarchies with dedicated dashboards.",
        icon: Users,
      },
      {
        title: "Verified Automated Certificates",
        description:
          "Generates tamper-proof PDF certificates with unique QR verification codes upon passing course requirements.",
        icon: ShieldCheck,
      },
    ],
    deliverables: [
      "Full responsive web LMS application (student, instructor & admin portals)",
      "Curriculum & chapter builder with video, audio, PDF, and code embeds",
      "Embedded AI student tutor powered by lecture RAG",
      "Secure payment gateway (Stripe, JazzCash, EasyPaisa, international cards)",
      "Student progress tracking, analytics, and automated certification engine",
      "Cloud video streaming & storage infrastructure setup",
    ],
    processSteps: [
      {
        step: "01",
        title: "Curriculum & User Flow Architecture",
        description:
          "We map instructor workflows, student journey, course monetization models, and accreditation requirements.",
      },
      {
        step: "02",
        title: "Core LMS Engineering",
        description:
          "We build the database, role-based auth, course player, video pipelines, and student progress engines.",
      },
      {
        step: "03",
        title: "AI Tutor & Assessment Integration",
        description:
          "We train and connect the AI tutor engine to lecture materials for instant Q&A and automated assignment grading.",
      },
      {
        step: "04",
        title: "Beta Launch & Optimization",
        description:
          "We test video streaming load, payment gateways, and student onboarding before rolling out to your learners.",
      },
    ],
    faq: [
      {
        question: "Can we sell courses with recurring subscriptions or one-time fees?",
        answer:
          "Yes! We integrate both one-time purchases and recurring subscription tiers with automated invoice generation and coupon codes.",
      },
      {
        question: "Can instructors upload video lectures easily?",
        answer:
          "Yes, we build a drag-and-drop instructor portal with automated cloud transcoding, thumbnail generation, and lesson sequencing.",
      },
      {
        question: "Is student data and proprietary course video protected?",
        answer:
          "Absolutely. Video files are served via token-authenticated private streams with dynamic watermarking to protect your intellectual property.",
      },
    ],
    relatedCategory: "AI & LMS",
  },
  {
    slug: "whatsapp-ai-agents",
    title: "WhatsApp AI Agents",
    shortTitle: "WhatsApp AI Agents",
    icon: MessageSquare,
    badge: "Official Meta API",
    tagline: "Automate Sales, Inquiries & Support Directly Inside WhatsApp",
    shortDescription:
      "Smart WhatsApp agents that handle orders, support and follow-ups automatically — right inside the app your customers use daily.",
    heroHighlight: "WhatsApp Business Automation",
    fullDescription:
      "Your customers live on WhatsApp — meet them there with conversational AI agents built on the official Meta WhatsApp Business Cloud API. Our agents answer inquiries instantly, display interactive product catalogs, book appointments, take orders, and send automated tracking alerts with zero delay.",
    stats: [
      { value: "98%", label: "Message Open Rate" },
      { value: "<3s", label: "Average Response Time" },
      { value: "70%+", label: "Support Workload Automated" },
      { value: "Meta", label: "Official Cloud API Partner" },
    ],
    keyFeatures: [
      {
        title: "Official Meta Cloud API Setup",
        description:
          "100% compliant, verified green-tick ready WhatsApp Business API without the risk of ban associated with unauthorized scrapers.",
        icon: ShieldCheck,
      },
      {
        title: "Multilingual Conversational AI",
        description:
          "Handles Roman Urdu, English, Urdu, and Arabic naturally, interpreting typos, voice notes, and customer intent with ease.",
        icon: Bot,
      },
      {
        title: "Interactive Catalogs & Checkout",
        description:
          "Sends interactive product cards, quick-reply buttons, order summaries, and payment links straight into the chat.",
        icon: ShoppingCart,
      },
      {
        title: "Live Agent Dashboard & Handover",
        description:
          "Multi-agent team inbox where human reps can intervene, chat with clients, and monitor bot conversations in real-time.",
        icon: Users,
      },
      {
        title: "Automated Order & Shipping Alerts",
        description:
          "Automatically pings customers with order confirmations, courier tracking updates, and review requests.",
        icon: Clock,
      },
      {
        title: "Broadcast Campaigns with Opt-In",
        description:
          "Send personalized, approved template notifications for seasonal promotions, payment reminders, and cart recovery.",
        icon: Zap,
      },
    ],
    deliverables: [
      "Meta WhatsApp Business Cloud API verification & setup",
      "Custom AI webhook server & business logic pipeline",
      "Database integration with your Shopify, WooCommerce, ERP, or CRM",
      "Multi-agent shared team inbox dashboard for human agents",
      "Approved WhatsApp message templates for notifications & marketing",
      "Full analytics on message deliveries, read receipts, and conversions",
    ],
    processSteps: [
      {
        step: "01",
        title: "API Verification & Onboarding",
        description:
          "We set up your official Meta Business Manager, phone number registration, and API access tokens.",
      },
      {
        step: "02",
        title: "Conversation Flow & AI Training",
        description:
          "We script the conversation pathways, train the NLP model on your product catalog, and integrate API webhooks.",
      },
      {
        step: "03",
        title: "Backend & CRM Hookup",
        description:
          "We synchronize WhatsApp messages with your order system, customer database, and team notification channels.",
      },
      {
        step: "04",
        title: "Live Deployment & Staff Training",
        description:
          "We launch the agent on your official business number and train your staff on the unified multi-agent dashboard.",
      },
    ],
    faq: [
      {
        question: "Is there any risk of our WhatsApp number getting banned?",
        answer:
          "None at all. We build exclusively on the official Meta WhatsApp Business Cloud API, guaranteeing complete compliance and stability.",
      },
      {
        question: "Can multiple team members chat using the same number?",
        answer:
          "Yes! We provide a multi-agent dashboard where unlimited customer support agents can respond to conversations simultaneously.",
      },
      {
        question: "Can the bot understand voice notes or Roman Urdu?",
        answer:
          "Yes, we can equip the agent with audio transcription (Whisper) and multilingual LLM models that easily comprehend Roman Urdu and casual colloquial language.",
      },
    ],
    relatedCategory: "Bots & Agents",
  },
  {
    slug: "saas-systems",
    title: "SaaS Systems",
    shortTitle: "SaaS Systems",
    icon: Boxes,
    badge: "Cloud Software & Multi-Tenant",
    tagline: "Scalable Software-as-a-Service Engineered for Rapid Growth",
    shortDescription:
      "Scalable software-as-a-service platforms with subscriptions, user management, billing and analytics built in from day one.",
    heroHighlight: "Modern SaaS Platforms",
    fullDescription:
      "Turn your software concept into a profitable, scalable cloud product. We architect and build end-to-end SaaS applications with clean multi-tenant database isolation, frictionless subscription billing (Stripe, LemonSqueezy), role-based permissions, automated onboarding, and real-time usage metrics.",
    stats: [
      { value: "99.9%", label: "Uptime SLA Architecture" },
      { value: "Global", label: "Multi-Currency Billing" },
      { value: "<250ms", label: "Optimized API Latencies" },
      { value: "SOC2", label: "Security Best Practices" },
    ],
    keyFeatures: [
      {
        title: "Multi-Tenant Cloud Architecture",
        description:
          "Strict data isolation and high-concurrency database design ready to support thousands of active organizations without bottlenecking.",
        icon: Database,
      },
      {
        title: "Automated Subscription & Metered Billing",
        description:
          "Tiered plans, free trials, usage-based metering, self-service customer portal, and automated invoice delivery.",
        icon: TrendingUp,
      },
      {
        title: "Granular Role-Based Access (RBAC)",
        description:
          "Enterprise permission hierarchies: Owners, Admins, Members, and Viewers with customized authorization guards.",
        icon: ShieldCheck,
      },
      {
        title: "Interactive Analytics & Dashboards",
        description:
          "Rich visual charts, metric rollups, CSV/PDF exports, and activity logs powered by modern charting libraries.",
        icon: Layers,
      },
      {
        title: "Developer REST & Webhook APIs",
        description:
          "Allow enterprise customers to integrate your SaaS with their internal systems via signed webhooks and API keys.",
        icon: Zap,
      },
      {
        title: "Smooth Onboarding & Team Invites",
        description:
          "Self-serve signup, magic links, email verification, interactive walkthrough checklists, and one-click teammate invitations.",
        icon: Users,
      },
    ],
    deliverables: [
      "Full-stack React / TanStack application with responsive UI",
      "Scalable backend API server with database migrations",
      "Stripe / LemonSqueezy customer billing & subscription portal",
      "Super-admin management panel to view MRR, churn, and active users",
      "Automated transactional emails (SendGrid, Postmark, Resend)",
      "Production deployment with auto-scaling cloud infrastructure",
    ],
    processSteps: [
      {
        step: "01",
        title: "Product Architecture & Wireframes",
        description:
          "We define the data model, tenant separation strategy, user journey, and monetization tiers.",
      },
      {
        step: "02",
        title: "UI/UX & Frontend Development",
        description:
          "We build clean, responsive dashboards with dark/light themes and modern component libraries.",
      },
      {
        step: "03",
        title: "Billing & Backend Services",
        description:
          "We integrate subscription webhooks, authentication, database indexes, and background task workers.",
      },
      {
        step: "04",
        title: "Security Audit & Production Launch",
        description:
          "We conduct penetration testing, load benchmarking, and set up monitoring alerts before opening signups.",
      },
    ],
    faq: [
      {
        question: "How long does it take to build an MVP SaaS platform?",
        answer:
          "A production-ready SaaS MVP typically takes 4 to 8 weeks depending on the complexity of unique proprietary logic and integrations.",
      },
      {
        question: "Will I own 100% of the intellectual property and code?",
        answer:
          "Yes, absolutely. All code, database schemas, and intellectual property belong entirely to you with no lock-in.",
      },
      {
        question: "Can it scale if we get sudden viral growth?",
        answer:
          "We engineer all SaaS backends with stateless serverless or containerized services with read-replicas, easily scaling to millions of requests.",
      },
    ],
    relatedCategory: "SaaS",
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website Development",
    icon: Layout,
    badge: "Bespoke Modern Web",
    tagline: "Ultra-Fast, SEO-Engineered Websites Built to Turn Visitors into Clients",
    shortDescription:
      "Fast, responsive and SEO-ready websites for businesses, portfolios and startups — built to convert visitors into customers.",
    heroHighlight: "High-Performance Websites",
    fullDescription:
      "Your website is the digital front door to your business. We engineer bespoke, lightning-fast websites that deliver unforgettable impressions, achieve top rankings on Google, and convert casual visitors into qualified inquiries. Every site is custom-crafted with modern aesthetics, semantic SEO, and flawless mobile responsiveness.",
    stats: [
      { value: "<1.0s", label: "Average Page Load Speed" },
      { value: "98+", label: "Google PageSpeed Score" },
      { value: "100%", label: "Mobile & Tablet Responsive" },
      { value: "+60%", label: "Average Inquiry Increase" },
    ],
    keyFeatures: [
      {
        title: "100/100 Core Web Vitals & Speed",
        description:
          "Clean code, modern image compression, zero bloat, and edge CDN caching ensuring near-instant page transitions.",
        icon: Zap,
      },
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "Full meta tags, Open Graph cards, structured schema markup, semantic HTML, and sitemaps designed for top Google ranks.",
        icon: Globe,
      },
      {
        title: "Fluid Mobile & Tablet Responsiveness",
        description:
          "Engineered mobile-first to ensure buttons, typography, navigation, and forms look stunning on every screen size.",
        icon: Layout,
      },
      {
        title: "Conversion-Focused UI/UX Design",
        description:
          "Strategic CTA placement, clear value propositions, trust badges, and frictionless contact quote drawer flows.",
        icon: TrendingUp,
      },
      {
        title: "Effortless Content Management (CMS)",
        description:
          "Option to connect headless CMS (Sanity, Strapi, Supabase) so your marketing team can update blogs, services, and copy without touching code.",
        icon: Layers,
      },
      {
        title: "Analytics & Lead Telemetry",
        description:
          "Pre-configured Google Analytics 4, Tag Manager, Facebook Pixel, and event tracking for complete ROI transparency.",
        icon: TrendingUp,
      },
    ],
    deliverables: [
      "Custom UI/UX website design tailored to your industry",
      "Production-ready responsive frontend code (React / Vite / Tailwind)",
      "Integrated contact forms and quote drawer with email routing",
      "Full on-page SEO optimization & XML sitemap generation",
      "Domain setup, SSL certificate & global CDN hosting configuration",
      "Post-launch support and analytics configuration",
    ],
    processSteps: [
      {
        step: "01",
        title: "Strategy & Wireframing",
        description:
          "We analyze your target audience, key competitors, and core messaging to create high-converting layout blueprints.",
      },
      {
        step: "02",
        title: "High-Fidelity Design",
        description:
          "We craft custom visual designs with modern typography, dark/light themes, and branded graphic assets.",
      },
      {
        step: "03",
        title: "Frontend Engineering",
        description:
          "We convert approved designs into clean, responsive, pixel-perfect code with smooth animations and interactions.",
      },
      {
        step: "04",
        title: "SEO, Speed Audit & Launch",
        description:
          "We test cross-browser compatibility, run PageSpeed audits, hook up domains, and celebrate your launch.",
      },
    ],
    faq: [
      {
        question: "How long does a custom website build usually take?",
        answer:
          "Most custom business websites are designed, developed, tested, and launched within 2 to 3 weeks.",
      },
      {
        question: "Can I easily update text, images, and services later?",
        answer:
          "Yes! We provide intuitive editing options or headless CMS integration so you can make updates in a few clicks.",
      },
      {
        question: "Will our website look good on iPhones, iPads, and Android devices?",
        answer:
          "Yes, we test across all major devices to guarantee fluid responsiveness, legible typography, and touch-friendly navigation.",
      },
    ],
    relatedCategory: "Websites",
  },
  {
    slug: "ecommerce-websites",
    title: "E-commerce Websites",
    shortTitle: "E-commerce Websites",
    icon: ShoppingCart,
    badge: "High-Conversion Storefronts",
    tagline: "Scalable Online Stores Engineered for Frictionless Sales & Rapid Growth",
    shortDescription:
      "Complete online stores with product catalogs, secure checkout, payments, order management and inventory tracking.",
    heroHighlight: "Modern E-commerce Platforms",
    fullDescription:
      "Launch an online store that doesn't just display products — it sells them. We build high-conversion e-commerce storefronts equipped with lightning-fast catalog search, optimized multi-step or 1-page checkout, multi-currency payment gateways, real-time inventory management, and automated courier order routing.",
    stats: [
      { value: "+45%", label: "Average Checkout Completion" },
      { value: "<1.5s", label: "Product Page Load Speed" },
      { value: "100%", label: "Secure PCI-DSS Payments" },
      { value: "Multi", label: "Currency & Courier Tracking" },
    ],
    keyFeatures: [
      {
        title: "Instant Search & Faceted Filtering",
        description:
          "Fast filtering by size, color, brand, price, and instant search autocomplete so customers find items in seconds.",
        icon: Search,
      },
      {
        title: "Frictionless 1-Page & Multi-Step Checkout",
        description:
          "Designed to minimize cart abandonment with guest checkout, autofill address, and transparent shipping calculation.",
        icon: ShoppingCart,
      },
      {
        title: "Global & Local Payment Gateways",
        description:
          "Accept credit cards via Stripe, PayPal, JazzCash, EasyPaisa, bank transfers, and Cash on Delivery (COD).",
        icon: ShieldCheck,
      },
      {
        title: "Inventory & Variant Synchronization",
        description:
          "Real-time stock deduction, low-stock notifications, SKU management, and multi-warehouse allocation.",
        icon: Database,
      },
      {
        title: "Automated Courier & Shipping Tracking",
        description:
          "Direct integration with couriers for shipping label generation, rate calculation, and customer tracking links.",
        icon: Clock,
      },
      {
        title: "Coupons, Bundles & Upsells",
        description:
          "Powerful promotion engine for discount codes, volume discounts, post-purchase one-click upsells, and gift cards.",
        icon: Sparkles,
      },
    ],
    deliverables: [
      "Custom responsive e-commerce storefront with product & category pages",
      "Seamless cart and secure checkout flow with multiple payment gateways",
      "Admin order, customer, and inventory management portal",
      "Automated transactional emails and WhatsApp order confirmation alerts",
      "Abandoned cart recovery flows and discount code system",
      "Staff onboarding on how to add products and fulfill orders",
    ],
    processSteps: [
      {
        step: "01",
        title: "Product Strategy & Architecture",
        description:
          "We structure your product categories, variant attributes, shipping rules, tax requirements, and payment gateways.",
      },
      {
        step: "02",
        title: "Storefront UI/UX Design",
        description:
          "We design high-converting product pages, interactive shopping carts, and streamlined checkout experiences.",
      },
      {
        step: "03",
        title: "Integration & Catalog Build",
        description:
          "We import your products, connect payment processors, configure shipping APIs, and set up inventory trackers.",
      },
      {
        step: "04",
        title: "Payment Testing & Live Launch",
        description:
          "We conduct live transaction tests, verify webhook fulfillment, and launch your store to the public.",
      },
    ],
    faq: [
      {
        question: "Can we sell in multiple currencies and languages?",
        answer:
          "Yes, we build multi-currency stores with automatic geolocation currency detection and localized language selectors.",
      },
      {
        question: "Can we support Cash on Delivery (COD) as well as online card payments?",
        answer:
          "Yes, customers can choose COD with optional SMS verification, or pay online securely using local and international cards.",
      },
      {
        question: "Can we easily manage products, prices, and discounts ourselves?",
        answer:
          "Yes, you receive an intuitive admin dashboard where you can add products, update prices, manage stock, and create discount coupons in seconds.",
      },
    ],
    relatedCategory: "E-commerce",
  },
  {
    slug: "erp-systems",
    title: "ERP Systems",
    shortTitle: "ERP Systems",
    icon: Workflow,
    badge: "Enterprise Resource Planning",
    tagline: "Consolidate Finance, Inventory, HR & Operations in One Unified Platform",
    shortDescription:
      "Unify finance, HR, inventory and operations in one powerful ERP tailored to how your business actually runs.",
    heroHighlight: "Custom ERP Systems",
    fullDescription:
      "Off-the-shelf software rarely fits how growing companies actually operate. We design and build custom Enterprise Resource Planning (ERP) platforms tailored to your specific workflows — integrating multi-warehouse inventory, accounting, purchase orders, manufacturing bills of materials, and employee management into one central nervous system.",
    stats: [
      { value: "100%", label: "Tailored to Your Operations" },
      { value: "0", label: "Per-User Subscription Tax" },
      { value: "Realtime", label: "Inventory & Finance Sync" },
      { value: "Role", label: "Based Access & Full Audits" },
    ],
    keyFeatures: [
      {
        title: "Multi-Location Inventory Management",
        description:
          "Real-time stock visibility across warehouses and retail branches with automated reorder alerts and transfer notes.",
        icon: Database,
      },
      {
        title: "Financial Accounting & General Ledger",
        description:
          "Double-entry bookkeeping, accounts payable/receivable, automated tax calculations, profit & loss, and balance sheets.",
        icon: TrendingUp,
      },
      {
        title: "Procurement & Purchase Orders",
        description:
          "Vendor management, purchase quotation comparisons, automated purchase orders, and goods receipt verification.",
        icon: Workflow,
      },
      {
        title: "HR, Attendance & Payroll",
        description:
          "Employee directory, shift scheduling, biometric attendance sync, automated salary slips, and leave management.",
        icon: Users,
      },
      {
        title: "Granular Roles & Audit Trails",
        description:
          "Strict permissions per department (Sales, Warehouse, Finance, HR) with immutable audit logs for every system transaction.",
        icon: ShieldCheck,
      },
      {
        title: "Automated PDF Reporting & BI Insights",
        description:
          "Generate professional invoices, packing lists, tax summaries, and executive dashboard reports with one click.",
        icon: Layers,
      },
    ],
    deliverables: [
      "Custom ERP web application with role-tailored dashboards",
      "Database schema and data migration from Excel/legacy systems",
      "Integrated modules: Inventory, Finance, Procurement, HR & Sales",
      "Automated PDF document generation (Invoices, POs, Receipts, Payslips)",
      "Role-based security, access controls, and detailed activity logs",
      "Full staff training sessions and documentation manual",
    ],
    processSteps: [
      {
        step: "01",
        title: "Business Process Mapping",
        description:
          "We spend time understanding your physical and digital workflows, approval hierarchies, and current bottlenecks.",
      },
      {
        step: "02",
        title: "Database & Architecture Design",
        description:
          "We engineer relational schemas for inventory, ledgers, items, and departments with strict transactional integrity.",
      },
      {
        step: "03",
        title: "Modular Module Engineering",
        description:
          "We build and test each module (Inventory, Billing, HR, Purchasing) with your team's feedback at every milestone.",
      },
      {
        step: "04",
        title: "Data Migration & Go-Live",
        description:
          "We clean and import historical records, train department heads, and oversee a seamless live transition.",
      },
    ],
    faq: [
      {
        question: "Why choose a custom ERP over SAP, Oracle, or Odoo?",
        answer:
          "Generic ERPs charge hefty recurring per-user license fees and force your company to adapt to rigid software. Our custom ERP is 100% tailored to your exact business rules with zero monthly per-user licensing fees.",
      },
      {
        question: "Can we migrate data from our existing Excel sheets?",
        answer:
          "Yes, we build custom data import scripts that sanitize, validate, and migrate your existing inventory, client, and financial records safely.",
      },
      {
        question: "Can the ERP work across multiple branches or cities?",
        answer:
          "Yes, our ERP platforms are cloud-hosted with real-time multi-branch synchronization and location-specific permission filters.",
      },
    ],
    relatedCategory: "ERP & CRM",
  },
  {
    slug: "crm-systems",
    title: "CRM Systems",
    shortTitle: "CRM Systems",
    icon: Code2,
    badge: "Sales Pipeline & Automation",
    tagline: "Empower Your Sales Team to Close More Deals in Less Time",
    shortDescription:
      "Track leads, manage pipelines and automate follow-ups with a CRM your sales team will actually enjoy using.",
    heroHighlight: "Intelligent CRM Solutions",
    fullDescription:
      "Stop losing prospective clients in messy spreadsheets and forgotten email threads. We build fast, intuitive Customer Relationship Management (CRM) software equipped with visual deal stages, automated follow-up triggers, call and WhatsApp logging, and executive revenue forecasting.",
    stats: [
      { value: "3x", label: "Faster Lead Follow-Up" },
      { value: "+38%", label: "Deal Close Rate Increase" },
      { value: "360°", label: "Customer Activity History" },
      { value: "0", label: "Lost Lead Opportunities" },
    ],
    keyFeatures: [
      {
        title: "Visual Kanban Sales Pipelines",
        description:
          "Drag-and-drop deals across customizable stages from initial inquiry to qualified, proposal sent, negotiation, and won.",
        icon: Layers,
      },
      {
        title: "Automated Follow-Up Workflows",
        description:
          "Set up automated email and WhatsApp messages triggered when a lead stays inactive or moves to a specific stage.",
        icon: Zap,
      },
      {
        title: "360-Degree Contact & Company Timelines",
        description:
          "View every interaction, quote sent, email opened, meeting note, and uploaded proposal in one unified history.",
        icon: Users,
      },
      {
        title: "Sales Rep Performance & Leaderboards",
        description:
          "Track sales rep activities, call counts, deal closures, and conversion rates to reward top performers.",
        icon: TrendingUp,
      },
      {
        title: "Website Form & Ad Lead Capture",
        description:
          "Direct webhook hooks to Facebook Ads, Google Ads, website forms, and WhatsApp for instant automated lead assignment.",
        icon: Globe,
      },
      {
        title: "Revenue Forecasting & Analytics",
        description:
          "Project future cash flow based on weighted pipeline stages, deal values, and historical close probabilities.",
        icon: TrendingUp,
      },
    ],
    deliverables: [
      "Custom responsive CRM web app with visual pipeline boards",
      "Lead capture integration with website, ads, and incoming channels",
      "Automated follow-up triggers via email and WhatsApp",
      "Team activity tracking, notes, call logs, and document storage",
      "Executive revenue forecasting and sales performance reports",
      "Hands-on sales team training and workflow configuration",
    ],
    processSteps: [
      {
        step: "01",
        title: "Sales Funnel Audit",
        description:
          "We analyze your inbound lead sources, sales touchpoints, qualification criteria, and deal stages.",
      },
      {
        step: "02",
        title: "Pipeline UI & Data Architecture",
        description:
          "We configure custom deal fields, contact hierarchies, stage definitions, and user permissions.",
      },
      {
        step: "03",
        title: "Automation & Integration",
        description:
          "We connect website lead forms, marketing campaigns, email notifications, and automated follow-up sequences.",
      },
      {
        step: "04",
        title: "Sales Team Rollout",
        description:
          "We test real lead capture, conduct interactive walkthroughs with your sales reps, and launch into production.",
      },
    ],
    faq: [
      {
        question: "Can our existing leads be imported into the new CRM?",
        answer:
          "Yes, we can import your current contacts, customer lists, and deal histories from Excel, CSV, Google Sheets, or previous CRM platforms.",
      },
      {
        question: "Can leads from Facebook and Instagram ads automatically enter the CRM?",
        answer:
          "Yes! We build automated webhook integrations so leads from Meta Lead Ads, Google Ads, and website forms appear in your pipeline instantly.",
      },
      {
        question: "Can different sales reps only see their assigned leads?",
        answer:
          "Yes, we configure granular role permissions so sales reps only access their assigned leads while managers have full birds-eye visibility.",
      },
    ],
    relatedCategory: "ERP & CRM",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_LIST.find((s) => s.slug === slug);
}
