"use client"

import { usePathname } from "next/navigation"

export const Navbar = () => {
  const pathname = usePathname()
  function handleCreateLabelWithUrl(url: string) {
    const path = url.replace("/app/", "").split("/")

    const lastSegment = path[path.length - 1]

    const words = lastSegment.split("-")

    const formattedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )

    return formattedWords.join(" ")
  }
  return (
    <div className="flex w-full items-center border-b p-4">
      <span className="text-lg font-bold">
        {handleCreateLabelWithUrl(pathname)}
      </span>
    </div>
  )
}
