"use client"
"use client"

import { useState } from "react"
import Link from "next/link"
import { Minus, Plus, ShoppingBag } from "lucide-react"
import type { PublicProduct } from "@/types/store"
import { formatPrice, publishedProducts } from "@/data/products"
import { ProductGrid } from "@/components/products/product-grid"
import { useCart } from "@/components/cart/cart-provider"

export function ProductDetail({ product }: { product: PublicProduct }) {
  const { add } = useCart()
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")
  const [qty, setQty] = useState(1)
  const [message, setMessage] = useState("")
  const available = product.stockStatus === "in-stock" && product.stockQuantity > 0
  const related = publishedProducts.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4)

  const submit = () => {
    if (!available) return
    if (product.sizes?.length && !size) {
      setMessage("Choose a size to continue.")
      return
    }
    if (product.colors?.length && !color) {
      setMessage("Choose a colour to continue.")
      return
    }
    add(product.id, { size: size || undefined, color: color || undefined }, qty)
    setMessage("Added to your bag.")
  }

  return (
    <div className="page-wrap product-detail-page">
      <div className="breadcrumb"><Link href="/">HOME</Link><span>/</span><Link href="/shop">SHOP</Link><span>/</span><span>{product.name.toUpperCase()}</span></div>
      <div className="detail-layout">
        <div className="detail-image">
          <img src={product.images[0]?.url} alt={product.images[0]?.altText ?? product.name} />
          <span className={`stock-pill ${available ? "in-stock" : "sold-stock"}`}>
            {available ? "IN STOCK" : product.stockStatus === "sold-out" ? "SOLD OUT" : "OUT OF STOCK"}
          </span>
        </div>
        <section className="detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="detail-price"><strong>{formatPrice(product.price)}</strong>{product.originalPrice && product.originalPriceVerified && <del>{formatPrice(product.originalPrice)}</del>}</div>
          <p className="detail-description">{product.description}</p>
          {product.sizes?.length ? <fieldset className="variant-set"><legend>SELECT SIZE {size && <span>— {size}</span>}</legend><div className="variant-options">{product.sizes.map((option) => <button key={option} className={size === option ? "selected" : ""} onClick={() => { setSize(option); setMessage("") }} aria-pressed={size === option}>{option}</button>)}</div></fieldset> : null}
          {product.colors?.length ? <fieldset className="variant-set"><legend>SELECT COLOUR {color && <span>— {color}</span>}</legend><div className="variant-options">{product.colors.map((option) => <button key={option} className={color === option ? "selected" : ""} onClick={() => { setColor(option); setMessage("") }} aria-pressed={color === option}>{option}</button>)}</div></fieldset> : null}
          <div className="purchase-row">
            <div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))}><Minus /></button><span>{qty}</span><button aria-label="Increase quantity" onClick={() => setQty(qty + 1)}><Plus /></button></div>
            <button className="button-dark add-to-cart" disabled={!available} onClick={submit}><ShoppingBag /> {available ? "ADD TO BAG" : "CURRENTLY UNAVAILABLE"}</button>
          </div>
          {message && <p className="form-message" role="status">{message}</p>}
          <p className="detail-note">Free delivery within Thika Town. Other locations quoted on WhatsApp.</p>
        </section>
      </div>
      {related.length > 0 && <section className="related-section"><div className="section-heading"><p className="eyebrow">YOU MAY ALSO LIKE</p><Link href="/shop">VIEW ALL</Link></div><ProductGrid products={related} /></section>}
    </div>
  )
}
