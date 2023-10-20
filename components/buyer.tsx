import {Background} from "@/components/pricing";
import Link from "next/link";
import {
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  LinkIcon
} from "@heroicons/react/24/outline";

export default function Buyer() {
  return (
    <section id="buyer" className="relative mx-auto mb-20 max-w-6xl px-4 py-12 sm:px-6 md:py-20">
      <div className="pb-16 md:pb-4">
        <Background />

        <div className="mx-auto max-w-3xl pb-8 text-center">
          <div className="mb-4 text-xl font-bold uppercase tracking-wider text-blue-500" data-aos="zoom-y-out">Lead Buyer</div>
          <h2 className="h2">Looking for high quality leads?</h2>
          <p className="mt-4 text-xl text-slate-500">
            Stop wasting your precious time and money chasing low quality leads.
          </p>
        </div>

        <div className="mx-auto grid max-w-xs gap-4 sm:max-w-none sm:grid-cols-2 md:max-w-xl lg:max-w-none lg:grid-cols-3 lg:gap-6" data-aos-id-featbl>
          <Link className="group flex flex-col rounded-2xl bg-gradient-to-tr from-[#0ba5e9] to-[#37ACDE] p-5 py-10 text-center text-white shadow-2xl" href="/real-estate-agent" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]">
            <ChatBubbleLeftRightIcon className="mx-auto mb-2 h-12 w-12" />
            <div className="mb-2 mt-1 text-xl font-black tracking-tighter">High Quality Leads</div>
            <div className="text-lg opacity-80">Source leads that are <span className="font-bold">pre-qualified on intent and budget</span></div>
          </Link>
          <Link className="group flex flex-col rounded-2xl bg-gradient-to-tr from-[#8b5cf6] to-[#936ceb] p-5 py-10 text-center text-white shadow-2xl" href="/home-contractor" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="100">
            <CurrencyDollarIcon className="mx-auto mb-2 h-12 w-12" />
            <div className="mb-2 mt-1 text-xl font-black tracking-tighter">Pricing</div>
            <div className="text-lg opacity-80">Only pay for leads that <span className="font-extrabold">convert to actual business</span> for you</div>
          </Link>
          <Link className="group flex flex-col rounded-2xl bg-gradient-to-tr from-[#f471b6] to-[#f098c7] p-5 py-10 text-center text-white shadow-2xl" href="/event-planner" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="200">
            <LinkIcon className="mx-auto mb-2 h-12 w-12" />
            <div className="mb-2 mt-1 text-xl font-black tracking-tighter">Network</div>
            <div className="text-lg opacity-80">Allow your network to pre-qualify leads for you so you can focus on growing</div>
          </Link>
        </div>
      </div>
    </section>
  )
}
