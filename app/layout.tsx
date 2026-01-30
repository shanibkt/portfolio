import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Shanib K T | Full-Stack Developer",
  description: "Portfolio of Mohammed Shanib K T, an aspiring software engineer specializing in Flutter and ASP.NET development.",
  keywords: "Flutter, ASP.NET, Full-Stack Developer, Mobile Development, Web API",
  openGraph: {
    title: "Mohammed Shanib K T | Full-Stack Developer",
    description: "Portfolio of Mohammed Shanib K T specializing in Flutter and ASP.NET",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#050510" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
