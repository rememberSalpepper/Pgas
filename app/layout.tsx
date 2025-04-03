import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner' // 👈 Importá esto

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pgas',
  description: 'Software, Marketing & Design Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        {children}

        <Toaster position="top-center" richColors theme="dark" /> {/* 👈 Esto agrega los toasts */}
      </body>
    </html>
  )
}
