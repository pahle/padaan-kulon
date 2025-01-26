import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'
import 'leaflet/dist/leaflet.css';

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata = {
  title: {
    template: '%s - Padaan Kulon',
    default: 'Padaan Kulon - KKN AB.82.066 UPN “Veteran” Yogyakarta',
  },
  description:
    'Padaan Kulon - KKN AB.82.066 UPN “Veteran” Yogyakarta adalah sebuah kelompok Kuliah Kerja Nyata (KKN) yang berada di Padukuhan Pada Kulon, Kalurahan Banjarharjo, Kapanewon Kalibawang, Kabupaten Kulon Progo. Kelompok ini terdiri dari mahasiswa  Universitas Pembangunan Nasional “Veteran” Yogyakarta yang bergerak dalam bidang pengabdian masyarakat.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
