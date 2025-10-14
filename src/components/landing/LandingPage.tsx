"use client"

import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="bg-black text-zinc-100 selection:bg-white/20">
      <Header />
      <Hero />
      <Mission />
      <Features />
      <Connections />
      <HowItWorks />
      <WaitlistCTA />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#home" aria-label="TriaWay Home">
          <Logo className="h-8 w-8" />
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-zinc-300">
          <Link href="#mission" className="hover:text-white">Mission</Link>
          <Link href="#features" className="hover:text-white">Features</Link>
          <Link href="#connections" className="hover:text-white">Connections</Link>
          <Link href="#how" className="hover:text-white">How It Works</Link>
        </nav>
        <Link href="/auth/signin">
          <Button variant="outline" className="bg-white text-black hover:bg-zinc-200">
            Sign In
          </Button>
        </Link>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 text-center relative">
      <div className="flex justify-center mb-8">
        <Logo className="h-24 w-24" />
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
        Find your people. Align
        <br />
        purpose. Build what matters.
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400">
        TRIAWAY matches thinkers, builders, and stewards through resonance — not clout.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/auth/signup">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
            Join TriaWay
          </Button>
        </Link>
        <Link href="#features">
          <Button variant="outline" size="lg">
            Explore Features
          </Button>
        </Link>
      </div>
    </section>
  )
}

function Mission() {
  const pillars = [
    { title: "Resonance", text: "Match on values, intent, and real contributions — not vanity metrics." },
    { title: "Interdependence", text: "Design for collaboration across disciplines, cultures, and incentives." },
    { title: "Conscience", text: "A trust-first architecture where dignity, memory, and outcomes matter." }
  ]
  
  return (
    <section id="mission" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-2">The TriaWay</h2>
        <p className="text-zinc-400 mb-10">Three pillars guide everything we build.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="p-6 bg-zinc-900 border border-white/10 rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-zinc-400">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    { title: "Resonant Matching", text: "Multi-vector matching that considers clarity, originality, ethics, and usefulness." },
    { title: "Purpose Graph", text: "A living map of problems, projects, and skills that routes talent to real-world value." },
    { title: "Trust Profiles", text: "Proof anchored in work — transparent history, not performative resumes." },
    { title: "AI Co-Navigation", text: "Context-aware assistants help teams converge without erasing human judgment." },
    { title: "Signal over Noise", text: "Algorithms privilege depth and civility over outrage." },
    { title: "Portable Reputation", text: "Own your contributions and take them with you." }
  ]
  
  return (
    <section id="features" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-2">Features</h2>
        <p className="text-zinc-400 mb-10 max-w-3xl">
          Everything you need to find aligned collaborators and move from idea to impact.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((f) => (
            <div key={f.title} className="p-6 bg-zinc-900 border border-white/10 rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-zinc-400">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Connections() {
  return (
    <section id="connections" className="py-20 border-t border-white/10 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Deep and Meaningful Connections</h2>
        <p className="text-zinc-400 text-lg">
          TriaWay is more than matching skills — it&apos;s about forging genuine, long-lasting relationships. 
          We believe innovation and resilience emerge when people connect deeply on shared values, 
          diverse perspectives, and collective purpose.
        </p>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { step: "1", title: "Join", text: "Answer three prompts about your past, present, and becoming." },
    { step: "2", title: "Contribute", text: "Share an idea or artifact. The system evaluates clarity and usefulness." },
    { step: "3", title: "Resonate", text: "Meet people whose vectors complement yours. Form a circle, not a queue." },
    { step: "4", title: "Build", text: "Spin up a working space with lightweight governance." }
  ]
  
  return (
    <section id="how" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-2">How It Works</h2>
        <p className="text-zinc-400 mb-10">From first signal to shipped outcome in four steps.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="p-6 bg-zinc-900 border border-white/10 rounded-2xl">
              <div className="text-sm text-zinc-400 mb-2">Step {s.step}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-zinc-400">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WaitlistCTA() {
  return (
    <section id="waitlist" className="py-20 border-t border-white/10 text-center">
      <h2 className="text-3xl font-semibold mb-4">Ready to find your people?</h2>
      <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
        Join the community of thinkers, builders, and stewards who are creating meaningful change.
      </p>
      <Link href="/auth/signup">
        <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
          Get Started Now
        </Button>
      </Link>
      <p className="mt-4 text-xs text-zinc-500">
        Free to join. No spam. Just meaningful connections.
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Logo className="h-6 w-6" />
          <span className="text-sm text-zinc-400">© 2025 TriaWay. Built with care for people and planet.</span>
        </div>
        <a href="mailto:triaway.earth@gmail.com" className="hover:text-white text-sm">
          Contact
        </a>
      </div>
    </footer>
  )
}
