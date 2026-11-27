import Link from "next/link"
import { ArrowRight, ArrowUpRight, MapPin, MoveUpRight, Sparkles } from "lucide-react"
import { categories, publishedProducts } from "@/data/products"
import { ProductGrid } from "@/components/products/product-grid"

const categoryImages: Record<string, string> = {
  Shoes: "/images/noir-category-shoes.webp",
  "T-Shirts": "/images/noir-category-tees.webp",
  "Hoodies & Outerwear": "/images/noir-category-outerwear.webp",
  Accessories: "/images/noir-category-accessories.webp",
}

export default function Home() {
  const newArrivals = publishedProducts.filter((product) => product.isNew).slice(0, 4)
  const newIds = new Set(newArrivals.map((product) => product.id))
  const featuredProducts = publishedProducts
    .filter((product) => product.featured && !newIds.has(product.id))
    .slice(0, 4)

  return (
    <div className="noir-home">
      <section className="noir-hero" aria-labelledby="hero-title">
        <img className="noir-hero-image" src="/images/noir-campaign-hero.webp" alt="NOIR streetwear campaign" fetchPriority="high" />
        <div className="noir-hero-shade" />
        <div className="noir-hero-content">
          <p className="noir-kicker"><span /> THE NOIR EDIT / 26 <span /></p>
          <h1 id="hero-title">WEAR YOUR<br /><em>IDENTITY.</em></h1>
          <p className="noir-hero-copy">Streetwear made for those who move differently. Discover your style. Make your statement.</p>
          <div className="noir-hero-actions">
            <Link href="/shop" className="noir-button noir-button-gold">SHOP COLLECTION <ArrowUpRight size={17} /></Link>
            <Link href="/shop?sort=newest" className="noir-text-link">EXPLORE NEW ARRIVALS <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="noir-hero-foot"><span>01 / 03</span><i /><span>THIKA, KENYA · EST. NOIR</span></div>
        <div className="noir-hero-side">BUILT FOR THE CITY — MADE FOR YOUR EVERYDAY</div>
      </section>

      <div className="noir-marquee" aria-label="NOIR Urban Wears brand statement">
        <span>THIKA TO EVERYWHERE</span><Sparkles /><span>OWN YOUR IDENTITY</span><Sparkles /><span>MOVE DIFFERENT</span><Sparkles /><span>THIKA TO EVERYWHERE</span>
      </div>

      {newArrivals.length > 0 && <section className="noir-section noir-arrivals" aria-labelledby="arrivals-title">
        <div className="noir-section-heading">
          <div><p className="noir-overline">FRESH FROM THE STUDIO <b>—</b></p><h2 id="arrivals-title">FRESH DROPS.<br className="mobile-break" /> BIGGER VIBES.</h2><p>New pieces for the next version of you.</p></div>
          <Link href="/shop?sort=newest" className="noir-outline-link">VIEW ALL <ArrowUpRight size={16} /></Link>
        </div>
        <ProductGrid products={newArrivals} />
      </section>}

      <section className="noir-categories" id="categories" aria-labelledby="categories-title">
        <div className="noir-section noir-category-inner">
          <div className="noir-category-intro"><p className="noir-overline">FIND YOUR NEXT GO-TO</p><h2 id="categories-title">FIND YOUR<br /><em>STYLE.</em></h2><p>From kicks to layers — everything you need to own the streets.</p><Link href="/shop" className="noir-button noir-button-gold">BROWSE ALL <ArrowUpRight size={16} /></Link></div>
          <div className="noir-category-grid">
            {categories.map((category, index) => (
              <Link key={category.name} href={`/shop?category=${encodeURIComponent(category.name)}`} className="noir-category-card">
                <img src={categoryImages[category.name]} alt={`${category.name} collection`} loading="lazy" />
                <span className="noir-category-number">0{index + 1}</span>
                <span className="noir-category-label">{category.name === "Hoodies & Outerwear" ? <>HOODIES &<br /> OUTERWEAR</> : category.name.toUpperCase()} <MoveUpRight size={17} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="noir-campaign">
        <img src="/images/noir-statement-campaign.webp" alt="NOIR streetwear campaign editorial" loading="lazy" />
        <div className="noir-campaign-overlay" />
        <div className="noir-campaign-copy">
          <p className="noir-overline">NOIR IS A STATE OF MIND</p>
          <h2>YOUR STYLE.<br /><em>YOUR RULES.</em></h2>
          <p>Make a statement without saying a word.</p>
          <Link href="/shop" className="noir-button noir-button-gold">SHOP THE COLLECTION <ArrowUpRight size={16} /></Link>
        </div>
        <span className="noir-campaign-index">THE NOIR ROTATION — 001</span>
      </section>

      {featuredProducts.length > 0 && <section className="noir-section noir-best" aria-labelledby="best-title">
        <div className="noir-section-heading">
          <div><p className="noir-overline">THE NOIR SELECTION <b>—</b></p><h2 id="best-title">THE EVERYDAY<br className="mobile-break" /> ROTATION.</h2><p>Distinctive pieces for your everyday.</p></div>
          <Link href="/shop" className="noir-outline-link">SHOP ALL <ArrowUpRight size={16} /></Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>}

      <section className="noir-store">
        <div className="noir-store-mark">N<span>.</span></div>
        <div className="noir-store-copy"><p className="noir-overline">COME THROUGH</p><h2>FIND US IN THIKA.</h2><p><MapPin size={15} /> Uhuru Street, Thika Town, Kenya <span>·</span> 10:00 AM – 8:00 PM</p></div>
        <Link href="/contact" className="noir-outline-link">VISIT THE STORE <ArrowUpRight size={16} /></Link>
      </section>
    </div>
  )
}
