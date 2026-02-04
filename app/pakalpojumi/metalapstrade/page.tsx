import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage } from '@/components/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Metālapstrāde | Pulverkrāsotava',
  description: 'Profesionāla metālapstrāde - griešana, locīšana, metināšana un citi metāla apstrādes pakalpojumi.',
};

export default function MetalapstradePage() {
  return (
    <>
      <PageHero
        title="Metālapstrāde"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Metālapstrādes pakalpojumi</h2>
        <p>
          Piedāvājam visaptverošus metālapstrādes pakalpojumus - no vienkāršiem
          griešanas un locīšanas darbiem līdz sarežģītu konstrukciju izgatavošanai.
          Mūsu pieredzējušie speciālisti un moderna iekārta garantē augstas
          kvalitātes rezultātu.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/metalapstrade-1.jpg"
        imageAlt="Metālapstrādes process"
        imagePosition="right"
      >
        <h3>Mūsu pakalpojumi</h3>
        <ul>
          <li><strong>Metāla griešana</strong> - precīza griešana pēc izmēriem</li>
          <li><strong>Metāla locīšana</strong> - dažādu profilu un leņķu veidošana</li>
          <li><strong>Metināšana</strong> - MIG/MAG un TIG metināšana</li>
          <li><strong>Slīpēšana</strong> - virsmu apstrāde un apdare</li>
          <li><strong>Urbšana</strong> - precīzu caurumu veidošana</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/metalapstrade-2.jpg"
        imageAlt="Metāla izstrādājumi"
        imagePosition="left"
      >
        <h3>Ko varam izgatavot?</h3>
        <p>
          Veicam dažādus metālapstrādes darbus:
        </p>
        <ul>
          <li>Konstrukcijas un rāmji</li>
          <li>Kāpnes un margas</li>
          <li>Vārti un žogi</li>
          <li>Mēbeļu elementi</li>
          <li>Rūpnieciskās detaļas</li>
          <li>Individuāli projekti pēc pasūtījuma</li>
        </ul>
      </TextWithImage>

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešami metālapstrādes darbi?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums, lai apspriestu jūsu projektu un saņemtu bezmaksas konsultāciju.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakti" className="btn btn-primary">
              Sazināties ar mums
            </Link>
            <Link href="/cenas" className="btn btn-secondary">
              Apskatīt cenas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
