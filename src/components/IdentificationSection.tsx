import SectionWrapper from "./SectionWrapper";

const items = [
  "vive pensando em várias coisas ao mesmo tempo",
  "começa uma tarefa e já está pensando na próxima",
  "tenta descansar mas a mente não desliga",
  "se cobra o tempo todo",
  "sente que nunca faz o suficiente",
];

const IdentificationSection = () => (
  <SectionWrapper className="bg-cream-dark">
    <h2 className="mb-8 text-3xl font-semibold italic text-foreground md:text-4xl">
      Se você…
    </h2>

    <ul className="mb-10 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground">
          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-terracotta" />
          {item}
        </li>
      ))}
    </ul>

    <div className="space-y-3 text-center">
      <p className="text-xl font-semibold text-foreground">Você não é a única.</p>
      <p className="text-lg text-muted-foreground">Muitas mulheres vivem exatamente assim.</p>
      <p className="text-lg font-medium text-secondary-foreground">
        E tentar resolver isso sozinha quase nunca funciona.
      </p>
    </div>
  </SectionWrapper>
);

export default IdentificationSection;
