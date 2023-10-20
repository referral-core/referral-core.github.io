import {Action, Background, Headline, PhoneImage, Values} from "@/components/hero/common";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 md:pb-24 md:pt-36">
        <div className="relative mx-auto flex max-w-xl flex-col text-center md:max-w-none md:flex-row md:text-left">
          <Background />
          <div className="py-12 md:min-h-[480px] md:w-[640px] md:py-20">
            <Question />
            <Headline amount="$800" mid=" in " post="for referring your client to a professional in your area"/>
            <Values>
              Your customers are looking for help with landscaping, HVAC, pest control.{" "}
              <span className="border-b font-bold">Get paid</span> for connecting them to the right businesses.
            </Values>
            <Action />
            <Disclaimer />
          </div>
          <PhoneImage />
        </div>
      </div>
    </section>
  )
}

function Question() {
  return (
    <div className="my-8 grid grid-cols-1 gap-y-4 text-3xl text-slate-100">
      <div data-aos="fade-right" data-aos-delay="200">
        Got a <span className="font-extrabold">non-serviceable lead?</span>
      </div>
    </div>
  )
}

function Disclaimer() {
  return (
    <div className="my-8 block text-xs text-white">
      <sup>*</sup>{" "}
      Estimate calculated using an{" "}
      <a
        className="underline"
        target="_blank"
        href="https://www.forbes.com/home-improvement/hvac/new-hvac-system-cost/"
        rel="noreferrer"
      >
        average HVAC service cost of $8,000
      </a>
      {" "}with an average referral tip of 10% of the contract value for closed leads.
    </div>
  )
}
