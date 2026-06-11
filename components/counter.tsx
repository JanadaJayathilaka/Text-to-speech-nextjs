"use client"

import { Sparkles } from "lucide-react"
import { CreditsRemaining } from "./credits-remaining"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { useToast } from "@/hooks/use-toast"
import { useEffect, useState } from "react"
import { createStripeSession } from "@/app/app/actions"
interface Props {
  maxLimitCount: number
  apiLimitCount: number
  isPremium: boolean
}

export function Counter({
  maxLimitCount,
  apiLimitCount = 0,
  isPremium = false,
}: Props) {
  const { toast } = useToast()
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateStripeSession = async () => {
    setIsLoading(true)
    const { url, error } = await createStripeSession()

    if (error) {
      toast.error(error)
      setIsLoading(false)
      return
    }
    setIsLoading(false)
    window.location.href = url ?? "/app/billing"
  }

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div>
      <Card className="border-0 bg-white/10 p-0 shadow-none">
        <CardContent className="px-4">
          <div className="mb-4 space-y-2 text-center text-sm">
            <CreditsRemaining
              credits={maxLimitCount - apiLimitCount}
              maxCredits={maxLimitCount}
            />
          </div>
          {!isPremium && (
            <Button
              disabled={isLoading}
              onClick={(e) => {
                e.preventDefault()
                handleCreateStripeSession()
              }}
              className="w-full"
            >
              <Sparkles />
              Upgrade to Pro
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
