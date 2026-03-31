function QuoteSection() {
  return (
    <section className="px-8 py-24 bg-surface-container-lowest">
      <div className="max-w-[1000px] mx-auto">
        <div data-reveal>
          <div className="relative py-12 parallax-soft" data-parallax="0.065">
            <div className="absolute top-0 left-0 w-16 h-1 bg-tertiary-container" />
            <blockquote className="font-headline text-4xl md:text-6xl font-light italic leading-tight text-on-surface tracking-tight">
              "Tatuagem não é só imagem. É presença, memória e{" "}
              <span className="text-tertiary-container font-black not-italic">identidade</span> marcada no corpo."
            </blockquote>
            <cite className="block mt-12 font-label text-sm uppercase tracking-widest text-white/40">— GOTATTO / MANIFESTO</cite>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
