'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            // Calculer la hauteur du header (environ 80px)
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <motion.header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[rgba(13,17,23,0.9)] backdrop-blur-xl border-b border-[rgba(88,166,255,0.2)]'
                    : 'bg-[rgba(13,17,23,0.8)] backdrop-blur-sm border-b border-[rgba(88,166,255,0.1)]'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <nav className="flex justify-between items-center py-4 px-8 max-w-6xl mx-auto">
                <motion.div
                    className="text-2xl font-bold text-white flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                >
          <span
              className="text-3xl animate-pulse"
              style={{
                  filter: 'drop-shadow(0 0 10px #58a6ff)',
                  animation: 'logoGlow 2s ease-in-out infinite alternate'
              }}
          >
            ⚡
          </span>
                    Portfolio
                </motion.div>

                <ul className="hidden md:flex space-x-8">
                    {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                        <motion.li key={item}>
                            <button
                                onClick={() => scrollToSection(item)}
                                className="text-gray-400 hover:text-[#58a6ff] transition-all duration-300 px-4 py-2 rounded-md font-medium border border-transparent hover:border-[rgba(88,166,255,0.3)] hover:bg-[rgba(88,166,255,0.1)] hover:shadow-[0_0_20px_rgba(88,166,255,0.2)]"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    )
}

export default Header
