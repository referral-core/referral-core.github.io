import {
  Action,
  Background,
  Headline,
  PhoneImage,
  Values,
} from "@/components/hero/common"
import Auction from "@/public/images/auction-coach.png"

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 md:pb-24 md:pt-36">
        <div className="relative mx-auto flex max-w-xl flex-col text-center md:max-w-none md:flex-row md:text-left">
          <Background />
          <div className="py-12 md:min-h-[480px] md:w-[640px] md:py-20">
            <Question />
            <Headline amount="$225" mid="for referring your lead to a coach in your network in just " />
            <Values>
              <span className="border-b font-bold">Get compensated</span> for passing along leads that aren’t the right fit for your coaching business to other coaches in your network.
            </Values>
            <Action occupation="Coach" />
            <Disclaimer />
          </div>
          <PhoneImage src={Auction} />
        </div>
      </div>
    </section>
  )
}

function Question() {
  return (
    <div className="my-8 grid grid-cols-1 gap-y-4 text-3xl text-slate-100">
      <div data-aos="fade-right" data-aos-delay="200">
        Got a client that is <span className="font-extrabold">not the right fit?</span>
      </div>
    </div>
  )
}

function Disclaimer() {
  return (
    <div className="my-8 block text-xs text-white">
      <sup>*</sup> Estimate calculated using{" "}
      <a
        className="underline"
        target="_blank"
        href="https://mentorcruise.com/blog/navigating-your-investment-a-detailed-guide-on-how-much-a-career-coach-costs-e4bc1/#:~:text=While%20the%20average%20answer%20of,%24500%20per%20career%20coaching%20session."
        rel="noreferrer"
      >
        an average rate of $150 / hr
      </a>, 10 booked sessions, and an average referral tip of 15%
    </div>
  )
}
