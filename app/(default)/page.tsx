"use client"

import Cta from "@/components/cta"
import Hero from "@/components/hero"
import Hosts from "@/components/hosts"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <div className="h-24" />
      {/*<Hosts />*/}
      {/*<Testimonials />*/}
      <Cta />
      <div className="h-16" />
    </>
  )
}
