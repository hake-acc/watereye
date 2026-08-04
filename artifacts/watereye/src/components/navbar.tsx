import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Camera, Send } from 'lucide-react';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Navbar() {
  const [location] = useLocation();
  const [query, setQuery] = useState('');

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-14 gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 min-w-0" data-testid="link-logo">
          <div className="w-8 h-8 rounded-md overflow-hidden shrink-0">
            <img
              src={`${BASE}/watereye-logo.png`}
              alt="WaterEye FX Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-bold text-sm tracking-tight leading-none whitespace-nowrap">
            WaterEye<span className="text-zinc-400 font-normal"> FX</span>
          </span>
        </Link>

        {/* Search */}
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

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                location === link.href
                  ? 'text-white font-medium'
                  : 'text-zinc-400 hover:text-white'
              }`}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hire Me */}
        <Link
          href="/contact"
          className="flex items-center gap-1.5 bg-white text-black text-sm font-medium rounded-full px-4 py-1.5 hover:bg-zinc-100 transition-colors shrink-0 ml-2"
          data-testid="link-hire-me"
        >
          <Send className="w-3.5 h-3.5" />
          Hire Me
        </Link>
      </div>
    </header>
  );
}
