import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import foto17 from "../foto 17.jpeg";
import { getRevealProps, getStaggerItemProps, getStaggerProps } from "../lib/scrollReveal";

type MobileEditorialItem = {
  category: string;
  description: string;
  image: string;
  label: string;
  objectPosition: string;
  title: string;
};

const withMobileTransform = (url: string) => url.replace("/image/upload/", "/image/upload/c_limit,w_700,dpr_auto/");
const INITIAL_VISIBLE_ITEMS = 2;
const LOAD_STEP = 3;
const HOME_WORK_SECTION_HASH = "#trabalhos";

const MOBILE_ARCHIVE_WORK_ITEMS: MobileEditorialItem[] = [
  {
    category: "LETTERING / FREE HAND",
    description:
      "“Amour”, em francês, desenvolvido em free hand com liberdade de composição e desenho direto na pele, respeitando a anatomia e as proporções do corpo do cliente para uma leitura autoral e natural.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775068120/foto_18_xfp53k.jpg"),
    label: "18 / TRABALHO",
    objectPosition: "center 32%",
    title: "Arquivo 18",
  },
  {
    category: "NEO TRAD / TATTOO SOBRE TATTOO",
    description:
      "Sagrado Coração de Jesus em linguagem neo trad, aplicado sobre uma tatuagem anterior com abordagem de tattoo sobre tattoo, preservando leitura, contraste e presença visual sem necessariamente encobrir totalmente a arte de base.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067062/foto_5_ufz5z2.jpg"),
    label: "05 / TRABALHO",
    objectPosition: "center 36%",
    title: "Arquivo 05",
  },
  {
    category: "OLDSCHOOL",
    description: "Tatuagem em oldschool de um cachorro doberman, pensada para destacar contraste, impacto visual e uma leitura clássica com presença atemporal.",
    image: foto17,
    label: "06 / TRABALHO",
    objectPosition: "center 28%",
    title: "Arquivo 06",
  },
  {
    category: "Lettering / Free hand",
    description:
      "Lettering autoral feito à mão livre, com leitura direta e personalidade marcante. A composição reforça a ideia de permanecer fiel à própria essência, com um desenho tipográfico cru, expressivo e cheio de identidade.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067099/foto_9_jhcaj0.jpg"),
    label: "09 / TRABALHO",
    objectPosition: "center 52%",
    title: "Arquivo 09",
  },
  {
    category: "FINE LINE",
    description:
      "Retrato em fine line criado como homenagem ao Zeca, com traço delicado e leitura afetiva, desenvolvido para transformar a memória do animal em uma peça leve, sensível e de presença duradoura.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067115/foto_11_sw2ico.jpg"),
    label: "11 / TRABALHO",
    objectPosition: "center 42%",
    title: "Arquivo 11",
  },
  {
    category: "OLD SCHOOL",
    description:
      "Peça em old school criada como homenagem ao pai, com leitura direta, força simbólica e construção pensada para transformar memória, presença e afeto em marca permanente.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067135/foto_13_vypyae.jpg"),
    label: "13 / TRABALHO",
    objectPosition: "center 60%",
    title: "Arquivo 13",
  },
  {
    category: "BLACK WORK",
    description:
      "Dragão medieval em black work, construído com leitura forte e presença marcante. A composição valoriza o detalhamento das linhas, a textura das escamas e a imponência da peça, resultando em uma tatuagem de estética sólida, sombria e atemporal.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067143/foto_14_gshnky.jpg"),
    label: "14 / TRABALHO",
    objectPosition: "center 35%",
    title: "Arquivo 14",
  },
  {
    category: "Red ink",
    description:
      "O kanji 愛 (ai), que significa “amor”, foi esculpido na areia como símbolo da solidão e da promessa de se tornar um “demônio que ama apenas a si mesmo”. Com o passar do tempo, porém, esse significado evolui e passa a representar a superação da dor.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067152/foto_15_ortfw7.jpg"),
    label: "Kanji",
    objectPosition: "center 38%",
    title: "Arquivo 15",
  },
  {
    category: "Lettering",
    description:
      "Homenagem à mãe Vera, desenvolvida em black work com abordagem tipográfica marcante. A composição valoriza contraste, presença visual e leitura forte, transformando o nome em uma peça de impacto e significado afetivo.",
    image: withMobileTransform("https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067159/foto_16_qf4fwu.jpg"),
    label: "Black work",
    objectPosition: "center 46%",
    title: "Arquivo 16",
  },
];

function MobileWorkArchivePage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ITEMS);
  const [loadedIndexes, setLoadedIndexes] = useState<Set<number>>(new Set());
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null);
  const prefetchedSourcesRef = useRef<Set<string>>(new Set());

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
      { rootMargin: "1200px 0px 1200px 0px", threshold: 0 },
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, [hasMoreItems]);

  useEffect(() => {
    if (!hasMoreItems) {
      return;
    }

    const nextBatch = MOBILE_ARCHIVE_WORK_ITEMS.slice(visibleCount, Math.min(visibleCount + LOAD_STEP + 2, MOBILE_ARCHIVE_WORK_ITEMS.length));
    if (nextBatch.length === 0) {
      return;
    }

    const prefetchNextBatch = () => {
      nextBatch.forEach((item) => {
        if (prefetchedSourcesRef.current.has(item.image)) {
          return;
        }

        const image = new Image();
        image.decoding = "async";
        image.src = item.image;
        prefetchedSourcesRef.current.add(item.image);
      });
    };

    const timeoutId = window.setTimeout(prefetchNextBatch, 80);
    return () => window.clearTimeout(timeoutId);
  }, [hasMoreItems, visibleCount]);

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
    <section className="relative overflow-hidden bg-surface-container-low px-4 py-24 sm:px-8 md:px-12 xl:px-16" style={{ opacity: 1, visibility: "visible" }}>
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          className="mx-auto mb-14 flex max-w-[920px] flex-col items-center text-center"
          {...getStaggerProps({ amount: 0.22, delayChildren: 0.04, staggerChildren: 0.08 })}
        >
          <motion.p className="font-label text-[10px] font-medium uppercase tracking-[0.32em] text-tertiary-container" {...getStaggerItemProps()}>
            ARQUIVO COMPLETO
          </motion.p>
          <motion.h1
            className="mt-5 font-headline text-[clamp(2rem,5.5vw,4.45rem)] font-black uppercase leading-[0.92] tracking-[0.08em] text-on-surface"
            {...getStaggerItemProps({ duration: 0.66 })}
          >
            Seleção Expandida
            <br />
            Trabalhos GOTA
          </motion.h1>
          <motion.span aria-hidden="true" className="mt-8 h-16 w-px bg-outline-variant/70" {...getStaggerItemProps({ delay: 0.06 })} />
          <motion.a
            className="mt-8 inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
            href={HOME_WORK_SECTION_HASH}
            {...getStaggerItemProps({ delay: 0.1 })}
          >
            Voltar ao Início
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {visibleItems.map((item, index) => (
            <motion.figure
              key={`${item.label}-${item.title}`}
              className="flex h-full flex-col overflow-hidden bg-surface-container-highest ring-1 ring-white/10"
              {...getRevealProps({ amount: 0.2, delay: Math.min(index % 3, 2) * 0.07 })}
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[4/5]">
                {!loadedIndexes.has(index) && <div className="absolute inset-0 animate-pulse bg-outline-variant/20" />}
                <img
                  alt={item.title}
                  className={`h-full w-full object-cover transition-opacity duration-500 ease-out ${loadedIndexes.has(index) ? "opacity-100" : "opacity-0"}`}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index < INITIAL_VISIBLE_ITEMS ? "eager" : "lazy"}
                  onError={() => markImageLoaded(index)}
                  onLoad={() => markImageLoaded(index)}
                  src={item.image}
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/72 via-transparent to-surface/38" />
              </div>
              <figcaption className="flex flex-1 flex-col border-t border-outline-variant/60 px-5 py-6 sm:px-6">
                <p className="font-label text-[10px] uppercase tracking-[0.24em] text-tertiary-container">
                  {item.label} / {item.category}
                </p>
                <h2 className="mt-3 font-headline text-[clamp(1.35rem,6vw,2rem)] font-black uppercase tracking-[0.04em] text-on-surface">{item.title}</h2>
                <p className="mt-3 max-w-[38ch] text-pretty text-[0.98rem] leading-relaxed text-on-surface-variant md:max-w-none">{item.description}</p>
              </figcaption>
            </motion.figure>
          ))}

          {Array.from({ length: skeletonCount }).map((_, skeletonIndex) => (
            <figure
              key={`skeleton-${visibleCount + skeletonIndex}`}
              className="overflow-hidden bg-surface-container-highest ring-1 ring-white/10"
            >
              <div className="relative aspect-[4/5] w-full animate-pulse bg-outline-variant/20 sm:aspect-[16/10] lg:aspect-[5/4] xl:aspect-[4/5]" />
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

        <motion.div className="mt-10 flex justify-center" {...getRevealProps({ delay: 0.08 })}>
          <a
            className="inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
            href={HOME_WORK_SECTION_HASH}
          >
            Voltar ao Início
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default MobileWorkArchivePage;
