import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <div className="font-mono text-base font-semibold">
            <p>Padukuhan Padaan Kulon</p>
          </div>
        </div>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} KKN AB.82.066 UPN
          &ldquo;Veteran&ldquo; Yogyakarta.
        </p>
      </Container>
    </footer>
  )
}
