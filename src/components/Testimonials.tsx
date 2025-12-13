'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { testimonials } from '@/lib/portfolio-data'

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <SectionWrapper id="testimonials" background="light">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2
                    className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
                    style={{ fontFamily: 'Garamond, serif' }}
                >
                    What Our Clients Say
                </h2>
                <p className="text-lg text-gray-600">
                    Every card tells a story, and every client becomes part of our journey
                </p>
            </motion.div>

            {/* Testimonial Carousel */}
            <div className="max-w-4xl mx-auto relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                    >
                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-6 h-6 text-yellow-400 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                            &ldquo;{testimonials[currentIndex].text}&rdquo;
                        </blockquote>

                        {/* Author */}
                        <div className="text-center">
                            <div className="font-bold text-gray-900 text-lg">
                                {testimonials[currentIndex].name}
                            </div>
                            <div className="text-gray-500">
                                {testimonials[currentIndex].occasion}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={prev}
                        className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        aria-label="Next testimonial"
                    >
                        <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                ? 'bg-purple-500 w-8'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
