import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  metadataBase: new URL('https://hydra-construction-services.vercel.app'),
  title: {
    default: 'Hydra Construction | MH/2026/001 Licensed Pune Builders',
    template: '%s | Hydra Construction'
  },
  description: 'MH/2026/001 licensed Pune builders. 15+ years creating dream bungalows in Koregaon Park, Hinjewadi, Baner. Free site visits.',
  keywords: ['Pune builders', 'bungalow construction', 'bathroom remodeling', 'kitchen design', 'MH/2026/001'],
  verification: {
    google: "googlec5a2d05fc0b0bf32"
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Hydra Construction',
    images: '/images/hero-bungalow.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/images/hero-bungalow.jpg',
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Analytics />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
