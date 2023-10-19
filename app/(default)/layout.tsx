"use client"

import { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

import GoogleAnalytics from "@/components/google-analytics"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    })
  })

  return (
    <>
      <GoogleAnalytics tagId="G-K3S7YRN738" />
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}
