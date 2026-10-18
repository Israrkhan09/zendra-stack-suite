import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { consultationSchema } from "@/lib/consultation-schema";
import { submitConsultation } from "@/lib/consultation.functions";

export interface Inquiry { source: "quote" | "consultation"; project?: string }
export function ConsultationForm({ inquiry, onClose, services }: { inquiry: Inquiry | null; onClose: () => void; services: string[] }) {
  const send = useServerFn(submitConsultation);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!inquiry || pending) return;
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = consultationSchema.safeParse({ ...values, source: inquiry.source, project: inquiry.project ?? "" });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check your details."); return; }
    setPending(true); setError("");
    try {
      const result = await send({ data: parsed.data });
      if (result.success) setSuccess(true);
      else setError(result.error);
    } catch { setError("We couldn't save your request. Please try again."); }
    finally { setPending(false); }
  }
  const field = "mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-base text-foreground outline-none focus:ring-2 focus:ring-ring";
  return (
    <Sheet open={inquiry !== null} onOpenChange={(open) => { if (!open) onClose(); }}>
      <SheetContent side="right" className="z-[60] h-dvh w-full overflow-y-auto px-5 py-8 sm:max-w-xl sm:px-8 motion-reduce:animate-none">
        <SheetHeader className="pr-5 text-left">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">ZendraStack</p>
          <SheetTitle className="text-2xl font-bold">{success ? "Request received" : "Tell us about your project"}</SheetTitle>
          <SheetDescription>{success ? "Your project details have been saved securely." : inquiry?.project ? `Let's discuss something like ${inquiry.project}.` : "A great project starts with a conversation."}</SheetDescription>
        </SheetHeader>
        {success ? (
          <div className="mt-12 space-y-6">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <p className="text-muted-foreground">Thank you for reaching out to ZendraStack.</p>
            <Button onClick={onClose}>Done <ArrowRight /></Button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="min-w-0 text-sm font-medium">Full name <span className="text-primary">*</span><input className={field} name="name" autoComplete="name" required maxLength={100} /></label>
              <label className="min-w-0 text-sm font-medium">Company<input className={field} name="company" autoComplete="organization" maxLength={150} /></label>
            </div>
            <label className="block text-sm font-medium">Email address <span className="text-primary">*</span><input className={field} type="email" name="email" autoComplete="email" required maxLength={255} /></label>
            <label className="block text-sm font-medium">Phone (optional)<input className={field} type="tel" name="phone" autoComplete="tel" maxLength={30} /></label>
            <label className="block text-sm font-medium">Service <span className="text-primary">*</span><select className={field} name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}<option>Other / Not sure yet</option></select></label>
            <label className="block text-sm font-medium">Project details <span className="text-primary">*</span><textarea className={`${field} min-h-32 resize-y`} name="message" required minLength={10} maxLength={3000} rows={4} placeholder="Your idea, goals and what you need built…" /></label>
            <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={pending} className="h-12 w-full">{pending ? <><Loader2 className="animate-spin" /> Sending…</> : <>Send Request <ArrowRight /></>}</Button>
          </form>
        )}
      </SheetContent>
    </Sheet>
  );
}