import type { MetadataRoute } from "next";
import { programs } from "@/content/home";
import { siteConfig } from "@/site.config";
export default function sitemap():MetadataRoute.Sitemap{const pages=["","/center","/organization","/programs","/partners","/apply","/news","/contact"];return [...pages.map(path=>({url:`${siteConfig.url}${path}`,changeFrequency:"monthly" as const,priority:path===""?1:.7})),...programs.map(p=>({url:`${siteConfig.url}/programs/${p.slug}`,changeFrequency:"monthly" as const,priority:.8}))]}
