"use client"

import { useEffect, useRef } from "react"

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      dx: number
      dy: number
      size: number
    }> = []

    // Create particles
    const createParticles = () => {
      const particleCount = 100 // Increased particle count
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.7, // Increased speed
          dy: (Math.random() - 0.5) * 0.7, // Increased speed
          size: Math.random() * 3 + 1, // Larger particles
        })
      }
    }
    createParticles()

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.dx
        particle.y += particle.dy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(66, 153, 225, 0.3)" // More visible blue color
        ctx.fill()

        // Draw connections
        particles.forEach((particle2, j) => {
          if (i === j) return
          const dx = particle.x - particle2.x
          const dy = particle.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            // Increased connection distance
            ctx.beginPath()
            ctx.strokeStyle = `rgba(66, 153, 225, ${0.2 * (1 - distance / 150)})` // More visible connections
            ctx.lineWidth = 0.8 // Thicker lines
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-80" // Increased opacity
    />
  )
}

