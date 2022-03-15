import Swiper from "../components/homepage/swiper";
import Why from "../components/homepage/why";
import You from "../components/homepage/you";
import Sessions from "../components/homepage/sessions";
import Images from "../components/homepage/images";
import Values from "../components/homepage/values";
import Contact from "../components/homepage/contact";

export default function Home() {
  return (
    <div className="bg-dta_graylight">
      {/* Swiper */}
      <Swiper />
      {/* Why */}
      <Why />
      {/* You */}
      <You />
      {/* Sessions */}
      <Sessions />
      {/* Images */}
      <Images />
      {/* Values */}
      <Values />
      {/* Contact */}
      <Contact />
    </div>
  );
}
