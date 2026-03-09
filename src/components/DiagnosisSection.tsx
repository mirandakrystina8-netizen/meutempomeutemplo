import SectionWrapper from "./SectionWrapper";

const DiagnosisSection = () => (
  <SectionWrapper>
    <h2 className="mb-8 text-3xl font-semibold italic text-foreground md:text-4xl">
      O real problema é…
    </h2>

    <div className="space-y-4 text-base text-muted-foreground md:text-lg">
      <p>
        Você não está cansada porque faz coisas demais.
        Você está cansada porque <span className="font-semibold text-foreground">sua mente nunca para</span>.
      </p>
      <p>
        Mesmo quando o corpo descansa, a cabeça continua no looping:
        pensando no que falta fazer, se cobrando por não dar conta,
        planejando, repassando, antecipando.
      </p>
      <p>
        O cansaço mental não se resolve com mais força de vontade.
        Se resolve com um espaço onde você consiga, de fato,{" "}
        <span className="font-semibold text-foreground">reduzir o ritmo</span>.
      </p>
    </div>
  </SectionWrapper>
);

export default DiagnosisSection;
