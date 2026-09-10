'use client'

import { useEffect, useRef, useState } from 'react'
import { Send } from 'lucide-react'

const CONTACT_EMAIL = 'davey@sourceandsignal.dev'
const REQUEST_TIMEOUT_MS = 15000

const initialForm = {
  name: '',
  email: '',
  business: '',
  website: '',
  message: '',
  // Honeypot: real visitors never see or fill this field
  company_website: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const statusRef = useRef<HTMLDivElement>(null)

  // Move focus to the outcome so keyboard and screen-reader users hear it without hunting.
  useEffect(() => {
    if (submitStatus !== 'idle') statusRef.current?.focus()
  }, [submitStatus])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      if (response.ok) {
        setFormData(initialForm)
        setSubmitStatus('success')
        return
      }

      let detail = ''
      try {
        detail = String((await response.json())?.error ?? '')
      } catch {
        // Non-JSON error body; fall through to the generic message.
      }

      if (response.status === 400 && detail) {
        setErrorMessage(detail + '. Nothing has been sent yet.')
      } else if (response.status === 429) {
        setErrorMessage('Too many messages in a row. Give it a minute and try again, or email me directly.')
      } else {
        setErrorMessage('The form could not send. Email me directly and I will get back to you.')
      }
      setSubmitStatus('error')
    } catch (error) {
      const timedOut = error instanceof DOMException && error.name === 'AbortError'
      console.error('Error sending message:', error)
      setErrorMessage(
        timedOut
          ? 'That took too long, which usually means a slow connection. Your message is still here. Try again, or email me directly.'
          : 'Could not reach the server. Check your connection and try again, or email me directly.'
      )
      setSubmitStatus('error')
    } finally {
      clearTimeout(timer)
      setIsSubmitting(false)
    }
  }

  const inputClasses =
    'w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-white placeholder-gray-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'

  return (
    <form className="contact-form relative rounded-xl border border-gray-800 bg-gray-900/50 p-8" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="name" className="mb-2 block font-poppins text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={100}
          autoComplete="name"
          className={inputClasses}
          placeholder="Your name"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="mb-2 block font-poppins text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={200}
          autoComplete="email"
          className={inputClasses}
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="business"
          className="mb-2 block font-poppins text-sm font-medium text-gray-300"
        >
          Business name
        </label>
        <input
          type="text"
          id="business"
          name="business"
          value={formData.business}
          onChange={handleChange}
          required
          maxLength={150}
          autoComplete="organization"
          className={inputClasses}
          placeholder="Your business"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="website"
          className="mb-2 block font-poppins text-sm font-medium text-gray-300"
        >
          Current website <span className="text-gray-500">(optional)</span>
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          maxLength={200}
          autoComplete="url"
          className={inputClasses}
          placeholder="https://your-current-site.com"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="mb-2 block font-poppins text-sm font-medium text-gray-300"
        >
          What do you need help with?
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={5000}
          rows={6}
          className={`${inputClasses} resize-none`}
          placeholder="A few sentences about your business and what you want the website to do"
        ></textarea>
      </div>

      {/* Honeypot field for spam bots; hidden from real visitors */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          value={formData.company_website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-4 font-poppins font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send size={18} aria-hidden="true" />
        {isSubmitting ? 'Sending…' : 'Send message'}
      </button>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {submitStatus === 'success' && (
          <p className="mt-4 rounded-lg border border-green-500/50 bg-green-500/20 p-4 text-center text-sm text-green-300">
            Message sent. I&apos;ll get back to you within one business day.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 rounded-lg border border-red-500/50 bg-red-500/20 p-4 text-center text-sm text-red-300">
            {errorMessage}{' '}
            <a className="underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        )}
      </div>
    </form>
  )
}
