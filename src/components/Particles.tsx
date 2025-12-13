'use client'

import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Particles() {
    const pointsRef = useRef<THREE.Points>(null)
    const particleCount = 400

    const positions = useMemo(() => {
        const arr = new Float32Array(particleCount * 3)
        for (let i = 0; i < particleCount; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 40
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
