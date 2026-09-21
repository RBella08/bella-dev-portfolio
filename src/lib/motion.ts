import type { Variants, Transition } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -6 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 260, damping: 18 },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Hover-gesture primitives — pair with initial="rest" whileHover="hover"
export const cardLift: Variants = { rest: { y: 0 }, hover: { y: -6 } };
export const imageZoom: Variants = { rest: { scale: 1 }, hover: { scale: 1.06 } };
export const fadeOverlay: Variants = { rest: { opacity: 0 }, hover: { opacity: 1 } };
export const textShift: Variants = { rest: { x: 0 }, hover: { x: 3 } };
export const iconNudge: Variants = { rest: { x: 0, y: 0 }, hover: { x: 2, y: -2 } };
export const iconPop: Variants = { rest: { scale: 1, rotate: 0 }, hover: { scale: 1.1, rotate: -6 } };
export const sweep: Variants = { rest: { x: "-120%" }, hover: { x: "120%" } };

export const liftHover: Transition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] };