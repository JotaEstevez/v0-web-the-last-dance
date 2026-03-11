"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react"

type FormStatus = "idle" | "sending" | "success" | "error"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [visible, setVisible] = useState(false)
  const [status, setStatus] = useState<FormStatus>("idle")

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: `${formData.get("firstName") || ""} ${formData.get("lastName") || ""}`.trim(),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("https://formspree.io/f/mgokgnlp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus("success")
        formRef.current?.reset()
        setTimeout(() => setStatus("idle"), 6000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contacto" className="border-t border-border/40 bg-background px-6 py-20 md:px-12 lg:px-20">
      <div
        ref={ref}
        className={`mx-auto max-w-[1400px] transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Contacto
            </p>
            <h2 className="font-serif text-[36px] leading-[1.1] text-balance text-foreground md:text-[56px] lg:text-[72px]">
              {"¿Listo para construir relaciones con propósito?"}
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[18px] leading-[1.6] text-muted-foreground md:text-[22px]">
              {"¿Eres una empresa que busca crecer con valores, una institución que quiere activar ecosistemas, un líder que necesita estrategia... o simplemente te inspira lo que estamos construyendo? Conectemos."}
            </p>
          </div>
        </div>

        {/* Status messages */}
        {status === "success" && (
          <div className="mb-8 flex items-center gap-3 rounded-md bg-green-50 px-6 py-4 animate-in fade-in duration-500">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-700" />
            <p className="text-sm text-green-800">
              Mensaje enviado correctamente. Te contactaremos pronto.
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mb-8 flex items-center gap-3 rounded-md bg-red-50 px-6 py-4 animate-in fade-in duration-500">
            <AlertCircle className="h-5 w-5 shrink-0 text-red-700" />
            <p className="text-sm text-red-800">
              Error al enviar el mensaje. Por favor, inténtalo de nuevo.
            </p>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-0">
          <div className="grid gap-px bg-border/30 md:grid-cols-2">
            <div className="bg-background p-6">
              <label htmlFor="firstName" className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Nombre
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/60"
                placeholder="Tu nombre"
              />
            </div>
            <div className="bg-background p-6">
              <label htmlFor="lastName" className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Apellido
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/60"
                placeholder="Tu apellido"
              />
            </div>
          </div>
          <div className="grid gap-px bg-border/30 md:grid-cols-2">
            <div className="bg-background p-6">
              <label htmlFor="email" className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/60"
                placeholder="tu@email.com"
              />
            </div>
            <div className="bg-background p-6">
              <label htmlFor="organization" className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Organización
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                className="w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/60"
                placeholder="Tu empresa"
              />
            </div>
          </div>
          <div className="bg-background p-6">
            <label htmlFor="message" className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground/60"
              placeholder="Cuéntanos sobre tu proyecto..."
            />
          </div>
          <div className="flex justify-center pt-10">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group flex items-center gap-3 border border-foreground/30 px-10 py-4 text-xs uppercase tracking-[0.3em] text-foreground transition-all hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Enviando..." : "Enviar"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
