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
  title: "Fiqhan Chusnan Arriziq | Pengembang Web dan Aplikasi",
  description:
    "Pengembang Utama DiengVibe - Menjembatani Warisan Budaya dan Teknologi melalui AR",
  icons: {
    icon: [
      {
        url: "/logo.webp",
        sizes: "any",
      },
    ],
    apple: {
      url: "/logo.webp",
      sizes: "180x180",
      type: "image/webp",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-[#eef2f7] dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 selection:bg-slate-300 dark:selection:bg-slate-700 transition-colors duration-300`}
      >
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#eef2f7] dark:bg-[#0b0f19] transition-colors duration-300">
          <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-white dark:bg-slate-800/20 rounded-full blur-[120px] transition-colors duration-300" />
          <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-slate-200/60 dark:bg-slate-900/40 rounded-full blur-[140px] transition-colors duration-300" />
          <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-slate-100/80 dark:bg-slate-900/20 rounded-full blur-[150px] transition-colors duration-300" />
        </div>

        {children}
      </body>
    </html>
  );
}
