export default function Sessions() {
  const Content = [
    {
      id: 1,
      image: "/img/homepage/sessions1.png",
      description:
        "SOPHROLOGIE",
    },
    {
      id: 2,
      image: "/img/homepage/sessions2.png",
      description:
        "MÉDITATION ET RELAXATION",
    },
    {
      id: 3,
      image: "/img/homepage/sessions3.png",
      description:
        "COACHING",
    },
    {
      id: 4,
      image: "/img/homepage/sessions4.png",
      description:
        "YOGA NIDRA ET YOGA DU SOUFFLE",
    },
    {
      id: 5,
      image: "/img/homepage/sessions5.png",
      description:
        "LITHOTHÉRAPIE",
    },
    {
      id: 6,
      image: "/img/homepage/sessions6.png",
      description:
        "AUDIOS ET FICHES PERSONNALISÉS",
    },
  ];
  return (
    <div className="bg-dta_pinklight">
      <div className="p-6 my-8 max-w-7xl mx-auto lg:px-8 text-center font-apercu">
        <p className="">LES SÉANCES</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Content.map((item) => (
            <div className="flex flex-col" key={item.id}>
              <div className="mx-auto w-24">
                <img src={item.image} alt={item.description} />
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
