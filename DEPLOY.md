# Deployment Guide

## Prerequisites

- **Node.js 20+** or **Bun**
- **Git**

---

## Local Production Build

```bash
# Install dependencies
bun install

# Build for production (default: Cloudflare Workers preset)
bun run build

# Preview the production build locally
bun run preview

# Build for a Node.js server
bun run build:node

# Start the production server (Node.js)
bun run start
```

The default build outputs to `.output/`. The entry point for a Node.js build is `.output/server/index.mjs`.

---

## Deploy to Vercel

### 1. Vercel Dashboard (Recommended)

1. Push your code to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. In the project settings, configure:
   - **Framework Preset**: `Other`
   - **Build Command**: `bun run build:vercel`
   - **Output Directory**: `.vercel/output`
   - **Install Command**: `bun install`
4. Add any required **Environment Variables** (e.g., Supabase keys).
5. Click **Deploy**.

### 2. Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login and deploy (follow the prompts)
vercel

# Deploy to production
vercel --prod
```

> **Note:** The `build:vercel` script uses the `NITRO_PRESET=vercel` environment variable so Nitro generates the correct output structure for Vercel Serverless Functions.

---

## Deploy to Netlify

### 1. Netlify Dashboard

1. Push your code to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [netlify.com](https://netlify.com) and click **Add new site** > **Import an existing project**.
3. Select your repository.
4. Configure build settings:
   - **Build Command**: `bun run build:netlify`
   - **Publish Directory**: `dist`
   - **Node Version**: `20`
5. Click **Deploy**.

> The included `netlify.toml` pre-configures the build command for you, so Netlify may auto-detect these settings.

### 2. Netlify CLI

```bash
# Install Netlify CLI globally
npm i -g netlify-cli

# Link your local project to a Netlify site
netlify link

# Build and deploy to production
netlify deploy --build --prod
```

---

## Deploy to a Node.js Server (VPS / Railway / Render)

```bash
# Build for Node.js
bun run build:node

# Start the server
bun run start
```

Or with **PM2** for process management:

```bash
pm2 start .output/server/index.mjs --name "portfolio"
pm2 save
```

---

## Environment Variables

Create a `.env` file at the project root (do not commit it):

| Variable | Description | Required |
|---|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Optional |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase anon/public key | Optional |
| `NITRO_PRESET` | Nitro deployment preset (`vercel`, `netlify`, `node-server`) | Only for CI |

---

## Platform Build Summary

| Platform | Build Script | Output Directory | Preset |
|---|---|---|---|
| **Default / Lovable** | `bun run build` | `.output/` | `cloudflare-workers` |
| **Vercel** | `bun run build:vercel` | `.vercel/output` | `vercel` |
| **Netlify** | `bun run build:netlify` | `dist/` + `.netlify/functions-internal/` | `netlify` |
| **Node.js Server** | `bun run build:node` | `.output/` | `node-server` |

---

## Troubleshooting

### "Cannot find module" errors during build
Ensure all dependencies are installed: `bun install`

### 404 on refresh or direct URL access
This is usually a routing configuration issue on the hosting platform. With TanStack Start + Nitro, SSR handles routing automatically when the correct preset is used.

### Preview works but deploy fails
Check that your **Build Command** matches the target platform (see table above) and that the **Output Directory** is correct.

---

## Notes

- This project is built with **TanStack Start v1** and uses **Nitro** as the server engine.
- The default Lovable preset targets **Cloudflare Workers**.
- Platform-specific presets (`vercel`, `netlify`, `node-server`) are activated via the `NITRO_PRESET` environment variable in the build scripts.
- Static assets in `public/` (e.g., `resume.pdf`) are served automatically.
