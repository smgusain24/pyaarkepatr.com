'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

export default function About() {
    return (
        <SectionWrapper id="about" background="dark">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image/Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-lg overflow-hidden bg-white/10 backdrop-blur-md border border-white/20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logo/pkp.svg"
                            alt="About Pyaar Ke Patr"
                            className="w-full h-full object-contain p-12"
                        />
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 text-white"
                        style={{ fontFamily: 'Garamond, serif' }}
                    >
                        About Us
                    </h2>
                    <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                500+
                            </div>
                            <div className="text-white/60 text-sm">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                5+
                            </div>
                            <div className="text-white/60 text-sm">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                100%
                            </div>
                            <div className="text-white/60 text-sm">Satisfaction</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    )
}
