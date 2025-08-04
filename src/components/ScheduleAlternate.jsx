'use client'

import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import clsx from 'clsx'

const dataPenduduk = [
  { name: 'Pemeliharaan Plang Padaan Kulon', value: '0' },
  { name: 'Pengadaan Tong Sampah', value: '0' },
  { name: 'Website dan Media Sosial Padaan Kulon', value: '158' },
  { name: 'Pojok Baca Padaan Kulon', value: '225' },
  { name: 'Arsip Dukuh Padaan Kulon', value: '84' },
  { name: 'Pelatihan Admin Website dan Media Sosial', value: '225' },
  { name: 'Tata Kelola Administrasi Desa dengan Google Workspace', value: '151' },
  { name: 'Klinik UMKM',value: '225' },
  { name: 'Cerdas Fintech', value: '225' },
  { name: 'BIONION: Pestisida Alami dari Kulit Bawang', value: '225' },
  { name: 'Pelatihan Pembuatan dan Penggunaan QRIS', value: '225' },
  { name: 'Podcast Budaya Padaan (Padaan Uncovered)', value: '225' },
  { name: 'Saluran WA Padaan Kulon', value: '225' },
  { name: 'Mitigasi dan Pembuatan Peta Rawan Bencana Longsor', value: '225'},
  { name: 'Nonton bersama', value: '225' },
  { name: 'Program Edukasi Finansial Anak', value: '225' },
  { name: 'Kerja Bakti', value: '225' },
  { name: 'Senam', value: '225' },
  { name: 'Belajar Bareng KKN', value: '225' },
  { name: 'Ayo Mengaji!', value: '225' },
  { name: 'Farewell Party', value: '225' },
  { name: 'Liga Voli', value: '225' },

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
            Kegiatan kami adalah sebagai berikut:
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
