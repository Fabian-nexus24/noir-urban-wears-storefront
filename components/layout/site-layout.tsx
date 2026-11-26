import type { ReactNode } from "react"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
export function SiteLayout({ children }: { children: ReactNode }) { return <><SiteHeader/><main>{children}</main><SiteFooter/></> }
