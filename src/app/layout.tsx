import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const open_Sans = Open_Sans({ subsets: ['latin'] })

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
      <body className={open_Sans.className}>{children}</body>
    </html>
  )
}
