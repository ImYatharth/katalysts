"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export function TextScramble({
  text,
  className,
  delay = 0,
  speed = 35,
  as: Tag = "span",
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const [visible, setVisible] = useState(false);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    startRef.current = setTimeout(() => {
      setVisible(true);
      let iteration = 0;

      clearInterval(frameRef.current!);
      frameRef.current = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, idx) => {
              if (char === " ") return " ";
              if (idx < iteration) return text[idx];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iteration += 1 / 2.8;

        if (iteration >= text.length) {
          clearInterval(frameRef.current!);
          setDisplay(text);
        }
      }, speed);
    }, delay * 1000);

    return () => {
      clearTimeout(startRef.current!);
      clearInterval(frameRef.current!);
    };
  }, [text, delay, speed]);

  return (
    <Tag
      className={cn(
        "transition-opacity duration-300 font-mono",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {display}
    </Tag>
  );
}
