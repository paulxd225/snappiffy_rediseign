import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { FAQ_ITEMS } from '@/data/landing'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faqs"
      className="scroll-mt-24 border-b border-emerald-100/80 bg-gradient-to-b from-white via-emerald-50/40 to-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#022c22] md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Straight answers about timelines, stack, and how we partner with you.
          </p>
        </header>

        <ul className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const open = openIndex === index
            return (
              <li
                key={item.q}
                className={cn(
                  'overflow-hidden rounded-2xl border border-emerald-200/90 bg-white/90 shadow-sm',
                  'transition-[box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
                  open && 'border-[#8A2BE2]/35 shadow-[inset_0_0_0_1px_rgba(138,43,226,0.12)]',
                )}
              >
                <button
                  type="button"
                  className={cn(
                    'flex w-full items-center justify-between gap-4 px-5 py-4 text-left',
                    'transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
                    'hover:bg-emerald-50/50',
                  )}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="text-base font-semibold text-[#14532d] md:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-[#8A2BE2]',
                      'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
                      open && 'rotate-180',
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-emerald-100/80 px-5 pb-4 pt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
