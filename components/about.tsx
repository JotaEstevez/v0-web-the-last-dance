"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

const results = [
  "Posicionamiento claro que atrae a las personas y oportunidades adecuadas.",
  "Relaciones estratégicas con encaje real, no solo contactos.",
  "Reputación más sólida, coherente y sostenible en el tiempo.",
  "Alianzas público-privadas activadas con propósito compartido.",
  "Estrategia y comunicación alineadas con la visión del líder.",
  "Ejecución ordenada: menos fricción, más impacto, más avance.",
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)
  const [resultsVisible, setResultsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setResultsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (resultsRef.current) observer.observe(resultsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Top block */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Quiénes somos
          </p>
          <h2 className="max-w-5xl font-serif text-4xl leading-[1.1] text-balance md:text-[56px] lg:text-[72px]">
            Acompañamiento consciente para avanzar con sentido
          </h2>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Image - 5 of 12 cols */}
            <div className="relative aspect-[5/6] overflow-hidden lg:col-span-5">
              <Image
                src="/images/gallery-1.jpg"
                alt="Espacio de acompañamiento estratégico"
                fill
                className="object-cover"
              />
            </div>

            {/* Content - 7 of 12 cols */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <p className="font-serif text-[24px] leading-[1.35] md:text-[30px] lg:text-[36px]">
                The Last Dance es un espacio de acompañamiento para personas y
                proyectos que se encuentran en puntos de decisión, transición o
                bloqueo.
              </p>
              <p className="text-[17px] leading-[1.6] text-muted-foreground md:text-[19px]">
                Trabajamos desde la cercanía, el criterio y la experiencia,
                combinando visión estratégica, apoyo práctico y una profunda
                comprensión de los procesos humanos. Acompañamos a personas y
                proyectos a ordenar, decidir y avanzar con sentido, con cercanía y
                método.
              </p>
              <p className="text-[17px] leading-[1.6] text-muted-foreground md:text-[19px]">
                Estrategia práctica, sí; pero sostenida por lo que ninguna máquina
                sustituye: la relación humana.
              </p>
            </div>
          </div>

          {/* Quote - full width below */}
          <div className="mt-12 border-t border-border pt-10">
            <p className="mx-auto max-w-4xl font-serif text-[20px] italic leading-[1.5] text-foreground/70 md:text-[24px] lg:text-[28px]">
              {"No es consultoría tradicional. No es coaching estándar. Es acompañamiento consciente para avanzar con sentido. Tecnología alrededor; sentido dentro."}
            </p>
          </div>
        </div>

        {/* Why TLD block */}
        <div className="mt-20 border-t border-border pt-16">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Nuestra historia
          </p>
          <h3 className="mb-12 max-w-4xl font-serif text-[32px] leading-[1.15] text-balance md:text-[48px] lg:text-[64px]">
            Por qué existe TLD
          </h3>

          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Image - 4 of 12 cols */}
            <div className="relative aspect-[3/4] overflow-hidden lg:col-span-4">
              <Image
                src="/images/why-tld.png"
                alt="Espacio de trabajo elegante"
                fill
                className="object-cover"
              />
            </div>

            {/* Content - 8 of 12 cols */}
            <div className="flex flex-col gap-8 lg:col-span-8">
              {/* El problema */}
              <div>
                <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground/50">
                  El problema
                </p>
                <p className="text-[17px] leading-[1.65] text-muted-foreground md:text-[19px]">
                  The Last Dance nace de una pregunta que nos llevamos haciendo años: ¿por qué la consultoría buena solo está al alcance de las empresas grandes? La respuesta es obvia: es muy cara. Y lo es por dos razones — requiere talento muy senior, escaso y costoso, y se vende por horas a precio de oro.
                </p>
              </div>

              {/* La solución */}
              <div>
                <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground/50">
                  La solución
                </p>
                <p className="text-[17px] leading-[1.65] text-muted-foreground md:text-[19px]">
                  Pensando en cómo solucionar ese problema para que sea accesible para cualquier empresa, decidimos desarrollar nuestra propia tecnología de IA — un sistema que multiplica nuestra capacidad: automatiza todo el trabajo estructural y documental de cada proyecto, reduciendo drásticamente la dependencia de horas senior.
                </p>
              </div>

              {/* Lo que nos hace únicos */}
              <div>
                <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground/50">
                  Lo que nos hace únicos
                </p>
                <p className="text-[17px] leading-[1.65] text-muted-foreground md:text-[19px]">
                  Llevamos 25 años dirigiendo organizaciones en grupos líderes, y esa combinación — experiencia real y tecnología propia — nos permite acompañar a empresas medianas con el mismo rigor que una big four, a una fracción del coste y del tiempo, añadiendo lo que más valor tiene: el acompañamiento humano en cada proceso.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results block integrated */}
        <div
          ref={resultsRef}
          className={`mt-20 transition-all duration-1000 ${
            resultsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Full-width header */}
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Resultados que importan
          </p>
          <h3 className="mb-12 max-w-3xl font-serif text-[32px] leading-[1.15] text-balance md:text-[48px] lg:text-[64px]">
            Impacto medible, relaciones duraderas
          </h3>

          {/* Image + list side by side */}
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left: image - 5 of 12 cols */}
            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-5">
              <Image
                src="/images/gallery-5.jpg"
                alt="Resultados con impacto"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: results list - 7 of 12 cols */}
            <div className="lg:col-span-7">
              <div className="space-y-0">
                {results.map((result, i) => (
                  <div
                    key={i}
                    className={`border-b border-border/60 py-3 transition-all duration-500 first:border-t ${
                      resultsVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: resultsVisible ? `${i * 100 + 200}ms` : "0ms",
                    }}
                  >
                    <div className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                      <p className="text-[16px] leading-[1.5] text-muted-foreground md:text-[18px]">
                        {result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
