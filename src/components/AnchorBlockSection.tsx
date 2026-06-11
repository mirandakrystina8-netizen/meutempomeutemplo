import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const AnchorBlockSection = () => (
  <SectionWrapper className="bg-primary text-center">
    <motion.h2
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-4 text-2xl font-bold uppercase text-primary-foreground md:text-4xl"
    >
      LEIA ISSO: talvez você só precise de um lugar guiado.
    </motion.h2>

    <p className="mx-auto mb-8 max-w-lg text-base text-primary-foreground/80 md:text-lg">
      Não um curso. Não uma palestra. Não mais um conteúdo pra consumir.
      Um espaço onde você faz uma atividade simples, com outras mulheres,
      e sai mais leve do que entrou.
    </p>

    <motion.a
      href="https://pay.kiwify.com.br/2hYgEb2"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block rounded-full bg-primary-foreground px-10 py-5 font-body text-base font-semibold tracking-wide text-primary shadow-lg transition-shadow hover:shadow-xl md:text-lg"
    >
      Quero entrar no grupo
    </motion.a>

    <p className="mt-6 text-sm text-primary-foreground/60">
      ou me chama no direct/WhatsApp com <strong>"TEMPLO"</strong>
    </p>
  </SectionWrapper>
);

export default AnchorBlockSection;
