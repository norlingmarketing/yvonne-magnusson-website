"use client";

import { cn } from "@/lib/utils";

export interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#2c5f7c1a] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#2c5f7c3a] dark:bg-black/40",
        className,
      )}
    >
      <div
        className={cn(
          `absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#2C5F7C]/50 via-[#D4A574]/50 to-[#2C5F7C]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`,
          `p-[1px] ![mask-composite:subtract]`,
        )}
      />
      <div className={cn("animate-gradient bg-gradient-to-r from-[#2C5F7C] via-[#D4A574] to-[#2C5F7C] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent")}>
        {children}
      </div>
    </div>
  );
}