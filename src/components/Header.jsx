import { useState } from 'react';
import { Menu, X, Rocket, User } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: '#demo' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-surface/60 bg-surface/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500" />
            <span className="text-white font-semibold">Daakly</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#signin"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <User className="h-4 w-4" /> Sign in
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow"
            >
              <Rocket className="h-4 w-4" /> Try Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white hover:bg-white/5"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="rounded-md px-3 py-2 text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-center"
                onClick={() => setOpen(false)}
              >
                Try Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
