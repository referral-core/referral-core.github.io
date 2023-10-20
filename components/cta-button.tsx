import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

export default function CTAButton(props: { text?: string }) {
  const { text = "Get Started" } = props
  return (
    <Link href="/register">
      <Button className="group bg-blue-500 text-white hover:bg-blue-600" style={{ borderRadius: '20px' }}>
        {text}{" "}
        <ArrowRightIcon className="ml-1 h-3 stroke-2 tracking-normal text-white transition-transform duration-150 ease-in-out group-hover:translate-x-0.5"/>
      </Button>
    </Link>
  )
}
