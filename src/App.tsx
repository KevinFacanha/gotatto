import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import FeaturedWorkSection from "./components/FeaturedWorkSection";
import HeroSection from "./components/HeroSection";
import MobileWorkArchivePage from "./components/MobileWorkArchivePage";
import Navbar from "./components/Navbar";
import QuoteSection from "./components/QuoteSection";
import ServicesSection from "./components/ServicesSection";
import BrandSymbol from "./components/BrandSymbol";
import useEditorialMotion from "./hooks/useEditorialMotion";

const LOADER_TOTAL_MS = 5000;
const LOADER_HOLD_MS = 180;
const LOADER_FADE_MS = 620;
const LOADER_PROGRESS_MS = LOADER_TOTAL_MS - LOADER_HOLD_MS - LOADER_FADE_MS;
const MOBILE_ARCHIVE_ROUTE = "/trabalhos/arquivo";

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);
  const [hashRoute, setHashRoute] = useState(() => window.location.hash.replace(/^#/, "") || "/");
  const [isMobileViewport, setIsMobileViewport] = useState(() => window.matchMedia("(max-width: 1023px)").matches);
  const previousHashRouteRef = useRef(hashRoute);
  const isMobileArchiveRoute = isMobileViewport && hashRoute === MOBILE_ARCHIVE_ROUTE;

  useEditorialMotion(isMobileArchiveRoute ? "mobile-archive-route" : "home-route");

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

  useEffect(() => {
    const onHashChange = () => {
      setHashRoute(window.location.hash.replace(/^#/, "") || "/");
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const onViewportChange = (event: MediaQueryListEvent) => {
      setIsMobileViewport(event.matches);
    };

    setIsMobileViewport(mediaQuery.matches);
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", onViewportChange);
    } else {
      mediaQuery.addListener(onViewportChange);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", onViewportChange);
      } else {
        mediaQuery.removeListener(onViewportChange);
      }
    };
  }, []);

  const scrollToTopNow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const resetInteractionLocks = () => {
    document.body.style.overflow = "";
    document.body.style.pointerEvents = "";
    document.documentElement.style.overflow = "";
    document.documentElement.style.pointerEvents = "";
  };

  useEffect(() => {
    if (!isMobileArchiveRoute) {
      return;
    }

    // Ensure no visual lock/overlay from home leaks into the mobile archive route.
    setIsLoaderExiting(false);
    setIsLoaderVisible(false);
    resetInteractionLocks();
    window.dispatchEvent(new CustomEvent("gotatto:force-close-overlays"));

    scrollToTopNow();
    const rafId = window.requestAnimationFrame(scrollToTopNow);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [isMobileArchiveRoute]);

  useEffect(() => {
    const previousHashRoute = previousHashRouteRef.current;
    const isReturningFromMobileArchive = isMobileViewport && previousHashRoute === MOBILE_ARCHIVE_ROUTE && hashRoute === "/";

    if (isReturningFromMobileArchive) {
      resetInteractionLocks();
      window.dispatchEvent(new CustomEvent("gotatto:force-close-overlays"));
      scrollToTopNow();

      window.requestAnimationFrame(() => {
        scrollToTopNow();
        window.requestAnimationFrame(() => {
          document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
            element.classList.add("is-visible");
          });
        });
      });
    }

    previousHashRouteRef.current = hashRoute;
  }, [hashRoute, isMobileViewport]);

  return (
    <>
      {isLoaderVisible && !isMobileArchiveRoute && (
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
      {!isMobileArchiveRoute && <Navbar />}
      {isMobileArchiveRoute ? (
        <main>
          <MobileWorkArchivePage />
        </main>
      ) : (
        <>
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
      )}
    </>
  );
}

export default App;
