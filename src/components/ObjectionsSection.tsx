import SectionWrapper from "./SectionWrapper";

const objections = [
  "Saber desenhar — as atividades são simples, qualquer pessoa faz",
  "Ser disciplinada — é só aparecer, a gente guia tudo",
  "Se expor ou falar sobre sua vida — você participa do seu jeito",
  "Ter material caro — papel, lápis e canetinha bastam",
  "Estar no limite pra começar — não existe momento perfeito",
];

const ObjectionsSection = () => (
  <SectionWrapper className="bg-cream-dark">
    <h2 className="mb-4 text-3xl font-semibold italic text-foreground md:text-4xl">
      Antes de você se sabotar…
    </h2>
    <p className="mb-8 text-base text-muted-foreground md:text-lg">
      Eu sei que a cabeça já começou a inventar desculpas.
      Então deixa eu adiantar:
    </p>

    <p className="mb-6 text-xl font-semibold text-foreground">
      Você NÃO precisa:
    </p>

    <ul className="space-y-4">
      {objections.map((item) => (
        <li key={item} className="flex items-start gap-4 text-base text-muted-foreground md:text-lg">
          <span className="mt-0.5 text-lg text-terracotta">✕</span>
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
