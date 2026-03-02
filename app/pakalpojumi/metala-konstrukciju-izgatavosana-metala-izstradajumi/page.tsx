import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Metāla Konstrukcijas - Izgatavošana pēc Pasūtījuma',
  description: 'Metāla konstrukciju izgatavošana Gulbenē, Vidzemē - rūpnieciskās konstrukcijas, kāpnes, margas, vārti pēc individuāla pasūtījuma. B2B pakalpojumi uzņēmumiem. Zvaniet +371 26 102 841.',
  alternates: {
    canonical: '/pakalpojumi/metala-konstrukciju-izgatavosana-metala-izstradajumi',
  },
};

const faqItems = [
  {
    question: 'Kādas metāla konstrukcijas varat izgatavot?',
    answer: 'Izgatavosim jebkura veida metāla konstrukcijas - kāpnes, margas, balkonu nožogojumus, vārtus, žogus, nojumes, auto nojumes, terases un citas konstrukcijas pēc individuāla projekta.',
  },
  {
    question: 'Vai piedāvājat arī montāžu?',
    answer: 'Jā, piedāvājam pilnu servisu - no projekta izstrādes un izgatavošanas līdz montāžai jūsu objektā. Iespējama arī pulverkrāsošana pirms montāžas.',
  },
  {
    question: 'Kā notiek pasūtīšanas process?',
    answer: 'Vispirms apspriežam jūsu ideju un veicam uzmērīšanu. Tad sagatavojam projektu un piedāvājumu. Pēc apstiprināšanas sākam izgatavošanu un veicam montāžu.',
  },
  {
    question: 'Kādi materiāli tiek izmantoti?',
    answer: 'Izmantojam dažādu veidu tēraudu, nerūsējošo tēraudu un alumīniju. Materiāla izvēle tiek pielāgota konkrētajam projektam un ekspluatācijas apstākļiem.',
  },
  {
    question: 'Vai varat izgatavot arī nestandarta izmēru konstrukcijas?',
    answer: 'Jā, katrs projekts tiek izgatavots individuāli pēc jūsu izmēriem un vēlmēm. Mēs neizmantojam standarta šablonus - katra konstrukcija ir unikāla.',
  },
];

export default function MetalaKonstrukcijasPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Pakalpojumi', href: '/pakalpojumi' },
        { name: 'Metāla konstrukcijas', href: '/pakalpojumi/metala-konstrukciju-izgatavosana-metala-izstradajumi' },
      ]} />
      <ServiceSchema
        name="Metāla konstrukciju izgatavošana"
        description="Metāla konstrukciju izgatavošana pēc individuāla pasūtījuma - kāpnes, margas, vārti, žogi, nojumes."
        url="/pakalpojumi/metala-konstrukciju-izgatavosana-metala-izstradajumi"
        image="/images/services/konstrukcijas-1.jpg"
      />
      <FaqSchema items={faqItems} />
      <PageHero
        title="Metāla konstrukcijas"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Metāla konstrukciju izgatavošana</h2>
        <p>
          Piedāvājam metāla konstrukciju izgatavošanu pēc individuāliem projektiem.
          No vienkāršām margām līdz sarežģītām industriālām konstrukcijām - mēs
          varam realizēt jūsu idejas.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/konstrukcijas-1.jpg"
        imageAlt="Metāla konstrukcijas"
        imagePosition="right"
      >
        <h3>Ko varam izgatavot?</h3>
        <ul>
          <li><strong>Kāpnes</strong> - iekštelpu un āra kāpnes</li>
          <li><strong>Margas</strong> - balkonu, terašu un kāpņu margas</li>
          <li><strong>Vārti</strong> - iebraucamie un gājēju vārti</li>
          <li><strong>Žogi</strong> - dekoratīvie un drošības žogi</li>
          <li><strong>Nojumes</strong> - noliktavu, ražotņu un teritoriju nojumes</li>
          <li><strong>Rūpnieciskās konstrukcijas</strong> - rāmji, turētāji, stiprinājumi ražotnēm</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/konstrukcijas-2.jpg"
        imageAlt="Gatavās konstrukcijas"
        imagePosition="left"
      >
        <h3>Mūsu priekšrocības</h3>
        <p>
          Kāpēc izvēlēties mūs?
        </p>
        <ul>
          <li>Individuāla pieeja katram projektam</li>
          <li>Kvalificēti speciālisti</li>
          <li>Moderna iekārta</li>
          <li>Pilns serviss - no projekta līdz montāžai</li>
          <li>Iespēja apvienot ar pulverkrāsošanu</li>
          <li>Konkurētspējīgas cenas</li>
        </ul>
      </TextWithImage>

      <FaqAccordion title="Biežāk uzdotie jautājumi" items={faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešama metāla konstrukcija?
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
