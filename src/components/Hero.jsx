import React, { useState, useEffect } from "react";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Bus from "../assets/bus.jpg";
import Bus2 from "../assets/Bus2.jpg";
import Bus3 from "../assets/Bus3.jpg";

const Hero = () => {
  const images = [Bus, Bus2, Bus3];
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full relative">
      {/* Image Slider Container */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={images[currentImage]}
          className="w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out"
          alt="Bus"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              type="button"
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-5">
          <div className="text-center text-white px-3 sm:px-8 md:px-14 lg:px-32 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Güvenli Yolculuk
            </h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md leading-relaxed">
              Akyel Tur ile konforlu ve güvenli seyahat deneyimi yaşayın.
              Profesyonel hizmet anlayışımızla her yolculuğunuz keyifli geçecek.
            </p>
            <button
              className=" cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg"
              onClick={() => scrollToSection("hakkimizda")}
            >
              Detaylar <EastSharpIcon className="pl-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
