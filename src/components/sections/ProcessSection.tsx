import type { CSSProperties } from 'react'
import { CodeXml, Rocket, Settings2 } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { PROCESS_STEP_IMAGE_URLS, PROCESS_STEPS } from '@/data/landing'
import { cn } from '@/lib/utils'

const nodeBase =
  'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-emerald-600 bg-emerald-700 text-base font-bold text-white shadow-md transition-[transform,border-color,background-color,color,box-shadow] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-safe:hover:scale-110'

const nodeHover =
  'hover:border-[#8A2BE2] hover:bg-[#f5f3ff] hover:text-[#6b21a8] hover:shadow-[0_0_18px_rgba(138,43,226,0.35)]'

const lineMask: CSSProperties = {
  WebkitMaskImage:
    'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
  maskImage:
    'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
}

const sweepEase = [0.4, 0, 0.2, 1] as const

function StepArtwork({ src, slideFrom }: { src: string; slideFrom: 'left' | 'right' }) {
  const reduceMotion = useReducedMotion()
  const cls =
    'max-h-72 w-full max-w-md rounded-3xl object-cover shadow-[0_0_20px_rgba(34,197,94,0.4)]'

  if (reduceMotion) {
    return <img src={src} alt="" className={cls} loading="lazy" />
  }

  return (
    <motion.img
      src={src}
      alt=""
      className={cls}
      loading="lazy"
      initial={{ opacity: 0, x: slideFrom === 'left' ? -36 : 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.65, ease: sweepEase }}
    />
  )
}

function StepNode({
  index,
  icon,
}: {
  index: number
  icon: 'number' | 'settings' | 'code' | 'rocket'
}) {
  return (
    <div
      className={cn(
        'relative z-10 flex cursor-default items-center justify-center',
        nodeBase,
        nodeHover,
        'motion-reduce:hover:scale-100',
      )}
      aria-hidden
    >
      {icon === 'number' ? (
        <span className="text-lg font-extrabold">1</span>
      ) : icon === 'settings' ? (
        <Settings2 className="h-6 w-6" strokeWidth={2.2} />
      ) : icon === 'code' ? (
        <CodeXml className="h-6 w-6" strokeWidth={2.2} />
      ) : (
        <Rocket className="h-6 w-6" strokeWidth={2.2} />
      )}
      <span className="sr-only">Step {index + 1}</span>
    </div>
  )
}

const icons: Array<'number' | 'settings' | 'code' | 'rocket'> = [
  'number',
  'settings',
  'code',
  'rocket',
]

function StepCard({
  title,
  body,
  align,
}: {
  title: string
  body: string
  align: 'left' | 'right'
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border-2 border-[#8A2BE2]/30 bg-white/95 p-5 shadow-[inset_0_0_0_1px_rgba(138,43,226,0.12)] backdrop-blur-sm',
        'transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
        'hover:shadow-lg motion-safe:hover:-translate-y-0.5',
        align === 'right' && 'md:text-right',
      )}
    >
      <h3 className="text-lg font-bold text-[#14532d] md:text-xl">{title}</h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-neutral-800 md:text-base">
        {body}
      </p>
    </div>
  )
}

function ConnectorFromLeftCard() {
  return (
    <div className="flex min-h-[3.5rem] min-w-0 flex-1 items-center justify-end pr-1">
      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300 ring-2 ring-emerald-600/35" />
      <div className="ml-2 h-0.5 min-w-[2.5rem] flex-1 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600/80" />
    </div>
  )
}

function ConnectorToRightCard() {
  return (
    <div className="flex min-h-[3.5rem] min-w-0 flex-1 items-center justify-start pl-1">
      <div className="mr-2 h-0.5 min-w-[2.5rem] flex-1 rounded-full bg-gradient-to-l from-emerald-400 to-emerald-600/80" />
      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300 ring-2 ring-emerald-600/35" />
    </div>
  )
}

export function ProcessSection() {
  return (
    <section
      id="our-process"
      className="scroll-mt-24 bg-[#fafbf9] py-20 md:py-28"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-[#081c15] md:text-4xl">
            <span className="text-[#14532d]">Our Process:</span>{' '}
            <span className="text-neutral-900">AI-Powered App Development in a Snap</span>
          </h2>
        </header>

        {/* Mobile */}
        <div className="relative md:hidden">
          <div
            className="absolute top-3 bottom-3 left-5 w-2.5 rounded-full bg-gradient-to-b from-emerald-300 via-emerald-600 to-[#081c15]"
            style={lineMask}
            aria-hidden
          />
          <div className="space-y-10 pl-14">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="absolute -left-[2.125rem] top-3 -translate-x-1/2">
                  <StepNode index={i} icon={icons[i] ?? 'number'} />
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <div className="flex min-h-[2.5rem] min-w-0 flex-1 items-center justify-end pr-1 pt-1">
                    <div className="h-0.5 min-w-[1.5rem] flex-1 rounded-full bg-gradient-to-r from-emerald-500/60 to-emerald-400" />
                    <span className="ml-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300 ring-2 ring-emerald-600/35" />
                  </div>
                  <div className="min-w-0 flex-[1.35] space-y-4">
                    <StepCard title={step.title} body={step.body} align="left" />
                    <StepArtwork
                      src={PROCESS_STEP_IMAGE_URLS[i] ?? PROCESS_STEP_IMAGE_URLS[0]}
                      slideFrom="left"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="relative hidden pb-8 md:block">
          <div
            className="pointer-events-none absolute top-0 bottom-0 left-1/2 w-2.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-300 via-emerald-600 to-[#081c15]"
            style={lineMask}
            aria-hidden
          />

          <div className="space-y-4 md:space-y-0">
            {PROCESS_STEPS.map((step, i) => {
              const isLeft = step.side === 'left'
              const imgSrc = PROCESS_STEP_IMAGE_URLS[i] ?? PROCESS_STEP_IMAGE_URLS[0]

              return (
                <div
                  key={step.title}
                  className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 gap-y-6 py-10"
                >
                  {isLeft ? (
                    <>
                      <div className="flex items-center justify-end gap-0">
                        <div className="max-w-md shrink-0">
                          <StepCard title={step.title} body={step.body} align="left" />
                        </div>
                        <ConnectorFromLeftCard />
                      </div>
                      <div className="flex justify-center">
                        <StepNode index={i} icon={icons[i] ?? 'number'} />
                      </div>
                      <div className="flex justify-start pl-2">
                        <StepArtwork src={imgSrc} slideFrom="right" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-end pr-2">
                        <StepArtwork src={imgSrc} slideFrom="left" />
                      </div>
                      <div className="flex justify-center">
                        <StepNode index={i} icon={icons[i] ?? 'rocket'} />
                      </div>
                      <div className="flex items-center justify-start gap-0">
                        <ConnectorToRightCard />
                        <div className="max-w-md shrink-0">
                          <StepCard title={step.title} body={step.body} align="right" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <Button
            asChild
            size="lg"
            className={cn(
              'rounded-xl bg-[#081c15] px-10 font-bold text-white shadow-lg',
              'transition-[background-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
              'hover:bg-emerald-900 hover:shadow-[0_12px_28px_rgba(138,43,226,0.12)]',
              'focus-visible:ring-2 focus-visible:ring-[#8A2BE2]/60',
            )}
          >
            <a href="#footer-cta">Let&apos;s Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
