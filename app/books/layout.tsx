import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Books | C.D. Totten',
  description: 'Our books and offerings',
}

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}
