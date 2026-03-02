import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Koka Metāla Mēbeles - Dārza un Āra Mēbeles pēc Pasūtījuma',
  description: 'Metāla un koka mēbeļu izgatavošana Gulbenē, Vidzemē - dārza mēbeles, āra mēbeles, soliņi, galdi pēc individuāla pasūtījuma. Zvaniet +371 26 102 841.',
  alternates: {
    canonical: '/pakalpojumi/metala-koka-mebelu-izgatavosana-darza-mebeles-ara-mebeles',
  },
};

const faqItems = [
  {
    question: 'Kādas mēbeles varat izgatavot?',
    answer: 'Izgatavosim dārza soliņus, galdus, šūpuļus, āra mēbeļu komplektus, puķu kastes un jebkuras citas metāla un koka mēbeles pēc jūsu individuāla pasūtījuma.',
  },
  {
    question: 'Vai mēbeles ir izturīgas pret laikapstākļiem?',
    answer: 'Jā, metāla rāmji tiek pulverkrāsoti, kas nodrošina lielisku aizsardzību pret koroziju. Koka elementi tiek apstrādāti ar speciāliem aizsarglīdzekļiem.',
  },
  {
    question: 'Kādu koku izmantojat?',
    answer: 'Visbiežāk izmantojam termiski apstrādātu priedi vai ozolu, kas ir izturīgi pret mitrumu un laikapstākļiem. Pēc vēlēšanās varam izmantot arī citus koku veidus.',
  },
  {
    question: 'Cik ilgi kalpo āra mēbeles?',
    answer: 'Ar pareizu kopšanu mūsu metāla un koka mēbeles kalpo 10-15 gadus un vairāk. Pulverkrāsotais metāla rāmis nodrošina ilgmūžīgu aizsardzību.',
  },
  {
    question: 'Vai varat izgatavot pēc maniem rasējumiem?',
    answer: 'Jā, izgatavosim mēbeles pēc jūsu skicēm vai fotogrāfijām. Varam arī palīdzēt ar dizaina izstrādi, ja jums ir tikai ideja.',
  },
];

export default function KokaMebelesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Pakalpojumi', href: '/pakalpojumi' },
        { name: 'Koka metāla mēbeles', href: '/pakalpojumi/metala-koka-mebelu-izgatavosana-darza-mebeles-ara-mebeles' },
      ]} />
      <ServiceSchema
        name="Koka metāla mēbeļu izgatavošana"
        description="Metāla un koka mēbeļu izgatavošana - dārza mēbeles, āra mēbeles, soliņi, galdi pēc individuāla pasūtījuma."
        url="/pakalpojumi/metala-koka-mebelu-izgatavosana-darza-mebeles-ara-mebeles"
        image="/images/services/mebeles-1.jpg"
      />
      <FaqSchema items={faqItems} />
      <PageHero
        title="Koka metāla mēbeles"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Metāla un koka mēbeļu izgatavošana</h2>
        <p>
          Piedāvājam unikālas metāla un koka mēbeles pēc individuāla pasūtījuma.
          Dārza mēbeles, āra mēbeles, soliņi un galdi - mēs izgatavosim tieši to,
          ko vēlaties.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/mebeles-1.jpg"
        imageAlt="Dārza mēbeles"
        imagePosition="right"
      >
        <h3>Ko varam izgatavot?</h3>
        <ul>
          <li><strong>Dārza soliņi</strong> - klasiskā un modernā dizainā</li>
          <li><strong>Dārza galdi</strong> - piknika un terases galdi</li>
          <li><strong>Āra mēbeļu komplekti</strong> - pilni mēbeļu komplekti</li>
          <li><strong>Puķu kastes</strong> - metāla puķu kastes un paliktņi</li>
          <li><strong>Šūpuļi</strong> - dārza šūpuļi un krēsli</li>
          <li><strong>Individuāli projekti</strong> - pēc jūsu skicēm</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/mebeles-2.jpg"
        imageAlt="Āra mēbeles"
        imagePosition="left"
      >
        <h3>Materiāli un kvalitāte</h3>
        <p>
          Mūsu mēbeles ir:
        </p>
        <ul>
          <li>Izturīgas pret laikapstākļiem</li>
          <li>Ar pulverkrāsotu metāla rāmi</li>
          <li>Ar kvalitatīvu koka apdari</li>
          <li>Izturīgas un ilgmūžīgas</li>
          <li>Estētiski pievilcīgas</li>
          <li>Viegli kopjamas</li>
        </ul>
      </TextWithImage>

      <FaqAccordion title="Biežāk uzdotie jautājumi" items={faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Vēlaties unikālas mēbeles?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums, lai apspriestu jūsu idejas un saņemtu bezmaksas konsultāciju.
          </p>
          <Link href="/kontakti" className="btn btn-primary">
            Sazināties ar mums
          </Link>
        </div>
      </section>
    </>
  );
}
