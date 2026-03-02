import { Metadata } from 'next';
import { PageHero, TextBlock, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqSchema from '@/components/FaqSchema';

interface Region {
  slug: string;
  name: string;
  nameLocative: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  distanceFromGulbene: string;
  cities: string[];
  intro: string;
  whyUs: string[];
  faqItems: { question: string; answer: string }[];
}

const regions: Record<string, Region> = {
  'vidzeme': {
    slug: 'vidzeme',
    name: 'Vidzeme',
    nameLocative: 'Vidzemē',
    description: 'Pulverkrāsošana, smilšu strūklošana un metālapstrāde Vidzemes reģionā.',
    metaTitle: 'Pulverkrāsošana Vidzemē - Metālapstrāde Vidzemes Uzņēmumiem',
    metaDescription: 'Profesionāla pulverkrāsošana, smilšu strūklošana un metālapstrāde Vidzemē. Apkalpojam Gulbeni, Cēsis, Valmieru, Smilteni, Alūksni, Madonu. Zvaniet +371 26 102 841.',
    distanceFromGulbene: '',
    cities: ['Gulbene', 'Cēsis', 'Valmiera', 'Smiltene', 'Alūksne', 'Madona', 'Balvi'],
    intro: 'Pulverkrāsotava ir vienīgais specializētais pulverkrāsošanas uzņēmums Vidzemē, kas atrodas Gulbenē. Mēs apkalpojam uzņēmumus visā Vidzemes reģionā, piedāvājot pilnu metāla apstrādes servisu - no smilšu strūklošanas līdz pulverkrāsošanai un metālapstrādei.',
    whyUs: [
      'Vienīgais pulverkrāsošanas uzņēmums Vidzemē - nav jābrauc uz Rīgu',
      'Cietināšanas krāsns: 3.50m × 1.50m × 1.70m - liela izmēra izstrādājumiem',
      'Maksimālais izstrādājumu izmērs līdz 6m garumā',
      'Pilns serviss: smilšu strūklošana + metālapstrāde + pulverkrāsošana',
      'Ātra izpilde - standarta pasūtījumi 3-5 darba dienu laikā',
      'Sertificēti Eiropas ražotāju materiāli',
    ],
    faqItems: [
      {
        question: 'Kur atrodas jūsu darbnīca?',
        answer: 'Mūsu darbnīca atrodas "Vecvagari", Druvienas pagastā, Gulbenes novadā. Mēs apkalpojam klientus no visas Vidzemes - Gulbenes, Cēsu, Valmieras, Smiltenes, Alūksnes, Madonas un Balvu apkārtnes.',
      },
      {
        question: 'Vai piedāvājat transportu no citām Vidzemes pilsētām?',
        answer: 'Jā, varam organizēt izstrādājumu saņemšanu un piegādi visā Vidzemes reģionā. Sazinieties ar mums, lai apspriestu transporta iespējas jūsu atrašanās vietai.',
      },
      {
        question: 'Kāpēc izvēlēties Pulverkrāsotavu, nevis Rīgas uzņēmumus?',
        answer: 'Mēs esam tuvāk jūsu uzņēmumam Vidzemē, kas nozīmē mazākas transporta izmaksas un ātrāku izpildi. Turklāt piedāvājam tādu pašu kvalitāti kā Rīgas uzņēmumi, bet ar individuālāku pieeju.',
      },
      {
        question: 'Kādus pakalpojumus piedāvājat?',
        answer: 'Piedāvājam pulverkrāsošanu, smilšu strūklošanu, metālapstrādi (griešana, locīšana, MIG/MAG metināšana), metāla konstrukciju izgatavošanu un metāla izstrādājumu ražošanu pēc pasūtījuma.',
      },
    ],
  },
  'latgale': {
    slug: 'latgale',
    name: 'Latgale',
    nameLocative: 'Latgalē',
    description: 'Pulverkrāsošana, smilšu strūklošana un metālapstrāde Latgales reģionā.',
    metaTitle: 'Pulverkrāsošana Latgalē - Metālapstrāde Latgales Uzņēmumiem',
    metaDescription: 'Profesionāla pulverkrāsošana, smilšu strūklošana un metālapstrāde Latgalē. Apkalpojam Daugavpili, Rēzekni, Preiļus, Ludzu, Krāslavu. Zvaniet +371 26 102 841.',
    distanceFromGulbene: '',
    cities: ['Daugavpils', 'Rēzekne', 'Preiļi', 'Ludza', 'Krāslava', 'Līvāni', 'Balvi'],
    intro: 'Pulverkrāsotava piedāvā profesionālus pulverkrāsošanas, smilšu strūklošanas un metālapstrādes pakalpojumus Latgales reģiona uzņēmumiem. Mūsu darbnīca atrodas Gulbenē, kas ir ērta atrašanās vieta Latgales klientiem - daudz tuvāk nekā Rīga.',
    whyUs: [
      'Daudz tuvāk nekā Rīga - ietaupiet transporta izmaksas',
      'Cietināšanas krāsns: 3.50m × 1.50m × 1.70m - liela izmēra izstrādājumiem',
      'Maksimālais izstrādājumu izmērs līdz 6m garumā',
      'Pilns serviss: smilšu strūklošana + metālapstrāde + pulverkrāsošana',
      'Pieredze darbā ar lauksaimniecības un mežsaimniecības uzņēmumiem',
      'Sertificēti Eiropas ražotāju materiāli',
    ],
    faqItems: [
      {
        question: 'Cik tālu ir no Latgales pilsētām līdz jūsu darbnīcai?',
        answer: 'No Rēzeknes līdz Gulbenei ir aptuveni 90 km, no Daugavpils - 200 km, no Preiļiem - 130 km, no Ludzas - 100 km. Tas ir ievērojami tuvāk nekā braukt uz Rīgu (230+ km).',
      },
      {
        question: 'Vai piedāvājat transportu no Latgales?',
        answer: 'Jā, varam organizēt izstrādājumu saņemšanu un piegādi Latgales reģionā. Lielākiem pasūtījumiem transports var būt bez maksas. Sazinieties ar mums, lai apspriestu.',
      },
      {
        question: 'Kāpēc izvēlēties Pulverkrāsotavu, nevis Rīgas uzņēmumus?',
        answer: 'Gulbene atrodas ievērojami tuvāk Latgales pilsētām nekā Rīga. Tas nozīmē mazākas transporta izmaksas, ātrāku izpildi un iespēju personīgi apmeklēt darbnīcu. Piedāvājam tādu pašu kvalitāti ar individuālāku pieeju.',
      },
      {
        question: 'Vai strādājat ar Latgales lauksaimniecības uzņēmumiem?',
        answer: 'Jā, mums ir pieredze darbā ar lauksaimniecības un mežsaimniecības uzņēmumiem - traktoru un tehnikas detaļu atjaunošana, aprīkojuma izgatavošana un pulverkrāsošana.',
      },
    ],
  },
  'cesis': {
    slug: 'cesis',
    name: 'Cēsis',
    nameLocative: 'Cēsīs',
    description: 'Pulverkrāsošana un metālapstrāde Cēsu apkārtnē.',
    metaTitle: 'Pulverkrāsošana Cēsīs - Smilšu Strūkla un Metālapstrāde',
    metaDescription: 'Profesionāla pulverkrāsošana un metālapstrāde Cēsu apkārtnes uzņēmumiem. Gulbene - 85 km no Cēsīm. Krāsns līdz 6m gariem izstrādājumiem. Zvaniet +371 26 102 841.',
    distanceFromGulbene: '~85 km',
    cities: [],
    intro: 'Pulverkrāsotava piedāvā profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus Cēsu apkārtnes uzņēmumiem. Mūsu darbnīca Gulbenē atrodas aptuveni 85 km no Cēsīm - ērti sasniedzama pa Vidzemes šoseju.',
    whyUs: [
      'Aptuveni 85 km no Cēsīm - tuvāk nekā Rīga',
      'Cietināšanas krāsns līdz 6m gariem izstrādājumiem',
      'Pilns serviss vienā vietā - nav jābrauc uz vairākiem uzņēmumiem',
      'Konkurētspējīgas cenas Vidzemes uzņēmumiem',
      'Ātra izpilde un individuāla pieeja',
      'Pieredze ar rūpnieciskiem un lauksaimniecības projektiem',
    ],
    faqItems: [
      {
        question: 'Cik tālu ir no Cēsīm līdz jūsu darbnīcai?',
        answer: 'No Cēsīm līdz mūsu darbnīcai Gulbenē ir aptuveni 85 km, kas ir mazāk nekā brauciens uz Rīgu. Pa Vidzemes šoseju ceļš aizņem aptuveni 1 stundu.',
      },
      {
        question: 'Vai varat saņemt izstrādājumus Cēsīs?',
        answer: 'Jā, varam organizēt izstrādājumu saņemšanu un piegādi Cēsu apkārtnē. Sazinieties ar mums, lai apspriestu transporta iespējas.',
      },
      {
        question: 'Kādus pakalpojumus piedāvājat Cēsu uzņēmumiem?',
        answer: 'Piedāvājam pilnu servisu - pulverkrāsošanu, smilšu strūklošanu, metālapstrādi (griešana, metināšana, locīšana), metāla konstrukciju izgatavošanu un metāla izstrādājumu ražošanu.',
      },
    ],
  },
  'valmiera': {
    slug: 'valmiera',
    name: 'Valmiera',
    nameLocative: 'Valmierā',
    description: 'Pulverkrāsošana un metālapstrāde Valmieras apkārtnē.',
    metaTitle: 'Pulverkrāsošana Valmierā - Smilšu Strūkla un Metālapstrāde',
    metaDescription: 'Profesionāla pulverkrāsošana un metālapstrāde Valmieras apkārtnes uzņēmumiem. Gulbene - 100 km no Valmieras. Zvaniet +371 26 102 841.',
    distanceFromGulbene: '~100 km',
    cities: [],
    intro: 'Pulverkrāsotava piedāvā profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus Valmieras apkārtnes uzņēmumiem. Mūsu darbnīca Gulbenē atrodas aptuveni 100 km no Valmieras.',
    whyUs: [
      'Aptuveni 100 km no Valmieras - tuvāk nekā Rīga',
      'Cietināšanas krāsns līdz 6m gariem izstrādājumiem',
      'Pilns serviss vienā vietā',
      'Konkurētspējīgas cenas',
      'Ātra izpilde un individuāla pieeja',
      'Pieredze ar rūpnieciskiem projektiem',
    ],
    faqItems: [
      {
        question: 'Cik tālu ir no Valmieras līdz jūsu darbnīcai?',
        answer: 'No Valmieras līdz mūsu darbnīcai Gulbenē ir aptuveni 100 km. Ceļš aizņem aptuveni 1 stundu un 15 minūtes.',
      },
      {
        question: 'Vai piedāvājat transportu Valmieras uzņēmumiem?',
        answer: 'Jā, varam organizēt izstrādājumu saņemšanu un piegādi Valmieras apkārtnē. Lielākiem pasūtījumiem transports var būt bez maksas.',
      },
      {
        question: 'Kādus uzņēmumus apkalpojat Valmieras reģionā?',
        answer: 'Apkalpojam ražošanas uzņēmumus, lauksaimniecības saimniecības, būvniecības kompānijas, noliktavas un citus B2B klientus Valmieras apkārtnē.',
      },
    ],
  },
  'madona': {
    slug: 'madona',
    name: 'Madona',
    nameLocative: 'Madonā',
    description: 'Pulverkrāsošana un metālapstrāde Madonas apkārtnē.',
    metaTitle: 'Pulverkrāsošana Madonā - Smilšu Strūkla un Metālapstrāde',
    metaDescription: 'Profesionāla pulverkrāsošana un metālapstrāde Madonas apkārtnes uzņēmumiem. Gulbene - 55 km no Madonas. Zvaniet +371 26 102 841.',
    distanceFromGulbene: '~55 km',
    cities: [],
    intro: 'Pulverkrāsotava piedāvā profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus Madonas apkārtnes uzņēmumiem. Mūsu darbnīca Gulbenē atrodas tikai aptuveni 55 km no Madonas - viens no tuvākajiem reģioniem.',
    whyUs: [
      'Tikai 55 km no Madonas - ļoti ērti sasniedzams',
      'Cietināšanas krāsns līdz 6m gariem izstrādājumiem',
      'Pilns serviss vienā vietā',
      'Konkurētspējīgas cenas',
      'Ātra izpilde un individuāla pieeja',
      'Pieredze ar lauksaimniecības tehniku',
    ],
    faqItems: [
      {
        question: 'Cik tālu ir no Madonas līdz jūsu darbnīcai?',
        answer: 'No Madonas līdz mūsu darbnīcai Gulbenē ir tikai aptuveni 55 km. Ceļš aizņem aptuveni 45 minūtes.',
      },
      {
        question: 'Vai piedāvājat transportu Madonas uzņēmumiem?',
        answer: 'Jā, ņemot vērā nelielo attālumu, varam ērti organizēt izstrādājumu saņemšanu un piegādi Madonas apkārtnē.',
      },
    ],
  },
  'aluksne': {
    slug: 'aluksne',
    name: 'Alūksne',
    nameLocative: 'Alūksnē',
    description: 'Pulverkrāsošana un metālapstrāde Alūksnes apkārtnē.',
    metaTitle: 'Pulverkrāsošana Alūksnē - Smilšu Strūkla un Metālapstrāde',
    metaDescription: 'Profesionāla pulverkrāsošana un metālapstrāde Alūksnes apkārtnes uzņēmumiem. Gulbene - 50 km no Alūksnes. Zvaniet +371 26 102 841.',
    distanceFromGulbene: '~50 km',
    cities: [],
    intro: 'Pulverkrāsotava piedāvā profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus Alūksnes apkārtnes uzņēmumiem. Mūsu darbnīca Gulbenē atrodas tikai aptuveni 50 km no Alūksnes.',
    whyUs: [
      'Tikai 50 km no Alūksnes - ļoti ērti sasniedzams',
      'Cietināšanas krāsns līdz 6m gariem izstrādājumiem',
      'Pilns serviss vienā vietā',
      'Konkurētspējīgas cenas',
      'Ātra izpilde un individuāla pieeja',
      'Pieredze ar mežsaimniecības un lauksaimniecības uzņēmumiem',
    ],
    faqItems: [
      {
        question: 'Cik tālu ir no Alūksnes līdz jūsu darbnīcai?',
        answer: 'No Alūksnes līdz mūsu darbnīcai Gulbenē ir tikai aptuveni 50 km. Ceļš aizņem aptuveni 40 minūtes.',
      },
      {
        question: 'Vai piedāvājat transportu Alūksnes uzņēmumiem?',
        answer: 'Jā, ņemot vērā nelielo attālumu, varam ērti organizēt izstrādājumu saņemšanu un piegādi Alūksnes apkārtnē.',
      },
    ],
  },
  'smiltene': {
    slug: 'smiltene',
    name: 'Smiltene',
    nameLocative: 'Smiltenē',
    description: 'Pulverkrāsošana un metālapstrāde Smiltenes apkārtnē.',
    metaTitle: 'Pulverkrāsošana Smiltenē - Smilšu Strūkla un Metālapstrāde',
    metaDescription: 'Profesionāla pulverkrāsošana un metālapstrāde Smiltenes apkārtnes uzņēmumiem. Gulbene - 70 km no Smiltenes. Zvaniet +371 26 102 841.',
    distanceFromGulbene: '~70 km',
    cities: [],
    intro: 'Pulverkrāsotava piedāvā profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus Smiltenes apkārtnes uzņēmumiem. Mūsu darbnīca Gulbenē atrodas aptuveni 70 km no Smiltenes.',
    whyUs: [
      'Aptuveni 70 km no Smiltenes - tuvāk nekā Rīga',
      'Cietināšanas krāsns līdz 6m gariem izstrādājumiem',
      'Pilns serviss vienā vietā',
      'Konkurētspējīgas cenas',
      'Ātra izpilde un individuāla pieeja',
      'Pieredze ar lauksaimniecības un mežsaimniecības projektiem',
    ],
    faqItems: [
      {
        question: 'Cik tālu ir no Smiltenes līdz jūsu darbnīcai?',
        answer: 'No Smiltenes līdz mūsu darbnīcai Gulbenē ir aptuveni 70 km. Ceļš aizņem aptuveni 1 stundu.',
      },
      {
        question: 'Vai piedāvājat transportu Smiltenes uzņēmumiem?',
        answer: 'Jā, varam organizēt izstrādājumu saņemšanu un piegādi Smiltenes apkārtnē.',
      },
    ],
  },
  'daugavpils': {
    slug: 'daugavpils',
    name: 'Daugavpils',
    nameLocative: 'Daugavpilī',
    description: 'Pulverkrāsošana un metālapstrāde Daugavpils apkārtnē.',
    metaTitle: 'Pulverkrāsošana Daugavpilī - Smilšu Strūkla un Metālapstrāde',
    metaDescription: 'Profesionāla pulverkrāsošana un metālapstrāde Daugavpils apkārtnes uzņēmumiem. Pilns metāla apstrādes serviss. Zvaniet +371 26 102 841.',
    distanceFromGulbene: '~200 km',
    cities: [],
    intro: 'Pulverkrāsotava piedāvā profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus Daugavpils apkārtnes uzņēmumiem. Lai gan mūsu darbnīca atrodas Gulbenē, mēs regulāri apkalpojam Latgales reģiona klientus, tostarp Daugavpils uzņēmumus.',
    whyUs: [
      'Alternatīva Rīgas uzņēmumiem ar individuālāku pieeju',
      'Cietināšanas krāsns līdz 6m gariem izstrādājumiem',
      'Pilns serviss: smilšu strūklošana + metālapstrāde + pulverkrāsošana',
      'Konkurētspējīgas cenas',
      'Iespēja organizēt transportu',
      'Pieredze ar rūpnieciskiem un lauksaimniecības projektiem',
    ],
    faqItems: [
      {
        question: 'Cik tālu ir no Daugavpils līdz jūsu darbnīcai?',
        answer: 'No Daugavpils līdz mūsu darbnīcai Gulbenē ir aptuveni 200 km. Mēs varam organizēt izstrādājumu saņemšanu un piegādi lielākiem pasūtījumiem.',
      },
      {
        question: 'Vai ir vērts braukt līdz Gulbenei no Daugavpils?',
        answer: 'Lielākiem projektiem un sērijveida pasūtījumiem - noteikti jā. Mēs piedāvājam konkurētspējīgas cenas, un transporta izmaksas kompensē izdevīgākas pakalpojumu cenas. Turklāt varam organizēt transportu.',
      },
    ],
  },
  'rezekne': {
    slug: 'rezekne',
    name: 'Rēzekne',
    nameLocative: 'Rēzeknē',
    description: 'Pulverkrāsošana un metālapstrāde Rēzeknes apkārtnē.',
    metaTitle: 'Pulverkrāsošana Rēzeknē - Smilšu Strūkla un Metālapstrāde',
    metaDescription: 'Profesionāla pulverkrāsošana un metālapstrāde Rēzeknes apkārtnes uzņēmumiem. Gulbene - 90 km no Rēzeknes. Zvaniet +371 26 102 841.',
    distanceFromGulbene: '~90 km',
    cities: [],
    intro: 'Pulverkrāsotava piedāvā profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus Rēzeknes apkārtnes uzņēmumiem. Mūsu darbnīca Gulbenē atrodas aptuveni 90 km no Rēzeknes - ievērojami tuvāk nekā Rīga.',
    whyUs: [
      'Aptuveni 90 km no Rēzeknes - daudz tuvāk nekā Rīga (230+ km)',
      'Cietināšanas krāsns līdz 6m gariem izstrādājumiem',
      'Pilns serviss vienā vietā',
      'Konkurētspējīgas cenas',
      'Iespēja organizēt transportu',
      'Pieredze ar lauksaimniecības un mežsaimniecības uzņēmumiem',
    ],
    faqItems: [
      {
        question: 'Cik tālu ir no Rēzeknes līdz jūsu darbnīcai?',
        answer: 'No Rēzeknes līdz mūsu darbnīcai Gulbenē ir aptuveni 90 km. Ceļš aizņem aptuveni 1 stundu un 15 minūtes. Tas ir gandrīz 3x tuvāk nekā Rīga.',
      },
      {
        question: 'Vai piedāvājat transportu Rēzeknes uzņēmumiem?',
        answer: 'Jā, varam organizēt izstrādājumu saņemšanu un piegādi Rēzeknes apkārtnē. Lielākiem pasūtījumiem transports var būt bez maksas.',
      },
    ],
  },
  'riga': {
    slug: 'riga',
    name: 'Rīga',
    nameLocative: 'Rīgā',
    description: 'Pulverkrāsošana un metālapstrāde Rīgas uzņēmumiem.',
    metaTitle: 'Pulverkrāsošana Rīgā - Metālapstrāde un Smilšu Strūkla',
    metaDescription: 'Profesionāla pulverkrāsošana un metālapstrāde Rīgas uzņēmumiem. Liela izmēra izstrādājumi līdz 6m. Konkurētspējīgas cenas. Zvaniet +371 26 102 841.',
    distanceFromGulbene: '~200 km',
    cities: [],
    intro: 'Pulverkrāsotava piedāvā profesionālus pulverkrāsošanas un metālapstrādes pakalpojumus arī Rīgas uzņēmumiem. Lai gan mūsu darbnīca atrodas Gulbenē, mēs regulāri apkalpojam Rīgas klientus, piedāvājot konkurētspējīgas cenas un liela izmēra izstrādājumu apstrādi, kas nav pieejama daudziem Rīgas uzņēmumiem.',
    whyUs: [
      'Izstrādājumu apstrāde līdz 6m garumā - lielāka kapacitāte nekā daudziem Rīgas uzņēmumiem',
      'Konkurētspējīgākas cenas nekā Rīgas centrā',
      'Pilns serviss: smilšu strūklošana + metālapstrāde + pulverkrāsošana',
      'Sertificēti Eiropas ražotāju materiāli',
      'Iespēja organizēt transportu',
      'Sērijveida ražošana ar izdevīgām vienības cenām',
    ],
    faqItems: [
      {
        question: 'Kāpēc Rīgas uzņēmumam izvēlēties Pulverkrāsotavu Gulbenē?',
        answer: 'Mēs piedāvājam lielāku apstrādes kapacitāti (izstrādājumi līdz 6m) nekā daudzi Rīgas uzņēmumi, konkurētspējīgākas cenas un pilnu servisu vienā vietā. Lielākiem pasūtījumiem varam organizēt transportu.',
      },
      {
        question: 'Vai piedāvājat transportu no/uz Rīgu?',
        answer: 'Jā, lielākiem pasūtījumiem varam organizēt izstrādājumu saņemšanu Rīgā un piegādi pēc pabeigšanas. Sazinieties ar mums, lai apspriestu transporta iespējas.',
      },
    ],
  },
};

const regionSlugs = Object.keys(regions);

export function generateStaticParams() {
  return regionSlugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = regions[slug];

  if (!region) {
    return { title: 'Reģions nav atrasts' };
  }

  return {
    title: region.metaTitle,
    description: region.metaDescription,
    alternates: {
      canonical: `/regioni/${slug}`,
    },
  };
}

export default async function RegionPage({ params }: PageProps) {
  const { slug } = await params;
  const region = regions[slug];

  if (!region) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Reģioni', href: '/regioni/' + slug },
        { name: region.name, href: `/regioni/${slug}` },
      ]} />
      <FaqSchema items={region.faqItems} />
      <PageHero title={`Pulverkrāsošana un metālapstrāde ${region.nameLocative}`} />
      <TextBlock>
        <h2>Pulverkrāsošana un metālapstrāde {region.nameLocative}</h2>
        <p>{region.intro}</p>

        {region.cities.length > 0 && (
          <>
            <h3>Apkalpojamās pilsētas {region.nameLocative}</h3>
            <ul>
              {region.cities.map((city) => (
                <li key={city}><strong>{city}</strong>{regions[city.toLowerCase()] ? ` - ${city} un apkārtne` : ''}</li>
              ))}
            </ul>
          </>
        )}

        <h3>Kāpēc izvēlēties Pulverkrāsotavu?</h3>
        <ul>
          {region.whyUs.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Mūsu pakalpojumi</h3>
        <ul>
          <li><strong><Link href="/pakalpojumi/pulverkrasosana">Pulverkrāsošana</Link></strong> - izturīgs pulvera pārklājums ar plašu RAL krāsu izvēli</li>
          <li><strong><Link href="/pakalpojumi/smilsu-strukla-smilsu-struklosana">Smilšu strūklošana</Link></strong> - virsmu sagatavošana un rūsas noņemšana</li>
          <li><strong><Link href="/pakalpojumi/metalapstrade">Metālapstrāde</Link></strong> - griešana, locīšana, MIG/MAG metināšana</li>
          <li><strong><Link href="/pakalpojumi/metala-konstrukciju-izgatavosana-metala-izstradajumi">Metāla konstrukcijas</Link></strong> - kāpnes, margas, vārti, žogi pēc pasūtījuma</li>
          <li><strong><Link href="/pakalpojumi/metala-koka-mebelu-izgatavosana-darza-mebeles-ara-mebeles">Metāla izstrādājumi</Link></strong> - komerciālās mēbeles, noliktavu aprīkojums</li>
        </ul>
      </TextBlock>

      <FaqAccordion title="Biežāk uzdotie jautājumi" items={region.faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešama pulverkrāsošana vai metālapstrāde {region.nameLocative}?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums, lai apspriestu jūsu projektu un saņemtu bezmaksas konsultāciju.
            {region.distanceFromGulbene && ` Mūsu darbnīca atrodas ${region.distanceFromGulbene} no ${region.name}.`}
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
