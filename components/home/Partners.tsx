import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

interface PartnersProps {
  title?: string;
  partners?: Partner[];
}

const defaultPartners: Partner[] = [
  { name: 'BantAgro', logo: '/images/logos/BantAgro.png' },
  { name: 'KoneKesko', logo: '/images/logos/KoneKesko.png' },
  { name: 'InterCars', logo: '/images/logos/InterCars.png' },
  { name: 'Autoline', logo: '/images/logos/AutolineLogo.png' },
  { name: 'Intrac', logo: '/images/logos/Intrac.png' },
  { name: 'Are', logo: '/images/logos/AreLogo.png' },
  { name: 'Yraktor', logo: '/images/logos/Yraktor.png' },
  { name: 'Celam', logo: '/images/logos/Celam.png' },
];

export default function Partners({
  title = "Mūsu partneri",
  partners = defaultPartners,
}: PartnersProps) {
  return (
    <section className="bg-pulver-grey section-padding">
      <div className="container">
        <h2 className="text-center text-pulver-light text-3xl md:text-4xl font-bold mb-12">
          {title}
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
            >
              {partner.url ? (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </a>
              ) : (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
