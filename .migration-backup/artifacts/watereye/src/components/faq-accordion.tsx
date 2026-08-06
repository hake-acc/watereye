import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border border-zinc-800 rounded-xl px-5 bg-zinc-900/40 data-[state=open]:border-zinc-700"
          data-testid={`faq-item-${i}`}
        >
          <AccordionTrigger className="text-left text-white font-medium py-4 hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
