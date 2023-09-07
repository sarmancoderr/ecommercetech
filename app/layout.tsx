import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className + ' bg-slate-100'}>
        <main className=' w-screen h-screen p-2 max-w-lg mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
