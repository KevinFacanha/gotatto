import { motion } from "framer-motion";
import foto1 from "../foto1.jpeg";
import { getRevealProps } from "../lib/scrollReveal";

function AboutSection() {
  return (
    <section className="bg-surface px-4 py-24 sm:px-8 md:px-12 md:py-28 xl:px-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div className="mx-auto mb-14 flex max-w-[920px] flex-col items-center text-center md:mb-16" {...getRevealProps()}>
          <p className="font-label text-[10px] font-medium uppercase tracking-[0.32em] text-tertiary-container">SOBRE</p>
          <h2 className="mt-5 font-headline text-[clamp(2rem,5.5vw,4.45rem)] font-black uppercase leading-[0.92] tracking-[0.08em] text-on-surface">
            TRAJETÓRIA SÓLIDA
            <br />
            COM VISÃO AUTORAL
          </h2>
          <span aria-hidden="true" className="mt-8 h-16 w-px bg-outline-variant/70 md:h-20" />
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-stretch md:gap-8 xl:gap-12">
          <motion.figure className="group relative isolate overflow-hidden bg-surface-container-highest ring-1 ring-white/10 md:col-span-7 xl:col-span-8" {...getRevealProps({ delay: 0.1 })}>
            <div className="parallax-soft aspect-[4/5] w-full sm:aspect-[16/10]" data-speed="0.2" data-speed-range="54">
              <img
                alt="Retrato na neve"
                className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:lg:group-hover:scale-[1.06]"
                src={foto1}
                style={{ objectPosition: "44% 35%" }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/92 via-surface/38 to-surface/58" />
            <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/30 bg-black/35 px-3 py-1 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface md:left-6 md:top-6">
              PROCESSO
            </span>
            <p className="absolute bottom-4 left-4 right-4 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface md:left-6 md:right-6 md:bottom-6">
              01 / DIREÇÃO AUTORAL
            </p>
          </motion.figure>

          <motion.div
            className="flex h-full flex-col justify-between gap-7 border-l border-outline-variant/70 pl-4 md:col-span-5 md:pl-6 md:pt-2 xl:col-span-4"
            {...getRevealProps({ delay: 0.04 })}
          >
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-on-surface-variant/80">RAFAEL / TATUADOR</p>
              <h3 className="mt-4 font-headline text-[clamp(1.5rem,2.1vw,2.1rem)] font-black uppercase tracking-[0.06em] text-on-surface">
                MINHA TRAJETÓRIA
              </h3>
              <p className="mt-4 max-w-[34ch] text-pretty text-[1.02rem] leading-relaxed text-on-surface-variant">
                Muito prazer, meu nome é Rafael, tenho 28 anos e atuo como tatuador profissional há mais de uma década. Desenho desde a infância e iniciei
                minha trajetória na tatuagem aos 18 anos. Desde então, venho me especializando por meio de cursos e workshops com
                artistas nacionais e internacionais, sempre com foco em precisão, segurança e qualidade.
              </p>
            </div>
            <p className="border-l border-outline-variant/70 pl-4 font-label text-[11px] uppercase tracking-[0.2em] text-on-surface/88">
              FINE LINE, OLD SCHOOL, ORIENTAL, BLACKWORK, COBERTURA E RECONSTRUÇÃO.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
