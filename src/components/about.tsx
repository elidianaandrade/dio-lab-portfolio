import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Building, GraduationCap, Languages } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section id="sobre" className="py-10 md:py-16 lg:py-24 px-4 md:px-24 lg:px-24 xl:px-60">
      <div className="grid md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1.8fr] gap-8 md:gap-16">
        <Image
          src="/avatar.jpg"
          alt="Foto de Elidiana Andrade"
          width={400}
          height={400}
          className="rounded-full border border-border w-full aspect-square object-cover"
        />

        <div className="flex flex-col gap-6">
          <h2 className="text-left">Sobre mim</h2>

          <p>
            Elidiana Andrade. Apaixonada por artes e tecnologia, meu primeiro "Hello World" foi na pré-adolescência
            quando tive contato com HTML, CSS e um pouco de JavaScript e Notepad++. Atualmente curso especialização em
            Desenvolvimento de Software com Metodologias Ágeis e atuo como instrutora e desenvolvedora freelance.
          </p>

          <div className="flex items-center gap-3">
            <Languages className="text-muted-foreground" size={24} />
            <span>Inglês: Intermediário | Espanhol: Básico</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-primary text-primary hover:text-primary hover:bg-background hover:scale-105 transition-transform"
            >
              <Link
                href="https://www.linkedin.com/in/elidianaandrade/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <span className="uppercase">Conecte-se Comigo</span>
                <ArrowUpRight size={16} />
              </Link>
            </Button>

            <Button variant="ghost" className="rounded-full hover:scale-105 transition-transform">
              <span className="uppercase">Currículo</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-16">
        <div className="space-y-8">
          <div className="space-y-2">
            <h3>Formação</h3>
            <h4>Desenvolvimento de Software com Metodologia Ágil</h4>
            <p className="text-sm">Abr 2023 - Atualmente</p>

            <div className="flex items-center gap-3 mt-2">
              <Building className="text-muted-foreground" size={20} />
              <span>Universidade Salvador</span>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="text-muted-foreground" size={20} />
              <span>Pós-graduação Lato Sensu - Especialização</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3>Experiências</h3>
            <h4>Instrutora</h4>
            <p className="text-sm">Digital Innovation One. Fev 2023 - Atualmente</p>
            <p>
              Produção de conteúdos educacionais direcionados a alunos iniciantes que desejam construir uma base no
              Desenvolvimento Front-end.
            </p>

            <ul className="list-disc ml-5 mt-2">
              <li>Elaboração de ementas;</li>
              <li>Ministração de aulas assíncronas;</li>
              <li>Produção de materiais complementares.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3>Cursos</h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border border-border rounded-t-md">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-secondary">
                Versionamento de Código com Git e GitHub
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 border-t border-border">
                <p className="mb-2">Digital Innovation One. Fev 2023. 2h.</p>
                <p>
                  O que é versionamento de código, Git e GitHub. Como instalar e configurar o Git em diferentes sistemas
                  operacionais e como autenticar via Token e SSH. Como manusear repositórios, indo desde a criação e
                  clonagem até o gerenciamento de branches, passando por todas as etapas de salvar, desfazer e
                  sincronizar alterações com o repositório remoto.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-x border-border">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-secondary">
                Contribuindo em um Projeto Open Source no GitHub
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 border-t border-border">
                <p className="mb-2">Digital Innovation One. Fev 2023. 1h.</p>
                <p>Lab prático sobre colaboração em projetos de código aberto.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-b-md">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-secondary">
                Organizando seus Estudos com os Roadmaps DIO e o Notion
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 border-t border-border">
                <p className="mb-2">Digital Innovation One. Fev 2023. 2h.</p>
                <p>
                  Otimização dos estudos com os Roadmaps DIO, construindo um caderno de estudos com a ferramenta Notion.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
