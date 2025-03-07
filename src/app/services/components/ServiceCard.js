// src/app/services/components/ServiceCard.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ href, src, alt, title }) => {
  return (
    <div className="w-full xl:w-1/3 p-4">
      <figure className="text-center">
        <Link href={href} target="_self">
          <div className="inline-block rounded-full border-4 border-white overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <figcaption className="mt-4 text-lg font-semibold text-gray-700">
          {title}
        </figcaption>
      </figure>
    </div>
  );
};

export default ServiceCard;
