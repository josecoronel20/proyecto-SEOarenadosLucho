"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BeforeAfterProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  className?: string
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50)
  const [isDragging, setIsDragging] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const updateSliderPosition = React.useCallback(
    (clientX: number) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = (x / rect.width) * 100
      setSliderPosition(Math.max(0, Math.min(100, percentage)))
    },
    []
  )

  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return
      updateSliderPosition(e.clientX)
    },
    [isDragging, updateSliderPosition]
  )

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchMove = React.useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
      updateSliderPosition(e.touches[0].clientX)
    },
    [isDragging, updateSliderPosition]
  )

  const handleTouchEnd = React.useCallback(() => {
    setIsDragging(false)
  }, [])

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        document.removeEventListener("touchmove", handleTouchMove)
        document.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg select-none",
        className
      )}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          draggable={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          quality={75}
        />
      </div>

      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          draggable={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          quality={75}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
          onMouseDown={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onTouchStart={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
        >
          <div className="flex space-x-0.5">
            <div className="w-0.5 h-3 bg-gray-400"></div>
            <div className="w-0.5 h-3 bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
        Antes
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
        Después
      </div>
    </div>
  )
}
