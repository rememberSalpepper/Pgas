'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Upload } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  // Estado para almacenar las imágenes seleccionadas
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files) // Convertimos FileList a Array
      setSelectedFiles((prev) => [...prev, ...filesArray]) // Agregamos las nuevas imágenes al estado
    }
  }

  const handleRemoveImage = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index)) // Removemos la imagen seleccionada
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-900 overflow-hidden">
      <motion.div className="container mx-auto px-6" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Ponte En Contacto</h2>
          <p className="text-gray-400">
            RAAAAAAAAAAAAAAAAA!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Nombre" className="bg-gray-800 border-gray-700 w-full" />
              <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 w-full" />
              <Textarea
                placeholder="Mensaje"
                rows={6}
                className="bg-gray-800 border-gray-700 w-full col-span-2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file-upload" className="block text-sm font-medium text-gray-400">
                Agrega imagenes (Opcional)
              </Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  multiple // Permitir selección múltiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('file-upload')?.click()}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-700"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Elegir Archivos
                </Button>
              </div>
              {/* Vista previa de las imágenes */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={URL.createObjectURL(file)} // Generar URL temporal para la vista previa
                      alt={`preview-${index}`}
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-bold hover:from-emerald-500 hover:to-cyan-500"
            >
              Contactanos
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
