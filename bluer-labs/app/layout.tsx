import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bluer Labs",
  description: "You imagine, I build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="Anonymous_Pro">{children}</body>
    </html>
  );
}
