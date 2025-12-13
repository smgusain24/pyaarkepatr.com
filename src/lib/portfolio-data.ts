// Portfolio data structure and placeholder content

export interface PortfolioItem {
    id: string
    title: string
    type: 'image' | 'video'
    src: string
    thumbnail?: string // For videos
    description?: string
    featured?: boolean
}

// Placeholder portfolio items (user will replace with actual content)
export const portfolioItems: PortfolioItem[] = [
    {
        id: '1',
        title: 'Satsang Invitation',
        type: 'image',
        src: '/images/portfolio/pkp1.jpeg',
        featured: true
    },
    {
        id: '2',
        title: 'Ganesh Chaturthi Celebration',
        type: 'image',
        src: '/images/portfolio/pkp2.jpeg',
        featured: true
    },
    {
        id: '3',
        title: 'Wedding Invitation',
        type: 'image',
        src: '/images/portfolio/pkp3.jpeg',
    }
]

// Testimonials data (placeholder)
export interface Testimonial {
    id: string
    name: string
    occasion: string
    rating: number
    text: string
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Swarnima & Mukul',
        occasion: 'Wedding',
        rating: 5,
        text: 'We were blown away by the attention to detail! Our wedding invitations were absolutely stunning and set the perfect tone for our big day. So many guests told us they kept them as keepsakes. Worth every penny!'
    },
    {
        id: '2',
        name: 'Priya Sharma',
        occasion: 'Birthday Celebration',
        rating: 5,
        text: 'I wanted something special for my mom\'s 60th birthday and Riya delivered beyond my expectations. The cards were elegant, personalized, and arrived right on time.'
    },
    {
        id: '3',
        name: 'Nayan Bhatia',
        occasion: 'Corporate Event',
        rating: 5,
        text: 'We ordered 200 invitations for our company\'s annual day celebration and Riya delivered exceptional quality. The designs were professional yet elegant, and our management was thoroughly impressed. Great work!'
    }
]
