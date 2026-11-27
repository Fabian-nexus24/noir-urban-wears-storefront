import Link from "next/link"
import { ArrowRight, ArrowUpRight, Headphones, MapPin, MessageCircle, MoveUpRight, PackageCheck, Star } from "lucide-react"
import { categories, publishedProducts } from "@/data/products"
import { ProductGrid } from "@/components/products/product-grid"

const categoryLabels: Record<string, string> = {
  Shoes: "FOOTWEAR",
  "T-Shirts": "T-SHIRTS",
  "Hoodies & Outerwear": "HOODIES & OUTERWEAR",
  Accessories: "ACCESSORIES",
}

export default function Home() {
  const newArrivals = publishedProducts.filter((product) => product.isNew).slice(0, 4)

  return (
    <div className="noir-home">
      <section className="noir-hero" aria-labelledby="hero-title">
        <img className="noir-hero-image" src="/images/noir-campaign-hero.png" alt="Two Kenyan models wearing contemporary streetwear in the city" fetchPriority="high" />
        <div className="noir-hero-shade" />
        <div className="noir-hero-content">
          <p className="noir-kicker"><span /> THIKA, KENYA</p>
          <h1 id="hero-title">WEAR YOUR<br /><em>IDENTITY.</em></h1>
          <p className="noir-hero-copy">Streetwear for those who move differently. Discover your style. Make your statement.</p>
          <div className="noir-hero-actions">
            <Link href="/shop" className="noir-button noir-button-red">SHOP COLLECTION <ArrowRight size={16} /></Link>
            <Link href="/shop?sort=newest" className="noir-button noir-button-ghost">EXPLORE NEW ARRIVALS <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="noir-hero-foot"><span>01 / 01</span><i /><span>NOIR URBAN WEARS</span></div>
        <div className="noir-hero-side">NOIR&nbsp; / &nbsp;CULTURE&nbsp; / &nbsp;001</div>
      </section>

      <section className="noir-service-strip" aria-label="NOIR customer services">
        <div><PackageCheck aria-hidden="true" /><span><strong>COUNTRYWIDE DELIVERY</strong><small>Delivery across Kenya.</small></span></div>
        <a href="https://wa.me/254716836551" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span><strong>ORDER VIA WHATSAPP</strong><small>Browse and request your order.</small></span></a>
        <Link href="/contact"><Headphones aria-hidden="true" /><span><strong>CUSTOMER SUPPORT</strong><small>Contact us for assistance.</small></span></Link>
        <div><Star aria-hidden="true" /><span><strong>PREMIUM STREETWEAR</strong><small>Wear Your Identity.</small></span></div>
      </section>

      <section className="noir-categories" id="categories" aria-labelledby="categories-title">
        <div className="noir-category-heading"><p className="noir-overline">FIND YOUR NEXT GO-TO</p><h2 id="categories-title">SHOP BY CATEGORY</h2></div>
        <div className="noir-category-grid">
          {categories.map((category, index) => (
            <Link key={category.name} href={`/shop?category=${encodeURIComponent(category.name)}`} className="noir-category-card">
              <img src={category.image} alt={`${categoryLabels[category.name].toLowerCase()} collection`} loading="lazy" />
              <span className="noir-category-number">0{index + 1}</span>
              <span className="noir-category-label"><span><strong>{categoryLabels[category.name]}</strong><small>{category.note}</small></span><i aria-hidden="true"><MoveUpRight size={17} /></i></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="noir-section noir-arrivals" aria-labelledby="arrivals-title">
        <div className="noir-arrivals-layout">
          <div className="noir-arrivals-intro">
            <p className="noir-overline">FRESH FROM THE STUDIO.</p>
            <h2 id="arrivals-title">NEW<br /><em>ARRIVALS.</em></h2>
            <p>Fresh pieces. New energy. Discover what&apos;s new.</p>
            <Link href="/shop?sort=newest" className="noir-outline-link">VIEW ALL PIECES <ArrowRight size={15} /></Link>
          </div>
          {newArrivals.length > 0 ? <ProductGrid products={newArrivals} /> : <div className="noir-arrivals-empty"><span>THE NEXT DROP</span><p>Our newest pieces will appear here as they are added to the collection.</p><Link href="/shop">EXPLORE THE SHOP <ArrowRight size={15} /></Link></div>}
        </div>
      </section>

      <section className="noir-campaign" aria-labelledby="campaign-title">
        <img src="/images/noir-statement-campaign.png" alt="Streetwear model in an urban city setting" loading="lazy" />
        <div className="noir-campaign-overlay" />
        <div className="noir-campaign-copy">
          <p className="noir-overline">NOIR URBAN WEARS · THIKA, KENYA</p>
          <h2 id="campaign-title">YOUR STYLE.<br /><em>YOUR RULES.</em></h2>
          <div className="noir-store-details">
            <p><MapPin aria-hidden="true" /> <span><strong>FIND YOUR STYLE. FIND US IN THIKA.</strong><small>Uhuru Street, Thika Town, Kenya</small></span></p>
            <p><span className="noir-clock" aria-hidden="true">◷</span> <span><strong>OPEN DAILY</strong><small>10:00 AM – 8:00 PM</small></span></p>
            <p><MessageCircle className="noir-whatsapp" aria-hidden="true" /> <span><strong>WHATSAPP</strong><small>+254 716 836 551</small></span></p>
            <a href="https://wa.me/254716836551" target="_blank" rel="noreferrer" className="noir-button noir-button-red">CONTACT US <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>
    </div>
  )
}
