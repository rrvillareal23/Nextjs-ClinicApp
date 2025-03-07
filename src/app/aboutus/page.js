"use client";
import Image from "next/image";

const RainbowKidsSection = () => {
  return (
    <div className="bg-gray-100">
      <header className="relative flex bg-cover bg-no-repeat bg-[#e51937] min-h-48 text-white px-5 justify-center items-center">
        <div className="max-w-full text-center">
          <div className="mt-1 mb-1">
            <h1 className="mt-2 mb-2 font-sans">
              <span className="text-5xl font-extrabold">ABOUT US</span>
            </h1>
            <h2>
              <span className="text-lg">
                The spirit of Rainbow Kids Achievement Center is “where every
                child achieves.”
              </span>
            </h2>
          </div>
        </div>
      </header>

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div
          className="relative flex flex-col lg:flex-row max-w-[1400px] pt-[50px] pb-[50px] pr-[20px] pl-[20px] "
          style={{
            backgroundPosition: "50% 33px",
          }}
        >
          {/* Left Column */}
          <div className="lg:w-2/3 bg-white p-7 bg-repeat mr-6 border border-gray-300">
            <Image
              src="/big-logo.jpg"
              alt="Rainbow Kids"
              width={1091}
              height={198}
              className="mx-auto"
            />

            <h2 className="text-3xl font-extrabold mt-8">
              The Rainbow Kids Story
            </h2>
            <p className="text-xl mt-4">
              Rainbow Kids Achievement Center was founded in 1998 by Patti Hill,
              MS, M.Ed, SLP.
            </p>
            <p className=" text-xl mt-2">
              As a parent of a child with special needs, Patti was frustrated by
              the difficulties of having multiple therapies in different
              locations and the inability to coordinate her child’s intervention
              with treating therapists. She felt the same frustration as a
              professional treating children who were receiving services from
              more then one provider. In an effort to make both a personal and
              professional difference for children and families, Patti developed
              a unique program in Orange County that could provide a total team
              approach to providing intervention. In September 1998, a
              multidisciplinary team of pediatric specialists in Physical,
              Occupational, and Speech Therapy along with a Special Education
              Specialist launched the first multidisciplinary in home therapy
              program in Orange County. Two years later, Rainbow Kids
              Achievement Center expanded their service delivery from in-home to
              include a clinic program located in Rancho Santa Margarita, CA.
              Children were now able to transition from the home environment to
              a center based program without a break in services or change in
              therapists. Rainbow Kids Achievement Center has helped more then
              20,000 children and families since it began in 1998. The legacy to
              provide outstanding multidisciplinary intervention to families and
              children in Orange County continues today.
            </p>

            <h2 className="text-3xl font-bold mt-8">Mission Statement</h2>
            <p className=" text-xl mt-4">
              The spirit of Rainbow Kids Achievement Center is “where every
              child achieves.” The goal is to provide exceptional
              multidisciplinary pediatric therapy and early intervention
              services to children with special needs while supporting and
              including the family. Rainbow Kids offers our team flexibility,
              collaboration, and ongoing learning. Rainbow Kids Achievement
              Center’s approach to child, family, and team ensures success.
            </p>

            <h2 className="text-3xl font-bold mt-8">Philosophy</h2>
            <p className=" text-xl mt-4">
              Provide current, effective, and exceptional early childhood
              special education, occupational therapy, physical therapy, speech
              and language therapy, behavioral services, feeding therapy, and
              group programming. Hire qualified, skilled, professional
              specialists to provide a personalized, integrated, therapeutic
              program for each child and family. Create a culture that embraces
              creativity, continuous learning, inclusion and dynamic
              intervention.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 bg-white pr-6 pl-6 border border-gray-300">
            <h3 className="text-2xl font-bold mb-4 pt-5">About Rainbow Kids</h3>
            <p className=" text-lg">
              All teachers and therapists at Rainbow Kids Achievement Center are
              licensed, certified and/or credentialed by the appropriate state
              and national professional organizations. All staff have extensive
              post graduate education to provide state of the art, evidence
              based practice to meet the needs of each individual child and
              family. We support professional development through on-going
              continuing education, mentoring and peer to peer collaboration.
              The team at Rainbow Kids Achievement Center is here to meet the
              needs of your individual child and family.
            </p>

            <p className=" text-lg mt-2">
              Currently Rainbow Kids Achievement Center has more than 20
              treating specialists (occupational therapists, physical
              therapists, behaviorists and speech and language therapists) as
              well as educators to meet your individual child’s, family and
              scheduling need.
            </p>

            <h3 className="text-2xl font-bold mt-8">Our Services</h3>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <a
                  href="https://rainbowkids-ac.com/services/occupational-and-feeding-therapy/"
                  className="text-blue-600 hover:underline"
                >
                  Occupational and Feeding Therapy
                </a>
              </li>
              <li>
                <a
                  href="https://rainbowkids-ac.com/services/physical-therapy/"
                  className="text-blue-600 hover:underline"
                >
                  Physical Therapy
                </a>
              </li>
              <li>
                <a
                  href="https://rainbowkids-ac.com/services/speech-and-language-therapy/"
                  className="text-blue-600 hover:underline"
                >
                  Speech and Language Therapy
                </a>
              </li>
              <li>
                <a
                  href="https://rainbowkids-ac.com/services/behavioral-intervention/"
                  className="text-blue-600 hover:underline"
                >
                  Behavioral Intervention
                </a>
              </li>
              <li>
                <a
                  href="https://rainbowkids-ac.com/services/early-childhood-special-education/"
                  className="text-blue-600 hover:underline"
                >
                  Early Childhood Special Education
                </a>
              </li>
              <li>
                <a
                  href="https://rainbowkids-ac.com/rainbow-kids-gallery/"
                  className="text-blue-600 hover:underline"
                >
                  Rainbow Kids Gallery
                </a>
              </li>
              <li>
                <a
                  href="https://rainbowkids-ac.com/testimonials/"
                  className="text-blue-600 hover:underline"
                >
                  Rainbow Kids Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainbowKidsSection;
