import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
    <motion.img
      src={heroBg}
      alt=""
      aria-hidden
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 1.4 }}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover animate-breathe"
    />

    <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold italic leading-tight text-foreground md:text-6xl lg:text-7xl"
      >
        Sua cabeça não para.{" "}
        <span className="text-secondary">E você já cansou disso.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-xl text-lg font-medium text-muted-foreground md:text-xl"
      >
        Uma vivência em grupo para mulheres que vivem com os pensamentos a mil
        e precisam de um espaço real para desacelerar.
      </motion.p>

      <motion.a
        href="https://pay.kiwify.com.br/NX7DfBT"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block rounded-full bg-primary px-10 py-5 font-body text-base font-semibold tracking-wide text-primary-foreground shadow-lg transition-shadow hover:shadow-xl md:text-lg"
      >
        Quero entrar no grupo
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="text-sm text-muted-foreground"
      >
        Encontros online • Grupo pequeno • Começa agora
      </motion.p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
