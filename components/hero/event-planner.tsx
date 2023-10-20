import {Action, Background, Headline, PhoneImage, Values} from "@/components/hero/common";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 md:pb-24 md:pt-36">
        <div className="relative mx-auto flex max-w-xl flex-col text-center md:max-w-none md:flex-row md:text-left">
          <Background />
          <div className="py-12 md:min-h-[480px] md:w-[640px] md:py-20">
            <Question />
            <Headline pre="another" amount="$2,810" mid="per event with just " />
            <Values>
              Find the <span className="border-b font-bold">best deals</span> for your
              clients and <span className="border-b font-bold">get rewarded</span> for
              passing along business to professionals in your network.
            </Values>
            <Action occupation="Event Planner"/>
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
        Are you an <span className="font-extrabold">event planner?</span>
      </div>
    </div>
  )
}

function Disclaimer() {
  return (
    <div className="my-8 block text-xs text-white">
      <sup>*</sup>{" "}
      Estimate calculated using{" "}
      <a
        className="underline"
        target="_blank"
        href="https://www.theknot.com/content/average-wedding-cost#-average-wedding-cost"
        rel="noreferrer"
      >
        an average wedding cost of $38,100
      </a>
      {" "}and an average referral tip of 15% of the contract value for closed leads.
    </div>
  )
}
