import React from 'react'
import { MapPin } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Phone } from 'lucide-react';

const Kontaktuje = () => {
  return (
    <div className='bg-[var(--green-btn)]'>
      <div className='max-w-10/12 mx-auto flex flex-col text-center py-20 space-y-5'>
        <h6 className='prostory-nadpis'>Kontaktuje nás</h6>
        <p className='prostory-text'>Rezervujte si stůl nebo nás kontaktujte s jakýmkoli dotazem. Rádi vám pomůžeme.</p>
        <div className='flex flex-row gap-10 py-5 text-[var(--white)]'>
            <div className='flex-1/3 p-7 bg-[var(--green-btn-white)] rounded-lg flex flex-col items-start'>
                <div className='flex flex-row pb-5 items-center gap-4'>
                    <div className='bg-[var(--opacity-white)] p-2 rounded-full'>
                        <MapPin size={24} />
                    </div>
                    <p className='kontaktujte-white font-bold'>Adresa</p>
                </div>
                <p>Drahanovice 92</p>
                <p>783 43 Drahanovice</p>
                <p>Česká republika</p>
            </div>
            <div className='flex-1/3 p-7 bg-[var(--green-btn-white)] rounded-lg flex flex-col items-start'>
                <div className='flex flex-row pb-5 items-center gap-4'>
                    <div className='bg-[var(--opacity-white)] p-2 rounded-full'>
                        <MapPin size={24} />
                    </div>
                    <p className='kontaktujte-white font-bold'>Otevírací doba</p>
                </div>
                <p>Út – Čt: 11:00 – 21:00</p>
                <p>Pá – So: 11:00 – 22:00</p>
                <p>Ne: 11:00 – 20:00</p>
                <p>Po: Zavřeno</p>
            </div>
            <div className='flex-1/3 p-7 bg-[var(--green-btn-white)] rounded-lg flex flex-col items-start'>
                <div className='flex flex-row pb-5 items-center gap-4'>
                    <div className='bg-[var(--opacity-white)] p-2 rounded-full'>
                        <MapPin size={24} />
                    </div>
                    <p className='kontaktujte-white font-bold'>Kontakt</p>
                </div>
                <p>+420 585 949 482</p>
                <p>+420 776 224 953</p>
                <p>hostinecnanove@seznam.cz</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Kontaktuje
