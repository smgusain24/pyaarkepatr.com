import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pyaar Ke Patr - Coming Soon",
  description: "Something extraordinary is coming soon.",
  icons: {
    icon: "/icons/pkp_icon.ico",
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
