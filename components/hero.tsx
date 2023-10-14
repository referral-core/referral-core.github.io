import Image from "next/image"
import Link from "next/link"
import Auction from "@/public/images/auction.png"
import Avatar01 from "@/public/images/avatar-01.jpg"
import Avatar02 from "@/public/images/avatar-02.jpg"
import Avatar03 from "@/public/images/avatar-03.jpg"
import Avatar04 from "@/public/images/avatar-04.jpg"
import Client01 from "@/public/images/client-01.svg"
import Client02 from "@/public/images/client-02.svg"
import Client03 from "@/public/images/client-03.svg"
import Client04 from "@/public/images/client-04.svg"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 md:pt-36 md:pb-24">
        <div className="relative mx-auto flex max-w-xl flex-col text-center md:max-w-none md:flex-row md:text-left">
          <Background />
          <div className="py-12 md:min-h-[480px] md:w-[640px] md:py-20">
            <Question />
            <Headline />
            <Values />
            <Action />
            {/*<Logos />*/}
            <Disclaimer />
          </div>
          <PhoneImage />
        </div>
      </div>
    </section>
  )
}

function Background() {
  return (
    <div
      className="absolute inset-0 -z-10 -mx-20 mb-12 mt-0 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 md:mb-0"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -top-16 left-1/2 -z-10 -translate-x-1/3 blur-2xl md:-translate-x-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="2106" height="1327">
          <defs>
            <filter
              id="hi-a"
              width="133.3%"
              height="131.3%"
              x="-16.7%"
              y="-15.6%"
              filterUnits="objectBoundingBox"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
            </filter>
            <filter
              id="hi-b"
              width="133.3%"
              height="131.3%"
              x="-16.7%"
              y="-15.6%"
              filterUnits="objectBoundingBox"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
            </filter>
            <filter
              id="hi-c"
              width="159.9%"
              height="145%"
              x="-29.9%"
              y="-22.5%"
              filterUnits="objectBoundingBox"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
            </filter>
          </defs>
          <g fill="none" fillRule="evenodd">
            <path
              fill="#6D28D9"
              fillOpacity=".72"
              d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
              filter="url(#hi-a)"
              transform="translate(0 -605)"
            />
            <path
              fill="#67E8F9"
              fillOpacity=".64"
              d="M1732.164 1753.257c80.96 185.845 373.836-53.295 373.836-266.942S1505.228 860 1291.507 860s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
              filter="url(#hi-b)"
              transform="translate(0 -605)"
            />
            <path
              fill="#F472B6"
              fillOpacity=".8"
              d="M1191.108 871C1338.988 871 1631 635.765 1631 487.507 1631 339.248 1625.874 205 1477.994 205s-267.76 120.187-267.76 268.445c0 148.259-167.006 397.555-19.126 397.555Z"
              filter="url(#hi-c)"
              transform="translate(0 -605)"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

function Question() {
  return (
    <div className="my-8 grid grid-cols-1 gap-y-4 text-3xl text-slate-100">
      <div data-aos="fade-right" data-aos-delay="200">
        Are you a <span className="font-extrabold">wedding planner?</span>
      </div>
    </div>
  )
}

function Headline() {
  return (
    <h1
      className="mb-6 text-5xl font-medium text-slate-100"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      Make another{" "}
      <span className="font-extrabold">
        $1,905<sup>*</sup>
      </span>{" "}
      every wedding with{" "}
      <span className="whitespace-nowrap leading-tight text-blue-500">
        15 minutes
        <span className="relative inline-flex">
          <svg
            className="absolute right-0 top-full -z-10 mt-3 max-w-none"
            width="243"
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
        Find the <span className="border-b font-bold">best deals</span> for your
        clients and <span className="border-b font-bold">get paid</span> for
        passing along business to professionals in your network.
      </div>
    </div>
  )
}

function PhoneImage() {
  return (
    <div className="relative mx-auto h-[600px] w-[300px] max-w-sm rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800 md:absolute md:left-[40rem] md:top-1/2 md:ml-8 md:max-w-none md:-translate-y-1/2 lg:ml-20 xl:ml-32">
      <div className="absolute -left-[17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -left-[17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -left-[17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -right-[17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-white dark:bg-gray-800">
        <Image src={Auction} alt="Auction" className="h-[572px] w-[272px]" />
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
      <Link href="/register">
        <Button className="btn group bg-blue-500 text-white shadow-sm hover:bg-blue-600">
          Get Started{" "}
          <span className="ml-1 tracking-normal text-blue-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
            -&gt;
          </span>
        </Button>
      </Link>
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
        <div className="text-xs font-medium text-slate-500">+2K</div>
      </div>
    </div>
  )
}

function Logos() {
  return (
    <div
      className="mx-auto max-w-xs sm:max-w-none"
      data-aos="fade-right"
      data-aos-delay="400"
    >
      <div className="-mx-4 -my-2 inline-flex flex-wrap items-center justify-center md:-mx-6">
        <div className="flex w-1/2 justify-center px-4 py-2 sm:w-auto md:px-6">
          <Image src={Client01} width={82} alt="Client 01" />
        </div>
        <div className="flex w-1/2 justify-center px-4 py-2 sm:w-auto md:px-6">
          <Image src={Client02} width={97} alt="Client 02" />
        </div>
        {/*<div className="flex w-1/2 justify-center px-4 py-2 sm:w-auto md:px-6">*/}
        {/*  <Image src={Client03} width={113} alt="Client 03" />*/}
        {/*</div>*/}
        <div className="flex w-1/2 justify-center px-4 py-2 sm:-mt-2 sm:w-auto md:px-6">
          <Image src={Client04} width={82} alt="Client 04" />
        </div>
      </div>
    </div>
  )
}

function Disclaimer() {
  return (
    <div className="my-8 block text-xs text-white">
      <sup>*</sup>
      Estimate calculated by{" "}
      <a
        className="underline"
        target="_blank"
        href="https://www.theknot.com/content/average-wedding-cost#-average-wedding-cost"
        rel="noreferrer"
      >
        an average wedding cost of $38,100
      </a>
      {", "}an estimated 50% of contracts being bid on by service vendors, and
      an average referral tip of 10% for closed leads.
    </div>
  )
}
