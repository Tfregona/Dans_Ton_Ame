import Image from "next/image";
import Sessions1 from "../../public/img/homepage/sessions1.png";
import Sessions2 from "../../public/img/homepage/sessions2.png";
import Sessions3 from "../../public/img/homepage/sessions3.png";
import Sessions4 from "../../public/img/homepage/sessions4.png";
import Sessions5 from "../../public/img/homepage/sessions5.png";
import Sessions6 from "../../public/img/homepage/sessions6.png";

export default function Sessions() {
  const Content = [
    {
      id: 1,
      image: Sessions1,
      description: "SOPHROLOGIE",
    },
    {
      id: 2,
      image: Sessions2,
      description: "MÉDITATION ET RELAXATION",
    },
    {
      id: 3,
      image: Sessions3,
      description: "COACHING",
    },
    {
      id: 4,
      image: Sessions4,
      description: "YOGA NIDRA ET YOGA DU SOUFFLE",
    },
    {
      id: 5,
      image: Sessions5,
      description: "LITHOTHÉRAPIE",
    },
    {
      id: 6,
      image: Sessions6,
      description: "AUDIOS ET FICHES PERSONNALISÉS",
    },
  ];
  return (
    <div className="p-6 md:my-8 max-w-7xl mx-auto lg:px-8 text-center font-apercu text-dta_graydark">
      <div className="h-[0.1rem] w-44 mx-auto bg-dta_graydark"></div>
      <p className="p-4 md:p-10 text-xl font-light">LES SÉANCES</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Content.map((item) => (
          <div className="flex flex-col group" key={item.id}>
            <div className="mx-auto w-12 transition ease-in-out delay-150 group-hover:-translate-y-2 group-hover:scale-125 duration-300">
              <Image
                width={1000}
                height={1000}
                placeholder="blur"
                src={item.image}
                alt={item.name}
              />
            </div>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
