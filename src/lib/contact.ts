import { siteConfig } from './seo';

export function mailtoHref(subject: string, body = '') {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as "+", which mail clients show literally
  return `mailto:${siteConfig.links.email}?${params.toString().replace(/\+/g, '%20')}`;
}

const defaultBody = 'Hi Lucas,\n\nI saw your portfolio and would like to talk about:\n\n';

/** The one link every primary "Talk to me" button points to. */
export const primaryContactHref =
  siteConfig.links.booking ?? mailtoHref('Project inquiry', defaultBody);

export const primaryContactLabel = siteConfig.links.booking ? 'Book a call' : 'Talk to me';

/** WhatsApp chat with a first line already typed, so the message opens with context. */
export const whatsappHref = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
  "Hi Lucas, I have a project in mind and I'd like to talk about it.",
)}`;
