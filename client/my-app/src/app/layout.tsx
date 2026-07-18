import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import QueryProvider from "@/providers/query-provider";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/providers/them-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer"
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

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
    default: "RealNest | Find Your Dream Home",
    template: "%s | RealNest",
  },

  description:
    "RealNest is a modern real estate platform where you can discover, manage, and explore properties.",

  icons: {
    icon: "/home.svg",
    shortcut: "/home.svg",
  },

  openGraph: {
    title: "RealNest | Find Your Dream Home",
    description:
      "Discover and manage properties easily with RealNest real estate platform.",
    url: "https://real-estate-platforms.vercel.app",
    siteName: "RealNest",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RealNest real estate platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <QueryProvider>
            <AuthProvider>
              <Toaster />
              <Header />
              <main className="min-h-screen min-w-[90%] mx-auto px-10 py-6">
                {children}
              </main>
              <Footer />
            </AuthProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
