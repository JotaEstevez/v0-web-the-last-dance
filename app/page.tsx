import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services, ServicesAfterIA } from "@/components/services"
import { AiService } from "@/components/ai-service"
import { Clients } from "@/components/clients"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Page() {
  return (
    <main>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <AiService />
      <ServicesAfterIA />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}
