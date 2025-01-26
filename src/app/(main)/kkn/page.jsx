import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { ScheduleAlternate } from '@/components/ScheduleAlternate'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import Image from 'next/image'
import { HeaderAlternate } from '@/components/HeaderAlternate'
import { Button } from '@/components/Button'
import { SpeakersAlternate } from '@/components/SpeakersAlternate'

export default function Home() {
  return (
    <>
      <HeaderAlternate />
      <div className="relative py-20 sm:pb-32 sm:pt-32">
        {/* <BackgroundImage className="-bottom-14 -top-36" /> */}
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="font-display text-5xl font-bold tracking-tighter text-green-600 sm:text-7xl ">
              <span className="sr-only">DeceptiConf - </span>
              AB.82.066 UPNVYK Padukuhan Padaan Kulon
            </h1>
            <div className="mt-6 space-y-6 text-justify font-display text-lg tracking-tight text-green-900 sm:text-left sm:text-2xl ">
              <p>
                Cerita kami, KKN AB.82.066 dari UPN &quot;Veteran&quot;
                Yogyakarta, menghabiskan satu bulan yang seru dan penuh makna di
                Padukuhan Padaan Kulon. Selama di sini, kami merasakan hangatnya
                sambutan dan keramahan warga setempat. Dalam kebersamaan ini,
                kami belajar banyak hal baru, berbagi pengalaman, dan menikmati
                momen-momen kecil yang membuat KKN di Padaan Kulon jadi begitu
                spesial. Kami berharap kontribusi kami dapat membantu dan
                memberikan kenangan manis seperti yang kami rasakan selama
                berada di sini.
              </p>
            </div>
            <Button
              className="mt-10 w-full bg-green-600 hover:bg-green-500 sm:hidden"
              href="/"
            >
              Padukuhan
            </Button>

            <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
              {[
                ['Padukuhan', 'Padaan Kulon'],
                ['Kalurahan', 'Banjarharjo'],
                ['Kapanewon', 'Kalibawang'],
                ['Kabupaten', 'Kulon Progo'],
              ].map(([name, value]) => (
                <div key={name}>
                  <dt className="font-mono text-sm text-green-600">{name}</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </div>
      <section id="sambutan" aria-label="Sambutan" className="py-20 sm:py-32">
        <Container className="relative z-10">
          <div className=" lg:mx-0 lg:w-full lg:pr-0">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl">
              Sambutan Ketua Kelompok
            </h2>
            <div className="mt-4 flex flex-col font-display text-lg tracking-tight text-green-900 sm:text-2xl">
              <div>
                <p className="max-w-[] text-justify font-display sm:text-left">
                  <span className="text-3xl font-bold">&quot;</span>
                  <strong>Assalamu Alaikum Warohmatullahi Wabarakatu.</strong>
                  <br />
                  Sebagai ketua kelompok KKN AB.82.066, saya ingin menyampaikan
                  rasa terima kasih yang sebesar-besarnya kepada seluruh warga
                  Padukuhan Padaan Kulon yang telah menerima kami dengan begitu
                  hangat dan penuh keakraban. Selama satu bulan ini, kami merasa
                  seperti bagian dari keluarga besar di desa ini.
                  <br />
                  <br />
                  Berkat dukungan dan kerja sama yang luar biasa dari
                  masyarakat, kami dapat menjalankan berbagai program dengan
                  lancar dan penuh semangat. Kami berharap hubungan baik ini
                  terus terjalin dan apa yang telah kami lakukan bisa memberikan
                  manfaat bagi desa tercinta ini. Terima kasih telah memberikan
                  kami pengalaman berharga yang akan selalu kami kenang.
                  <span className="text-3xl font-bold">&quot;</span>
                </p>
              </div>
              <div className="mt-4">
                <p className="font-bold">M. Rayhan Arkan F.</p>
                <p>Ketua Kelompok KKN AB.82.066</p>
              </div>
            </div>
          </div>
        </Container>
        {/* <div className="relative mt-14 sm:mt-24">
          <BackgroundImage position="right" className="-bottom-32 -top-40" />
        </div> */}
      </section>
      <SpeakersAlternate />
      <ScheduleAlternate />
      <Sponsors />
      <Newsletter />
    </>
  )
}
