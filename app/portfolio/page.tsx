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
  { key: 'pulverkrasosana', label: 'Pulverkrāsošana' },
  { key: 'metalapstrade', label: 'Metālapstrāde' },
  { key: 'mebeles', label: 'Mēbeles un izstrādājumi' },
  { key: 'konstrukcijas', label: 'Konstrukcijas' },
  { key: 'varti-zogi', label: 'Vārti un žogi' },
  { key: 'stendi', label: 'Stendi un izkārtnes' },
];

const portfolioItems = [
  // Pulverkrāsošana (10)
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-1.jpg', alt: 'Pulverkrāsošanas darbnīca', category: 'pulverkrasosana' },
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-2.jpg', alt: 'Pulverkrāsošanas process', category: 'pulverkrasosana' },
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-3.jpg', alt: 'Pulverkrāsošanas iekārta', category: 'pulverkrasosana' },
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-4.jpg', alt: 'Pulverkrāsošanas kabīne', category: 'pulverkrasosana' },
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-5.jpg', alt: 'Detaļu sagatavošana krāsošanai', category: 'pulverkrasosana' },
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-6.jpg', alt: 'Cietināšanas krāsns', category: 'pulverkrasosana' },
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-7.jpg', alt: 'Pulverkrāsotas detaļas', category: 'pulverkrasosana' },
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-8.jpg', alt: 'Pulverkrāsošanas rezultāts', category: 'pulverkrasosana' },
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-9.jpg', alt: 'Gatavie izstrādājumi', category: 'pulverkrasosana' },
  { src: '/images/portfolio/pulverkrasosana/pulverkrasosana-process.jpg', alt: 'Pulverkrāsošanas tehnoloģija', category: 'pulverkrasosana' },

  // Metālapstrāde (9)
  { src: '/images/portfolio/metalapstrade/metalapstrade.jpg', alt: 'Metālapstrādes darbnīca', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/detalu-izgatavosana.jpg', alt: 'Metāla detaļu izgatavošana', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/urbsana.jpg', alt: 'Metāla urbšana', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/metinasana.jpg', alt: 'Metināšana', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/lentzagis.jpg', alt: 'Lentzāģa griešana', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/lentzagis-2.jpg', alt: 'Lentzāģis - tuvplāns', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/metalapstrade-process.jpeg', alt: 'Metālapstrādes process', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/metalapstrade-process-2.jpeg', alt: 'Metāla apstrāde', category: 'metalapstrade' },
  { src: '/images/portfolio/metalapstrade/smilsu-strukla.jpeg', alt: 'Smilšu strūklošana', category: 'metalapstrade' },

  // Mēbeles un izstrādājumi (11)
  { src: '/images/portfolio/mebeles/metala-koka-galds.jpg', alt: 'Metāla un koka galds', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/mebelu-izgatavosana.jpg', alt: 'Mēbeļu izgatavošana', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/datora-galds.jpg', alt: 'Datora galds - metāla rāmis', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/plaukts-1.jpg', alt: 'Metāla plaukts', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/plaukts-2.jpg', alt: 'Metāla plaukts - modelis 2', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/grozs.jpg', alt: 'Metāla grozs', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/darza-mebeles.jpg', alt: 'Dārza mēbeles', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/darza-mebeles-2.jpg', alt: 'Āra mēbeles - komplekts', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/kafeijnicas-galds.jpg', alt: 'Kafejnīcas galds', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/kafeijnicas-mebeles.jpg', alt: 'Kafejnīcas mēbeles', category: 'mebeles' },
  { src: '/images/portfolio/mebeles/terases-mebeles.jpg', alt: 'Terases mēbeles', category: 'mebeles' },

  // Konstrukcijas (5)
  { src: '/images/portfolio/konstrukcijas/margas.jpg', alt: 'Metāla margas', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/margas-pulverkrasotava.jpg', alt: 'Pulverkrāsotas margas', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/atkritumu-urnas.jpg', alt: 'Metāla atkritumu urnas', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/soli.jpg', alt: 'Metāla un koka soliņš', category: 'konstrukcijas' },
  { src: '/images/portfolio/konstrukcijas/metala-konstrukcijas.jpg', alt: 'Metāla konstrukciju izgatavošana', category: 'konstrukcijas' },

  // Vārti un žogi (6)
  { src: '/images/portfolio/varti-zogi/varti.jpg', alt: 'Metāla vārti', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/setas.jpg', alt: 'Metāla sēta', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/zogi.jpg', alt: 'Metāla žogs', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/restauracija-1.png', alt: 'Vārtu restaurācija - pirms', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/restauracija-2.png', alt: 'Vārtu restaurācija - pēc', category: 'varti-zogi' },
  { src: '/images/portfolio/varti-zogi/restauracija-3.png', alt: 'Žogu atjaunošana', category: 'varti-zogi' },

  // Stendi un izkārtnes (4)
  { src: '/images/portfolio/stendi/izkartne.jpg', alt: 'Metāla izkārtne', category: 'stendi' },
  { src: '/images/portfolio/stendi/izkartnes.jpg', alt: 'Izkārtņu kolekcija', category: 'stendi' },
  { src: '/images/portfolio/stendi/stends.jpg', alt: 'Reklāmas stends', category: 'stendi' },
  { src: '/images/portfolio/stendi/veikala-stends.jpg', alt: 'Veikala stends', category: 'stendi' },
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
