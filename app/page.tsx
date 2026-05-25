import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Link href="/app/text-to-speech">
        <Button size="lg" className="gap-2 rounded-full px-8 py-6 text-lg font-semibold">
          Dashboard
        </Button>
      </Link>
    </div>
  )
}
