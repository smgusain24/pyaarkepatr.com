'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PortfolioItem } from '@/lib/portfolio-data'

interface LightboxProps {
    item: PortfolioItem | null
    onClose: () => void
}

export default function Lightbox({ item, onClose }: LightboxProps) {
    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (item) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [item])

    return (
        <AnimatePresence>
            {item && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 cursor-pointer"
                    />

                    {/* Lightbox Content */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row bg-[#0A0F35] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-all z-20 backdrop-blur-sm border border-white/10"
                                aria-label="Close lightbox"
                            >
                                <svg
                                    className="w-5 h-5"
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

                            {/* Media Container - Takes up more space on desktop */}
                            <div className="flex-1 relative bg-black/40 flex items-center justify-center p-4 md:p-8 min-h-[40vh] md:min-h-full">
                                {item.type === 'image' ? (
                                    <motion.img
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                        src={item.src}
                                        alt={item.title}
                                        className="max-h-full max-w-full object-contain rounded-lg shadow-xl"
                                    />
                                ) : (
                                    <div className="w-full max-w-md mx-auto text-center">
                                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                            {/* Instagram Icon */}
                                            <svg
                                                className="w-16 h-16 mx-auto mb-4 text-pink-500"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>

                                            <h4 className="text-xl font-bold text-white mb-2">Watch Reel</h4>

                                            <a
                                                href={item.src}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all font-sm"
                                            >
                                                <span>Open Instagram</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Details Container - Sidebar on desktop */}
                            <div className="w-full md:w-96 bg-[#0A0F35] border-l border-white/5 flex flex-col p-6 md:p-8">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-px bg-gradient-to-r from-transparent to-pink-500 flex-1" />
                                        <span className="text-pink-400 text-xs font-medium uppercase tracking-widest">Details</span>
                                        <div className="h-px bg-gradient-to-r from-pink-500 to-transparent flex-1" />
                                    </div>

                                    <h3
                                        className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                                        style={{ fontFamily: 'Garamond, serif' }}
                                    >
                                        {item.title}
                                    </h3>

                                    {item.description && (
                                        <p className="text-white/70 leading-relaxed text-lg font-light">
                                            {item.description}
                                        </p>
                                    )}

                                    {/* Additional info or CTA could go here */}
                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <p className="text-white/40 text-sm italic">
                                            Designed with love by Pyaar Ke Patr
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
