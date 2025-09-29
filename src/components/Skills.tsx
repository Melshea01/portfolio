'use client'

import { motion } from 'framer-motion'

const skillsData = [
    {
        category: "Frameworks",
        skills: [
            { name: "PHP (Laravel / Symfony)", level: 4.5 },
            { name: "Next.js / NestJS", level: 4 },
            { name: "Angular 2", level: 3 },
            { name: "Spring Boot", level: 3 },
            { name: "Flutter", level: 3 },
        ]
    },
    {
        category: "Bases de données",
        skills: [
            { name: "MySQL", level: 3.5 },
            { name: "ElasticSearch", level: 3.5 },
        ]
    },
    {
        category: "DevOps & Outils",
        skills: [
            { name: "GitLab CI / Jenkins", level: 3.5 },
            { name: "Git / GitHub", level: 3 }, // tu l’avais déjà listé
            { name: "Docker", level: 2 },       // d’après ton premier tableau
        ]
    }
]

const Skills = () => {
    const getLevelColor = (level: number) => {
        if (level >= 4.5) return "bg-green-500"
        if (level >= 4) return "bg-green-400"
        if (level >= 3) return "bg-yellow-400"
        if (level >= 2) return "bg-orange-400"
        return "bg-red-400"
    }

    return (
        <motion.section
            id="skills"
            className="my-16 p-12 bg-[rgba(22,27,34,0.6)] backdrop-blur-xl border border-[rgba(88,166,255,0.1)] rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-8 text-white">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillsData.map((category) => (
                    <div key={category.category} className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                        <ul className="space-y-3">
                            {category.skills.map((skill) => (
                                <li key={skill.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-300">{skill.name}</span>
                                        <span className="text-sm text-gray-400">{skill.level} / 5</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div
                                            className={`h-2.5 rounded-full ${getLevelColor(skill.level)}`}
                                            style={{ width: `${(skill.level / 5) * 100}%` }}
                                        ></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default Skills
