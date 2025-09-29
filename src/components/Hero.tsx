'use client'

import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

    const scrollToProjects = () => {
        const element = document.getElementById('projects')
        if (element) {
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
        <section className="text-center py-24 mt-20 relative">
            {/* Background glow */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-50"
                style={{
                    background: 'radial-gradient(circle, rgba(88, 166, 255, 0.03) 0%, transparent 70%)',
                    animation: 'heroGlow 4s ease-in-out infinite alternate'
                }}
            />

            <div className="container mx-auto px-8 relative z-10">
                <motion.h1
                    className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#58a6ff] via-[#bc8cff] to-[#58a6ff] bg-clip-text text-transparent bg-[length:200%_200%] leading-tight"
                    style={{
                        animation: 'gradientShift 3s ease-in-out infinite'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typewriter
                        words={['Mélinda Fabien, Ingénieur Full-Stack']}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </motion.h1>

                <motion.p
                    className="text-xl text-gray-400 mb-8 font-normal"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Développeur(e) curieuse et très dynamique
                </motion.p>

                <motion.button
                    onClick={scrollToProjects}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c2386] to-[#762ea0] text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 border border-[rgba(126,37,110,0.4)] shadow-[0_0_20px_rgba(160,46,149,0.2)] hover:bg-gradient-to-r hover:from-[#2ea043] hover:to-[#238636] hover:shadow-[0_0_30px_rgba(46,160,67,0.4)] hover:-translate-y-1"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>→</span>
                    Venez découvrir mes projets
                </motion.button>
            </div>
        </section>
    )
}

export default Hero
