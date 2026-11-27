"use client"
import { useMemo, useState } from "react"
import Link from "next/link"
import { Search, SlidersHorizontal } from "lucide-react"
import { categories, publishedProducts } from "@/data/products"
import { ProductGrid } from "@/components/products/product-grid"
export function ShopCatalogue({ initialCategory = "All", initialSort = "featured" }: { initialCategory?: string; initialSort?: string }) {
  const [category, setCategory] = useState(initialCategory); const [query, setQuery] = useState(""); const [sort, setSort] = useState(initialSort)
  const filtered = useMemo(() => publishedProducts
    .filter((product) => (category === "All" || product.category === category) && `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      if (category === "Shoes") {
        const availabilityOrder = Number(b.stockStatus === "in-stock") - Number(a.stockStatus === "in-stock")
        if (availabilityOrder !== 0) return availabilityOrder
      }

      if (sort === "price-low") return a.price - b.price
      if (sort === "price-high") return b.price - a.price
      if (sort === "newest") return b.createdAt.localeCompare(a.createdAt)
      return Number(b.featured) - Number(a.featured)
    }), [category, query, sort])
  return <div className="page-wrap shop-page"><div className="breadcrumb"><Link href="/">HOME</Link><span>/</span><span>SHOP</span></div><div className="shop-heading"><div><p className="eyebrow">THE NOIR EDIT</p><h1>SHOP ALL</h1><p className="muted">Everyday pieces. Distinctly yours.</p></div><span className="result-count">{filtered.length} PRODUCTS</span></div><div className="shop-controls"><label className="search-field"><Search/><input aria-label="Search products" placeholder="Search the collection" value={query} onChange={(e) => setQuery(e.target.value)}/></label><div className="category-tabs" aria-label="Filter by category"><button className={category === "All" ? "active" : ""} onClick={() => setCategory("All")}>All</button>{categories.map((item) => <button key={item.name} className={category === item.name ? "active" : ""} onClick={() => setCategory(item.name)}>{item.name}</button>)}</div><label className="sort-field"><SlidersHorizontal/><span className="sr-only">Sort products</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Featured</option><option value="newest">Newest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label></div>{filtered.length ? <ProductGrid products={filtered}/> : <div className="empty-results"><p>{publishedProducts.length === 0 ? "No published products are currently available." : "No pieces found for that search."}</p>{publishedProducts.length > 0 && <button onClick={() => {setQuery("");setCategory("All")}}>CLEAR FILTERS</button>}</div>}</div>
}
