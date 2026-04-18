import { Check, ChevronRight, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { HERO_BENEFITS } from '@/data/landing'
import { cn } from '@/lib/utils'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[min(100svh,920px)] flex-col justify-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}background.jpg`} 
          alt="Descripción"
          className="h-full w-full object-cover opacity-[0.75]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#04100b_88%)] opacity-55" />
      </div>

      {/* Watermark: duplicated brand text, very subtle */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] select-none overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-[20%] top-1/2 w-[140%] -translate-y-1/2 rotate-[-8deg]">
          
        </div>
        <div className="absolute -left-[10%] top-[62%] w-[120%] rotate-[5deg]">
         
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          AI-Integrated mobile App
          <br />
          <span className="mt-3 inline-block text-3xl font-extrabold tracking-tight text-[#F9F9F9] uppercase md:text-5xl md:tracking-tight">
            tailored to your needs
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg font-light text-zinc-200 md:text-2xl">
          Bring your business idea to life in just a few weeks starting from $3,999
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {HERO_BENEFITS.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-white">
              <Check
                className="h-5 w-5 shrink-0 text-emerald-400"
                strokeWidth={2.5}
                aria-hidden
              />
              <span className="font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className={cn(
            'group mt-10 h-auto rounded-full px-10 py-6 text-lg font-bold text-white',
            'border-0 bg-[#2ECC71] shadow-[0_1px_2px_rgba(0,0,0,0.08)]',
            'transition-[background-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
            'hover:bg-[#8A2BE2] hover:shadow-[0_2px_10px_rgba(138,43,226,0.18)]',
            'focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#04100b]',
            'motion-safe:hover:scale-[1.03]',
          )}
        >
          <a href="#footer-cta" className="inline-flex items-center gap-2">
            Book a free visit
            <ChevronRight className="h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-1" />
          </a>
        </Button>

        <figure className="mt-14 max-w-3xl border-t border-white/10 pt-8">
          <blockquote className="text-pretty text-sm italic text-zinc-300 md:text-base">
            &ldquo;AI is changing the rules of the game in every industry. If you don&apos;t
            incorporate it into your company, your competition will.&rdquo;
          </blockquote>
          <figcaption className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <span className="text-sm font-medium text-white">
              Manuel Ferrer, CEO SNAPPIFFY
            </span>
            <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
