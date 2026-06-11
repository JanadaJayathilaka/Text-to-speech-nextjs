import { Geist, Geist_Mono, Noto_Serif } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import { Toaster } from "@/components/ui/sonner"

const notoSerifHeading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
})

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        notoSerifHeading.variable
      )}
    >
      <body>
        <ClerkProvider>
          {/* <header className="flex h-16 items-center justify-end gap-4 p-4">
            <Show when="signed-out">
              <SignInButton>
                <button className="h-10 cursor-pointer rounded-full bg-[#6c47ff] px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="h-10 cursor-pointer rounded-full bg-[#6c47ff] px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header> */}
          <Toaster />
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
