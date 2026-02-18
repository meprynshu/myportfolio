import { Github, Linkedin, MapPin, Twitter } from 'lucide-react'

import { IDENTITY, SOCIAL_LINKS } from '@/data/content'

export function Hero() {
  return (
    <section className="border-b border-grid">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid min-h-[20vh] grid-cols-1 md:grid-cols-12">
          <div className="col-span-1 border-b border-grid py-8 md:col-span-8 md:border-b-0 md:border-r md:py-10">
            <h1 className="text-3xl font-semibold tracking-tighterPlus text-ink-primary md:text-5xl">
              {IDENTITY.name}
            </h1>
            <p className="mt-3 font-sans text-sm tracking-tight text-ink-secondary md:text-base">
              {IDENTITY.role}
            </p>
          </div>

          <div className="col-span-1 py-8 md:col-span-4 md:py-10">
            <div className="space-y-3 text-xs text-ink-secondary">
              <p className="flex items-center gap-2 font-mono">
                <MapPin size={14} strokeWidth={1.5} />
                {IDENTITY.location}
              </p>
              <div className="flex items-center gap-3">
                <a
                  aria-label="GitHub"
                  className="transition-colors hover:text-ink-primary"
                  href={SOCIAL_LINKS.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github size={14} strokeWidth={1.5} />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-ink-primary"
                  href={SOCIAL_LINKS.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Linkedin size={14} strokeWidth={1.5} />
                </a>
                <a
                  aria-label="X"
                  className="transition-colors hover:text-ink-primary"
                  href={SOCIAL_LINKS.x}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Twitter size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
