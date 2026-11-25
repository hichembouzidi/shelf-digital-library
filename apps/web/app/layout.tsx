import type { Metadata } from "next";
import "./globals.css";
import { LibraryProvider } from "../components/library-provider";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Shelf — Your Digital Library",
  description: "Discover books, stories, manga, and comics in one calm reading space."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><LibraryProvider><SiteHeader />{children}</LibraryProvider></body></html>;
}
