"use client"

import { useEffect, useRef, useState } from "react"

const results = [
  "Posicionamiento claro que atrae a las personas y oportunidades adecuadas.",
  "Relaciones estratégicas con encaje real, no solo contactos.",
  "Reputación más sólida, coherente y sostenible en el tiempo.",
  "Alianzas público-privadas activadas con propósito compartido.",
  "Estrategia y comunicación alineadas con la visión del líder.",
  "Ejecución ordenada: menos fricción, más impacto, más avance.",
]

export function Results() {
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
    <section className="px-6 py-32 md:px-12 lg:px-20">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Resultados que importan
            </p>
            <h2 className="font-serif text-4xl leading-tight text-balance md:text-6xl lg:text-7xl">
              Impacto medible, relaciones duraderas
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            {results.map((result, i) => (
              <div
                key={i}
                className={`border-b border-border py-4 transition-all duration-500 first:border-t ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: visible ? `${i * 100 + 300}ms` : "0ms",
                }}
              >
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
