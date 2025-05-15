import React from 'react'
import { Utensils } from 'lucide-react';
import { Users } from 'lucide-react';
import { Image } from 'lucide-react';
import Link from 'next/link';


const Udalosti = () => {
  return (
    <div className='bg-[var(--brown-btn)]'>
      <div className='max-w-10/12 mx-auto gap-5 flex py-20 items-center'>
        <img src="" alt="" className='flex-1/2'/>
        <div className='space-y-5 flex-1/2'>
            <p className='small-green-text'>Vaše události</p>
            <h5 className='text-[var(--white)] text-4xl'>Svatby a soukromé akce</h5>
            <p className='text-base text-[var(--white)]'>Pořádáte svatbu, rodinnou oslavu nebo firemní večírek? Nabízíme kompletní zajištění Vaší události od jídla až po výzdobu.</p>
            <div className='py-5'>
                <div className='flex flex-row items-center gap-5 py-4'>
                    <div className='bg-[var(--opacity-white)] p-2 rounded-full'>
                        <Utensils size={20} />
                    </div>
                    <div>
                        <p className='font-bold'>Kompletní catering</p>
                        <p>Od tradičních českých jídel až po moderní rauty</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-5 py-4'>
                    <div className='bg-[var(--opacity-white)] p-2 rounded-full'>
                        <Users size={20}/>
                    </div>
                    <div>
                        <p className='font-bold'>Kompletní catering</p>
                        <p>Od tradičních českých jídel až po moderní rauty</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-5 py-4'>
                    <div className='bg-[var(--opacity-white)] p-2 rounded-full'>
                        <Image size={20}/>
                    </div>
                    <div>
                        <p className='font-bold'>Kompletní catering</p>
                        <p>Od tradičních českých jídel až po moderní rauty</p>
                    </div>
                </div>
            </div>
            <Link href="" className='custom-btn-brown'>Více informací o akcích</Link>
        </div>
      </div>
    </div>
  )
}

export default Udalosti
