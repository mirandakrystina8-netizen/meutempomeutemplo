import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const FinalCtaSection = () => (
  <SectionWrapper className="bg-sage-light text-center">
    <h2 className="mb-6 text-3xl font-semibold italic text-foreground md:text-4xl">
      Se sua mente não para…
    </h2>

    <div className="mb-10 space-y-3 text-lg text-muted-foreground">
      <p>Talvez você não precise de mais força.</p>
      <p>Talvez precise de um espaço estruturado para desacelerar.</p>
      <p className="font-semibold text-foreground">
        Meu Tempo, Meu Templo é esse espaço.
      </p>
    </div>

    <CtaButton />
  </SectionWrapper>
);

export default FinalCtaSection;
