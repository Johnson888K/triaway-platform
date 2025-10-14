# TriaWay Platform

Main platform application for TriaWay (app.triaway.com) with full authentication and features.

## Latest Update
Build fixes applied - ready for deployment.

## Overview

This is the main TriaWay platform where users can sign up, sign in, and access the dashboard and collaborative features.

## Features

- ✅ Supabase Authentication with email confirmation
- ✅ Route protection with middleware
- ✅ Cloudflare Turnstile bot protection
- ✅ Cookie domain: `.triaway.com` (shared with www.triaway.com)
- ✅ Onboarding flow
- ✅ Protected dashboard
- ✅ Email confirmation via Brevo SMTP

## Development

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```env
# Supabase (Required)
NEXT_PUBLIC_SUPABASE_URL=https://assvkdidkiqoyinftuvl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Cloudflare Turnstile (Required)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key

# Optional: Monitoring
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
```

## Deployment

### Vercel

1. Connect your GitHub repo to Vercel
2. Create a new Vercel project: "triaway-platform"
3. Set domain: `app.triaway.com`
4. Add all environment variables
5. Deploy

### Supabase Configuration

Update these settings in your Supabase dashboard:

**Authentication → Settings:**
- Site URL: `https://app.triaway.com`
- Redirect URLs: `https://app.triaway.com/**`
- Cookie domain: `.triaway.com`
- Enable email confirmations: ON

**SMTP Settings (Brevo):**
- Host: `smtp-relay.brevo.com`
- Port: `587`
- Username: Your Brevo email
- Password: Your Brevo SMTP key

## Project Structure

```
src/
├── app/
│   ├── (public)/           # Public routes (no auth required)
│   │   ├── signup/         # Sign up with Turnstile
│   │   └── signin/         # Sign in
│   ├── (protected)/        # Protected routes (auth required)
│   │   ├── dashboard/      # Main dashboard
│   │   └── onboarding/     # User onboarding
│   ├── auth/
│   │   └── callback/       # Auth callback handler
│   └── middleware.ts       # Route protection
├── components/
│   ├── auth/
│   │   └── AuthProvider.tsx # Auth context
│   ├── dashboard/
│   └── ui/
└── lib/
    └── supabase/
        ├── client.ts       # Browser client
        └── server.ts       # Server client
```

## Authentication Flow

1. User visits `/signup`
2. Completes Turnstile verification
3. Submits form → Supabase creates account
4. Receives email confirmation
5. Clicks link → Redirected to `/onboarding`
6. Completes onboarding → Redirected to `/dashboard`

## Security

- Cloudflare Turnstile on signup
- Supabase RLS policies
- Cookie domain restricted to `.triaway.com`
- Protected routes with middleware
- Email confirmation required

## Links

- Platform app: `app.triaway.com`
- Marketing site: `triaway.earth`