import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pyaar Ke Patr - Bespoke Card & Invitation Designs",
  description: "Crafting moments into memories through bespoke card and invitation designs. Wedding, corporate, and special event invitations tailored to your story.",
  metadataBase: new URL('https://pyaarkepatr.com'),
  authors: [{ name: "Pyaar Ke Patr" }],
  creator: "Pyaar Ke Patr",
  publisher: "Pyaar Ke Patr",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pyaarkepatr.com",
    title: "Pyaar Ke Patr - Bespoke Card & Invitation Designs",
    description: "Crafting moments into memories through bespoke card and invitation designs. Wedding, corporate, and special event invitations tailored to your story.",
    siteName: "Pyaar Ke Patr",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pyaar Ke Patr Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyaar Ke Patr - Bespoke Card & Invitation Designs",
    description: "Crafting moments into memories through bespoke card and invitation designs.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
