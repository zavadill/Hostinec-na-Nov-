import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='bg-[var(--wheat)] space-'>
      <div className='max-w-10/12 mx-auto py-20 space-y-4'>
        <div className='text-center space-y-4'>
            <p className='small-green-text'>Menu</p>
            <h3 className='podnadpis'>Naše speciality</h3>
            <p className='gray-text'>Ochutnejte to nejlepší z naší kuchyně. Všechna jídla připravujeme s láskou a z kvalitních surovin.</p>        
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-5 lg:flex-row py-10'>
                <div className='flex-1/3 rounded-lg overflow-hidden bg-[var(--white)]'>
                    <div className='w-full h-50 bg-amber-400 flex justify-center items-center'>img</div>
                    <div className='flex flex-col p-3 space-y-4'>
                        <div className='flex flex-row justify-between menu-nadpis'>
                            <p>Svíčková na smetaně</p>
                            <p className='small-green-text'>229 Kč</p>
                        </div>
                        <p className='gray-text'>Hovězí svíčková s houskovým knedlíkem, smetanovou omáčkou a brusinkami</p>
                        <div className='flex flex-row border-t-[1px] border[var(--wheat)]'>
                            <p className='menu-num'>1</p>
                            <p className='menu-num'>3</p>
                            <p className='menu-num'>7</p>
                            <p className='menu-num'>10</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1/3 rounded-lg overflow-hidden bg-[var(--white)]'>
                    <div className='w-full h-50 bg-amber-400 flex justify-center items-center'>img</div>
                    <div className='flex flex-col p-3 space-y-4'>
                        <div className='flex flex-row justify-between menu-nadpis'>
                            <p>Svíčková na smetaně</p>
                            <p className='small-green-text'>229 Kč</p>
                        </div>
                        <p className='gray-text'>Hovězí svíčková s houskovým knedlíkem, smetanovou omáčkou a brusinkami</p>
                        <div className='flex flex-row border-t-[1px] border[var(--wheat)]'>
                            <p className='menu-num'>1</p>
                            <p className='menu-num'>3</p>
                            <p className='menu-num'>7</p>
                            <p className='menu-num'>10</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1/3 rounded-lg overflow-hidden bg-[var(--white)]'>
                    <div className='w-full h-50 bg-amber-400 flex justify-center items-center'>img</div>
                    <div className='flex flex-col p-3 space-y-4'>
                        <div className='flex flex-row justify-between menu-nadpis'>
                            <p>Svíčková na smetaně</p>
                            <p className='small-green-text'>229 Kč</p>
                        </div>
                        <p className='gray-text'>Hovězí svíčková s houskovým knedlíkem, smetanovou omáčkou a brusinkami</p>
                        <div className='flex flex-row border-t-[1px] border[var(--wheat)]'>
                            <p className='menu-num'>1</p>
                            <p className='menu-num'>3</p>
                            <p className='menu-num'>7</p>
                            <p className='menu-num'>10</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="" className='custom-btn-green mx-auto'>Zobrazit celé menu</Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
