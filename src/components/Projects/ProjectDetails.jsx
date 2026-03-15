
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChartLine, FaCheckCircle, FaClock, FaUser } from "react-icons/fa";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state;

  // Status color function
  const getStatusColor = (status) => {
    if (!status) return "text-gray-400";

    const value = status.toLowerCase();

    if (value === "completed") return "text-green-400";
    if (value === "under development") return "text-yellow-400";
    if (value === "not completed") return "text-red-400";

    return "text-gray-400";
  };

  if (!project) {
    return (
      <section className="w-full bg-[#070b12] text-white py-20 text-center">
        No project data found
      </section>
    );
  }

  return (
    <section className="w-full bg-[#000000] text-white">

      {/* HERO IMAGE */}
      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[520px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Title */}
        <div className="absolute bottom-10 left-6 md:left-16">
          <h1 className="text-3xl md:text-5xl font-bold">
            {project.title}
          </h1>
          <p className="mt-15">

        </p>
        </div>
        
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* Success Rate */}
          <div className="bg-neutral-900 p-5 rounded-xl border border-neutral-700 flex items-center gap-4">
            <FaChartLine className="text-[var(--primary-color)] text-xl" />
            <div>
              <p className="text-sm text-neutral-400">Success Rate</p>
              <p className="text-lg font-semibold">
                {project.projectSuccessRate}
              </p>
            </div>
          </div>

          {/* Duration */}
          <div className="bg-neutral-900 p-5 rounded-xl border border-neutral-700 flex items-center gap-4">
            <FaClock className="text-[var(--primary-color)] text-xl" />
            <div>
              <p className="text-sm text-neutral-400">Duration</p>
              <p className="text-lg font-semibold">
                {project.duration}
              </p>
            </div>
          </div>

          {/* On Time Delivery */}
          <div className="bg-neutral-900 p-5 rounded-xl border border-neutral-700 flex items-center gap-4">
            <FaCheckCircle className="text-[var(--primary-color)] text-xl" />
            <div>
              <p className="text-sm text-neutral-400">On Time Delivery</p>
              <p className="text-lg font-semibold">
                {project.deliveryTime}
              </p>
            </div>
          </div>

          {/* Client */}
          <div className="bg-neutral-900 p-5 rounded-xl border border-neutral-700 flex items-center gap-4">
            <FaUser className="text-[var(--primary-color)] text-xl" />
            <div>
              <p className="text-sm text-neutral-400">Client</p>
              <p className="text-lg font-semibold">
                {project.clientName}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview */}
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">
                Overview
              </h3>

              <p className="text-green-200 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700">
              <h3 className="text-xl font-semibold mb-6">
                Client Requirements
              </h3>

              <ul className="space-y-3">
                {project.requirements?.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 items-start bg-[var(--primary-color)]/5 p-3 rounded-lg"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                    <span className="text-green-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">

            {/* Project Info */}
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">
                Project Info
              </h3>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-400">Client Country</span>
                  <span className="text-green-200">{project.clientCountry}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Industry</span>
                  <span className="text-green-200">{project.industry}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Project Type</span>
                  <span className="text-green-200">{project.projectType}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-green-200">{project.duration}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className={`font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[var(--primary-color)]/30 text-green-500 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Client */}
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 flex flex-col gap-4">

              <div className="flex items-center gap-4">
                <img
                  src={project.clientImg}
                  alt="client"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">{project.clientName}</p>
                  <p className="text-sm text-gray-400">Project Client</p>
                </div>
              </div>

              

            </div>

            {/* Buttons */}
              <div className="flex flex-col gap-3 mt-2">
                <button
                  onClick={() => window.open(project.liveDemo, "_blank")}
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer transition text-white text-sm font-medium"
                >
                  Live Demo
                </button>

                <button
                  onClick={() => navigate(-1)}
                  className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 cursor-pointer transition text-white text-sm font-medium"
                >
                  Go Back To Projects
                </button>

                

              </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default ProjectDetails;

