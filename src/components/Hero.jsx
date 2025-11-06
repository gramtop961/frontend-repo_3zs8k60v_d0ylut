import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300"
            >
              Transform Ideas Into Engaging LinkedIn Posts & X Threads
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-slate-300"
            >
              In 30 seconds. Powered by AI for authentic, on-brand content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow"
              >
                Start Writing Free
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 text-white/90 hover:text-white hover:bg-white/5"
              >
                See Examples
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-sm text-slate-400"
            >
              🎉 You're among the first 1000 users! Enjoy permanent early-bird pricing.
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-surface/60 border border-white/10 backdrop-blur p-4">
              <DemoWidget />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F0F23]" />
    </section>
  );
}

function DemoWidget() {
  return (
    <div id="demo" className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-slate-300 text-sm">Live demo</span>
        <span className="text-xs text-slate-400">Gemini-powered</span>
      </div>
      <textarea
        className="w-full rounded-lg bg-[#0F0F23]/60 border border-white/10 p-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows={4}
        placeholder="Type an idea: e.g. 'Share a tip about consistency for creators'"
      />
      <div className="flex items-center gap-2">
        <button className="rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm text-white">Generate</button>
        <button className="rounded-md border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">Copy Example</button>
      </div>
      <div className="rounded-md border border-white/10 bg-black/30 p-3 text-slate-200 text-sm">
        Output will appear here…
      </div>
    </div>
  );
}
