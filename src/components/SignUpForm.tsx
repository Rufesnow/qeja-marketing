import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Muted } from '@/components/ui/typography'

// Same rules as /api/leads. Spaces in the phone number are removed before checking.
const schema = z.object({
  firstName: z.string().trim().min(1, 'Enter your first name').max(50),
  lastName: z.string().trim().min(1, 'Enter your last name').max(50),
  companyName: z.string().trim().min(2, 'Enter your company name').max(100),
  phone: z
    .string()
    .transform((s) => s.replace(/[\s-]/g, ''))
    .pipe(z.string().regex(/^\+?[0-9]{10,15}$/, 'Enter a valid phone number, e.g. 0712 345 678')),
  email: z.string().trim().email('Enter a valid email address'),
})

type FormInput = z.input<typeof schema>
type FormData = z.output<typeof schema>

const fields: { name: keyof FormInput; label: string; placeholder: string; type?: string; autoComplete: string }[] = [
  { name: 'firstName', label: 'First name', placeholder: 'Jane', autoComplete: 'given-name' },
  { name: 'lastName', label: 'Last name', placeholder: 'Mwangi', autoComplete: 'family-name' },
  { name: 'companyName', label: 'Company', placeholder: 'Mwangi Properties Ltd', autoComplete: 'organization' },
  { name: 'phone', label: 'Phone', placeholder: '0712 345 678', type: 'tel', autoComplete: 'tel' },
  { name: 'email', label: 'Email', placeholder: 'jane@mwangiproperties.co.ke', type: 'email', autoComplete: 'email' },
]

export default function SignUpForm() {
  const [submittedName, setSubmittedName] = useState('')
  const [serverError, setServerError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput, unknown, FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setServerError('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setServerError(body.error || 'Something went wrong. Please try again.')
        return
      }
      setSubmittedName(data.firstName)
      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
      gtag?.('event', 'sign_up_form_submit', { event_category: 'engagement' })
    } catch {
      setServerError('Network error. Please check your connection and try again.')
    }
  }

  const field = (f: (typeof fields)[number]) => {
    const error = errors[f.name]?.message
    return (
      <div key={f.name} className="flex min-w-0 flex-1 flex-col gap-3">
        <Label htmlFor={f.name}>{f.label}</Label>
        <Input
          id={f.name}
          type={f.type ?? 'text'}
          placeholder={f.placeholder}
          className="placeholder:text-muted-foreground/50"
          autoComplete={f.autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? `${f.name}-error` : undefined}
          {...register(f.name)}
        />
        {error && (
          <p id={`${f.name}-error`} className="text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    )
  }

  return (
    <Card id="contact" className="min-w-80 max-w-lg flex-1 scroll-mt-4">
      {submittedName ? (
        <CardContent className="flex flex-col items-center gap-3 py-8 text-center" role="status">
          <CheckCircle className="size-12 text-primary" />
          <CardTitle>Thanks, {submittedName}.</CardTitle>
          <CardDescription>Expect a call from our team within one business day.</CardDescription>
        </CardContent>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
          <CardHeader>
            <CardTitle>Let’s talk about your properties</CardTitle>
            <CardDescription>Tell us a little about your portfolio. We’ll call you within one business day.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex gap-4">{fields.slice(0, 2).map(field)}</div>
            {fields.slice(2).map(field)}
            <Muted>No commitment · Your details stay private · Built to Kenya Data Protection Act standards</Muted>
            {serverError && (
              <p className="text-sm text-destructive" role="alert">
                {serverError}
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              <span className="flex-1 text-center">Request a call</span>
              {isSubmitting ? <Loader2 className="animate-spin" /> : <ArrowRight />}
            </Button>
          </CardFooter>
        </form>
      )}
    </Card>
  )
}
