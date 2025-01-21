// import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-32 sm:pt-32">
      {/* <BackgroundImage className="-bottom-14 -top-36" /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">DeceptiConf - </span>
            Selamat Datang di Website Padukuhan Padaan Kulon
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Sumber informasi terkini seputar Padukuhan Padaan Kulon. Melalui
              website ini, Anda dapat mengetahui berbagai informasi terkait
              Padukuhan Padaan Kulon, seperti potensi desa, kegiatan masyarakat, dan
              lain sebagainya.
            </p>
            <p>
              Kami berkomitmen untuk memberikan informasi yang akurat dan
              terpercaya, demi mendukung kemajuan dan kesejahteraan masyarakat
              Padukuhan Padaan Kulon.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Hubungi Kami
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Padukuhan', 'Padaan Kulon'],
              ['Kalurahan', 'Banjarharjo'],
              ['Kapanewon', 'Kalibawang'],
              ['Kabupaten', 'Kulon Progo'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
