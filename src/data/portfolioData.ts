import {
  Bot,
  Boxes,
  Code2,
  GraduationCap,
  Home,
  Layout,
  ShoppingCart,
  Workflow,
  LucideIcon,
} from "lucide-react";

import merajInteriorsImg from "@/assets/projects/meraj-interiors.jpg";
import velocartStoreImg from "@/assets/projects/velocart-store.jpg";
import edunexaLmsImg from "@/assets/projects/edunexa-lms.jpg";
import bookflowSaasImg from "@/assets/projects/bookflow-saas.jpg";
import texweaveErpImg from "@/assets/projects/texweave-erp.jpg";
import leadhiveCrmImg from "@/assets/projects/leadhive-crm.jpg";
import supportpilotBotImg from "@/assets/projects/supportpilot-bot.jpg";
import ordermateAgentImg from "@/assets/projects/ordermate-agent.jpg";
import skylineRealtyImg from "@/assets/projects/skyline-realty.jpg";

export interface ProjectItem {
  id: string;
  icon: LucideIcon;
  category: "Websites" | "E-commerce" | "AI & LMS" | "SaaS" | "ERP & CRM" | "Bots & Agents";
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  image: string;
  client?: string;
  techStack?: string[];
  metrics?: { label: string; value: string }[];
}

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Websites",
  "E-commerce",
  "AI & LMS",
  "SaaS",
  "ERP & CRM",
  "Bots & Agents",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export const PROJECTS: ProjectItem[] = [
  {
    id: "meraj-interiors",
    icon: Layout,
    category: "Websites",
    title: "Meraj Interiors",
    tagline: "Corporate website for an interior design studio",
    description:
      "A fully responsive, SEO-ready showcase site with an interactive project gallery and quote request flow.",
    outcomes: ["+65% quote inquiries", "1.2s page load", "95+ SEO score"],
    image: merajInteriorsImg,
    client: "Interior & Architecture Studio",
    techStack: ["React", "Tailwind CSS", "Vite", "SEO Optimization"],
    metrics: [
      { label: "Quote Inquiries", value: "+65%" },
      { label: "Page Speed", value: "1.2s" },
      { label: "SEO Score", value: "95+" },
    ],
  },
  {
    id: "velocart-store",
    icon: ShoppingCart,
    category: "E-commerce",
    title: "VeloCart Store",
    tagline: "Multi-vendor e-commerce platform",
    description:
      "Complete store with product catalog, secure checkout, payment integration and live inventory tracking.",
    outcomes: ["+48% online sales", "12k+ products listed", "3× faster checkout"],
    image: velocartStoreImg,
    client: "Retail & Apparel Brand",
    techStack: ["Next.js", "Stripe Checkout", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Online Sales", value: "+48%" },
      { label: "Products Catalog", value: "12k+" },
      { label: "Checkout Speed", value: "3× Faster" },
    ],
  },
  {
    id: "edunexa-lms",
    icon: GraduationCap,
    category: "AI & LMS",
    title: "EduNexa LMS",
    tagline: "AI-powered learning platform",
    description:
      "Courses, quizzes and progress tracking with an AI tutor that personalizes learning for every student.",
    outcomes: ["5,000+ active students", "+40% course completion", "24/7 AI tutor"],
    image: edunexaLmsImg,
    client: "EdTech & Corporate Academy",
    techStack: ["OpenAI API", "React", "Node.js", "Supabase"],
    metrics: [
      { label: "Active Students", value: "5,000+" },
      { label: "Course Completion", value: "+40%" },
      { label: "AI Tutor Support", value: "24/7" },
    ],
  },
  {
    id: "bookflow-saas",
    icon: Boxes,
    category: "SaaS",
    title: "BookFlow SaaS",
    tagline: "Subscription booking platform",
    description:
      "Multi-tenant SaaS with subscriptions, billing, user roles and real-time analytics dashboard.",
    outcomes: ["300+ paying subscribers", "99.9% uptime", "MRR doubled in 6 months"],
    image: bookflowSaasImg,
    client: "B2B SaaS Startup",
    techStack: ["React", "TypeScript", "PostgreSQL", "Stripe Billing"],
    metrics: [
      { label: "Paid Subscribers", value: "300+" },
      { label: "Platform Uptime", value: "99.9%" },
      { label: "MRR Growth", value: "2× in 6mo" },
    ],
  },
  {
    id: "texweave-erp",
    icon: Workflow,
    category: "ERP & CRM",
    title: "TexWeave ERP",
    tagline: "Manufacturing ERP system",
    description:
      "Finance, HR, inventory and production unified in one custom ERP tailored to the client's workflow.",
    outcomes: ["6 departments unified", "-30% manual work", "Real-time stock view"],
    image: texweaveErpImg,
    client: "Textile & Manufacturing Industry",
    techStack: ["React", "Python FastAPI", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Unified Depts", value: "6 Depts" },
      { label: "Manual Work Reduction", value: "-30%" },
      { label: "Stock Visibility", value: "100% Real-time" },
    ],
  },
  {
    id: "leadhive-crm",
    icon: Code2,
    category: "ERP & CRM",
    title: "LeadHive CRM",
    tagline: "Sales CRM for a real estate agency",
    description:
      "Lead capture, automated follow-ups and visual pipelines that keep the sales team on target.",
    outcomes: ["2× lead conversion", "15 automated pipelines", "-50% response time"],
    image: leadhiveCrmImg,
    client: "Real Estate Brokerage",
    techStack: ["React", "Node.js", "Redis", "Tailwind CSS"],
    metrics: [
      { label: "Lead Conversion", value: "2×" },
      { label: "Automated Pipelines", value: "15" },
      { label: "Response Time", value: "-50%" },
    ],
  },
  {
    id: "supportpilot-bot",
    icon: Bot,
    category: "Bots & Agents",
    title: "SupportPilot Bot",
    tagline: "Server-based website chatbot",
    description:
      "AI chatbot trained on the client's knowledge base that resolves customer questions around the clock.",
    outcomes: ["80% tickets auto-resolved", "24/7 availability", "<5s avg. reply"],
    image: supportpilotBotImg,
    client: "Customer Support & Logistics",
    techStack: ["LangChain", "OpenAI GPT-4o", "Vector DB", "Webhooks"],
    metrics: [
      { label: "Auto-Resolved", value: "80%" },
      { label: "Availability", value: "24/7/365" },
      { label: "Avg. Reply Time", value: "<5s" },
    ],
  },
  {
    id: "ordermate-agent",
    icon: Bot,
    category: "Bots & Agents",
    title: "OrderMate Agent",
    tagline: "WhatsApp ordering agent",
    description:
      "WhatsApp agent that takes orders, confirms payments and sends follow-ups automatically.",
    outcomes: ["1,500+ orders/month", "<30s avg. response", "98% customer rating"],
    image: ordermateAgentImg,
    client: "Quick Service & Delivery Brand",
    techStack: ["WhatsApp Business API", "Node.js", "Payment Gateways", "AI NLU"],
    metrics: [
      { label: "Monthly Orders", value: "1,500+" },
      { label: "Response Time", value: "<30s" },
      { label: "Satisfaction", value: "98%" },
    ],
  },
  {
    id: "skyline-realty",
    icon: Home,
    category: "Websites",
    title: "Skyline Realty",
    tagline: "Property listing website for a real estate agency",
    description:
      "Modern listing site with map search, image-rich property pages and instant WhatsApp booking inquiries.",
    outcomes: ["3× more site visits", "+90 qualified leads/month", "60% faster inquiries"],
    image: skylineRealtyImg,
    client: "Luxury Real Estate Firm",
    techStack: ["React", "Mapbox GL", "Tailwind CSS", "Vite"],
    metrics: [
      { label: "Traffic Surge", value: "3×" },
      { label: "Qualified Leads", value: "+90 /mo" },
      { label: "Inquiry Speed", value: "60% Faster" },
    ],
  },
];
