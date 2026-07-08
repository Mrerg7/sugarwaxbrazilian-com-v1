export const SITE = {
  name: 'SugarWaxBrazilian.com',
  domain: 'sugarwaxbrazilian.com',
  title: 'sugarwaxbrazilian.com • Premium Domain for Sale | Brazilian Sugar Waxing',
  description:
    'Own sugarwaxbrazilian.com — the SEO-superior domain for professional Brazilian sugar waxing. Keyword-rich, brandable, and perfectly positioned for the natural hair removal market.',
  url: 'https://sugarwaxbrazilian.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  googleSiteVerification: 'dL66d2EUkVuFaUtJc1ujqNyDjeOHbjcl9BuJWBQfXzQ',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'e31b3977-fdd0-4d57-5099-110e8c640a00',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const HERO_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);
export const OG_IMAGE = HERO_IMAGE;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(`Acquisition Inquiry - ${SITE.domain}`)}&body=${encodeURIComponent(`Hello,\n\nI am interested in acquiring ${SITE.domain}. Please provide details and next steps.\n\nBest regards,`)}`;

export const DISCLAIMER =
  'This website is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes. All statistics, projections, and references to specific technologies are based on publicly available information as of July 8, 2026 and are subject to change.';
