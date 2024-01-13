import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import TanstackProvider from './utils/TanstackProvider'
import { FilterProvider } from './context/SearchContext'
import ModalLayout from './Layout/ModalLayout'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real-Estate App',
  description: 'Created with Nextjs, Tailwind, Zustand, Supabase, Prisma, Clerk For AUTH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <TanstackProvider>
          <ModalLayout>
            <FilterProvider>
              {children}
            </FilterProvider>
          </ModalLayout>
        </TanstackProvider>
      </body>
    </html>
  )
}
