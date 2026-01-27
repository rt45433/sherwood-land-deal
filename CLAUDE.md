# CLAUDE.md - Sherwood Land Deal

## Project Overview

Land acquisition marketing website for Sherwood Property. A lead generation landing page targeting landowners in the East Midlands who want to sell land for residential development.

**Live URL**: Hosted via Lovable
**Lovable Project**: https://lovable.dev/projects/9401da6f-0a5a-4ac0-a91a-277c68adacd1

## Tech Stack

- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (contact form submissions, email via Resend)
- **Automation**: n8n webhook for lead notifications
- **Analytics**: Google Ads conversion tracking

## Development

```bash
npm install
npm run dev
```

## Deployment

Changes pushed to `main` are automatically deployed by Lovable.

## Key Components

| Component | Purpose |
|-----------|---------|
| `Hero` | Main landing section with value props |
| `ResidualValueBreakdown` | Explains land valuation methodology |
| `ContactForm` | Lead capture form (sends to Supabase + n8n) |
| `WhyUs` / `FAQ` / `Testimonials` | Trust-building sections |
| `Header` / `Footer` | Navigation and contact info |

## Contact Details

- **Phone**: 01158 716 385
- **Email**: info@sherwoodproperty.co.uk
- **Service Area**: East Midlands (Nottingham area)
