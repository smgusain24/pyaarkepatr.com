'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

import { motion, AnimatePresence } from 'framer-motion'
import LogoAssembly from './LogoAssembly'

// Animated background spheres

// Particle system
function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 150

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [particleCount])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.8} />
    </points>
  )
}

// Main 3D Scene Component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <Particles />
    </>
  )
}

// Email signup component
function NewsLetterSubscribe() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log('Email submitted:', email)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="relative"
    >
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-4 max-w-md mx-auto"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-gray-900 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="text-2xl mb-2">✨</div>
            <p className="text-white/90">Thanks! We&apos;ll keep you updated.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}


// Main component
export default function ComingSoon() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            'linear-gradient(135deg, #060B3D 0%, #13228A 35%, #812FA0 70%, #E61F93 100%)',
          boxShadow: '0 0 40px #E61F93, 0 0 20px #13228A inset',
        }}
      >
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #060B3D 0%, #13228A 35%, #812FA0 70%, #E61F93 100%)',
        boxShadow: '0 0 40px #E61F93, 0 0 20px #13228A inset',
      }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Logo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="mb-8 w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center"
        >
          <img
            src="/logo/pkp.svg"
            alt="Pyaar Ke Patr Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>


        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          style={{
            fontFamily: 'Sahitya, serif',
            background: 'linear-gradient(90deg, #FFD700, #FFA500, #FF4500)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 15px rgba(255,165,0,0.4)',
            lineHeight: '1.2',
            paddingTop: '0.5em',
            paddingBottom: '0.5em',
            overflow: 'visible'
          }}
        >
          Coming&nbsp;Soon
        </motion.h1>





        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed"
          style={{
            fontFamily: 'Maragsa, sans-serif'
          }}
        >
          Custom Invitations & Elegant Designs for Every Occasion
        </motion.p>

        {/* Email signup */}
        <NewsLetterSubscribe />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16 flex space-x-6"
        >
          {/* Mail */}
          <motion.a
            href="mailto:riya@pyaarkepatr.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Email"
          >
            <img
              src="/icons/mail.svg"
              alt="Email"
              className="w-6 h-6 object-contain text-white"
            />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/pyaarkepatr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Instagram"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="w-6 h-6 object-contain text-white"
            />
          </motion.a>
        </motion.div>



        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <p className="text-white/50 text-sm">
            © 2025 Pyaar Ke Patr. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  )
}