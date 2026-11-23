import * as React from 'react'
import { cn } from '@/lib/utils'

type DivProps = React.HTMLAttributes<HTMLDivElement>

function Card({ className, ...props }: DivProps) {
  return (
    <div
      className={cn('flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm', className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: DivProps) {
  return <div className={cn('grid auto-rows-min items-start gap-1.5 px-6', className)} {...props} />
}

function CardTitle({ className, ...props }: DivProps) {
  return <div className={cn('font-semibold leading-none', className)} {...props} />
}

function CardDescription({ className, ...props }: DivProps) {
  return <div className={cn('text-sm text-muted-foreground', className)} {...props} />
}

function CardContent({ className, ...props }: DivProps) {
  return <div className={cn('px-6', className)} {...props} />
}

function CardFooter({ className, ...props }: DivProps) {
  return <div className={cn('flex items-center px-6', className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
