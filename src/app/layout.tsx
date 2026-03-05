import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Khatu Shyam Engineering - Professional Solar Construction Services",
  description: "Established in 2016, Khatu Shyam Engineering provides specialized solar construction services across India including piling, earthing, MMS installation, AC/DC works, structural installation, and civil works.",
  keywords: "solar construction, piling services, earthing systems, MMS installation, AC/DC works, structural installation, civil works, solar infrastructure, renewable energy construction, Rajasthan, India",
  authors: [{ name: "Khatu Shyam Engineering" }],
  creator: "Khatu Shyam Engineering",
  publisher: "Khatu Shyam Engineering",
  openGraph: {
    title: "Khatu Shyam Engineering - Professional Solar Construction Services",
    description: "Professional engineering firm specializing in solar construction services across India. Quality, safety, and timely project completion since 2016.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Khatu Shyam Engineering",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khatu Shyam Engineering - Professional Solar Construction Services",
    description: "Professional engineering firm specializing in solar construction services across India. Quality, safety, and timely project completion since 2016.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
