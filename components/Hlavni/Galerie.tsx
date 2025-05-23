import React from 'react'
import Link from 'next/link'

const Galerie = () => {
  return (
    <div className='bg-[var(--white)]'>
        <div className='gap-5 mx-auto flex flex-col max-w-10/12 py-20'>
            <div className='text-center space-y-5'>
                <p className='small-green-text'>Nahlédněte k nám</p>
                <h6 className='podnadpis'>Galerie</h6>
                <p className='gray-text'>Prohlédněte si prostředí našeho hostince, tradiční česká jídla a atmosféru, která vás u nás čeká.</p>
            </div>
            {/* Změna zde: Použití gridu pro responzivní sloupce */}
            <div className='grid grid-cols-1 md:grid-cols-4 py-5 gap-10'>
                {/* Odstraněno flex-1/4, výška a barva ponechány pro ukázku */}
                <div className='h-[200px] bg-amber-200 rounded-lg'></div>
                <div className='h-[200px] bg-amber-200 rounded-lg'></div>
                <div className='h-[200px] bg-amber-200 rounded-lg'></div>
                <div className='h-[200px] bg-amber-200 rounded-lg'></div>
            </div>
            <Link href="" className='custom-btn-green mx-auto'>Zobrazit kompletní galerii</Link>
        </div>
    </div>
  )
}

export default Galerie