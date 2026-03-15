"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Minus } from "lucide-react"
import Link from "next/link"
import { mobileNavLinks, navLinks } from "@/lib/data"

const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(false)
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 810px)")
        setIsDesktop(mq.matches)
        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
        mq.addEventListener("change", handler)
        return () => mq.removeEventListener("change", handler)
    }, [])
    return isDesktop
}

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isDesktop = useIsDesktop()

    const springConfig = { type: "spring" as const, stiffness: 400, damping: 25 }

    return (
        <>
            {/* BOUTON OPEN */}
            <motion.button
                onClick={() => setIsOpen(true)}
                initial="initial"
                whileHover={isDesktop ? "hover" : undefined}
                whileTap={isDesktop ? "pressed" : undefined}
                className="relative w-10 h-10 flex items-center hover:bg-card justify-center text-cream cursor-pointer border border-cream/30 rounded-md"
                aria-label="Ouvrir le menu"
            >
                {isDesktop ? (
                    <>
                        <motion.div
                            variants={{
                                initial: { scaleY: 1, opacity: 1 },
                                hover: { scaleY: 0, opacity: 0 },
                                pressed: { scaleY: 0, opacity: 0 }
                            }}
                            transition={springConfig}
                        >
                            <Menu className="w-6 h-6" />
                        </motion.div>
                        <motion.div
                            className="absolute"
                            variants={{
                                initial: { scaleX: 0, scaleY: 0, opacity: 0 },
                                hover: { scaleX: 1.2, scaleY: 1, opacity: 1 },
                                pressed: { scaleX: 1.6, scaleY: 0.7, opacity: 1 }
                            }}
                            transition={springConfig}
                        >
                            <Minus className="w-6 h-6 text-gold" />
                        </motion.div>
                    </>
                ) : (
                    <Menu className="w-6 h-6" />
                )}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-100 bg-bg flex flex-col items-center justify-center m-4 border border-cream/20 rounded-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* BOUTON CLOSE */}
                        <motion.button
                            onClick={() => setIsOpen(false)}
                            initial="initial"
                            whileHover={isDesktop ? "hover" : undefined}
                            whileTap={isDesktop ? "pressed" : undefined}
                            className="absolute top-8 left-8 w-11 h-11 flex items-center justify-center text-cream cursor-pointer"
                            aria-label="Fermer le menu"
                        >
                            {isDesktop ? (
                                <>
                                    <motion.div
                                        variants={{
                                            initial: { scale: 1, rotate: 0, opacity: 1 },
                                            hover: { scaleY: 0.2, rotate: 90, opacity: 0 },
                                            pressed: { scaleY: 0, rotate: 90, opacity: 0 }
                                        }}
                                        transition={springConfig}
                                    >
                                        <X className="w-7 h-7" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute"
                                        variants={{
                                            initial: { scaleX: 0, opacity: 0, rotate: -45 },
                                            hover: { scaleX: 1.3, scaleY: 1, opacity: 1, rotate: 0 },
                                            pressed: { scaleX: 1.7, scaleY: 0.7, opacity: 1, rotate: 0 }
                                        }}
                                        transition={springConfig}
                                    >
                                        <Minus className="w-7 h-7 text-gold" />
                                    </motion.div>
                                </>
                            ) : (
                                <X className="w-7 h-7" />
                            )}
                        </motion.button>

                        <nav className="flex flex-col items-center gap-8">
                            {mobileNavLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: 0.2 + i * 0.1,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-forum text-cream uppercase text-5xl md:text-7xl tracking-wide hover:text-gold transition-colors block"
                                    >
                                        {link.label}
                                    </Link>
                                
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default MobileMenu
