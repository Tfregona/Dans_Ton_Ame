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
    <div className="bg-dta_pinklight">
      <div className="p-6 my-8 max-w-7xl mx-auto lg:px-8">
        <p className="text-center font-apercu">POURQUOI LA SOPHROLOGIE ET LES MÉDECINES DOUCES ?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Content.map((item) => (
            <div className="flex items-center text-justify space-x-1" key={item.id}>
              <div>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
                </svg>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
