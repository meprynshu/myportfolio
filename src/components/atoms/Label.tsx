import type { ReactNode } from 'react'

type LabelProps = {
  children: ReactNode
  className?: string
}

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

export function Label({ children, className }: LabelProps) {
  return (
    <p
      className={cn(
        'font-mono text-[11px] uppercase tracking-[0.2em] text-ink-secondary',
        className,
      )}
    >
      {children}
    </p>
  )
}
