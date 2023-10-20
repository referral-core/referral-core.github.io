"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CTAButton from "@/components/cta-button";
import * as React from "react";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="h-6 w-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 h-screen w-full overflow-scroll bg-white pb-16"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link
                href="/#buyer"
                className="flex justify-center py-2 text-gray-600 hover:text-gray-900 font-bold"
                onClick={() => setMobileNavOpen(false)}
              >
                Lead Buyer
              </Link>
            </li>
            <hr className="my-2" />
            <li>
              <Link
                href="/#seller"
                className="flex justify-center py-2 text-gray-600 hover:text-gray-900 font-bold"
                onClick={() => setMobileNavOpen(false)}
              >
                Lead Seller
              </Link>
            </li>
            <li>
              <Link
                href="/real-estate-agent"
                className="flex justify-center py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMobileNavOpen(false)}
              >
                Real Estate Agent
              </Link>
            </li>
            <li>
              <Link
                href="/home-contractor"
                className="flex justify-center py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMobileNavOpen(false)}
              >
                Home Contractor
              </Link>
            </li>
            <li>
              <Link
                href="/event-planner"
                className="flex justify-center py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMobileNavOpen(false)}
              >
                Event Planner
              </Link>
            </li>
            <hr className="my-2" />
            <li className="flex justify-center">
              <CTAButton text="Sign Up"/>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
