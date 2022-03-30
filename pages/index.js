import Landing from '../components/homepage/landing'
import About from '../components/homepage/about'
import Why from '../components/homepage/why'
import Me from '../components/homepage/me'
import Sessions from '../components/homepage/sessions'
import Values from '../components/homepage/values'
import Contact from '../components/homepage/contact'

export default function Home() {
  return (
    <>
      {/* Landing */}
      <Landing />
      {/* Why */}
      <Why />
      {/* About */}
      <About />
      {/* Me */}
      <Me />
      {/* Sessions */}
      <Sessions />
      {/* Values */}
      <Values />
      {/* Contact */}
      <Contact />
    </>
  )
}
