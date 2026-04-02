import { useEffect, useMemo, useRef, useState } from "react";

type MobileEditorialItem = {
  category: string;
  description: string;
  image: string;
  label: string;
  objectPosition: string;
  title: string;
};

const withMobileTransform = (url: string) => url.replace("/image/upload/", "/image/upload/c_limit,w_900,dpr_auto/");
const INITIAL_VISIBLE_ITEMS = 1;
const LOAD_STEP = 2;

const MOBILE_ARCHIVE_WORK_ITEMS: MobileEditorialItem[] = [
  {
    category: "ARQUIVO / ASSINATURA",
    description: "Projeto de assinatura autoral com equilíbrio entre presença gráfica e acabamento limpo de leitura imediata.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775068120/foto_18_xfp53k.jpg"),
    label: "18 / TRABALHO",
    objectPosition: "center 32%",
    title: "Arquivo 18",
  },
  {
    category: "ORNAMENTAL / FINE LINE",
    description: "Composição de linhas contínuas e pausas visuais para preservar fluidez e sofisticação no resultado final.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067062/foto_5_ufz5z2.jpg"),
    label: "05 / TRABALHO",
    objectPosition: "center 36%",
    title: "Arquivo 05",
  },
  {
    category: "BOTÂNICO / PRETO",
    description: "Estrutura vegetal com volume controlado, desenhada para manter impacto sem perder leveza editorial.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067071/foto_6_ylpzs4.jpg"),
    label: "06 / TRABALHO",
    objectPosition: "center 28%",
    title: "Arquivo 06",
  },
  {
    category: "GRÁFICO / CONTORNO",
    description: "Recorte preciso entre linhas e áreas de sombra, criando presença marcante com acabamento silencioso.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067099/foto_9_jhcaj0.jpg"),
    label: "09 / TRABALHO",
    objectPosition: "center 52%",
    title: "Arquivo 09",
  },
  {
    category: "TEXTURA / BLACKWORK",
    description: "Volume de preto aplicado com controle de textura para manter nitidez gráfica e assinatura contemporânea.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067115/foto_11_sw2ico.jpg"),
    label: "11 / TRABALHO",
    objectPosition: "center 42%",
    title: "Arquivo 11",
  },
  {
    category: "EDITORIAL / FLUIDO",
    description: "Direção visual com linhas alongadas e ritmo orgânico, pensada para valorizar movimento natural do corpo.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067135/foto_13_vypyae.jpg"),
    label: "13 / TRABALHO",
    objectPosition: "center 44%",
    title: "Arquivo 13",
  },
  {
    category: "AUTORAL / MINIMAL",
    description: "Projeto de presença discreta e precisa, com desenho enxuto e contraste refinado de longa duração.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067143/foto_14_gshnky.jpg"),
    label: "14 / TRABALHO",
    objectPosition: "center 35%",
    title: "Arquivo 14",
  },
  {
    category: "FINE LINE / BOTÂNICO",
    description: "Construção leve com microdetalhes calibrados para leitura elegante em close e em visão ampla.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067152/foto_15_ortfw7.jpg"),
    label: "15 / TRABALHO",
    objectPosition: "center 38%",
    title: "Arquivo 15",
  },
  {
    category: "COMPOSIÇÃO / EDITORIAL",
    description: "Recorte visual de alto equilíbrio entre forma e vazio, reforçando clareza e assinatura visual.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067159/foto_16_qf4fwu.jpg"),
    label: "16 / TRABALHO",
    objectPosition: "center 46%",
    title: "Arquivo 16",
  },
];

function MobileWorkArchivePage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ITEMS);
  const [loadedIndexes, setLoadedIndexes] = useState<Set<number>>(new Set());
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null);

  const visibleItems = useMemo(() => MOBILE_ARCHIVE_WORK_ITEMS.slice(0, visibleCount), [visibleCount]);
  const hasMoreItems = visibleCount < MOBILE_ARCHIVE_WORK_ITEMS.length;

  useEffect(() => {
    const trigger = loadMoreTriggerRef.current;
    if (!trigger || !hasMoreItems) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setVisibleCount((current) => Math.min(current + LOAD_STEP, MOBILE_ARCHIVE_WORK_ITEMS.length));
      },
      { rootMargin: "300px 0px 300px 0px", threshold: 0.01 },
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, [hasMoreItems]);

  const markImageLoaded = (index: number) => {
    setLoadedIndexes((current) => {
      if (current.has(index)) {
        return current;
      }

      const next = new Set(current);
      next.add(index);
      return next;
    });
  };

  const skeletonCount = hasMoreItems ? Math.min(LOAD_STEP, MOBILE_ARCHIVE_WORK_ITEMS.length - visibleCount) : 0;

  return (
    <section className="relative overflow-hidden bg-surface-container-low px-8 py-24 lg:hidden" style={{ opacity: 1, visibility: "visible" }}>
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-14 flex max-w-[920px] flex-col items-center text-center">
          <p className="font-label text-[10px] font-medium uppercase tracking-[0.32em] text-tertiary-container">ARQUIVO COMPLETO</p>
          <h1 className="mt-5 font-headline text-[clamp(2rem,5.5vw,4.45rem)] font-black uppercase leading-[0.92] tracking-[0.08em] text-on-surface">
            Seleção Expandida
            <br />
            Trabalhos GOTA
          </h1>
          <span aria-hidden="true" className="mt-8 h-16 w-px bg-outline-variant/70" />
          <a
            className="mt-8 inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
            href="#/"
          >
            Voltar ao Início
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {visibleItems.map((item, index) => (
            <figure
              key={`${item.label}-${item.title}`}
              className="overflow-hidden bg-surface-container-highest ring-1 ring-white/10"
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[16/10]">
                {!loadedIndexes.has(index) && <div className="absolute inset-0 animate-pulse bg-outline-variant/20" />}
                <img
                  alt={item.title}
                  className={`h-full w-full object-cover transition-opacity duration-500 ease-out ${loadedIndexes.has(index) ? "opacity-100" : "opacity-0"}`}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={() => markImageLoaded(index)}
                  onLoad={() => markImageLoaded(index)}
                  src={item.image}
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/72 via-transparent to-surface/38" />
              </div>
              <figcaption className="border-t border-outline-variant/60 px-5 py-6 sm:px-6">
                <p className="font-label text-[10px] uppercase tracking-[0.24em] text-tertiary-container">
                  {item.label} / {item.category}
                </p>
                <h2 className="mt-3 font-headline text-[clamp(1.35rem,6vw,2rem)] font-black uppercase tracking-[0.04em] text-on-surface">{item.title}</h2>
                <p className="mt-3 max-w-[38ch] text-pretty text-[0.98rem] leading-relaxed text-on-surface-variant">{item.description}</p>
              </figcaption>
            </figure>
          ))}

          {Array.from({ length: skeletonCount }).map((_, skeletonIndex) => (
            <figure
              key={`skeleton-${visibleCount + skeletonIndex}`}
              className="overflow-hidden bg-surface-container-highest ring-1 ring-white/10"
            >
              <div className="relative aspect-[4/5] w-full animate-pulse bg-outline-variant/20 sm:aspect-[16/10]" />
              <figcaption className="border-t border-outline-variant/60 px-5 py-6 sm:px-6">
                <div className="h-2 w-32 animate-pulse bg-outline-variant/25" />
                <div className="mt-3 h-7 w-44 animate-pulse bg-outline-variant/25" />
                <div className="mt-3 h-2 w-full animate-pulse bg-outline-variant/25" />
                <div className="mt-2 h-2 w-5/6 animate-pulse bg-outline-variant/25" />
              </figcaption>
            </figure>
          ))}
        </div>

        {hasMoreItems && <div ref={loadMoreTriggerRef} className="h-1 w-full" />}

        <div className="mt-10 flex justify-center">
          <a
            className="inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
            href="#/"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </section>
  );
}

export default MobileWorkArchivePage;
