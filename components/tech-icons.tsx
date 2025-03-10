"use client"

import { useState, useEffect } from "react"
import { Brain, Database, Server, Code, Cloud, Bot } from "lucide-react"

export const TechIcons = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const icons = [
    { icon: Brain, label: "AI & Deep Learning" },
    { icon: Database, label: "Data Engineering" },
    { icon: Server, label: "Cloud Computing" },
    { icon: Code, label: "Machine Learning" },
    { icon: Cloud, label: "Big Data" },
    { icon: Bot, label: "NLP" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [icons.length])

  return (
    <div className="flex flex-wrap justify-center gap-6 my-8">
      {icons.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={item.label}
            className={`transition-all duration-500 transform ${
              index === activeIndex ? "scale-125" : "scale-100 opacity-70"
            }`}
          >
            <div className="flex flex-col items-center p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 shadow-md border border-gray-200 dark:border-gray-700">
              <Icon className="h-8 w-8 text-primary mb-2" />
              <p className="font-medium text-sm">{item.label}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

