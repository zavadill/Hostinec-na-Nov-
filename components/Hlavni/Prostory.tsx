import Link from 'next/link'
import React from 'react'

const Prostory = () => {
  return (
    <div className='bg-[var(--white)]'>
      <div className='max-w-10/12 mx-auto py-20 space-y-5 flex flex-col'>
        <div className='text-center space-y-5'>
            <p className='small-green-text'>Prostory</p>
            <h4 className='podnadpis'>Naše prostory</h4>
            <p className='gray-text'>Nabízíme prostory pro různé příležitosti - od romantické večeře pro dva až po velké rodinné oslavy či firemní akce.</p>
        </div>
        {/* Kontejner pro jednotlivé prostory - upraveno pro responzivitu */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
            {/* První prostor */}
            <div className="rounded-lg overflow-hidden flex flex-col bg-amber-200 h-50 justify-end"> {/* Odstraněno flex-1/3 */}
                <div className='p-5'>
                    <p className='prostory-nadpis'>Restaurace</p>
                    <p className='prostory-text'>50 míst k sezení</p>
                </div>
            </div>
            {/* Druhý prostor */}
            <div className="rounded-lg overflow-hidden flex flex-col bg-amber-200 h-50 justify-end"> {/* Odstraněno flex-1/3 */}
                <div className='p-5'>
                    <p className='prostory-nadpis'>Salonky</p>
                    <p className='prostory-text'>20 a 50 míst k sezení</p>
                </div>
            </div>
            {/* Třetí prostor */}
            <div className="rounded-lg overflow-hidden flex flex-col bg-amber-200 h-50 justify-end"> {/* Odstraněno flex-1/3 */}
                <div className='p-5'>
                    <p className='prostory-nadpis'>Zahrádka</p>
                    <p className='prostory-text'>70 míst k sezení, dětské hřiště a jezírko</p>
                </div>
            </div>
        </div>
        <Link href="" className='custom-btn-green mx-auto'>Prohlédnout všechny prostory</Link>
      </div>
    </div>
  )
}

export default Prostory