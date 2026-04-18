import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { FaqSection } from '@/components/sections/FaqSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { VideoIntroSection } from '@/components/sections/VideoIntroSection'

export function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans selection:bg-[#8A2BE2] selection:text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <VideoIntroSection />
        <PortfolioSection />
        <ProcessSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
