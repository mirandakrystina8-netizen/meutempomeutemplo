import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const ClosingSection = () => (
  <SectionWrapper className="bg-sage-light text-center">
    <h2 className="mb-8 text-3xl font-semibold italic text-foreground md:text-4xl">
      Pensa comigo…
    </h2>

    <div className="mx-auto mb-10 max-w-lg space-y-4 text-base text-muted-foreground md:text-lg">
      <p>
        Quanto vale dormir melhor?
      </p>
      <p>
        Quanto vale acordar sem aquela pressão na cabeça?
      </p>
      <p>
        Quanto vale ter um espaço só seu, duas vezes por mês, pra sair do looping?
      </p>
      <p className="text-xl font-semibold text-foreground">
        Você pode continuar tentando sozinha.
        Ou pode experimentar um jeito diferente.
      </p>
    </div>

    <motion.a
      href="https://pay.kiwify.com.br/2hYgEb2"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block rounded-full bg-primary px-10 py-5 font-body text-base font-semibold tracking-wide text-primary-foreground shadow-lg transition-shadow hover:shadow-xl md:text-lg"
    >
      Quero entrar no grupo
    </motion.a>

    <p className="mt-4 text-sm text-muted-foreground">
      ou me chama no direct/WhatsApp com <strong className="text-foreground">"TEMPLO"</strong>
    </p>
  </SectionWrapper>
);

export default ClosingSection;
