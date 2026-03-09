import SectionWrapper from "./SectionWrapper";
import mechanismImg from "@/assets/mechanism.jpg";
import handsImg from "@/assets/hands-drawing.jpg";

const MechanismSection = () => (
  <SectionWrapper>
    <h2 className="mb-8 text-3xl font-semibold italic text-foreground md:text-4xl">
      Por que funciona (neuro simples)
    </h2>

    <div className="flex flex-col gap-10 md:flex-row md:items-center">
      <div className="flex-1 space-y-4 text-base text-muted-foreground md:text-lg">
        <p>
          Quando sua cabeça está ligada o dia todo, seu corpo fica travado em <strong className="text-foreground">modo de alerta</strong>.
          É como se ele estivesse sempre pronto pra resolver alguma coisa — mesmo quando não tem nada urgente.
        </p>
        <p>
          O problema é que nesse modo, o sono fica leve, a irritação aumenta e você acorda já cansada.
        </p>
        <p>
          As atividades guiadas do <strong className="text-foreground">Meu Tempo, Meu Templo</strong> ocupam
          sua atenção de um jeito diferente — com as mãos, com cores, com traços simples.
          Isso ajuda o corpo a sair do modo de alerta e entrar no <strong className="text-foreground">modo de descanso</strong>.
        </p>
        <p>
          Sem aula. Sem teoria. Só prática guiada que funciona.
        </p>
      </div>

      <div className="flex w-full max-w-sm flex-shrink-0 flex-col gap-4">
        <img
          src={mechanismImg}
          alt="Modo alerta para modo descanso"
          className="w-full rounded-2xl shadow-lg"
        />
        <img
          src={handsImg}
          alt="Mãos desenhando durante atividade guiada"
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </SectionWrapper>
);

export default MechanismSection;
