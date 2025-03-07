import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
export default function BehaviorIntervention() {
  return (
    <div>
      <header className="relative flex bg-cover bg-no-repeat bg-[#f78f13] min-h-48 text-white px-5 justify-center items-center">
        <div className="max-w-full text-center">
          <div className="mt-1 mb-1">
            <h1 className="mt-2 mb-2 font-sans">
              <span className="text-5xl font-extrabold">
                BEHAVIORAL INTERVENTION
              </span>
            </h1>
            <h2>
              <span className="text-lg">“Where every child achieves…”</span>
            </h2>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center bg-gray-50">
        <div
          className="relative lg:flex-row max-w-[1410px] pt-[50px] pb-[30px] pr-[20px] pl-[20px] "
          style={{
            backgroundPosition: "50% 33px",
          }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Behavioral Intervention
              </h3>
              <p className="mb-4 text-xl">
                Applied Behavior Analysis (ABA) is a scientific approach to
                understanding behavior and how it is affected by the
                environment. Rainbow Kids Achievement Center behavioral services
                uses the scientific principles of behavior for skills
                acquisition as well as to reduce maladaptive behaviors while
                increasing adaptive behaviors.
              </p>

              <p className="mb-4 text-xl">
                Rainbow Kids Achievement Center uses ABA principles and
                techniques to advance beginning learning skills such as looking,
                listening and imitating as well as more advanced skills such as
                conversation and social skills.
              </p>

              <p className="mb-4 text-xl">
                Rainbow Kids Achievement Center provides in home and in center
                1:1 intervention services, in collaboration with the caregivers
                to provide an individualized program utilizing current research
                and techniques. Rainbow Kids’ behavioral services staff includes
                BCBA, BCBA interns and behavior therapists.
              </p>

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
                  src="/services/BT-photo.jpg"
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
