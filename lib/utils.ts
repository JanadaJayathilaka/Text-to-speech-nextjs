import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Readable } from "stream"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function streamToBuffer(stream: Readable): Promise<Buffer> {
  const chunks: Uint8Array[] = []

  for await (const chunk of stream) {
    chunks.push(chunk)
  }

  return Buffer.concat(chunks)
}
