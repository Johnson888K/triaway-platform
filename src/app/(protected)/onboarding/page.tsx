"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Logo"

export default function OnboardingPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCompleteOnboarding = async () => {
    setLoading(true)
    // Here you would typically save onboarding data to Supabase
    // For now, just redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <Logo className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-2">Welcome to TriaWay!</h1>
          <p className="text-zinc-400">Let&apos;s set up your profile to help you find your people.</p>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6">Complete Your Profile</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                What&apos;s your primary focus? (Optional)
              </label>
              <textarea
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="Tell us about your interests, skills, or current projects..."
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                What are you looking for? (Optional)
              </label>
              <textarea
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="Collaboration opportunities, specific skills, projects to join..."
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Preferred collaboration style
              </label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30">
                <option value="">Select your style</option>
                <option value="thinker">Thinker - I like to explore ideas and concepts</option>
                <option value="builder">Builder - I prefer hands-on creation and execution</option>
                <option value="steward">Steward - I focus on maintaining and improving existing work</option>
                <option value="mixed">Mixed - I enjoy all aspects of the process</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => router.push('/dashboard')}
            >
              Skip for now
            </Button>
            <Button
              onClick={handleCompleteOnboarding}
              disabled={loading}
            >
              {loading ? "Setting up..." : "Complete Setup"}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
