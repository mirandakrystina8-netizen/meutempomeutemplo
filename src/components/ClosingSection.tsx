import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const ClosingSection = () => (
  <SectionWrapper className="bg-sage-light text-center">
    <h2 className="mb-8 text-3xl font-semibold italic text-foreground md:text-4xl">
      Pensa comigo…
    </h2>

    <div className="mb-10 space-y-4 text-base text-muted-foreground md:text-lg">
      <p>
        Você pode fechar essa página e continuar fazendo tudo igual.
        Mesma rotina, mesmos pensamentos, mesmo cansaço.
      </p>
      <p>
        Ou pode experimentar algo diferente. Duas vezes por mês,
        60 minutos, do conforto da sua casa.
      </p>
      <p className="text-xl font-semibold text-foreground">
        Não é sobre mudar de vida. É sobre dar uma pausa de verdade.
      </p>
    </div>

    <motion.a
      href="https://pay.kiwify.com.br/NX7DfBT"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block rounded-full bg-primary px-10 py-5 font-body text-base font-semibold tracking-wide text-primary-foreground shadow-lg transition-shadow hover:shadow-xl md:text-lg"
    >
      Quero entrar no grupo
    </motion.a>
  </SectionWrapper>
);

export default ClosingSection;
