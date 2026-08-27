'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

// Counter animation component
function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''))
  
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = numericTarget / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericTarget) {
        setCount(numericTarget)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [numericTarget])

  // Format number with K suffix if needed
  const formatted = target.includes('K') 
    ? `${Math.floor(count / 1000)}K+` 
    : `${count.toLocaleString()}+`

  return <span>{formatted}{suffix}</span>
}

export default function Hero() {
  const { t } = useLanguage()
  const [showCursor, setShowCursor] = useState(true)

  // Blinking cursor
  useEffect(() => {
    const timer = setInterval(() => setShowCursor(prev => !prev), 500)
    return () => clearInterval(timer)
  }, [])

  // Floating chess pieces
  const chessPieces = ['♔', '♕', '♗', '♘', '♙']

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-burgundy" />
      <div className="absolute inset-0 chess-pattern-dark animate-chess-slide" />
      
      {/* Floating chess pieces */}
      {chessPieces.map((piece, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 text-6xl pointer-events-none select-none"
          style={{
            top: `${15 + i * 18}%`,
            left: `${5 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -5, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        >
          {piece}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-24">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                ♟ Est. 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-gradient mb-4 leading-tight"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-burgundy-200 font-heading font-medium mb-6"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-white/60 max-w-lg mx-auto lg:mx-0 mb-8"
            >
              {t.hero.description}
              {showCursor && <span className="text-burgundy-400">|</span>}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="https://t.me/qplay_chess"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-burgundy-600 font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 flex items-center gap-2"
              >
                <span>→</span> {t.hero.cta}
              </a>
              <a
                href="#interviews"
                className="border-2 border-white/30 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: t.hero.stat1, label: t.hero.stat1Label },
                { value: t.hero.stat2, label: t.hero.stat2Label },
                { value: t.hero.stat3, label: t.hero.stat3Label },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Hero Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow effect behind character */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-burgundy-500/20 blur-[100px] rounded-full" />
            
            {/* Character image with breathing animation */}
            <div className="hero-character relative">
              <div className="relative w-[280px] h-[380px] sm:w-[350px] sm:h-[470px] lg:w-[420px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/hero-character.jpg"
                  alt="Chess Queen - Q-PLAY"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/80 text-sm font-medium">♕ Queen of Strategy</p>
                </div>
              </div>
              
              {/* Decorative chess piece badge */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-burgundy-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg rotate-12"
              >
                ♛
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
