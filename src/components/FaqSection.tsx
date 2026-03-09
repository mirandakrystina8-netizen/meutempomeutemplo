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
    a: "Não. As atividades são simples — traços, cores, formas básicas. Não é sobre fazer bonito. É sobre desacelerar.",
  },
  {
    q: "Preciso falar ou me expor?",
    a: "Não. Você participa do seu jeito. Pode só fazer a atividade e escutar. Ninguém é obrigada a falar.",
  },
  {
    q: "E se eu perder um encontro?",
    a: "Sem problema. São 2 encontros por mês. Você participa dos que conseguir. Sem cobrança.",
  },
  {
    q: "Tem gravação?",
    a: "Não. Os encontros são ao vivo e não ficam gravados, pra criar um espaço seguro onde todas se sintam à vontade.",
  },
  {
    q: "Como cancela?",
    a: "Direto pela Kiwify, a qualquer momento. Sem burocracia, sem perguntas, sem fidelidade.",
  },
  {
    q: "É terapia?",
    a: "É uma vivência terapêutica conduzida por uma arte-terapeuta. Não substitui acompanhamento psicológico, mas pode ser um ótimo complemento.",
  },
  {
    q: "Quanto tempo dura cada encontro?",
    a: "De 60 a 90 minutos, dependendo do tema e do ritmo do grupo.",
  },
  {
    q: "Como acesso? Como funciona a Kiwify?",
    a: "Você faz a inscrição pela Kiwify (cartão ou Pix), recebe o acesso por e-mail e entra nos encontros pelo Google Meet. Simples assim.",
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
      <p className="mb-6 text-base text-muted-foreground md:text-lg">
        Ainda tem dúvida? Me chama no direct/WhatsApp com <strong className="text-foreground">"TEMPLO"</strong>.
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
