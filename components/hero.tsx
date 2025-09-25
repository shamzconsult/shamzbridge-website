"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import { images } from "./carousel/slider-images";
import VideoModal from "./Video-modal";
export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleWatchVideo = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <>
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
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-white  font-bold mb-6 animate-fade-in">
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
              onClick={handleWatchVideo}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
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

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="joBGwpaBzJ0"
      />
    </>
  );
}
