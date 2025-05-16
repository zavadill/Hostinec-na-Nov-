import React from 'react'
import Link from 'next/link'

const Onas = () => {
  return (
    <div className='bg-[var(--white)] py-20'>
      <div className='max-w-10/12 mx-auto space-y-4'>
        <p className='small-green-text'>O nás</p>
        <h2 className='podnadpis'>Tradiční české pohostinství</h2>
        <div className='space-y-10'>
            <p className='gray-text'>Hostinec na Nové již od roku 1762 nabízí tradiční českou kuchyni a příjemné posezení v srdci Hané. Přijďte ochutnat naše speciality připravované podle tradičních receptur v moderním pojetí.</p>
            <p className='normalni-text'>Historie našeho hostince sahá až do 18. století. Najdete u nás jak tradiční prostředí vesnické hospody, tak i moderní pojetí české gastronomie. Naši kuchaři používají především lokální suroviny od místních dodavatelů.</p>
        </div>
        <Link href="" className='small-green-text'>Zjistit více o nás ---</Link>
      </div>
    </div>
  )
} 

export default Onas
