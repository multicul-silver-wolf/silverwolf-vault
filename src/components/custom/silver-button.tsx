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
        "group relative overflow-hidden font-bold transition-all",
        neon && [
          "bg-silver-blue text-white hover:bg-silver-blue/80",
          "after:absolute after:inset-0 after:translate-y-full after:bg-silver-neon after:transition-transform after:duration-300 hover:text-silver-dark hover:after:translate-y-0",
        ],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Button>
  );
};
