"use client";

import React, { useState } from "react";

function Projects() {
  const [hoverCard, setHoverCard] = useState<number | null>(null);
  const projects = [
    {
      id: 1,
      title: "Planify",
      description: "A brief description of the project.",
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of the project.",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of the project.",
    },
    {
      id: 4,
      title: "Project 4",
      description: "A brief description of the project.",
    },
    {
      id: 5,
      title: "Project 5",
      description: "A brief description of the project.",
    },
    {
      id: 6,
      title: "Project 6",
      description: "A brief description of the project.",
    },
  ];
  return (
    <section className="bg-[#EAEAEA] mx-auto px-4 py-16">
      <h2 className="text-[#2B2C32] leading-tight text-5xl font-bold text-center mb-2">
        NUESTRO TRABAJO
      </h2>
      <p className="text-xl text-center text-gray-600 mb-12">
        Aquí puedes ver algunos de nuestros proyectos más recientes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
              hoverCard === project.id
                ? "transform -translate-y-2 shadow-xl"
                : ""
            }`}
            onMouseEnter={() => setHoverCard(project.id)}
            onMouseLeave={() => setHoverCard(null)}
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
