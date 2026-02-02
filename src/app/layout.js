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
    google: "mzx_EHywhshcQxd7E-34_-rFcproFcTvTAcqnloMlo0"
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    "name": "Hydra Corporation",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "MH",
      "addressCountry": "IN"
    },
    "telephone": "+91 96979 85597",
    "url": "https://hydraconstruction.vercel.app",
    "description": "MH/2026/001 Licensed Bungalow Construction in Pune"
  }
  return (
    
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          async
          src=" "
          key="hydra-schema"  // Prevents duplicates
        />
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Analytics />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
