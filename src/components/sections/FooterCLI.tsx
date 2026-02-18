import { Button } from '@/components/atoms/Button'
import { CONTACT_LINKS } from '@/data/content'

export function FooterCLI() {
  return (
    <footer className="bg-ink-primary py-8 text-white md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="font-mono text-xs text-white/90">priyanshu@arch:~$ ls -a ./links</p>

        <div className="mt-4 grid grid-cols-1 gap-3 border-t border-white/20 pt-4 sm:grid-cols-3">
          {CONTACT_LINKS.map((link) => (
            <Button
              className="justify-center"
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target="_blank"
              variant="inverted"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  )
}
