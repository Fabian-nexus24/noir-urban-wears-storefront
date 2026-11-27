"use client"
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import type { CartItem, ProductVariant } from "@/types/store"
import { publishedProducts } from "@/data/products"

type CartContextValue = { items: CartItem[]; count: number; subtotal: number; add: (productId: string, variant?: ProductVariant, quantity?: number) => void; change: (key: string, delta: number) => void; remove: (key: string) => void; clear: () => void }
const CartContext = createContext<CartContextValue | null>(null)
const storageKey = "noir-cart-v1"
const itemKey = (item: CartItem) => `${item.productId}-${item.size ?? ""}-${item.color ?? ""}`
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [ready, setReady] = useState(false)
  useEffect(() => { try { const raw = localStorage.getItem(storageKey); if (raw) {
      const storedItems = JSON.parse(raw) as CartItem[]
      setItems(Array.isArray(storedItems) ? storedItems.filter((item) => item && typeof item.productId === "string" && Number.isInteger(item.quantity) && item.quantity > 0 && publishedProducts.some((product) => product.id === item.productId && product.stockStatus === "in-stock" && product.stockQuantity > 0)) : [])
    } } catch { localStorage.removeItem(storageKey) } setReady(true) }, [])
  useEffect(() => { if (ready) localStorage.setItem(storageKey, JSON.stringify(items)) }, [items, ready])
  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + (publishedProducts.find((product) => product.id === item.productId)?.price ?? 0) * item.quantity, 0)
    return {
      items, count, subtotal,
      add: (productId, variant = {}, quantity = 1) => setItems((current) => {
        const product = publishedProducts.find((entry) => entry.id === productId)
        if (!product || product.stockStatus !== "in-stock" || !Number.isSafeInteger(quantity) || quantity < 1) return current
        const usedQuantity = current.filter((item) => item.productId === productId).reduce((sum, item) => sum + item.quantity, 0)
        const quantityToAdd = Math.min(quantity, product.stockQuantity - usedQuantity)
        if (quantityToAdd < 1) return current
        const matching = current.find((item) => item.productId === productId && item.size === variant.size && item.color === variant.color)
        return matching ? current.map((item) => itemKey(item) === itemKey(matching) ? { ...item, quantity: item.quantity + quantityToAdd } : item) : [...current, { productId, ...variant, quantity: quantityToAdd }]
      }),
      change: (key, delta) => setItems((current) => {
        const target = current.find((item) => itemKey(item) === key)
        if (!target) return current
        if (delta > 0) {
          const product = publishedProducts.find((entry) => entry.id === target.productId)
          if (!product || product.stockStatus !== "in-stock") return current
          const otherQuantity = current.filter((item) => item.productId === target.productId && itemKey(item) !== key).reduce((sum, item) => sum + item.quantity, 0)
          const quantity = Math.min(target.quantity + delta, product.stockQuantity - otherQuantity)
          return current.map((item) => itemKey(item) === key ? { ...item, quantity } : item).filter((item) => item.quantity > 0)
        }
        return current.map((item) => itemKey(item) === key ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0)
      }),
      remove: (key) => setItems((current) => current.filter((item) => itemKey(item) !== key)),
      clear: () => setItems([]),
    }
  }, [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error("useCart must be used within CartProvider"); return context }
export { itemKey }
