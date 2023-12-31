import { Background } from "@/components/pricing"
import {
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline"

export default function Buyer() {
  return (
    <section
      id="buyer"
      className="relative mx-auto mb-20 max-w-6xl px-4 py-12 sm:px-6 md:py-20"
    >
      <div className="pb-16 md:pb-4">
        <Background />

        <div className="mx-auto max-w-4xl pb-8 text-center">
          <div
            className="mb-4 text-xl font-bold uppercase tracking-wider text-blue-500"
            data-aos="zoom-y-out"
          >
            Lead Buyer
          </div>
          <h2 className="h2">
            Stop wasting your time and money with low quality leads.
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            Referrals from your trusted network are the best leads for your
            business.
          </p>
          <p className="mt-1 text-xl text-slate-500">
            With Referral Lion you get:
          </p>
        </div>

        <div
          className="mx-auto grid max-w-xs gap-4 sm:max-w-none sm:grid-cols-2 md:max-w-xl lg:max-w-none lg:grid-cols-3 lg:gap-6"
          data-aos-id-featbl
        >
          <div
            className="group flex flex-col rounded-2xl bg-slate-700 p-5 py-10 text-center text-white shadow-2xl"
            data-aos="fade-down"
            data-aos-anchor="[data-aos-id-featbl]"
          >
            <ChatBubbleLeftRightIcon className="mx-auto mb-2 h-12 w-12" />
            <div className="mb-2 mt-1 text-xl font-bold">
              High Quality Leads
            </div>
            <div className="text-lg opacity-80">
              Source leads that are{" "}
              <span className="font-extrabold">
                pre-qualified on intent and budget
              </span>
            </div>
          </div>
          <div
            className="group flex flex-col rounded-2xl bg-slate-700 p-5 py-10 text-center text-white shadow-2xl"
            data-aos="fade-down"
            data-aos-anchor="[data-aos-id-featbl]"
            data-aos-delay="100"
          >
            <CurrencyDollarIcon className="mx-auto mb-2 h-12 w-12" />
            <div className="mb-2 mt-1 text-xl font-bold">Transparent Costs</div>
            <div className="text-lg opacity-80">
              Only pay for leads that{" "}
              <span className="font-extrabold">convert to actual business</span>{" "}
              for you
            </div>
          </div>
          <div
            className="group flex flex-col rounded-2xl bg-slate-700 p-5 py-10 text-center text-white shadow-2xl"
            data-aos="fade-down"
            data-aos-anchor="[data-aos-id-featbl]"
            data-aos-delay="200"
          >
            <LockClosedIcon className="mx-auto mb-2 h-12 w-12" />
            <div className="mb-2 mt-1 text-xl font-bold">
              Money Back Guarantee
            </div>
            <div className="text-lg opacity-80">
              If the contract falls through, you get your{" "}
              <span className="font-extrabold">lead costs back</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
