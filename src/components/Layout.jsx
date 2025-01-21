import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children, showFooter = true }) {
  return (
    <>
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}
