export default function Values() {
  const Content = [
    {
      id: 1,
      image:
        'M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181',
      title: 'AUTHENTICITÉ',
      description: 'Afin d’établir un lien de confiance et de bienveillance'
    },
    {
      id: 2,
      image:
        'M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75',
      title: 'COMPRÉHENSION',
      description:
        'Car il est tellement important de se sentir compris.e pour avancer'
    },
    {
      id: 3,
      image:
        'M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z',
      title: 'UN SUIVI RÉGULIER',
      description:
        'Parce que je suis soucieuse de l’accomplissement de votre parcours'
    }
  ]

  return (
    <div className="bg-dta_pink text-white">
      <div id="Values" className="pb-10 max-w-7xl mx-auto lg:px-8 text-center">
        <p className="p-4 md:p-10 font-steinfeld text-5xl">Mes valeurs</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Content.map((item) => (
            <div className="flex flex-col group" key={item.id}>
              <div className="mx-auto ease-in-out delay-150 group-hover:-translate-y-2 group-hover:scale-125 duration-300">
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 30 30"
                >
                  <path d={item.image}></path>
                </svg>
              </div>
              <p className="font-apercu font-bold">{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
