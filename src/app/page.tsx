import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import MobileNav from "@/components/mobile-nav"
import Projects from "@/components/projects"
import Technologies from "@/components/technologies"

export default function Home() {
  return (
    <>
      <Header />
      <MobileNav />
      <Hero />
      <Technologies />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}