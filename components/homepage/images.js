import Image from "next/image";
import Home2 from "../../public/img/homepage/home2.jpeg"
import Home3 from "../../public/img/homepage/home3.jpeg"
import Home4 from "../../public/img/homepage/home4.jpeg"

export default function Images() {
  const Images = [
    { source: Home2, name: "Femme faisant du yoga" },
    { source: Home3, name: "Encens qui brûle" },
    { source: Home4, name: "Groupe faisant du yoga" },
  ];
  return (
    <div className="p-6 my-8 max-w-7xl mx-auto lg:px-8 grid grid-cols-3 gap-4">
      {Images.map((image) => (
        <div
          className="rounded-t-full overflow-hidden flex items-center justify-center"
          key={image.name}
        >
          <div className="block">
            <Image
              width={1000}
              height={1500}
              placeholder="blur"
              src={image.source}
              alt={image.name}
            />
          </div>
          <div className="h-16 w-16 -mb-6 absolute self-end flex items-center justify-center rounded-full bg-dta_pink">
            <div className="h-4 w-4 rounded-full bg-dta_gray"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
