// src/app/services/components/ServicesSection.js
import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      href: "/services/occupational-and-feeding-therapy",
      src: "/services/OT-photo.jpg",
      alt: "Occupational and Feeding Therapy",
      title: "Occupational and Feeding Therapy",
    },
    {
      href: "/services/physical-therapy",
      src: "/services/PT-photo.jpg",
      alt: "Physical Therapy",
      title: "Physical Therapy",
    },
    {
      href: "/services/speech-and-language-therapy",
      src: "/services/SLP-photo.jpg",
      alt: "Speech and Language Therapy",
      title: "Speech and Language Therapy",
    },
    {
      href: "/services/behavioral-intervention",
      src: "/services/BT-photo.jpg",
      alt: "Behavioral Intervention",
      title: "Behavioral Intervention",
    },
  ];

  return (
    <div>
      <div className="container mx-auto flex flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
