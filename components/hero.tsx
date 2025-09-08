// import { ArrowRight } from "lucide-react"
// import { Button } from "./ui/button"

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-600 via-orange-700 to-slate-500 text-white overflow-hidden">
//       {/* Background overlay */}
//       <div className="absolute inset-0 bg-black/20" />

//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse delay-1000" />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
//           Empowering Growth,{" "}
//           <span className="bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
//             Building Futures
//           </span>
//         </h1>

//         <p className="text-xl md:text-2xl mb-8 py-3 text-slate-200 max-w-3xl mx-auto animate-fade-in-delay">
//           Your trusted ally in strategic project management, capacity building, and community-focused development.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
//           <Button
//             size="lg"
//             className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
//           >
//             <a href='https://www.youtube.com/channel/UCCT69YW8WVJeEbjPEtomkQg/'>Discover Our Impact</a>
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { images } from "./carousel/slider-images";
import Image from "next/image";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-orange-900/40 to-slate-900/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white  font-bold mb-6 animate-fade-in">
          Empowering Growth,{" "}
          <span className="bg-gradient-to-r from-teal-400 to-orange-500 bg-clip-text text-transparent">
            Building Futures
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto animate-fade-in-delay">
          Your partner in strategic project management, capacity building, and
          community-focused development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/70 my-2 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            <a href="https://www.youtube.com/channel/UCCT69YW8WVJeEbjPEtomkQg/">
              Watch Our Story
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
