import Link from "next/link"
import { cn } from "@/lib/utils"
import { FileHeart } from "lucide-react"
import Image from "next/image"

interface Props {
  href?: string
  className?: string
}

export function Logo({ href = "/", className }: Props) {
  return (
    <Link
      href={href || "/"}
      className={cn(
        "btn btn-ghost ml-4 flex items-center text-xl normal-case",
        className
      )}
    >
      <h1 className={cn("ml-2 text-2xl font-bold")}>Text2SpeechAI</h1>
    </Link>
  )
}
