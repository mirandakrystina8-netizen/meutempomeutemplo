import SectionWrapper from "./SectionWrapper";

const objections = [
  "Saber desenhar ou ter qualquer habilidade artística",
  "Ter experiência com terapia ou grupos",
  "Mostrar seus desenhos pra ninguém",
  "Ter muito tempo livre — são só 2 encontros por mês",
  "Estar num momento \"bom\" pra começar — não existe momento perfeito",
];

const ObjectionsSection = () => (
  <SectionWrapper className="bg-cream-dark">
    <h2 className="mb-4 text-3xl font-semibold italic text-foreground md:text-4xl">
      Antes que você queira se sabotar…
    </h2>
    <p className="mb-8 text-lg text-muted-foreground">
      Eu sei que a cabeça já começou a inventar desculpas. Então deixa eu adiantar:
    </p>

    <p className="mb-6 text-xl font-semibold text-foreground">
      Você NÃO precisa:
    </p>

    <ul className="space-y-4">
      {objections.map((item) => (
        <li key={item} className="flex items-start gap-4 text-base text-muted-foreground md:text-lg">
          <span className="mt-1 text-lg text-sage">→</span>
          {item}
        </li>
      ))}
    </ul>

    <p className="mt-10 text-center text-lg font-medium text-foreground">
      Você só precisa querer dar uma pausa de verdade.
    </p>
  </SectionWrapper>
);

export default ObjectionsSection;
