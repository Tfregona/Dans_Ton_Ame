import Image from 'next/image'
import About1 from '../public/img/about/about1.JPG'
import About2 from '../public/img/about/about2.JPG'
import About3 from '../public/img/about/about3.jpg'

export default function About() {
  return (
    <div>
      <div className="bg-dta_brown">
        <div className="p-6 mb-24 xl:px-44 max-w-7xl mx-auto lg:grid lg:grid-cols-2">
          <div className="py-5 text-dta_gray">
            <h1 className="mb-4 text-5xl font-steinfeld">A Propos de moi</h1>
            <p className="mb-2 text-xl font-light font-apercu">
              JE M’APPELLE ALICIA, J’AI 23 ANS
            </p>
            <p className="indent-8 text-justify">
              Fibromyalgique depuis maintenant quelques années, je me suis
              finalement tournée vers les médecines alternatives à l’âge de 17
              ans afin de trouver une réponse à mes douleurs physiques,
              émotionnelles, ou bien psychiques. Le parcours a été long et je
              peux être fière de dire que sophrologie, méditation ou encore
              magnétisme ont changé mon quotidien. Attention, je ne dis pas que
              les traitements ne fonctionnent pas. Je pense simplement que nous
              sommes bien plus qu’un corps fait de chair. Nous avons une âme,
              des pensées, un corps et un esprit qui nous écoutent, et qui
              nous envoient leurs propres messages. À nous de décider
              d’être à leur écoute et de nous re-connecter à nos vraies
              valeurs... 
              Aujourd’hui, je pense à mon expérience comme un outil
              puissant qui me permet de comprendre mes clients et d’être à leur
              écoute en permanence. Que diriez-vous d’un accompagnement à mes
              côtés dès aujourd’hui ?
            </p>
          </div>
          <div className="hidden lg:flex lg:justify-center">
            <div className="w-[20vw] mt-52 absolute border-4 border-dta_gray">
              <Image
                width="100%"
                height="150%"
                layout="responsive"
                objectFit="cover"
                objectPosition="center top"
                quality={30}
                src={About1}
                alt="Alicia Gomes sophrologue"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:min-h-[100vh]">
        <div className="px-14 hidden lg:block">
          <div className="border-4 border-dta_gray">
            <Image
              width="100%"
              height="120%"
              layout="responsive"
              objectFit="cover"
              objectPosition="center top"
              quality={30}
              src={About3}
              alt="Fond blanc"
            />
          </div>
          <div className="w-[10em] xl:w-[20em] absolute ml-44 -mt-44 border-4 border-dta_gray">
            <Image
              width="100%"
              height="120%"
              layout="responsive"
              objectFit="cover"
              objectPosition="center top"
              quality={30}
              src={About2}
              alt="Alicia Gomes sophrologue"
            />
          </div>
        </div>
        <div className="text-center lg:text-left p-6 lg:px-24 col-span-2 flex items-center justify-center lg:justify-start">
          <div>
            <p className="text-xl font-light font-apercu">MES FORMATIONS</p>
            <ul>
              <li>○ Licence Information & Communication bac+3</li>
              <li>
                ○ Formation à l'Institut de Formation à la Sophrologie Annecy
              </li>
              <li>
                ○ Formation certifiante en méditation pleine conscience par
                Jeanne Siaud-Facchin, psychologue clinicienne
              </li>
              <li>
                ○ Formation certifiante en yoga nidra par Ali Chahat,
                Instructeur certifié de yoga & diplômé de Psychologie
              </li>
              <li>
                ○ Formation certifiante en coaching de vie par Therese Ferland,
                coach santé bien-être
              </li>
              <li>
                ○ Formation certifiante Udemy en cohérence cardiaque, yoga prana
              </li>
            </ul>
            <p>Je suis Membre de la Chambre Syndicale de la Sophrologie</p>
          </div>
        </div>
      </div>
    </div>
  )
}
