'use client';

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Globe, Users, Rocket, Code, BarChart3, Mail, Zap } from "lucide-react";
import CosmicBackground from "@/components/CosmicBackground";
import { useRouter } from "next/navigation";
import Image from "next/image";

const UniverseHome = () => {
    const router = useRouter();
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-in");
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
            observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    const apps = [
        {
            name: "LABS",
            icon: <Cpu className="h-12 w-12 text-purple-500 mb-6" />,
            desc: "Experimental tools and AI prototypes. Shape the future of technology with us.",
            color: "purple",
            status: "BETA",
            action: () => router.push('/labs')
        },
        {
            name: "MARKET",
            icon: <Globe className="h-12 w-12 text-blue-500 mb-6" />,
            desc: "The marketplace for digital assets. Buy, sell, and trade resources with the community.",
            color: "blue",
            status: "COMING SOON",
            action: () => router.push('/market')
        },
        {
            name: "EDITOR",
            icon: <Code className="h-12 w-12 text-orange-500 mb-6" />,
            desc: "Create your own wonderful landing page, or newsletter, or a simple, perfect form to create your mailing list, in the simplest and most intuitive way possible..",
            color: "orange",
            status: "COMING SOON",
            action: () => router.push('/editor')
        },
        {
            name: "LEADS",
            icon: <Users className="h-12 w-12 text-green-500 mb-6" />,
            desc: "Advanced B2B lead generation and validation. Find your next client with surgical precision.",
            color: "green",
            status: "LIVE",
            action: () => router.push('/leads')
        },
        {
            name: "ADS",
            icon: <Rocket className="h-12 w-12 text-red-500 mb-6" />,
            desc: "Amplify your reach with intelligent campaign management and optimization.",
            color: "red",
            status: "COMING SOON",
            action: () => router.push('/ads')
        },
        {
            name: "SENDER",
            icon: <Mail className="h-12 w-12 text-yellow-500 mb-6" />,
            desc: "Connect with your audience through powerful email marketing automation.",
            color: "yellow",
            status: "COMING SOON",
            action: () => router.push('/sender')
        },
        {
            name: "ANALYTICS",
            icon: <BarChart3 className="h-12 w-12 text-cyan-500 mb-6" />,
            desc: "Measure your success with deep data insights and performance tracking.",
            color: "cyan",
            status: "COMING SOON",
            action: () => router.push('/analytics')
        }
    ];

    return (
        <div className="min-h-screen bg-transparent text-white overflow-x-hidden font-sans selection:bg-green-500 selection:text-black">
            <CosmicBackground />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div></div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                        <a href="#manifesto" className="hover:text-green-400 transition-colors">MANIFESTO</a>
                        <a href="#ecosystem" className="hover:text-blue-400 transition-colors">ECOSYSTEM</a>
                        <a href="#community" className="hover:text-green-400 transition-colors">COMMUNITY</a>
                    </div>
                    <Button
                        variant="outline"
                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
                        onClick={() => router.push('/auth')}
                    >
                        JOIN THE TRIBE
                    </Button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center px-6 pt-20">
                <div className="text-center max-w-5xl mx-auto z-10">
                    <div className="mb-8 animate-fade-in flex justify-center">
                        {/* Fallback to text if image missing, or use Next Image */}
                        <Image
                            src="/logoDEF120px.png"
                            alt="BlueLime Universe Logo"
                            width={120}
                            height={120}
                            className="object-contain drop-shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                        />
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
                            BLUELIME
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-green-400 bg-300% animate-gradient reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
                            UNIVERSE
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-500">
                        We invent from nothing. We change lives with intellect.
                        <br className="hidden md:block" />
                        Welcome to the tribe where creators conquer the digital frontier. We are Digital Warrior.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-700">
                        <Button className="bg-green-500 text-black hover:bg-green-400 text-lg px-8 py-6 rounded-none font-bold tracking-wide" onClick={() => router.push('/auth')}>
                            ENTER THE UNIVERSE <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-none font-bold tracking-wide" onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}>
                            EXPLORE APPS
                        </Button>
                    </div>
                </div>
            </section>

            {/* Manifesto Section */}
            <section id="manifesto" className="py-32 bg-black/80 backdrop-blur-sm relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight reveal-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000">
                                WE DON'T JUST <br />
                                <span className="text-blue-500">CONSUME.</span> <br />
                                WE <span className="text-green-500">CREATE.</span>
                            </h2>
                        </div>
                        <div className="space-y-8 text-lg text-gray-300 reveal-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000">
                            <p className="border-l-4 border-green-500 pl-6">
                                <strong className="text-white block mb-2 text-xl">The New Era of Work</strong>
                                BlueLime Universe is not just a platform; it's a virtual coworking space. A dream. An ambition to help everyone find their place online.
                            </p>
                            <p className="border-l-4 border-blue-500 pl-6">
                                <strong className="text-white block mb-2 text-xl">Collective Intelligence</strong>
                                Our users exchange ideas, collaborate on projects, share resources, and earn together. We are creators of digital products ourselves, supporting you with passion and commitment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ecosystem Grid */}
            <section id="ecosystem" className="py-32 bg-zinc-950/80 backdrop-blur-sm relative z-10 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">THE ECOSYSTEM</h2>
                        <p className="text-gray-400">Tools forged for the modern digital warrior.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {apps.map((app, index) => (
                            <div
                                key={app.name}
                                className={`group relative bg-black border border-white/10 p-8 hover:border-${app.color}-500/50 transition-all duration-500 hover:-translate-y-2 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-b from-${app.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                {app.icon}
                                <h3 className={`text-2xl font-bold mb-4 group-hover:text-${app.color}-400 transition-colors`}>{app.name}</h3>
                                <p className="text-gray-400 mb-6 text-sm">
                                    {app.desc}
                                </p>
                                {app.action ? (
                                    <Button variant="link" className={`text-white p-0 group-hover:text-${app.color}-400`} onClick={app.action}>
                                        Launch App &rarr;
                                    </Button>
                                ) : (
                                    <span className={`text-xs font-mono border border-${app.color}-500/30 text-${app.color}-400 px-2 py-1 rounded`}>
                                        {app.status}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats / Trust */}
            <section className="py-20 border-y border-white/10 bg-black/80 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="reveal-on-scroll opacity-0 scale-90 transition-all duration-500">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">10k+</div>
                            <div className="text-sm text-gray-500 font-mono uppercase tracking-widest">Warriors</div>
                        </div>
                        <div className="reveal-on-scroll opacity-0 scale-90 transition-all duration-500 delay-100">
                            <div className="text-4xl md:text-5xl font-black text-green-500 mb-2">24/7</div>
                            <div className="text-sm text-gray-500 font-mono uppercase tracking-widest">Innovation</div>
                        </div>
                        <div className="reveal-on-scroll opacity-0 scale-90 transition-all duration-500 delay-200">
                            <div className="text-4xl md:text-5xl font-black text-blue-500 mb-2">∞</div>
                            <div className="text-sm text-gray-500 font-mono uppercase tracking-widest">Possibilities</div>
                        </div>
                        <div className="reveal-on-scroll opacity-0 scale-90 transition-all duration-500 delay-300">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">100%</div>
                            <div className="text-sm text-gray-500 font-mono uppercase tracking-widest">Passion</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-12 border-t border-white/10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">

                        <span className="text-gray-500 font-bold">BLUELIME UNIVERSE</span>
                    </div>
                    <div className="text-gray-600 text-sm">
                        &copy; 2025 SmartLemonNet. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-600 hover:text-white transition-colors"><Globe className="h-5 w-5" /></a>
                        <a href="#" className="text-gray-600 hover:text-white transition-colors"><Zap className="h-5 w-5" /></a>
                        <a href="#" className="text-gray-600 hover:text-white transition-colors"><Code className="h-5 w-5" /></a>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
        .bg-300% { background-size: 300% auto; }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { animation: gradient 4s ease infinite; }
        .animate-in { opacity: 1 !important; transform: translate(0, 0) scale(1) !important; }
      `}</style>
        </div>
    );
};

export default UniverseHome;
