import { Metadata } from 'next';
import { PageHero, TextBlock, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

interface Industry {
  slug: string;
  name: string;
  nameDative: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  services: string[];
  examples: string[];
  benefits: string[];
  faqItems: { question: string; answer: string }[];
}

const industries: Record<string, Industry> = {
  'lauksaimnieciba': {
    slug: 'lauksaimnieciba',
    name: 'Lauksaimniecība',
    nameDative: 'lauksaimniecībai',
    metaTitle: 'Pulverkrāsošana Lauksaimniecībai - Tehnikas Atjaunošana',
    metaDescription: 'Pulverkrāsošana un metālapstrāde lauksaimniecības uzņēmumiem - traktoru un tehnikas detaļu atjaunošana, aprīkojuma izgatavošana, remonts. Zvaniet +371 26 102 841.',
    intro: 'Piedāvājam profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus lauksaimniecības uzņēmumiem un zemnieku saimniecībām Vidzemē un Latgalē. Mūsu pakalpojumi palīdz atjaunot un aizsargāt lauksaimniecības tehniku, aprīkojumu un konstrukcijas, ietaupot līdzekļus un pagarināt ekspluatācijas laiku.',
    services: [
      'Traktoru un lauksaimniecības tehnikas detaļu pulverkrāsošana',
      'Smilšu strūklošana rūsas un vecās krāsas noņemšanai no tehnikas',
      'Lauksaimniecības aprīkojuma metāla detaļu izgatavošana un remonts',
      'Barošanas sistēmu un nožogojumu elementu atjaunošana',
      'Metāla konstrukciju izgatavošana saimniecības vajadzībām',
      'Sērijveida detaļu ražošana lauksaimniecības tehnikai',
    ],
    examples: [
      'Traktoru un kombainu detaļu atjaunošana un pulverkrāsošana',
      'Lauksaimniecības piekabju rāmju un bunkuru remonts',
      'Lopu barošanas sistēmu un dzeramtraugu turētāju izgatavošana',
      'Noliktavu un šķūņu metāla plauktu un statīvu izgatavošana',
      'Žogu un nožogojumu elementu atjaunošana ganībām',
      'Graudu bunkuru un transportēšanas iekārtu detaļu apstrāde',
    ],
    benefits: [
      'Ilgmūžīgs pulverkrāsas pārklājums - 15-20 gadus izturīga aizsardzība pret koroziju',
      'Izdevīgāk nekā jauna tehnika - atjaunošana maksā 30-50% no jaunas iekārtas cenas',
      'Izturīgs pret lauksaimniecības ķīmiskajām vielām un mēslojumiem',
      'Liela izmēra detaļu apstrāde - krāsns līdz 6m gariem izstrādājumiem',
      'Ātra izpilde - standarta darbi 3-5 dienu laikā',
      'Ērta atrašanās vieta Vidzemes lauksaimniekiem',
    ],
    faqItems: [
      {
        question: 'Kādas lauksaimniecības tehnikas detaļas varat pulverkrāsot?',
        answer: 'Pulverkrāsojam jebkuras metāla detaļas - traktoru rāmju elementus, piekabju bunkurus, arklu un frēžu detaļas, hidraulisko cilindru turētājus, un daudz ko citu. Maksimālais izmērs līdz 6m garumā, 1.50m platumā un 1.80m augstumā.',
      },
      {
        question: 'Vai pulverkrāsa ir izturīga lauksaimniecības apstākļos?',
        answer: 'Jā, pulverkrāsa ir ievērojami izturīgāka par tradicionālo krāsu. Tā ir izturīga pret mehāniskiem bojājumiem, UV starojumu, mitrumu un ķīmiskajām vielām. Pārklājums kalpo 15-20 gadus.',
      },
      {
        question: 'Vai varat izgatavot jaunas detaļas lauksaimniecības tehnikai?',
        answer: 'Jā, mūsu metālapstrādes cehs var izgatavot jaunas detaļas pēc jūsu rasējumiem vai vecās detaļas parauga - griešana, locīšana, metināšana un pulverkrāsošana vienā vietā.',
      },
      {
        question: 'Cik izmaksā traktora detaļu atjaunošana?',
        answer: 'Cena ir atkarīga no detaļas izmēra, virsmas stāvokļa un nepieciešamo darbu apjoma. Sazinieties ar mums ar fotogrāfijām, un sniegsim precīzu piedāvājumu dienas laikā.',
      },
      {
        question: 'Vai strādājat ar PVN rēķiniem?',
        answer: 'Jā, SIA "AFREK" ir PVN maksātājs (Reģ. Nr. LV44103123210). Izrakstām pilnvērtīgus rēķinus ar PVN.',
      },
    ],
  },
  'mezsaimnieciba': {
    slug: 'mezsaimnieciba',
    name: 'Mežsaimniecība',
    nameDative: 'mežsaimniecībai',
    metaTitle: 'Pulverkrāsošana Mežsaimniecībai - Meža Tehnikas Atjaunošana',
    metaDescription: 'Pulverkrāsošana un metālapstrāde mežsaimniecības uzņēmumiem - meža mašīnu detaļu atjaunošana, aprīkojuma remonts un izgatavošana. Zvaniet +371 26 102 841.',
    intro: 'Piedāvājam profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus mežsaimniecības uzņēmumiem. Meža tehnika strādā smagos apstākļos - mitrums, netīrumi, mehāniski bojājumi. Pulverkrāsa nodrošina izturīgāko aizsardzību šādiem apstākļiem, pagarinot tehnikas kalpošanas laiku.',
    services: [
      'Meža mašīnu un forwarderu detaļu pulverkrāsošana',
      'Smilšu strūklošana - rūsas un piesārņojuma noņemšana no meža tehnikas',
      'Harvesteru un forwarderu metāla detaļu remonts un izgatavošana',
      'Meža ceļu tehnikas aprīkojuma atjaunošana',
      'Kravas automašīnu un piekabjau metāla elementu apstrāde',
      'Sērijveida detaļu ražošana meža tehnikai',
    ],
    examples: [
      'Forwarderu un harvesteru kabīņu elementu atjaunošana',
      'Meža piekabju rāmju un bunkuru pulverkrāsošana',
      'Hidraulisko iekārtu turētāju un stiprinājumu izgatavošana',
      'Meža ceļu tehnikas lāpstu un grebju atjaunošana',
      'Kokmateriālu krautuvju metāla elementu apstrāde',
      'Degvielas tvertņu un aprīkojuma konstrukciju remonts',
    ],
    benefits: [
      'Maksimāla aizsardzība pret koroziju meža apstākļos',
      'Izturīga pret mehāniskiem bojājumiem, mitrumu un UV starojumu',
      'Ietaupījums - atjaunošana izmaksā 30-50% no jaunas detaļas cenas',
      'Liela izmēra detaļu apstrāde līdz 6m garumā',
      'Ātra izpilde - mazāks tehnikas dīkstāves laiks',
      'Ērta atrašanās vieta Vidzemes un Latgales mežsaimniekiem',
    ],
    faqItems: [
      {
        question: 'Kādas meža tehnikas detaļas varat apstrādāt?',
        answer: 'Apstrādājam jebkuras metāla detaļas - forwarderu un harvesteru elementus, piekabju rāmjus, hidraulisko iekārtu turētājus, kabīņu detaļas un citas. Maksimālais izmērs līdz 6m garumā.',
      },
      {
        question: 'Cik ilgi kalpo pulverkrāsa uz meža tehnikas?',
        answer: 'Pulverkrāsas pārklājums kalpo 15-20 gadus pat smagos ekspluatācijas apstākļos. Tas ir 3-5x ilgāk nekā tradicionālā krāsa, kas meža apstākļos bieži nolupinās jau pēc 2-3 gadiem.',
      },
      {
        question: 'Vai varat izgatavot jaunas detaļas meža tehnikai?',
        answer: 'Jā, mūsu metālapstrādes cehs var izgatavot jaunas detaļas pēc rasējumiem vai vecās detaļas parauga. Piedāvājam griešanu, locīšanu, MIG/MAG metināšanu un pulverkrāsošanu.',
      },
      {
        question: 'Kā organizēt liela izmēra detaļu transportu?',
        answer: 'Varam palīdzēt organizēt transportu no jūsu atrašanās vietas. Lielākiem pasūtījumiem transports var būt bez maksas. Sazinieties ar mums, lai apspriestu.',
      },
    ],
  },
  'razosana': {
    slug: 'razosana',
    name: 'Ražošana',
    nameDative: 'ražošanai',
    metaTitle: 'Pulverkrāsošana Ražošanas Uzņēmumiem - Rūpnieciskā Krāsošana',
    metaDescription: 'Pulverkrāsošana un metālapstrāde ražošanas uzņēmumiem - sērijveida krāsošana, rūpniecisko iekārtu atjaunošana, detaļu izgatavošana. Zvaniet +371 26 102 841.',
    intro: 'Piedāvājam profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus ražošanas uzņēmumiem. Gan individuāli pasūtījumi, gan sērijveida ražošana - mēs nodrošinām stabilu kvalitāti, konkurētspējīgas cenas un precīzu izpildi termiņos.',
    services: [
      'Sērijveida izstrādājumu pulverkrāsošana ar stabilu kvalitāti',
      'Rūpniecisko iekārtu un mašīnu detaļu atjaunošana',
      'Metāla detaļu izgatavošana pēc tehniskiem rasējumiem',
      'Ražošanas aprīkojuma rāmju un konstrukciju apstrāde',
      'Produktu prototipēšana un mazās sērijas',
      'Smilšu strūklošana virsmu sagatavošanai',
    ],
    examples: [
      'Ražošanas līniju metāla elementu pulverkrāsošana',
      'Iekārtu aizsargpaneļu un apvalku izgatavošana un krāsošana',
      'Metāla mēbeļu un statīvu sērijveida ražošana',
      'Rūpniecisko plauktu un uzglabāšanas sistēmu apstrāde',
      'Elektrības sadales skapju un korpusu pulverkrāsošana',
      'Produkcijas iepakojuma rāmju un palešu atjaunošana',
    ],
    benefits: [
      'Sērijveida ražošana ar izdevīgām vienības cenām',
      'Stabila kvalitāte katrā partijā - sertificēti materiāli',
      'Liela izmēra izstrādājumu apstrāde līdz 6m garumā',
      'Visas RAL krāsas un speciālās faktūras',
      'Pilns serviss - metālapstrāde + smilšu strūklošana + pulverkrāsošana',
      'Precīza izpilde termiņos - stabils piegādes grafiks',
    ],
    faqItems: [
      {
        question: 'Vai piedāvājat sērijveida pulverkrāsošanu?',
        answer: 'Jā, piedāvājam sērijveida pulverkrāsošanu ar stabilu kvalitāti katrā partijā. Jo lielāks apjoms, jo izdevīgāka vienības cena. Varam nodrošināt regulāras piegādes pēc saskaņota grafika.',
      },
      {
        question: 'Kāds ir minimālais sērijas apjoms?',
        answer: 'Minimālā pasūtījuma summa ir 50 EUR (bez PVN). Sērijveida pasūtījumiem sākot no 50+ vienībām piedāvājam ievērojamas atlaides.',
      },
      {
        question: 'Vai varat izgatavot detaļas pēc mūsu CAD rasējumiem?',
        answer: 'Jā, mēs izgatavosim metāla detaļas pēc jūsu tehniskajiem rasējumiem vai CAD failiem. Piedāvājam griešanu, locīšanu, metināšanu, urbšanu un pulverkrāsošanu.',
      },
      {
        question: 'Kāda ir izpildes kapacitāte?',
        answer: 'Mūsu cietināšanas krāsns iekšējie izmēri ir 3.50m × 1.50m × 1.70m, kas ļauj apstrādāt gan lielas detaļas, gan lielu skaitu mazu detaļu vienlaicīgi. Konkrētu kapacitāti apspriedīsim individuāli.',
      },
      {
        question: 'Vai iespējams noslēgt ilgtermiņa līgumu?',
        answer: 'Jā, regulāriem klientiem piedāvājam ilgtermiņa sadarbības līgumus ar fiksētām cenām, prioritāru izpildi un saskaņotu piegādes grafiku.',
      },
    ],
  },
  'komercialie-objekti': {
    slug: 'komercialie-objekti',
    name: 'Komerciālie objekti',
    nameDative: 'komerciālajiem objektiem',
    metaTitle: 'Pulverkrāsošana Komerciālajiem Objektiem - DUS, Noliktavas, Tirdzniecība',
    metaDescription: 'Pulverkrāsošana un metāla izstrādājumi komerciālajiem objektiem - degvielas uzpildes stacijām, noliktavām, tirdzniecības centriem. Mēbeles un aprīkojums. Zvaniet +371 26 102 841.',
    intro: 'Piedāvājam pulverkrāsošanas, metālapstrādes un metāla izstrādājumu ražošanas pakalpojumus komerciālajiem objektiem - degvielas uzpildes stacijām, noliktavām, tirdzniecības centriem, biroju ēkām un citiem komerciālajiem objektiem.',
    services: [
      'Komerciālo mēbeļu izgatavošana (galdi, soliņi, plaukti, statīvi)',
      'Noliktavu aprīkojuma atjaunošana un izgatavošana (plaukti, ratiņi, statīvi)',
      'DUS aprīkojuma metāla elementu izgatavošana un pulverkrāsošana',
      'Izkārtņu un reklāmas stendu izgatavošana',
      'Atkritumu urnu un āra aprīkojuma ražošana',
      'Teritoriju nožogojumu un vārtu atjaunošana',
    ],
    examples: [
      'Degvielas uzpildes staciju āra mēbeļu komplektu izgatavošana',
      'Noliktavu metāla plauktu sistēmu atjaunošana un pulverkrāsošana',
      'Tirdzniecības centru āra soliņu un atkritumu urnu ražošana',
      'Biroju ēku metāla kāpņu un margu izgatavošana',
      'Autostāvvietu barjeru un nožogojumu elementu apstrāde',
      'Ielu un parku mēbeļu izgatavošana pašvaldību pasūtījumiem',
    ],
    benefits: [
      'Izturīgs pulverkrāsas pārklājums - piemērots publiskām telpām ar lielu noslodzi',
      'Estētisks izskats - plašs RAL krāsu un faktūru klāsts',
      'Vandālisma izturīgs - grūtāk sabojāt nekā parastu krāsu',
      'Sērijveida ražošana vairākiem objektiem',
      'Pilns serviss - no projekta līdz uzstādīšanai',
      'Pieredze ar pašvaldību un komerciāliem pasūtījumiem',
    ],
    faqItems: [
      {
        question: 'Kāda veida mēbeles un aprīkojumu varat izgatavot?',
        answer: 'Izgatavosim jebkādas metāla mēbeles un aprīkojumu - galdus, soliņus, plauktus, statīvus, atkritumu urnas, izkārtnes, reklāmas stendus. Viss tiek izgatavots pēc individuāla pasūtījuma un pulverkrāsots.',
      },
      {
        question: 'Vai varat izgatavot vienādus izstrādājumus vairākiem objektiem?',
        answer: 'Jā, piedāvājam sērijveida ražošanu. Piemēram, ja jums ir degvielas uzpildes staciju tīkls vai vairākas noliktavas, varam izgatavot identiskus izstrādājumus visiem objektiem ar izdevīgām vienības cenām.',
      },
      {
        question: 'Vai pulverkrāsa ir piemērota āra aprīkojumam?',
        answer: 'Jā, pulverkrāsa ir ideāla āra aprīkojumam. Tā ir izturīga pret laikapstākļiem, UV starojumu, mitrumu un mehāniskiem bojājumiem. Pārklājums kalpo 15-20 gadus.',
      },
      {
        question: 'Vai piedāvājat arī uzstādīšanu?',
        answer: 'Jā, piedāvājam pilnu servisu - no izstrādājuma izgatavošanas līdz piegādei un uzstādīšanai jūsu objektā. Sazinieties ar mums, lai apspriestu.',
      },
    ],
  },
  'buvnieciba': {
    slug: 'buvnieciba',
    name: 'Būvniecība un nekustamais īpašums',
    nameDative: 'būvniecībai',
    metaTitle: 'Pulverkrāsošana Būvniecībai - Metāla Konstrukcijas un Elementi',
    metaDescription: 'Pulverkrāsošana un metāla konstrukcijas būvniecības uzņēmumiem - kāpnes, margas, vārti, žogi, fasādes elementi, metāla rāmji. Zvaniet +371 26 102 841.',
    intro: 'Piedāvājam pulverkrāsošanas un metāla konstrukciju izgatavošanas pakalpojumus būvniecības un nekustamā īpašuma uzņēmumiem. Kāpnes, margas, vārti, žogi, fasādes elementi - mēs izgatavosim un pulverkrāsosim kvalitatīvas metāla konstrukcijas jūsu objektiem.',
    services: [
      'Kāpņu un margu izgatavošana un pulverkrāsošana',
      'Vārtu un žogu izgatavošana un atjaunošana',
      'Fasādes metāla elementu apstrāde',
      'Balkonu nožogojumu un margu izgatavošana',
      'Nojumju un terasu metāla konstrukciju izgatavošana',
      'Ugunsdrošības kāpņu un evakuācijas konstrukciju izgatavošana',
    ],
    examples: [
      'Daudzdzīvokļu māju kāpņu telpu margu izgatavošana un montāža',
      'Privātmāju ieejas vārtu un žogu izgatavošana',
      'Biroju ēku fasādes metāla elementu pulverkrāsošana',
      'Rūpniecisko ēku ugunsdrošības kāpņu izgatavošana',
      'Tirdzniecības centru margu un nožogojumu izgatavošana',
      'Dzīvojamo kompleksu āra aprīkojuma (soliņi, velostatīvi) ražošana',
    ],
    benefits: [
      'Izturīgs pārklājums - ideāls āra metāla konstrukcijām',
      'Estētisks izskats - plašs krāsu klāsts atbilstoši projekta dizainam',
      'Atbilstība būvniecības standartiem',
      'Pilns serviss - no rasējuma līdz montāžai objektā',
      'Liela izmēra konstrukciju apstrāde līdz 6m garumā',
      'Pieredze ar būvniecības un nekustamā īpašuma projektiem',
    ],
    faqItems: [
      {
        question: 'Kādas metāla konstrukcijas varat izgatavot būvniecībai?',
        answer: 'Izgatavosim kāpnes, margas, balkonu nožogojumus, vārtus, žogus, nojumes, fasādes elementus, ugunsdrošības kāpnes un citas metāla konstrukcijas. Maksimālais izmērs līdz 6m garumā.',
      },
      {
        question: 'Vai piedāvājat montāžu objektā?',
        answer: 'Jā, piedāvājam pilnu servisu - no projekta izstrādes un izgatavošanas līdz piegādei un montāžai jūsu būvobjektā.',
      },
      {
        question: 'Vai varat izgatavot pēc arhitekta rasējumiem?',
        answer: 'Jā, izgatavosim metāla konstrukcijas pēc arhitekta vai inženiera rasējumiem. Varam arī palīdzēt ar tehniskā risinājuma izstrādi, ja nepieciešams.',
      },
      {
        question: 'Kāda krāsa ir piemērota fasādes elementiem?',
        answer: 'Piedāvājam visas RAL kataloga krāsas, tostarp matētās, spīdīgās un struktūras faktūras. Pulverkrāsa ir ideāla fasādes elementiem, jo tā neizbalē UV starojumā un ir izturīga pret laikapstākļiem.',
      },
    ],
  },
};

const industrySlugs = Object.keys(industries);

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug];

  if (!industry) {
    return { title: 'Nozare nav atrasta' };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `/nozares/${slug}`,
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries[slug];

  if (!industry) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Nozares', href: '/nozares/' + slug },
        { name: industry.name, href: `/nozares/${slug}` },
      ]} />
      <FaqSchema items={industry.faqItems} />
      <PageHero title={`Pakalpojumi ${industry.nameDative}`} />
      <TextBlock>
        <h2>Pulverkrāsošana un metālapstrāde {industry.nameDative}</h2>
        <p>{industry.intro}</p>

        <h3>Mūsu pakalpojumi {industry.nameDative}</h3>
        <ul>
          {industry.services.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>

        <h3>Darbu piemēri</h3>
        <ul>
          {industry.examples.map((example, i) => (
            <li key={i}>{example}</li>
          ))}
        </ul>

        <h3>Jūsu ieguvumi</h3>
        <ul>
          {industry.benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>

        <h3>Mūsu iekārtu tehniskie parametri</h3>
        <p>
          Cietināšanas krāsns iekšējie izmēri: <strong>3.50m</strong> (garums) × <strong>1.50m</strong> (platums) × <strong>1.70m</strong> (augstums).
          Maksimālais apstrādājamo izstrādājumu izmērs līdz <strong>6m garumā</strong>, <strong>1.50m platumā</strong> un <strong>1.80m augstumā</strong>.
        </p>
      </TextBlock>

      <FaqAccordion title="Biežāk uzdotie jautājumi" items={industry.faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešama pulverkrāsošana vai metālapstrāde?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums, lai apspriestu jūsu projektu un saņemtu bezmaksas konsultāciju un izmaksu aprēķinu.
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
