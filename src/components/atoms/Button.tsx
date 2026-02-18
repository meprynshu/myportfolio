import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'default' | 'inverted'

type SharedProps = {
  children: ReactNode
  className?: string
  variant?: Variant
}

type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonProps = AnchorButtonProps | NativeButtonProps

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

function isAnchorProps(props: ButtonProps): props is AnchorButtonProps {
  return typeof (props as AnchorButtonProps).href === 'string'
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'default'
  const variantClass =
    variant === 'inverted' ? 'crafty-btn crafty-btn-inverted' : 'crafty-btn'

  if (isAnchorProps(props)) {
    const { children, className, href, variant: variantProp, ...anchorProps } = props
    void variantProp

    return (
      <a className={cn(variantClass, className)} href={href} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { children, className, type = 'button', variant: variantProp, ...buttonProps } = props
  void variantProp

  return (
    <button className={cn(variantClass, className)} type={type} {...buttonProps}>
      {children}
    </button>
  )
}
