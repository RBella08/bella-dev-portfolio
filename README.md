This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# BellaDev — Portfolio

Personal portfolio website for Quadri Happiness Kilani (BellaDev), a web developer building modern, responsive websites and web applications.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- React Hook Form + Zod
- Resend (contact form email)
- next-themes (light/dark/system)
- Deployed on Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values:

```env
RESEND_API_KEY=       # from resend.com → API Keys
CONTACT_EMAIL=         # inbox that receives contact form messages
NEXT_PUBLIC_SITE_URL=  # the site's real live URL
```

## Available Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — check for code errors/style issues

## Adding or Editing a Project

Edit `src/data/projects.ts`. Each entry needs a `slug`, `name`, `type`, `description`, `role`, `technologies`, `image`, and `liveUrl`. Adding a new entry automatically creates its homepage card, its `/work/[slug]` page, and its sitemap entry — no other file needs to change.

To swap a screenshot, replace the file in `public/images/projects/` and update the `image` path if the filename changed.

## Editing Site-Wide Content

- Name, email, phone, GitHub, nav links → `src/data/site.ts`
- Services → `src/data/services.ts`
- Skills/technologies → `src/data/skills.ts`
- Colors, fonts, spacing → `src/app/globals.css`

## Deployment

Hosted on Vercel, connected to the `main` branch. Every `git push` to `main` auto-deploys. Environment variables must also be set in Vercel's Project Settings → Environment Variables.
