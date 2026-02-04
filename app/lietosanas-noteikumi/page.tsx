import { Metadata } from 'next';
import { PageHero, TextBlock } from '@/components/content';

export const metadata: Metadata = {
  title: 'Lietošanas noteikumi',
  description: 'Pulverkrāsotava vietnes lietošanas noteikumi.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Lietošanas noteikumi" />
      <TextBlock>
        <h2>Vietnes lietošanas noteikumi</h2>
        <p>Pēdējoreiz atjaunināts: 2024. gada janvāris</p>

        <h3>1. Vispārīgie noteikumi</h3>
        <p>
          Šie lietošanas noteikumi regulē vietnes pulverkrasotava.lv (turpmāk - &quot;Vietne&quot;)
          lietošanu. Izmantojot Vietni, jūs piekrītat šiem noteikumiem.
        </p>

        <h3>2. Vietnes saturs</h3>
        <p>
          Vietnes saturs, ieskaitot tekstus, attēlus, logotipus un citus materiālus, ir
          Pulverkrāsotava īpašums un ir aizsargāts ar autortiesībām. Materiālu kopēšana,
          izplatīšana vai modificēšana bez mūsu rakstiskas atļaujas ir aizliegta.
        </p>

        <h3>3. Pakalpojumu informācija</h3>
        <p>
          Vietnē sniegtā informācija par pakalpojumiem un cenām ir informatīva rakstura.
          Precīzas cenas un nosacījumi tiek noteikti individuāli katram pasūtījumam.
        </p>

        <h3>4. Lietotāja pienākumi</h3>
        <p>Izmantojot Vietni, jūs apņematies:</p>
        <ul>
          <li>Sniegt patiesu informāciju kontaktformās</li>
          <li>Neizmantot Vietni prettiesiskiem mērķiem</li>
          <li>Netraucēt Vietnes darbību</li>
        </ul>

        <h3>5. Atbildības ierobežojums</h3>
        <p>
          Mēs neuzņemamies atbildību par zaudējumiem, kas radušies Vietnes lietošanas vai
          pakalpojumu izmantošanas rezultātā, izņemot gadījumus, kad to paredz likums.
        </p>

        <h3>6. Saites uz citām vietnēm</h3>
        <p>
          Vietne var saturēt saites uz trešo pušu vietnēm. Mēs neesam atbildīgi par šo
          vietņu saturu vai privātuma praksi.
        </p>

        <h3>7. Noteikumu izmaiņas</h3>
        <p>
          Mēs paturam tiesības mainīt šos noteikumus jebkurā laikā. Izmaiņas stājas spēkā
          no to publicēšanas brīža Vietnē.
        </p>

        <h3>8. Piemērojamie tiesību akti</h3>
        <p>
          Šiem noteikumiem piemērojami Latvijas Republikas tiesību akti.
        </p>

        <h3>9. Kontaktinformācija</h3>
        <p>
          Jautājumu gadījumā sazinieties ar mums:<br />
          E-pasts: info@pulverkrasotava.lv<br />
          Tālrunis: +371 26 102 841
        </p>
      </TextBlock>
    </>
  );
}
