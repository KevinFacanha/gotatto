import arteVideo from "../arte.mp4";

type ArtworkEditorialItem = {
  description: string;
  label: string;
  title: string;
};

const ARTWORK_EDITORIAL_ITEMS: ArtworkEditorialItem[] = [
  {
    description: "Narrativa visual com contraste controlado e recorte de luz para construir presenca grafica em grande formato.",
    label: "01 / OBRA",
    title: "Estudo de Composicao",
  },
  {
    description: "Serie em desenvolvimento com eixo autoral, textura manual e leitura de impacto pensada para ambiente editorial.",
    label: "02 / OBRA",
    title: "Direcao de Volume",
  },
  {
    description: "Curadoria em andamento para desdobrar o universo GOTATTO em suportes fisicos com assinatura consistente.",
    label: "03 / OBRA",
    title: "Arquivo em Curadoria",
  },
];

function ArtworksArchivePage() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low px-8 py-24" style={{ opacity: 1, visibility: "visible" }}>
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-14 flex max-w-[920px] flex-col items-center text-center" data-reveal>
          <p className="font-label text-[10px] font-medium uppercase tracking-[0.32em] text-tertiary-container">ARQUIVO DE OBRAS</p>
          <h1 className="mt-5 font-headline text-[clamp(2rem,5.5vw,4.45rem)] font-black uppercase leading-[0.92] tracking-[0.08em] text-on-surface">
            Colecao Editorial
            <br />
            Quadros GOTA
          </h1>
          <span aria-hidden="true" className="mt-8 h-16 w-px bg-outline-variant/70" />
          <a
            className="mt-8 inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
            href="#/"
          >
            Voltar ao Inicio
          </a>
        </div>

        <figure className="relative isolate overflow-hidden bg-surface-container-highest ring-1 ring-white/10 reveal-delay-1" data-reveal>
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/9]">
            <video
              autoPlay
              className="h-full w-full object-cover brightness-[0.42] contrast-[1.08] saturate-[0.9] md:brightness-[0.48]"
              loop
              muted
              playsInline
              preload="metadata"
              src={arteVideo}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/62 to-surface/84" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/92 via-transparent to-surface/62" />
          </div>
          <figcaption className="border-t border-outline-variant/60 px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
            <p className="font-label text-[10px] uppercase tracking-[0.24em] text-tertiary-container">PROLOGO / OBRAS AUTORAIS</p>
            <h2 className="mt-3 font-headline text-[clamp(1.5rem,4.2vw,2.6rem)] font-black uppercase tracking-[0.04em] text-on-surface">
              Presenca Cinematografica Em Tela
            </h2>
            <p className="mt-3 max-w-[58ch] text-pretty text-[0.98rem] leading-relaxed text-on-surface-variant">
              Esta pagina prepara o fluxo editorial dos quadros. A curadoria visual segue ativa para entrada das obras finais com legenda
              dedicada em cada peca.
            </p>
          </figcaption>
        </figure>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ARTWORK_EDITORIAL_ITEMS.map((item, index) => (
            <article
              key={`${item.label}-${item.title}`}
              className={`border-l-2 px-5 py-7 ${index === 0 ? "border-tertiary-container bg-surface-container-highest/55" : "border-outline-variant/60 bg-surface-container-high/45"} ring-1 ring-white/5`}
              data-reveal
            >
              <p className={`font-label text-[10px] uppercase tracking-[0.24em] ${index === 0 ? "text-tertiary-container" : "text-on-surface-variant/85"}`}>
                {item.label}
              </p>
              <h3 className="mt-3 font-headline text-[1.35rem] font-black uppercase tracking-[0.04em] text-on-surface">{item.title}</h3>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-on-surface-variant">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArtworksArchivePage;
