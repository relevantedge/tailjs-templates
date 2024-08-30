# About

This is a bare minimum example of [tail.js](httsp://www.tailjs.org) configured for [Storyblok](https://www.storyblok.com/) in [Next.js](https://nextjs.org/).

## Running this example

1. Run `pnpm install`
2.  Create the file `.env.local` in the root of your project and configure your Storyblok API by adding `NEXT_PUBLIC_STORYBLOK_API_KEY=(your API key)`.
3. Run `pnpm dev`

## Adding tail.js to your own Storyblok project

1. Add the `@tailjs/next` package (`npm/pnpm/yarn/bun add @tailjs/next`).
2. Run `npx tailjs-init-next`. This will add the required routes, configuration etc. to Next.js
3. Wrap everything in the `<body>` tag in your root `layout.tsx` in a `<ConfiguredTracker>` component.  
This has been created as `src/app/api/tailjs/components/ConfiguredTracker.server.ts` in your project.
3. Edit `tailjs.client.config.ts` now created in the root of your project and add the configuration from the same file in this example.

## Extending the mapping between Storyblok components and views to tail.js

The mappings in `tailjs.client.config.ts` contains a generic mapping of Storyblok properties in a one-size-fits-all manner.
If you have special fields or logic you want to map to components, you can extend this.
