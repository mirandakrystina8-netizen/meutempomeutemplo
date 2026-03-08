import SectionWrapper from "./SectionWrapper";
import karenPhoto from "@/assets/karen-krys.png";

const AboutSection = () => (
  <SectionWrapper className="bg-cream text-center" id="sobre">
    <h2 className="mb-10 font-display text-3xl font-semibold italic text-foreground md:text-4xl">
      Quem vai guiar os encontros
    </h2>

    <div className="mx-auto mb-8 h-56 w-56 overflow-hidden rounded-full border-4 border-sage shadow-lg md:h-64 md:w-64">
      <img
        src={karenPhoto}
        alt="Karen Krys — pedagoga, arte-terapeuta e facilitadora"
        className="h-full w-full object-cover object-top"
      />
    </div>

    <p className="mb-6 font-display text-2xl font-semibold text-foreground">
      Meu nome é Karen Krys.
    </p>

    <div className="space-y-4 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
      <p>
        Sou pedagoga, arte-terapeuta e facilitadora de processos de
        autoconhecimento.
      </p>
      <p>
        Ao longo do meu trabalho, percebi algo que aparece em muitas mulheres:
        uma mente acelerada, cheia de pensamentos, cobranças internas e
        dificuldade de realmente desacelerar.
      </p>
      <p>
        Foi observando isso que criei a vivência{" "}
        <span className="font-semibold text-foreground">
          Meu Tempo, Meu Templo
        </span>
        .
      </p>
      <p>
        Um espaço simples e conduzido, onde usamos atividades criativas para
        ajudar a diminuir o excesso de pensamentos e aprender, na prática, a
        reduzir o ritmo interno.
      </p>
      <p>
        Nos encontros, meu papel é conduzir o processo, propor as atividades e
        criar um ambiente seguro para que cada mulher possa participar no seu
        próprio tempo.
      </p>
      <p className="font-semibold text-foreground">
        Você não precisa saber desenhar, nem ter experiência com arte.
      </p>
      <p>
        A ideia não é fazer algo bonito, mas usar o processo criativo como
        ferramenta para desacelerar a mente e se reconectar consigo mesma.
      </p>
      <p>
        Se você sente que sua cabeça está sempre cheia e que parar sozinha é
        difícil, será um prazer te acompanhar nesse processo.
      </p>
    </div>

    <p className="mt-8 font-display text-xl font-semibold italic text-foreground">
      Karen Krys
    </p>
  </SectionWrapper>
);

export default AboutSection;
