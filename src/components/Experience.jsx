import React from "react";
import novazoneImg from "../assets/company/novazone.png"

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
      <h1 className="text-3xl md:text-4xl text-center text-white mb-12  animate-textColorChange font-bold">
        EXPERIENCE
      </h1>

      <div className="container mx-auto px-4 0 br">
        {experience.map((data) => (
          <div
            key={data.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white p-2 border-4 rounded-full animate-borderGradient mb-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            {/* Left: Image */}
            <div className="w-28 h-28 flex-shrink-0 ">
              <img
                src={data.imageSrc} 
                alt={data.role}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right: Content */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-indigo-600">
                {data.role}
              </h2>
              <h4 className="mt-1 text-gray-600">
                <span className="text-green-600 font-medium">
                  {data.startDate} – {data.endDate}
                </span>{" "}
                |{" "}
                <span className="text-yellow-600 font-medium">
                  {data.location}
                </span>
              </h4>

              <ul className="mt-3 flex flex-wrap gap-2">
                {data.experiences.map((exp, i) => (
                  <li
                    key={i}
                    className="text-gray-700 bg-yellow-50 px-3 py-1 rounded-lg "
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
