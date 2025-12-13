'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
    navLinks: { name: string; href: string }[]
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-[#050A30] to-[#101D6B] z-50 shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <img
                                    src="/logo/pkp.svg"
                                    alt="Pyaar Ke Patr"
                                    className="h-12 w-12 object-contain"
                                />
                                <button
                                    onClick={onClose}
                                    className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                                    aria-label="Close menu"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1 px-6 py-8">
                                <ul className="space-y-2">
                                    {navLinks.map((link, index) => (
                                        <motion.li
                                            key={link.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={(e) => scrollToSection(e, link.href)}
                                                className="block py-3 px-4 text-white text-lg hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Footer CTA */}
                            <div className="p-6 border-t border-white/10">
                                <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg"
                                    >
                                        Get Started
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
