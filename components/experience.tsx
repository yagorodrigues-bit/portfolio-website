"use client"

const experiences = [
  {
    period: "2023 - Presente",
    role: "Desenvolvedor Full-Stack",
    company: "CVTec",
    companyUrl: "https://lattes.cnpq.br/3098744671482036",
    description: "Atuação no desenvolvimento de sistemas corporativos de alta disponibilidade, utilizando tecnologias modernas para criar interfaces responsivas e APIs escaláveis. Foco em metodologias ágeis, arquitetura de software e entrega de código limpo em ambientes de produção.",
    skills: ["React", "TypeScript", "Next.js", "MySQL"]
  },
  {
    period: "2023 - 2024",
    role: "Desenvolvedor Freelancer",
    company: "EP Contabilidade",
    companyUrl: "https://www.epcontabilidadeonline.com/",
    description: "Criação de plataforma web estratégica para captação de clientes e automação de atendimento. O projeto integra landing pages de alta conversão, gestão de tráfego via Google Ads e assistente virtual inteligente para qualificação de leads.",
    skills: ["APIs", "JS", "Google Ads", "Botpress"]
  },
  {
    period: "2023 - Presente",
    role: "Engenharia de Software",
    company: "Graduação (Bacharelado)",
    companyUrl: "#",
    description: "Formação focada em arquitetura de sistemas, engenharia de requisitos e metodologias ágeis. Aplicação prática de algoritmos e estruturas de dados em projetos full-stack, com ênfase em soluções escaláveis e boas práticas de desenvolvimento.",
    skills: ["Engenharia de Requisitos", "Arquitetura", "Banco de Dados", "Algoritmos"]
  }
]

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experiencia
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative grid md:grid-cols-[140px_1fr] gap-4 md:gap-8 p-6 rounded-2xl hover:bg-card/80 transition-all duration-300"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <span className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </span>
              </div>
              
              <div className="relative space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                    <span className="text-primary"> · </span>
                    <a 
                      href={exp.companyUrl}
                      className="hover:underline underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
