export default function Pricing() {
  const plans = [
    {
      name: 'Free (Early Access)',
      price: '$0',
      period: 'forever',
      features: [
        '10 AI generations/month',
        'LinkedIn + X posting',
        'Basic templates',
        'Community support',
        'Early access to all features',
      ],
      cta: 'Start Free',
      highlight: true,
    },
    {
      name: 'Creator',
      price: '$6',
      period: 'month',
      features: [
        '100 AI generations/month',
        'All platforms (LinkedIn, X, Discord)',
        'Advanced templates',
        'Priority support',
        'Content calendar',
      ],
      cta: 'Go Creator',
      popular: true,
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'month',
      features: [
        'Unlimited generations',
        'Custom tone training',
        'Analytics dashboard',
        'API access',
      ],
      cta: 'Go Pro',
    },
  ];

  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Simple, honest pricing</h2>
          <p className="mt-2 text-slate-400">Start free, upgrade when you're ready. No hidden fees, ever.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl bg-surface/60 border border-white/10 backdrop-blur p-6 ${
                plan.popular ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">/{plan.period}</span>
                  </div>
                </div>
                {plan.popular && (
                  <span className="rounded-full bg-indigo-500/20 text-indigo-300 text-xs px-3 py-1">Popular</span>
                )}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-white">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
