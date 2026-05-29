import { TextTrackingIcon } from "@hugeicons/core-free-icons"
import { auth } from "@clerk/nextjs/server"
import { elevenlabs } from "@/lib/elevenlabs"
export default async function Page() {
  const { userId } = await auth()
  const voicesRes = await elevenlabs.voices.getAll()
  const voices = voicesRes.voices
  //voices

  return (
    <main className="flex min-h-screen flex-col items-center overflow-y-hidden">
      <TextToSpeech />
    </main>
  )
}
