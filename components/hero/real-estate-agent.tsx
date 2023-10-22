import {
  Action,
  Background,
  Headline,
  PhoneImage,
  Values,
} from "@/components/hero/common"
import Auction1 from "@/public/images/auction-real-estate-1.png"
import Auction2 from "@/public/images/auction-real-estate-2.png"

export function Hero1() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 md:pb-24 md:pt-36">
        <div className="relative mx-auto flex max-w-xl flex-col text-center md:max-w-none md:flex-row md:text-left">
          <Background />
          <div className="py-12 md:min-h-[480px] md:w-[640px] md:py-20">
            <Question1 />
            <Headline
              amount="$4,400"
              mid="for referring your client to the right contractor in just "
            />
            <Values entity="contractors" />
            <Action occupation="Real Estate Agent" />
            <Disclaimer1 />
          </div>
          <PhoneImage src={Auction2} />
        </div>
      </div>
    </section>
  )
}

export function Hero2() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 md:pb-24">
        <div className="relative mx-auto flex max-w-xl flex-col text-center md:max-w-none md:flex-row md:text-left">
          <Background />
          <div className="py-12 md:min-h-[480px] md:w-[640px] md:py-20">
            <Question2 />
            <Headline amount="$2,500" mid="for sharing a lead in just " />
            <Values>
              Refer your client to an agent in your area and{" "}
              <span className="border-b font-bold">get paid</span> for the
              referral.
            </Values>
            <Action occupation="Real Estate Agent" />
            <Disclaimer2 />
          </div>
          <PhoneImage src={Auction1} />
        </div>
      </div>
    </section>
  )
}

function Question1() {
  return (
    <div className="my-8 grid grid-cols-1 gap-y-4 text-3xl text-slate-100">
      <div data-aos="fade-right" data-aos-delay="200">
        Is your client looking to make{" "}
        <span className="font-extrabold">home improvements?</span>
      </div>
    </div>
  )
}

function Question2() {
  return (
    <div className="my-8 grid grid-cols-1 gap-y-4 text-3xl text-slate-100">
      <div data-aos="fade-right" data-aos-delay="200">
        Got a <span className="font-extrabold">non-serviceable lead?</span>
      </div>
    </div>
  )
}

function Disclaimer1() {
  return (
    <div className="my-8 block text-xs text-white">
      <sup>*</sup> Estimate calculated using{" "}
      <a
        className="underline"
        target="_blank"
        href="https://www.rocketmortgage.com/learn/home-renovation-costs"
        rel="noreferrer"
      >
        an average home renovation cost of $22,000
      </a>{" "}
      with an average referral tip of 20%.
    </div>
  )
}

function Disclaimer2() {
  return (
    <div className="my-8 block text-xs text-white">
      <sup>*</sup> Estimate calculated using{" "}
      <a
        className="underline"
        target="_blank"
        href="https://www.rocketmortgage.com/learn/home-renovation-costs"
        rel="noreferrer"
      >
        an average home price of $416,000
      </a>{" "}
      , 2.5% seller or buyer commission, and a referral tip of 25%.
    </div>
  )
}
