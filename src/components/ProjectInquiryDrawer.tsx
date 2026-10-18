import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Send,
  TrendingUp,
  X,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { ProjectItem } from "@/data/portfolioData";

interface ProjectInquiryDrawerProps {
  open: boolean;
  onClose: () => void;
  project: ProjectItem | null;
}

const CONTACT_EMAIL = "support@zendrastack.com";
const WEB3FORMS_ACCESS_KEY = "046c7517-3869-46a0-8e36-64695abd4d1c";

export function ProjectInquiryDrawer({
  open,
  onClose,
  project,
}: ProjectInquiryDrawerProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [intent, setIntent] = useState("I want to build a similar project like this");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Lock body scroll when open
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

  // Reset form state when a new project is opened
  useEffect(() => {
    if (open && project) {
      setFormState("idle");
      setMessage(
        `Hi ZendraStack team,\n\nI reviewed your case study for "${project.title}" (${project.category}) and would like to build a similar solution for my business.\n\nHere are some details about what we need:`
      );
    }
  }, [open, project]);

  if (!project) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("from_name", "ZendraStack Portfolio Inquiry");
      formData.append("subject", `[Project Inquiry] ${project.title} (${project.category}) — ${name}`);
      formData.append("project_title", project.title);
      formData.append("project_category", project.category);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone || "Not provided");
      formData.append("intent", intent);
      formData.append("budget", budget || "Not provided");
      formData.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFormState("sent");
      } else {
        // Fallback
        const subject = encodeURIComponent(`[Project Inquiry] ${project.title} — ${name}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
        setFormState("sent");
      }
    } catch {
      // Network fallback
      const subject = encodeURIComponent(`[Project Inquiry] ${project.title} — ${name}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
      setFormState("sent");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
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
        className={`fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Inquire about ${project.title}`}
        className={`fixed inset-y-0 right-0 z-[90] flex w-full max-w-xl flex-col bg-background shadow-2xl transition-transform duration-[380ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6 sm:py-5">
          <div className="min-w-0 pr-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              <Sparkles className="h-3 w-3" />
              Project Specific Inquiry
            </div>
            <h2 className="mt-1 font-display text-lg sm:text-xl font-bold tracking-tight text-foreground truncate">
              Inquire About: {project.title}
            </h2>
            <p className="mt-0.5 text-xs text-muted-foreground truncate">
              Ask questions or get a tailored proposal based on this project.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry form"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
          {/* Selected Project Preview Card */}
          <div className="mb-6 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-start gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="h-20 w-24 rounded-xl object-cover shrink-0 border border-border/80"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                    {project.category}
                  </span>
                  {project.client && (
                    <span className="text-[11px] text-muted-foreground truncate">
                      {project.client}
                    </span>
                  )}
                </div>
                <h3 className="mt-1 font-display text-base font-bold text-foreground truncate">
                  {project.title}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                  {project.tagline}
                </p>

                {/* Outcomes tags */}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.outcomes.slice(0, 2).map((outcome) => (
                    <span
                      key={outcome}
                      className="inline-flex items-center gap-1 rounded bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-foreground"
                    >
                      <TrendingUp className="h-2.5 w-2.5 text-primary" />
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {formState === "sent" ? (
            /* Success confirmation screen */
            <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Inquiry Sent!
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                  Your inquiry for <strong>{project.title}</strong> has been sent directly to our inbox.
                  We'll review your project goals and reply to{" "}
                  <strong>{email}</strong> within 24 hours.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-2 w-full max-w-xs">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          ) : (
            /* Dedicated Project Inquiry Form */
            <form id="project-inquiry-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="pi-name" className="text-xs font-semibold text-foreground">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="pi-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="pi-email" className="text-xs font-semibold text-foreground">
                    Work Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="pi-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="pi-phone" className="text-xs font-semibold text-foreground">
                    Phone / WhatsApp
                    <span className="ml-1 text-[11px] text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="pi-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="pi-budget" className="text-xs font-semibold text-foreground">
                    Approximate Budget
                  </label>
                  <select
                    id="pi-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select budget range…</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 – $1,500">$500 – $1,500</option>
                    <option value="$1,500 – $5,000">$1,500 – $5,000</option>
                    <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                    <option value="$15,000+">$15,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="pi-intent" className="text-xs font-semibold text-foreground">
                  Inquiry Purpose
                </label>
                <select
                  id="pi-intent"
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="I want to build a similar project like this">
                    I want to build a similar project like this
                  </option>
                  <option value="I want an estimate/quote based on this project">
                    I want an estimate/quote based on this project
                  </option>
                  <option value="I have specific technical questions about this project">
                    I have specific technical questions about this project
                  </option>
                  <option value="Other / Custom requirements">
                    Other / Custom requirements
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="pi-message" className="text-xs font-semibold text-foreground">
                  Your Requirements for {project.title} <span className="text-primary">*</span>
                </label>
                <textarea
                  id="pi-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your goals, features you need, or questions regarding this project…"
                  className="w-full resize-none rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 leading-relaxed"
                />
              </div>

              {/* Trust Badges */}
              <div className="rounded-xl border border-border/70 bg-secondary/40 p-3 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  100% Free Consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  Reply within 24 hours
                </span>
              </div>
            </form>
          )}
        </div>

        {/* Footer CTA */}
        {formState !== "sent" && (
          <div className="border-t border-border px-6 py-4">
            <button
              type="submit"
              form="project-inquiry-form"
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
                  Send Inquiry for {project.title}
                </>
              )}
            </button>
            <p className="mt-2.5 text-center text-[11px] text-muted-foreground">
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
