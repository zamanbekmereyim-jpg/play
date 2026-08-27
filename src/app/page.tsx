'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Interviews from '@/components/Interviews'
import Tournaments from '@/components/Tournaments'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Interviews />
      <Tournaments />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
