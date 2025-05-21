import { Button } from "@/components/ui/button"
import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contato" className="py-10 md:py-16 lg:py-24 px-4 md:px-24 lg:px-24 xl:px-60 border-t border-border">
      <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto text-center">
        <h2>Contate-me</h2>

        <p className="text-center">
          Estou disponível para serviços e novas conexões. Contate-me via e-mail e conecte-se comigo através das minhas
          redes sociais.
        </p>

        <ul className="flex items-center gap-6 my-4">
          <li>
            <Link
              href="https://github.com/elidianaandrade"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={24} />
              <span>GitHub</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/elidianaandrade/"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={24} />
              <span>Instagram</span>
            </Link>
          </li>
        </ul>

        <Button
          asChild
          variant="outline"
          className="rounded-full border-primary text-primary hover:text-primary hover:bg-background hover:scale-105 transition-transform"
        >
          <Link href="mailto:elidianaandrade@outlook.com">
            <span className="lowercase">elidianaandrade@outlook.com</span>
          </Link>
        </Button>
      </div>
    </section>
  )
}
