'use client"'
import { Voice } from "elevenlabs/api"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "./ui/label"
interface Props {
  voice: Voice[]
}

export function TextToSpeech({ voice }: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Textarea
          maxLength={5000}
          placeholder="Enter text to convert to speech..."
          className="resize-none border-none p-4 shadow-none outline-none focus-visible:ring-0 focus-visible:ring-transparent md:p-8"
        />
        <div className="m flex w-1/2 flex-col gap-4 border p-4 md:p-8">
          <div className="space-y-2">
            <Label>Voices</Label>
            <VoiceList />
          </div>
        </div>
      </form>
    </div>
  )
}
