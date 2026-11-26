"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, Search, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/components/cart/cart-provider"
export function SiteHeader() {
  const { count } = useCart(); const [open, setOpen] = useState(false)
  return <><div className="announcement">THIKA TO EVERYWHERE <span>—</span> THE NOIR EDIT / 26</div><header className="site-header"><Link href="/" className="wordmark" aria-label="NOIR Urban Wears home"><span>NOIR</span><small>URBAN WEARS</small></Link><nav id="main-navigation" className={open ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation"><Link onClick={() => setOpen(false)} href="/">Home</Link><Link onClick={() => setOpen(false)} href="/shop">Shop</Link><Link onClick={() => setOpen(false)} href="/#categories">Categories</Link><Link onClick={() => setOpen(false)} href="/contact">Contact</Link></nav><div className="header-actions"><Link href="/shop" aria-label="Search products" className="icon-link"><Search /></Link><Link href="/cart" aria-label={`Shopping bag, ${count} items`} className="icon-link bag-link"><ShoppingBag />{count > 0 && <span className="count-badge">{count}</span>}</Link><button className="mobile-menu icon-link" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-navigation">{open ? <X /> : <Menu />}</button></div></header></>
}
