import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state;

  if (!project) {
    return <div className="text-white p-10">No project data found</div>;
  }

  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Title and Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {project.title}
          </h2>
          <div className="flex gap-3">
            <button className="px-5 py-2 border rounded-lg text-sm hover:bg-gray-100 transition">
              Preview
            </button>
            <button className="px-5 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
              Purchase $98
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="w-full mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[280px] md:h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Overview & Project Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>

            <p className="text-gray-700 leading-relaxed">{project.description}</p>

            {/* Project Info */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-3">
              <div className="flex flex-wrap gap-4">
                <span className="font-semibold text-gray-600">Client:</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-800">{project.clientCountry}</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="font-semibold text-gray-600">Industry:</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-800">{project.industry}</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="font-semibold text-gray-600">Project Type:</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-800">{project.projectType}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="font-semibold text-gray-600">Frontend:</span>
                {project.frontend?.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full">{item}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="font-semibold text-gray-600">Backend:</span>
                {project.backend?.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Client Requirements & Stats */}
          <div className="space-y-6">

            <h3 className="text-xl font-semibold mb-4">Client Requirements</h3>

            <ul className="space-y-3">
              {project.requirements?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <span className="w-3 h-3 bg-black rounded-full mt-1"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Author Info */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="author"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">@chelsie</p>
                <p className="text-sm text-gray-500">Chelsie Haylie</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-10 text-gray-700 mt-4">
              <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md w-32">
                <p className="text-lg font-semibold">4.96★</p>
                <p className="text-sm text-gray-500">Ratings</p>
              </div>

              <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md w-32">
                <p className="text-lg font-semibold">8+</p>
                <p className="text-sm text-gray-500">Years selling</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;