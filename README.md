# Ankita Bhagawati — Portfolio

Futuristic, responsive portfolio built with **Next.js 14 (App Router) + TypeScript + TailwindCSS + Framer Motion**.

## Tech Stack
- **Next.js 14** — App Router, TypeScript
- **TailwindCSS** — Utility-first styling
- **Framer Motion** — Splash, scroll reveals, hover animations, accordion
- **lucide-react** — Icons
- **Radix UI** — Accessible primitives (via shadcn pattern)
- **Canvas API** — Animated particle + mesh background

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Add your resume PDF (optional — for the View Resume modal)
cp Ankita_Bhagawati_Resume.pdf public/Ankita_Bhagawati_Resume.pdf

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ankita-portfolio/
├── app/
│   ├── components/
│   │   ├── AnimatedBackground.tsx  # Canvas particle bg
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx              # Sticky nav + mobile menu
│   │   ├── Reveal.tsx              # Scroll-triggered reveal
│   │   ├── ResumeModal.tsx         # PDF modal with phone prank
│   │   ├── ScrollProgress.tsx      # Top progress bar
│   │   └── Splash.tsx              # 1.7s intro splash
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx          # Accordion timeline
│   │   ├── Projects.tsx            # Project cards grid
│   │   ├── Skills.tsx              # Skill groups
│   │   ├── EducationCerts.tsx
│   │   └── Contact.tsx             # Contact + phone prank
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── data.ts                     # All resume content (single source of truth)
│   └── utils.ts                    # cn() helper
├── public/
│   └── Ankita_Bhagawati_Resume.pdf # Place resume PDF here
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and connect via [vercel.com](https://vercel.com) for auto-deploy.
