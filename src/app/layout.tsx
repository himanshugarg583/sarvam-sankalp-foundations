import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Education • Empowerment • Health`,
  description: siteConfig.description,
  keywords: [siteConfig.name, "SSF", "NGO India", "education NGO", "women empowerment", "healthcare", "CSR partnership India", "volunteer India"],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.tagline },
};

export const viewport: Viewport = {
  themeColor: "#4a0414",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased`}>
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
