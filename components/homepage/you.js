import Image from "next/image";
import DesktopImage from "../../public/img/homepage/home1.jpeg";
import React from "react";

export default function You() {
  const Content = [
    {
      id: 1,
      description: "Un suivi personnalisé et régulier",
    },
    {
      id: 2,
      description: "Des séances authentiques et adaptées à vos besoins",
    },
    {
      id: 3,
      description: "Des exercices réalisés ensemble et de votre côté",
    },
    {
      id: 4,
      description: "Des échanges réguliers",
    },
    {
      id: 5,
      description: "Des séances à distance ou sur place",
    },
    {
      id: 6,
      description:
        "Une multitude d’exercices et de méthodes à vous enseigner, et pour tous les âges",
    },
    {
      id: 7,
      description:
        "Une volonté de vous accompagner et de vous guider sur la voie de la guérison",
    },
  ];
  return (
    <div className="text-dta_graydark">
      <p className="py-8 md:py-14 text-center font-steinfeld text-5xl">
        La sophrologie et vous
      </p>
      <div className="px-6 max-w-7xl mx-auto lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block pl-44 pr-10">
            <Image
              width={1000}
              height={1500}
              layout="responsive"
              placeholder="blur"
              src={DesktopImage}
              alt="Desktop"
            />
          </div>
          <div>
            <p className="p-4 md:p-10 text-center font-apercu text-xl font-light">
              TRAVAILLER AVEC MOI C’EST ...
            </p>
            <div className="flex flex-col space-y-2">
              {Content.map((item) => (
                <p key={item.id}>○ {item.description}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
