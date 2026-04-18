import { Globe, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { NAV_ITEMS } from '@/data/landing'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'

const linkEase =
  'transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'

export function SiteHeader() {
  const scrolled = useScrolled()
  const activeSection = useActiveSection()

  const isActive = (sectionId: (typeof NAV_ITEMS)[number]['sectionId']) => {
    if (!sectionId) return false
    return activeSection === sectionId
  }

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-transparent transition-[background,box-shadow,backdrop-filter,border-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
        'bg-gradient-to-r from-[#fbfff0] via-[#1b4332] to-[#04100b]',
        scrolled &&
          'border-b border-white/10 bg-gradient-to-r from-[#dff1d6]/80 via-[#1b4332]/75 to-[#04100b]/88 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-md backdrop-saturate-150',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex shrink-0 cursor-pointer items-center gap-3 text-left"
        >
          <img
            src={`${import.meta.env.BASE_URL}snappiffylogo.png`} 
            alt="Snappiffy"
            className={cn(
              'h-35 w-auto object-contain md:h-50', // Corregido: altura definida y responsiva
              'transition-[filter,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
              'drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(138,43,226,0.35)] motion-safe:group-hover:scale-[1.02]',
            )}
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Main">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.sectionId)
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'relative text-sm font-medium',
                  linkEase,
                  active
                    ? 'text-[#bef264] drop-shadow-[0_0_12px_rgba(190,242,100,0.35)]'
                    : 'text-zinc-200 hover:text-white',
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-[#8A2BE2]',
                    'origin-left transition-[width,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
                    active ? 'w-full opacity-100' : 'w-0 opacity-0 hover:w-full hover:opacity-100',
                  )}
                />
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Globe
            className="h-5 w-5 cursor-pointer text-zinc-300 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#c084fc]"
            aria-hidden
          />
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-emerald-400/80 bg-transparent text-emerald-200 transition-[background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-emerald-300 hover:bg-emerald-400 hover:text-[#081c15]"
            asChild
          >
            <a href="#home">FAQ&apos;s</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Globe className="h-5 w-5 text-zinc-200" aria-hidden />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l border-white/10 bg-[#081c15] p-0 text-white">
              <SheetHeader className="border-b border-white/10 p-4 text-left">
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-2" aria-label="Mobile">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.sectionId)
                  return (
                    <SheetClose key={item.label} asChild>
                      <a
                        href={item.href}
                        className={cn(
                          'rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
                          active
                            ? 'bg-white/10 text-[#bef264]'
                            : 'text-zinc-200 hover:bg-white/5 hover:text-white',
                        )}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}