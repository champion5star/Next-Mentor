# Jason Wang — Software Career Mentoring

React + TypeScript website built with Vite. The existing responsive design, photographs, content, and private Sites deployment are preserved.

## Development

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

The production build runs strict TypeScript checking before bundling.

Vite writes the production website to `dist/`. Source components live in `src/components/`; shared styling is in `src/style.css`; images live in `public/assets/`.

The contact form uses React state and prepares an email to `jw2318692@gmail.com`. Visitors review and send it through their own email app. There is no form submission server or database.

The existing Site identity is stored in `.openai/hosting.json`. Preserve it for subsequent deployments.
