import { motion } from "framer-motion";
import { getStaggerItemProps, getStaggerProps } from "../lib/scrollReveal";

function ComingSoonPage() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.hash = "/";
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6 py-16">
      <motion.div className="flex flex-col items-center text-center" {...getStaggerProps({ amount: 0.24, delayChildren: 0.04, staggerChildren: 0.08 })}>
        <motion.h1
          className="text-center font-headline text-[clamp(2rem,6vw,3.8rem)] font-black uppercase tracking-[0.1em] text-on-surface"
          {...getStaggerItemProps({ duration: 0.62 })}
        >
          Em Breve...
        </motion.h1>
        <motion.button
          className="mt-8 inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
          onClick={handleBack}
          type="button"
          {...getStaggerItemProps({ delay: 0.08 })}
        >
          Voltar
        </motion.button>
      </motion.div>
    </section>
  );
}

export default ComingSoonPage;
