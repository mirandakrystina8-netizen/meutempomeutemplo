import { motion } from "framer-motion";

const CtaButton = () => (
  <motion.a
    href="#investimento"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    className="inline-block rounded-full bg-primary px-8 py-4 font-body text-base font-semibold tracking-wide text-primary-foreground shadow-lg transition-shadow hover:shadow-xl md:text-lg"
  >
    Quero participar da vivência
  </motion.a>
);

export default CtaButton;
