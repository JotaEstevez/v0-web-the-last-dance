"use client"

const items = [
  "Consultoría Estratégica",
  "Relaciones de Valor",
  "Posicionamiento",
  "Comunicación",
  "Networking Estratégico",
  "Desarrollo de Negocio",
  "Sistemas IA Aplicada",
  "Impacto Sostenible",
  "Alianzas Público-Privadas",
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border py-5">
      <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {item}
            </span>
            <span className="text-muted-foreground/40" aria-hidden="true">
              {"///"}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
