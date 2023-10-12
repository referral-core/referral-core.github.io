import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'
import {Button} from "@/components/ui/button";

export default function Header({ nav = true }: {
  nav?: boolean
}) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Link className="block group" href="/" aria-label="Referral Lion">
              <Image src={Logo} width={36} height={28} alt="Logo" />
            </Link>
          </div>
          {nav &&
            <nav className="flex grow">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link href="/register">
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
          }
        </div>
      </div>
    </header>
  )
}
