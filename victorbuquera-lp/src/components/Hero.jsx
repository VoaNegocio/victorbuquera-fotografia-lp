import React from 'react'
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const whatsappUrl = 'https://wa.me/5517981080878?text=' + encodeURIComponent('Olá! Vi seu site e gostaria de agendar uma sessão fotográfica de autoridade.')

  return (
    // VOLTEI para 'items-center' para centralizar o bloco na tela
    // Adicionei 'md:items-center' para garantir o comportamento no desktop também
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-0">
      {/* Hero Image - Foto do Victor */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-[#050505] via-[#121212] to-[#050505]">
          <div className="w-full h-full relative">
            {/* Imagem Mobile */}
            <img
              src="/fotos/victor-mobilehero2.jpg" 
              alt="Victor Buquera - Fotógrafo Profissional"
              className="md:hidden w-full h-full object-cover object-right opacity-30 grayscale contrast-125"
            />
            {/* Imagem Desktop */}
            <img 
              src="/fotos/victorbuquera-hero.png" 
              alt="Victor Buquera - Fotógrafo Profissional"
              className="hidden md:block w-full h-full object-cover opacity-30 grayscale contrast-125"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]/80 md:bg-gradient-to-b md:from-[#050505]/80 md:via-[#050505]/60 md:to-[#050505]/80"></div>
            <div className="absolute inset-0 bg-[#050505]/40 md:hidden"></div>
          </div>
        </div>
      </div>

      {/* VERSÃO MOBILE - Layout "Espalhado" */}
      {/* 1. min-h-screen: Garante que a div tenha altura para distribuir os itens
         2. flex flex-col justify-center: Centraliza verticalmente
         3. pt-20: Compensa a altura do Header fixo para o centro visual ficar correto
      */}
      <div className="md:hidden relative z-10 w-full px-5 pt-20 pb-12 flex flex-col justify-center min-h-screen">
        <div className="text-center">
          
          {/* Badge de Prova Social - Aumentei mb-8 para mb-10 */}
          <div className="mb-10">
            <span className="inline-block px-5 py-2.5 bg-[#121212]/80 backdrop-blur-sm border border-[#333333] text-white font-montserrat text-xs uppercase tracking-wider font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              50+ Executivos Fotografados
            </span>
          </div>

          {/* Badge/Rótulo - Aumentei mb-4 para mb-8 */}
          <p className="font-montserrat text-xs text-white uppercase tracking-[0.2em] font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-8">
            FOTOGRAFIA PROFISSIONAL
          </p>

          {/* Título principal - Aumentei mb-6 para mb-10 e ajustei leading */}
          <h1 className="font-playfair text-3xl font-normal text-white leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] px-1 mb-10">
            Aumente sua Autoridade Profissional com Retratos que Vendem
          </h1>
          
          {/* Texto de apoio - Aumentei mb-8 para mb-12 */}
          <p className="font-montserrat text-base text-white leading-loose px-2 font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-12 opacity-90">
            Fotografia de autoridade para líderes e empresas que valorizam excelência e resultados.
          </p>

          {/* CTA Principal */}
          <div className="mb-8">
            <a 
              href={whatsappUrl}
              className="whatsapp-premium group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] text-white px-8 py-5 rounded-sm font-montserrat text-base uppercase tracking-wider font-medium transition-all duration-200 active:scale-95 w-full touch-manipulation shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <FaWhatsapp className="text-2xl" />
              <span>Agendar Sessão</span>
            </a>
          </div>
        </div>
      </div>

      {/* ANIMAÇÃO DE SETA - Mantida no fundo */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center md:hidden">
        <FaChevronDown className="text-white/70 text-2xl animate-bounce" />
      </div>

      {/* VERSÃO DESKTOP - Mantida inalterada */}
      <div className="hidden md:block relative z-10 container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-left max-w-2xl">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-[#121212] border border-[#333333] text-[#E0E0E0] font-montserrat text-sm uppercase tracking-wider font-light">
              50+ Executivos Fotografados
            </span>
          </div>

          <p className="font-montserrat text-xs md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-4 font-light">
            FOTOGRAFIA PROFISSIONAL
          </p>
          
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight">
            Aumente sua Autoridade Profissional com Retratos que Vendem
          </h1>
          
          <p className="font-montserrat text-base md:text-lg text-[#E0E0E0] mb-8 font-light leading-relaxed">
            Fotografia de autoridade para líderes e empresas que valorizam excelência. Imagens que destacam sua expertise e geram mais oportunidades de negócio.
          </p>
          
          <div>
            <a 
              href={whatsappUrl}
              className="whatsapp-premium group flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] text-white px-8 py-4 font-montserrat text-sm uppercase tracking-wider font-normal rounded-sm transition-all duration-300 transform hover:scale-105"
            >
              <FaWhatsapp className="text-lg" />
              <span>Agendar Sessão</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero