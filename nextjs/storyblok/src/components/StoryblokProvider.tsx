"use client";
import { PropsWithChildren } from "react";
import configure from "../../storyblok.config";

/** Import your components */
import Feature from "./Feature";
import Grid from "./Grid";
import Page from "./Page";
import Teaser from "./Teaser";

configure({
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
  return children;
}
