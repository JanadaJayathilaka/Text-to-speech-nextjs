"use client"

import { Card, CardContent } from "./ui/card"

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
        </CardContent>
      </Card>
    </div>
  )
}
