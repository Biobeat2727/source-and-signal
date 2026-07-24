'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData(initialForm)
        setSubmitStatus('success')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses =
    'w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-white placeholder-gray-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500'

  return (
    <form className="relative rounded-xl border border-gray-800 bg-gray-900/50 p-8" onSubmit={handleSubmit}>
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
          What do you need?
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
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <div aria-live="polite">
        {submitStatus === 'success' && (
          <p className="mt-4 rounded-lg border border-green-500/50 bg-green-500/20 p-4 text-center text-sm text-green-300">
            Message sent. I&apos;ll get back to you within one business day.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 rounded-lg border border-red-500/50 bg-red-500/20 p-4 text-center text-sm text-red-300">
            Something went wrong. Please email me directly at davey@sourceandsignal.dev.
          </p>
        )}
      </div>
    </form>
  )
}
