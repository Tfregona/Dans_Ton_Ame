import Image from "next/image";
import Image1 from "../../public/img/decoration/image1.jpeg";
import Image2 from "../../public/img/decoration/image2.jpeg";
import Image3 from "../../public/img/decoration/image3.jpeg";

export default function Images() {
  const Images = [
    { id: 1, src: Image1, name: "Femme faisant du yoga" },
    { id: 2, src: Image2, name: "Encens qui brûle" },
    { id: 3, src: Image3, name: "Boule de cristal" },
  ];
  return (
    <>
      <div className="hidden py-8 lg:px-44 max-w-7xl mx-auto md:grid grid-cols-3 gap-4">
        {Images.map((image) => (
          <div
            className="rounded-t-full overflow-hidden flex items-center justify-center"
            key={image.id}
          >
            <div className="w-full">
              <Image
                width="60%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                objectPosition="center top"
                quality={30}
                src={image.src}
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
