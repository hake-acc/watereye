import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  name: string;
  price: string;
  unit: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
  testId?: string;
}

export function PricingCard({
  name,
  price,
  unit,
  features,
  ctaLabel,
  ctaHref,
  highlighted,
  badge,
  testId,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border p-8 flex flex-col',
        highlighted
          ? 'border-white/30 bg-[#161616] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
          : 'border-white/10 bg-[#141414]',
      )}
      data-testid={testId}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-wide font-semibold bg-white text-black rounded-full px-3 py-1">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-semibold text-zinc-100">{name}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-white">{price}</span>
      </div>
      <p className="text-sm text-zinc-500 mt-1">{unit}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-400">
            <Check className="h-4 w-4 text-zinc-300 mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={highlighted ? 'default' : 'secondary'}
        className="mt-8 rounded-full w-full"
        data-testid={`button-${testId}-cta`}
      >
        <Link href={ctaHref}>{ctaLabel}</Link>
      </Button>
    </div>
  );
}
