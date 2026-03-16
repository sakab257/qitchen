interface DividerProps {
    className?: string
    lineWidth?: number
    diamondSize?: number
}

const Divider = ({ className = "", lineWidth = 88, diamondSize = 8 }: DividerProps) => {
    const half = diamondSize / 2
    const gap = half + 2
    const totalWidth = diamondSize + gap + lineWidth + gap + diamondSize
    const totalHeight = diamondSize + 4
    const cy = totalHeight / 2

    return (
        <svg width={totalWidth} height={totalHeight} viewBox={`-2 -2 ${totalWidth + 4} ${totalHeight + 4}`} className={`text-cream/30 ${className}`}>
            <rect x={0} y={cy - half} width={diamondSize} height={diamondSize} rx={1.5} transform={`rotate(45 ${half} ${cy})`} fill="none" stroke="currentColor" strokeWidth={1} />
            <line x1={diamondSize + gap} y1={cy} x2={diamondSize + gap + lineWidth} y2={cy} stroke="currentColor" strokeWidth={1} />
            <rect x={diamondSize + gap + lineWidth + gap} y={cy - half} width={diamondSize} height={diamondSize} rx={1.5} transform={`rotate(45 ${diamondSize + gap + lineWidth + gap + half} ${cy})`} fill="none" stroke="currentColor" strokeWidth={1} />
        </svg>
    )
}

export default Divider
