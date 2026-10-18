import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle2,
  ChevronDown,
  Code2,
  GraduationCap,
  Home,
  Layout,
  Mail,
  MessageSquare,
  Moon,
  Send,
  ShoppingCart,
  Sparkles,
  Sun,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";
import { PROJECTS, PORTFOLIO_CATEGORIES, ProjectItem } from "@/data/portfolioData";
import { ProjectInquiryDrawer } from "@/components/ProjectInquiryDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ZendraStack — Web, AI & Software Development Agency",
      },
      {
        name: "description",
        content:
          "ZendraStack builds websites, e-commerce stores, AI-integrated LMS, SaaS, ERP & CRM systems, chatbots and WhatsApp agents. Contact us to get started.",
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

const CONTACT_EMAIL = "support@zendrastack.com";
const WEB3FORMS_ACCESS_KEY = "046c7517-3869-46a0-8e36-64695abd4d1c";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  {
    slug: "web-chatbots-ai-agents",
    icon: Bot,
    title: "Web Chatbots & AI Agents",
    description:
      "Server-based chatbots and autonomous agents that answer customers, qualify leads and work 24/7 on your website.",
  },
  {
    slug: "ai-integrated-lms",
    icon: GraduationCap,
    title: "AI-Integrated LMS",
    description:
      "Learning management systems with courses, quizzes, progress tracking and AI tutors that personalize learning for every student.",
  },
  {
    slug: "whatsapp-ai-agents",
    icon: MessageSquare,
    title: "WhatsApp AI Agents",
    description:
      "Smart WhatsApp agents that handle orders, support and follow-ups automatically — right inside the app your customers use daily.",
  },
  {
    slug: "saas-systems",
    icon: Boxes,
    title: "SaaS Systems",
    description:
      "Scalable software-as-a-service platforms with subscriptions, user management, billing and analytics built in from day one.",
  },
  {
    slug: "website-development",
    icon: Layout,
    title: "Website Development",
    description:
      "Fast, responsive and SEO-ready websites for businesses, portfolios and startups — built to convert visitors into customers.",
  },
  {
    slug: "ecommerce-websites",
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description:
      "Complete online stores with product catalogs, secure checkout, payments, order management and inventory tracking.",
  },
  {
    slug: "erp-systems",
    icon: Workflow,
    title: "ERP Systems",
    description:
      "Unify finance, HR, inventory and operations in one powerful ERP tailored to how your business actually runs.",
  },
  {
    slug: "crm-systems",
    icon: Code2,
    title: "CRM Systems",
    description:
      "Track leads, manage pipelines and automate follow-ups with a CRM your sales team will actually enjoy using.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tell Us Your Idea",
    description:
      "Fill out our quick form or reach out directly. We reply quickly with questions, suggestions and a clear plan.",
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
  { value: "48h", label: "Average Response" },
  { value: "100%", label: "Responsive Builds" },
  { value: "8+", label: "Service Lines" },
];

/* ─────────────────────────────────────────────
   QUOTE FORM DRAWER
   Slides in from the right side of the screen
───────────────────────────────────────────── */
type FormState = "idle" | "sending" | "sent" | "error";

interface QuoteDrawerProps {
  open: boolean;
  onClose: () => void;
  prefillService?: string;
}

function QuoteDrawer({ open, onClose, prefillService = "" }: QuoteDrawerProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(prefillService);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const drawerRef = useRef<HTMLDivElement>(null);

  // Sync prefill when drawer opens for a specific service
  useEffect(() => {
    if (open) {
      setService(prefillService);
      setFormState("idle");
    }
  }, [open, prefillService]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Lock body scroll when drawer is open
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("from_name", "ZendraStack Quote Drawer");
      formData.append("subject", `[Quote Request] ${service || "General"} — ${name}`);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone || "Not provided");
      formData.append("service", service || "Not specified");
      formData.append("budget", budget || "Not specified");
      formData.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFormState("sent");
      } else {
        const subject = encodeURIComponent(`[ZendraStack Quote Request] ${service || "General"} — ${name}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
        setFormState("sent");
      }
    } catch {
      const subject = encodeURIComponent(`[ZendraStack Quote Request] ${service || "General"} — ${name}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
      setFormState("sent");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setService(prefillService);
    setBudget("");
    setMessage("");
    setFormState("idle");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Get a Free Quote"
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-lg flex-col bg-background shadow-2xl transition-transform duration-[380ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Get a Free Quote
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Fill in the details — we'll get back to you within 24 hours.
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

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {formState === "sent" ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center gap-5 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Quote Sent!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your mail client opened with all the details. We'll review and reply
                  to <strong>{email}</strong> soon.
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 rounded-xl border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form id="quote-form" onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="qf-name"
                  className="text-sm font-medium text-foreground"
                >
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="qf-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ahmed Khan"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="qf-email"
                  className="text-sm font-medium text-foreground"
                >
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="qf-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label
                  htmlFor="qf-phone"
                  className="text-sm font-medium text-foreground"
                >
                  Phone / WhatsApp
                  <span className="ml-1 text-xs text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="qf-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 XXX XXXXXXX"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Service */}
              <div className="space-y-1.5">
                <label
                  htmlFor="qf-service"
                  className="text-sm font-medium text-foreground"
                >
                  Service Interested In <span className="text-primary">*</span>
                </label>
                <select
                  id="qf-service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>

              {/* Budget */}
              <div className="space-y-1.5">
                <label
                  htmlFor="qf-budget"
                  className="text-sm font-medium text-foreground"
                >
                  Approximate Budget
                  <span className="ml-1 text-xs text-muted-foreground">(optional)</span>
                </label>
                <select
                  id="qf-budget"
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

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="qf-message"
                  className="text-sm font-medium text-foreground"
                >
                  Tell Us About Your Project <span className="text-primary">*</span>
                </label>
                <textarea
                  id="qf-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe what you need, your goals, timeline, or any specific features…"
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </form>
          )}
        </div>

        {/* Footer CTA */}
        {formState !== "sent" && (
          <div className="border-t border-border px-6 py-5">
            <button
              type="submit"
              form="quote-form"
              disabled={formState === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {formState === "sending" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Opening mail client…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Quote Request
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Sends to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              · We reply within 24 h
            </p>
          </div>
        )}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
interface NavbarProps {
  onQuoteOpen: () => void;
}

function Navbar({ onQuoteOpen }: NavbarProps) {
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
    // Crisp 150ms buffer for seamless transitions
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
        <a href="#home" className="flex items-center" onClick={() => setOpen(false)}>
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
        </a>

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
                  {SERVICES.map((s) => (
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
                          {s.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other nav links */}
          {NAV_LINKS.filter((l) => l.label !== "Services").map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border"
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
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {/* Services with dropdown on mobile */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-foreground" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-2 space-y-1 border-l-2 border-primary/30 pl-3 pt-1">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <s.icon className="h-3.5 w-3.5 text-primary" />
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.filter((l) => l.label !== "Services").map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
interface HeroProps {
  onQuoteOpen: () => void;
}

function Hero({ onQuoteOpen }: HeroProps) {
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
            SaaS platforms, ERP &amp; CRM systems, chatbots and WhatsApp agents — all under
            one roof.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              id="hero-quote-btn"
              onClick={onQuoteOpen}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/50 sm:w-auto"
            >
              <Zap className="h-4 w-4" />
              Get a Free Quote
            </button>
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

/* ─────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────── */
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
            <Link
              key={service.title}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="card-hover group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-80 transition-all group-hover:opacity-100 group-hover:translate-x-1">
                <span>View Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PORTFOLIO
───────────────────────────────────────────── */
interface PortfolioProps {
  onQuoteOpen: (service?: string) => void;
  onProjectInquire: (project: ProjectItem) => void;
}

function Portfolio({ onQuoteOpen, onProjectInquire }: PortfolioProps) {
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
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${category === cat
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 6).map((project) => (
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

                <button
                  type="button"
                  onClick={() => onProjectInquire(project)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <ArrowRight className="h-4 w-4" />
                  Inquire About This Project
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No projects in this category yet — but we'd love to build yours!
          </p>
        )}

        {/* View Full Portfolio CTA Button */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link
            to="/portfolio"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5 sm:w-auto"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROCESS
───────────────────────────────────────────── */
function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-border bg-card/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From idea to launch in <span className="text-gradient">4 steps</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A simple, transparent process — it all starts with a quick message.
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

/* ─────────────────────────────────────────────
   WHY US
───────────────────────────────────────────── */
interface WhyUsProps {
  onQuoteOpen: () => void;
}

function WhyUs({ onQuoteOpen }: WhyUsProps) {
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
              Have an idea for a website, store, platform or AI agent? Want a system
              built? Fill out our quick form — we'll take it from there.
            </p>
            <button
              type="button"
              id="whyus-quote-btn"
              onClick={onQuoteOpen}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
interface ContactProps {
  onConsultOpen: () => void;
}

function Contact({ onConsultOpen }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-card/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-glow relative overflow-hidden rounded-3xl border border-border bg-background p-8 text-center sm:p-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build your next <span className="text-gradient">big thing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Want a server, a system, a website or an AI agent? Tell us about your project
            and we'll get back to you with a free consultation and a tailored quote.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              id="contact-consult-btn"
              onClick={onConsultOpen}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
            >
              <Zap className="h-5 w-5" />
              Get Consultation
            </button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-4 font-display text-sm font-semibold tracking-wide text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Free consultation · No obligation · Reply within 24 h
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center">
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
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We design and build digital products that help businesses grow — from sleek
              websites to full AI-powered platforms.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">More Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(4).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-border" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} ZendraStack. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Websites · E-commerce · AI · SaaS · ERP · CRM · Chatbots · Agents
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   ROOT INDEX COMPONENT
───────────────────────────────────────────── */
function Index() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [prefillService, setPrefillService] = useState("");
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const openQuote = (service = "") => {
    setPrefillService(service);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onQuoteOpen={() => openQuote()} />
      <main>
        <Hero onQuoteOpen={() => openQuote()} />
        <Services />
        <Portfolio
          onQuoteOpen={openQuote}
          onProjectInquire={(project) => { setSelectedProject(project); setInquiryOpen(true); }}
        />
        <Process />
        <WhyUs onQuoteOpen={() => openQuote()} />
        <Contact onConsultOpen={() => openQuote()} />
      </main>
      <Footer />

      <QuoteDrawer
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        prefillService={prefillService}
      />

      <ProjectInquiryDrawer
        open={inquiryOpen}
        onClose={() => { setInquiryOpen(false); setSelectedProject(null); }}
        project={selectedProject}
      />
    </div>
  );
}
