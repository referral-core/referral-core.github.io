"use client"

import Cta from "@/components/cta"
import Hero from "@/components/hero/home-contractor"
import Pricing from "@/components/pricing"

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <div className="h-24" />
      <Cta intent="Sell Leads" />
    </>
  )
}
