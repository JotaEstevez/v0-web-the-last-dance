"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Landmark, Users, Compass, Globe } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const clients: { icon: LucideIcon; text: string }[] = [
  { icon: Building2, text: "Empresas que quieren crecer con reputación, valores y relaciones sólidas." },
  { icon: Landmark, text: "Instituciones que buscan activar ecosistemas y colaboración público-privada." },
  { icon: Users, text: "Líderes y equipos directivos que necesitan estrategia, visibilidad y los partners adecuados." },
  { icon: Compass, text: "Coaches, estrategas y marcas con propósito que buscan posicionamiento auténtico." },
  { icon: Globe, text: "Organizaciones que entienden que el crecimiento sostenible nace de las conexiones humanas." },
]

export function Clients() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="border-t border-border/40 bg-background px-6 py-20 md:px-12 lg:px-20">
      <div
        ref={ref}
        className={`mx-auto max-w-[1400px] transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Nuestros clientes
        </p>
        <h2 className="mb-14 max-w-4xl font-serif text-[36px] leading-[1.1] text-balance text-foreground md:text-[56px] lg:text-[72px]">
          Para quienes buscan impacto real a través de las relaciones
        </h2>
        <div className="space-y-0">
          {clients.map((client, i) => {
            const Icon = client.icon
            return (
              <div
                key={i}
                className={`border-b border-border/60 py-6 transition-all duration-700 ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: visible ? `${i * 100 + 200}ms` : "0ms" }}
              >
                <div className="flex items-start gap-5">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-foreground/30" />
                  <p className="text-[18px] leading-[1.6] text-muted-foreground md:text-[22px]">
                    {client.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
