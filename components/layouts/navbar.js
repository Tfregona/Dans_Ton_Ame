import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const router = useRouter()
  const currentPage = router.pathname
  const [scrollPostion, setScrollPostion] = useState(0)

  const NavigationResponsive = [
    { name: 'ACCUEIL', href: '/', current: currentPage === '/' ? true : false },
    {
      name: 'SOPHROLOGIE',
      href: '/sophrology',
      current: currentPage === '/sophrology' ? true : false
    },
    {
      name: 'PRESTATIONS',
      href: '/services',
      current: currentPage === '/services' ? true : false
    },
    {
      name: 'BLOG',
      href: '/blog',
      current: currentPage === '/blog' ? true : false
    },
    {
      name: 'À PROPOS',
      href: '/about',
      current: currentPage === '/about' ? true : false
    },
    {
      name: 'CONTACT',
      href: '/contact',
      current: currentPage === '/contact' ? true : false
    }
  ]

  const NavigationLeft = [
    { name: 'ACCUEIL', href: '/', current: currentPage === '/' ? true : false },
    {
      name: 'SOPHROLOGIE',
      href: '/sophrology',
      current: currentPage === '/sophrology' ? true : false
    },
    {
      name: 'PRESTATIONS',
      href: '/services',
      current: currentPage === '/services' ? true : false
    }
  ]

  const NavigationRight = [
    {
      name: 'BLOG',
      href: '/blog',
      current: currentPage === '/blog' ? true : false
    },
    {
      name: 'À PROPOS',
      href: '/about',
      current: currentPage === '/about' ? true : false
    },
    {
      name: 'CONTACT',
      href: '/contact',
      current: currentPage === '/contact' ? true : false
    }
  ]

  useEffect(() => {
    const updatePosition = () => {
      setScrollPostion(window.scrollY)
    }
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('scroll', setScrollPostion);
    };
  }, []);

  return (
    <div className={'h-24'}>
      <Disclosure
        as="nav"
        className="shadow-md bg-dta_graylight mt-0 fixed w-full z-10 top-0"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between">
                {/* Icons for responsive */}
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Left size */}
                <div className="flex-1 flex items-center justify-center lg:items-stretch">
                  <div className="hidden lg:block lg:ml-6">
                    <div className="flex space-x-4">
                      {NavigationLeft.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <button
                            className={classNames(
                              item.current
                                ? 'text-white'
                                : 'text-[#846363] hover:text-white',
                              'px-3 py-2 font-epilogue font-bold transition duration-300 hover:rotate-12'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Center logo */}
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <img
                      className={classNames(scrollPostion > 15 ? "h-16" : 'h-24', 'transition-all w-auto cursor-pointer')}
                      src="/img/logo/rectangle.svg"
                      alt="Logo Dans ton âme"
                    />
                  </Link>
                </div>
                {/* Right size */}
                <div className="flex-1 flex items-center justify-center lg:items-stretch">
                  <div className="hidden lg:block lg:ml-6">
                    <div className="flex space-x-4">
                      {NavigationRight.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <button
                            className={classNames(
                              item.current
                                ? 'text-white'
                                : 'text-[#846363] hover:text-white',
                              'px-3 py-2 font-epilogue font-bold transition duration-300 hover:rotate-12'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pannel for responsive */}
            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {NavigationResponsive.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <button
                      className={classNames(
                        item.current
                          ? ' text-white'
                          : 'text-[#846363] hover:text-white',
                        'block px-3 py-2 font-bold font-epilogue'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </button>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
