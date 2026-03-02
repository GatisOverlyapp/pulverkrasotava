import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Pulverkrāsošana - Profesionāls Metāla Pārklājums',
  description: 'Profesionāla pulverkrāsošana Gulbenē, Vidzemē. Izturīgs un ilgmūžīgs pārklājums metāla izstrādājumiem ar plašu RAL krāsu izvēli. Zvaniet +371 26 102 841.',
  alternates: {
    canonical: '/pakalpojumi/pulverkrasosana',
  },
};

const faqItems = [
  {
    question: 'Kas ir pulverkrāsošana?',
    answer: 'Pulverkrāsošana ir moderna metāla virsmu apstrādes tehnoloģija, kurā sausas krāsas pulvera daļiņas tiek elektrostatiski uzklātas uz metāla virsmas un pēc tam sacietētas krāsnī 160-200°C temperatūrā, veidojot izturīgu, vienmērīgu pārklājumu.',
  },
  {
    question: 'Cik ilgi kalpo pulverkrāsojums?',
    answer: 'Kvalitatīvs pulverkrāsojums kalpo 15-20 gadus un vairāk, atkarībā no ekspluatācijas apstākļiem. Tas ir ievērojami ilgāk nekā tradicionālā krāsošana.',
  },
  {
    question: 'Kādas krāsas ir pieejamas?',
    answer: 'Piedāvājam visas RAL kataloga krāsas, kā arī metāliskās, matētās, spīdīgās un struktūras faktūras. Kopā pieejamas vairāk nekā 2500 krāsu toņu.',
  },
  {
    question: 'Ko var pulverkrāsot?',
    answer: 'Pulverkrāsot var jebkurus metāla izstrādājumus - auto diskus, vārtus, žogus, margas, mēbeles, fasādes elementus, rūpnieciskās iekārtas un daudz ko citu.',
  },
  {
    question: 'Cik ātri tiek izpildīts pasūtījums?',
    answer: 'Standarta pasūtījumi tiek izpildīti 3-5 darba dienu laikā. Steidzamiem pasūtījumiem piedāvājam paātrinātu izpildi. Precīzs termiņš atkarīgs no apjoma un sarežģītības.',
  },
];

export default function PulverkrasosanaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Pakalpojumi', href: '/pakalpojumi' },
        { name: 'Pulverkrāsošana', href: '/pakalpojumi/pulverkrasosana' },
      ]} />
      <ServiceSchema
        name="Pulverkrāsošana"
        description="Profesionāla pulverkrāsošana ar plašu RAL krāsu izvēli. Izturīgs un ilgmūžīgs pārklājums metāla izstrādājumiem."
        url="/pakalpojumi/pulverkrasosana"
        image="/images/services/pulverkrasosana-1.jpg"
      />
      <FaqSchema items={faqItems} />
      <PageHero
        title="Pulverkrāsošana"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Kas ir pulverkrāsošana?</h2>
        <p>
          Pulverkrāsošana ir moderna un videi draudzīga metāla virsmu apstrādes tehnoloģija,
          kas nodrošina izturīgu, vienmērīgu un ilgmūžīgu pārklājumu. Atšķirībā no
          tradicionālās krāsošanas, pulverkrāsa nesatur šķīdinātājus un tiek uzklāta
          elektrostatiski, pēc tam sacietējot krāsnī augstā temperatūrā.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/pulverkrasosana-1.jpg"
        imageAlt="Pulverkrāsošanas process"
        imagePosition="right"
      >
        <h3>Pulverkrāsošanas priekšrocības</h3>
        <ul>
          <li><strong>Izturība</strong> - pārklājums ir izturīgs pret skrāpējumiem, triecieniem un ķīmiskām vielām</li>
          <li><strong>Ilgmūžība</strong> - krāsa saglabā savu izskatu gadiem ilgi</li>
          <li><strong>Vienmērīgums</strong> - elektrostatiskā uzklāšana nodrošina vienmērīgu slāni</li>
          <li><strong>Ekoloģiskums</strong> - nesatur šķīdinātājus un kaitīgās vielas</li>
          <li><strong>Plašs krāsu klāsts</strong> - pieejamas visas RAL krāsas un speciālās faktūras</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/pulverkrasosana-2.jpg"
        imageAlt="Pulverkrāsoti izstrādājumi"
        imagePosition="left"
      >
        <h3>Ko var pulverkrāsot?</h3>
        <p>
          Pulverkrāsošana ir piemērota jebkuriem metāla izstrādājumiem:
        </p>
        <ul>
          <li>Auto diski un detaļas</li>
          <li>Vārti, žogi un margas</li>
          <li>Mēbeles un interjera elementi</li>
          <li>Rūpnieciskās iekārtas</li>
          <li>Fasādes elementi</li>
          <li>Sporta aprīkojums</li>
        </ul>
      </TextWithImage>

      <FaqAccordion title="Biežāk uzdotie jautājumi" items={faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Interesē pulverkrāsošana?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums, lai apspriestu jūsu projektu un saņemtu bezmaksas konsultāciju.
          </p>
          <Link href="/kontakti" className="btn btn-primary">
            Sazināties ar mums
          </Link>
        </div>
      </section>
    </>
  );
}
