import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#050A30] text-white px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Garamond, serif' }}>
                Page Not Found
            </h2>
            <p className="mb-8 text-white/60 text-lg">Could not find requested resource</p>
            <Link
                href="/"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
                Return Home
            </Link>
        </div>
    )
}
