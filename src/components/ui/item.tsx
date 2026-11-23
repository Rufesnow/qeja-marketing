import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const itemVariants = cva(
  'group/item flex flex-wrap items-center rounded-md border border-transparent text-left text-sm outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border-border',
        muted: 'bg-muted/50',
      },
      size: {
        default: 'gap-4 p-4',
        sm: 'gap-2.5 px-4 py-3',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)

function Item({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return <Comp className={cn(itemVariants({ variant, size, className }))} {...props} />
}

function ItemMedia({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex size-8 shrink-0 items-center justify-center self-start rounded-sm border bg-muted [&_svg]:pointer-events-none [&_svg]:size-4',
        className
      )}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-1 flex-col gap-1', className)} {...props} />
}

function ItemTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex w-fit items-center gap-2 text-sm font-medium leading-snug', className)} {...props} />
}

function ItemDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('line-clamp-2 text-balance text-sm font-normal leading-normal text-muted-foreground', className)}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center gap-2', className)} {...props} />
}

export { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions }
