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
      <body className="Anonymous_Pro relative overflow-hidden">
       
        {/* Wrap children in a div with class content */}
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}
