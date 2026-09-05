# AstraMize

Next.js website for astramize.com.

## Development

Run `npm ci`, then `npm run dev`.
Run `npm run build` to verify the production build.

## Vercel deployment

Connect this repository and deploy the `main` branch. Set the Root Directory
to the repository root (the directory containing `package.json`).
`vercel.json` explicitly selects Next.js, `npm run build`, and `.next` output.

If the domain displays Vercel's `404: NOT_FOUND`:

1. Confirm the latest production deployment is Ready and its generated
   `vercel.app` URL opens the homepage.
2. In the same project's Domains settings, assign `www.astramize.com` to
   Production. The apex domain `astramize.com` currently redirects there.
3. Confirm both domains show valid configuration and use the DNS records
   specified by Vercel for this project.
4. If the generated deployment URL also fails, check the Root Directory,
   build logs, and that the intended deployment is assigned to Production.

A successful local build verifies the app routes but cannot verify Vercel's
domain assignments. Changing application routes cannot repair a domain that
is not connected to the correct deployment.
