'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioItems } from '@/lib/portfolio-data'
import Lightbox from './Lightbox'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function PortfolioGallery() {
    const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

    return (
        <section id="portfolio" className="bg-white py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
                        style={{ fontFamily: 'Garamond, serif' }}
                    >
                        Our Portfolio
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Love comes in many forms. Our designs capture the essence of your unique bond.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {portfolioItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={staggerItem}
                            whileHover={{ y: -8 }}
                            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            onClick={() => setSelectedItem(item)}
                        >
                            {/* Image/Video Thumbnail */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                {item.type === 'image' ? (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="relative w-full h-full">
                                        <img
                                            src={item.thumbnail || '/images/portfolio/video-placeholder.jpg'}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        {/* Play Icon Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                                                <svg
                                                    className="w-8 h-8 text-gray-900 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                        {item.description && (
                                            <p className="text-sm text-white/80">{item.description}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Featured Badge */}
                                {item.featured && (
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        Featured
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://instagram.com/pyaarkepatr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold group"
                    >
                        <span>View more on Instagram</span>
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>

            {/* Lightbox */}
            <Lightbox
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        </section>
    )
}
