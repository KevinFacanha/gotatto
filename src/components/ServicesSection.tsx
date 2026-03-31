function ServicesSection() {
  return (
    <section className="px-8 py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div data-reveal>
          <h2 className="font-headline text-6xl font-black tracking-tighter uppercase sticky top-32">
            Universo
            <br />
            Gotatto.
          </h2>
        </div>
        <div className="space-y-24">
          <div className="border-l-2 border-tertiary-container pl-12 editorial-service-block reveal-delay-1" data-reveal>
            <p className="font-label text-xs text-tertiary-container tracking-widest uppercase mb-4">ÁREA 01</p>
            <h4 className="font-headline text-3xl font-bold uppercase mb-6">Tatuagem Autoral</h4>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Criação de peças com identidade visual forte, composição pensada para o corpo e desenvolvimento personalizado a partir da
              ideia do cliente.
            </p>
          </div>
          <div className="border-l-2 border-outline-variant/30 pl-12 hover:border-tertiary-container transition-colors editorial-service-block reveal-delay-2" data-reveal>
            <p className="font-label text-xs text-white/40 tracking-widest uppercase mb-4">ÁREA 02</p>
            <h4 className="font-headline text-3xl font-bold uppercase mb-6">Projeto Personalizado</h4>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Desenvolvimento de conceito, referência, encaixe e linguagem estética para cada tatuagem, respeitando anatomia, intenção e
              presença visual.
            </p>
          </div>
          <div className="border-l-2 border-outline-variant/30 pl-12 hover:border-tertiary-container transition-colors editorial-service-block reveal-delay-3" data-reveal>
            <p className="font-label text-xs text-white/40 tracking-widest uppercase mb-4">ÁREA 03</p>
            <h4 className="font-headline text-3xl font-bold uppercase mb-6">Obras / Quadros</h4>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Expansão futura da marca com peças visuais e obras autorais, levando a mesma assinatura estética da pele para outros
              suportes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
