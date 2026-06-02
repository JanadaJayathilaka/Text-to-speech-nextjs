"use client"
import { Voice } from "elevenlabs/api"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "./ui/label"
import { VoiceList } from "./voice-list"
import { DownloadIcon, Loader2Icon, SparklesIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useTTSStore } from "@/store/use-tts-store"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { handleDownloadAudioFiles } from "@/app/app/actions"
import axios from "axios"
interface Props {
  voices: Voice[]
}

export default function TextToSpeech({
  voices,
  history,
}: {
  voices: Voice[]
  history: {
    text: string | null
    name: string
    id: string
    audioId: string
    clerkId: string
    bucketId: string
    permissions: string[]
    signature: string
    mimeType: string
    sizeOriginal: number
    chunksTotal: number
    chunksUploaded: number
    createAt: Date
    updatedAt: Date
  }[]
}) {
  const router = useRouter()
  const { setText, setVoice, text, voice } = useTTSStore()

  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text || !voice) return

    setIsLoading(true)
    setAudioUrl(null)

    try {
      const res = await axios.post(
        "/api/generate",
        {
          text,
          voice,
        },
        {
          responseType: "blob",
        }
      )
      router.refresh()

      const audioBlob = res.data
      const url = URL.createObjectURL(audioBlob)
      setAudioUrl(url)
    } catch (error) {
      console.error("Error generating speech:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    if (audioUrl) {
      const a = document.createElement("a")
      a.href = audioUrl
      a.download = "speech.mp3"
      document.body.appendChild(a)
      a.click()
    }
  }
  async function handleDownloadFromHistory(id: string) {
    const linkAudio = await handleDownloadAudioFiles(id)
    window.open(linkAudio, "_blank")
  }

  return (
    <div className="mx-auto w-full max-w-7xl">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Textarea
          maxLength={5000}
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to convert to speech..."
          className="resize-none border-none p-4 shadow-none outline-none focus-visible:ring-0 focus-visible:ring-transparent md:p-8"
        />
        <div className="m flex w-1/2 flex-col gap-4 border p-4 md:p-8">
          <div className="space-y-2">
            <Label>Voices</Label>
            <VoiceList voices={voices} />
          </div>
          <Button type="submit" disabled={isLoading || !text || !voice}>
            {isLoading ? (
              <div className="flex items-center space-x-3">
                <span>Generating Speech</span>
                <Loader2Icon className="size-5 animate-spin" />
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <span>Generate speech</span>
                <SparklesIcon className="size-5" />
              </div>
            )}
          </Button>
          {audioUrl && (
            <div className="mt-8 flex items-center space-x-3">
              <audio controls className="w-full">
                <source src={audioUrl} type="audio/mpeg" />
              </audio>
              <Button onClick={handleDownload} size="icon">
                <DownloadIcon className="size-5" />
              </Button>
            </div>
          )}

          <div className="flex flex-col space-y-2">
            <Label>History</Label>
            <div className="flex flex-col space-y-3">
              {history.length > 0 ? (
                history.map((audio, i) => (
                  <div className="items-center justify-start gap-4 space-x-3">
                    <span className="truncate text-sm" key={i}>
                      {audio.text}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      className="cursor-pointer rounded-full border border-muted bg-transparent"
                      onClick={() => handleDownloadFromHistory(audio.audioId)}
                      size="icon"
                    >
                      <DownloadIcon className="size-5" />
                    </Button>
                  </div>
                ))
              ) : (
                <span className="truncate text-xs">No audios...</span>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
