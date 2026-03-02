'use client';

import Link from 'next/link';
import Image from 'next/image';
import QuickQuestionForm from '../forms/QuickQuestionForm';

const footerLinks = [
  { name: 'Privātuma politika', href: '/privatums' },
  { name: 'Lietošanas noteikumi', href: '/lietosanas-noteikumi' },
  { name: 'Atruna', href: '/atruna' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
];

const socialLinks = [
  {
    name: 'Waze',
    href: 'https://waze.com/ul?ll=57.1566,26.7547&navigate=yes',
    icon: (
      <svg viewBox="0 0 32.3 32.3" fill="currentColor" className="w-8 h-8">
        <path d="M26.5,0H5.8C2.6,0,0,2.6,0,5.8v20.7c0,3.2,2.6,5.8,5.8,5.8h20.7c3.2,0,5.8-2.6,5.8-5.8V5.8C32.3,2.6,29.7,0,26.5,0z M30.7,26.5c0,2.3-1.9,4.1-4.1,4.1H5.8c-2.3,0-4.1-1.9-4.1-4.1V5.8c0-2.3,1.9-4.1,4.1-4.1h20.7c2.3,0,4.1,1.9,4.1,4.1V26.5z"/>
        <path d="M12.2,7.4c-2,1-3.6,2.4-4.5,4.5c-0.4,1-0.5,2.1-0.6,3.3C7,15.9,7,16.5,6.8,17.1c-0.2,0.7-0.6,1-1.4,1.1c-0.5,0-0.9,0.2-1.1,0.7c-0.2,0.5-0.1,0.9,0.2,1.3c0.9,1.1,2,2,3.3,2.6c0.3,0.2,0.7,0.3,1,0.4c-0.2,1.6,0.4,2.7,1.7,3c0.6,0.1,1.1,0,1.6-0.3c0.7-0.4,1.1-1.1,1.1-1.8c0.6,0,1.1,0,1.7,0c0.6,0,1.1,0,1.7,0c0.2,1.7,1.7,2.4,2.8,2.1c0.6-0.1,1-0.4,1.4-0.9c0.5-0.7,0.5-1.4,0.3-2.1c0.6-0.4,1.1-0.7,1.6-1.1c2-1.5,3.2-3.5,3.4-6c0.3-2.6-0.6-4.9-2.4-6.8C20.8,6.3,16.1,5.5,12.2,7.4z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/37126102841',
    icon: (
      <svg viewBox="0 0 34 34.3" fill="currentColor" className="w-8 h-8">
        <path d="M33.6,13.2C31.7,4.3,23.1-1.4,14.1,0.3C6.8,1.7,1.3,7.9,0.7,15.3c-0.3,3.5,0.5,6.8,2.2,9.8c0.1,0.1,0.1,0.3,0,0.4c-0.4,1.3-0.9,2.6-1.3,3.8C1.1,31,0.6,32.6,0,34.3c0.1,0,0.2-0.1,0.3-0.1c2.9-0.9,5.8-1.9,8.7-2.8c0.2-0.1,0.3,0,0.5,0c3.4,1.8,7.1,2.4,10.9,1.7C29.6,31.4,35.6,22.3,33.6,13.2z M19.8,30.4c-3.5,0.6-6.8,0-9.9-1.9c-0.2-0.1-0.3-0.1-0.5-0.1c-1.6,0.5-3.2,1-4.8,1.5c-0.1,0-0.2,0.1-0.3,0.1c0.4-1.3,0.8-2.5,1.2-3.7c0.1-0.4,0.3-0.8,0.4-1.3c0.1-0.2,0-0.3-0.1-0.4c-1.9-2.7-2.7-5.8-2.5-9.1C3.9,10,7.8,5.1,13.2,3.4c8-2.5,16.4,2.7,17.8,10.9C32.3,21.8,27.2,29.1,19.8,30.4z"/>
        <path d="M25.6,20.8c-0.5-0.3-1-0.5-1.5-0.8c-0.6-0.3-1.3-0.7-1.9-1c-0.4-0.2-0.6-0.1-0.9,0.3c-0.4,0.5-0.9,1-1.4,1.6c-0.3,0.3-0.5,0.3-0.8,0.2c-2.5-1.1-4.4-2.9-5.7-5.2c-0.2-0.4-0.2-0.6,0.1-1c0.4-0.4,0.7-0.9,1.1-1.4c0.2-0.2,0.2-0.5,0.1-0.7c-0.4-1-0.7-1.9-1.1-2.9c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.3-0.3-0.4-0.6-0.4c-0.2,0-0.5,0-0.7-0.1c-0.5-0.1-0.9,0.1-1.2,0.4C9.6,9.9,9,11.2,9,13c0,0.4,0.2,1,0.4,1.7c0.4,1.2,1.1,2.1,1.8,3.1c0.9,1.4,2,2.6,3.3,3.8c1.8,1.6,3.9,2.4,6,3.2c1.4,0.5,2.6,0.2,3.8-0.5c1.2-0.6,1.6-1.7,1.7-2.9C26,21.1,25.9,20.9,25.6,20.8z"/>
      </svg>
    ),
  },
];

const followLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/pulverkrasotava',
    icon: (
      <svg viewBox="0 0 32.3 32.3" fill="currentColor" className="w-8 h-8">
        <path d="M26.5,1.6c2.3,0,4.1,1.9,4.1,4.1v20.7c0,2.3-1.9,4.1-4.1,4.1H5.8c-2.3,0-4.1-1.9-4.1-4.1V5.8c0-2.3,1.9-4.1,4.1-4.1H26.5 M26.5,0H5.8C2.6,0,0,2.6,0,5.8v20.7c0,3.2,2.6,5.8,5.8,5.8h20.7c3.2,0,5.8-2.6,5.8-5.8V5.8C32.3,2.6,29.7,0,26.5,0L26.5,0z"/>
        <path d="M18.6,9.5c0.6,0,2.2,0,2.2,0V6c0,0-2.3,0-2.8,0c-3,0-4.4,1.3-4.4,3.9c0,2.2,0,2.7,0,2.7h-2.1v3.5h2.1v10.2h4.1V16h2.9l0.3-3.4h-3.2c0,0,0-1.3,0-2C17.7,9.9,17.8,9.5,18.6,9.5z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCpulverkrasotava',
    icon: (
      <svg viewBox="0 0 32.45 32.45" fill="currentColor" className="w-8 h-8">
        <path d="M26.66,1.63a4.17,4.17,0,0,1,4.17,4.17V26.66a4.17,4.17,0,0,1-4.17,4.17H5.8a4.17,4.17,0,0,1-4.17-4.17V5.79A4.17,4.17,0,0,1,5.8,1.63H26.66m0-1.63H5.8A5.8,5.8,0,0,0,0,5.79V26.66a5.8,5.8,0,0,0,5.8,5.79H26.66a5.79,5.79,0,0,0,5.79-5.79V5.79A5.79,5.79,0,0,0,26.66,0"/>
        <path d="M13.37,20.21V12.65l7.56,3.78-7.56,3.78"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pulverkrasotava',
    icon: (
      <svg viewBox="0 0 32.3 32.3" fill="currentColor" className="w-8 h-8">
        <path d="M26.5,1.6c2.3,0,4.1,1.9,4.1,4.1v20.7c0,2.3-1.9,4.1-4.1,4.1H5.8c-2.3,0-4.1-1.9-4.1-4.1V5.8c0-2.3,1.9-4.1,4.1-4.1H26.5 M26.5,0H5.8C2.6,0,0,2.6,0,5.8v20.7c0,3.2,2.6,5.8,5.8,5.8h20.7c3.2,0,5.8-2.6,5.8-5.8V5.8C32.3,2.6,29.7,0,26.5,0L26.5,0z"/>
        <path d="M21.1,10.1c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1C22.2,10.6,21.7,10.1,21.1,10.1z"/>
        <path d="M16.1,11.4c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7S18.7,11.4,16.1,11.4z M16.1,19.2c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1C19.2,17.8,17.8,19.2,16.1,19.2z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pulver-dark section-padding">
      {/* Logo */}
      <div className="flex justify-center mb-12">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Pulverkrāsotava"
            width={250}
            height={60}
            className="h-14 w-auto"
          />
        </Link>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact section */}
          <div>
            <h3 className="text-pulver-light text-2xl font-bold mb-6">Sazināmies</h3>
            <p className="text-pulver-text mb-6 leading-relaxed">
              Lai saņemtu bezmaksas konsultāciju vai apspriestu jūsu projekta detaļas,
              droši sazinieties ar mums pa tālruni vai e-pastu. Mēs vienmēr labprāt palīdzam!
            </p>

            {/* Contact buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pulver-gold hover:text-pulver-light transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Follow us */}
            <div className="flex items-center gap-4">
              <span className="text-pulver-text">Seko mums:</span>
              <div className="flex gap-3">
                {followLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pulver-text hover:text-pulver-gold transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick question form */}
          <div>
            <h3 className="text-pulver-light text-2xl font-bold mb-6">Jautājums?</h3>
            <QuickQuestionForm />
          </div>
        </div>

        {/* Company info */}
        <div className="mt-12 pt-8 border-t border-pulver-grey">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-pulver-light font-semibold mb-3">Rekvizīti</h4>
              <p className="text-pulver-text text-sm leading-relaxed">
                SIA &quot;AFREK&quot;<br />
                Reģ. Nr.: LV44103123210<br />
                &quot;Vecvagari&quot;, Druvienas pag.,<br />
                Gulbenes nov., LV-4426
              </p>
            </div>
            <div>
              <h4 className="text-pulver-light font-semibold mb-3">Banka</h4>
              <p className="text-pulver-text text-sm leading-relaxed">
                AS Citadele banka<br />
                SWIFT: PARXLV22<br />
                IBAN: LV98PARX0022580170001
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-pulver-grey">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Footer links */}
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-pulver-text hover:text-pulver-gold transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-pulver-text text-sm">
              {currentYear} Pulverkrāsotava. Visas Tiesības Aizsargātas.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp button */}
      <a
        href="https://wa.me/37126102841"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}
