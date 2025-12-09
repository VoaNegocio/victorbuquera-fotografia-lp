import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const whatsappUrl = 'https://wa.me/5517981080878?text=' + encodeURIComponent('Olá! Gostaria de mais informações sobre seus serviços de fotografia de autoridade.')

  return (
    <footer className="py-20 md:py-32 border-t border-[#333333] bg-[#050505]">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Coluna 1: Branding */}
          <div>
            <h3 className="font-playfair text-2xl md:text-3xl font-normal text-white tracking-[0.1em] uppercase mb-6">
              VICTOR BUQUERA
            </h3>
            <p className="font-montserrat text-sm md:text-base text-[#E0E0E0] font-light leading-relaxed mb-6">
              Fotografia de autoridade para líderes e empresas que valorizam excelência e resultados.
            </p>
            {/* WhatsApp */}
            <div className="flex gap-4">
              <a 
                href={whatsappUrl}
                className="w-12 h-12 border border-[#25D366] rounded-sm flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <p className="font-montserrat text-xs md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-6 font-light">
              NAVEGAÇÃO
            </p>
            <nav className="flex flex-col gap-4">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="font-montserrat text-sm text-[#E0E0E0] hover:text-white transition-colors font-light"
              >
                Início
              </a>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('social-proof')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-montserrat text-sm text-[#E0E0E0] hover:text-white transition-colors font-light"
              >
                Portfólio
              </a>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-montserrat text-sm text-[#E0E0E0] hover:text-white transition-colors font-light"
              >
                Benefícios
              </a>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-montserrat text-sm text-[#E0E0E0] hover:text-white transition-colors font-light"
              >
                Sobre
              </a>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <p className="font-montserrat text-xs md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-6 font-light">
              CONTATO
            </p>
            <div className="flex flex-col gap-4">
              <a 
                href={whatsappUrl}
                className="font-montserrat text-sm text-[#E0E0E0] hover:text-[#25D366] transition-colors font-light flex items-center gap-2"
              >
                <FaWhatsapp className="text-[#25D366]" />
                <span>WhatsApp: (17) 98108-0878</span>
              </a>
              <p className="font-montserrat text-sm text-[#E0E0E0] font-light">
                Barretos, SP - Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-[#333333] pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-montserrat text-xs text-[#666666] font-light text-center md:text-left">
              © {new Date().getFullYear()} Victor Buquera Photography. Todos os direitos reservados.
            </p>
            <p className="font-montserrat text-xs text-[#666666] font-light text-center md:text-right">
              Landing Page made by <span className="text-[#E0E0E0]">Voa Negocio</span> e <span className="text-[#E0E0E0]">Victor</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
