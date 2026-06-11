import { AnimatedContainer } from "@/components/animated-container"
import { Header } from "@/components/header"
import RetroGrid from "@/components/retro-grid"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MaxWidthWrapper } from "@/components/ui/max-width-wrapper"
export default function Page() {
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

      <AnimatedContainer>
        <MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
          <div className="relative flex w-full items-center py-10 md:py-20">
            <div className="gradient absolute inset-0 top-1/2 left-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 blur-[10rem]"></div>
            <div className="bg-opacity-50 -m-2 rounded-xl p-2 ring-1 ring-foreground/20 backdrop-blur-3xl ring-inset lg:-m-4 lg:rounded-2xl">
              <Image
                src="/dashboard.png"
                alt="banner image"
                width={1200}
                height={1200}
                quality={100}
                className="rounded-md bg-foreground/10 shadow-2xl ring-1 ring-border lg:rounded-xl"
              />

              <BorderBeam size={250} duration={12} delay={9} />
            </div>
          </div>
        </MaxWidthWrapper>
      </AnimatedContainer>
    </>
  )
}
