"use client"

import { Github, Linkedin, Instagram, Dribbble, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-24 md:pt-0">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-3 md:mb-4">
                Yago Cabral
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium">
                Full-Stack Developer
              </p>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Crio experiências digitais elegantes e funcionais, 
              transformando ideias em código.
            </p>

            {/* Navigation Links - Hidden on mobile since navbar has these */}
            <nav className="hidden md:block space-y-3 pt-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                <Link href="#sobre" className="text-sm uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  Sobre
                </Link>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                <Link href="#experiencia" className="text-sm uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  Experiencia
                </Link>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                <Link href="#projetos" className="text-sm uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  Projetos
                </Link>
              </div>
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-4 md:pt-8">
              <Link
                href="https://github.com/yagorodrigues-bit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yago-kabraw-b764581b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Dribbble"
              >
                <Dribbble className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:yagorodriguescabral@email.com"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
  <div className="space-y-4 md:space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed">
    
    <p>
      Sou estudante de Engenharia de Software, com foco em desenvolvimento web e em criar 
      aplicações bem estruturadas, funcionais e acessíveis. Tenho interesse em unir lógica, 
      organização e boa experiência do usuário na construção de interfaces.
    </p>

    <p>
      Atualmente, estou focando em{" "}
      <span className="text-primary font-medium">desenvolvimento full-stack com React</span>, 
      trabalhando com componentização, consumo de APIs e boas práticas de organização de código, 
      sempre buscando evoluir tecnicamente.
    </p>

    <p>
      Além do desenvolvimento, tenho grande interesse por{" "}
      <span className="text-foreground font-medium">segurança cibernética</span>,{" "}
      <span className="text-foreground font-medium">computação forense</span> e{" "}
      <span className="text-foreground font-medium">segurança digital</span>, 
      áreas que venho estudando paralelamente por meio de conteúdos teóricos, projetos e análises.
    </p>

    <p>
      No meu tempo livre, gosto de estudar novas tecnologias, aprofundar meus conhecimentos em 
      React, explorar conceitos de segurança da informação e entender como sistemas podem ser 
      desenvolvidos de forma mais segura e confiável.
    </p>

  </div>
</div>

        </div>
      </div>
    </section>
  )
}
