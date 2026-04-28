import { motion } from "framer-motion";
import { getStaggerItemProps, getStaggerProps } from "../lib/scrollReveal";

function QuoteSection() {
  return (
    <section className="bg-surface-container-lowest px-4 py-24 sm:px-8 md:px-12 xl:px-16">
      <div className="relative mx-auto max-w-[1000px] overflow-hidden">
        <div
          aria-hidden="true"
          className="parallax-soft pointer-events-none absolute -right-12 top-6 h-40 w-40 rounded-full bg-tertiary-container/8 blur-[120px] md:-right-20 md:top-2 md:h-56 md:w-56"
          data-speed="0.28"
          data-speed-range="38"
        />
        <motion.div {...getStaggerProps({ amount: 0.24, delayChildren: 0.04, staggerChildren: 0.08 })}>
          <div className="relative py-12">
            <motion.div aria-hidden="true" className="absolute top-0 left-0 h-1 w-16 bg-tertiary-container" {...getStaggerItemProps()} />
            <motion.blockquote
              className="font-headline text-[clamp(2rem,5vw,4rem)] font-light italic leading-tight text-on-surface tracking-tight"
              {...getStaggerItemProps({ duration: 0.66 })}
            >
              "Tatuagem não é só imagem. É presença, memória e{" "}
              <span className="text-tertiary-container font-black not-italic">identidade</span> marcada no corpo."
            </motion.blockquote>
            <motion.cite className="mt-12 block font-label text-sm uppercase tracking-widest text-white/40" {...getStaggerItemProps({ delay: 0.06 })}>
              — GOTA TATTOO / MANIFESTO
            </motion.cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default QuoteSection;
