'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // TODO: Faire la partie email
    }

    return (
        <motion.section
            id="contact"
            className="my-16 px-4 fade-in"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Contact</h2>

            <form
                onSubmit={handleSubmit}
                className="contact-form bg-[rgba(48,54,61,0.4)] backdrop-blur-lg p-8 rounded-lg border border-[rgba(88,166,255,0.15)] max-w-xl mx-auto"
            >
                <div className="form-group mb-6">
                    <label htmlFor="name" className="block mb-2 text-gray-300">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="form-group mb-6">
                    <label htmlFor="email" className="block mb-2 text-gray-300">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="form-group mb-6">
                    <label htmlFor="message" className="block mb-2 text-gray-300">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-transparent border border-gray-600 text-white focus:outline-none focus:border-blue-400"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="submit-btn w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition-colors"
                >
                    Envoyer le message
                </button>
            </form>
        </motion.section>
    )
}

export default Contact
