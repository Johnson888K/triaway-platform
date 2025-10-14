"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
// import { useAuth } from "@/components/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Logo"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // const { signIn } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // const { error } = await signIn(email, password)
    const error = new Error("Authentication temporarily disabled for debugging")
    
    if (error) {
      setError(error.message)
    } else {
      router.push("/")
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
          <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
          <p className="text-zinc-400">Sign in to your TriaWay account</p>
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
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center" role="alert">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black hover:bg-zinc-200"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="text-white hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
