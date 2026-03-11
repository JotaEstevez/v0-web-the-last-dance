"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Networking estratégico en evento exclusivo",
    title: "Networking Estratégico",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Alianza estratégica entre líderes empresariales",
    title: "Alianzas de Valor",
    span: "",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Conferencia de liderazgo y posicionamiento",
    title: "Liderazgo & Posicionamiento",
    span: "",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Mesa redonda ejecutiva privada",
    title: "Mesas Ejecutivas",
    span: "md:col-span-2",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Taller de estrategia colaborativa",
    title: "Estrategia Colaborativa",
    span: "",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Gala corporativa de networking",
    title: "Conexiones con Impacto",
    span: "",
  },
]

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="galeria" className="px-6 py-32 md:px-12 lg:px-20">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div
          className={`mb-16 transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Nuestro impacto
          </p>
          <h2 className="font-serif text-4xl text-balance md:text-6xl lg:text-7xl">
            Donde las conexiones se convierten en resultados
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:auto-rows-[280px] lg:auto-rows-[320px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${item.span} transition-all duration-700 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/40" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                <p className="font-serif text-lg text-background">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
