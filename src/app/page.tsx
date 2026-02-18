import { GridLines } from '@/components/atoms/GridLines'
import { Experience } from '@/components/sections/Experience'
import { FooterCLI } from '@/components/sections/FooterCLI'
import { Hero } from '@/components/sections/Hero'
import { SkillStack } from '@/components/sections/SkillStack'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-paper text-ink-primary">
      <GridLines />
      <div className="relative z-10">
        <Hero />
        <Experience />
        <SkillStack />
        <FooterCLI />
      </div>
    </main>
  )
}
