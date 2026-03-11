import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2A2218] px-6 py-14 text-[#F0EBE3] md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Level 1 - 3 column grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1: Logo + Taglines */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="The Last Dance - Human Impact Lab"
                width={160}
                height={64}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 font-serif text-[15px] italic tracking-wide text-[#F0EBE3]/70">
              Meaningful Connections
            </p>
            <p className="mt-1 text-[13px] text-[#F0EBE3]/40">
              Conexiones con propósito
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#F0EBE3]/40">
              Navegación
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Servicios", href: "#servicios" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[15px] text-[#F0EBE3]/80 transition-colors hover:text-[#F0EBE3]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Social + Contact */}
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#F0EBE3]/40">
              Conecta
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="#contacto"
                className="flex items-center gap-2 text-[15px] text-[#F0EBE3]/80 transition-colors hover:text-[#F0EBE3]"
              >
                <Mail className="h-4 w-4" />
                Contacto
              </Link>

              <span className="cursor-default text-[15px] text-[#F0EBE3]/30">
                Instagram (pronto)
              </span>
              <span className="cursor-default text-[15px] text-[#F0EBE3]/30">
                LinkedIn (pronto)
              </span>
            </div>
          </div>
        </div>

        {/* Level 2 - Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#F0EBE3]/10 pt-6 md:flex-row">
          <p className="text-[12px] text-[#F0EBE3]/40">
            {"© 2026 The Last Dance. Todos los derechos reservados."}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/aviso-legal"
              className="text-[12px] text-[#F0EBE3]/40 transition-colors hover:text-[#F0EBE3]/70"
            >
              Aviso Legal
            </Link>
            <span className="text-[#F0EBE3]/20">|</span>
            <Link
              href="/privacidad"
              className="text-[12px] text-[#F0EBE3]/40 transition-colors hover:text-[#F0EBE3]/70"
            >
              Política de Privacidad
            </Link>
            <span className="text-[#F0EBE3]/20">|</span>
            <Link
              href="/cookies"
              className="text-[12px] text-[#F0EBE3]/40 transition-colors hover:text-[#F0EBE3]/70"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
