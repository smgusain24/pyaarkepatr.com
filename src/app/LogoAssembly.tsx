import { motion } from 'framer-motion'

const parts = [
  { src: '/logo/logo-part-1.svg', initial: { x: -100, y: -100 }, final: { x: 0, y: 0 } },
  { src: '/logo/logo-part-2.svg', initial: { x: 100, y: -100 }, final: { x: 0, y: 0 } },
  { src: '/logo/logo-part-3.svg', initial: { x: -100, y: 100 }, final: { x: 0, y: 0 } },
  { src: '/logo/logo-part-4.svg', initial: { x: 100, y: 100 }, final: { x: 0, y: 0 } },
  { src: '/logo/logo-part-5.svg', initial: { scale: 0, opacity: 0 }, final: { scale: 1, opacity: 1 } }
]

export default function LogoAssembly() {
  return (
    <div className="relative w-24 h-24">
      {parts.map((part, i) => (
        <motion.img
          key={i}
          src={part.src}
          initial={part.initial}
          animate={part.final}
          transition={{
            delay: i * 0.2,
            duration: 0.8,
            type: 'spring',
            stiffness: 100
          }}
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      ))}
    </div>
  )
}
