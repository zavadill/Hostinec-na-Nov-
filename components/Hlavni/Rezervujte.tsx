import React from 'react'
import { BookOpen } from 'lucide-react';
import Link from 'next/link';


const Rezervujte = () => {
  return (
    <div className='py-20 bg-[var(--wheat)]'>
      <div className='max-w-10/12 mx-auto flex flex-col space-y-5 text-center'>
        <div className='flex mx-auto text-[var(--brown-btn)]'>
            <BookOpen size={30}/>
        </div>
        <h6 className='podnadpis'>Rezervujte si stůl už dnes</h6>
        <p className='normalni-text'>Přijďte ochutnat tradiční českou kuchyni v příjemném prostředí našeho hostince.</p>
        <Link href="" className='custom-btn-green mx-auto'>Rezervovat stůl</Link>
      </div>
    </div>
  )
}

export default Rezervujte
