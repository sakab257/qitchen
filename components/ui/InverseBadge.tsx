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
    const W = size.w + r
    const H = size.h + r

    return (
        <div className={className}>
            {size.w > 0 && (
                <svg
                    className="absolute pointer-events-none fill-bg"
                    width={W}
                    height={H}
                    viewBox={`0 0 ${W} ${H}`}
                    style={{ bottom: 0, right: 0 }}
                >
                    {/* Bottom-left inverse corner */}
                    <path d={`M${r} ${H - r}C${r} ${H - r + k} ${k} ${H} 0 ${H}V${H}H${r + 20}V${H - r - 5}H${r}Z`} />
                    {/* Top-right inverse corner */}
                    <path d={`M${W - r} ${r}C${W - r + k} ${r} ${W} ${k} ${W} 0H${W}V${r + 20}H${W - r - 5}V${r}Z`} />
                    {/* Main shape: rounded top-left + bottom-right, sharp top-right + bottom-left */}
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
