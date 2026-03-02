import Image from 'next/image';
import Link from 'next/link';

interface Service {
  title: string;
  slug: string;
  icon: string;
  shortDescription?: string;
}

interface ServicesGridProps {
  title?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: 'Pulverkrāsošana',
    slug: 'pakalpojumi/pulverkrasosana',
    icon: '/images/services/service_1.svg',
    shortDescription: 'Augsta kvalitātes pulverkrāsošana ar plašu krāsu izvēli',
  },
  {
    title: 'Smilšu strūklošana',
    slug: 'pakalpojumi/smilsu-strukla-smilsu-struklosana',
    icon: '/images/services/service_2.svg',
    shortDescription: 'Profesionāla virsmu sagatavošana un tīrīšana',
  },
  {
    title: 'Metālapstrāde',
    slug: 'pakalpojumi/metalapstrade',
    icon: '/images/services/service_3.svg',
    shortDescription: 'Kvalitatīva metāla izstrādājumu apstrāde',
  },
];

export default function ServicesGrid({
  title = "Mūsu pakalpojumi",
  services = defaultServices,
}: ServicesGridProps) {
  return (
    <section id="services" className="bg-pulver-dark section-padding">
      <div className="container">
        <h2 className="text-center text-pulver-light text-3xl md:text-4xl font-bold mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group bg-pulver-grey rounded-lg p-8 text-center hover:bg-pulver-gold transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-0 group-hover:invert-0 transition-all"
                />
              </div>
              <h3 className="text-pulver-light text-xl font-bold group-hover:text-pulver-dark transition-colors">
                {service.title}
              </h3>
              {service.shortDescription && (
                <p className="mt-3 text-pulver-text group-hover:text-pulver-dark/70 transition-colors text-sm">
                  {service.shortDescription}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
