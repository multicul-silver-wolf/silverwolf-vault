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
        "group relative overflow-hidden font-bold uppercase tracking-wider transition-all",
        "h-12 rounded-none border-2 border-silver-blue bg-silver-dark px-8 text-base text-silver-neon",
        neon && [
          "hover:bg-silver-blue/20",
          // Top-left corner
          "before:absolute before:top-0 before:left-0 before:h-2 before:w-2 before:border-silver-neon before:border-t-2 before:border-l-2 before:transition-all before:content-[''] hover:before:bg-silver-neon/10",
          // Bottom-right corner
          "after:absolute after:right-0 after:bottom-0 after:h-2 after:w-2 after:border-silver-neon after:border-r-2 after:border-b-2 after:transition-all after:content-['']",
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
