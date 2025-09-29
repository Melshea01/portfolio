import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Portfolio - Fabien Mélinda | Ingénieur Full-Stack',
    description: 'Portfolio de Fabien Mélinda, développeur Full-Stack passionné par les technologies modernes et l\'innovation.',
    keywords: ['portfolio', 'développeur', 'full-stack', 'React', 'Next.js', 'ingénieur'],
    authors: [{ name: 'Fabien Mélinda' }],
    openGraph: {
        title: 'Portfolio - Fabien Mélinda | Ingénieur Full-Stack',
        description: 'Développeur(e) curieuse et très dynamique',
        type: 'website',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    )
}
