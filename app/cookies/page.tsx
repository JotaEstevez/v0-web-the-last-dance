import type { Metadata } from "next"
import { LegalHeader } from "@/components/legal-header"
import { LegalFooter } from "@/components/legal-footer"

export const metadata: Metadata = {
  title: "Política de Cookies | The Last Dance",
  description: "Política de cookies de TLD HUMAN IMPACT LAB, SL",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <LegalHeader />
      <main className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-4 text-[12px] uppercase tracking-[0.3em] text-muted-foreground">
            Cookies
          </p>
          <h1 className="mb-12 font-serif text-[36px] leading-[1.1] md:text-[48px]">
            Política de Cookies
          </h1>

          <div className="flex flex-col gap-12">
            {/* Qué son */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                {"¿Qué son las cookies?"}
              </h2>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo
                del usuario (ordenador, tablet o móvil) cuando lo visita. Se utilizan para recordar
                preferencias, mejorar la experiencia de navegación y obtener información estadística sobre
                el uso del sitio web. Las cookies no pueden dañar su dispositivo ni acceder a otra
                información almacenada en el mismo.
              </p>
            </section>

            {/* Tipos de cookies */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Tipos de cookies que utilizamos
              </h2>
              <div className="flex flex-col gap-6">
                {/* Técnicas */}
                <div className="border-l-2 border-border pl-6">
                  <h3 className="mb-3 text-[17px] font-medium text-foreground">
                    Cookies técnicas (necesarias)
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-muted-foreground">
                    Son esenciales para el correcto funcionamiento del sitio web. Permiten la navegación
                    y el uso de las funciones básicas. Sin estas cookies, el sitio web no puede funcionar
                    correctamente. No requieren consentimiento del usuario.
                  </p>
                </div>

                {/* Analíticas */}
                <div className="border-l-2 border-border pl-6">
                  <h3 className="mb-3 text-[17px] font-medium text-foreground">
                    Cookies analíticas
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-muted-foreground">
                    Nos permiten cuantificar el número de usuarios, conocer las secciones más visitadas,
                    y analizar cómo interactúan los usuarios con el sitio web. Esta información nos ayuda
                    a mejorar nuestros servicios y la experiencia de navegación. Estas cookies pueden ser
                    propias o de terceros (como Google Analytics).
                  </p>
                </div>

                {/* Preferencias */}
                <div className="border-l-2 border-border pl-6">
                  <h3 className="mb-3 text-[17px] font-medium text-foreground">
                    Cookies de preferencias
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-muted-foreground">
                    Permiten recordar las preferencias del usuario, como el idioma o la configuración
                    regional. Mejoran la experiencia del usuario personalizando el contenido del sitio web.
                  </p>
                </div>
              </div>
            </section>

            {/* Tabla de cookies */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Detalle de cookies
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="py-3 pr-4 text-left font-medium text-foreground">Cookie</th>
                      <th className="py-3 pr-4 text-left font-medium text-foreground">Tipo</th>
                      <th className="py-3 pr-4 text-left font-medium text-foreground">Finalidad</th>
                      <th className="py-3 text-left font-medium text-foreground">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">cookie_consent</td>
                      <td className="py-3 pr-4">Técnica</td>
                      <td className="py-3 pr-4">Almacena la preferencia de cookies del usuario</td>
                      <td className="py-3">1 año</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">_ga</td>
                      <td className="py-3 pr-4">Analítica</td>
                      <td className="py-3 pr-4">Google Analytics - Identifica usuarios únicos</td>
                      <td className="py-3">2 años</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">_ga_*</td>
                      <td className="py-3 pr-4">Analítica</td>
                      <td className="py-3 pr-4">Google Analytics - Mantiene el estado de la sesión</td>
                      <td className="py-3">2 años</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Cómo gestionar */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                {"¿Cómo aceptar o rechazar cookies?"}
              </h2>
              <div className="flex flex-col gap-4 text-[16px] leading-[1.7] text-muted-foreground">
                <p>
                  Al acceder por primera vez a nuestro sitio web, se muestra un banner informativo donde
                  puede aceptar o rechazar el uso de cookies no esenciales. Puede modificar sus preferencias
                  en cualquier momento.
                </p>
                <p>
                  Tenga en cuenta que si desactiva las cookies técnicas, es posible que algunas funcionalidades
                  del sitio web no funcionen correctamente.
                </p>
              </div>
            </section>

            {/* Desactivar en navegador */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                {"¿Cómo desactivar cookies en el navegador?"}
              </h2>
              <div className="flex flex-col gap-4 text-[16px] leading-[1.7] text-muted-foreground">
                <p>
                  Además de las opciones que ofrecemos en nuestro banner, puede configurar su navegador
                  para bloquear o eliminar cookies. A continuación se indican los enlaces a las instrucciones
                  de los navegadores más comunes:
                </p>
                <ul className="ml-6 flex flex-col gap-2 list-disc">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-60">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-60">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-60">
                      Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-60">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Última actualización */}
            <div className="border-t border-border pt-8">
              <p className="text-[13px] italic text-muted-foreground">
                Última actualización: 26 de octubre de 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <LegalFooter />
    </div>
  )
}
