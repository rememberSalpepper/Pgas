'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Megaphone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const services = [
  {
    title: 'Software',
    description: 'Desarrollo de software robusto y escalable para negocios modernos.',
    icon: Code,
    gradient: 'from-emerald-400 to-cyan-400',
  },
  {
    title: 'Diseño',
    description: 'Soluciones creativas en diseño gráfico y experiencias de usuario.',
    icon: Palette,
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Marketing',
    description: 'Estrategias efectivas de marketing digital para el crecimiento de tu negocio.',
    icon: Megaphone,
    gradient: 'from-blue-500 to-cyan-400',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  return (
    <section id="services" ref={ref} className="py-20 overflow-hidden bg-gray-900">
      <motion.div className="container mx-auto px-6" style={{ y }}>
        {/* Título y subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto" // Centrado con margen a izquierda y derecha
        >
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 leading-relaxed">
            Descubre las soluciones innovadoras que ofrecemos en software, diseño y marketing, creadas
            para potenciar tu negocio y alcanzar tus metas.
          </p>
        </motion.div>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-none rounded-lg shadow-lg p-6">
                <CardHeader className="flex flex-col items-center text-center">
                  {/* Ícono con gradiente */}
                  <motion.div
                    className={`inline-block p-4 rounded-lg bg-gradient-to-r ${service.gradient} mb-4`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <service.icon className="w-10 h-10 text-gray-900" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Descripción con margen centrado */}
                  <CardDescription className="text-gray-400 leading-relaxed text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
