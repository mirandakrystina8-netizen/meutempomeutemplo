import SectionWrapper from "./SectionWrapper";

const WhatIsSection = () => (
  <SectionWrapper>
    <h2 className="mb-8 text-3xl font-semibold italic text-foreground md:text-4xl">
      O que é o Meu Tempo, Meu Templo
    </h2>

    <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
      <p>
        <strong className="text-foreground">Meu Tempo, Meu Templo</strong> é uma vivência terapêutica online em grupo.
      </p>
      <p>
        São encontros conduzidos duas vezes por mês onde trabalhamos, na prática,
        padrões que mantêm a mente acelerada.
      </p>
      <div className="my-6 border-l-4 border-terracotta pl-5">
        <p className="font-medium text-foreground">Não é aula de arte.</p>
        <p className="font-medium text-foreground">Não é conversa solta.</p>
      </div>
      <p>
        São atividades guiadas que ajudam você a organizar pensamentos, reduzir a
        tensão mental e aprender a desacelerar.
      </p>
    </div>
  </SectionWrapper>
);

export default WhatIsSection;
