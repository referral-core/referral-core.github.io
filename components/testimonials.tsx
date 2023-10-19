import Image from "next/image"
import Link from "next/link"
import Testimonial01 from "@/public/images/testimonial-01.jpg"
import Testimonial02 from "@/public/images/testimonial-02.jpg"
import Testimonial03 from "@/public/images/testimonial-03.jpg"
import Testimonial04 from "@/public/images/testimonial-04.jpg"
import Testimonial05 from "@/public/images/testimonial-05.jpg"
import Testimonial06 from "@/public/images/testimonial-06.jpg"

const QUOTE =
  "Extremely thoughtful approaches to business. I highly recommend this podcast to anyone wanting to jump into something new." as const
const TESTIMONIALS = [
  { name: "Sarah Mendes", handle: "@saramendes", link: "", quote: QUOTE },
  { name: "Michal Rutt", handle: "@michrutt", link: "", quote: QUOTE },
  { name: "Lina James", handle: "@linajames", link: "", quote: QUOTE },
  { name: "Abigail Boucher", handle: "@AbbyBoucher", link: "", quote: QUOTE },
  { name: "Emma Bostian", handle: "@emmacode", link: "", quote: QUOTE },
  { name: "Addy Osman", handle: "@addyo", link: "", quote: QUOTE },
] as const

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
      <h2 className="mb-12 text-center text-3xl font-extrabold md:text-left md:text-4xl">
        Testimonials
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="rounded-3xl bg-slate-100 p-5 odd:rotate-1 even:-rotate-1"
          >
            <div className="mb-4 flex items-start">
              <Image
                className="mr-3 shrink-0 rounded-full"
                src={Testimonial01}
                width={48}
                height={48}
                alt="Testimonial 01"
              />
              <div>
                <div className="font-extrabold text-slate-800">{t.name}</div>
                <Link
                  target="_blank"
                  className="font-medium text-blue-500 hover:underline"
                  href={t.link}
                >
                  {t.handle}
                </Link>
              </div>
            </div>
            <div className="text-slate-500">{t.quote}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
