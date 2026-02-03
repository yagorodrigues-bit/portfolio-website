import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/yagorodrigues-bit"
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
              href="mailto:yagorodriguescabral@email.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-muted-foreground text-sm">
            Feito por <span className="text-foreground">Yago Cabral</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
