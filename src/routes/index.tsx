import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle2,
  Code2,
  GraduationCap,
  Home,
  Layout,
  MessageCircle,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import merajInteriorsImg from "@/assets/projects/meraj-interiors.jpg";
import velocartStoreImg from "@/assets/projects/velocart-store.jpg";
import edunexaLmsImg from "@/assets/projects/edunexa-lms.jpg";
import bookflowSaasImg from "@/assets/projects/bookflow-saas.jpg";
import texweaveErpImg from "@/assets/projects/texweave-erp.jpg";
import leadhiveCrmImg from "@/assets/projects/leadhive-crm.jpg";
import supportpilotBotImg from "@/assets/projects/supportpilot-bot.jpg";
import ordermateAgentImg from "@/assets/projects/ordermate-agent.jpg";
import skylineRealtyImg from "@/assets/projects/skyline-realty.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ZendraStack — Web, AI & Software Development Agency",
      },
      {
        name: "description",
        content:
          "ZendraStack builds websites, e-commerce stores, AI-integrated LMS, SaaS, ERP & CRM systems, chatbots and WhatsApp agents. Contact us on WhatsApp to get started.",
      },
      { property: "og:title", content: "ZendraStack — Web, AI & Software Development Agency" },
      {
        property: "og:description",
        content:
          "Websites, e-commerce, AI LMS, SaaS, ERP, CRM, chatbots and WhatsApp agents — built by ZendraStack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ZendraStack — Web, AI & Software Development Agency" },
      {
        name: "twitter:description",
        content:
          "Websites, e-commerce, AI LMS, SaaS, ERP, CRM, chatbots and WhatsApp agents — built by ZendraStack.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER_DISPLAY = "+92 319 4080600";
const WHATSAPP_NUMBER_INTL = "923194080600";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(message)}`;
}

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "How We Work", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Layout,
    title: "Website Development",
    description:
      "Fast, responsive and SEO-ready websites for businesses, portfolios and startups — built to convert visitors into customers.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description:
      "Complete online stores with product catalogs, secure checkout, payments, order management and inventory tracking.",
  },
  {
    icon: GraduationCap,
    title: "AI-Integrated LMS",
    description:
      "Learning management systems with courses, quizzes, progress tracking and AI tutors that personalize learning for every student.",
  },
  {
    icon: Boxes,
    title: "SaaS Systems",
    description:
      "Scalable software-as-a-service platforms with subscriptions, user management, billing and analytics built in from day one.",
  },
  {
    icon: Workflow,
    title: "ERP Systems",
    description:
      "Unify finance, HR, inventory and operations in one powerful ERP tailored to how your business actually runs.",
  },
  {
    icon: Code2,
    title: "CRM Systems",
    description:
      "Track leads, manage pipelines and automate follow-ups with a CRM your sales team will actually enjoy using.",
  },
  {
    icon: Bot,
    title: "Web Chatbots & AI Agents",
    description:
      "Server-based chatbots and autonomous agents that answer customers, qualify leads and work 24/7 on your website.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Agents",
    description:
      "Smart WhatsApp agents that handle orders, support and follow-ups automatically — right inside the app your customers use daily.",
  },
];

const PORTFOLIO_CATEGORIES = [
  "All",
  "Websites",
  "E-commerce",
  "AI & LMS",
  "SaaS",
  "ERP & CRM",
  "Bots & Agents",
];

const PROJECTS = [
  {
    icon: Layout,
    category: "Websites",
    title: "Meraj Interiors",
    tagline: "Corporate website for an interior design studio",
    description:
      "A fully responsive, SEO-ready showcase site with an interactive project gallery and quote request flow.",
    outcomes: ["+65% quote inquiries", "1.2s page load", "95+ SEO score"],
    image: merajInteriorsImg,
  },
  {
    icon: ShoppingCart,
    category: "E-commerce",
    title: "VeloCart Store",
    tagline: "Multi-vendor e-commerce platform",
    description:
      "Complete store with product catalog, secure checkout, payment integration and live inventory tracking.",
    outcomes: ["+48% online sales", "12k+ products listed", "3× faster checkout"],
    image: velocartStoreImg,
  },
  {
    icon: GraduationCap,
    category: "AI & LMS",
    title: "EduNexa LMS",
    tagline: "AI-powered learning platform",
    description:
      "Courses, quizzes and progress tracking with an AI tutor that personalizes learning for every student.",
    outcomes: ["5,000+ active students", "+40% course completion", "24/7 AI tutor"],
    image: edunexaLmsImg,
  },
  {
    icon: Boxes,
    category: "SaaS",
    title: "BookFlow SaaS",
    tagline: "Subscription booking platform",
    description:
      "Multi-tenant SaaS with subscriptions, billing, user roles and real-time analytics dashboard.",
    outcomes: ["300+ paying subscribers", "99.9% uptime", "MRR doubled in 6 months"],
    image: bookflowSaasImg,
  },
  {
    icon: Workflow,
    category: "ERP & CRM",
    title: "TexWeave ERP",
    tagline: "Manufacturing ERP system",
    description:
      "Finance, HR, inventory and production unified in one custom ERP tailored to the client's workflow.",
    outcomes: ["6 departments unified", "-30% manual work", "Real-time stock view"],
    image: texweaveErpImg,
  },
  {
    icon: Code2,
    category: "ERP & CRM",
    title: "LeadHive CRM",
    tagline: "Sales CRM for a real estate agency",
    description:
      "Lead capture, automated follow-ups and visual pipelines that keep the sales team on target.",
    outcomes: ["2× lead conversion", "15 automated pipelines", "-50% response time"],
    image: leadhiveCrmImg,
  },
  {
    icon: Bot,
    category: "Bots & Agents",
    title: "SupportPilot Bot",
    tagline: "Server-based website chatbot",
    description:
      "AI chatbot trained on the client's knowledge base that resolves customer questions around the clock.",
    outcomes: ["80% tickets auto-resolved", "24/7 availability", "<5s avg. reply"],
    image: supportpilotBotImg,
  },
  {
    icon: MessageCircle,
    category: "Bots & Agents",
    title: "OrderMate Agent",
    tagline: "WhatsApp ordering agent",
    description:
      "WhatsApp agent that takes orders, confirms payments and sends follow-ups automatically.",
    outcomes: ["1,500+ orders/month", "<30s avg. response", "98% customer rating"],
    image: ordermateAgentImg,
  },
  {
    icon: Home,
    category: "Websites",
    title: "Skyline Realty",
    tagline: "Property listing website for a real estate agency",
    description:
      "Modern listing site with map search, image-rich property pages and instant WhatsApp booking inquiries.",
    outcomes: ["3× more site visits", "+90 qualified leads/month", "60% faster inquiries"],
    image: skylineRealtyImg,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tell Us Your Idea",
    description:
      "Message us on WhatsApp and describe what you need. We reply quickly with questions, suggestions and a clear plan.",
  },
  {
    step: "02",
    title: "Plan & Proposal",
    description:
      "We define the scope, timeline and a fixed transparent quote — no hidden costs, no surprises.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "You see progress at every stage with previews and feedback rounds until it's exactly right.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy, test and hand over a fully working product — then stay available for updates and support.",
  },
];

const WHY_POINTS = [
  "Fixed, transparent pricing agreed before we start",
  "Fully responsive on mobile, tablet and desktop",
  "Modern AI features built where they create real value",
  "Fast delivery with clear weekly progress updates",
  "Clean, scalable code you fully own",
  "Ongoing support after launch",
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "24/7", label: "WhatsApp Support" },
  { value: "100%", label: "Responsive Builds" },
  { value: "8+", label: "Service Lines" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
            Z
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Zendra<span className="text-primary">Stack</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={waLink("Hi ZendraStack! I want to discuss a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-foreground transition-all ${open ? "top-2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-foreground transition-all ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-foreground transition-all ${open ? "top-2 -rotate-45" : "top-4"}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink("Hi ZendraStack! I want to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 md:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-soft">
            <Sparkles className="h-3.5 w-3.5" />
            Web · AI · SaaS · Automation — one team
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            We build software that <span className="text-gradient">grows your business</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            ZendraStack designs and develops websites, e-commerce stores, AI-powered LMS,
            SaaS platforms, ERP & CRM systems, chatbots and WhatsApp agents — all under
            one roof.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink("Hi ZendraStack! I want a quote for my project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/50 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary sm:w-auto"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need, <span className="text-gradient">built right</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From your first landing page to a full AI-powered platform — we handle the
            entire journey.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card-hover group rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={waLink("Hi ZendraStack! I want to discuss one of your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary-soft transition-all hover:bg-primary/20"
          >
            <MessageCircle className="h-4 w-4" />
            Need something custom? Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === category);

  return (
    <section id="portfolio" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work that delivers <span className="text-gradient">real results</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of projects we've shipped — with the outcomes that mattered.
            Want something similar? Message us on WhatsApp.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                category === cat
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  width={960}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-[11px] font-medium text-primary-soft backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <project.icon className="h-5 w-5" />
                  </div>
                </div>

              <h3 className="mt-5 font-display text-lg font-semibold">{project.title}</h3>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {project.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 space-y-2">
                {project.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 shrink-0 text-primary" />
                    <span className="font-medium text-foreground">{outcome}</span>
                  </div>
                ))}
              </div>

                <a
                  href={waLink(
                    `Hi ZendraStack! I saw the "${project.title}" case study in your portfolio and I'd like something similar for my business.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary-soft transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  Inquire About This Project
                </a>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No projects in this category yet — but we'd love to build yours. Message us!
          </p>
        )}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-border bg-card/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From idea to launch in <span className="text-gradient">4 steps</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A simple, transparent process — it all starts with a WhatsApp message.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.step}
              className="card-hover relative rounded-2xl border border-border bg-background p-6"
            >
              <div className="font-display text-4xl font-extrabold text-primary/25">
                {step.step}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {i < PROCESS_STEPS.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary/50 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why businesses choose <span className="text-gradient">ZendraStack</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We don't just write code — we become your technology partner, focused on
              results you can measure.
            </p>
            <ul className="mt-8 space-y-4">
              {WHY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-hover rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-card to-background p-8 sm:p-10">
            <Zap className="h-10 w-10 text-primary" />
            <h3 className="mt-5 font-display text-2xl font-bold">
              Ready when you are
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Have an idea for a website, store, platform or AI agent? Want a server
              set up or a system built? Just send us a message — we'll take it from
              there.
            </p>
            <a
              href={waLink("Hi ZendraStack! I have a project idea — let's talk.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-card/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-glow relative overflow-hidden rounded-3xl border border-border bg-background p-8 text-center sm:p-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build your next <span className="text-gradient">big thing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Want a server, a system, a website or an AI agent? Contact us directly on
            WhatsApp — we usually reply within minutes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink("Hi ZendraStack! I'd like to get started.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER_INTL}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-4 font-display text-sm font-semibold tracking-wide text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 sm:w-auto"
            >
              {WHATSAPP_NUMBER_DISPLAY}
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Available 24/7 · Free consultation · No obligation
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
                Z
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Zendra<span className="text-primary">Stack</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              Websites · E-commerce · AI · SaaS · ERP · CRM · Chatbots
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={waLink("Hi ZendraStack!")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-soft transition-colors hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" />
            {WHATSAPP_NUMBER_DISPLAY}
          </a>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ZendraStack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi ZendraStack! I have a question.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ZendraStack on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/40 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/30" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
