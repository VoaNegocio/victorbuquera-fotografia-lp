import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const About = () => {
  const whatsappUrl = 'https://wa.me/5517981080878?text=' + encodeURIComponent('Olá! Gostaria de conhecer mais sobre seu trabalho e como posso fortalecer minha presença visual profissional.')

  return (
    <section id="about" className="py-24 md:py-40">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Imagem do Victor */}
          <div className="order-1 md:order-1">
            <div className="aspect-[3/4] bg-[#121212] border border-[#333333] overflow-hidden">
              <img
                src="/fotos/victordeblazer1.png"
                alt="Victor Buquera - Fotógrafo Profissional"
                className="w-full h-full object-cover object-[center_bottom] grayscale"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-2 md:order-2">
            <p className="font-montserrat text-sm md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-4 font-light">
              SOBRE
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
              Como Posso Te Ajudar
            </h2>
            <p className="font-montserrat text-lg md:text-lg text-[#E0E0E0] font-light leading-relaxed mb-6">
              Sou Victor Buquera, fotógrafo especializado em criar imagens que transmitem autoridade e confiança. Minha missão é ajudar líderes e empresas a fortalecerem sua presença visual através de fotografias que vendem expertise e geram resultados.
            </p>
            <p className="font-montserrat text-lg md:text-lg text-[#E0E0E0] font-light leading-relaxed mb-8">
              Com mais de 10 anos de experiência, já fotografei mais de 50 executivos e empresas de diversos segmentos. Acredito que a fotografia vai além da técnica: é sobre capturar a essência e criar uma conexão visual que gere impacto real.
            </p>
            
            {/* CTA Premium */}
            <a 
              href={whatsappUrl}
              className="whatsapp-premium-btn inline-flex items-center justify-center gap-3 text-white px-8 py-4 md:px-10 md:py-5 font-montserrat text-sm uppercase tracking-wider rounded-sm touch-manipulation min-h-[48px]"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <FaWhatsapp className="btn-icon text-lg md:text-xl" />
              <span className="btn-text">Vamos Conversar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

