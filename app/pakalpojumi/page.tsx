import { Metadata } from 'next';
import { PageHero } from '@/components/content';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pakalpojumi | Pulverkrāsotava',
  description: 'Pulverkrāsotava piedāvā pulverkrāsošanu, smilšu strūklošanu, metālapstrādi, metāla konstrukciju izgatavošanu, mēbeļu izgatavošanu un vārtu atjaunošanu.',
};

const services = [
  {
    title: 'Pulverkrāsošana',
    slug: 'pulverkrasosana',
    icon: '/images/services/service_1.svg',
    description: 'Profesionāla pulverkrāsošana ar plašu RAL krāsu izvēli. Izturīgs un ilgmūžīgs pārklājums metāla izstrādājumiem.',
  },
  {
    title: 'Smilšu strūklošana',
    slug: 'smilsu-strukla-smilsu-struklosana',
    icon: '/images/services/service_2.svg',
    description: 'Efektīva metāla virsmu sagatavošana - rūsas, vecās krāsas un netīrumu pilnīga noņemšana.',
  },
  {
    title: 'Metālapstrāde',
    slug: 'metalapstrade',
    icon: '/images/services/service_3.svg',
    description: 'Metāla griešana, locīšana, metināšana un citi metālapstrādes pakalpojumi.',
  },
  {
    title: 'Metāla konstrukcijas',
    slug: 'metala-konstrukciju-izgatavosana-metala-izstradajumi',
    icon: '/images/services/service_1.svg',
    description: 'Metāla konstrukciju izgatavošana pēc individuāliem projektiem - kāpnes, margas, vārti, žogi.',
  },
  {
    title: 'Koka metāla mēbeles',
    slug: 'metala-koka-mebelu-izgatavosana-darza-mebeles-ara-mebeles',
    icon: '/images/services/service_2.svg',
    description: 'Metāla un koka mēbeļu izgatavošana - dārza mēbeles, āra mēbeles, soliņi pēc pasūtījuma.',
  },
  {
    title: 'Vārtu un žogu atjaunošana',
    slug: 'vartu-un-zogu-atjaunosana',
    icon: '/images/services/service_3.svg',
    description: 'Pilns vārtu un žogu atjaunošanas serviss - smilšu strūklošana un pulverkrāsošana.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Mūsu pakalpojumi" />
      <section id="services" className="bg-pulver-dark section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/pakalpojumi/${service.slug}`}
                className="group bg-pulver-grey rounded-lg p-8 text-center hover:bg-pulver-gold transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt=""
                    width={80}
                    height={80}
                    className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-0 group-hover:invert-0 transition-all"
                  />
                </div>
                <h3 className="text-pulver-light text-xl font-bold group-hover:text-pulver-dark transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-pulver-text group-hover:text-pulver-dark/70 transition-colors text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pulver-grey section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
              Individuāla pieeja katram klientam
            </h2>
            <p className="text-pulver-white leading-relaxed mb-8">
              Mēs piedāvājam visaptverošus metāla apstrādes pakalpojumus, sākot no virsmas sagatavošanas
              līdz pat gala pārklājumam. Katrs projekts tiek izvērtēts individuāli, lai nodrošinātu
              optimālu risinājumu un labāko iespējamo rezultātu.
            </p>
            <p className="text-pulver-text mb-8">
              Sazinieties ar mums, lai apspriestu savu projektu un saņemtu bezmaksas konsultāciju.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakti" className="btn btn-primary">
                Sazināties ar mums
              </Link>
              <Link href="/cenas" className="btn btn-secondary">
                Apskatīt cenas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
