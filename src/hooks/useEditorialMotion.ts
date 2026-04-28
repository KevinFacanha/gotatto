import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function useEditorialMotion(restartKey: string) {
  useEffect(() => {
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>("[data-speed], [data-parallax]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const parallaxState = parallaxElements.map((element) => ({
      current: 0,
      element,
      range: Number(element.dataset.speedRange ?? element.dataset.parallaxRange ?? 76),
      speed: Number(element.dataset.speed ?? element.dataset.parallax ?? 0.12),
      target: 0,
    }));

    let rafId = 0;
    let isMobile = window.matchMedia("(max-width: 767px)").matches;

    const updateScrollProgress = () => {
      const viewportHeight = window.innerHeight;
      const totalScrollable = document.body.scrollHeight - viewportHeight;
      const progress = totalScrollable > 0 ? window.scrollY / totalScrollable : 0;
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    const updateParallaxTargets = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      const mobileScale = isMobile ? 0.42 : 1;

      parallaxState.forEach((item) => {
        const rect = item.element.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > viewportHeight + 80) {
          item.target = 0;
          return;
        }

        const elementCenter = rect.top + rect.height / 2;
        const offset = clamp((viewportCenter - elementCenter) * item.speed * mobileScale, -item.range, item.range);
        item.target = offset;
      });
    };

    const animateParallax = () => {
      let hasActiveAnimation = false;

      parallaxState.forEach((item) => {
        item.current += (item.target - item.current) * 0.14;

        if (Math.abs(item.target - item.current) > 0.12) {
          hasActiveAnimation = true;
        }

        item.element.style.setProperty("--parallax-y", `${item.current.toFixed(2)}px`);
      });

      if (!hasActiveAnimation) {
        rafId = 0;
        return;
      }

      rafId = window.requestAnimationFrame(animateParallax);
    };

    const requestParallaxUpdate = () => {
      updateScrollProgress();
      updateParallaxTargets();

      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(animateParallax);
    };

    const onResize = () => {
      isMobile = window.matchMedia("(max-width: 767px)").matches;
      requestParallaxUpdate();
    };

    updateScrollProgress();

    if (prefersReducedMotion) {
      return;
    }

    requestParallaxUpdate();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", onResize);

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [restartKey]);
}

export default useEditorialMotion;
