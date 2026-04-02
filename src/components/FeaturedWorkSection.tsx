import { useEffect, useRef, useState } from "react";
import foto4 from "../foto 4.jpeg";
import foto5 from "../foto 5.jpeg";
import foto6 from "../foto 6.jpeg";
import foto7 from "../foto 7.jpeg";
import foto8 from "../foto 8.jpeg";
import foto9 from "../foto 9.jpeg";
import foto10 from "../foto 10.jpeg";
import foto11 from "../foto 11.jpeg";
import foto12 from "../foto 12.jpeg";
import foto13 from "../foto 13.jpeg";
import foto14 from "../foto 14.jpeg";
import foto15 from "../foto 15.jpeg";
import foto16 from "../foto 16.jpeg";
import foto17 from "../foto 17.jpeg";
import { getCloudinaryImageSources } from "../lib/cloudinaryImage";

const WORK_IMAGES = [foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17];
const WIDTH_PATTERN = [
  "w-[74vw] sm:w-[60vw] lg:w-[21rem] xl:w-[24rem]",
  "w-[76vw] sm:w-[64vw] lg:w-[26rem] xl:w-[30rem]",
  "w-[72vw] sm:w-[58vw] lg:w-[20rem] xl:w-[23rem]",
  "w-[70vw] sm:w-[56vw] lg:w-[23rem] xl:w-[26rem]",
];
const HEIGHT_PATTERN = [
  "h-[18rem] sm:h-[20rem] lg:h-[27rem]",
  "h-[18rem] sm:h-[20rem] lg:h-[33rem]",
  "h-[18rem] sm:h-[20rem] lg:h-[20rem]",
  "h-[18rem] sm:h-[20rem] lg:h-[27rem]",
];
const OFFSET_PATTERN = ["lg:mt-8", "lg:mt-0", "lg:-mt-8", "lg:mt-5"];
const POSITION_PATTERN = ["center 46%", "center 35%", "center 24%", "center 44%", "center 30%", "center 52%"];

const WORK_ITEMS = WORK_IMAGES.map((image, index) => {
  const number = index + 4;
  const padded = String(number).padStart(2, "0");

  return {
    heightClass: HEIGHT_PATTERN[index % HEIGHT_PATTERN.length],
    image,
    label: `${padded} / TRABALHO`,
    objectPosition: POSITION_PATTERN[index % POSITION_PATTERN.length],
    offsetClass: OFFSET_PATTERN[index % OFFSET_PATTERN.length],
    title: `Arquivo ${padded}`,
    widthClass: WIDTH_PATTERN[index % WIDTH_PATTERN.length],
  };
});

type MobileEditorialItem = {
  category: string;
  description: string;
  image: string;
  label: string;
  objectPosition: string;
  title: string;
};

const MOBILE_HOME_WORK_ITEMS: MobileEditorialItem[] = [
  {
    category: "BLACKWORK / FLORAL",
    description: "Composição em fluxo orgânico, construída para manter leitura elegante em movimento e presença precisa no close.",
    image: "https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067044/foto_4_k1gca4.jpg",
    label: "04 / TRABALHO",
    objectPosition: "center 46%",
    title: "Arquivo 04",
  },
  {
    category: "FINE LINE / ORNAMENTAL",
    description: "Direção de contraste controlado entre delicadeza e estrutura, com acabamento limpo e ritmo visual contínuo.",
    image: "https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067081/foto_7_ia0z5e.jpg",
    label: "07 / TRABALHO",
    objectPosition: "center 44%",
    title: "Arquivo 07",
  },
  {
    category: "BOTANICAL / AUTORAL",
    description: "Peça desenhada para valorizar profundidade e silêncio visual, preservando personalidade sem excesso gráfico.",
    image: "https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067123/foto_12_kylf5l.jpg",
    label: "12 / TRABALHO",
    objectPosition: "center 35%",
    title: "Arquivo 12",
  },
  {
    category: "EDITORIAL / MINIMAL",
    description: "Projeto com eixo tipográfico e gesto preciso, equilibrando impacto imediato com sofisticação atemporal.",
    image: "https://res.cloudinary.com/dy36sfdb3/image/upload/q_auto/f_auto/v1775067091/foto_8_wqybcz.jpg",
    label: "08 / TRABALHO",
    objectPosition: "center 30%",
    title: "Arquivo 08",
  },
];

type DragState = {
  isDragging: boolean;
  pointerId: number | null;
  startX: number;
  startScrollLeft: number;
};

function FeaturedWorkSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rulerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const momentumFrameRef = useRef<number | null>(null);
  const indicatorFrameRef = useRef<number | null>(null);
  const motionFrameRef = useRef<number | null>(null);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const progressTargetRef = useRef(0);
  const progressRef = useRef(0);
  const progressVelocityRef = useRef(0);
  const energyTargetRef = useRef(0);
  const energyRef = useRef(0);
  const lastScrollSampleRef = useRef({ time: 0, x: 0 });
  const dragRef = useRef<DragState>({
    isDragging: false,
    pointerId: null,
    startScrollLeft: 0,
    startX: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const stopMomentum = () => {
    if (momentumFrameRef.current !== null) {
      window.cancelAnimationFrame(momentumFrameRef.current);
      momentumFrameRef.current = null;
    }
  };

  const stopIndicatorLoop = () => {
    if (indicatorFrameRef.current !== null) {
      window.cancelAnimationFrame(indicatorFrameRef.current);
      indicatorFrameRef.current = null;
    }
  };

  const stopMotionLoop = () => {
    if (motionFrameRef.current !== null) {
      window.cancelAnimationFrame(motionFrameRef.current);
      motionFrameRef.current = null;
    }
  };

  const updateCardsMotion = () => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const trackRect = track.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;
    const influenceRadius = Math.max(trackRect.width * 0.62, 1);

    cardRefs.current.forEach((card) => {
      if (!card) {
        return;
      }

      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const deltaRaw = (cardCenterX - centerX) / influenceRadius;
      const delta = Math.max(-1, Math.min(1, deltaRaw));
      const proximity = 1 - Math.min(1, Math.abs(delta));
      const easedFocus = proximity * proximity * (3 - 2 * proximity);

      card.style.setProperty("--card-delta", delta.toFixed(4));
      card.style.setProperty("--card-focus", easedFocus.toFixed(4));
    });
  };

  const scheduleCardsMotion = () => {
    if (motionFrameRef.current !== null) {
      return;
    }

    motionFrameRef.current = window.requestAnimationFrame(() => {
      motionFrameRef.current = null;
      updateCardsMotion();
    });
  };

  const applyRulerVars = (progress: number, energy: number) => {
    const ruler = rulerRef.current;
    if (!ruler) {
      return;
    }

    ruler.style.setProperty("--trabalhos-progress", progress.toFixed(4));
    ruler.style.setProperty("--trabalhos-energy", energy.toFixed(4));
  };

  const startIndicatorLoop = () => {
    if (indicatorFrameRef.current !== null) {
      return;
    }

    const step = () => {
      const displacement = progressTargetRef.current - progressRef.current;
      const nextProgressVelocity = (progressVelocityRef.current + displacement * 0.16) * 0.78;
      const unclampedProgress = progressRef.current + nextProgressVelocity;
      const nextProgress = Math.max(0, Math.min(unclampedProgress, 1));
      const nextEnergyTarget = energyTargetRef.current * 0.94;
      const nextEnergyBlend = nextEnergyTarget > energyRef.current ? 0.16 : 0.08;
      const nextEnergy = energyRef.current + (nextEnergyTarget - energyRef.current) * nextEnergyBlend;

      progressRef.current = nextProgress;
      progressVelocityRef.current = nextProgressVelocity;
      energyTargetRef.current = nextEnergyTarget;
      energyRef.current = nextEnergy;
      applyRulerVars(nextProgress, nextEnergy);

      const settled =
        Math.abs(progressTargetRef.current - nextProgress) < 0.0006 &&
        Math.abs(progressVelocityRef.current) < 0.00025 &&
        nextEnergy < 0.01 &&
        nextEnergyTarget < 0.01;

      if (settled) {
        indicatorFrameRef.current = null;
        return;
      }

      indicatorFrameRef.current = window.requestAnimationFrame(step);
    };

    indicatorFrameRef.current = window.requestAnimationFrame(step);
  };

  const syncRulerToTrack = () => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;
    const nextProgress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    const now = performance.now();
    const sample = lastScrollSampleRef.current;
    const elapsed = Math.max(now - sample.time, 1);
    const velocity = Math.abs(track.scrollLeft - sample.x) / elapsed;

    progressTargetRef.current = Math.max(0, Math.min(nextProgress, 1));
    energyTargetRef.current = Math.max(energyTargetRef.current, Math.min(1, velocity * 0.14));
    lastScrollSampleRef.current = { time: now, x: track.scrollLeft };
    startIndicatorLoop();
  };

  const startMomentum = () => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const step = () => {
      const nextVelocity = velocityRef.current * 0.94;
      velocityRef.current = nextVelocity;

      if (Math.abs(nextVelocity) < 0.02) {
        momentumFrameRef.current = null;
        return;
      }

      track.scrollLeft -= nextVelocity * 16;
      syncRulerToTrack();
      scheduleCardsMotion();
      momentumFrameRef.current = window.requestAnimationFrame(step);
    };

    momentumFrameRef.current = window.requestAnimationFrame(step);
  };

  const stopDrag = () => {
    const track = trackRef.current;
    const { pointerId } = dragRef.current;

    if (track && pointerId !== null) {
      track.releasePointerCapture(pointerId);
    }

    dragRef.current.isDragging = false;
    dragRef.current.pointerId = null;
    setIsDragging(false);

    if (track && Math.abs(velocityRef.current) > 0.02) {
      startMomentum();
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || event.button !== 0) {
      return;
    }

    const track = trackRef.current;
    if (!track) {
      return;
    }

    stopMomentum();
    dragRef.current.isDragging = true;
    dragRef.current.pointerId = event.pointerId;
    dragRef.current.startX = event.clientX;
    dragRef.current.startScrollLeft = track.scrollLeft;
    lastXRef.current = event.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    track.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.isDragging) {
      return;
    }

    const track = trackRef.current;
    if (!track) {
      return;
    }

    event.preventDefault();
    const delta = event.clientX - dragRef.current.startX;
    track.scrollLeft = dragRef.current.startScrollLeft - delta;
    syncRulerToTrack();
    scheduleCardsMotion();

    const now = performance.now();
    const elapsed = now - lastTimeRef.current;
    if (elapsed > 0) {
      const moved = event.clientX - lastXRef.current;
      velocityRef.current = moved / elapsed;
      lastXRef.current = event.clientX;
      lastTimeRef.current = now;
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return () => {
        stopMomentum();
        stopIndicatorLoop();
        stopMotionLoop();
      };
    }

    lastScrollSampleRef.current = { time: performance.now(), x: track.scrollLeft };
    syncRulerToTrack();
    scheduleCardsMotion();

    const onResize = () => {
      syncRulerToTrack();
      scheduleCardsMotion();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      stopMomentum();
      stopIndicatorLoop();
      stopMotionLoop();
    };
  }, []);

  const renderMobileEditorialItem = (item: MobileEditorialItem, index: number) => (
    <figure
      key={`${item.label}-${item.title}`}
      className={`overflow-hidden bg-surface-container-highest ring-1 ring-white/10 ${index % 2 === 0 ? "reveal-delay-1" : "reveal-delay-2"}`}
      data-reveal
    >
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/10]">
        <img
          {...getCloudinaryImageSources(item.image, {
            sizes: "(min-width: 640px) 36rem, calc(100vw - 4rem)",
            widths: [320, 440, 620, 820, 1040],
          })}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out"
          decoding="async"
          fetchPriority={index === 0 ? "high" : "auto"}
          loading={index === 0 ? "eager" : "lazy"}
          style={{ objectPosition: item.objectPosition }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/72 via-transparent to-surface/38" />
      </div>
      <figcaption className="border-t border-outline-variant/60 px-5 py-6 sm:px-6">
        <p className="font-label text-[10px] uppercase tracking-[0.24em] text-tertiary-container">
          {item.label} / {item.category}
        </p>
        <h3 className="mt-3 font-headline text-[clamp(1.35rem,6vw,2rem)] font-black uppercase tracking-[0.04em] text-on-surface">{item.title}</h3>
        <p className="mt-3 max-w-[38ch] text-pretty text-[0.98rem] leading-relaxed text-on-surface-variant">{item.description}</p>
      </figcaption>
    </figure>
  );

  return (
    <section className="relative overflow-hidden bg-surface-container-low px-8 py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="lg:hidden">
          <div className="mx-auto mb-14 flex max-w-[920px] flex-col items-center text-center" data-reveal>
            <p className="font-label text-[10px] font-medium uppercase tracking-[0.32em] text-tertiary-container">TRABALHOS</p>
            <h2 className="mt-5 font-headline text-[clamp(2rem,5.5vw,4.45rem)] font-black uppercase leading-[0.92] tracking-[0.08em] text-on-surface">
              Arquivo Vivo
              <br />
              Trabalhos GOTA
            </h2>
            <span aria-hidden="true" className="mt-8 h-16 w-px bg-outline-variant/70" />
          </div>

          <div className="grid grid-cols-1 gap-10">{MOBILE_HOME_WORK_ITEMS.map(renderMobileEditorialItem)}</div>

          <div className="mt-10 flex justify-center" data-reveal>
            <a
              className="inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
              href="#/trabalhos/arquivo"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        <div className="mb-9 hidden gap-8 md:mb-10 lg:grid lg:grid-cols-12 lg:items-end lg:gap-10" data-reveal>
          <div className="lg:col-span-4">
            <p className="font-label text-[11px] uppercase tracking-[0.24em] text-tertiary-container">Trabalhos</p>
            <p className="mt-6 max-w-[30rem] text-sm leading-relaxed text-on-surface-variant">
              Sequência editorial em arrasto lateral, com recortes visuais e ritmo de composição para leitura imersiva.
            </p>
            <div aria-hidden="true" className="mt-6 h-px w-full max-w-[24rem] bg-outline-variant/45" />
          </div>
          <h2 className="hidden text-right font-headline text-[clamp(2.2rem,6.2vw,5.2rem)] font-black uppercase leading-[0.86] tracking-[0.01em] text-on-surface lg:col-span-8 lg:block">
            Arquivo Vivo
            <br />
            Trabalhos GOTA
            <br />
            <span className="text-tertiary-container">(SP/2026)</span>
          </h2>
        </div>

        <div className="relative hidden reveal-delay-1 lg:block" data-reveal>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-surface-container-low to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-surface-container-low to-transparent md:w-16" />

          <div
            ref={trackRef}
            className={`trabalhos-track ${isDragging ? "is-dragging cursor-grabbing select-none" : "cursor-grab"} flex gap-4 overflow-x-auto pb-2 pt-2 md:gap-5 md:pb-4`}
            data-stagger
            data-stagger-base="20"
            data-stagger-step="48"
            onDragStart={(event) => event.preventDefault()}
            onScroll={() => {
              syncRulerToTrack();
              scheduleCardsMotion();
            }}
            onPointerCancel={stopDrag}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDrag}
          >
            {WORK_ITEMS.map((item, index) => (
              <article
                key={`${item.label}-${item.title}`}
                className={`trabalhos-collage-item group relative shrink-0 overflow-hidden bg-surface-container-highest ring-1 ring-white/10 ${item.widthClass} ${item.heightClass} ${item.offsetClass}`}
                data-reveal
                data-reveal-item
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
              >
                <img
                  alt={item.title}
                  className="trabalhos-collage-media h-full w-full object-cover opacity-[0.9]"
                  decoding="async"
                  draggable={false}
                  loading={index < 2 ? "eager" : "lazy"}
                  src={item.image}
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/95 via-surface/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7">
                  <p className="font-label text-[10px] uppercase tracking-[0.22em] text-tertiary-container md:text-[11px]">{item.label}</p>
                  <h3 className="mt-2 font-headline text-[clamp(1.45rem,2.5vw,2.3rem)] font-black uppercase tracking-[0.04em] text-on-surface">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="trabalhos-ruler mt-8 h-10" ref={rulerRef}>
            <span aria-hidden="true" className="trabalhos-ruler-marker" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorkSection;
