import SectionWrapper from "./SectionWrapper";

const details = [
  "2 encontros online por mês",
  "encontros ao vivo pelo Google Meet",
  "atividades guiadas com papel e caneta",
  "duração média de 60 a 90 minutos",
];

const materials = ["papel", "lápis", "caneta", "canetinhas"];

const HowItWorksSection = () => (
  <SectionWrapper>
    <h2 className="mb-8 text-3xl font-semibold italic text-foreground md:text-4xl">
      Como funciona
    </h2>

    <ul className="mb-10 space-y-3">
      {details.map((d) => (
        <li key={d} className="flex items-start gap-3 text-lg text-muted-foreground">
          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
          {d}
        </li>
      ))}
    </ul>

    <p className="mb-4 text-lg font-medium text-foreground">Materiais simples:</p>
    <div className="flex flex-wrap gap-3">
      {materials.map((m) => (
        <span
          key={m}
          className="rounded-full bg-card px-5 py-2 text-sm font-medium text-muted-foreground shadow-sm"
        >
          {m}
        </span>
      ))}
    </div>

    <p className="mt-6 text-base italic text-muted-foreground">
      Não precisa saber desenhar.
    </p>
  </SectionWrapper>
);

export default HowItWorksSection;
