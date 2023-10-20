"use client"

import Hero from "@/components/hero"
import Cta from "@/components/cta";
import Seller from "@/components/seller";
import Buyer from "@/components/buyer";

export default function Home() {
  return (
    <>
      <Hero />
      <Buyer />
      <Cta>
        Source high-quality leads that are pre-qualified on budget and intent, and only pay for leads that convert.
      </Cta>
      <div className="h-16" />
      <Seller />
      <Cta>
        Get paid for passing along business to professionals in your network.
      </Cta>
    </>
  )
}
