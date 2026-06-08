# Cobble Asia — Website

Static marketing/info site for the Cobble Asia (ASC Revival) Cobblemon server.
Plain HTML/CSS/JS — **no build step**, deploys to GitHub Pages on every push to `main`.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Landing page (hero, SolForge banner, feature grid, mod list, join). |
| `feature.html` | Detail-page template — renders `?f=<id>` into a full "how it works" page. |
| `data.js` | **All content lives here** — `FEATURES` (per-feature pages), `MODS`, `SERVER` (ip/discord). |
| `app.js` | Shared behaviour: Discord links, copy buttons, scroll reveal, landing render. |
| `feature.js` | Renders the feature detail page from `data.js`. |
| `styles.css` | SolForge "Season of the First Sun" theme. |
| `.nojekyll` | Tells Pages to serve files as-is (skip Jekyll). |
| `.github/workflows/deploy.yml` | Auto-deploy to Pages. |
| `CNAME.example` | Rename to `CNAME` to use a custom domain. |

## How the pages work
The landing page reads the `FEATURES` object in `data.js` and renders a card per feature.
Each card links to `feature.html?f=<id>` (e.g. `feature.html?f=safari`), which builds a
full step-by-step "how it works" page from that same data — no separate HTML per feature.

## One-time setup (deploy it)
1. **Create the repo** under the org and push this folder:
   ```sh
   gh auth switch -u jme09
   cd asc-website
   git init && git add -A && git commit -m "Initial website"
   gh repo create ASIACRAFT-DEV/asc-website --public --source=. --remote=origin --push
   ```
2. **Turn on Pages:** GitHub → repo **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.
3. Push to `main` → the workflow builds & publishes. Site goes live at
   `https://asiacraft-dev.github.io/asc-website/`.

## Custom domain (optional)
To serve it at e.g. `www.cobble-asia.net` instead of the github.io URL:
1. `mv CNAME.example CNAME` and set the domain inside it.
2. In your DNS (Cloudflare), add a `CNAME` record:
   `www` → `asiacraft-dev.github.io`.
3. GitHub → Settings → Pages → set the custom domain + enable "Enforce HTTPS".

> Note: the Minecraft server IP (`play.cobble-asia.net`) and the website domain are
> separate records — don't point the web `CNAME` at the game server.

## Editing content
Everything is in **`data.js`** — no HTML editing needed:
- **Add/change a feature page:** edit the `FEATURES` object. Each entry has `name`, `emoji`,
  `accent` (solar/ember/amber/violet/azure/emerald/crimson), `blurb`, `intro`, a `how` array
  of `{title, body}` steps, a `commands` array, and `notes`.
- **Show a feature on the landing page:** add its id to `FEATURE_ORDER`.
- **Mod list:** edit the `MODS` array.
- **Server IP / Discord:** edit the `SERVER` object (`ip`, `discord`).
