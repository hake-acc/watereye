import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, MonitorPlay, Zap, CheckCircle2 } from "lucide-react";
import avatarUrl from "@assets/e38baa3670721c8877a387661c14812d_1785861066057.png";
import heroBg from "@assets/generated_images/hero_bg.jpg";
import gaming1 from "@assets/generated_images/gaming_1.jpg";
import business1 from "@assets/generated_images/business_1.jpg";
import edu1 from "@assets/generated_images/edu_1.jpg";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border/40">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Abstract dark 3D background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 flex flex-col items-center text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both">
            <div className="mx-auto h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full border-4 border-primary shadow-[0_0_40px_-10px_hsl(var(--primary))] mb-8">
              <img src={avatarUrl} alt="WaterEye FX" className="h-full w-full object-cover" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Currently Accepting Clients
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
              Thumbnails that make <br className="hidden md:block" />
              <span className="text-gradient">people stop.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Skyrocket your CTR with eye-stopping graphics built in Photoshop, Cinema 4D, and Blender.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg font-semibold shadow-[0_0_30px_-5px_hsl(var(--primary))] hover:shadow-[0_0_40px_-5px_hsl(var(--primary))] transition-all" data-testid="hero-hire-button">
                  Hire Me Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-primary/20 hover:bg-primary/10" data-testid="hero-portfolio-button">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 mt-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-display font-bold text-white mb-2">20+</span>
              <span className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Creators Served</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-display font-bold text-white mb-2">1 Yr</span>
              <span className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-display font-bold text-white mb-2">24h</span>
              <span className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-lg">
                A selection of high-impact thumbnails spanning gaming, business, and educational content.
              </p>
            </div>
            <Link href="/portfolio">
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10" data-testid="view-all-work">
                View All Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: gaming1, category: "Gaming", title: "Cinematic Battle" },
              { src: business1, category: "Business", title: "Growth Chart" },
              { src: edu1, category: "Education", title: "Code Syntax" }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`group relative rounded-2xl overflow-hidden aspect-video border border-border/50 bg-card hover:border-primary/50 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 fill-mode-both`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-primary font-semibold text-sm mb-2">{item.category}</div>
                  <h3 className="text-white font-display text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-24 border-t border-border/40 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                Why WaterEye <span className="text-primary">FX</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                In a sea of generic content, the thumbnail is your first and only chance to earn a click. I don't just add text to screenshots — I build custom 3D scenes and composite cinematic layouts that demand attention.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MonitorPlay className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Software Mastery</h3>
                    <p className="text-muted-foreground">Expert level compositing in Photoshop, paired with 3D elements built from scratch in Cinema 4D and Blender.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Click-Driven Design</h3>
                    <p className="text-muted-foreground">Every color choice, lighting angle, and typography layout is engineered specifically to maximize your CTR.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Lightning Fast</h3>
                    <p className="text-muted-foreground">The algorithm doesn't wait. 24-hour turnaround comes standard on most single thumbnail packages.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-black aspect-square max-h-[500px] mx-auto">
                <img src={avatarUrl} alt="WaterEye FX Working" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <div className="font-display text-2xl font-bold text-white">Let's build something epic.</div>
                    <div className="text-primary mt-2">Currently available for new projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Ready to boost your views?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Book a project today and get your custom thumbnail delivered within 24 hours.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10 h-16 text-xl font-bold shadow-[0_0_40px_-10px_hsl(var(--primary))] hover:scale-105 transition-transform" data-testid="cta-bottom-button">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
