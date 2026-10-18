import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  phone: z.string().trim().max(30).regex(/^[+\d\s().-]*$/, "Please enter a valid phone number."),
  company: z.string().trim().max(150),
  service: z.string().trim().min(1, "Please select a service.").max(100),
  message: z.string().trim().min(10, "Please include at least 10 characters about your project.").max(3000),
  source: z.enum(["quote", "consultation"]),
  project: z.string().trim().max(150),
  website: z.string().max(0),
});
export type ConsultationInput = z.infer<typeof consultationSchema>;