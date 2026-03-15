"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { FeatureCardData } from "@/lib/types"

const MotionLink = motion.create(Link)

interface SideCardProps extends FeatureCardData {
    index?: number
}

const SideCard = ({ title, href, image, index = 0 }: SideCardProps) => {
    const [hovered, setHovered] = useState(false)

    return (
        <MotionLink
            href={href}
            className="group w-full md:w-1/3 xl:w-full min-h-62.5 md:min-h-75 xl:min-h-0 xl:h-1/3 rounded-2xl relative overflow-hidden block active:scale-96 active:transition-transform"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + index * 0.15 }}
        >
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

            {/* Badge avec arrondis inversés */}
            <div className="absolute bottom-0 right-0 bg-bg p-2.5 pl-4 pt-4 rounded-tl-3xl">
                {/* Arrondi inversé HAUT */}
                <svg
                    className="absolute -top-6 right-0 w-6 h-6 fill-bg pointer-events-none"
                    viewBox="0 0 40 40"
                >
                    <path d="M40 0L40 40L0 40A40 40 0 0 0 40 0Z" />
                </svg>

                {/* Arrondi inversé GAUCHE */}
                <svg
                    className="absolute bottom-0 -left-6 w-6 h-6 fill-bg pointer-events-none"
                    viewBox="0 0 40 40"
                >
                    <path d="M40 0L40 40L0 40A40 40 0 0 0 40 0Z" />
                </svg>

                <div className="flex items-center gap-1.5">
                    {/* Titre — roulement Y */}
                    <div className="overflow-hidden relative h-[1.2em]">
                        <motion.div
                            animate={{ y: hovered ? "-100%" : "0%" }}
                            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                        >
                            <h2 className="font-forum text-cream text-sm uppercase tracking-wide">
                                {title}
                            </h2>
                            <h2 className="font-forum text-cream text-sm uppercase tracking-wide absolute left-0 top-full" aria-hidden>
                                {title}
                            </h2>
                        </motion.div>
                    </div>

                    {/* Flèche — roulement X */}
                    <div className="overflow-hidden relative w-3.5 h-3.5">
                        <motion.div
                            className="flex"
                            animate={{ x: hovered ? "-100%" : "0%" }}
                            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                        >
                            <ArrowRight className="w-3.5 h-3.5 text-cream shrink-0" />
                            <ArrowRight className="w-3.5 h-3.5 text-cream shrink-0" aria-hidden />
                        </motion.div>
                    </div>
                </div>
            </div>
        </MotionLink>
    );
};

export default SideCard;
