import { Link } from 'wouter';
import { Check, Send, Eye } from 'lucide-react';
import FaqAccordion from '@/components/faq-accordion';
import Reveal from '@/components/reveal';
import TextReveal from '@/components/text-reveal';

const SERVICES = [
  { n: '01', title: 'YouTube Thumbnail Design', desc: 'The core service. I study your channel, your niche, and the competition before a single element gets placed. The result is a thumbnail that earns its click because it was designed specifically for your feed.' },
  { n: '02', title: 'Gaming Thumbnails', desc: 'High-impact, high-energy designs built to perform in the most competitive section of YouTube. Every frame fights for attention.' },
  { n: '03', title: 'Business Thumbnails', desc: 'Professional designs that balance credibility with click appeal. Trusted by educators, consultants, and creators in professional niches.' },
  { n: '04', title: 'Educational Thumbnails', desc: 'Clear visual hierarchy and bold framing that makes complex topics approachable before the first second of video plays.' },
  { n: '05', title: 'Podcast Cover Art', desc: 'Static artwork that works at every size from Spotify grid to Apple banner. Built to establish brand recognition across every platform.' },
  { n: '06', title: 'Channel Branding Package', desc: 'A visual identity system for your channel — thumbnail template, banner, profile art, and colour system that works cohesively.' },
  { n: '07', title: 'Series / Bulk Pack', desc: '10 to 50+ thumbnails in one batch. Unified series template. Episode numbering system. Volume pricing discounts. Inconsistent thumbnails looks unfinished — I design the master template and all the variants together.' },
  { n: '08', title: 'Agency and White-Label', desc: 'Managing 10 channels shouldn\'t mean 10 different designers. I work as a silent extension of your team: dedicated priority queue, white-label files, invoicing support, and the consistency your clients expect.' },
];

const PLANS = [
  {
    name: 'Starter',
    price: '$29',
    unit: 'per thumbnail',
    popular: false,
    features: ['1 custom thumbnail', '1920×1080 px source file', '2 revision rounds', 'JPG and PNG export', '72-hour delivery'],
    cta: 'Get Started',
  },
  {
    name: 'Creator',
    price: '$89',
    unit: 'pack of 4 thumbnails',
    popular: true,
    features: ['4 custom thumbnails', 'Full source files (PSD)', 'Unlimited revisions', 'All export formats', '48-hour delivery', 'Series style guide included'],
    cta: 'Most Popular',
  },
  {
    name: 'Pro',
    price: '$199',
    unit: 'monthly retainer',
    popular: false,
    features: ['10 thumbnails per month', 'Full source files', 'Unlimited revisions', 'Priority 24-hr delivery', 'Monthly channel branding review', 'Direct Discord access'],
    cta: 'Go Pro',
  },
];

const COMMITMENTS = [
  { n: '01', title: 'Revisions Until You Love It', desc: 'Not "2 rounds and done." I keep going until the design is something you\'re genuinely proud to post, not just tolerating it because you ran out of rounds.' },
  { n: '02', title: 'Deadlines Are Real Promises', desc: 'When I give you a delivery time, I hit it. Your upload schedule runs on a real clock. Late work isn\'t just inconvenient, it costs you views you can\'t get back.' },
  { n: '03', title: 'You Can Always Reach Me', desc: 'No ticket queue, no 3 to 5 business day reply window. Direct communication at every stage. Ask a quick question, send a reference, change your mind. I\'m reachable.' },
  { n: '04', title: '100% Built From Scratch', desc: 'No templates, no stock layouts, no recycled compositions. Every thumbnail starts from a blank canvas, designed specifically for your channel, your niche, and your audience.' },
];

const FAQ_ITEMS = [
  { question: 'How long does a thumbnail actually take?', answer: 'Most single thumbnails ship within 24 to 48 hours from receiving your brief. Bulk packs and channel branding take 3 to 5 business days. If you need something same-day, just ask. Rush delivery is usually available for a small extra fee.' },
  { question: 'What exactly does "unlimited revisions" mean?', answer: 'It means what it says. I\'ll keep revising until you\'re genuinely happy with the result, not just tolerating it. I\'d rather spend an extra hour on a design than have you post something you\'re not proud of.' },
  { question: 'What files do I actually receive?', answer: 'You get the full-resolution source file (PSD), web-optimised JPG and PNG exports, and any variants you request. You own everything outright. No licensing, no usage restrictions, ever.' },
  { question: 'I manage multiple channels. Can you handle that?', answer: 'Yes. White-label agency packages are built exactly for this. You get a dedicated priority queue, consistent delivery across all channels, white-label files your clients can use, and volume pricing that makes sense at scale.' },
  { question: 'What do you need from me to get started?', answer: 'Your channel URL, your video topic or series brief, any visual references you like (or hate), and your branding colours if you have them. The clearer the brief, the faster and better the first draft.' },
  { question: 'How does payment work?', answer: 'PayPal, Stripe, and bank transfer. New clients pay upfront before work begins. This is standard and protects both sides. Returning clients on retainer plans can arrange net-7 billing.' },
];

export default function Services() {
  return (
    <main className="pt-20 pb-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-10 text-center">
        <Reveal>
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3 wfx-section-label">What I Do</p>
        </Reveal>
        <TextReveal
          as="h1"
          className="text-white text-4xl sm:text-5xl font-bold mb-2"
          delay={60}
        >
          Services and Pricing
        </TextReveal>
        <Reveal delay={280}>
          <svg className="wfx-rule" aria-hidden="true" viewBox="0 0 110 9" xmlns="http://www.w3.org/2000/svg">
            <path d="M 8 6 C 30 1 55 7 80 3 C 93 1 102 6 102 5" stroke="url(#wfx-grad-fade)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
          <p className="text-zinc-400 max-w-xl mx-auto mt-2">
            No vague packages, no hidden scopes. Every service listed here is something I've done many times over,
            and the price reflects exactly what you get.
          </p>
        </Reveal>
      </div>

      {/* Services list */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
        <div className="text-center mb-10">
          <Reveal>
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3">What's Available</p>
          </Reveal>
          <TextReveal as="h2" className="text-white text-2xl sm:text-3xl font-bold" delay={60}>
            Every Service I Offer
          </TextReveal>
          <Reveal delay={280}>
            <p className="text-zinc-400 mt-3 max-w-lg mx-auto text-sm">
              From a single thumbnail to a full channel identity. Built around your niche, your audience, and your upload schedule.
            </p>
          </Reveal>
        </div>
        <div className="space-y-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 50}>
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-zinc-600 text-sm font-mono shrink-0 mt-0.5">{s.n}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-zinc-950/50 border-y border-zinc-800/40 py-24 px-4 sm:px-6 mb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3">Pricing Plans</p>
            </Reveal>
            <TextReveal as="h2" className="text-white text-3xl sm:text-4xl font-bold mb-4" delay={60}>
              Pick a Plan. Or Build Your Own.
            </TextReveal>
            <Reveal delay={340}>
              <p className="text-zinc-400 max-w-xl mx-auto">
                These three tiers cover most of what creators need. For agencies, bulk orders, or custom scopes,
                reach out and I'll put together a quote that actually fits.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80}>
                <div
                  className={`rounded-2xl p-6 flex flex-col relative border transition-colors h-full ${
                    plan.popular
                      ? 'border-white/40 bg-zinc-900 shadow-[0_0_30px_rgba(255,255,255,0.06)]'
                      : 'border-zinc-800 bg-zinc-900/60'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-5">
                    <p className="text-zinc-400 text-sm mb-2">{plan.name}</p>
                    <span className="text-white text-4xl font-bold">{plan.price}</span>
                    <p className="text-zinc-500 text-xs mt-1">{plan.unit}</p>
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`text-center rounded-full py-2.5 text-sm font-medium transition-colors ${
                      plan.popular
                        ? 'bg-white text-black hover:bg-zinc-100'
                        : 'border border-zinc-700 text-white hover:border-zinc-500'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-8">
            <p className="text-zinc-500 text-sm">
              Need a custom scope?{' '}
              <Link href="/contact" className="text-white underline underline-offset-2 hover:text-zinc-300 transition-colors">
                Send me a message
              </Link>{' '}
              and I'll respond with a tailored quote within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Commitment */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
        <div className="text-center mb-12">
          <Reveal>
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3">My Commitment</p>
          </Reveal>
          <TextReveal as="h2" className="text-white text-3xl sm:text-4xl font-bold" delay={60}>
            What Every Client Gets. No Exceptions.
          </TextReveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COMMITMENTS.map((c, i) => (
            <Reveal key={c.n} delay={i * 70}>
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 h-full hover:border-zinc-700 transition-colors">
                <span className="text-zinc-600 text-sm font-mono block mb-3">{c.n}</span>
                <h3 className="text-white font-semibold mb-2">{c.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-24">
        <div className="text-center mb-10">
          <Reveal>
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3">Before You Ask</p>
          </Reveal>
          <TextReveal as="h2" className="text-white text-3xl font-bold" delay={60}>
            Frequently Asked Questions
          </TextReveal>
          <Reveal delay={280}>
            <p className="text-zinc-400 mt-3 text-sm">The questions I get every week. Answered honestly, no marketing spin.</p>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <FaqAccordion items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Ready When You Are</p>
        </Reveal>
        <TextReveal as="h2" className="text-white text-3xl sm:text-4xl font-bold mb-4" delay={60}>
          Your Next Thumbnail Doesn't Have to Guess.
        </TextReveal>
        <Reveal delay={300}>
          <p className="text-zinc-400 mb-10 max-w-md mx-auto">
            Choose a service, send a brief, and I'll take it from there.
            First response guaranteed within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 bg-white text-black font-medium rounded-full px-7 py-3 hover:bg-zinc-100 transition-colors">
              <Send className="w-4 h-4" /> Start a Project
            </Link>
            <Link href="/portfolio" className="flex items-center gap-2 border border-zinc-700 text-white rounded-full px-7 py-3 hover:border-zinc-500 transition-colors text-sm font-medium">
              <Eye className="w-4 h-4" /> See the Work
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
