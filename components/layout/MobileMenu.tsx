'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: { name: string; href: string; hasDropdown?: boolean }[];
  services: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navigation, services }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setServicesOpen(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-pulver-dark overflow-y-auto">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <Link href="/" onClick={onClose}>
            <Image
              src="/logo.svg"
              alt="Pulverkrāsotava"
              width={200}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <button
            type="button"
            className="p-2"
            onClick={onClose}
            aria-label="Close menu"
          >
            <Image
              src="/close.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      <nav className="container mt-8 pb-12">
        <ul className="space-y-4">
          {navigation.map((item) => (
            <li key={item.name}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-2xl font-bold text-pulver-light hover:text-pulver-gold transition-colors"
                  >
                    {item.name}
                    <svg
                      className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <ul className="mt-3 ml-4 space-y-3">
                      {services.map((service) => (
                        <li key={service.name}>
                          <Link
                            href={service.href}
                            onClick={onClose}
                            className="block text-lg text-pulver-text hover:text-pulver-gold transition-colors"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block text-2xl font-bold text-pulver-light hover:text-pulver-gold transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Contact info */}
        <div className="mt-10 pt-8 border-t border-pulver-grey">
          <a
            href="tel:+37126102841"
            className="flex items-center gap-3 text-pulver-gold text-lg font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            +371 26 102 841
          </a>
          <a
            href="mailto:info@pulverkrasotava.lv"
            className="flex items-center gap-3 text-pulver-light hover:text-pulver-gold transition-colors mt-4"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            info@pulverkrasotava.lv
          </a>
        </div>
      </nav>
    </div>
  );
}
