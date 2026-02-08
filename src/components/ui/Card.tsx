import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "gradient-card rounded-xl border border-white/[0.06] p-6 md:p-8",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:glow-blue",
        className
      )}
    >
      {children}
    </div>
  );
}
