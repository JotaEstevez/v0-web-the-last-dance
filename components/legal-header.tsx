import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export function LegalHeader() {
  return (
    <header className="border-b border-border px-6 py-6 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[900px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="The Last Dance - Human Impact Lab"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Link>
      </div>
    </header>
  )
}
