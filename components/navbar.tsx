'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '../components/ui/sheet';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(17, 24, 39, 0)', 'rgba(17, 24, 39, 0.8)']
  );

  const [isOpen, setIsOpen] = useState(false);

  // Elementos de navegación
  const navItems = [
    { label: 'Servicios', target: 'services' },
    { label: 'Nosotros', target: 'about' },
    { label: 'Contacto', target: 'contact' }
  ];

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
              src="/Pgas.jpg"
              alt="Pgas Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <Image
              src="/PgasTexto.png"
              alt="Pgas Texto Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </Link>

          {/* Navegación desktop */}
          {/* Se agregó "items-center" para alinear verticalmente todos los elementos */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.target} href={`#${item.target}`}>
                {item.label}
              </NavItem>
            ))}
            {/* Botón "Boletas" solo para desktop */}
            <motion.div
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <a
                href="https://pgas.online/pgapps/boletas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                PGApps
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.div>
          </div>

          {/* Menú móvil */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 text-gray-300 hover:text-white transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white">
              <SheetHeader>
                <SheetTitle className="text-gray-100">Menú</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <NavItem
                    key={item.target}
                    href={`#${item.target}`}
                    onClick={() => setIsOpen(false)}
                    mobile
                  >
                    {item.label}
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
  mobile = false
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}) {
  return (
    <motion.div 
      whileHover={{ y: mobile ? 0 : -2 }}
      className={`relative group ${mobile ? 'w-full' : ''}`}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`
          ${mobile 
            ? 'block px-4 py-3 text-lg hover:bg-gray-800 rounded-lg' 
            : 'text-gray-300 hover:text-white transition-colors'
          }
        `}
      >
        {children}
        {!mobile && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Link>
    </motion.div>
  );
}
