export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500" />
            <span className="text-white font-semibold">Daakly</span>
          </div>
          <p className="text-slate-400 text-sm">
            Built with love by an indie developer. Your support keeps Daakly growing.
          </p>
          <a
            href="#buymeacoffee"
            className="rounded-md bg-amber-500/90 hover:bg-amber-500 text-black font-medium px-4 py-2"
          >
            Buy me a coffee ☕
          </a>
        </div>
      </div>
    </footer>
  );
}
