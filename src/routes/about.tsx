import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Home,
  Layers,
  Layout,
  Mail,
  MessageSquare,
  Moon,
  Rocket,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";
import { SERVICES_LIST } from "@/data/servicesData";
import { CORE_TOOLS } from "@/data/toolsData";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us — ZendraStack Technologies",
      },
      {
        name: "description",
        content:
          "Learn about ZendraStack Technologies — our mission, engineering philosophy, and dedication to building scalable web apps, SaaS platforms, and autonomous AI agents.",
      },
      {
        property: "og:title",
        content: "About Us — ZendraStack Technologies",
      },
      {
        property: "og:description",
        content:
          "We build software that grows your business. Explore our story, values, and engineering approach.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "About Us — ZendraStack Technologies",
      },
    ],
  }),
  component: AboutPage,
});

const CONTACT_EMAIL = "support@zendrastack.com";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
interface AboutNavbarProps {
  onQuoteOpen: (category?: string) => void;
}

function AboutNavbar({ onQuoteOpen }: AboutNavbarProps) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("zendrastack-theme");
    const darkThemeSelected = storedTheme === "dark";
    document.documentElement.classList.toggle("dark", darkThemeSelected);
    setIsDark(darkThemeSelected);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const closeDropdownImmediately = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(false);
  };

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("zendrastack-theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logoBlack}
            alt="ZendraStack Technologies"
            className="h-9 w-auto dark:hidden"
          />
          <img
            src={logoWhite}
            alt="ZendraStack Technologies"
            className="hidden h-9 w-auto dark:block"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden h-16 items-center gap-7 md:flex">
          {/* Services with smooth animated dropdown */}
          <div
            ref={dropdownRef}
            className="relative flex h-16 items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setServicesDropdownOpen((v) => !v);
              }}
              className="inline-flex items-center gap-1.5 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-foreground" : ""
                }`}
              />
            </button>

            {/* Smooth Animated Dropdown Menu with seamless padding bridge */}
            <div
              className={`absolute left-0 top-full pt-1 w-[540px] -translate-x-12 z-50 transition-all duration-200 ease-out origin-top ${
                servicesDropdownOpen
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              }`}
            >
              {/* Invisible continuous hover bridge */}
              <div className="absolute -top-3 inset-x-0 h-3" />
              <div className="rounded-2xl border border-border bg-card/95 p-3 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-1.5">
                  {SERVICES_LIST.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={closeDropdownImmediately}
                      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-secondary/70"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <s.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-foreground transition-colors group-hover:text-primary truncate">
                          {s.title}
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                          {s.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other nav links */}
          <Link
            to="/portfolio"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile menu toggle & theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1">
              <span
                className={`h-0.5 w-4 bg-foreground transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-foreground transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-foreground transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="border-b border-border bg-background px-4 py-4 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {/* Mobile collapsible Services section */}
            <div className="rounded-xl border border-border/60 bg-card/40 p-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm font-semibold text-foreground transition-colors"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 space-y-1 border-t border-border/50 pt-2">
                  {SERVICES_LIST.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      <s.icon className="h-3.5 w-3.5 text-primary" />
                      <span className="truncate">{s.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-primary bg-primary/10"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────
   QUOTE DRAWER
───────────────────────────────────────────── */
interface QuoteDrawerProps {
  open: boolean;
  onClose: () => void;
}

function QuoteDrawer({ open, onClose }: QuoteDrawerProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    const subject = encodeURIComponent(`Consultation Request from ${name}`);
    const bodyLines = [
      `Hi ZendraStack Team,`,
      ``,
      `I would like to discuss a project:`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone / WhatsApp: ${phone}` : null,
      service ? `Service / Interest: ${service}` : null,
      budget ? `Approximate Budget: ${budget}` : null,
      ``,
      `Details:`,
      message,
      ``,
      `Regards,`,
      name,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(
      bodyLines
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormState("sent");
    }, 400);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setBudget("");
    setMessage("");
    setFormState("idle");
    onClose();
  };

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Get a Free Quote"
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-lg flex-col bg-background shadow-2xl transition-transform duration-[380ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Get a Free Quote
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Fill in your project details — we'll reply within 24 hours.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote form"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {formState === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-5 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Message Sent!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your mail client opened with all project details. We will review and reply
                  to <strong>{email}</strong> shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form id="about-quote-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="aq-name" className="text-sm font-medium text-foreground">
                  Your Name <span className="text-primary">*</span>
                </label>
                <input
                  id="aq-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="aq-email" className="text-sm font-medium text-foreground">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="aq-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="aq-phone" className="text-sm font-medium text-foreground">
                  Phone / WhatsApp
                  <span className="ml-1 text-xs text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="aq-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="aq-service" className="text-sm font-medium text-foreground">
                  Service Interested In <span className="text-primary">*</span>
                </label>
                <select
                  id="aq-service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICES_LIST.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Custom Project">Custom Project / Architecture</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="aq-budget" className="text-sm font-medium text-foreground">
                  Approximate Budget
                  <span className="ml-1 text-xs text-muted-foreground">(optional)</span>
                </label>
                <select
                  id="aq-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Prefer not to say</option>
                  <option value="Under $500">Under $500</option>
                  <option value="$500 – $1,500">$500 – $1,500</option>
                  <option value="$1,500 – $5,000">$1,500 – $5,000</option>
                  <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                  <option value="$15,000+">$15,000+</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="aq-message" className="text-sm font-medium text-foreground">
                  Project Scope & Goals <span className="text-primary">*</span>
                </label>
                <textarea
                  id="aq-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you're building, key features, and your target timeline…"
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </form>
          )}
        </div>

        {formState !== "sent" && (
          <div className="border-t border-border px-6 py-5">
            <button
              type="submit"
              form="about-quote-form"
              disabled={formState === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60"
            >
              {formState === "sending" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Opening mail client…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Request
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Sends to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              · Direct response within 24h
            </p>
          </div>
        )}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   ABOUT US PAGE MAIN COMPONENT
───────────────────────────────────────────── */
function AboutPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const VALUES = [
    {
      icon: Zap,
      title: "Obsession with Speed & Performance",
      description:
        "We build ultra-fast, lightweight web applications optimized for Core Web Vitals, sub-second API responses, and maximum conversion rates.",
    },
    {
      icon: ShieldCheck,
      title: "100% Code & IP Ownership",
      description:
        "No proprietary locks, no hidden licensing fees. All source code, Docker configs, database schemas, and API keys are 100% owned by you.",
    },
    {
      icon: Bot,
      title: "Autonomous AI-First Architecture",
      description:
        "We treat AI as a core capability, not a gimmick. From conversational support bots to intelligent workflow agents, we automate business hours into revenue.",
    },
    {
      icon: HeartHandshake,
      title: "Direct Senior Engineering",
      description:
        "You collaborate directly with senior full-stack developers and AI engineers. No junior handoffs, no bureaucratic layers, just pure execution.",
    },
    {
      icon: Target,
      title: "Transparent Fixed Pricing",
      description:
        "Clear scopes, realistic timelines, and milestone-based fixed budgets. You know exactly what you are paying for and when it will be delivered.",
    },
    {
      icon: Rocket,
      title: "Built to Scale From Day One",
      description:
        "Whether you have 10 users or 100,000, our cloud-native architectures handle database growth, server loads, and multi-tenant scaling effortlessly.",
    },
  ];

  const PROCESS_STEPS = [
    {
      num: "01",
      title: "Discovery & Architecture",
      desc: "We analyze your business goals, target audience, and system requirements to blueprint the exact tech stack and milestone roadmap.",
    },
    {
      num: "02",
      title: "UI/UX & Rapid Prototyping",
      desc: "Modern, high-converting interfaces designed with responsive mobile layouts and intuitive workflows tailored to your users.",
    },
    {
      num: "03",
      title: "Agile Development Sprints",
      desc: "Clean, maintainable code written in short 1-week sprints with staging links, live progress demos, and continuous testing.",
    },
    {
      num: "04",
      title: "Launch & Growth Support",
      desc: "Production deployment with automated CI/CD, SSL, performance audits, domain DNS setup, and comprehensive documentation handover.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <AboutNavbar onQuoteOpen={() => setQuoteOpen(true)} />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-card/60 via-background to-background py-16 sm:py-24">
          <div className="absolute inset-0 bg-hero-radial opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">About Us</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Our Story & Engineering Philosophy
              </div>

              <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                We build software that <span className="text-gradient">grows your business</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                ZendraStack Technologies was founded with a clear mission: to bridge the gap
                between complex modern engineering and real, measurable business outcomes. We
                replace traditional agency bureaucracy with direct collaboration, clean code, and
                autonomous AI innovation.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4" />
                  Work With Us
                </button>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/70 p-6 sm:grid-cols-4 sm:p-8 backdrop-blur">
              <div>
                <div className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                  50+
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                  Digital Systems Shipped
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold sm:text-3xl text-primary">
                  100%
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                  Code & IP Ownership
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                  99.9%
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                  Uptime & Reliability
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold sm:text-3xl text-primary">
                  24/7
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                  Automated AI Operations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story & Mission Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Who We Are
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  A high-velocity team of software developers & AI architects
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Too many founders and business owners get stuck with slow development cycles,
                  outdated agency retainers, and bloated CMS templates that crash under load.
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  At <strong>ZendraStack</strong>, we do things differently. We build with
                  modern, future-proof stacks — combining React, Next.js, TypeScript, Python,
                  and autonomous AI models. From custom enterprise ERPs to 24/7 WhatsApp AI
                  agents, we engineer systems that directly boost client revenues and eliminate
                  repetitive manual labour.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      No junior developer handoffs — direct senior architectural guidance
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      Clean, modular codebases written to modern enterprise standards
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      Transparent milestone progress with live staging links updated daily
                    </span>
                  </div>
                </div>
              </div>

              {/* Story Highlight Card */}
              <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-card to-background p-8 sm:p-10 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                  Our Engineering Manifesto
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  "Software shouldn't just exist — it should deliver an undeniable competitive
                  advantage. We believe in simplicity over unnecessary complexity, speed over
                  sluggish bureaucracy, and solutions that pay for themselves many times over."
                </p>

                <div className="mt-8 border-t border-border/80 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-semibold text-foreground">
                        ZendraStack Leadership
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Web, AI & Software Engineering Division
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>Get in Touch</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values / Pillars */}
        <section className="border-t border-border bg-card/30 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Our Values
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Principles that guide every line of code
              </h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base">
                How we operate, engineer, and build lasting technology partnerships with our clients.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="card-hover group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <val.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {val.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 4-Step Process */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                How We Deliver
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                From concept to deployment in <span className="text-gradient">4 clear stages</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base">
                A structured, battle-tested methodology ensuring zero surprises and total transparency.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="card-hover rounded-2xl border border-border bg-card p-6"
                >
                  <div className="font-display text-3xl font-extrabold text-primary/30">
                    {step.num}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Technologies & AI Tools Section */}
        <section className="border-t border-border bg-card/40 py-16 sm:py-20" id="tools-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Modern Technologies We Master
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
                Core AI models, frameworks, and cloud architectures powering our 8 services.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {CORE_TOOLS.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground shadow-sm transition-all hover:border-primary/50 hover:bg-secondary/40"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>{tech.name}</span>
                  <span className="text-[11px] font-normal text-muted-foreground">
                    ({tech.serviceCategory})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="border-t border-border bg-gradient-to-b from-card/30 to-background py-20 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Ready to work with a dedicated engineering partner?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Let's talk about your project goals. Get a free technical consultation and a
              fixed-price proposal within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setQuoteOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5"
              >
                <Sparkles className="h-4 w-4" />
                Get a Free Quote
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
              >
                <Mail className="h-4 w-4 text-primary" />
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/60 py-12 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <Link to="/">
                <img
                  src={logoBlack}
                  alt="ZendraStack Technologies"
                  className="h-9 w-auto dark:hidden"
                />
                <img
                  src={logoWhite}
                  alt="ZendraStack Technologies"
                  className="hidden h-9 w-auto dark:block"
                />
              </Link>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Custom web, AI, SaaS, ERP & CRM systems engineered for growth, reliability, and
                measurable results.
              </p>
              <p className="text-xs text-muted-foreground">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>

            <div>
              <div className="font-semibold text-foreground">Services</div>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                {SERVICES_LIST.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="transition-colors hover:text-foreground"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-semibold text-foreground">Specialized AI</div>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                {SERVICES_LIST.slice(5).map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="transition-colors hover:text-foreground"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/portfolio" className="text-primary font-medium hover:underline">
                    View All Case Studies →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-foreground">Company</div>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>
                  <Link to="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="transition-colors hover:text-foreground">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-primary font-medium transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition-colors hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
            <div>
              © {new Date().getFullYear()} ZendraStack Technologies. All rights reserved.
            </div>
            <div>Built with precision, performance, and pride.</div>
          </div>
        </div>
      </footer>

      {/* Quote Drawer */}
      <QuoteDrawer open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
