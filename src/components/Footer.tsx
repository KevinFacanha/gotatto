import { motion } from "framer-motion";
import { getRevealProps, getStaggerItemProps, getStaggerProps } from "../lib/scrollReveal";

const INSTAGRAM_URL = "https://www.instagram.com/gotattooink/";
const WHATSAPP_URL = "https://wa.me/5511942521850";
const EMAIL_URL = "mailto:gotattoo_@outlook.com";

function Footer() {
  return (
    <footer className="mt-24 w-full bg-[#1C1B1C] px-4 py-24 sm:px-8 md:px-12 xl:px-16">
      <motion.div
        className="mx-auto flex w-full max-w-[1920px] flex-col items-start justify-between gap-12 lg:flex-row"
        {...getStaggerProps({ amount: 0.22, delayChildren: 0.04, staggerChildren: 0.1 })}
      >
        <motion.div className="max-w-md flex flex-col gap-8" {...getStaggerItemProps()}>
          <div className="text-lg font-bold text-white font-['Space_Grotesk'] uppercase tracking-tighter">GOTA TATTOO</div>
          <p className="text-white/40 font-['GeistMono'] text-sm leading-relaxed uppercase">
            Estúdio autoral focado em tatuagem com linguagem visual forte, estética underground e construção de peças com identidade.
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-16" {...getStaggerItemProps({ delay: 0.08 })}>
          <div className="flex flex-col gap-4">
            <span className="text-[#FF4500] font-['GeistMono'] text-xs uppercase tracking-widest mb-2">Contato</span>
            <a
              className="text-white/40 hover:text-white transition-colors hover:translate-x-1 transition-transform font-['GeistMono'] text-xs uppercase tracking-widest"
              href={INSTAGRAM_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="text-white/40 hover:text-white transition-colors hover:translate-x-1 transition-transform font-['GeistMono'] text-xs uppercase tracking-widest"
              href={WHATSAPP_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
            <a
              className="text-white/40 hover:text-white transition-colors hover:translate-x-1 transition-transform font-['GeistMono'] text-xs uppercase tracking-widest"
              href={EMAIL_URL}
            >
              E-mail
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#FF4500] font-['GeistMono'] text-xs uppercase tracking-widest mb-2">Estúdio</span>
            <a
              className="text-white/40 hover:text-white transition-colors hover:translate-x-1 transition-transform font-['GeistMono'] text-xs uppercase tracking-widest"
              href="https://wa.me/5511942521850?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20agendar%20uma%20tattoo"
            >
              Agendamento
            </a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="mx-auto mt-24 flex max-w-[1920px] flex-col justify-between gap-8 border-t border-white/5 pt-8 md:flex-row"
        {...getRevealProps({ delay: 0.1 })}
      >
        <div className="font-['GeistMono'] text-[10px] text-white/20 uppercase tracking-[0.3em]">
          © 2026 GOTA TATTOO. TODOS OS DIREITOS RESERVADOS.
        </div>
        <div className="font-['GeistMono'] text-[10px] text-white/20 uppercase tracking-[0.3em]">ARTE NA PELE.</div>
      </motion.div>
    </footer>
  );
}

export default Footer;
