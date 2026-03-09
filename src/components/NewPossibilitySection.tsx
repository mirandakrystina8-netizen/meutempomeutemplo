import SectionWrapper from "./SectionWrapper";

const possibilities = [
  "Você pode desacelerar sem precisar de férias ou de sumir do mundo",
  "Existe um jeito de diminuir o barulho mental usando atividades simples",
  "Você não precisa resolver isso sozinha — e nem deveria",
  "Parar não é fraqueza. É o primeiro passo pra sair do looping",
];

const NewPossibilitySection = () => (
  <SectionWrapper>
    <h2 className="mb-10 text-3xl font-semibold italic text-foreground md:text-4xl">
      Mas e se eu te dissesse que existe outro caminho?
    </h2>

    <ul className="space-y-5">
      {possibilities.map((item) => (
        <li key={item} className="flex items-start gap-4 text-lg text-muted-foreground">
          <span className="mt-1.5 text-xl text-sage">✓</span>
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

import { motion } from "framer-motion";
export default NewPossibilitySection;
