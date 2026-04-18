import type { ReactNode } from 'react'

import type { PortfolioApp } from '@/data/landing'
import { PORTFOLIO_APPS } from '@/data/landing'
import { cn } from '@/lib/utils'

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-2 shadow-inner">
        <div className="pointer-events-none absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />
        <div className="relative mt-4 min-h-[390px] overflow-hidden rounded-[1.35rem] bg-neutral-50">
          {children}
        </div>
      </div>
    </div>
  )
}

function MockRestaurant() {
  const items = ['Bandeja Paisa', 'Lomo Saltado', 'Ceviche', 'Arepa']
  return (
    <div className="flex h-full flex-col p-2 text-[10px] text-neutral-800">
      <p className="text-center text-[11px] font-bold text-emerald-800">This week&apos;s meals</p>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {items.map((name) => (
          <div
            key={name}
            className="rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-neutral-200/80"
          >
            <div className="mb-1 h-8 rounded-md bg-gradient-to-br from-amber-100 to-orange-100" />
            <p className="line-clamp-2 font-semibold leading-tight">{name}</p>
            <p className="text-emerald-700">$12</p>
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-around border-t border-neutral-200 pt-1.5 text-[9px] text-neutral-500">
        <span>Home</span>
        <span>Menu</span>
        <span>Cart</span>
        <span>Profile</span>
      </div>
    </div>
  )
}

function MockFood() {
  return (
    <div className="flex h-full flex-col gap-2 p-2 text-[10px] text-neutral-800">
      <div className="rounded-xl bg-gradient-to-r from-lime-200 to-emerald-200 p-2">
        <p className="text-[9px] font-bold uppercase text-emerald-900">Perfect summer fruits salads</p>
        <p className="text-[8px] text-emerald-800/80">Fresh picks · limited time</p>
      </div>
      <div className="flex justify-around gap-1">
        {['Shops', 'Deals', 'Chefs'].map((t) => (
          <div
            key={t}
            className="flex flex-1 flex-col items-center rounded-lg bg-white py-1 shadow-sm ring-1 ring-neutral-100"
          >
            <div className="mb-0.5 h-6 w-6 rounded-full bg-emerald-100" />
            <span className="text-[8px]">{t}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] font-bold">Discover new dishes</p>
      <div className="space-y-1">
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-2 rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-neutral-100">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-rose-100 to-amber-50" />
            <div className="flex-1 space-y-0.5">
              <div className="h-1.5 w-3/4 rounded bg-neutral-200" />
              <div className="h-1.5 w-1/2 rounded bg-neutral-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockHealth() {
  const tiles = [
    { t: 'Cita con el médico', c: 'from-sky-100 to-blue-50' },
    { t: 'Diagnóstico', c: 'from-violet-100 to-purple-50' },
    { t: 'Farmacia', c: 'from-emerald-100 to-teal-50' },
    { t: 'Ambulancia', c: 'from-rose-100 to-red-50' },
  ]
  return (
    <div className="flex h-full flex-col gap-2 p-2 text-[10px] text-neutral-800">
      <p className="text-center text-[11px] font-bold text-emerald-900">Home</p>
      <p className="text-[9px] font-semibold text-neutral-600">Servicios destacados</p>
      <div className="grid grid-cols-2 gap-1.5">
        {tiles.map(({ t, c }) => (
          <div
            key={t}
            className={cn(
              'flex flex-col items-center rounded-xl p-2 text-center shadow-sm ring-1 ring-neutral-100',
              `bg-gradient-to-br ${c}`,
            )}
          >
            <div className="mb-1 h-8 w-8 rounded-full bg-white/80" />
            <span className="text-[8px] font-semibold leading-tight">{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockRealEstate() {
  return (
    <div className="flex h-full flex-col gap-1.5 p-2 text-[9px] text-neutral-800">
      <div className="relative overflow-hidden rounded-xl">
        <div className="h-24 bg-gradient-to-br from-sky-200 to-emerald-100" />
        <p className="absolute bottom-1 left-1 rounded bg-black/50 px-1 text-[8px] text-white">
          Pear House
        </p>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] font-bold text-emerald-900">$1150</span>
        <span className="text-[8px] text-neutral-500">/ mo</span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-7 flex-1 rounded-md bg-neutral-200/80" />
        ))}
      </div>
      <p className="text-[8px] leading-snug text-neutral-600">
        2 bd · 1 ba · Parking · Pet friendly
      </p>
      <button
        type="button"
        className="mt-auto rounded-full bg-emerald-600 py-1.5 text-[10px] font-bold text-white shadow-sm"
      >
        Book Now
      </button>
    </div>
  )
}

function MockContent({ variant }: { variant: PortfolioApp['mockVariant'] }) {
  switch (variant) {
    case 'restaurant':
      return <MockRestaurant />
    case 'food':
      return <MockFood />
    case 'health':
      return <MockHealth />
    case 'realestate':
      return <MockRealEstate />
    default:
      return null
  }
}

function PortfolioSlide({ app }: { app: PortfolioApp }) {
  return (
    <article
      className={cn(
        'flex w-[min(100vw-3rem,300px)] shrink-0 flex-col rounded-3xl border-2 border-[#8A2BE2]/35 bg-emerald-950/35 p-5 shadow-[inset_0_0_0_1px_rgba(138,43,226,0.2)] backdrop-blur-sm',
        'transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
        'hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(138,43,226,0.12)]',
        'motion-reduce:hover:translate-y-0',
      )}
    >
      <div className="relative mx-auto mb-5 w-full max-w-[240px]">
        <div
          className={cn(
            'absolute inset-2 -z-10 rounded-[2rem] bg-[#022c22]/55',
            'shadow-[inset_0_0_20px_rgba(34,197,94,0.08)]',
          )}
        />
        <PhoneFrame>
          <MockContent variant={app.mockVariant} />
        </PhoneFrame>
      </div>
      <h3 className="text-center text-lg font-bold text-[#F9F9F9]">{app.title}</h3>
      <p className="mt-1 text-center text-sm text-zinc-300/95">{app.description}</p>
    </article>
  )
}

const MARQUEE_APPS = [...PORTFOLIO_APPS, ...PORTFOLIO_APPS]

export function PortfolioSection() {
  return (
    <section
      id="catalogue"
      className="relative isolate scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      {/* Reference-style deep green + lime atmosphere */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/portfolio-bg.png')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-br from-[#022c22] via-[#064e3b]/95 to-[#15803d]/90"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_80%_at_75%_65%,rgba(74,222,128,0.45)_0%,transparent_55%)]"
        aria-hidden
      />
      <div className="absolute inset-0 z-[1] bg-black/25" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#F9F9F9] md:text-4xl">
            Catalogue
          </h2>
          <p className="mt-3 text-pretty text-zinc-300">
            Explore the custom mobile experiences we craft — from ordering to wellness and
            property.
          </p>
        </header>
      </div>

      <div className="relative z-10 w-full overflow-hidden pb-4 motion-reduce:overflow-x-auto">
        <div className="flex w-max animate-marquee-scroll gap-8 px-4 md:gap-10 md:px-8 motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          {MARQUEE_APPS.map((app, i) => (
            <PortfolioSlide key={`${app.title}-${i}`} app={app} />
          ))}
        </div>
      </div>
    </section>
  )
}
