import { Metadata } from 'next';
import { PageHero, TextBlock, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Cenas - Pulverkrāsošanas un Metālapstrādes Izcenojums',
  description: 'Pulverkrāsošanas, smilšu strūklošanas un metālapstrādes cenas Gulbenē, Vidzemē. Individuāls izcenojums rūpnieciskiem projektiem. Stundas likme 25 EUR/h. Zvaniet +371 26 102 841.',
  alternates: {
    canonical: '/cenas',
  },
};

const faqItems = [
  {
    question: 'Kā tiek noteikta cena pulverkrāsošanai?',
    answer: 'Cena tiek noteikta individuāli katram projektam, ņemot vērā izstrādājuma izmērus, formas sarežģītību, virsmas stāvokli, krāsas veidu un daudzumu. Sazinieties ar mums precīzam izcenojumam.',
  },
  {
    question: 'Vai piedāvājat atlaides lieliem apjomiem?',
    answer: 'Jā, sērijveida un liela apjoma pasūtījumiem piedāvājam individuālas atlaides. Jo lielāks apjoms, jo izdevīgāka vienības cena. Sazinieties ar mums, lai apspriestu jūsu projektu.',
  },
  {
    question: 'Kāda ir minimālā pasūtījuma summa?',
    answer: 'Minimālā pasūtījuma summa ir 50 EUR (bez PVN). Tas attiecas uz visiem pakalpojumiem.',
  },
  {
    question: 'Vai cenas ir ar vai bez PVN?',
    answer: 'Visas norādītās cenas ir bez PVN (21%). Juridiskām personām PVN tiek piemērots saskaņā ar likumu.',
  },
  {
    question: 'Vai iespējams noslēgt ilgtermiņa sadarbības līgumu?',
    answer: 'Jā, regulāriem klientiem un uzņēmumiem piedāvājam ilgtermiņa sadarbības līgumus ar izdevīgākiem nosacījumiem un prioritāru pasūtījumu izpildi.',
  },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Cenas', href: '/cenas' },
      ]} />
      <FaqSchema items={faqItems} />
      <PageHero title="Cenas" />
      <TextBlock>
        <h2>Mūsu pakalpojumu cenas</h2>
        <p>
          Cenas tiek noteiktas individuāli katram projektam, ņemot vērā darba apjomu,
          sarežģītību, materiālus un termiņus.
        </p>

        <h3>Stundas likme</h3>
        <p>
          Standarta darbu stundas likme: <strong>25.00 EUR/h</strong> (bez PVN)
        </p>

        <h3>Pulverkrāsošana</h3>
        <p>Cena atkarīga no izstrādājuma izmēriem, formas un daudzuma:</p>
        <ul>
          <li>Standarta pulverkrāsošana - no <strong>15-30 EUR/m²</strong></li>
          <li>Sērijveida izstrādājumi - individuāls izcenojums atkarībā no apjoma</li>
          <li>Liela izmēra konstrukcijas - pēc individuāla aprēķina</li>
        </ul>

        <h3>Smilšu strūklošana</h3>
        <p>Cena atkarīga no virsmas stāvokļa un pieejamības:</p>
        <ul>
          <li>Standarta tīrīšana - no <strong>10-20 EUR/m²</strong></li>
          <li>Intensīva rūsas noņemšana - no <strong>15-25 EUR/m²</strong></li>
        </ul>

        <h3>Minimālā pasūtījuma summa</h3>
        <p>
          Minimālā pasūtījuma summa ir <strong>50 EUR</strong> (bez PVN).
        </p>

        <h3>Saņemiet precīzu piedāvājumu</h3>
        <p>
          Lai saņemtu precīzu cenu aprēķinu jūsu projektam, lūdzu sazinieties ar mums,
          norādot:
        </p>
        <ul>
          <li>Izstrādājumu aprakstu un fotogrāfijas</li>
          <li>Orientējošos izmērus un daudzumu</li>
          <li>Vēlamo krāsu (RAL kodu, ja zināms)</li>
          <li>Vēlamo izpildes termiņu</li>
        </ul>
      </TextBlock>

      <FaqAccordion title="Biežāk uzdotie jautājumi par cenām" items={faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Gatavs sākt savu projektu?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums jebkurā Jums ērtā veidā, un mēs sagatavosim
            individuālu piedāvājumu jūsu projektam.
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
