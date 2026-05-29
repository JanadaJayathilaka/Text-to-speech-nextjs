import { Voice } from "elevenlabs/api"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { useRef, useState } from "react"
import { useTTSStore } from "@/store/use-tts-store"

export function VoiceList({ voices }: { voices: Voice[] }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const { setVoice } = useTTSStore()

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [selectedVoice, setSelectedVoice] = useState<Voice>()

  const handleVoiceSelect = (voiceId: string) => {
    const voice = voices.find((v) => v.voice_id === voiceId)
    setSelectedVoice(voice)
    setVoice(voice?.name as string)
    setIsPlaying(true)

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  const handlePause = () => {}
  return (
    <div className="flex items-center gap-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a voice" />
        </SelectTrigger>
        <SelectContent>
          {voices.map((voice) => (
            <SelectItem key={voice.voice_id} value={voice.voice_id}>
              {voice.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {}
    </div>
  )
}
