'use client'

import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.section
            id="about"
            className="my-16 p-12 bg-[rgba(22,27,34,0.6)] backdrop-blur-xl border border-[rgba(88,166,255,0.1)] rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(88,166,255,0.5)] to-transparent" />

            <motion.h2
                className="text-3xl font-semibold mb-8 text-[#58a6ff] text-center relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                À propos
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] rounded-full" />
            </motion.h2>

            <motion.p
                className="text-center text-[#c9d1d9] text-lg leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                Ingénieur avec une passion pour le développement logiciel et l&apos;architecture système.
                J&apos;aime créer des solutions innovantes qui résolvent des problèmes complexes et
                améliorer l&apos;expérience utilisateur à travers des technologies modernes.
            </motion.p>
        </motion.section>
    )
}

export default About
