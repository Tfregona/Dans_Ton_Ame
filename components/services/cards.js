import Image from "next/image";
import Link from "next/link";

export default function Cards() {
  const Services = [
    {
      id: 1,
      title: "SOPHROLOGIE",
      description:
        "Utilisez le potentiel de votre corps via des exercices de sophrologie en tout genre pendant une séance de 1 heure. Pour vaincre le stress, la peur, pour être accompagné au quotidien ou pour des situations en particulier…",
      image: "/img/homepage/services1.jpeg",
      link: "/sophrology",
    },
    {
      id: 2,
      title: "MEDITATION ET RELAXATION",
      description:
        "Retrouvez la paix intérieure avec des séances de méditation de 40 minutes à 1 heure en fonction de l’objectif visé.",
      image: "/img/homepage/services2.jpeg",
    },
    {
      id: 3,
      title: "COACHING",
      description: "Lorem",
      image: "/img/homepage/services3.jpeg",
    },
    {
      id: 4,
      title: "YOGA NIDRA",
      description: "Lorem",
      image: "/img/homepage/services4.jpeg",
    },
    {
      id: 5,
      title: "LITHOTHÉRAPIE",
      description:
        "Partez à la découverte du fabuleux pouvoir des cristaux et des minéraux : apprenez à connaitreleurs vertus et laissez-vous guider pendant un soin de 40 minutes à 1 heure avec ces derniers.",
      image: "/img/homepage/services5.jpeg",
    },
    {
      id: 6,
      title: "AUDIOS ET FICHES PERSONNALISÉS",
      description:
        "Des fiches regroupant des protocoles soigneusement rédigés pour suivre votre accompagnement de A à Z, et des audios pour faire le point sur vos besoins via des méthodes de coaching. Les fiches et audios personnalisés sont envoyés sur votre boite mail. Prestation uniquement en ligne.",
      image: "/img/homepage/services6.jpeg",
    },
  ];

  return (
    <div className="text-dta_graydark">
      <div className="p-6 mb-14 max-w-5xl mx-auto md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
              priority={true}
            />
            <p className="text-2xl my-4">{service.title}</p>
            <p className="">
              {service.description}{" "}
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
  );
}