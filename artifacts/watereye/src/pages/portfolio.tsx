import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const YOUTUBE_IDS = [
  'mp-Ir9zS2T0', 'UwkJ0mQmdBE', 'EpXfmPUgQNo', 'sz0Cfvjg5E0',
  '_GBFzcGeh2I', 'eTw_3HufeTc', 'wgOYaBsmPo8', 'pYmRU8_PUPE',
];

const SAMPLE_IMAGES = [
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
  'https://watereye.is-great.org/assets/thumbnails/Samples/9bc4d2233122041.68fda9e967b6d.jpg',
  'https://watereye.is-great.org/assets/thumbnails/Samples/dacd91233122041.6a4b6ab3c77ec.jpg',
  'https://watereye.is-great.org/assets/thumbnails/Samples/Watereye-4.png',
];

const YOUTUBE_DESCS = [
  'Designed and delivered for a real channel. Built in Adobe Photoshop with Cinema 4D renders, crafted to stop the scroll.',
  'High-energy composition with bold typography and Photoshop-rendered visuals. Designed for maximum CTR in a competitive feed.',
  'Clean, attention-commanding layout built around the creator\'s brand. Colour, contrast, and composition all working together.',
  'Emotion-led design with 3D elements rendered in Blender and composited in Photoshop for a polished, cinematic result.',
  'Bold visual identity tailored to the creator\'s niche. Every element placed to drive the click before the title is even read.',
  'Dynamic composition with Cinema 4D motion elements composited in Photoshop. Built to compete at the top of any feed.',
  'Punchy, high-contrast design with custom 3D renders. Every pixel intentional from the colour palette to the focal point.',
  'Layered depth and visual storytelling built to outperform in a crowded feed. Crafted from scratch in Photoshop and Blender.',
];

const SAMPLE_DESCS = [
  'High-impact gaming composition with 3D character renders and explosive visual energy.',
  'Clean Minecraft-style thumbnail with custom character models and bold typography.',
  'Entertainment thumbnail with cinematic framing and striking colour contrast.',
  'Channel branding concept with unified visual language across multiple thumbnail sizes.',
  'Educational series thumbnail with clear visual hierarchy and approachable design.',
  'Shorts cover optimised for vertical format with high-contrast focal point.',
];

type Filter = 'All Work' | 'Live on YouTube' | 'Sample Work';

const FILTERS: Filter[] = ['All Work', 'Live on YouTube', 'Sample Work'];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>('All Work');

  const youtubeItems = YOUTUBE_IDS.map((id, i) => ({
    type: 'youtube' as const,
    id,
    img: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    label: 'Youtube',
    title: 'Creator Thumbnail Live on YouTube',
    desc: YOUTUBE_DESCS[i % YOUTUBE_DESCS.length],
    link: `https://youtu.be/${id}`,
    linkLabel: 'Watch on YouTube',
  }));

  const sampleItems = SAMPLE_IMAGES.map((img, i) => ({
    type: 'sample' as const,
    id: `sample-${i}`,
    img,
    label: 'Samples',
    title: i === 0 || i === 3 || i === 9 ? 'Gaming Thumbnail Concept' : 'Creator Thumbnail Sample',
    desc: SAMPLE_DESCS[i % SAMPLE_DESCS.length],
    link: img,
    linkLabel: 'View Full Size',
  }));

  const allItems = [...youtubeItems, ...sampleItems];

  const shown =
    active === 'Live on YouTube'
      ? youtubeItems
      : active === 'Sample Work'
      ? sampleItems
      : allItems;

  return (
    <main className="pt-20 pb-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-10 text-center">
        <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3 wfx-section-label">Selected Works</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">The Work</h1>
        <svg className="wfx-rule" aria-hidden="true" viewBox="0 0 110 9" xmlns="http://www.w3.org/2000/svg">
          <path d="M 8 6 C 30 1 55 7 80 3 C 93 1 102 6 102 5" stroke="url(#wfx-grad-fade)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
        <p className="text-zinc-400 max-w-xl mx-auto mt-2">
          26 thumbnails shown here. Real channels, real audiences, real results.<br />
          Built with Adobe Photoshop, Cinema 4D and Blender.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-10 flex flex-wrap gap-2">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
              active === f
                ? 'bg-white text-black border-white font-medium'
                : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'
            }`}
            data-testid={`filter-portfolio-${f.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-zinc-600 text-sm self-center">{shown.length} works</span>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {shown.map((item, i) => (
          <div
            key={item.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors group"
            data-testid={`card-portfolio-${i}`}
          >
            <div className="aspect-video bg-zinc-800 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={e => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600 text-sm">Thumbnail</div>`;
                }}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs px-2.5 py-0.5 rounded-full border ${item.label === 'Youtube' ? 'text-red-400 border-red-900/60 bg-red-950/30' : 'text-blue-400 border-blue-900/60 bg-blue-950/30'}`}>
                  {item.label}
                </span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-3 line-clamp-2">{item.desc}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs transition-colors"
                data-testid={`link-portfolio-${i}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {item.linkLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
