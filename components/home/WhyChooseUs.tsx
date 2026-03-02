import Image from 'next/image';

interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsProps {
  title?: string;
  items?: WhyChooseUsItem[];
}

const defaultItems: WhyChooseUsItem[] = [
  {
    title: 'Kvalitāte',
    description: 'Tikai kvalitatīvi materiāli',
    icon: '/images/why-choose-us/quality.svg',
  },
  {
    title: 'Garantija',
    description: 'Sākot no 1 gada',
    icon: '/images/why-choose-us/warranty.svg',
  },
  {
    title: 'Pieredze',
    description: 'Kopš 2018. gada',
    icon: '/images/why-choose-us/experience.svg',
  },
  {
    title: 'Gandarījums',
    description: '99% apmierinātu klientu',
    icon: '/images/why-choose-us/satisfaction.svg',
  },
];

export default function WhyChooseUs({
  title = "Kāpēc izvēlēties mūs?",
  items = defaultItems,
}: WhyChooseUsProps) {
  return (
    <section className="bg-pulver-grey section-padding">
      <div className="container">
        <h2 className="text-center text-pulver-light text-3xl md:text-4xl font-bold mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-pulver-gold text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-pulver-text text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
