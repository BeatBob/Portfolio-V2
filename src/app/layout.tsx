import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "../utils/utils";
import { ThemeProvider } from "../components/theme-provider";
import StartProvider from "@/context/Start";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "M.Robi Portofolio",
  description: "M. Robi's Portofolio Website by Himself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <StartProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </StartProvider>
      </body>
    </html>
  );
}
