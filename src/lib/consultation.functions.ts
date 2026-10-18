import { createServerFn } from "@tanstack/react-start";
import { consultationSchema } from "./consultation-schema";

export const submitConsultation = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => consultationSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { count, error: limitError } = await supabaseAdmin
      .from("consultation_requests")
      .select("id", { count: "exact", head: true })
      .eq("email", data.email)
      .gte("created_at", new Date(Date.now() - 60_000).toISOString());
    if (limitError) return { success: false, error: "We couldn't save your request. Please try again." };
    if ((count ?? 0) >= 3) return { success: false, error: "Please wait a minute before sending another request." };
    const { website: _website, ...submission } = data;
    const { error } = await supabaseAdmin.from("consultation_requests").insert(submission);
    if (error) return { success: false, error: "We couldn't save your request. Please try again." };
    return { success: true, error: "" };
  });