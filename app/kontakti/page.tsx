import { Metadata } from 'next';
import { PageHero } from '@/components/content';
import { ContactForm } from '@/components/forms';

export const metadata: Metadata = {
  title: 'Kontakti',
  description: 'Sazinieties ar Pulverkrāsotava - adrese, tālrunis, e-pasts un kontaktforma.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Kontakti"
        backgroundImage="/images/contact-us-background-image.jpg"
      />
      <section id="content" className="bg-pulver-dark section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-8">
                Sazināties ar mums
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pulver-grey rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pulver-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-pulver-light font-semibold mb-1">Adrese</h3>
                    <p className="text-pulver-text">
                      &quot;Vecvagari&quot;, Druvienas pag.<br />
                      Gulbenes nov., LV-4426<br />
                      Latvija
                    </p>
                    <a
                      href="https://waze.com/ul?ll=57.1566,26.7547&navigate=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-pulver-gold hover:text-pulver-light transition-colors mt-2 text-sm"
                    >
                      Atvērt Waze
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pulver-grey rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pulver-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-pulver-light font-semibold mb-1">Tālrunis</h3>
                    <a
                      href="tel:+37126102841"
                      className="text-pulver-gold hover:text-pulver-light transition-colors text-lg font-semibold"
                    >
                      +371 26 102 841
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pulver-grey rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pulver-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-pulver-light font-semibold mb-1">E-pasts</h3>
                    <a
                      href="mailto:info@pulverkrasotava.lv"
                      className="text-pulver-gold hover:text-pulver-light transition-colors"
                    >
                      info@pulverkrasotava.lv
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pulver-grey rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pulver-gold" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-pulver-light font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/37126102841"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pulver-gold hover:text-pulver-light transition-colors"
                    >
                      Rakstīt WhatsApp
                    </a>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pulver-grey rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pulver-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-pulver-light font-semibold mb-1">Darba laiks</h3>
                    <p className="text-pulver-text">
                      Pirmdiena - Piektdiena: 8:00 - 17:00<br />
                      Sestdiena: pēc iepriekšējas vienošanās<br />
                      Svētdiena: slēgts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-8">
                Nosūtiet ziņu
              </h2>
              <div className="bg-pulver-grey rounded-lg p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-pulver-grey">
        <div className="h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.5!2d26.7547!3d57.1566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb5f7c9e6e7c0d%3A0x8f7c5b5b5b5b5b5b!2sGulbene%2C+Latvia!5e0!3m2!1sen!2slv!4v1600000000000!5m2!1sen!2slv"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pulverkrāsotava location - Gulbene"
          ></iframe>
        </div>
      </section>
    </>
  );
}
