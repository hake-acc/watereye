import { Star } from 'lucide-react';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

interface CreatorCardProps {
  name: string;
  handle: string;
  platform: string;
  avgViews: string;
  rating: number;
  quote: string;
  avatarFile: string;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const partial = rating - full;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full ? 1 : i === full && partial > 0 ? partial : 0;
        return (
          <Star
            key={i}
            className={`w-3 h-3 ${filled > 0 ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-600'}`}
          />
        );
      })}
      <span className="text-xs text-zinc-400 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function CreatorCard({ name, handle, platform, avgViews, rating, quote, avatarFile }: CreatorCardProps) {
  return (
    <div
      className="creator-card group relative isolate overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-[border-color,box-shadow] duration-300 hover:border-fuchsia-300/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.38),0_0_0_1px_rgba(168,85,247,0.06)]"
      data-testid={`card-creator-${handle}`}
    >
      <div className="creator-card__background" aria-hidden="true">
        <div className="creator-card__upper-atmosphere" />
        <div className="creator-card__lower-atmosphere" />
        <div className="creator-card__transition-glow" />
      </div>

      <div className="creator-card__content relative z-[3] flex min-h-[278px] flex-col px-5 pb-5 pt-[150px]">
        <div className="creator-card__avatar absolute left-1/2 z-[2] h-16 w-16 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-zinc-950/90 bg-zinc-800 shadow-[0_0_0_3px_rgba(24,24,27,0.72),0_8px_24px_rgba(0,0,0,0.5)]">
          <img
            src={`${BASE}/avatars/${avatarFile}.jpg`}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=27272a&color=a1a1aa&size=48`;
            }}
          />
        </div>

        <div className="flex min-w-0 items-start gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-zinc-500">{handle}</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="rounded-full bg-zinc-800/90 px-2 py-0.5 text-xs text-zinc-400">{platform}</span>
              <span className="text-xs text-zinc-500">Avg. {avgViews} views</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <StarRating rating={rating} />
          <p className="border-l-2 border-zinc-700/80 pl-3 text-sm italic leading-relaxed text-zinc-400">"{quote}"</p>
        </div>
      </div>
    </div>
  );
}
