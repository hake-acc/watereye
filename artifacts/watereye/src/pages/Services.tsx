import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PACKAGES = [
  {
    name: "Single Thumbnail",
    price: "$30",
    description: "Perfect for testing the waters or a one-off epic video.",
    features: [
      "1 High-converting thumbnail",
      "Photoshop & 3D elements",
      "24-hour turnaround",
      "2 Revisions",
      "Source files (+ $10)"
    ],
    isPopular: false,
    cta: "Book Single",
  },
  {
    name: "Creator Bundle",
    price: "$120",
    description: "A pack of 5 thumbnails for consistent growth.",
    features: [
      "5 High-converting thumbnails",
      "Advanced 3D compositing",
      "2-3 day turnaround",
      "Unlimited revisions",
      "Source files included",
      "A/B testing variations"
    ],
    isPopular: true,
    cta: "Book Bundle",
  },
  {
    name: "Monthly Retainer",
    price: "$400",
    description: "Full service for serious channels. 20 thumbnails per month.",
    features: [
      "Up to 20 thumbnails/month",
      "Priority turnaround (12h)",
      "Direct Discord/Slack access",
      "Unlimited revisions",
      "Source files included",
      "Channel branding audit"
    ],
    isPopular: false,
    cta: "Apply for Retainer",
  }
];

export function Services() {
  return (
    <div className="min-h-screen pt-24 pb-24 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            Pricing & <span className="text-gradient">Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Simple, transparent pricing. Invest in the first thing your viewer sees.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PACKAGES.map((pkg, i) => (
            <div 
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl border ${
                pkg.isPopular 
                  ? "border-primary bg-card/80 shadow-[0_0_30px_-10px_hsl(var(--primary))]" 
                  : "border-border/50 bg-card/40 hover:border-border/80"
              } p-8 backdrop-blur-sm transition-all animate-in fade-in slide-in-from-bottom-12 fill-mode-both`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm min-h-[40px]">{pkg.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-display font-bold text-white">{pkg.price}</span>
                {pkg.name === "Monthly Retainer" && <span className="text-muted-foreground">/mo</span>}
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href={`/contact?package=${encodeURIComponent(pkg.name)}`}>
                <Button 
                  className="w-full rounded-xl py-6 text-base font-bold" 
                  variant={pkg.isPopular ? "default" : "outline"}
                  data-testid={`btn-book-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {pkg.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ or info section */}
        <div className="max-w-3xl mx-auto mt-32 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Need something else?</h3>
          <p className="text-muted-foreground mb-8">
            I also do full channel branding, stream overlays, and custom 3D renders.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="rounded-full" data-testid="btn-custom-quote">
              Request Custom Quote
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
