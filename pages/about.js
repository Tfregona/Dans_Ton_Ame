import Image from "next/image";
import About1 from "../public/img/homepage/home4.jpeg";

export default function About() {
  return (
    <div>
      <div className="bg-dta_brown">
        <div className="p-6 mb-24 xl:px-44 max-w-7xl mx-auto lg:grid lg:grid-cols-2">
          <div className="py-5">
            <h1 className="mb-2 text-5xl font-steinfeld">A Propos de moi</h1>
            <p className="mb-2 text-2xl font-apercu">
              JE M’APELLE ALICIA, J’AI 23 ANS
            </p>
            <p className="indent-8 text-justify">
              Fibromyalgique et atteinte d’acouphènes depuis quelques années, la
              sophrologie et les médecines douces sont ce qui m’ont sauvé. Après
              de nombreuses années de galère avec médicaments et traitements, je
              me suis finalement tournée vers la spiritualité à l’âge de 17 ans
              afin de trouver une réponse à mes douleurs physiques,
              émotionnelles, ou bien pscyhologiques. Le parcours a été long et
              je peux être fière de dire que sophrologie, magnétisme, ou encore
              naturopathie m’ont sauvé. Attention, je ne dis pas que les
              traitements ne fonctionnent pas. Je pense simplement que nous
              sommes bien plus qu’un corps fait de chair. Nous avons une âme,
              une pensée, et un corps, qui nous écoutent, et qui nous envoient
              leurs propres messages. À nous de les écouter, de les soigner et
              de nous re-connecter à nos vraies valeurs…
            </p>
          </div>
          <div className="hidden lg:flex lg:justify-center">
            <div className="w-[20vw] 2xl:w-[15vw] mt-52 absolute border-4 border-dta_gray">
              <Image
                width={1000}
                height={1500}
                placeholder="blur"
                layout="responsive"
                src={About1}
                alt="About 1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:min-h-[150vh]">
        <div className="hidden lg:block">
          <div className="w-[25vw] border-4 border-dta_gray">
            <Image
              width={1000}
              height={1500}
              placeholder="blur"
              layout="responsive"
              src={About1}
              alt="About 1"
            />
          </div>
          <div className="w-[20vw] absolute ml-24 -mt-32 border-4 border-dta_gray">
            <Image
              width={1000}
              height={1500}
              placeholder="blur"
              layout="responsive"
              src={About1}
              alt="About 1"
            />
          </div>
        </div>
        <div className="text-center lg:text-left p-6 lg:px-24 col-span-2 flex items-center justify-center lg:justify-start">
          <div>
            <p className="text-2xl font-apercu">MES FORMATIONS</p>
            <ul>
              <li>Licence Information & Communication</li>
              <li>École française de lithothérapie</li>
              <li>Formation certifiante Udemy en yoga nidra</li>
              <li>Formation certifiante Udemy en coaching de vie</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
