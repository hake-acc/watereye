import { useState } from 'react';
import { Mail, MessageSquare, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import FaqAccordion from '@/components/faq-accordion';
import Reveal from '@/components/reveal';

const FAQ_ITEMS = [
  { question: 'How long does a thumbnail actually take?', answer: 'Most single thumbnails ship within 24 to 48 hours from receiving your brief. Bulk packs and channel branding take 3 to 5 business days. If you need something same-day, just ask. Rush delivery is usually available for a small extra fee.' },
  { question: 'What exactly does "unlimited revisions" mean?', answer: 'It means what it says. I\'ll keep revising until you\'re genuinely happy with the result, not just tolerating it. I\'d rather spend an extra hour on a design than have you post something you\'re not proud of.' },
  { question: 'What files do I actually receive?', answer: 'You get the full-resolution source file (PSD), web-optimised JPG and PNG exports, and any variants you request. You own everything outright. No licensing, no usage restrictions, ever.' },
  { question: 'I manage multiple channels. Can you handle that?', answer: 'Yes. White-label agency packages are built exactly for this. You get a dedicated priority queue, consistent delivery across all channels, white-label files your clients can use, and volume pricing that makes sense at scale.' },
  { question: 'What do you need from me to get started?', answer: 'Your channel URL, your video topic or series brief, any visual references you like (or hate), and your branding colours if you have them. The clearer the brief, the faster and better the first draft.' },
  { question: 'How does payment work?', answer: 'PayPal, Stripe, and bank transfer. New clients pay upfront before work begins. This is standard and protects both sides. Returning clients on retainer plans can arrange net-7 billing.' },
];

const SERVICES = [
  'YouTube Thumbnail Design', 'Gaming Thumbnails', 'Business Thumbnails',
  'Educational Thumbnails', 'Podcast Cover Art', 'Channel Branding Package',
  'Series / Bulk Pack', 'Agency / White-Label', 'Other / Custom',
];

const BUDGETS = ['Under $50', '$50 to $100', '$100 to $250', '$250 to $500', '$500+', "Let's discuss"];

const CONTACT_METHODS = [
  { icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'hello@watereye.fx', sub: 'Best for full briefs and file sharing', href: 'mailto:hello@watereye.fx' },
  { icon: <MessageSquare className="w-4 h-4" />, label: 'Discord', value: 'watereyetheog', sub: 'Fastest for quick back-and-forth', href: 'https://discord.gg/zAgHgAGSaQ' },
  { icon: <ExternalLink className="w-4 h-4" />, label: 'YT Jobs', value: 'WaterEyeFX Profile', sub: 'Hire me directly on YT Jobs', href: 'https://ytjobs.co/talent/profile/597018' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', channel: '', service: '', budget: '',
    deadline: '', brief: '', source: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  return (
    <main className="pt-20 pb-24">
      {/* Header */}
      <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-10 text-center">
        <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3 wfx-section-label">Let's Talk</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
          Tell Me About<br />Your Channel
        </h1>
        <svg className="wfx-rule" aria-hidden="true" viewBox="0 0 110 9" xmlns="http://www.w3.org/2000/svg">
          <path d="M 8 6 C 30 1 55 7 80 3 C 93 1 102 6 102 5" stroke="url(#wfx-grad-fade)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
        <p className="text-zinc-400 max-w-lg mx-auto mt-2">
          No discovery calls just to get a quote. Fill out the brief below, be specific,
          and I'll get back to you within 24 hours with a plan and a price.
        </p>
      </Reveal>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <Reveal className="lg:col-span-2">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-white font-semibold text-lg mb-6">Send Your Brief</h2>
            <p className="text-zinc-400 text-sm mb-8">The more detail you share here, the better the first draft will be. I read every word.</p>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle className="w-12 h-12 text-green-500" />
                <p className="text-white font-semibold text-lg">Brief received.</p>
                <p className="text-zinc-400 text-sm">I'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1.5">Your Name <span className="text-zinc-500">*</span></label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1.5">Email Address <span className="text-zinc-500">*</span></label>
                    <input
                      name="email" type="email" required value={form.email} onChange={handleChange}
                      className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-300 mb-1.5">YouTube Channel URL</label>
                  <input
                    name="channel" value={form.channel} onChange={handleChange}
                    className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                    placeholder="https://youtube.com/@yourchannel"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1.5">Service Needed <span className="text-zinc-500">*</span></label>
                    <select
                      name="service" required value={form.service} onChange={handleChange}
                      className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1.5">Budget Range</label>
                    <select
                      name="budget" value={form.budget} onChange={handleChange}
                      className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors"
                    >
                      <option value="">Select a budget range...</option>
                      {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-300 mb-1.5">When Do You Need It?</label>
                  <input
                    name="deadline" value={form.deadline} onChange={handleChange}
                    className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                    placeholder="ASAP / specific date / flexible"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-300 mb-1.5">Project Brief <span className="text-zinc-500">*</span></label>
                  <textarea
                    name="brief" required value={form.brief} onChange={handleChange}
                    rows={5}
                    className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    placeholder="Tell me about your video topic, your channel, any references you like, and what feeling you want the thumbnail to convey..."
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-300 mb-1.5">How did you find me?</label>
                  <input
                    name="source" value={form.source} onChange={handleChange}
                    className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                    placeholder="YouTube, Discord, referral..."
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                    className="mt-0.5 accent-white"
                  />
                  <span className="text-zinc-400 text-sm">
                    I agree to the{' '}
                    <a href="https://watereye.is-great.org/privacy" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-2">
                      Privacy Policy
                    </a>{' '}
                    and understand that payment is required before work begins.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreed}
                  className="w-full bg-white text-black font-semibold rounded-xl py-3 hover:bg-zinc-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Send My Brief
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {/* Sidebar */}
        <div className="space-y-4">
          {CONTACT_METHODS.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-medium group-hover:underline">{item.value}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{item.sub}</p>
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal delay={240}>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-400 text-xs">Response</span>
              </div>
              <p className="text-white font-medium text-sm">Within 24 hours</p>
              <p className="text-zinc-500 text-xs mt-0.5">Monday through Sunday, most holidays included</p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-green-400 text-xs font-medium">Available</span>
              </div>
              <p className="text-white font-medium text-sm">Open for New Projects</p>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                Taking on new clients across all service types right now.<br />
                Typical project start: within 2 business days of your brief being confirmed.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-24">
        <Reveal className="text-center mb-10">
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3">Before You Ask</p>
          <h2 className="text-white text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-zinc-400 mt-3 text-sm">The questions I get every week. Answered honestly, no marketing spin.</p>
        </Reveal>
        <Reveal delay={100}>
          <FaqAccordion items={FAQ_ITEMS} />
        </Reveal>
      </section>
    </main>
  );
}
