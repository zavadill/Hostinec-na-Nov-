import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="text-[var(--foreground)]">
      <div className='min-h-screen flex flex-col max-w-10/12 mx-auto justify-center space-y-5'>
        <h1 className='text-6xl'>Hostinec na Nové</h1>
        <p className='text-2xl'>Tradiční česká kuchyně v srdci Hané od roku 1762</p>
        <div className='flex flex-col md:flex-row gap-4'>
          <Link href="/" className='custom-btn-green'>Prohlédnout menu</Link>
          <Link href="/" className='custom-btn-brown'>Rezervovat stůl</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
