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
  title: {
    default: "Quimera Tech | Sites, sistemas e soluções digitais",
    template: "%s | Quimera Tech",
  },
  description:
    "Sites profissionais, landing pages, lojas virtuais, sistemas e aplicações web sob medida para levar sua empresa ao próximo nível.",
  keywords: [
    "criação de sites",
    "desenvolvimento de sites",
    "sistemas personalizados",
    "landing pages",
    "loja virtual",
    "desenvolvedor web",
    "Quimera Tech",
  ],
  authors: [{ name: "Quimera Tech" }],
  creator: "Quimera Tech",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Quimera Tech | Soluções digitais sob medida",
    description:
      "Transformamos ideias em sites, sistemas e experiências digitais modernas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Quimera Tech",
    images: [
      {
        url: "./quimera-logo.png",
        width: 640,
        height: 640,
        alt: "Quimera Tech",
      },
    ],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "./quimera-logo.png",
    shortcut: "./quimera-logo.png",
    apple: "./quimera-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
