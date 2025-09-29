'use client'

import { motion } from 'framer-motion'

const experienceData = [
    {
        title: "Ingénieur d’étude et développement",
        company: "Axopen",
        date: "Novembre 2024 - Présent",
        description: [
            "Conception et modélisation de bases de données dès les phases initiales de projet.",
            "Analyse des besoins fonctionnels et proposition d’évolutions pour optimiser les performances et l’expérience utilisateur.",
            "Développement fullstack d’applications web avec React, Next.js, PHP Laravel, NestJS, Angular et Spring Boot.",
            "Maintenance évolutive et corrective des solutions développées.",
            "Support technique et accompagnement client.",
            "Interventions dans les domaines associatif, logistique et supply chain."
        ]
    },
    {
        title: "Développeur Full-Stack (Stage)",
        company: "Sogeti – Client SNCF",
        date: "Mars 2024 - Septembre 2024",
        description: [
            "Développement d’applications web avec Angular et Spring Boot.",
            "Participation à la conception et à l’intégration de nouvelles fonctionnalités.",
            "Tests, débogage et optimisation des performances."
        ]
    },
    {
        title: "Proxy Product Owner",
        company: "TotalEnergies",
        date: "Septembre 2022 - Janvier 2023",
        description: [
            "Mise en pratique des méthodologies agiles.",
            "Rédaction et gestion des tickets utilisateurs.",
            "Organisation et participation aux sessions de poker planning.",
            "Analyse et formalisation des besoins métiers."
        ]
    }
]

const Experience = () => {
    return (
        <motion.section
            id="experience"
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
                Expérience Professionnelle
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
            </motion.h2>

            <div className="grid gap-8 mt-8">
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="bg-[rgba(48,54,61,0.4)] backdrop-blur-sm p-8 rounded-lg border border-[rgba(88,166,255,0.15)] relative overflow-hidden transition-all duration-300 hover:border-[rgba(88,166,255,0.4)] hover:shadow-[0_8px_32px_rgba(88,166,255,0.1)] hover:-translate-y-1"
                        initial={{ opacity: 0, y: -30 }} // Animation depuis le haut
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            ease: "easeOut" // Mouvement fluide
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#58a6ff] to-[#bc8cff]" />

                        <h3 className="text-xl font-semibold text-white mb-2">
                            {exp.title}
                        </h3>

                        <div className="text-[#58a6ff] font-medium mb-2">
                            {exp.company}
                        </div>

                        <div className="text-gray-400 text-sm mb-4">
                            {exp.date}
                        </div>

                        <ul className="list-disc list-inside space-y-2 text-[#c9d1d9] leading-relaxed">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default Experience
;
