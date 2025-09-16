import React from "react";
import novazoneImg from "../assets/company/novazone.png";

export default function Experience() {
  const experience = [
    {
      id: 1,
      role: "Java Full Stack Developer",
      organisation: "NovaZone",
      startDate: "Oct, 2024",
      endDate: "Present",
      location: "Hyderabad, India",
      experiences: ["React.js", "Spring Boot", "MySQL"],
      imageSrc: novazoneImg,
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-900 scroll-mt-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white mb-12 animate-textColorChange font-bold">
        EXPERIENCE
      </h1>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {experience.map((data) => (
          <div
            key={data.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 
                       bg-white shadow-lg hover:shadow-2xl transition-shadow 
                       rounded-2xl p-6 sm:p-8 mb-8"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            {/* Left: Image */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
              <img
                src={data.imageSrc}
                alt={data.role}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right: Content */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600">
                {data.role}
              </h2>
              <h3 className="text-lg font-medium text-gray-800">
                {data.organisation}
              </h3>

              <h4 className="mt-2 text-sm sm:text-base text-gray-600">
                <span className="text-green-600 font-medium">
                  {data.startDate} – {data.endDate}
                </span>{" "}
                |{" "}
                <span className="text-yellow-600 font-medium">
                  {data.location}
                </span>
              </h4>

              <ul className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                {data.experiences.map((exp, i) => (
                  <li
                    key={i}
                    className="text-gray-800 bg-yellow-100 px-3 py-1 rounded-lg text-sm sm:text-base"
                  >
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
