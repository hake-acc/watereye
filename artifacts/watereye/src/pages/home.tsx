import { Link } from 'wouter';
import { Eye, Send, Play, ChevronDown, MousePointer2, Sparkles, Wind, X, ChevronLeft, ChevronRight } from 'lucide-react';
import CreatorCard from '@/components/creator-card';
import Reveal from '@/components/reveal';
import TextReveal from '@/components/text-reveal';
import { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

// Shown on ALL screen sizes (mobile + desktop) — far edges only so they don't cover text on narrow screens
const MOBILE_CARDS = [
  { top: '8%',  left: '1%',   rotate: -12, w: 148, h: 93  },
  { top: '4%',  right: '3%',  rotate: 6,   w: 158, h: 99  },
  { top: '26%', left: '2%',   rotate: -4,  w: 145, h: 91  },
  { top: '36%', right: '1%',  rotate: 4,   w: 152, h: 95  },
  { top: '57%', left: '2%',   rotate: -6,  w: 148, h: 93  },
  { top: '58%', right: '3%',  rotate: -8,  w: 158, h: 99  },
  { top: '76%', left: '1%',   rotate: 10,  w: 152, h: 95  },
  { top: '78%', right: '2%',  rotate: 7,   w: 145, h: 91  },
];

// Desktop-only cards — inner positions, hidden on mobile
const DESKTOP_CARDS = [
  { top: '13%', left: '16%',  rotate: 8,   w: 140, h: 88  },
  { top: '19%', right: '11%', rotate: -10, w: 148, h: 92  },
  { top: '38%', left: '16%',  rotate: 14,  w: 143, h: 90  },
  { top: '73%', right: '17%', rotate: 12,  w: 145, h: 91  },
  { top: '86%', left: '20%',  rotate: -15, w: 138, h: 87  },
  { top: '90%', right: '20%', rotate: 9,   w: 145, h: 91  },
  { top: '48%', left: '14%',  rotate: -9,  w: 142, h: 89  },
  { top: '50%', right: '13%', rotate: 5,   w: 148, h: 93  },
];

const THUMBNAIL_IMAGES = [
  'https://watereye.is-great.org/assets/thumbnails/Samples/Watereye-1.webp',
  'https://watereye.is-great.org/assets/thumbnails/Samples/05fa45233122041.69c780c5aab84.png',
  'https://watereye.is-great.org/assets/thumbnails/Samples/1945ad233122041.6a4b6ab3c6f5c.jpg',
  'https://watereye.is-great.org/assets/thumbnails/Samples/Watereye-2.webp',
  'https://watereye.is-great.org/assets/thumbnails/Samples/95f711233122041.6a4b6ab3c738d.png',
  'https://watereye.is-great.org/assets/thumbnails/Samples/24a4df233122041.6a4b672b40ac7.png',
  'https://watereye.is-great.org/assets/thumbnails/Samples/19b45d233122041.6a4b672baf324.png',
  'https://watereye.is-great.org/assets/thumbnails/Samples/dfd2ec233122041.6a4b672baf967.png',
  'https://watereye.is-great.org/assets/thumbnails/Samples/6f787a233122041.6a4b672b41247.png',
  'https://watereye.is-great.org/assets/thumbnails/Samples/Watereye-3.webp',
  'https://watereye.is-great.org/assets/thumbnails/Samples/5262e3233122041.69d7fc783ddad.png',
  'https://watereye.is-great.org/assets/thumbnails/Samples/Watereye-4.png',
];

const ALL_CREATORS = [
  { name: 'Robbie XYZ', handle: '@robbietonfr', platform: 'YouTube', avgViews: '18K', rating: 5.0, quote: 'Delivered exactly what I needed — first draft, no back-and-forth.', avatarFile: 'robbietonfr', category: 'gaming' },
  { name: 'Mitsuha Gaming', handle: '@Mitsuha_Gaming', platform: 'YouTube', avgViews: '22K', rating: 5.0, quote: 'The thumbnail actually got more clicks than the video deserved.', avatarFile: 'mitsuha_gaming', category: 'gaming' },
  { name: 'Aadmi Infinity', handle: '@AadmiPlays', platform: 'YouTube', avgViews: '31K', rating: 5.0, quote: 'Came back for a second batch — that says everything.', avatarFile: 'aadmiplays', category: 'entertainment' },
  { name: 'DeadLegend', handle: '@LivingLegendOP', platform: 'YouTube', avgViews: '9K', rating: 4.9, quote: 'Clean style, fast delivery, understood the vibe immediately.', avatarFile: 'livinglegendop', category: 'gaming' },
  { name: 'MC ThunderPlayz', handle: '@MCThunderXDOfficial', platform: 'YouTube', avgViews: '7K', rating: 4.9, quote: 'The 3D treatment on the Minecraft thumbnails was fire.', avatarFile: 'mcthunderxd', category: 'minecraft' },
  { name: 'PYES KING', handle: '@PYES_KING', platform: 'YouTube', avgViews: '25K', rating: 4.9, quote: 'Consistent quality across every single thumbnail. Very reliable.', avatarFile: 'pyes_king', category: 'entertainment' },
  { name: 'ItzNect4r', handle: '@ItzNect4r', platform: 'YouTube', avgViews: '12K', rating: 4.8, quote: 'First draft was almost perfect. Minor tweaks and it was done.', avatarFile: 'itznect4r', category: 'minecraft' },
  { name: 'Real Ayaz', handle: '@Real_Ayaz', platform: 'YouTube', avgViews: '6K', rating: 4.8, quote: 'Knew exactly what to do without too many references.', avatarFile: 'real_ayaz', category: 'shorts' },
];

const FILTERS = ['All', 'Gaming', 'Minecraft', 'Entertainment', 'Shorts'];

// Shared style for the Apple masked-line reveal
function lineClip(visible: boolean, delayMs: number) {
  return {
    outer: {
      display: 'block',
      overflow: 'hidden',
      paddingBottom: '0.1em',
      marginBottom: '-0.1em',
    } as React.CSSProperties,
    inner: {
      display: 'block',
      transform: visible ? 'translateY(0)' : 'translateY(106%)',
      transition: `transform 0.82s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
      willChange: 'transform',
    } as React.CSSProperties,
  };
}

function ReelCarousel({ onClose }: { onClose: () => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close reel"
        >
          <X className="w-6 h-6" />
        </button>

        <p className="text-center text-zinc-400 text-sm mb-4">
          {current + 1} / {THUMBNAIL_IMAGES.length} — Recent thumbnails
        </p>

        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex">
            {THUMBNAIL_IMAGES.map((src, i) => (
              <div key={i} className="flex-none w-full">
                <img
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full aspect-video object-cover rounded-xl"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={scrollPrev}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
          >
            <ChevronLeft className="w-5 h-5" /> Prev
          </button>

          <div className="flex gap-1.5">
            {THUMBNAIL_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-zinc-600 hover:bg-zinc-400'}`}
                aria-label={`Go to thumbnail ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
          >
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [planeFlying, setPlaneFlying] = useState(false);
  const [clickBurst, setClickBurst] = useState(0);
  const [reelOpen, setReelOpen] = useState(false);

  // Hero text visible immediately on mount — always above the fold
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const filtered = ALL_CREATORS.filter(c =>
    activeFilter === 'All' || c.category === activeFilter.toLowerCase()
  );

  const launchPlane = () => {
    setPlaneFlying(false);
    requestAnimationFrame(() => setPlaneFlying(true));
  };

  const triggerClickBurst = () => setClickBurst(v => v + 1);

  const l1 = lineClip(heroVisible, 0);
  const l2 = lineClip(heroVisible, 90);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative h-screen overflow-hidden bg-[#0d0d0d] flex flex-col items-center justify-center pb-28">
        {/* Floating thumbnail cards — mobile: 8, desktop: 16 */}
        {MOBILE_CARDS.map((card, i) => (
          <div
            key={`m${i}`}
            className="absolute rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            style={{
              top: card.top,
              left: 'left' in card ? (card as any).left : undefined,
              right: 'right' in card ? (card as any).right : undefined,
              width: card.w,
              height: card.h,
              transform: `rotate(${card.rotate}deg)`,
              zIndex: 1,
            }}
          >
            <img
              src={THUMBNAIL_IMAGES[i % THUMBNAIL_IMAGES.length]}
              alt="Thumbnail sample"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={e => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = 'none';
                if (el.parentElement) {
                  el.parentElement.style.background = '#1c1c1c';
                  el.parentElement.innerHTML = '<span style="display:flex;align-items:center;justify-content:center;height:100%;color:#555;font-size:11px;font-family:Inter,sans-serif;">Thumbnail</span>';
                }
              }}
            />
          </div>
        ))}
        {DESKTOP_CARDS.map((card, i) => (
          <div
            key={`d${i}`}
            className="hidden md:block absolute rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            style={{
              top: card.top,
              left: 'left' in card ? (card as any).left : undefined,
              right: 'right' in card ? (card as any).right : undefined,
              width: card.w,
              height: card.h,
              transform: `rotate(${card.rotate}deg)`,
              zIndex: 1,
            }}
          >
            <img
              src={THUMBNAIL_IMAGES[(MOBILE_CARDS.length + i) % THUMBNAIL_IMAGES.length]}
              alt="Thumbnail sample"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={e => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = 'none';
                if (el.parentElement) {
                  el.parentElement.style.background = '#1c1c1c';
                  el.parentElement.innerHTML = '<span style="display:flex;align-items:center;justify-content:center;height:100%;color:#555;font-size:11px;font-family:Inter,sans-serif;">Thumbnail</span>';
                }
              }}
            />
          </div>
        ))}

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4 pt-14">

          {/* Badge */}
          <Reveal delay={0}>
            <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-700/60 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-zinc-300">Currently accepting new clients</span>
            </div>
          </Reveal>

          {/* Headline — Apple masked line-by-line reveal */}
          <h1
            className="font-bold leading-[1.1] mb-6 text-white"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            {/* Line 1 */}
            <span style={l1.outer}>
              <span style={l1.inner}>Thumbnails that</span>
            </span>
            {/* Line 2 */}
            <span style={{ ...l2.outer, paddingBottom: '0.28em', marginBottom: '-0.28em' }}>
              <span style={l2.inner}>
                make people{' '}
                <em className="font-serif not-italic italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="hero-stop">
                    stop.
                    <svg className="hero-stop-underline" aria-hidden="true" viewBox="0 0 200 12" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 3 8 C 40 2 90 10 130 5 C 148 2 158 7 166 5" stroke="url(#wfx-grad-main)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                      <circle cx="166" cy="5" r="4" fill="#f97316" />
                    </svg>
                  </span>
                </em>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <Reveal delay={220}>
            <p className="text-zinc-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
              Built in <strong className="text-zinc-200">Photoshop</strong>,{' '}
              <strong className="text-zinc-200">Cinema 4D</strong> and{' '}
              <strong className="text-zinc-200">Blender</strong>. Trusted by 20+ creators across gaming, business &amp; education. Delivered in 24h.
            </p>
          </Reveal>

          {/* CTA buttons */}
          <Reveal delay={320}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <Link
                href="/portfolio"
                className="flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full px-6 py-3 text-sm font-medium transition-colors"
              >
                <Eye className="w-4 h-4" />
                See My Work
              </Link>
              <Link
                href="/contact"
                onClick={launchPlane}
                className={`plane-cta flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-6 py-3 text-sm font-medium transition-colors border border-zinc-700 ${planeFlying ? 'is-flying' : ''}`}
              >
                <span className="plane-icon-wrap" aria-hidden="true">
                  <Send className="w-4 h-4 plane-icon" />
                  <Wind className="plane-breeze plane-breeze-one" />
                  <Wind className="plane-breeze plane-breeze-two" />
                </span>
                Start a Project
              </Link>
            </div>
          </Reveal>

          {/* Reel trigger */}
          <Reveal delay={400}>
            <button
              onClick={() => setReelOpen(true)}
              className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
            >
              <div className="w-6 h-6 rounded-full border border-zinc-600 flex items-center justify-center">
                <Play className="w-3 h-3 fill-current" />
              </div>
              Watch a 60s reel of recent thumbnails
            </button>
          </Reveal>
        </div>

        {/* Stats bar */}
        <Reveal className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-8 z-10 hidden sm:flex" delay={480}>
          <div className="bg-zinc-900/95 border border-zinc-800 rounded-2xl px-8 py-5 flex items-center gap-10">
            {[
              { value: '20+', label: 'Creators Served' },
              { value: '1 yr', label: 'Experience' },
              { value: '24h', label: 'Turnaround' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-10">
                {i > 0 && <div className="h-8 w-px bg-zinc-700" />}
                <div className="text-center">
                  <p className="text-white text-2xl font-bold leading-none">{stat.value}</p>
                  <p className="text-zinc-500 text-xs mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 z-10">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Reveal>
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3 wfx-section-label">Trusted By</p>
          </Reveal>
          <TextReveal
            as="h2"
            className="text-white text-3xl sm:text-4xl font-bold mb-2"
            delay={60}
          >
            Creators I've Worked With
          </TextReveal>
          <Reveal delay={300}>
            <svg className="wfx-rule" aria-hidden="true" viewBox="0 0 110 9" xmlns="http://www.w3.org/2000/svg">
              <path d="M 8 6 C 30 1 55 7 80 3 C 93 1 102 6 102 5" stroke="url(#wfx-grad-fade)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
            <p className="text-zinc-400 max-w-xl mx-auto mt-2">Real channels. Real thumbnails. Real results across gaming, entertainment and more.</p>
          </Reveal>
        </div>

        {/* Filter tabs */}
        <Reveal className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                activeFilter === f
                  ? 'bg-white text-black border-white font-medium'
                  : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((c, i) => (
            <Reveal key={c.handle} delay={Math.min(i * 60, 300)}>
              <CreatorCard {...c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-4 sm:px-6 bg-zinc-950/50 border-y border-zinc-800/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3 wfx-section-label">The Process</p>
            </Reveal>
            <TextReveal
              as="h2"
              className="text-white text-3xl sm:text-4xl font-bold mb-2"
              delay={60}
            >
              Simple. Direct. No Wasted Steps.
            </TextReveal>
            <Reveal delay={320}>
              <svg className="wfx-rule" aria-hidden="true" viewBox="0 0 110 9" xmlns="http://www.w3.org/2000/svg">
                <path d="M 8 6 C 30 1 55 7 80 3 C 93 1 102 6 102 5" stroke="url(#wfx-grad-fade)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { n: '01', title: 'You Share Your Vision', desc: 'Channel link, video topic, any references you love. The clearer the brief, the better the first draft.' },
              { n: '02', title: 'I Research Then Build', desc: 'I study your niche and competitors before a single element gets placed. Context first, design second.' },
              { n: '03', title: 'We Refine It Together', desc: 'You see the first draft and give your honest reaction. Direct feedback, fast turnaround, no ticket systems.' },
              { n: '04', title: 'Files Are Yours Forever', desc: 'High-res source file, web exports, every size you need. You own it outright with no licensing surprises.' },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 h-full wfx-card-hover">
                  <span className="text-zinc-600 text-sm font-mono mb-3 block">{step.n}</span>
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 px-4 sm:px-6 text-center max-w-3xl mx-auto">
        <Reveal>
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Let's Build Something</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Every View Starts<br />With a{' '}
            <button
              type="button"
              className={`click-word ${clickBurst ? 'is-clicked' : ''}`}
              onClick={triggerClickBurst}
              aria-label="Click to create an effect"
            >
              Click
              <svg className="click-word-underline" aria-hidden="true" viewBox="0 0 100 7" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 1 5 C 22 1 50 6 78 3 C 88 1 94 5 99 4" stroke="url(#wfx-grad-nav)" strokeWidth="2.2" strokeLinecap="round" fill="none" className="click-word-path" />
              </svg>
              <MousePointer2 className="click-cursor" aria-hidden="true" />
              <span className="click-burst" key={clickBurst} aria-hidden="true">
                <Sparkles className="click-spark click-spark-one" />
                <Sparkles className="click-spark click-spark-two" />
                <span className="click-dot click-dot-one" />
                <span className="click-dot click-dot-two" />
              </span>
            </button>
          </h2>
          <p className="text-zinc-400 mb-10 max-w-md mx-auto">
            Your next video deserves a thumbnail that gets clicked. Let's build it together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 bg-white text-black font-medium rounded-full px-7 py-3 hover:bg-zinc-100 transition-colors">
              <Send className="w-4 h-4" /> Start a Project
            </Link>
            <Link href="/services" className="border border-zinc-700 text-white rounded-full px-7 py-3 hover:border-zinc-500 transition-colors text-sm font-medium">
              See Pricing
            </Link>
          </div>
        </Reveal>
      </section>

      {reelOpen && <ReelCarousel onClose={() => setReelOpen(false)} />}
    </main>
  );
}
