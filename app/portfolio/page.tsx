import { Metadata } from 'next';
import { PageHero, PortfolioGallery } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Portfolio - Mūsu Darbi',
  description: 'Pulverkrāsotava portfolio - pulverkrāsošana, metāla konstrukcijas, mēbeles, vārti, žogi, stendi un citi metāla izstrādājumi. Apskatiet mūsu darbus.',
  alternates: {
    canonical: '/portfolio',
  },
};

const categories = [
  { key: 'konstrukcijas', label: 'Konstrukcijas' },
  { key: 'varti-zogi', label: 'Vārti un žogi' },
  { key: 'mebeles', label: 'Mēbeles un izstrādājumi' },
  { key: 'stendi', label: 'Stendi un izkārtnes' },
  { key: 'metalapstrade', label: 'Metālapstrāde' },
  { key: 'pulverkrasosana', label: 'Pulverkrāsošana' },
  { key: 'darbnīca', label: 'Darbnīca' },
];

const portfolioItems = [
  // Konstrukcijas - margas
  { src: '/images/portfolio/konstrukcijas/margas-1.jpg', alt: 'Metāla margas', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/margas-2.jpg', alt: 'Metāla margas - projekts', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/margas-3.jpg', alt: 'Metāla margas - detaļa', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/margas-pulverkrasotava-1.jpg', alt: 'Pulverkrāsotas margas', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/margas-pulverkrasotava-2.jpg', alt: 'Pulverkrāsotas margas - uzstādītas', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/margas-pulverkrasotava-3.jpg', alt: 'Pulverkrāsotas margas - tuvplāns', category: 'konstrukcijas' },
  // Konstrukcijas - atkritumu urnas
  { src: '/images/portfolio/konstrukcijas/atkritumu-urnas-1.jpg', alt: 'Metāla atkritumu urna', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/atkritumu-urnas-2.jpg', alt: 'Atkritumu urnas - modelis 2', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/atkritumu-urnas-3.jpg', alt: 'Atkritumu urnas - publiskām telpām', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/atkritumu-urnas-4.jpg', alt: 'Atkritumu urnas - āra', category: 'konstrukcijas' },
  // Konstrukcijas - soli
  { src: '/images/portfolio/konstrukcijas/soli-1.jpg', alt: 'Metāla un koka soliņš', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/soli-2.jpg', alt: 'Āra soliņš - parks', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/soli-3.jpg', alt: 'Soliņš - publiskā telpa', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/metala-konstrukcijas.jpg', alt: 'Metāla konstrukciju izgatavošana', category: 'konstrukcijas' },

  // Vārti un žogi
  { src: '/images/portfolio/varti-zogi/varti-1.jpg', alt: 'Metāla vārti', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/varti-2.jpg', alt: 'Vārti - projekts 2', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/varti-3.jpg', alt: 'Vārti - kalti elementi', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/varti-4.jpg', alt: 'Vārti - atjaunoti', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/setas-1.jpg', alt: 'Metāla žogs', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/setas-2.jpg', alt: 'Žogs - projekts 2', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/setas-3.jpg', alt: 'Žogs - detaļa', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/zogi-1.jpg', alt: 'Sēta - pulverkrāsota', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/zogi-2.jpg', alt: 'Sēta - uzstādīta', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/restauracija-1.png', alt: 'Vārtu restaurācija', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/restauracija-2.png', alt: 'Žogu restaurācija', category: 'varti-zogi' },

  // Mēbeles
  { src: '/images/portfolio/mebeles/metala-koka-galds.jpg', alt: 'Metāla un koka galds', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/mebelu-izgatavosana.jpg', alt: 'Mēbeļu izgatavošana', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/datora-galds.jpg', alt: 'Datora galds - metāla rāmis', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/plaukts-1.jpg', alt: 'Metāla plaukts', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/plaukts-2.jpg', alt: 'Metāla plaukts - modelis 2', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/darza-mebeles.jpg', alt: 'Āra mēbeles', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/kafeijnicas-galds.jpg', alt: 'Kafejnīcas galds', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/kafeijnicas-mebeles.jpg', alt: 'Kafejnīcas mēbeles - komplekts', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/terases-mebeles.jpg', alt: 'Terases mēbeles', category: 'mebeles' },

  // Stendi un izkārtnes
  { src: '/images/portfolio/stendi/izkartne-1.jpg', alt: 'Metāla izkārtne', category: 'stendi' },
  { src: '/images/portfolio/stendi/izkartne-2.jpg', alt: 'Izkārtne - projekts 2', category: 'stendi' },
  { src: '/images/portfolio/stendi/izkartne-3.jpg', alt: 'Izkārtne - uzstādīta', category: 'stendi' },
  { src: '/images/portfolio/stendi/izkartnes.jpg', alt: 'Izkārtņu kolekcija', category: 'stendi' },
  { src: '/images/portfolio/stendi/stends-1.jpg', alt: 'Reklāmas stends', category: 'stendi' },
  { src: '/images/portfolio/stendi/stends-2.jpg', alt: 'Reklāmas stends - modelis 2', category: 'stendi' },
  { src: '/images/portfolio/stendi/veikala-stends.jpg', alt: 'Veikala stends', category: 'stendi' },

  // Metālapstrāde
  { src: '/images/portfolio/metalapstrade/detalu-izgatavosana.jpg', alt: 'Metāla detaļu izgatavošana', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/urbsana.jpg', alt: 'Metāla urbšana', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/metinasana.jpg', alt: 'Metināšana', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/metalapstrade.jpg', alt: 'Metālapstrādes process', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/lentzagis.jpg', alt: 'Lentzāģa griešana', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/lentzagis-2.jpg', alt: 'Lentzāģis - tuvplāns', category: 'metalapstrade' },

  // Pulverkrāsošana
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-process.jpg', alt: 'Pulverkrāsošanas process', category: 'pulverkrasosana' },

  // Darbnīca
  { src: '/images/portfolio/darbnīca/darbnīca-1.jpg', alt: 'Pulverkrāsotava darbnīca', category: 'darbnīca' },
  { src: '/images/portfolio/darbnīca/darbnīca-2.jpg', alt: 'Darbnīca - iekārtas', category: 'darbnīca' },
  { src: '/images/portfolio/darbnīca/darbnīca-3.jpg', alt: 'Darbnīca - darba process', category: 'darbnīca' },
  { src: '/images/portfolio/darbnīca/darbnīca-4.jpg', alt: 'Darbnīca - aprīkojums', category: 'darbnīca' },
  { src: '/images/portfolio/darbnīca/darbnīca-5.jpg', alt: 'Darbnīca - krāsošanas zona', category: 'darbnīca' },
  { src: '/images/portfolio/darbnīca/darbnīca-6.jpg', alt: 'Darbnīca - metālapstrādes zona', category: 'darbnīca' },
];

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
      ]} />
      <PageHero title="Mūsu darbi" />
      <section className="bg-pulver-dark section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-4">
              Portfolio
            </h2>
            <p className="text-pulver-text">
              Apskatiet mūsu izpildītos projektus - metāla konstrukcijas, vārtus, žogus, mēbeles,
              stendus un citus metāla izstrādājumus. Visi darbi ir pulverkrāsoti mūsu darbnīcā Gulbenē.
            </p>
          </div>

          <PortfolioGallery items={portfolioItems} categories={categories} />
        </div>
      </section>

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Vēlaties līdzīgu projektu?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums, lai apspriestu jūsu projektu un saņemtu bezmaksas konsultāciju.
            Izgatavosim un pulverkrāsosim jebkurus metāla izstrādājumus pēc jūsu pasūtījuma.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakti" className="btn btn-primary">
              Sazināties ar mums
            </Link>
            <a href="tel:+37126102841" className="btn btn-secondary">
              +371 26 102 841
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
