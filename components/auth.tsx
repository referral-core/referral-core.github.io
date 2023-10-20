"use client"

import Image from "next/image"
import Avatar01 from "@/public/images/avatar-01.jpg"
import Avatar02 from "@/public/images/avatar-02.jpg"
import Avatar03 from "@/public/images/avatar-03.jpg"
import Avatar04 from "@/public/images/avatar-04.jpg"

export default function Auth() {
  return (
    <div className="mb-12 flex grow flex-col items-center lg:mb-0 lg:mt-20 lg:block">
      {/* Avatars */}
      <div className="-ml-0.5 mb-6 flex -space-x-3">
        {AVATARS.map((avatar, i) => (
          <Image
            key={i}
            className="box-content rounded-full border-2 border-slate-900"
            src={avatar}
            width={40}
            height={40}
            alt={`Avatar ${i}`}
          />
        ))}
      </div>
      <h2 className="h2 mb-8 text-center lg:text-left">
        Referral marketplace built for{" "}
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          service professionals
        </span>
      </h2>
      <ul className="inline-flex flex-col space-y-3 text-lg text-slate-500">
        {BULLETS.map((value, i) => (
          <li className="flex items-center" key={i}>
            <svg
              className="mr-3 h-3 w-3 shrink-0 fill-current text-emerald-500"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const AVATARS = [Avatar01, Avatar02, Avatar03, Avatar04] as const

const BULLETS = [
  "Find the best deals for your clients",
  "Get rewarded for referring business to professionals in your network",
  "Only pay for leads that convert to actual business for you",
] as const
