'use client'

import { motion } from 'framer-motion'

const projectsData = [
    {
        icon: "🐤",
        title: "Jaune - Application de suivi de consommation d’alcool",
        description:
            "Application mobile développée en collaboration avec un camarade de classe. L’objectif était d’aider les utilisateurs à suivre et limiter leur consommation d’alcool, avec authentification et stockage cloud.",
        tags: ["Flutter", "Firebase", "GitHub CI"],
        demoLink: "#",
        codeLink: "#",
    },
    {
        icon: "🌱",
        title: "Catalogue de Plantes",
        description:
            "Petit projet mobile permettant de consulter un catalogue de plantes en utilisant une API externe. Focus sur l’UI et la consommation d’API REST.",
        tags: ["Flutter", "API REST"],
        demoLink: "#",
        codeLink: "#",
    },
    {
        icon: "💻",
        title: "Portfolio Personnel",
        description:
            "Mon site portfolio développé avec Next.js pour présenter mes projets, compétences et expériences. Design moderne et responsive.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        demoLink: "#",
        codeLink: "#",
    },
]


const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="my-16 p-12 bg-[rgba(22,27,34,0.6)] backdrop-blur-xl border border-[rgba(88,166,255,0.1)] rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(88,166,255,0.5)] to-transparent" />

            <motion.h2
                className="text-3xl font-semibold mb-8 text-[#58a6ff] text-center relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Projets
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-[rgba(48,54,61,0.4)] backdrop-blur-sm rounded-lg overflow-hidden border border-[rgba(88,166,255,0.15)] transition-all duration-300 hover:border-[rgba(88,166,255,0.4)] hover:shadow-[0_12px_48px_rgba(88,166,255,0.15)] hover:-translate-y-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="h-32 bg-gradient-to-br from-[rgba(88,166,255,0.1)] to-[rgba(255,140,255,0.1)] flex items-center justify-center relative overflow-hidden">
                            <div
                                className="text-4xl"
                                style={{
                                    filter: 'drop-shadow(0 0 10px rgba(88, 166, 255, 0.5))'
                                }}
                            >
                                {project.icon}
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-3 text-white">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="bg-[rgba(88,166,255,0.1)] text-[#58a6ff] px-3 py-1 rounded-full text-xs font-medium border border-[rgba(88,166,255,0.2)]"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.demoLink}
                                    className="text-gray-400 hover:text-[#58a6ff] transition-colors duration-300 text-sm flex items-center gap-1"
                                >
                                    👁 Demo
                                </a>
                                <a
                                    href={project.codeLink}
                                    className="text-gray-400 hover:text-[#58a6ff] transition-colors duration-300 text-sm flex items-center gap-1"
                                >
                                    📁 Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default Projects
