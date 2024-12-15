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
      <motion.div className="container mx-auto px-4 md:px-6" style={{ y }}>
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
            className="relative h-[400px] md:h-[450px] w-full max-w-[700px] mx-auto rounded-lg overflow-hidden bg-gray-900"
          >
            {/* Fondo animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 animate-pulse" />
            <div className="absolute inset-0 backdrop-blur-3xl" />

            {/* Círculos (Aumentados) */}
            <div
              className="absolute rounded-full border-[12px] border-cyan-400"
              style={{
                width: '400px',
                height: '400px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <div
              className="absolute rounded-full border-[12px] border-emerald-400"
              style={{
                width: '300px',
                height: '300px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <div
              className="absolute rounded-full border-[12px] border-blue-500"
              style={{
                width: '200px',
                height: '200px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Image
                src="/Pgas.jpg"
                alt="Logo Pgas"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
