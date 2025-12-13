'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import Particles from './Particles'
import Button from './Button'

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="relative min-h-screen overflow-hidden">
            {/* Background Gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(140deg, #050A30 0%, #101D6B 100%)`,
                    boxShadow: '0 0 40px #101D6B, 0 0 20px #050A30 inset',
                }}
            />

            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABZUlEQVR42u3VQQqEMBAF0c74/3xHU2cRt0hK6SQ06lmM2wEVfA0HI0O8f1+B2PGAZFRUVFRUVFRUVFRUVFRUVFRUVFfbYf5AxHjcTf0ZqS8PUGS8n0CflSgfTV7BNFyg9qa9Q4SO+aRYTo95pFiOjXmkWEaPeaBYTo96plhOj3mkWE6PcaRYRo95pFiOjXmkWE6PcaRYRo95pFiOjXmkWE6PcaRYRo95pFiOjXmkWE6PcaRYRo95pFiOjXmkWE6PcaRYRo95pFiOjXmkWE6PcaRYRo9x2qDJjXeEv+EdakKkL/MEYAAAAASUVORK5CYII=")`,
                    mixBlendMode: 'overlay',
                    opacity: 0.06,
                }}
            />

            {/* 3D Particle Background */}
            <div className="absolute inset-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                    <ambientLight intensity={0.3} />
                    <directionalLight position={[10, 10, 5]} intensity={0.5} />
                    <Particles />
                </Canvas>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center pt-24">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: -20, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 120,
                        damping: 12,
                        mass: 0.8,
                        delay: 0.2,
                    }}
                    className="mb-6 w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center"
                >
                    <img
                        src="/logo/pkp.svg"
                        alt="Pyaar Ke Patr Logo"
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.3,
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight leading-tight px-4 py-2 text-transparent bg-clip-text"
                    style={{
                        fontFamily: '"Garamond", serif',
                        fontWeight: 700,
                        backgroundImage:
                            'linear-gradient(to right, #ec4899 20%, #a855f7 70%, #6366f1 90%)',
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.25)',
                        letterSpacing: '0.01em',
                        lineHeight: '1.15',
                        transform: 'scaleX(1.03)',
                    }}
                >
                    Your Love,
                    <br />
                    Beautifully Captured!
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl leading-relaxed px-4"
                    style={{
                        fontFamily: 'Maragsa, sans-serif',
                    }}
                >
                    Love comes in many forms—quiet, loud, messy, or perfectly simple. Our invites are crafted to capture the essence of your unique bond, helping you share it with the world in a way that feels truly yours.
                    <br /><br />
                    At PyaarKePatr, love isn&apos;t just accepted—it&apos;s celebrated, boldly and unapologetically.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button
                        variant="primary"
                        size="large"
                        onClick={() => scrollToSection('#portfolio')}
                    >
                        View Our Portfolio
                    </Button>
                    <Button
                        variant="outline"
                        size="large"
                        onClick={() => scrollToSection('#contact')}
                    >
                        Get in Touch
                    </Button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="mt-16"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex flex-col items-center text-white/60"
                    >
                        <span className="text-sm mb-2">Scroll to explore</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
