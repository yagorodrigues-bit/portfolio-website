"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Sistema de Gestão da Jornada Pedagógica",
    description: "Sistema desenvolvido para a Jornada Pedagógica 2026 de Concórdia do Pará (SEMED), com as seguintes funcionalidades: gerenciamento de inscrições, check-in presencial e controle de frequência via leitura de código de barras. Construído utilizando as tecnologias Node.js, React e Supabase.",
    image: "/Pj_jornadaPedagogica.png",
    tech: ["Node.js", "React", "Supabase"],
    github: "#",
    live: "#"
  },
  {
    title: "Projeto CineIntel",
    description: "O CineIntel é uma aplicação web desenvolvida com Next.js, voltada para a consulta de filmes por meio do consumo da API pública do The Movie Database (TMDB).",
    image: "/cineintel.png",
    tech: ["React", "Next.js", "UI", "APIs", "TypeScript", "JavaScript"],
    github: "https://github.com/yagorodrigues-bit/cine-intel?tab=readme-ov-file",
    live: "https://github.com/yagorodrigues-bit/cine-intel?tab=readme-ov-file"
  },
  {
    title: "EP Contabilidade",
    description: "Website desenvolvido para a EP Contabilidade com foco estratégico na captura de leads e conversão de clientes potenciais. O projeto conta com as seguintes funcionalidades: interface otimizada para conversão, integração de chatbot para atendimento automatizado via Botpress e campanhas direcionadas via Google Ads. Construído utilizando as tecnologias HTML, CSS, JavaScript e Botpress.",
    image: "/EPcontabilidade.png",
    tech: ["HTML", "CSS", "JS","API", "Botpress", "Google Ads"],
    // github: "#",
    live: "https://www.epcontabilidadeonline.com"
  },
  {
    title: "Portfolio v1",
    description: "Versão anterior deste portfólio. Um marco inicial que documenta meu progresso e fundamentos em design e código.",
    image: "/ste_portifolio.png?height=400&width=600",
    tech: ["HTML5", "CSS3", "Botpress"],
    github: "https://github.com/yagorodrigues-bit/Portif-lio-Yago-Kbraw",
    live: "https://yagorodrigues-bit.github.io/Portif-lio-Yago-Kbraw/"
  }
]

export function Projects() {
  // Estado para controlar a exibição de todos os projetos
  const [showAll, setShowAll] = useState(false)

  // Define quais projetos serão renderizados (apenas 3 ou todos)
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projetos" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-2 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projetos em Destaque
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>
        
        <div className="space-y-8">
          {displayedProjects.map((project, index) => (
            <Link
              key={project.title}
              href={project.live}
              className="group block"
            >
              <article className="relative grid md:grid-cols-2 gap-6 p-6 rounded-2xl hover:bg-card/80 transition-all duration-300">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image */}
                <div className={`relative aspect-video rounded-xl overflow-hidden bg-secondary ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className={`relative flex flex-col justify-center space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(project.github, "_blank")
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Ver no GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(project.live, "_blank")
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Ver projeto ao vivo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Botão Ver Mais / Ver Menos */}
        {projects.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-3 bg-card hover:bg-primary/10 text-foreground font-medium rounded-full border border-border transition-all duration-300"
            >
              {showAll ? (
                <>
                  Ver menos <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  Ver mais projetos <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
