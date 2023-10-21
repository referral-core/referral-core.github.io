import Image from "next/image"
import Auction from "@/public/images/auction-real-estate-2.png"
import Avatar01 from "@/public/images/avatar-01.jpg"
import Avatar02 from "@/public/images/avatar-02.jpg"
import Avatar03 from "@/public/images/avatar-03.jpg"
import Avatar04 from "@/public/images/avatar-04.jpg"

import CTAButton from "@/components/cta-button"
import {Background, PhoneImage} from "@/components/hero/common"

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 md:pb-24 md:pt-36">
        <div className="relative mx-auto flex max-w-xl flex-col text-center md:max-w-none md:flex-row md:text-left">
          <Background />
          <div className="py-12 md:min-h-[480px] md:w-[640px] md:py-20">
            <Headline />
            <Values />
            <Action />
          </div>
          <PhoneImage src={Auction} />
        </div>
      </div>
    </section>
  )
}

function Headline() {
  return (
    <h1
      className="mb-6 text-6xl font-bold text-slate-100"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <div>Give referrals</div>
      <div className="mt-2">Get referrals</div>
      <span className="font-permanent-marker whitespace-nowrap font-medium leading-tight text-blue-500">
        Get paid
        <span className="relative inline-flex">
          <svg
            className="absolute right-0 top-full -z-10 mt-3 max-w-none"
            width="250"
            height="14"
            viewBox="0 0 135 9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-white"
              fillRule="nonzero"
              d="M36.54 1.016C40.01.912 43.39.78 46.95.712 50.51.644 54.071.567 57.81.566c2.744.002 5.018-.162 7.897-.113 9.89.085 20.486.459 31.646 1.116 2.484.151 4.835.242 7.296.39 2.461.147 4.924.282 7.34.413 1.528.069 3.186.202 4.684.31a187 187 0 0 1 4.89.34c3.416.326 6.937.738 10.5 1.23 2.316.32 2.482.762 1.474 1.152-1.082.485-3.3.708-6.3.635-.705-.026-1.39-.039-2.117-.076l-2.202-.137-4.43-.268a899.607 899.607 0 0 1-8.75-.477c-2.953-.174-5.754-.262-8.71-.427-2.955-.165-5.803-.257-8.829-.424-1.786-.084-3.509-.137-5.156-.16-1.697-.039-3.396-.07-5.027-.081l-9.497.059c-6.873.071-13.98.132-20.388.403-4.089.123-7.886.344-11.683.565l-8.169.637c-2.596.256-5.236.496-7.537.828-1.768.261-3.332.576-4.873.895-1.541.319-2.877.683-4.575.95-.775.112-1.367.265-2.142.376-2.903.406-4.781.312-8.094-.282a79.95 79.95 0 0 1-2.301-.412C.465 7.541-.327 6.866.558 6.205c.714-.471 1.384-.971 2.398-1.395 1.013-.424 2.483-.741 3.838-1.08 1.355-.34 3.28-.546 5.025-.802 1.744-.256 3.69-.446 5.594-.66C23.24 1.688 29.49 1.233 36.13.904l.408.112Z"
              opacity=".32"
            />
          </svg>
        </span>
      </span>
    </h1>
  )
}

function Values() {
  return (
    <div className="my-8 grid grid-cols-1 gap-y-4 text-xl text-slate-300">
      <div data-aos="fade-right" data-aos-delay="200">
        <div>
          The <span className="font-bold">premier</span> referral marketplace
          for <span className="font-bold">service professionals</span>.
        </div>
        <div className="mt-2">
          Buy and sell high quality referrals from and to your network.
        </div>
      </div>
    </div>
  )
}

function Action() {
  return (
    <div
      className="mx-auto mb-12 max-w-xs space-y-4 sm:flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0 md:justify-start"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      <CTAButton />
      <div className="space-y-2 sm:flex sm:items-center sm:justify-center sm:space-x-3 sm:space-y-0">
        <div className="-ml-0.5 inline-flex -space-x-3">
          <Image
            className="box-content rounded-full border-2 border-slate-800"
            src={Avatar01}
            width={28}
            height={28}
            alt="Avatar 01"
          />
          <Image
            className="box-content rounded-full border-2 border-slate-800"
            src={Avatar02}
            width={28}
            height={28}
            alt="Avatar 02"
          />
          <Image
            className="box-content rounded-full border-2 border-slate-800"
            src={Avatar03}
            width={28}
            height={28}
            alt="Avatar 03"
          />
          <Image
            className="box-content rounded-full border-2 border-slate-800"
            src={Avatar04}
            width={28}
            height={28}
            alt="Avatar 04"
          />
        </div>
        {/*<div className="text-xs font-medium text-slate-500">+2K</div>*/}
      </div>
    </div>
  )
}
