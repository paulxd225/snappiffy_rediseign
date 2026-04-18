import { useEffect, useRef } from 'react'

import { TECH_STACK } from '@/data/landing'
import { cn } from '@/lib/utils'

function TechLogoStrip() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 1) return
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#14532d]">
        Technologies we build with
      </p>
      <p className="text-xs text-neutral-600">
        Scroll with your mouse wheel over the strip to move horizontally — down moves left, up
        moves right.
      </p>
      <div
        ref={scrollRef}
        className={cn(
          'tech-strip-scroll flex max-w-full gap-3 overflow-x-auto overflow-y-hidden rounded-2xl border border-emerald-200/80 bg-white/80 p-4 shadow-sm',
          'transition-[box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
        )}
      >
        {TECH_STACK.map((name) => (
          <div
            key={name}
            className={cn(
              'shrink-0 rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white px-5 py-3 text-sm font-bold text-[#064e3b]',
              'shadow-[inset_0_0_0_1px_rgba(138,43,226,0.08)]',
              'transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
              'hover:-translate-y-0.5 hover:border-[#8A2BE2]/35 hover:shadow-md',
            )}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

export function VideoIntroSection() {
  return (
    <section
      id="intro-video"
      className="scroll-mt-24 border-b border-emerald-100/60 bg-gradient-to-b from-emerald-50/90 via-white to-zinc-50 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-14 lg:px-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#022c22] md:text-3xl">
            See how we work
          </h2>
          <p className="max-w-xl text-pretty text-neutral-600">
            A quick look at our approach to AI-assisted delivery, collaboration, and shipping
            mobile products on a predictable timeline.
          </p>
          <div
            className={cn(
              'relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-[#8A2BE2]/25 bg-black shadow-lg',
              'shadow-[inset_0_0_0_1px_rgba(138,43,226,0.12)]',
            )}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/iTCx-iAFJ9A"
              title="Snappiffy introduction video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 lg:pt-10">
          <TechLogoStrip />
        </div>
      </div>
    </section>
  )
}
