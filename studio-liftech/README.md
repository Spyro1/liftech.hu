# Liftech Sanity Studio

Editor UI for the Liftech news and promotions ("Hír / akció"), project `tvqj8hy2`. Studio URL: https://liftech.sanity.studio/

## Workspaces

`sanity.config.ts` defines two workspaces on the same project and schema:

| Workspace | Dataset | Path | Used for |
| --- | --- | --- | --- |
| Liftech (production) | `production` | `/production` | Live site content |
| Liftech (development) | `development` | `/development` | Testing |

Use the switcher at the top left to move between them. Content is not shared between datasets. The website picks one with `VITE_SANITY_DATASET` (see the root README).

## Commands

```bash
npm install
npm run dev       # http://localhost:3333
npm run deploy    # deploys the Studio to liftech.sanity.studio (needs `npx sanity login`)
```

`sanity.cli.ts` also sets a dataset (`production`); it is only the default for CLI commands such as dataset exports/imports. Pass `--dataset development` to target the other one.

The schema lives in `schemaTypes/` (`news.ts`). See the root `README.md` for hosting, editors and the contact form.
