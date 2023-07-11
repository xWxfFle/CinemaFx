import './globals.css'
import { EffectorNext } from '@effector/next'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'CimenaFx',
  description: 'Movie ticket purchase ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <EffectorNext>{children}</EffectorNext>
      </body>
    </html>
  )
}
