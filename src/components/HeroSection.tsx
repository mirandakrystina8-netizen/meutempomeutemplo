import { motion } from "framer-motion";
import heroImg from "@/assets/hero-insomnia.jpg";

const HeroSection = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-foreground px-6 text-center">
    <motion.img
      src={heroImg}
      alt=""
      aria-hidden
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 0.35, scale: 1 }}
      transition={{ duration: 1.4 }}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
    />

    <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold italic leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
      >
        Você deita…{" "}
        <span className="text-secondary">mas sua cabeça não deita?</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-xl text-base font-medium text-primary-foreground/80 md:text-lg"
      >
        Se à noite sua mente faz lista, replay do dia e preocupação com o amanhã,
        você não precisa aguentar sozinha.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="max-w-xl text-base text-primary-foreground/70 md:text-lg"
      >
        O <strong>Meu Tempo, Meu Templo</strong> é uma vivência em grupo, online e prática,
        pra desacelerar com atividades guiadas.
      </motion.p>

      <motion.a
        href="https://pay.kiwify.com.br/2hYgEb2"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block rounded-full bg-secondary px-10 py-5 font-body text-base font-semibold tracking-wide text-secondary-foreground shadow-lg transition-shadow hover:shadow-xl md:text-lg"
      >
        Quero entrar no grupo
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="text-sm text-primary-foreground/50"
      >
        Online • Grupo pequeno • 2x por mês • Cancele quando quiser
      </motion.p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
