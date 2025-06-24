'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

import { motion } from 'framer-motion'
import NewsLetterSubscribe from './NewsLetterSubscribe'

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
        background: `
      linear-gradient(
        140deg,
        #050A30 0%,
        #010F2A 20%,
        #101D6B 50%,
        #812FA0 75%,
        #E61F93 100%
      )
    `,
        backgroundSize: '100% 100%',
        boxShadow: '0 0 40px #E61F93, 0 0 20px #101D6B inset',
      }}
    >
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABZUlEQVR42u3VQQqEMBAF0c74/3xHU2cRt0hK6SQ06lmM2wEVfA0HI0O8f1+B2PGAZFRUVFRUVFRUVFRUVFRUVFRUVFfbYf5AxHjcTf0ZqS8PUGS8n0CflSgfTV7BNFyg9qa9Q4SO+aRYTo95pFiOjXmkWEaPeaBYTo96plhOj3mkWE6PcaRYRo95pFiOjXmkWE6PcaRYRo95pFiOjXmkWE6PcaRYRo95pFiOjXmkWE6PcaRYRo95pFiOjXmkWE6PcaRYRo9x2qDJjXeEv+EdakKkL/MEYAAAAASUVORK5CYII=")`,
          mixBlendMode: 'overlay',
          opacity: 0.06
        }}
      />


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
          initial={{ opacity: 0, scale: 0.7, y: -20, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 12,
            mass: 0.8,
            delay: 0.2
          }}
          className="mb-8 w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center"
        >
          <img
            src="/logo/pkp.svg"
            alt="Pyaar Ke Patr Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>



        {/* Main heading */}
        <style jsx global>{`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>

        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3
          }}
          className="text-5xl sm:text-6xl md:text-8xl font-black mb-10 tracking-tight leading-tight px-4 py-2 text-transparent bg-clip-text"
          style={{
            fontFamily: 'serif',
            backgroundImage: `
              linear-gradient(
                270deg,
                #8e2de2,
                #a000ff,
                #d100c9,
                #ff00b8,
                #ff3cac
              )
            `,
            backgroundSize: '400% 400%',
            animation: 'gradientShift 8s ease infinite',
            textShadow: `
              0 0 6px rgba(160, 0, 255, 0.8),
              0 0 12px rgba(255, 0, 184, 0.6),
              0 2px 20px rgba(255, 60, 172, 0.4)
            `,
            letterSpacing: '-0.015em',
            lineHeight: '1.25',
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
          An exclusive design house for those who love differently
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
            href="mailto:contact@pyaarkepatr.com"
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