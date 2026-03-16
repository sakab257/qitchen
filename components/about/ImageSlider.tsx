"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ImageSlider = ({ images, interval = 4000 }: { images: string[]; interval?: number }) => {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(1)

    const next = useCallback(() => {
        setDirection(1)
        setCurrent((prev) => (prev + 1) % images.length)
    }, [images.length])

    const prev = useCallback(() => {
        setDirection(-1)
        setCurrent((prev) => (prev - 1 + images.length) % images.length)
    }, [images.length])

    useEffect(() => {
        const timer = setInterval(next, interval)
        return () => clearInterval(timer)
    }, [next, interval])

    const btnClass = "absolute top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-bg/60 backdrop-blur-sm border border-cream/20 rounded-full text-cream cursor-pointer hover:bg-bg/80 transition-colors"

    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden group">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[current]}
                        alt={`Slide ${current + 1}`}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <button onClick={prev} className={`${btnClass} left-3`} aria-label="Image précédente">
                <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className={`${btnClass} right-3`} aria-label="Image suivante">
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    )
}

export default ImageSlider
