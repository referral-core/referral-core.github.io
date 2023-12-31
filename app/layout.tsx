import "./css/style.css"

import { Inter, Permanent_Marker } from "next/font/google"
import localFont from "next/font/local"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const permanent_marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
})

const hkgrotesk = localFont({
  src: [
    {
      path: "../public/fonts/HKGrotesk-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/HKGrotesk-ExtraBold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-hkgrotesk",
  display: "swap",
})

export const metadata = {
  title: "Referral Lion",
  description: "Referral marketplace for professional services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body
        className={`${inter.variable} ${permanent_marker.variable} ${hkgrotesk.variable} font-inter bg-white tracking-tight text-slate-800 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
