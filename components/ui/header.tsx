//   "use client";

// import { useState, useEffect } from "react";

// import MobileMenu from "./mobile-menu";
// import Logo from "./logo";
// import Link from "next/link";

// export default function Header() {
//   const [top, setTop] = useState<boolean>(true);

//   // detect whether user has scrolled the page down by 10px
//   const scrollHandler = () => {
//     window.pageYOffset > 10 ? setTop(false) : setTop(true);
//   };

//   useEffect(() => {
//     scrollHandler();
//     window.addEventListener("scroll", scrollHandler);
//     return () => window.removeEventListener("scroll", scrollHandler);
//   }, [top]);

//   return (
//     <header
//       className={`fixed w-full z-30 md:bg-opacity-90 py-4 transition duration-300 ease-in-out border-b ${
//         !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
//       }`}
//     >
//       <div className='max-w-6xl mx-auto px-5 sm:px-6'>
//         <div className='flex items-center justify-between h-16 md:h-20'>
//           {/* Site branding */}
//           <Link href={"/"}>
//             <Logo />
//           </Link>

//           {/* Desktop navigation */}
//           <nav className='hidden md:flex md:grow'>
//             {/* Desktop sign in links */}
//             <ul className='flex grow justify-end flex-wrap items-center'>
//               <li>
//                 <Link
//                   href='/#about'
//                   className='font-medium text-gray-600 hover:text-gray-200 px-5 py-3 flex items-center transition duration-150 ease-in-out'
//                 >
//                   About us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href={"/events"}
//                   className='font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'
//                 >
//                   Events
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href='/#service'
//                   className='font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href='/#testimonial'
//                   className='font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'
//                 >
//                   Testimonials
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href='/careers'
//                   className='font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'
//                 >
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           <MobileMenu />
//         </div>
//       </div>
//     </header>
//   );
// }







"use client"

import { useState, useEffect } from "react"
import MobileMenu from "./mobile-menu"
import Logo from "./logo"
import Link from "next/link"

export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 py-4 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
         <Link href={"/"}>
           <Logo />
         </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop navigation links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className={`font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out ${
                    top ? "text-white hover:text-orange-300" : "text-gray-600 hover:text-orange-600"
                  }`}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href={"/#services"}
                  className={`font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out ${
                    top ? "text-white hover:text-orange-300" : "text-gray-600 hover:text-orange-600"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonial"
                  className={`font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out ${
                    top ? "text-white hover:text-orange-300" : "text-gray-600 hover:text-orange-600"
                  }`}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className={`font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out ${
                    top ? "text-white hover:text-orange-300" : "text-gray-600 hover:text-orange-600"
                  }`}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
