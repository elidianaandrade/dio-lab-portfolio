import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter, League_Spartan } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: ["200", "400"],
})

export const metadata: Metadata = {
  title: "Elidiana Andrade | Portfolio",
  description:
    "Portfólio da desenvolvedora front-end Elidiana Andrade para compartilhar projetos e habilidades desenvolvidas.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.variable} ${leagueSpartan.variable} font-sans bg-background text-muted-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
