import { useEffect, useMemo, useState } from "react";
import BrandSymbol from "./BrandSymbol";
import useScrambleText from "../hooks/useScrambleText";

const INSTAGRAM_URL = "https://www.instagram.com/gotattooink/";
const WHATSAPP_URL = "https://wa.me/5511942521850";

type ScrambleLabelProps = {
  baseText: string;
  displayText: string;
};

function ScrambleLabel({ baseText, displayText }: ScrambleLabelProps) {
  return (
    <span aria-hidden="true" className="relative inline-block align-middle">
      <span className="invisible">{baseText}</span>
      <span className="absolute inset-0">{displayText}</span>
    </span>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const startNowText = useScrambleText("INICIAR AGORA", 420);
  const menuText = useScrambleText("MENU", 420);
  const menuItems = useMemo(
    () => [
      { label: "Trabalhos", target: "trabalhos" },
      { label: "Serviços", target: "servicos" },
      { label: "Manifesto", target: "manifesto" },
      { label: "Contato", target: "contato" },
    ],
    [],
  );
  const secondaryItems = useMemo(
    () => [
      { isExternal: true, label: "Instagram", href: INSTAGRAM_URL },
      { isExternal: true, label: "WhatsApp", href: WHATSAPP_URL },
      { isExternal: false, label: "E-mail", href: "#" },
    ],
    [],
  );

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const closeMenuAndScroll = (id: string) => {
    setIsMenuOpen(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToSection(id);
      });
    });
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-4 py-6 sm:px-8 md:px-12 lg:px-16">
          <button
            aria-label="Iniciar agora"
            className="rounded-full border border-white/55 bg-black/12 px-7 py-[0.62rem] text-[11px] font-label font-medium uppercase tracking-[0.16em] text-white/95 backdrop-blur-[2px] transition-all duration-300 hover:border-white hover:bg-black/30"
            onMouseEnter={startNowText.startScramble}
            onClick={() => scrollToSection("contato")}
            type="button"
          >
            <ScrambleLabel baseText="INICIAR AGORA" displayText={startNowText.displayText} />
          </button>
          <button
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            className="flex items-center gap-3 rounded-full border border-white/55 bg-black/12 px-6 py-[0.62rem] text-[11px] font-label font-medium uppercase tracking-[0.16em] text-white/95 backdrop-blur-[2px] transition-all duration-300 hover:border-white hover:bg-black/30"
            onMouseEnter={menuText.startScramble}
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            <ScrambleLabel baseText="MENU" displayText={menuText.displayText} />
            <span aria-hidden="true" className="material-symbols-outlined text-base leading-none">
              menu
            </span>
          </button>
        </div>
      </nav>

      <div
        aria-hidden={!isMenuOpen}
        aria-modal="true"
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        role="dialog"
      >
        <div className="absolute inset-0 bg-surface" />
        <div
          className={`relative flex h-full flex-col px-4 py-6 sm:px-8 md:px-12 lg:px-16 transition-all duration-300 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <button
              aria-label="Start now"
              className="rounded-full border border-white/55 bg-black/12 px-7 py-[0.62rem] text-[11px] font-label font-medium uppercase tracking-[0.16em] text-white/95 backdrop-blur-[2px] transition-all duration-300 hover:border-white hover:bg-black/30"
              onClick={() => closeMenuAndScroll("contato")}
              type="button"
            >
              <span aria-hidden="true">Start now</span>
            </button>
            <button
              aria-label="Close menu"
              className="rounded-full border border-white/55 bg-black/12 px-7 py-[0.62rem] text-[11px] font-label font-medium uppercase tracking-[0.16em] text-white/95 backdrop-blur-[2px] transition-all duration-300 hover:border-white hover:bg-black/30"
              onClick={() => setIsMenuOpen(false)}
              type="button"
            >
              <span aria-hidden="true">Close</span>
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-10 text-center">
            <div className="flex flex-col items-center gap-5">
              <BrandSymbol className="w-[clamp(4.6rem,9vw,7.2rem)] text-on-surface drop-shadow-lg" />
              <p className="font-headline text-[clamp(2rem,5vw,3.6rem)] font-black uppercase tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-tertiary-container to-on-primary-fixed-variant">
                GOTATTO
              </p>
            </div>

            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.target}>
                  <button
                    className="font-headline text-[clamp(1.55rem,4.7vw,3.75rem)] font-black uppercase leading-[0.94] tracking-[0.055em] text-on-surface transition-opacity duration-300 hover:opacity-70"
                    onClick={() => closeMenuAndScroll(item.target)}
                    type="button"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 pb-2 text-center sm:flex-row sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-start">
              {secondaryItems.map((item) => (
                <a
                  key={item.label}
                  className="font-label text-xs uppercase tracking-[0.24em] text-on-surface-variant/80 transition-opacity duration-300 hover:opacity-100"
                  href={item.href}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  target={item.isExternal ? "_blank" : undefined}
                  onClick={(event) => {
                    if (!item.isExternal) {
                      event.preventDefault();
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              className="font-label text-xs uppercase tracking-[0.24em] text-on-surface-variant/80 transition-opacity duration-300 hover:opacity-100"
              onClick={() => closeMenuAndScroll("hero")}
              type="button"
            >
              Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
