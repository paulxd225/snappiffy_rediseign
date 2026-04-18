import { useEffect, useState } from 'react'

const SECTION_IDS = ['home', 'catalogue', 'our-process'] as const
export type SectionId = (typeof SECTION_IDS)[number] | null

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const elements: { id: (typeof SECTION_IDS)[number]; el: HTMLElement }[] = []
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) elements.push({ id, el })
    }

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as (typeof SECTION_IDS)[number])
        }
      },
      { root: null, rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    for (const { el } of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return active
}
