

"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function NecaFlierPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const showPopup = () => {
      setIsVisible(true);
      
      // Auto-hide after 10 seconds (optional)
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 10000);
    };

    // Initial delay of 4 seconds
    const initialTimer = setTimeout(() => {
      showPopup();
    }, 4000);

    // Show every 2 minutes
    intervalId = setInterval(() => {
      showPopup();
    }, 2 * 60 * 1000); // 2 minutes

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-20 text-gray-800 hover:text-red-600 bg-white rounded-full p-1"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <a
            href="https://tally.so/r/XxQ97z"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
          >
            <img
              src="/neca.jpg"
              alt="NECA ICT Academy Registration"
              className="w-full h-auto cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}