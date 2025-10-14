"use client"

import { useAuth } from "@/components/auth/AuthProvider"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"
import Dashboard from "@/components/dashboard/Dashboard"
import LandingPage from "@/components/landing/LandingPage"

export default function Home() {
  const { user, loading } = useAuth()
  // const router = useRouter()

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-zinc-400">Loading TriaWay...</p>
        </div>
      </div>
    )
  }

  // If user is authenticated, show dashboard
  if (user) {
    return <Dashboard />
  }

  // If not authenticated, show landing page
  return <LandingPage />
}