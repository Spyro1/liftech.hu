# Liftech website

React + Vite + Tailwind single-page site, hosted on **Netlify**, with news managed in **Sanity** and the contact form sent by a **Netlify Function** through **Resend**.

| Part | Service | Where |
| --- | --- | --- |
| Website (static build) | Netlify | https://app.netlify.com/projects/liftech/overview |
| News / promotions CMS | Sanity | https://liftech.sanity.studio/ |
| Contact form email | Resend, called from `netlify/functions/contact.mts` | https://resend.com |
| Domain / DNS (currently) | Rackhost | https://www.rackhost.hu |

## Repository layout

```
src/                    React app (pages in src/pages, route table in src/App.tsx)
src/lib/sanity.ts       Fetches news posts from Sanity (public API, no token)
src/components/News     News cards shown on the home page
src/components/Contact  Contact form (posts to /api/contact)
netlify/functions/      contact.mts - validates the form and sends the email via Resend
netlify.toml            Build config, functions folder, SPA fallback redirect
studio-liftech/         Sanity Studio (the editor UI for the marketing team)
```

## Local development

Requirements: Node 20+.

```bash
npm install
cp .env.example .env     # fill in the values, see "Environment variables"
npm start                # http://localhost:5173
npm run build            # type check + production build into dist/
```

The contact form calls `/api/contact`, which only exists on Netlify. Use a Netlify deploy/preview URL, or run `npx netlify dev` locally with the variables below in `.env`.

Sanity Studio:

```bash
cd studio-liftech
npm install
npm run dev              # http://localhost:3333
```

## Continuous integration

`.github/workflows/ci.yml` runs on every push to `main` and on every pull request: `npm ci`, `npm run build` (TypeScript check + Vite build), a compile check of `netlify/functions/contact.mts`, and a TypeScript check of `studio-liftech`. It needs no secrets. It does not deploy; Netlify deploys by itself on pushes to `main`, so a red CI run on a pull request is the signal not to merge. To make that binding, enable branch protection on `main` and require the `site` and `studio` checks (GitHub -> Settings -> Branches).

## Environment variables

Set these in Netlify: **Site configuration -> Environment variables**. Values prefixed with `VITE_` are baked into the public JavaScript at build time, so never put secrets in them. After changing any variable, trigger a new deploy (**Deploys -> Trigger deploy -> Clear cache and deploy site**).

| Variable | Secret? | Used by | Purpose |
| --- | --- | --- | --- |
| `VITE_SANITY_PROJECT_ID` | no | site | Sanity project id (`tvqj8hy2`) |
| `VITE_SANITY_DATASET` | no | site | Sanity dataset, `production` |

The two `VITE_` variables are the only ones the site itself needs. The email function needs these server-side variables (never give a secret a `VITE_` prefix, because that publishes it in the browser JavaScript):

| Variable | Secret? | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | **yes** | Resend API key ("Sending access" is enough) |
| `CONTACT_TO_EMAIL` | no | Recipient inbox; comma-separate several |
| `CONTACT_FROM_EMAIL` | no | Sender, e.g. `Liftech <info@liftech.hu>`; the domain must be verified in Resend |

 Do not add a Sanity API token as a `VITE_` variable: it would be public. The news dataset is public content and is read without a token. Old variables from earlier setups (`VITE_SANITY_API_TOKEN`, `VITE_RECAPTCHA_SITE_KEY`, `RECAPTCHA_*`) are no longer used and can be deleted from Netlify.

The same non-secret values go into a local `.env` for development (see `.env.example`). `.env` is not committed.

## 1. Netlify hosting

1. Netlify -> **Add new project -> Import from Git** and pick this repository.
2. Build settings are read from `netlify.toml`: command `npm run build`, publish directory `dist`. Leave them as they are.
3. **Do not enable the "Next.js" runtime / `@netlify/plugin-nextjs`.** The site used to be Next.js and the plugin fails the build on a Vite project. Check **Site configuration -> Build & deploy -> Plugins** and remove it if present.
4. Add the environment variables above, then deploy.
5. Every push to `main` deploys to production. Other branches and pull requests get preview URLs.

The redirect in `netlify.toml` sends every path to `index.html` so deep links such as `/kapcsolat` work on refresh.

## 2. Sanity CMS for the marketing team

The marketing team edits news in the Studio at https://liftech.sanity.studio/. Posts appear in the "Hírek és akciók" section of the home page. Nothing needs to be redeployed when they publish: the site fetches posts in the browser.

**Dataset must be public.** Sanity -> https://www.sanity.io/manage -> project -> **API -> Datasets** -> `production` -> set visibility to **Public**. If it is private the site gets a 401 and the news section stays empty.

**Adding editors:** manage -> project -> **Members -> Invite**. Give marketing the **Editor** role (can create and publish, cannot change project settings). They log in at the Studio URL with Google, GitHub or email.

**What editors fill in** ("Hír / akció" document): image, title, caption, date, optional link. The site shows the 12 newest by date. Unpublished drafts do not appear; they must press **Publish**.

**Deploying Studio changes** (only needed when the schema in `studio-liftech/schemaTypes/` changes):

```bash
cd studio-liftech
npx sanity login
npx sanity deploy
```

## 3. Contact form (Netlify Function + Resend)

The browser posts the form (`multipart/form-data`) to `/api/contact`. `netlify/functions/contact.mts` validates it and sends one HTML email through the Resend API with every selected photo attached. No form service and no dependencies are involved.

What the function does:
- Requires name, email, subject and message; replies-to the customer's address.
- Accepts any number of photos, images only, **5.5 MB in total** (the browser limits it to 5 MB). The ceiling is Netlify's request size limit for functions (about 6 MB), not Resend (40 MB per email).
- Spam: a hidden honeypot field (`bot-field`); bots that fill it get a fake "ok" and no email. There is no reCAPTCHA and no rate limit. If spam appears, add Cloudflare Turnstile or reCAPTCHA, or rate limiting.
- Escapes all text before putting it in the HTML email.

Setup:
1. Create an account at resend.com and an API key (**API Keys -> Create API Key**, permission **Sending access**). Put it in Netlify as `RESEND_API_KEY`, marked secret. Never give a secret a `VITE_` prefix: that publishes it in the browser JavaScript.
2. Set `CONTACT_TO_EMAIL` to the company inbox (comma-separate several).
3. First test without `CONTACT_FROM_EMAIL`: the function sends from `onboarding@resend.dev`, which Resend delivers only to the email address of the Resend account owner.
4. For real use: Resend -> **Domains -> Add Domain** `liftech.hu`, add the SPF and DKIM DNS records it shows wherever DNS is hosted, wait for "Verified", then set `CONTACT_FROM_EMAIL=Liftech <info@liftech.hu>`.
5. Check delivery in Resend -> **Emails**, and errors in Netlify -> **Logs -> Functions -> contact**.

The browser shows the confirmation page when the function answers 2xx and the error page otherwise. Unlike Netlify Forms, submissions are **not stored** anywhere: if Resend is down or misconfigured, the message is lost (the customer sees the error page). Phone photos over 5 MB in total are rejected; resizing images in the browser would lift that limit if it becomes a problem.

## 5. Moving the domain from Rackhost to Netlify

Domain **registration**, **DNS** and **hosting** are three separate things. You do not have to transfer the registration away from Rackhost. You only need to point DNS at Netlify. Choose one of the two options.

### Before you start (do not skip)

- **Email.** If `info@liftech.hu` or other mailboxes live at Rackhost, the `MX` records (and SPF/DKIM `TXT` records) must survive the move, or mail stops arriving. Do not cancel Rackhost hosting until you know where mail is hosted.
- Export or screenshot the entire current DNS zone in the Rackhost control panel.
- A day or two earlier, lower the TTL of the `A`/`CNAME` records to 300 seconds so the switch is fast and reversible.
- Confirm the site works at `https://liftech.netlify.app` first.

### Option A (simplest, lowest risk): keep DNS at Rackhost

1. Netlify -> **Domain management -> Add a domain** -> `liftech.hu`. Make `liftech.hu` the primary domain; Netlify redirects `www` to it (or the reverse; pick one and stay consistent).
2. In the Rackhost DNS editor change only the web records:
   - apex `liftech.hu`: `A` record to the load balancer IP that Netlify shows on the domain page (documented as `75.2.60.5`; trust the dashboard if it differs)
   - `www`: `CNAME` to `liftech.netlify.app`
   - Remove old `A`/`AAAA` records pointing at the Rackhost web server.
3. Leave `MX`, `TXT` (SPF, DKIM, verification) and any other records alone.

### Option B: move DNS to Netlify DNS

1. Netlify -> Domain management -> add the domain -> **Set up Netlify DNS**.
2. Recreate **every** record from the exported Rackhost zone in Netlify, especially `MX`, SPF/DKIM `TXT`, and any other records you use. Missing records here break email.
3. At Rackhost change the domain's **nameservers** to the four values Netlify shows.
4. Netlify then manages the web records automatically. Any later DNS change is done in Netlify, not Rackhost.

### Verify and finish

1. Netlify -> **Domain management -> HTTPS -> Verify DNS configuration**, then **Provision certificate** (free Let's Encrypt, renews automatically). It can take from a few minutes to a few hours after DNS propagates.
2. Check propagation: `nslookup liftech.hu` and https://dnschecker.org.
3. Test `https://liftech.hu` and `https://www.liftech.hu` (one should redirect to the other), a deep link plus refresh (e.g. `/kapcsolat`), the news section, and submit the contact form end to end.
4. Submit the contact form once on the final domain, and add the Resend DNS records for `liftech.hu` (section 3).
5. Send a test email to and from `info@liftech.hu` to confirm mail still works.
6. Keep the Rackhost hosting package for a week or two as a rollback (switching the DNS back restores the old site), then cancel hosting. Cancel the domain registration only if you intend to transfer it elsewhere.

### Optional: transfer the registration to another registrar

Not required. If you want it later: unlock the domain at Rackhost, get the EPP/auth code, and start the transfer at the new registrar. For `.hu` domains the procedure and fees are set by the registry, so check the registrar's `.hu` instructions first. Do the transfer well away from the website cutover.

## Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| Netlify build fails with "publish directory does not contain expected Next.js build output" | Next.js plugin still enabled, remove it (section 1) |
| Whole site shows a 401 or "Error - Request ID" page | Netlify site protection / password enabled, or a bad deploy. Check **Site configuration -> Access & security** and the deploy log |
| News section is missing | Dataset is private, or `VITE_SANITY_PROJECT_ID` / `VITE_SANITY_DATASET` missing (redeploy after adding) |
| Contact form goes to the error page | The function returned non-2xx: check **Logs -> Functions -> contact** (missing `RESEND_API_KEY`/`CONTACT_TO_EMAIL`, unverified sender domain, photos over 5 MB) |
| Form sends but no email | Check Resend -> Emails and the spam folder; with `onboarding@resend.dev` only the Resend account owner's address receives mail |
| HTTPS warning after the domain move | Certificate not provisioned yet, rerun **Verify DNS configuration** |

## Known state / to do

- The Resend flow is untested until `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and (for production) the verified domain are set. Send one submission with several photos and check that all attachments arrive.
- Submissions are not stored. If you want a backup, add a copy to a spreadsheet/Sanity or switch back to Netlify Forms.
