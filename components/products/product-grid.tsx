"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Check, Plus } from "lucide-react"
import type { PublicProduct } from "@/types/store"
import { formatPrice } from "@/data/products"
import { useCart } from "@/components/cart/cart-provider"

const whatsappNumber = "254716836551"

export function ProductCard({ product }: { product: PublicProduct }) {
  const { add } = useCart()
  const [addedToBag, setAddedToBag] = useState(false)
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const available = product.stockStatus === "in-stock" && product.stockQuantity > 0
  useEffect(() => () => {
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current)
  }, [])

  const handleQuickAdd = () => {
    add(product.id)
    setAddedToBag(true)
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current)
    feedbackTimer.current = setTimeout(() => setAddedToBag(false), 1500)
  }
  const availabilityLabel = product.stockStatus === "sold-out" ? "SOLD OUT" : "OUT OF STOCK"
  const whatsappMessage = `Hi NOIR Urban Wears, is ${product.name} (KES ${product.price.toLocaleString("en-KE")}) available?`
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-image-wrap">
        <img src={product.images[0]?.url} alt={product.images[0]?.altText ?? product.name} className="product-image" loading="lazy" />
        <span className={`stock-pill ${available ? "in-stock" : "sold-stock"}`}>
          {available ? (product.isNew ? "NEW IN" : "IN STOCK") : availabilityLabel}
        </span>
        <span className="image-arrow" aria-hidden="true"><ArrowUpRight /></span>
      </Link>
      <div className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
        </div>
        <Link href={`/products/${product.slug}`} className="product-name">{product.name}</Link>
        <div className="price-row">
          <strong>{formatPrice(product.price)}</strong>
          {product.originalPrice && product.originalPriceVerified && <del>{formatPrice(product.originalPrice)}</del>}
        </div>
        <button
          disabled={!available}
          className={`quick-add${addedToBag ? " quick-add-added" : ""}`}
          onClick={handleQuickAdd}
          aria-live="polite"
        >
          {available ? addedToBag ? <><Check aria-hidden="true" /> ADDED TO BAG</> : <><Plus aria-hidden="true" /> QUICK ADD</> : "CURRENTLY UNAVAILABLE"}
        </button>
        {!available && (
          <a className="unavailable-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
            ASK ON WHATSAPP <ArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}

export function ProductGrid({ products, className = "" }: { products: PublicProduct[]; className?: string }) {
  return <div className={`product-grid ${className}`}>{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
}
