import Image from "next/image";
import DesktopImage from "../../public/img/swiper/swiper1.jpg";

export default function Services() {
  const Services = [
    {
      id: 1,
      title: "AU QUOTIDIEN",
      description:
        "Des exercices pour vous accompagner au quotidien et vous apprendre à développer vos capacités sur des sujets en particulier : développement personnel, anxiété, confiance en soi, relations…",
      image: "/img/homepage/services1.jpeg",
    },
    {
      id: 2,
      title: "PRÉPARATION",
      description:
        "Des situations stressantes comme parler en public, passer le permis ou un autre examen, passer un appel téléphonique ou un entretien d’embauche, nécessitent un accompagnement sur-mesure afin de gérez votre appréhension pour mieux vivre ces situations.",
      image: "/img/homepage/services2.jpeg",
    },
    {
      id: 3,
      title: "ACCOUPHENES",
      description:
        "Ayant appris à vivre avec mes accouphenes depuis plus d'un an, je vous propose des exercices de sophrologie et de méditation pour vous apprendre à considérer vos accouphenes comme un simple bruit du quotidien que vous ne remarquerez même plus, et non pas comme un bruit parasite.",
      image: "/img/homepage/services3.jpeg",
    },
    {
      id: 4,
      title: "SOMMEIL",
      description:
        "Apprenez dès maintenant à vous endormir facilement et rapidement. Gérez votre stress lié au problèmes de sommeil et ayez enfin un sommeil réparateur.",
      image: "/img/homepage/services4.jpeg",
    },
    {
      id: 5,
      title: "TRAITEMENT MÉDICAUX ET PATHOLOGIES",
      description:
        "La sophrologie vous aide à mieux vivre certaines maladies comme la fibromyalgie ou le cancer. Elle sert également d’accompagnement pour des traitements trop lourds qui peuvent brouiller votre quotidien. Attention, la sophrologie ne soigne pas une maladie, elle vous permet d’affronter ces maladies et pathologies avec énergie et…",
      image: "/img/homepage/services5.jpeg",
    },
    {
      id: 6,
      title: "ENTREPRISE",
      description: "lorem latum blablum",
      image: "/img/homepage/services6.jpeg",
    },
  ];

  return (
    <div className="text-dta_graydark">
      <p className="py-8 md:py-14 text-center font-steinfeld text-5xl">
        La sophrologie et vous
      </p>
      <div className="px-6 mb-14 max-w-5xl mx-auto md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {Services.map((service) => (
          <div
            key={service.id}
            className="p-3 text-dta_brown text-center border-2 border-dta_brown"
          >
            <Image
              src={service.image}
              alt={service.title}
              width="100%"
              height="70%"
              layout="responsive"
              objectFit="cover"
              objectPosition="center top"
              quality={30}
              priority
            />
            <p className="text-2xl my-4">{service.title}</p>
            <p className="">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
