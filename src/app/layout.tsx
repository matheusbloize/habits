import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const excon = localFont({ src: "../assets/fonts/Excon-Variable.ttf" });

export const metadata: Metadata = {
  title: "Habits",
  description: "A simple heatmap created to get an overview of your habits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${excon.className} flex flex-col`}>{children}</body>
    </html>
  );
}
