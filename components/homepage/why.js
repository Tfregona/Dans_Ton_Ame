import Image from "next/image";
import Checked from "../../public/img/homepage/checked.png";

export default function Why() {
  const Content = [
    {
      id: 1,
      description:
        "Connaître des techniques douces et faciles à utiliser pour tous les jours",
    },
    {
      id: 2,
      description:
        "Pour apprendre à gérer le stress causé par une situation en particulier",
    },
    {
      id: 3,
      description:
        "Pour servir d’accompagnement en complément d’autres traitements",
    },
    {
      id: 4,
      description:
        "Pour changer votre regard et votre perception de vos problèmes",
    },
    {
      id: 5,
      description:
        "Découvrir le potentiel de votre corps, de votre esprit et de votre imagination",
    },
    { id: 6, description: "Adopter un mode de vie serein, sain et positif" },
  ];
  return (
    <div className="bg-dta_brown text-dta_gray">
      <div className="px-6 pb-10 mt-4 max-w-7xl mx-auto lg:px-8">
        <p className="py-10 text-center font-apercu text-xl font-light">
          POURQUOI LA SOPHROLOGIE ET LES MÉDECINES DOUCES ?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Content.map((item) => (
            <div
              className="flex items-center text-justify space-x-4"
              key={item.id}
            >
              <div className="w-7 flex items-center text-justify">
                <Image
                  width={1000}
                  height={1000}
                  placeholder="blur"
                  src={Checked}
                  alt="Coché"
                />
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
