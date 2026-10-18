import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
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
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";
import { getServiceBySlug, SERVICES_LIST, ServiceDetail } from "@/data/servicesData";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetailPage,
});

const CONTACT_EMAIL = "support@zendrastack.com";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ─────────────────────────────────────────────
   SHARED NAVBAR
───────────────────────────────────────────── */
interface ServiceNavbarProps {
  onQuoteOpen: (serviceTitle?: string) => void;
}

function ServiceNavbar({ onQuoteOpen }: ServiceNavbarProps) {
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
              className="inline-flex items-center gap-1.5 py-1 text-sm font-semibold text-primary transition-colors"
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
              className={`absolute left-0 top-full pt-1 w-[min(540px,calc(100vw-2rem))] -translate-x-12 sm:-translate-x-16 lg:-translate-x-12 z-50 transition-all duration-200 ease-out origin-top ${
                servicesDropdownOpen
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              }`}
            >
              {/* Invisible continuous hover bridge */}
              <div className="absolute -top-3 inset-x-0 h-3" />
              <div className="rounded-2xl border border-border bg-card/95 p-3 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
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
          {NAV_LINKS.filter((l) => l.label !== "Services").map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
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
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {/* Services with dropdown on mobile */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-foreground" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-1.5 rounded-xl border border-border/70 bg-card/70 p-2">
                  {SERVICES_LIST.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="flex items-center gap-2.5 rounded-lg p-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary active:bg-secondary"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                        <s.icon className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium">{s.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.filter((l) => l.label !== "Services").map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
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
   SHARED QUOTE DRAWER
───────────────────────────────────────────── */
interface ServiceQuoteDrawerProps {
  open: boolean;
  onClose: () => void;
  initialService?: string;
}

function ServiceQuoteDrawer({ open, onClose, initialService }: ServiceQuoteDrawerProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService || "");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService, open]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    const subject = encodeURIComponent(
      `Quote Request: ${service || "General Inquiry"} — ${name}`
    );
    const bodyLines = [
      `Client Name: ${name}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone || "Not provided"}`,
      `Service Requested: ${service || "Not specified"}`,
      `Approximate Budget: ${budget || "Not specified"}`,
      "",
      "Project Details:",
      message,
      "",
      "— Sent via ZendraStack Website Quote Drawer",
    ];
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setFormState("sent");
    }, 400);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setService(initialService || "");
    setBudget("");
    setMessage("");
    setFormState("idle");
    onClose();
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col bg-background shadow-2xl transition-transform duration-300 ease-out border-l border-border"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 id="drawer-title" className="font-display text-lg font-bold">
                Request a Free Quote
              </h2>
              <p className="text-xs text-muted-foreground">
                Tell us about your project — reply in 24 h
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close form"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {formState === "sent" ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">
                Quote Request Prepared!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                Your email client has been opened with your project details directed to{" "}
                <span className="font-semibold text-foreground">{CONTACT_EMAIL}</span>.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form id="service-quote-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="sqf-name" className="text-sm font-medium text-foreground">
                  Your Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="sqf-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="sqf-email" className="text-sm font-medium text-foreground">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="sqf-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="sqf-phone" className="text-sm font-medium text-foreground">
                  Phone / WhatsApp <span className="ml-1 text-xs text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="sqf-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 XXX XXXXXXX"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="sqf-service" className="text-sm font-medium text-foreground">
                  Service Interested In <span className="text-primary">*</span>
                </label>
                <select
                  id="sqf-service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>Select a service…</option>
                  {SERVICES_LIST.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other / Custom Solution">Other / Custom Solution</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="sqf-budget" className="text-sm font-medium text-foreground">
                  Approximate Budget <span className="ml-1 text-xs text-muted-foreground">(optional)</span>
                </label>
                <select
                  id="sqf-budget"
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
                <label htmlFor="sqf-message" className="text-sm font-medium text-foreground">
                  Tell Us About Your Project <span className="text-primary">*</span>
                </label>
                <textarea
                  id="sqf-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your requirements, goals, preferred timeline…"
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
              form="service-quote-form"
              disabled={formState === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              Send Quote Request
            </button>
            <p className="mt-2.5 text-center text-xs text-muted-foreground">
              Sends to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   SHARED FOOTER
───────────────────────────────────────────── */
function ServiceFooter() {
  return (
    <footer className="border-t border-border bg-card/30 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
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

          {/* Top Services */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Top Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES_LIST.slice(0, 4).map((s) => (
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
              {SERVICES_LIST.slice(4).map((s) => (
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

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} ZendraStack Technologies. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <span className="text-primary font-semibold">Precision &amp; AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   MAIN SERVICE DETAIL PAGE COMPONENT
───────────────────────────────────────────── */
function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleOpenQuote = (title?: string) => {
    setSelectedServiceForQuote(title || service?.title || "");
    setQuoteOpen(true);
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <ServiceNavbar onQuoteOpen={handleOpenQuote} />
        <div className="mx-auto max-w-xl text-center py-32 px-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Bot className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold">Service Not Found</h1>
          <p className="mt-3 text-muted-foreground">
            We couldn't find the service you're looking for. Please browse our available services below.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </Link>
          </div>
        </div>
        <ServiceFooter />
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <ServiceNavbar onQuoteOpen={handleOpenQuote} />

      <main className="pt-16">
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-border">
          <div className="hero-glow absolute inset-0" aria-hidden="true" />
          <div className="hero-grid absolute inset-0" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <a href="/#services" className="hover:text-foreground transition-colors">
                Services
              </a>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium">{service.title}</span>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Heading & CTAs */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  {service.badge}
                </span>

                <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-[1.12]">
                  {service.title.split("&")[0]}
                  {service.title.includes("&") && (
                    <span className="text-gradient">
                      &amp; {service.title.split("&")[1]}
                    </span>
                  )}
                  {!service.title.includes("&") && (
                    <span className="text-gradient"> — Built for Scale</span>
                  )}
                </h1>

                <p className="mt-5 text-lg font-medium text-foreground/90 sm:text-xl leading-relaxed">
                  {service.tagline}
                </p>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {service.fullDescription}
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => handleOpenQuote(service.title)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/50"
                  >
                    <Zap className="h-4 w-4" />
                    Get a Free Quote for {service.shortTitle}
                  </button>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                  >
                    Explore Features
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Feature Box */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-lg shadow-primary/20">
                    <ServiceIcon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                    {service.heroHighlight}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Custom-engineered to deliver quantifiable ROI, extreme reliability, and seamless user experiences.
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-6 space-y-3 border-t border-border pt-6">
                    {service.deliverables.slice(0, 4).map((d, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary mt-0.5">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </div>
                        <span className="text-xs font-medium text-foreground/90">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 pt-6 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Direct Engineering Partner</span>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4" /> 100% Guaranteed Code
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md sm:grid-cols-4 lg:p-8">
              {service.stats.map((st, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-3xl font-extrabold text-foreground sm:text-4xl text-gradient">
                    {st.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── KEY FEATURES GRID ── */}
        <section id="features" className="py-20 sm:py-24 bg-card/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                <Zap className="h-3.5 w-3.5" /> Capabilities &amp; Architecture
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                What powers our <span className="text-gradient">{service.shortTitle}</span>
              </h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                Every solution we deploy is built for production resilience, security, and measurable business growth.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="card-hover group rounded-2xl border border-border bg-card p-7 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERABLES & PROCESS ── */}
        <section className="py-20 sm:py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-12">
              {/* Deliverables */}
              <div className="lg:col-span-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Deliverables Checklist
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
                  What you get with this engagement
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  We don't hand off half-finished templates. You receive a fully tested, turnkey product ready for launch.
                </p>

                <div className="mt-8 space-y-3.5">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div className="lg:col-span-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Execution Pathway
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
                  How we build and launch it
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Transparent, milestone-driven sprints with continuous staging access and zero surprises.
                </p>

                <div className="mt-8 space-y-5">
                  {service.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground shadow-md shadow-primary/25">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-display text-base font-semibold text-foreground">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FREQUENTLY ASKED QUESTIONS ── */}
        <section className="py-20 sm:py-24 border-t border-border bg-card/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Common Questions
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Everything you need to know before initiating your project.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {service.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h4 className="font-display text-base font-semibold text-foreground">
                    {item.question}
                  </h4>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA BANNER ── */}
        <section className="py-20 sm:py-24 border-t border-border relative overflow-hidden">
          <div className="hero-glow absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Start Your Project
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold sm:text-5xl">
              Ready to deploy your <span className="text-gradient">{service.title}</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Share your project details with our engineering team. We'll review your scope and provide a tailored proposal within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => handleOpenQuote(service.title)}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <Zap className="h-4 w-4" />
                Get Consultation &amp; Quote
              </button>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <ServiceFooter />

      {/* Quote Drawer */}
      <ServiceQuoteDrawer
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        initialService={selectedServiceForQuote}
      />
    </div>
  );
}
