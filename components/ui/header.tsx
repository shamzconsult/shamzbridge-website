"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

interface NavItem {
  name: string;
  href: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems: NavItem[] = [
    { name: "About us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/#testimonial" },
    { name: "Careers", href: "/careers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      setShowHeader(false);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setShowHeader(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            // className={`fixed w-full z-50 py-4 transition-all duration-300 ease-in-out border-b ${
            //   isScrolled
            //     ? "bg-white backdrop-blur-sm shadow-lg border-gray-200"
            //     : "bg-white md:bg-opacity-100 border-transparent"
            // }`}
            className={`fixed top-0 left-0 w-full z-50  transition-all duration-300 ${
              isScrolled
                ? "bg-white text-gray-600 hover:text-gray-900 "
                : "text-white hover:text-gray-300"
            }`}
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
              <div className="flex items-center justify-between h-16 md:h-20">
                {/* Site branding */}
                <Link href="/">
                  <Logo />
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden md:flex md:grow">
                  <ul className="flex grow justify-end flex-wrap items-center">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="font-medium  px-5 py-3 flex items-center transition duration-300 ease-in-out"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile navigation */}
                <div className="md:hidden">
                  <button
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                    className="focus:outline-none"
                  >
                    {isOpen ? (
                      <X size={24} className="text-red-600" />
                    ) : (
                      <Menu
                        size={24}
                        className={isScrolled ? "text-gray-600" : "text-white"}
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-white bg-opacity-95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div className="h-screen pt-32 px-6 space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="block text-gray-600 hover:text-gray-900 border-b border-gray-200 text-xl font-medium py-4 transition duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
