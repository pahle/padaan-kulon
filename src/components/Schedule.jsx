'use client'

import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import clsx from 'clsx'

const dataPenduduk = [
  { name: 'Penduduk', value: '309' },
  { name: 'Kepala Keluarga', value: '95' },
  { name: 'Laki-laki', value: '158' },
  { name: 'Perempuan', value: '151' },
  { name: 'Anak-anak', value: '84' },
  { name: 'Dewasa', value: '225' },
]

function DataPendudukGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {dataPenduduk.map((item) => (
        <div
          key={item.name}
          className="space-y-4 bg-white/60 p-6 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
        >
          <h4 className="text-5xl font-semibold tracking-tight text-blue-900">
            {item.value}
          </h4>
          <p className="mt-1 text-lg tracking-tight text-blue-900">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Administrasi Penduduk
          </h2>
          <p className="mt-4 font-display text-lg sm:text-2xl tracking-tight text-blue-900">
            Data statistik penduduk untuk berbagai kategori.
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
