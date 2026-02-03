import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  metadataBase: new URL('https://hydra-construction-services.vercel.app'),
  title: {
    default: 'Best Interior Designer & Real Estate Developer in Pune | Hydra Corporation',
    template: '%s | MH/2026/001 Licensed Pune Builders'
  },
  description: '🏆 Top interior designer in Pune. MH/2026/001 licensed builders creating dream bungalows, luxury interiors, kitchens & bathrooms in Baner, Koregaon Park, Hinjewadi. 50+ projects. Free quote: 919697985597',
  keywords: [
    'best interior designer pune', 
    'real estate developer pune',
    'bungalow construction pune',
    'luxury interiors pune',
    'kitchen designer pune',
    'mh/2026/001',
    'baner builders',
    'koregaon park construction'
  ],
  verification: {
    google: "mzx_EHywhshcQxd7E-34_-rFcproFcTvTAcqnloMlo0"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  openGraph: {
    title: 'Best Interior Designer & Real Estate Developer in Pune | Hydra Corporation',
    description: 'MH/2026/001 licensed. 50+ dream bungalows in Pune. Free site visit.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Hydra Corporation',
    images: [
      {
        url: '/images/hero-bungalow.jpg',
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Interior Designer & Real Estate Developer in Pune',
    description: 'MH/2026/001 licensed Pune builders. 15+ years.',
    images: '/images/hero-bungalow.jpg',
  }
}



export default function RootLayout({ children }) {
  const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hydra Construction - Best Interior Designer Pune",
  "description": "🏆 MH/2026/001 Licensed. Best interior designer & bungalow builder in Pune. 50+ projects in Baner, Koregaon Park, Hinjewadi. Luxury kitchens, bathrooms, full interiors.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN",
    "postalCode": "411045" 
  },
  "telephone": "+91 969798 5597",
  "url": "https://hydra-construction-services.vercel.app",
  "priceRange": "₹75 Lac+",
  "openingHours": "Mo-Su 08:00-22:00",
  "areaServed": "Pune, Baner, Koregaon Park, Hinjewadi, Wakad",
  "serviceType": ["Interior Design", "Bungalow Construction", "Real Estate Development"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pune Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Best Interior Designer Pune",
          "description": "Luxury modular interiors, kitchens, bathrooms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bungalow Construction Pune",
          "description": "3BHK/4BHK from foundation to finish"
        }
      }
    ]
  }
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
