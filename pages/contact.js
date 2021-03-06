import Image from 'next/image'
import About1 from '../public/img/decoration/contact.jpg'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Contact() {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [ErrorMessage, setErrorMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault()
    const responseValidate = validate(formValues)
    setFormErrors(responseValidate)
    if (Object.keys(responseValidate).length === 0) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          e.target,
          process.env.NEXT_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            setIsLoading(false)
            setIsSubmit(true)
          },
          (error) => {
            setIsLoading(false)
            setErrorMessage('Une erreur est survenue')
          }
        )
      e.target.reset()
    }
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.lastname) {
      errors.lastname = 'Votre nom est requis !'
    }
    if (!values.firstname) {
      errors.firstname = 'Votre prénom est requis !'
    }
    if (!values.email) {
      errors.email = 'Votre mail est requis !'
    } else if (!regex.test(values.email)) {
      errors.email = 'Ce n’est pas un email valable !'
    }
    if (!values.message) {
      errors.message = 'Un message est requis !'
    } else if (values.message.length < 50) {
      errors.message = 'Votre message doit faire plus de 50 caractères'
    } else if (values.message.length > 500) {
      errors.message = 'Votre message ne doit pas excéder les 500 caractères'
    }
    return errors
  }

  return (
    <div>
      { isLoading && (
        <div className="absolute bg-black/75 z-50 w-[100vw] h-[100vh] flex items-center justify-center">
          <CircularProgress color="secondary" />
        </div> 
      )}
      <div className="bg-dta_pink text-white grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <form className="md:w-4/5" onSubmit={handleSubmit}>
            <p className="py-8 md:pb-14 text-center font-steinfeld text-5xl">
              Contactez-moi
            </p>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 mb-6 px-3 md:mb-0">
                <label className="block tracking-wide text-base font-bold mb-2">
                  NOM{' '}
                  {formErrors.lastname && (
                    <span className="text-xs italic font-normal text-red-500">
                      {formErrors.lastname}
                    </span>
                  )}
                </label>
                <input
                  className={
                    'text-gray-700 appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' +
                    (formErrors.lastname && ' border-red-500')
                  }
                  type="text"
                  name="lastname"
                  placeholder="Votre nom"
                  value={formValues.lastname}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block tracking-wide text-base font-bold mb-2">
                  PRÉNOM{' '}
                  {formErrors.firstname && (
                    <span className="text-xs italic font-normal text-red-500">
                      {formErrors.firstname}
                    </span>
                  )}
                </label>
                <input
                  className={
                    'text-gray-700 appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' +
                    (formErrors.firstname && ' border-red-500')
                  }
                  type="text"
                  name="firstname"
                  placeholder="Votre prénom"
                  value={formValues.firstname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block tracking-wide text-base font-bold mb-2">
                  EMAIL{' '}
                  {formErrors.email && (
                    <span className="text-xs italic font-normal text-red-500">
                      {formErrors.email}
                    </span>
                  )}
                </label>
                <input
                  className={
                    'text-gray-700 appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' +
                    (formErrors.email && ' border-red-500')
                  }
                  type="email"
                  name="email"
                  placeholder="Votre adresse mail valide"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block tracking-wide text-base font-bold mb-2">
                  TÉLÉPHONE
                  <span className="text-xs italic font-normal"> Optionnel</span>
                </label>
                <input
                  className="text-gray-700 appearance-none block w-full bg-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="tel"
                  name="phone"
                  placeholder="Votre numéro de téléphone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full px-3">
                <label className="block tracking-wide text-base font-bold mb-2">
                  MESSAGE{' '}
                  {formErrors.message && (
                    <span className="text-xs italic font-normal text-red-500">
                      {formErrors.message}
                    </span>
                  )}
                </label>
                <p className="text-xs italic">
                  Précisez la raison de votre demande de contact entre 50 et 500
                  caractères
                </p>
                <p className="text-xs italic">
                  Voues êtes actuellement à {formValues.message.length}/500
                </p>
                <textarea
                  className={
                    'text-gray-700 resize-none h-28 appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' +
                    (formErrors.message && 'border-red-500')
                  }
                  type="text"
                  name="message"
                  placeholder="Entrez votre message"
                  value={formValues.message}
                  onChange={handleChange}
                />
                <div className="flex justify-between items-center">
                  <button className="rounded border-2 overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 text-white">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-36 group-hover:h-36 opacity-10"></span>
                    <span className="relative">Envoyer</span>
                  </button>
                  {isSubmit && (
                    <p className="text-center">Votre message s'est bien envoyé !</p>
                  )}
                  {ErrorMessage && (
                    <p className="text-center text-red-500">{ErrorMessage}</p>
                  )}
                </div>
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
              quality={75}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
