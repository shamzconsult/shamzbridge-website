

"use client"

import { useState, useEffect } from "react"
import MobileMenu from "./mobile-menu"
import Logo from "./logo"
import Link from "next/link"

const navigationItems = [
  { href: "/", label: "About us" },
  { href: "/#services", label: "Services" },
  { href: "/#testimonial", label: "Testimonials" },
  { href: "/careers", label: "Careers" },
]

export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  const headerStyles = top
    ? "bg-transparent"
    : "bg-white backdrop-blur-sm shadow-lg border-b border-gray-200"

  const linkStyles = top
    ? "text-white hover:text-orange-300"
    : "text-gray-600 hover:text-orange-600"

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 py-4 transition duration-300 ease-in-out ${headerStyles}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out ${linkStyles}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}