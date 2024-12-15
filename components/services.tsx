'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Megaphone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const services = [
  {
    title: 'Software',
    description: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.',
    icon: Code,
    gradient: 'from-emerald-400 to-cyan-400',
  },
  {
    title: 'Diseño',
    description: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.',
    icon: Palette,
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Marketing',
    description: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.',
    icon: Megaphone,
    gradient: 'from-blue-500 to-cyan-400',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <section id="services" ref={ref} className="py-20 overflow-hidden">
      <motion.div className="container mx-auto px-6" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-none overflow-hidden group">
                <CardHeader>
                  <motion.div 
                    className={`inline-block p-4 rounded-lg bg-gradient-to-r ${service.gradient} mb-6`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <service.icon className="w-8 h-8 text-gray-900" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardContent>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

