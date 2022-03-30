import Image from 'next/image'
import About1 from '../public/img/decoration/contact.jpg'

export default function Contact() {
  return (
    <div className="bg-dta_pink grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Nom
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Votre nom"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Prénom
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Votre prénom"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="email"
                placeholder="Votre adresse mail valide"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Téléphone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Votre numéro de téléphone"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Description
              </label>
              <p className="text-gray-600 text-xs italic">
                Précisez la raison de votre demande de contact
              </p>
              <textarea
                className="resize-none h-28 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Entrez ici"
              />
            </div>
          </div>
          <button
            type="button"
            className="rounded border-2 overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 bg-dta_pink text-white"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-36 group-hover:h-36 opacity-10"></span>
            <span className="relative">Envoyer</span>
          </button>
        </form>
      </div>
      <div>
        <div className="ml-auto w-1/2">
          <Image
            src={About1}
            alt="{image.name}"
            width="100%"
            height="150%"
            layout="responsive"
            objectFit="cover"
            objectPosition="center top"
            quality={20}
          />
        </div>
      </div>
    </div>
  )
}
