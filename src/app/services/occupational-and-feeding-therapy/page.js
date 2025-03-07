import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OccupationalTherapy() {
  return (
    <div>
      <header className="relative flex bg-cover bg-no-repeat bg-[#f78f13] min-h-48 text-white px-5 justify-center items-center">
        <div className="max-w-full text-center">
          <div className="mt-1 mb-1">
            <h1 className="mt-2 mb-2 font-sans">
              <span className="text-5xl font-extrabold">
                OCCUPATIONAL AND FEEDING THERAPY
              </span>
            </h1>
            <h2>
              <span className="text-lg">“Where every child achieves…”</span>
            </h2>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center bg-gray-50">
        <div className="relative lg:flex-row max-w-[1410px] pt-[30px] pb-[30px] pr-[20px] pl-[20px]">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row">
            <div className=" md:w-2/3 p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Occupational Therapy</h3>
              <p className="mb-4 text-xl">
                Rainbow Kids’ pediatric occupational therapists specialize in
                evaluation and treatment of developmental delays including fine
                motor skills, sensory regulation and processing differences,
                neurodevelopmental, genetic and neurological disorders. The
                benefit of pediatric occupational therapy helps children develop
                successful skills in areas such as fine motor, self-care,
                feeding, and oral motor development. Play is most often used in
                occupational therapy with children because a child’s brain
                develops and matures through play. Some goals of therapy may
                include:
              </p>
              <ul className="list-disc mb-4 text-xl">
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Sensory discrimination and processing
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Development of fine motor skills
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Age-appropriate self-care skills
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Overcoming feeding aversions or exploring new food items
                </li>
              </ul>
              <p className="mb-4 text-xl">
                Education and involvement of the family is also a primary
                consideration and critical to success. Our occupational
                therapists provide comprehensive diagnostics and ongoing therapy
                services for a wide range of childhood disorders. For additional
                information on occupational therapy, please visit the American
                Occupational Therapy Association at:{" "}
                <a
                  href="https://www.aota.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  www.aota.org
                </a>
              </p>
              <h3 className="text-2xl font-bold mb-4">Feeding Therapy</h3>
              <p className="mb-4 text-xl">
                Rainbow Kids Achievement Center offers individual feeding
                therapy. The focus of therapy is on developing a more positive
                relationship with food and the eating process, using a strong
                sensory base. The children learn how to have fun with their
                food, and how to appropriately overcome anxieties and aversions
                associated with food.
              </p>
              <p className="font-semibold mb-2 text-xl">
                Some goals of Occupational Therapy may include:
              </p>
              <ul className="list-none mb-4 text-xl">
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Sensory discrimination and processing
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Development of fine motor skills
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Age-appropriate self-care skills
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Overcoming feeding aversions or exploring new food items
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/services"
                  className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition duration-300"
                >
                  <i className="fas fa-chevron-circle-left mr-2"></i>
                  BACK TO OUR SERVICES
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/3 md:ml-5">
              <div className="mb-4">
                <Image
                  src="/services/OT-photo.jpg"
                  alt="Occupational and Feeding Therapy"
                  width={1500}
                  height={1500}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <section className="bg-white p-4 rounded-lg shadow-lg">
                <h4 className="font-bold text-xl mb-2">OUR SERVICES</h4>
                <ul className="list-disc ml-4">
                  <li className="flex items-center mb-2">
                    <span className="flex justify-center items-center w-4 h-4 bg-gray-500 text-white rounded-full shadow-md mr-2">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <Link
                      href="/services/occupational-and-feeding-therapy"
                      className="text-gray-600 hover:underline hover:text-blue-500"
                    >
                      Occupational and Feeding Therapy
                    </Link>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="flex justify-center items-center w-4 h-4 bg-gray-500 text-white rounded-full shadow-md mr-2">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <Link
                      href="/services/physical-therapy"
                      className="text-gray-600 hover:underline hover:text-blue-500"
                    >
                      Physical Therapy
                    </Link>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="flex justify-center items-center w-4 h-4 bg-gray-500 text-white rounded-full shadow-md mr-2">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <Link
                      href="/services/speech-and-language-therapy"
                      className="text-gray-600 hover:underline hover:text-blue-500"
                    >
                      Speech and Language Therapy
                    </Link>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="flex justify-center items-center w-4 h-4 bg-gray-500 text-white rounded-full shadow-md mr-2">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <Link
                      href="/services/behavioral-intervention"
                      className="text-gray-600 hover:underline hover:text-blue-500"
                    >
                      Behavioral Intervention
                    </Link>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="flex justify-center items-center w-4 h-4 bg-gray-500 text-white rounded-full shadow-md mr-2">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <Link
                      href="/rainbow-kids-gallery"
                      className="text-gray-600 hover:underline hover:text-blue-500"
                    >
                      Rainbow Kids Gallery
                    </Link>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="flex justify-center items-center w-4 h-4 bg-gray-500 text-white rounded-full shadow-md mr-2">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <Link
                      href="/testimonials"
                      className="text-gray-600 hover:underline hover:text-blue-500"
                    >
                      Rainbow Kids Testimonials
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
