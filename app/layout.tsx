import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { CartProvider } from '@/components/cart/cart-provider'
import { SiteLayout } from '@/components/layout/site-layout'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'NOIR Urban Wears | Wear Your Identity', template: '%s | NOIR Urban Wears' },
  description: 'Premium streetwear essentials in Thika, Kenya. Discover shoes, tees, outerwear and accessories from NOIR Urban Wears.',
  generator: 'Next.js',
  openGraph: { title: 'NOIR Urban Wears — Wear Your Identity', description: 'Streetwear essentials designed for those who express themselves without limits.', type: 'website' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#ffffff', width: 'device-width', initialScale: 1, userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en" data-scroll-behavior="smooth"><body className="antialiased"><CartProvider><SiteLayout>{children}</SiteLayout></CartProvider>{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
