'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image'; // Importa el componente Image
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '../components/ui/sheet';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(17, 24, 39, 0)', 'rgba(17, 24, 39, 0.8)']
  );

  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Servicios', 'About', 'Contacto'];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed w-full z-50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/Pgas.jpg" // Ruta sin incluir `public`
            alt="Pgas Logo"
            width={60} // Ajusta el ancho
            height={60} // Ajusta el alto
            className="rounded-full" // Clase opcional para redondear la imagen
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            PGAS
          </span>
        </Link>

          {/* Links de Navegación */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavItem key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavItem>
            ))}
          </div>

          {/* Menú Responsive */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-4 text-white bg-blue-500 rounded">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white">
              <SheetHeader>
                <SheetTitle className="text-gray-100">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <NavItem
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </NavItem>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}

function NavItem({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <motion.div whileHover={{ y: -2 }} className="relative group">
      <Link
        href={href}
        className="text-gray-300 hover:text-white transition-colors"
        onClick={onClick}
      >
        {children}
      </Link>
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
