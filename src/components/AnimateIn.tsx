"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";

type AnimationVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "fadeIn" | "scaleUp" | "slideUp";

const variants: Record<AnimationVariant, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  fadeDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  },
};

interface AnimateInProps {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly className?: string;
  readonly variant?: AnimationVariant;
  readonly duration?: number;
}

export default function AnimateIn({
  children,
  delay = 0,
  className = "",
  variant = "fadeUp",
  duration = 0.7,
}: AnimateInProps) {
  const v = variants[variant];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
