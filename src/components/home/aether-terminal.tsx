"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Terminal as TerminalIcon } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const COMMANDS = {
  help: "Available commands: help, scan, clear, about, version, whoami",
  scan: "Scanning local reality segments... [100%] No viruses found. Only peak performance.",
  about: "Silver Wolf Vault v1.0. Developed at Punklorde. Status: Active.",
  version: "System: Clawdbot v2026.1.24-3 | Kernel: Gemini-3-Flash",
  whoami:
    "Subject: Legendary Hacker. Status: Stellar Hunter. Location: This very data stream.",
};

export function AetherTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Aether_OS v1.0.4",
    "Type 'help' for available commands.",
  ]);
  const [isVisible, setIsVisible] = useState(true);

  // External trigger for terminal
  useEffect(() => {
    const handleOpenTerminal = () => setIsVisible(true);
    window.addEventListener("open-terminal", handleOpenTerminal);
    return () =>
      window.removeEventListener("open-terminal", handleOpenTerminal);
  }, []);

  const [isMinimized, setIsMinimized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic fixed
  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    };
    requestAnimationFrame(scroll);
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }

    const cmd = input.toLowerCase().trim();
    const response =
      COMMANDS[cmd as keyof typeof COMMANDS] ||
      `Command not found: ${cmd}. Try 'help'.`;

    if (cmd === "clear") {
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, `> ${input}`, response]);
    }

    setInput("");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "fixed bottom-8 left-8 z-50 w-full max-w-md overflow-hidden rounded-lg border border-silver-blue/30 bg-black/80 shadow-2xl backdrop-blur-xl transition-all duration-300",
        isMinimized ? "h-10 w-48" : "h-64"
      )}
      initial={{ opacity: 0, y: 20 }}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between bg-silver-blue/10 px-4 py-2 transition-colors hover:bg-silver-blue/20"
        onClick={() => {
          if (isMinimized) {
            setIsMinimized(false);
          }
        }}
        type="button"
      >
        <div
          className="flex flex-1 items-center gap-2 font-bold font-mono text-[10px] text-silver-neon"
          onClick={(e) => {
            if (!isMinimized) {
              e.stopPropagation();
              setIsMinimized(true);
            }
          }}
        >
          <TerminalIcon size={12} />
          <span className="uppercase tracking-widest">Aether_Terminal</span>
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            className="h-2 w-2 rounded-full bg-silver-neon/50 transition-colors hover:bg-silver-neon"
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(!isMinimized);
            }}
            title="Minimize"
          />
          <button
            type="button"
            className="h-2 w-2 rounded-full bg-silver-pink/50 transition-colors hover:bg-silver-pink"
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            title="Close"
          />
        </div>
      </button>

      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            animate={{ opacity: 1 }}
            className="flex h-[calc(100%-40px)] flex-col"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div
              className="flex-1 overflow-y-auto p-4 font-mono text-[11px] text-silver-neon/80 leading-relaxed"
              ref={scrollRef}
            >
              {history.map((line, i) => (
                <div
                  className={cn(
                    line.startsWith(">")
                      ? "text-silver-pink"
                      : "text-silver-neon/60"
                  )}
                  key={`${i}-${line.substring(0, 10)}`}
                >
                  {line}
                </div>
              ))}
            </div>

            <form
              className="flex items-center border-white/5 border-t bg-white/5 px-4 py-2"
              onSubmit={handleCommand}
            >
              <ChevronRight className="text-silver-pink" size={14} />
              <input
                autoFocus
                className="flex-1 bg-transparent px-2 font-mono text-[11px] text-silver-neon focus:outline-none"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter command..."
                type="text"
                value={input}
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
