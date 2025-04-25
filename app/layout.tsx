import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { sfont } from "@/components/fonts";
import { GoogleTagManager } from "@next/third-parties/google"


export const metadata: Metadata = {
  title: "The Ugly Duckling",
  description: "Ugly is a POV! So...Ugly that you stand out! Be the Ugly Duckling to your market with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WGVM2NMN" />
      <body className={`${sfont.className}`}>

        {children}
      </body>

    </html>
  );
}
