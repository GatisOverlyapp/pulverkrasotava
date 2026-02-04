import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage } from '@/components/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Koka metāla mēbeles | Pulverkrāsotava',
  description: 'Metāla un koka mēbeļu izgatavošana - dārza mēbeles, āra mēbeles, soliņi, galdi pēc individuāla pasūtījuma.',
};

export default function KokaMebelesPage() {
  return (
    <>
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
