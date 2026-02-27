
# link---ai.com website

This project is configured to deploy automatically to GitHub Pages and use the custom domain `www.link---ai.com`.

## Run locally

Prerequisites: Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Under `Build and deployment`, set Source to `GitHub Actions`.
4. Push to `main` to trigger `.github/workflows/deploy.yml`.

The workflow builds the site, publishes `dist/`, and creates `404.html` from `index.html` so client-side routes work.

## Connect custom domain `www.link---ai.com`

1. In your DNS provider, create:
   - `CNAME` record for host `www` pointing to `<YOUR_GITHUB_USERNAME>.github.io`
2. In GitHub repository `Settings -> Pages -> Custom domain`, set:
   - `www.link---ai.com`
3. Enable `Enforce HTTPS` in Pages settings after DNS finishes propagating.

Notes:
- A `public/CNAME` file is included, so each deploy keeps the custom domain set.
- If you also want the apex domain (`link---ai.com`) to work, add a forwarding/redirect from apex to `www.link---ai.com` at your DNS provider.
