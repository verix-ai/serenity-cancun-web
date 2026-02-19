import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serenity | Luxury Condos Mayan Riviera",
  description: "Live in tranquility with luxury within the Mayan Jungle. Experience a new standard of living in the heart of the Riviera Maya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Khand:wght@400;700&family=Prompt:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
