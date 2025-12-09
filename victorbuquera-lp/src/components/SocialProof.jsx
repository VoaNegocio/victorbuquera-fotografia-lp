import React, { useState, useEffect, useRef } from 'react'
import PortfolioModal from './PortfolioModal'

const SocialProof = () => {
  const stats = [
    { number: '50+', label: 'Executivos Fotografados' },
    { number: '98%', label: 'Taxa de Satisfação' },
    { number: '10+', label: 'Anos de Experiência' }
  ]

  // Galeria premium de trabalhos
  const galleryImages = [
    { src: '/fotos/Luana - Ensaio013.jpg', alt: 'Trabalho 1 - Victor Buquera Photography', hasImage: true },
    { src: '/fotos/Luana - Ensaio036.jpg', alt: 'Trabalho 2 - Victor Buquera Photography', hasImage: true },
    { src: '/fotos/Luana - Ensaio043.jpg', alt: 'Trabalho 3 - Victor Buquera Photography', hasImage: true },
    { src: '/fotos/VictorBuqueraFotografia-21.jpg', alt: 'Trabalho 4 - Victor Buquera Photography', hasImage: true },
    { src: '/fotos/Victoria-foto1.jpg', alt: 'Trabalho 5 - Victor Buquera Photography', hasImage: true },
    { src: '/fotos/Victoria-foto3.jpg', alt: 'Trabalho 6 - Victor Buquera Photography', hasImage: true }
  ]

  // Estados para modal
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Estados para scroll reveal no mobile
  const [visibleImages, setVisibleImages] = useState(new Set())
  const imageRefs = useRef([])

  // Intersection Observer para scroll reveal no mobile
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Quando 30% da imagem está visível
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index)
          setVisibleImages(prev => new Set([...prev, index]))
        }
      })
    }, observerOptions)

    // Copiar refs para variável local para o cleanup
    const currentRefs = imageRefs.current

    // Observar todas as imagens
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const openModal = (index) => {
    setSelectedImageIndex(index)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <>
      <section id="social-proof" className="pt-12 pb-12 md:pt-40 md:pb-20 bg-[#121212]">
        <div className="container mx-auto max-w-[1200px] px-4 md:px-8">
          {/* Galeria Premium */}
          <div className="mb-8 md:mb-24">
            <p className="font-montserrat text-sm md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-3 font-light text-center">
              PORTFÓLIO
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-normal text-white text-center mb-8 md:mb-16">
              Trabalhos que Falam por Si
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {galleryImages.map((image, index) => {
                const isVisible = visibleImages.has(index)
                return (
                  <div 
                    key={index}
                    ref={(el) => (imageRefs.current[index] = el)}
                    data-index={index}
                    className="aspect-[3/4] bg-[#050505] border border-[#333333] overflow-hidden group cursor-pointer md:hover:border-white transition-all duration-300 active:scale-95 md:active:scale-100 touch-manipulation"
                    onClick={() => openModal(index)}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {image.hasImage ? (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          // Mobile: remove grayscale quando visível no scroll
                          // Desktop: mantém grayscale e remove apenas no hover
                          isVisible 
                            ? 'grayscale-0 md:grayscale md:group-hover:grayscale-0' 
                            : 'grayscale md:group-hover:grayscale-0'
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#050505] to-[#121212]">
                        <div className="text-center">
                          <div className="text-[#333333] md:group-hover:text-[#666666] text-xs font-montserrat uppercase tracking-wider transition-colors">
                            Imagem {index + 1}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Números e Estatísticas */}
          <div>
            <p className="font-montserrat text-sm md:text-sm text-[#E0E0E0] uppercase tracking-[0.15em] mb-3 font-light text-center">
              AUTORIDADE E RESULTADOS
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-normal text-white text-center mb-8 md:mb-12">
              Números que Comprovam Excelência
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-playfair text-4xl md:text-6xl font-normal text-white mb-2 md:mb-4">
                    {stat.number}
                  </div>
                  <p className="font-montserrat text-sm md:text-base text-[#E0E0E0] uppercase tracking-wider font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <PortfolioModal
        isOpen={selectedImageIndex !== null}
        onClose={closeModal}
        images={galleryImages}
        currentIndex={currentIndex}
        onNext={nextImage}
        onPrev={prevImage}
        onSelectImage={setCurrentIndex}
      />
    </>
  )
}

export default SocialProof
