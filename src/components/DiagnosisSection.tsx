import SectionWrapper from "./SectionWrapper";

const DiagnosisSection = () => (
  <SectionWrapper className="bg-cream-dark">
    <h2 className="mb-8 text-3xl font-semibold italic text-foreground md:text-4xl">
      O real problema é…
    </h2>

    <div className="space-y-4 text-base text-muted-foreground md:text-lg">
      <p>
        Ninguém te ensinou um jeito prático de desacelerar.
      </p>
      <p>
        Você tenta parar — e se sente culpada.
        Tenta descansar — e a cabeça dispara.
        Tenta dormir — e o corpo não desliga.
      </p>
      <p>
        Não é falta de vontade. É falta de um <strong className="text-foreground">espaço guiado</strong> onde
        você consiga, de fato, reduzir o ritmo. Sem pressão. Sem performance. Sem precisar dar conta de mais nada.
      </p>
      <p className="text-xl font-semibold text-foreground">
        É isso que o Meu Tempo, Meu Templo oferece.
      </p>
    </div>
  </SectionWrapper>
);

export default DiagnosisSection;
