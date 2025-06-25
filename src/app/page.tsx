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
  const particleCount = 400

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40 // spread wider
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40
    }
    return arr
  }, [particleCount])

  const colors = useMemo(() => {
    const arr = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const hue = Math.random() > 0.8 ? 220 : 340 // bluish or pinkish
      const color = new THREE.Color(`hsl(${hue}, 100%, ${70 + Math.random() * 20}%)`)
      arr[i * 3] = color.r
      arr[i * 3 + 1] = color.g
      arr[i * 3 + 2] = color.b
    }
    return arr
  }, [particleCount])


  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const time = clock.getElapsedTime()
      pointsRef.current.rotation.x = time * 0.02
      pointsRef.current.rotation.y = time * 0.04

      // Twinkling
      const material = pointsRef.current.material as THREE.PointsMaterial
      material.opacity = 0.6 + Math.sin(time * 0.5) * 0.3
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
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
            'linear-gradient(135deg, #050A30 0%, #101D6B 100%)',
          boxShadow: '0 0 40px #101D6B, 0 0 20px #050A30 inset',
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
        #101D6B 100%
      )
    `,
        backgroundSize: '100% 100%',
        boxShadow: '0 0 40px #101D6B, 0 0 20px #050A30 inset',
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
          className="text-[clamp(2.5rem,8vw,7rem)] mb-2 tracking-tight leading-tight px-4 py-2 text-transparent bg-clip-text"
          style={{
            fontFamily: '"Garamond", serif',
            fontWeight: 700,
            backgroundImage: 'linear-gradient(to right, #ec4899 20%, #a855f7 70%, #6366f1 90%)',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            letterSpacing: '0.01em',
            lineHeight: '1.15',
            transform: 'scaleX(1.03)',
            overflow: 'visible',
            textShadow: 'none'
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

        {/* Email & Instagram Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {/* Email */}
          <motion.a
            href="mailto:contact@pyaarkepatr.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-[clamp(2.5rem,10vw,3.5rem)] h-[clamp(2.5rem,10vw,3.5rem)] bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Email"
          >
            <img
              src="/icons/mail.svg"
              alt="Email"
              className="w-[50%] h-[50%] object-contain"
            />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/pyaarkepatr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-[clamp(2.5rem,10vw,3.5rem)] h-[clamp(2.5rem,10vw,3.5rem)] bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Instagram"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="w-[50%] h-[50%] object-contain"
            />
          </motion.a>
        </motion.div>


        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4"
        >
          <p className="text-white/50 text-[clamp(0.6rem, 2vw, 0.875rem)] leading-snug">
            © 2025 Pyaar Ke Patr. All rights reserved.
          </p>
        </motion.div>

      </div>
    </div>
  )
}