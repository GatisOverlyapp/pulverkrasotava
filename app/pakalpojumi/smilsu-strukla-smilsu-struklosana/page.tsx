import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage } from '@/components/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smilšu strūklošana | Pulverkrāsotava',
  description: 'Profesionāla smilšu strūklošana metāla virsmu sagatavošanai. Rūsas, vecās krāsas un netīrumu noņemšana.',
};

export default function SmilsuStruklosanaPage() {
  return (
    <>
      <PageHero
        title="Smilšu strūklošana"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Kas ir smilšu strūklošana?</h2>
        <p>
          Smilšu strūklošana (abrazīvā strūklošana) ir efektīva metāla virsmu
          sagatavošanas metode, kas ļauj pilnībā noņemt rūsu, veco krāsu, netīrumus
          un citus piesārņojumus. Šī tehnoloģija ir būtisks solis pirms
          pulverkrāsošanas vai cita pārklājuma uzklāšanas.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/smilsu-strukla-1.jpg"
        imageAlt="Smilšu strūklošanas process"
        imagePosition="right"
      >
        <h3>Smilšu strūklošanas priekšrocības</h3>
        <ul>
          <li><strong>Pilnīga tīrīšana</strong> - noņem pat dziļi iesēdušos rūsu un netīrumus</li>
          <li><strong>Virsmas sagatavošana</strong> - izveido ideālu virsmu turpmākai apstrādei</li>
          <li><strong>Universālums</strong> - piemērota dažāda lieluma izstrādājumiem</li>
          <li><strong>Ātrums</strong> - efektīva un ātra apstrāde</li>
          <li><strong>Kvalitāte</strong> - nodrošina labāku krāsas saķeri</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/smilsu-strukla-2.jpg"
        imageAlt="Strūkloti izstrādājumi"
        imagePosition="left"
      >
        <h3>Ko var strūklot?</h3>
        <p>
          Smilšu strūklošana ir piemērota:
        </p>
        <ul>
          <li>Metāla konstrukcijām un rāmjiem</li>
          <li>Auto detaļām un diskiem</li>
          <li>Vārtiem un žogiem</li>
          <li>Rūpnieciskām iekārtām</li>
          <li>Veciem izstrādājumiem atjaunošanai</li>
          <li>Fasādes elementiem</li>
        </ul>
      </TextWithImage>

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešama virsmas sagatavošana?
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
