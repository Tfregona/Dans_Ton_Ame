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
    <div className="bg-dta_pinklight">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="hidden md:block">
          <img src="/img/homepage/home1.jpg" alt="Desktop" />
        </div>
        <div className="col-span-2 flex-1 flex items-center justify-center">
          <div>
            <p className="text-center font-apercu">
              TRAVAILLER AVEC MOI C’EST ...
            </p>
            <div className="flex-1 flex items-center">
              <div className="flex flex-col space-y-4 mx-auto">
                {Content.map((item) => (
                  <p className="" key={item.id}>
                    {item.description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
