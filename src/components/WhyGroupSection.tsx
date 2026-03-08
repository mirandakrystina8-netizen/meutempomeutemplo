import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const benefits = [
  "percebe que não é só você",
  "não abandona no meio",
  "cria constância",
  "aprende com a experiência das outras",
  "diminui a autocrítica",
];

const WhyGroupSection = () => (
  <SectionWrapper className="bg-sage-light">
    <h2 className="mb-4 text-3xl font-semibold italic text-foreground md:text-4xl">
      Por que em grupo?
    </h2>
    <p className="mb-8 text-xl font-medium text-foreground">
      Porque sozinha você já tentou.
    </p>

    <p className="mb-4 text-lg text-muted-foreground">No grupo você:</p>
    <ul className="mb-8 space-y-3">
      {benefits.map((b) => (
        <li key={b} className="flex items-start gap-3 text-lg text-muted-foreground">
          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
          {b}
        </li>
      ))}
    </ul>

    <p className="mb-10 text-lg font-medium text-foreground">
      O grupo cria algo que sozinha é difícil manter:{" "}
      <span className="italic text-terracotta-deep">ritmo e continuidade.</span>
    </p>

    <div className="text-center">
      <CtaButton />
    </div>
  </SectionWrapper>
);

export default WhyGroupSection;
