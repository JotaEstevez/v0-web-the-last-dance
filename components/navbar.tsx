"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const serviceLinks = [
  { label: "Business & Strategy Advisory", href: "#strategy" },
  { label: "Desarrollo Comercial", href: "#commercial" },
  { label: "Sistemas IA Aplicada", href: "#sistemas-ia-aplicada" },
  { label: "Comunicación y Marketing", href: "#communication" },
  { label: "Conexión con Partners", href: "#partners" },
]

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios", dropdown: true },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-500 md:px-12 lg:px-20 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Link href="/" className="z-50">
          <Image
            src="/images/logo.png"
            alt="The Last Dance - Human Impact Lab"
            width={140}
            height={56}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="text-xs uppercase tracking-[0.2em] text-foreground transition-opacity hover:opacity-60"
                >
                  {item.label}
                </Link>

                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 top-full pt-4 -translate-x-1/2 transition-all duration-300 ${
                    servicesOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="min-w-[280px] border border-border/60 bg-background/95 px-1 py-2 shadow-lg backdrop-blur-md">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-5 py-3 text-[11px] uppercase tracking-[0.15em] text-foreground/80 transition-all hover:bg-foreground/5 hover:text-foreground"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] text-foreground transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`block h-[1px] w-6 bg-foreground transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1px] w-6 bg-foreground transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1px] w-6 bg-foreground transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="flex flex-col items-center gap-4">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl tracking-wider text-foreground transition-opacity hover:opacity-60"
                >
                  {item.label}
                </Link>
                <div className="flex flex-col items-center gap-3">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-xs uppercase tracking-[0.15em] text-muted-foreground transition-opacity hover:text-foreground"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl tracking-wider text-foreground transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  )
}
