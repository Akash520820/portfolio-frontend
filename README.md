# Portfolio Frontend (public)

Read-only portfolio site for visitors. Talks to the shared backend API.

## Local dev
    npm install
    cp .env.example .env     # set VITE_API_URL if needed
    npm run dev

## Deploy (GitHub Pages)
1. Rename repo to `mern-portfolio` (or update `VITE_BASE_PATH` in `.github/workflows/deploy.yml` to match).
2. Settings → Pages → Source: **GitHub Actions**.
3. Settings → Secrets and variables → Actions → add `VITE_API_URL` = your Render backend URL ending in `/api`.
4. Push to `main`.
