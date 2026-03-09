import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso saber desenhar?",
    a: "Não. As atividades não são sobre fazer algo bonito. São ferramentas pra desacelerar a mente. Qualquer pessoa consegue fazer.",
  },
  {
    q: "Os encontros são gravados?",
    a: "Não. Os encontros são ao vivo e não ficam gravados, justamente pra criar um espaço seguro onde todas se sintam à vontade.",
  },
  {
    q: "Quantas pessoas tem no grupo?",
    a: "O grupo é pequeno de propósito, pra garantir acompanhamento próximo e um espaço acolhedor.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. No plano mensal, você cancela quando quiser, sem burocracia e sem perguntas.",
  },
  {
    q: "E se eu não puder participar de um encontro?",
    a: "Sem problema. Os encontros acontecem duas vezes por mês e você participa dos que conseguir.",
  },
  {
    q: "É terapia?",
    a: "É uma vivência terapêutica conduzida por uma arte-terapeuta, mas não substitui acompanhamento psicológico individual. Pode ser um ótimo complemento.",
  },
  {
    q: "Funciona pra quem tem insônia e cansaço mental?",
    a: "Sim. Muitas participantes relatam melhora no sono e redução do cansaço mental depois dos encontros.",
  },
  {
    q: "Que materiais eu preciso?",
    a: "Papel, lápis ou caneta, e canetinhas coloridas se tiver. Materiais simples que você provavelmente já tem em casa.",
  },
];

const FaqSection = () => (
  <SectionWrapper>
    <h2 className="mb-10 text-center text-3xl font-semibold italic text-foreground md:text-4xl">
      Perguntas frequentes
    </h2>

    <Accordion type="single" collapsible className="mx-auto max-w-2xl">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-border">
          <AccordionTrigger className="text-left text-base font-medium text-foreground md:text-lg hover:no-underline">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>

    <div className="mt-12 text-center">
      <p className="mb-6 text-lg text-muted-foreground">
        Ainda tem dúvida? A melhor forma de entender é experimentando.
      </p>
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

export default FaqSection;
