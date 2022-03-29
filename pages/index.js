import Landing from "../components/homepage/landing";
import Why from "../components/homepage/why";
import Services from "../components/homepage/services";
import You from "../components/homepage/you";
import Sessions from "../components/homepage/sessions";
import Images from "../components/homepage/images";
import Values from "../components/homepage/values";
import Contact from "../components/homepage/contact";

export default function Home() {
  return (
    <>
      {/* Landing */}
      <Landing />
      {/* Why */}
      <Why />
      {/* Services */}
      <Services />
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
    </>
  );
}
