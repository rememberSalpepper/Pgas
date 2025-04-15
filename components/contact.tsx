'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'sonner'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
//import { Label } from '../components/ui/label'
//import { Upload } from 'lucide-react'
//import Image from 'next/image'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const form = useRef<HTMLFormElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  const [ setPreviewImage] = useState<string | null>(null)
  const [sending, setSending] = useState(false)

//  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//    const file = event.target.files?.[0]
//    if (!file) return

//    if (file.size > 1024 * 1024) {
//      toast.error('La imagen no debe superar 1MB.')
//      event.target.value = ''
//      return
//    }

//    setPreviewImage(URL.createObjectURL(file))
//  }

//  const handleRemoveImage = () => {
//    setPreviewImage(null)
//    const input = document.getElementById('file-upload') as HTMLInputElement
//    if (input) input.value = ''
//  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    setSending(true)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log('✅ Enviado:', result.text)
          toast.success('¡Gracias por tu mensaje! Te responderemos pronto. ✅')
          form.current?.reset()
          //setPreviewImage(null)
        },
        (error) => {
          console.error('❌ Error:', error.text)
          toast.error('Ups... hubo un error al enviar. Por favor, intentá más tarde.')
        }
      )
      .finally(() => setSending(false))
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900 overflow-hidden section-offset">
      <motion.div className="container mx-auto px-6" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">¿Listo para dar el siguiente paso? 👣</h2>
          <p className="text-gray-400">
            Nosotros también. ¡Conversemos sobre cómo podemos ayudarte! 🚀
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
            encType="multipart/form-data"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="user_name"
                placeholder="Nombre"
                required
                className="bg-gray-800 border-gray-700 w-full"
              />
              <Input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="bg-gray-800 border-gray-700 w-full"
              />
              <Textarea
                name="message"
                placeholder="Mensaje"
                rows={6}
                required
                className="bg-gray-800 border-gray-700 w-full col-span-2"
              />
            </div>

            

            <Button
              type="submit"
              size="lg"
              disabled={sending}
              className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-bold hover:from-emerald-500 hover:to-cyan-500"
            >
              {sending ? 'Enviando...' : 'Contactanos'}
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
