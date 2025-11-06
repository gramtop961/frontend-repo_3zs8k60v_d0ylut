import { Sparkles, LightningBolt, Link2 } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Sparkles,
      title: 'AI-Powered Writing',
      desc: 'Uses Google Gemini for authentic content generation.',
    },
    {
      icon: LightningBolt,
      title: '30-Second Generation',
      desc: 'From idea to ready-to-post in seconds.',
    },
    {
      icon: Link2,
      title: 'Direct Posting',
      desc: 'Post directly to LinkedIn, X, and Discord.',
    },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Why Choose Daakly?</h2>
          <p className="mt-2 text-slate-400">Built for creators who value authenticity and speed</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-surface/60 border border-white/10 backdrop-blur p-6 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-slate-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
