'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from "@/components/Footer";
import Education from "@/components/Eductation";

export default function Home() {
    return (
        <div className="starry-bg min-h-screen text-white ">
            <Header />
            <main>
                <Hero />
                <div className="container mx-auto px-8 max-w-6xl">
                    <About />
                    <Experience />
                    <Education/>
                    <Projects />
                    <Skills />
                    <Contact />
                </div>
                <Footer />
            </main>
        </div>
    );
}

