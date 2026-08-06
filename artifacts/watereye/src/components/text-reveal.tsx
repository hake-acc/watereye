import { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  /** Delay before the first word starts (ms) */
  delay?: number;
  /** Stagger between each word (ms) */
  wordDelay?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Apple-style masked text reveal: each word slides up through an overflow:hidden
 * clip, giving the illusion of text rising from behind an invisible baseline.
 */
export default function TextReveal({
  children,
  className = '',
  delay = 0,
  wordDelay = 55,
  as: Tag = 'span',
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -24px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = children.split(' ');

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      aria-label={children}
    >
      {words.map((word, i) => (
        /* Outer: the clip mask — text outside this is invisible */
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            /* Extra room so descenders (p, g, y) and the letter base aren't clipped */
            paddingBottom: '0.14em',
            marginBottom: '-0.14em',
          }}
        >
          {/* Inner: the thing that moves */}
          <span
            style={{
              display: 'inline-block',
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * wordDelay}ms`,
              willChange: 'transform',
            }}
          >
            {word}
            {/* Space between words lives inside the clip so gaps look natural */}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}
