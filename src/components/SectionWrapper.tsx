'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { fadeInUp } from '@/lib/animations'

interface SectionWrapperProps {
    children: ReactNode
    id?: string
    className?: string
    background?: 'dark' | 'light' | 'gradient'
    noPadding?: boolean
}

export default function SectionWrapper({
    children,
    id,
    className = '',
    background = 'light',
    noPadding = false
}: SectionWrapperProps) {
    const backgroundStyles = {
        dark: 'bg-gradient-to-br from-[#050A30] to-[#101D6B]',
        light: 'bg-white',
        gradient: 'bg-gradient-to-br from-[#050A30] via-[#101D6B] to-[#050A30]'
    }

    const textColor = background === 'light' ? 'text-gray-900' : 'text-white'
    const padding = noPadding ? '' : 'py-16 md:py-24 px-4 md:px-8'

    return (
        <section
            id={id}
            className={`${backgroundStyles[background]} ${textColor} ${padding} ${className}`}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="max-w-7xl mx-auto"
            >
                {children}
            </motion.div>
        </section>
    )
}
