import Image from 'next/image'
import Link from 'next/link'
import Sessions1 from '../../public/img/homepage/sessions1.png'
import Sessions2 from '../../public/img/homepage/sessions2.png'
import Sessions3 from '../../public/img/homepage/sessions3.png'
import Sessions4 from '../../public/img/homepage/sessions4.png'

export default function Sessions() {
  const Content = [
    {
      id: 1,
      image: Sessions1,
      description: 'SOPHROLOGIE'
    },
    {
      id: 2,
      image: Sessions2,
      description: 'MÉDITATION PLEINE CONSCIENCE'
    },
    {
      id: 3,
      image: Sessions3,
      description: 'COACHING DE VIE'
    },
    {
      id: 4,
      image: Sessions4,
      description: 'YOGA NIDRA ET COHÉRENCE CARDIAQUE'
    }
  ]
  return (
    <div className="px-6 pb-16 max-w-7xl mx-auto lg:px-8 text-center font-apercu">
      <p className="pb-4 md:pb-10 text-xl font-light">
        RETROUVEZ D’AUTRES PRESTATIONS :
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-20">
        {Content.map((item) => (
          <Link href="/services#services" key={item.id}>
            <div className="flex flex-col group cursor-pointer">
              <div className="mx-auto w-12 transition ease-in-out delay-150 group-hover:-translate-y-2 group-hover:scale-125 duration-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center top"
                  quality={30}
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
