---
name: zendrakhan
description: >
  Expert knowledge skill for the ZendraStack Suite project (Israrkhan09/zendra-stack-suite).
  Activate this skill whenever the user asks to build, edit, fix, enhance, add features,
  style, deploy, or debug anything related to this ZendraStack agency website.
  Also activates for questions about the project architecture, design system,
  components, routing, Supabase integration, or any code changes.
---

# ZendraStack Suite — Expert Skill Guide

## Project Location
c:\Users\LENOVO PC\Downloads\new-agency\

## Dev Server
```powershell
npm run dev
# Runs on: http://localhost:8081 (port 8080 was in use)
```

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8.1.5 |
| Routing | TanStack Router v1 (file-based) |
| Styling | Tailwind CSS v4 + tw-animate-css |
| UI Components | ShadCN / Radix UI (full suite) |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Database | Supabase + Drizzle ORM |
| Server | Nitro (via @tanstack/react-start) |
| Package Manager | npm |
| Language | TypeScript |

## Key File Map

```
src/
  routes/
    __root.tsx          <- Root layout (ThemeProvider, fonts, Toaster)
    index.tsx           <- MAIN PAGE (826 lines, all sections here)
  styles.css            <- Design system, CSS variables, utilities
  routeTree.gen.ts      <- Auto-generated (do NOT edit manually)
  router.tsx            <- Router setup
  server.ts             <- Nitro server entry
  start.ts              <- TanStack Start entry
  assets/
    projects/           <- 9 project showcase images
      meraj-interiors.jpg
      velocart-store.jpg
      edunexa-lms.jpg
      bookflow-saas.jpg
      texweave-erp.jpg
      leadhive-crm.jpg
      supportpilot-bot.jpg
      ordermate-agent.jpg
      skyline-realty.jpg
    zendra-logo-black.png.asset.json
    zendra-logo-white.png.asset.json
  components/ui/        <- ShadCN components
  hooks/                <- Custom React hooks
  integrations/         <- Supabase client
  lib/                  <- Utilities (cn, etc.)
```

## Design System (src/styles.css)

### Theme Architecture
- Light mode: tokens in :root
- Dark mode: overrides in .dark class (toggled globally on <html>)
- Color space: oklch
- Rule: NEVER hardcode colors in components — always use semantic CSS variable tokens

### Brand Colors
```css
--primary: oklch(0.55 0.2 255)        /* Electric blue */
--primary-soft: oklch(0.48 0.18 255)  /* Softer blue */
--glow: oklch(0.55 0.2 255 / 20%)     /* Blue glow */
--whatsapp: #25d366                    /* WhatsApp green */
/* Dark mode: --background: oklch(0.13 0.018 265) deep dark */
```

### Typography
```css
--font-display: "Sora", "Inter", sans-serif  /* h1-h4 */
--font-sans: "Inter", sans-serif             /* body */
```

### Custom CSS Utilities
- .text-gradient   -> Blue gradient on headline text
- .hero-glow       -> Radial blue glow background
- .hero-grid       -> Blueprint grid pattern for hero section
- .card-hover      -> Lift + border glow on hover

## Main Page Sections (src/routes/index.tsx)

| Section | Anchor | Description |
|---|---|---|
| Navbar | — | Sticky nav, animated Services dropdown (8 services), dark/light toggle, mobile menu |
| Hero | — | Headline, CTA buttons, animated stats |
| Services | #services | 8 service cards with icons |
| Portfolio | #portfolio | 9 project cards + category filter |
| Process | #process | 4-step how-we-work timeline |
| Why Us | #why-us | Differentiators grid |
| Contact | #contact | WhatsApp CTA + contact info |
| Footer | — | Links + copyright |

## WhatsApp Integration

```typescript
const WHATSAPP_NUMBER_DISPLAY = "+92 319 4080600";
const WHATSAPP_NUMBER_INTL    = "923194080600";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(message)}`;
}
```

## Services & Individual Pages (8 total - AI Services at Top)
Each service has its own dedicated page at `/services/:slug`:
1. **Web Chatbots & AI Agents** (`/services/web-chatbots-ai-agents`)
2. **AI-Integrated LMS** (`/services/ai-integrated-lms`)
3. **WhatsApp AI Agents** (`/services/whatsapp-ai-agents`)
4. **SaaS Systems** (`/services/saas-systems`)
5. **Website Development** (`/services/website-development`)
6. **E-commerce Websites** (`/services/ecommerce-websites`)
7. **ERP Systems** (`/services/erp-systems`)
8. **CRM Systems** (`/services/crm-systems`)

Service data source: `src/data/servicesData.ts`
Route handler: `src/routes/services/$slug.tsx`

## Portfolio Projects (9 total)
| Project | Category |
|---|---|
| Meraj Interiors | Websites |
| VeloCart Store | E-commerce |
| EduNexa LMS | AI & LMS |
| BookFlow SaaS | SaaS |
| TexWeave ERP | ERP & CRM |
| LeadHive CRM | ERP & CRM |
| SupportPilot Bot | Bots & Agents |
| OrderMate Agent | Bots & Agents |
| Skyline Realty | Websites |

## Dark/Light Mode Toggle

```typescript
const [dark, setDark] = useState(true); // defaults to dark
useEffect(() => {
  document.documentElement.classList.toggle("dark", dark);
}, [dark]);
```

## Supabase Integration
- Client: src/integrations/supabase/client.ts
- Config: .env (VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY)
- Schema: supabase/ directory
- ORM: Drizzle, config in drizzle.config.ts
- WARNING: Do NOT commit .env

## Common Tasks

### Add a New Service Card
In src/routes/index.tsx, add to the SERVICES array:
```typescript
{
  icon: YourLucideIcon,
  title: "Service Title",
  description: "Service description.",
},
```

### Add a New Portfolio Project
Import image + add to PROJECTS array:
```typescript
import myImg from "@/assets/projects/my-project.jpg";
// In PROJECTS array:
{
  icon: SomeLucideIcon,
  category: "Websites",       // must match PORTFOLIO_CATEGORIES
  title: "Project Name",
  tagline: "Short tagline",
  description: "Longer description.",
  outcomes: ["Outcome 1", "Outcome 2", "Outcome 3"],
  image: myImg,
},
```

### Add a New Route/Page
Create src/routes/pagename.tsx:
```typescript
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/pagename")({ component: MyPage });
function MyPage() { return <div>Content</div>; }
```
Route tree auto-generates on next npm run dev.

### Change WhatsApp Number
Update in src/routes/index.tsx:
```typescript
const WHATSAPP_NUMBER_DISPLAY = "+XX XXX XXXXXXX";
const WHATSAPP_NUMBER_INTL    = "XXXXXXXXXXX";
```

## NPM Scripts
```powershell
npm run dev        # Start dev server
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint
npm run format     # Prettier
```

## Critical Rules
1. NEVER force-push or rebase already-pushed commits (Lovable sync will break)
2. Keep main branch ALWAYS in working state (Lovable syncs every commit)
3. Components use semantic CSS variable tokens only — no hardcoded colors
4. Light-first CSS: :root for light, .dark for dark overrides
5. Do NOT manually edit src/routeTree.gen.ts

## Lovable Integration
Project: https://lovable.dev/projects/14748b70-1619-491b-b2ec-8a65e988a397
Every push to main on GitHub syncs back to the Lovable editor automatically.
