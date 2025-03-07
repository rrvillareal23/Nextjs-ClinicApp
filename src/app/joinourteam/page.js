import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const JoinOurTeam = () => {
  return (
    <div>
      <header className="relative flex bg-cover bg-no-repeat bg-[#0079c2] min-h-48 text-white px-5 justify-center items-center">
        <div className="max-w-full text-center">
          <div className="mt-1 mb-1">
            <h1 className="mt-2 mb-2 font-sans">
              <span className="text-5xl font-extrabold">JOIN OUR TEAM</span>
            </h1>
            <h2>
              <span className="text-lg">
                Come join our talented team of therapists and be an integral
                part of our multi-disciplinary therapeutic team. “At Rainbow
                Kids Achievement Center, the sky’s the limit!”
              </span>
            </h2>
          </div>
        </div>
      </header>

      <div className=" flex items-center justify-center bg-gray-50">
        <div className="relative lg:flex-row max-w-[1410px] pt-[30px] pb-[30px] pr-[20px] pl-[20px]">
          {/* Left Column */}
          <div className="flex flex-col md:flex-row">
            <div className=" md:w-2/3 p-4 bg-white shadow-lg rounded-lg">
              <Image
                src="/big-logo.jpg"
                alt="Rainbow Kids"
                width={1091}
                height={198}
                className="mx-auto"
              />

              <h2 className="text-3xl font-extrabold mt-8">
                Join Our Talented Team of Therapists
              </h2>
              <p className="text-xl mt-4">
                Rainbow Kids Achievement Center was founded in 1998 by Patti
                Hill, MS, M.Ed, SLP.
              </p>
              <p className=" text-xl mt-2">
                Rainbow Kids Achievement Center services children, age’s birth
                to 7 years old, with a variety of delays and/or disabilities. We
                are always looking for bright and talented Occupational
                Therapists, Physical Therapists, Speech and Language Therapists
                and behavior staff. If you’re interested in joining our great
                team, please contact our office at 949-459-1658 or forward your
                resume to Susan Gaebler OTR/L,SWC , our clinical director, at
                susang@rainbowkids-ac.com.
              </p>

              <h2 className="text-3xl font-bold mt-8">
                We offer a multitude of attractive benefits:
              </h2>

              <ul className="list-disc mb-4 text-xl">
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Flexible hours
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Comprehensive benefit package for full-time employees
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  On-site childcare available
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Family friendly environment
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Access networking in-clinic with PT’s, OT’s and Early
                  Intervention Specialists
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Competitive pay
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-1">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Minimal charting required
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/3 md:ml-5">
              <div className="mb-4">
                <Image
                  src="/hand-banner.jpeg"
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
};

export default JoinOurTeam;
