'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

const ParticlesBackground = dynamic(() => import('@/components/particles-background'), { ssr: false })

export default function Home() {
  const { scrollYProgress } = useScroll()
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#111827', '#0f172a', '#0f1c2e']
  )

  return (
    <motion.main className="min-h-screen relative" style={{ backgroundColor }}>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </motion.main>
  )
}

