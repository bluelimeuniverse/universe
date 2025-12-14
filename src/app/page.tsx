import Link from 'next/link';

export default function Home() {
  const apps = [
    { name: 'Labs', path: '/labs', description: 'Experimental Prototypes' },
    { name: 'Market', path: '/market', description: 'Templates & Assets' },
    { name: 'Editor', path: '/editor', description: 'Visual Builder' },
    { name: 'Leads', path: '/leads', description: 'Lead Scraper' },
    { name: 'Ads', path: '/ads', description: 'Campaign Manager' },
    { name: 'Sender', path: '/sender', description: 'Email Dispatcher' },
    { name: 'Analytics', path: '/analytics', description: 'Data Insights' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-12 w-full max-w-5xl">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
          BlueLime Universe
        </h1>
        <p className="text-xl text-gray-400 text-center max-w-2xl">
          The all-in-one ecosystem for digital growth. Select a module to begin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.path}
              className="group flex flex-col gap-2 p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">
                {app.name} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
              </h2>
              <p className="text-gray-500 group-hover:text-gray-300 transition-colors">
                {app.description}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-20 text-gray-600 text-sm">
        © 2025 BlueLime Universe. All rights reserved.
      </footer>
    </div>
  );
}
