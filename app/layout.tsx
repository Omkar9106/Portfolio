import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omkar | AI/ML & Full Stack Developer",
  description:
    "Portfolio of Omkar — AI/ML & Full Stack Developer. Building intelligent, scalable applications with modern tech stack.",
  keywords: ["Full Stack Developer", "AI/ML", "Portfolio", "Next.js", "React"],
  authors: [{ name: "Omkar" }],
  openGraph: {
    title: "Omkar | AI/ML & Full Stack Developer",
    description: "Portfolio of Omkar — Building intelligent, scalable applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-zinc-100 antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
