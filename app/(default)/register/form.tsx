"use client"

import { useState } from "react"
import Link from "next/link"
import Email from "@emailjs/browser"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { useForm } from "@mantine/form"
import { IMaskInput } from "react-imask"
import { Button } from "@/components/ui/button"

const EMAILJS_SERVICE_ID = "service_t2oc63w" as const
const EMAILJS_TEMPLATE_ID = "template_o00uvd5" as const
const EMAILJS_PUBLIC_API_KEY = "cAm4_BslKf4HuNSII" as const

export default function Form() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const [completed, setCompleted] = useState(false)
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      source: "Google",
      message: "",
    },
    validate: {
      firstName: (value) =>
        value.trim().length < 2 ? "Name must be at least 2 characters" : null,
      lastName: (value) =>
        value.trim().length < 2 ? "Name must be at least 2 characters" : null,
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  })

  if (completed) {
    return (
      <div>
        <div>
          {
            "Thanks! You're all set. You will receive an email from us within 24 hours."
          }
        </div>
        <Link
          className="btn-sm group mt-4 w-full bg-blue-600 text-sm text-white hover:bg-blue-700"
          href="/"
        >
          Return Home
        </Link>
      </div>
    )
  }

  if (error) {
    return (
      <div
        className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
        role="alert"
      >
        <div className="font-bold">Something unexpected happened!</div>
        <div className="mt-2">Try refreshing the page.</div>
      </div>
    )
  }

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        try {
          setLoading(true)
          setError(undefined)
          await Email.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            values,
            EMAILJS_PUBLIC_API_KEY
          )
          setCompleted(true)
        } catch (err) {
          if (err instanceof Error) {
            setError(err)
          }
        } finally {
          setLoading(false)
        }
      })}
    >
      <div className="space-y-4">
        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <div className="sm:w-1/2">
            <label
              className="mb-1 block text-sm font-medium text-slate-600"
              htmlFor="first-name"
            >
              First Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="first-name"
              className="form-input w-full py-2 text-sm"
              type="text"
              disabled={loading}
              required
              {...form.getInputProps("firstName")}
            />
            {form.errors.firstName && (
              <div className="mt-2 text-xs text-red-500">
                {form.errors.firstName}
              </div>
            )}
          </div>
          <div className="sm:w-1/2">
            <label
              className="mb-1 block text-sm font-medium text-slate-600"
              htmlFor="last-name"
            >
              Last Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="last-name"
              className="form-input w-full py-2 text-sm"
              type="text"
              disabled={loading}
              required
              {...form.getInputProps("lastName")}
            />
            {form.errors.lastName && (
              <div className="mt-2 text-xs text-red-500">
                {form.errors.lastName}
              </div>
            )}
          </div>
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-slate-600"
            htmlFor="email"
          >
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            className="form-input w-full py-2 text-sm"
            type="email"
            disabled={loading}
            required
            {...form.getInputProps("email")}
          />
          {form.errors.email && (
            <div className="mt-2 text-xs text-red-500">{form.errors.email}</div>
          )}
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-slate-600"
            htmlFor="phone"
          >
            Phone <span className="text-rose-500">*</span>
          </label>
          <IMaskInput
            id="phone"
            className="form-input w-full py-2 text-sm"
            mask="+1 (000) 000-0000"
            radix="."
            disabled={loading}
            {...form.getInputProps("phone")}
            onAccept={form.getInputProps("phone").onChange}
          />
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-slate-600"
            htmlFor="referrer"
          >
            How did you hear about us? <span className="text-rose-500">*</span>
          </label>
          <select
            id="referrer"
            className="form-select w-full py-2"
            disabled={loading}
            required
            {...form.getInputProps("source")}
          >
            <option>Google</option>
            <option>Facebook</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-slate-600"
            htmlFor="message"
          >
            What can we help you with?
          </label>
          <textarea
            id="message"
            className="form-textarea w-full py-2 text-sm"
            disabled={loading}
            rows={2}
            {...form.getInputProps("message")}
          />
        </div>
      </div>
      <div className="mt-2">
        <Button
          type="submit"
          className="btn-sm group w-full bg-blue-500 text-sm text-white hover:bg-blue-600 disabled:opacity-50"
          disabled={loading}
        >
          Sign Up
          <ArrowRightIcon className="ml-1 h-3 stroke-2 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
        </Button>
      </div>
    </form>
  )
}
