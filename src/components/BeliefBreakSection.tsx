import SectionWrapper from "./SectionWrapper";

const beliefs = [
  "Que você precisa de mais disciplina pra dar conta de tudo",
  "Que descansar é coisa de quem não tem responsabilidade",
  "Que se você não está produzindo, está perdendo tempo",
  "Que é só uma fase e vai passar sozinha",
];

const BeliefBreakSection = () => (
  <SectionWrapper className="bg-cream-dark">
    <h2 className="mb-10 text-3xl font-semibold italic text-foreground md:text-4xl">
      Te fizeram acreditar que…
    </h2>

    <ul className="space-y-5">
      {beliefs.map((item) => (
        <li key={item} className="flex items-start gap-4 text-lg text-muted-foreground">
          <span className="mt-1.5 text-xl text-terracotta">✕</span>
          {item}
        </li>
      ))}
    </ul>

    <p className="mt-10 text-center text-lg font-semibold text-foreground">
      Nada disso é verdade. E lá no fundo, você já sabe disso.
    </p>
  </SectionWrapper>
);

export default BeliefBreakSection;
