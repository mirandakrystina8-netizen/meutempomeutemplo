import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    text: "Depois do segundo encontro, dormi sem acordar no meio da noite pela primeira vez em meses. Não fiz nada diferente. Só fiz a atividade e deitei.",
  },
  {
    text: "Eu achava que precisava resolver tudo antes de poder descansar. Hoje entendo que desacelerar é o que me ajuda a resolver as coisas.",
  },
  {
    text: "A cabeça ligada era meu normal. Nem sabia que dava pra ser diferente. No grupo, percebi que não era só comigo — e que dá pra mudar sim.",
  },
];

const TestimonialsSection = () => (
  <SectionWrapper>
    <h2 className="mb-10 text-center text-3xl font-semibold italic text-foreground md:text-4xl">
      O que dizem as participantes
    </h2>

    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-md"
        >
          {/* Mock chat bubble */}
          <div className="mb-4 rounded-xl bg-sage-light p-4">
            <p className="text-sm italic text-foreground">"{t.text}"</p>
          </div>
          <p className="text-xs text-muted-foreground">— Participante do grupo</p>
        </motion.div>
      ))}
    </div>

    <p className="mt-8 text-center text-sm text-muted-foreground">
      * Depoimentos reais. Nomes preservados por privacidade.
    </p>
  </SectionWrapper>
);

export default TestimonialsSection;
