"use client"

import { useAuth } from "@/components/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Logo"
import Link from "next/link"
import { useState } from "react"

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const [activeTab, setActiveTab] = useState("discover")

  const tabs = [
    { id: "discover", label: "Discover", icon: "🔍" },
    { id: "matches", label: "Matches", icon: "💫" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "purpose-graph", label: "Purpose Graph", icon: "🕸️" },
    { id: "profile", label: "Profile", icon: "👤" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <span className="text-xl font-bold">TriaWay</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400">
              Welcome, {user?.email}
            </span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 border-r border-white/10 bg-zinc-900/50 min-h-screen">
          <div className="p-4">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-white text-black"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === "discover" && <DiscoverTab />}
          {activeTab === "matches" && <MatchesTab />}
          {activeTab === "projects" && <ProjectsTab />}
          {activeTab === "purpose-graph" && <PurposeGraphTab />}
          {activeTab === "profile" && <ProfileTab />}
        </main>
      </div>
    </div>
  )
}

function DiscoverTab() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Discover Your People</h1>
      <p className="text-zinc-400 mb-8">
        Find thinkers, builders, and stewards who resonate with your purpose and values.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl">
          <h3 className="text-lg font-semibold mb-2">Complete Your Profile</h3>
          <p className="text-zinc-400 mb-4">
            Share your story, skills, and values to get better matches.
          </p>
          <Button variant="outline">Complete Profile</Button>
        </div>
        
        <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl">
          <h3 className="text-lg font-semibold mb-2">Share a Contribution</h3>
          <p className="text-zinc-400 mb-4">
            Post an idea or artifact to showcase your thinking and building.
          </p>
          <Button variant="outline">Share Contribution</Button>
        </div>
      </div>
    </div>
  )
}

function MatchesTab() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Your Matches</h1>
      <p className="text-zinc-400 mb-8">
        People whose purpose and values align with yours.
      </p>
      
      <div className="text-center py-12">
        <div className="text-6xl mb-4">💫</div>
        <h3 className="text-xl font-semibold mb-2">No matches yet</h3>
        <p className="text-zinc-400">
          Complete your profile and share contributions to start finding your people.
        </p>
      </div>
    </div>
  )
}

function ProjectsTab() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Project Spaces</h1>
      <p className="text-zinc-400 mb-8">
        Collaborate with your matches on meaningful projects.
      </p>
      
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🚀</div>
        <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
        <p className="text-zinc-400 mb-6">
          Start a project or join one with your matches.
        </p>
        <Button>Create Project</Button>
      </div>
    </div>
  )
}

function PurposeGraphTab() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Purpose Graph</h1>
      <p className="text-zinc-400 mb-8">
        Explore the living map of problems, projects, and skills in the TriaWay ecosystem.
      </p>
      
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🕸️</div>
        <h3 className="text-xl font-semibold mb-2">Purpose Graph Coming Soon</h3>
        <p className="text-zinc-400">
          Visualize connections between problems, solutions, and people in real-time.
        </p>
      </div>
    </div>
  )
}

function ProfileTab() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <p className="text-zinc-400 mb-8">
        Tell your story and showcase your contributions.
      </p>
      
      <div className="space-y-6">
        <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4">Your Story</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Past Narrative</label>
              <textarea 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
                rows={3}
                placeholder="Where have you been? What has shaped your perspective?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Present Focus</label>
              <textarea 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
                rows={3}
                placeholder="What are you working on now? What drives you today?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Future Vision</label>
              <textarea 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
                rows={3}
                placeholder="What do you want to become? What impact do you seek?"
              />
            </div>
          </div>
          <Button className="mt-4">Save Profile</Button>
        </div>
      </div>
    </div>
  )
}
