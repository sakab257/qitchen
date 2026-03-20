"use client"

import { useRef, useState, useEffect } from "react"

const InverseBadge = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [size, setSize] = useState({ w: 0, h: 0 })

    useEffect(() => {
        if (!contentRef.current) return
        const ro = new ResizeObserver(([entry]) => {
            setSize({
                w: Math.ceil(entry.contentRect.width),
                h: Math.ceil(entry.contentRect.height),
            })
        })
        ro.observe(contentRef.current)
        return () => ro.disconnect()
    }, [])

    const r = 14
    const k = r * 0.5523
    // Add 1px overflow to eliminate sub-pixel gaps
    const o = 1
    const W = size.w + r + o
    const H = size.h + r + o

    return (
        <div className={className}>
            {size.w > 0 && (
                <svg
                    className="absolute pointer-events-none fill-bg"
                    width={W}
                    height={H}
                    viewBox={`0 0 ${W} ${H}`}
                    style={{ bottom: -o, right: -o }}
                >
                    {/* Bottom-left inverse corner */}
                    <path d={`M${r} ${H - r - o}C${r} ${H - r - o + k} ${k} ${H - o} 0 ${H - o}V${H}H${r + 20}V${H - r - 5 - o}H${r}Z`} />
                    {/* Top-right inverse corner */}
                    <path d={`M${W - r - o} ${r}C${W - r - o + k} ${r} ${W - o} ${k} ${W - o} 0H${W}V${r + 20}H${W - r - 5 - o}V${r}Z`} />
                    {/* Main shape: rounded top-left, sharp others */}
                    <path d={`
                        M${r} ${r + 24}
                        Q${r} ${r} ${r + 24} ${r}
                        L${W} ${r}
                        L${W} ${H}
                        L${r} ${H}
                        Z
                    `} />
                </svg>
            )}
            <div ref={contentRef} className="relative">
                {children}
            </div>
        </div>
    )
}

export default InverseBadge
