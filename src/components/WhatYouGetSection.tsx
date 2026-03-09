import SectionWrapper from "./SectionWrapper";
import materialsImg from "@/assets/materials.jpg";
import { Check } from "lucide-react";

const items = [
  "2 encontros ao vivo por mês pelo Google Meet",
  "Duração de 60 a 90 minutos por encontro",
  "Grupo pequeno para acompanhamento próximo",
  "Atividades guiadas com papel, lápis e canetinhas",
  "Condução de uma arte-terapeuta especializada",
  "Espaço seguro e acolhedor, sem julgamento",
  "Acesso imediato após a inscrição",
  "Cancele quando quiser, sem burocracia",
];

const WhatYouGetSection = () => (
  <SectionWrapper className="bg-sage-light">
    <h2 className="mb-10 text-3xl font-semibold italic text-foreground md:text-4xl">
      O que você recebe
    </h2>

    <div className="flex flex-col gap-10 md:flex-row">
      <ul className="flex-1 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base text-muted-foreground md:text-lg">
            <Check className="mt-1 h-5 w-5 flex-shrink-0 text-sage" />
            {item}
          </li>
        ))}
      </ul>

      <div className="w-full max-w-sm flex-shrink-0">
        <img
          src={materialsImg}
          alt="Kit de materiais: caderno, canetas coloridas e chá"
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </SectionWrapper>
);

export default WhatYouGetSection;
