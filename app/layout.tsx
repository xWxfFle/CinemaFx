import './globals.css'
import { EffectorNext } from '@effector/next'
import type { Metadata } from 'next'

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
      <body>
        <EffectorNext>{children}</EffectorNext>
      </body>
    </html>
  )
}
