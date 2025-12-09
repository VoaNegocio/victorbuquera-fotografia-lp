import './App.css'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Benefits from './components/Benefits'
import Process from './components/Process'
import About from './components/About'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <Hero />
      <SocialProof />
      <Benefits />
      <Process />
      <About />
      <Footer />
      <WhatsAppButton 
        phoneNumber="5517981080878"
        message="Olá! Vi seu site e gostaria de agendar uma sessão fotográfica de autoridade."
      />
    </div>
  )
}

export default App
