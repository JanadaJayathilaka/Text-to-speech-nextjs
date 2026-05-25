export default function Empty({ label }: { label?: string }) {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <h1 className="text-sm text-muted-foreground italic">
        {label || "Something went wrong!"}
      </h1>
    </div>
  )
}
