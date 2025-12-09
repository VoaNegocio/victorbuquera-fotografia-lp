import React, { useState, useRef } from 'react'
import { FaWhatsapp, FaComments, FaCamera, FaCheckCircle } from 'react-icons/fa'

const Process = () => {
  const whatsappUrl = 'https://wa.me/5517981080878?text=' + encodeURIComponent('Olá! Gostaria de agendar uma sessão fotográfica de autoridade.')

  const steps = [
    {
      number: '01',
      icon: FaWhatsapp,
      title: 'Agendamento via WhatsApp',
      description: 'Entre em contato e agende sua sessão. Respondemos rapidamente e alinhamos expectativas.',
      cta: 'Falar no WhatsApp'
    },
    {
      number: '02',
      icon: FaComments,
      title: 'Briefing Personalizado',
      description: 'Conversamos sobre suas necessidades, objetivos e estilo desejado. Criamos um plano personalizado para você.',
      cta: null
    },
    {
      number: '03',
      icon: FaCamera,
      title: 'Sessão Fotográfica',
      description: 'Experiência premium em ambiente profissional ou no local de sua escolha. Capturamos sua essência com técnica e sensibilidade.',
      cta: null
    },
    {
      number: '04',
      icon: FaCheckCircle,
      title: 'Entrega em 3 dias',
      description: 'Receba suas imagens editadas em alta resolução, prontas para uso em qualquer plataforma. Transparência e agilidade.',
      cta: null
    }
  ]

  // Estado para controlar o passo ativo
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)

  // Função para atualizar a bolinha ativa ao fazer scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const itemWidth = scrollRef.current.scrollWidth / steps.length
      const newIndex = Math.round(scrollLeft / itemWidth)
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }
  }

  return (
    <section className="pt-12 pb-12 md:pt-16 md:pb-20 bg-[#121212]">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="mb-12 md:mb-24">
          <p className="font-montserrat text-sm md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-2 font-light">
            PROCESSO
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white max-w-3xl leading-tight">
            Como Funciona: Simples, Rápido e Profissional
          </h2>
        </div>

        {/* Mobile: Container Wrapper */}
        <div className="md:hidden">
          {/* Scroll Horizontal */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory"
          >
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative flex-shrink-0 w-[85vw] max-w-sm snap-center">
                    {/* Número de fundo */}
                    <div className="absolute -top-4 -left-4 font-playfair text-6xl font-normal text-[#121212] opacity-50">
                      {step.number}
                    </div>
                    
                    <div className="relative bg-[#050505] border border-[#333333] p-6 h-full">
                      {/* Ícone */}
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-[#121212] border border-[#333333] rounded-sm flex items-center justify-center">
                          <Icon className="text-[#E0E0E0] text-xl" />
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <h3 className="font-playfair text-xl font-normal text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="font-montserrat text-base text-[#E0E0E0] font-light leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* CTA no primeiro passo */}
                      {step.cta && (
                        <a 
                          href={whatsappUrl}
                          className="group inline-flex items-center gap-2.5 border border-[#25D366]/30 hover:border-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 text-[#25D366] hover:text-[#20BA5A] px-5 py-3 rounded-sm transition-all duration-300 font-montserrat text-sm uppercase tracking-wider font-medium touch-manipulation min-h-[44px] active:scale-95"
                          style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                          <FaWhatsapp className="text-base transition-transform duration-300 group-hover:scale-110" />
                          <span>{step.cta}</span>
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* INDICADORES (BOLINHAS) - Exclusivo Mobile */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {steps.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-[#25D366]' // Ativo: mais largo e verde
                    : 'w-1.5 bg-[#333333]' // Inativo: bolinha cinza
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Número de fundo */}
                <div className="absolute -top-4 -left-4 font-playfair text-8xl md:text-9xl font-normal text-[#121212] opacity-50">
                  {step.number}
                </div>
                
                <div className="relative bg-[#050505] border border-[#333333] p-8 md:p-10 h-full">
                  {/* Ícone */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#121212] border border-[#333333] rounded-sm flex items-center justify-center">
                      <Icon className="text-[#E0E0E0] text-2xl" />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <h3 className="font-playfair text-xl md:text-2xl font-normal text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="font-montserrat text-sm md:text-base text-[#E0E0E0] font-light leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* CTA no primeiro passo */}
                  {step.cta && (
                    <a 
                      href={whatsappUrl}
                      className="group inline-flex items-center gap-2.5 border border-[#25D366]/30 hover:border-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 text-[#25D366] hover:text-[#20BA5A] px-6 py-3 rounded-sm transition-all duration-300 font-montserrat text-xs md:text-sm uppercase tracking-wider font-normal hover:shadow-[0_0_15px_rgba(37,211,102,0.2)]"
                    >
                      <FaWhatsapp className="text-base transition-transform duration-300 group-hover:scale-110" />
                      <span>{step.cta}</span>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process