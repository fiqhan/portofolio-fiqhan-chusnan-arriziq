import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiqhan Chusnan Arriziq | Flutter & AR Developer",
  description:
    "Fullstack Developer & AR Enthusiast. Lead Developer of DiengVibe - Bridging Heritage and Technology through AR",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Flutter",
    "AR",
    "Augmented Reality",
    "Mobile Development",
    "DiengVibe",
    "React Three Fiber",
  ],
  authors: [{ name: "Fiqhan Chusnan Arriziq" }],
  openGraph: {
    title: "Fiqhan Chusnan Arriziq | Flutter & AR Developer",
    description: "Bridging Heritage and Technology through AR",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-slate-50`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
