import React from 'react'
import Link from 'next/link'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';



const Footer = () => {
  return (
    <div className='bg-[var(--wheat)] pt-20'>
      <div className='max-w-10/12 mx-auto flex flex-col'>
        <div className='flex flex-row gap-10 border-b-2 border-[var(--brown-btn)] pb-10'>
            <div className='space-y-2 flex-1/4'>
                <p className='footer-nadpis'>Hostinec na Nové</p>
                <p className='normalni-text'>Tradiční česká kuchyně v srdci Hané od roku 1762</p>
                <div className='flex flex-row gap-2'>
                    <Link href="" className='p-1.5 bg-[var(--brown-btn)] rounded-full text-[var(--white)]'>
                        <Facebook  size={20}/>
                    </Link>
                    <Link href="" className='p-1.5 bg-[var(--brown-btn)] rounded-full text-[var(--white)]'>
                        <Instagram size={20} />
                    </Link>
                </div>
            </div>
            <div className='space-y-2 flex-1/4'>
                <p className='footer-nadpis'>Otevírací doba</p>
                <div className='footer-flex'>
                    <div className='text-[var(--green-btn)]'>
                        <MapPin size={20}/>
                    </div>
                    <p className='normalni-text'>Út – Čt: 11:00 – 21:00</p>
                </div>
                <div className='footer-flex'>
                    <div className='text-[var(--green-btn)]'>
                        <MapPin size={20}/>
                    </div>
                    <p className='normalni-text'>Pá – So: 11:00 – 22:00</p>
                </div>
                <div className='footer-flex'>
                    <div className='text-[var(--green-btn)]'>
                        <MapPin size={20}/>
                    </div>
                    <p className='normalni-text'>Ne: 11:00 – 20:00</p>
                </div>
                <div className='footer-flex'>
                    <div className='text-[var(--green-btn)]'>
                        <MapPin size={20}/>
                    </div>
                    <p className='normalni-text'>Po: Zavřeno</p>
                </div>
            </div>
            <div className='space-y-2 flex-1/4'>
                <p className='footer-nadpis'>Kontakt</p>
                <div className='footer-flex'>
                    <div className='text-[var(--green-btn)]'>
                        <Phone size={20}/>
                    </div>
                    <p className='normalni-text'>+420 585 949 482</p>
                </div>
                <div className='footer-flex'>
                    <div className='text-[var(--green-btn)]'>
                        <Phone size={20}/>
                    </div>
                    <p className='normalni-text'>+420 776 224 953</p>
                </div>
                <div className='footer-flex'>
                    <div className='text-[var(--green-btn)]'>
                        <Mail size={20}/>
                    </div>
                    <p className='normalni-text'>hostinecnanove@seznam.cz</p>
                </div>
            </div>
            <div className='space-y-2 flex-1/4'>
                <p className='footer-nadpis'>Adresa</p>
                <div className='footer-flex'>
                    <div className='text-[var(--green-btn)]'>
                        <MapPin size={20}/>
                    </div>
                    <p className='normalni-text'>
                        Drahanovice 92<br/> 783 43 Drahanovice<br/>Česká republika
                    </p>
                </div>
            </div>
        </div>
        <p className='py-5 normalni-text mx-auto'>© 2025 Hostinec na Nové. Všechna práva vyhrazena.</p>
      </div>
    </div>
  )
}

export default Footer
