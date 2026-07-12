# Gareth Digital Solutions

Production-quality V1 for the Gareth Digital Solutions website and Missed Call Recovery System lead funnel.

The site is built as a scalable Next.js foundation, not a throwaway landing page. Version 1 keeps the implementation simple while leaving clear paths for a blog, customer portal, authentication, PostgreSQL, AI integrations, videos, forms, and an admin dashboard.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Formspree for V1 lead capture

## Project Structure

```text
app/                         Next.js App Router routes and global styles
components/layout/           Header and footer
components/sections/         Reusable landing page sections
components/ui/               Small shared UI components
features/missed-call-estimator/
  animated-number.tsx        Animated result display
  calculate.ts               Typed estimator calculation logic
  missed-call-estimator.tsx  Calculator, result card, and Formspree lead form
  types.ts                   Feature-specific TypeScript types
config/                      Site-wide constants and public config
lib/                         Shared formatting/helpers
public/images/               Logo and visual assets
types/                       Shared app types
docs/                        Notes for roadmap and future improvements
```

## Environment Variables

Create `.env.local` from `.env.example` if you want to override the built-in V1 values:

```text
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xkgpdabj
NEXT_PUBLIC_GOOGLE_CALENDAR_URL=https://calendar.app.google/NGGeP7pEw8xUpD8x7
```

The current V1 also includes these values as safe public fallbacks in `config/site.ts`.

## Local Development

Install dependencies:

```powershell
npm install
```

Start the local dev server:

```powershell
npm run dev
```

Then open:

```text
http://localhost:3000
```

Create a production build:

```powershell
npm run build
```

## Calculator Submission Requirements

The lead form submits contact details and all calculator values in one Formspree request.

Submitted fields:

- `Name`
- `BusinessName`
- `Email`
- `PhoneNumber`
- `CallsPerDay`
- `MissedCallsPerDay`
- `AverageCustomerValue`
- `ConversionPercentage`
- `MonthlyOpportunity`
- `AnnualOpportunity`
- `MissedCallsPerMonth`
- `EstimatedCustomersLost`

Formula:

```text
Estimated Monthly Lost Revenue =
Missed Calls Per Day x 22 Working Days x Average Customer Value x Conversion Percentage
```

Annual opportunity:

```text
Monthly Opportunity x 12
```

## V1 Shortcuts To Improve Later

- Leads are sent to Formspree instead of being stored in a database.
- The personalised report is requested, but automatic PDF generation is not built yet.
- No authentication or customer portal is included yet.
- No admin dashboard exists yet.
- No PostgreSQL/Supabase database is connected yet.
- The video section uses a static thumbnail rather than an embedded production video.
- The current logo is based on the image asset available during build. A transparent SVG/PNG logo should replace it later.

These are intentional V1 decisions so the site can launch quickly without requiring a rebuild later.

## Deployment To GitHub And Vercel

1. Create a new GitHub repository.
2. In this project folder, run:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

3. Sign in to Vercel with GitHub.
4. Click **Add New Project**.
5. Import the GitHub repository.
6. Add environment variables if you want to manage them in Vercel:

```text
NEXT_PUBLIC_FORMSPREE_ENDPOINT
NEXT_PUBLIC_GOOGLE_CALENDAR_URL
```

7. Deploy.
8. Vercel will provide a live URL. A custom domain can be connected later from the Vercel project settings.
