import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import CtaButton from "./CtaButton";

const HeroSection = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
    {/* decorative bg */}
    <motion.img
      src={heroBg}
      alt=""
      aria-hidden
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 0.25, scale: 1 }}
      transition={{ duration: 1.4 }}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover animate-breathe"
    />

    <div className="relative z-10 flex flex-col items-center gap-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl font-bold italic leading-tight text-foreground md:text-7xl"
      >
        Meu Tempo, Meu Templo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-xl text-lg font-medium text-muted-foreground md:text-xl"
      >
        Um processo em grupo para mulheres que vivem com a cabeça a mil
        e não conseguem desacelerar sozinhas.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-lg text-base text-muted-foreground"
      >
        Encontros online duas vezes por mês para ajudar você a diminuir o excesso
        de pensamentos e sair do ciclo de cobrança constante.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <CtaButton />
      </motion.div>
    </div>

    {/* bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
