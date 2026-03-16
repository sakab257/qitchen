"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Leaf } from "lucide-react"
import { type MenuItemData } from "@/lib/types"

const MenuItem = ({ item, index }: { item: MenuItemData; index: number }) => {
    return (
        <motion.div
            className="flex gap-4 items-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
        >
            <div className="w-24 h-18 md:w-28 md:h-20 rounded-lg overflow-hidden shrink-0 relative">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                    <h3 className="font-forum text-cream uppercase text-[11px] md:text-lg tracking-wide whitespace-nowrap">
                        {item.name}
                    </h3>
                    {item.dietary === "vegetarian" && (
                        <Leaf className="w-3.5 h-3.5 text-gold/60 shrink-0" />
                    )}
                    <div className="flex-1 border-b border-dotted border-cream/20 -translate-y-1 min-w-4" />
                    <span className="font-forum text-cream text-base md:text-lg shrink-0">
                        {item.price}
                    </span>
                </div>
                <p className="text-cream/50 text-xs md:text-sm font-satoshi mt-1 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </motion.div>
    )
}

export default MenuItem
