import { describe, expect, test } from "bun:test";
import { consultationSchema } from "./consultation-schema";

const input = { name: "Client", email: "client@example.com", phone: "", company: "", service: "Website Development", message: "A new business website", source: "quote", project: "", website: "" };
describe("consultation requests", () => {
  test("accepts quote and consultation from the shared form", () => {
    expect(consultationSchema.parse(input).source).toBe("quote");
    expect(consultationSchema.parse({ ...input, source: "consultation" }).source).toBe("consultation");
  });
  test("rejects invalid email and empty project details", () => {
    expect(consultationSchema.safeParse({ ...input, email: "invalid" }).success).toBe(false);
    expect(consultationSchema.safeParse({ ...input, message: "" }).success).toBe(false);
  });
  test("rejects unexpected sources and automated honeypot input", () => {
    expect(consultationSchema.safeParse({ ...input, source: "whatsapp" }).success).toBe(false);
    expect(consultationSchema.safeParse({ ...input, website: "bot" }).success).toBe(false);
  });
});