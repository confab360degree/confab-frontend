
import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";


import { Header } from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import FloatingButtonComp from "@/components/Shared/FloatingButtonComp";
import { Toaster } from "react-hot-toast";
import DisclaimerPopup from "@/components/DisclaimerPopup/DisclaimerPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Confab 360 Degree – Meaningful Research & Impactful Training – Conferences",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${outfit.variable} antialiased`}
      >
        <Header />

        <DisclaimerPopup />

        {children}

        <FloatingButtonComp />
        <Footer />

        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
