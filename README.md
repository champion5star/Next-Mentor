# Jason Wang — Software Career Mentoring

React + TypeScript website built with Vite.

## Development

Use Node.js 22.12 or newer (Node.js 22 LTS recommended).

```sh
npm ci
npm run dev
```

## Verification and production

```sh
npm test
npm run build
npm run preview
```

The production build runs strict TypeScript checking before bundling. Vite writes the production website to `dist/`. Source components live in `src/components/`; shared styling is in `src/style.css`; images live in `public/assets/`.

## Deploy to GitHub Pages

The project is configured for https://champion5star.github.io/Next-Mentor/ with the Vite base path `/Next-Mentor/`.

1. Commit and push the project source to `https://github.com/champion5star/Next-Mentor`.
2. Run `npm ci`, then `npm test`.
3. Run `npm run deploy` from an account with permission to push to the repository. This builds the site and publishes `dist/` to the `gh-pages` branch.
4. In the repository's **Settings → Pages**, choose **Deploy from a branch**, then select **gh-pages** and **/ (root)** and save.

Run `npm run deploy` again to publish future changes. The `dist/` folder is generated and stays out of the source branch. If the repository name or hosting location changes, update `base` in `vite.config.ts` before rebuilding.

## Contact form

The contact form prepares an email to `jw2318692@gmail.com`. Visitors review and send it through their own email app. There is no form submission server or database.
