import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ProgressBar from "./ProgressBar"; // Client NProgress

export const metadata: Metadata = {
  title: "Bright Future Services",
  description:
    "Bright Future Services is dedicated to delivering reliable and innovative solutions that empower individuals and businesses. We specialize in providing professional services tailored to meet modern needs with excellence and trust.",
  generator: "Next.js, TypeScript, Tailwind CSS",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
                <link rel="icon" href="/favicon.ico" />

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
