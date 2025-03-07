// src/app/services/page.js
import React from "react";
import ServicesSection from "./components/ServicesSection";
export default function Services() {
  return (
    <div>
      <header className="relative flex bg-cover bg-no-repeat bg-[#f78f13] min-h-48 text-white px-5 justify-center items-center">
        <div className="max-w-full text-center">
          <div className="mt-1 mb-1">
            <h1 className="mt-2 mb-2 font-sans">
              <span className="text-5xl font-extrabold">SERVICES</span>
            </h1>
            <h2>
              <span className="text-lg">
                Rainbow Kids Achievement Center provides multidisciplinary
                and/or single service programs for evaluation and assessment,
                intervention, and consultation. The following is a detailed
                description of each service offered at Rainbow Kids Achievement
                Center.
              </span>
            </h2>
          </div>
        </div>
      </header>
      <div className="max-h-full flex items-center justify-center bg-gray-50">
        <div className="relative flex flex-col lg:flex-row max-w-[1400px] pt-[30px] pb-[30px] pr-[20px] pl-[20px] ">
          <ServicesSection />
        </div>
      </div>
    </div>
  );
}
