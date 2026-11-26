import type { Metadata } from "next"
import { ShopCatalogue } from "@/components/products/shop-catalogue"
export const metadata: Metadata = { title: "Shop the Collection", description: "Browse NOIR Urban Wears shoes, tees, outerwear and accessories." }
export default async function ShopPage({ searchParams }: { searchParams: Promise<{ category?: string; sort?: string }> }) {
  const params = await searchParams
  return <ShopCatalogue initialCategory={params.category || "All"} initialSort={params.sort === "newest" ? "newest" : "featured"}/>
}
