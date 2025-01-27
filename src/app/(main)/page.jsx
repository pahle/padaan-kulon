import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import Image from 'next/image'
import { Header } from '@/components/Header'
import Map from '@/components/Map'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section id="sambutan" aria-label="Sambutan" className="py-20 sm:py-32">
        <Container className="relative z-10">
          <div className=" lg:mx-0 lg:w-full lg:pr-0">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
              Sambutan Bapak Dukuh
            </h2>
            <div className="mt-4 flex flex-col font-display text-lg tracking-tight text-blue-900 sm:text-2xl">
              <div>
                <p className="max-w-[] text-justify font-display sm:text-left">
                  <span className="text-3xl font-bold">&ldquo;</span>
                  <strong>Assalamu Alaikum Warohmatullahi Wabarakatu.</strong>
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                  tempore deleniti commodi, odit voluptates magnam. Rem
                  voluptatibus distinctio incidunt ea.
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
      <Map />
      <Speakers />
      <Schedule />
      <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
        <Container className="relative z-10">
          <div className="lg:mx-0 lg:w-full lg:pr-0">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
              Kebudayaan Desa
            </h2>
            <div className="mt-4 text-justify font-display text-lg tracking-tight text-blue-900 sm:text-left sm:text-2xl">
              <h3 className="text-3xl font-bold">Ndolalak Munggang</h3>
              <p className="mt-4">
                Ndolalak Munggang adalah kesenian tari yang berasal dari
                Padukuhan Padaan Kulon, yang berdiri pada Jumat, 1 Januari 1971.
                Nama &quot;Ndolalak&quot; berarti tarian, sementara
                &quot;Munggang&quot; adalah julukan tempat tersebut. Kesenian
                ini telah diakui melalui akta yang diterbitkan oleh Dinas
                Kebudayaan DI Yogyakarta.
                <br /> <br />
                Pementasan Ndolalak Munggang biasanya terdiri dari 1 hingga 6
                rodat (babak) dengan durasi sekitar 20 menit per rodat, diiringi
                lagu-lagu shalawat dan lagu Jawa yang telah ditentukan
                tariannya. Awalnya menggunakan alat musik tradisional seperti
                beduk, bende, kendang, dan terbang, kini kesenian ini telah
                menambahkan alat musik modern seperti organ, gitar, dan
                ketipung. Pelaku kesenian ini, baik penari maupun wiyaga
                (pemegang alat musik), berasal dari Padukuhan Padaan Kulon dan
                sekitarnya seperti Padaan Wetan, Kliwonan, dan Semawung, dengan
                partisipasi didasari minat dan semangat belajar bersama tanpa
                seleksi khusus.
                <br /> <br />
                Upaya pelestarian dilakukan dengan variasi gerakan tari dan lagu
                serta modernisasi alat musik untuk menarik minat penari dan
                penonton, menjaga keberlanjutan Ndolalak Munggang sebagai
                warisan budaya.
              </p>
            </div>
          </div>
        </Container>
        <div className="relative mt-14">
          <Container className="relative">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Image
                width={0}
                height={0}
                src="/kebudayaan-2.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/kebudayaan-1.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/kebudayaan-3.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
            </div>
          </Container>
        </div>
      </section>
      <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
        <Container className="relative z-10">
          <div className="lg:mx-0 lg:w-full lg:pr-0">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
              Potensi Desa
            </h2>
            <div className="mt-4 text-justify font-display text-lg tracking-tight text-blue-900 sm:text-left sm:text-2xl">
              <h3 className="text-3xl font-bold">Durian & Gula Merah</h3>
              <p className="mt-4">
                Desa Padaan Kulon memiliki potensi unggulan dalam hasil
                pertanian, terutama durian dan gula merah. Durian dari desa ini
                dikenal karena kualitasnya yang unggul, dengan rasa manis dan
                tekstur yang lembut, menjadi daya tarik tersendiri bagi
                penggemar buah tropis tersebut. Selain itu, produksi gula merah
                juga menjadi andalan masyarakat desa, dihasilkan dari pengolahan
                nira kelapa secara tradisional yang tetap mempertahankan cita
                rasa autentik.
                <br />
                <br />
                Potensi durian dan gula merah ini tidak hanya mendukung
                perekonomian lokal tetapi juga menarik minat wisatawan yang
                ingin merasakan langsung keunikan dan kelezatan produk desa,
                sekaligus memberikan peluang untuk mengembangkan desa sebagai
                destinasi agrowisata yang berkelanjutan.
              </p>
            </div>
          </div>
        </Container>
        <div className="relative mt-14">
          <BackgroundImage position="right" className="-bottom-32 -top-40" />
          <Container className="relative">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Image
                width={0}
                height={0}
                src="/potensi-1.jpg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/potensi-2.jpg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
            </div>
          </Container>
        </div>
      </section>
      <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
        <Container className="relative z-10">
          <div className="lg:mx-0 lg:w-full lg:pr-0">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
              Galeri Desa
            </h2>
            {/* <div className="mt-4 font-display text-2xl tracking-tight text-blue-900">
              <h3 className="text-3xl font-bold">Ndolalak Munggang</h3>
              <p className="mt-4">
                Ndolalak Munggang adalah kesenian tari yang berasal dari
                Padukuhan Padaan Kulon, Kulon Progo, DI Yogyakarta, yang berdiri
                pada Jumat, 1 Januari 1971. Nama &quot;Ndolalak&quot; berarti
                tarian, sementara &quot;Munggang&quot; adalah julukan tempat
                tersebut. Kesenian ini telah diakui melalui akta yang
                diterbitkan oleh Dinas Kebudayaan DI Yogyakarta. mentasan
                Ndolalak Munggang biasanya terdiri dari 1 hingga 6 rodat (babak)
                dengan durasi sekitar 20 menit per rodat, diiringi lagu-lagu
                shalawat dan lagu Jawa yang telah ditentukan tariannya. Awalnya
                menggunakan alat musik tradisional seperti beduk, bende,
                kendang, dan terbang, kini kesenian ini telah menambahkan alat
                musik modern seperti organ, gitar, dan ketipung. Pelaku kesenian
                ini, baik penari maupun wiyaga (pemegang alat musik), berasal
                dari Padukuhan Padaan Kulon dan sekitarnya seperti Padaan Wetan,
                Kliwonan, dan Semawung, dengan partisipasi didasari minat dan
                semangat belajar bersama tanpa seleksi khusus. Upaya pelestarian
                dilakukan dengan variasi gerakan tari dan lagu serta modernisasi
                alat musik untuk menarik minat penari dan penonton, menjaga
                keberlanjutan Ndolalak Munggang sebagai warisan budaya.
              </p>
            </div> */}
          </div>
        </Container>
        <div className="relative mt-14">
          <BackgroundImage position="right" className="-bottom-32 -top-40" />
          <Container className="relative">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Image
                width={0}
                height={0}
                src="/galeri-1.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-2.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-3.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-4.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-5.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-6.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-7.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-8.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-9.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-10.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-11.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-12.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-13.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-14.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
              <Image
                width={0}
                height={0}
                src="/galeri-15.jpeg"
                alt="Kebudayaan 1"
                className="aspect-square w-full rounded-2xl object-cover"
                unoptimized
              />
            </div>
          </Container>
        </div>
      </section>
      <Sponsors />
      <Newsletter />
    </>
  )
}
