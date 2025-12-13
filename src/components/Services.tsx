'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function Services() {
    const services = [
        {
            icon: '💝',
            title: 'Wedding Invitations',
            description: 'Elegant, personalized wedding cards that capture your love story. From traditional to contemporary designs with premium finishing options.'
        },
        {
            icon: '🎉',
            title: 'Event Cards',
            description: 'Memorable invitations for birthdays, anniversaries, baby showers, and all life\'s special celebrations. Make every moment count.'
        },
        {
            icon: '🎨',
            title: 'Custom Designs',
            description: 'Bring your vision to life with bespoke designs tailored to your style. Unique creations that reflect your personality and theme.'
        },
        {
            icon: '🏢',
            title: 'Corporate Cards',
            description: 'Professional invitations for business events, conferences, and corporate gatherings. Leave a lasting impression on your stakeholders.'
        }
    ]

    const process = [
        { step: '01', title: 'Consultation', description: 'Share your vision and requirements with us' },
        { step: '02', title: 'Design', description: 'We create custom concepts for your approval' },
        { step: '03', title: 'Review', description: 'Refine and finalize every detail together' },
        { step: '04', title: 'Delivery', description: 'Receive your beautifully crafted cards on time' }
    ]

    return (
        <SectionWrapper id="services" background="light">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2
                    className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
                    style={{ fontFamily: 'Garamond, serif' }}
                >
                    Our Services
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    From intimate gatherings to grand celebrations, we craft invitations that set the perfect tone for your special moments
                </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={staggerItem}
                        whileHover={{ y: -8 }}
                        className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Process Timeline */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16"
            >
                <h3
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
                    style={{ fontFamily: 'Garamond, serif' }}
                >
                    How It Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {process.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative text-center"
                        >
                            <div className="text-6xl font-bold text-purple-200 mb-4">{item.step}</div>
                            <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                            {index < process.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-purple-200" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionWrapper>
    )
}