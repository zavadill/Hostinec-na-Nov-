import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react'; // Přidána ikona Clock pro případné použití

const Footer = () => {
  return (
    <div className="bg-[var(--wheat)] pt-12 md:pt-20"> {/* Mírně upravený padding top */}
      <div className="max-w-10/12 mx-auto flex flex-col px-4 sm:px-6 lg:px-8"> {/* Přidán padding pro mobilní zobrazení */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 border-b-2 border-[var(--brown-btn)] pb-10">
          {/* Sloupec 1: Hostinec na Nové */}
          <div className="w-full lg:w-1/4 space-y-3 lg:space-y-2 mb-8 lg:mb-0">
            <p className="footer-nadpis">Hostinec na Nové</p>
            <p className="normalni-text">
              Tradiční česká kuchyně v srdci Hané od roku 1762
            </p>
            <div className="flex flex-row gap-3 pt-1"> {/* Mírně upraven gap a padding top */}
              <Link
                href="https://www.facebook.com" /* Doplňte skutečný odkaz */
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Hostinec na Nové"
                className="p-1.5 bg-[var(--brown-btn)] rounded-full text-[var(--white)] hover:bg-opacity-80 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com" /* Doplňte skutečný odkaz */
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Hostinec na Nové"
                className="p-1.5 bg-[var(--brown-btn)] rounded-full text-[var(--white)] hover:bg-opacity-80 transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Sloupec 2: Otevírací doba */}
          <div className="w-full lg:w-1/4 space-y-2 mb-8 lg:mb-0">
            <p className="footer-nadpis">Otevírací doba</p>
            {/* Zde by se možná hodila ikona Clock před "Út – Čt", ale pro konzistenci ponechávám MapPin dle vašeho kódu */}
            <div className="footer-flex">
              <div className="text-[var(--green-btn)] shrink-0"> {/* shrink-0 zabrání smrštění ikony */}
                <MapPin size={20} />
              </div>
              <p className="normalni-text">Út – Čt: 11:00 – 21:00</p>
            </div>
            <div className="footer-flex">
              <div className="text-[var(--green-btn)] shrink-0">
                <MapPin size={20} />
              </div>
              <p className="normalni-text">Pá – So: 11:00 – 22:00</p>
            </div>
            <div className="footer-flex">
              <div className="text-[var(--green-btn)] shrink-0">
                <MapPin size={20} />
              </div>
              <p className="normalni-text">Ne: 11:00 – 20:00</p>
            </div>
            <div className="footer-flex">
              <div className="text-[var(--green-btn)] shrink-0">
                <MapPin size={20} /> {/* Možná by zde nemusela být ikona, nebo jiná (např. XCircle) */}
              </div>
              <p className="normalni-text">Po: Zavřeno</p>
            </div>
          </div>

          {/* Sloupec 3: Kontakt */}
          <div className="w-full lg:w-1/4 space-y-2 mb-8 lg:mb-0">
            <p className="footer-nadpis">Kontakt</p>
            <div className="footer-flex">
              <div className="text-[var(--green-btn)] shrink-0">
                <Phone size={20} />
              </div>
              <a href="tel:+420585949482" className="normalni-text hover:text-[var(--brown-btn)] transition-colors">
                +420 585 949 482
              </a>
            </div>
            <div className="footer-flex">
              <div className="text-[var(--green-btn)] shrink-0">
                <Phone size={20} />
              </div>
              <a href="tel:+420776224953" className="normalni-text hover:text-[var(--brown-btn)] transition-colors">
                +420 776 224 953
              </a>
            </div>
            <div className="footer-flex">
              <div className="text-[var(--green-btn)] shrink-0">
                <Mail size={20} />
              </div>
              <a href="mailto:hostinecnanove@seznam.cz" className="normalni-text hover:text-[var(--brown-btn)] transition-colors break-all"> {/* break-all pro zalomení dlouhého emailu */}
                hostinecnanove@seznam.cz
              </a>
            </div>
          </div>

          {/* Sloupec 4: Adresa */}
          <div className="w-full lg:w-1/4 space-y-2">
            <p className="footer-nadpis">Adresa</p>
            <div className="footer-flex">
              <div className="text-[var(--green-btn)] shrink-0 pt-1"> {/* pt-1 pro lepší zarovnání s víceřádkovým textem */}
                <MapPin size={20} />
              </div>
              <p className="normalni-text">
                Drahanovice 92
                <br /> 783 43 Drahanovice
                <br />
                Česká republika
              </p>
            </div>
          </div>
        </div>
        <p className="py-5 md:py-8 normalni-text text-center"> {/* Upraven padding a zarovnání */}
          © {new Date().getFullYear()} Hostinec na Nové. Všechna práva vyhrazena.
        </p>
      </div>
    </div>
  );
};

export default Footer;