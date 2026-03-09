import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const possibilities = [
  "Existe um jeito prático de diminuir o barulho da cabeça — sem meditação, sem remédio, sem precisar de férias",
  "Você pode aprender a desacelerar usando atividades simples com papel e caneta",
  "Outras mulheres como você já estão fazendo isso — e dormindo melhor",
  "Parar não é preguiça. É o primeiro passo pra sair do looping",
];

const NewPossibilitySection = () => (
  <SectionWrapper className="bg-sage-light">
    <h2 className="mb-10 text-3xl font-semibold italic text-foreground md:text-4xl">
      Mas e se existisse outro jeito?
    </h2>

    <ul className="space-y-5">
      {possibilities.map((item) => (
        <li key={item} className="flex items-start gap-4 text-base text-muted-foreground md:text-lg">
          <span className="mt-0.5 text-xl text-sage">✦</span>
          {item}
        </li>
      ))}
    </ul>

    <div className="mt-10 text-center">
      <motion.a
        href="https://pay.kiwify.com.br/NX7DfBT"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block rounded-full bg-primary px-8 py-4 font-body text-base font-semibold tracking-wide text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
      >
        Quero entrar no grupo
      </motion.a>
    </div>
  </SectionWrapper>
);

export default NewPossibilitySection;
