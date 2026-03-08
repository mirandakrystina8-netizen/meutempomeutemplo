import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const PricingSection = () => (
  <SectionWrapper id="investimento">
    <div className="text-center">
      <h2 className="mb-10 text-3xl font-semibold italic text-foreground md:text-4xl">
        Investimento
      </h2>

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center">
        {/* Plano mensal */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex w-full max-w-xs flex-col rounded-2xl bg-card p-10 shadow-xl"
        >
          <p className="mb-1 text-base text-muted-foreground">Plano mensal</p>
          <p className="mb-6 text-5xl font-bold text-foreground">
            R$67<span className="text-base font-normal text-muted-foreground">/mês</span>
          </p>
          <div className="mb-8 space-y-1 text-sm text-muted-foreground">
            <p>Funciona como assinatura.</p>
            <p>Você pode cancelar quando quiser.</p>
          </div>
          <motion.a
            href="https://pay.kiwify.com.br/NX7DfBT"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-auto inline-block rounded-full bg-primary px-8 py-4 font-body text-base font-semibold tracking-wide text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
          >
            Quero participar
          </motion.a>
        </motion.div>

        {/* Plano trimestral */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex w-full max-w-xs flex-col rounded-2xl border-2 border-primary bg-card p-10 shadow-xl"
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
            Melhor valor
          </span>
          <p className="mb-1 text-base text-muted-foreground">Plano trimestral</p>
          <p className="mb-6 text-5xl font-bold text-foreground">
            R$160
          </p>
          <div className="mb-8 space-y-1 text-sm text-muted-foreground">
            <p>Pagamento único trimestral.</p>
            <p>Economia de mais de R$40!</p>
          </div>
          <motion.a
            href="https://pay.kiwify.com.br/y6zTIbi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-auto inline-block rounded-full bg-primary px-8 py-4 font-body text-base font-semibold tracking-wide text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
          >
            Quero participar
          </motion.a>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

export default PricingSection;
