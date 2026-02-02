import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import Navbar from '@/components/Navbar' 
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Hydra Construction - Pune Home Renovation & Bungalows',
  description: '15+ Years Building Dream Homes in Baner, Wakad, Koregaon Park'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Analytics/>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
