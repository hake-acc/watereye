import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Camera, Send, Menu, X } from 'lucide-react';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Navbar() {
  const [location] = useLocation();
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-14 gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 min-w-0" data-testid="link-logo">
            <div className="w-8 h-8 rounded-md overflow-hidden shrink-0">
              <img
                src={`${BASE}/watereye-brand.png`}
                alt="WaterEye FX Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-bold text-sm tracking-tight leading-none whitespace-nowrap">
              WaterEye<span className="text-zinc-400 font-normal"> FX</span>
            </span>
          </Link>

          {/* Search — desktop only */}
          <div className="hidden md:flex flex-1 max-w-sm relative shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
            <input
              type="search"
              placeholder="Search thumbnails, creators..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700/60 rounded-full pl-9 pr-9 py-1.5 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
              data-testid="input-search"
            />
            <Camera className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
          </div>

          {/* Nav links — desktop only */}
          <nav className="hidden md:flex items-center gap-1 ml-auto">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-item px-3 py-2 text-sm rounded-md transition-colors ${
                  location === link.href
                    ? 'text-white font-medium'
                    : 'text-zinc-400 hover:text-white'
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
                {location === link.href && (
                  <svg className="nav-active-underline" aria-hidden="true" viewBox="0 0 40 5" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 2 3.5 C 10 1 25 4 38 2.5" stroke="url(#wfx-grad-nav)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Hire Me — desktop only */}
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-1.5 bg-white text-black text-sm font-medium rounded-full px-4 py-1.5 hover:bg-zinc-100 transition-colors shrink-0 ml-2"
            data-testid="link-hire-me"
          >
            <Send className="w-3.5 h-3.5" />
            Hire Me
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden ml-auto flex items-center justify-center w-9 h-9 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <X className="w-5 h-5" />
              : <Menu className="w-5 h-5" />
            }
          </button>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden fixed top-14 left-0 right-0 z-40 bg-black/96 backdrop-blur-lg border-b border-white/8 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col px-4 pt-3 pb-6 gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-4 py-3.5 rounded-xl text-base transition-colors ${
                location === link.href
                  ? 'text-white font-semibold bg-white/6'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
              {location === link.href && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500" />
              )}
            </Link>
          ))}

          <div className="mt-4 pt-4 border-t border-zinc-800/80">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-white text-black text-sm font-semibold rounded-full px-4 py-3.5 hover:bg-zinc-100 transition-colors w-full"
            >
              <Send className="w-4 h-4" />
              Hire Me
            </Link>
          </div>
        </nav>
      </div>

      {/* Backdrop dim */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/40"
          style={{ top: 56 }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
