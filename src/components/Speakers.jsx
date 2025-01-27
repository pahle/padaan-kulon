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
import dukuhImage from '@/images/avatars/dukuh.jpeg'
import bpKalImage from '@/images/avatars/bpkal.jpeg'
import rw09Image from '@/images/avatars/rw-09.jpeg'
import rw10Image from '@/images/avatars/rw-10.jpeg'
import rt19Image from '@/images/avatars/rt-19.jpeg'
import rt20Image from '@/images/avatars/rt-20.jpeg'
import rt21Image from '@/images/avatars/rt-21.jpeg'
import rt22Image from '@/images/avatars/rt-22.jpeg'

const days = {
  speakers: [
    {
      name: 'Yuliyana',
      role: 'Bapak Dukuh',
      image: dukuhImage,
    },
    {
      name: 'Semi',
      role: 'BP. Kal',
      image: bpKalImage,
    },
    {
      name: 'Mardiyanto',
      role: 'RW 09',
      image: rw09Image,
    },
    {
      name: 'Suharna',
      role: 'RW 10',
      image: rw10Image,
    },
    {
      name: 'Panut',
      role: 'RT 19',
      image: rt19Image,
    },
    {
      name: 'Sukidal',
      role: 'RT 20',
      image: rt20Image,
    },
    {
      name: 'Suroyo',
      role: 'RT 21',
      image: rt21Image,
    },
    {
      name: 'Mutakin',
      role: 'RT 22',
      image: rt22Image,
    },
    // {
    //   name: 'Parker Johnson',
    //   role: 'UI Designer at MomCorp',
    //   image: parkerJohnsonImage,
    // },
  ],
}

export function Speakers() {
  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Struktur Padukuhan
          </h2>
          <p className="mt-4 font-display text-lg tracking-tight text-blue-900 sm:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            facilis eius qui dolorem facere eum quo, corrupti perspiciatis
            itaque illum.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
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
                <div className="absolute inset-0 bg-indigo-50">
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
