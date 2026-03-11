"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  function reject() {
    localStorage.setItem("cookie_consent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-[#F0EBE3]/10 bg-[#2A2218] px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <p className="text-[14px] leading-[1.6] text-[#F0EBE3]/80">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación
              y analizar el uso del sitio.{" "}
              <Link
                href="/cookies"
                className="text-[#F0EBE3] underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Más información
              </Link>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={reject}
              className="border border-[#F0EBE3]/30 px-5 py-2 text-[12px] uppercase tracking-[0.15em] text-[#F0EBE3]/70 transition-colors hover:border-[#F0EBE3]/60 hover:text-[#F0EBE3]"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={accept}
              className="bg-[#F0EBE3] px-5 py-2 text-[12px] uppercase tracking-[0.15em] text-[#2A2218] transition-opacity hover:opacity-90"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
