import Image from 'next/image'

export default function Services() {
  const Services = [
    {
      id: 1,
      title: 'AU QUOTIDIEN',
      description:
        'Des exercices pour vous accompagner au quotidien et vous apprendre à développer vos capacités sur des sujets en particulier : développement personnel, anxiété, confiance en soi, relations…',
      image: '/img/sophrology/services1.jpeg'
    },
    {
      id: 2,
      title: 'PRÉPARATION',
      description:
        'Des situations stressantes comme parler en public, passer le permis ou un autre examen, passer un appel téléphonique ou un entretien d’embauche, nécessitent un accompagnement sur-mesure afin de gérez votre appréhension pour mieux vivre ces situations.',
      image: '/img/sophrology/services2.jpeg'
    },
    {
      id: 3,
      title: 'ACCOUPHENES',
      description:
        "Ayant appris à vivre avec mes accouphenes depuis plus d'un an, je vous propose des exercices de sophrologie et de méditation pour vous apprendre à considérer vos accouphenes comme un simple bruit du quotidien que vous ne remarquerez même plus, et non pas comme un bruit parasite.",
      image: '/img/sophrology/services3.jpeg'
    },
    {
      id: 4,
      title: 'SOMMEIL',
      description:
        'Apprenez dès maintenant à vous endormir facilement et rapidement. Gérez votre stress lié aux problèmes nocturnes,  améliorez vos nuits et ayez enfin un sommeil réparateur.',
      image: '/img/sophrology/services4.jpeg'
    },
    {
      id: 5,
      title: 'TRAITEMENT MÉDICAUX ET PATHOLOGIES',
      description:
        'Attention, la sophrologie ne soigne pas une maladie, elle vous permet d’affronter des pathologies avec un point de vue différent. Elle sert d’accompagnement pour des traitements trop lourds qui peuvent brouiller votre quotidien.',
      image: '/img/sophrology/services5.jpeg'
    },
    {
      id: 6,
      title: 'ENTREPRISE',
      description: 'lorem latum blablum',
      image: '/img/sophrology/services6.jpeg'
    }
  ]

  return (
    <div className="text-dta_graydark pb-14">
      <div className="relative bg-dta_brown">
        <p className="py-8 md:py-24 text-dta_gray text-center font-steinfeld text-5xl">
          La sophrologie et vous
        </p>
        <div className="custom-shape-divider-bottom-1648732741">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill-background"
            ></path>
          </svg>
        </div>
      </div>
      <div className="px-6 py-14 max-w-5xl mx-auto md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {Services.map((service) => (
          <div
            key={service.id}
            className="p-3 text-center border-2 border-dta_graydark ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300"
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
              priority={true}
            />
            <p className="text-xl font-apercu font-light mt-4 mb-2 underline decoration-1 underline-offset-4">
              {service.title}
            </p>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
