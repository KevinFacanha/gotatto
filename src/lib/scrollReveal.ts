import { type MotionProps, type Transition, type Variants } from "framer-motion";

type RevealOptions = {
  amount?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  y?: number;
};

type StaggerOptions = {
  amount?: number;
  delayChildren?: number;
  once?: boolean;
  staggerChildren?: number;
};

const DEFAULT_AMOUNT = 0.26;
const DEFAULT_DURATION = 0.6;
const DEFAULT_OFFSET_Y = 24;

const buildRevealTransition = (delay = 0, duration = DEFAULT_DURATION): Transition => ({
  delay,
  duration,
  ease: "easeOut",
});

export const buildRevealVariants = ({ delay = 0, duration = DEFAULT_DURATION, y = DEFAULT_OFFSET_Y }: RevealOptions = {}): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: buildRevealTransition(delay, duration),
  },
});

export const getRevealProps = (options: RevealOptions = {}): MotionProps => ({
  initial: "hidden",
  variants: buildRevealVariants(options),
  viewport: { amount: options.amount ?? DEFAULT_AMOUNT, once: options.once ?? true },
  whileInView: "visible",
});

export const getStaggerProps = (options: StaggerOptions = {}): MotionProps => ({
  initial: "hidden",
  variants: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: options.delayChildren ?? 0,
        staggerChildren: options.staggerChildren ?? 0.1,
      },
    },
  },
  viewport: { amount: options.amount ?? DEFAULT_AMOUNT, once: options.once ?? true },
  whileInView: "visible",
});

export const getStaggerItemProps = (options: Omit<RevealOptions, "amount" | "once"> = {}): MotionProps => ({
  variants: buildRevealVariants(options),
});
