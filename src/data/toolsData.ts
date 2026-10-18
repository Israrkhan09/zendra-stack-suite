export interface CoreTool {
  name: string;
  serviceCategory: string;
}

export const CORE_TOOLS: CoreTool[] = [
  // 1. Web Chatbots & AI Agents
  { name: "OpenAI GPT-4o", serviceCategory: "AI Models" },
  { name: "Claude 3.5 Sonnet", serviceCategory: "AI Reasoning" },
  { name: "LangChain & Pinecone", serviceCategory: "AI Agents & Vector DB" },

  // 2. WhatsApp AI Agents
  { name: "WhatsApp Cloud API", serviceCategory: "WhatsApp Agents" },

  // 3. AI-Integrated LMS
  { name: "OpenAI Assistant API", serviceCategory: "AI LMS" },

  // 4. Website Development
  { name: "React & Next.js", serviceCategory: "Websites" },
  { name: "TypeScript", serviceCategory: "Language" },
  { name: "Tailwind CSS", serviceCategory: "UI & Design" },

  // 5. E-commerce Websites
  { name: "Shopify & WooCommerce", serviceCategory: "E-Commerce" },
  { name: "Stripe & PayPal", serviceCategory: "Payments" },

  // 6. SaaS Systems
  { name: "Node.js", serviceCategory: "SaaS Backend" },
  { name: "PostgreSQL & Supabase", serviceCategory: "Databases" },

  // 7. ERP Systems
  { name: "Python & FastAPI", serviceCategory: "ERP Systems" },
  { name: "Redis & Celery", serviceCategory: "Queues & Caching" },

  // 8. CRM Systems
  { name: "React Flow & Kanban", serviceCategory: "CRM Pipelines" },

  // DevOps & Cloud
  { name: "Docker & AWS", serviceCategory: "Cloud & DevOps" },
];
