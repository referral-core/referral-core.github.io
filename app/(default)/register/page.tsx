import Image from "next/image"
import Illustration from "@/public/images/auth-illustration.svg"

import Auth from "@/components/auth"

import Form from "./form"

export const metadata = {
  title: "Register - Referral Lion",
  description: "Referral marketplace for professional services",
}

export default function Register() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-1/2 -z-10 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          priority
          alt="Page Illustration"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-24 md:pb-20 md:pt-40">
          <div className="lg:flex lg:space-x-20">
            <Auth />
            <div className="relative mx-auto w-full max-w-md">
              <div
                className="absolute inset-0 -z-10 opacity-40 md:bg-gradient-to-t md:from-transparent md:to-slate-300"
                aria-hidden="true"
              />
              <div className="p-6 md:p-8">
                <div className="mb-6 text-xl font-bold">Sign Up</div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
