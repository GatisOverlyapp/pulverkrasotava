import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage } from '@/components/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vārtu un žogu atjaunošana | Pulverkrāsotava',
  description: 'Vārtu un žogu atjaunošana - smilšu strūklošana, rūsas noņemšana un pulverkrāsošana. Atjaunojam vecus vārtus un žogus.',
};

export default function VartuAtjaunosanaPage() {
  return (
    <>
      <PageHero
        title="Vārtu un žogu atjaunošana"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Vārtu un žogu atjaunošanas pakalpojumi</h2>
        <p>
          Piedāvājam pilnu vārtu un žogu atjaunošanas servisu - no virsmas
          sagatavošanas līdz gala pārklājumam. Atjaunojam gan vecos, sarūsējušos
          vārtus, gan žogus, piešķirot tiem jaunu izskatu.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/varti-1.jpg"
        imageAlt="Vārtu atjaunošana"
        imagePosition="right"
      >
        <h3>Atjaunošanas process</h3>
        <ul>
          <li><strong>Demontāža</strong> - ja nepieciešams, demontējam vārtus vai žoga elementus</li>
          <li><strong>Smilšu strūklošana</strong> - pilnībā noņemam rūsu un veco krāsu</li>
          <li><strong>Remonts</strong> - ja nepieciešams, veicam metāla remontu</li>
          <li><strong>Pulverkrāsošana</strong> - uzklājam izturīgu pulverkrāsas pārklājumu</li>
          <li><strong>Montāža</strong> - atjaunotos elementus uzstādām atpakaļ</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/varti-2.jpg"
        imageAlt="Atjaunoti vārti"
        imagePosition="left"
      >
        <h3>Kāpēc atjaunot, nevis pirkt jaunu?</h3>
        <p>
          Atjaunošana ir izdevīgāka, jo:
        </p>
        <ul>
          <li>Izmaksas parasti ir zemākas nekā jauniem vārtiem</li>
          <li>Saglabājat savu unikālo dizainu</li>
          <li>Ekloloģiskāka izvēle - samazināts atkritumu daudzums</li>
          <li>Pulverkrāsas pārklājums ir ilgmūžīgāks par parasto krāsu</li>
          <li>Iespēja izvēlēties jebkuru krāsu</li>
        </ul>
      </TextWithImage>

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešama vārtu vai žoga atjaunošana?
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
