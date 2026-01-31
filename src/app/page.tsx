import { HeroSection } from "@/components/home/hero-section";

export default function Home() {
  return (
    <main className="crt-overlay relative min-h-screen">
      <div className="scanline" />

      {/* Navigation Dummy */}
      <nav className="fixed top-0 z-50 flex w-full justify-between border-white/5 border-b bg-black/50 px-8 py-4 backdrop-blur-md">
        <div className="font-black font-mono text-silver-neon tracking-tighter">
          SW_VAULT v1.0
        </div>
        <div className="flex gap-8 font-mono text-[10px] text-foreground/50 uppercase tracking-[0.2em]">
          <a
            className="transition-colors hover:text-silver-pink"
            href="#mission"
          >
            Mission
          </a>
          <a
            className="transition-colors hover:text-silver-pink"
            href="#archive"
          >
            Archive
          </a>
          <a
            className="transition-colors hover:text-silver-pink"
            href="#settings"
          >
            Settings
          </a>
        </div>
      </nav>

      <HeroSection />

      {/* Footer Text */}
      <footer className="fixed bottom-0 z-50 flex w-full justify-end p-8">
        <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
          No Bug, No Game. © 2026 PUNK_LORDE_RECORDS
        </div>
      </footer>
    </main>
  );
}
