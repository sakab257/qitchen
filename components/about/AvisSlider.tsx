"use client"

import { useRef, useCallback, useEffect, useState } from "react"
import { Star } from "lucide-react"
import { avis } from "@/lib/data"

const AvisSlider = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const isPaused = useRef(false)
    const exactScrollX = useRef(0)
    const [isDragging, setIsDragging] = useState(false)
    const dragStart = useRef({ x: 0, scrollLeft: 0 })

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let animId: number
        exactScrollX.current = container.scrollLeft

        const tick = () => {
            if (!isPaused.current && container) {
                exactScrollX.current += 0.4

                const halfScroll = container.scrollWidth / 2

                if (exactScrollX.current >= halfScroll) {
                    exactScrollX.current -= halfScroll
                } else if (exactScrollX.current < 0) {
                    exactScrollX.current += halfScroll
                }

                container.scrollLeft = exactScrollX.current
            }
            animId = requestAnimationFrame(tick)
        }

        animId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(animId)
    }, [])

    const onPointerDown = useCallback((e: React.PointerEvent) => {
        const container = containerRef.current
        if (!container) return

        isPaused.current = true
        setIsDragging(true)
        dragStart.current = { x: e.clientX, scrollLeft: container.scrollLeft }
        container.setPointerCapture(e.pointerId)
    }, [])

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        if (!isDragging || !containerRef.current) return

        const dx = e.clientX - dragStart.current.x
        const newScrollLeft = dragStart.current.scrollLeft - dx

        containerRef.current.scrollLeft = newScrollLeft
        exactScrollX.current = newScrollLeft
    }, [isDragging])

    const onPointerUp = useCallback(() => {
        setIsDragging(false)
        isPaused.current = false
    }, [])

    const items = [...avis, ...avis]

    return (
        <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => { isPaused.current = true }}
            onMouseLeave={() => { if (!isDragging) isPaused.current = false }}
        >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-bg to-transparent z-10 pointer-events-none" />

            <div
                ref={containerRef}
                className={`flex overflow-x-hidden select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
            >
                {items.map((a, i) => (
                    <div
                        key={i}
                        className="shrink-0 w-64 md:w-72 mx-2 flex flex-col items-center justify-center gap-2 border border-border rounded-2xl p-4 lg:p-5"
                    >
                        <div className="flex gap-1">
                            {[...Array(a.rating)].map((_, j) => (
                                <Star key={j} className="w-2.5 h-2.5 fill-gold text-gold" />
                            ))}
                        </div>
                        <p className="text-cream/60 text-[11px] lg:text-xs font-satoshi leading-relaxed text-center italic">
                            &ldquo;{a.text}&rdquo;
                        </p>
                        <span className="text-cream text-[10px] font-satoshi uppercase tracking-widest">
                            {a.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AvisSlider
