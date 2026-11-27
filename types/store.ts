export type Category = "Shoes" | "T-Shirts" | "Hoodies & Outerwear" | "Accessories"
export type ProductVariant = { size?: string; color?: string }
export type ProductImage = { url: string; altText: string }
export type ProductStockStatus = "in-stock" | "sold-out" | "out-of-stock"
export type ProductPublicationStatus = "draft" | "published" | "archived"
export type ProductSourceType = "local-supplier" | "kenyan-wholesaler" | "international-supplier"

export interface InternalProductSourcing {
  sourceType: ProductSourceType
  supplierName?: string
  purchasingCostKES?: number
  supplierDetails?: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: Category
  collection?: string
  price: number
  originalPrice?: number
  originalPriceVerified?: boolean
  images: ProductImage[]
  sizes?: string[]
  colors?: string[]
  stockQuantity: number
  stockStatus: ProductStockStatus
  featured: boolean
  isNew: boolean
  publicationStatus: ProductPublicationStatus
  isPlaceholder: boolean
  createdAt: string
}

export type InternalProductRecord = Product & { internalSourcing?: InternalProductSourcing }
export type PublicProduct = Product
export interface CartItem extends ProductVariant { productId: string; quantity: number }
