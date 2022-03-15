import Link from "next/link";
import Image from "next/image";
import Footer1 from "../../public/img/footer/footer1.jpeg";
import Footer2 from "../../public/img/footer/footer2.jpeg";
import Footer3 from "../../public/img/footer/footer3.jpeg";
import Footer4 from "../../public/img/footer/footer4.jpeg";
import Footer5 from "../../public/img/footer/footer5.jpeg";

export default function Footer() {
  const Images = [
    { name: "Livre", source: Footer1 },
    { name: "Méditation", source: Footer2 },
    { name: "Yoga", source: Footer3 },
    { name: "Sauge", source: Footer4 },
    { name: "Cristal", source: Footer5 },
  ];
  return (
    <footer className="text-center lg:text-left text-gray-600">
      <div className="bg-gray-100">
        <div className="p-6 max-w-7xl mx-auto lg:px-8 flex justify-center items-center lg:justify-between border-b border-gray-300">
          <div>
            <p className="text-xl lg:absolute z-10 text-black font-steinfeld">
              Get connected with us on social networks:
            </p>
            <div className="hidden lg:grid grid-cols-5 gap-4 mt-4">
              {Images.map((image) => (
                <Image
                  width={1000}
                  height={1000}
                  placeholder="blur"
                  key={image.name}
                  src={image.source}
                  alt={image.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 max-w-7xl mx-auto lg:px-8 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Description
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Products
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Angular
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  React
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-gray-600">
                  Laravel
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Pricing
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Settings
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-gray-600">
                  Help
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
                New York, NY 10012, US
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                info@example.com
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                + 01 234 567 88
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-3.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200 rounded-bl-full">
        <p className="text-sm">
          © 2022{" "}
          <Link href="/">
            <button className="text-gray-600 font-semibold">
              Dans ton âme
            </button>
          </Link>
        </p>
        <p>
          🍃 Site réalisé par{" "}
          <a
            href="https://fregonatristan.herokuapp.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Fregona Tristan
          </a>
        </p>
      </div>
    </footer>
  );
}
