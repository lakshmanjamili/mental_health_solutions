import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mental Fitness Solutions LLC - Clarity begins with caring",
  description: "Clarity begins with caring for your Emotional and mental well-being. Take the first step toward a balanced, healthier you. Professional mental health coaching by Dr. Deepti Talluri.",
  keywords: "mental health, coaching, therapy, anxiety, depression, wellness, Dr. Deepti Talluri",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Mental Fitness Solutions LLC",
    description: "Clarity begins with caring for your Emotional and mental well-being",
    url: "https://mentalfitnesssolutions.com",
    siteName: "Mental Fitness Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mental Fitness Solutions - Professional Mental Health Coaching",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Fitness Solutions LLC",
    description: "Clarity begins with caring for your Emotional and mental well-being",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}