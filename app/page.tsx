"use client"
import { AnimatedContainer } from "@/components/animated-container"
import { Header } from "@/components/header"
import RetroGrid from "@/components/retro-grid"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  ChevronRight,
  HelpCircle,
  Minus,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MaxWidthWrapper } from "@/components/ui/max-width-wrapper"
import { BorderBeam } from "@/components/ui/border-beam"
import { SectionBadge } from "@/components/ui/section-badge"
import { pricingItems } from "@/consts"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PLANS } from "@/config/stripe"
import { cn } from "@/lib/utils"
import { UpgradeButton } from "@/components/upgrade-button"
import { useUser } from "@clerk/nextjs"
import { LampContainer } from "@/components/lamp-container"
export default function Page() {
  const { user } = useUser()
  return (
    <>
      <AnimatedContainer>
        <Header />
        <div className="mb-12 flex flex-col items-center justify-center pb-20 text-center md:mt-20 md:pb-0">
          <div className="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden bg-background shadow-none md:h-150">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-full w-full overflow-hidden rounded-full [mask:linear-gradient(white,transparent_50%)] before:absolute before:inset-[0_auto_auto_50%] before:aspect-square before:w-[200%] before:[translate:-50%_-15%] before:-rotate-90 before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-['']" />
              </span>
              <span className="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="absolute inset-x-0 bottom-0 h-full w-full bg-linear-to-tr from-primary/40 blur-md"></span>
              <span className="z-10 flex items-center justify-center gap-1.5 py-0.5 text-sm text-neutral-100">
                Introducing Text2SpeechAI
                <ChevronRight className="h-4 w-4" />
              </span>
            </button>
            <h1 className="mt-10 max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl">
              Create the most realistic speech with our AI audio platform
            </h1>

            <p className="mt-5 max-w-prose sm:text-lg">
              Pioneering research in Text to Speech, AI Voice Generator, and
              more
            </p>

            <RetroGrid />
          </div>
        </div>
      </AnimatedContainer>

      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-13rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-288.75"
          />
        </div>
      </div>
      {/* pricing section */}

      {/* PRICING SECTION */}
      <AnimatedContainer>
        <MaxWidthWrapper className="mb-8 max-w-5xl text-center">
          <AnimatedContainer delay={0.1}>
            <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center py-8 lg:items-center">
              <SectionBadge title="Simple Pricing" />
              <h2 className="mt-6 text-center font-heading text-3xl leading-[1.1]! font-medium text-foreground md:text-5xl lg:text-center">
                Choose a plan that works for you
              </h2>
              <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                From individual creators to the biggest enterprises, we have a
                plan for you.
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
                        <div className="absolute -top-5 right-0 left-0 mx-auto w-32 rounded-full bg-linear-to-r from-primary to-gray-200 px-3 py-2 text-sm font-medium text-white">
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
                            <div className="shrink-0">
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
                        {plan === "Free" ? (
                          <Link
                            href={user ? "/app/text-to-speech" : "/sign-in"}
                            className={buttonVariants({
                              className: "w-full",
                              variant: "secondary",
                            })}
                          >
                            {user ? "Get Started" : "Get Started - free"}
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

      {/* final section and footer*/}
      <AnimatedContainer>
        <LampContainer className="mt-32">
          <div className="relative flex w-full flex-col items-center justify-center text-center">
            <h2 className="mt-8 text-4xl font-semibold lg:text-5xl lg:leading-snug! xl:text-6xl">
              Making content <br /> universally accessible
            </h2>
            <p className="mx-auto mt-6 max-w-md text-muted-foreground">
              From Text to Speech to AI dubbing, our tools bridge language gaps,
              restore voices to those who have lost them, and make digital
              interactions feel more human, transforming the way we connect
              online.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/sign-in">
                Get started for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </LampContainer>
      </AnimatedContainer>
    </>
  )
}
