import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import FeaturedWorkSection from "./components/FeaturedWorkSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import QuoteSection from "./components/QuoteSection";
import ServicesSection from "./components/ServicesSection";
import BrandSymbol from "./components/BrandSymbol";
import useEditorialMotion from "./hooks/useEditorialMotion";

const LOADER_TOTAL_MS = 5000;
const LOADER_HOLD_MS = 180;
const LOADER_FADE_MS = 620;
const LOADER_PROGRESS_MS = LOADER_TOTAL_MS - LOADER_HOLD_MS - LOADER_FADE_MS;

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);

  useEditorialMotion();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 1200 : LOADER_PROGRESS_MS;
    let rafId = 0;
    let exitTimeoutId = 0;
    let unmountTimeoutId = 0;
    const startTime = performance.now();

    const tick = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const linearProgress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);
      const nextProgress = Math.round(easedProgress * 100);

      setLoadingProgress((previous) => (nextProgress > previous ? nextProgress : previous));

      if (linearProgress < 1) {
        rafId = window.requestAnimationFrame(tick);
        return;
      }

      setLoadingProgress(100);
      exitTimeoutId = window.setTimeout(() => {
        setIsLoaderExiting(true);
        unmountTimeoutId = window.setTimeout(() => {
          setIsLoaderVisible(false);
        }, prefersReducedMotion ? 320 : LOADER_FADE_MS);
      }, prefersReducedMotion ? 80 : LOADER_HOLD_MS);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      if (exitTimeoutId) {
        window.clearTimeout(exitTimeoutId);
      }
      if (unmountTimeoutId) {
        window.clearTimeout(unmountTimeoutId);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaderVisible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoaderVisible]);

  return (
    <>
      {isLoaderVisible && (
        <div
          aria-live="polite"
          className={`fixed inset-0 z-[120] flex items-center justify-center bg-surface transition-opacity duration-[620ms] ${
            isLoaderExiting ? "opacity-0" : "opacity-100"
          }`}
          role="status"
        >
          <div
            className={`flex flex-col items-center gap-5 transition-all duration-[620ms] ${
              isLoaderExiting ? "translate-y-2 scale-[0.985] opacity-0" : "translate-y-0 scale-100 opacity-100"
            }`}
          >
            <BrandSymbol className="maquina-loader-float w-[clamp(5.4rem,10vw,8rem)] text-on-surface drop-shadow-lg" />
            <p className="font-label text-[clamp(0.78rem,1.25vw,0.96rem)] uppercase tracking-[0.28em] text-on-surface-variant">
              {String(loadingProgress).padStart(3, "0")}%
            </p>
          </div>
        </div>
      )}
      <Navbar />
      <main>
        <div id="hero" className="scroll-mt-28">
          <HeroSection />
        </div>
        <AboutSection />
        <div id="trabalhos" className="scroll-mt-28">
          <FeaturedWorkSection />
        </div>
        <div id="servicos" className="scroll-mt-28">
          <ServicesSection />
        </div>
        <div id="manifesto" className="scroll-mt-28">
          <QuoteSection />
        </div>
      </main>
      <div id="contato" className="scroll-mt-28">
        <Footer />
      </div>
    </>
  );
}

export default App;
