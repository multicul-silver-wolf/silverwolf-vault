"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Gamepad2,
  Github,
  Hash,
  Terminal,
  Twitter,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SilverButton } from "@/components/custom/silver-button";
import { cn } from "@/lib/utils";

const STATS = [
  { label: "HACKING", value: 99 },
  { label: "GAMING", value: 100 },
  { label: "LAZINESS", value: 85 },
  { label: "AETHER_EDIT", value: 99 },
];

export function HeroSection() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-silver-blue/30 bg-silver-blue/5 px-4 py-1.5 font-mono text-silver-neon text-xs">
          <Terminal className="animate-pulse" size={12} />
          <span className="uppercase tracking-widest">
            STellar_Hunter.exe Loaded
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1
              className={cn(
                "font-black text-6xl tracking-tighter sm:text-8xl md:text-9xl",
                glitch && "animate-glitch text-silver-pink"
              )}
            >
              SILVER <br />
              <span className="bg-gradient-to-r from-silver-neon via-silver-purple to-silver-pink bg-clip-text text-transparent">
                WOLF
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-foreground/70 text-lg md:text-xl">
              Legendary hacker from Punklorde. The universe is just a massive
              immersive game, and I've got the{" "}
              <span className="text-silver-neon">cheat codes</span>. Reality
              editing in progress...
            </p>

            <div className="mt-10 flex flex-wrap items-stretch gap-4">
              <SilverButton>
                START MISSION <Zap fill="currentColor" size={18} />
              </SilverButton>

              <div className="flex items-center gap-6 border-2 border-white/10 bg-white/5 px-6 py-0 backdrop-blur-sm">
                <a
                  className="text-foreground/50 transition-colors hover:text-silver-neon"
                  href="#github"
                >
                  <span className="sr-only">Github</span>
                  <Github size={24} />
                </a>
                <a
                  className="text-foreground/50 transition-colors hover:text-silver-pink"
                  href="#twitter"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter size={24} />
                </a>
                <div className="h-6 w-px bg-white/10" />
                <div className="flex items-center gap-2 font-mono text-silver-neon/50 text-xs uppercase tracking-widest">
                  <Cpu size={14} /> System: Online
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="rounded-xl border border-white/10 bg-[#0d0d15]/80 p-6 backdrop-blur-md"
              initial={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.5 }}
            >
              <div className="mb-6 flex items-center justify-between border-white/5 border-b pb-4">
                <div className="flex items-center gap-2 font-bold font-mono text-silver-pink text-sm uppercase">
                  <Gamepad2 size={16} /> Player_Profile
                </div>
                <Hash className="text-white/20" size={14} />
              </div>

              <div className="space-y-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-tighter">
                      <span className="text-foreground/60">{stat.label}</span>
                      <span className="text-silver-neon">{stat.value}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        animate={{ width: `${stat.value}%` }}
                        className="h-full bg-gradient-to-r from-silver-blue to-silver-neon"
                        initial={{ width: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-silver-pink/10 bg-silver-pink/5 p-4">
                <p className="font-mono text-[10px] text-silver-pink leading-relaxed">
                  {
                    "// LOG: Reality is just data. Data can be modified. Modifying the local spacetime coordinates... [COMPLETE]"
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute right-10 bottom-10 hidden lg:block">
        <div className="select-none font-black text-[8rem] italic opacity-[0.02]">
          PUNKLORDE
        </div>
      </div>
    </section>
  );
}
