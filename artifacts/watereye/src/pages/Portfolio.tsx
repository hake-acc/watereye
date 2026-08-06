import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import generated images
import gaming1 from "@assets/generated_images/gaming_1.jpg";
import gaming2 from "@assets/generated_images/gaming_2.jpg";
import business1 from "@assets/generated_images/business_1.jpg";
import business2 from "@assets/generated_images/business_2.jpg";
import edu1 from "@assets/generated_images/edu_1.jpg";
import edu2 from "@assets/generated_images/edu_2.jpg";

type Category = "All" | "Gaming" | "Business" | "Education";

const PORTFOLIO_ITEMS = [
  { id: 1, src: gaming1, category: "Gaming", title: "Cinematic Battle" },
  { id: 2, src: gaming2, category: "Gaming", title: "Explosive FPS" },
  { id: 3, src: business1, category: "Business", title: "Growth Chart" },
  { id: 4, src: business2, category: "Business", title: "Crypto Trading" },
  { id: 5, src: edu1, category: "Education", title: "Code Syntax" },
  { id: 6, src: edu2, category: "Education", title: "Tutorial Concept" },
];

const CATEGORIES: Category[] = ["All", "Gaming", "Business", "Education"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            My <span className="text-gradient">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore a curated selection of thumbnails designed to maximize click-through rates across different niches.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === cat 
                  ? "shadow-[0_0_15px_-3px_hsl(var(--primary))]" 
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => setActiveCategory(cat)}
              data-testid={`filter-${cat.toLowerCase()}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, i) => (
            <div 
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-video border border-border/50 bg-card hover:border-primary/50 transition-all duration-500 animate-in fade-in zoom-in-95 fill-mode-both"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-primary font-semibold text-sm mb-1">{item.category}</div>
                  <h3 className="text-white font-display text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center border-t border-border/40 pt-16">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">Like what you see?</h3>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8" data-testid="portfolio-hire-btn">
              Let's work together
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
