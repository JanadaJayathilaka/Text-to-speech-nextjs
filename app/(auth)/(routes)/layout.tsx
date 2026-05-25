export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex h-screen items-center justify-center bg-white">
      {children}
    </main>
  )
}
