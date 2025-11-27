"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Build better sites, faster"

  useEffect(() => {
    let currentIndex = 0
    let isDeleting = false

    const interval = setInterval(
      () => {
        if (!isDeleting && currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex))
          currentIndex++
        } else if (!isDeleting && currentIndex > fullText.length) {
          setTimeout(() => {
            isDeleting = true
          }, 2000)
        } else if (isDeleting && currentIndex > 0) {
          currentIndex--
          setText(fullText.slice(0, currentIndex))
        } else if (isDeleting && currentIndex === 0) {
          isDeleting = false
        }
      },
      isDeleting ? 30 : 50,
    )

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 md:pt-32">
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center sm:min-h-[80vh]">
        <div className="mb-4 animate-pulse sm:mb-6">
          <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
            6 days ago: Font Drop 16
          </div>
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {text}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="mt-4 max-w-3xl px-4 text-pretty text-base leading-relaxed text-white/60 sm:mt-6 sm:text-lg md:text-xl">
          Framer is the site builder trusted by startups to Fortune 500. Build fast and scale with an integrated CMS,
          SEO, Analytics, and more.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 px-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
          <Button size="lg" className="w-full bg-white text-base text-black hover:bg-white/90 sm:w-auto">
            Start for free
          </Button>
          <Button
            size="lg"
            className="w-full border-white/20 bg-black text-base text-white hover:bg-white/10 sm:w-auto"
          >
            Start with AI
          </Button>
        </div>
      </div>
    </main>
  )
}
