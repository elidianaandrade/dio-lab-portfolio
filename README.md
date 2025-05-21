# Portfólio Front-end Refatorado com Next.js 15 e Tailwind CSS v4

[![DIO](https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png)](https://www.dio.me/)  
**Portfólio Front-end Refatorado**

Repositório desenvolvido a partir do lab **Construindo seu Portfólio Front-end do Zero** da [Digital Innovation One](https://www.dio.me/), refatorado por Lucas Gomes utilizando tecnologias modernas.

[![Link do Lab](https://img.shields.io/badge/▶-000?style=for-the-badge&logo=movie&logoColor=E94D5F)](https://web.dio.me/lab/construindo-seu-portfolio-front-end-do-zero/learning/81cbe4c1-6e9e-4ce3-be7d-412aef4efb24) 
[![Acesse o Lab na Plataforma](https://img.shields.io/badge/Acesse%20o%20Lab%20na%20Plataforma-E94D5F?style=for-the-badge)](https://web.dio.me/lab/construindo-seu-portfolio-front-end-do-zero/learning/81cbe4c1-6e9e-4ce3-be7d-412aef4efb24)

## Sobre a Refatoração

Este projeto é uma refatoração completa do portfólio original desenvolvido por [Elidiana Andrade](https://github.com/elidianaandrade). A refatoração foi realizada por Lucas Gomes, transformando o site original (construído com HTML, CSS e JavaScript) em uma aplicação moderna utilizando Next.js 15, Tailwind CSS v4 e componentes shadcn/ui.

## Tecnologias Utilizadas na Refatoração

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-000?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8) ![TypeScript](https://img.shields.io/badge/TypeScript-000?style=for-the-badge&logo=typescript&logoColor=3178C6) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?style=for-the-badge&logo=shadcnui&logoColor=white)  

## Melhorias Implementadas

- **Arquitetura Moderna**: Migração para o Next.js 15 com App Router
- **Estilização Avançada**: Implementação do Tailwind CSS v4 com tema claro/escuro
- **Componentes Reutilizáveis**: Utilização da biblioteca shadcn/ui
- **Tipagem Segura**: Adição de TypeScript para maior segurança e manutenibilidade
- **Responsividade Aprimorada**: Layout totalmente responsivo para todos os dispositivos
- **Acessibilidade**: Melhorias de acessibilidade seguindo as melhores práticas
- **Performance**: Otimizações de carregamento e renderização

## Estrutura do Projeto


O projeto foi reorganizado seguindo as melhores práticas do Next.js 15:

```
├── app/                  # Diretório principal do App Router
│   ├── layout.tsx        # Layout principal da aplicação
│   ├── page.tsx          # Página inicial
│   └── globals.css       # Estilos globais com Tailwind
├── components/           # Componentes reutilizáveis
│   ├── header.tsx        # Cabeçalho com navegação
│   ├── hero.tsx          # Seção principal
│   ├── projects.tsx      # Seção de projetos
│   ├── about.tsx         # Seção sobre
│   ├── contact.tsx       # Seção de contato
│   ├── footer.tsx        # Rodapé
│   └── ui/               # Componentes shadcn/ui
├── public/               # Arquivos estáticos
└── tailwind.config.ts    # Configuração do Tailwind CSS
```

## Como Executar o Projeto

1. Clone o repositório  
2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## Implantação

Este projeto pode ser facilmente implantado em plataformas como Vercel, Netlify ou GitHub Pages.

## Créditos

- **Design Original**: [Elidiana Andrade](https://github.com/elidianaandrade)
- **Refatoração**: Lucas Gomes
- **Lab Original**: [Digital Innovation One](https://www.dio.me/)

##
<div align="center">
  Projeto original por <a href="https://github.com/elidianaandrade">Elidiana Andrade</a> | 
  Refatorado com 💙 por Lucas Gomes
</div>
