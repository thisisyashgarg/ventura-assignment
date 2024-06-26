import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.css"
import ErrorBoundary from "next/dist/client/components/error-boundary"
import Error from "./error"

const inter = Sora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IPO Listings",
  description: "IPO Listings",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
