'use client'

import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import clsx from 'clsx'

const dataPenduduk = [
  { name: 'Penanggulangan Bahaya Tanah Longsor', value: '0' },
  { name: 'Rumah Belajar Desa', value: '0' },
  { name: 'Pemasangan Plang Point', value: '158' },
  { name: 'Pendampingan Pembuatan Website', value: '225' },
  { name: 'Memperbaharui Peta Padukuhan dan Titik Google Maps', value: '84' },
  { name: 'Penyuluhan Media Sosial Bagi UMKM', value: '225' },
  { name: 'Sosialisasi Minat Pendidikan Perguruan Tinggi', value: '151' },
  {
    name: 'Penyuluhan Bahaya Judi Online dan Pencegahan Penipuan Online',
    value: '225',
  },
  { name: 'English Happy Club', value: '225' },
  { name: 'Pelatihan Keterampilan Anak: Mozaik Biji', value: '225' },
  { name: 'Aksi Padaan Bersih', value: '225' },
  { name: 'Pendampingan Posyandu Balita dan Lansia', value: '225' },
  { name: 'Penyelengaraan Pendampingan TPA', value: '225' },
  {
    name: 'Edukasi Menabung, Melukis Celengan dan Kreativitas Menghias Celengan',
    value: '225',
  },
  { name: 'Movie Time', value: '225' },
]

function DataPendudukGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {dataPenduduk.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-center space-y-4 bg-white/60 p-6 text-center shadow-xl shadow-green-900/5 backdrop-blur"
        >
          <h4 className="text-xl font-semibold tracking-tight text-green-900">
            {item.name}
          </h4>
          {/* <p className="mt-1 text-lg tracking-tight text-green-900">
            {item.value}
          </p> */}
        </div>
      ))}
    </div>
  )
}

export function ScheduleAlternate() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl">
            Program Kerja
          </h2>
          <p
            className="mt-4 text-justify font-display
          text-lg tracking-tight text-green-900 sm:text-left sm:text-2xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, modi!
          </p>
        </div>
      </Container>
      <div className="relative mt-14">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <DataPendudukGrid />
        </Container>
      </div>
    </section>
  )
}
