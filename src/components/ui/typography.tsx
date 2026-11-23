import * as React from 'react'
import { cn } from '@/lib/utils'

// Typography as defined by the Qeja UI Kit in Figma (letter-spacing 0 throughout).
type P<T> = React.HTMLAttributes<T>

export const H1 = ({ className, ...p }: P<HTMLHeadingElement>) => (
  <h1 className={cn('text-4xl font-extrabold md:text-5xl md:leading-[48px]', className)} {...p} />
)
export const H2 = ({ className, ...p }: P<HTMLHeadingElement>) => (
  <h2 className={cn('border-b pb-2 text-3xl font-semibold', className)} {...p} />
)
export const H3 = ({ className, ...p }: P<HTMLHeadingElement>) => (
  <h3 className={cn('text-2xl font-semibold', className)} {...p} />
)
export const Lead = ({ className, ...p }: P<HTMLParagraphElement>) => (
  <p className={cn('text-xl text-muted-foreground', className)} {...p} />
)
export const Large = ({ className, ...p }: P<HTMLDivElement>) => (
  <div className={cn('text-lg font-semibold', className)} {...p} />
)
export const Small = ({ className, ...p }: P<HTMLElement>) => (
  <small className={cn('block text-sm font-medium', className)} {...p} />
)
export const Muted = ({ className, ...p }: P<HTMLParagraphElement>) => (
  <p className={cn('text-sm font-medium text-muted-foreground', className)} {...p} />
)
export const List = ({ className, ...p }: P<HTMLUListElement>) => (
  <ul className={cn('py-6 pl-6 text-base', className)} {...p} />
)
