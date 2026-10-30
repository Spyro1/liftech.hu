# Liftech website

React + Vite + Tailwind single-page site, hosted on **Netlify**, with news managed in **Sanity** and the contact form sent through a **Netlify Function** using **SendGrid** and **Google reCAPTCHA Enterprise**.

| Part | Service | Where |
| --- | --- | --- |
| Website (static build) | Netlify | https://app.netlify.com/projects/liftech/overview |
| News / promotions CMS | Sanity | https://liftech.sanity.studio/ |
| Contact form email | SendGrid, called from `netlify/functions/contact.mts` | https://app.sendgrid.com |
| Spam protection | Google reCAPTCHA Enterprise | https://console.cloud.google.com |
| Domain / DNS (currently) | Rackhost | https://www.rackhost.hu |

## Repository layout

```
src/                    React app (pages in src/pages, route table in src/App.tsx)
src/lib/sanity.ts       Fetches news posts from Sanity (public API, no token)
src/components/News     News cards shown on the home page
src/components/Contact  Contact form
netlify/functions/      contact.mts - verifies reCAPTCHA, sends the email via SendGrid
netlify.toml            Build config + redirects (/api/sendgrid -> function, SPA fallback)
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

The contact form calls `/api/sendgrid`, which only exists on Netlify. To test it locally use `npx netlify dev` (Netlify CLI) instead of `npm start`.

Sanity Studio:

```bash
cd studio-liftech
npm install
npm run dev              # http://localhost:3333
```

## Environment variables

Set these in Netlify: **Site configuration -> Environment variables**. Values prefixed with `VITE_` are baked into the public JavaScript at build time, so never put secrets in them. After changing any variable, trigger a new deploy (**Deploys -> Trigger deploy -> Clear cache and deploy site**).

| Variable | Secret? | Used by | Purpose |
| --- | --- | --- | --- |
| `VITE_SANITY_PROJECT_ID` | no | site | Sanity project id (`tvqj8hy2`) |
| `VITE_SANITY_DATASET` | no | site | Sanity dataset, `production` |
| `VITE_RECAPTCHA_SITE_KEY` | no | site + function | reCAPTCHA Enterprise site key |
| `SENDGRID_API_KEY` | **yes** | function | SendGrid key with "Mail Send" permission |
| `RECAPTCHA_PROJECT_ID` | no | function | Google Cloud project id |
| `RECAPTCHA_API_KEY` | **yes** | function | Google Cloud API key allowed to call reCAPTCHA Enterprise |

Do not add a Sanity API token as a `VITE_` variable: it would be public. The news dataset is public content and is read without a token.

The same non-secret values go into a local `.env` for development (see `.env.example`). `.env` is not committed.

## 1. Netlify hosting

1. Netlify -> **Add new project -> Import from Git** and pick this repository.
2. Build settings are read from `netlify.toml`: command `npm run build`, publish directory `dist`, functions in `netlify/functions`. Leave them as they are.
3. **Do not enable the "Next.js" runtime / `@netlify/plugin-nextjs`.** The site used to be Next.js and the plugin fails the build on a Vite project. Check **Site configuration -> Build & deploy -> Plugins** and remove it if present.
4. Add the environment variables above, then deploy.
5. Every push to `main` deploys to production. Other branches and pull requests get preview URLs.

The two redirects in `netlify.toml` matter: `/api/sendgrid` goes to the function, and everything else falls back to `index.html` so deep links such as `/kapcsolat` work on refresh.

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

## 3. SendGrid (contact form email)

The function sends one email per submission to the company inbox, with the customer's photos attached. SendGrid is only the delivery service; no mail server is needed.

1. Create an account at sendgrid.com (free tier: about 100 emails/day). New accounts can be held for review for a day or so.
2. **Settings -> API Keys -> Create API Key** with **Restricted access -> Mail Send (Full)**. Copy it once and store it in Netlify as `SENDGRID_API_KEY`.
3. **Verify the sender.** SendGrid rejects mail from addresses it does not know, and the function then returns HTTP 500. Pick one:
   - **Single Sender Verification** (quick): **Settings -> Sender Authentication -> Verify a Single Sender** for `info@liftech.hu`. SendGrid mails a confirmation link to that address, so the inbox must already work.
   - **Domain Authentication** (recommended): **Authenticate Your Domain**, enter `liftech.hu`, and add the 3 CNAME records SendGrid shows to the DNS zone. This improves delivery and avoids spam folders. Add the records wherever the DNS is hosted at that time (see section 5).
4. The sender and recipient addresses are currently hardcoded in `netlify/functions/contact.mts` (`from: info@liftech.hu`, `to: labasattila@gmail.com`). Change them there, or move them to environment variables.
5. Check delivery in SendGrid -> **Activity**. The function reports success as soon as SendGrid accepts the message; bounces and blocks only show up there.

Limits: attachments are base64-encoded into the request (SendGrid max about 30 MB total); the form itself limits uploads to 5 MB.

## 4. Google reCAPTCHA Enterprise (spam protection)

The browser gets a token from reCAPTCHA when the form is submitted, and the function verifies it with Google before sending any email (score must be >= 0.5).

1. Google Cloud Console -> create or pick a project -> enable **reCAPTCHA Enterprise API**. Billing must be enabled on the project; the first 10,000 assessments per month are free.
2. **reCAPTCHA Enterprise -> Create key** -> type **Website**, add domains `liftech.hu`, `www.liftech.hu`, `liftech.netlify.app` (and `localhost` for development), score-based. The key id is `VITE_RECAPTCHA_SITE_KEY`.
3. **APIs & Services -> Credentials -> Create API key**, restrict it to the reCAPTCHA Enterprise API. This is `RECAPTCHA_API_KEY`. The project id is `RECAPTCHA_PROJECT_ID`.
4. The `index.html` script tag loads `enterprise.js?render=<site key>`, so the site key must be set at build time.

Remember to add the final domain to the reCAPTCHA key's allowed domains when you move the domain; a token minted on an unlisted domain is rejected and the form fails.

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
4. Add SendGrid's CNAME records here if you chose Domain Authentication.

### Option B: move DNS to Netlify DNS

1. Netlify -> Domain management -> add the domain -> **Set up Netlify DNS**.
2. Recreate **every** record from the exported Rackhost zone in Netlify, especially `MX`, SPF/DKIM `TXT`, and the SendGrid CNAMEs. Missing records here break email.
3. At Rackhost change the domain's **nameservers** to the four values Netlify shows.
4. Netlify then manages the web records automatically. Any later DNS change is done in Netlify, not Rackhost.

### Verify and finish

1. Netlify -> **Domain management -> HTTPS -> Verify DNS configuration**, then **Provision certificate** (free Let's Encrypt, renews automatically). It can take from a few minutes to a few hours after DNS propagates.
2. Check propagation: `nslookup liftech.hu` and https://dnschecker.org.
3. Test `https://liftech.hu` and `https://www.liftech.hu` (one should redirect to the other), a deep link plus refresh (e.g. `/kapcsolat`), the news section, and submit the contact form end to end.
4. Add the final domain to the reCAPTCHA key (section 4) and finish SendGrid domain authentication (section 3).
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
| Contact form goes to the error page | Function returned non-2xx: check **Logs -> Functions -> contact**. Usually reCAPTCHA variables or an unverified SendGrid sender |
| Form works but no email | Check SendGrid Activity and the spam folder; finish domain authentication |
| HTTPS warning after the domain move | Certificate not provisioned yet, rerun **Verify DNS configuration** |

## Known state / to do

- The contact form and the function must agree on reCAPTCHA. The function requires a `token` field, so the form must send it (`grecaptcha.enterprise.execute(...)`, then `formData.append("token", token)`). Check `src/components/Contact/index.tsx` before going live; the latest commit there is mid-change and does not build.
- Recipient and sender addresses are hardcoded in `contact.mts`; consider moving them to environment variables.
