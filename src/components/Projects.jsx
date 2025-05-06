import React, { useState } from 'react'
import aiApp from '../../public/ai-app.jpeg'
import aiapp from '../../public/aiApp.jfif'
import space from '../../public/space.jfif'
import gameStore from '../../public/gamestore.jfif'
import socialMediaImages from './socialMediaImages'
import figmaLinks from './figmaLinks'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "UI-UX",
            description: "Complete brand identity design for a modern tech startup",
            image: aiApp,
            category: "UI-UX",
            details: {
                type: "figma",
                links: figmaLinks
            }
        },
        {
            id: 2,
            title: "Social Media",
            description: "Instagram campaign design for a fashion brand",
            image: aiapp,
            category: "Social Media",
            details: {
                type: "gallery",
                images: socialMediaImages
            }
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);
    const closeModal = () => setSelectedProject(null);

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Projects</h2>
                    <p className="mt-4 text-lg text-gray-600">A showcase of my best design work</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            <div className="relative h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                                <button
                                    className="mt-4 text-purple-600 font-semibold hover:text-purple-700 cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    View Projects →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto py-10 px-4" onClick={closeModal}>
                    <div
                        className="bg-white w-full max-w-4xl max-h-screen overflow-y-auto p-6 rounded-lg shadow-xl mx-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-2xl font-bold mb-4">{selectedProject.title} Details</h3>

                        {selectedProject.details?.type === "figma" && (
                            <ul className="list-disc pl-5 space-y-2">
                                {selectedProject.details.links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline cursor-pointer"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {selectedProject.details?.type === "gallery" && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                {selectedProject.details.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Project Image ${index}`}
                                        className="rounded-lg object-cover w-full h-40"
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        )}

                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-red-500 text-xl hover:text-red-700"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
