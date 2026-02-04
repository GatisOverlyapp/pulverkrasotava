import { Metadata } from 'next';
import { PageHero, TextBlock } from '@/components/content';

export const metadata: Metadata = {
  title: 'Atruna',
  description: 'Pulverkrāsotava juridiskā atruna.',
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero title="Atruna" />
      <TextBlock>
        <h2>Juridiskā atruna</h2>
        <p>Pēdējoreiz atjaunināts: 2024. gada janvāris</p>

        <h3>Vispārīga informācija</h3>
        <p>
          Informācija, kas sniegta vietnē pulverkrasotava.lv, ir paredzēta tikai vispārīgiem
          informatīviem mērķiem. Mēs cenšamies nodrošināt precīzu un aktuālu informāciju,
          taču negarantējam tās pilnīgumu vai precizitāti.
        </p>

        <h3>Pakalpojumu sniegšana</h3>
        <p>
          Konkrēti pakalpojumu noteikumi, cenas un termiņi tiek noteikti individuāli
          katram pasūtījumam. Vietnē norādītās cenas ir orientējošas un var mainīties
          atkarībā no konkrētā projekta specifikācijas.
        </p>

        <h3>Ārējās saites</h3>
        <p>
          Mūsu vietne var saturēt saites uz citām interneta vietnēm. Mēs neesam
          atbildīgi par šo vietņu saturu, drošību vai privātuma praksi.
        </p>

        <h3>Rezultātu garantija</h3>
        <p>
          Lai gan mēs cenšamies nodrošināt augstāko kvalitāti, gala rezultāts var
          atšķirties atkarībā no materiāla stāvokļa, izmēriem un citiem faktoriem.
          Detalizēta informācija par garantiju tiek sniegta individuāli.
        </p>

        <h3>Atbildības ierobežojums</h3>
        <p>
          Mēs neuzņemamies atbildību par tiešiem vai netiešiem zaudējumiem, kas
          radušies, izmantojot vai nespējot izmantot mūsu vietni vai pakalpojumus,
          izņemot gadījumus, kad to paredz piemērojamie tiesību akti.
        </p>

        <h3>Jautājumi</h3>
        <p>
          Ja jums ir jautājumi par šo atrunu, lūdzu, sazinieties ar mums:<br />
          E-pasts: info@pulverkrasotava.lv<br />
          Tālrunis: +371 26 102 841
        </p>
      </TextBlock>
    </>
  );
}
