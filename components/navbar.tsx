"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Sobre", href: "#sobre" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Fecha o menu ao rolar, como solicitado anteriormente
      if (isMobileMenuOpen) setIsMobileMenuOpen(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    // Bloqueia o scroll do corpo quando o menu está aberto para evitar esse glitch visual
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between relative z-50">
        <Link 
          href="/" 
          className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300"
        >
          yago.
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://lattes.cnpq.br/3098744671482036"
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors duration-300"
          >
            CV
          </Link>
        </div>
        
        <button
          type="button"
          className="md:hidden text-foreground p-2 -mr-2 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className={`md:hidden fixed inset-0 h-screen w-screen bg-background transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://lattes.cnpq.br/3098744671482036"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors duration-300"
          >
            CV
          </Link>
        </div>
      </div>
    </header>
  )
}