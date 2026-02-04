'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const services = [
  { name: 'Pulverkrāsošana', href: '/pakalpojumi/pulverkrasosana' },
  { name: 'Smilšu strūklošana', href: '/pakalpojumi/smilsu-strukla-smilsu-struklosana' },
  { name: 'Metālapstrāde', href: '/pakalpojumi/metalapstrade' },
  { name: 'Metāla konstrukcijas', href: '/pakalpojumi/metala-konstrukciju-izgatavosana-metala-izstradajumi' },
  { name: 'Koka metāla mēbeles', href: '/pakalpojumi/metala-koka-mebelu-izgatavosana-darza-mebeles-ara-mebeles' },
  { name: 'Vārtu un žogu atjaunošana', href: '/pakalpojumi/vartu-un-zogu-atjaunosana' },
];

const navigation = [
  { name: 'Sākums', href: '/' },
  { name: 'Par mums', href: '/par-mums' },
  { name: 'Pakalpojumi', href: '/pakalpojumi', hasDropdown: true },
  { name: 'Informācija', href: '/informacija' },
  { name: 'Cenas', href: '/cenas' },
  { name: 'Kontakti', href: '/kontakti' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Pulverkrāsotava"
                width={200}
                height={50}
                className="h-10 w-auto md:h-12"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="text-pulver-light hover:text-pulver-gold transition-colors font-medium text-sm uppercase tracking-wide flex items-center gap-1"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-pulver-grey rounded-lg shadow-xl py-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-pulver-light hover:text-pulver-gold hover:bg-pulver-dark/50 transition-colors text-sm"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Image
                src="/burger.svg"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
        services={services}
      />
    </>
  );
}
