<div align="center">
<img width="1200" height="475" alt="GHBanner" src="picture.png" />
</div>

# Run BD's Portfolio

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
3. Run the app:
   `npm run dev`

## Deploy to Vercel

This project is configured to deploy as a static Vite site.

### Via the Vercel Dashboard

1. Push your repo to GitHub/GitLab/Bitbucket.
2. Go to https://vercel.com/new and import your repo.
3. In project settings, set:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### Via Vercel CLI

```bash
npm install -g vercel
vercel
```

When prompted, choose the existing project (or create one) and confirm:
- Build command: `npm run build`
- Output directory: `dist`
