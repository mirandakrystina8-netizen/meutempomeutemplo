import SectionWrapper from "./SectionWrapper";

const themes = [
  "excesso de pensamento",
  "autossabotagem",
  "culpa por descansar",
  "dificuldade de finalizar tarefas",
  "tensão acumulada no corpo",
];

const ThemesSection = () => (
  <SectionWrapper className="bg-cream-dark">
    <h2 className="mb-4 text-3xl font-semibold italic text-foreground md:text-4xl">
      Temas que trabalhamos na vivência
    </h2>
    <p className="mb-8 text-lg text-muted-foreground">
      Cada encontro trabalha um padrão mental diferente.
    </p>

    <p className="mb-4 text-lg font-medium text-foreground">Exemplos de temas:</p>
    <ul className="mb-8 space-y-3">
      {themes.map((t) => (
        <li key={t} className="flex items-start gap-3 text-lg text-muted-foreground">
          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-terracotta" />
          {t}
        </li>
      ))}
    </ul>

    <p className="text-lg text-muted-foreground">
      O objetivo é aprender a reconhecer esses padrões e{" "}
      <span className="font-semibold text-foreground">reduzir o ritmo mental.</span>
    </p>
  </SectionWrapper>
);

export default ThemesSection;
