import type React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SilverButtonProps extends React.ComponentProps<typeof Button> {
  /**
   * If true, adds the hacker neon animation effect
   */
  neon?: boolean;
}

export const SilverButton = ({
  className,
  neon = true,
  children,
  ...props
}: SilverButtonProps) => {
  return (
    <Button
      className={cn(
        "group relative overflow-hidden font-bold transition-all uppercase tracking-wider",
        "h-12 px-8 text-base rounded-none border-2 border-silver-blue", // Custom size & shape override
        neon && [
          "bg-silver-dark text-silver-neon hover:bg-silver-blue/20",
          "before:content-[''] before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t-2 before:border-l-2 before:border-silver-neon",
          "after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-silver-neon",
          // Hover Overlay Effect
          "before:content-[''] before:absolute before:inset-0 before:bg-silver-neon/0 before:transition-colors hover:before:bg-silver-neon/10 before:pointer-events-none",
        ],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
    </Button>
  );
};
