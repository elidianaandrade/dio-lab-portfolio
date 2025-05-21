import Image from "next/image"

export default function Technologies() {
  const technologies = [
    { name: "Angular", logo: "/technologies/Angular.svg" },
    { name: "TypeScript", logo: "/technologies/TypeScript.svg" },
    { name: "Bootstrap", logo: "/technologies/Bootstrap.svg" },
    { name: "SASS", logo: "/technologies/SASS.svg" },
  ]

  return (
    <section className="bg-secondary py-10 md:py-16 lg:py-24 px-4 md:px-24 lg:px-24 xl:px-60 -mt-16 md:-mt-20 lg:-mt-24">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5">
        <h2 className="text-center lg:text-left lg:w-1/2 normal-case tracking-normal">
          Conhecimento nas principais tecnologias do mercado
        </h2>

        <ul className="flex flex-wrap gap-2 md:gap-4">
          {technologies.map((tech, index) => (
            <li key={index} className="technologies-item">
              <Image
                src={tech.logo || "/placeholder.svg"}
                alt={`Logo ${tech.name}`}
                width={48}
                height={48}
                className="technologies-logo"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
