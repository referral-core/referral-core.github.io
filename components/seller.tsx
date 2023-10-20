import Link from "next/link";
import {
  ArrowRightIcon,
  BoltIcon,
  CalendarDaysIcon,
  ChatBubbleLeftEllipsisIcon,
  HomeModernIcon
} from "@heroicons/react/24/outline";
import {Background} from "@/components/pricing";

export default function Seller() {
  return (
    <section id="seller" className="relative mx-auto mb-20 max-w-6xl px-4 py-12 sm:px-6 md:py-20">
      <div className="pb-16 md:pb-4">
      <Background />

      <div className="mx-auto max-w-3xl pb-12 text-center md:pb-12">
        <div className="mb-4 text-xl font-bold uppercase tracking-wider text-blue-500" data-aos="zoom-y-out">Lead Seller</div>
        <h2 className="h2">Do you recommend services to your clients?</h2>
        <p className="mt-4 text-xl text-slate-500">Get <span className="font-extrabold">paid</span> for passing along business to service professionals in your network.</p>
      </div>

      <div className="mx-auto grid max-w-xs gap-4 sm:max-w-none sm:grid-cols-2 md:max-w-xl lg:max-w-none lg:grid-cols-3 lg:gap-6" data-aos-id-featbl>
        <Link className="group flex flex-col rounded-2xl bg-gradient-to-tr from-[#0ba5e9] to-[#37ACDE] p-5 pt-10 text-center text-white shadow-2xl" href="/real-estate-agent" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]">
          <HomeModernIcon className="mx-auto mb-4 h-12 w-12" />
          <div className="text-xl opacity-80">I am a</div>
          <div className="mb-2 mt-1 text-xl font-black tracking-tighter">Real Estate Agent</div>
          <ArrowRightIcon className="h-6 w-6 -translate-x-2 self-end stroke-2 transition duration-150 ease-in-out group-hover:translate-x-0"/>
        </Link>
        <Link className="group flex flex-col rounded-2xl bg-gradient-to-tr from-[#8b5cf6] to-[#936ceb] p-5 pt-10 text-center text-white shadow-2xl" href="/home-contractor" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="100">
          <BoltIcon className="mx-auto mb-4 h-12 w-12" />
          <div className="text-xl opacity-80">I am a</div>
          <div className="mb-2 mt-1 grow text-xl font-black tracking-tighter">Home Contractor</div>
          <ArrowRightIcon className="h-6 w-6 -translate-x-2 self-end stroke-2 transition duration-150 ease-in-out group-hover:translate-x-0"/>
        </Link>
        <Link className="group flex flex-col rounded-2xl bg-gradient-to-tr from-[#f471b6] to-[#f098c7] p-5 pt-10 text-center text-white shadow-2xl" href="/event-planner" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="200">
          <CalendarDaysIcon className="mx-auto mb-4 h-12 w-12" />
          <div className="text-xl opacity-80">I am an</div>
          <div className="mb-2 mt-1 text-xl font-black tracking-tighter">Event Planner</div>
          <ArrowRightIcon className="h-6 w-6 -translate-x-2 self-end stroke-2 transition duration-150 ease-in-out group-hover:translate-x-0"/>
        </Link>
        {/*<Link className="group flex flex-col rounded-2xl bg-gradient-to-tr from-[#3b81f6] to-[#90b1e6] p-5 text-center text-white shadow-2xl" href="/coach" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="200">*/}
        {/*  <ChatBubbleLeftEllipsisIcon className="mx-auto mb-4 h-12 w-12" />*/}
        {/*  <div className="text-xl opacity-80">I am a</div>*/}
        {/*  <div className="mb-2 mt-1 text-xl font-black tracking-tighter">Coach</div>*/}
        {/*  <ArrowRightIcon className="h-6 w-6 -translate-x-2 self-end stroke-2 transition duration-150 ease-in-out group-hover:translate-x-0"/>*/}
        {/*</Link>*/}
      </div>
      </div>
    </section>
  )
}
