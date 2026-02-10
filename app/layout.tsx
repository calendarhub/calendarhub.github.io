import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TouchOptimizer } from "@/components/TouchOptimizer";
import ErrorBoundary from "@/components/ErrorBoundary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CalendarHub - Global Holiday Information",
  description:
    "Real-time holiday data with multi-language support and todo features. View holidays from 20+ countries.",
  keywords: [
    "CalendarHub",
    "global holidays",
    "international calendar",
    "public holidays",
    "festivals",
    "worldwide events",
  ],
  twitter: {
    card: "summary_large_image",
    title: "CalendarHub",
    description: "Global holiday information at your fingertips",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
      },
    ],
    apple: "/favicon.png",
  },
  verification: {
    google: "nScZP2sBUKhxwKfvtKwCxQkPMCIOOvYNT35E5W2pDn8",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-F72LVLBFN4"
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F72LVLBFN4');
          `}
          </Script>
        </head>
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <ErrorBoundary>
          <LanguageProvider>
            <TouchOptimizer />
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CookieBanner />
            </div>
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
