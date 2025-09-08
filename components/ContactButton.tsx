"use client";

import { useState, useRef, useEffect } from "react";
import { FiMail, FiCopy, FiX } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

export default function ContactButton() {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shamzbridgeconsult@gmail.com");
    setCopied(true);
    setShowContactOptions(false);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowContactOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowContactOptions(!showContactOptions)}
        className=" items-center gap-2 text-base bg-orange-600 hover:bg-orange-700 transition-colors text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg"
      >
        Want to hire? Contact us
      </button>

      {showContactOptions && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-20 border border-gray-100 overflow-hidden animate-fadeIn">
          <div className="divide-y divide-gray-100">
            <div className="px-1 py-1">
              <a
                href="mailto:shamzbridgeconsult@gmail.com?subject=Contacting%20you%20about%20hiring%20service%20with%20Shamzbridge&body=Hi, %0D%0A%0D%0A"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowContactOptions(false)}
              >
                <FiMail className="text-orange-500" />
                <span>Open Email Client</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shamzbridgeconsult@gmail.com&su=Contacting%20you%20about%20hiring%20service%20with%20Shamzbridge&body=Hi,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setShowContactOptions(false)}
              >
                <FaGoogle className="text-blue-500" />
                <span>Open Gmail</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors text-left"
              >
                <FiCopy className="text-green-500" />
                <span>{copied ? "Copied!" : "Copy Email Address"}</span>
              </button>
            </div>

            <div className="px-1 py-1">
              <button
                onClick={() => setShowContactOptions(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-700 rounded-md transition-colors"
              >
                <FiX size={14} />
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
