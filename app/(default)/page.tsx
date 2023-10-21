"use client"

import Hero from "@/components/hero"
import Cta from "@/components/cta"
import Seller from "@/components/seller"
import Buyer from "@/components/buyer"

export default function Home() {
  return (
    <>
      <Hero />
      <Buyer />
      <Cta
        intent="Buy Leads"
        headline="Ready to stop chasing low quality leads?"
      >
        Source high-quality leads that are pre-qualified on budget and intent,
        and only pay for leads that convert.
      </Cta>
      <div className="h-16" />
      <Seller />
      <Cta
        intent="Sell Leads"
        headline="Ready to start earning on your business referrals?"
      >
        Get paid for passing along business to professionals in your network.
      </Cta>
    </>
  )
}
