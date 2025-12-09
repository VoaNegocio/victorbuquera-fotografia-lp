import React from 'react'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const whatsappUrl = 'https://wa.me/5517981080878?text=' + encodeURIComponent('Olá! Gostaria de mais informações sobre seus serviços de fotografia de autoridade.')

  return (
    <section id="contact" className="py-32 md:py-40 bg-[#121212]">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-montserrat text-xs md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-4 font-light">
            CONTATO
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
            Vamos Criar Algo Extraordinário
          </h2>
          <p className="font-montserrat text-base md:text-lg text-[#E0E0E0] mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar sua presença visual com fotografia de autoridade.
          </p>

          {/* CTA Principal - WhatsApp */}
          <div className="mb-12">
            <a 
              href={whatsappUrl}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] text-white px-10 py-5 font-montserrat text-base uppercase tracking-wider font-normal rounded-sm hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Informações de Contato Alternativas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-[#050505] border border-[#333333] p-6 rounded-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-[#E0E0E0] text-xl" />
                </div>
              </div>
              <p className="font-montserrat text-sm text-[#E0E0E0] uppercase tracking-wider mb-2 font-light">
                Email
              </p>
              <a 
                href="mailto:contato@victorbuquera.com" 
                className="font-montserrat text-white hover:text-[#E0E0E0] transition-colors"
              >
                contato@victorbuquera.com
              </a>
            </div>

            <div className="bg-[#050505] border border-[#333333] p-6 rounded-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center">
                  <FaPhone className="text-[#E0E0E0] text-xl" />
                </div>
              </div>
              <p className="font-montserrat text-sm text-[#E0E0E0] uppercase tracking-wider mb-2 font-light">
                Telefone
              </p>
              <a 
                href="tel:+5517981080878" 
                className="font-montserrat text-white hover:text-[#E0E0E0] transition-colors"
              >
                +55 17 98108-0878
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
