import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const NavigationResponsive = [
  { name: "ACCUEIL", href: "/", current: false },
  { name: "À PROPOS", href: "/about", current: false },
  { name: "BLOG", href: "/blog", current: false },
  { name: "PRÉSTATIONS", href: "/services", current: false },
];

const NavigationLeft = [
  { name: "ACCUEIL", href: "/", current: false },
  { name: "À PROPOS", href: "/about", current: false },
  { name: "BLOG", href: "/blog", current: false },
];

const NavigationRight = [
  { name: "PRÉSTATIONS", href: "/services", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-dta_graylight">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              {/* Icons for responsive */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {NavigationLeft.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <button
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md font-epilogue font-bold"
                          )}
                          aria-current={item.current ? "page" : undefined}
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
                    className="h-20 w-auto cursor-pointer"
                    src="/img/logo/rectangle.svg"
                    alt="Logo Dans ton âme"
                  />
                </Link>
              </div>
              {/* Right size */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {NavigationRight.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <button
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md font-epilogue font-bold"
                          )}
                          aria-current={item.current ? "page" : undefined}
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
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NavigationResponsive.map((item) => (
                <Link key={item.name} href={item.href}>
                  <button
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md"
                    )}
                    aria-current={item.current ? "page" : undefined}
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
  );
}
