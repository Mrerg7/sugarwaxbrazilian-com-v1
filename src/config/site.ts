export const SITE = {
  name: 'SugarBrazilianWax.com',
  domain: 'sugarbrazilianwax.com',
  title: 'SugarBrazilianWax.com • Premium Domain for Sale | Natural Sugaring & Brazilian Wax',
  description:
    'SugarBrazilianWax.com is now available for acquisition. Premium exact-match .com domain for the natural sugaring and Brazilian wax industry. Perfect for independent estheticians, premium salons, national chains, or e-commerce brands.',
  url: 'https://sugarbrazilianwax.com/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  googleSiteVerification: 'q9oFzaguVxzjJOjZhkSyLzj3GajHrFn9q9SGY5lrhws',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '3dedf6f6-971e-4ad2-9b37-e347bcb08600',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(`${SITE.name} Domain Acquisition Inquiry`)}&body=${encodeURIComponent(`Hello,\n\nI am interested in acquiring ${SITE.domain}.\n\nIntended use:\nBudget range:\n\nThank you.`)}`;

export const DISCLAIMER =
  'This website is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes. All statistics, projections, and references to specific technologies are based on publicly available information as of July 7, 2026 and are subject to change.';
