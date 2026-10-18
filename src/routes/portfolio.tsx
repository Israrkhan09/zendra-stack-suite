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
  Layers,
  ShieldCheck,
  Check,
} from "lucide-react";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";
import { SERVICES_LIST } from "@/data/servicesData";
import {
  PROJECTS,
  PORTFOLIO_CATEGORIES,
  ProjectItem,
  PortfolioCategory,
} from "@/data/portfolioData";
import { ProjectInquiryDrawer } from "@/components/ProjectInquiryDrawer";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      {
        title: "Portfolio & Case Studies — ZendraStack Technologies",
      },
      {
        name: "description",
        content:
          "Explore our portfolio of delivered web apps, e-commerce stores, AI LMS platforms, SaaS products, ERP/CRM systems, and AI chatbots & agents.",
      },
      {
        property: "og:title",
        content: "Portfolio & Case Studies — ZendraStack Technologies",
      },
      {
        property: "og:description",
        content:
          "Websites, e-commerce, AI LMS, SaaS, ERP, CRM, chatbots and WhatsApp agents built by ZendraStack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Portfolio & Case Studies — ZendraStack Technologies",
      },
    ],
  }),
  component: PortfolioPage,
});

const CONTACT_EMAIL = "support@zendrastack.com";
const WEB3FORMS_ACCESS_KEY = "046c7517-3869-46a0-8e36-64695abd4d1c";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ─────────────────────────────────────────────
   SHARED NAVBAR
───────────────────────────────────────────── */
interface PortfolioNavbarProps {
  onQuoteOpen: (category?: string) => void;
}

function PortfolioNavbar({ onQuoteOpen }: PortfolioNavbarProps) {
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
            className="text-sm font-semibold text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
              className="rounded-lg px-3 py-2 text-sm font-semibold text-primary bg-primary/10"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
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
  initialCategory?: string;
}

function QuoteDrawer({ open, onClose, initialCategory }: QuoteDrawerProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialCategory) {
      setService(initialCategory);
    }
  }, [initialCategory]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("from_name", "ZendraStack Portfolio Quote Drawer");
      formData.append("subject", `[Portfolio Quote] ${service || "General"} — ${name}`);
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
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
        setFormState("sent");
      }
    } catch {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
      setFormState("sent");
    }
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
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Get a Free Quote"
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-lg flex-col bg-background shadow-2xl transition-transform duration-[380ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "translate-x-0" : "translate-x-full"
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
            <div className="flex flex-col items-center justify-center gap-5 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Quote Sent!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your mail client opened with all the details. We'll review and reply to{" "}
                  <strong>{email}</strong> soon.
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
            <form id="portfolio-quote-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="pq-name" className="text-sm font-medium text-foreground">
                  Your Name <span className="text-primary">*</span>
                </label>
                <input
                  id="pq-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="pq-email" className="text-sm font-medium text-foreground">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="pq-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="pq-phone" className="text-sm font-medium text-foreground">
                  Phone / WhatsApp
                  <span className="ml-1 text-xs text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="pq-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="pq-service" className="text-sm font-medium text-foreground">
                  Service / Category <span className="text-primary">*</span>
                </label>
                <select
                  id="pq-service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Select category or service…
                  </option>
                  {SERVICES_LIST.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Websites">Websites Showcase</option>
                  <option value="E-commerce">E-commerce Platform</option>
                  <option value="AI & LMS">AI & LMS Solution</option>
                  <option value="SaaS">SaaS Application</option>
                  <option value="ERP & CRM">ERP & CRM System</option>
                  <option value="Bots & Agents">Bots & AI Agents</option>
                  <option value="Other / Custom">Other / Custom</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="pq-budget" className="text-sm font-medium text-foreground">
                  Approximate Budget
                  <span className="ml-1 text-xs text-muted-foreground">(optional)</span>
                </label>
                <select
                  id="pq-budget"
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
                <label htmlFor="pq-message" className="text-sm font-medium text-foreground">
                  Tell Us About Your Project <span className="text-primary">*</span>
                </label>
                <textarea
                  id="pq-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your requirements, goals, timeline, or reference projects you like…"
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
              form="portfolio-quote-form"
              disabled={formState === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
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
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
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
   PORTFOLIO PAGE MAIN COMPONENT
───────────────────────────────────────────── */
function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedCategoryForQuote, setSelectedCategoryForQuote] = useState<string | undefined>();
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenQuote = (category?: string) => {
    setSelectedCategoryForQuote(category);
    setQuoteOpen(true);
  };

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Shared Navbar */}
      <PortfolioNavbar onQuoteOpen={handleOpenQuote} />

      {/* Main Content Area */}
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
              <span className="text-foreground">Portfolio</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Proven Client Deliveries
              </div>

              <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Work that delivers <span className="text-gradient">real results</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                A showcase of production-grade websites, multi-vendor commerce platforms,
                AI-integrated learning platforms, custom enterprise ERPs, CRMs, and autonomous
                AI agents engineered for scale.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/70 p-6 sm:grid-cols-4 sm:p-8 backdrop-blur">
              <div>
                <div className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                  9+
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                  Production Systems
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold sm:text-3xl text-primary">
                  100%
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                  On-Time Delivery
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                  3×
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                  Avg. Growth & ROI
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold sm:text-3xl text-primary">
                  24/7
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                  Autonomous AI Workflows
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase Grid Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {PORTFOLIO_CATEGORIES.map((cat) => {
                const count =
                  cat === "All"
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === cat).length;

                const isActive = activeCategory === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* All Projects Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project: ProjectItem) => (
                <article
                  key={project.id}
                  className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/40"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={960}
                      height={640}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-background/85 px-3 py-1 text-[11px] font-medium text-primary backdrop-blur">
                      {project.category}
                    </span>
                    {project.client && (
                      <span className="absolute bottom-3 left-3 rounded-md bg-black/75 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {project.client}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <project.icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    {project.techStack && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border/70 bg-secondary/70 px-2 py-0.5 text-[11px] font-medium text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Outcomes */}
                    <div className="mt-5 space-y-2 border-t border-border/70 pt-4">
                      {project.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-center gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 shrink-0 text-primary" />
                          <span className="font-medium text-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProject(project);
                        setInquiryOpen(true);
                      }}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                    >
                      <ArrowRight className="h-4 w-4" />
                      Inquire About This Project
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="mt-16 rounded-2xl border border-dashed border-border p-12 text-center">
                <p className="text-base font-medium text-foreground">
                  No projects currently listed in this category.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We frequently build bespoke solutions for custom industry requirements.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenQuote(activeCategory)}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Request a Custom Build
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Why Clients Choose ZendraStack */}
        <section className="border-t border-border bg-card/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Engineered for <span className="text-gradient">Performance & Scale</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every project is crafted with modern architectures, clean codebases, and
                revenue-driven execution.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  100% Code Ownership
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Full source code, repositories, and credentials are completely handed over to you
                  with clear documentation.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  Lightning Fast Delivery
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We work in agile sprints with live staging links so you can track progress and
                  provide feedback daily.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  Measurable ROI
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Whether increasing conversion rates, cutting manual hours, or automating support,
                  we optimize for metrics that count.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to build CTA Section */}
        <section className="border-t border-border bg-gradient-to-b from-card/30 to-background py-20 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Have a Project in Mind? Let's Build It Together.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Get in touch today for a free scope consultation and detailed timeline. No hidden
              fees, transparent fixed pricing.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenQuote()}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5"
              >
                <Sparkles className="h-4 w-4" />
                Get a Free Quote
              </button>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
              >
                <Mail className="h-4 w-4 text-primary" />
                Email Our Team
              </a>
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
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary hover:underline"
                >
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
                  <Link to="/about" className="transition-colors hover:text-foreground">
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
      <QuoteDrawer
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        initialCategory={selectedCategoryForQuote}
      />

      {/* Project Specific Inquiry Drawer */}
      <ProjectInquiryDrawer
        open={inquiryOpen}
        onClose={() => {
          setInquiryOpen(false);
          setSelectedProject(null);
        }}
        project={selectedProject}
      />
    </div>
  );
}
