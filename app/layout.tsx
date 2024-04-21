import type { Metadata } from "next";
import "./globals.css";
import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure({ ...awsExports, ssr: true});

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
