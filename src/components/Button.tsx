'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    onClick?: () => void
    href?: string
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'small' | 'medium' | 'large'
    className?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
}

export default function Button({
    children,
    onClick,
    href,
    variant = 'primary',
    size = 'medium',
    className = '',
    disabled = false,
    type = 'button'
}: ButtonProps) {
    const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center'

    const variantStyles = {
        primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl',
        secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-[#050A30]'
    }

    const sizeStyles = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3',
        large: 'px-8 py-4 text-lg'
    }

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

    const MotionComponent = href ? motion.a : motion.button

    return (
        <MotionComponent
            href={href}
            onClick={onClick}
            type={!href ? type : undefined}
            disabled={disabled}
            whileHover={!disabled ? { scale: 1.05 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            className={combinedClassName}
        >
            {children}
        </MotionComponent>
    )
}
