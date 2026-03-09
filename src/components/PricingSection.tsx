import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const PricingSection = () => (
  <SectionWrapper id="investimento">
    <div className="text-center">
      <h2 className="mb-4 text-3xl font-semibold italic text-foreground md:text-4xl">
        Planos e investimento
      </h2>
      <p className="mb-10 text-base text-muted-foreground md:text-lg">
        Menos que um delivery por semana pra cuidar de verdade do seu cansaço mental.
      </p>

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center">
        {/* Mensal */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex w-full max-w-xs flex-col rounded-2xl bg-card p-10 shadow-xl"
        >
          <p className="mb-1 text-base text-muted-foreground">Plano mensal</p>
          <p className="mb-2 text-5xl font-bold text-foreground">
            R$67<span className="text-base font-normal text-muted-foreground">/mês</span>
          </p>
          <p className="mb-6 text-sm text-muted-foreground">Assinatura • Cancele quando quiser</p>
          <div className="mb-8 space-y-1 text-sm text-muted-foreground">
            <p>✓ 2 encontros ao vivo por mês</p>
            <p>✓ Grupo pequeno e acolhedor</p>
            <p>✓ Sem fidelidade</p>
          </div>
          <motion.a
            href="https://pay.kiwify.com.br/NX7DfBT"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-auto inline-block rounded-full bg-primary px-8 py-4 font-body text-base font-semibold tracking-wide text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
          >
            Quero entrar no grupo
          </motion.a>
        </motion.div>

        {/* Trimestral */}
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
          <p className="mb-2 text-5xl font-bold text-foreground">R$160</p>
          <p className="mb-6 text-sm text-muted-foreground">Pagamento único • Economia de R$41</p>
          <div className="mb-8 space-y-1 text-sm text-muted-foreground">
            <p>✓ 6 encontros ao vivo</p>
            <p>✓ Grupo pequeno e acolhedor</p>
            <p>✓ Melhor custo-benefício</p>
          </div>
          <motion.a
            href="https://pay.kiwify.com.br/y6zTIbi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-auto inline-block rounded-full bg-primary px-8 py-4 font-body text-base font-semibold tracking-wide text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
          >
            Quero entrar no grupo
          </motion.a>
        </motion.div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Entrada segura pela Kiwify. Pagamento por cartão ou Pix.
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Tem dúvida? Me chama no direct/WhatsApp com <strong className="text-foreground">"TEMPLO"</strong>
      </p>
    </div>
  </SectionWrapper>
);

export default PricingSection;
