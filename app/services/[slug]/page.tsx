import type { Metadata } from 'next';
import { ServicePage } from '@/components/MarketingPage';
import { services } from '@/content/services';
export function generateStaticParams(){return services.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const s=services.find(x=>x.slug===slug);return {title:s?.name||'Service',description:s?.short};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ServicePage slug={slug}/>}
