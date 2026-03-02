import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Metālapstrāde - Griešana, Locīšana, Metināšana Vidzemē',
  description: 'Profesionāla metālapstrāde Gulbenē, Vidzemē - griešana, locīšana, MIG/MAG un TIG metināšana. Rūpnieciskiem, lauksaimniecības un mežsaimniecības uzņēmumiem. Zvaniet +371 26 102 841.',
  alternates: {
    canonical: '/pakalpojumi/metalapstrade',
  },
};

const faqItems = [
  {
    question: 'Kādus metālapstrādes pakalpojumus piedāvājat?',
    answer: 'Piedāvājam metāla griešanu, locīšanu, MIG/MAG un TIG metināšanu, slīpēšanu, urbšanu un citus metālapstrādes darbus. Apkalpojam rūpnieciskos, lauksaimniecības un mežsaimniecības uzņēmumus visā Vidzemē.',
  },
  {
    question: 'Vai varat izgatavot pēc mūsu tehniskajiem rasējumiem?',
    answer: 'Jā, izgatavosim metāla izstrādājumus pēc jūsu tehniskajiem rasējumiem, CAD failiem vai skicēm. Varam arī palīdzēt ar projekta izstrādi, ja jums ir tikai ideja.',
  },
  {
    question: 'Vai piedāvājat sērijveida ražošanu?',
    answer: 'Jā, piedāvājam gan individuālus, gan sērijveida pasūtījumus. Lielākiem apjomiem nodrošinām izdevīgākas vienības cenas un stabilu piegādes grafiku.',
  },
  {
    question: 'Vai piedāvājat pilnu servisu - metālapstrāde + pulverkrāsošana?',
    answer: 'Jā, mēs piedāvājam pilnu servisu - no metālapstrādes līdz smilšu strūklošanai un pulverkrāsošanai. Tas ietaupa jūsu laiku un nodrošina labāku gala rezultātu.',
  },
  {
    question: 'Kādas nozares jūs apkalpojat?',
    answer: 'Apkalpojam lauksaimniecības un mežsaimniecības uzņēmumus, ražošanas uzņēmumus, noliktavas, degvielas uzpildes stacijas, būvniecības un nekustamā īpašuma uzņēmumus, kā arī citus B2B klientus.',
  },
];

export default function MetalapstradePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Pakalpojumi', href: '/pakalpojumi' },
        { name: 'Metālapstrāde', href: '/pakalpojumi/metalapstrade' },
      ]} />
      <ServiceSchema
        name="Metālapstrāde"
        description="Profesionāla metālapstrāde - griešana, locīšana, metināšana un citi metāla apstrādes pakalpojumi."
        url="/pakalpojumi/metalapstrade"
        image="/images/services/metalapstrade-1.jpg"
      />
      <FaqSchema items={faqItems} />
      <PageHero
        title="Metālapstrāde"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Metālapstrādes pakalpojumi uzņēmumiem</h2>
        <p>
          Piedāvājam visaptverošus metālapstrādes pakalpojumus Vidzemes reģiona
          uzņēmumiem - no vienkāršiem griešanas un locīšanas darbiem līdz sarežģītu
          rūpniecisko konstrukciju izgatavošanai un tehnikas remontam. Mūsu pieredzējušie
          speciālisti un moderna iekārta garantē augstas kvalitātes rezultātu.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/metalapstrade-1.jpg"
        imageAlt="Metālapstrādes process"
        imagePosition="right"
      >
        <h3>Mūsu pakalpojumi un aprīkojums</h3>
        <ul>
          <li><strong>Metāla griešana ar lentzāģi</strong> - precīza griešana (alumīnijs, nerūsējošais tērauds, titāns, konstrukciju tērauds, karstumizturīgie metāli). Izgriezuma platums ne vairāk kā 1.5mm</li>
          <li><strong>Metāla locīšana</strong> - dažādu profilu un leņķu veidošana</li>
          <li><strong>MIG/MAG metināšana</strong> - melnā un nerūsējošā tērauda metināšana, taisnu, lieku un sarežģītu konstrukciju savienošana</li>
          <li><strong>Slīpēšana</strong> - virsmu apstrāde un apdare</li>
          <li><strong>Urbšana</strong> - precīzu caurumu veidošana ar iegremdēšanas iespēju, diametra paplašināšana</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/metalapstrade-2.jpg"
        imageAlt="Metāla izstrādājumi"
        imagePosition="left"
      >
        <h3>Nozares, kuras apkalpojam</h3>
        <p>
          Piedāvājam metālapstrādes pakalpojumus dažādu nozaru uzņēmumiem:
        </p>
        <ul>
          <li><strong>Lauksaimniecība</strong> - traktoru un tehnikas remonts, aprīkojuma izgatavošana</li>
          <li><strong>Mežsaimniecība</strong> - meža mašīnu detaļu atjaunošana un izgatavošana</li>
          <li><strong>Ražošana</strong> - rūpniecisko iekārtu detaļas un konstrukcijas</li>
          <li><strong>Noliktavas</strong> - plauktu sistēmas, statīvi, aprīkojums</li>
          <li><strong>Būvniecība</strong> - kāpnes, margas, metāla rāmji</li>
          <li><strong>Komerciālie objekti</strong> - DUS aprīkojums, publisko telpu mēbeles</li>
        </ul>
      </TextWithImage>

      <FaqAccordion title="Biežāk uzdotie jautājumi" items={faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešami metālapstrādes darbi?
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
