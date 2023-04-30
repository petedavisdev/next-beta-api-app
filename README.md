# Next beta API app

This is an experiment in using Next.js 13 beta with the app directory and React server components and api routes.

## The plan...

1. Create a new repo from my starter [petedavisdev/next-ts-starter](https://github.com/petedavisdev/next-ts-starter) ✓
2. Use Thunder Client to test calling an external api
3. Create an api route to provide paginated data passed on a param and totalPages number
4. Add character images to api results
5. Create a page and display the data for page 1
6. Add a next/previous links and dynamic routes to display data for other pages
7. Create components to show item data
8. Style the components
9. Add error handling to api route
10. Deploy to Vercel
11. Any optimisations and enhancements if time allows

## Built with my Next TS starter

[petedavisdev/next-ts-starter](https://github.com/petedavisdev/next-ts-starter)

In the box:

- Next.js 13 beta with the app directory and React server components.
- TypeScript
- Hygen templates
- Thunder Client api tests

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Generate Pages and Components with Hygen

The `_templates` folder contains code used to generate new pages and components. This improves consistency and saves some typing.

### New component

```bash
npm run new
```

### New api route

```bash
npm run new:api
```

### New page

```bash
npm run new:page
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

