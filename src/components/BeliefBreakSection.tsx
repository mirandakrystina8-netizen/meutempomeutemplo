import SectionWrapper from "./SectionWrapper";
import { Moon, ListChecks, AlertTriangle, Clock } from "lucide-react";

const beliefs = [
  { icon: ListChecks, text: "Que você precisa de mais organização e disciplina" },
  { icon: Moon, text: "Que uma boa noite de sono é só questão de rotina" },
  { icon: AlertTriangle, text: "Que se você parasse de pensar tanto, tudo se resolveria" },
  { icon: Clock, text: "Que é só uma fase e vai passar sozinha" },
];

const BeliefBreakSection = () => (
  <SectionWrapper className="bg-foreground text-center">
    <h2 className="mb-10 text-3xl font-semibold italic text-primary-foreground md:text-4xl">
      Te fizeram acreditar que…
    </h2>

    <ul className="mx-auto max-w-lg space-y-6 text-left">
      {beliefs.map((b, i) => (
        <li key={i} className="flex items-start gap-4">
          <b.icon className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
          <span className="text-base text-primary-foreground/80 md:text-lg">{b.text}</span>
        </li>
      ))}
    </ul>

    <p className="mt-10 text-lg font-semibold text-secondary">
      E aí você continua no looping. Tentando dar conta. Sem dormir direito.
      Acordando mais cansada do que deitou.
    </p>
  </SectionWrapper>
);

export default BeliefBreakSection;
