import "./globals.css";
import configure from "../../storyblok.config";
import StoryblokProvider from "../components/StoryblokProvider";
import { ConfiguredTracker } from "./api/tailjs/components";

configure();

export const metadata = {
  title: "Storyblok and Next.js 14",
  description: "A Next.js and Storyblok app using app router ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <ConfiguredTracker>{children}</ConfiguredTracker>
        </body>
      </html>
    </StoryblokProvider>
  );
}
