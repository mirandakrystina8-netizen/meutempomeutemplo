import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const AnchorBlockSection = () => (
  <SectionWrapper className="bg-primary text-center">
    <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-4xl">
      LEIA ISSO: É O QUE EU PRECISO!
    </h2>
    <p className="mb-8 text-lg text-primary-foreground/80">
      Se você chegou até aqui e sentiu que cada frase parecia ter sido escrita pra você,
      esse é o sinal. Não deixa passar.
    </p>

    <motion.a
      href="https://pay.kiwify.com.br/NX7DfBT"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block rounded-full bg-primary-foreground px-10 py-5 font-body text-base font-semibold tracking-wide text-primary shadow-lg transition-shadow hover:shadow-xl md:text-lg"
    >
      Quero entrar no grupo agora
    </motion.a>
  </SectionWrapper>
);

export default AnchorBlockSection;
