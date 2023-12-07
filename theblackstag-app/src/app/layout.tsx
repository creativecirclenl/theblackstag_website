import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Van ontwerp tot drukwerk - The Black Stag vormgeving & meer",
  description:
    "Ben je opzoek naar een opvallend concept en een spetterend ontwerp? Dan ben je bij The Black stag vormgeving & meer op het juiste adres!",
  openGraph: {
    locale: "nl_NL",
    type: "website",
    title: "Van ontwerp tot drukwerk - The Black Stag vormgeving & meer",
    description:
      "Ben je opzoek naar een opvallend concept en een spetterend ontwerp? Dan ben je bij The Black stag vormgeving & meer op het juiste adres!",
    url: "https://www.theblackstag.nl/",
    siteName: "The Black Stag",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
