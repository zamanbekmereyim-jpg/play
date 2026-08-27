'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import AnimatedSection from './AnimatedSection'

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev >= 16) { clearInterval(timer); return 16 }
        return prev + 1
      })
    }, 80)
    return () => clearInterval(timer)
  }, [isInView])

  return (
    <section id="about" className="py-24 bg-cream-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy-600/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Big stat */}
          <AnimatedSection direction="left">
            <div ref={ref} className="text-center lg:text-left">
              <div className="inline-block">
                <span className="font-heading text-[120px] sm:text-[160px] lg:text-[200px] font-bold text-burgundy-600 leading-none">
                  {percent}
                </span>
                <span className="font-heading text-6xl sm:text-8xl font-bold text-burgundy-600">%</span>
              </div>
              <p className="text-xl text-charcoal/60 mt-2">{t.about.fact}</p>
              <p className="text-3xl font-heading font-bold text-burgundy-600 mt-2">
                {t.about.factHighlight}
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Description */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-charcoal/70 leading-relaxed">
                {t.about.description}
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-burgundy-600/10">
                <h3 className="font-heading text-2xl font-bold text-burgundy-600 mb-3 flex items-center gap-2">
                  ♛ {t.about.mission}
                </h3>
                <p className="text-charcoal/60 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-charcoal/40">
                  <span className="w-2 h-2 bg-burgundy-600 rounded-full" />
                  {t.about.founded}
                </div>
                <div className="flex items-center gap-2 text-charcoal/40">
                  <span className="w-2 h-2 bg-burgundy-600 rounded-full" />
                  {t.about.founder}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
