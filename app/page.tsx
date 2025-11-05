import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { OffersSection } from "@/components/offers-section"
import { TechSection } from "@/components/tech-section"
import { CaseSection } from "@/components/case-section"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <WhySection />
      <OffersSection />
      <TechSection />
      <CaseSection />
      <CtaSection />
    </main>
  )
}
