"use client"

import { Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contato" className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-6 mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Contato
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Vamos criar algo incrivel juntos?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias criativas ou 
            oportunidades de fazer parte da sua visao.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:yagorodriguescabral@email.com"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Enviar Email
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="https://wa.me/5591991186294"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300"
          >
            WhatsApp
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm font-mono">
            yagorodriguescabral@email.com
          </p>
        </div>
      </div>
    </section>
  )
}
