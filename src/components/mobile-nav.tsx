"use client"

import { Home, Layers, Mail, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MobileNav() {
  const [activeLink, setActiveLink] = useState("home")

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
  }

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-10">
      <ul className="flex justify-between items-center w-full bg-background border-t border-border">
        <li className="w-full">
          <Link
            href="#home"
            className={`menu-link flex-col justify-center py-2 px-4 ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            <Home className={`menu-icon ${activeLink === "home" ? "text-foreground" : "text-muted-foreground"}`} />
            <span className={`menu-text ${activeLink === "home" ? "text-foreground" : "text-muted-foreground"}`}>
              Home
            </span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="#projetos"
            className={`menu-link flex-col justify-center py-2 px-4 ${activeLink === "projetos" ? "active" : ""}`}
            onClick={() => handleLinkClick("projetos")}
          >
            <Layers
              className={`menu-icon ${activeLink === "projetos" ? "text-foreground" : "text-muted-foreground"}`}
            />
            <span className={`menu-text ${activeLink === "projetos" ? "text-foreground" : "text-muted-foreground"}`}>
              Projetos
            </span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="#sobre"
            className={`menu-link flex-col justify-center py-2 px-4 ${activeLink === "sobre" ? "active" : ""}`}
            onClick={() => handleLinkClick("sobre")}
          >
            <User className={`menu-icon ${activeLink === "sobre" ? "text-foreground" : "text-muted-foreground"}`} />
            <span className={`menu-text ${activeLink === "sobre" ? "text-foreground" : "text-muted-foreground"}`}>
              Sobre
            </span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            href="#contato"
            className={`menu-link flex-col justify-center py-2 px-4 ${activeLink === "contato" ? "active" : ""}`}
            onClick={() => handleLinkClick("contato")}
          >
            <Mail className={`menu-icon ${activeLink === "contato" ? "text-foreground" : "text-muted-foreground"}`} />
            <span className={`menu-text ${activeLink === "contato" ? "text-foreground" : "text-muted-foreground"}`}>
              Contato
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
