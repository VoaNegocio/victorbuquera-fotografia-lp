import React, { useState, useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Benefits = () => {
  const whatsappUrl = 'https://wa.me/5517981080878?text=' + encodeURIComponent('Olá! Gostaria de mais informações sobre como posso aumentar minha autoridade profissional com fotografia de autoridade.')

  const benefits = [
    {
      label: 'AUTORIDADE PROFISSIONAL',
      title: 'Aumente sua Autoridade Profissional',
      description: 'Imagens que transmitem confiança e expertise. Destaque-se no LinkedIn, site profissional e materiais de comunicação com retratos que vendem sua competência.',
      gain: 'Mais oportunidades de negócio e maior credibilidade perante clientes e parceiros.'
    },
    {
      label: 'BRANDING PESSOAL',
      title: 'Crie uma Identidade Visual Poderosa',
      description: 'Desenvolvimento de identidade visual através de imagens que refletem sua essência profissional. Construa uma presença digital coesa e memorável.',
      gain: 'Reconhecimento imediato da sua marca pessoal e diferenciação no mercado.'
    },
    {
      label: 'EVENTOS PROFISSIONAIS',
      title: 'Documente Momentos Estratégicos com Olhar Editorial',
      description: 'Cobertura elegante de eventos profissionais, capturando momentos estratégicos que reforçam a imagem da sua empresa.',
      gain: 'Conteúdo visual premium para campanhas, redes sociais e relatórios anuais.'
    }
  ]

  // Estado para controlar o índice ativo (para as bolinhas)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)

  // Função para atualizar a bolinha ativa ao fazer scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      // Calcula a largura média de cada item para saber o índice
      // (Scroll Total / Número de itens) dá uma boa aproximação do "passo" do slide
      const itemWidth = scrollRef.current.scrollWidth / benefits.length
      const newIndex = Math.round(scrollLeft / itemWidth)
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }
  }

  return (
    <section id="benefits" className="pt-12 pb-24 md:pt-16 md:pb-40">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="mb-12 md:mb-24">
          <p className="font-montserrat text-sm md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-2 font-light">
            BENEFÍCIOS
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white max-w-3xl leading-tight">
            O que Você Ganha com Meus Serviços
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
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-[#121212] border border-[#333333] p-6 flex-shrink-0 w-[85vw] max-w-sm flex flex-col snap-center"
                >
                  <p className="font-montserrat text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-3 font-light">
                    {benefit.label}
                  </p>
                  <h3 className="font-playfair text-2xl font-normal text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-montserrat text-base text-[#E0E0E0] font-light leading-relaxed mb-3 flex-grow">
                    {benefit.description}
                  </p>
                  <p className="font-montserrat text-sm text-white font-normal italic mb-4">
                    {benefit.gain}
                  </p>
                  {/* Botão WhatsApp no final */}
                  <a 
                    href={whatsappUrl}
                    className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] border border-[#25D366]/40 hover:border-[#25D366] text-white px-5 py-3 rounded-sm font-montserrat text-sm uppercase tracking-wider font-medium hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 active:scale-95 mt-auto touch-manipulation min-h-[44px]"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <FaWhatsapp className="text-lg transition-transform duration-300 group-hover:scale-110" />
                    <span>Quero Este Resultado</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* INDICADORES (BOLINHAS) - Exclusivo Mobile */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {benefits.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-[#25D366]' // Ativo: mais largo e verde
                    : 'w-1.5 bg-[#333333]' // Inativo: bolinha cinza escura
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid de Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#121212] border border-[#333333] p-8 md:p-10 flex flex-col"
            >
              <p className="font-montserrat text-xs md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-4 font-light">
                {benefit.label}
              </p>
              <h3 className="font-playfair text-xl md:text-2xl font-normal text-white mb-4">
                {benefit.title}
              </h3>
              <p className="font-montserrat text-sm md:text-base text-[#E0E0E0] font-light leading-relaxed mb-4 flex-grow">
                {benefit.description}
              </p>
              <p className="font-montserrat text-xs md:text-sm text-white font-normal italic mb-6">
                {benefit.gain}
              </p>
              {/* Botão WhatsApp no final */}
              <a 
                href={whatsappUrl}
                className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] border border-[#25D366]/40 hover:border-[#25D366] text-white px-6 py-3 rounded-sm font-montserrat text-xs md:text-sm uppercase tracking-wider font-normal hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:scale-[1.02] mt-auto"
              >
                <FaWhatsapp className="text-base md:text-lg transition-transform duration-300 group-hover:scale-110" />
                <span>Quero Este Resultado</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits