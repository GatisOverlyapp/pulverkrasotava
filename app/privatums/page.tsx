import { Metadata } from 'next';
import { PageHero, TextBlock } from '@/components/content';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Privātuma politika',
  description: 'Pulverkrāsotava privātuma politika - kā mēs apstrādājam jūsu personas datus.',
  alternates: {
    canonical: '/privatums',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Privātuma politika', href: '/privatums' },
      ]} />
      <PageHero title="Privātuma politika" />
      <TextBlock>
        <h2>Privātuma politika</h2>
        <p>Pēdējoreiz atjaunināts: 2024. gada janvāris</p>

        <h3>1. Vispārīga informācija</h3>
        <p>
          Šī privātuma politika apraksta, kā Pulverkrāsotava (turpmāk - &quot;mēs&quot;, &quot;mūsu&quot;)
          vāc, izmanto un aizsargā jūsu personas datus, kad jūs izmantojat mūsu vietni
          pulverkrasotava.lv (turpmāk - &quot;Vietne&quot;).
        </p>

        <h3>2. Kādus datus mēs vācam</h3>
        <p>Mēs varam vākt šādus datus:</p>
        <ul>
          <li>Vārds un uzvārds</li>
          <li>E-pasta adrese</li>
          <li>Tālruņa numurs</li>
          <li>Ziņas, ko jūs mums sūtāt caur kontaktformu</li>
          <li>Tehniskie dati (IP adrese, pārlūka veids, apmeklējuma laiks)</li>
        </ul>

        <h3>3. Kā mēs izmantojam jūsu datus</h3>
        <p>Mēs izmantojam jūsu datus, lai:</p>
        <ul>
          <li>Atbildētu uz jūsu jautājumiem un pieprasījumiem</li>
          <li>Sniegtu jums informāciju par mūsu pakalpojumiem</li>
          <li>Uzlabotu mūsu vietni un pakalpojumus</li>
          <li>Izpildītu juridiskās prasības</li>
        </ul>

        <h3>4. Datu aizsardzība</h3>
        <p>
          Mēs veicam atbilstošus tehniskus un organizatoriskus pasākumus, lai aizsargātu
          jūsu personas datus pret nesankcionētu piekļuvi, izmaiņām, izpaušanu vai iznīcināšanu.
        </p>

        <h3>5. Datu uzglabāšana</h3>
        <p>
          Mēs uzglabājam jūsu personas datus tik ilgi, cik nepieciešams šajā politikā
          aprakstītajiem mērķiem vai cik to pieprasa likums.
        </p>

        <h3>6. Jūsu tiesības</h3>
        <p>Jums ir tiesības:</p>
        <ul>
          <li>Piekļūt saviem personas datiem</li>
          <li>Labot neprecīzus datus</li>
          <li>Dzēst savus datus</li>
          <li>Ierobežot datu apstrādi</li>
          <li>Iebilst pret datu apstrādi</li>
        </ul>

        <h3>7. Sīkdatnes</h3>
        <p>
          Mūsu vietne izmanto sīkdatnes. Vairāk informācijas skatiet mūsu sīkdatņu politikā.
        </p>

        <h3>8. Saziņa</h3>
        <p>
          Ja jums ir jautājumi par šo privātuma politiku vai vēlaties izmantot savas tiesības,
          lūdzu, sazinieties ar mums:
        </p>
        <p>
          E-pasts: info@pulverkrasotava.lv<br />
          Tālrunis: +371 26 102 841
        </p>
      </TextBlock>
    </>
  );
}
