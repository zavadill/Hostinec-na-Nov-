import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    // Přidáme lineární gradient pro ztmavení a zajistíme, že obrázek je pod ním
    <div
      className="text-[var(--white)] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/uvodni.jpg')" }} // Nastavení obrázku přes style pro lepší kombinaci s overlayem
    >
      {/* Overlay pro ztmavení */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Obsah zůstává nad overlayem díky relativnímu pozicování a z-indexu (pokud by byl potřeba) */}
      <div className='min-h-screen flex flex-col max-w-10/12 mx-auto justify-center space-y-5 relative z-10'>
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