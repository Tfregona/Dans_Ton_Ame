import Landing from '../components/homepage/landing'
import About from '../components/homepage/about'
import Why from '../components/homepage/why'
import Me from '../components/homepage/me'
import Sessions from '../components/homepage/sessions'
import Values from '../components/homepage/values'
import Contact from '../components/homepage/contact'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Home() {
  const titlref = useRef()
  const onLoad = () => {
    gsap.timeline().fromTo(
      '.letter-title',
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        delay: 0
      }
    )
  }
  const SlideTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 70
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: 'center bottom',
          end: 'bottom center'
        }
      }
    )
  }
  useEffect(() => {
    onLoad()
  }, [])
  useEffect(() => {
    SlideTop('#About')
  }, [])
  useEffect(() => {
    SlideTop('#Values')
  }, [])
  return (
    <>
      {/* Landing */}
      <div
        className="w-full text-center text-black p-10"
        style={{
          backgroundImage: `url(/img/swiper/swiper2.jpg)`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="p-5 py-24">
          <h1 className="text-4xl" ref={titlref}>
            <span className="letter-title">A</span>
            <span className="letter-title">L</span>
            <span className="letter-title">I</span>
            <span className="letter-title">C</span>
            <span className="letter-title">I</span>
            <span className="letter-title">A</span>

            <span className="letter-title"> </span>

            <span className="letter-title">G</span>
            <span className="letter-title">O</span>
            <span className="letter-title">M</span>
            <span className="letter-title">E</span>
            <span className="letter-title">S</span>
          </h1>
          <h2 className="letter-title text-xl font-bold">Sophrologue</h2>
        </div>
      </div>
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
