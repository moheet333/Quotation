import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Quotation",
  description: "A Quote Image Generator made with Next.js, AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
