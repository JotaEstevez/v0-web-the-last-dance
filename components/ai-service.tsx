"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Repeat,
  Target,
  BarChart3,
  Check,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"

const cards = [
  {
    icon: Repeat,
    title: "Menos trabajo manual",
    text: "Automatizamos tareas repetitivas con puntos de control humano para reducir errores.",
  },
  {
    icon: Target,
    title: "Más conversión y coherencia",
    text: "Mensajes, estructura y materiales comerciales alineados para vender mejor.",
  },
  {
    icon: BarChart3,
    title: "Decisiones con calma",
    text: "Métricas útiles y reporting que ayudan a priorizar y avanzar con foco.",
  },
]

const includes = [
  "Diagnóstico de fricciones y quick wins (impacto/esfuerzo)",
  "Diseño de flujos: entradas, salidas, responsables y alertas",
  "Implementación del sistema con trazabilidad básica",
  "Documentación + formación para que el equipo lo opere con seguridad",
]

const formats = [
  "Sprint (10-15 días)",
  "Implementación (3-5 semanas)",
  "Retainer mensual (mejora continua)",
]

export function AiService() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sistemas-ia-aplicada"
      className="border-t border-border/40 px-6 py-20 md:px-12 lg:px-20"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-[1400px] transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-8 flex items-center gap-4 border-b border-border/60 pb-8">
          <span className="inline-block rounded-full bg-foreground/8 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground/70">
            Human premium
          </span>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          {/* Image */}
          <div className="relative aspect-[5/6] overflow-hidden md:col-span-4">
            <Image
              src="/images/service-ia.jpg"
              alt="Sistemas de IA aplicada"
              fill
              className="object-cover"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-5 md:col-span-8">
            <h2 className="font-serif text-[28px] leading-[1.15] text-balance md:text-[40px] lg:text-[52px]">
              Sistemas de IA aplicada para pymes
            </h2>
            <p className="text-[18px] font-medium leading-[1.5] text-foreground/80 md:text-[20px]">
              IA práctica, con criterio humano: sistemas digitales que convierten,
              automatizan y se sostienen en el tiempo.
            </p>
            <p className="text-[16px] leading-[1.65] text-muted-foreground md:text-[18px]">
              La IA solo aporta valor cuando se traduce en hábitos, decisiones y
              procesos claros. En TLD diseñamos e implementamos sistemas donde lo
              automático acelera, pero el control lo mantiene el equipo: criterio,
              supervisión y una forma simple de operar sin dependencia técnica.
            </p>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="border border-border/50 bg-card p-8"
              >
                <Icon className="mb-5 h-6 w-6 text-foreground/40" />
                <h3 className="mb-3 text-[17px] font-semibold leading-tight text-foreground">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-muted-foreground">
                  {card.text}
                </p>
              </div>
            )
          })}
        </div>

        {/* Que incluye + Formatos */}
        <div className="mt-14 grid gap-10 border-t border-border/40 pt-12 md:grid-cols-2 lg:mt-16 lg:gap-20">
          {/* Que incluye */}
          <div>
            <h4 className="mb-6 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground">
              Qué incluye
            </h4>
            <ul className="space-y-4">
              {includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-foreground/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formatos */}
          <div>
            <h4 className="mb-6 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground">
              Formatos
            </h4>
            <div className="flex flex-wrap gap-3">
              {formats.map((format) => (
                <span
                  key={format}
                  className="inline-block border border-border/60 bg-background px-5 py-2.5 text-[14px] text-foreground/70"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 border-t border-border/40 pt-12 text-center lg:mt-16">
          <Link
            href="#contacto"
            className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[12px] font-medium uppercase tracking-[0.25em] text-background transition-opacity hover:opacity-80"
          >
            Agenda una llamada de 20 min
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <p className="mx-auto mt-6 max-w-xl text-[14px] italic leading-[1.6] text-muted-foreground">
            Sin dependencia técnica. Transferimos control y dejamos un sistema
            operable por tu equipo.
          </p>
        </div>
      </div>
    </section>
  )
}
