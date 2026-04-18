import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const inputClass = cn(
  'w-full rounded-lg border border-white/15 bg-white px-3 py-2.5 text-sm text-[#022c22]',
  'placeholder:text-neutral-400',
  'transition-[box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
  'focus:border-[#8A2BE2] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]/45',
)

export function SiteFooter() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <footer id="site-footer" className="w-full text-white">
      {/* SECCIÓN 1: Botón superior con fondo blanco total */}
      <div id="footer-cta" className="w-full bg-white py-10">
        <div className="mx-auto flex max-w-7xl justify-center px-4">
          <Button
            asChild
            size="lg"
            className={cn(
              'h-auto rounded-full px-12 py-6 text-base font-bold text-white',
              'border-0 bg-[#22c55e] shadow-md',
              'transition-[background-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
              'hover:bg-[#16a34a] hover:shadow-lg',
              'focus-visible:ring-2 focus-visible:ring-[#8A2BE2]/60',
            )}
          >
            <a href="#catalogue">Book a free visit</a>
          </Button>
        </div>
      </div>

      {/* SECCIÓN 2: El cuerpo del Footer con el gradiente de lado a lado */}
      <div className="w-full bg-gradient-to-br from-[#047857]/90 via-[#07533e] to-[#022b1d] py-14">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-8">
          
          {/* Columna Izquierda: Información */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img
              src={`${import.meta.env.BASE_URL}snappiffylogo.png`} 
              alt="Snappiffy"
              width={320}
              height={128}
              className="h-28 w-auto object-contain drop-shadow-md md:h-36"
            />
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]">
              YOUR APP IN A SNAP
            </p>
            <a
              href="#"
              className="mt-8 text-sm text-white/95 underline-offset-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-white hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:snappiffy.business@gmail.com"
              className="mt-4 text-sm text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#bbf7d0]"
            >
              snappiffy.business@gmail.com
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              5636 Shannon lane place, Dublin OH 43016, United States
            </p>
          </div>

          {/* Columna Derecha: Formulario */}
          <div>
            <h2 className="text-center text-xl font-bold text-white drop-shadow-sm md:text-left">
              Contact Us
            </h2>
            <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
              <div>
                <input id="contact-name" name="name" type="text" placeholder="Name" className={inputClass} />
              </div>
              <div>
                <input id="contact-email" name="email" type="email" placeholder="Email" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <select name="phoneCountry" className={cn(inputClass, 'sm:max-w-[140px]')} defaultValue="+1">
                <option value="+1">🇺🇸 +1</option>
                <option value="+34">🇪🇸 +34</option>
                <option value="+52">🇲🇽 +52</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+593">🇪🇨 +593</option>
                </select>
                <input id="contact-phone" name="phone" type="tel" placeholder="Phone Number" className={inputClass} />
              </div>
              <div>
                <input id="contact-company" name="company" type="text" placeholder="Company Name (Optional)" className={inputClass} />
              </div>
              <div>
                <textarea id="contact-message" name="message" rows={4} placeholder="Tell us a little about your project" className={cn(inputClass, 'resize-y min-h-[120px]')} />
              </div>
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                {sent && <p className="text-sm text-[#22c55e]">Thanks — we'll be in touch shortly.</p>}
                <Button type="submit" className="rounded-lg bg-[#22c55e] px-8 font-semibold text-white hover:bg-[#16a34a]">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: Copyright con fondo oscuro total */}
      <div className="w-full border-t border-white/15 bg-gradient-to-r from-[#022c22] via-[#064e3b] to-[#022c22] py-6 text-center">
        <p className="text-xs text-white/60">
          © 2023 - 2024 Snappiffy Agency. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}