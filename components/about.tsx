'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <section id="about" ref={ref} className="py-20 overflow-hidden">
    <motion.div className="container mx-auto px-6" style={{ y }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Textos */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="ml-6 md:ml-12"
        >
          <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Somos una empresa dedicada a brindar soluciones innovadoras en software, marketing y diseño.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '250+', label: 'Proyectos Completados' },
              { number: '100+', label: 'Clientes Felices' },
              { number: '10+', label: 'Años de Experiencia' },
              { number: '5', label: 'Oficinas Globales' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Círculos y Logo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[350px] md:h-[400px] w-full max-w-[600px] mx-auto rounded-lg overflow-hidden bg-gray-900"
        >
          {/* Fondo animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 animate-pulse" />
          <div className="absolute inset-0 backdrop-blur-3xl" />

          {/* Círculos */}
          <motion.div
            className="absolute flex items-center justify-center"
            style={{ width: "320px", height: "320px", left: "calc(50% - 160px)", top: "15%" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border-[10px] border-cyan-400 rounded-full" />
          </motion.div>

          <motion.div
            className="absolute flex items-center justify-center"
            style={{ width: "240px", height: "240px", left: "calc(50% - 120px)", top: "calc(15% + 40px)" }}
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border-[10px] border-emerald-400 rounded-full" />
          </motion.div>

          <motion.div
            className="absolute flex items-center justify-center"
            style={{ width: "160px", height: "160px", left: "calc(50% - 80px)", top: "calc(15% + 80px)" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border-[10px] border-blue-500 rounded-full" />
          </motion.div>

          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Image
              src="/Pgas.jpg"
              alt="Logo Pgas"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
  )
}
