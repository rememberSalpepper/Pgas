import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-center md:text-left">
            © 2025 Pgas. Todos los derechos reservados.
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/pgas.online/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a 
              href="mailto:contacto.pgas@gmail.com" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Desarrollado con ♥ por PGAS Team</p>
        </div>
      </div>
    </footer>
  )
}