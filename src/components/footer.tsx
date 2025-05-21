import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-4 px-4 md:px-24 lg:px-24 xl:px-60 md:mb-0 mb-16">
      <p className="text-center text-sm">
        © {new Date().getFullYear()}. Portfólio desenvolvido para fins educativos no Lab "Construindo seu Portfolio
        Front-end do Zero" da
        <Link href="https://www.dio.me/" target="_blank" className="hover:text-foreground transition-colors">
          {" "}
          Digital Innovation One
        </Link>{" "}
        por
        <Link
          href="https://github.com/elidianaandrade"
          target="_blank"
          className="hover:text-foreground transition-colors"
        >
          {" "}
          Elidiana Andrade
        </Link>
        .
      </p>
    </footer>
  )
}
