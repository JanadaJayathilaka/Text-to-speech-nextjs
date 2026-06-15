"use client"

import { UpgradeButton } from "@/components/upgrade-button"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PLANS } from "@/config/stripe"
import { cn } from "@/lib/utils"

import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"
import { pricingItems } from "@/consts"
import { AnimatedContainer } from "@/components/animated-container"
import { MaxWidthWrapper } from "@/components/ui/max-width-wrapper"

const Page = () => {
  const { user } = useUser()

  return (
    <>
      <AnimatedContainer>
        <MaxWidthWrapper className="mb-8 max-w-5xl text-center">
          <AnimatedContainer delay={0.1}>
            <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center py-8 lg:items-center">
              <h2 className="mt-6 text-center font-heading text-3xl !leading-[1.1] font-medium text-foreground md:text-5xl lg:text-center">
                Choose a plan that works for you
              </h2>
              <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                Whether you&lsquo;re just trying out our service or need more,
                we've got you covered.
              </p>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2}>
            <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-2">
              <TooltipProvider>
                {pricingItems.map(({ plan, tagline, credits, features }) => {
                  const price =
                    PLANS.find((p) => p.slug === plan.toLowerCase())?.price
                      .amount || 0

                  return (
                    <div
                      key={plan}
                      className={cn("relative rounded-2xl bg-white shadow-lg", {
                        "border-2 border-primary shadow-violet-200":
                          plan === "Pro",
                        "border border-gray-200": plan !== "Pro",
                      })}
                    >
                      {plan === "Pro" && (
                        <div className="absolute -top-5 right-0 left-0 mx-auto w-32 rounded-full bg-gradient-to-r from-primary to-gray-200 px-3 py-2 text-sm font-medium text-white">
                          Upgrade Now
                        </div>
                      )}

                      <div className="p-5">
                        <h3 className="font-display my-3 text-center text-3xl font-bold text-black">
                          {plan}
                        </h3>
                        <p className="text-muted-foreground">{tagline}</p>
                        <p className="font-display my-5 text-6xl font-semibold text-gray-900">
                          {price}
                          <span className="mr-1 text-base font-normal text-gray-900">
                            $
                          </span>
                        </p>
                        <p className="text-muted-foreground">per month</p>
                      </div>

                      <div className="flex h-20 items-center justify-center border-t border-b border-gray-200 bg-gray-50">
                        <div className="flex items-center space-x-1">
                          <p className="text-muted-foreground">
                            {credits} credits/month included
                          </p>

                          <Tooltip delayDuration={300}>
                            <TooltipTrigger className="ml-1.5 cursor-default">
                              <HelpCircle className="h-4 w-4 text-zinc-500" />
                            </TooltipTrigger>
                            <TooltipContent className="w-80 p-2">
                              How many credits you can have/create.
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>

                      <ul className="my-10 space-y-5 px-8">
                        {features.map(({ text, footnote, negative }) => (
                          <li key={text} className="flex space-x-5">
                            <div className="flex-shrink-0">
                              {negative ? (
                                <Minus className="h-6 w-6 text-gray-300" />
                              ) : (
                                <Check className="h-6 w-6 text-primary" />
                              )}
                            </div>
                            {footnote ? (
                              <div className="flex items-center space-x-1">
                                <p
                                  className={cn("text-left text-gray-600", {
                                    "text-gray-400": negative,
                                  })}
                                >
                                  {text}
                                </p>
                                <Tooltip delayDuration={300}>
                                  <TooltipTrigger className="ml-1.5 cursor-default">
                                    <HelpCircle className="h-4 w-4 text-zinc-500" />
                                  </TooltipTrigger>
                                  <TooltipContent className="w-80 p-2">
                                    {footnote}
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            ) : (
                              <p
                                className={cn("text-gray-600", {
                                  "text-gray-400": negative,
                                })}
                              >
                                {text}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-gray-200" />
                      <div className="p-5">
                        {plan === "Gratuito" ? (
                          <Link
                            href={user ? "/app/text-to-speech" : "/sign-in"}
                            className={buttonVariants({
                              className: "w-full",
                              variant: "secondary",
                            })}
                          >
                            {user
                              ? "Get Started"
                              : "Get Started - It&lsquo;free"}
                            <ArrowRight className="ml-1.5 h-5 w-5" />
                          </Link>
                        ) : user ? (
                          <UpgradeButton />
                        ) : (
                          <Link
                            href="/sign-in"
                            className={buttonVariants({
                              className: "w-full",
                            })}
                          >
                            {user ? "Upgrade Now" : "Get Started"}
                            <ArrowRight className="ml-1.5 h-5 w-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  )
                })}
              </TooltipProvider>
            </div>
          </AnimatedContainer>
        </MaxWidthWrapper>
      </AnimatedContainer>
    </>
  )
}

export default Page
