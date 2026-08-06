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
      className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4 hover:border-zinc-700 transition-colors"
      data-testid={`card-creator-${handle}`}
    >
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-zinc-800 border border-zinc-700">
          <img
            src={`${BASE}/avatars/${avatarFile}.jpg`}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=27272a&color=a1a1aa&size=48`;
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm truncate">{name}</p>
          <p className="text-zinc-500 text-xs">{handle}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">{platform}</span>
            <span className="text-xs text-zinc-500">Avg. {avgViews} views</span>
          </div>
        </div>
      </div>
      <StarRating rating={rating} />
      <p className="text-zinc-400 text-sm leading-relaxed italic border-l-2 border-zinc-700 pl-3">
        "{quote}"
      </p>
    </div>
  );
}
