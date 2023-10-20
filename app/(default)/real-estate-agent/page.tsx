"use client"

import Cta from "@/components/cta"
import { Hero1, Hero2 } from "@/components/hero/real-estate-agent"
import Pricing from "@/components/pricing"

export default function Home() {
  return (
    <>
      <Hero1 />
      <Hero2 />
      <Pricing />
      <div className="h-24" />
      <Cta intent="Sell Leads" />
    </>
  )
}
