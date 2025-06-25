import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Kayna",
    "VTuber",
    "Live Stream",
    "Virtual YouTuber",
    "ไคนะ",
    "สตรีมสด",
    "YouTube",
  ],
  authors: [{ name: "KaynaVtuberTH", url: siteConfig.links.youtube }],
  creator: "KaynaVtuberTH",
  icons: {
    icon: "/kayna.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://kayna.vercel.app",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png", // สร้างภาพแชร์ไว้ใน public/
        width: 1200,
        height: 630,
        alt: "Kayna Vtuber OG Image",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@kaynavtuber",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="th">
      <head />
      <body
        className={clsx(
          "h-screen text-foreground bg-background font-thai antialiased",
          fontSans.variable,
        )}
      >
      {/* ✅ เพิ่ม Script ของ Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2723011936668756"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div
            className="relative flex flex-col h-full"
            style={{
              backgroundImage: `url("/bg.webp")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* 🔴 สีชมพูโปร่งใส Overlay */}
            <div className="absolute inset-0 bg-[#FF2492]/85 z-0 pointer-events-none" />

            {/* ✅ เนื้อหาเว็บไซต์ */}
            <div className="relative z-10 flex flex-col h-full">
              <Navbar />
              <main className="container mx-auto max-w-7xl  flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
