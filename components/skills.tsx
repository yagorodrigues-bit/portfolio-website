"use client"

const skills = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "React", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "MySQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Design" },
  { name: "HTML5", category: "Web" },
  { name: "CSS3", category: "Web" },
  { name: "REST APIs", category: "Backend" },
]

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 md:px-12 lg:px-20 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Stack Tecnologica
          </h2>
          <p className="text-muted-foreground">
            Tecnologias que uso para dar vida aos projetos
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="group relative px-5 py-3 bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
