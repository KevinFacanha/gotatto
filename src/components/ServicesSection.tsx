import arteDesktop from "../arte desktop.png";
import arteVideo from "../arte.mp4";

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="relative min-h-[34rem] sm:min-h-[40rem] lg:min-h-[52rem]">
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover brightness-[0.67] contrast-[1.06] saturate-[0.94] md:brightness-[0.73]"
          loop
          muted
          playsInline
          preload="metadata"
          src={arteVideo}
        />
        <div className="pointer-events-none absolute inset-0 bg-surface/24" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface/64 via-surface/26 to-surface/52" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-surface/42" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-tertiary-container/10 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-center justify-center px-4 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24">
          <div className="w-full max-w-[34rem] text-center sm:max-w-[36rem] lg:hidden" data-reveal>
            <div className="mx-auto flex max-w-[28rem] items-center justify-center gap-5 sm:gap-8">
              <p className="font-label text-[10px] font-medium uppercase tracking-[0.22em] text-on-surface-variant/85 sm:tracking-[0.24em]">
                TRACO PRECISO
              </p>
              <span aria-hidden="true" className="h-px w-7 bg-outline-variant/60 sm:w-10" />
              <p className="font-label text-[10px] font-medium uppercase tracking-[0.22em] text-on-surface-variant/85 sm:tracking-[0.24em]">
                PRESENCA VISUAL
              </p>
            </div>
            <p className="mt-9 font-label text-[10px] font-medium uppercase tracking-[0.32em] text-tertiary-container">OBRAS / QUADROS</p>
            <h2 className="mx-auto mt-4 max-w-[10ch] font-headline text-[clamp(2rem,6vw,5.2rem)] font-black uppercase leading-[0.93] tracking-[0.06em] text-on-surface sm:mt-5">
              Universo
              <br />
              Em Tela
            </h2>
            <div className="mx-auto mt-9 w-full max-w-[20rem] px-1 sm:mt-7 sm:max-w-none sm:px-0">
              <p className="mx-auto max-w-[26ch] text-pretty text-[1.02rem] leading-[1.38] text-on-surface sm:max-w-[30ch] sm:text-[1.03rem] sm:leading-relaxed sm:text-on-surface-variant">
                Conheca os quadros e obras disponiveis do artista.
              </p>
              <a
                className="mx-auto mt-6 inline-flex min-w-[11.5rem] items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container sm:mt-8"
                href="#/quadros/arquivo"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          <div className="hidden w-full lg:block">
            <div className="relative mx-auto h-[34rem] max-w-[1320px] xl:h-[38rem]">
              <figure
                className="parallax-soft absolute left-2 top-6 h-[24rem] w-[19rem] overflow-hidden rounded-full bg-surface-container-highest/45 reveal-delay-1 xl:h-[28rem] xl:w-[22rem]"
                data-parallax="0.16"
                data-parallax-range="64"
                data-reveal
              >
                <img alt="Obra autoral" className="h-full w-full object-cover" loading="lazy" src={arteDesktop} />
              </figure>

              <figure
                className="parallax-soft absolute bottom-4 left-[13.5rem] h-[13rem] w-[17rem] overflow-hidden rounded-full bg-surface-container-highest/45 reveal-delay-2 xl:h-[15rem] xl:w-[20rem]"
                data-parallax="-0.11"
                data-parallax-range="54"
                data-reveal
              >
                <img alt="Obra autoral" className="h-full w-full object-cover" loading="lazy" src={arteDesktop} />
              </figure>

              <figure
                className="parallax-soft absolute right-[14rem] top-3 h-[18rem] w-[15rem] overflow-hidden rounded-full bg-surface-container-highest/45 reveal-delay-2 xl:h-[21rem] xl:w-[18rem]"
                data-parallax="0.13"
                data-parallax-range="58"
                data-reveal
              >
                <img alt="Obra autoral" className="h-full w-full object-cover" loading="lazy" src={arteDesktop} />
              </figure>

              <figure
                className="parallax-soft absolute bottom-5 right-2 h-[16rem] w-[22rem] overflow-hidden rounded-full bg-surface-container-highest/45 reveal-delay-1 xl:h-[19rem] xl:w-[25rem]"
                data-parallax="-0.14"
                data-parallax-range="62"
                data-reveal
              >
                <img alt="Obra autoral" className="h-full w-full object-cover" loading="lazy" src={arteDesktop} />
              </figure>

              <div className="absolute inset-0">
                <p
                  className="absolute left-6 top-1/2 hidden -translate-y-1/2 text-left font-label text-[clamp(0.7rem,0.78vw,0.88rem)] font-medium uppercase tracking-[0.22em] text-on-surface-variant/86 xl:block reveal-delay-2"
                  data-reveal
                >
                  Arte que atravessa o tempo
                </p>
                <p
                  className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-right font-label text-[clamp(0.7rem,0.78vw,0.88rem)] font-medium uppercase tracking-[0.22em] text-on-surface-variant/86 xl:block reveal-delay-2"
                  data-reveal
                >
                  Composicao autoral absoluta
                </p>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
                  <p className="font-label text-[10px] font-medium uppercase tracking-[0.28em] text-tertiary-container reveal-delay-2" data-reveal>
                    OBRAS / QUADROS
                  </p>
                  <h2
                    className="mt-4 max-w-[8.9ch] font-headline text-[clamp(3.2rem,7.2vw,6.9rem)] font-black uppercase leading-[0.85] tracking-[0.045em] text-on-surface reveal-delay-3"
                    data-reveal
                  >
                    Colecao
                    <br />
                    de Obras
                    <br />
                    GOTA
                  </h2>
                  <p
                    className="mt-5 font-label text-[clamp(0.68rem,0.86vw,0.92rem)] uppercase tracking-[0.3em] text-on-surface-variant/88 reveal-delay-4"
                    data-reveal
                  >
                    Sao Paulo / Curadoria Autoral
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center reveal-delay-4" data-reveal>
              <a
                className="inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
                href="#/quadros/arquivo"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
