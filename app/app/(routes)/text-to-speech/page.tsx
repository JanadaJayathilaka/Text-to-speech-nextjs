import { TextTrackingIcon } from "@hugeicons/core-free-icons"
import { auth } from "@clerk/nextjs/server"
import { elevenlabs } from "@/lib/elevenlabs"
import { getHistoryFiles } from "../../actions"
import TextToSpeech from "@/components/text-to-speech"
export default async function Page() {
  const { userId } = await auth()
  const voicesRes = await elevenlabs.voices.getAll()
  const voices = voicesRes.voices
  //voices
  const historyRes = await getHistoryFiles(userId!)
  const history = historyRes.filter(
    (history) => history.text && history.text.length > 0
  )
  if (!voices) return <div>no voices available</div>
  return (
    <main className="flex min-h-screen flex-col items-center overflow-y-hidden">
      <TextToSpeech voices={voices} history={history} />
    </main>
  )
}
