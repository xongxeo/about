import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seoyoung Song - Portfolio",
  description: "Bouncy & Unique Portfolio of Seoyoung Song",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
