'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-[#0d1117] text-gray-400 border-t border-gray-800 mt-16">
            <div className="container mx-auto px-6 py-12 flex flex-col items-center text-center space-y-6">

                {/* Nom + description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] bg-clip-text text-transparent">
                        Fabien Mélinda
                    </h2>
                    <p className="mt-3 text-sm max-w-md">
                        Ingénieur Full-Stack passionnée, spécialisée dans la création
                        d’expériences web modernes et performantes.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex space-x-6 pb-6"
                >
                    {[
                        {
                            name: 'LinkedIn',
                            url: 'https://linkedin.com/in/tonprofil',
                            icon: <FaLinkedin />,
                            glowColor: '#58a6ff'
                        },
                        {
                            name: 'Email',
                            url: 'mailto:tonemail@example.com',
                            icon: <FaEnvelope />,
                            glowColor: '#bc8cff'
                        }
                    ].map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15 }}
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(88,166,255,0.05)] text-white text-2xl transition-colors"
                            style={{
                                filter: `drop-shadow(0 0 8px ${social.glowColor})`,
                                animation: 'iconGlow 2s ease-in-out infinite alternate'
                            }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Fabien Mélinda. Tous droits réservés.
            </div>

            {/* Animation Glow */}
            <style jsx>{`
                @keyframes iconGlow {
                    0% { filter: drop-shadow(0 0 6px rgba(88,166,255,0.6)); }
                    100% { filter: drop-shadow(0 0 14px rgba(88,166,255,0.9)); }
                }
            `}</style>
        </footer>
    )
}

export default Footer
