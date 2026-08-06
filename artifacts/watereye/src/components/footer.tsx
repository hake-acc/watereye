import { Link } from 'wouter';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black/60 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md overflow-hidden">
              <img
                src={`${BASE}/watereye-brand.png`}
                alt="WaterEye FX"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-bold text-sm">
              WaterEye<span className="text-zinc-400 font-normal"> FX</span>
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors" data-testid="footer-link-home">Home</Link>
            <Link href="/portfolio" className="hover:text-white transition-colors" data-testid="footer-link-portfolio">Portfolio</Link>
            <Link href="/services" className="hover:text-white transition-colors" data-testid="footer-link-services">Services</Link>
            <Link href="/contact" className="hover:text-white transition-colors" data-testid="footer-link-contact">Contact</Link>
            <a href="mailto:hello@watereye.fx" className="hover:text-white transition-colors" data-testid="footer-link-email">hello@watereye.fx</a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-600">
          <p>© 2025 WaterEye FX. All rights reserved.</p>
          <p>Thumbnails built in Photoshop, Cinema 4D &amp; Blender.</p>
        </div>
      </div>
    </footer>
  );
}
