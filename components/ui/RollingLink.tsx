"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface RollingLinkProps {
    href: string
    label: string
    className?: string
    hoverClassName?: string
    onClick?: () => void
}

const RollingLink = ({ href, label, className = "", hoverClassName = "text-gold", onClick }: RollingLinkProps) => {
    const [hovered, setHovered] = useState(false)
    return (
        <Link
            href={href}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`block overflow-hidden relative ${className}`}
        >
            <motion.div
                animate={{ y: hovered ? "-100%" : "0%" }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            >
                <span className="block leading-none">{label}</span>
                <span className={`block absolute left-0 top-full leading-none ${hoverClassName}`} aria-hidden>{label}</span>
            </motion.div>
        </Link>
    )
}

export default RollingLink
