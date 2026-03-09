import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import groupImg from "@/assets/group-call.jpg";

const testimonials = [
  {
    text: "Eu achava que precisava de mais organização. Depois do primeiro encontro, entendi que precisava era parar. Simplesmente parar.",
    name: "Participante do grupo",
  },
  {
    text: "Nunca imaginei que desenhar sem compromisso ia me fazer sentir tão leve. Saí do encontro e dormi a melhor noite em semanas.",
    name: "Participante do grupo",
  },
  {
    text: "O grupo é pequeno e isso faz toda diferença. Não me senti exposta, me senti acolhida. É um espaço seguro de verdade.",
    name: "Participante do grupo",
  },
];

const TestimonialsSection = () => (
  <SectionWrapper className="bg-cream-dark">
    <h2 className="mb-10 text-center text-3xl font-semibold italic text-foreground md:text-4xl">
      O que dizem as mulheres que já participaram
    </h2>

    <div className="mb-10 overflow-hidden rounded-2xl shadow-lg">
      <img
        src={groupImg}
        alt="Mulheres participando de encontro online em grupo"
        className="w-full h-56 object-cover md:h-72"
      />
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="rounded-2xl bg-card p-6 shadow-md"
        >
          <p className="mb-4 text-base italic text-muted-foreground">"{t.text}"</p>
          <p className="text-sm font-semibold text-foreground">— {t.name}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TestimonialsSection;
