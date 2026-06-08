import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { AudioLines, Mic, MicVocal } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import UserAccount from "./user-account"
import { getUserSubscriptionPlan } from "@/lib/stripe"
import { auth } from "@clerk/nextjs/server"
import { getApiLimitCount, getApiMaxLimitCount } from "@/lib/api-limit"
import { checkSubscriptionPremium } from "@/lib/subscriptions"
import { Counter } from "./counter"

const routes = [
  {
    title: "Text to Speech",
    icon: Mic,
    url: "/app/text-to-speech",
    isBeta: false,
  },
  {
    title: "Voices",
    icon: MicVocal,
    url: "/app/voices",
    isBeta: true,
  },
  {
    title: "Sound Effects",
    icon: AudioLines,
    url: "/app/sound-effects",
    isBeta: true,
  },
]
export async function AppSidebar() {
  const user = await currentUser()
  const { userId } = await auth()

  const apiLimitCount = await getApiLimitCount(userId!)

  const subscriptionPlan = await getUserSubscriptionPlan(userId!)

  const isPremium = await checkSubscriptionPremium(userId!)

  const maxLimitCount = await getApiMaxLimitCount(userId!)
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-2">
          <span className="text-lg font-bold text-black">
            Text to Speech AI
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CREATE</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex">
              {routes.map((route) => (
                <SidebarMenuItem
                  key={route.title}
                  className="flex flex-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 data-[state=open]:bg-gray-100"
                >
                  <SidebarMenuButton asChild>
                    <a
                      aria-disabled={route.isBeta}
                      href={route.url}
                      className="flex w-full items-center gap-2"
                    >
                      <route.icon className="h-4 w-4 shrink-0" />
                      <span className="flex-1">{route.title}</span>
                      {route.isBeta && (
                        <span className="inline-flex items-center rounded-full border-transparent bg-gray-200 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-black transition-colors">
                          Beta
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Counter
              maxLimitCount={maxLimitCount}
              apiLimitCount={apiLimitCount}
              isPremium={isPremium}
            />
          </SidebarMenuItem>
          <SidebarMenuItem>
            {user && (
              <UserAccount
                isPremium={isPremium}
                user={{
                  name: user?.firstName || "User",
                  email: user?.emailAddresses[0]?.emailAddress || "",
                  avatar: user?.imageUrl,
                }}
              />
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
