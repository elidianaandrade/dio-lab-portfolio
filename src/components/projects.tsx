import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  title: string
  description: string
  cover: string
  features: string[]
  technologies: string[]
  reverse?: boolean
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Josi's Box Ecommerce",
      description: "Ecommerce de Livros",
      cover: "/projects/josisbox.jpg",
      features: ["Listagem de favoritos;", "Carrinho de compras;", "Filtragem por preço e categoria."],
      technologies: ["Angular", "TypeScript", "Bootstrap", "SASS"],
    },
    {
      title: "Archstil Blog",
      description: "A história por trás dos Estilos Arquitetônicos.",
      cover: "/projects/archstil.jpg",
      features: ["Postagens relacionadas e em destaque;", "Filtragem por tags e categorias;", "Biografia do autor."],
      technologies: ["Angular", "TypeScript", "Bootstrap", "SASS"],
      reverse: true,
    },
    {
      title: "Games Store",
      description: "Loja online de Games.",
      cover: "/projects/games-store.jpg",
      features: ["Listagem de favoritos;", "Carrinho de compras;", "Filtragem por preço e categoria."],
      technologies: ["Angular", "TypeScript", "Bootstrap", "SASS"],
    },
  ]

  return (
    <section id="projetos" className="py-10 md:py-16 lg:py-24 px-4 md:px-24 lg:px-24 xl:px-60">
      <h2 className="mb-8 md:mb-12">Projetos</h2>

      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col ${project.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8`}>
            <Image
              src={project.cover || "/placeholder.svg"}
              alt={`Capa ${project.title}`}
              width={800}
              height={600}
              className="rounded-lg object-cover lg:w-1/2"
            />

            <div className="flex flex-col gap-4 lg:w-1/2">
              <h3 className="text-foreground">{project.title}</h3>
              <p className="text-foreground">{project.description}</p>

              <ul className="list-disc ml-5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-3 my-2">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="technologies-item w-10 h-10 md:w-12 md:h-12">
                    <Image
                      src={`/technologies/${tech}.svg`}
                      alt={`Logo ${tech}`}
                      width={32}
                      height={32}
                      className="h-5 md:h-6 technologies-logo"
                    />
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:text-primary hover:bg-background hover:scale-105 transition-transform"
                >
                  <span className="uppercase">Prévia</span>
                  <ArrowUpRight size={16} className="ml-2" />
                </Button>

                <Button variant="ghost" className="rounded-full hover:scale-105 transition-transform">
                  <span className="uppercase">Repositório</span>
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center mt-8">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary text-primary hover:text-primary hover:bg-background hover:scale-105 transition-transform"
          >
            <Link href="https://github.com/elidianaandrade" className="flex items-center gap-2">
              <span className="uppercase">Ver Todos os Projetos</span>
              <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
