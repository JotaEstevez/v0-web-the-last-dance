"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Consultoría estratégica y conexiones con propósito"
          fill
          className={`object-cover transition-transform duration-[2000ms] ${
            loaded ? "scale-100" : "scale-110"
          }`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div
          className={`mb-8 transition-all delay-300 duration-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Image
            src="/images/logo.png"
            alt="The Last Dance - Human Impact Lab"
            width={400}
            height={160}
            className="h-28 w-auto brightness-0 invert md:h-40 lg:h-48"
          />
        </div>
        <h1
          className={`font-serif text-4xl leading-tight text-balance text-background md:text-6xl lg:text-7xl transition-all delay-500 duration-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Conexiones
          <br />
          con propósito
        </h1>
        <p
          className={`mt-10 max-w-2xl text-base leading-relaxed text-background/80 md:text-xl transition-all delay-700 duration-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Creemos en la fuerza de las relaciones bien construidas, en la
          estrategia que se sostiene con valores y en el impacto que nace cuando
          conectas a las personas adecuadas con un propósito común.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#servicios"
          className="flex flex-col items-center gap-2 text-background/60 transition-opacity hover:opacity-100"
          aria-label="Ir a servicios"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
