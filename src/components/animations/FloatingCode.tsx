"use client";

import { motion } from "framer-motion";

const FRAGMENTS = [
  { text: "01001011", top: 12, left: 7, duration: 14, delay: 0 },
  { text: "model.predict()", top: 68, left: 82, duration: 18, delay: -6 },
  { text: "neural.fit(input)", top: 22, left: 75, duration: 12, delay: -2 },
  { text: "sigmoid(x)", top: 55, left: 12, duration: 16, delay: -9 },
  { text: "[0.92, 0.08]", top: 38, left: 60, duration: 10, delay: -4 },
  { text: "loss: 0.023", top: 78, left: 38, duration: 15, delay: -11 },
  { text: "accuracy: 98.7%", top: 48, left: 88, duration: 11, delay: -7 },
  { text: "transformer", top: 18, left: 48, duration: 13, delay: -3 },
  { text: "attention_mask", top: 62, left: 25, duration: 17, delay: -5 },
  { text: "embed_dim=768", top: 10, left: 33, duration: 9, delay: -13 },
  { text: "∇ loss = 0", top: 72, left: 55, duration: 20, delay: -8 },
  { text: "llm.complete()", top: 85, left: 70, duration: 14, delay: -1 },
  { text: "tokenize(text)", top: 42, left: 4, duration: 16, delay: -10 },
  { text: "0xFFE501", top: 30, left: 92, duration: 12, delay: -15 },
  { text: "ctx_len=128k", top: 58, left: 44, duration: 11, delay: -3 },
  { text: "temperature=0.7", top: 88, left: 18, duration: 19, delay: -12 },
];

export function FloatingCode() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {FRAGMENTS.map((f, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-[10px] text-brand-blue/20 whitespace-nowrap"
          style={{ top: `${f.top}%`, left: `${f.left}%` }}
          animate={{ opacity: [0, 0.5, 0.5, 0], y: [0, -55] }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.15, 0.85, 1],
          }}
        >
          {f.text}
        </motion.span>
      ))}
    </div>
  );
}
