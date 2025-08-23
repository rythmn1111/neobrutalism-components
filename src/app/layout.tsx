import "@/styling/globals.css"

import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

import Navbar from "@/components/app/navbar"
import ScrollToTop from "@/components/app/scroll-to-top"
import SetStylingPref from "@/components/app/set-styling-pref"
import { ThemeProvider } from "@/components/app/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default:
      "BlueBuild Digital - Your next Content Platform click made by Us",
    template: `%s - BlueBuild Digital`,
  },
  description:
    "BlueBuild Digital provides innovative content platforms and direct carrier billing solutions to major carriers worldwide.",
  keywords: [
    "direct carrier billing",
    "content platforms",
    "mobile payments",
    "carrier solutions",
    "telecommunications",
    "mobile content",
    "revenue optimization",
    "global carriers",
  ],
  authors: [{ name: "BlueBuild Digital", url: "https://bluebuilddigital.com" }],
  openGraph: {
    type: "website",
    description:
      "BlueBuild Digital provides innovative content platforms and direct carrier billing solutions to major carriers worldwide.",
    images: ["/logo.png"],
    url: "https://bluebuilddigital.com/",
    title: "BlueBuild Digital",
  },
  metadataBase: new URL("https://bluebuilddigital.com/"),
  twitter: {
    card: "summary_large_image",
    title: "BlueBuild Digital - Your next Content Platform click made by Us",
    description:
      "BlueBuild Digital provides innovative content platforms and direct carrier billing solutions to major carriers worldwide.",
    images: ["/logo.png"],
    creator: "@bluebuilddigital",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning lang="en">
      <body className={dmSans.className} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <SetStylingPref />
            <ScrollToTop />
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  )
}