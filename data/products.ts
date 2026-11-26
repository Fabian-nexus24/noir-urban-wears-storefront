import type { Category, Product } from "@/types/store"

export const categories: { name: Category; image: string; note: string }[] = [
  { name: "Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85", note: "Made to move" },
  { name: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85", note: "Everyday essentials" },
  { name: "Hoodies & Outerwear", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85", note: "Layer with intention" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=85", note: "The finishing touch" },
]

const photos = {
  airflex: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
  urban: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85",
  court: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=85",
  high: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=85",
  tee: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
  tee2: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=85",
  graphicTee: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85&sat=-30",
  oversizedTee: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
  hoodie: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85",
  jacket: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85",
  fleece: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85&sat=-25",
  overshirt: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=85",
  cap: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=85",
  bag: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
  socks: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=1000&q=85",
  tote: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85",
}

export const products: Product[] = [
  { id: "p1", slug: "airflex-runner", name: "AirFlex Runner", category: "Shoes", price: 3500, previousPrice: 4200, rating: 4.8, stock: "available", description: "Light on your feet, strong on the street. The AirFlex Runner pairs a breathable mesh upper with a cushioned sole for all-day movement.", image: photos.airflex, sizes: ["40", "41", "42", "43", "44"], colors: ["Crimson", "White", "Black"], featured: true, isNew: true, createdAt: "2026-11-20" },
  { id: "p2", slug: "urban-street-pro", name: "Urban Street Pro", category: "Shoes", price: 3800, previousPrice: 4800, rating: 4.9, stock: "available", description: "A clean court-inspired silhouette with durable construction and a street-ready profile.", image: photos.urban, sizes: ["40", "41", "42", "43", "44"], colors: ["Cloud", "Onyx"], featured: true, isNew: true, createdAt: "2026-11-18" },
  { id: "p3", slug: "classic-court-90s", name: "Classic Court 90s", category: "Shoes", price: 2900, rating: 4.7, stock: "sold-out", description: "Retro court lines meet everyday comfort in a timeless low-top essential.", image: photos.court, sizes: ["40", "41", "42", "43"], colors: ["White", "Sage"], featured: false, isNew: false, createdAt: "2026-10-20" },
  { id: "p4", slug: "volt-edge-high", name: "Volt Edge High", category: "Shoes", price: 4500, rating: 4.9, stock: "out-of-stock", description: "A bold high-top built for statement fits, with padded ankle support and a confident shape.", image: photos.high, sizes: ["41", "42", "43", "44"], colors: ["Black", "Sand"], featured: false, isNew: false, createdAt: "2026-10-12" },
  { id: "p5", slug: "heavyweight-box-tee", name: "Heavyweight Box Tee", category: "T-Shirts", price: 1800, rating: 4.8, stock: "available", description: "A relaxed, heavyweight cotton tee with a structured drape and easy everyday fit.", image: photos.tee, sizes: ["S", "M", "L", "XL"], colors: ["White", "Black", "Stone"], featured: true, isNew: true, createdAt: "2026-11-22" },
  { id: "p6", slug: "identity-graphic-tee", name: "Identity Graphic Tee", category: "T-Shirts", price: 2200, rating: 4.7, stock: "available", description: "Express yourself in a soft cotton tee finished with a considered graphic detail.", image: photos.tee2, sizes: ["S", "M", "L", "XL"], colors: ["Ink", "Bone"], featured: false, isNew: true, createdAt: "2026-11-16" },
  { id: "p13", slug: "after-hours-graphic-tee", name: "After Hours Graphic Tee", category: "T-Shirts", price: 2400, rating: 4.8, stock: "available", description: "A relaxed cotton tee with a bold back graphic made for late nights and long city days.", image: photos.graphicTee, sizes: ["S", "M", "L", "XL"], colors: ["Washed Black", "Chalk"], featured: false, isNew: false, createdAt: "2026-10-18" },
  { id: "p14", slug: "oversized-studio-tee", name: "Oversized Studio Tee", category: "T-Shirts", price: 2000, rating: 4.6, stock: "available", description: "An easy oversized fit in breathable cotton, designed to anchor your everyday rotation.", image: photos.oversizedTee, sizes: ["S", "M", "L", "XL"], colors: ["White", "Charcoal"], featured: false, isNew: false, createdAt: "2026-10-14" },
  { id: "p7", slug: "essential-pullover", name: "Essential Pullover", category: "Hoodies & Outerwear", price: 4200, rating: 4.9, stock: "available", description: "Soft brushed fleece, a generous hood and a versatile fit made for cooler evenings.", image: photos.hoodie, sizes: ["S", "M", "L", "XL"], colors: ["Ash", "Black"], featured: true, isNew: true, createdAt: "2026-11-19" },
  { id: "p8", slug: "utility-canvas-jacket", name: "Utility Canvas Jacket", category: "Hoodies & Outerwear", price: 5800, previousPrice: 6500, rating: 4.8, stock: "available", description: "A versatile canvas layer with considered utility details and a relaxed street fit.", image: photos.jacket, sizes: ["M", "L", "XL"], colors: ["Olive", "Black"], featured: false, isNew: false, createdAt: "2026-10-30" },
  { id: "p15", slug: "city-fleece-hoodie", name: "City Fleece Hoodie", category: "Hoodies & Outerwear", price: 4600, rating: 4.7, stock: "available", description: "A midweight fleece hoodie with a roomy fit and clean finishing for everyday layering.", image: photos.fleece, sizes: ["S", "M", "L", "XL"], colors: ["Heather Grey", "Black"], featured: false, isNew: false, createdAt: "2026-10-22" },
  { id: "p16", slug: "workwear-overshirt", name: "Workwear Overshirt", category: "Hoodies & Outerwear", price: 5200, rating: 4.8, stock: "available", description: "A sturdy, easy-layer overshirt with a relaxed silhouette and practical chest pockets.", image: photos.overshirt, sizes: ["M", "L", "XL"], colors: ["Olive", "Stone"], featured: false, isNew: false, createdAt: "2026-10-19" },
  { id: "p9", slug: "city-runner-cap", name: "City Runner Cap", category: "Accessories", price: 1500, rating: 4.6, stock: "available", description: "A classic six-panel cap with an adjustable strap and understated branding.", image: photos.cap, colors: ["Black", "Khaki"], featured: true, isNew: true, createdAt: "2026-11-15" },
  { id: "p10", slug: "everyday-crossbody", name: "Everyday Crossbody", category: "Accessories", price: 2600, rating: 4.8, stock: "available", description: "Keep the essentials close in a compact crossbody with practical everyday storage.", image: photos.bag, colors: ["Black", "Olive"], featured: false, isNew: false, createdAt: "2026-10-28" },
  { id: "p11", slug: "street-crew-socks", name: "Street Crew Socks", category: "Accessories", price: 900, rating: 4.5, stock: "available", description: "A comfortable ribbed crew sock designed to finish your rotation right.", image: photos.socks, sizes: ["S/M", "L/XL"], colors: ["White", "Black"], featured: false, isNew: true, createdAt: "2026-11-12" },
  { id: "p12", slug: "daily-carry-tote", name: "Daily Carry Tote", category: "Accessories", price: 1900, rating: 4.7, stock: "available", description: "A durable, easy-carry tote for market runs, campus days and everywhere between.", image: photos.tote, colors: ["Natural", "Black"], featured: false, isNew: false, createdAt: "2026-10-25" },
]
export const getProduct = (slug: string) => products.find((product) => product.slug === slug)
export const formatPrice = (price: number) => `KES ${price.toLocaleString("en-KE")}`
