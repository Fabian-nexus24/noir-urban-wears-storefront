import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProduct } from "@/data/products"
import { ProductDetail } from "@/components/products/product-detail"
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = getProduct(slug); return { title: product ? `${product.name} | NOIR Urban Wears` : "Product not found" } }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProduct(slug); if (!product) notFound(); return <ProductDetail product={product}/> }
