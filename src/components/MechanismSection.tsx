import SectionWrapper from "./SectionWrapper";
import mechanismImg from "@/assets/mechanism.jpg";

const MechanismSection = () => (
  <SectionWrapper className="bg-sage-light">
    <div className="flex flex-col items-center gap-10 md:flex-row">
      <div className="flex-1">
        <h2 className="mb-8 text-3xl font-semibold italic text-foreground md:text-4xl">
          Troca de modo: do alerta pro descanso
        </h2>

        <div className="space-y-4 text-base text-muted-foreground md:text-lg">
          <p>
            Quando sua cabeça está ligada o tempo todo, seu corpo fica em modo de alerta.
            É como se você estivesse sempre pronta pra resolver alguma coisa — mesmo quando não tem nada urgente.
          </p>
          <p>
            O problema é que nesse estado, descansar parece impossível.
            Você deita e a mente dispara. Você tenta parar e se sente culpada.
          </p>
          <p>
            Nos encontros do <span className="font-semibold text-foreground">Meu Tempo, Meu Templo</span>,
            a gente usa atividades manuais e criativas pra ajudar o cérebro a sair desse modo de alerta
            e entrar no modo de descanso — de forma natural, sem forçar.
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm flex-shrink-0">
        <img
          src={mechanismImg}
          alt="Ilustração mostrando a transição do modo alerta para o modo descanso"
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </SectionWrapper>
);

export default MechanismSection;
