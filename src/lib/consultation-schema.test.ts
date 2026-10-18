import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { consultationSchema } from "./consultation-schema";

const input = { name: "Client", email: "client@example.com", phone: "", company: "", service: "Website Development", message: "A new business website", source: "quote", project: "", website: "" };
describe("consultation requests", () => {
  test("accepts quote and consultation from the shared form", () => {
    assert.equal(consultationSchema.parse(input).source, "quote");
    assert.equal(consultationSchema.parse({ ...input, source: "consultation" }).source, "consultation");
  });
  test("rejects invalid email and empty project details", () => {
    assert.equal(consultationSchema.safeParse({ ...input, email: "invalid" }).success, false);
    assert.equal(consultationSchema.safeParse({ ...input, message: "" }).success, false);
  });
  test("rejects unexpected sources and automated honeypot input", () => {
    assert.equal(consultationSchema.safeParse({ ...input, source: "whatsapp" }).success, false);
    assert.equal(consultationSchema.safeParse({ ...input, website: "bot" }).success, false);
  });
});