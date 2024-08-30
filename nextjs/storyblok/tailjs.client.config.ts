import { createClientConfiguration } from "@tailjs/next";

// This file configures the context for tracking.
//
// Wrap the content you want to track with the ConfiguredTracker component.
// Preferably, this should be in one of your high-level 'layout.tsx' or 'page.tsx' files.

export default createClientConfiguration({
  tracker: {
    map: [
      (el) => {
        // console.log(el, typeof el);
      },
      ({ props: { story, blok } }) => {
        if (story) {
          return {
            view: {
              id: "" + story.id,
              name: story.name,
              tags: story.tag_list?.map((tag: string) => ({ tag })),
              path: story.full_slug,
              language: story.lang,
            },
          };
        }
        if (blok) {
          return {
            component: {
              id: blok.component,
              instanceId: blok._uid,
            },
          };
        }
      },
    ],
  },
});
