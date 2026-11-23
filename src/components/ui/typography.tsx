import * as React from 'react'
import { cn } from '@/lib/utils'

// shadcn/ui typography, matching the kit's Typography components.
type P<T> = React.HTMLAttributes<T>

export const H1 = ({ className, ...p }: P<HTMLHeadingElement>) => (
  <h1 className={cn('scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl lg:leading-none', className)} {...p} />
)
export const H2 = ({ className, ...p }: P<HTMLHeadingElement>) => (
  <h2 className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight', className)} {...p} />
)
export const H3 = ({ className, ...p }: P<HTMLHeadingElement>) => (
  <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...p} />
)
export const Lead = ({ className, ...p }: P<HTMLParagraphElement>) => (
  <p className={cn('text-xl text-muted-foreground', className)} {...p} />
)
export const Large = ({ className, ...p }: P<HTMLDivElement>) => (
  <div className={cn('text-lg font-semibold', className)} {...p} />
)
export const Small = ({ className, ...p }: P<HTMLElement>) => (
  <small className={cn('block text-sm font-medium leading-none', className)} {...p} />
)
export const Muted = ({ className, ...p }: P<HTMLParagraphElement>) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...p} />
)
export const List = ({ className, ...p }: P<HTMLUListElement>) => (
  <ul className={cn('ml-6 list-disc [&>li]:mt-2', className)} {...p} />
)
