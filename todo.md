**What changed**
- **Pages and components:** the 28 pages moved to `src/pages`, with a route table in `src/App.tsx`. `next/link`, `next/image`, `next/navigation`, `metadata` and `"use client"` were all replaced. Image and link edits were applied by a codemod, so check the `<img>` conversions and link targets while reviewing. The product pages are otherwise untouched.
- **Dead code removed:** the unused template components (Auth, Docs, Pricing, Integration, CTA, FunFact, FeaturesTab, Testimonial), `route.bak`, the old `formidable` helper, `markdown/`, `next.config.js`, `yarn.lock` and about a dozen unused dependencies.
- **Netlify:** `netlify.toml` configures the build and the SPA redirect. The contact form posts to `netlify/functions/contact.mts`, which sends the email via Resend (see README).
- **News:** `src/components/News` shows the latest 12 posts on the home page and renders nothing if there are none. `studio/schemas/news.ts` defines the Sanity post as a title, an image, some text, a date and an optional link. This is not wired up or tested yet.
- **Also added:** `robots.txt` and `sitemap.xml` (I assumed the domain `https://liftech.hu`), and `.env.example`.

**What you need to do**
1. **Sanity:** create a Sanity project, then run `npm create sanity@latest` in `studio/` (the folder holds only the schema so far) and put `news.ts` into its schema list. Deploy the studio, invite the marketing team and add your Netlify domain to the CORS origins.
2. **Netlify environment variables:** set these in the Netlify dashboard:
   - `VITE_SANITY_PROJECT_ID`
   - `VITE_SANITY_DATASET`
3. **Smoke test:** on a Netlify deploy, send the form with two small photos, and click through the pages.

**Behaviour changes and risks**
- **Attachment limit:** the form rejects photos over 5 MB in total (Netlify Functions cap requests at about 6 MB).
- **Form errors:** a failed submit now goes to `/error` and the error page's English text is unchanged. Before, nothing happened on failure.
- **Not carried over:** `next-themes` and the Next image optimizer. The 60 MB of product images are served as-is, so resize them to WebP as a follow-up.
- **Search visibility:** the site is now client-rendered. Google handles that, but prerendering is an option later.