import { useCallback, useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const isAlphaNumeric = (char: string) => /[a-z0-9]/i.test(char);

function useScrambleText(text: string, duration = 320) {
  const [displayText, setDisplayText] = useState(text);
  const rafIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  const stopScramble = useCallback(() => {
    if (rafIdRef.current !== null) {
      window.cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    startTimeRef.current = null;
    setDisplayText(text);
  }, [text]);

  const startScramble = useCallback(() => {
    if (reducedMotionRef.current) {
      setDisplayText(text);
      return;
    }

    if (rafIdRef.current !== null) {
      window.cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    startTimeRef.current = null;

    const tick = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const settledChars = Math.floor(progress * text.length);
      const scrambled = Array.from(text)
        .map((char, index) => {
          if (char === " " || !isAlphaNumeric(char)) {
            return char;
          }

          if (index < settledChars) {
            return char;
          }

          const randomIndex = Math.floor(Math.random() * SCRAMBLE_CHARS.length);
          return SCRAMBLE_CHARS[randomIndex];
        })
        .join("");

      setDisplayText(scrambled);

      if (progress < 1) {
        rafIdRef.current = window.requestAnimationFrame(tick);
        return;
      }

      stopScramble();
    };

    rafIdRef.current = window.requestAnimationFrame(tick);
  }, [duration, stopScramble, text]);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => {
      reducedMotionRef.current = mediaQuery.matches;

      if (mediaQuery.matches) {
        stopScramble();
      }
    };

    syncReducedMotion();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncReducedMotion);
      return () => mediaQuery.removeEventListener("change", syncReducedMotion);
    }

    mediaQuery.addListener(syncReducedMotion);
    return () => mediaQuery.removeListener(syncReducedMotion);
  }, [stopScramble]);

  useEffect(() => stopScramble, [stopScramble]);

  return { displayText, startScramble, stopScramble };
}

export default useScrambleText;
