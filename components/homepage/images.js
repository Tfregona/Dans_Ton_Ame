export default function Images() {
  const Images = [
    { source: "/img/homepage/home2.jpg", name: "Femme faisant du yoga" },
    { source: "/img/homepage/home3.jpg", name: "Encens qui brûle" },
    { source: "/img/homepage/home4.jpg", name: "Groupe faisant du yoga" },
  ];
  return (
    <div className="p-6 my-8 max-w-7xl mx-auto lg:px-8 grid grid-cols-3 gap-4">
      {Images.map((image) => (
        <div
          className="rounded-t-full overflow-hidden flex items-center justify-center"
          key={image.name}
        >
          <img src={image.source} alt={image.name} className="" />
          <div className="h-8 w-8 -mb-4 absolute self-end flex items-center justify-center rounded-full bg-dta_pink">
            <div className="h-4 w-4 rounded-full bg-dta_gray"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
