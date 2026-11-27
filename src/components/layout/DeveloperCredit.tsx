import { siteConfig } from '@/config/site'
import { ArrowUpRight } from 'lucide-react'

export default function DeveloperCredit() {
  return (
    <div className="bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-center">
          <a
            href={siteConfig.developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-ivory/25 hover:text-ivory/50 transition-colors duration-300"
          >
            {siteConfig.developer.credit}
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
