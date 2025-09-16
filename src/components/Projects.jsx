import React from "react";

export default function Projects() {
  const project = [
    {
      key: 1,
      title: "React - Marathi To English Learn",
      imageSrc: "https://play-lh.googleusercontent.com/xLTivowE-38epvYd_w63Y7oKuCqZcnc7ucc0QoSzR5CMvF-l6PDtcGh_P0ZUAI4fXKU",
      description: "This is a project made with complete React js.",
      source: "https://www.github.com"
    },
    {
      key: 2,
      title: "React - Zerodha Project",
      imageSrc: "https://mir-s3-cdn-cf.behance.net/projects/404/e8bb3a193517535.Y3JvcCwxNzk0LDE0MDQsMTY0LDA.jpg",
      description: "This is a project made with complete React js.",
      source: "https://www.github.com"
    },
    {
      key: 3,
      title: "Spring Boot - Banking Project",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZt--nb8KEcqTaaABktx8xFodI42iM4NoBQ&s",
      description: "This is a project made with complete Spring Boot & MySQL.",
      source: "https://www.github.com"
    },
    {
      key: 4,
      title: "Spring Boot - NBA",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOIQF374h0hjEVYCHM8oCyAp9NqEwfIk-rA&s",
      description: "This is a project made with complete Spring Boot & MySQL.",
      source: "https://www.github.com"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 scroll-mt-24">
      <h1 className="text-3xl md:text-4xl text-center text-white mb-12 animate-textColorChange font-bold">
        PROJECTS
      </h1>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {project.map((data) => (
          <div
            key={data.key}
            className="bg-gray-900 text-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 border-yellow-400 p-2 border-4 animate-borderGradient mb-4"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <div className="flex justify-center items-center p-4">
              <img
                src={data.imageSrc}
                alt={data.title}
                className="w-64 h-48 object-cover rounded-lg border-yellow-400 p-2 border-4 animate-borderGradient mb-4"
              />
            </div>

            <div className="p-5 text-center">
              <h5 className="text-xl font-semibold mb-2">{data.title}</h5>
              <p className="text-gray-300 mb-4">{data.description}</p>
              <div className="flex justify-center gap-4">
                {/* <a
                  href={data.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium transition-colors"
                >
                  Code
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
