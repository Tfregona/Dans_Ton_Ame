import Image from 'next/image'
import About1 from '../public/img/decoration/contact.jpg'

export default function Contact() {
  return (
    <div className="bg-dta_pink text-white grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center">
        <form className="md:w-4/5">
          <p className="py-8 md:pb-14 text-center font-steinfeld text-5xl">
            Prenez contact
          </p>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 mb-6 px-3 md:mb-0">
              <label className="block tracking-wide text-base font-bold mb-2">
                NOM
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Votre nom"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-base font-bold mb-2">
                PRÉNOM
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Votre prénom"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-base font-bold mb-2">
                EMAIL
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="email"
                placeholder="Votre adresse mail valide"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-base font-bold mb-2">
                TÉLÉPHONE
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Votre numéro de téléphone"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label className="block tracking-wide text-base font-bold mb-2">
                MESSAGE
              </label>
              <p className="text-xs italic">
                Précisez la raison de votre demande de contact
              </p>
              <textarea
                className="resize-none h-28 appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Entrez votre message"
              />
              <button
                type="button"
                className="rounded border-2 overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 text-white"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-36 group-hover:h-36 opacity-10"></span>
                <span className="relative">Envoyer</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="hidden md:block ml-auto w-1/2 py-24">
          <Image
            src={About1}
            alt="{image.name}"
            width="100%"
            height="150%"
            layout="responsive"
            objectFit="cover"
            objectPosition="center top"
            quality={30}
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}
