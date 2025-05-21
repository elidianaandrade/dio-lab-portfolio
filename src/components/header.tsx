"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [activeLink, setActiveLink] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed w-full flex flex-row flex-wrap justify-between items-center px-4 py-2 md:px-24 md:py-4 border-b border-border bg-background z-10">
      <nav className="hidden md:flex min-w-[30%]">
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="#home"
              className={`menu-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleLinkClick("home")}
            >
              <span className="menu-text">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="#projetos"
              className={`menu-link ${activeLink === "projetos" ? "active" : ""}`}
              onClick={() => handleLinkClick("projetos")}
            >
              <span className="menu-text">Projetos</span>
            </Link>
          </li>
          <li>
            <Link
              href="#sobre"
              className={`menu-link ${activeLink === "sobre" ? "active" : ""}`}
              onClick={() => handleLinkClick("sobre")}
            >
              <span className="menu-text">Sobre</span>
            </Link>
          </li>
          <li>
            <Link
              href="#contato"
              className={`menu-link ${activeLink === "contato" ? "active" : ""}`}
              onClick={() => handleLinkClick("contato")}
            >
              <span className="menu-text">Contato</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <Link href="#home">
          <Image
            src="/logo-ea.png"
            alt="Logo EA"
            width={52}
            height={52}
            className="dark:invert-0 invert"
          />
        </Link>
      </div>
      <div className="flex justify-end min-w-[30%]">
        {mounted && (
          <button onClick={toggleTheme} className="text-foreground text-2xl">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        )}
      </div>
    </header>
  )
}
