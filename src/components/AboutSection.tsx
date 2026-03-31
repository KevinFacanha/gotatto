import foto1 from "../foto1.jpeg";

function AboutSection() {
  return (
    <section className="bg-surface px-8 py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mx-auto mb-14 flex max-w-[920px] flex-col items-center text-center md:mb-16" data-reveal>
          <p className="font-label text-[10px] font-medium uppercase tracking-[0.32em] text-tertiary-container">SOBRE</p>
          <h2 className="mt-5 font-headline text-[clamp(2rem,5.5vw,4.45rem)] font-black uppercase leading-[0.92] tracking-[0.08em] text-on-surface">
            Assinatura Visual
            <br />
            Com Direção Autoral
          </h2>
          <span aria-hidden="true" className="mt-8 h-16 w-px bg-outline-variant/70 md:h-20" />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <figure
            className="parallax-soft group relative isolate overflow-hidden bg-surface-container-highest ring-1 ring-white/10 lg:col-span-8 reveal-delay-1"
            data-parallax="0.085"
            data-reveal
          >
            <div className="aspect-[4/5] w-full sm:aspect-[16/10]">
              <img
                alt="Retrato na neve"
                className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:lg:group-hover:scale-[1.06]"
                src={foto1}
                style={{ objectPosition: "center 35%" }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/92 via-surface/38 to-surface/58" />
            <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/30 bg-black/35 px-3 py-1 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface md:left-6 md:top-6">
              PROCESSO
            </span>
            <p className="absolute bottom-4 left-4 right-4 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface md:left-6 md:right-6 md:bottom-6">
              01 / DIREÇÃO AUTORAL
            </p>
          </figure>

          <div className="flex h-full flex-col justify-between gap-7 border-l border-outline-variant/70 pl-4 md:pl-6 lg:col-span-4 lg:pt-2 reveal-delay-2" data-reveal>
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-on-surface-variant/80">ESTÚDIO / SÃO PAULO</p>
              <h3 className="mt-4 font-headline text-[clamp(1.5rem,2.1vw,2.1rem)] font-black uppercase tracking-[0.06em] text-on-surface">
                Direção Autoral
              </h3>
              <p className="mt-4 max-w-[34ch] text-pretty text-[1.02rem] leading-relaxed text-on-surface-variant">
                Cada peça começa com escuta precisa e direção estética. O desenho nasce para o corpo certo, no ritmo certo, com leitura
                forte em qualquer distância.
              </p>
            </div>
            <p className="border-l border-outline-variant/70 pl-4 font-label text-[11px] uppercase tracking-[0.2em] text-on-surface/88">
              Design de tatuagem autoral, linguagem gráfica e presença visual duradoura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
