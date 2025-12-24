import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kakebo 2026 - Metodo Giapponese per il Risparmio',
  description: "L'agenda del risparmio basata sul metodo giapponese per gestire i conti di casa, ottimizzare le spese e far crescere i tuoi risparmi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: '#f5f5f0',
        color: '#2c2c2c',
      }}>
        {children}
      </body>
    </html>
  )
}
