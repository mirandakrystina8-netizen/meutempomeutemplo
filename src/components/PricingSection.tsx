import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const PricingSection = () => (
  <SectionWrapper id="investimento">
    <div className="text-center">
      <h2 className="mb-10 text-3xl font-semibold italic text-foreground md:text-4xl">
        Investimento
      </h2>

      <motion.div
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-sm rounded-2xl bg-card p-10 shadow-xl"
      >
        <p className="mb-1 text-base text-muted-foreground">Plano trimestral</p>
        <p className="mb-2 text-5xl font-bold text-foreground">
          R$160
        </p>
        <p className="mb-1 text-sm text-muted-foreground">ou</p>
        <p className="mb-6 text-2xl font-semibold text-foreground">
          R$67<span className="text-base font-normal text-muted-foreground">/mês</span>
        </p>

        <div className="mb-8 space-y-1 text-sm text-muted-foreground">
          <p>Funciona como assinatura.</p>
          <p>Você pode cancelar quando quiser.</p>
        </div>

        <CtaButton />
      </motion.div>
    </div>
  </SectionWrapper>
);

export default PricingSection;
