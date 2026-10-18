import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Code2,
  GraduationCap,
  HelpCircle,
  Home,
  Layout,
  Mail,
  MapPin,
  MessageSquare,
  Moon,
  Phone,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Sun,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";
import { SERVICES_LIST } from "@/data/servicesData";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us — ZendraStack Technologies",
      },
      {
        name: "description",
        content:
          "Get in touch with ZendraStack Technologies. Request a free quote and consultation for websites, AI chatbots, SaaS platforms, and enterprise ERP/CRM systems.",
      },
      {
        property: "og:title",
        content: "Contact Us — ZendraStack Technologies",
      },
      {
        property: "og:description",
        content:
          "Have a project idea? Reach out to ZendraStack for a transparent quote and free consultation within 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Contact Us — ZendraStack Technologies",
      },
    ],
  }),
  component: ContactPage,
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
   NAVBAR
───────────────────────────────────────────── */
interface ContactNavbarProps {
  onQuoteOpen: () => void;
}

function ContactNavbar({ onQuoteOpen }: ContactNavbarProps) {
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
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold text-primary transition-colors"
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
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-primary bg-primary/10"
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
   CONTACT PAGE MAIN COMPONENT
───────────────────────────────────────────── */
function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("from_name", "ZendraStack Website");
      formData.append("subject", `New Proposal Request from ${name}${service ? ` (${service})` : ""}`);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone || "Not provided");
      formData.append("service", service || "Not specified");
      formData.append("budget", budget || "Not specified");
      formData.append("timeline", timeline || "Not specified");
      formData.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFormState("sent");
      } else {
        // Fallback to mailto if submission fails
        const subject = encodeURIComponent(`Project Inquiry from ${name}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
        setFormState("sent");
      }
    } catch {
      // Network fallback
      const subject = encodeURIComponent(`Project Inquiry from ${name}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
      setFormState("sent");
    }
  };

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setBudget("");
    setTimeline("");
    setMessage("");
    setFormState("idle");
  };

  const FAQS = [
    {
      q: "How fast can we kick off our project?",
      a: "Once we finalize the scope and proposal, we typically begin sprint planning and architecture within 2 to 3 business days.",
    },
    {
      q: "How does your pricing and payment structure work?",
      a: "We believe in transparent, fixed-price quotes broken into milestone deliverables (e.g. 30% upfront deposit, 40% midway upon staging demo, and 30% upon final launch & source handover).",
    },
    {
      q: "Will we own 100% of the code and intellectual property?",
      a: "Yes, absolutely. All custom source code, database architectures, graphics, and server credentials belong 100% to you with full documentation.",
    },
    {
      q: "Do you offer post-launch maintenance and support?",
      a: "Yes. Every build comes with 30 days of complimentary bug-fixing and warranty support, plus optional retainer packages for ongoing feature development, hosting management, and scaling.",
    },
    {
      q: "Can you integrate AI or chatbots into an existing platform?",
      a: "Definitely. We frequently integrate custom AI agents, OpenAI/Claude API workflows, and WhatsApp bots directly into existing websites and CRM stacks.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <ContactNavbar onQuoteOpen={() => {
        const formEl = document.getElementById("contact-form-section");
        formEl?.scrollIntoView({ behavior: "smooth" });
      }} />

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
              <span className="text-foreground">Contact</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Let's Start a Conversation
              </div>

              <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Let's build your next <span className="text-gradient">big thing</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Whether you need a sleek high-converting website, an AI chatbot that works
                24/7, a custom enterprise ERP, or a full SaaS platform — our team is here to help
                you execute with precision.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Details Section */}
        <section id="contact-form-section" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Left Column: Direct Contact & Guarantees (5 cols) */}
              <div className="space-y-6 lg:col-span-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Reach Out Directly
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    We're ready to engineer your solution
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Send us your specifications or shoot an email. We review every inquiry and
                    respond within 24 hours with clear recommendations and pricing options.
                  </p>
                </div>

                {/* Email Card */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-muted-foreground">
                          Direct Support & Inquiries
                        </div>
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="font-display text-base font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="rounded-lg border border-border bg-secondary/80 px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:border-primary/40"
                    >
                      {copiedEmail ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Response & Guarantees */}
                <div className="rounded-2xl border border-border bg-card p-6 space-y-4 shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        Under 24h Response
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Guaranteed quick turnaround with technical feedback and milestone estimates.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        Confidential & NDA Protected
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Your project concepts, data, and intellectual property remain 100% secure.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        Free 30-Min Architecture Call
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Book a direct technical session to clarify scopes, tech stacks, and timelines.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours & Global Delivery */}
                <div className="rounded-2xl border border-border bg-card/60 p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Global Availability
                  </div>
                  <div className="mt-2 text-sm font-medium text-foreground">
                    Monday – Saturday: 9:00 AM – 8:00 PM (GMT)
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Remotely delivering enterprise software to clients in the US, UK, UAE,
                    Europe, and worldwide.
                  </p>
                </div>
              </div>

              {/* Right Column: Contact & Proposal Form (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-8 md:p-10 shadow-xl">
                  {formState === "sent" ? (
                    <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          Proposal Request Sent!
                        </h3>
                        <p className="mt-2 max-w-md text-sm text-muted-foreground">
                          Thank you! Your project details have been directly sent to our inbox.
                          We'll review your requirements and get back to you at <strong>{email}</strong> within
                          24 hours.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="border-b border-border/80 pb-5">
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          Request a Proposal & Consultation
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                          Fill in the scope details below. We'll tailor a quote and plan for you.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-1.5">
                            <label
                              htmlFor="cf-name"
                              className="text-xs font-semibold text-foreground"
                            >
                              Full Name <span className="text-primary">*</span>
                            </label>
                            <input
                              id="cf-name"
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="e.g. Alex Morgan"
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label
                              htmlFor="cf-email"
                              className="text-xs font-semibold text-foreground"
                            >
                              Work Email <span className="text-primary">*</span>
                            </label>
                            <input
                              id="cf-email"
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="alex@company.com"
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-1.5">
                            <label
                              htmlFor="cf-phone"
                              className="text-xs font-semibold text-foreground"
                            >
                              Phone / WhatsApp
                              <span className="ml-1 text-[11px] text-muted-foreground font-normal">
                                (optional)
                              </span>
                            </label>
                            <input
                              id="cf-phone"
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+1 (555) 000-0000"
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label
                              htmlFor="cf-service"
                              className="text-xs font-semibold text-foreground"
                            >
                              Service Category <span className="text-primary">*</span>
                            </label>
                            <select
                              id="cf-service"
                              required
                              value={service}
                              onChange={(e) => setService(e.target.value)}
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                            >
                              <option value="" disabled>
                                Select a service category…
                              </option>
                              {SERVICES_LIST.map((s) => (
                                <option key={s.slug} value={s.title}>
                                  {s.title}
                                </option>
                              ))}
                              <option value="Custom Software">Custom Enterprise Architecture</option>
                              <option value="Other">Other / Not Sure</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-1.5">
                            <label
                              htmlFor="cf-budget"
                              className="text-xs font-semibold text-foreground"
                            >
                              Approximate Budget
                              <span className="ml-1 text-[11px] text-muted-foreground font-normal">
                                (optional)
                              </span>
                            </label>
                            <select
                              id="cf-budget"
                              value={budget}
                              onChange={(e) => setBudget(e.target.value)}
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                            >
                              <option value="">Select budget range…</option>
                              <option value="Under $500">Under $500</option>
                              <option value="$500 – $1,500">$500 – $1,500</option>
                              <option value="$1,500 – $5,000">$1,500 – $5,000</option>
                              <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                              <option value="$15,000+">$15,000+</option>
                            </select>
                          </div>

                          <div className="space-y-1.5">
                            <label
                              htmlFor="cf-timeline"
                              className="text-xs font-semibold text-foreground"
                            >
                              Target Launch Timeline
                            </label>
                            <select
                              id="cf-timeline"
                              value={timeline}
                              onChange={(e) => setTimeline(e.target.value)}
                              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                            >
                              <option value="">Expected timeline…</option>
                              <option value="Immediately (1-2 weeks)">Immediately (1-2 weeks)</option>
                              <option value="Within 1 month">Within 1 month</option>
                              <option value="1-3 months">1-3 months</option>
                              <option value="Flexible / Planning stage">Flexible / Planning stage</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="cf-message"
                            className="text-xs font-semibold text-foreground"
                          >
                            Tell Us About Your Project <span className="text-primary">*</span>
                          </label>
                          <textarea
                            id="cf-message"
                            required
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Describe your goals, requirements, reference websites, or specific features you need…"
                            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={formState === "sending"}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60"
                          >
                            {formState === "sending" ? (
                              <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                                Opening mail client…
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4" />
                                Send Proposal Request
                              </>
                            )}
                          </button>
                          <p className="mt-3 text-center text-xs text-muted-foreground">
                            Submits directly to{" "}
                            <a
                              href={`mailto:${CONTACT_EMAIL}`}
                              className="text-primary hover:underline"
                            >
                              {CONTACT_EMAIL}
                            </a>{" "}
                            · We reply within 24 hours
                          </p>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-border bg-card/30 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Got Questions?
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Everything you need to know about working with ZendraStack.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              ))}
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
                  <Link to="/about" className="transition-colors hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-primary font-medium transition-colors">
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
    </div>
  );
}
