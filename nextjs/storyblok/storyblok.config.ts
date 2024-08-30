import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export default (components?: any) =>
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_KEY,
    use: [apiPlugin],
    apiOptions: {
      region: "eu",
    },
    components,
  });
