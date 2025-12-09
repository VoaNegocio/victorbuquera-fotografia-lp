import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-[#333333]/30' 
        : 'bg-[#050505] backdrop-blur-sm'
    }`}>
      <div className="container mx-auto max-w-[1200px] px-4 md:px-8">
        
        {/* Container relativo para permitir o posicionamento absoluto da logo */}
        <div className="relative flex items-center justify-center py-4 md:py-8">
          
          {/* LOGO: Posicionada absolutamente à esquerda (dentro do container) */}
          <div 
            onClick={scrollToTop}
            className="absolute left-0 cursor-pointer touch-manipulation p-2 -ml-2" // p-2 e -ml-2 aumentam a área de toque sem mover visualmente
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <img 
              src="/fotos/Victor Buquera Logo-Assinatura Branca.png" 
              alt="Victor Buquera Logo"
              className="h-8 md:h-10 w-auto object-contain hover:opacity-80 transition-opacity duration-200"
            />
          </div>

          {/* TEXTO: Centralizado na tela */}
          <h1 
            onClick={scrollToTop}
            className="font-playfair text-xl md:text-3xl font-normal text-white tracking-[0.1em] uppercase cursor-pointer hover:opacity-80 transition-opacity duration-200 touch-manipulation text-center"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            VICTOR BUQUERA
          </h1>

        </div>
      </div>
    </header>
  )
}

export default Header