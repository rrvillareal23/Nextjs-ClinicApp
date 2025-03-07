import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PhysicalTherapy() {
  return (
    <div>
      <header className="relative flex bg-cover bg-no-repeat bg-[#f78f13] min-h-48 text-white px-5 justify-center items-center">
        <div className="max-w-full text-center">
          <div className="mt-1 mb-1">
            <h1 className="mt-2 mb-2 font-sans">
              <span className="text-5xl font-extrabold">PHYSICAL THERAPY</span>
            </h1>
            <h2>
              <span className="text-lg">“Empowering movement and growth…”</span>
            </h2>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center bg-gray-50">
        <div className="relative lg:flex-row max-w-[1400px] pt-[50px] pb-[30px] pr-[20px] pl-[20px]">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 p-9 bg-white shadow-lg rounded-lg">
              <h1 className="text-2xl font-extrabold mb-4">Physical Therapy</h1>
              <p className="mb-4 text-xl">
                Pediatric Physical Therapy utilizes specially designed exercises
                (usually in the form of play) to help children improve their
                physical abilities. Physical therapists evaluate and treat
                dysfunctions in the area of gross motor development. Physical
                therapists help children improve balance, strength,
                coordination, and locomotion skills.
              </p>

              <p className="mb-4 text-xl">
                Rainbow Kids’ pediatric physical therapists have specialty
                certifications in the following:
              </p>

              <h3 className="text-xl font-bold mt-4 mb-2">
                Total Motion Release (TMR) for treatment of the following:
              </h3>
              <ul className="list-disc mb-4 text-xl">
                <li className="flex items-center mb-2">
                  <span className="flex w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Torticollis
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Infantile Postural Asymmetry
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Plagiocephalyy
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-4 mb-2">
                Dynamic Movement Intervention (DMI) for treatment of the
                following:
              </h3>
              <ul className="list-disc mb-4 text-xl">
                <li className="flex mb-2">
                  <span className="flex w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2 mt-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Any type of gross motor delay including Down’s Syndrome,
                  Cerebral Palsy, developmental delay, hypotonia, chromosomal
                  abnormalities/genetic disorders, spinal cord lesions or
                  acquired brain injury, prematurity, and orthopedic conditions.
                </li>
              </ul>

              <p className="mb-4 text-xl">
                DMI harnesses the power of neuroplasticity to make rapid, long
                lasting changes in a child’s brain so they can learn new skills
                and reach their developmental milestones.
              </p>

              <p className="mb-4 text-xl">
                Rainbow Kids is now offering DMI physical therapy intensives
                provided by a level C DMI certified therapist. Please contact
                Rainbow Kids at (949) 459-1658 for more information regarding
                DMI physical therapy intensive intervention.
              </p>

              <p className="mb-4 text-xl">
                The Rainbow Kid’s physical therapists provide comprehensive
                diagnostic and ongoing therapy services for a wide range of
                childhood disorders.
              </p>

              <h4 className="text-xl font-bold mt-4 mb-2">
                How can Physical Therapy help?
              </h4>
              <p className="mb-4 text-xl">
                Physical therapy can help if your child shows:
              </p>

              <ul className="list-disc mb-4 text-xl">
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Delayed rolling
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Delayed crawling
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Poor balance
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Low tone
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Toe walking
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Flat head
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Rotational preference in head and neck
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Poor coordination
                </li>
                <li className="flex items-center mb-2">
                  <span className="flex justify-center items-center w-4 h-4 bg-blue-500 text-white rounded-full shadow-md mr-2">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  Poor ball skills
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/services"
                  className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition duration-300"
                >
                  BACK TO OUR SERVICES
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/3 md:ml-5">
              <Image
                src="/services/PT-photo.jpg"
                alt="Physical Therapy"
                width={1500}
                height={1500}
                className="w-full h-auto rounded-lg shadow-lg"
              />

              <section className="bg-white p-4 rounded-lg shadow-lg mt-4">
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
