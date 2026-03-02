interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://pulverkrasotava.lv${url}`,
    ...(image && { image: `https://pulverkrasotava.lv${image}` }),
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pulverkrāsotava',
      legalName: 'SIA "AFREK"',
      url: 'https://pulverkrasotava.lv',
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
