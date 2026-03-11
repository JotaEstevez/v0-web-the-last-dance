import type { Metadata } from "next"
import { LegalHeader } from "@/components/legal-header"
import { LegalFooter } from "@/components/legal-footer"

export const metadata: Metadata = {
  title: "Política de Privacidad | The Last Dance",
  description: "Política de privacidad y protección de datos de The Last Dance Human Impact Lab S.L.",
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen">
      <LegalHeader />
      <main className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-4 text-[12px] uppercase tracking-[0.3em] text-muted-foreground">
            Privacidad
          </p>
          <h1 className="mb-12 font-serif text-[36px] leading-[1.1] md:text-[48px]">
            Política de Privacidad
          </h1>

          <div className="flex flex-col gap-12">
            {/* Responsable */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Responsable del tratamiento
              </h2>
              <div className="flex flex-col gap-3 text-[16px] leading-[1.7] text-muted-foreground">
                <p><strong className="text-foreground">Identidad:</strong> The Last Dance Human Impact Lab S.L.</p>
                <p><strong className="text-foreground">CIF:</strong> [PENDIENTE]</p>
                <p><strong className="text-foreground">Dirección:</strong> [PENDIENTE]</p>
                <p><strong className="text-foreground">Correo electrónico:</strong> [PENDIENTE]</p>
              </div>
            </section>

            {/* Datos recogidos */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Datos que recogemos
              </h2>
              <div className="flex flex-col gap-4 text-[16px] leading-[1.7] text-muted-foreground">
                <p>
                  A través de este sitio web podemos recoger los siguientes datos personales:
                </p>
                <ul className="ml-6 flex flex-col gap-2 list-disc">
                  <li><strong className="text-foreground">Formulario de contacto:</strong> nombre, apellidos, correo electrónico, organización y mensaje.</li>
                  <li><strong className="text-foreground">Cookies:</strong> datos de navegación y preferencias (consulte nuestra Política de Cookies).</li>
                  <li><strong className="text-foreground">Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia.</li>
                </ul>
              </div>
            </section>

            {/* Finalidad */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Finalidad del tratamiento
              </h2>
              <ul className="ml-6 flex flex-col gap-2 text-[16px] leading-[1.7] text-muted-foreground list-disc">
                <li>Gestionar y responder las consultas realizadas a través del formulario de contacto.</li>
                <li>Enviar información comercial y comunicaciones relacionadas con nuestros servicios, siempre con consentimiento previo.</li>
                <li>Realizar análisis estadísticos del uso del sitio web para mejorar nuestros servicios.</li>
                <li>Cumplir con las obligaciones legales que nos sean de aplicación.</li>
              </ul>
            </section>

            {/* Legitimación */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Base legal del tratamiento
              </h2>
              <ul className="ml-6 flex flex-col gap-2 text-[16px] leading-[1.7] text-muted-foreground list-disc">
                <li><strong className="text-foreground">Consentimiento del interesado</strong> al completar el formulario de contacto (art. 6.1.a RGPD).</li>
                <li><strong className="text-foreground">Interés legítimo</strong> del responsable para la mejora continua del servicio (art. 6.1.f RGPD).</li>
                <li><strong className="text-foreground">Cumplimiento de obligaciones legales</strong> aplicables (art. 6.1.c RGPD).</li>
              </ul>
            </section>

            {/* Conservación */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Conservación de datos
              </h2>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                Los datos personales serán conservados mientras se mantenga la relación o durante los
                años necesarios para cumplir con las obligaciones legales. Cuando los datos dejen de ser
                necesarios para la finalidad para la que fueron recogidos, serán eliminados con las medidas
                de seguridad adecuadas para garantizar la seudonimización de los datos o su destrucción total.
              </p>
            </section>

            {/* Derechos del usuario */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Derechos del usuario
              </h2>
              <div className="flex flex-col gap-4 text-[16px] leading-[1.7] text-muted-foreground">
                <p>De conformidad con el RGPD y la LOPDGDD, el usuario puede ejercer los siguientes derechos:</p>
                <ul className="ml-6 flex flex-col gap-2 list-disc">
                  <li><strong className="text-foreground">Acceso:</strong> conocer qué datos personales estamos tratando.</li>
                  <li><strong className="text-foreground">Rectificación:</strong> modificar datos inexactos o incompletos.</li>
                  <li><strong className="text-foreground">Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                  <li><strong className="text-foreground">Oposición:</strong> oponerse al tratamiento de sus datos.</li>
                  <li><strong className="text-foreground">Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
                  <li><strong className="text-foreground">Limitación:</strong> solicitar la limitación del tratamiento en determinadas circunstancias.</li>
                </ul>
                <p>
                  Para ejercer estos derechos, puede dirigirse a [PENDIENTE] indicando el derecho que desea
                  ejercer y acompañando una copia de su documento de identidad.
                </p>
                <p>
                  Si considera que sus derechos no han sido debidamente atendidos, tiene derecho a presentar
                  una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su
                  sitio web:{" "}
                  <a
                    href="https://www.aepd.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    www.aepd.es
                  </a>
                </p>
              </div>
            </section>

            {/* Destinatarios */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Destinatarios de los datos
              </h2>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                Los datos personales no serán cedidos a terceros, salvo obligación legal. En caso de
                utilizar servicios de terceros para el funcionamiento del sitio web (hosting, analítica,
                email), estos prestadores actuarán como encargados del tratamiento y habrán suscrito
                los correspondientes acuerdos de confidencialidad y protección de datos.
              </p>
            </section>

            {/* Medidas de seguridad */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Medidas de seguridad
              </h2>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                The Last Dance ha adoptado las medidas técnicas y organizativas necesarias para garantizar
                la seguridad e integridad de los datos de carácter personal, así como para evitar su
                alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la
                tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
              </p>
            </section>

            {/* Última actualización */}
            <div className="border-t border-border pt-8">
              <p className="text-[13px] italic text-muted-foreground">
                Última actualización: febrero 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <LegalFooter />
    </div>
  )
}
