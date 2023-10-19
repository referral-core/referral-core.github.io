import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/images/logo.svg"
import { Button } from "@/components/ui/button"

export default function Header({ nav = true }: { nav?: boolean }) {
  return (
    <header className="absolute z-30 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="mr-4 shrink-0">
            <Link className="group block" href="/" aria-label="Referral Lion">
              <Image src={Logo} width={36} height={28} alt="Logo" />
            </Link>
          </div>
          {nav && (
            <nav className="flex grow">
              <ul className="flex grow flex-wrap items-center justify-end">
                <li>
                  <Link href="https://app.referrallion.com">
                    <Button className="btn group bg-blue-500 text-white shadow-sm hover:bg-blue-600">
                      Get Started{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
