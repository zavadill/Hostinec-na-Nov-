import React from 'react'
import { Utensils } from 'lucide-react';
import { Users } from 'lucide-react';
import { Image as LucideImage } from 'lucide-react'; // Přejmenováno, aby se nekolidovalo s HTML img tagem nebo budoucím Next/Image
import Link from 'next/link';


const Udalosti = () => {
  return (
    <div className='bg-[var(--brown-btn)]'>
      {/* Hlavní kontejner - upraveno pro responzivitu */}
      <div className='max-w-10/12 mx-auto gap-10 flex flex-col lg:flex-row py-20 items-center'>
        {/* Obrázek - upraveno pro responzivitu */}
        {/* Přidejte skutečný src a alt pro obrázek */}
        <img src="https://via.placeholder.com/600x400" alt="Ukázka události" className='w-full lg:w-1/2 rounded-lg object-cover aspect-video lg:aspect-auto lg:max-h-[450px]'/>
        {/* Textový obsah - upraveno pro responzivitu */}
        <div className='space-y-5 w-full lg:w-1/2 text-[var(--white)]'>
            <p className='small-green-text'>Vaše události</p>
            <h5 className='text-[var(--white)] text-4xl'>Svatby a soukromé akce</h5>
            <p className='text-base text-[var(--white)]'>Pořádáte svatbu, rodinnou oslavu nebo firemní večírek? Nabízíme kompletní zajištění Vaší události od jídla až po výzdobu.</p>
            <div className='py-5 space-y-4'> {/* Přidán space-y-4 pro konzistentní mezery mezi položkami */}
                <div className='flex flex-row items-center gap-5'> {/* Odebráno py-4, řešeno rodičem */}
                    <div className='bg-[var(--opacity-white)] p-2 rounded-full'>
                        <Utensils size={20} />
                    </div>
                    <div>
                        <p className='font-bold'>Kompletní catering</p>
                        <p>Od tradičních českých jídel až po moderní rauty</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-5'> {/* Odebráno py-4 */}
                    <div className='bg-[var(--opacity-white)] p-2 rounded-full'>
                        <Users size={20}/>
                    </div>
                    <div>
                        {/* Zde byl duplicitní text "Kompletní catering", předpokládám, že by měl být jiný */}
                        <p className='font-bold'>Prostory pro hosty</p>
                        <p>Různé kapacity a uspořádání podle vašich potřeb</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-5'> {/* Odebráno py-4 */}
                    <div className='bg-[var(--opacity-white)] p-2 rounded-full'>
                        <LucideImage size={20}/> {/* Použití přejmenovaného importu */}
                    </div>
                    <div>
                        {/* Zde byl duplicitní text "Kompletní catering", předpokládám, že by měl být jiný */}
                        <p className='font-bold'>Výzdoba a doplňky</p>
                        <p>Dekorace na míru vaší události</p>
                    </div>
                </div>
            </div>
            <Link href="" className='custom-btn-brown inline-block'>Více informací o akcích</Link> {/* Přidáno inline-block pro správné fungování marginu/paddingu odkazu */}
        </div>
      </div>
    </div>
  )
}

export default Udalosti