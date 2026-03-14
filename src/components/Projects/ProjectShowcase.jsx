import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    title: "Personal features and services",
    description:
      "It is important for a bank to have an online communication channel in order to provide a better experience and offer relevant personalized offers.",
  
      requirements: [
      "36 Compositions",
      "Lightning-fast creation",
      "Beautiful light and dark mode",
      "Fully customizable",
      "Minimal & thoughtful designs",
    ],
    clientCountry: "USA",
    industry: 'IT',
    projectDuration: '2 Weeks',
    projectType: 'Web App',
    frontend: [
      "React",
      "Tialwind",
    ],
    backend: [
      "Express",
      "Python",
    ]

    
    
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "New communication channel",
    description:
      "Billing technologies do not stand still and more people prefer to use mobile applications as the main channel of communication with banks.",
     
      requirements: [
      "36 Compositions",
      "Lightning-fast creation",
      "Beautiful light and dark mode",
      "Fully customizable",
      "Minimal & thoughtful designs",
    ],
    clientCountry: "UK",
    industry: 'Retail',
    projectDuration: '5 Weeks',
    projectType: 'Mobile App',
    frontend: [
      "React",
      "HTML",
      "CSS",
    ],
    backend: [
      "Ract",
      "ML",
      "SS",
    ],

    
    
  },
];

const ProjectShowcase = () => {
  const navigate = useNavigate();

  const handleDetails = (project) => {
    navigate("/project-details", { state: project });
  };

  return (
    <section className="w-full bg-[#0A0A0A] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-white text-lg font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm flex-grow">
                {project.description}
              </p>

              <div className="flex gap-3 justify-center mt-6">
                <button className="px-4 py-2 text-sm rounded-lg bg-cyan-500 text-white">
                  View
                </button>

                <button
                  onClick={() => handleDetails(project)}
                  className="px-4 py-2 text-sm rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-800"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;