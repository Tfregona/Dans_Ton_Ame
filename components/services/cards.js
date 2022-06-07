import Image from 'next/image'
import Link from 'next/link'

export default function Cards() {
  const Services = [
    {
      id: 1,
      title: 'SOPHROLOGIE',
      description:
        'Utilisez le potentiel de votre esprit via des exercices de sophrologie en tout genre pendant une séance de 1 heure à 1h30. Découvrez des méthodes efficaces pour vaincre le stress, la peur, pour améliorer votre quotidien ou pour être accompagné lors de certaines périodes…',
      image: '/img/services/services1.jpeg',
      link: '/sophrology'
    },
    {
      id: 2,
      title: 'MEDITATION PLEINE CONSCIENCE',
      description:
        'Retrouvez la paix intérieure avec des séances de méditation pleine conscience d’environ 1 heure (ou plus) en fonction de l’objectif visé. La méditation pleine conscience est une méditation contemporaine, laïque, épurée de toute connotation spirituelle, religieuse…  afin de l’instaurer comme un outil puissant et efficace dans votre quotidien.',
      image: '/img/services/services2.jpeg'
    },
    {
      id: 3,
      title: 'COACHING DE VIE',
      description:
        'Des fiches regroupant des protocoles soigneusement rédigés pour définir un accompagnement et vous suivre de A à Z, des audios pour faire le point sur vos besoins via des méthodes de coaching. Les fiches et audios personnalisés sont envoyés sur votre boite mail, et revues ensemble en rendez-vous.',
      image: '/img/services/services3.jpeg'
    },
    {
      id: 4,
      title: 'YOGA NIDRA ET YOGA PRANA, COHÉRENCE CARDIAQUE',
      description: 'Des séances de yoga nidra pour apprendre à s’endormir rapidement, améliorer la qualité et la profondeur du sommeil… Des séances de cohérence cardiaque et de yoga pana pour prendre conscience de sa respiration, améliorer le rythme cardiaque, optimiser la concentration.',
      image: '/img/services/services4.jpeg'
    }
  ]

  return (
    <div>
      <p
        id="services"
        className="py-8 md:py-14 text-center font-steinfeld text-5xl"
      >
        Mes prestations
      </p>
      <div className="px-6 pb-14 max-w-5xl mx-auto md:px-24 grid grid-cols-1 md:grid-cols-2 gap-10">
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
            <p>
              {service.description}{' '}
              {service.link && (
                <span className="font-bold ">
                  <Link href={service.link}>Voir ma page dédiée</Link>
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
