export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pulverkrasotava.lv',
    name: 'Pulverkrāsotava',
    legalName: 'SIA "AFREK"',
    description: 'Profesionāla pulverkrāsošana, smilšu strūklošana un metālapstrāde Vidzemē, Latvijā. B2B pakalpojumi rūpniecības, lauksaimniecības un mežsaimniecības uzņēmumiem.',
    url: 'https://pulverkrasotava.lv',
    telephone: '+37126102841',
    email: 'info@pulverkrasotava.lv',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '"Vecvagari", Druvienas pag.',
      addressLocality: 'Gulbenes nov.',
      postalCode: 'LV-4426',
      addressCountry: 'LV',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 57.1566,
      longitude: 26.7547,
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Vidzeme',
      },
      {
        '@type': 'Country',
        name: 'Latvija',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    image: 'https://pulverkrasotava.lv/logo.svg',
    sameAs: [
      'https://www.facebook.com/pulverkrasotava',
      'https://www.instagram.com/pulverkrasotava',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pakalpojumi',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pulverkrāsošana',
            description: 'Profesionāla pulverkrāsošana ar plašu krāsu izvēli',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Smilšu strūklošana',
            description: 'Metāla virsmu sagatavošana un tīrīšana',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Metālapstrāde',
            description: 'Griešana, locīšana, metināšana un citi metāla apstrādes pakalpojumi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Metāla konstrukcijas',
            description: 'Metāla konstrukciju projektēšana un izgatavošana',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Metāla izstrādājumi un mēbeles',
            description: 'Metāla izstrādājumu un mēbeļu ražošana - komerciālās mēbeles, noliktavu aprīkojums, rūpnieciskās konstrukcijas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vārtu un žogu atjaunošana',
            description: 'Vārtu un žogu atjaunošana - smilšu strūklošana un pulverkrāsošana',
          },
        },
      ],
    },
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pulverkrāsotava',
    url: 'https://pulverkrasotava.lv',
    inLanguage: 'lv',
    publisher: {
      '@type': 'Organization',
      name: 'Pulverkrāsotava',
      legalName: 'SIA "AFREK"',
      url: 'https://pulverkrasotava.lv',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}
