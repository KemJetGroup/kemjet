import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Kemjet",
  description:
    "Building AI-powered therapeutics that redefine molecular design. Join the future of drug discovery with Kemjet's innovative platform.",
  keywords: [
    "molecular design",
    "AI therapeutics",
    "drug discovery",
    "biotechnology",
    "pharmaceuticals",
    "machine learning",
  ],
  authors: [{ name: "Kemjet Team" }],
  creator: "Kemjet",
  publisher: "Kemjet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kemjet.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kemjet",
    description:
      "Building AI-powered therapeutics that redefine molecular design. Join the future of drug discovery with Kemjet's innovative platform.",
    url: "https://kemjet.org",
    siteName: "Kemjet",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kemjet - AI-Powered Molecular Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemjet",
    description:
      "Building AI-powered therapeutics that redefine molecular design. Join the future of drug discovery.",
    images: ["/images/og-image.png"],
    creator: "@kemjet",
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
  // verification: {
  //   google: "your-google-site-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
