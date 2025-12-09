import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = ({ phoneNumber = '5517981080878', message = 'Olá! Vi seu site e gostaria de agendar uma sessão fotográfica de autoridade.' }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 group flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-[#25D366] rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 transform active:scale-95 md:hover:scale-110 animate-pulse-slow touch-manipulation"
      aria-label="Fale conosco no WhatsApp"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <FaWhatsapp className="text-white text-xl md:text-3xl" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#121212] text-white px-4 py-2 rounded-lg text-sm font-montserrat whitespace-nowrap border border-[#333333]">
          Fale conosco
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#121212]"></div>
        </div>
      </div>
    </a>
  )
}

export default WhatsAppButton

