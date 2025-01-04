import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Container } from '@/components/Container'

export default function Home() {
  return (
    <>
      <Hero />
      <section id="sambutan" aria-label="Sambutan" className="py-20 sm:py-32">
        <Container className="relative z-10">
          <div className=" lg:mx-0 lg:w-full lg:pr-0">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
              Sambutan Bapak Dukuh
            </h2>
            <div className="mt-4 flex flex-col font-display text-2xl tracking-tight text-blue-900">
              <div>
                <p className="max-w-[] font-display">
                  <span className="text-3xl font-bold">&ldquo;</span>
                  <strong>Assalamu Alaikum Warohmatullahi Wabarakatu.</strong>
                  <br />
                  Website ini hadir sebagai wujud transformasi desa Kersik
                  menjadi desa yang mampu memanfaatkan teknologi informasi dan
                  komunikasi, terintegrasi kedalam sistem online. Keterbukaan
                  informasi publik, pelayanan publik dan kegiatan perekonomian
                  di desa, guna mewujudkan desa Kersik sebagai desa wisata yang
                  berkelanjutan, adaptasi dan mitigasi terhadap perubahan iklim
                  serta menjadi desa yang mandiri. <br />
                  Terima kasih kepada semua pihak yang telah banyak memberi
                  dukungan dan kontribusi baik berupa tenaga, pikiran dan
                  semangat, terkhusus kepada Pertamina Hulu Kalimantan Timur
                  (PHKT) dengan bantuan CSRnya sehingga website ini dapat
                  terealisasi.
                  <span className="text-3xl font-bold">&rdquo;</span>
                </p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Yuliyana</p>
                <p>Bapak Dukuh</p>
              </div>
            </div>
          </div>
        </Container>
        <div className="relative mt-14 sm:mt-24">
          {/* <BackgroundImage position="right" className="-bottom-32 -top-40" /> */}
          {/* <Container className="relative">
            <ScheduleTabbed />
            <ScheduleStatic />
          </Container> */}
        </div>
      </section>
      <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
        <Container className="relative z-10">
          <div className=" lg:mx-0 lg:w-full lg:pr-0">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
              Peta Dukuh
            </h2>
            {/* <div className="mt-4 flex flex-col font-display text-2xl tracking-tight text-blue-900">
              <div>
                <p className="max-w-[] font-display">
                  <span className="text-3xl font-bold">&ldquo;</span>
                  <strong>Assalamu Alaikum Warohmatullahi Wabarakatu.</strong>
                  <br />
                  Website ini hadir sebagai wujud transformasi desa Kersik
                  menjadi desa yang mampu memanfaatkan teknologi informasi dan
                  komunikasi, terintegrasi kedalam sistem online. Keterbukaan
                  informasi publik, pelayanan publik dan kegiatan perekonomian
                  di desa, guna mewujudkan desa Kersik sebagai desa wisata yang
                  berkelanjutan, adaptasi dan mitigasi terhadap perubahan iklim
                  serta menjadi desa yang mandiri. <br />
                  Terima kasih kepada semua pihak yang telah banyak memberi
                  dukungan dan kontribusi baik berupa tenaga, pikiran dan
                  semangat, terkhusus kepada Pertamina Hulu Kalimantan Timur
                  (PHKT) dengan bantuan CSRnya sehingga website ini dapat
                  terealisasi.
                  <span className="text-3xl font-bold">&rdquo;</span>
                </p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Yuliyana</p>
                <p>Bapak Dukuh</p>
              </div>
            </div> */}
          </div>
        </Container>
        <div className="relative mt-14 sm:mt-24">
          {/* <BackgroundImage position="right" className="-bottom-32 -top-40" /> */}
          {/* <Container className="relative">
            <ScheduleTabbed />
            <ScheduleStatic />
          </Container> */}
        </div>
      </section>
      <Speakers />
      <Schedule />
      <Sponsors />
      <Newsletter />
    </>
  )
}
