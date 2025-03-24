import React, { useState } from "react";

const images = [
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
  "./src/assets/images/1721731820291.jpg",
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-gray-50 outline outline-gray-950/5">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-full flex-shrink-0"
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default About;
