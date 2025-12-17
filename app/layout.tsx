import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Pikes Peak Line Dancers",
    template: "%s | Pikes Peak Line Dancers",
  },
  description: "Line dancing community — classes, events, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-neutral-900">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
