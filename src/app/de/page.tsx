import type { Metadata } from 'next';
import Landing from '@/components/Landing';
import { getDict } from '@/i18n/dictionaries';

export const dynamic = 'force-static';

const t = getDict('de');

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: 'https://interlinked.dev/de',
    languages: {
      en: 'https://interlinked.dev/',
      de: 'https://interlinked.dev/de',
    },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    url: 'https://interlinked.dev/de',
    siteName: 'interlinked.dev',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function LandingPageDe() {
  return <Landing lang="de" />;
}
