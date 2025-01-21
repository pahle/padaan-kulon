'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'
import rt19Image from '@/images/avatars/rt-19.jpeg'
import rt20Image from '@/images/avatars/rt-20.jpeg'
import rt21Image from '@/images/avatars/rt-21.jpeg'
import alungImage from '@/images/anggota/alung.JPG'
import rioImage from '@/images/anggota/rio.JPG'
import rendiImage from '@/images/anggota/rendi.JPG'
import uusImage from '@/images/anggota/uus.JPG'
import nuhaImage from '@/images/anggota/nuha.JPG'
import paleImage from '@/images/anggota/pale.JPG'
import dianImage from '@/images/anggota/dian.JPG'
import tiaraImage from '@/images/anggota/tiara.JPG'
import bungaImage from '@/images/anggota/bunga.JPG'

const days = {
  speakers: [
    {
      name: 'M. Rayhan Arkan. F',
      role: 'Ketua',
      major: 'Sistem Informasi',
      image: paleImage,
    },
    {
      name: 'Tiara Aulia. S',
      role: 'Sekretaris',
      major: 'Manajemen',
      image: tiaraImage,
    },
    {
      name: 'Dian Ayu. S',
      role: 'Bendahara',
      major: 'Teknik Kimia',
      image: dianImage,
    },
    {
      name: 'Bunga Nafila',
      role: 'PDD',
      major: 'Hubungan Internasional',
      image: bungaImage,
    },
    {
      name: 'Luqman Bayu',
      role: 'PDD',
      major: 'Teknik Perminyakan',
      image: stevenMchailImage,
    },
    {
      name: 'Ahlul Fadhly',
      role: 'Perkap',
      major: 'Teknik Informatika',
      image: alungImage,
    },
    {
      name: 'Rendi Defito',
      role: 'Perkap',
      major: 'Teknik Geomatika',
      image: rendiImage,
    },
    {
      name: 'Firdaus',
      role: 'Perkap',
      major: 'Agroteknologi',
      image: uusImage,
    },
    {
      name: 'M. Nuha Brilliant. A',
      role: 'Humas',
      major: 'Ekonomi Pembangunan',
      image: nuhaImage,
    },
    {
      name: 'Octario Muda. M',
      role: 'Humas',
      major: 'Teknik Geologi',
      image: rioImage,
    },
    // {
    //   name: 'Parker Johnson',
    //   role: 'UI Designer at MomCorp',
    //   image: parkerJohnsonImage,
    // },
  ],
}

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function SpeakersAlternate() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-[] lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl"
          >
            Anggota Kelompok
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-green-900">
            Tak kenal maka tak sayang, jadi kenalan dulu yuk! Kami dari kelompok
            KKN AB.82.066 UPN “Veteran” Yogyakarta, datang ke Padukuhan Padaan
            Kulon dengan semangat berbagi dan belajar bersama. Anggota kelompok
            kami beragam, ada yang dari jurusan teknik, ekonomi, hingga ilmu
            sosial. Meskipun latar belakang kami berbeda, kami semua punya
            tujuan yang sama: memberikan yang terbaik selama di sini. Tiap
            anggota membawa keahlian dan cerita seru yang bikin suasana KKN jadi
            santai tapi tetap produktif. Kami berkolaborasi dengan warga, dan
            semoga dalam perjalanan satu bulan ini, kita bisa saling mengenal
            dan tumbuh bersama.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          {days.speakers.map((speaker, speakerIndex) => (
            <div key={speakerIndex}>
              <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                <div
                  className={clsx(
                    'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                    ['border-green-300', 'border-indigo-300', 'border-sky-300'][
                      speakerIndex % 3
                    ],
                  )}
                />
                <div
                  className="absolute inset-0 bg-indigo-50"
                  style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                >
                  <Image
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    src={speaker.image}
                    alt=""
                    priority
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                {speaker.name}
              </h3>
              <p className="mt-1 text-base tracking-tight text-slate-500">
                {speaker.role}
              </p>
              <p className="mt-1 text-base font-semibold tracking-tight text-slate-500">
                {speaker.major}
              </p>
            </div>
          ))}
        </Tab.Group>
      </Container>
    </section>
  )
}
