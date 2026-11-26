export type Category = "Shoes" | "T-Shirts" | "Hoodies & Outerwear" | "Accessories"
export type ProductVariant = { size?: string; color?: string }
export interface Product {
  id: string; slug: string; name: string; category: Category; price: number; previousPrice?: number
  rating: number; stock: "available" | "sold-out" | "out-of-stock"; description: string; image: string
  sizes?: string[]; colors?: string[]; featured?: boolean; isNew?: boolean; createdAt: string
}
export interface CartItem extends ProductVariant { productId: string; quantity: number }
