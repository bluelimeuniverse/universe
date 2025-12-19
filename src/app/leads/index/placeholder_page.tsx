import Link from 'next/link';

export default function LeadsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">🎯 BlueLime Leads</h1>
            <p className="text-xl text-gray-400 mb-8">Advanced Scraper & Lead Generation. Work in Progress.</p>
            <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                ← Back to Universe
            </Link>
        </div>
    );
}
