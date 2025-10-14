"use client"

import { useState, useRef } from "react"
// import { useRouter } from "next/navigation"
import Link from "next/link"
// import { useAuth } from "@/components/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Logo"
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<TurnstileInstance | null>(null)
  
  // const { signUp } = useAuth()
  // const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setMessage(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    if (!turnstileToken) {
      setError("Please complete the security verification")
      return
    }

    setLoading(true)

    // const { error } = await signUp(email, password)
    const error = new Error("Authentication temporarily disabled for debugging")
    
    if (error) {
      setError(error.message)
    } else {
      setMessage("Success! Please check your email and click the confirmation link to activate your account and complete onboarding.")
    }
    
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <Logo className="h-12 w-12 mx-auto" />
          </Link>
          <h1 className="text-2xl font-bold mb-2">Join TriaWay</h1>
          <p className="text-zinc-400">Find your people and build what matters</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex justify-center">
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={setTurnstileToken}
              onError={() => setTurnstileToken(null)}
              onExpire={() => setTurnstileToken(null)}
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center" role="alert">
              {error}
            </div>
          )}

          {message && (
            <div className="text-green-400 text-sm text-center" role="alert">
              {message}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black hover:bg-zinc-200"
          >
            {loading ? "Creating account..." : "Create Account"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-zinc-400">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-white hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
