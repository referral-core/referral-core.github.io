"use client"

import Cta from "@/components/cta"
import Hero from "@/components/hero/coach"
import Pricing from "@/components/pricing"

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <div className="h-24" />
      <Cta />
    </>
  )
}
