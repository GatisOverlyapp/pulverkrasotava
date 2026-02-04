import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage } from '@/components/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Metāla konstrukcijas | Pulverkrāsotava',
  description: 'Metāla konstrukciju izgatavošana un metāla izstrādājumi pēc individuāla pasūtījuma. Kāpnes, margas, vārti, žogi.',
};

export default function MetalaKonstrukcijasPage() {
  return (
    <>
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
          <li><strong>Nojumes</strong> - auto nojumes un terases</li>
          <li><strong>Rāmji</strong> - konstrukciju un mēbeļu rāmji</li>
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
