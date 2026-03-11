"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Compass, TrendingUp, Handshake, Megaphone, ChevronRight, ChevronDown, Check } from "lucide-react"

const services = [
  {
    id: "strategy",
    number: "01",
    icon: Compass,
    label: "Business & Strategy Advisory",
    title: "Claridad estratégica para tomar mejores decisiones y avanzar con foco",
    subtitle:
      "Cuando una empresa crece, el reto rara vez es la falta de ideas: suele ser el exceso de frentes, decisiones postergadas y ejecución dispersa.",
    description:
      "Acompañamos a dirección a ordenar prioridades, definir foco y convertir la estrategia en un plan realista, medible y accionable.",
    image: "/images/service-strategy.jpg",
    forWhom: [
      "Equipos directivos en fase de crecimiento, cambio o bloqueo.",
      "Empresas con foco difuso o con demasiadas iniciativas en paralelo.",
      "Fundadores/as que necesitan ordenar oferta, prioridades u organización.",
    ],
    resultsTitle: "Qué conseguimos",
    results: [
      "Prioridades claras (qué sí / qué no) para los próximos 90 días.",
      "Decisiones mejor informadas en oferta, posicionamiento, pricing y canales.",
      "Un sistema mínimo de ejecución: responsables, cadencia y métricas útiles.",
    ],
    includes: [
      "Diagnóstico rápido de situación, fricciones y oportunidades.",
      "Alineación de visión, objetivos, criterios de prioridad y decisiones clave.",
      "Oferta e ICP: a quién ayudáis y por qué os eligen.",
      "Roadmap 30/60/90 con responsables, próximos pasos e indicadores mínimos.",
    ],
    cta: "Solicita una primera conversación de 20 minutos para entender tu situación y confirmar si podemos aportar valor.",
  },
  {
    id: "commercial",
    number: "02",
    icon: TrendingUp,
    label: "Desarrollo Comercial",
    title: "Go-to-market con método: oferta, proceso y ejecución para crecer sin improvisación",
    subtitle:
      "El crecimiento sostenible no depende de \"apretar más\", sino de alinear oferta, proceso y ejecución.",
    description:
      "Diseñamos y activamos un sistema comercial simple, mantenible y consistente que reduce improvisación y facilita resultados predecibles.",
    image: "/images/service-commercial.jpg",
    forWhom: [
      "Pymes/scaleups con buena propuesta, pero conversión irregular.",
      "Equipos que dependen demasiado de una persona o de esfuerzos puntuales.",
      "Organizaciones con CRM/pipeline sin método o sin cadencia de seguimiento.",
    ],
    resultsTitle: "Qué trabajamos",
    results: [
      "Oferta y propuesta de valor definidas: qué vendéis, a quién y por qué ahora.",
      "Proceso comercial con etapas, criterios de avance y responsabilidades.",
      "Materiales mínimos: one-pager, guiones y argumentario.",
      "Cadencia de ejecución: rutinas semanales y control de oportunidades.",
    ],
    includes: [
      "Proceso comercial definido con plantillas (discovery, propuesta, seguimiento).",
      "Sistema de Ejecución Comercial (2 semanas) o acompañamiento mensual.",
    ],
    cta: "Cuéntanos tu situación y te diremos qué ajustar primero para notar impacto con el menor esfuerzo posible.",
  },
  {
    id: "communication",
    number: "03",
    icon: Megaphone,
    label: "Comunicación y Marketing",
    title: "Comunicación con alma: conecta tu esencia con el mundo de forma coherente y estratégica",
    subtitle:
      "No buscamos visibilidad vacía ni mensajes genéricos. Entendemos la comunicación como una extensión de la estrategia y de la identidad de cada organización.",
    description:
      "Construimos relatos coherentes, relaciones duraderas con los medios y una presencia sólida en los canales adecuados, siempre desde la autenticidad y el propósito.",
    image: "/images/service-communication.jpg",
    forWhom: [
      "Empresas en crecimiento, transformación o reposicionamiento que necesitan alinear su comunicación con su visión estratégica.",
      "Líderes que necesitan comunicar su visión de forma clara, efectiva y auténtica.",
      "Organizaciones que buscan fortalecer su presencia pública y gestionar relaciones con medios e instituciones.",
    ],
    resultsTitle: "Qué trabajamos",
    results: [
      "Servicios de comunicación: presencia pública, relaciones con medios e instituciones, narrativa coherente y profesional.",
      "Marketing digital: gestión de redes sociales, SEO, publicidad online y analítica web para conectar con tu público objetivo.",
      "Relaciones con los medios: notas de prensa, organización de eventos de prensa y gestión de entrevistas.",
      "Comunicación de liderazgo: mensajes clave, entrenamiento de portavoces y gestión de comunicación de crisis.",
    ],
    includes: [
      "Estrategia de comunicación alineada con identidad y objetivos de negocio.",
      "Plan de marketing digital personalizado con métricas de seguimiento.",
      "Gestión proactiva de relaciones con medios y stakeholders.",
      "Indicadores cualitativos: coherencia del relato, percepción de marca y calidad de relaciones.",
    ],
    cta: "Cuéntanos tu situación y diseñamos una estrategia de comunicación que conecte tu esencia con las personas que importan.",
  },
  {
    id: "partners",
    number: "04",
    icon: Handshake,
    label: "Conexión con Partners",
    title: "Relaciones con propósito para abrir oportunidades reales y construir acuerdos sostenibles",
    subtitle:
      "Las alianzas funcionan cuando hay encaje, foco y un camino claro hacia el acuerdo.",
    description:
      "Conectamos tu proyecto con partners, talento y oportunidades alineadas, cuidando tanto la estrategia como la relación.",
    image: "/images/gallery-4.jpg",
    forWhom: [
      "Empresas que necesitan partners para escalar (canal, producto, distribución, co-marketing).",
      "Proyectos que requieren talento o perfiles clave para un salto de nivel.",
      "Equipos que valoran la confianza y el largo plazo, sin perder pragmatismo.",
    ],
    resultsTitle: "Qué hacemos",
    results: [
      "Partner fit y propuesta de valor para el partner definidos.",
      "Kit mínimo: one-pager, mensajes de outreach y objeciones.",
      "Targets priorizados con acompañamiento hasta un siguiente paso claro.",
    ],
    includes: [
      "Partner proposition + one-pager + mensajes de outreach + lista priorizada.",
      "Partnership Sprint (7-10 días) o acompañamiento mensual.",
    ],
    cta: "Exploramos contigo 5-10 targets de alto encaje y definimos el enfoque para abrir conversaciones con intención y coherencia.",
  },
]

function ServiceBlock({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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

  const Icon = service.icon
  const isReversed = index % 2 !== 0

  return (
    <div
      id={service.id}
      ref={ref}
      className={`scroll-mt-20 transition-all duration-1000 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {/* Header row: number + label + image thumbnail */}
      <div className="mb-8 flex items-center gap-4 border-t border-border/60 pt-8 md:pt-10">
        <span className="font-serif text-base text-muted-foreground">{service.number}</span>
        <Icon className="h-5 w-5 text-muted-foreground" />
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {service.label}
        </span>
      </div>

      {/* Title + description side by side with image */}
      <div
        className={`grid items-start gap-8 md:grid-cols-12 md:gap-10 ${
          isReversed ? "md:direction-rtl" : ""
        }`}
      >
        {/* Image - compact */}
        <div className={`relative aspect-[3/2] overflow-hidden md:col-span-4 ${isReversed ? "md:order-2" : ""}`}>
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.label}
            fill
            className="object-cover"
          />
        </div>

        {/* Title + description */}
        <div className={`flex flex-col justify-center md:col-span-8 ${isReversed ? "md:order-1" : ""}`}>
          <h3 className="mb-6 max-w-3xl font-serif text-[26px] font-medium leading-[1.15] text-balance md:text-[36px] lg:text-[44px]">
            {service.title}
          </h3>
          <p className="mb-4 text-[17px] leading-[1.6] text-muted-foreground md:text-[19px]">
            {service.subtitle}
          </p>
          <p className="text-[17px] leading-[1.6] text-foreground/80 md:text-[19px]">
            {service.description}
          </p>

          {/* Scroll hint */}
          <div className="mt-6 flex items-center gap-2 text-muted-foreground/50">
            <ChevronDown className="h-4 w-4 animate-bounce" />
            <span className="text-[11px] uppercase tracking-[0.2em]">Detalle del servicio</span>
          </div>
        </div>
      </div>

      {/* Details grid - 3 columns */}
      <div className="mt-10 grid gap-10 border-t border-border/40 pt-10 md:grid-cols-3 lg:mt-12 lg:pt-12">
        {/* Para quién */}
        <div>
          <h4 className="mb-6 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground">
            Para quién es
          </h4>
          <ul className="space-y-4">
            {service.forWhom.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]"
              >
                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-foreground/30" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div>
          <h4 className="mb-6 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground">
            {service.resultsTitle}
          </h4>
          <ul className="space-y-4">
            {service.results.map((item) => (
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

        {/* Entregables + CTA */}
        <div>
          <h4 className="mb-6 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground">
            Entregables
          </h4>
          <ul className="space-y-4">
            {service.includes.map((item) => (
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
      </div>

      {/* CTA - full width, centered */}
      <div className="mt-12 border-t border-border/40 pt-10 text-center lg:mt-14 lg:pt-12">
        <p className="mx-auto max-w-2xl text-[17px] leading-[1.6] italic text-muted-foreground md:text-[19px]">
          {service.cta}
        </p>
        <a
          href="#contacto"
          className="group mt-6 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.2em] text-foreground transition-opacity hover:opacity-60"
        >
          Dar el primer paso
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export function Services() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true)
      },
      { threshold: 0.2 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  // First 2: Strategy + Commercial
  const firstGroup = services.slice(0, 2)

  return (
    <section id="servicios" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-14 max-w-3xl transition-all duration-1000 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Nuestros servicios
          </p>
          <h2 className="mb-10 font-serif text-[36px] leading-[1.1] text-balance md:text-[56px] lg:text-[72px]">
            Acompañar para avanzar. Con sentido.
          </h2>
          <p className="text-[18px] leading-[1.6] text-muted-foreground md:text-[20px]">
            Cinco líneas de trabajo diseñadas para empresas y líderes que quieren crecer con
            claridad, método y relaciones de valor.
          </p>
        </div>

        {/* First group: Strategy + Commercial */}
        <div className="flex flex-col gap-16 md:gap-20">
          {firstGroup.map((service, i) => (
            <ServiceBlock key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesAfterIA() {
  // Last 2: Communication + Partners
  const secondGroup = services.slice(2)

  return (
    <section className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-16 md:gap-20">
          {secondGroup.map((service, i) => (
            <ServiceBlock key={service.id} service={service} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
