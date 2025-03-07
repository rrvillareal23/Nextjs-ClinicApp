"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const images = [
    {
      src: "/OfficeBuilding.jpg",
      alt: "Office Building",
      caption: "Welcome to our new office!",
      subcaption: "Our new address is 22362 Gilberto Suite 100",
    },
    {
      src: "/jojowalk.jpeg",
      alt: "Jojo walk 2024!",
      caption: "Jojo walk 2024!",
      subcaption: "Supporting our superhero!",
    },
    {
      src: "/halloween2024.jpeg",
      alt: "Halloween2024",
      caption: "Happy Halloween!",
      subcaption: "All the crayons in the box!",
    },
    {
      src: "/Holidays2024.jpeg",
      alt: "Holidays2024",
      caption: "Happy Holidays!",
      subcaption: "-from our family to yours",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-full flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-[1400px] m-5 w-full">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Left Section: Slider */}
          <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="p-3">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className="w-full h-[700px] object-fit xl:object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
            <h1 className="text-4xl font-extrabold text-gray-800 mt-4">
              {images[currentSlide].caption}
            </h1>
            <p className="text-lg text-gray-600">
              {images[currentSlide].subcaption}
            </p>
          </div>

          {/* Right Section: Instagram Widget */}
          <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg">
            <div className="w-full overflow-hidden">
              <iframe
                src="//lightwidget.com/widgets/307e3fd369bd5ff0be5e2e72677944be.html"
                scrolling="no"
                allowtransparency="true"
                className="lightwidget-widget w-full h-full max-h-screen border-0 overflow-hidden rounded-lg shadow-lg"
                style={{ width: "100%", border: "0", overflow: "hidden" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
