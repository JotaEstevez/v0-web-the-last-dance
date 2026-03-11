import Link from "next/link"

export function LegalFooter() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-[12px] text-muted-foreground">
          {"© 2026 The Last Dance Human Impact Lab S.L. Todos los derechos reservados."}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/aviso-legal"
            className="text-[12px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Aviso Legal
          </Link>
          <span className="text-border">|</span>
          <Link
            href="/privacidad"
            className="text-[12px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacidad
          </Link>
          <span className="text-border">|</span>
          <Link
            href="/cookies"
            className="text-[12px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}
