import type { Metadata } from "next"
import { LegalHeader } from "@/components/legal-header"
import { LegalFooter } from "@/components/legal-footer"

export const metadata: Metadata = {
  title: "Aviso Legal | The Last Dance",
  description: "Aviso legal de The Last Dance Human Impact Lab S.L.",
}

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen">
      <LegalHeader />
      <main className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-4 text-[12px] uppercase tracking-[0.3em] text-muted-foreground">
            Legal
          </p>
          <h1 className="mb-12 font-serif text-[36px] leading-[1.1] md:text-[48px]">
            Aviso Legal
          </h1>

          <div className="flex flex-col gap-12">
            {/* Identificación */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Datos identificativos
              </h2>
              <div className="flex flex-col gap-3 text-[16px] leading-[1.7] text-muted-foreground">
                <p><strong className="text-foreground">Titular:</strong> The Last Dance Human Impact Lab S.L.</p>
                <p><strong className="text-foreground">CIF:</strong> [PENDIENTE]</p>
                <p><strong className="text-foreground">Domicilio Social:</strong> [PENDIENTE]</p>
                <p><strong className="text-foreground">Email:</strong> [PENDIENTE]</p>
                <p><strong className="text-foreground">Registro Mercantil:</strong> [PENDIENTE]</p>
              </div>
            </section>

            {/* Objeto */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Objeto social
              </h2>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                The Last Dance Human Impact Lab S.L. (en adelante, "The Last Dance") es una empresa
                dedicada al acompañamiento estratégico, consultoría relacional e impulso de conexiones
                de valor para empresas, instituciones y líderes. A través de este sitio web, The Last Dance
                ofrece información sobre sus servicios profesionales y facilita el contacto con potenciales
                clientes y colaboradores.
              </p>
            </section>

            {/* Condiciones de uso */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Condiciones de uso
              </h2>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                El acceso al sitio web atribuye la condición de usuario e implica la aceptación plena y sin
                reservas de todas las disposiciones incluidas en este Aviso Legal. El usuario se compromete
                a hacer un uso adecuado de los contenidos y servicios que The Last Dance ofrece a través
                de su sitio web, absteniéndose de emplearlos para actividades ilícitas o que contravengan
                la buena fe, el ordenamiento legal vigente o las presentes condiciones.
              </p>
            </section>

            {/* Propiedad intelectual */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Propiedad intelectual y derechos de autor
              </h2>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                Todos los contenidos del sitio web, incluyendo sin limitación textos, fotografías,
                gráficos, imágenes, logotipos, iconos, tecnología, software, enlaces y demás contenidos
                audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad
                intelectual de The Last Dance o de terceros, sin que puedan entenderse cedidos al usuario
                ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de
                propiedad intelectual. Las marcas, nombres comerciales o signos distintivos son titularidad
                de The Last Dance, sin que el acceso al sitio web pueda entenderse como atribución de
                derecho alguno sobre los mismos.
              </p>
            </section>

            {/* Responsabilidad */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Exclusión de responsabilidad
              </h2>
              <div className="flex flex-col gap-4 text-[16px] leading-[1.7] text-muted-foreground">
                <p>
                  The Last Dance no se hace responsable de los daños y perjuicios de toda naturaleza que
                  pudieran derivarse de la falta de disponibilidad o continuidad del funcionamiento del sitio
                  web, ni de la utilidad que los usuarios hubieran podido atribuir a la información y contenidos
                  de la página.
                </p>
                <p>
                  The Last Dance procurará mantener la información contenida en su web actualizada, pero no
                  garantiza que la información sea exacta, completa o actualizada en todo momento. En
                  consecuencia, el usuario deberá confirmar la información ofrecida.
                </p>
              </div>
            </section>

            {/* Enlaces externos */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Enlaces externos
              </h2>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                El sitio web puede contener enlaces a sitios de terceros. The Last Dance no asume ninguna
                responsabilidad por el contenido, informaciones o servicios que pudieran aparecer en dichos
                sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican
                relación alguna entre The Last Dance y las personas o entidades titulares de tales contenidos.
              </p>
            </section>

            {/* Legislación aplicable */}
            <section>
              <h2 className="mb-6 font-serif text-[24px] leading-[1.2] md:text-[28px]">
                Legislación aplicable y jurisdicción
              </h2>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                Las presentes condiciones se rigen por la legislación española. Para la resolución de
                cualquier controversia que pudiera surgir en relación con el acceso al sitio web, el usuario
                y The Last Dance acuerdan someterse a los Juzgados y Tribunales del domicilio social de
                la empresa, salvo que la normativa aplicable establezca un fuero diferente.
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
