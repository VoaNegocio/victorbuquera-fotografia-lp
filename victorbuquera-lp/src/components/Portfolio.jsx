import React, { useState } from 'react'
import PortfolioModal from './PortfolioModal'

const Portfolio = () => {
  // Placeholder para imagens do portfólio
  const portfolioItems = Array.from({ length: 6 }, (_, i) => ({
    src: `/portfolio/img${i + 1}.jpg`, // Ajustar caminho quando imagens estiverem disponíveis
    alt: `Trabalho ${i + 1} - Victor Buquera Photography`,
    placeholder: true
  }))

  // Estados para modal
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setSelectedImageIndex(index)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  return (
    <>
      <section id="portfolio" className="py-32 md:py-40 bg-[#121212]">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="mb-20 md:mb-24">
            <p className="font-montserrat text-xs md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-4 font-light">
              PORTFÓLIO
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-normal text-white max-w-3xl">
              Trabalhos Recentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={index} 
                className="aspect-[3/4] bg-[#050505] border border-[#333333] overflow-hidden group cursor-pointer hover:border-white transition-colors duration-300"
                onClick={() => openModal(index)}
              >
                {/* Placeholder para imagem - será substituído por imagem real */}
                {item.placeholder ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#050505] to-[#121212]">
                    <div className="text-[#333333] group-hover:text-[#666666] text-sm font-montserrat uppercase tracking-wider transition-colors">
                      Imagem {index + 1}
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <PortfolioModal
        isOpen={selectedImageIndex !== null}
        onClose={closeModal}
        images={portfolioItems}
        currentIndex={currentIndex}
        onNext={nextImage}
        onPrev={prevImage}
        onSelectImage={setCurrentIndex}
      />
    </>
  )
}

export default Portfolio
