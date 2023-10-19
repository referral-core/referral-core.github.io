import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/images/logo.svg"

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex shrink-0 flex-col items-center md:flex-row">
                <Link
                  className="mb-2 inline-flex md:mb-0"
                  href="/"
                  aria-label="Referral Lion"
                >
                  <Image src={Logo} width={36} height={28} alt="Logo" />
                </Link>
                <div className="ml-4 text-sm text-slate-500">
                  Copyright © Referral Lion
                  <span className="md:hidden lg:inline">
                    . All rights reserved.
                  </span>
                </div>
              </div>
            </div>
            <ul className="inline-flex space-x-2">
              {/*<li>*/}
              {/*  <a*/}
              {/*    className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"*/}
              {/*    href="#0"*/}
              {/*    aria-label="Twitter"*/}
              {/*  >*/}
              {/*    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
              {/*      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />*/}
              {/*    </svg>*/}
              {/*  </a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <a*/}
              {/*    className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"*/}
              {/*    href="#0"*/}
              {/*    aria-label="YouTube"*/}
              {/*  >*/}
              {/*    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
              {/*      <path d="M23.8 12.8c-.2-1.3-.8-2.2-2.2-2.4C19.4 10 16 10 16 10s-3.4 0-5.6.4c-1.4.2-2.1 1.1-2.2 2.4C8 14.1 8 16 8 16s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4 2.2.4 5.6.4 5.6.4s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2ZM14 19v-6l5 3-5 3Z" />*/}
              {/*    </svg>*/}
              {/*  </a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <a*/}
              {/*    className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"*/}
              {/*    href="#0"*/}
              {/*    aria-label="Telegram"*/}
              {/*  >*/}
              {/*    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
              {/*      <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />*/}
              {/*    </svg>*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
