import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingThumbnailProps {
  className?: string;
  style?: React.CSSProperties;
  rotate: number;
  delay?: number;
  duration?: number;
  label?: string;
  testId?: string;
}

export function FloatingThumbnail({
  className,
  style,
  rotate,
  delay = 0,
  duration = 6,
  label = 'Thumbnail',
  testId,
}: FloatingThumbnailProps) {
  return (
    <motion.div
      className={cn(
        'absolute pointer-events-none select-none',
        className,
      )}
      style={style}
      initial={{ opacity: 0, rotate }}
      animate={{
        opacity: 1,
        rotate,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: {
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
      }}
      data-testid={testId}
    >
      <div
        className="w-[110px] h-[70px] sm:w-[140px] sm:h-[88px] md:w-[150px] md:h-[95px] rounded-xl border border-white/10 bg-[#161616] shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
        <span className="text-[10px] sm:text-xs text-zinc-500 font-medium tracking-wide relative z-10">
          Thumbnail
        </span>
      </div>
    </motion.div>
  );
}

interface GridThumbnailCardProps {
  category: string;
  title: string;
  description: string;
  linkLabel: string;
  testId?: string;
}

export function GridThumbnailCard({
  category,
  title,
  description,
  linkLabel,
  testId,
}: GridThumbnailCardProps) {
  return (
    <div
      className="group rounded-2xl border border-white/10 bg-[#141414] overflow-hidden hover-elevate"
      data-testid={testId}
    >
      <div className="aspect-video w-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
        <span className="text-zinc-500 text-sm font-medium tracking-wide">
          Thumbnail Preview
        </span>
      </div>
      <div className="p-5">
        <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold">
          {category}
        </span>
        <h3 className="mt-2 text-base font-semibold text-zinc-100">
          {title}
        </h3>
        <p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
          {description}
        </p>
        <button
          className="mt-4 text-sm font-medium text-zinc-200 hover:text-white inline-flex items-center gap-1.5 transition-colors"
          data-testid={`button-${testId}-link`}
        >
          {linkLabel}
          <span aria-hidden>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
