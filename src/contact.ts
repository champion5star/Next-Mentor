export const CONTACT_EMAIL = 'jw2318692@gmail.com';

export function createIntroductionEmail(data: Pick<FormData, 'get'>): string {
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const plan = String(data.get('plan') ?? '').trim();
  const goal = String(data.get('goal') ?? '').trim();
  const body = `Hello,\n\nMy name is ${name}.\nMy email: ${email}\nInterested in: ${plan}\n\nMy starting point and goal:\n${goal}\n\nI would like to discuss mentoring, availability, and the contract and payment terms.\n`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Mentoring introduction — ${name}`)}&body=${encodeURIComponent(body)}`;
}
