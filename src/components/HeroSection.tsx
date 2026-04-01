import { useEffect, useRef } from "react";
import heroVideo from "../video1.mp4";
import BrandSymbol from "./BrandSymbol";

const MOBILE_HERO_VIDEO_URL = "https://res.cloudinary.com/dy36sfdb3/video/upload/q_auto/f_auto/v1775067181/video1_wxd8cx.mp4";

function HeroSection() {
  const videoFrameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoFrame = videoFrameRef.current;
    const video = videoRef.current;

    if (!videoFrame || !video) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    let rafId = 0;

    const updateVideoDepth = () => {
      const maxScroll = Math.max(window.innerHeight * 0.9, 480);
      const progress = Math.min(window.scrollY / maxScroll, 1);
      const scale = isMobile ? 1.04 : 1.16 - progress * 0.14;
      const translateY = isMobile ? 0 : progress * 30;
      const opacity = isMobile ? 0.92 : 0.98 - progress * 0.1;
      const blur = isMobile ? 0 : progress * 1.5;

      videoFrame.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      videoFrame.style.opacity = `${opacity}`;
      videoFrame.style.filter = `blur(${blur}px)`;
    };

    const onScrollOrResize = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        updateVideoDepth();
        rafId = 0;
      });
    };

    const playVideo = () => {
      const playAttempt = video.play();

      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {
          // Browsers may block autoplay briefly before media is ready.
        });
      }
    };

    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    playVideo();
    video.addEventListener("canplay", playVideo);
    updateVideoDepth();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      video.removeEventListener("canplay", playVideo);
      video.pause();

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-surface pt-28 pb-16">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="relative w-full h-full overflow-hidden will-change-transform" ref={videoFrameRef}>
          <video
            autoPlay
            className="h-full w-full object-cover brightness-[0.48] contrast-[1.08] saturate-[0.84] md:brightness-[0.52]"
            loop
            muted
            playsInline
            preload="auto"
            ref={videoRef}
          >
            <source media="(max-width: 767px)" src={MOBILE_HERO_VIDEO_URL} type="video/mp4" />
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-surface/58" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/62 to-surface/88" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/88 via-transparent to-surface/74" />
          <div className="absolute inset-0 bg-gradient-to-l from-tertiary-container/15 to-transparent" />
        </div>
        <div className="parallax-soft absolute -left-24 top-[16%] h-[20rem] w-[20rem] rounded-full bg-tertiary-container/14 blur-[145px]" data-parallax="0.22" />
        <div
          className="parallax-soft absolute -right-40 top-[18%] h-[24rem] w-[24rem] rounded-full bg-on-surface/8 blur-[160px]"
          data-parallax="-0.16"
        />
        <div
          className="parallax-soft absolute left-[32%] bottom-[-7rem] h-[16rem] w-[24rem] rounded-full bg-primary-fixed/10 blur-[132px]"
          data-parallax="0.1"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-11rem)] w-full max-w-[1600px] items-center px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="relative flex w-full items-center justify-center">
          <div className="absolute left-0 right-0 top-[16%] flex items-center justify-between gap-6 px-2 text-center lg:hidden">
            <p className="font-label text-[10px] font-medium tracking-[0.22em] text-on-surface-variant/85 uppercase reveal-delay-1" data-reveal>
              TRAÇO PRECISO
            </p>
            <p className="font-label text-[10px] font-medium tracking-[0.22em] text-on-surface-variant/85 uppercase reveal-delay-1" data-reveal>
              PRESENÇA VISUAL
            </p>
          </div>

          <p
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 text-left font-label text-[clamp(0.72rem,0.95vw,0.94rem)] font-medium tracking-[0.18em] text-on-surface-variant/85 uppercase lg:block reveal-delay-2"
            data-reveal
          >
            Arte que atravessa o tempo
          </p>
          <p
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-right font-label text-[clamp(0.72rem,0.95vw,0.94rem)] font-medium tracking-[0.18em] text-on-surface-variant/85 uppercase lg:block reveal-delay-2"
            data-reveal
          >
            Composição autoral absoluta
          </p>

          <div className="relative text-center">
            <div className="mx-auto mb-7 flex w-fit justify-center reveal-delay-2" data-reveal>
              <BrandSymbol />
            </div>

            <h1
              className="font-headline text-[clamp(2.55rem,8.7vw,6.7rem)] font-black uppercase leading-[0.92] tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-tertiary-container to-on-primary-fixed-variant reveal-delay-3"
              data-reveal
            >
              GOTATTO
            </h1>
            <p
              className="mt-5 font-label text-[clamp(0.58rem,0.92vw,0.8rem)] font-medium uppercase tracking-[0.44em] text-on-surface-variant/80 reveal-delay-4"
              data-reveal
            >
              São Paulo / Estúdio Autoral
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
