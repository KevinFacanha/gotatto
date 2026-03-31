function Footer() {
  return (
    <footer className="w-full py-24 px-8 mt-24 bg-[#1C1B1C]">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 w-full" data-reveal>
        <div className="flex flex-col gap-8 max-w-md">
          <div className="text-lg font-bold text-white font-['Space_Grotesk'] uppercase tracking-tighter">GOTATTO</div>
          <p className="text-white/40 font-['GeistMono'] text-sm leading-relaxed uppercase">
            Estúdio autoral focado em tatuagem com linguagem visual forte, estética underground e construção de peças com identidade.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-[#FF4500] font-['GeistMono'] text-xs uppercase tracking-widest mb-2">Contato</span>
            <a
              className="text-white/40 hover:text-white transition-colors hover:translate-x-1 transition-transform font-['GeistMono'] text-xs uppercase tracking-widest"
              href="#"
            >
              Instagram
            </a>
            <a
              className="text-white/40 hover:text-white transition-colors hover:translate-x-1 transition-transform font-['GeistMono'] text-xs uppercase tracking-widest"
              href="#"
            >
              WhatsApp
            </a>
            <a
              className="text-white/40 hover:text-white transition-colors hover:translate-x-1 transition-transform font-['GeistMono'] text-xs uppercase tracking-widest"
              href="#"
            >
              E-mail
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#FF4500] font-['GeistMono'] text-xs uppercase tracking-widest mb-2">Estúdio</span>
            <a
              className="text-white/40 hover:text-white transition-colors hover:translate-x-1 transition-transform font-['GeistMono'] text-xs uppercase tracking-widest"
              href="#"
            >
              Agendamento
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1920px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 reveal-delay-2" data-reveal>
        <div className="font-['GeistMono'] text-[10px] text-white/20 uppercase tracking-[0.3em]">
          © 2026 GOTATTO. TODOS OS DIREITOS RESERVADOS.
        </div>
        <div className="font-['GeistMono'] text-[10px] text-white/20 uppercase tracking-[0.3em]">ARTE NA PELE.</div>
      </div>
    </footer>
  );
}

export default Footer;
