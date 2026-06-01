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
import axios from "axios"
interface Props {
  voices: Voice[]
}

export function TextToSpeech({ voices }: Props) {
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
        </div>
      </form>
    </div>
  )
}
