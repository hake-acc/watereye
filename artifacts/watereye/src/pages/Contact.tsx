import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, MessageSquare, User } from "lucide-react";
import heroBg from "@assets/generated_images/hero_bg.jpg";

export function Contact() {
  const [location] = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Extract package from URL if present (simple manual parsing since wouter's useSearch is basic)
  const [selectedPackage, setSelectedPackage] = useState("Single Thumbnail");
  
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const pkg = searchParams.get('package');
    if (pkg) {
      setSelectedPackage(pkg);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 relative overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Left Column - Info */}
          <div className="animate-in fade-in slide-in-from-left-12 duration-700">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
              Let's <span className="text-gradient">Talk.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-md">
              Ready to elevate your content? Fill out the form and I'll get back to you within a few hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Email</h3>
                  <p className="text-white text-lg">hello@watereyefx.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Discord</h3>
                  <p className="text-white text-lg">WaterEye#1234</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-in fade-in slide-in-from-right-12 duration-700 delay-150 fill-mode-both">
            <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
                  <h3 className="text-3xl font-display font-bold text-white mb-4">Request Sent!</h3>
                  <p className="text-muted-foreground mb-8">
                    Thanks for reaching out. I'll review your project details and get back to you shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white ml-1">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input 
                        required
                        type="text" 
                        className="w-full bg-background border border-border rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                        data-testid="input-name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input 
                        required
                        type="email" 
                        className="w-full bg-background border border-border rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white ml-1">Project Type</label>
                    <select 
                      className="w-full bg-background border border-border rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      data-testid="select-package"
                    >
                      <option value="Single Thumbnail">Single Thumbnail ($30)</option>
                      <option value="Creator Bundle">Creator Bundle ($120)</option>
                      <option value="Monthly Retainer">Monthly Retainer ($400/mo)</option>
                      <option value="Custom Project">Custom Project / Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white ml-1">Message / Details</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-background border border-border rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your video and what kind of thumbnail you're looking for..."
                      data-testid="input-message"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full rounded-xl py-6 text-lg font-bold shadow-[0_0_20px_-5px_hsl(var(--primary))] hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] transition-all" data-testid="button-submit">
                    Send Request
                  </Button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
