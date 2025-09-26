"use client";

import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { FaMapPin, FaPhone, FaTiktok } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const chatOnWhatsApp = () => {
    const url = `https://wa.me/${+2348177098608}?text=${encodeURIComponent(
      "Welcome to ShamzBridge, let's talk!"
    )}`;
    window.open(url, "_blank");
  };

  const handleSubscribe = () => {
    if (!email) {
      setMessage("⚠️ Please enter your email.");
      setIsSuccess(false);
      return;
    }
    // Here you could send the email to an API if needed
    setMessage("✅ You have subscribed successfully!");
    setIsSuccess(true);
    setEmail("");
  };

  return (
    <footer
      className="min-h-[50vh] w-full overflow-x-hidden bg-cover bg-center bg-no-repeat text-white relative"
      style={{
        backgroundImage: "url('/bg1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold">
                Shamzbridge Consult Limited.
              </h3>
              <p className="opacity-90">
                Empowering growth and building futures through strategic
                partnerships and innovative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <div className="space-y-2 opacity-90">
                <Link
                  href="/about"
                  className="block hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="block hover:text-white transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/events"
                  className="block hover:text-white transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="/careers"
                  className="block hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact Us</h4>
              <div className="space-y-2 opacity-90">
                <div className="flex items-center gap-2">
                  <MdOutlineMailOutline className="h-4 w-4" />
                  <span>hello@shamzbridgeconsult.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="h-4 w-4" />
                  <span>+234 813 5153 620</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapPin className="h-4 w-4" />
                  <span className="text-sm">
                    Major Oil Complex, Mbora Service Station, Plot 1524,
                    Cadastral Zone, Co6, Jabi Airport Road, Abuja.
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Stay Updated</h4>
              <p className="text-sm opacity-90">
                Subscribe to our newsletter for the latest updates and insights.
              </p>

              {!isSuccess ? (
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white text-black border-none rounded-md"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-orange-500 hover:bg-orange-700 px-4 py-2 rounded-md"
                  >
                    Subscribe
                  </button>
                </div>
              ) : null}

              {message && (
                <p
                  className={`text-sm mt-2 ${
                    isSuccess ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 md:mt-10">
            <h1>Follow us on :</h1>
            <ul className="flex flex-wrap justify-center gap-4 mb-4 md:order-1 md:ml-4 md:mb-0 opacity-90">
              {/* Instagram */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.instagram.com/shamzbridge/"
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="instagram"
                >
                  <InstagramLogoIcon className="w-10 h-10 p-2" />
                </a>
              </li>

              {/* Twitter (X) */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://x.com/shamzbridge"
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 p-2"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.linkedin.com/company/102454275/admin/feed/posts/"
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="linkedin"
                >
                  <LinkedInLogoIcon className="w-10 h-10 p-2" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.tiktok.com/@shamzbridge"
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="tiktok"
                >
                  <FaTiktok className="w-10 h-10 p-2" />
                </a>
              </li>

              {/* YouTube */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UCCT69YW8WVJeEbjPEtomkQg/"
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="youtube"
                >
                  <svg
                    className="w-10 h-10 p-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.615 7.072c-.204-.72-.801-1.286-1.524-1.49-1.341-.362-6.73-.362-6.73-.362s-5.389 0-6.73.362c-.723.204-1.32.77-1.524 1.49-.364 1.356-.364 4.183-.364 4.183s0 2.827.364 4.183c.204.72.801 1.286 1.524 1.49 1.341.362 6.73.362 6.73.362s5.389 0 6.73-.362c.723-.204 1.32-.77 1.524-1.49.364-1.356.364-4.183.364-4.183s0-2.827-.364-4.183zM9.927 13.803v-4.006l4.14 2.003-4.14 2.003z" />
                  </svg>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <button
                  onClick={chatOnWhatsApp}
                  className="flex justify-center items-center text-gray-600 bg-white rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="whatsapp"
                >
                  <svg
                    className="w-10 h-10 p-2"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M380.9 97.1C339 55.1 284.8 32 226.9 32 101.7 32 0 133.7 0 258.9c0 45.6 11.9 90.1 34.5 129.4L0 512l127.8-33.8c38.8 20.9 82 32 126.1 32h.1c125.1 0 226.8-101.7 226.8-226.9 0-57.9-22.3-112.1-63.9-153.2zM226.9 450.3c-38.7 0-76.3-10.4-109.2-30.1l-7.8-4.6-75.9 20.1 20.3-74.1-5.1-8C31.8 320 20 289.9 20 258.9 20 147.7 115.7 52 226.9 52c60.1 0 116.7 23.4 159.2 66 42.6 42.6 66 99.2 66 159.3 0 124.2-100.8 225-225.2 225z" />
                    <path d="M331.1 274.6c-5.5-2.7-32.4-15.9-37.4-17.7-5.1-1.8-8.8-2.7-12.5 2.7s-14.3 17.7-17.5 21.4-6.4 4.1-11.9 1.4c-32.4-16.2-53.6-28.9-75.1-65.3-5.7-9.8 5.7-9.1 16.2-30.3 1.8-3.6.9-6.8-.5-9.5s-12.5-30.1-17.1-41.2c-4.5-10.9-9.1-9.3-12.5-9.5-3.2-.2-6.8-.2-10.5-.2-3.6 0-9.5 1.4-14.5 6.8-5 5.5-19 18.6-19 45.5s19.5 52.7 22.3 56.3c2.7 3.6 37.5 57.3 90.7 80.2 53.2 22.9 53.2 15.3 62.6 14.3 9.5-.9 31.7-12.9 36.2-25.4 4.5-12.4 4.5-23.2 3.2-25.4-1.3-2.1-5-3.5-10.5-6.2z" />
                  </svg>
                </button>
              </li>

              {/* Phone */}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="tel:+2348135153620"
                  className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white rounded-full shadow transition duration-150 ease-in-out"
                  aria-label="phone"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 p-2"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Bottom Note */}
          <div className="border-t border-orange-600 mt-8 pt-8 text-center">
            <p>
              © {new Date().getFullYear()}{" "}
              <span>Corporate Solutions. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
