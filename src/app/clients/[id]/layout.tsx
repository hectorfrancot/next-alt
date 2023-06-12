import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section className={inter.className}>{children}</section>
  )
}
