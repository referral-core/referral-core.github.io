import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/images/logo.svg"
import CTAButton from "@/components/cta-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/menu"
import {cn} from "@/lib/utils";

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
          <NavigationMenuDemo />
          {nav && (
            <nav className="flex grow">
              <ul className="flex grow flex-wrap items-center justify-end">
                <li>
                  <CTAButton text="Sign Up"/>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/#buyer" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Lead Buyer
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Lead Seller</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="col-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/#seller"
                  >
                    <Image src={Logo} alt="Logo" className="h-6 w-6"/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Seller
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Get paid to refer business to your network.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <span className="col-span-1">
              <ListItem href="/real-estate-agent" title="Real Estate Agent" />
              <ListItem href="/home-contractor" title="Home Contractor" />
              <ListItem href="/event-planner" title="Event Planner" />
              {/*<ListItem href="/coach" title="Coach" />*/}
              </span>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          {children && <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
