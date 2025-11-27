"use client"

import { useEffect, useRef, useState } from "react"

interface ShowcaseItem {
  type: "image" | "video"
  src: string
  span?: string // Grid span classes
}

export function Showcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = sectionRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const allItems: ShowcaseItem[] = [
    // Row 1
    {
      type: "video",
      src: "https://framerusercontent.com/assets/EjxmZ2XPUCOqFJumyZ0M8ofWfUA.mp4",
      span: "col-span-2 md:col-span-3 lg:col-span-5 row-span-2",
    },
    {
      type: "image",
      src: "https://framerusercontent.com/images/PruQlxKuftAZHgOh7hJT3jaUbs.jpg?width=720&height=660",
      span: "col-span-2 md:col-span-3 lg:col-span-4 row-span-1",
    },
    {
      type: "image",
      src: "https://framerusercontent.com/images/Hp4KG1pwKb6cl66bNB9b2pYWQ3Y.jpg?width=480&height=987",
      span: "col-span-2 md:col-span-2 lg:col-span-3 row-span-2",
    },
    {
      type: "image",
      src: "https://framerusercontent.com/images/HnQI4uTAjbgziEmMMInd3R6o9c.jpg?width=720&height=600",
      span: "col-span-2 md:col-span-2 lg:col-span-4 row-span-1",
    },
    {
      type: "image",
      src: "https://framerusercontent.com/images/8VfS5zuMmDchIpaCf767I8rX7Y.jpg?width=480&height=1040",
      span: "col-span-2 md:col-span-2 lg:col-span-3 row-span-2",
    },

    // Row 2
    {
      type: "image",
      src: "https://framerusercontent.com/images/gmhdX4XPuJvQqId9jDmFHb7cFE.jpg?width=720&height=780",
      span: "col-span-2 md:col-span-3 lg:col-span-4 row-span-2",
    },
    {
      type: "video",
      src: "https://framerusercontent.com/assets/vkTXRpatm4bojSpTLqmk0YWz8.mp4",
      span: "col-span-2 md:col-span-2 lg:col-span-3 row-span-1",
    },
    {
      type: "video",
      src: "https://framerusercontent.com/assets/QfJEiLDoHB5b7C3TtRfG3xFqCog.mp4",
      span: "col-span-2 md:col-span-3 lg:col-span-5 row-span-2",
    },
    {
      type: "image",
      src: "https://framerusercontent.com/images/iR48olgey2UZQ9FFhsWFne27Ag.jpg?width=720&height=900",
      span: "col-span-2 md:col-span-2 lg:col-span-3 row-span-1",
    },
    {
      type: "image",
      src: "https://framerusercontent.com/images/KCk7nP2M4mP1QclNxHPIrT1FvcA.jpg?width=480&height=1040",
      span: "col-span-2 md:col-span-2 lg:col-span-4 row-span-2",
    },

    // Row 3
    {
      type: "video",
      src: "https://framerusercontent.com/assets/m8Z1Zg8JHiuWfp5GqAGZylPuYCQ.mp4",
      span: "col-span-2 md:col-span-2 lg:col-span-3 row-span-1",
    },
    {
      type: "video",
      src: "https://framerusercontent.com/assets/m8Z1Zg8JHiuWfp5GqAGZylPuYCQ.mp4",
      span: "col-span-2 md:col-span-3 lg:col-span-5 row-span-2",
    },
    {
      type: "video",
      src: "https://framerusercontent.com/assets/m8Z1Zg8JHiuWfp5GqAGZylPuYCQ.mp4",
      span: "col-span-2 md:col-span-2 lg:col-span-4 row-span-1",
    },
    {
      type: "video",
      src: "https://framerusercontent.com/assets/m8Z1Zg8JHiuWfp5GqAGZylPuYCQ.mp4",
      span: "col-span-2 md:col-span-3 lg:col-span-4 row-span-2",
    },
    {
      type: "image",
      src: "https://framerusercontent.com/images/6SXUv7jMAEkw8PabtmC6TXNIiM.jpg?width=480&height=1040",
      span: "col-span-2 md:col-span-2 lg:col-span-3 row-span-2",
    },
  ]

  return (
    <>
      <section ref={sectionRef} className="bg-black py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div
            className={`grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[200px] transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {allItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                className={`${item.span} overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer`}
              >
                {item.type === "video" ? (
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={`Showcase item ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-4 cursor-pointer"
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
          >
            ×
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
          >
            <div className="w-full h-full flex items-center justify-center">
              {selectedItem.type === "video" ? (
                <video autoPlay loop muted playsInline className="max-w-full max-h-full object-contain rounded-2xl">
                  <source src={selectedItem.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={selectedItem.src || "/placeholder.svg"}
                  alt="Selected showcase item"
                  className="max-w-full max-h-full object-contain rounded-2xl"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
