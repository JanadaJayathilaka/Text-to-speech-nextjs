"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { createStripeSession } from "@/app/app/actions"
import { useToast } from "@/hooks/use-toast"

export const UpgradeButton = () => {
  const { toast } = useToast()

  const handleCreateStripeSession = async () => {
    const { url, error } = await createStripeSession()
    if (error) {
      toast.error(error || "Something went wrong")
      return
    }
    window.location.href = url ?? "/app/billing"
  }

  return (
    <Button onClick={handleCreateStripeSession} className="w-full">
      Upgrade <ArrowRight className="ml-1.5 h-5 w-5" />
    </Button>
  )
}

//
