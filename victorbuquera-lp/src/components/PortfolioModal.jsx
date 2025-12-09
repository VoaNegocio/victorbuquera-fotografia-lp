import React, { useEffect } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const PortfolioModal = ({ isOpen, onClose, images, currentIndex, onNext, onPrev, onSelectImage }) => {
  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Previne scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Navegação com setas do teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      
      if (e.key === 'ArrowLeft') {
        onPrev()
      } else if (e.key === 'ArrowRight') {
        onNext()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onNext, onPrev])

  if (!isOpen || !images || images.length === 0) {
    return null
  }

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
      onClick={onClose}
    >
      {/* Container do modal */}
      <div 
        className="relative max-w-7xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#121212]/90 backdrop-blur-sm border border-[#333333] rounded-full flex items-center justify-center text-white hover:bg-[#050505] transition-colors"
          aria-label="Fechar modal"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Imagem */}
        <div className="relative bg-[#050505] rounded-sm overflow-hidden border border-[#333333]">
          <img
            src={currentImage?.src || currentImage}
            alt={currentImage?.alt || `Imagem ${currentIndex + 1}`}
            className="w-full h-auto max-h-[80vh] object-contain mx-auto"
          />
        </div>

        {/* Botões de navegação */}
        {images.length > 1 && (
          <>
            {/* Botão anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#121212]/90 backdrop-blur-sm border border-[#333333] rounded-full flex items-center justify-center text-white hover:bg-[#050505] transition-colors"
              aria-label="Imagem anterior"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            {/* Botão próximo */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#121212]/90 backdrop-blur-sm border border-[#333333] rounded-full flex items-center justify-center text-white hover:bg-[#050505] transition-colors"
              aria-label="Próxima imagem"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </>
        )}

        {/* Contador de imagens */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#121212]/90 backdrop-blur-sm border border-[#333333] px-4 py-2 rounded-full">
            <span className="font-montserrat text-sm text-[#E0E0E0] font-light">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default PortfolioModal

