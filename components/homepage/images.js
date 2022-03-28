import Image from "next/image";
import Home2 from "../../public/img/homepage/home2.jpeg";
import Home3 from "../../public/img/homepage/home3.jpeg";
import Home4 from "../../public/img/homepage/home4.jpeg";

export default function Images() {
  const Images = [
    { source: Home2, name: "Femme faisant du yoga" },
    { source: Home3, name: "Encens qui brûle" },
    { source: Home4, name: "Groupe faisant du yoga" },
  ];
  return (
    <>
      <div className="hidden py-6 lg:px-44 my-8 max-w-7xl mx-auto md:grid grid-cols-3 gap-4">
        {Images.map((image) => (
          <div
            className="rounded-t-full overflow-hidden flex items-center justify-center"
            key={image.name}
          >
            <div className="w-full">
              <Image
                width="60%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                objectPosition="center top"
                quality={30}
                src={image.source}
                alt={image.name}
              />
            </div>
            <div className="h-16 w-16 -mb-4 absolute self-end flex items-center justify-center rounded-full bg-dta_graylight">
              <div className="h-4 w-4 rounded-full bg-dta_pink"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
