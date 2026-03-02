import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Metāla Izstrādājumi un Mēbeles - Ražošana pēc Pasūtījuma',
  description: 'Metāla izstrādājumu un mēbeļu ražošana Gulbenē, Vidzemē - komerciālās mēbeles, noliktavu aprīkojums, rūpnieciskās konstrukcijas pēc individuāla pasūtījuma. Zvaniet +371 26 102 841.',
  alternates: {
    canonical: '/pakalpojumi/metala-koka-mebelu-izgatavosana-darza-mebeles-ara-mebeles',
  },
};

const faqItems = [
  {
    question: 'Kādus metāla izstrādājumus varat ražot?',
    answer: 'Ražojam plašu klāstu metāla izstrādājumu - komerciālās mēbeles (galdus, soliņus, plauktus), noliktavu aprīkojumu, rūpnieciskās konstrukcijas, lauksaimniecības aprīkojuma elementus un citus metāla izstrādājumus pēc individuāla pasūtījuma.',
  },
  {
    question: 'Vai varat izgatavot pēc mūsu rasējumiem vai specifikācijām?',
    answer: 'Jā, izgatavosim izstrādājumus pēc jūsu tehniskajiem rasējumiem, specifikācijām vai skicēm. Varam arī palīdzēt ar tehnisko projektu izstrādi, ja jums ir tikai ideja.',
  },
  {
    question: 'Vai piedāvājat sērijveida ražošanu?',
    answer: 'Jā, piedāvājam gan individuālu, gan sērijveida ražošanu. Lielākiem apjomiem nodrošinām izdevīgākas vienības cenas un stabilu piegādes grafiku.',
  },
  {
    question: 'Kādi materiāli un apdare ir pieejami?',
    answer: 'Izmantojam dažāda veida tēraudu, nerūsējošo tēraudu un alumīniju. Metāla izstrādājumi tiek pulverkrāsoti, nodrošinot ilgmūžīgu aizsardzību pret koroziju. Koka elementi - termiski apstrādāta priede vai ozols.',
  },
  {
    question: 'Cik ilgi kalpo jūsu izstrādājumi?',
    answer: 'Ar pulverkrāsas pārklājumu metāla izstrādājumi kalpo 15-20 gadus un vairāk. Tie ir izturīgi pret laikapstākļiem, mehāniskiem bojājumiem un koroziju.',
  },
];

export default function MetalaIzstradajumiPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Pakalpojumi', href: '/pakalpojumi' },
        { name: 'Metāla izstrādājumi un mēbeles', href: '/pakalpojumi/metala-koka-mebelu-izgatavosana-darza-mebeles-ara-mebeles' },
      ]} />
      <ServiceSchema
        name="Metāla izstrādājumu un mēbeļu ražošana"
        description="Metāla izstrādājumu un mēbeļu ražošana pēc individuāla pasūtījuma - komerciālās mēbeles, noliktavu aprīkojums, rūpnieciskās konstrukcijas."
        url="/pakalpojumi/metala-koka-mebelu-izgatavosana-darza-mebeles-ara-mebeles"
        image="/images/services/mebeles-1.jpg"
      />
      <FaqSchema items={faqItems} />
      <PageHero
        title="Metāla izstrādājumi un mēbeles"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Metāla izstrādājumu un mēbeļu ražošana</h2>
        <p>
          Piedāvājam metāla izstrādājumu un mēbeļu ražošanu pēc individuāla pasūtījuma.
          No komerciālajām mēbelēm un noliktavu aprīkojuma līdz rūpnieciskajām
          konstrukcijām - mēs izgatavosim tieši to, kas nepieciešams jūsu uzņēmumam.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/mebeles-1.jpg"
        imageAlt="Metāla izstrādājumi"
        imagePosition="right"
      >
        <h3>Ko varam izgatavot?</h3>
        <ul>
          <li><strong>Komerciālās mēbeles</strong> - galdi, soliņi, plaukti publiskām telpām un uzņēmumiem</li>
          <li><strong>Noliktavu aprīkojums</strong> - metāla plaukti, statīvi, ratiņi</li>
          <li><strong>Āra aprīkojums</strong> - soliņi, atkritumu urnas, velostatīvi publiskām teritorijām</li>
          <li><strong>Rūpnieciskās konstrukcijas</strong> - darba galdi, rāmji, turētāji</li>
          <li><strong>Lauksaimniecības aprīkojums</strong> - barošanas sistēmas, nožogojumi, konstrukcijas</li>
          <li><strong>Individuāli projekti</strong> - pēc jūsu specifikācijām un rasējumiem</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/mebeles-2.jpg"
        imageAlt="Metāla mēbeles"
        imagePosition="left"
      >
        <h3>Kvalitāte un izturība</h3>
        <p>
          Mūsu izstrādājumi ir:
        </p>
        <ul>
          <li>Izturīgi pret laikapstākļiem un mehāniskiem bojājumiem</li>
          <li>Ar pulverkrāsotu metāla rāmi ilgmūžīgai aizsardzībai</li>
          <li>Piemēroti intensīvai komerciālai lietošanai</li>
          <li>Izgatavoti no augstas kvalitātes materiāliem</li>
          <li>Pieejami sērijveida ražošanā</li>
          <li>Ar pilnu servisu - no projekta līdz uzstādīšanai</li>
        </ul>
      </TextWithImage>

      <FaqAccordion title="Biežāk uzdotie jautājumi" items={faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešami metāla izstrādājumi jūsu uzņēmumam?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums, lai apspriestu jūsu projektu un saņemtu bezmaksas konsultāciju un izmaksu aprēķinu.
          </p>
          <Link href="/kontakti" className="btn btn-primary">
            Sazināties ar mums
          </Link>
        </div>
      </section>
    </>
  );
}
