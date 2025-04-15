"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Megaphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

// Definición de los servicios
const services = [
  {
    title: "💻 Software",
    description:
      "Nada de código rebuscado 🤖 Solo soluciones que realmente te sirven, sin necesidad de usar un traductor para entendernos.",
    icon: Code,
    colorIndex: 0, // Para identificar qué conjunto de colores usar
    details: [
      "Desarrollo de aplicaciones web personalizadas",
      "Creación de tiendas online y plataformas e-commerce",
      "Desarrollo de automatizaciones",
      "Integración de APIs y servicios de terceros"
    ],
    longDescription:
      "Creamos soluciones digitales a medida que realmente te sirven. Usamos tecnología moderna y trabajamos de forma ágil para que tengas productos de calidad, sin vueltas ni complicaciones.",
    cta: "Solicitar consulta técnica",
  },
  {
    title: "🎨 Diseño",
    description:
      "Transformamos tus ideas en diseños con estilo. Tu marca merece lucirse tanto como el trabajo que hacés. 💅",
    icon: Palette,
    colorIndex: 1, // Para identificar qué conjunto de colores usar
    details: [
      "Diseño de identidad visual y branding completo",
      "Creación de interfaces de usuario (UI) intuitivas",
      "Experiencia de usuario (UX) optimizada para conversión",
      "Creación de material gráfico para redes sociales"
    ],
      longDescription:
        "Convertimos tus ideas en diseños que hablan por tu marca. Nos enfocamos en crear experiencias visuales que enamoran, conectan con tu audiencia y muestran lo que te hace único, sin perder el estilo.",
      cta: "Solicitar propuesta de diseño",
    },
  {
    title: "📢 Marketing",
    description:
      "Estrategias digitales que hacen clic. 🖱️✨ Nos enfocamos en conectar con tu público, no en marearte con tecnicismos.",
    icon: Megaphone,
    colorIndex: 2, // Para identificar qué conjunto de colores usar
    details: [
      "Estrategias de marketing digital personalizadas",
      "Gestión de redes sociales y campañas",
      "SEO, posicionamiento y automatización de emails",
      "Análisis de datos y optimización de conversiones"
    ],
    longDescription:
      "Diseñamos estrategias digitales para tu negocio y tu audiencia. No se trata solo de aparecer más, sino de conectar mejor, generar resultados concretos y construir relaciones duraderas.",
    cta: "Solicitar estrategia personalizada",
  },
]

export default function Services() {
  const [openModal, setOpenModal] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  // Function to open a specific modal
  const handleOpenModal = (title: string) => {
    setOpenModal(title)
  }

  // Function to close the modal
  const handleCloseModal = () => {
    setOpenModal(null)
  }

  // Card hover animation variants
  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
      },
    },
  }

  // Pulse animation for the "click me" effect
  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  // Función para obtener el gradiente según el índice del servicio
  const getGradient = (index: number) => {
    switch (index) {
      case 0:
        return "from-[#3EE0A1] to-[#3CDFED]" // Verde a Cyan
      case 1:
        return "from-[#4285F4] to-[#3EE0A1]" // Azul a Verde
      case 2:
        return "from-[#3CDFED] to-[#4285F4]" // Cyan a Azul
      default:
        return "from-[#3EE0A1] to-[#3CDFED]"
    }
  }

  // Función para obtener el color de texto según el índice del servicio
  const getTextColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-[#3EE0A1]" // Verde
      case 1:
        return "text-[#4285F4]" // Azul
      case 2:
        return "text-[#3CDFED]" // Cyan
      default:
        return "text-[#3EE0A1]"
    }
  }

  return (
    <section id="services" ref={ref} className="section-offset py-20 overflow-hidden bg-gray-900">
      <motion.div className="container mx-auto px-6" style={{ y }}>
        {/* Título y subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto" // Centrado con margen a izquierda y derecha
        >
          <h2 className="text-4xl font-bold mb-4">🚀 Nuestros Servicios</h2>
          <p className="text-gray-400 leading-relaxed">
            Ofrecemos soluciones en software, diseño y marketing.
          </p>
          <p></p>
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
              onClick={() => handleOpenModal(service.title)}
              className="cursor-pointer h-full"
            >
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="h-full"
              >
                <Card className="bg-gray-800/85 border-none rounded-lg shadow-lg p-6 h-full flex flex-col">
                  <CardHeader className="flex flex-col items-center text-center pb-4">
                    {/* Ícono con gradiente */}
                    <motion.div
                      className={`inline-block p-4 rounded-lg bg-gradient-to-r ${getGradient(service.colorIndex)} mb-4`}
                      variants={pulseVariants}
                      initial="initial"
                      animate="animate"
                      style={{
                        // Aplicamos también el gradiente con CSS en línea como respaldo
                        background:
                          index === 0
                            ? "linear-gradient(to right, #3EE0A1, #3CDFED)"
                            : index === 1
                              ? "linear-gradient(to right, #4285F4, #3EE0A1)"
                              : "linear-gradient(to right, #3CDFED, #4285F4)",
                      }}
                    >
                      <service.icon className="w-10 h-10 text-gray-900" />
                    </motion.div>
                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {/* Descripción con margen centrado */}
                    <CardDescription className="text-gray-400 leading-relaxed text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-4 flex justify-center">
                    <motion.div
                      className={`text-sm font-medium ${getTextColor(service.colorIndex)} flex items-center gap-1`}
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      style={{
                        // Aplicamos también el color con CSS en línea como respaldo
                        color: index === 0 ? "#3EE0A1" : index === 1 ? "#4285F4" : "#3CDFED",
                      }}
                    >
                      Ver más
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modals for each service */}
        <AnimatePresence>
          {services.map((service, index) => (
            <Dialog key={`modal-${service.title}`} open={openModal === service.title} onOpenChange={handleCloseModal}>
              <DialogContent
                className="bg-gray-800 border-none text-white max-w-[90%] sm:max-w-md md:max-w-xl overflow-hidden p-4 sm:p-6"
                onInteractOutside={handleCloseModal}
              >
                <style jsx global>{`
                  .radix-dialog-close, 
                  button[aria-label="Close"], 
                  button.absolute.top-4.right-4 {
                    display: none !important;
                  }
                `}</style>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient header */}
                  <div
                    className={`bg-gradient-to-r ${getGradient(service.colorIndex)} p-6 relative`}
                    style={{
                      // Aplicamos también el gradiente con CSS en línea como respaldo
                      background:
                        index === 0
                          ? "linear-gradient(to right, #3EE0A1, #3CDFED)"
                          : index === 1
                            ? "linear-gradient(to right, #4285F4, #3EE0A1)"
                            : "linear-gradient(to right, #3CDFED, #4285F4)",
                    }}
                  >
                    

                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <DialogTitle className="text-2xl font-bold text-white">{service.title}</DialogTitle>
                    </div>
                  </div>

                  <div className="p-6">
                    <DialogDescription className="text-gray-300 mb-6 text-base">
                      {service.longDescription}
                    </DialogDescription>

                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-4 text-white">Nuestros servicios incluyen:</h3>
                      <ul className="space-y-3 mb-8">
                        {service.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div
                              className={`h-5 w-5 rounded-full bg-gradient-to-r ${getGradient(service.colorIndex)} flex-shrink-0 mt-1`}
                              style={{
                                // Aplicamos también el gradiente con CSS en línea como respaldo
                                background:
                                  index === 0
                                    ? "linear-gradient(to right, #3EE0A1, #3CDFED)"
                                    : index === 1
                                      ? "linear-gradient(to right, #4285F4, #3EE0A1)"
                                      : "linear-gradient(to right, #3CDFED, #4285F4)",
                              }}
                            />
                            <span className="text-gray-200">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="mt-8 border-t border-gray-700 pt-6">
                        <p className="text-gray-300 mb-4">
                          ¿Listo para llevar tu negocio al siguiente nivel? Nuestro equipo está preparado para ayudarte
                          a alcanzar tus objetivos 🚀.
                        </p>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button
                          onClick={() => {
                            handleCloseModal() // Cierra la modal
                            const contactSection = document.getElementById("contact") // Busca la sección de contacto
                            contactSection?.scrollIntoView({ behavior: "smooth" }) // Hace scroll suave
                          }}
                          className={`bg-gradient-to-r ${getGradient(service.colorIndex)} text-gray-900 font-medium py-2 px-4 rounded-md w-full hover:shadow-lg transition-all duration-300`}
                          style={{
                            background:
                              index === 0
                                ? "linear-gradient(to right, #3EE0A1, #3CDFED)"
                                : index === 1
                                  ? "linear-gradient(to right, #4285F4, #3EE0A1)"
                                  : "linear-gradient(to right, #3CDFED, #4285F4)",
                          }}
                        >
                          {service.cta}
                        </Button>
                        </motion.div>
                        <Button
                          variant="ghost"
                          onClick={handleCloseModal}
                          className="w-full mt-4 text-gray-400 hover:text-white block lg:hidden"
                        >
                          Cerrar
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
