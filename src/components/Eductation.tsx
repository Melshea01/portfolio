'use client'

import { motion } from 'framer-motion'

const educationData = [
    {
        title: "Baccalauréat",
        institution: "Saint Michel des Batignolles Lycée",
        date: "2018 - 2021",
        description: [
            "Formation générale avec spécialités scientifiques",
            "Préparation aux études supérieures en sciences",
            "Développement des bases mathématiques et physiques"
        ],
        level: "Lycée"
    },
    {
        title: "Prépa Intégrée - Maths Physique",
        institution: "Polytech Angers",
        date: "2021 - 2023",
        description: [
            "Formation scientifique approfondie en mathématiques et physique",
            "Acquisition des fondamentaux pour l'ingénierie",
            "Préparation au cycle ingénieur",
            "Développement de la rigueur scientifique et méthodologique"
        ],
        level: "Prépa"
    },
    {
        title: "Cycle Ingénieur - Spécialité Informatique",
        institution: "Polytech Lyon",
        date: "2023 - 2026",
        description: [
            "Formation d'ingénieur en informatique",
            "Développement logiciel et architecture système",
            "Gestion de projet et méthodologies agiles",
            "Stage en entreprise et projets industriels"
        ],
        level: "Ingénieur"
    }
]

const Education = () => {
    return (
        <motion.section
            id="education"
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
                Parcours Scolaire
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
            </motion.h2>

            <div className="relative mt-12">
                {/* Ligne chronologique principale (centrée) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#58a6ff] via-[#7c3aed] to-[#bc8cff] transform -translate-x-0.5" />

                <div className="space-y-16">
                    {educationData.map((edu, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                className="relative flex items-start justify-center"
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Point sur la timeline (toujours centré) */}
                                <motion.div
                                    className="absolute left-1/2 top-6 w-4 h-4 rounded-full border-2 border-[#58a6ff] bg-[rgba(22,27,34,1)] z-10 transform -translate-x-1/2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2 + 0.3,
                                        type: "spring",
                                        stiffness: 300
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(88,166,255,0.6)" }}
                                />

                                {/* Ligne de connexion */}
                                <div className={`absolute top-8 w-8 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] z-5 ${
                                    isLeft ? 'left-1/2 -translate-x-2' : 'right-1/2 translate-x-2'
                                }`} />

                                {/* Badge niveau */}
                                <motion.div
                                    className={`absolute top-2 px-3 py-1 rounded-full text-xs font-medium z-20 ${
                                        isLeft ? 'left-1/2 ml-6' : 'right-1/2 mr-6'
                                    } ${
                                        edu.level === 'Lycée' ? 'bg-[rgba(34,197,94,0.2)] text-green-400 border border-green-400/30' :
                                            edu.level === 'Prépa' ? 'bg-[rgba(249,115,22,0.2)] text-orange-400 border border-orange-400/30' :
                                                'bg-[rgba(139,92,246,0.2)] text-purple-400 border border-purple-400/30'
                                    }`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.2 + 0.5
                                    }}
                                    viewport={{ once: true }}
                                >
                                    {edu.level}
                                </motion.div>

                                {/* Container pour positionner la carte */}
                                <div className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                                    {/* Contenu */}
                                    <motion.div
                                        className="w-2/5 bg-[rgba(48,54,61,0.4)] backdrop-blur-sm p-8 rounded-lg border border-[rgba(88,166,255,0.15)] relative overflow-hidden transition-all duration-300 hover:border-[rgba(88,166,255,0.4)] hover:shadow-[0_8px_32px_rgba(88,166,255,0.1)] hover:-translate-y-1"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className={`absolute top-0 w-1 h-full bg-gradient-to-b from-[#58a6ff] to-[#bc8cff] ${isLeft ? 'left-0' : 'right-0'}`} />

                                        {/* Effet de brillance */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(88,166,255,0.05)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10">
                                            <h3 className={`text-xl font-semibold text-white mb-2 ${isLeft ? 'text-left' : 'text-right'}`}>
                                                {edu.title}
                                            </h3>

                                            <div className={`text-[#58a6ff] font-medium mb-2 flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                                                {!isLeft && (
                                                    <>
                                                        {edu.institution}
                                                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zM6 8H4v6h12V8h-2v1a1 1 0 11-2 0V8H8v1a1 1 0 11-2 0V8zm2-2V5a1 1 0 011-1h2a1 1 0 011 1v1H8z" clipRule="evenodd" />
                                                        </svg>
                                                    </>
                                                )}
                                                {isLeft && (
                                                    <>
                                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zM6 8H4v6h12V8h-2v1a1 1 0 11-2 0V8H8v1a1 1 0 11-2 0V8zm2-2V5a1 1 0 011-1h2a1 1 0 011 1v1H8z" clipRule="evenodd" />
                                                        </svg>
                                                        {edu.institution}
                                                    </>
                                                )}
                                            </div>

                                            <div className={`text-gray-400 text-sm mb-4 flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                                                {!isLeft && (
                                                    <>
                                                        {edu.date}
                                                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                        </svg>
                                                    </>
                                                )}
                                                {isLeft && (
                                                    <>
                                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                        </svg>
                                                        {edu.date}
                                                    </>
                                                )}
                                            </div>

                                            <ul className={`space-y-2 text-[#c9d1d9] leading-relaxed`}>
                                                {edu.description.map((item, i) => (
                                                    <motion.li
                                                        key={i}
                                                        className={`flex items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'} ${isLeft ? 'text-left' : 'text-right'}`}
                                                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            duration: 0.4,
                                                            delay: index * 0.2 + i * 0.1 + 0.6
                                                        }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <span className={`inline-block w-2 h-2 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full mt-2 flex-shrink-0 ${isLeft ? 'mr-3' : 'ml-3'}`} />
                                                        <span>{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Flèche de progression */}
                <motion.div
                    className="absolute left-1/2 bottom-[-20px] w-6 h-6 flex items-center justify-center transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <svg className="w-4 h-4 text-[#58a6ff]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Education
