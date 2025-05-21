import { Button } from "@/components/ui/button"
import { ArrowDownRight, Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <main id="home" className="pt-24 md:pt-32 lg:pt-48 px-4 md:px-24 lg:px-24 xl:px-60 pb-10 md:pb-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-6">
          <h1>
            <span className="font-normal">Soluções Criativas &</span> Desenvolvimento Front-end
          </h1>
          <p>Elidiana Andrade, Salvador-BA, Desenvolvedora e Instrutora Front-end.</p>

          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="https://github.com/elidianaandrade"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={24} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/elidianaandrade/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={24} />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={24} />
              </Link>
            </li>
          </ul>

          <div>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-primary text-primary hover:text-primary hover:bg-background hover:scale-105 transition-transform"
            >
              <Link href="#projetos" className="flex items-center gap-2">
                <span className="uppercase">Ver Projetos</span>
                <ArrowDownRight size={16} />
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/HXKz2-Sohfo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </main>
  )
}
