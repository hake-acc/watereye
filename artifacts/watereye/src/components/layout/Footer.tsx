import { Link } from "wouter";
import { Twitter, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              WaterEye <span className="text-primary">FX</span>
            </span>
            <p className="text-muted-foreground max-w-sm text-sm">
              Crafting eye-stopping thumbnails using Photoshop, Cinema 4D, and Blender. 
              Helping creators skyrocket their click-through rates.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-youtube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="mailto:hello@watereyefx.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/40 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} WaterEye FX. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Currently accepting new clients.
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
