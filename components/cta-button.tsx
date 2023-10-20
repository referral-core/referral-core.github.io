import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

type Props = Partial<{
  text: string
  query: object
}>

export default function CTAButton(props: Props) {
  const { text = "Get Started" } = props
  const params = new URLSearchParams(props.query as any).toString()
  const url = `/register${params ? `?${params}` : ""}`
  return (
    <Link href={url}>
      <Button
        className="group bg-blue-500 text-white hover:bg-blue-600"
        style={{ borderRadius: "20px" }}
      >
        {text}{" "}
        <ArrowRightIcon className="ml-1 h-3 stroke-2 tracking-normal text-white transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
      </Button>
    </Link>
  )
}
