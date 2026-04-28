import { motion } from "framer-motion";
import arteBackground from "../arte.png";
import arteMobileBackground from "../artemobile.png";
import { getStaggerItemProps, getStaggerProps } from "../lib/scrollReveal";

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="relative min-h-[34rem] sm:min-h-[40rem] lg:min-h-[52rem]">
        <div className="absolute inset-0 overflow-hidden xl:hidden">
          <img
            alt=""
            className="parallax-soft absolute inset-0 h-full w-full object-cover object-center brightness-[0.7] contrast-[1.02] saturate-[0.96] md:hidden"
            data-speed="0.2"
            data-speed-range="40"
            src={arteMobileBackground}
          />
          <img
            alt=""
            className="parallax-soft absolute inset-0 hidden h-full w-full object-cover object-center brightness-[0.7] contrast-[1.02] saturate-[0.96] md:block"
            data-speed="0.24"
            data-speed-range="48"
            src={arteBackground}
          />
        </div>
        <img
          alt=""
          className="parallax-soft absolute inset-0 hidden h-full w-full object-cover object-center brightness-[0.7] contrast-[1.02] saturate-[0.96] xl:block"
          data-speed="0.35"
          data-speed-range="60"
          src={arteBackground}
        />
        <div className="pointer-events-none absolute inset-0 bg-surface/18" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface/34 via-transparent to-surface/42" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/44 via-transparent to-surface/24" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-tertiary-container/12 via-transparent to-transparent" />
        <div
          aria-hidden="true"
          className="parallax-soft pointer-events-none absolute -right-20 top-[12%] h-[18rem] w-[18rem] rounded-full bg-tertiary-container/10 blur-[150px] md:-right-10 md:h-[22rem] md:w-[22rem]"
          data-speed="0.5"
          data-speed-range="52"
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-center justify-center px-4 py-16 sm:px-8 sm:py-20 md:px-12 xl:px-16 xl:py-24">
          <motion.div
            className="w-full max-w-[34rem] text-center sm:max-w-[36rem] md:max-w-[42rem] xl:hidden"
            {...getStaggerProps({ amount: 0.24, delayChildren: 0.04, staggerChildren: 0.08 })}
          >
            <motion.div className="mx-auto flex max-w-[28rem] items-center justify-center gap-5 sm:gap-8" {...getStaggerItemProps()}>
              <p className="font-label text-[10px] font-medium uppercase tracking-[0.22em] text-on-surface-variant/85 sm:tracking-[0.24em]">
                TRAÇO PRECISO
              </p>
              <span aria-hidden="true" className="h-px w-7 bg-outline-variant/60 sm:w-10" />
              <p className="font-label text-[10px] font-medium uppercase tracking-[0.22em] text-on-surface-variant/85 sm:tracking-[0.24em]">
                PRESENÇA VISUAL
              </p>
            </motion.div>
            <motion.p className="mt-9 font-label text-[10px] font-medium uppercase tracking-[0.32em] text-tertiary-container" {...getStaggerItemProps()}>
              OBRAS / QUADROS
            </motion.p>
            <motion.h2
              className="mx-auto mt-4 max-w-[10ch] font-headline text-[clamp(2rem,6vw,5.2rem)] font-black uppercase leading-[0.93] tracking-[0.06em] text-on-surface sm:mt-5"
              {...getStaggerItemProps({ duration: 0.64 })}
            >
              Universo
              <br />
              Em Tela
            </motion.h2>
            <motion.div className="mx-auto mt-9 w-full max-w-[20rem] px-1 sm:mt-7 sm:max-w-none sm:px-0 md:max-w-[34rem]" {...getStaggerItemProps({ delay: 0.08 })}>
              <p className="mx-auto max-w-[26ch] text-pretty text-[1.02rem] leading-[1.38] text-on-surface sm:max-w-[30ch] sm:text-[1.03rem] sm:leading-relaxed sm:text-on-surface-variant md:max-w-[34ch]">
                Conheça os quadros e obras disponíveis do artista.
              </p>
              <a
                className="mx-auto mt-6 inline-flex min-w-[11.5rem] items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container sm:mt-8"
                href="#/quadros/em-breve"
              >
                Saiba Mais
              </a>
            </motion.div>
          </motion.div>

          <div className="hidden w-full xl:block">
            <div className="relative mx-auto h-[34rem] max-w-[1320px] xl:h-[38rem]">
              <div className="absolute inset-0">
                <motion.div
                  className="absolute left-[42.6%] top-1/2 z-20 flex w-[30rem] -translate-x-1/2 -translate-y-[46%] flex-col items-center text-center xl:left-[44.4%] xl:w-[32rem]"
                  {...getStaggerProps({ amount: 0.28, delayChildren: 0.04, staggerChildren: 0.08 })}
                >
                  <div className="w-full">
                    <motion.p className="font-label text-[10px] font-medium uppercase tracking-[0.28em] text-tertiary-container" {...getStaggerItemProps()}>
                      OBRAS / QUADROS
                    </motion.p>
                    <motion.h2
                      className="mx-auto mt-4 max-w-[10.7ch] font-headline text-[clamp(4rem,7vw,6.2rem)] font-black uppercase leading-[0.88] tracking-[0.026em] text-on-surface"
                      {...getStaggerItemProps({ duration: 0.66 })}
                    >
                      <span className="block whitespace-nowrap">Coleção de</span>
                      <span className="block whitespace-nowrap">Obras Gota</span>
                    </motion.h2>
                    <motion.p
                      className="mt-4 font-label text-[clamp(0.68rem,0.84vw,0.92rem)] uppercase tracking-[0.26em] text-on-surface-variant/88"
                      {...getStaggerItemProps({ delay: 0.08 })}
                    >
                      Sao Paulo / Curadoria Autoral
                    </motion.p>
                  </div>
                  <motion.a
                    className="mt-10 inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
                    href="#/quadros/em-breve"
                    {...getStaggerItemProps({ delay: 0.12 })}
                  >
                    Saiba Mais
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
