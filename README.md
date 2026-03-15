<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/6c0ba6a1-fa0d-4cae-ab35-35dad715e2db

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
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
4. Add `GEMINI_API_KEY` as an Environment Variable (if your app uses it).

### Via Vercel CLI

```bash
npm install -g vercel
vercel
```

When prompted, choose the existing project (or create one) and confirm:
- Build command: `npm run build`
- Output directory: `dist`
