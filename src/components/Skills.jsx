import React from "react";
import htmlImg from "../assets/skills/html.png";
import cssImg from "../assets/skills/css.png";
import jsImg from "../assets/skills/javascript.png";
import reactImg from "../assets/skills/reactjs.png"; 
import tailwindImg from "../assets/skills/tailwindcss.png";
import bootstrapImg from "../assets/skills/bootstrap.jpg"; 
import marerialuiImg from "../assets/skills/materialui.png";
import javaImg from "../assets/skills/java.png";
import springImg from "../assets/skills/springboot.jpg";
import mySqlImg from "../assets/skills/mysql.png"; 
import postmanImg from "../assets/skills/postman.png";

export default function Skills() {
  const skills = [
    { title: "HTML", imageSrc: htmlImg },
    { title: "CSS", imageSrc: cssImg },
    { title: "JavaScript", imageSrc: jsImg },
    { title: "React", imageSrc: reactImg },
    { title: "Tailwind CSS", imageSrc: tailwindImg },
    { title: "Bootstrap", imageSrc: bootstrapImg },
    { title: "Material UI", imageSrc: marerialuiImg },
    { title: "Java", imageSrc: javaImg },
    { title: "Spring Boot", imageSrc: springImg },
    { title: "MySQL", imageSrc: mySqlImg },
    { title: "Postman", imageSrc: postmanImg },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900 scroll-mt-24">
      <h1 className="text-3xl md:text-4xl  text-center text-white mb-12 animate-textColorChange font-bold">
        SKILLS
      </h1>

      <div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 bg-gray-50 border-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all animate-borderGradient"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            {/* Option 2: circular border around logo */}
           <div>
              <img
                src={data.imageSrc}
                alt={data.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            <h3 className="text-lg font-medium text-gray-700">{data.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
