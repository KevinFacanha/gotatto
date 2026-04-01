import foto3 from "../foto 3.jpeg";
import foto5 from "../foto 5.jpeg";
import foto6 from "../foto 6.jpeg";
import foto9 from "../foto 9.jpeg";
import foto10 from "../foto 10.jpeg";
import foto11 from "../foto 11.jpeg";
import foto13 from "../foto 13.jpeg";
import foto14 from "../foto 14.jpeg";
import foto15 from "../foto 15.jpeg";
import foto16 from "../foto 16.jpeg";
import foto17 from "../foto 17.jpeg";

type MobileEditorialItem = {
  category: string;
  description: string;
  image: string;
  label: string;
  objectPosition: string;
  title: string;
};

const MOBILE_ARCHIVE_WORK_ITEMS: MobileEditorialItem[] = [
  {
    category: "DIREÇÃO / AUTORAL",
    description: "Projeto orientado por gesto limpo e contraste delicado, com leitura segura em diferentes distâncias.",
    image: foto3,
    label: "03 / TRABALHO",
    objectPosition: "center 32%",
    title: "Arquivo 03",
  },
  {
    category: "ORNAMENTAL / FINE LINE",
    description: "Composição de linhas contínuas e pausas visuais para preservar fluidez e sofisticação no resultado final.",
    image: foto5,
    label: "05 / TRABALHO",
    objectPosition: "center 36%",
    title: "Arquivo 05",
  },
  {
    category: "BOTÂNICO / PRETO",
    description: "Estrutura vegetal com volume controlado, desenhada para manter impacto sem perder leveza editorial.",
    image: foto6,
    label: "06 / TRABALHO",
    objectPosition: "center 28%",
    title: "Arquivo 06",
  },
  {
    category: "GRÁFICO / CONTORNO",
    description: "Recorte preciso entre linhas e áreas de sombra, criando presença marcante com acabamento silencioso.",
    image: foto9,
    label: "09 / TRABALHO",
    objectPosition: "center 52%",
    title: "Arquivo 09",
  },
  {
    category: "NARRATIVO / AUTORAL",
    description: "Peça conduzida por narrativa visual contínua, equilibrando densidade e respiro no mesmo campo.",
    image: foto10,
    label: "10 / TRABALHO",
    objectPosition: "center 30%",
    title: "Arquivo 10",
  },
  {
    category: "TEXTURA / BLACKWORK",
    description: "Volume de preto aplicado com controle de textura para manter nitidez gráfica e assinatura contemporânea.",
    image: foto11,
    label: "11 / TRABALHO",
    objectPosition: "center 42%",
    title: "Arquivo 11",
  },
  {
    category: "EDITORIAL / FLUIDO",
    description: "Direção visual com linhas alongadas e ritmo orgânico, pensada para valorizar movimento natural do corpo.",
    image: foto13,
    label: "13 / TRABALHO",
    objectPosition: "center 44%",
    title: "Arquivo 13",
  },
  {
    category: "AUTORAL / MINIMAL",
    description: "Projeto de presença discreta e precisa, com desenho enxuto e contraste refinado de longa duração.",
    image: foto14,
    label: "14 / TRABALHO",
    objectPosition: "center 35%",
    title: "Arquivo 14",
  },
  {
    category: "FINE LINE / BOTÂNICO",
    description: "Construção leve com microdetalhes calibrados para leitura elegante em close e em visão ampla.",
    image: foto15,
    label: "15 / TRABALHO",
    objectPosition: "center 38%",
    title: "Arquivo 15",
  },
  {
    category: "COMPOSIÇÃO / EDITORIAL",
    description: "Recorte visual de alto equilíbrio entre forma e vazio, reforçando clareza e assinatura visual.",
    image: foto16,
    label: "16 / TRABALHO",
    objectPosition: "center 46%",
    title: "Arquivo 16",
  },
  {
    category: "ARQUIVO / ASSINATURA",
    description: "Síntese de direção autoral com acabamento limpo, proposta para manter impacto com sofisticação contínua.",
    image: foto17,
    label: "17 / TRABALHO",
    objectPosition: "center 34%",
    title: "Arquivo 17",
  },
];

function MobileWorkArchivePage() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low px-8 py-24 lg:hidden">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-14 flex max-w-[920px] flex-col items-center text-center" data-reveal>
          <p className="font-label text-[10px] font-medium uppercase tracking-[0.32em] text-tertiary-container">ARQUIVO COMPLETO</p>
          <h1 className="mt-5 font-headline text-[clamp(2rem,5.5vw,4.45rem)] font-black uppercase leading-[0.92] tracking-[0.08em] text-on-surface">
            Seleção Expandida
            <br />
            Trabalhos GOTA
          </h1>
          <span aria-hidden="true" className="mt-8 h-16 w-px bg-outline-variant/70" />
          <a
            className="mt-8 inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
            href="#/"
          >
            Voltar ao Início
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {MOBILE_ARCHIVE_WORK_ITEMS.map((item, index) => (
            <figure
              key={`${item.label}-${item.title}`}
              className={`overflow-hidden bg-surface-container-highest ring-1 ring-white/10 ${index % 2 === 0 ? "reveal-delay-1" : "reveal-delay-2"}`}
              data-reveal
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[16/10]">
                <img
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out"
                  src={item.image}
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/72 via-transparent to-surface/38" />
              </div>
              <figcaption className="border-t border-outline-variant/60 px-5 py-6 sm:px-6">
                <p className="font-label text-[10px] uppercase tracking-[0.24em] text-tertiary-container">
                  {item.label} / {item.category}
                </p>
                <h2 className="mt-3 font-headline text-[clamp(1.35rem,6vw,2rem)] font-black uppercase tracking-[0.04em] text-on-surface">{item.title}</h2>
                <p className="mt-3 max-w-[38ch] text-pretty text-[0.98rem] leading-relaxed text-on-surface-variant">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center" data-reveal>
          <a
            className="inline-flex items-center justify-center border border-outline-variant/70 px-6 py-3 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface transition-colors duration-500 hover:border-tertiary-container hover:text-tertiary-container"
            href="#/"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </section>
  );
}

export default MobileWorkArchivePage;
